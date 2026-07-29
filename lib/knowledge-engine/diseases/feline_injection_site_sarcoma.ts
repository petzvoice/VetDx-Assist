import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineInjectionSiteSarcoma: DiseaseCard = {
  id: "feline-injection-site-sarcoma-cat",

  title: "Feline Injection-Site Sarcoma",

  description:
    "A locally aggressive malignant tumour that develops at sites of previous injections, commonly involving subcutaneous tissues.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Injection Site Sarcoma",
    "Feline Vaccine-Associated Sarcoma",
    "FISS",
    "Post-Injection Sarcoma",
  ],

  overview:
    "Injection-site sarcoma is an uncommon but important malignant tumour in cats. It is believed to develop due to chronic inflammatory responses in susceptible individuals following injections or other tissue irritation. Common tumour types include fibrosarcoma, malignant fibrous histiocytoma, and other mesenchymal tumours. These tumours are characterized by aggressive local invasion and require early diagnosis and wide treatment planning.",

  clinicalProblems:[

    "Subcutaneous tumour formation",
    "Local tissue invasion",
    "Tumour recurrence risk",
    "Pain and discomfort",
    "Possible metastasis"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess previous injection location, vaccination history, duration of mass, and rate of growth."
    },

    {
      id:"mass-exam",
      step:2,
      title:"Mass Evaluation",
      description:
        "Evaluate size, firmness, attachment, location, and progression of the mass."
    },

    {
      id:"sampling",
      step:3,
      title:"Tumour Sampling",
      description:
        "Perform cytology and biopsy to confirm sarcoma type."
    },

    {
      id:"staging",
      step:4,
      title:"Cancer Staging",
      description:
        "Evaluate local invasion and distant metastasis."
    },

    {
      id:"management",
      step:5,
      title:"Treatment Planning",
      description:
        "Plan aggressive local control and supportive oncology care."

    }

  ],

  diagnostics:[

    {
      id:"fna",
      name:"Fine Needle Aspiration Cytology",
      priority:"Recommended",
      reason:
        "Provides preliminary evaluation of tumour cells."
    },

    {
      id:"biopsy",
      name:"Histopathology",
      priority:"Essential",
      reason:
        "Confirms sarcoma type and tumour characteristics."
    },

    {
      id:"imaging",
      name:"Advanced Imaging",
      priority:"Recommended",
      reason:
        "Assesses tumour invasion into surrounding tissues."
    },

    {
      id:"thoracic-imaging",
      name:"Thoracic Imaging",
      priority:"Recommended",
      reason:
        "Evaluates pulmonary metastasis."

    }

  ],

  drugCategories:[

    {
      category:"Pain Management",
      indication:"Tumour-associated pain",
      reason:
        "Improves patient comfort."
    },

    {
      category:"Supportive Oncology Care",
      indication:"Advanced disease",
      reason:
        "Maintains quality of life."

    }

  ],

  recommendedDrugs:[

  ],

  stabilization:[

    "Measure and document tumour size.",
    "Avoid unnecessary delay in diagnosis.",
    "Confirm tumour type before treatment.",
    "Assess metastatic risk.",
    "Provide pain control."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Previous injection at site", weight:75 },

      { finding:"Slowly enlarging mass", weight:80 },

      { finding:"Mass persisting after injection", weight:85 },

      { finding:"Older age", weight:50 }

    ],

    clinicalSigns:[

      { finding:"Firm subcutaneous mass", weight:90 },

      { finding:"Rapidly enlarging mass", weight:80 },

      { finding:"Mass fixed to deeper tissues", weight:75 },

      { finding:"Ulceration", weight:60 },

      { finding:"Pain or discomfort", weight:55 }

    ],

    biochemistry:[

      { finding:"Usually non-specific changes", weight:15 },

      { finding:"Changes due to advanced disease", weight:40 }

    ],

    imaging:[

      { finding:"Local tissue invasion", weight:85 },

      { finding:"Deep muscular involvement", weight:80 },

      { finding:"Pulmonary metastasis", weight:50 }

    ],

    supports:[

      { finding:"Histopathology confirming sarcoma", weight:100 },

      { finding:"Mass at previous injection site", weight:85 },

      { finding:"Aggressive local invasion", weight:90 },

      { finding:"Progressive growth", weight:80 }

    ],

    against:[

      { finding:"Mass resolving spontaneously", weight:-50 },

      { finding:"Benign inflammatory lesion confirmed", weight:-50 },

      { finding:"No tissue mass", weight:-70 }

    ],

  },

  monitoring:[

    {
      id:"mass",
      parameter:"Tumour size",
      frequency:"Regular measurement",
      reason:
        "Detects progression."
    },

    {
      id:"recurrence",
      parameter:"Surgical site recurrence",
      frequency:"Long-term follow-up",
      reason:
        "FISS has recurrence risk."
    },

    {
      id:"metastasis",
      parameter:"Metastatic disease",
      frequency:"Periodic staging",
      reason:
        "Monitors tumour spread."

    }

  ],

  precautions:[

    {
      id:"early",
      title:"Early Evaluation of Persistent Injection-Site Masses",
      description:
        "Any persistent or enlarging injection-site mass should be investigated promptly."
    },

    {
      id:"treatment",
      title:"Requires Aggressive Local Control",
      description:
        "Wide treatment margins are often needed because of invasive growth."

    }

  ],

  prognosis:
    "Prognosis depends on tumour size, location, completeness of surgical removal, recurrence, and metastatic behaviour. Early detection improves treatment options.",

  strengtheningEvidence:[

    "Persistent injection-site mass",

    "Histopathology-confirmed sarcoma",

    "Aggressive local invasion",

    "Progressive enlargement"

  ],

  weakeningEvidence:[

    "Mass resolving",

    "Benign inflammatory lesion",

    "No tumour cells detected"

  ],

  classicFindings:[

    "Firm lump at injection site",

    "Progressive growth",

    "Deep tissue attachment",

    "Older cat"

  ],

  ruleOutFindings:[

    "Abscess",

    "Injection-site granuloma",

    "Benign lipoma",

    "Mast cell tumour",

    "Other soft tissue sarcoma"

  ],

};