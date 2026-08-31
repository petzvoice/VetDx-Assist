import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import type { AIClinicalReport } from "@/types/ai";

import {
  resolveDiseaseCard,
  normalizeDiseaseName,
  normalizeDiseaseSpecies,
} from "@/lib/knowledge-engine/search";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const PRIMARY_MODEL = "gemini-2.5-flash";

const FALLBACK_MODELS = [
  
  "gemini-3-flash-preview",
  "gemini-2.5-flash-lite",
  "gemini-3.5-flash-lite",
  "gemini-3.5-flash",
] as const;
/**
 * ============================================================
 * ALLOWED VALUES
 * ============================================================
 */

const ALLOWED_LIKELIHOODS = [
  "Very High",
  "High",
  "Moderate",
  "Low",
  "Very Low",
] as const;

const ALLOWED_PRIORITIES = [
  "Essential",
  "Recommended",
  "Optional",
] as const;

const ALLOWED_TRIAGE = [
  "Stable",
  "Urgent",
  "Emergency",
] as const;

type AllowedLikelihood =
  (typeof ALLOWED_LIKELIHOODS)[number];

type AllowedPriority =
  (typeof ALLOWED_PRIORITIES)[number];

type AllowedTriage =
  (typeof ALLOWED_TRIAGE)[number];

/**
 * ============================================================
 * PROMPT
 * ============================================================
 *
 * IMPORTANT ARCHITECTURE
 *
 * Gemini is completely independent of the VetDx Assist
 * disease-card database.
 *
 * Disease cards are attached ONLY after Gemini finishes
 * clinical reasoning.
 */

