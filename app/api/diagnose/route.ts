import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import type { AIClinicalReport } from "@/types/ai";



const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODEL = "gemini-2.5-flash";

function buildPrompt(caseData: any) {
  return `
You are VetDx Assist, a veterinary clinical decision-support system.

Analyze ONLY the clinical case provided below.

Your job is to produce a clinically coherent veterinary assessment.

IMPORTANT:
- Do NOT invent facts.
- Do NOT assume undocumented findings.
- Do NOT diagnose with certainty unless the case provides sufficient evidence.
- Do NOT recommend treatment for an unconfirmed disease simply because it appears in the differential list.
- Use standard veterinary disease names.
- Return ONLY valid JSON.
- No markdown.
- No code fences.
- No text outside JSON.

==================================================
1. SPECIES SAFETY — ABSOLUTE RULE
==================================================

First identify the patient's species.

EVERY differential MUST be a disease that occurs in that species.

Never include diseases from another species.

Examples:
- Dog → canine diseases only
- Cat → feline diseases only
- Cattle → bovine diseases only
- Horse → equine diseases only
- Sheep → ovine diseases only
- Goat → caprine diseases only

Before returning a differential, verify that it is biologically possible in the patient's species.

==================================================
2. CLINICAL COHERENCE — ABSOLUTE RULE
==================================================

A differential diagnosis is acceptable ONLY if it can reasonably explain the documented clinical syndrome.

For every differential ask:

1. Does it occur in this species?
2. Does it explain the chief complaint?
3. Does it fit the history?
4. Does it fit the physical examination?
5. Does it fit the laboratory/imaging findings?
6. Is there evidence supporting it?
7. Is there any major finding that strongly contradicts it?

If the answer is no, DO NOT include the disease.

Never include an unrelated disease merely to reach five differentials.

Never use a disease from another species.

Never use a disease merely because one isolated finding can occur with it.

==================================================
3. DIFFERENTIAL DIAGNOSES
==================================================

Return a maximum of 5.

Return fewer if fewer are clinically justified.

Rank from most likely to least likely.

Prioritize:
1. The diagnosis that best explains the complete syndrome.
2. Common clinically compatible diseases.
3. Important life-threatening rule-outs when justified.

Do NOT include rare diseases without supporting evidence.

Do NOT repeat diagnoses.

Allowed likelihood values ONLY:

"Very High"
"High"
"Moderate"
"Low"
"Very Low"

Use "Very High" only when the case strongly supports that diagnosis.

If evidence is insufficient, use a lower likelihood.

Each differential MUST contain:

"name"
"category"
"likelihood"
"reasoning"
"supportingFindings"
"againstFindings"

==================================================
4. PROBLEM LIST
==================================================

List only documented clinical problems.

Do NOT convert a differential diagnosis into a confirmed problem.

Example:

Correct:
"Vomiting"
"Dehydration"
"Pyrexia"

Incorrect:
"Pancreatitis"

unless pancreatitis is actually confirmed by the case data.

==================================================
5. TRIAGE
==================================================

Choose exactly ONE:

"Stable"
"Urgent"
"Emergency"

Base this ONLY on the documented clinical condition.

Provide a short reason.

==================================================
6. DIAGNOSTICS
==================================================

Recommend only tests that are clinically justified by the case.

Prioritize the most useful tests first.

Do not add tests simply to make the list longer.

Each test MUST contain:

"id"
"test"
"priority"
"reason"

Allowed priority values ONLY:

"Essential"
"Recommended"
"Optional"

==================================================
7. STABILIZATION
==================================================

Recommend immediate stabilization only when the documented findings justify it.

Do not invent shock, hypoxia, severe dehydration, or other abnormalities that were not documented.

==================================================
8. TREATMENT
==================================================

Treatment must address the documented clinical problem and current clinical status.

Do NOT treat a low-probability differential as if it were confirmed.

Do NOT invent a definitive diagnosis.

Each treatment item MUST contain:

"recommendation"
"category"
"details"

Allowed categories ONLY:

"Antibiotic"
"Antiemetic"
"NSAID"
"Opioid"
"Corticosteroid"
"Fluid Therapy"
"Gastrointestinal"
"Cardiovascular"
"Antiparasitic"
"Emergency Drug"
"Hepatoprotectant"
"Nutritional Support"

Use exactly ONE category per treatment item.

==================================================
9. MONITORING
==================================================

List only monitoring parameters relevant to this patient.

==================================================
10. RED FLAGS
==================================================

List clinically important deterioration signs relevant to this specific case.

Do not add generic emergency signs unrelated to the case.

==================================================
11. CLINICAL PEARLS
==================================================

Give concise, case-specific clinical reasoning points.

Do not provide textbook background.

==================================================
12. PROGNOSIS
==================================================

Return exactly:

"prognosis": {
  "shortTerm": "",
  "longTerm": ""
}

Both values MUST be non-empty strings.

Never use:
"short_term"
"long_term"

==================================================
13. CLIENT SUMMARY
==================================================

Write a short client-friendly explanation.

Do not introduce unsupported facts.

==================================================
REQUIRED JSON
==================================================

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

  "stabilization": [],

  "treatmentConsiderations": [
    {
      "recommendation": "",
      "category": "",
      "details": ""
    }
  ],

  "monitoring": [],

  "redFlags": [],

  "clinicalPearls": [],

  "prognosis": {
    "shortTerm": "",
    "longTerm": ""
  },

  "clientSummary": ""
}

==================================================
FINAL VALIDATION
==================================================

Before returning the JSON:

- Confirm the patient's species.
- Confirm every differential occurs in that species.
- Confirm every differential explains the clinical syndrome.
- Remove unrelated diseases.
- Remove diseases supported only by one weak finding.
- Do not include diseases from another species.
- Do not pad the differential list.
- Maximum 5 differentials.
- No duplicate diagnoses.
- Use only allowed likelihood values.
- Use only allowed diagnostic priorities.
- Use only allowed treatment categories.
- Triage must be Stable, Urgent, or Emergency.
- Prognosis must contain exactly shortTerm and longTerm.
- Return valid JSON only.

CLINICAL CASE:
${JSON.stringify(caseData)}
`;
}

