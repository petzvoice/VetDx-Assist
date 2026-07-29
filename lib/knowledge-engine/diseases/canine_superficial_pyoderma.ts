import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineSuperficialPyoderma: DiseaseCard = {
  id: "canine-superficial-pyoderma-dog",

  title: "Canine Superficial Pyoderma",

  description:
    "A superficial bacterial skin infection involving the epidermis and hair follicles, most commonly associated with overgrowth of Staphylococcus pseudintermedius.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Superficial Bacterial Folliculitis",
    "Canine Bacterial Dermatitis",
    "Superficial Staphylococcal Pyoderma",
    "Impetigo",
  ],

  overview:
    "Canine superficial pyoderma is one of the most common bacterial skin infections in dogs. It primarily affects the epidermis and hair follicles and is usually secondary to underlying conditions such as allergies, ectoparasites, hormonal disorders, or skin barrier defects. Staphylococcus pseudintermedius is the most frequently isolated organism. Clinical lesions include papules, pustules, epidermal collarettes, crusting, and hair loss.",

  clinicalProblems:[

    "Bacterial skin infection",
    "Skin inflammation",
    "Hair follicle infection",
    "Pruritus",
    "Secondary skin disease",
    "Recurrence due to underlying causes"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess itching, duration of lesions, previous skin infections, allergies, parasite exposure, and response to previous treatments."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate lesion distribution, severity, and presence of primary or secondary skin lesions."
    },

    {
      id:"cytology",
      step:3,
      title:"Skin Cytology",
      description:
        "Identify bacteria, inflammatory cells, and infection pattern."
    },

    {
      id:"underlying-cause",
      step:4,
      title:"Underlying Disease Evaluation",
      description:
        "Investigate allergies, parasites, endocrine disease, or other contributing factors."
    },

    {
      id:"treatment",
      step:5,
      title:"Treatment Management",
      description:
        "Control bacterial infection and address the primary cause."

    }

  ],

  diagnostics:[

    {
      id:"skin-cytology",
      name:"Skin Cytology",
      priority:"Essential",
      reason:
        "Identifies bacterial infection and inflammatory cells."
    },

    {
      id:"skin-scraping",
      name:"Skin Scraping",
      priority:"Recommended",
      reason:
        "Rules out mites such as Demodex."
    },

    {
      id:"bacterial-culture",
      name:"Bacterial Culture and Sensitivity",
      priority:"Recommended",
      reason:
        "Guides antibiotic selection in recurrent or resistant infections."
    },

    {
      id:"dermatophyte-testing",
      name:"Fungal Testing",
      priority:"Conditional",
      reason:
        "Rules out dermatophytosis in compatible cases."

    }

  ],

  drugCategories:[

    {
      category:"Topical Antibacterial Therapy",
      indication:"Localized superficial infection",
      reason:
        "Reduces bacterial load on affected skin."
    },

    {
      category:"Systemic Antibiotic Therapy",
      indication:"Generalized or severe infection",
      reason:
        "Treats deeper or widespread bacterial involvement."
    },

    {
      category:"Antipruritic Therapy",
      indication:"Concurrent itching",
      reason:
        "Reduces self-trauma and skin damage."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"cephalexin",
      priority:"Supportive",
      category:"Antibiotic"
    },

    {
      drugId:"amoxicillin-clavulanate",
      priority:"Supportive",
      category:"Antibiotic"
    }

  ],

  stabilization:[

    "Control bacterial infection.",
    "Prevent self-trauma from scratching.",
    "Maintain skin hygiene.",
    "Identify and treat underlying disease.",
    "Monitor recurrence."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Pruritus", weight:50 },

      { finding:"Previous recurrent skin infections", weight:45 },

      { finding:"Underlying allergy history", weight:50 },

      { finding:"Recent skin irritation or trauma", weight:35 },

      { finding:"Chronic skin disease", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Papules and pustules", weight:75 },

      { finding:"Epidermal collarettes", weight:80 },

      { finding:"Crusting", weight:55 },

      { finding:"Hair loss around lesions", weight:50 },

      { finding:"Red inflamed skin", weight:45 },

      { finding:"Itching", weight:55 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Changes associated with underlying disease", weight:20 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Cytology showing cocci bacteria", weight:85 },

      { finding:"Typical superficial skin lesions", weight:75 },

      { finding:"Positive bacterial culture", weight:90 },

      { finding:"Response to antibacterial therapy", weight:60 }

    ],

    against:[

      { finding:"Negative skin cytology", weight:-25 },

      { finding:"Primary fungal infection confirmed", weight:-50 },

      { finding:"No skin lesions", weight:-60 }

    ],

  },

  monitoring:[

    {
      id:"skin-lesions",
      parameter:"Lesion improvement",
      frequency:"Weekly",
      reason:
        "Evaluates treatment response."
    },

    {
      id:"itching",
      parameter:"Pruritus severity",
      frequency:"Regular assessment",
      reason:
        "Monitors skin comfort."
    },

    {
      id:"recurrence",
      parameter:"Repeat infection",
      frequency:"Long-term follow-up",
      reason:
        "Detects unresolved underlying causes."

    }

  ],

  precautions:[

    {
      id:"underlying-cause",
      title:"Treat Primary Disease",
      description:
        "Repeated pyoderma often occurs because of allergies, parasites, or hormonal disorders."
    },

    {
      id:"antibiotic-use",
      title:"Responsible Antibiotic Use",
      description:
        "Culture and sensitivity may be required in recurrent or resistant infections."
    }

  ],

  prognosis:
    "Prognosis is generally excellent when infection is appropriately treated. Recurrence is common if underlying skin disease is not identified and controlled.",

  strengtheningEvidence:[

    "Typical bacterial skin lesions",

    "Positive cytology",

    "Bacterial culture confirmation",

    "Response to antibacterial therapy"

  ],

  weakeningEvidence:[

    "Fungal infection confirmed",

    "No bacterial evidence",

    "Parasite identified as primary cause"

  ],

  classicFindings:[

    "Papules and pustules",

    "Epidermal collarettes",

    "Crusting",

    "Itchy skin lesions"

  ],

  ruleOutFindings:[

    "Demodicosis",

    "Sarcoptic mange",

    "Dermatophytosis",

    "Malassezia dermatitis",

    "Allergic dermatitis"

  ],

};