function buildPrompt(caseData: unknown): string {
  return `
You are VetDx Assist, an independent veterinary clinical
decision-support system.

Analyze ONLY the clinical case provided below.

==================================================
CORE ARCHITECTURE RULE
==================================================

You are completely independent of the VetDx Assist disease-card
database.

DO NOT search for, retrieve, rank, select, or depend on any
VetDx Assist disease card.

DO NOT assume that a disease must exist in the VetDx Assist
database.

DO NOT restrict your differentials to diseases present in the
VetDx Assist database.

Generate differentials entirely from veterinary clinical
reasoning.

The application will separately attempt to attach an existing
disease card AFTER your clinical assessment is complete.

A disease may be included as a differential even if VetDx Assist
does not currently have a disease card for it.

==================================================
1. CLINICAL REASONING
==================================================

Analyze ONLY documented information.

Do not invent:

- physical examination findings
- laboratory findings
- imaging findings
- ECG findings
- echocardiographic findings
- blood pressure findings
- respiratory distress
- hypoxemia
- hypotension
- shock
- dehydration
- fever
- organ dysfunction
- medication history
- previous diagnosis

If something is not documented, treat it as UNKNOWN.

Do not convert a differential into a confirmed diagnosis.

Use standard veterinary terminology.

Every differential must independently explain the documented
clinical syndrome.

Do not include unrelated diseases simply to reach a number.

==================================================
2. SPECIES SAFETY
==================================================

Identify the patient's species FIRST.

Every differential MUST biologically occur in that species.

Dog → canine diseases
Cat → feline diseases
Cattle → bovine diseases
Horse → equine diseases
Sheep → ovine diseases
Goat → caprine diseases

NEVER return a disease that belongs exclusively to another
species.

==================================================
3. DIFFERENTIAL DIAGNOSES
==================================================
IMPORTANT: Tick exposure is only a risk factor, not a diagnosis. Do not automatically rank Anaplasmosis because of tick exposure, fever, or thrombocytopenia. Rank tick-borne diseases using the complete clinical picture and consider Ehrlichiosis, Babesiosis, and other appropriate differentials when supported. Do not invent missing findings.
Generate UP TO 5 clinically justified differentials.

Return fewer if fewer are clinically justified.

Rank from most likely to least likely.

Prioritize:

1. Best explanation of the complete documented syndrome.
2. Common compatible diseases.
3. Important life-threatening rule-outs when justified.

Do not pad the list.

Do not intentionally repeat the same diagnosis.

Each differential must independently explain the documented
findings.

==================================================
DIAGNOSIS–REASONING CONSISTENCY
==================================================

The diagnosis name MUST match the disease discussed in its
reasoning.

The differential name must represent the actual disease,
condition, or intentionally considered complication.

Do not use a different disease in the reasoning.

==================================================
LIKELIHOOD
==================================================

Allowed values ONLY:

"Very High"
"High"
"Moderate"
"Low"
"Very Low"

Use "Very High" only when the documented evidence strongly
supports the diagnosis.

Do not assign "Very High" merely because a breed is predisposed.

==================================================
DIFFERENTIAL FIELDS
==================================================

Every differential MUST contain:

"name"
"category"
"likelihood"
"confidence"
"reasoning"
"supportingFindings"
"againstFindings"
"recommendedTests"
"initialTreatment"

IMPORTANT:

"confidence" must be a concise explanation of why the likelihood
was assigned.

"recommendedTests" must contain tests specifically useful for
that differential.

"initialTreatment" must NOT invent a treatment plan when the
diagnosis is unconfirmed.

If treatment is not appropriate before confirmation, state that
supportive/stabilization treatment should be guided by the
patient's documented status and further diagnostics.

==================================================
4. PROBLEM LIST
==================================================

List ONLY documented clinical problems.

Do NOT put unconfirmed diagnoses into the problem list.

==================================================
5. TRIAGE
==================================================

Allowed values ONLY:

"Stable"
"Urgent"
"Emergency"

Base triage ONLY on documented findings.

Do not invent physiological instability.

Potentially life-threatening documented signs may justify
Emergency.

Serious signs without documented immediate instability may
justify Urgent.

==================================================
6. DIAGNOSTICS
==================================================

Recommend only clinically justified diagnostics.

Prioritize the most useful tests.

Do not add tests merely to make the list longer.

Allowed priority values ONLY:

"Essential"
"Recommended"
"Optional"

Every diagnostic must contain:

"id"
"test"
"priority"
"reason"

==================================================
7. RED FLAGS
==================================================

List clinically relevant deterioration signs.

Do not use a generic emergency checklist.

Red flags must relate to the actual clinical syndrome.

==================================================
8. CLINICAL PEARLS
==================================================

Provide concise, case-specific clinical reasoning.

Do not provide unnecessary textbook information.

==================================================
9. PROGNOSIS
==================================================

Return:

"prognosis": {
  "shortTerm": "",
  "longTerm": ""
}

Both values MUST be non-empty strings.

If diagnosis is uncertain, prognosis must reflect that uncertainty.

==================================================
10. CLIENT SUMMARY
==================================================

Write a short client-friendly explanation based ONLY on
documented findings.

Do not introduce unsupported diagnoses as confirmed facts.

Use phrases such as:

"may be associated with"
"raises concern for"
"needs further evaluation"

when the diagnosis is not confirmed.

==================================================
REQUIRED JSON
==================================================

Return exactly this overall structure:

{
  "patientSummary": {
    "species": "",
    "breed": "",
    "age": "",
    "sex": "",
    "weight": "",
    "summary": ""
  },

  "triage": {
    "status": "",
    "reason": ""
  },

  "problemList": [],

  "differentials": [
    {
      "name": "",
      "category": "",
      "likelihood": "",
      "confidence": "",
      "reasoning": [],
      "supportingFindings": [],
      "againstFindings": [],
      "recommendedTests": [],
      "initialTreatment": []
    }
  ],

  "recommendedDiagnostics": [
    {
      "id": "",
      "test": "",
      "priority": "",
      "reason": ""
    }
  ],

  "redFlags": [],

  "clinicalPearls": [],

  "prognosis": {
    "shortTerm": "",
    "longTerm": ""
  },

  "clientSummary": ""
}

==================================================
FINAL VALIDATION BEFORE JSON
==================================================

Before returning the JSON:

1. Confirm patient species.
2. Confirm every differential occurs in that species.
3. Confirm every differential can explain the documented syndrome.
4. Remove unrelated diseases.
5. Remove wrong-species diseases.
6. Do not intentionally duplicate diagnoses.
7. Maximum 5 differentials.
8. Do not pad the list.
9. Use only allowed likelihood values.
10. Use only allowed diagnostic priorities.
11. Triage must be Stable, Urgent, or Emergency.
12. Prognosis must contain non-empty shortTerm and longTerm.
13. Problem list must contain only documented problems.
14. Diagnosis name must match its reasoning.
15. Do not claim an unconfirmed diagnosis is confirmed.
16. Do not invent undocumented examination or diagnostic findings.
17. Every differential must contain confidence.
18. Every differential must contain recommendedTests.
19. Every differential must contain initialTreatment.
20. Return VALID JSON ONLY.
21. Do not use Markdown.
22. Do not write anything before or after the JSON.

CLINICAL CASE:

${JSON.stringify(caseData)}
`;
}

