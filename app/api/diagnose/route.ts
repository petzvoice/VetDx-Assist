import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import type { AIClinicalReport } from "@/types/ai";
import { drugs } from "@/lib/drugs/data";



const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODEL = "gemini-2.5-flash";

function buildPrompt(caseData: any) {
  return `
You are VetDx Assist.

You are a board-certified veterinary internal medicine specialist.

Analyze the veterinary patient using clinical reasoning.

Do not guess when information is insufficient.

Return ONLY valid JSON.

IMPORTANT:

Return ONLY raw JSON.
Do not use markdown.
Do not wrap JSON inside \`\`\`json blocks.
Do not add explanations before or after JSON.

CRITICAL DIFFERENTIAL DIAGNOSIS RULES

- Generate only clinically plausible differential diagnoses.
- Never invent diagnoses simply to fill the list.
- Never repeat the same diagnosis.
- Never generate diseases from another species.
- Species-specific diseases must never appear outside their species.
- Use standard veterinary disease names.
- Only include diseases that explain the majority of:
  • signalment
  • history
  • physical examination
  • laboratory findings
  • imaging findings
- Maximum 5 differential diagnoses.
- Minimum 1.
- If fewer diagnoses are appropriate, return fewer.
- Do not pad the list.
- Return only diagnoses that a board-certified veterinary internist would seriously consider.

Rules:

- Generate a prioritized problem list.
- Rank differential diagnoses by likelihood.
- Generate differentials using independent veterinary clinical reasoning.
- Do not simply select from VetDx candidates.
- Consider signalment, history, physical examination, laboratory findings, imaging findings, common diseases, dangerous diseases, and important rule-out diseases.
- Assign only a likelihood category for each differential diagnosis.
- Use ONLY one of these values:

Very High
High
Moderate
Low
Very Low

The first (most likely) differential diagnosis MUST always be "Very High" unless the case information is clearly insufficient.
- Do not provide numerical confidence percentages.
- Choose one triage status:
  Stable, Urgent, or Emergency.
- Include supporting findings.
- Include findings against each diagnosis.
- Include recommended diagnostics.
- Include conservative stabilization and treatment recommendations.
- For every treatment recommendation, assign ONLY ONE treatment category.

Treatment Category Rules

Each treatment recommendation MUST contain a "category" using EXACTLY one of these values:

- Antibiotic
- Antiemetic
- NSAID
- Opioid
- Corticosteroid
- Fluid Therapy
- Gastrointestinal
- Cardiovascular
- Antiparasitic
- Emergency Drug
- Hepatoprotectant
- Nutritional Support

No other category names are allowed.

- Prognosis MUST ALWAYS include:
  - shortTerm
  - longTerm
  Both must be non-empty strings.
  Never use short_term or long_term keys.

Return JSON with these fields:

{
  "patientSummary": {},
  "triage": {},
  "problemList": [],
  "differentials": [],
  "recommendedDiagnostics": [],
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
  "prognosis": {},
  "clientSummary": ""
}

Use standard veterinary disease names whenever possible so the disease reference pages can be linked correctly.

Clinical Case:

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


  // FALLBACK FORMAT FROM generateFallbackReport
  if (
    item.name &&
    !item.diagnosis &&
    !item.diagnoses
  ) {

    return [
      {
        ...item,

        reasoning:
          Array.isArray(item.reasoning)
            ? item.reasoning
            : [],

        supportingFindings:
          item.supportingFindings ?? [],

        againstFindings:
          item.againstFindings ?? [],

        diseaseId:
          item.diseaseId ?? null,

        vetDxEvidence:
          item.vetDxEvidence ?? []
      }
    ];

  }



  // GEMINI FORMAT A

  if(Array.isArray(item.diagnoses)){

    return item.diagnoses.map((diag:any)=>({

      name:
        diag.diagnosis ??
        "Unknown Diagnosis",

      category:
        item.problem ??
        "General",

      likelihood:
  diag.likelihood ?? "Moderate",

      reasoning: [],

      supportingFindings:
        diag.supportingFindings ?? [],

      againstFindings:
        diag.findingsAgainst ?? []

    }));

  }



  // GEMINI FORMAT B

  if(item.diagnosis){

    return [
      {
        name:
          item.diagnosis,

        category:
          "General",

        likelihood:
  item.likelihood ?? "Moderate",
        reasoning: [],

        supportingFindings:
          item.supportingFindings ?? [],

        againstFindings:
          item.findingsAgainst ?? []
      }
    ];

  }



  return [];

})

: [];
const likelihoodOrder = {
  "Very High": 5,
  High: 4,
  Moderate: 3,
  Low: 2,
  "Very Low": 1,
};

report.differentials = report.differentials
  .map((diag: any) => ({
    ...diag,
    likelihood: diag.likelihood ?? "Moderate",
  }))
  .sort((a, b) => {
    const scoreA =
      likelihoodOrder[a.likelihood as keyof typeof likelihoodOrder] ?? 0;

    const scoreB =
      likelihoodOrder[b.likelihood as keyof typeof likelihoodOrder] ?? 0;

    return scoreB - scoreA;
  });

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
          linkedDrugs: [],
        };
      }

      return {
        ...item,
        linkedDrugs: [],
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