import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineOsteosarcoma: DiseaseCard = {
  id: "feline-osteosarcoma-cat",

  title: "Feline Osteosarcoma",

  description:
    "A malignant tumour arising from bone-forming cells (osteoblasts), causing abnormal bone growth, pain, and structural destruction.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Bone Cancer",
    "Osteogenic Sarcoma",
    "Primary Bone Tumour",
    "Osteoblastoma Malignum",
  ],

  overview:
    "Osteosarcoma is a malignant tumour of bone-producing cells. In cats, it is less common than in dogs but can affect appendicular skeleton, axial skeleton, skull, and other bones. Feline osteosarcoma tends to be locally invasive, while metastatic spread occurs less frequently compared with canine osteosarcoma. Clinical signs are usually related to pain, swelling, and impaired function of the affected bone.",

  clinicalProblems:[

    "Bone destruction",
    "Pain",
    "Lameness",
    "Pathological fracture risk",
    "Local tissue invasion",
    "Reduced mobility"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess lameness, pain duration, trauma history, progression of swelling, and activity changes."
    },

    {
      id:"physical-exam",
      step:2,
      title:"Orthopaedic Examination",
      description:
        "Evaluate affected bone, pain response, swelling, and mobility."
    },

    {
      id:"imaging",
      step:3,
      title:"Bone Imaging",
      description:
        "Perform radiography or advanced imaging to identify bone lesions."
    },

    {
      id:"confirmation",
      step:4,
      title:"Tumour Confirmation",
      description:
        "Obtain cytology or biopsy samples to confirm osteosarcoma."
    },

    {
      id:"staging",
      step:5,
      title:"Cancer Staging",
      description:
        "Evaluate metastatic potential and overall disease status."

    }

  ],

  diagnostics:[

    {
      id:"radiography",
      name:"Bone Radiography",
      priority:"Essential",
      reason:
        "Identifies destructive bone lesions and abnormal bone production."
    },

    {
      id:"cytology",
      name:"Fine Needle Aspiration Cytology",
      priority:"Recommended",
      reason:
        "Provides preliminary tumour evaluation."
    },

    {
      id:"biopsy",
      name:"Histopathology",
      priority:"Essential",
      reason:
        "Confirms tumour type."
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
      indication:"Bone pain",
      reason:
        "Improves comfort and mobility."
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

    "Control pain.",
    "Restrict excessive activity.",
    "Evaluate fracture risk.",
    "Confirm diagnosis.",
    "Assess metastatic disease."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Progressive lameness", weight:80 },

      { finding:"Chronic pain", weight:75 },

      { finding:"Bone swelling", weight:85 },

      { finding:"Reduced activity", weight:65 }

    ],

    clinicalSigns:[

      { finding:"Firm bony swelling", weight:90 },

      { finding:"Pain on palpation", weight:80 },

      { finding:"Lameness", weight:85 },

      { finding:"Reduced limb function", weight:75 },

      { finding:"Pathological fracture", weight:70 }

    ],

    biochemistry:[

      { finding:"Usually non-specific changes", weight:20 },

      { finding:"Changes due to advanced disease", weight:40 }

    ],

    imaging:[

      { finding:"Bone lysis", weight:90 },

      { finding:"Abnormal bone proliferation", weight:85 },

      { finding:"Soft tissue extension", weight:75 },

      { finding:"Pulmonary metastatic lesions", weight:55 }

    ],

    supports:[

      { finding:"Radiographic bone tumour", weight:95 },

      { finding:"Histopathology confirming osteosarcoma", weight:100 },

      { finding:"Painful bone swelling", weight:85 },

      { finding:"Progressive lameness", weight:80 }

    ],

    against:[

      { finding:"Normal bone imaging", weight:-70 },

      { finding:"No pain or swelling", weight:-40 },

      { finding:"Alternative bone disease confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"pain",
      parameter:"Pain level",
      frequency:"Regular assessment",
      reason:
        "Evaluates comfort and treatment response."
    },

    {
      id:"tumour",
      parameter:"Tumour progression",
      frequency:"Periodic imaging",
      reason:
        "Monitors disease progression."
    },

    {
      id:"metastasis",
      parameter:"Metastatic disease",
      frequency:"Follow-up staging",
      reason:
        "Detects tumour spread."

    }

  ],

  precautions:[

    {
      id:"fracture",
      title:"Risk of Pathological Fracture",
      description:
        "Bone weakening can increase fracture risk in affected areas."
    },

    {
      id:"pain",
      title:"Pain Management is Essential",
      description:
        "Bone tumours can cause significant chronic discomfort."

    }

  ],

  prognosis:
    "Prognosis depends on tumour location, extent of bone destruction, metastatic status, and treatment approach. Local control may provide improved comfort, but malignant behaviour requires careful monitoring.",

  strengtheningEvidence:[

    "Destructive bone lesion",

    "Painful swelling",

    "Histopathology confirmation",

    "Progressive lameness"

  ],

  weakeningEvidence:[

    "Normal radiographs",

    "No bone abnormality",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Lameness",

    "Painful bone swelling",

    "Bone destruction",

    "Reduced activity"

  ],

  ruleOutFindings:[

    "Osteomyelitis",

    "Bone fracture",

    "Benign bone tumour",

    "Trauma",

    "Inflammatory bone disease"

  ],

};