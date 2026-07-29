import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineSarcopticMange: DiseaseCard = {
  id: "feline-sarcoptic-mange-cat",

  title: "Feline Sarcoptic Mange (Sarcoptes Infection)",

  description:
    "A highly pruritic contagious skin disease caused by Sarcoptes scabiei mites that burrow into the skin and produce severe itching, inflammation, crusting, and hair loss.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Sarcoptic Mange",
    "Sarcoptes Infestation",
    "Scabies",
    "Sarcoptic Dermatitis",
  ],

  overview:
    "Sarcoptic mange is an uncommon but highly contagious parasitic skin disease in cats caused by Sarcoptes scabiei mites. The mites burrow into the superficial skin layers, causing intense hypersensitivity reactions and severe itching. Lesions commonly involve the face, ears, neck, and body. The condition can temporarily affect humans and other animals through contact.",

  clinicalProblems:[

    "Severe skin itching",
    "Mite infestation",
    "Skin inflammation",
    "Crusting and scaling",
    "Self-trauma",
    "Contagious dermatitis"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess sudden onset itching, contact with affected animals, outdoor exposure, and previous skin treatments."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate distribution of lesions, crusting, redness, and self-trauma."
    },

    {
      id:"parasite-testing",
      step:3,
      title:"Parasite Identification",
      description:
        "Perform skin scraping or other methods to identify mites."
    },

    {
      id:"differential-evaluation",
      step:4,
      title:"Differential Diagnosis Assessment",
      description:
        "Rule out allergic, fungal, and other parasitic skin diseases."
    },

    {
      id:"management",
      step:5,
      title:"Treatment and Control",
      description:
        "Eliminate mites and manage affected contacts."

    }

  ],

  diagnostics:[

    {
      id:"skin-scraping",
      name:"Skin Scraping",
      priority:"Recommended",
      reason:
        "Attempts to identify Sarcoptes mites."
    },

    {
      id:"clinical-response",
      name:"Therapeutic Response Evaluation",
      priority:"Recommended",
      reason:
        "Improvement after appropriate acaricidal treatment supports diagnosis."
    },

    {
      id:"cytology",
      name:"Skin Cytology",
      priority:"Recommended",
      reason:
        "Evaluates secondary bacterial infection."

    }

  ],

  drugCategories:[

    {
      category:"Acaricidal Therapy",
      indication:"Mite elimination",
      reason:
        "Removes Sarcoptes infestation."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Severe itching and inflammation",
      reason:
        "Controls hypersensitivity-related discomfort."
    },

    {
      category:"Antibacterial Therapy",
      indication:"Secondary bacterial infection",
      reason:
        "Treats complications caused by skin damage."

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

    "Control severe itching and discomfort.",
    "Treat all exposed animals when required.",
    "Clean contaminated bedding and environment.",
    "Prevent self-trauma.",
    "Monitor resolution of skin lesions."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Contact with affected animal", weight:80 },

      { finding:"Outdoor exposure", weight:55 },

      { finding:"Sudden severe itching", weight:75 },

      { finding:"Previous skin disease", weight:35 }

    ],

    clinicalSigns:[

      { finding:"Intense pruritus", weight:90 },

      { finding:"Crusting", weight:75 },

      { finding:"Hair loss", weight:65 },

      { finding:"Redness of skin", weight:60 },

      { finding:"Skin excoriation", weight:70 },

      { finding:"Ear and facial lesions", weight:75 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Changes due to secondary infection", weight:25 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Severe itching", weight:85 },

      { finding:"Compatible lesion distribution", weight:75 },

      { finding:"Sarcoptes mites identified", weight:95 },

      { finding:"Response to acaricidal treatment", weight:80 }

    ],

    against:[

      { finding:"No itching", weight:-50 },

      { finding:"Negative evaluation with alternative diagnosis", weight:-45 },

      { finding:"Confirmed fungal disease", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"itching",
      parameter:"Pruritus severity",
      frequency:"Regular follow-up",
      reason:
        "Evaluates improvement after treatment."
    },

    {
      id:"skin",
      parameter:"Skin lesion healing",
      frequency:"Periodic",
      reason:
        "Monitors recovery."
    },

    {
      id:"contacts",
      parameter:"Affected contacts",
      frequency:"During treatment",
      reason:
        "Prevents reinfection."

    }

  ],

  precautions:[

    {
      id:"zoonotic",
      title:"Temporary Zoonotic Potential",
      description:
        "Sarcoptic mites may temporarily affect humans handling infected animals."
    },

    {
      id:"contagious",
      title:"Contagious Disease",
      description:
        "Affected animals and contacts require appropriate management to prevent spread."

    }

  ],

  prognosis:
    "Prognosis is excellent with effective acaricidal treatment. Clinical improvement occurs after mite elimination, although skin recovery may take time.",

  strengtheningEvidence:[

    "Severe pruritus",

    "Crusting lesions",

    "Contact exposure",

    "Positive mite identification"

  ],

  weakeningEvidence:[

    "No itching",

    "Negative parasite evaluation",

    "Alternative dermatological disease confirmed"

  ],

  classicFindings:[

    "Severe itching",

    "Crusts",

    "Hair loss",

    "Facial and ear lesions"

  ],

  ruleOutFindings:[

    "Dermatophytosis",

    "Feline demodicosis",

    "Flea allergy dermatitis",

    "Food allergy",

    "Bacterial pyoderma"

  ],

};