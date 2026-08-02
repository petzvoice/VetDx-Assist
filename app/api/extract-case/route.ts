import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { generateFallbackExtraction } from "@/lib/knowledge-engine/generateFallbackExtraction";

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



// Remove empty fields recursively

function removeEmptyFields(value: any): any {

  if (Array.isArray(value)) {

    const cleanedArray = value
      .map(removeEmptyFields)
      .filter(
        (item) =>
          item !== "" &&
          item !== null &&
          item !== undefined
      );


    return cleanedArray;
  }



  if (
    value &&
    typeof value === "object"
  ) {

    const cleanedObject: any = {};


    Object.entries(value).forEach(
      ([key, val]) => {

        const cleanedValue =
          removeEmptyFields(val);


        if (
          cleanedValue !== undefined &&
          cleanedValue !== ""
        ) {

          cleanedObject[key] =
            cleanedValue;

        }

      }
    );


    return Object.keys(cleanedObject).length > 0
      ? cleanedObject
      : undefined;

  }


  return value === ""
    ? undefined
    : value;
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

function filterNonEmptyEntries(
  entries: [string, any][]
) {
  return Object.fromEntries(
    entries.filter(
      ([_, value]) =>
        value !== "" &&
        value !== undefined &&
        value !== null &&
        !(Array.isArray(value) && value.length === 0)
    )
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
      await ai.models.generateContent({

        model: MODEL,

        contents:
          buildPrompt(notes),

      });



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



    const cleanedCase =
  removeEmptyFields(extracted) ?? {};


const fallbackCase =
  generateFallbackExtraction(notes ?? "");


const finalCase = {

  patient: {
  ...filterNonEmptyEntries(
    Object.entries(fallbackCase.patient)
  ),
  ...(cleanedCase.patient ?? {}),
},


  history: {
  ...filterNonEmptyEntries(
    Object.entries(fallbackCase.history)
  ),
  ...(cleanedCase.history ?? {}),
},


  clinicalSigns: {
  general: [
    ...new Set([
      ...(fallbackCase.clinicalSigns.general ?? []),
      ...(cleanedCase.clinicalSigns?.general ?? [])
    ])
  ],

  gastrointestinal: [
    ...new Set([
      ...(fallbackCase.clinicalSigns.gastrointestinal ?? []),
      ...(cleanedCase.clinicalSigns?.gastrointestinal ?? [])
    ])
  ],

  respiratory: [
    ...new Set([
      ...(fallbackCase.clinicalSigns.respiratory ?? []),
      ...(cleanedCase.clinicalSigns?.respiratory ?? [])
    ])
  ],

  cardiovascular: [
    ...new Set([
      ...(fallbackCase.clinicalSigns.cardiovascular ?? []),
      ...(cleanedCase.clinicalSigns?.cardiovascular ?? [])
    ])
  ],

  urinary: [
    ...new Set([
      ...(fallbackCase.clinicalSigns.urinary ?? []),
      ...(cleanedCase.clinicalSigns?.urinary ?? [])
    ])
  ],

  neurological: [
    ...new Set([
      ...(fallbackCase.clinicalSigns.neurological ?? []),
      ...(cleanedCase.clinicalSigns?.neurological ?? [])
    ])
  ],

  musculoskeletal: [
    ...new Set([
      ...(fallbackCase.clinicalSigns.musculoskeletal ?? []),
      ...(cleanedCase.clinicalSigns?.musculoskeletal ?? [])
    ])
  ],

  dermatology: [
    ...new Set([
      ...(fallbackCase.clinicalSigns.dermatology ?? []),
      ...(cleanedCase.clinicalSigns?.dermatology ?? [])
    ])
  ],

  reproductive: [
    ...new Set([
      ...(fallbackCase.clinicalSigns.reproductive ?? []),
      ...(cleanedCase.clinicalSigns?.reproductive ?? [])
    ])
  ],
},


  physicalExam: {
  ...filterNonEmptyEntries(
    Object.entries(fallbackCase.physicalExam)
  ),
  ...(cleanedCase.physicalExam ?? {}),
},


 diagnostics: {
  ...filterNonEmptyEntries(
    Object.entries(fallbackCase.diagnostics)
  ),
  ...(cleanedCase.diagnostics ?? {}),
},

};




return NextResponse.json({

  success: true,

  data: finalCase,

});


  } catch (error: any) {


    console.error(
      "========== EXTRACT CASE ERROR =========="
    );

    console.error(error);

    console.error(
      "========================================"
    );



    const fallbackCase = generateFallbackExtraction(
  notes ?? ""
);

console.warn(
  "Primary extraction unavailable. Using VetDx extraction fallback."
);

return NextResponse.json({
  success: true,
  data: fallbackCase,
});
  }

}