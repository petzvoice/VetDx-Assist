import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineTransitionalCellCarcinoma: DiseaseCard = {
  id: "canine-transitional-cell-carcinoma-dog",

  title: "Canine Transitional Cell Carcinoma (TCC)",

  description:
    "A malignant tumor arising from the urinary tract transitional epithelium, most commonly affecting the urinary bladder and causing lower urinary tract signs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "TCC",
    "Urothelial Carcinoma",
    "Bladder Cancer",
    "Urinary Bladder Carcinoma",
  ],

  overview:
    "Canine transitional cell carcinoma is the most common malignant tumor of the urinary bladder in dogs. It originates from the transitional epithelial lining of the urinary tract and most frequently develops in the bladder trigone region. The tumor can invade surrounding tissues, obstruct urine flow, and metastasize to lymph nodes, lungs, and other organs.",

  clinicalProblems:[

    "Urinary bladder tumor",
    "Difficulty urinating",
    "Urinary obstruction",
    "Blood in urine",
    "Local invasion",
    "Metastatic disease"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess urinary signs, duration, recurrent urinary infections, blood in urine, and changes in urination."
    },

    {
      id:"urinary-exam",
      step:2,
      title:"Urinary Tract Evaluation",
      description:
        "Evaluate bladder, urine characteristics, and lower urinary tract abnormalities."
    },

    {
      id:"urine-testing",
      step:3,
      title:"Urine Analysis",
      description:
        "Assess for hematuria, infection, and abnormal cells."
    },

    {
      id:"imaging",
      step:4,
      title:"Imaging Evaluation",
      description:
        "Identify bladder mass location and extent of invasion."
    },

    {
      id:"confirmation",
      step:5,
      title:"Tumor Confirmation",
      description:
        "Confirm diagnosis through cytology or biopsy when appropriate."
    },

    {
      id:"management",
      step:6,
      title:"Oncology Management",
      description:
        "Select medical therapy and supportive management based on disease stage."

    }

  ],

  diagnostics:[

    {
      id:"urinalysis",
      name:"Urinalysis",
      priority:"Essential",
      reason:
        "Detects hematuria and urinary abnormalities."
    },

    {
      id:"abdominal-ultrasound",
      name:"Abdominal Ultrasound",
      priority:"Essential",
      reason:
        "Identifies bladder masses and evaluates urinary tract involvement."
    },

    {
      id:"urine-cytology",
      name:"Urine Cytology",
      priority:"Recommended",
      reason:
        "May identify malignant transitional cells."
    },

    {
      id:"biopsy",
      name:"Histopathology/Biopsy",
      priority:"Recommended",
      reason:
        "Provides definitive tumor diagnosis."
    },

    {
      id:"staging",
      name:"Cancer Staging",
      priority:"Recommended",
      reason:
        "Evaluates metastatic spread."

    }

  ],

  drugCategories:[

    {
      category:"Chemotherapy",
      indication:"Bladder carcinoma management",
      reason:
        "Slows tumor progression."
    },

    {
      category:"NSAID Therapy",
      indication:"Medical management of TCC",
      reason:
        "Some urinary carcinomas may respond to COX-inhibitor therapy."
    },

    {
      category:"Supportive Urinary Care",
      indication:"Urinary discomfort or obstruction",
      reason:
        "Maintains patient comfort."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"piroxicam",
      priority:"Supportive",
      category:"NSAID"
    }

  ],

  stabilization:[

    "Assess urinary obstruction risk.",
    "Manage pain and urinary discomfort.",
    "Evaluate kidney function.",
    "Monitor hydration status.",
    "Plan oncology treatment based on tumor stage."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Older dog", weight:45 },

      { finding:"Chronic urinary signs", weight:55 },

      { finding:"Recurrent urinary tract problems", weight:35 },

      { finding:"Blood in urine history", weight:60 },

      { finding:"Difficulty urinating", weight:55 }

    ],

    clinicalSigns:[

      { finding:"Hematuria", weight:70 },

      { finding:"Straining to urinate", weight:60 },

      { finding:"Frequent urination", weight:55 },

      { finding:"Painful urination", weight:50 },

      { finding:"Urinary obstruction", weight:65 },

      { finding:"Weight loss in advanced disease", weight:30 }

    ],

    biochemistry:[

      { finding:"Possible kidney parameter changes with obstruction", weight:35 },

      { finding:"Usually nonspecific blood changes", weight:5 }

    ],

    imaging:[

      { finding:"Bladder mass on ultrasound", weight:85 },

      { finding:"Bladder wall thickening", weight:55 },

      { finding:"Regional lymph node enlargement", weight:45 },

      { finding:"Metastatic lesions", weight:50 }

    ],

    supports:[

      { finding:"Bladder mass in trigone region", weight:75 },

      { finding:"Malignant transitional cells", weight:85 },

      { finding:"Positive tumor confirmation", weight:95 },

      { finding:"Older dog with urinary signs", weight:55 }

    ],

    against:[

      { finding:"Normal bladder imaging", weight:-60 },

      { finding:"Simple urinary infection confirmed", weight:-35 },

      { finding:"No urinary abnormalities", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"urinary-signs",
      parameter:"Urination pattern",
      frequency:"Regular monitoring",
      reason:
        "Detects progression or obstruction."
    },

    {
      id:"tumor",
      parameter:"Bladder tumor size",
      frequency:"Periodic imaging",
      reason:
        "Evaluates treatment response."
    },

    {
      id:"kidney-function",
      parameter:"Renal parameters",
      frequency:"During disease progression",
      reason:
        "Monitors effects of urinary obstruction."

    }

  ],

  precautions:[

    {
      id:"obstruction",
      title:"Urinary Obstruction Risk",
      description:
        "Tumor growth can interfere with urine flow and become life-threatening."
    },

    {
      id:"sampling",
      title:"Diagnostic Consideration",
      description:
        "Tumor location and invasive nature require careful diagnostic planning."
    }

  ],

  prognosis:
    "Canine transitional cell carcinoma generally carries a guarded prognosis. Treatment may slow progression and improve quality of life, but complete cure is uncommon because of local invasion and metastatic potential.",

  strengtheningEvidence:[

    "Bladder mass",

    "Hematuria",

    "Older dog",

    "Positive cytology or biopsy",

    "Urinary obstruction"

  ],

  weakeningEvidence:[

    "Normal bladder imaging",

    "Confirmed urinary infection",

    "No urinary abnormalities"

  ],

  classicFindings:[

    "Blood in urine",

    "Straining to urinate",

    "Frequent urination",

    "Bladder mass"

  ],

  ruleOutFindings:[

    "Urinary tract infection",

    "Bladder stones",

    "Polypoid cystitis",

    "Prostate disease",

    "Other urinary tumors"

  ],

};