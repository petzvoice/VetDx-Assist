import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePapilloma: DiseaseCard = {
  id: "canine-papilloma-warts-dog",

  title: "Canine Papilloma (Viral Warts)",

  description:
    "A benign contagious skin or oral growth caused by canine papillomavirus infection, commonly affecting young dogs and often resolving spontaneously.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Canine Viral Papillomatosis",
    "Dog Warts",
    "Oral Papilloma",
    "Cutaneous Papilloma",
    "Canine Papillomavirus Infection",
  ],

  overview:
    "Canine papilloma is a benign proliferative disease caused by canine papillomavirus. It commonly affects puppies and young dogs due to an immature immune response. Lesions may occur in the oral cavity, lips, skin, eyelids, or other mucocutaneous areas. Oral papillomas often appear as multiple cauliflower-like growths and usually regress as immunity develops.",

  clinicalProblems:[

    "Wart formation",
    "Oral discomfort",
    "Difficulty eating",
    "Secondary infection",
    "Differentiation from malignant growths"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age, contact with other dogs, development of growths, and progression."
    },

    {
      id:"physical-exam",
      step:2,
      title:"Lesion Examination",
      description:
        "Evaluate number, location, appearance, and progression of wart-like lesions."
    },

    {
      id:"diagnosis",
      step:3,
      title:"Diagnostic Confirmation",
      description:
        "Confirm characteristic papilloma appearance or perform biopsy if uncertain."
    },

    {
      id:"management",
      step:4,
      title:"Management",
      description:
        "Monitor spontaneous regression and treat complications when required."
    }

  ],

  diagnostics:[

    {
      id:"physical-examination",
      name:"Physical Examination",
      priority:"Essential",
      reason:
        "Characteristic wart appearance often allows diagnosis."
    },

    {
      id:"cytology",
      name:"Cytology",
      priority:"Recommended",
      reason:
        "Evaluates cells when lesion appearance is uncertain."
    },

    {
      id:"histopathology",
      name:"Histopathology",
      priority:"Recommended",
      reason:
        "Rules out other skin tumors and confirms papilloma."

    }

  ],

  drugCategories:[

    {
      category:"Supportive Management",
      indication:"Uncomplicated papilloma",
      reason:
        "Most lesions resolve naturally."
    },

    {
      category:"Secondary Infection Management",
      indication:"Inflamed or infected lesions",
      reason:
        "Treats complications."

    }

  ],

  recommendedDrugs:[],

  stabilization:[

    "Prevent trauma to lesions.",
    "Maintain oral hygiene in oral papillomatosis.",
    "Monitor ability to eat and drink.",
    "Evaluate persistent or unusual lesions.",
    "Prevent contact with susceptible dogs during active infection."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Young dog or puppy", weight:55 },

      { finding:"Recent contact with other dogs", weight:45 },

      { finding:"Rapid development of multiple growths", weight:60 },

      { finding:"History of contagious exposure", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Cauliflower-like wart growths", weight:85 },

      { finding:"Multiple oral papillomas", weight:70 },

      { finding:"Skin wart lesions", weight:60 },

      { finding:"Difficulty chewing", weight:35 },

      { finding:"Bleeding or irritated lesions", weight:30 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 }

    ],

    imaging:[

      { finding:"Usually no imaging abnormalities", weight:5 }

    ],

    supports:[

      { finding:"Characteristic papilloma appearance", weight:85 },

      { finding:"Young dog", weight:50 },

      { finding:"Multiple wart-like lesions", weight:75 },

      { finding:"Spontaneous regression", weight:70 }

    ],

    against:[

      { finding:"Aggressive invasive growth", weight:-50 },

      { finding:"Malignant tumor confirmed", weight:-70 },

      { finding:"Older dog with solitary unusual mass", weight:-30 }

    ],

  },

  monitoring:[

    {
      id:"lesion",
      parameter:"Wart size and number",
      frequency:"Regular assessment",
      reason:
        "Tracks progression and regression."
    },

    {
      id:"oral-function",
      parameter:"Eating and oral comfort",
      frequency:"Daily",
      reason:
        "Detects complications from oral lesions."
    }

  ],

  precautions:[

    {
      id:"transmission",
      title:"Contagious Condition",
      description:
        "Canine papillomavirus can spread between dogs through direct contact."
    },

    {
      id:"persistent-lesions",
      title:"Persistent Growths",
      description:
        "Lesions that do not regress or appear abnormal should be re-evaluated."

    }

  ],

  prognosis:
    "Prognosis is excellent in most young dogs because papillomas commonly regress after development of immunity. Persistent lesions may require further evaluation or treatment.",

  strengtheningEvidence:[

    "Young dog",

    "Cauliflower-like wart lesions",

    "Multiple oral growths",

    "Spontaneous regression"

  ],

  weakeningEvidence:[

    "Rapid invasive growth",

    "Malignant tumor diagnosis",

    "No wart-like lesions"

  ],

  classicFindings:[

    "Cauliflower-like growth",

    "Young dog",

    "Oral wart clusters",

    "Self-limiting disease"

  ],

  ruleOutFindings:[

    "Squamous cell carcinoma",

    "Histiocytoma",

    "Mast cell tumor",

    "Skin infection",

    "Other benign skin masses"

  ],

};