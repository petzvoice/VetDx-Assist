import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import type { AIClinicalReport } from "@/types/ai";
import {
  resolveDiseaseCard,
  normalizeDiseaseName,
} from "@/lib/knowledge-engine/search";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODEL = "gemini-2.5-flash";

/**
 * ============================================================
 * PROMPT
 * ============================================================
 */

function buildPrompt(caseData: any) {
  return `
You are VetDx Assist, an independent veterinary clinical
decision-support system.

Analyze ONLY the clinical case provided below.

==================================================
CORE ARCHITECTURE RULE
==================================================

You are completely independent of the VetDx Assist disease-card
database.

Do NOT search for, retrieve, rank, select, or depend on any
VetDx Assist disease card.

Do NOT assume that a disease must exist in the VetDx Assist
database.

Generate differentials entirely from veterinary clinical
reasoning.

The application will separately attempt to attach an existing
disease card AFTER your clinical assessment is complete.

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

Examples:

Dog → canine diseases
Cat → feline diseases
Cattle → bovine diseases
Horse → equine diseases
Sheep → ovine diseases
Goat → caprine diseases

NEVER return a disease that belongs exclusively to another
species.

For example, if the patient is a dog:

INVALID:
"Bovine Infectious Rhinotracheitis"

INVALID:
"Bovine Respiratory Disease"

INVALID:
"Caprine arthritis encephalitis"

INVALID:
"Ovine progressive pneumonia"

Even if the reasoning underneath accidentally discusses a
canine condition, the diagnosis name itself must be species-safe.

==================================================
3. DIFFERENTIAL DIAGNOSES
==================================================

Generate up to 5 differentials.

Return fewer if fewer are clinically justified.

Rank from most likely to least likely.

Prioritize:

1. Best explanation of the complete documented syndrome.
2. Common compatible diseases.
3. Important life-threatening rule-outs when justified.

Do not pad the list.

Do not duplicate diagnoses.

Do not include a disease merely because it is associated with
another differential.

Each differential must independently explain the documented
findings.

==================================================
DIAGNOSIS–REASONING CONSISTENCY
==================================================

The diagnosis name MUST match the disease discussed in its
reasoning.

INCORRECT:

name:
"Canine Aortic Thromboembolism"

reasoning:
"These findings are typical of dilated cardiomyopathy."

CORRECT:

name:
"Canine Dilated Cardiomyopathy"

reasoning:
"These findings are compatible with dilated cardiomyopathy."

Do not substitute a complication for the underlying disease
unless the complication itself is intentionally being considered
as a differential.

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
4. PROBLEM LIST
==================================================

List ONLY documented clinical problems.

Do NOT put unconfirmed diagnoses into the problem list.

Correct:

"Exercise intolerance"
"Syncope during exercise"
"Irregular cardiac rhythm"

Incorrect:

"Dilated cardiomyopathy"

unless the case actually confirms it.

==================================================
5. TRIAGE
==================================================

Allowed values ONLY:

"Stable"
"Urgent"
"Emergency"

Base triage ONLY on documented findings.

Do not invent physiological instability.

Syncope, collapse, severe dyspnea, cyanosis, seizures,
severe bleeding, or other potentially life-threatening
documented signs may justify Emergency.

If the case contains potentially serious signs but no evidence
of immediate instability, use Urgent.

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
10. RED FLAGS
==================================================

List clinically relevant deterioration signs.

Do not use a generic emergency checklist.

Red flags must relate to the actual clinical syndrome.

==================================================
11. CLINICAL PEARLS
==================================================

Provide concise, case-specific clinical reasoning.

Do not provide unnecessary textbook information.

==================================================
12. PROGNOSIS
==================================================

Return exactly:

"prognosis": {
  "shortTerm": "",
  "longTerm": ""
}

Both values MUST be non-empty strings.

If diagnosis is uncertain, prognosis must reflect that uncertainty.

==================================================
13. CLIENT SUMMARY
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
      "reasoning": [],
      "supportingFindings": [],
      "againstFindings": []
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
6. Remove duplicate diagnoses.
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
17. Return VALID JSON ONLY.
18. Do not use Markdown.
19. Do not write anything before or after the JSON.

CLINICAL CASE:

${JSON.stringify(caseData)}
`;
}

/**
 * ============================================================
 * RESPONSE CLEANING
 * ============================================================
 */

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

