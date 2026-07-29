import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineMammaryGlandTumor: DiseaseCard = {
  id: "canine-mammary-gland-tumor-dog",

  title: "Canine Mammary Gland Tumor",

  description:
    "A neoplastic condition of the mammary glands in dogs ranging from benign mammary growths to malignant carcinomas with metastatic potential.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Mammary Tumor",
    "Canine Breast Tumor",
    "Mammary Neoplasia",
    "Mammary Carcinoma",
  ],

  overview:
    "Canine mammary gland tumors are among the most common tumors in female dogs. They develop from mammary epithelial tissues and may be benign or malignant. Hormonal influence, especially exposure to ovarian hormones before neutering, contributes to increased risk. Malignant tumors may invade local tissues and metastasize to regional lymph nodes and lungs.",

  clinicalProblems:[

    "Mammary mass formation",
    "Local tissue invasion",
    "Tumor ulceration",
    "Metastatic spread",
    "Hormone-associated tumor development"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age, reproductive status, previous heat cycles, spay history, and duration of mammary mass."
    },

    {
      id:"physical-exam",
      step:2,
      title:"Mammary Examination",
      description:
        "Evaluate number, size, location, mobility, and appearance of mammary lesions."
    },

    {
      id:"cytology",
      step:3,
      title:"Tumor Evaluation",
      description:
        "Perform sampling when indicated to assess tumor characteristics."
    },

    {
      id:"staging",
      step:4,
      title:"Cancer Staging",
      description:
        "Evaluate lymph nodes and distant metastasis before treatment planning."
    },

    {
      id:"treatment",
      step:5,
      title:"Oncology Management",
      description:
        "Surgical removal and additional therapy depend on tumor type and stage."
    }

  ],

  diagnostics:[

    {
      id:"physical-exam",
      name:"Mammary Gland Examination",
      priority:"Essential",
      reason:
        "Identifies mammary masses and evaluates tumor characteristics."
    },

    {
      id:"fine-needle-aspiration",
      name:"Fine Needle Aspiration Cytology",
      priority:"Recommended",
      reason:
        "Provides cellular evaluation of suspicious masses."
    },

    {
      id:"histopathology",
      name:"Histopathology",
      priority:"Essential",
      reason:
        "Determines tumor type, grade, and malignancy."
    },

    {
      id:"thoracic-imaging",
      name:"Thoracic Imaging",
      priority:"Recommended",
      reason:
        "Screens for pulmonary metastasis."

    },

    {
      id:"lymph-node-evaluation",
      name:"Regional Lymph Node Evaluation",
      priority:"Recommended",
      reason:
        "Assesses possible metastatic spread."

    }

  ],

  drugCategories:[

    {
      category:"Surgical Management",
      indication:"Localized mammary tumors",
      reason:
        "Removes primary tumor tissue."
    },

    {
      category:"Chemotherapy",
      indication:"Selected malignant mammary tumors",
      reason:
        "Targets metastatic or residual cancer cells."
    },

    {
      category:"Supportive Oncology Care",
      indication:"Advanced disease",
      reason:
        "Maintains comfort and quality of life."

    }

  ],

  recommendedDrugs:[],

  stabilization:[

    "Evaluate tumor extent and patient condition.",
    "Assess for metastatic disease.",
    "Manage ulcerated or infected masses.",
    "Provide nutritional and supportive care.",
    "Plan surgical intervention when appropriate."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Older intact female dog", weight:50 },

      { finding:"Previous reproductive hormone exposure", weight:40 },

      { finding:"History of mammary mass", weight:70 },

      { finding:"Slow or rapid enlargement of mass", weight:45 },

      { finding:"Previous mammary tumor", weight:35 }

    ],

    clinicalSigns:[

      { finding:"Mammary nodule or mass", weight:80 },

      { finding:"Multiple mammary masses", weight:55 },

      { finding:"Firm irregular mammary mass", weight:60 },

      { finding:"Ulcerated mammary lesion", weight:50 },

      { finding:"Regional lymph node enlargement", weight:40 },

      { finding:"Weight loss in advanced disease", weight:30 }

    ],

    biochemistry:[

      { finding:"Usually nonspecific blood changes", weight:5 },

      { finding:"Changes associated with metastatic disease", weight:30 }

    ],

    imaging:[

      { finding:"Pulmonary metastatic lesions", weight:60 },

      { finding:"Regional lymph node enlargement", weight:45 },

      { finding:"Evidence of invasive disease", weight:50 }

    ],

    supports:[

      { finding:"Histopathology confirming mammary tumor", weight:95 },

      { finding:"Mammary mass in older female dog", weight:65 },

      { finding:"Malignant cellular features", weight:80 },

      { finding:"Metastatic lesions", weight:75 }

    ],

    against:[

      { finding:"No mammary abnormality", weight:-60 },

      { finding:"Benign non-neoplastic lesion", weight:-40 },

      { finding:"Alternative skin mass diagnosis", weight:-35 }

    ],

  },

  monitoring:[

    {
      id:"mass",
      parameter:"Mammary mass size and appearance",
      frequency:"Regular evaluation",
      reason:
        "Detects growth or recurrence."
    },

    {
      id:"metastasis",
      parameter:"Regional lymph nodes and lungs",
      frequency:"Periodic staging",
      reason:
        "Monitors disease spread."
    },

    {
      id:"quality-life",
      parameter:"Appetite, comfort, activity",
      frequency:"Continuous",
      reason:
        "Evaluates patient wellbeing."

    }

  ],

  precautions:[

    {
      id:"early-detection",
      title:"Early Detection",
      description:
        "Routine mammary examination helps identify tumors at an earlier stage."
    },

    {
      id:"histopathology",
      title:"Importance of Tumor Classification",
      description:
        "Histopathology is required to determine biological behavior and prognosis."
    }

  ],

  prognosis:
    "Prognosis depends on tumor type, size, grade, lymph node involvement, and metastatic spread. Early detection and complete surgical removal improve outcomes.",

  strengtheningEvidence:[

    "Mammary mass",

    "Older female dog",

    "Histopathology confirmation",

    "Malignant features",

    "Metastatic disease"

  ],

  weakeningEvidence:[

    "No mammary lesion",

    "Benign inflammatory condition confirmed",

    "Alternative mass diagnosis"

  ],

  classicFindings:[

    "Mammary lump",

    "Older female dog",

    "Firm mammary nodule",

    "Possible ulceration"

  ],

  ruleOutFindings:[

    "Mast cell tumor",

    "Lipoma",

    "Mammary hyperplasia",

    "Abscess",

    "Skin tumor"

  ],

};