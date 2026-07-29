import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineDiscoidLupusErythematosus: DiseaseCard = {
  id: "canine-discoid-lupus-erythematosus-dog",

  title: "Canine Discoid Lupus Erythematosus (DLE)",

  description:
    "A localized autoimmune skin disease affecting sun-exposed areas, especially the nasal planum, causing depigmentation, crusting, erosions, and inflammation.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Discoid Lupus Erythematosus",
    "Cutaneous Lupus",
    "Canine DLE",
    "Localized Lupus Dermatitis",
  ],

  overview:
    "Canine discoid lupus erythematosus is an immune-mediated dermatological disorder limited primarily to the skin. It occurs due to immune-mediated damage at the junction between the epidermis and dermis. Lesions are commonly seen on the nasal planum, lips, periocular region, and ear pinnae. Unlike systemic lupus erythematosus, DLE usually does not involve internal organs. Sunlight exposure may worsen lesions.",

  clinicalProblems:[

    "Autoimmune skin inflammation",
    "Nasal depigmentation",
    "Crusting and erosions",
    "Skin barrier damage",
    "Photosensitivity",
    "Chronic dermatological disease"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess lesion duration, sun exposure, progression, breed predisposition, and previous skin treatments."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate nasal planum changes, depigmentation, crusting, and ulceration."
    },

    {
      id:"rule-out",
      step:3,
      title:"Differential Diagnosis",
      description:
        "Exclude infectious, neoplastic, and traumatic causes of nasal lesions."
    },

    {
      id:"biopsy",
      step:4,
      title:"Skin Biopsy",
      description:
        "Confirm diagnosis through histopathological evaluation."
    },

    {
      id:"management",
      step:5,
      title:"Long-term Management",
      description:
        "Reduce inflammation and minimize UV-related worsening."

    }

  ],

  diagnostics:[

    {
      id:"skin-biopsy",
      name:"Skin Biopsy and Histopathology",
      priority:"Essential",
      reason:
        "Confirms immune-mediated skin changes."
    },

    {
      id:"cytology",
      name:"Skin Cytology",
      priority:"Recommended",
      reason:
        "Helps rule out secondary infections."
    },

    {
      id:"systemic-evaluation",
      name:"Systemic Lupus Screening",
      priority:"Conditional",
      reason:
        "Used when systemic involvement is suspected."

    }

  ],

  drugCategories:[

    {
      category:"Immunomodulatory Therapy",
      indication:"Control autoimmune skin inflammation",
      reason:
        "Reduces immune-mediated tissue damage."
    },

    {
      category:"Topical Therapy",
      indication:"Localized lesions",
      reason:
        "Directly manages affected skin areas."
    },

    {
      category:"Sun Protection",
      indication:"Prevent flare-ups",
      reason:
        "Reduces UV-triggered worsening."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"
    },

    {
      drugId:"tacrolimus",
      priority:"Supportive",
      category:"Immunomodulator"

    }

  ],

  stabilization:[

    "Protect affected areas from excessive sunlight.",
    "Reduce autoimmune inflammation.",
    "Treat secondary infections if present.",
    "Monitor lesion progression.",
    "Differentiate from systemic autoimmune disease."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Chronic facial skin lesions", weight:65 },

      { finding:"Sun exposure worsening", weight:60 },

      { finding:"Adult dog", weight:45 },

      { finding:"Breed predisposition", weight:40 },

      { finding:"Slow progression", weight:50 }

    ],

    clinicalSigns:[

      { finding:"Nasal depigmentation", weight:80 },

      { finding:"Crusting of nasal planum", weight:75 },

      { finding:"Erosions on nose", weight:65 },

      { finding:"Loss of normal nasal texture", weight:70 },

      { finding:"Lip lesions", weight:45 },

      { finding:"Ear pinna lesions", weight:35 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Possible changes if systemic disease develops", weight:25 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Characteristic nasal lesions", weight:80 },

      { finding:"Histopathology confirmation", weight:95 },

      { finding:"UV-associated worsening", weight:60 },

      { finding:"Response to immunomodulatory therapy", weight:70 }

    ],

    against:[

      { finding:"Bacterial or fungal infection confirmed", weight:-50 },

      { finding:"Systemic illness signs", weight:-30 },

      { finding:"No nasal or facial lesions", weight:-60 }

    ],

  },

  monitoring:[

    {
      id:"lesions",
      parameter:"Nasal and facial lesion progression",
      frequency:"Regular follow-up",
      reason:
        "Evaluates disease control."
    },

    {
      id:"systemic",
      parameter:"Signs of systemic involvement",
      frequency:"Periodic assessment",
      reason:
        "Detects progression beyond skin disease."
    },

    {
      id:"infection",
      parameter:"Secondary infection",
      frequency:"Follow-up",
      reason:
        "Monitors complications."

    }

  ],

  precautions:[

    {
      id:"sun",
      title:"Sunlight Exposure",
      description:
        "UV exposure may worsen lesions; sun protection can help reduce flare-ups."
    },

    {
      id:"systemic",
      title:"Differentiate From Systemic Lupus",
      description:
        "Most cases remain localized, but systemic involvement should be considered when clinical signs suggest it."

    }

  ],

  prognosis:
    "Prognosis is generally good because disease is usually limited to the skin. Long-term management may be required to control flare-ups.",

  strengtheningEvidence:[

    "Nasal depigmentation",

    "Facial crusting",

    "Positive biopsy",

    "Sun-related worsening"

  ],

  weakeningEvidence:[

    "Confirmed infection",

    "Systemic disease signs",

    "No characteristic lesions"

  ],

  classicFindings:[

    "Nasal planum depigmentation",

    "Crusting",

    "Facial lesions",

    "UV sensitivity"

  ],

  ruleOutFindings:[

    "Pemphigus foliaceus",

    "Dermatophytosis",

    "Bacterial dermatitis",

    "Nasal neoplasia",

    "Trauma"

  ],

};