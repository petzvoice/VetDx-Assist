import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineConjunctivitis: DiseaseCard = {
  id: "canine-conjunctivitis-dog",

  title: "Canine Conjunctivitis",

  description:
    "Inflammation of the conjunctiva caused by infectious, allergic, traumatic, immune-mediated, or irritant factors resulting in ocular redness and discharge.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Pink Eye",
    "Conjunctival Inflammation",
    "Ocular Surface Inflammation",
  ],

  overview:
    "Canine conjunctivitis is inflammation of the conjunctival tissues surrounding the eye. It may occur as a primary ocular condition or secondary to diseases such as keratoconjunctivitis sicca, corneal ulcer, foreign body irritation, allergies, or systemic infections. Clinical severity ranges from mild redness and discharge to severe inflammation with discomfort and corneal involvement.",

  clinicalProblems: [

    "Conjunctival inflammation",
    "Ocular discharge",
    "Eye irritation",
    "Redness",
    "Secondary corneal disease risk",
    "Ocular discomfort"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess onset, discharge characteristics, exposure to irritants, allergies, trauma, and previous eye disease."
    },

    {
      id:"ophthalmic-exam",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate conjunctival appearance, discharge, cornea, and associated ocular abnormalities."
    },

    {
      id:"cause-identification",
      step:3,
      title:"Identify Underlying Cause",
      description:
        "Differentiate infectious, allergic, traumatic, and secondary causes."
    },

    {
      id:"treatment",
      step:4,
      title:"Ocular Management",
      description:
        "Treat inflammation and address the underlying cause."
    }

  ],

  diagnostics: [

    {
      id:"ophthalmic-exam",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Identifies conjunctival inflammation and associated eye disease."
    },

    {
      id:"fluorescein-test",
      name:"Fluorescein Staining",
      priority:"Recommended",
      reason:
        "Rules out concurrent corneal ulceration."
    },

    {
      id:"tear-test",
      name:"Schirmer Tear Test",
      priority:"Recommended",
      reason:
        "Evaluates tear production and detects dry eye disease."
    },

    {
      id:"cytology",
      name:"Conjunctival Cytology",
      priority:"Conditional",
      reason:
        "Assesses inflammatory cells and infectious causes."
    }

  ],

  drugCategories:[

    {
      category:"Topical Antimicrobial Therapy",
      indication:"Bacterial conjunctivitis",
      reason:
        "Controls bacterial ocular infection."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Inflammatory conjunctivitis",
      reason:
        "Reduces conjunctival inflammation."
    },

    {
      category:"Lubricant Therapy",
      indication:"Ocular surface irritation",
      reason:
        "Improves ocular comfort."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"chloramphenicol",
      priority:"Supportive",
      category:"Antibiotic"
    }

  ],

  stabilization:[

    "Remove ocular irritants or foreign material.",
    "Prevent self-trauma using an Elizabethan collar if needed.",
    "Evaluate for corneal involvement.",
    "Treat underlying ocular disease.",
    "Maintain ocular hygiene."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Exposure to dust or irritants", weight:40 },

      { finding:"Allergy history", weight:40 },

      { finding:"Recent trauma", weight:35 },

      { finding:"Contact with infected animals", weight:30 },

      { finding:"Previous ocular disease", weight:35 }

    ],

    clinicalSigns:[

      { finding:"Conjunctival redness", weight:60 },

      { finding:"Eye discharge", weight:55 },

      { finding:"Squinting", weight:40 },

      { finding:"Eyelid swelling", weight:35 },

      { finding:"Excessive tearing", weight:45 },

      { finding:"Eye rubbing", weight:40 }

    ],

    biochemistry:[

      { finding:"Usually no specific blood abnormalities", weight:5 }

    ],

    imaging:[

      { finding:"Usually no specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Conjunctival inflammation", weight:70 },

      { finding:"Ocular discharge", weight:55 },

      { finding:"Red eye without intraocular disease", weight:50 },

      { finding:"Response to topical therapy", weight:35 }

    ],

    against:[

      { finding:"Normal conjunctiva", weight:-60 },

      { finding:"Deep ocular pain with pressure changes", weight:-30 },

      { finding:"Corneal ulcer as primary diagnosis", weight:-25 }

    ],

  },

  monitoring:[

    {
      id:"discharge",
      parameter:"Ocular discharge",
      frequency:"Daily",
      reason:
        "Evaluates improvement of inflammation."
    },

    {
      id:"redness",
      parameter:"Conjunctival redness",
      frequency:"Regular follow-up",
      reason:
        "Monitors resolution."
    },

    {
      id:"cornea",
      parameter:"Corneal health",
      frequency:"Follow-up",
      reason:
        "Detects secondary corneal complications."

    }

  ],

  precautions:[

    {
      id:"underlying-cause",
      title:"Search for Primary Disease",
      description:
        "Persistent conjunctivitis may indicate dry eye, allergy, corneal disease, or systemic disease."
    },

    {
      id:"steroid-use",
      title:"Confirm Corneal Integrity Before Steroids",
      description:
        "Topical corticosteroids should not be used when corneal ulceration is present."
    }

  ],

  prognosis:
    "Prognosis is generally excellent when the underlying cause is identified and treated. Chronic or recurrent cases require evaluation for underlying ocular disease.",

  strengtheningEvidence:[

    "Conjunctival redness",

    "Ocular discharge",

    "Eye irritation",

    "Normal intraocular structures",

    "Response to topical treatment"

  ],

  weakeningEvidence:[

    "Normal conjunctiva",

    "Severe intraocular abnormalities",

    "Alternative ocular disease confirmed"

  ],

  classicFindings:[

    "Red eye",

    "Discharge",

    "Mild discomfort",

    "Conjunctival swelling"

  ],

  ruleOutFindings:[

    "Corneal ulcer",

    "Keratoconjunctivitis sicca",

    "Uveitis",

    "Glaucoma",

    "Foreign body"

  ],

};