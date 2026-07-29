import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineGastrointestinalLymphoma: DiseaseCard = {
  id: "canine-gastrointestinal-lymphoma-dog",

  title: "Canine Gastrointestinal Lymphoma",

  description:
    "A malignant lymphoid tumor affecting the gastrointestinal tract that causes chronic gastrointestinal signs, intestinal wall abnormalities, weight loss, and systemic illness.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "GI Lymphoma",
    "Intestinal Lymphoma",
    "Gastrointestinal Cancer",
    "Alimentary Lymphoma",
  ],

  overview:
    "Gastrointestinal lymphoma is one of the most common intestinal malignancies in dogs. It may involve the stomach, small intestine, large intestine, or multiple gastrointestinal sites. Clinical signs are often nonspecific and include vomiting, diarrhea, anorexia, weight loss, and lethargy. Intestinal lymphoma can cause thickening of the intestinal wall, obstruction, protein-losing enteropathy, or malabsorption. Diagnosis requires cytology, histopathology, and immunophenotyping when available.",

  clinicalProblems: [

    "Intestinal neoplasia",
    "Chronic vomiting",
    "Chronic diarrhea",
    "Weight loss",
    "Malabsorption",
    "Protein loss",
    "Intestinal obstruction",
    "Systemic illness"

  ],

  workflow: [

    {
      id: "clinical-assessment",
      step: 1,
      title: "Clinical Assessment",
      description:
        "Evaluate chronic gastrointestinal signs, weight loss, appetite changes, and systemic illness."
    },

    {
      id: "laboratory-evaluation",
      step: 2,
      title: "Laboratory Evaluation",
      description:
        "Assess systemic effects, nutritional status, and organ involvement."
    },

    {
      id: "imaging",
      step: 3,
      title: "Diagnostic Imaging",
      description:
        "Identify intestinal abnormalities and possible masses."
    },

    {
      id: "sampling",
      step: 4,
      title: "Tissue Diagnosis",
      description:
        "Obtain cytology or biopsy samples for definitive diagnosis."
    },

    {
      id: "staging",
      step: 5,
      title: "Disease Staging",
      description:
        "Evaluate extent of disease before treatment planning."
    }

  ],

  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates anemia, inflammation, and systemic effects."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Assesses organ function, protein levels, and metabolic changes."
    },

    {
      id: "abdominal-ultrasound",
      name: "Abdominal Ultrasound",
      priority: "Essential",
      reason:
        "Evaluates intestinal wall thickening, masses, and lymph nodes."
    },

    {
      id: "cytology",
      name: "Fine Needle Aspiration Cytology",
      priority: "Recommended",
      reason:
        "May identify malignant lymphoid cells."
    },

    {
      id: "biopsy",
      name: "Intestinal Biopsy",
      priority: "Recommended",
      reason:
        "Provides definitive histopathological diagnosis."
    }

  ],

  drugCategories: [

    {
      category: "Chemotherapy",
      indication: "Lymphoid malignancy",
      reason:
        "Primary treatment approach for lymphoma."
    },

    {
      category: "Supportive Therapy",
      indication: "Clinical complications",
      reason:
        "Manages vomiting, nutritional problems, and discomfort."
    },

    {
      category: "Nutritional Support",
      indication: "Weight loss and malnutrition",
      reason:
        "Supports patient condition during treatment."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "prednisolone",
      priority: "Supportive",
      category: "Corticosteroid",
    }

  ],

  stabilization: [

    "Correct dehydration and electrolyte abnormalities.",
    "Provide nutritional support.",
    "Control vomiting and gastrointestinal discomfort.",
    "Evaluate for intestinal obstruction.",
    "Begin oncology management after diagnosis."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Chronic vomiting", weight: 40 },

      { finding: "Chronic diarrhea", weight: 35 },

      { finding: "Progressive weight loss", weight: 50 },

      { finding: "Reduced appetite", weight: 35 },

      { finding: "Older age", weight: 30 }

    ],

    clinicalSigns: [

      { finding: "Weight loss", weight: 50 },

      { finding: "Vomiting", weight: 40 },

      { finding: "Diarrhea", weight: 35 },

      { finding: "Lethargy", weight: 30 },

      { finding: "Poor body condition", weight: 35 }

    ],

    biochemistry: [

      { finding: "Hypoalbuminemia", weight: 35 },

      { finding: "Anemia", weight: 25 },

      { finding: "Protein-losing enteropathy", weight: 35 }

    ],

    imaging: [

      { finding: "Intestinal wall thickening", weight: 45 },

      { finding: "Intestinal mass lesion", weight: 55 },

      { finding: "Regional lymph node enlargement", weight: 40 }

    ],

    supports: [

      { finding: "Chronic gastrointestinal signs with weight loss", weight: 45 },

      { finding: "Intestinal mass or thickening on imaging", weight: 55 },

      { finding: "Malignant lymphoid cells on cytology", weight: 60 },

      { finding: "Biopsy confirmation", weight: 70 }

    ],

    against: [

      { finding: "Acute self-limiting diarrhea", weight: -35 },

      { finding: "Normal intestinal imaging", weight: -50 },

      { finding: "No weight loss", weight: -25 },

      { finding: "Confirmed infectious disease only", weight: -30 }

    ],

  },

  monitoring: [

    {
      id:"weight",
      parameter:
        "Body weight and body condition",
      frequency:
        "Regular follow-up",
      reason:
        "Monitors disease progression and nutritional status."
    },

    {
      id:"clinical",
      parameter:
        "Vomiting and diarrhea frequency",
      frequency:
        "Daily",
      reason:
        "Evaluates clinical response."
    },

    {
      id:"bloodwork",
      parameter:
        "CBC and biochemical profile",
      frequency:
        "Periodic",
      reason:
        "Monitors systemic effects and treatment tolerance."
    }

  ],

  precautions: [

    {
      id:"diagnosis",
      title:
        "Confirm Diagnosis Before Treatment",
      description:
        "Chronic inflammatory diseases can resemble intestinal lymphoma."
    },

    {
      id:"staging",
      title:
        "Assess Disease Extent",
      description:
        "Staging helps determine prognosis and treatment options."
    }

  ],

  prognosis:
    "Prognosis varies depending on location, disease stage, lymphoma type, and response to therapy. Early diagnosis generally improves management options.",

  strengtheningEvidence: [

    "Progressive weight loss",

    "Chronic gastrointestinal signs",

    "Intestinal thickening or mass",

    "Abnormal lymph nodes",

    "Biopsy confirmation"

  ],

  weakeningEvidence: [

    "Acute diarrhea only",

    "Normal imaging",

    "No weight loss",

    "Confirmed non-neoplastic disease"

  ],

  classicFindings: [

    "Older dog",

    "Weight loss",

    "Chronic vomiting",

    "Intestinal thickening",

    "Protein loss"

  ],

  ruleOutFindings: [

    "Inflammatory bowel disease",

    "Intestinal foreign body",

    "Protein-losing enteropathy",

    "Chronic pancreatitis",

    "Severe parasitism"

  ],

};