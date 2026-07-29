import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineProteinLosingEnteropathy: DiseaseCard = {
  id: "canine-protein-losing-enteropathy-dog",

  title: "Canine Protein-Losing Enteropathy (PLE)",

  description:
    "A gastrointestinal disorder characterized by excessive loss of plasma proteins through the intestinal tract resulting in hypoalbuminemia, edema, and systemic complications.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "PLE",
    "Protein-Losing Enteropathy",
    "Intestinal Protein Loss",
    "Enteric Protein Loss",
  ],

  overview:
    "Protein-losing enteropathy is a syndrome caused by abnormal loss of proteins through the intestinal mucosa. It is not a single disease but a consequence of several intestinal disorders including inflammatory bowel disease, intestinal lymphangiectasia, gastrointestinal lymphoma, and severe intestinal inflammation. Loss of albumin and other proteins can result in edema, ascites, weight loss, and increased risk of complications. Diagnosis requires identification of intestinal protein loss and investigation of the underlying cause.",

  clinicalProblems: [

    "Hypoalbuminemia",
    "Protein loss through intestine",
    "Weight loss",
    "Edema",
    "Ascites",
    "Chronic diarrhea",
    "Malnutrition",
    "Thromboembolic risk"

  ],

  workflow: [

    {
      id: "clinical-recognition",
      step: 1,
      title: "Clinical Recognition",
      description:
        "Identify signs associated with chronic intestinal disease and protein loss."
    },

    {
      id: "laboratory-confirmation",
      step: 2,
      title: "Laboratory Confirmation",
      description:
        "Confirm low serum proteins and evaluate systemic effects."
    },

    {
      id: "identify-cause",
      step: 3,
      title: "Identify Underlying Cause",
      description:
        "Investigate inflammatory, lymphatic, neoplastic, or other intestinal disorders."
    },

    {
      id: "management",
      step: 4,
      title: "Disease Management",
      description:
        "Treat underlying disease and provide nutritional support."
    },

    {
      id: "monitoring",
      step: 5,
      title: "Long-Term Monitoring",
      description:
        "Monitor protein levels, body condition, and clinical response."
    }

  ],

  diagnostics: [

    {
      id: "serum-protein",
      name: "Serum Protein and Albumin Measurement",
      priority: "Essential",
      reason:
        "Detects hypoproteinemia associated with protein loss."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates inflammation and anemia."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Assesses albumin, cholesterol, liver and kidney function."
    },

    {
      id: "fecal-testing",
      name: "Fecal Examination",
      priority: "Recommended",
      reason:
        "Rules out parasitic causes of intestinal protein loss."
    },

    {
      id: "abdominal-ultrasound",
      name: "Abdominal Ultrasound",
      priority: "Recommended",
      reason:
        "Evaluates intestinal wall changes and lymphatic abnormalities."
    },

    {
      id: "intestinal-biopsy",
      name: "Intestinal Biopsy",
      priority: "Recommended",
      reason:
        "Identifies inflammatory, lymphatic, or neoplastic causes."
    }

  ],

  drugCategories: [

    {
      category: "Immunosuppressant",
      indication: "Inflammatory intestinal disease",
      reason:
        "Reduces intestinal inflammation when immune-mediated disease is present."
    },

    {
      category: "Nutritional Therapy",
      indication: "Protein and calorie support",
      reason:
        "Improves nutritional status and intestinal recovery."
    },

    {
      category: "Anticoagulant Therapy",
      indication: "Thromboembolism risk",
      reason:
        "Considered in dogs with increased clotting risk."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "prednisolone",
      priority: "Conditional",
      category: "Immunosuppressant",
    }

  ],

  stabilization: [

    "Correct dehydration and electrolyte abnormalities.",
    "Provide nutritional support.",
    "Monitor serum albumin levels.",
    "Identify and treat underlying intestinal disease.",
    "Monitor for thromboembolic complications."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Chronic diarrhea", weight: 45 },

      { finding: "Progressive weight loss", weight: 40 },

      { finding: "Chronic gastrointestinal disease", weight: 45 },

      { finding: "Poor response to routine treatment", weight: 30 }

    ],

    clinicalSigns: [

      { finding: "Weight loss", weight: 40 },

      { finding: "Chronic diarrhea", weight: 45 },

      { finding: "Peripheral edema", weight: 50 },

      { finding: "Ascites", weight: 45 },

      { finding: "Poor body condition", weight: 35 }

    ],

    biochemistry: [

      { finding: "Hypoalbuminemia", weight: 60 },

      { finding: "Hypoproteinemia", weight: 50 },

      { finding: "Low cholesterol concentration", weight: 25 }

    ],

    imaging: [

      { finding: "Intestinal wall abnormalities", weight: 35 },

      { finding: "Dilated intestinal lymphatic vessels", weight: 40 }

    ],

    supports: [

      { finding: "Low albumin with gastrointestinal signs", weight: 60 },

      { finding: "Chronic diarrhea and weight loss", weight: 45 },

      { finding: "Biopsy-confirmed intestinal disease", weight: 50 }

    ],

    against: [

      { finding: "Normal serum albumin", weight: -50 },

      { finding: "Acute self-limiting diarrhea", weight: -35 },

      { finding: "Primary kidney protein loss", weight: -35 },

      { finding: "No gastrointestinal signs", weight: -30 }

    ],

  },

  monitoring: [

    {
      id:"albumin",
      parameter:
        "Serum albumin concentration",
      frequency:
        "Regular follow-up",
      reason:
        "Evaluates response and disease progression."
    },

    {
      id:"weight",
      parameter:
        "Body weight and condition",
      frequency:
        "Regular monitoring",
      reason:
        "Assesses nutritional improvement."
    },

    {
      id:"clinical-signs",
      parameter:
        "Diarrhea and gastrointestinal signs",
      frequency:
        "Daily owner monitoring",
      reason:
        "Tracks treatment response."
    }

  ],

  precautions: [

    {
      id:"underlying",
      title:
        "Treat Underlying Disease",
      description:
        "PLE is a syndrome; identifying the primary intestinal disorder is essential."
    },

    {
      id:"complications",
      title:
        "Monitor for Complications",
      description:
        "Severe protein loss can increase risk of edema, ascites, and thrombosis."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause. Dogs with manageable inflammatory or dietary-responsive disease may improve, while severe intestinal neoplasia or advanced disease carries a guarded prognosis.",

  strengtheningEvidence: [

    "Hypoalbuminemia",

    "Chronic diarrhea",

    "Weight loss",

    "Edema or ascites",

    "Intestinal biopsy abnormalities"

  ],

  weakeningEvidence: [

    "Normal albumin",

    "Acute uncomplicated diarrhea",

    "No gastrointestinal signs",

    "Confirmed renal protein loss"

  ],

  classicFindings: [

    "Low albumin",

    "Chronic diarrhea",

    "Weight loss",

    "Edema",

    "Intestinal disease"

  ],

  ruleOutFindings: [

    "Protein-losing nephropathy",

    "Liver failure",

    "Inflammatory bowel disease",

    "Intestinal lymphoma",

    "Intestinal lymphangiectasia"

  ],

};