/**
 * ============================================================
 * RESPONSE CLEANING
 * ============================================================
 */
/**
 * ============================================================
 * GEMINI QUOTA ERROR DETECTION
 * ============================================================
 *
 * IMPORTANT:
 *
 * Fallback models are used ONLY for quota/rate-limit errors.
 *
 * We deliberately DO NOT fallback for:
 * - malformed JSON
 * - empty response
 * - invalid clinical report
 * - authentication errors
 * - permission errors
 * - bad request errors
 * - application errors
 *
 * This prevents fallback models from hiding real VetDx Assist
 * problems.
 */

function isGeminiQuotaError(error: unknown): boolean {
  if (!error) {
    return false;
  }

  const errorObject =
    error as {
      status?: unknown;
      code?: unknown;
      message?: unknown;
      error?: {
        status?: unknown;
        code?: unknown;
        message?: unknown;
      };
    };

  const status =
    errorObject.status ??
    errorObject.code ??
    errorObject.error?.status ??
    errorObject.error?.code;

  if (
    status === 429 ||
    status === "429" ||
    status === "RESOURCE_EXHAUSTED"
  ) {
    return true;
  }

  const message = String(
    errorObject.message ??
      errorObject.error?.message ??
      error
  ).toLowerCase();

  return (
    message.includes("resource exhausted") ||
    message.includes("quota exceeded") ||
    message.includes("quota exceeded for") ||
    message.includes("rate limit exceeded") ||
    message.includes("too many requests")
  );
}
/**
 * ============================================================
 * GEMINI GENERATION WITH QUOTA-ONLY FALLBACK
 * ============================================================
 *
 * Primary:
 *   gemini-2.5-flash
 *
 * Fallback order:
 *   
 * 1. gemini-3-flash-preview",
 *
 * 3. gemini-2.5-flash-lite",
 * 4. gemini-3.5-flash-lite",
 * 5. gemini-3.5-flash",
 *
 * FALLBACK IS USED ONLY FOR QUOTA/RATE-LIMIT ERRORS.
 *
 * All other errors are immediately re-thrown.
 *
 * The prompt and generation configuration remain identical
 * across all models.
 */

async function generateGeminiResponse(
  prompt: string
) {
  try {
    /**
     * --------------------------------------------------------
     * PRIMARY MODEL
     * --------------------------------------------------------
     */
    return await ai.models.generateContent({
      model: PRIMARY_MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });
  } catch (primaryError: unknown) {
    /**
     * --------------------------------------------------------
     * ONLY FALLBACK FOR QUOTA ERRORS
     * --------------------------------------------------------
     */
    if (!isGeminiQuotaError(primaryError)) {
      throw primaryError;
    }

    console.warn(
      `[VetDx Assist] ${PRIMARY_MODEL} quota/rate limit reached. Trying fallback models.`
    );

    /**
     * --------------------------------------------------------
     * FALLBACK MODELS
     * --------------------------------------------------------
     */
    for (const fallbackModel of FALLBACK_MODELS) {
      try {
        console.warn(
          `[VetDx Assist] Trying fallback model: ${fallbackModel}`
        );

        return await ai.models.generateContent({
          model: fallbackModel,
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          },
        });
      } catch (fallbackError: unknown) {
        /**
         * ----------------------------------------------------
         * Continue ONLY if fallback also has quota problem.
         * Any other error stops immediately.
         * ----------------------------------------------------
         */
        if (!isGeminiQuotaError(fallbackError)) {
          throw fallbackError;
        }

        console.warn(
          `[VetDx Assist] ${fallbackModel} quota/rate limit reached.`
        );
      }
    }

    /**
     * --------------------------------------------------------
     * ALL MODELS EXHAUSTED
     * --------------------------------------------------------
     */
    throw new Error(
      "Gemini quota is currently unavailable for all configured models."
    );
  }
}
function cleanResponse(text: string): string {
  return text
    .replace(/^\uFEFF/, "")
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
}

/**
 * ============================================================
 * ROBUST JSON PARSER
 * ============================================================
 */

