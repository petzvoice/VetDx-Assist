import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODEL = "gemini-2.5-flash";

function buildPrompt(notes: string) {
  return `
You are VetDx Assist.

You are an expert veterinary clinical documentation assistant.

IMPORTANT:

You are NOT diagnosing the patient.

Your ONLY responsibility is to extract structured clinical information from the notes exactly as written.

Rules:

- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap JSON inside \`\`\`.
- Do NOT explain anything.
- Do NOT diagnose.
- Do NOT recommend treatment.
- Never invent information.
- Leave unknown fields as "" or [].
- Ignore greetings, signatures, billing information, owner conversations and unrelated text.
- Preserve only clinically relevant information.

Clinical Signs Rules:

- Classify each sign into the most appropriate body system.
- If unsure, place it in "general".

Examples:

Vomiting → gastrointestinal
Diarrhea → gastrointestinal
Cough → respiratory
Dyspnea → respiratory
Weakness → general
Lethargy → general
Fever → general
Seizures → neurological
Lameness → musculoskeletal
Pruritus → dermatology
Hematuria → urinary

Return EXACTLY this JSON:

{
  "patient": {
    "species": "",
    "breed": "",
    "age": "",
    "sex": "",
    "weight": ""
  },

  "history": {
    "chiefComplaint": "",
    "duration": "",
    "appetite": "",
    "activity": "",
    "waterIntake": "",
    "urination": "",
    "defecation": "",
    "illnessHistory": "",
    "previousTreatment": ""
  },

  "clinicalSigns": {
    "general": [],
    "gastrointestinal": [],
    "respiratory": [],
    "cardiovascular": [],
    "urinary": [],
    "neurological": [],
    "musculoskeletal": [],
    "dermatology": [],
    "reproductive": []
  },

  "physicalExam": {
    "temperature": "",
    "pulse": "",
    "heartRate": "",
    "respiration": "",
    "respiratoryRate": "",
    "mucousMembranes": "",
    "pulseQuality": "",
    "crt": "",
    "hydration": "",
    "lymphNodes": "",
    "bodyConditionScore": "",
    "painScore": "",
    "findings": "",
    "notes": "",
    "abdominalFindings": [],
    "heartFindings": [],
    "lungFindings": []
  },

  "diagnostics": {
    "cbc": "",
    "biochemistry": "",
    "urinalysis": "",
    "imaging": "",
    "otherTests": ""
  }
}

Clinical Notes:

${notes}
`;
}

function cleanResponse(text: string) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

function validateExtractedCase(data: any) {
  return (
    data &&
    typeof data === "object" &&
    data.patient &&
    data.history &&
    data.clinicalSigns &&
    data.physicalExam &&
    data.diagnostics
  );
}

export async function POST(req: Request) {
  try {
    const { notes } = await req.json();

    if (!notes || !notes.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Clinical notes are required.",
        },
        {
          status: 400,
        }
      );
    }

    const response = await ai.models.generateContent({
      model: MODEL,
      contents: buildPrompt(notes),
    });

    const text = cleanResponse(response.text ?? "");

    if (!text) {
      throw new Error("Gemini returned an empty response.");
    }

    const firstBrace = text.indexOf("{");
    const lastBrace = text.lastIndexOf("}");

    if (firstBrace === -1 || lastBrace === -1) {
      throw new Error("No JSON object returned.");
    }

    const json = text.slice(firstBrace, lastBrace + 1);

    const extracted = JSON.parse(json);

    if (!validateExtractedCase(extracted)) {
      throw new Error("Invalid extracted case structure.");
    }

    return NextResponse.json({
      success: true,
      data: extracted,
    });
  } catch (error: any) {
    console.error("========== EXTRACT CASE ERROR ==========");
    console.error(error);
    console.error("========================================");

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ??
          "Unable to extract clinical information.",
      },
      {
        status: 500,
      }
    );
  }
}