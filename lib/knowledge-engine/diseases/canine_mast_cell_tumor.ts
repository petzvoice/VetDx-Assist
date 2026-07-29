import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineMastCellTumor: DiseaseCard = {
  id: "canine-mast-cell-tumor-dog",

  title: "Canine Mast Cell Tumor (MCT)",

  description:
    "A common malignant skin tumor in dogs originating from mast cells, with variable biological behavior ranging from localized growth to aggressive metastatic disease.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Mastocytoma",
    "Cutaneous Mast Cell Tumor",
    "Mast Cell Sarcoma",
  ],

  overview:
    "Canine mast cell tumor is one of the most frequently diagnosed skin cancers in dogs. It originates from mast cells involved in immune responses and inflammation. Tumors may appear as solitary or multiple skin masses and can vary from slow-growing benign-appearing lesions to highly aggressive cancers capable of metastasis. Tumor grade, stage, location, and biological behavior influence prognosis.",

  clinicalProblems:[

    "Skin mass formation",
    "Local tissue inflammation",
    "Tumor invasion",
    "Metastatic spread",
    "Mast cell mediator release"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess duration of mass, growth rate, changes in size, location, and systemic signs."
    },

    {
      id:"mass-examination",
      step:2,
      title:"Mass Examination",
      description:
        "Evaluate tumor appearance, mobility, ulceration, and local tissue involvement."
    },

    {
      id:"cytology",
      step:3,
      title:"Cytological Diagnosis",
      description:
        "Perform fine needle aspiration to identify mast cells."
    },

    {
      id:"grading-staging",
      step:4,
      title:"Tumor Grading and Staging",
      description:
        "Determine tumour aggressiveness and extent of spread."
    },

    {
      id:"treatment",
      step:5,
      title:"Oncology Management",
      description:
        "Select surgery, chemotherapy, radiation, or targeted therapy depending on tumour characteristics."
    }

  ],

  diagnostics:[

    {
      id:"fine-needle-aspiration",
      name:"Fine Needle Aspiration Cytology",
      priority:"Essential",
      reason:
        "Provides initial diagnosis of mast cell tumor."
    },

    {
      id:"histopathology",
      name:"Histopathology",
      priority:"Essential",
      reason:
        "Determines tumor grade and surgical margins."
    },

    {
      id:"staging",
      name:"Tumor Staging",
      priority:"Recommended",
      reason:
        "Evaluates lymph node and distant spread."
    },

    {
      id:"abdominal-imaging",
      name:"Abdominal Imaging",
      priority:"Recommended",
      reason:
        "Assesses internal organ involvement."

    }

  ],

  drugCategories:[

    {
      category:"Antineoplastic Therapy",
      indication:"Systemic or high-risk mast cell tumors",
      reason:
        "Targets malignant mast cells."
    },

    {
      category:"Antihistamine Therapy",
      indication:"Mast cell mediator effects",
      reason:
        "Reduces effects of histamine release."
    },

    {
      category:"Corticosteroid Therapy",
      indication:"Tumor-associated inflammation",
      reason:
        "Provides anti-inflammatory and anti-tumor effects."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"
    }

  ],

  stabilization:[

    "Evaluate for systemic mast cell mediator effects.",
    "Assess tumor size and progression.",
    "Prevent trauma to ulcerated masses.",
    "Perform staging before treatment decisions.",
    "Provide pain and supportive care."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Skin mass", weight:65 },

      { finding:"Rapid growth of mass", weight:50 },

      { finding:"Previous tumor history", weight:35 },

      { finding:"Middle-aged to older dog", weight:40 },

      { finding:"Breed predisposition", weight:35 }

    ],

    clinicalSigns:[

      { finding:"Solitary skin nodule", weight:55 },

      { finding:"Firm raised skin mass", weight:50 },

      { finding:"Redness and swelling", weight:40 },

      { finding:"Ulcerated tumor", weight:45 },

      { finding:"Itching or irritation", weight:30 },

      { finding:"Regional lymph node enlargement", weight:40 }

    ],

    biochemistry:[

      { finding:"Possible systemic inflammatory changes", weight:20 },

      { finding:"Changes with metastatic disease", weight:35 }

    ],

    imaging:[

      { finding:"Regional lymph node involvement", weight:45 },

      { finding:"Abdominal organ involvement", weight:40 }

    ],

    supports:[

      { finding:"Mast cells identified on cytology", weight:90 },

      { finding:"Histopathology confirmation", weight:95 },

      { finding:"Compatible skin mass appearance", weight:50 },

      { finding:"Tumor staging evidence", weight:60 }

    ],

    against:[

      { finding:"Non-mast cell tumor diagnosis", weight:-60 },

      { finding:"Benign skin lesion confirmed", weight:-50 },

      { finding:"No tumor cells on cytology", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"tumor-size",
      parameter:"Tumor size and appearance",
      frequency:"Regular assessment",
      reason:
        "Detects progression or recurrence."
    },

    {
      id:"lymph-nodes",
      parameter:"Regional lymph nodes",
      frequency:"Follow-up",
      reason:
        "Monitors metastatic spread."
    },

    {
      id:"blood-monitoring",
      parameter:"Blood parameters during therapy",
      frequency:"During treatment",
      reason:
        "Detects treatment-related complications."

    }

  ],

  precautions:[

    {
      id:"tumor-manipulation",
      title:"Tumor Handling",
      description:
        "Manipulation of mast cell tumors may trigger release of inflammatory mediators."
    },

    {
      id:"staging",
      title:"Importance of Staging",
      description:
        "Tumor grade and spread strongly influence prognosis."
    }

  ],

  prognosis:
    "Prognosis varies widely depending on tumor grade, location, stage, and treatment response. Low-grade localized tumors may have excellent outcomes, while aggressive tumors may require intensive therapy.",

  strengtheningEvidence:[

    "Mast cells on cytology",

    "Skin mass",

    "Histopathology confirmation",

    "Tumor staging findings",

    "Regional lymph node involvement"

  ],

  weakeningEvidence:[

    "Benign mass confirmed",

    "No mast cells identified",

    "Alternative tumor diagnosis"

  ],

  classicFindings:[

    "Skin lump",

    "Variable tumor appearance",

    "Local swelling",

    "Possible ulceration"

  ],

  ruleOutFindings:[

    "Lipoma",

    "Soft tissue sarcoma",

    "Histiocytoma",

    "Abscess",

    "Other skin tumors"

  ],

};