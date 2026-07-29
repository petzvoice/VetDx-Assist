import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineHistiocytoma: DiseaseCard = {
  id: "canine-histiocytoma-dog",

  title: "Canine Histiocytoma",

  description:
    "A benign skin tumor originating from Langerhans cells (epidermal dendritic cells), commonly seen in young dogs and often undergoing spontaneous regression.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Cutaneous Histiocytoma",
    "Benign Histiocytoma",
    "Button Tumor",
    "Langerhans Cell Tumor",
  ],

  overview:
    "Canine histiocytoma is a common benign skin tumor that primarily affects young dogs. It usually appears as a rapidly growing, solitary, raised, hairless skin nodule with a characteristic button-like appearance. Many lesions undergo spontaneous regression due to immune-mediated destruction of tumor cells. Surgical removal may be considered for persistent, irritated, or uncertain lesions.",

  clinicalProblems:[

    "Skin nodule formation",
    "Local irritation",
    "Ulceration",
    "Owner concern due to rapid growth",
    "Differentiation from malignant tumors"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age of dog, growth rate, duration, and changes in the skin lesion."
    },

    {
      id:"mass-exam",
      step:2,
      title:"Skin Mass Examination",
      description:
        "Evaluate size, shape, surface appearance, and location of the lesion."
    },

    {
      id:"cytology",
      step:3,
      title:"Cytological Evaluation",
      description:
        "Perform fine needle aspiration to identify histiocytic cells."
    },

    {
      id:"management",
      step:4,
      title:"Management Decision",
      description:
        "Monitor regression or remove lesions when clinically indicated."
    }

  ],

  diagnostics:[

    {
      id:"fine-needle-aspiration",
      name:"Fine Needle Aspiration Cytology",
      priority:"Essential",
      reason:
        "Identifies characteristic round histiocytic cells."
    },

    {
      id:"histopathology",
      name:"Histopathology",
      priority:"Recommended",
      reason:
        "Confirms diagnosis when cytology is inconclusive."
    },

    {
      id:"physical-examination",
      name:"Complete Skin Examination",
      priority:"Recommended",
      reason:
        "Evaluates other lesions and overall skin health."
    }

  ],

  drugCategories:[

    {
      category:"Observation",
      indication:"Typical benign histiocytoma",
      reason:
        "Many lesions regress spontaneously."
    },

    {
      category:"Surgical Removal",
      indication:"Persistent or problematic lesions",
      reason:
        "Provides complete removal and diagnosis."

    }

  ],

  recommendedDrugs:[],

  stabilization:[

    "Prevent trauma to the lesion.",
    "Monitor lesion size and appearance.",
    "Perform diagnostic confirmation when required.",
    "Remove lesion if persistent or causing irritation."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Young dog", weight:55 },

      { finding:"Rapidly appearing skin mass", weight:60 },

      { finding:"Solitary lesion", weight:50 },

      { finding:"Short duration of growth", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Raised button-like skin nodule", weight:80 },

      { finding:"Hairless red mass", weight:60 },

      { finding:"Small localized lesion", weight:50 },

      { finding:"Surface ulceration", weight:35 },

      { finding:"Skin irritation", weight:25 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 }

    ],

    imaging:[

      { finding:"Usually no imaging abnormalities", weight:5 }

    ],

    supports:[

      { finding:"Characteristic cytology findings", weight:85 },

      { finding:"Young dog with solitary skin mass", weight:60 },

      { finding:"Spontaneous regression", weight:70 },

      { finding:"Histopathology confirmation", weight:95 }

    ],

    against:[

      { finding:"Multiple aggressive skin masses", weight:-40 },

      { finding:"Malignant tumor confirmed", weight:-70 },

      { finding:"Older dog with unusual lesion", weight:-25 }

    ],

  },

  monitoring:[

    {
      id:"lesion-size",
      parameter:"Mass size and appearance",
      frequency:"Weekly monitoring",
      reason:
        "Evaluates spontaneous regression."
    },

    {
      id:"skin",
      parameter:"Ulceration or irritation",
      frequency:"Regular assessment",
      reason:
        "Detects complications."

    }

  ],

  precautions:[

    {
      id:"diagnosis",
      title:"Confirm Diagnosis",
      description:
        "Rapidly growing skin masses should be evaluated because some malignant tumors can resemble histiocytoma."
    },

    {
      id:"regression",
      title:"Spontaneous Regression",
      description:
        "Many histiocytomas resolve without aggressive treatment."
    }

  ],

  prognosis:
    "Prognosis is excellent. Most canine histiocytomas regress spontaneously or are successfully treated with simple surgical removal.",

  strengtheningEvidence:[

    "Young dog",

    "Solitary button-like skin mass",

    "Characteristic cytology",

    "Spontaneous regression"

  ],

  weakeningEvidence:[

    "Aggressive growth",

    "Multiple metastatic lesions",

    "Malignant cytology"

  ],

  classicFindings:[

    "Young dog",

    "Red raised skin nodule",

    "Rapid growth",

    "Spontaneous regression"

  ],

  ruleOutFindings:[

    "Mast cell tumor",

    "Soft tissue sarcoma",

    "Squamous cell carcinoma",

    "Papilloma",

    "Abscess"

  ],

};