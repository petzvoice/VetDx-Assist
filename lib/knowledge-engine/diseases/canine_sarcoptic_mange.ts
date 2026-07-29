import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineSarcopticMange: DiseaseCard = {
  id: "canine-sarcoptic-mange-dog",

  title: "Canine Sarcoptic Mange (Scabies)",

  description:
    "A highly contagious parasitic skin disease caused by Sarcoptes scabiei var. canis mites that burrow into the skin and cause intense itching and inflammation.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Sarcoptic Mange",
    "Canine Scabies",
    "Sarcoptes Infestation",
    "Itch Mite Infection",
  ],

  overview:
    "Canine sarcoptic mange is an intensely pruritic skin disease caused by Sarcoptes scabiei mites. The mites burrow into the superficial layers of the skin, causing severe hypersensitivity reactions. It spreads easily through direct contact with affected animals and contaminated environments. Unlike demodicosis, sarcoptic mange is highly contagious and may cause temporary skin lesions in humans.",

  clinicalProblems:[

    "Severe itching",
    "Skin inflammation",
    "Hair loss",
    "Self-trauma",
    "Secondary bacterial infection",
    "Zoonotic skin irritation"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess severe itching, exposure to affected animals, recent shelter contact, and disease progression."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate lesion distribution, crusting, alopecia, and severity of pruritus."
    },

    {
      id:"mite-detection",
      step:3,
      title:"Parasite Detection",
      description:
        "Perform skin scraping or diagnostic trials to identify Sarcoptes mites."
    },

    {
      id:"rule-out",
      step:4,
      title:"Differential Diagnosis",
      description:
        "Exclude allergies, bacterial infections, and other parasitic diseases."
    },

    {
      id:"treatment",
      step:5,
      title:"Antiparasitic Management",
      description:
        "Eliminate mites and treat secondary skin complications."

    }

  ],

  diagnostics:[

    {
      id:"skin-scraping",
      name:"Superficial Skin Scraping",
      priority:"Recommended",
      reason:
        "Attempts to identify Sarcoptes mites and eggs."
    },

    {
      id:"diagnostic-trial",
      name:"Therapeutic Trial",
      priority:"Recommended",
      reason:
        "Negative scrapings do not rule out sarcoptic mange."
    },

    {
      id:"cytology",
      name:"Skin Cytology",
      priority:"Recommended",
      reason:
        "Detects secondary bacterial or yeast infections."
    },

    {
      id:"biopsy",
      name:"Skin Biopsy",
      priority:"Conditional",
      reason:
        "Used in unclear chronic cases."

    }

  ],

  drugCategories:[

    {
      category:"Acaricidal Therapy",
      indication:"Sarcoptes mite elimination",
      reason:
        "Targets causative parasite."
    },

    {
      category:"Antipruritic Therapy",
      indication:"Severe itching",
      reason:
        "Reduces discomfort and self-trauma."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Secondary infection",
      reason:
        "Treats bacterial complications."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"selamectin",
      priority:"Supportive",
      category:"Macrocyclic Lactone"
    },

    {
      drugId:"fluralaner",
      priority:"Supportive",
      category:"Antiparasitic"
    }

  ],

  stabilization:[

    "Control severe pruritus.",
    "Eliminate mites from the patient and environment.",
    "Treat secondary bacterial infections.",
    "Avoid contact with affected animals.",
    "Monitor response to therapy."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Intense itching", weight:85 },

      { finding:"Contact with affected animals", weight:60 },

      { finding:"Shelter or multi-dog environment", weight:50 },

      { finding:"Rapid spread of skin lesions", weight:55 },

      { finding:"Human family members with itching", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Severe pruritus", weight:90 },

      { finding:"Ear margin crusting", weight:75 },

      { finding:"Elbow and hock lesions", weight:65 },

      { finding:"Hair loss", weight:55 },

      { finding:"Red inflamed skin", weight:60 },

      { finding:"Crusts and scabs", weight:55 },

      { finding:"Secondary pyoderma", weight:45 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Changes due to secondary infection", weight:20 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Severe generalized itching", weight:85 },

      { finding:"Typical lesion distribution", weight:70 },

      { finding:"Sarcoptes mites detected", weight:95 },

      { finding:"Improvement after acaricidal treatment", weight:80 }

    ],

    against:[

      { finding:"No pruritus", weight:-50 },

      { finding:"Negative response to appropriate acaricide treatment", weight:-40 },

      { finding:"Alternative diagnosis confirmed", weight:-60 }

    ],

  },

  monitoring:[

    {
      id:"itching",
      parameter:"Pruritus severity",
      frequency:"Regular assessment",
      reason:
        "Evaluates clinical improvement."
    },

    {
      id:"skin",
      parameter:"Skin lesions and hair regrowth",
      frequency:"Follow-up",
      reason:
        "Monitors recovery."
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
      id:"contagious",
      title:"Highly Contagious Disease",
      description:
        "Sarcoptic mange spreads easily between dogs through direct contact."
    },

    {
      id:"zoonotic",
      title:"Human Exposure Risk",
      description:
        "Humans may develop temporary itchy skin lesions after exposure to affected dogs."

    }

  ],

  prognosis:
    "Prognosis is excellent with appropriate acaricidal treatment. Clinical improvement occurs after parasite elimination, although skin recovery may take several weeks.",

  strengtheningEvidence:[

    "Severe pruritus",

    "Typical lesion distribution",

    "Exposure history",

    "Positive mite detection",

    "Response to acaricidal therapy"

  ],

  weakeningEvidence:[

    "No itching",

    "Confirmed allergy disease",

    "Negative therapeutic response"

  ],

  classicFindings:[

    "Extreme itching",

    "Ear margin crusts",

    "Alopecia",

    "Contagious skin disease"

  ],

  ruleOutFindings:[

    "Demodicosis",

    "Atopic dermatitis",

    "Flea allergy dermatitis",

    "Dermatophytosis",

    "Superficial pyoderma"

  ],

};