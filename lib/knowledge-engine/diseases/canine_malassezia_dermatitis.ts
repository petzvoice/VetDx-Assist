import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineMalasseziaDermatitis: DiseaseCard = {
  id: "canine-malassezia-dermatitis-dog",

  title: "Canine Malassezia Dermatitis (Yeast Dermatitis)",

  description:
    "A superficial fungal skin disease caused by overgrowth of Malassezia yeast, resulting in pruritus, inflammation, odor, and greasy skin changes.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Malassezia Dermatitis",
    "Yeast Dermatitis",
    "Malassezia Overgrowth",
    "Canine Yeast Infection",
  ],

  overview:
    "Canine Malassezia dermatitis is a common skin disorder caused by excessive proliferation of Malassezia pachydermatis, a normal inhabitant of canine skin and ears. Disease develops when changes in the skin environment, allergies, seborrhea, or immune dysfunction allow yeast overgrowth. It commonly affects paws, ears, skin folds, and areas with increased moisture.",

  clinicalProblems:[

    "Yeast overgrowth",
    "Skin inflammation",
    "Severe itching",
    "Greasy skin",
    "Foul odor",
    "Recurrent dermatitis"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess itching, odor, recurrent skin disease, allergies, ear problems, and previous treatments."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate skin redness, scaling, pigmentation, and affected areas."
    },

    {
      id:"cytology",
      step:3,
      title:"Skin Cytology",
      description:
        "Identify yeast organisms and inflammatory changes."
    },

    {
      id:"underlying-cause",
      step:4,
      title:"Underlying Disease Evaluation",
      description:
        "Investigate allergies, endocrine disease, and skin barrier disorders."
    },

    {
      id:"treatment",
      step:5,
      title:"Antifungal Management",
      description:
        "Control yeast overgrowth and manage underlying causes."

    }

  ],

  diagnostics:[

    {
      id:"skin-cytology",
      name:"Skin Cytology",
      priority:"Essential",
      reason:
        "Detects Malassezia yeast organisms on affected skin."
    },

    {
      id:"ear-cytology",
      name:"Ear Cytology",
      priority:"Recommended",
      reason:
        "Evaluates concurrent yeast otitis."
    },

    {
      id:"skin-scraping",
      name:"Skin Scraping",
      priority:"Recommended",
      reason:
        "Rules out parasitic skin disease."
    },

    {
      id:"underlying-disease-testing",
      name:"Underlying Disease Evaluation",
      priority:"Recommended",
      reason:
        "Identifies allergies or hormonal disorders contributing to recurrence."

    }

  ],

  drugCategories:[

    {
      category:"Topical Antifungal Therapy",
      indication:"Localized yeast infection",
      reason:
        "Reduces yeast population on skin surface."
    },

    {
      category:"Systemic Antifungal Therapy",
      indication:"Generalized or recurrent infection",
      reason:
        "Treats widespread yeast overgrowth."
    },

    {
      category:"Underlying Disease Management",
      indication:"Prevent recurrence",
      reason:
        "Controls contributing skin disorders."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"ketoconazole",
      priority:"Supportive",
      category:"Antifungal"
    },

    {
      drugId:"itraconazole",
      priority:"Supportive",
      category:"Antifungal"
    }

  ],

  stabilization:[

    "Reduce yeast overgrowth.",
    "Relieve itching and inflammation.",
    "Treat secondary bacterial infections if present.",
    "Identify underlying allergy or endocrine disease.",
    "Maintain skin hygiene."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Recurrent skin infections", weight:60 },

      { finding:"History of allergies", weight:55 },

      { finding:"Chronic ear infections", weight:50 },

      { finding:"Moist skin environment", weight:40 },

      { finding:"Endocrine disease history", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Greasy skin", weight:75 },

      { finding:"Musty or rancid odor", weight:80 },

      { finding:"Intense itching", weight:70 },

      { finding:"Red inflamed skin", weight:60 },

      { finding:"Skin darkening (hyperpigmentation)", weight:50 },

      { finding:"Thickened skin", weight:45 },

      { finding:"Paw licking", weight:50 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Changes due to endocrine disease", weight:25 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Yeast organisms on cytology", weight:95 },

      { finding:"Characteristic odor and greasy skin", weight:70 },

      { finding:"Recurrent dermatitis", weight:60 },

      { finding:"Response to antifungal therapy", weight:75 }

    ],

    against:[

      { finding:"Negative cytology repeatedly", weight:-40 },

      { finding:"Primary bacterial infection confirmed", weight:-40 },

      { finding:"No skin inflammation", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"skin",
      parameter:"Skin appearance and odor",
      frequency:"Regular follow-up",
      reason:
        "Evaluates response to antifungal treatment."
    },

    {
      id:"cytology",
      parameter:"Yeast count on cytology",
      frequency:"During treatment",
      reason:
        "Confirms reduction of yeast population."
    },

    {
      id:"recurrence",
      parameter:"Repeated infections",
      frequency:"Long-term monitoring",
      reason:
        "Identifies unresolved underlying disease."

    }

  ],

  precautions:[

    {
      id:"underlying",
      title:"Underlying Disease Control",
      description:
        "Recurrent Malassezia dermatitis commonly occurs due to allergies, endocrine disorders, or skin barrier problems."
    },

    {
      id:"ear-involvement",
      title:"Ear Disease Association",
      description:
        "Malassezia commonly contributes to recurrent yeast otitis externa."

    }

  ],

  prognosis:
    "Prognosis is good with appropriate antifungal therapy and control of underlying causes. Recurrence is common if contributing diseases are not managed.",

  strengtheningEvidence:[

    "Yeast identified on cytology",

    "Greasy malodorous skin",

    "Chronic itching",

    "Response to antifungal treatment"

  ],

  weakeningEvidence:[

    "No yeast detected",

    "Primary bacterial infection",

    "No skin lesions"

  ],

  classicFindings:[

    "Musty odor",

    "Greasy skin",

    "Darkened thickened skin",

    "Itching"

  ],

  ruleOutFindings:[

    "Superficial pyoderma",

    "Dermatophytosis",

    "Demodicosis",

    "Sarcoptic mange",

    "Atopic dermatitis"

  ],

};