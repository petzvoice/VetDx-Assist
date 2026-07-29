import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineHerpesvirusKeratitis: DiseaseCard = {
  id: "feline-herpesvirus-keratitis-cat",

  title: "Feline Herpesvirus-1 Associated Keratitis (FHV-1 Ocular Disease)",

  description:
    "An ocular disease caused by feline herpesvirus-1 infection resulting in conjunctivitis, corneal inflammation, ulceration, and chronic eye complications.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Viral Rhinotracheitis Ocular Disease",
    "FHV-1 Keratitis",
    "Feline Herpesvirus Keratoconjunctivitis",
    "Feline Herpetic Keratitis",
  ],

  overview:
    "Feline herpesvirus-1 is a major cause of infectious ocular disease in cats. After initial infection, the virus may remain latent in nerve tissues and reactivate during stress or illness. Ocular manifestations include conjunctivitis, corneal ulcers, dendritic lesions, chronic keratitis, and in severe cases vision-threatening corneal damage.",

  clinicalProblems:[

    "Viral conjunctivitis",
    "Corneal inflammation",
    "Corneal ulceration",
    "Chronic ocular disease",
    "Pain and discomfort",
    "Vision impairment risk"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess previous respiratory disease, vaccination status, stress events, recurrence, and multi-cat exposure."
    },

    {
      id:"ocular-examination",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate conjunctiva, cornea, discharge, ulceration, and ocular pain."
    },

    {
      id:"corneal-testing",
      step:3,
      title:"Corneal Assessment",
      description:
        "Perform fluorescein staining to identify corneal epithelial damage."
    },

    {
      id:"viral-testing",
      step:4,
      title:"Infectious Disease Testing",
      description:
        "Consider molecular testing when diagnosis is uncertain."

    },

    {
      id:"management",
      step:5,
      title:"Treatment and Long-term Control",
      description:
        "Manage active infection and reduce recurrence triggers."

    }

  ],

  diagnostics:[

    {
      id:"ocular-exam",
      name:"Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Evaluates conjunctivitis, keratitis, and corneal damage."
    },

    {
      id:"fluorescein",
      name:"Fluorescein Staining",
      priority:"Essential",
      reason:
        "Detects corneal ulceration."
    },

    {
      id:"pcr",
      name:"PCR Testing",
      priority:"Recommended",
      reason:
        "Detects feline herpesvirus DNA."
    },

    {
      id:"cytology",
      name:"Conjunctival Cytology",
      priority:"Recommended",
      reason:
        "Evaluates inflammatory changes."

    }

  ],

  drugCategories:[

    {
      category:"Antiviral Therapy",
      indication:"Active herpesvirus infection",
      reason:
        "Reduces viral replication."
    },

    {
      category:"Topical Ocular Therapy",
      indication:"Secondary bacterial infection",
      reason:
        "Controls bacterial complications."
    },

    {
      category:"Supportive Eye Care",
      indication:"Chronic ocular irritation",
      reason:
        "Maintains ocular surface health."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"famciclovir",
      priority:"Supportive",
      category:"Antiviral"
    },

    {
      drugId:"oxytetracycline",
      priority:"Supportive",
      category:"Topical Medication"

    }

  ],

  stabilization:[

    "Assess for corneal ulceration.",
    "Control ocular pain.",
    "Prevent self-trauma.",
    "Reduce environmental stress.",
    "Monitor recurrent episodes."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Previous upper respiratory infection", weight:75 },

      { finding:"Multi-cat exposure", weight:65 },

      { finding:"Stress event", weight:60 },

      { finding:"Incomplete vaccination", weight:55 }

    ],

    clinicalSigns:[

      { finding:"Conjunctivitis", weight:85 },

      { finding:"Ocular discharge", weight:80 },

      { finding:"Corneal ulcer", weight:85 },

      { finding:"Squinting", weight:75 },

      { finding:"Chronic recurrent eye disease", weight:80 },

      { finding:"Sneezing or nasal discharge", weight:60 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Changes due to secondary infection", weight:25 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Typical recurrent ocular disease", weight:85 },

      { finding:"Positive PCR detection", weight:90 },

      { finding:"Corneal ulceration", weight:80 },

      { finding:"Response to antiviral therapy", weight:75 }

    ],

    against:[

      { finding:"No ocular inflammation", weight:-50 },

      { finding:"Negative evaluation with another confirmed cause", weight:-50 },

      { finding:"Non-compatible ocular lesion", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"cornea",
      parameter:"Corneal healing",
      frequency:"Frequent monitoring",
      reason:
        "Prevents progression of corneal damage."
    },

    {
      id:"recurrence",
      parameter:"Frequency of flare-ups",
      frequency:"Long-term",
      reason:
        "Evaluates chronic disease control."
    },

    {
      id:"comfort",
      parameter:"Ocular comfort and discharge",
      frequency:"Regular assessment",
      reason:
        "Measures treatment response."

    }

  ],

  precautions:[

    {
      id:"carrier",
      title:"Latent Infection",
      description:
        "Feline herpesvirus remains latent and may reactivate during stress or illness."
    },

    {
      id:"transmission",
      title:"Contagious Disease",
      description:
        "Infected cats can transmit virus through ocular and respiratory secretions."

    }

  ],

  prognosis:
    "Prognosis is generally good for uncomplicated cases, but recurrent episodes and chronic corneal disease may occur in some cats.",

  strengtheningEvidence:[

    "Recurrent conjunctivitis",

    "Corneal ulcers",

    "Positive FHV-1 testing",

    "History of respiratory disease"

  ],

  weakeningEvidence:[

    "No ocular inflammation",

    "Negative infectious evaluation",

    "Alternative ocular disease confirmed"

  ],

  classicFindings:[

    "Conjunctivitis",

    "Corneal ulcer",

    "Ocular discharge",

    "Recurrence after stress"

  ],

  ruleOutFindings:[

    "Chlamydia felis conjunctivitis",

    "Mycoplasma conjunctivitis",

    "Corneal foreign body",

    "Uveitis",

    "Non-infectious keratitis"

  ],

};