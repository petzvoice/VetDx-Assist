import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineEntropion: DiseaseCard = {
  id: "canine-entropion-dog",

  title: "Canine Entropion",

  description:
    "An eyelid conformational disorder where the eyelid margin rolls inward, causing eyelashes and hair to contact the cornea and conjunctiva.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Inward Rolling Eyelid",
    "Eyelid Inversion",
    "Conformational Eyelid Abnormality",
  ],

  overview:
    "Canine entropion occurs when the eyelid margin turns inward toward the ocular surface. This causes constant irritation from eyelashes and periocular hair rubbing against the cornea, leading to excessive tearing, conjunctivitis, corneal ulceration, pigmentation, and pain. The condition is commonly associated with inherited facial conformation but may also occur secondary to ocular pain or scarring.",

  clinicalProblems: [

    "Eyelid malposition",
    "Corneal irritation",
    "Chronic ocular pain",
    "Corneal ulcer risk",
    "Vision impairment"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age of onset, breed predisposition, chronic tearing, discomfort, and previous ocular disease."
    },

    {
      id:"eyelid-exam",
      step:2,
      title:"Eyelid Examination",
      description:
        "Evaluate eyelid position and contact between eyelid hair and cornea."
    },

    {
      id:"corneal-assessment",
      step:3,
      title:"Corneal Evaluation",
      description:
        "Check for ulceration, pigmentation, or secondary corneal damage."
    },

    {
      id:"management",
      step:4,
      title:"Corrective Management",
      description:
        "Restore normal eyelid position and prevent ocular injury."
    }

  ],

  diagnostics: [

    {
      id:"ophthalmic-exam",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Confirms eyelid abnormality and evaluates ocular damage."
    },

    {
      id:"fluorescein-test",
      name:"Fluorescein Staining",
      priority:"Recommended",
      reason:
        "Detects corneal ulcers caused by eyelid irritation."
    },

    {
      id:"tear-test",
      name:"Schirmer Tear Test",
      priority:"Recommended",
      reason:
        "Evaluates concurrent tear abnormalities."

    }

  ],

  drugCategories:[

    {
      category:"Ocular Lubrication",
      indication:"Reduce corneal friction",
      reason:
        "Protects ocular surface before correction."
    },

    {
      category:"Surgical Correction",
      indication:"Permanent eyelid correction",
      reason:
        "Restores normal eyelid position."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"artificial-tears",
      priority:"Supportive",
      category:"Ocular Lubricant"
    }

  ],

  stabilization:[

    "Protect cornea from further trauma.",
    "Treat existing corneal ulceration if present.",
    "Prevent rubbing of the eye.",
    "Plan corrective surgery when required.",
    "Monitor corneal health."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Young dog", weight:40 },

      { finding:"Breed predisposition", weight:55 },

      { finding:"Chronic eye irritation", weight:45 },

      { finding:"Previous corneal disease", weight:30 }

    ],

    clinicalSigns:[

      { finding:"Inward rolling eyelid margin", weight:85 },

      { finding:"Excessive tearing", weight:50 },

      { finding:"Squinting", weight:45 },

      { finding:"Eye rubbing", weight:40 },

      { finding:"Corneal redness", weight:35 },

      { finding:"Corneal ulceration", weight:45 }

    ],

    biochemistry:[

      { finding:"Usually no systemic abnormalities", weight:5 }

    ],

    imaging:[

      { finding:"Abnormal eyelid position on examination", weight:80 },

      { finding:"Corneal changes secondary to irritation", weight:40 }

    ],

    supports:[

      { finding:"Inward eyelid rolling", weight:85 },

      { finding:"Breed-associated facial conformation", weight:55 },

      { finding:"Chronic corneal irritation", weight:50 },

      { finding:"Positive fluorescein staining", weight:35 }

    ],

    against:[

      { finding:"Normal eyelid position", weight:-60 },

      { finding:"No ocular irritation", weight:-35 },

      { finding:"Primary intraocular disease", weight:-25 }

    ],

  },

  monitoring:[

    {
      id:"cornea",
      parameter:"Corneal condition",
      frequency:"Regular ophthalmic examination",
      reason:
        "Detects ulcers and chronic damage."
    },

    {
      id:"eyelid",
      parameter:"Eyelid position",
      frequency:"Follow-up",
      reason:
        "Ensures correction effectiveness."
    },

    {
      id:"comfort",
      parameter:"Ocular discomfort",
      frequency:"Daily",
      reason:
        "Evaluates improvement."

    }

  ],

  precautions:[

    {
      id:"corneal-damage",
      title:"Corneal Injury Risk",
      description:
        "Persistent eyelid contact can cause painful corneal ulcers and scarring."
    },

    {
      id:"breeding",
      title:"Inherited Conformation",
      description:
        "Breeding considerations are important in dogs with hereditary eyelid abnormalities."
    }

  ],

  prognosis:
    "Prognosis is excellent when corrected early. Untreated cases may develop chronic corneal damage and vision problems.",

  strengtheningEvidence:[

    "Inward eyelid rolling",

    "Breed predisposition",

    "Chronic tearing",

    "Corneal irritation",

    "Fluorescein-positive ulcer"

  ],

  weakeningEvidence:[

    "Normal eyelid position",

    "No ocular discomfort",

    "Primary corneal disease without eyelid abnormality"

  ],

  classicFindings:[

    "Rolled-in eyelid",

    "Tearing",

    "Squinting",

    "Corneal irritation"

  ],

  ruleOutFindings:[

    "Ectropion",

    "Conjunctivitis",

    "Corneal ulcer",

    "Foreign body",

    "Keratoconjunctivitis sicca"

  ],

};