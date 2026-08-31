import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const PRIMARY_MODEL = "gemini-2.5-flash";

const FALLBACK_MODELS = [
  "gemini-2.5-flash-lite",
  "gemini-3.1-flash-lite",
  "gemini-3.5-flash-lite",
  "gemini-3.5-flash",
  
] as const;


/**
 * ============================================================
 * GEMINI QUOTA ERROR DETECTION
 * ============================================================
 *
 * Fallback models are used ONLY for quota/rate-limit errors.
 *
 * Do NOT fallback for:
 * - malformed JSON
 * - empty response
 * - invalid extracted case
 * - authentication errors
 * - permission errors
 * - bad request errors
 * - application errors
 */

function isGeminiQuotaError(error: unknown): boolean {
  if (!error) {
    return false;
  }

  const errorObject = error as {
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
 * Fallback 1:
 *   gemini-2.5-flash-lite
 *
 * Fallback 2:
 *   gemini-3.1-flash-lite
 *
 * Fallback 3:
 *   gemini-3.5-flash-lite
 *
 * Fallback 4:
 *   gemini-3.5-flash
 *
 * 
 *
 * Fallback occurs ONLY for quota/rate-limit errors.
 */

async function generateGeminiResponse(notes: string) {
  try {
    /**
     * --------------------------------------------------------
     * PRIMARY MODEL
     * --------------------------------------------------------
     */
    return await ai.models.generateContent({
      model: PRIMARY_MODEL,
      contents: buildPrompt(notes),
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
          contents: buildPrompt(notes),
        });
      } catch (fallbackError: unknown) {
        /**
         * ----------------------------------------------------
         * Continue ONLY if fallback also has quota problem.
         *
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

  let notes = "";

  try {

   ({ notes } = await req.json());




    if (!notes || !notes.trim()) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Clinical notes are required.",
        },
        {
          status: 400,
        }
      );

    }



    const response =
  await generateGeminiResponse(notes);



    const text =
      cleanResponse(
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
        "No JSON object returned."
      );

    }



    const json =
      text.slice(
        firstBrace,
        lastBrace + 1
      );



    const extracted =
      JSON.parse(json);



    if (!validateExtractedCase(extracted)) {

      throw new Error(
        "Invalid extracted case structure."
      );

    }



return NextResponse.json({
  success: true,
  data: extracted,
});

  } catch (error: any) {


    console.error(
      "========== EXTRACT CASE ERROR =========="
    );

    console.error(error);

    console.error(
      "========================================"
    );



   return NextResponse.json(
  {
    success: false,
    message:
      error?.message ??
      "Failed to extract clinical information.",
  },
  {
    status: 500,
  }
);
  }

}