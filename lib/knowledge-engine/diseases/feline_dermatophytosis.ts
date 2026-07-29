import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineDermatophytosis: DiseaseCard = {
  id: "feline-dermatophytosis-cat",

  title: "Feline Dermatophytosis (Ringworm)",

  description:
    "A superficial fungal infection of feline skin, hair, and claws caused by dermatophytes, resulting in hair loss, scaling, and skin lesions.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Ringworm",
    "Dermatophytosis",
    "Microsporum Infection",
    "Fungal Skin Infection",
  ],

  overview:
    "Feline dermatophytosis is a contagious fungal infection affecting keratinized tissues including hair, skin, and claws. The most common causative organism in cats is Microsporum canis. Young cats, long-haired cats, immunocompromised cats, and cats living in crowded environments are at increased risk. The disease is zoonotic and can spread between cats, other animals, and humans.",

  clinicalProblems:[

    "Fungal invasion of skin and hair",
    "Hair follicle damage",
    "Skin inflammation",
    "Contagious infection",
    "Environmental contamination"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age, exposure to infected animals, shelter/cattery history, grooming practices, and previous skin disease."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate alopecia, scaling, crusting, redness, and lesion distribution."
    },

    {
      id:"fungal-testing",
      step:3,
      title:"Fungal Diagnostic Testing",
      description:
        "Perform fungal examination to identify dermatophyte infection."
    },

    {
      id:"confirmation",
      step:4,
      title:"Diagnostic Confirmation",
      description:
        "Confirm infection using appropriate fungal identification methods."

    },

    {
      id:"management",
      step:5,
      title:"Treatment and Control",
      description:
        "Treat infected cats and control environmental contamination."

    }

  ],

  diagnostics:[

    {
      id:"woods-lamp",
      name:"Wood's Lamp Examination",
      priority:"Recommended",
      reason:
        "May detect fluorescence associated with some dermatophyte infections."
    },

    {
      id:"microscopy",
      name:"Direct Microscopic Examination",
      priority:"Recommended",
      reason:
        "Evaluates fungal elements in hair and skin samples."
    },

    {
      id:"fungal-culture",
      name:"Dermatophyte Culture",
      priority:"Essential",
      reason:
        "Confirms fungal growth and identification."
    },

    {
      id:"pcr",
      name:"PCR Testing",
      priority:"Essential",
      reason:
        "Provides molecular detection of dermatophytes."

    }

  ],

  drugCategories:[

    {
      category:"Systemic Antifungal Therapy",
      indication:"Generalized or persistent infection",
      reason:
        "Treats fungal infection within hair follicles and skin."
    },

    {
      category:"Topical Antifungal Therapy",
      indication:"Localized infection and environmental control",
      reason:
        "Reduces fungal contamination on skin surface."
    },

    {
      category:"Environmental Decontamination",
      indication:"Prevention of reinfection",
      reason:
        "Removes infectious fungal spores."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"itraconazole",
      priority:"Supportive",
      category:"Antifungal"
    },

    {
      drugId:"lime-sulfur",
      priority:"Supportive",
      category:"Antifungal"

    }

  ],

  stabilization:[

    "Isolate infected cats when necessary.",
    "Treat affected animals.",
    "Clean contaminated environment.",
    "Monitor lesion improvement.",
    "Reduce spread to humans and other animals."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Young cat", weight:60 },

      { finding:"Shelter or cattery exposure", weight:70 },

      { finding:"Contact with infected animal", weight:75 },

      { finding:"Long-haired breed", weight:50 },

      { finding:"Immunosuppression", weight:55 }

    ],

    clinicalSigns:[

      { finding:"Circular areas of hair loss", weight:85 },

      { finding:"Scaling", weight:75 },

      { finding:"Crusting", weight:55 },

      { finding:"Broken hairs", weight:70 },

      { finding:"Claw involvement", weight:40 },

      { finding:"Mild itching", weight:45 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Changes due to secondary infection", weight:25 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Typical alopecia pattern", weight:80 },

      { finding:"Positive fungal culture", weight:95 },

      { finding:"Fungal elements on microscopy", weight:85 },

      { finding:"Environmental exposure history", weight:70 }

    ],

    against:[

      { finding:"Negative fungal evaluation", weight:-50 },

      { finding:"No skin lesions", weight:-40 },

      { finding:"Alternative dermatological disease confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"lesions",
      parameter:"Skin lesions and hair regrowth",
      frequency:"Regular follow-up",
      reason:
        "Evaluates treatment response."
    },

    {
      id:"culture",
      parameter:"Fungal testing",
      frequency:"During treatment",
      reason:
        "Confirms elimination of infection."
    },

    {
      id:"environment",
      parameter:"Environmental contamination",
      frequency:"Throughout treatment",
      reason:
        "Prevents recurrence."

    }

  ],

  precautions:[

    {
      id:"zoonotic",
      title:"Zoonotic Risk",
      description:
        "Dermatophytes can spread from infected cats to humans and other animals."
    },

    {
      id:"environment",
      title:"Environmental Control",
      description:
        "Fungal spores can persist in the environment and require proper cleaning."

    }

  ],

  prognosis:
    "Prognosis is generally good with appropriate antifungal therapy and environmental management. Resolution may require several weeks to months.",

  strengtheningEvidence:[

    "Circular alopecia",

    "Positive fungal culture",

    "Broken hairs",

    "Exposure history"

  ],

  weakeningEvidence:[

    "Negative fungal testing",

    "No dermatological lesions",

    "Alternative skin disease"

  ],

  classicFindings:[

    "Hair loss",

    "Scaling",

    "Crusting",

    "Fungal culture positivity"

  ],

  ruleOutFindings:[

    "Flea allergy dermatitis",

    "Mange",

    "Bacterial pyoderma",

    "Eosinophilic skin disease",

    "Allergic dermatitis"

  ],

};