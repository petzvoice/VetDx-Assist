import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import type { AIClinicalReport } from "@/types/ai";
import { buildKnowledgeContext } from "@/lib/knowledge-engine/context";
import { rankDiseases } from "@/lib/knowledge-engine/rankDiseases";
import { drugs } from "@/lib/drugs/data";
import { generateFallbackReport } from "@/lib/knowledge-engine/generateFallbackReport";


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODEL = "gemini-2.5-flash";
function buildPrompt(
  caseData: any,
  knowledgeContext: string,
  diseaseContext: string
) {
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

Rules:

- Generate a prioritized problem list.
- Rank differential diagnoses by likelihood.
Differential diagnosis generation is your primary responsibility.

Do not simply select from VetDx candidates.

Think like a veterinarian:
- interpret signalment
- interpret clinical findings
- consider common diseases
- consider dangerous diseases
- consider diseases that must not be missed

Generate your own ranked differential list.
- Assign only a likelihood category for each differential diagnosis.
- Use ONLY one of these values:
  High
  Moderate
  Low
  Very Low
- Do not provide numerical confidence percentages.
- Choose one triage status:
  Stable, Urgent, or Emergency.
- Include supporting findings.
- Include findings against each diagnosis.
- Include recommended diagnostics.
- Include conservative stabilization and treatment recommendations.
- For every treatment recommendation, assign ONLY ONE treatment category.

Treatment Category Rules

For every item in "treatmentConsiderations", the "category" field MUST be EXACTLY one of the following values:

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

Rules:
- Use EXACT spelling.
- Do NOT invent new categories.
- Do NOT pluralize category names.
- Do NOT use synonyms.
- Do NOT add extra words.
- The "category" value must match one item from the list exactly.
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

VetDx Disease Knowledge:

${knowledgeContext}

VetDx Disease Knowledge Database:

Use this only as supporting veterinary reference information.

Do NOT treat the ranked candidates as the final diagnosis.

Generate your own differential diagnosis using clinical reasoning.

If a disease is not present in this context but clinically appropriate, you may still include it.

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

   


   
    const knowledgeContext =
      buildKnowledgeContext(
        JSON.stringify(body)
      );


    const rankedDiseases =
  rankDiseases(
    JSON.stringify(body)
  )
  .slice(0, 50);


    const diseaseContext =
  rankedDiseases
    .map(
      (item) => {

        const evidence =
          item.matchedEvidence
            .map(
              (e:any) =>
                `${e.finding} (${e.weight >= 0 ? "+" : ""}${e.weight})`
            )
            .join(", ");

        return `
Disease:
${item.disease.title}

Classic Findings:
${item.disease.classicFindings?.join(", ")}

Supporting Evidence:
${evidence}

Rule Out Findings:
${item.disease.ruleOutFindings?.join(", ")}
`;
      }
    )
    .join("\n");



   const prompt = buildPrompt(
  body,
  knowledgeContext,
  diseaseContext
);

    let report: AIClinicalReport | null =
      null;

    let lastError = "";

    for (
      let attempt = 1;
      attempt <= 3;
      attempt++
    ) {
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

        report = parsed;
          report.source = "ai";

        break;
      } catch (err: any) {
        lastError = err.message;

        console.error(
  `[Gemini Failure Attempt ${attempt}]`,
  err?.message
);

        if (attempt < 3) {
          await new Promise((resolve) =>
            setTimeout(resolve, 2000)
          );
        }
      }
    }

   if (!report) {

  throw new Error(
    "Gemini clinical reasoning failed after multiple attempts."
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

      confidence:
        Number(diag.confidence) || 50,

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

        confidence:
          Number(item.confidence) || 50,

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
report.differentials =
  report.differentials.map((diag:any)=>{

    const diagnosisName =
  diag.name.toLowerCase();

const matchedDisease =
  rankedDiseases.find((d) => {

    const diseaseName =
      d.disease.title.toLowerCase();

    return (
      diagnosisName.includes(diseaseName) ||
      diseaseName.includes(diagnosisName)
    );
  });

 

    return {
  ...diag,

  diseaseId: matchedDisease?.disease.id ?? null,

  vetDxEvidence:
    matchedDisease?.matchedEvidence?.map(
      (e:any)=>e.finding
    ) ?? [],

  classicFindings:
    matchedDisease?.disease.classicFindings ?? [],

  strengtheningEvidence:
    matchedDisease?.disease.strengtheningEvidence ?? [],

  weakeningEvidence:
    matchedDisease?.disease.weakeningEvidence ?? [],

  ruleOutFindings:
    matchedDisease?.disease.ruleOutFindings ?? [],
};

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

     const primaryDisease = rankedDiseases.find(
  (d) =>
    d.disease.id ===
    report.differentials[0]?.diseaseId
);

const linkedDrugs =
  (primaryDisease?.disease.recommendedDrugs ?? [])
    .filter(
      (drug: any) => drug.category === item.category
    )
        .filter(
  (drug: any, index: number, array: any[]) =>
            array.findIndex(
              (d) => d.drugId === drug.drugId
            ) === index
        )
        .map((drug: any) => {

          const drugData = drugs.find(
            (d: any) => d.id === drug.drugId
          );

          return {
            drugId: drug.drugId,
            name: drugData?.genericName ?? drug.drugId,
            category: drug.category,
            priority: drug.priority,
          };

        });

      return {
        ...item,
        linkedDrugs,
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