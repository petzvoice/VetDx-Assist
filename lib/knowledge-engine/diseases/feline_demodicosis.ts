import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineDemodicosis: DiseaseCard = {
  id: "feline-demodicosis-cat",

  title: "Feline Demodicosis (Demodex Mite Infection)",

  description:
    "A parasitic skin disease in cats caused by Demodex mites living within hair follicles and skin, resulting in hair loss, inflammation, scaling, and dermatitis.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Demodicosis",
    "Demodex Infection",
    "Demodectic Mange",
    "Mite-Associated Dermatitis",
  ],

  overview:
    "Feline demodicosis is an uncommon skin disorder caused by proliferation of Demodex mites. Two major species associated with cats include Demodex cati and Demodex gatoi. Demodex cati is often associated with underlying immunosuppression or systemic disease, while Demodex gatoi may cause contagious pruritic dermatitis. Clinical signs vary from localized hair loss to generalized inflammatory skin disease.",

  clinicalProblems:[

    "Parasitic skin infestation",
    "Hair follicle inflammation",
    "Pruritus",
    "Alopecia",
    "Skin inflammation",
    "Underlying immune dysfunction"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess itching, previous skin disease, immune status, medication history, and contact with affected cats."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate alopecia, scaling, redness, crusting, and lesion distribution."
    },

    {
      id:"parasite-testing",
      step:3,
      title:"Parasite Identification",
      description:
        "Perform skin sampling to detect mites."
    },

    {
      id:"underlying-disease",
      step:4,
      title:"Underlying Disease Assessment",
      description:
        "Investigate immune suppression or systemic disease when generalized infection occurs."

    },

    {
      id:"management",
      step:5,
      title:"Treatment and Control",
      description:
        "Eliminate mites and manage contributing factors."

    }

  ],

  diagnostics:[

    {
      id:"skin-scraping",
      name:"Deep Skin Scraping",
      priority:"Essential",
      reason:
        "Detects Demodex mites within hair follicles."
    },

    {
      id:"trichogram",
      name:"Hair Examination",
      priority:"Recommended",
      reason:
        "May identify mites associated with hair follicles."
    },

    {
      id:"cytology",
      name:"Skin Cytology",
      priority:"Recommended",
      reason:
        "Evaluates secondary bacterial infection and inflammation."
    },

    {
      id:"systemic-evaluation",
      name:"Systemic Disease Evaluation",
      priority:"Recommended",
      reason:
        "Identifies underlying conditions associated with generalized disease."

    }

  ],

  drugCategories:[

    {
      category:"Antiparasitic Therapy",
      indication:"Mite elimination",
      reason:
        "Reduces Demodex infestation."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Secondary bacterial infection",
      reason:
        "Controls bacterial complications."
    },

    {
      category:"Underlying Disease Management",
      indication:"Associated immune disorders",
      reason:
        "Reduces recurrence risk."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"selamectin",
      priority:"Supportive",
      category:"Antiparasitic"
    },

    {
      drugId:"moxidectin",
      priority:"Supportive",
      category:"Antiparasitic"

    }

  ],

  stabilization:[

    "Identify and manage underlying disease.",
    "Control secondary infections.",
    "Reduce skin inflammation.",
    "Monitor parasite elimination.",
    "Prevent spread in contagious cases."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Underlying immune suppression", weight:75 },

      { finding:"Chronic skin disease", weight:60 },

      { finding:"Contact with affected cats", weight:55 },

      { finding:"Previous treatment failure", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Localized alopecia", weight:70 },

      { finding:"Generalized hair loss", weight:65 },

      { finding:"Scaling", weight:60 },

      { finding:"Crusting", weight:55 },

      { finding:"Severe itching", weight:70 },

      { finding:"Skin redness", weight:50 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Changes due to underlying disease", weight:40 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Demodex mites identified", weight:95 },

      { finding:"Compatible skin lesions", weight:75 },

      { finding:"Underlying immune disease", weight:70 },

      { finding:"Response to antiparasitic therapy", weight:70 }

    ],

    against:[

      { finding:"Negative mite evaluation", weight:-45 },

      { finding:"No skin abnormalities", weight:-40 },

      { finding:"Alternative dermatological diagnosis", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"mites",
      parameter:"Mite detection",
      frequency:"During treatment",
      reason:
        "Confirms elimination of infestation."
    },

    {
      id:"skin",
      parameter:"Skin lesion improvement",
      frequency:"Regular follow-up",
      reason:
        "Evaluates clinical recovery."
    },

    {
      id:"underlying",
      parameter:"Underlying disease status",
      frequency:"Long-term",
      reason:
        "Reduces recurrence."

    }

  ],

  precautions:[

    {
      id:"immune",
      title:"Underlying Disease Investigation",
      description:
        "Generalized feline demodicosis may indicate immune suppression or systemic disease."
    },

    {
      id:"contagious",
      title:"Contagious Form",
      description:
        "Demodex gatoi-associated disease may spread between cats and requires appropriate management."

    }

  ],

  prognosis:
    "Prognosis is generally good when the cause is identified and mites are eliminated. Cases associated with underlying disease may require long-term management.",

  strengtheningEvidence:[

    "Mites identified on skin scraping",

    "Compatible skin lesions",

    "Generalized disease with immune suppression",

    "Response to antiparasitic treatment"

  ],

  weakeningEvidence:[

    "Negative parasite testing",

    "No skin lesions",

    "Alternative skin disease confirmed"

  ],

  classicFindings:[

    "Hair loss",

    "Scaling",

    "Itching",

    "Demodex mites"

  ],

  ruleOutFindings:[

    "Dermatophytosis",

    "Bacterial pyoderma",

    "Flea allergy dermatitis",

    "Food allergy dermatitis",

    "Eosinophilic skin disease"

  ],

};