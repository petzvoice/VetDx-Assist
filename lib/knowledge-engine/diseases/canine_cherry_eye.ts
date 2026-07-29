import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineCherryEye: DiseaseCard = {
  id: "canine-cherry-eye-dog",

  title: "Canine Cherry Eye (Third Eyelid Gland Prolapse)",

  description:
    "A condition where the gland of the third eyelid protrudes from its normal position, appearing as a red mass at the inner corner of the eye.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Third Eyelid Gland Prolapse",
    "Nictitans Gland Prolapse",
    "Prolapsed Third Ey eyelid Gland",
  ],

  overview:
    "Canine cherry eye occurs when the gland located within the third eyelid loses normal attachment and becomes visible at the medial canthus of the eye. The condition is common in young dogs and certain breeds with inherited weakness of supporting tissues. The exposed gland may become inflamed and interfere with normal tear production if untreated.",

  clinicalProblems: [

    "Third eyelid gland displacement",
    "Ocular irritation",
    "Conjunctival inflammation",
    "Reduced tear production risk",
    "Chronic eye discomfort"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age of onset, breed predisposition, duration of mass appearance, and previous eye problems."
    },

    {
      id:"ophthalmic-exam",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Identify protruding third eyelid gland and evaluate surrounding ocular structures."
    },

    {
      id:"tear-assessment",
      step:3,
      title:"Tear Function Evaluation",
      description:
        "Assess tear production because the third eyelid gland contributes significantly to tear secretion."
    },

    {
      id:"management",
      step:4,
      title:"Treatment Planning",
      description:
        "Preserve and replace the gland whenever possible."
    }

  ],

  diagnostics: [

    {
      id:"ophthalmic-exam",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Confirms gland prolapse and evaluates associated ocular disease."
    },

    {
      id:"schirmer-tear-test",
      name:"Schirmer Tear Test",
      priority:"Recommended",
      reason:
        "Evaluates tear production and risk of dry eye."
    },

    {
      id:"ocular-pressure",
      name:"Intraocular Pressure Measurement",
      priority:"Recommended",
      reason:
        "Screens for concurrent glaucoma."

    }

  ],

  drugCategories:[

    {
      category:"Anti-inflammatory Therapy",
      indication:"Gland inflammation",
      reason:
        "Reduces irritation and inflammation."
    },

    {
      category:"Surgical Correction",
      indication:"Persistent gland prolapse",
      reason:
        "Repositions the gland and preserves tear function."
    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone-acetate",
      priority:"Supportive",
      category:"Corticosteroid"
    }

  ],

  stabilization:[

    "Prevent rubbing or self-trauma.",
    "Control inflammation if present.",
    "Evaluate tear production.",
    "Preserve the third eyelid gland.",
    "Consider surgical replacement if persistent."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Young dog", weight:40 },

      { finding:"Breed predisposition", weight:45 },

      { finding:"Sudden appearance of red ocular mass", weight:60 },

      { finding:"Previous eye irritation", weight:30 }

    ],

    clinicalSigns:[

      { finding:"Red mass at inner corner of eye", weight:80 },

      { finding:"Third eyelid protrusion", weight:75 },

      { finding:"Eye irritation", weight:35 },

      { finding:"Excessive tearing", weight:30 },

      { finding:"Conjunctival redness", weight:40 }

    ],

    biochemistry:[

      { finding:"Usually no systemic abnormalities", weight:5 }

    ],

    imaging:[

      { finding:"Visible prolapsed gland on examination", weight:80 }

    ],

    supports:[

      { finding:"Classic cherry-red mass appearance", weight:85 },

      { finding:"Young predisposed dog", weight:45 },

      { finding:"Normal intraocular structures", weight:30 },

      { finding:"Reduced tear production risk", weight:25 }

    ],

    against:[

      { finding:"No third eyelid abnormality", weight:-60 },

      { finding:"Intraocular disease as primary finding", weight:-30 },

      { finding:"Mass unrelated to third eyelid", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"tear-production",
      parameter:"Tear production",
      frequency:"Regular follow-up",
      reason:
        "Detects development of dry eye."
    },

    {
      id:"gland-position",
      parameter:"Third eyelid gland position",
      frequency:"Follow-up",
      reason:
        "Monitors recurrence after treatment."
    },

    {
      id:"inflammation",
      parameter:"Ocular irritation",
      frequency:"Regular assessment",
      reason:
        "Evaluates comfort and inflammation."

    }

  ],

  precautions:[

    {
      id:"gland-preservation",
      title:"Preserve Third Eyelid Gland",
      description:
        "Removal of the gland increases the risk of keratoconjunctivitis sicca."
    },

    {
      id:"recurrence",
      title:"Recurrence Risk",
      description:
        "Some dogs may experience recurrence after surgical correction."
    }

  ],

  prognosis:
    "Prognosis is excellent when the gland is repositioned and tear function is preserved. Long-term monitoring is recommended to detect dry eye disease.",

  strengtheningEvidence:[

    "Visible red mass from third eyelid",

    "Young dog",

    "Breed predisposition",

    "Normal eye structures"

  ],

  weakeningEvidence:[

    "No third eyelid abnormality",

    "Alternative ocular mass identified",

    "Severe intraocular disease"

  ],

  classicFindings:[

    "Cherry-red mass at medial eye corner",

    "Young dog",

    "Third eyelid swelling",

    "Mild irritation"

  ],

  ruleOutFindings:[

    "Conjunctivitis",

    "Eyelid tumor",

    "Foreign body",

    "Prolapsed orbital tissue",

    "Third eyelid inflammation"

  ],

};