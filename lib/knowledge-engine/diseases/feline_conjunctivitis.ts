import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineConjunctivitis: DiseaseCard = {
  id: "feline-conjunctivitis-cat",

  title: "Feline Conjunctivitis",

  description:
    "Inflammation of the conjunctiva in cats causing redness, ocular discharge, swelling, discomfort, and irritation of the eye.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Conjunctivitis",
    "Pink Eye",
    "Conjunctival Inflammation",
    "Feline Ocular Surface Inflammation",
  ],

  overview:
    "Conjunctivitis is one of the most common ophthalmic disorders in cats. It may occur due to infectious agents such as feline herpesvirus-1, feline calicivirus, Chlamydia felis, and Mycoplasma species, or due to non-infectious causes including trauma, foreign bodies, allergies, and immune-mediated disease. Clinical signs range from mild redness to severe ocular discharge and discomfort.",

  clinicalProblems:[

    "Conjunctival inflammation",
    "Ocular discharge",
    "Eye discomfort",
    "Corneal complications",
    "Infectious eye disease",
    "Vision-threatening complications"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess onset, duration, discharge type, previous eye disease, vaccination status, trauma, and exposure to other cats."
    },

    {
      id:"ocular-examination",
      step:2,
      title:"Complete Eye Examination",
      description:
        "Evaluate conjunctival redness, swelling, discharge, eyelids, cornea, and pupil response."
    },

    {
      id:"diagnostics",
      step:3,
      title:"Ocular Diagnostic Testing",
      description:
        "Perform tests to identify corneal involvement and infectious causes."
    },

    {
      id:"cause-identification",
      step:4,
      title:"Determine Underlying Cause",
      description:
        "Differentiate infectious, traumatic, allergic, and immune-mediated causes."
    },

    {
      id:"management",
      step:5,
      title:"Treatment and Monitoring",
      description:
        "Treat primary cause and prevent progression to corneal disease."

    }

  ],

  diagnostics:[

    {
      id:"ocular-exam",
      name:"Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Assesses conjunctiva, cornea, anterior chamber, and ocular structures."
    },

    {
      id:"fluorescein-test",
      name:"Fluorescein Staining",
      priority:"Essential",
      reason:
        "Detects corneal ulcers or epithelial defects."
    },

    {
      id:"cytology",
      name:"Conjunctival Cytology",
      priority:"Recommended",
      reason:
        "Evaluates inflammatory cells and infectious organisms."
    },

    {
      id:"pcr",
      name:"PCR Testing",
      priority:"Recommended",
      reason:
        "Detects viral and bacterial infectious agents."

    }

  ],

  drugCategories:[

    {
      category:"Topical Antimicrobial Therapy",
      indication:"Bacterial or secondary infection",
      reason:
        "Controls bacterial involvement."
    },

    {
      category:"Antiviral Therapy",
      indication:"Feline herpesvirus infection",
      reason:
        "Targets viral replication."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Inflammatory ocular disease",
      reason:
        "Reduces ocular inflammation when appropriate."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"oxytetracycline",
      priority:"Supportive",
      category:"Topical Medication"
    },

    {
      drugId:"famciclovir",
      priority:"Supportive",
      category:"Antiviral"

    }

  ],

  stabilization:[

    "Prevent rubbing and self-trauma.",
    "Clean ocular discharge regularly.",
    "Evaluate for corneal ulceration.",
    "Treat infectious causes appropriately.",
    "Monitor vision and ocular comfort."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Contact with cats showing respiratory disease", weight:65 },

      { finding:"Incomplete vaccination", weight:55 },

      { finding:"Previous eye disease", weight:50 },

      { finding:"Trauma exposure", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Conjunctival redness", weight:90 },

      { finding:"Ocular discharge", weight:85 },

      { finding:"Conjunctival swelling", weight:70 },

      { finding:"Squinting", weight:75 },

      { finding:"Third eyelid elevation", weight:60 },

      { finding:"Eye rubbing", weight:65 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Changes due to systemic infection", weight:35 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Conjunctival inflammation", weight:90 },

      { finding:"Ocular discharge", weight:85 },

      { finding:"Positive infectious testing", weight:85 },

      { finding:"Response to ocular therapy", weight:75 }

    ],

    against:[

      { finding:"Normal ocular examination", weight:-60 },

      { finding:"Primary corneal disease without conjunctivitis", weight:-30 },

      { finding:"Alternative ocular diagnosis confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"eye",
      parameter:"Ocular redness and discharge",
      frequency:"Regular follow-up",
      reason:
        "Evaluates response to treatment."
    },

    {
      id:"cornea",
      parameter:"Corneal health",
      frequency:"During active disease",
      reason:
        "Detects ulcer development."
    },

    {
      id:"vision",
      parameter:"Vision and ocular comfort",
      frequency:"Follow-up examination",
      reason:
        "Ensures preservation of vision."

    }

  ],

  precautions:[

    {
      id:"cornea",
      title:"Check for Corneal Ulcers",
      description:
        "Conjunctivitis may occur with or progress to corneal disease requiring urgent treatment."
    },

    {
      id:"infectious",
      title:"Infectious Causes",
      description:
        "Cats with infectious conjunctivitis may transmit disease to other cats."

    }

  ],

  prognosis:
    "Prognosis is usually good when the underlying cause is identified and treated early. Severe or untreated cases may develop corneal complications.",

  strengtheningEvidence:[

    "Conjunctival redness",

    "Ocular discharge",

    "Positive infectious testing",

    "Response to treatment"

  ],

  weakeningEvidence:[

    "Normal ocular examination",

    "No inflammation",

    "Alternative eye disease confirmed"

  ],

  classicFindings:[

    "Red eye",

    "Discharge",

    "Squinting",

    "Conjunctival swelling"

  ],

  ruleOutFindings:[

    "Corneal ulcer",

    "Uveitis",

    "Glaucoma",

    "Foreign body",

    "Eyelid disorders"

  ],

};