import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineDemodicosis: DiseaseCard = {
  id: "canine-demodicosis-dog",

  title: "Canine Demodicosis (Demodectic Mange)",

  description:
    "A parasitic skin disease caused by excessive proliferation of Demodex mites within hair follicles and sebaceous glands, leading to localized or generalized skin lesions.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Demodectic Mange",
    "Red Mange",
    "Demodex Infection",
    "Follicular Mange",
  ],

  overview:
    "Canine demodicosis is a common parasitic skin disease caused by overpopulation of Demodex mites, which normally exist in small numbers on healthy dogs. Disease develops when immune control over mites is impaired. It may occur as localized disease in young dogs or generalized disease involving large body areas. Secondary bacterial infection is common, especially in generalized cases.",

  clinicalProblems:[

    "Hair follicle mite infestation",
    "Hair loss",
    "Skin inflammation",
    "Secondary bacterial infection",
    "Chronic skin disease",
    "Immune-associated disease"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age, onset of hair loss, previous skin disease, recurrence, and immune-related conditions."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate distribution of alopecia, skin lesions, inflammation, and secondary infection."
    },

    {
      id:"mite-detection",
      step:3,
      title:"Parasite Detection",
      description:
        "Perform skin scraping or other diagnostic methods to identify Demodex mites."
    },

    {
      id:"underlying-cause",
      step:4,
      title:"Underlying Disease Assessment",
      description:
        "Investigate factors causing reduced immune control in adult-onset cases."
    },

    {
      id:"treatment",
      step:5,
      title:"Treatment Management",
      description:
        "Control mites and manage secondary infections."

    }

  ],

  diagnostics:[

    {
      id:"deep-skin-scraping",
      name:"Deep Skin Scraping",
      priority:"Essential",
      reason:
        "Detects Demodex mites within hair follicles."
    },

    {
      id:"trichogram",
      name:"Hair Pluck Examination",
      priority:"Recommended",
      reason:
        "May identify mites associated with hair follicles."
    },

    {
      id:"cytology",
      name:"Skin Cytology",
      priority:"Recommended",
      reason:
        "Evaluates secondary bacterial infection."
    },

    {
      id:"biopsy",
      name:"Skin Biopsy",
      priority:"Conditional",
      reason:
        "Used in difficult or chronic cases."

    }

  ],

  drugCategories:[

    {
      category:"Antiparasitic Therapy",
      indication:"Demodex mite elimination",
      reason:
        "Reduces mite population."
    },

    {
      category:"Antibacterial Therapy",
      indication:"Secondary bacterial infection",
      reason:
        "Treats pyoderma associated with demodicosis."
    },

    {
      category:"Supportive Skin Care",
      indication:"Skin recovery",
      reason:
        "Improves skin barrier and healing."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"fluralaner",
      priority:"Supportive",
      category:"Antiparasitic"
    },

    {
      drugId:"ivermectin",
      priority:"Supportive",
      category:"Macrocyclic Lactone"
    }

  ],

  stabilization:[

    "Identify extent of disease.",
    "Treat secondary bacterial infections.",
    "Maintain skin hygiene.",
    "Evaluate immune-related causes in adult dogs.",
    "Monitor mite elimination."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Young dog", weight:50 },

      { finding:"Progressive hair loss", weight:65 },

      { finding:"Previous recurrent skin problems", weight:45 },

      { finding:"Adult-onset generalized disease", weight:55 },

      { finding:"Underlying immune suppression risk", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Patchy alopecia", weight:70 },

      { finding:"Generalized hair loss", weight:75 },

      { finding:"Red inflamed skin", weight:50 },

      { finding:"Comedones", weight:45 },

      { finding:"Skin thickening", weight:40 },

      { finding:"Secondary bacterial infection", weight:65 },

      { finding:"Pustules and crusting", weight:55 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Changes associated with underlying disease", weight:25 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Demodex mites detected on scraping", weight:95 },

      { finding:"Typical alopecia pattern", weight:70 },

      { finding:"Secondary pyoderma", weight:55 },

      { finding:"Response to acaricidal therapy", weight:60 }

    ],

    against:[

      { finding:"Negative repeated mite examinations", weight:-40 },

      { finding:"Primary fungal infection confirmed", weight:-50 },

      { finding:"No hair loss or skin lesions", weight:-60 }

    ],

  },

  monitoring:[

    {
      id:"skin",
      parameter:"Hair regrowth and skin lesions",
      frequency:"Monthly",
      reason:
        "Evaluates clinical improvement."
    },

    {
      id:"scraping",
      parameter:"Skin scraping results",
      frequency:"During treatment",
      reason:
        "Confirms mite elimination."
    },

    {
      id:"infection",
      parameter:"Secondary bacterial infection",
      frequency:"Follow-up",
      reason:
        "Monitors complications."

    }

  ],

  precautions:[

    {
      id:"immune",
      title:"Immune System Association",
      description:
        "Generalized demodicosis may be associated with immune dysfunction or genetic predisposition."
    },

    {
      id:"treatment-duration",
      title:"Long Treatment Course",
      description:
        "Complete resolution may require prolonged therapy and repeated monitoring."

    }

  ],

  prognosis:
    "Localized demodicosis often resolves spontaneously, while generalized disease requires prolonged treatment and monitoring. Prognosis depends on severity and underlying causes.",

  strengtheningEvidence:[

    "Demodex mites detected",

    "Typical alopecia",

    "Young dog",

    "Secondary infection",

    "Response to acaricidal treatment"

  ],

  weakeningEvidence:[

    "Negative mite examinations",

    "Confirmed fungal infection",

    "No skin lesions"

  ],

  classicFindings:[

    "Patchy hair loss",

    "Red skin",

    "Demodex mites",

    "Secondary pyoderma"

  ],

  ruleOutFindings:[

    "Sarcoptic mange",

    "Dermatophytosis",

    "Atopic dermatitis",

    "Flea allergy dermatitis",

    "Superficial pyoderma"

  ],

};