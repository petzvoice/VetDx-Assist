import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODEL = "gemini-2.5-flash";

function buildPrompt(
  type: string,
  name: string,
  species: string
) {
  return `
You are a board-certified veterinary internal medicine specialist.

You are creating a structured veterinary knowledge card for VetDx Assist.

Return ONLY valid JSON.

Do NOT use markdown.

Do NOT use code fences.

Do NOT explain anything.

Knowledge Type:
${type}

Knowledge Name:
${name}

Species:
${species}

Generate a ${type} knowledge card using EXACTLY this JSON schema.

{
  "id": "",
  "title": "",
  "description": "",
  "species": [],
  "synonyms": [],
  "overview": "",
  "clinicalProblems": [],
  "workflow": [
    {
      "id": "",
      "step": 1,
      "title": "",
      "description": ""
    }
  ],
  "diagnostics": [
    {
      "id": "",
      "name": "",
      "priority": "Essential",
      "reason": ""
    }
  ],
  "drugCategories": [
    {
      "category": "",
      "indication": "",
      "reason": ""
    }
  ],
  "monitoring": [
    {
      "id": "",
      "parameter": "",
      "frequency": "",
      "reason": ""
    }
  ],
  "precautions": [
    {
      "id": "",
      "title": "",
      "description": ""
    }
  ],
  "prognosis": ""
}

Rules:

- id should be lowercase with hyphens.
Example:
leptospirosis-dog

- species must always be an array.

Example

["Dog"]

- description should be one short sentence.

- overview should be concise and clinically useful.

- diagnostics should contain 5-10 important diagnostic steps.

- priorities can only be

Essential
Recommended
Optional

- clinicalProblems should contain the major clinical problems only.

Example

[
"Acute kidney injury",
"Hepatic dysfunction",
"Vomiting",
"Dehydration"
]

- monitoring should contain important parameters clinicians should monitor.

- precautions should contain important clinical cautions.

- prognosis should be one concise paragraph.

Generate ONLY the JSON object.

Do not omit fields.

Do not invent additional fields.

Every array must contain at least one item if information exists.

If information is genuinely unavailable, use:

[]

for arrays

or

""

for strings.

Return ONLY JSON.
VetDx Standards

Write for practicing veterinarians.

Avoid textbook language.

Use concise clinical language.

Focus on practical clinical decision support.

Do NOT include historical background unless clinically relevant.

Do NOT recommend individual drug names.

Recommend ONLY therapeutic categories.

Prefer diagnostics commonly available in general veterinary practice.

Use current veterinary clinical standards.

Avoid unnecessary repetition.

Every section should provide actionable clinical information.
Content Guidelines

Overview:
Maximum 150 words.

Clinical Problems:
List 5–10 major clinical problems.

Workflow:
Generate 6–10 sequential workflow steps.

Diagnostics:
Generate 5–10 diagnostic steps.

Monitoring:
Generate 5–10 monitoring parameters.

Precautions:
Generate 3–8 important precautions.

Drug Categories:
Generate 3–8 therapeutic categories.

Prognosis:
Maximum 120 words.

Descriptions should be concise and clinically actionable.

Avoid repeating information across sections.

`;
}

function cleanResponse(text: string) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = buildPrompt(
      body.type,
      body.name,
      body.species
    );

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

    const firstBrace = text.indexOf("{");
    const lastBrace = text.lastIndexOf("}");

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

    const parsed = JSON.parse(jsonText);

if (
  !parsed.id ||
  !parsed.title ||
  !parsed.overview ||
  !Array.isArray(parsed.species)
) {
  throw new Error(
    "Generated knowledge card is missing required fields."
  );
}

return NextResponse.json({
  success: true,
  data: parsed,
});

  } catch (error: any) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.message ??
          "Knowledge generation failed.",
      },
      {
        status: 500,
      }
    );

  }
}