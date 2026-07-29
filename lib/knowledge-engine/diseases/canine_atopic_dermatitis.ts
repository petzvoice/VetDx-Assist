import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineAtopicDermatitis: DiseaseCard = {
  id: "canine-atopic-dermatitis-dog",

  title: "Canine Atopic Dermatitis",

  description:
    "A chronic inflammatory and pruritic skin disease caused by hypersensitivity to environmental allergens with genetic and immune system involvement.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Canine Atopy",
    "Atopic Dermatitis",
    "Environmental Allergy Dermatitis",
    "Canine Allergic Dermatitis",
  ],

  overview:
    "Canine atopic dermatitis is a common allergic skin disease characterized by chronic itching and inflammation. It results from abnormal immune responses to environmental allergens such as pollens, dust mites, molds, and other substances. Affected dogs often develop recurrent skin infections due to disruption of the skin barrier and self-trauma from scratching. Clinical signs commonly involve the paws, face, ears, and ventral body.",

  clinicalProblems:[

    "Chronic pruritus",
    "Skin inflammation",
    "Secondary bacterial infection",
    "Recurrent ear infections",
    "Skin barrier dysfunction",
    "Reduced quality of life"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age of onset, seasonal pattern, itching distribution, previous treatments, and allergy history."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate lesion distribution, skin changes, infections, and secondary complications."
    },

    {
      id:"rule-out",
      step:3,
      title:"Rule Out Other Causes",
      description:
        "Exclude parasites, infections, and food-related allergies causing similar signs."
    },

    {
      id:"allergy-assessment",
      step:4,
      title:"Allergy Evaluation",
      description:
        "Identify possible allergens and develop long-term management strategy."
    },

    {
      id:"management",
      step:5,
      title:"Long-term Management",
      description:
        "Control itching, restore skin barrier, and prevent secondary infections."

    }

  ],

  diagnostics:[

    {
      id:"skin-cytology",
      name:"Skin Cytology",
      priority:"Recommended",
      reason:
        "Detects secondary bacterial or yeast infections."
    },

    {
      id:"skin-scraping",
      name:"Skin Scraping",
      priority:"Essential",
      reason:
        "Rules out mite infestations such as Demodex."
    },

    {
      id:"flea-control-trial",
      name:"Flea Allergy Assessment",
      priority:"Essential",
      reason:
        "Rules out flea allergy dermatitis."
    },

    {
      id:"food-trial",
      name:"Elimination Diet Trial",
      priority:"Recommended",
      reason:
        "Evaluates food-responsive allergic disease."
    },

    {
      id:"allergy-testing",
      name:"Allergy Testing",
      priority:"Conditional",
      reason:
        "Helps identify environmental allergens for immunotherapy."

    }

  ],

  drugCategories:[

    {
      category:"Antipruritic Therapy",
      indication:"Control allergic itching",
      reason:
        "Reduces inflammation and improves comfort."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Secondary bacterial or yeast infection",
      reason:
        "Controls infection caused by skin barrier disruption."
    },

    {
      category:"Skin Barrier Support",
      indication:"Chronic dermatitis management",
      reason:
        "Improves skin health and reduces recurrence."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"oclacitinib",
      priority:"Supportive",
      category:"JAK Inhibitor"
    },

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"
    }

  ],

  stabilization:[

    "Control severe itching.",
    "Treat secondary skin infections.",
    "Maintain strict parasite control.",
    "Improve skin barrier function.",
    "Identify and avoid triggering allergens when possible."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Young age at onset", weight:50 },

      { finding:"Seasonal itching pattern", weight:55 },

      { finding:"Recurrent skin problems", weight:60 },

      { finding:"Breed predisposition", weight:40 },

      { finding:"Chronic itching history", weight:70 }

    ],

    clinicalSigns:[

      { finding:"Generalized pruritus", weight:80 },

      { finding:"Paw licking", weight:65 },

      { finding:"Facial itching", weight:60 },

      { finding:"Ear inflammation", weight:65 },

      { finding:"Red inflamed skin", weight:55 },

      { finding:"Secondary pyoderma", weight:60 },

      { finding:"Skin thickening from chronic disease", weight:45 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Changes due to secondary infection", weight:20 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Chronic allergic itching", weight:80 },

      { finding:"Typical lesion distribution", weight:75 },

      { finding:"Exclusion of parasites and infections", weight:70 },

      { finding:"Positive allergy testing", weight:80 }

    ],

    against:[

      { finding:"Severe parasitic infestation confirmed", weight:-60 },

      { finding:"Primary bacterial infection only", weight:-40 },

      { finding:"No itching", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"itch",
      parameter:"Pruritus severity",
      frequency:"Regular assessment",
      reason:
        "Evaluates allergy control."
    },

    {
      id:"infection",
      parameter:"Secondary skin infection",
      frequency:"Follow-up visits",
      reason:
        "Detects complications."
    },

    {
      id:"skin",
      parameter:"Skin condition and lesions",
      frequency:"Long-term monitoring",
      reason:
        "Assesses disease management."

    }

  ],

  precautions:[

    {
      id:"chronic",
      title:"Chronic Disease Management",
      description:
        "Atopic dermatitis usually requires lifelong management rather than a permanent cure."
    },

    {
      id:"secondary-infection",
      title:"Secondary Infection Risk",
      description:
        "Damaged skin barrier increases susceptibility to bacterial and yeast infections."

    }

  ],

  prognosis:
    "Canine atopic dermatitis is a lifelong condition. Prognosis is good with appropriate multimodal management, although periodic flare-ups may occur.",

  strengtheningEvidence:[

    "Chronic pruritus",

    "Typical allergy distribution",

    "Recurrent infections",

    "Exclusion of other causes",

    "Positive allergy testing"

  ],

  weakeningEvidence:[

    "Parasite infestation",

    "Primary infection without allergy",

    "No itching"

  ],

  classicFindings:[

    "Paw licking",

    "Ear infections",

    "Facial itching",

    "Seasonal allergy signs"

  ],

  ruleOutFindings:[

    "Sarcoptic mange",

    "Demodicosis",

    "Flea allergy dermatitis",

    "Food allergy",

    "Pyoderma"

  ],

};