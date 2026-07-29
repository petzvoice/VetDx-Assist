import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineAcuteKidneyInjury: DiseaseCard = {
  id: "canine-acute-kidney-injury-dog",

  title: "Canine Acute Kidney Injury",

  description:
    "A sudden decline in renal function resulting in impaired glomerular filtration, azotemia, electrolyte abnormalities, fluid imbalance, and uremic complications.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "AKI",
    "Acute Renal Injury",
    "Acute Renal Failure",
  ],

  overview:
    "Acute kidney injury (AKI) is characterized by an abrupt reduction in kidney function occurring over hours to days. Common causes include ischemia, nephrotoxins, infectious diseases such as leptospirosis, urinary obstruction, and severe systemic illness. AKI may result in oliguria or anuria, fluid overload, electrolyte disturbances, metabolic acidosis, and uremia. Early recognition and aggressive supportive care are essential to maximize renal recovery.",

  clinicalProblems: [

    "Acute azotemia",
    "Oliguria/Anuria",
    "Fluid imbalance",
    "Hyperkalemia",
    "Metabolic acidosis",
    "Uremia",
    "Hypertension",
    "Acute kidney dysfunction"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess hydration, urine output, cardiovascular stability, electrolyte abnormalities, and identify the underlying cause."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Determine the cause of AKI, evaluate severity, and differentiate from chronic kidney disease."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Restore renal perfusion, correct electrolyte and acid-base disturbances, and provide supportive care."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Closely monitor urine output, renal function, electrolytes, and volume status."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Monitor renal recovery and identify progression to chronic kidney disease if persistent dysfunction remains."
    }

  ],

  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Evaluates inflammatory disease, anemia, and concurrent disorders."
    },

    {
      id: "chemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Assesses azotemia, electrolyte abnormalities, phosphorus, and acid-base disturbances."
    },

    {
      id: "urinalysis",
      name: "Urinalysis",
      priority: "Essential",
      reason:
        "Evaluates urine concentrating ability, casts, proteinuria, and sediment."
    },

    {
      id: "sdma",
      name: "Serum SDMA",
      priority: "Recommended",
      reason:
        "Assesses reduction in glomerular filtration rate."
    },

    {
      id: "renal-ultrasound",
      name: "Renal Ultrasonography",
      priority: "Recommended",
      reason:
        "Identifies obstruction, pyelonephritis, nephroliths, or structural abnormalities."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Hypovolemia",
      reason: "Restores renal perfusion and corrects dehydration."
    },

    {
      category: "Antiemetic",
      indication: "Uremic vomiting",
      reason: "Improves patient comfort and nutritional intake."
    },

    {
      category: "Gastroprotectant",
      indication: "Uremic gastritis",
      reason: "Reduces gastrointestinal ulceration."
    },

    {
      category: "Antibiotic",
      indication: "Infectious cause",
      reason: "Treats underlying bacterial disease when indicated."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "maropitant",
      priority: "Supportive",
      category: "Antiemetic",
    },

    {
      drugId: "pantoprazole",
      priority: "Supportive",
      category: "Gastroprotectant",
    },

    {
      drugId: "doxycycline",
      priority: "Conditional",
      category: "Antibiotic",
    }

  ],

  stabilization: [

    "Correct hypovolemia with intravenous crystalloid fluids.",
    "Closely monitor urine output.",
    "Treat hyperkalemia when present.",
    "Correct acid-base and electrolyte abnormalities.",
    "Address the underlying cause of kidney injury."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Recent nephrotoxin exposure", weight: 35 },

      { finding: "Leptospira exposure", weight: 35 },

      { finding: "Acute vomiting", weight: 20 },

      { finding: "Urinary obstruction", weight: 40 }

    ],

    clinicalSigns: [

      { finding: "Oliguria", weight: 45 },

      { finding: "Anuria", weight: 50 },

      { finding: "Dehydration", weight: 25 },

      { finding: "Uremic breath", weight: 20 }

    ],

    biochemistry: [

      { finding: "Increased Creatinine", weight: 45 },

      { finding: "Increased BUN", weight: 40 },

      { finding: "Hyperphosphatemia", weight: 30 },

      { finding: "Hyperkalemia", weight: 35 }

    ],

    urinalysis: [

      { finding: "Renal tubular casts", weight: 30 },

      { finding: "Isosthenuria", weight: 25 },

      { finding: "Proteinuria", weight: 20 }

    ],

    supports: [

      { finding: "Acute increase in renal values", weight: 45 },

      { finding: "Reduced urine production", weight: 45 },

      { finding: "Renal abnormalities on ultrasound", weight: 30 }

    ],

    against: [

      { finding: "Stable chronic azotemia", weight: -30 },

      { finding: "Normal renal values", weight: -45 },

      { finding: "Prerenal azotemia resolving after fluids", weight: -35 }

    ],

  },

  monitoring: [

    {
      id:"renal",
      parameter:
        "Creatinine, BUN and phosphorus",
      frequency:
        "Daily during hospitalization",
      reason:
        "Monitors renal recovery."
    },

    {
      id:"urine",
      parameter:
        "Urine output",
      frequency:
        "Hourly in critical patients",
      reason:
        "Assesses renal function and response to therapy."
    },

    {
      id:"electrolytes",
      parameter:
        "Electrolytes and acid-base status",
      frequency:
        "Daily or more frequently if unstable",
      reason:
        "Detects life-threatening abnormalities."
    }

  ],

  precautions: [

    {
      id:"fluids",
      title:
        "Avoid Fluid Overload",
      description:
        "Fluid therapy should be individualized according to urine output and hydration status."
    },

    {
      id:"nephrotoxins",
      title:
        "Avoid Nephrotoxic Medications",
      description:
        "Discontinue nephrotoxic drugs whenever possible and adjust drug dosages for reduced renal function."
    }

  ],

  prognosis:
    "Prognosis varies according to the underlying cause, severity of renal injury, urine production, and response to therapy. Early treatment improves the likelihood of renal recovery, while severe oliguric or anuric AKI carries a guarded prognosis.",

  strengtheningEvidence: [

    "Acute azotemia",

    "Oliguria",

    "Anuria",

    "Hyperkalemia",

    "Renal tubular casts",

    "Acute renal injury on imaging"

  ],

  weakeningEvidence: [

    "Stable chronic kidney disease",

    "Normal renal values",

    "Resolution after fluid therapy alone",

    "Normal urine output",

    "Alternative diagnosis confirmed"

  ],

  classicFindings: [

    "Acute onset",

    "Vomiting",

    "Oliguria",

    "Hyperkalemia",

    "Azotemia",

    "Isosthenuria"

  ],

  ruleOutFindings: [

    "Chronic kidney disease",

    "Prerenal azotemia",

    "Postrenal urinary obstruction",

    "Pyelonephritis",

    "Leptospirosis"

  ],

};