function parseJsonResponse(text: string): any {
  const cleaned = cleanResponse(text);

  // First: response is already valid JSON.
  try {
    return JSON.parse(cleaned);
  } catch {
    // Continue.
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
        } catch (error: any) {
          throw new Error(
            `Gemini returned malformed JSON: ${
              error?.message ??
              "Unknown JSON error"
            }`
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
  report: any
): report is AIClinicalReport {
  return Boolean(
    report &&
      typeof report === "object" &&
      report.patientSummary &&
      typeof report.patientSummary === "object" &&
      report.triage &&
      typeof report.triage === "object" &&
      Array.isArray(report.problemList) &&
      Array.isArray(report.differentials)
  );
}

/**
 * ============================================================
 * NORMALIZATION
 * ============================================================
 */

function normalizeReport(
  report: AIClinicalReport
): AIClinicalReport {
  report.problemList = Array.isArray(
    report.problemList
  )
    ? report.problemList
        .map((problem: any) => {
          if (typeof problem === "string") {
            return problem.trim();
          }

          return (
            problem?.problem ??
            problem?.description ??
            ""
          );
        })
        .filter(Boolean)
    : [];

  report.recommendedDiagnostics =
    Array.isArray(
      report.recommendedDiagnostics
    )
      ? report.recommendedDiagnostics.map(
          (test: any, index: number) => ({
            id:
              test?.id ??
              `diagnostic-${index + 1}`,

            test:
              test?.test ??
              test?.name ??
              test?.diagnostic ??
              "Diagnostic Test",

            priority:
              test?.priority ??
              "Recommended",

            reason:
              test?.reason ??
              "",
          })
        )
      : [];



  report.redFlags =
    Array.isArray(report.redFlags)
      ? report.redFlags
          .map((item: any) =>
            String(item ?? "").trim()
          )
          .filter(Boolean)
      : [];

  report.clinicalPearls =
    Array.isArray(report.clinicalPearls)
      ? report.clinicalPearls
          .map((item: any) =>
            String(item ?? "").trim()
          )
          .filter(Boolean)
      : [];

  report.clientSummary =
    typeof report.clientSummary === "string"
      ? report.clientSummary
      : "";

  report.patientSummary = {
    species:
      report.patientSummary?.species ?? "",

    breed:
      report.patientSummary?.breed ?? "",

    age:
      report.patientSummary?.age ?? "",

    sex:
      report.patientSummary?.sex ?? "",

    weight:
      report.patientSummary?.weight ?? "",

    summary:
      report.patientSummary?.summary ?? "",
  };

  report.triage = {
    status:
      report.triage?.status ??
      "Stable",

    reason:
      report.triage?.reason ??
      "",
  };

  const prognosis =
    report.prognosis &&
    typeof report.prognosis === "object"
      ? report.prognosis
      : {};

  report.prognosis = {
    shortTerm:
      (prognosis as any).shortTerm ??
      (prognosis as any).short_term ??
      "Prognosis cannot be determined until further diagnostic evaluation.",

    longTerm:
      (prognosis as any).longTerm ??
      (prognosis as any).long_term ??
      "Long-term prognosis depends on the underlying diagnosis and response to treatment.",
  };

  /**
   * Differential normalization.
   */
  report.differentials =
    Array.isArray(report.differentials)
      ? report.differentials.flatMap(
          (item: any) => {
            /**
             * Normal format.
             */
            if (
              item?.name &&
              !item?.diagnosis &&
              !item?.diagnoses
            ) {
              return [
                {
                  name:
                    String(item.name).trim(),

                  category:
                    item.category ??
                    "General",

                  likelihood:
                    item.likelihood ??
                    "Moderate",

                  reasoning:
                    Array.isArray(
                      item.reasoning
                    )
                      ? item.reasoning
                      : [],

                  supportingFindings:
                    Array.isArray(
                      item.supportingFindings
                    )
                      ? item.supportingFindings
                      : [],

                  againstFindings:
                    Array.isArray(
                      item.againstFindings
                    )
                      ? item.againstFindings
                      : [],
                },
              ];
            }

            /**
             * Legacy format.
             */
            if (
              Array.isArray(
                item?.diagnoses
              )
            ) {
              return item.diagnoses.map(
                (diagnosis: any) => ({
                  name:
                    diagnosis?.diagnosis ??
                    "Unknown Diagnosis",

                  category:
                    item?.problem ??
                    "General",

                  likelihood:
                    diagnosis?.likelihood ??
                    "Moderate",

                  reasoning:
                    Array.isArray(
                      diagnosis?.reasoning
                    )
                      ? diagnosis.reasoning
                      : [],

                  supportingFindings:
                    Array.isArray(
                      diagnosis?.supportingFindings
                    )
                      ? diagnosis.supportingFindings
                      : [],

                  againstFindings:
                    Array.isArray(
                      diagnosis?.findingsAgainst
                    )
                      ? diagnosis.findingsAgainst
                      : [],
                })
              );
            }

            /**
             * Alternative format.
             */
            if (item?.diagnosis) {
              return [
                {
                  name:
                    item.diagnosis,

                  category:
                    item.category ??
                    "General",

                  likelihood:
                    item.likelihood ??
                    "Moderate",

                  reasoning:
                    Array.isArray(
                      item.reasoning
                    )
                      ? item.reasoning
                      : [],

                  supportingFindings:
                    Array.isArray(
                      item.supportingFindings
                    )
                      ? item.supportingFindings
                      : [],

                  againstFindings:
                    Array.isArray(
                      item.findingsAgainst
                    )
                      ? item.findingsAgainst
                      : [],
                },
              ];
            }

            return [];
          }
        )
      : [];

  /**
   * Remove duplicate diagnoses.
   */
  const seen = new Set<string>();

  report.differentials =
    report.differentials.filter(
      (diagnosis: any) => {
        const name =
          String(
            diagnosis?.name ?? ""
          ).trim();

        if (!name) {
          return false;
        }

        const key =
          normalizeDiseaseName(name);

        if (seen.has(key)) {
          return false;
        }

        seen.add(key);

        return true;
      }
    );

 

  return report;
}

/**
 * ============================================================
 * SPECIES SAFETY
 * ============================================================
 *
 * This is a BACKEND safety layer.
 *
 * It does not generate diagnoses.
 * It only removes obviously invalid diagnoses.
 * ============================================================
 */

function validateDifferentials(
  report: AIClinicalReport
): AIClinicalReport {
  const species =
    String(
      report.patientSummary?.species ?? ""
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
   * Explicit species words that are forbidden
   * for each patient species.
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
   * Additional disease-specific wrong-species
   * patterns.
   *
   * These catch diseases where the diagnosis name
   * does not necessarily contain "bovine", "canine",
   * etc.
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
      /\bovine\s+respiratory\s+disease\b/i,
      /\bovine\s+progressive\s+pneumonia\b/i,
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

  /**
   * Escape regex terms safely.
   */
  const escapeRegex = (
    value: string
  ) =>
    value.replace(
      /[-/\\^$*+?.()|[\]{}]/g,
      "\\$&"
    );

  /**
   * Determine whether a diagnosis is obviously
   * wrong for the patient's species.
   */
  const isWrongSpeciesDiagnosis = (
    name: string
  ): boolean => {
    const lowerName =
      name.toLowerCase().trim();

    /**
     * Explicit forbidden species term.
     */
    if (
      forbidden.some((term) =>
        new RegExp(
          `\\b${escapeRegex(
            term
          )}\\b`,
          "i"
        ).test(lowerName)
      )
    ) {
      return true;
    }

    /**
     * Specific disease patterns.
     */
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
   * Remove wrong-species diagnoses.
   */
  report.differentials =
    Array.isArray(
      report.differentials
    )
      ? report.differentials.filter(
          (diagnosis: any) => {
            const name =
              String(
                diagnosis?.name ??
                  ""
              ).trim();

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
   * Remove duplicates again.
   */
  const seen = new Set<string>();

  report.differentials =
    report.differentials.filter(
      (diagnosis: any) => {
        const name =
          String(
            diagnosis?.name ??
              ""
          ).trim();

        const key =
          normalizeDiseaseName(
            name
          );

        if (!key) {
          return false;
        }

        if (seen.has(key)) {
          return false;
        }

        seen.add(key);

        return true;
      }
    );

  return report;
}

/**
 * ============================================================
 * DISEASE CARD ATTACHMENT
 * ============================================================
 *
 * IMPORTANT:
 *
 * This happens AFTER AI diagnosis and validation.
 *
 * Disease cards do not generate or rank the diagnosis.
 * They are only linked when an existing card can be resolved.
 * ============================================================
 */

function attachDiseaseCards(
  report: AIClinicalReport
): AIClinicalReport {
  report.differentials =
    report.differentials.map(
      (diagnosis: any) => {
        try {
          const diseaseCard =
            resolveDiseaseCard(
              diagnosis.name
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
            `[VetDx Assist] Disease card lookup failed for "${diagnosis.name}".`,
            error
          );

          return diagnosis;
        }
      }
    );

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
     * Parse request.
     */
    const caseData =
      await req.json();

    /**
     * Build independent AI prompt.
     */
    const prompt =
      buildPrompt(caseData);

    /**
     * Ask Gemini for JSON.
     */
    const response =
      await ai.models.generateContent({
        model: MODEL,
        contents: prompt,

        config: {
          responseMimeType:
            "application/json",
        },
      });

    const rawText =
      response.text ?? "";

    if (!rawText.trim()) {
      throw new Error(
        "Gemini returned an empty response."
      );
    }

    /**
     * Parse JSON safely.
     */
    const parsed =
      parseJsonResponse(
        rawText
      );

    /**
     * Validate basic structure.
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
     * Mark source.
     */
    report.source = "ai";

    /**
     * Normalize.
     */
    report =
      normalizeReport(
        report
      );

    /**
     * Backend safety validation.
     *
     * This does NOT generate diagnoses.
     */
    report =
      validateDifferentials(
        report
      );

    /**
     * Only now attach existing disease cards.
     */
    report =
      attachDiseaseCards(
        report
      );

    /**
     * Return successful report.
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
  } catch (error: any) {
    console.error(
      "========== DIAGNOSE API ERROR =========="
    );

    console.error(
      error?.message ??
        "Unknown server error"
    );

    console.error(
      error
    );

    console.error(
      "========================================="
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ??
          "Unable to generate AI clinical report.",
      },
      {
        status: 500,
      }
    );
  }
}