import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import type { AIClinicalReport } from "@/types/ai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODEL = "gemini-2.5-flash";

/* =====================================================
   Build Prompt
===================================================== */

function buildPrompt(caseData: any) {
  return `
You are VetDx Assist.

You are a board-certified veterinary internal medicine specialist.

Your job is NOT to guess.

Your job is to reason exactly like an experienced clinician.

Analyze the following veterinary patient.

Return ONLY VALID JSON.

Do NOT use markdown.

Do NOT use code blocks.

Do NOT explain anything outside JSON.

----------------------------------------------------

Rules:

• Think step-by-step.

• Generate a prioritized problem list.

• Rank differential diagnoses by probability.

• Confidence must be realistic.

Top diagnosis:

70-95%

Second:

50-85%

Third:

35-70%

Never return

1%

2%

3%

5%

unless information is extremely insufficient.

Never make confidence totals equal 100%.

Confidence represents independent likelihood.

----------------------------------------------------

Emergency Triage

Choose ONLY ONE

Stable

Urgent

Emergency

----------------------------------------------------

Clinical reasoning must include

Why diagnosis fits

Supporting findings

Findings against diagnosis

Recommended diagnostics

Initial stabilization

----------------------------------------------------

Treatment recommendations must be conservative.

Never prescribe dangerous medications.

----------------------------------------------------

Return EXACTLY this schema.

{
  "patientSummary": {
    "species":"",
    "breed":"",
    "age":"",
    "sex":"",
    "weight":"",
    "summary":""
  },

  "triage":{
      "status":"",
      "reason":""
  },

  "problemList":[],

  "differentials":[
      {
          "name":"",
          "category":"",
          "confidence":0,
          "reasoning":[],
          "supportingFindings":[],
          "againstFindings":[],
          "recommendedTests":[],
          "initialTreatment":[]
      }
  ],

  "recommendedDiagnostics":[],

  "stabilization":[],

  "treatmentConsiderations":[],

  "monitoring":[],

  "redFlags":[],

  "clinicalPearls":[],

  "prognosis":{
      "shortTerm":"",
      "longTerm":""
  },

  "clientSummary":""
}

----------------------------------------------------

Clinical Case

${JSON.stringify(caseData, null, 2)}
`;
}

/* =====================================================
   Remove Markdown
===================================================== */

function cleanResponse(text: string) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

/* =====================================================
   Confidence Fix
===================================================== */

function normalizeConfidence(
  report: AIClinicalReport
) {
  if (!report.differentials?.length) return report;

  report.differentials =
    report.differentials.map((d, index) => {
      let confidence = Number(d.confidence);

      if (isNaN(confidence)) confidence = 60;

      if (confidence < 30) {
        confidence = Math.max(
          40,
          92 - index * 12
        );
      }

      if (confidence > 98)
        confidence = 98;

      return {
        ...d,
        confidence,
      };
    });

  return report;
}

/* =====================================================
   Validation
===================================================== */

function validateReport(
  report: any
): report is AIClinicalReport {
  return (
    report &&
    report.patientSummary &&
    report.triage &&
    Array.isArray(report.problemList) &&
    Array.isArray(report.differentials)
  );
}
/* =====================================================
   POST
===================================================== */

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = buildPrompt(body);

    let report: AIClinicalReport | null = null;

    let lastError = "";

    /* ==========================================
       Retry up to 3 times
    ========================================== */

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model: MODEL,
          contents: prompt,
        });

        let text = cleanResponse(response.text ?? "");

        if (!text) {
          throw new Error("Gemini returned an empty response.");
        }

        const parsed = JSON.parse(text);

        if (!validateReport(parsed)) {
          throw new Error("Invalid JSON schema.");
        }

        report = normalizeConfidence(parsed);

        break;
      } catch (err: any) {
        lastError = err.message;

        console.error(
          `Gemini attempt ${attempt} failed:`,
          err
        );
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

    /* ==========================================
       Additional Safety Checks
    ========================================== */

    report.problemList ??= [];

    report.differentials ??= [];

    report.recommendedDiagnostics ??= [];

    report.stabilization ??= [];

    report.treatmentConsiderations ??= [];

    report.monitoring ??= [];

    report.redFlags ??= [];

    report.clinicalPearls ??= [];

    report.clientSummary ??= "";

    report.prognosis ??= {
      shortTerm: "",
      longTerm: "",
    };

    report.patientSummary ??= {
      species: "",
      breed: "",
      age: "",
      sex: "",
      weight: "",
      summary: "",
    };

    report.triage ??= {
      status: "Stable",
      reason: "",
    };

    /* ==========================================
       Normalize Differential List
    ========================================== */

    report.differentials =
      report.differentials.map((d) => ({
        name: d.name ?? "Unknown Diagnosis",

        category: d.category ?? "General",

        confidence:
          Number(d.confidence) || 50,

        reasoning:
          d.reasoning ?? [],

        supportingFindings:
          d.supportingFindings ?? [],

        againstFindings:
          d.againstFindings ?? [],

        recommendedTests:
          d.recommendedTests ?? [],

        initialTreatment:
          d.initialTreatment ?? [],
      }));
          /* ==========================================
       Save Case to Supabase
    ========================================== */

    const { error: supabaseError } = await supabase
      .from("cases")
      .insert([
        {
          patient: body.patient,
          history: body.history,
          clinical_signs: body.clinicalSigns,
          physical_exam: body.physicalExam,
          diagnostics: body.diagnostics,
          ai_response: report,
        },
      ]);

    if (supabaseError) {
      console.error(
        "========== SUPABASE ERROR =========="
      );
      console.error(supabaseError);
      console.error(
        "===================================="
      );
    } else {
      console.log(
        "========== CASE SAVED =========="
      );
    }

    /* ==========================================
       Return Report
    ========================================== */

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