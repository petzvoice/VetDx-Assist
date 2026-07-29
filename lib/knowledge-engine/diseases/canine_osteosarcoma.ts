import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineOsteosarcoma: DiseaseCard = {
  id: "canine-osteosarcoma-dog",

  title: "Canine Osteosarcoma",

  description:
    "A highly aggressive primary bone cancer characterized by malignant osteoblast proliferation, destructive bone lesions, and a high risk of metastatic spread, especially to the lungs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "OSA",
    "Bone Cancer",
    "Osteogenic Sarcoma",
    "Primary Bone Tumor",
  ],

  overview:
    "Canine osteosarcoma is the most common primary malignant bone tumor in dogs. It commonly affects the appendicular skeleton, especially the distal radius, proximal humerus, distal femur, and proximal tibia. The tumor causes destructive bone growth, severe pain, lameness, and pathological fractures. Metastasis, particularly to the lungs, is common and significantly affects prognosis.",

  clinicalProblems:[

    "Progressive bone destruction",
    "Severe pain",
    "Lameness",
    "Pathological fracture risk",
    "Pulmonary metastasis",
    "Reduced quality of life"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess onset of lameness, progression, pain severity, trauma history, and breed predisposition."
    },

    {
      id:"orthopedic-exam",
      step:2,
      title:"Orthopedic Examination",
      description:
        "Localize pain and identify swelling or abnormal bone changes."
    },

    {
      id:"radiography",
      step:3,
      title:"Bone Imaging",
      description:
        "Evaluate destructive bone lesions using radiography."
    },

    {
      id:"cytology-biopsy",
      step:4,
      title:"Tumor Confirmation",
      description:
        "Confirm diagnosis using cytology or biopsy."
    },

    {
      id:"staging",
      step:5,
      title:"Cancer Staging",
      description:
        "Assess metastatic spread before treatment planning."
    },

    {
      id:"treatment",
      step:6,
      title:"Oncology Management",
      description:
        "Combine local control and systemic therapy where appropriate."
    }

  ],

  diagnostics:[

    {
      id:"radiography",
      name:"Bone Radiography",
      priority:"Essential",
      reason:
        "Identifies characteristic destructive bone lesions."
    },

    {
      id:"cytology",
      name:"Fine Needle Aspiration Cytology",
      priority:"Recommended",
      reason:
        "Provides preliminary tumor identification."
    },

    {
      id:"biopsy",
      name:"Bone Biopsy",
      priority:"Recommended",
      reason:
        "Provides definitive histopathological diagnosis."
    },

    {
      id:"thoracic-imaging",
      name:"Thoracic Imaging",
      priority:"Essential",
      reason:
        "Screens for pulmonary metastasis."
    },

    {
      id:"advanced-imaging",
      name:"CT/MRI Evaluation",
      priority:"Conditional",
      reason:
        "Assesses local tumor extent and surgical planning."

    }

  ],

  drugCategories:[

    {
      category:"Chemotherapy",
      indication:"Control metastatic disease",
      reason:
        "Targets microscopic metastatic tumor cells."
    },

    {
      category:"Analgesic Therapy",
      indication:"Bone pain management",
      reason:
        "Improves comfort and quality of life."
    },

    {
      category:"Bisphosphonate Therapy",
      indication:"Bone-associated pain",
      reason:
        "May reduce bone pain and complications."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"carboplatin",
      priority:"Supportive",
      category:"Chemotherapy"
    }

  ],

  stabilization:[

    "Provide effective pain control.",
    "Restrict activity to reduce fracture risk.",
    "Evaluate for metastatic disease.",
    "Maintain nutritional support.",
    "Discuss treatment goals and quality of life."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Progressive lameness", weight:65 },

      { finding:"Large breed dog", weight:50 },

      { finding:"Middle-aged to older dog", weight:40 },

      { finding:"Persistent limb pain", weight:60 },

      { finding:"No improvement with routine treatment", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Limb swelling", weight:60 },

      { finding:"Severe localized bone pain", weight:70 },

      { finding:"Lameness", weight:75 },

      { finding:"Muscle wasting", weight:35 },

      { finding:"Pathological fracture", weight:65 }

    ],

    biochemistry:[

      { finding:"Possible increased alkaline phosphatase activity", weight:30 },

      { finding:"Changes associated with metastatic disease", weight:25 }

    ],

    imaging:[

      { finding:"Aggressive bone destruction on radiographs", weight:85 },

      { finding:"Mixed lytic and proliferative bone lesions", weight:75 },

      { finding:"Pulmonary metastatic lesions", weight:55 }

    ],

    supports:[

      { finding:"Characteristic radiographic lesion", weight:85 },

      { finding:"Histopathology confirming osteosarcoma", weight:95 },

      { finding:"Large breed predisposition", weight:45 },

      { finding:"Progressive painful lameness", weight:65 }

    ],

    against:[

      { finding:"Normal bone radiographs", weight:-60 },

      { finding:"Traumatic injury confirmed", weight:-30 },

      { finding:"Benign bone lesion", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"pain",
      parameter:"Pain level and mobility",
      frequency:"Continuous",
      reason:
        "Evaluates comfort and quality of life."
    },

    {
      id:"metastasis",
      parameter:"Thoracic imaging",
      frequency:"Periodic",
      reason:
        "Monitors metastatic progression."
    },

    {
      id:"therapy",
      parameter:"Treatment response",
      frequency:"During therapy",
      reason:
        "Evaluates effectiveness and adverse effects."

    }

  ],

  precautions:[

    {
      id:"fracture-risk",
      title:"Pathological Fracture Risk",
      description:
        "Affected bones may fracture with minimal trauma; activity restriction is important."
    },

    {
      id:"metastasis",
      title:"High Metastatic Potential",
      description:
        "Pulmonary metastasis is common and affects long-term outcome."
    }

  ],

  prognosis:
    "Osteosarcoma carries a guarded prognosis because of its aggressive nature and metastatic potential. Treatment aims to control pain, maintain quality of life, and extend survival.",

  strengtheningEvidence:[

    "Aggressive bone lesion on radiography",

    "Persistent painful lameness",

    "Large breed dog",

    "Histopathology confirmation",

    "Pulmonary metastasis"

  ],

  weakeningEvidence:[

    "Normal bone imaging",

    "Acute trauma explaining signs",

    "Benign bone lesion"

  ],

  classicFindings:[

    "Progressive lameness",

    "Painful limb swelling",

    "Bone destruction",

    "Large breed dog"

  ],

  ruleOutFindings:[

    "Fracture",

    "Osteomyelitis",

    "Bone cyst",

    "Soft tissue tumor",

    "Other primary bone tumors"

  ],

};