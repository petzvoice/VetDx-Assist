import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantUrolithiasis: DiseaseCard = {
  id: "small-ruminant-urolithiasis",

  title: "Urolithiasis",

  description:
    "A common obstructive urinary tract disease of sheep and goats characterized by formation of urinary calculi resulting in partial or complete urethral obstruction, bladder distension, uroperitoneum, and potentially fatal uremia.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Urinary Calculi",
    "Obstructive Urolithiasis",
    "Water Belly",
    "Urinary Stone Disease",
  ],

  overview:
    "Urolithiasis is one of the most important urinary tract diseases of male sheep and goats, particularly castrated animals. Calculi commonly develop due to dietary mineral imbalance, inadequate water intake, excessive concentrate feeding, and improper calcium-to-phosphorus ratio. Obstruction most frequently occurs at the urethral process or sigmoid flexure, leading to bladder distension, rupture, uroperitoneum, azotemia, electrolyte abnormalities, and death if untreated.",

  clinicalProblems: [

    "Urethral obstruction",
    "Urinary retention",
    "Bladder distension",
    "Uroperitoneum",
    "Azotemia",
    "Hyperkalemia",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess diet, concentrate feeding, mineral supplementation, water availability, castration age, and duration of dysuria."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate urination, abdominal pain, bladder distension, preputial swelling, urethral process, and evidence of uroperitoneum."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Perform ultrasonography, serum biochemistry, urinalysis, and abdominal fluid analysis when indicated."
    },

    {
      id: "management",
      step: 4,
      title: "Emergency Management",
      description:
        "Relieve urinary obstruction, correct electrolyte abnormalities, stabilize the patient, and perform surgical intervention when required."
    }

  ],

  diagnostics: [

    {
      id: "physical-examination",
      name: "Physical Examination",
      priority: "Essential",
      reason:
        "Identifies urinary obstruction and bladder distension."
    },

    {
      id: "ultrasound",
      name: "Abdominal Ultrasonography",
      priority: "Essential",
      reason:
        "Evaluates bladder size, bladder rupture, and uroperitoneum."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Detects azotemia, electrolyte abnormalities, and renal dysfunction."
    },

    {
      id: "urinalysis",
      name: "Urinalysis",
      priority: "Recommended",
      reason:
        "Identifies crystalluria, urine pH, and concurrent urinary tract disease."
    },

    {
      id: "abdominal-fluid",
      name: "Abdominal Fluid Analysis",
      priority: "Recommended",
      reason:
        "Confirms uroperitoneum by comparing abdominal fluid and serum creatinine."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Azotemia and dehydration",
      reason:
        "Corrects dehydration and improves renal perfusion."
    },

    {
      category: "Analgesics",
      indication: "Pain management",
      reason:
        "Relieves severe abdominal pain."
    },

    {
      category: "Antispasmodics",
      indication: "Urethral spasm",
      reason:
        "May reduce urethral spasm and facilitate urine passage."
    },

    {
      category: "Urinary Acidifiers",
      indication: "Prevention of recurrence",
      reason:
        "Helps reduce recurrence of phosphate-based calculi in selected cases."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "flunixin",
      priority: "Supportive",
      category: "Analgesic"
    },

    {
      drugId: "acepromazine",
      priority: "Supportive",
      category: "Antispasmodic"
    },

    {
      drugId: "ammonium-chloride",
      priority: "Preventive",
      category: "Urinary Acidifiers"
    }

  ],

  stabilization: [

    "Correct dehydration and electrolyte abnormalities.",
    "Provide adequate analgesia.",
    "Relieve urinary obstruction as rapidly as possible.",
    "Treat hyperkalemia when present.",
    "Perform surgical intervention if obstruction cannot be relieved medically.",
    "Institute dietary correction following recovery."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "High concentrate diet",
        weight: 90
      },

      {
        finding: "Early castration",
        weight: 90
      },

      {
        finding: "Reduced water intake",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Repeated straining to urinate",
        weight: 100
      },

      {
        finding: "Tail swishing",
        weight: 90
      },

      {
        finding: "Bladder distension",
        weight: 100
      },

      {
        finding: "Crystal deposits on prepuce",
        weight: 85
      },

      {
        finding: "Abdominal distension from uroperitoneum",
        weight: 95
      }

    ],

    biochemistry: [

      {
        finding: "Azotemia",
        weight: 95
      },

      {
        finding: "Hyperkalemia",
        weight: 95
      },

      {
        finding: "Hyperphosphatemia",
        weight: 80
      }

    ],

    imaging: [

      {
        finding: "Distended urinary bladder",
        weight: 100
      },

      {
        finding: "Free abdominal fluid",
        weight: 90
      }

    ],

    supports: [

      {
        finding: "Ultrasonographic evidence of obstruction",
        weight: 100
      },

      {
        finding: "Uroperitoneum confirmed by fluid analysis",
        weight: 100
      }

    ],

    against: [

      {
        finding: "Normal urination",
        weight: -90
      },

      {
        finding: "Alternative cause of abdominal pain confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "urination",
      parameter: "Urine output and ability to urinate",
      frequency: "Every 2–4 hours during hospitalization",
      reason:
        "Confirms successful relief of urinary obstruction and detects recurrence."
    },

    {
      id: "renal-function",
      parameter: "Serum creatinine, BUN, and electrolytes",
      frequency: "Daily until stabilized",
      reason:
        "Monitors resolution of azotemia and electrolyte abnormalities."
    },

    {
      id: "hydration",
      parameter: "Hydration status and fluid balance",
      frequency: "Daily",
      reason:
        "Guides fluid therapy and supports renal recovery."
    },

    {
      id: "pain",
      parameter: "Pain level and abdominal discomfort",
      frequency: "Every 6–12 hours",
      reason:
        "Evaluates analgesic effectiveness and detects complications."
    },

    {
      id: "surgical-site",
      parameter: "Surgical wound or urinary diversion site",
      frequency: "Daily",
      reason:
        "Detects postoperative infection, urine leakage, or wound complications."
    }

  ],

  precautions: [

    {
      id: "diet",
      title: "Balanced Mineral Nutrition",
      description:
        "Maintain an appropriate calcium-to-phosphorus ratio (approximately 2:1) and avoid excessive concentrate feeding."
    },

    {
      id: "water",
      title: "Adequate Water Intake",
      description:
        "Ensure continuous access to clean, fresh water to promote urine production and reduce crystal formation."
    },

    {
      id: "acidification",
      title: "Dietary Urine Acidification",
      description:
        "Use urinary acidifiers such as ammonium chloride when appropriate to reduce recurrence of phosphate-based calculi."
    },

    {
      id: "castration",
      title: "Appropriate Castration Management",
      description:
        "Delay castration when practical to allow greater urethral development and reduce future obstruction risk."
    }

  ],

  prognosis:
    "Prognosis depends on duration of obstruction, degree of urinary tract damage, and presence of bladder or urethral rupture. Animals treated before rupture generally have a good prognosis, whereas prolonged obstruction, uroperitoneum, severe azotemia, or recurrent obstruction carries a guarded to poor prognosis.",

  strengtheningEvidence: [

    "Repeated unsuccessful attempts to urinate",

    "Distended urinary bladder",

    "Hyperkalemia and azotemia",

    "Ultrasonographic evidence of urinary obstruction"

  ],

  weakeningEvidence: [

    "Normal urine flow",

    "Normal urinary bladder on ultrasonography",

    "Alternative cause of abdominal pain identified"

  ],

  classicFindings: [

    "Straining to urinate",

    "Tail swishing",

    "Bladder distension",

    "Crystal deposits on preputial hairs",

    "Uroperitoneum following bladder rupture"

  ],

  ruleOutFindings: [

    "Acute renal failure",

    "Cystitis",

    "Pyelonephritis",

    "Traumatic bladder rupture",

    "Peritonitis",

    "Gastrointestinal colic"

  ],

};