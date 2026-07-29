import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePemphigusFoliaceus: DiseaseCard = {
  id: "canine-pemphigus-foliaceus-dog",

  title: "Canine Pemphigus Foliaceus",

  description:
    "An autoimmune skin disease characterized by immune-mediated destruction of connections between epidermal cells, resulting in pustules, crusts, scaling, and hair loss.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Pemphigus Foliaceus",
    "Autoimmune Dermatitis",
    "Autoimmune Vesiculobullous Disease",
    "Canine Autoimmune Skin Disease",
  ],

  overview:
    "Canine pemphigus foliaceus is the most common autoimmune skin disease in dogs. It occurs when the immune system produces antibodies against proteins responsible for maintaining adhesion between epidermal cells. Loss of cell adhesion causes separation within the epidermis, leading to pustule formation, crusting, and scaling. Lesions commonly affect the face, nasal planum, ear pinnae, and footpads, but generalized involvement may occur.",

  clinicalProblems:[

    "Autoimmune skin inflammation",
    "Pustule formation",
    "Crusting and scaling",
    "Hair loss",
    "Skin pain and discomfort",
    "Secondary bacterial infection"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess onset, progression, age, previous medications, and response to treatments."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate pustules, crusts, erosions, and distribution of lesions."
    },

    {
      id:"cytology",
      step:3,
      title:"Skin Cytology",
      description:
        "Identify inflammatory cells and acantholytic keratinocytes."
    },

    {
      id:"biopsy",
      step:4,
      title:"Skin Biopsy",
      description:
        "Confirm diagnosis through histopathological examination."
    },

    {
      id:"immune-management",
      step:5,
      title:"Immunosuppressive Management",
      description:
        "Control abnormal immune response and monitor disease activity."

    }

  ],

  diagnostics:[

    {
      id:"skin-cytology",
      name:"Skin Cytology",
      priority:"Recommended",
      reason:
        "May reveal acantholytic cells and inflammatory changes."
    },

    {
      id:"skin-biopsy",
      name:"Skin Biopsy and Histopathology",
      priority:"Essential",
      reason:
        "Confirms autoimmune epidermal disease."
    },

    {
      id:"immunofluorescence",
      name:"Direct Immunofluorescence",
      priority:"Conditional",
      reason:
        "May demonstrate immune deposition patterns."

    }

  ],

  drugCategories:[

    {
      category:"Immunosuppressive Therapy",
      indication:"Autoimmune skin disease control",
      reason:
        "Suppresses abnormal immune attack on skin cells."
    },

    {
      category:"Secondary Infection Management",
      indication:"Bacterial complications",
      reason:
        "Treats infections caused by damaged skin barrier."
    },

    {
      category:"Supportive Skin Care",
      indication:"Skin healing",
      reason:
        "Maintains skin integrity and comfort."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"
    },

    {
      drugId:"azathioprine",
      priority:"Supportive",
      category:"Immunosuppressant"

    }

  ],

  stabilization:[

    "Confirm diagnosis before long-term immunosuppression.",
    "Control autoimmune inflammation.",
    "Treat secondary infections.",
    "Monitor for medication adverse effects.",
    "Provide long-term dermatological follow-up."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Adult dog", weight:45 },

      { finding:"Progressive skin lesions", weight:60 },

      { finding:"Poor response to antibiotics alone", weight:55 },

      { finding:"Previous immune-mediated disease", weight:35 },

      { finding:"Chronic crusting disease", weight:60 }

    ],

    clinicalSigns:[

      { finding:"Crusting on face and ears", weight:75 },

      { finding:"Pustules", weight:80 },

      { finding:"Nasal planum lesions", weight:65 },

      { finding:"Footpad involvement", weight:55 },

      { finding:"Scaling", weight:70 },

      { finding:"Hair loss", weight:50 },

      { finding:"Secondary infection", weight:45 }

    ],

    biochemistry:[

      { finding:"Usually non-specific blood changes", weight:10 },

      { finding:"Changes related to immune therapy or inflammation", weight:25 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Histopathology confirming pemphigus", weight:95 },

      { finding:"Acantholytic cells on cytology", weight:75 },

      { finding:"Typical facial crusting lesions", weight:70 },

      { finding:"Response to immunosuppressive therapy", weight:65 }

    ],

    against:[

      { finding:"Confirmed infectious skin disease", weight:-50 },

      { finding:"No crusting or pustules", weight:-40 },

      { finding:"Negative biopsy findings", weight:-70 }

    ],

  },

  monitoring:[

    {
      id:"skin-lesions",
      parameter:"Crusting and pustule formation",
      frequency:"Regular follow-up",
      reason:
        "Evaluates disease control."
    },

    {
      id:"blood-monitoring",
      parameter:"Blood parameters during immunosuppressive therapy",
      frequency:"Periodic",
      reason:
        "Monitors treatment safety."
    },

    {
      id:"infection",
      parameter:"Secondary infection",
      frequency:"Follow-up",
      reason:
        "Detects complications."

    }

  ],

  precautions:[

    {
      id:"immunosuppression",
      title:"Long-term Immunosuppression",
      description:
        "Treatment often requires prolonged immune-modulating therapy and careful monitoring."
    },

    {
      id:"infection",
      title:"Infection Risk",
      description:
        "Immune suppression can increase susceptibility to infections."

    }

  ],

  prognosis:
    "Pemphigus foliaceus is a chronic autoimmune disease. Many dogs respond well to treatment, but lifelong monitoring and medication adjustments may be required.",

  strengtheningEvidence:[

    "Typical crusting lesions",

    "Acantholytic cells",

    "Positive biopsy",

    "Response to immunosuppressive therapy"

  ],

  weakeningEvidence:[

    "Confirmed infectious dermatitis",

    "Negative biopsy",

    "No characteristic lesions"

  ],

  classicFindings:[

    "Facial crusts",

    "Pustules",

    "Nasal lesions",

    "Footpad involvement"

  ],

  ruleOutFindings:[

    "Dermatophytosis",

    "Bacterial pyoderma",

    "Demodicosis",

    "Sarcoptic mange",

    "Drug reaction"

  ],

};