function parseJsonResponse(text: string): unknown {
  const cleaned = cleanResponse(text);

  try {
    return JSON.parse(cleaned);
  } catch {
    // Continue to JSON extraction.
  }

  const firstBrace = cleaned.indexOf("{");

  if (firstBrace === -1) {
    throw new Error(
      "Gemini did not return a JSON object."
    );
  }

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (
    let i = firstBrace;
    i < cleaned.length;
    i++
  ) {
    const char = cleaned[i];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }

      if (char === "\\") {
        escaped = true;
        continue;
      }

      if (char === '"') {
        inString = false;
      }

      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === "{") {
      depth++;
    }

    if (char === "}") {
      depth--;

      if (depth === 0) {
        const jsonText = cleaned.slice(
          firstBrace,
          i + 1
        );

        try {
          return JSON.parse(jsonText);
        } catch (error: unknown) {
          const message =
            error instanceof Error
              ? error.message
              : "Unknown JSON error";

          throw new Error(
            `Gemini returned malformed JSON: ${message}`
          );
        }
      }
    }
  }

  throw new Error(
    "Gemini returned incomplete JSON."
  );
}

/**
 * ============================================================
 * BASIC REPORT VALIDATION
 * ============================================================
 */

function validateReport(
  report: unknown
): report is AIClinicalReport {
  if (
    !report ||
    typeof report !== "object"
  ) {
    return false;
  }

  const value =
    report as Record<string, unknown>;

  return Boolean(
    value.patientSummary &&
      typeof value.patientSummary ===
        "object" &&
      value.triage &&
      typeof value.triage === "object" &&
      Array.isArray(value.problemList) &&
      Array.isArray(value.differentials)
  );
}

/**
 * ============================================================
 * HELPERS
 * ============================================================
 */

function normalizeStringArray(
  value: unknown
): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item: unknown) => {
      if (
        typeof item === "string"
      ) {
        return item.trim();
      }

      if (
        item &&
        typeof item === "object"
      ) {
        const object =
          item as Record<
            string,
            unknown
          >;

        return String(
          object.test ??
            object.name ??
            object.description ??
            object.reason ??
            ""
        ).trim();
      }

      return String(
        item ?? ""
      ).trim();
    })
    .filter(Boolean);
}

function normalizeLikelihood(
  value: unknown
): AllowedLikelihood {
  const normalized =
    String(
      value ?? ""
    ).trim();

  if (
    (
      ALLOWED_LIKELIHOODS as readonly string[]
    ).includes(normalized)
  ) {
    return normalized as AllowedLikelihood;
  }

  return "Moderate";
}

function normalizePriority(
  value: unknown
): AllowedPriority {
  const normalized =
    String(
      value ?? ""
    ).trim();

  if (
    (
      ALLOWED_PRIORITIES as readonly string[]
    ).includes(normalized)
  ) {
    return normalized as AllowedPriority;
  }

  return "Recommended";
}

function normalizeTriage(
  value: unknown
): AllowedTriage {
  const normalized =
    String(
      value ?? ""
    ).trim();

  if (
    (
      ALLOWED_TRIAGE as readonly string[]
    ).includes(normalized)
  ) {
    return normalized as AllowedTriage;
  }

  return "Stable";
}

function cleanString(
  value: unknown,
  fallback = ""
): string {
  const result =
    String(
      value ?? ""
    ).trim();

  return result || fallback;
}

/**
 * ============================================================
 * NORMALIZE DIFFERENTIAL
 * ============================================================
 *
 * IMPORTANT:
 *
 * The incoming Gemini object is deliberately treated as
 * unknown/legacy-compatible data.
 *
 * This prevents TypeScript errors such as:
 *
 * Property 'diagnosis' does not exist on type
 * 'DifferentialDiagnosis'.
 *
 * After normalization, the object is shaped according to
 * the current AIClinicalReport / DifferentialDiagnosis type.
 */

