import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineFleaAllergyDermatitis: DiseaseCard = {
  id: "canine-flea-allergy-dermatitis-dog",

  title: "Canine Flea Allergy Dermatitis (FAD)",

  description:
    "An allergic skin disease caused by hypersensitivity to flea saliva, resulting in intense itching, inflammation, and characteristic skin lesions.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Flea Allergy Dermatitis",
    "Flea Bite Allergy",
    "Flea Hypersensitivity Dermatitis",
    "Canine Flea Dermatitis",
  ],

  overview:
    "Canine flea allergy dermatitis is one of the most common allergic skin diseases in dogs. It develops when dogs become hypersensitive to proteins present in flea saliva. Even a small number of flea bites can trigger severe itching and inflammation. Lesions commonly affect the caudal dorsum, tail base, and inner thighs. Chronic scratching may lead to hair loss, skin thickening, and secondary bacterial infections.",

  clinicalProblems:[

    "Severe pruritus",
    "Allergic skin inflammation",
    "Hair loss",
    "Secondary bacterial infection",
    "Chronic skin damage",
    "Flea infestation"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess flea exposure, seasonal pattern, itching severity, previous flea control measures, and recurrence."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate lesion distribution, alopecia, redness, crusting, and self-trauma."
    },

    {
      id:"parasite-assessment",
      step:3,
      title:"Flea Evaluation",
      description:
        "Look for fleas or flea dirt and assess effectiveness of parasite control."
    },

    {
      id:"rule-out",
      step:4,
      title:"Differential Diagnosis",
      description:
        "Exclude mites, infections, food allergy, and atopic dermatitis."
    },

    {
      id:"management",
      step:5,
      title:"Flea Control Management",
      description:
        "Eliminate fleas on the animal and environment while controlling allergic inflammation."

    }

  ],

  diagnostics:[

    {
      id:"flea-comb",
      name:"Flea Comb Examination",
      priority:"Recommended",
      reason:
        "Detects adult fleas and flea dirt."
    },

    {
      id:"skin-cytology",
      name:"Skin Cytology",
      priority:"Recommended",
      reason:
        "Identifies secondary bacterial or yeast infections."
    },

    {
      id:"parasite-control-trial",
      name:"Flea Control Trial",
      priority:"Essential",
      reason:
        "Response to strict flea elimination supports diagnosis."
    },

    {
      id:"allergy-testing",
      name:"Allergy Testing",
      priority:"Conditional",
      reason:
        "May help evaluate concurrent allergic disease."

    }

  ],

  drugCategories:[

    {
      category:"Ectoparasite Control",
      indication:"Flea elimination",
      reason:
        "Removes the triggering allergen source."
    },

    {
      category:"Antipruritic Therapy",
      indication:"Severe itching",
      reason:
        "Reduces allergic inflammation and discomfort."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Secondary infection",
      reason:
        "Treats bacterial or yeast complications."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"fluralaner",
      priority:"Supportive",
      category:"Antiparasitic"
    },

    {
      drugId:"selamectin",
      priority:"Supportive",
      category:"Antiparasitic"
    }

  ],

  stabilization:[

    "Start effective flea elimination.",
    "Treat secondary skin infections.",
    "Control severe itching.",
    "Clean the environment to remove flea stages.",
    "Prevent future flea exposure."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Flea exposure", weight:65 },

      { finding:"Seasonal itching", weight:55 },

      { finding:"Poor flea control history", weight:60 },

      { finding:"Previous similar episodes", weight:50 },

      { finding:"Multi-pet household", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Severe itching at tail base", weight:85 },

      { finding:"Caudal dorsal alopecia", weight:70 },

      { finding:"Flea dirt present", weight:75 },

      { finding:"Red inflamed skin", weight:55 },

      { finding:"Crusting and scabs", weight:45 },

      { finding:"Secondary pyoderma", weight:55 },

      { finding:"Skin thickening due to chronic irritation", weight:40 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Changes due to secondary infection", weight:20 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Flea infestation identified", weight:85 },

      { finding:"Characteristic tail base itching", weight:80 },

      { finding:"Improvement after flea elimination", weight:90 },

      { finding:"Flea dirt detected", weight:75 }

    ],

    against:[

      { finding:"No response to strict flea control", weight:-50 },

      { finding:"Primary mite infection confirmed", weight:-50 },

      { finding:"No pruritus", weight:-60 }

    ],

  },

  monitoring:[

    {
      id:"itching",
      parameter:"Pruritus severity",
      frequency:"Regular assessment",
      reason:
        "Evaluates allergy control."
    },

    {
      id:"flea-control",
      parameter:"Flea prevention effectiveness",
      frequency:"Monthly",
      reason:
        "Prevents recurrence."
    },

    {
      id:"skin",
      parameter:"Skin healing",
      frequency:"Follow-up",
      reason:
        "Monitors recovery from inflammation."

    }

  ],

  precautions:[

    {
      id:"environment",
      title:"Environmental Flea Control",
      description:
        "Flea eggs and larvae in the environment can cause reinfestation if not controlled."
    },

    {
      id:"allergy",
      title:"Hypersensitivity",
      description:
        "Affected dogs may react severely even to occasional flea bites."

    }

  ],

  prognosis:
    "Prognosis is excellent when effective flea control is maintained. Recurrence is common if flea exposure continues.",

  strengtheningEvidence:[

    "Tail base itching",

    "Flea dirt or fleas detected",

    "Response to flea elimination",

    "Characteristic lesion distribution"

  ],

  weakeningEvidence:[

    "No flea exposure",

    "No itching",

    "Alternative allergy diagnosis"

  ],

  classicFindings:[

    "Tail base pruritus",

    "Flea dirt",

    "Hair loss",

    "Seasonal itching"

  ],

  ruleOutFindings:[

    "Atopic dermatitis",

    "Food allergy dermatitis",

    "Sarcoptic mange",

    "Demodicosis",

    "Malassezia dermatitis"

  ],

};