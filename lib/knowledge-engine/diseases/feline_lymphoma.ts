import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineLymphoma: DiseaseCard = {
  id: "feline-lymphoma-cat",

  title: "Feline Lymphoma",

  description:
    "A malignant cancer of lymphoid cells in cats affecting lymph nodes, gastrointestinal tract, kidneys, mediastinum, nervous system, or other organs.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Lymphosarcoma",
    "Lymphoid Neoplasia",
    "Feline Lymphoid Cancer",
  ],

  overview:
    "Lymphoma is one of the most common cancers affecting cats. It develops from abnormal proliferation of lymphocytes and may occur in multiple anatomical locations. Common forms include gastrointestinal lymphoma, mediastinal lymphoma, renal lymphoma, nasal lymphoma, and multicentric lymphoma. Feline leukemia virus and feline immunodeficiency virus infections are associated with increased lymphoma risk.",

  clinicalProblems:[

    "Malignant lymphocyte proliferation",
    "Organ infiltration",
    "Weight loss",
    "Reduced appetite",
    "Systemic illness",
    "Organ dysfunction"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess weight loss, appetite changes, vomiting, diarrhea, respiratory signs, neurological signs, and duration of illness."
    },

    {
      id:"physical-exam",
      step:2,
      title:"Complete Physical Examination",
      description:
        "Evaluate lymph nodes, body condition, abdominal organs, and systemic abnormalities."
    },

    {
      id:"diagnosis",
      step:3,
      title:"Tumour Confirmation",
      description:
        "Obtain cytology or biopsy samples to confirm lymphoma."
    },

    {
      id:"staging",
      step:4,
      title:"Cancer Staging",
      description:
        "Determine extent of disease using imaging and laboratory evaluation."
    },

    {
      id:"management",
      step:5,
      title:"Treatment Planning",
      description:
        "Develop chemotherapy or supportive care approach based on tumour type and patient condition."

    }

  ],

  diagnostics:[

    {
      id:"cytology",
      name:"Fine Needle Aspiration Cytology",
      priority:"Essential",
      reason:
        "Provides rapid evaluation of lymphoid tumour cells."
    },

    {
      id:"histopathology",
      name:"Biopsy and Histopathology",
      priority:"Essential",
      reason:
        "Confirms tumour type and grade."
    },

    {
      id:"blood-tests",
      name:"CBC and Serum Biochemistry",
      priority:"Recommended",
      reason:
        "Evaluates systemic involvement and organ function."
    },

    {
      id:"imaging",
      name:"Diagnostic Imaging",
      priority:"Recommended",
      reason:
        "Assesses tumour distribution and staging."

    },

    {
      id:"felv-fiv",
      name:"FeLV and FIV Testing",
      priority:"Recommended",
      reason:
        "Evaluates associated viral infections."

    }

  ],

  drugCategories:[

    {
      category:"Chemotherapy",
      indication:"Confirmed lymphoma",
      reason:
        "Targets malignant lymphoid cells."
    },

    {
      category:"Corticosteroid Therapy",
      indication:"Lymphoma management or palliative care",
      reason:
        "Provides anti-inflammatory and lympholytic effects."
    },

    {
      category:"Supportive Therapy",
      indication:"Cancer-associated complications",
      reason:
        "Maintains quality of life."

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

    "Assess hydration and nutritional status.",
    "Control vomiting, diarrhea, or pain.",
    "Evaluate organ involvement.",
    "Confirm diagnosis before chemotherapy.",
    "Discuss prognosis and treatment goals."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Progressive weight loss", weight:80 },

      { finding:"Reduced appetite", weight:70 },

      { finding:"Chronic vomiting or diarrhea", weight:65 },

      { finding:"FeLV infection risk", weight:60 },

      { finding:"Older age", weight:50 }

    ],

    clinicalSigns:[

      { finding:"Enlarged lymph nodes", weight:85 },

      { finding:"Abdominal mass", weight:75 },

      { finding:"Weight loss", weight:80 },

      { finding:"Lethargy", weight:65 },

      { finding:"Poor body condition", weight:70 },

      { finding:"Organ-specific signs", weight:60 }

    ],

    biochemistry:[

      { finding:"Anaemia", weight:45 },

      { finding:"Hypercalcaemia", weight:40 },

      { finding:"Organ dysfunction changes", weight:55 },

      { finding:"Hypoproteinaemia", weight:35 }

    ],

    imaging:[

      { finding:"Enlarged lymph nodes", weight:80 },

      { finding:"Gastrointestinal wall thickening", weight:75 },

      { finding:"Mass lesions", weight:85 },

      { finding:"Organ infiltration", weight:75 }

    ],

    supports:[

      { finding:"Lymphoid cells on cytology", weight:95 },

      { finding:"Biopsy-confirmed lymphoma", weight:100 },

      { finding:"Compatible imaging findings", weight:80 },

      { finding:"Progressive systemic illness", weight:70 }

    ],

    against:[

      { finding:"Normal lymphoid examination", weight:-40 },

      { finding:"No evidence of neoplasia", weight:-60 },

      { finding:"Alternative tumour diagnosis confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"tumour",
      parameter:"Tumour response",
      frequency:"During treatment",
      reason:
        "Evaluates chemotherapy effectiveness."
    },

    {
      id:"blood",
      parameter:"CBC monitoring",
      frequency:"Regular during chemotherapy",
      reason:
        "Detects treatment-related complications."
    },

    {
      id:"quality",
      parameter:"Quality of life",
      frequency:"Continuous",
      reason:
        "Guides treatment decisions."

    }

  ],

  precautions:[

    {
      id:"diagnosis",
      title:"Confirm Diagnosis Before Treatment",
      description:
        "Different tumour types require different treatment approaches."
    },

    {
      id:"viral",
      title:"Check FeLV/FIV Status",
      description:
        "Viral infections influence prognosis and disease management."

    }

  ],

  prognosis:
    "Prognosis varies depending on lymphoma location, tumour type, stage, viral status, and response to treatment. Some cats achieve remission with chemotherapy, while others require palliative management.",

  strengtheningEvidence:[

    "Cytology showing malignant lymphocytes",

    "Biopsy confirmation",

    "Mass lesions",

    "Progressive systemic signs"

  ],

  weakeningEvidence:[

    "No evidence of lymphoid neoplasia",

    "Normal staging evaluation",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Weight loss",

    "Lymph node enlargement",

    "Gastrointestinal signs",

    "Mass lesions"

  ],

  ruleOutFindings:[

    "Inflammatory disease",

    "Infectious disease",

    "Other neoplasia",

    "Chronic organ disease"

  ],

};