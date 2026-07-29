import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineChronicKidneyDisease: DiseaseCard = {
  id: "canine-chronic-kidney-disease-dog",

  title: "Canine Chronic Kidney Disease",

  description:
    "A progressive and irreversible loss of renal function resulting in impaired excretory, endocrine, and metabolic functions of the kidneys.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "CKD",
    "Chronic Renal Disease",
    "Chronic Renal Failure",
    "Chronic Kidney Failure",
  ],

  overview:
    "Chronic kidney disease (CKD) is a common progressive disorder characterized by irreversible nephron loss. As functional renal mass declines, dogs develop azotemia, impaired urine concentrating ability, electrolyte disturbances, systemic hypertension, proteinuria, anemia, and uremic syndrome. Early diagnosis, IRIS staging, renal diet, management of proteinuria and hypertension, and regular monitoring help slow disease progression and improve quality of life.",

  clinicalProblems: [

    "Progressive nephron loss",
    "Azotemia",
    "Polyuria/Polydipsia",
    "Proteinuria",
    "Systemic hypertension",
    "Anemia",
    "Hyperphosphatemia",
    "Uremia"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess hydration status, blood pressure, body condition, IRIS stage, and identify concurrent diseases."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm chronic kidney disease, determine IRIS stage, and evaluate complications."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Initiate renal diet, maintain hydration, control hypertension and proteinuria, and manage CKD complications."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Disease Progression",
      description:
        "Monitor renal values, blood pressure, proteinuria, electrolytes, and nutritional status."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Provide lifelong monitoring and adjust therapy according to IRIS recommendations."
    }

  ],

  diagnostics: [

    {
      id: "chemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Evaluates azotemia, phosphorus, calcium, and electrolyte abnormalities."
    },

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Detects non-regenerative anemia and concurrent disease."
    },

    {
      id: "urinalysis",
      name: "Urinalysis with Urine Protein:Creatinine Ratio",
      priority: "Essential",
      reason:
        "Assesses concentrating ability and proteinuria."
    },

    {
      id: "sdma",
      name: "Serum SDMA",
      priority: "Essential",
      reason:
        "Detects early reduction in glomerular filtration rate."
    },

    {
      id: "blood-pressure",
      name: "Systemic Blood Pressure",
      priority: "Essential",
      reason:
        "Identifies hypertension requiring treatment."
    }

  ],

  drugCategories: [

    {
      category: "ACE Inhibitor",
      indication: "Proteinuria",
      reason: "Reduces protein loss and slows CKD progression."
    },

    {
      category: "Calcium Channel Blocker",
      indication: "Hypertension",
      reason: "Controls systemic hypertension."
    },

    {
      category: "Phosphate Binder",
      indication: "Hyperphosphatemia",
      reason: "Reduces intestinal phosphorus absorption."
    },

    {
      category: "Antiemetic",
      indication: "Uremic vomiting",
      reason: "Controls nausea and improves appetite."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "benazepril",
      priority: "First Line",
      category: "ACE Inhibitor",
    },

    {
      drugId: "amlodipine",
      priority: "First Line",
      category: "Calcium Channel Blocker",
    },

    {
      drugId: "aluminum-hydroxide",
      priority: "Adjunctive",
      category: "Phosphate Binder",
    },

    {
      drugId: "maropitant",
      priority: "Supportive",
      category: "Antiemetic",
    }

  ],

  stabilization: [

    "Correct dehydration if present.",
    "Provide renal therapeutic diet.",
    "Treat hypertension and proteinuria.",
    "Control hyperphosphatemia.",
    "Manage nausea and maintain nutritional intake."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Polyuria", weight: 30 },

      { finding: "Polydipsia", weight: 30 },

      { finding: "Weight loss", weight: 20 },

      { finding: "Reduced appetite", weight: 20 }

    ],

    clinicalSigns: [

      { finding: "Poor body condition", weight: 20 },

      { finding: "Dehydration", weight: 20 },

      { finding: "Oral ulcers", weight: 25 },

      { finding: "Halitosis", weight: 20 }

    ],

    biochemistry: [

      { finding: "Increased Creatinine", weight: 45 },

      { finding: "Increased SDMA", weight: 40 },

      { finding: "Hyperphosphatemia", weight: 30 },

      { finding: "Azotemia", weight: 45 }

    ],

    urinalysis: [

      { finding: "Inadequately concentrated urine", weight: 35 },

      { finding: "Proteinuria", weight: 30 }

    ],

    supports: [

      { finding: "Persistently elevated renal values", weight: 45 },

      { finding: "Small irregular kidneys on ultrasound", weight: 40 },

      { finding: "Persistent renal proteinuria", weight: 35 }

    ],

    against: [

      { finding: "Acute kidney injury", weight: -30 },

      { finding: "Normal renal function", weight: -45 },

      { finding: "Prerenal azotemia resolving after fluids", weight: -35 }

    ],

  },

  monitoring: [

    {
      id:"renal",
      parameter:
        "Creatinine, SDMA and BUN",
      frequency:
        "Every 1–3 months",
      reason:
        "Monitors disease progression."
    },

    {
      id:"phosphorus",
      parameter:
        "Serum phosphorus and electrolytes",
      frequency:
        "Every 1–3 months",
      reason:
        "Guides dietary and phosphate binder therapy."
    },

    {
      id:"blood-pressure",
      parameter:
        "Systemic blood pressure and UPC",
      frequency:
        "Every recheck",
      reason:
        "Monitors hypertension and proteinuria."
    }

  ],

  precautions: [

    {
      id:"nephrotoxins",
      title:
        "Avoid Nephrotoxic Drugs",
      description:
        "Avoid or carefully monitor medications that may further impair renal function."
    },

    {
      id:"hydration",
      title:
        "Maintain Hydration",
      description:
        "Prevent dehydration as it can rapidly worsen azotemia and clinical signs."
    }

  ],

  prognosis:
    "CKD is progressive and irreversible. Prognosis depends on IRIS stage, degree of proteinuria, hypertension, and response to treatment. Early intervention and regular monitoring can significantly improve survival and quality of life.",

  strengtheningEvidence: [

    "Persistent azotemia",

    "Elevated SDMA",

    "Proteinuria",

    "Poor urine concentrating ability",

    "Small irregular kidneys",

    "Hyperphosphatemia"

  ],

  weakeningEvidence: [

    "Prerenal azotemia",

    "Acute kidney injury",

    "Normal SDMA",

    "Normal creatinine",

    "Resolution following fluid therapy"

  ],

  classicFindings: [

    "Polyuria",

    "Polydipsia",

    "Weight loss",

    "Persistent azotemia",

    "Proteinuria",

    "Hyperphosphatemia"

  ],

  ruleOutFindings: [

    "Acute kidney injury",

    "Pyelonephritis",

    "Urinary obstruction",

    "Leptospirosis",

    "Prerenal dehydration"

  ],

};