function cleanResponse(text: string) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

function validateReport(
  report: any
): report is AIClinicalReport {
  return (
    report &&
    typeof report === "object" &&
    report.patientSummary &&
    report.triage &&
    Array.isArray(report.problemList) &&
    Array.isArray(report.differentials)
  );
}

function validateDifferentials(
  report: AIClinicalReport
): AIClinicalReport {

  const species =
    String(report.patientSummary?.species ?? "")
      .toLowerCase()
      .trim();

  const allowedSpeciesTerms: Record<string, string[]> = {
    dog: ["dog", "canine"],
    canine: ["dog", "canine"],
    cat: ["cat", "feline"],
    feline: ["cat", "feline"],
    cattle: ["cattle", "bovine"],
    bovine: ["cattle", "bovine"],
    horse: ["horse", "equine"],
    equine: ["horse", "equine"],
    sheep: ["sheep", "ovine"],
    ovine: ["sheep", "ovine"],
    goat: ["goat", "caprine"],
    caprine: ["goat", "caprine"],
  };

  const speciesKey =
    Object.keys(allowedSpeciesTerms).find(
      key => species === key
    );

  if (!speciesKey) {
    return report;
  }

  
  report.differentials =
    report.differentials.filter(
      (diagnosis: any) => {

        const text =
          `${diagnosis.name ?? ""} ${
            diagnosis.reasoning?.join(" ") ?? ""
          }`.toLowerCase();

        // Explicitly reject obvious cross-species diseases.
        const forbiddenSpecies = [
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
        ];

        if (
          species === "dog" ||
          species === "canine"
        ) {
          if (
            forbiddenSpecies.some(term =>
              text.includes(term)
            )
          ) {
            return false;
          }
        }

        return true;
      }
    );

  return report;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();


   const prompt = buildPrompt(body);
let report: AIClinicalReport | null = null;
    
    

    
      try {
        
        const response =
          await ai.models.generateContent({
            model: MODEL,
            contents: prompt,
          });

        const text = cleanResponse(
          response.text ?? ""
        );

        if (!text) {
          throw new Error(
            "Gemini returned an empty response."
          );
        }

        const firstBrace =
          text.indexOf("{");

        const lastBrace =
          text.lastIndexOf("}");

        if (
          firstBrace === -1 ||
          lastBrace === -1
        ) {
          throw new Error(
            "No JSON object found."
          );
        }

        const jsonText = text.slice(
          firstBrace,
          lastBrace + 1
        );

        const parsed =
          JSON.parse(jsonText);

        if (!validateReport(parsed)) {
          throw new Error(
            "Invalid JSON schema."
          );
        }

        report = parsed as AIClinicalReport;
report.source = "ai";

report = validateDifferentials(report);
        
      } catch (err: any) {
  console.error(err);
}
    
if (!report) {
  throw new Error(
    "Gemini 2.5 Flash is currently unavailable. Please try again later."
  );
}
    report.problemList = Array.isArray(
      report.problemList
    )
      ? report.problemList.map((p: any) =>
          typeof p === "string"
            ? p
            : p.problem ||
              p.description ||
              "Unknown Problem"
        )
      : [];

    report.recommendedDiagnostics =
Array.isArray(report.recommendedDiagnostics)

?
report.recommendedDiagnostics.map((test:any)=>({

  id:
    test.id ?? "",

  test:
  test.name ??
  test.test ??
  test.diagnostic ??
  "Diagnostic Test",

  priority:
    test.priority ??
    "Recommended",

  reason:
    test.reason ??
    ""

}))

:

[];

    report.stabilization =
      Array.isArray(
        report.stabilization
      )
        ? report.stabilization
        : [];

    

    report.monitoring = Array.isArray(
      report.monitoring
    )
      ? report.monitoring
      : [];

    report.redFlags = Array.isArray(
      report.redFlags
    )
      ? report.redFlags
      : [];

    report.clinicalPearls =
      Array.isArray(
        report.clinicalPearls
      )
        ? report.clinicalPearls
        : [];

    report.clientSummary ??= "";

    report.patientSummary = {
      species:
        report.patientSummary?.species ??
        "",
      breed:
        report.patientSummary?.breed ??
        "",
      age:
        report.patientSummary?.age ?? "",
      sex:
        report.patientSummary?.sex ?? "",
      weight:
        report.patientSummary?.weight ??
        "",
      summary:
        report.patientSummary?.summary ??
        "",
    };

    report.triage = {
      status:
        report.triage?.status ??
        "Stable",
      reason:
        report.triage?.reason ?? "",
    };

const prognosisData =
  typeof report.prognosis === "object" &&
  report.prognosis !== null
    ? report.prognosis
    : {};

const shortTerm =
  (prognosisData as any).shortTerm ??
  (prognosisData as any).short_term ??
  "";

const longTerm =
  (prognosisData as any).longTerm ??
  (prognosisData as any).long_term ??
  "";

report.prognosis = {
  shortTerm,
  longTerm,
};

   report.differentials =
Array.isArray(report.differentials)

? report.differentials.flatMap((item:any)=>{


  if (
  item.name &&
  !item.diagnosis &&
  !item.diagnoses
) {
  return [
    {
      name: item.name,
      category: item.category ?? "General",
      likelihood: item.likelihood ?? "Moderate",
      reasoning: item.reasoning ?? [],
      supportingFindings: item.supportingFindings ?? [],
      againstFindings: item.againstFindings ?? [],
    },
  ];
}



  // GEMINI FORMAT A

  if (Array.isArray(item.diagnoses)) {

  return item.diagnoses.map((diag:any)=>({

    name:
      diag.diagnosis ??
      "Unknown Diagnosis",

    category:
      item.problem ??
      "General",

    likelihood:
      diag.likelihood ?? "Moderate",

    reasoning:
      diag.reasoning ?? [],

    supportingFindings:
      diag.supportingFindings ?? [],

    againstFindings:
      diag.findingsAgainst ?? []

  }));

}



  // GEMINI FORMAT B

  if (item.diagnosis) {

  return [
    {
      name: item.diagnosis,
      category: "General",
      likelihood: item.likelihood ?? "Moderate",
      reasoning: item.reasoning ?? [],
      supportingFindings: item.supportingFindings ?? [],
      againstFindings: item.findingsAgainst ?? [],
    },
  ];

}



  return [];

})

: [];


report.differentials = report.differentials.map((diag: any) => ({
  ...diag,
  likelihood: diag.likelihood ?? "Moderate",
}));

// Remove duplicate diagnoses
const seen = new Set<string>();

report.differentials = report.differentials.filter((diag: any) => {
  const key = diag.name.trim().toLowerCase();

  if (seen.has(key)) {
    return false;
  }

  seen.add(key);

  return true;
});

report.treatmentConsiderations = Array.isArray(
  report.treatmentConsiderations
)
  ? report.treatmentConsiderations.map((item: any) => {

      if (typeof item === "string") {
        return {
          recommendation: item,
          category: "",
          details: "",
        
        };
      }

      return {
  recommendation: item.recommendation ?? "",
  category: item.category ?? "",
  details: item.details ?? "",
};

    })
  : [];
  
    return NextResponse.json({
      success: true,
      data: report,
    });
  } catch (error: any) {
    console.error(
  "========== API ERROR =========="
);

console.error(
  error?.message ?? "Unknown server error"
);

console.error(
  "==============================="
);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ??
          "Unexpected server error.",
      },
      {
        status: 500,
      }
    );
  }
}