function normalizeDifferential(
  raw: unknown
): any | null {
  if (
    !raw ||
    typeof raw !== "object"
  ) {
    return null;
  }

  const item =
    raw as Record<
      string,
      unknown
    >;

  /**
   * Current format:
   *
   * {
   *   name: "...",
   *   ...
   * }
   *
   * Legacy format:
   *
   * {
   *   diagnosis: "...",
   *   ...
   * }
   */

  const name = cleanString(
    item.name ??
      item.diagnosis ??
      item.diagnosisName
  );

  if (!name) {
    return null;
  }

  /**
   * Legacy / alternative field support.
   */

  const reasoning =
    normalizeStringArray(
      item.reasoning
    );

  const supportingFindings =
    normalizeStringArray(
      item.supportingFindings ??
        item.supporting ??
        item.findingsSupporting
    );

  const againstFindings =
    normalizeStringArray(
      item.againstFindings ??
        item.findingsAgainst ??
        item.findings_against
    );

  const recommendedTests =
    normalizeStringArray(
      item.recommendedTests ??
        item.recommendedDiagnostics ??
        item.tests
    );

  const initialTreatment =
    normalizeStringArray(
      item.initialTreatment ??
        item.initialTreatmentPlan ??
        item.treatment
    );

  return {
    name,

    category: cleanString(
      item.category,
      "General"
    ),

    likelihood:
      normalizeLikelihood(
        item.likelihood
      ),

    confidence: cleanString(
      item.confidence,
      "Confidence is based on the documented clinical findings and remains subject to diagnostic confirmation."
    ),

    reasoning,

    supportingFindings,

    againstFindings,

    recommendedTests,

    initialTreatment,
  };
}

/**
 * ============================================================
 * NORMALIZATION
 * ============================================================
 */

function normalizeReport(
  report: AIClinicalReport
): AIClinicalReport {
  /**
   * ----------------------------------------------------------
   * Problem list
   * ----------------------------------------------------------
   */

  report.problemList =
    Array.isArray(
      report.problemList
    )
      ? report.problemList
          .map(
            (problem: unknown) => {
              if (
                typeof problem ===
                "string"
              ) {
                return problem.trim();
              }

              if (
                problem &&
                typeof problem ===
                  "object"
              ) {
                const item =
                  problem as Record<
                    string,
                    unknown
                  >;

                return cleanString(
                  item.problem ??
                    item.description
                );
              }

              return "";
            }
          )
          .filter(Boolean)
      : [];

  /**
   * ----------------------------------------------------------
   * Recommended diagnostics
   * ----------------------------------------------------------
   */

  report.recommendedDiagnostics =
    Array.isArray(
      report.recommendedDiagnostics
    )
      ? report.recommendedDiagnostics.map(
          (
            test: unknown,
            index: number
          ) => {
            const item =
              test &&
              typeof test ===
                "object"
                ? (test as Record<
                    string,
                    unknown
                  >)
                : {};

            return {
              id: cleanString(
                item.id,
                `diagnostic-${index + 1}`
              ),

              test: cleanString(
                item.test ??
                  item.name ??
                  item.diagnostic,
                "Diagnostic Test"
              ),

              priority:
                normalizePriority(
                  item.priority
                ),

              reason: cleanString(
                item.reason
              ),
            };
          }
        )
      : [];

  /**
   * ----------------------------------------------------------
   * Red flags
   * ----------------------------------------------------------
   */

  report.redFlags =
    normalizeStringArray(
      report.redFlags
    );

  /**
   * ----------------------------------------------------------
   * Clinical pearls
   * ----------------------------------------------------------
   */

  report.clinicalPearls =
    normalizeStringArray(
      report.clinicalPearls
    );

  /**
   * ----------------------------------------------------------
   * Client summary
   * ----------------------------------------------------------
   */

  report.clientSummary =
    cleanString(
      report.clientSummary
    );

  /**
   * ----------------------------------------------------------
   * Patient summary
   * ----------------------------------------------------------
   */

  const patient =
    report.patientSummary ??
    ({} as any);

  report.patientSummary = {
    species: cleanString(
      patient.species
    ),

    breed: cleanString(
      patient.breed
    ),

    age: cleanString(
      patient.age
    ),

    sex: cleanString(
      patient.sex
    ),

    weight: cleanString(
      patient.weight
    ),

    summary: cleanString(
      patient.summary
    ),
  };

  /**
   * ----------------------------------------------------------
   * Triage
   * ----------------------------------------------------------
   */

  const triage =
    report.triage ??
    ({} as any);

  report.triage = {
    status:
      normalizeTriage(
        triage.status
      ),

    reason: cleanString(
      triage.reason
    ),
  };

  /**
   * ----------------------------------------------------------
   * Prognosis
   * ----------------------------------------------------------
   */

  const prognosis =
    report.prognosis &&
    typeof report.prognosis ===
      "object"
      ? (report.prognosis as any)
      : {};

  report.prognosis = {
    shortTerm: cleanString(
      prognosis.shortTerm ??
        prognosis.short_term,
      "Prognosis cannot be determined until further diagnostic evaluation."
    ),

    longTerm: cleanString(
      prognosis.longTerm ??
        prognosis.long_term,
      "Long-term prognosis depends on the underlying diagnosis and response to treatment."
    ),
  };

  /**
   * ----------------------------------------------------------
   * DIFFERENTIAL NORMALIZATION
   * ----------------------------------------------------------
   *
   * This deliberately uses unknown input rather than assuming
   * Gemini's raw object already matches DifferentialDiagnosis.
   *
   * Therefore legacy "diagnosis" is safely supported without
   * TypeScript errors.
   */

  const rawDifferentials =
    Array.isArray(
      report.differentials
    )
      ? report.differentials
      : [];

  const normalizedDifferentials: any[] =
    [];

  for (
    const rawItem of rawDifferentials
  ) {
    /**
     * Handle legacy wrapper:
     *
     * {
     *   diagnoses: [...]
     * }
     */

    if (
      rawItem &&
      typeof rawItem ===
        "object" &&
      Array.isArray(
        (rawItem as any)
          .diagnoses
      )
    ) {
      const wrapper =
        rawItem as any;

      for (
        const legacyDiagnosis of
          wrapper.diagnoses
      ) {
        const normalized =
          normalizeDifferential(
            {
              ...legacyDiagnosis,
              category:
                legacyDiagnosis?.category ??
                wrapper.category ??
                wrapper.problem,
            }
          );

        if (normalized) {
          normalizedDifferentials.push(
            normalized
          );
        }
      }

      continue;
    }

    /**
     * Handle current and legacy
     * single-diagnosis objects.
     */

    const normalized =
      normalizeDifferential(
        rawItem
      );

    if (normalized) {
      normalizedDifferentials.push(
        normalized
      );
    }
  }

  /**
   * ----------------------------------------------------------
   * Remove duplicates
   * ----------------------------------------------------------
   */

  const seen =
    new Set<string>();

  report.differentials =
    normalizedDifferentials.filter(
      (diagnosis: any) => {
        const name =
          cleanString(
            diagnosis?.name
          );

        if (!name) {
          return false;
        }

        const key =
          normalizeDiseaseName(
            name
          );

        if (
          seen.has(key)
        ) {
          return false;
        }

        seen.add(key);

        return true;
      }
    ) as any;

  return report;
}

