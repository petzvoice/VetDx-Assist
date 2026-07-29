import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineInterdigitalFurunculosis: DiseaseCard = {
  id: "canine-interdigital-furunculosis-dog",

  title: "Canine Interdigital Furunculosis (Interdigital Cysts)",

  description:
    "A painful inflammatory condition affecting the spaces between canine toes, characterized by follicular rupture, inflammation, nodules, and secondary infection.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Interdigital Cysts",
    "Interdigital Furunculosis",
    "Pododermatitis",
    "Interdigital Pyoderma",
  ],

  overview:
    "Canine interdigital furunculosis is a chronic inflammatory disorder involving the interdigital skin. It develops due to follicular rupture, foreign material penetration, mechanical trauma, allergic disease, or conformational abnormalities. Lesions commonly appear as painful nodules, swelling, redness, and draining tracts between toes. Secondary bacterial infection is common.",

  clinicalProblems:[

    "Painful paw lesions",
    "Interdigital inflammation",
    "Deep bacterial infection",
    "Lameness",
    "Chronic recurrence",
    "Paw licking"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess duration of paw lesions, licking behavior, environmental exposure, allergies, and previous treatments."
    },

    {
      id:"paw-examination",
      step:2,
      title:"Paw Examination",
      description:
        "Evaluate interdigital swelling, nodules, discharge, and pain."
    },

    {
      id:"cytology",
      step:3,
      title:"Lesion Cytology",
      description:
        "Identify bacterial infection and inflammatory cells."
    },

    {
      id:"underlying-cause",
      step:4,
      title:"Underlying Cause Assessment",
      description:
        "Investigate allergies, parasites, foreign bodies, and conformational factors."
    },

    {
      id:"treatment",
      step:5,
      title:"Management",
      description:
        "Control infection, reduce inflammation, and prevent recurrence."

    }

  ],

  diagnostics:[

    {
      id:"cytology",
      name:"Lesion Cytology",
      priority:"Essential",
      reason:
        "Detects bacteria and inflammatory changes."
    },

    {
      id:"skin-scraping",
      name:"Skin Scraping",
      priority:"Recommended",
      reason:
        "Rules out parasitic causes such as Demodex."
    },

    {
      id:"culture",
      name:"Bacterial Culture and Sensitivity",
      priority:"Recommended",
      reason:
        "Guides therapy in recurrent or deep infections."
    },

    {
      id:"foreign-body-evaluation",
      name:"Foreign Body Evaluation",
      priority:"Conditional",
      reason:
        "Identifies plant material or other causes of chronic lesions."

    }

  ],

  drugCategories:[

    {
      category:"Antimicrobial Therapy",
      indication:"Secondary bacterial infection",
      reason:
        "Controls infection within affected tissue."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Inflammation and pain",
      reason:
        "Reduces discomfort and swelling."
    },

    {
      category:"Topical Therapy",
      indication:"Local skin management",
      reason:
        "Supports healing and reduces contamination."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"cephalexin",
      priority:"Supportive",
      category:"Antibiotic"
    },

    {
      drugId:"amoxicillin-clavulanate",
      priority:"Supportive",
      category:"Antibiotic"

    }

  ],

  stabilization:[

    "Control bacterial infection.",
    "Prevent excessive licking.",
    "Reduce paw inflammation.",
    "Identify allergic or mechanical causes.",
    "Maintain paw hygiene."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Chronic paw licking", weight:60 },

      { finding:"Recurrent interdigital lesions", weight:70 },

      { finding:"Allergy history", weight:45 },

      { finding:"Exposure to rough surfaces", weight:35 },

      { finding:"Previous skin infections", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Interdigital swelling", weight:75 },

      { finding:"Painful nodules between toes", weight:85 },

      { finding:"Discharge from lesions", weight:70 },

      { finding:"Lameness", weight:55 },

      { finding:"Red inflamed paws", weight:60 },

      { finding:"Excessive licking", weight:65 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Inflammatory changes in severe cases", weight:20 }

    ],

    imaging:[

      { finding:"No routine imaging findings", weight:5 },

      { finding:"Radiography may help evaluate foreign bodies or deeper disease", weight:15 }

    ],

    supports:[

      { finding:"Typical interdigital nodules", weight:85 },

      { finding:"Bacteria on cytology", weight:75 },

      { finding:"Response to appropriate therapy", weight:60 },

      { finding:"Chronic paw involvement", weight:70 }

    ],

    against:[

      { finding:"No paw lesions", weight:-60 },

      { finding:"Primary systemic disease confirmed", weight:-30 },

      { finding:"No inflammation or pain", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"lesion",
      parameter:"Interdigital swelling and nodules",
      frequency:"Follow-up visits",
      reason:
        "Evaluates healing."
    },

    {
      id:"pain",
      parameter:"Paw discomfort and lameness",
      frequency:"Regular assessment",
      reason:
        "Monitors improvement."
    },

    {
      id:"recurrence",
      parameter:"Repeat interdigital lesions",
      frequency:"Long-term monitoring",
      reason:
        "Detects unresolved causes."

    }

  ],

  precautions:[

    {
      id:"underlying",
      title:"Underlying Cause Investigation",
      description:
        "Recurrence is common if allergies, foreign bodies, or conformational problems are not addressed."
    },

    {
      id:"licking",
      title:"Prevent Self-Trauma",
      description:
        "Excessive licking delays healing and increases infection risk."

    }

  ],

  prognosis:
    "Prognosis is generally good with appropriate management. Chronic or recurrent cases require investigation of underlying causes.",

  strengtheningEvidence:[

    "Painful interdigital nodules",

    "Bacterial infection evidence",

    "Paw licking",

    "Response to treatment"

  ],

  weakeningEvidence:[

    "No interdigital lesions",

    "No inflammation",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Interdigital swelling",

    "Painful nodules",

    "Paw licking",

    "Lameness"

  ],

  ruleOutFindings:[

    "Demodicosis",

    "Atopic dermatitis",

    "Foreign body reaction",

    "Neoplasia",

    "Deep fungal infection"

  ],

};