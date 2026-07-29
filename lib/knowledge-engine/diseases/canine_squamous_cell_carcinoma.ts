import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineSquamousCellCarcinoma: DiseaseCard = {
  id: "canine-squamous-cell-carcinoma-dog",

  title: "Canine Squamous Cell Carcinoma (SCC)",

  description:
    "A malignant tumor arising from squamous epithelial cells, commonly affecting the skin, oral cavity, and nail beds of dogs with potential for local invasion and metastasis.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "SCC",
    "Squamous Cell Cancer",
    "Epidermoid Carcinoma",
    "Oral Squamous Cell Carcinoma",
    "Digital Squamous Cell Carcinoma",
  ],

  overview:
    "Canine squamous cell carcinoma is a malignant epithelial tumor originating from squamous cells. It commonly develops in sun-exposed skin, the oral cavity, and digits. These tumors can be locally invasive and destructive, particularly oral and digital forms. Metastatic potential varies depending on tumor location, size, and biological behavior.",

  clinicalProblems:[

    "Malignant epithelial tumor",
    "Local tissue destruction",
    "Oral dysfunction",
    "Digital lesions",
    "Potential metastasis"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess lesion duration, growth rate, sun exposure, oral signs, and changes in affected areas."
    },

    {
      id:"physical-exam",
      step:2,
      title:"Lesion Examination",
      description:
        "Evaluate location, ulceration, invasion, bleeding, and surrounding tissue involvement."
    },

    {
      id:"cytology",
      step:3,
      title:"Cytological Evaluation",
      description:
        "Evaluate suspicious lesions for malignant squamous cells."
    },

    {
      id:"biopsy",
      step:4,
      title:"Histopathological Confirmation",
      description:
        "Confirm tumor type and determine characteristics."
    },

    {
      id:"staging",
      step:5,
      title:"Cancer Staging",
      description:
        "Assess lymph node involvement and distant metastasis."
    },

    {
      id:"treatment",
      step:6,
      title:"Oncology Management",
      description:
        "Plan surgery and additional therapy according to tumor location and stage."
    }

  ],

  diagnostics:[

    {
      id:"cytology",
      name:"Fine Needle Aspiration Cytology",
      priority:"Recommended",
      reason:
        "Provides preliminary evaluation of suspicious lesions."
    },

    {
      id:"biopsy",
      name:"Biopsy",
      priority:"Essential",
      reason:
        "Confirms squamous cell carcinoma diagnosis."
    },

    {
      id:"histopathology",
      name:"Histopathology",
      priority:"Essential",
      reason:
        "Determines tumor invasion and characteristics."
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
      category:"Surgical Management",
      indication:"Localized SCC",
      reason:
        "Primary method for local tumor control."
    },

    {
      category:"Radiation Therapy",
      indication:"Incompletely removed or difficult locations",
      reason:
        "Provides local tumor control."
    },

    {
      category:"Chemotherapy",
      indication:"Selected advanced cases",
      reason:
        "May help manage progressive disease."

    }

  ],

  recommendedDrugs:[],

  stabilization:[

    "Assess tumor location and extent.",
    "Manage pain and discomfort.",
    "Prevent trauma to ulcerated lesions.",
    "Evaluate lymph nodes and metastasis.",
    "Provide nutritional support in oral tumors."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Older dog", weight:45 },

      { finding:"Chronic skin or oral lesion", weight:60 },

      { finding:"Sun exposure history", weight:40 },

      { finding:"Progressively enlarging mass", weight:65 },

      { finding:"Previous abnormal skin lesion", weight:35 }

    ],

    clinicalSigns:[

      { finding:"Ulcerated skin mass", weight:65 },

      { finding:"Oral mass", weight:70 },

      { finding:"Bleeding lesion", weight:50 },

      { finding:"Difficulty eating", weight:45 },

      { finding:"Nail bed swelling or digit lesion", weight:55 },

      { finding:"Regional lymph node enlargement", weight:40 }

    ],

    biochemistry:[

      { finding:"Usually nonspecific blood changes", weight:5 },

      { finding:"Changes associated with advanced disease", weight:25 }

    ],

    imaging:[

      { finding:"Bone invasion in digital/oral tumors", weight:55 },

      { finding:"Regional lymph node involvement", weight:45 },

      { finding:"Metastatic lesions", weight:40 }

    ],

    supports:[

      { finding:"Histopathology confirmation", weight:95 },

      { finding:"Invasive epithelial tumor cells", weight:85 },

      { finding:"Ulcerated progressive mass", weight:60 },

      { finding:"Typical SCC location", weight:55 }

    ],

    against:[

      { finding:"Benign lesion confirmed", weight:-60 },

      { finding:"No abnormal tissue growth", weight:-50 },

      { finding:"Alternative tumor diagnosis", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"tumor",
      parameter:"Tumor size and local recurrence",
      frequency:"Regular follow-up",
      reason:
        "Detects progression or recurrence."
    },

    {
      id:"lymph-node",
      parameter:"Regional lymph nodes",
      frequency:"Periodic assessment",
      reason:
        "Monitors metastatic spread."
    },

    {
      id:"quality-life",
      parameter:"Pain, appetite, activity",
      frequency:"Continuous",
      reason:
        "Evaluates patient comfort."

    }

  ],

  precautions:[

    {
      id:"sun-exposure",
      title:"Sun Exposure Risk",
      description:
        "Chronic ultraviolet exposure may contribute to development of cutaneous SCC."
    },

    {
      id:"oral-tumor",
      title:"Oral SCC Consideration",
      description:
        "Oral tumors can be locally invasive and require early evaluation."

    }

  ],

  prognosis:
    "Prognosis varies depending on tumor location, size, invasion, and metastatic potential. Early localized tumors generally have better outcomes after complete removal.",

  strengtheningEvidence:[

    "Histopathology confirmation",

    "Ulcerated progressive lesion",

    "Oral or digital tumor location",

    "Local invasion",

    "Metastatic evidence"

  ],

  weakeningEvidence:[

    "Benign lesion confirmed",

    "No tumor identified",

    "Alternative diagnosis"

  ],

  classicFindings:[

    "Ulcerated mass",

    "Oral lesion",

    "Digital swelling",

    "Older dog"

  ],

  ruleOutFindings:[

    "Mast cell tumor",

    "Histiocytoma",

    "Papilloma",

    "Melanoma",

    "Inflammatory lesion"

  ],

};