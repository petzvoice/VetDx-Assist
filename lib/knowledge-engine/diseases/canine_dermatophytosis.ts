import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineDermatophytosis: DiseaseCard = {
  id: "canine-dermatophytosis-ringworm-dog",

  title: "Canine Dermatophytosis (Ringworm)",

  description:
    "A contagious fungal infection of keratinized tissues including skin, hair, and nails caused by dermatophyte fungi such as Microsporum and Trichophyton species.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Ringworm",
    "Dermatophyte Infection",
    "Fungal Dermatitis",
    "Tinea Infection",
  ],

  overview:
    "Canine dermatophytosis is a superficial fungal infection affecting hair, skin, and claws. Despite the name, it is not caused by worms. The most common organisms include Microsporum canis, Microsporum gypseum, and Trichophyton mentagrophytes. Infection occurs through contact with infected animals, contaminated materials, or fungal spores in the environment. Young dogs, immunocompromised animals, and dogs living in crowded environments are at increased risk.",

  clinicalProblems:[

    "Fungal skin infection",
    "Hair loss",
    "Skin scaling",
    "Pruritus",
    "Zoonotic transmission risk",
    "Environmental contamination"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess contact with infected animals, shelter exposure, age, immune status, and progression of skin lesions."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate alopecia, scaling, crusting, and lesion distribution."
    },

    {
      id:"fungal-testing",
      step:3,
      title:"Fungal Diagnosis",
      description:
        "Perform fungal testing to identify dermatophyte infection."
    },

    {
      id:"treatment",
      step:4,
      title:"Antifungal Management",
      description:
        "Treat infection and reduce environmental contamination."
    },

    {
      id:"environment",
      step:5,
      title:"Environmental Control",
      description:
        "Reduce fungal spores in the environment to prevent recurrence."

    }

  ],

  diagnostics:[

    {
      id:"woods-lamp",
      name:"Wood's Lamp Examination",
      priority:"Recommended",
      reason:
        "May detect fluorescence from some Microsporum species."
    },

    {
      id:"fungal-culture",
      name:"Dermatophyte Culture",
      priority:"Essential",
      reason:
        "Confirms fungal species and diagnosis."
    },

    {
      id:"microscopy",
      name:"Direct Microscopic Examination",
      priority:"Recommended",
      reason:
        "Identifies fungal spores and infected hairs."
    },

    {
      id:"pcr",
      name:"Dermatophyte PCR Testing",
      priority:"Conditional",
      reason:
        "Provides rapid fungal detection."

    }

  ],

  drugCategories:[

    {
      category:"Systemic Antifungal Therapy",
      indication:"Generalized or persistent infection",
      reason:
        "Eliminates fungal infection from hair follicles."
    },

    {
      category:"Topical Antifungal Therapy",
      indication:"Localized lesions and environmental control",
      reason:
        "Reduces fungal contamination."
    },

    {
      category:"Environmental Decontamination",
      indication:"Prevent reinfection",
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
      drugId:"terbinafine",
      priority:"Supportive",
      category:"Antifungal"
    }

  ],

  stabilization:[

    "Prevent spread to other animals and humans.",
    "Reduce environmental fungal contamination.",
    "Treat affected areas appropriately.",
    "Monitor lesion improvement.",
    "Maintain hygiene during treatment."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Contact with infected animals", weight:55 },

      { finding:"Young dog", weight:45 },

      { finding:"Shelter or crowded environment exposure", weight:50 },

      { finding:"Immunosuppression", weight:35 },

      { finding:"Recent grooming exposure", weight:30 }

    ],

    clinicalSigns:[

      { finding:"Circular areas of hair loss", weight:75 },

      { finding:"Scaling skin lesions", weight:70 },

      { finding:"Crusting", weight:45 },

      { finding:"Broken hairs", weight:55 },

      { finding:"Mild to moderate itching", weight:40 },

      { finding:"Nail involvement", weight:30 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Changes due to underlying illness", weight:20 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Positive fungal culture", weight:95 },

      { finding:"Dermatophyte identified on microscopy", weight:85 },

      { finding:"Typical alopecia with scaling", weight:70 },

      { finding:"Positive Wood's lamp fluorescence", weight:45 }

    ],

    against:[

      { finding:"Negative fungal testing", weight:-40 },

      { finding:"Primary bacterial infection confirmed", weight:-50 },

      { finding:"No skin lesions", weight:-60 }

    ],

  },

  monitoring:[

    {
      id:"lesions",
      parameter:"Skin lesions and hair regrowth",
      frequency:"Regular follow-up",
      reason:
        "Evaluates clinical recovery."
    },

    {
      id:"fungal-testing",
      parameter:"Fungal test results",
      frequency:"During treatment",
      reason:
        "Confirms elimination of infection."
    },

    {
      id:"environment",
      parameter:"Environmental cleaning",
      frequency:"Throughout treatment",
      reason:
        "Prevents reinfection."

    }

  ],

  precautions:[

    {
      id:"zoonotic",
      title:"Zoonotic Potential",
      description:
        "Dermatophytes can infect humans, especially children and immunocompromised individuals."
    },

    {
      id:"environment",
      title:"Environmental Control",
      description:
        "Fungal spores can persist in the environment and cause reinfection."

    }

  ],

  prognosis:
    "Prognosis is excellent with appropriate antifungal therapy and environmental management. Complete resolution may require several weeks to months.",

  strengtheningEvidence:[

    "Positive fungal culture",

    "Circular alopecia",

    "Scaling lesions",

    "Contact exposure",

    "Dermatophyte identification"

  ],

  weakeningEvidence:[

    "Negative fungal tests",

    "Bacterial infection confirmed",

    "No hair or skin lesions"

  ],

  classicFindings:[

    "Circular hair loss",

    "Scaling",

    "Broken hairs",

    "Young dog"

  ],

  ruleOutFindings:[

    "Demodicosis",

    "Sarcoptic mange",

    "Atopic dermatitis",

    "Superficial pyoderma",

    "Malassezia dermatitis"

  ],

};