/**
 * ============================================================
 * SPECIES SAFETY
 * ============================================================
 *
 * IMPORTANT:
 *
 * This function does NOT use the disease database.
 *
 * It only removes obviously wrong-species diagnoses.
 */

function validateDifferentials(
  report: AIClinicalReport
): AIClinicalReport {
  const species =
    cleanString(
      report.patientSummary
        ?.species
    )
      .toLowerCase()
      .trim();

  const normalizedSpecies =
    species === "dog" ||
    species === "canine"
      ? "canine"
      : species === "cat" ||
        species === "feline"
      ? "feline"
      : species === "cattle" ||
        species === "bovine"
      ? "bovine"
      : species === "horse" ||
        species === "equine"
      ? "equine"
      : species === "sheep" ||
        species === "ovine"
      ? "ovine"
      : species === "goat" ||
        species === "caprine"
      ? "caprine"
      : species;

  /**
   * Explicit species terms that are invalid
   * for the patient's species.
   */

  const forbiddenTerms: Record<
    string,
    string[]
  > = {
    canine: [
      "bovine",
      "cattle",
      "equine",
      "horse",
      "ovine",
      "sheep",
      "caprine",
      "goat",
      "avian",
      "poultry",
      "porcine",
      "swine",
      "feline",
      "cat",
    ],

    feline: [
      "bovine",
      "cattle",
      "canine",
      "dog",
      "equine",
      "horse",
      "ovine",
      "sheep",
      "caprine",
      "goat",
      "avian",
      "poultry",
      "porcine",
      "swine",
    ],

    bovine: [
      "canine",
      "dog",
      "feline",
      "cat",
      "equine",
      "horse",
      "ovine",
      "sheep",
      "caprine",
      "goat",
      "avian",
      "poultry",
      "porcine",
      "swine",
    ],

    equine: [
      "canine",
      "dog",
      "feline",
      "cat",
      "bovine",
      "cattle",
      "ovine",
      "sheep",
      "caprine",
      "goat",
      "avian",
      "poultry",
      "porcine",
      "swine",
    ],

    ovine: [
      "canine",
      "dog",
      "feline",
      "cat",
      "bovine",
      "cattle",
      "equine",
      "horse",
      "caprine",
      "goat",
      "avian",
      "poultry",
      "porcine",
      "swine",
    ],

    caprine: [
      "canine",
      "dog",
      "feline",
      "cat",
      "bovine",
      "cattle",
      "equine",
      "horse",
      "ovine",
      "sheep",
      "avian",
      "poultry",
      "porcine",
      "swine",
    ],
  };

  const forbidden =
    forbiddenTerms[
      normalizedSpecies
    ] ?? [];

  /**
   * Disease-specific patterns.
   */

  const speciesSpecificPatterns: Record<
    string,
    RegExp[]
  > = {
    canine: [
      /\b(enzootic|infectious)\s+ovine\b/i,
      /\bcaprine\s+arthritis\b/i,
      /\bcaprine\s+encephalitis\b/i,
      /\bbovine\s+viral\s+diarrhea\b/i,
      /\bbovine\s+respiratory\s+disease\b/i,
      /\binfectious\s+rhinotracheitis\b/i,
      /\bmalignant\s+catarrhal\s+fever\b/i,
      /\bovine\s+progressive\s+pneumonia\b/i,
    ],

    feline: [
      /\bbovine\s+viral\s+diarrhea\b/i,
      /\binfectious\s+rhinotracheitis\b/i,
      /\bbovine\s+respiratory\s+disease\b/i,
      /\bbovine\s+progressive\s+pneumonia\b/i,
      /\bcaprine\s+arthritis\b/i,
    ],

    bovine: [
      /\bcanine\s+parvovirus\b/i,
      /\bfeline\s+panleukopenia\b/i,
      /\bcanine\s+distemper\b/i,
      /\bcanine\s+parainfluenza\b/i,
    ],

    equine: [
      /\bcanine\s+parvovirus\b/i,
      /\bfeline\s+panleukopenia\b/i,
      /\bbovine\s+viral\s+diarrhea\b/i,
    ],

    ovine: [
      /\bcanine\s+parvovirus\b/i,
      /\bfeline\s+panleukopenia\b/i,
      /\bbovine\s+viral\s+diarrhea\b/i,
    ],

    caprine: [
      /\bcanine\s+parvovirus\b/i,
      /\bfeline\s+panleukopenia\b/i,
      /\bbovine\s+viral\s+diarrhea\b/i,
    ],
  };

  const specificPatterns =
    speciesSpecificPatterns[
      normalizedSpecies
    ] ?? [];

  const escapeRegex = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const isWrongSpeciesDiagnosis =
    (name: string): boolean => {
      const lowerName =
        name
          .toLowerCase()
          .trim();

      if (
        forbidden.some(
          (term) =>
            new RegExp(
              `\\b${escapeRegex(
                term
              )}\\b`,
              "i"
            ).test(
              lowerName
            )
        )
      ) {
        return true;
      }

      if (
        specificPatterns.some(
          (pattern) =>
            pattern.test(name)
        )
      ) {
        return true;
      }

      return false;
    };

  /**
   * Remove obviously wrong-species diagnoses.
   */

  report.differentials =
    Array.isArray(
      report.differentials
    )
      ? report.differentials.filter(
          (diagnosis: any) => {
            const name =
              cleanString(
                diagnosis?.name
              );

            if (!name) {
              return false;
            }

            if (
              isWrongSpeciesDiagnosis(
                name
              )
            ) {
              console.warn(
                `[VetDx Assist] Removed wrong-species differential "${name}" for "${normalizedSpecies}".`
              );

              return false;
            }

            return true;
          }
        )
      : [];

  /**
   * Maximum five.
   */

  report.differentials =
    report.differentials.slice(
      0,
      5
    );

  /**
   * Final duplicate protection.
   */

  const seen =
    new Set<string>();

  report.differentials =
    report.differentials.filter(
      (diagnosis: any) => {
        const name =
          cleanString(
            diagnosis?.name
          );

        if (!name) {
          return false;
        }

        const key =
          normalizeDiseaseName(
            name
          );

        if (
          seen.has(key)
        ) {
          return false;
        }

        seen.add(key);

        return true;
      }
    ) as any;

  return report;
}

