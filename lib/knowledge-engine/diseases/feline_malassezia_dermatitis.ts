import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineMalasseziaDermatitis: DiseaseCard = {
  id: "feline-malassezia-dermatitis-cat",

  title: "Feline Malassezia Dermatitis (Yeast Skin Infection)",

  description:
    "A fungal skin disorder in cats caused by overgrowth of Malassezia yeast, resulting in itching, redness, greasy skin, scaling, and ear or skin inflammation.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Malassezia Dermatitis",
    "Feline Yeast Dermatitis",
    "Malassezia Overgrowth",
    "Yeast Skin Infection",
  ],

  overview:
    "Malassezia species are normally present on feline skin in small numbers but may multiply excessively when skin conditions change. Overgrowth is usually secondary to underlying diseases such as allergies, skin barrier disorders, endocrine abnormalities, or immunosuppression. Clinical signs may include pruritus, erythema, greasy skin, odor, scaling, and recurrent dermatitis.",

  clinicalProblems:[

    "Yeast overgrowth",
    "Skin inflammation",
    "Pruritus",
    "Seborrhea-like changes",
    "Secondary dermatitis",
    "Underlying allergic or immune disease"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess itching, recurrent skin disease, allergies, previous treatments, and concurrent medical problems."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate redness, scaling, greasy skin, odor, alopecia, and lesion distribution."
    },

    {
      id:"cytology",
      step:3,
      title:"Skin Cytology Evaluation",
      description:
        "Identify yeast organisms and inflammatory changes."
    },

    {
      id:"underlying-cause",
      step:4,
      title:"Underlying Disease Investigation",
      description:
        "Search for allergic, parasitic, or immune-related causes."

    },

    {
      id:"management",
      step:5,
      title:"Treatment and Prevention",
      description:
        "Control yeast overgrowth and manage primary disease."

    }

  ],

  diagnostics:[

    {
      id:"skin-cytology",
      name:"Skin Cytology",
      priority:"Essential",
      reason:
        "Identifies Malassezia yeast organisms on affected skin."
    },

    {
      id:"ear-cytology",
      name:"Ear Cytology",
      priority:"Recommended",
      reason:
        "Evaluates yeast involvement in otitis cases."
    },

    {
      id:"culture",
      name:"Fungal Culture",
      priority:"Recommended",
      reason:
        "May assist in fungal identification."

    }

  ],

  drugCategories:[

    {
      category:"Antifungal Therapy",
      indication:"Yeast overgrowth",
      reason:
        "Reduces Malassezia population."
    },

    {
      category:"Topical Therapy",
      indication:"Localized skin disease",
      reason:
        "Directly reduces yeast on skin."
    },

    {
      category:"Underlying Disease Management",
      indication:"Primary cause control",
      reason:
        "Prevents recurrence."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"ketoconazole",
      priority:"Supportive",
      category:"Antifungal"
    },

    {
      drugId:"chlorhexidine-miconazole",
      priority:"Supportive",
      category:"Topical Medication"

    }

  ],

  stabilization:[

    "Reduce skin inflammation.",
    "Control yeast overgrowth.",
    "Identify underlying allergic or systemic disease.",
    "Maintain skin hygiene.",
    "Monitor recurrence."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Recurrent dermatitis", weight:70 },

      { finding:"Underlying allergy", weight:65 },

      { finding:"Previous skin infections", weight:55 },

      { finding:"Immunosuppressive condition", weight:60 }

    ],

    clinicalSigns:[

      { finding:"Pruritus", weight:75 },

      { finding:"Greasy skin", weight:70 },

      { finding:"Skin redness", weight:65 },

      { finding:"Scaling", weight:60 },

      { finding:"Musty skin odor", weight:75 },

      { finding:"Ear involvement", weight:60 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Changes due to underlying disease", weight:35 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Yeast identified on cytology", weight:95 },

      { finding:"Compatible dermatitis", weight:75 },

      { finding:"Response to antifungal therapy", weight:75 },

      { finding:"Underlying allergic disease", weight:60 }

    ],

    against:[

      { finding:"Negative cytology", weight:-50 },

      { finding:"No skin lesions", weight:-40 },

      { finding:"Alternative dermatological diagnosis", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"cytology",
      parameter:"Yeast population",
      frequency:"During treatment",
      reason:
        "Confirms reduction of infection."
    },

    {
      id:"skin",
      parameter:"Skin condition",
      frequency:"Regular follow-up",
      reason:
        "Evaluates clinical improvement."
    },

    {
      id:"underlying",
      parameter:"Primary disease control",
      frequency:"Long-term",
      reason:
        "Prevents recurrence."

    }

  ],

  precautions:[

    {
      id:"secondary",
      title:"Usually Secondary Disease",
      description:
        "Malassezia overgrowth often indicates an underlying skin barrier problem, allergy, or immune disorder."
    },

    {
      id:"recurrence",
      title:"Recurrence Risk",
      description:
        "Repeated infections may occur if the primary cause is not identified and managed."

    }

  ],

  prognosis:
    "Prognosis is generally good with appropriate antifungal therapy and control of underlying disease. Recurrence may occur in cats with chronic allergic or immune conditions.",

  strengtheningEvidence:[

    "Yeast seen on cytology",

    "Greasy dermatitis",

    "Characteristic odor",

    "Response to antifungal treatment"

  ],

  weakeningEvidence:[

    "Negative cytology",

    "No skin inflammation",

    "Alternative skin disease confirmed"

  ],

  classicFindings:[

    "Yeast on cytology",

    "Greasy skin",

    "Pruritus",

    "Skin odor"

  ],

  ruleOutFindings:[

    "Dermatophytosis",

    "Bacterial pyoderma",

    "Flea allergy dermatitis",

    "Demodicosis",

    "Food allergy dermatitis"

  ],

};