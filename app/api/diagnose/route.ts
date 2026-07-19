import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import type { AIClinicalReport } from "@/types/ai";
import { buildKnowledgeContext } from "@/lib/knowledge-engine/context";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODEL = "gemini-2.5-flash";
function buildPrompt(
  caseData: any,
  knowledgeContext: string
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
- Use realistic confidence estimates.
- Confidence values should not total 100%.
- Choose one triage status:
  Stable, Urgent, or Emergency.
- Include supporting findings.
- Include findings against each diagnosis.
- Include recommended diagnostics.
- Include conservative stabilization and treatment recommendations.
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
  "treatmentConsiderations": [],
  "monitoring": [],
  "redFlags": [],
  "clinicalPearls": [],
  "prognosis": {},
  "clientSummary": ""
}

VetDx Knowledge Reference:

${knowledgeContext}


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

function normalizeConfidence(report: AIClinicalReport) {
  if (!report.differentials?.length) return report;

  // sort by AI confidence first
  const sorted = [...report.differentials].sort((a, b) => {
    return (Number(b.confidence) || 0) - (Number(a.confidence) || 0);
  });

  const base = 92;
  const step = 14;

  report.differentials = sorted.map((d, index) => {
    let confidence = Number(d.confidence);

    if (!isFinite(confidence)) {
      confidence = base - index * step;
    }

    // FORCE separation even if AI gives similar values
    confidence = base - index * step;

    confidence = Math.max(5, Math.min(95, confidence));

    return {
      ...d,
      confidence,
    };
  });

  return report;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

const knowledgeContext =
  buildKnowledgeContext(
    JSON.stringify(body)
  );


const prompt =
  buildPrompt(
    body,
    knowledgeContext
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

        report =
          normalizeConfidence(parsed);

        break;
      } catch (err: any) {
        lastError = err.message;

        console.error(
          `Gemini attempt ${attempt} failed:`,
          err
        );

        if (attempt < 3) {
          await new Promise((resolve) =>
            setTimeout(resolve, 2000)
          );
        }
      }
    }

    if (!report) {
      return NextResponse.json(
        {
          success: false,
          message:
            "AI failed to generate a valid clinical report.",
          error: lastError,
        },
        {
          status: 500,
        }
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
      Array.isArray(
        report.recommendedDiagnostics
      )
        ? report.recommendedDiagnostics
        : [];

    report.stabilization =
      Array.isArray(
        report.stabilization
      )
        ? report.stabilization
        : [];

    report.treatmentConsiderations =
      Array.isArray(
        report.treatmentConsiderations
      )
        ? report.treatmentConsiderations
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

   report.differentials = Array.isArray(
  report.differentials
)
  ? report.differentials.flatMap((item: any) => {

      // Structure A
      if (Array.isArray(item.diagnoses)) {
        return item.diagnoses.map(
          (diag: any) => ({
            name:
              diag.diagnosis ??
              "Unknown Diagnosis",

            category:
              item.problem ??
              "General",

            confidence:
              Number(diag.confidence) ||
              50,

            reasoning:
  Array.isArray(diag.reasoning)
    ? diag.reasoning
    : [],

            supportingFindings:
              Array.isArray(
                diag.supportingFindings
              )
                ? diag.supportingFindings
                : [],

            againstFindings:
              Array.isArray(
                diag.findingsAgainst
              )
                ? diag.findingsAgainst
                : [],

            recommendedTests: [],

            initialTreatment: [],
          })
        );
      }

      // Structure B
      if (item.diagnosis) {
        return [
          {
            name: item.diagnosis,

            category: "General",

            confidence:
              Number(item.confidence) ||
              50,

            reasoning:
  Array.isArray(item.reasoning)
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

            recommendedTests: [],

            initialTreatment: [],
          },
        ];
      }

      return [];
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

    console.error(error);

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