/**
 * ============================================================
 * DISEASE CARD ATTACHMENT
 * ============================================================
 *
 * THIS IS THE ONLY PLACE WHERE THE DISEASE DATABASE
 * PARTICIPATES IN THE AI REPORT.
 *
 * Gemini
 *   ↓
 * Independent clinical reasoning
 *   ↓
 * Normalization
 *   ↓
 * Species safety
 *   ↓
 * Disease-card lookup
 *   ↓
 * Card exists?
 *      YES → attach diseaseCardId
 *      NO  → keep AI diagnosis unchanged
 */

function attachDiseaseCards(
  report: AIClinicalReport
): AIClinicalReport {
  const patientSpecies =
    normalizeDiseaseSpecies(
      report.patientSummary
        ?.species ?? ""
    );

  report.differentials =
    report.differentials.map(
      (diagnosis: any) => {
        try {
          const diseaseCard =
            resolveDiseaseCard(
              diagnosis.name,
              patientSpecies
            );

          if (!diseaseCard) {
            return diagnosis;
          }

          return {
            ...diagnosis,
            diseaseCardId:
              diseaseCard.id,
          };
        } catch (error) {
          console.warn(
            `[VetDx Assist] Disease card lookup failed for "${diagnosis.name}" (${patientSpecies ?? "unknown species"}).`,
            error
          );

          return diagnosis;
        }
      }
    ) as any;

  return report;
}

