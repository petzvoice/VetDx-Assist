import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineCornealSequestrum: DiseaseCard = {
  id: "feline-corneal-sequestrum-cat",

  title: "Feline Corneal Sequestrum",

  description:
    "A degenerative corneal condition in cats characterized by deposition of brown to black pigmented material within the cornea, often associated with chronic irritation or feline herpesvirus infection.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Corneal Sequestrum",
    "Feline Corneal Necrosis",
    "Corneal Pigmentation",
    "Feline Brown Corneal Plaque",
  ],

  overview:
    "Corneal sequestrum is a unique feline ocular disorder involving degeneration and necrosis of corneal collagen with accumulation of brown-black pigmentation. It is commonly associated with chronic corneal irritation, feline herpesvirus-1 infection, corneal ulcers, tear film abnormalities, and eyelid disorders. Lesions vary from superficial pigmentation to deep corneal involvement requiring surgical management.",

  clinicalProblems:[

    "Corneal degeneration",
    "Chronic ocular irritation",
    "Ocular pain",
    "Corneal ulceration",
    "Vision impairment risk",
    "Corneal perforation risk"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess chronic eye disease, recurrent herpesvirus infection, trauma, previous ulcers, and duration of corneal changes."
    },

    {
      id:"ocular-examination",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate corneal lesion appearance, depth, pain, and surrounding ocular structures."
    },

    {
      id:"corneal-assessment",
      step:3,
      title:"Corneal Evaluation",
      description:
        "Perform fluorescein staining and assess ulceration or corneal instability."
    },

    {
      id:"severity",
      step:4,
      title:"Severity Assessment",
      description:
        "Determine whether medical therapy or surgical removal is required."
    },

    {
      id:"management",
      step:5,
      title:"Treatment and Follow-up",
      description:
        "Control underlying disease and monitor corneal healing."

    }

  ],

  diagnostics:[

    {
      id:"ocular-exam",
      name:"Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Identifies characteristic pigmented corneal lesion."
    },

    {
      id:"fluorescein",
      name:"Fluorescein Staining",
      priority:"Recommended",
      reason:
        "Detects associated corneal ulceration."
    },

    {
      id:"tear-test",
      name:"Schirmer Tear Test",
      priority:"Recommended",
      reason:
        "Evaluates tear film abnormalities contributing to disease."
    },

    {
      id:"cytology",
      name:"Corneal Cytology",
      priority:"Recommended",
      reason:
        "Assesses inflammatory or infectious involvement."

    }

  ],

  drugCategories:[

    {
      category:"Topical Antimicrobial Therapy",
      indication:"Secondary infection risk",
      reason:
        "Prevents bacterial complications."
    },

    {
      category:"Pain Management",
      indication:"Ocular discomfort",
      reason:
        "Improves comfort."
    },

    {
      category:"Tear Film Support",
      indication:"Chronic ocular surface disease",
      reason:
        "Improves corneal surface health."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"oxytetracycline",
      priority:"Supportive",
      category:"Topical Medication"
    }

  ],

  stabilization:[

    "Assess lesion depth.",
    "Prevent rubbing and self-trauma.",
    "Evaluate for corneal ulceration.",
    "Control pain.",
    "Monitor progression of pigmentation."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Chronic eye irritation", weight:75 },

      { finding:"Previous feline herpesvirus infection", weight:70 },

      { finding:"History of corneal ulcer", weight:65 },

      { finding:"Chronic conjunctivitis", weight:60 }

    ],

    clinicalSigns:[

      { finding:"Brown-black corneal lesion", weight:95 },

      { finding:"Squinting", weight:75 },

      { finding:"Ocular pain", weight:70 },

      { finding:"Corneal opacity", weight:80 },

      { finding:"Tearing", weight:60 },

      { finding:"Red eye", weight:55 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 }

    ],

    imaging:[

      { finding:"No routine imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Characteristic dark corneal plaque", weight:95 },

      { finding:"Chronic corneal disease history", weight:80 },

      { finding:"Feline herpesvirus association", weight:70 },

      { finding:"Corneal degeneration", weight:85 }

    ],

    against:[

      { finding:"No corneal pigmentation", weight:-50 },

      { finding:"Normal corneal examination", weight:-60 },

      { finding:"Alternative corneal disease confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"lesion",
      parameter:"Corneal lesion size and depth",
      frequency:"Regular follow-up",
      reason:
        "Detects progression."
    },

    {
      id:"pain",
      parameter:"Ocular discomfort",
      frequency:"Regular assessment",
      reason:
        "Evaluates patient comfort."
    },

    {
      id:"healing",
      parameter:"Corneal healing",
      frequency:"During treatment",
      reason:
        "Ensures resolution after therapy."

    }

  ],

  precautions:[

    {
      id:"progression",
      title:"Risk of Deep Corneal Involvement",
      description:
        "Deep sequestra may weaken the cornea and increase risk of perforation."
    },

    {
      id:"recurrence",
      title:"Recurrence Possible",
      description:
        "Underlying causes such as herpesvirus or chronic irritation should be managed."

    }

  ],

  prognosis:
    "Prognosis varies with lesion depth and severity. Superficial lesions may improve with medical management, while deeper lesions may require surgical intervention.",

  strengtheningEvidence:[

    "Brown-black corneal plaque",

    "Chronic corneal disease",

    "Feline herpesvirus history",

    "Corneal pigmentation"

  ],

  weakeningEvidence:[

    "No corneal lesion",

    "Normal ocular examination",

    "Alternative corneal disorder confirmed"

  ],

  classicFindings:[

    "Dark corneal spot",

    "Chronic eye irritation",

    "Squinting",

    "Corneal opacity"

  ],

  ruleOutFindings:[

    "Corneal ulcer",

    "Corneal foreign body",

    "Feline herpesvirus keratitis",

    "Corneal dystrophy",

    "Ocular neoplasia"

  ],

};