/**
 * ============================================================
 * POST /api/diagnose
 * ============================================================
 */

export async function POST(
  req: Request
) {
  try {
    /**
     * --------------------------------------------------------
     * 1. Parse clinical case
     * --------------------------------------------------------
     */

    const caseData =
      await req.json();

    if (
      !caseData ||
      typeof caseData !==
        "object"
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid clinical case data.",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * --------------------------------------------------------
     * 2. Build independent AI prompt
     * --------------------------------------------------------
     */

    const prompt =
      buildPrompt(
        caseData
      );

    /**
     * --------------------------------------------------------
     * 3. Ask Gemini
     * --------------------------------------------------------
     *
     * No disease database is passed to Gemini.
     */

    const response =
  await generateGeminiResponse(
    prompt
  );

    const rawText =
      response.text ?? "";

    if (
      !rawText.trim()
    ) {
      throw new Error(
        "Gemini returned an empty response."
      );
    }

    /**
     * --------------------------------------------------------
     * 4. Parse JSON safely
     * --------------------------------------------------------
     */

    const parsed =
      parseJsonResponse(
        rawText
      );

    /**
     * --------------------------------------------------------
     * 5. Validate basic report structure
     * --------------------------------------------------------
     */

    if (
      !validateReport(
        parsed
      )
    ) {
      throw new Error(
        "Gemini returned an invalid clinical report structure."
      );
    }

    let report =
      parsed as AIClinicalReport;

    /**
     * --------------------------------------------------------
     * 6. Mark source
     * --------------------------------------------------------
     */

    report.source = "ai";

    /**
     * --------------------------------------------------------
     * 7. Normalize AI output
     * --------------------------------------------------------
     */

    report =
      normalizeReport(
        report
      );

    /**
     * --------------------------------------------------------
     * 8. Backend species safety
     * --------------------------------------------------------
     *
     * Does NOT consult diseaseDatabase.
     */

    report =
      validateDifferentials(
        report
      );

    /**
     * --------------------------------------------------------
     * 9. Attach existing disease cards
     * --------------------------------------------------------
     *
     * This happens AFTER AI reasoning.
     */

    report =
      attachDiseaseCards(
        report
      );

    /**
     * --------------------------------------------------------
     * 10. Return report
     * --------------------------------------------------------
     */

    return NextResponse.json(
      {
        success: true,
        data: report,
      },
      {
        status: 200,
      }
    );
  } catch (error: unknown) {
    console.error(
      "========== DIAGNOSE API ERROR =========="
    );

    if (
      error instanceof Error
    ) {
      console.error(
        error.message
      );

      console.error(
        error.stack
      );
    } else {
      console.error(
        error
      );
    }

    console.error(
      "========================================="
    );

    return NextResponse.json(
      {
        success: false,

        message:
          error instanceof Error
            ? error.message
            : "Unable to generate AI clinical report.",
      },
      {
        status: 500,
      }
    );
  }
}