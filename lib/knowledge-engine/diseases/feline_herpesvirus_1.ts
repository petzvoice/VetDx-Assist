import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineHerpesvirus1: DiseaseCard = {
  id: "feline-herpesvirus-1-cat",

  title: "Feline Herpesvirus-1 Infection (Feline Viral Rhinotracheitis)",

  description:
    "A contagious viral respiratory and ocular disease of cats caused by feline herpesvirus-1, characterized by upper respiratory signs, conjunctivitis, and lifelong viral latency.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Viral Rhinotracheitis",
    "FHV-1 Infection",
    "Feline Herpesvirus Infection",
    "Feline Upper Respiratory Disease",
  ],

  overview:
    "Feline herpesvirus-1 is a major cause of feline upper respiratory tract disease. The virus primarily affects the nasal passages, conjunctiva, and upper respiratory tissues. After initial infection, the virus establishes lifelong latency in nervous tissue and may reactivate during stress, illness, or immune suppression. Clinical severity is higher in kittens, crowded environments, and multi-cat households.",

  clinicalProblems:[

    "Upper respiratory infection",
    "Conjunctivitis",
    "Corneal disease",
    "Nasal inflammation",
    "Chronic viral shedding",
    "Recurrent respiratory episodes"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess vaccination status, exposure to other cats, stress factors, and previous respiratory episodes."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate nasal discharge, ocular disease, fever, and respiratory abnormalities."
    },

    {
      id:"ocular-assessment",
      step:3,
      title:"Ophthalmic Evaluation",
      description:
        "Assess conjunctivitis, corneal involvement, and ocular complications."
    },

    {
      id:"viral-testing",
      step:4,
      title:"Viral Detection",
      description:
        "Perform appropriate testing when confirmation is required."
    },

    {
      id:"management",
      step:5,
      title:"Supportive and Antiviral Management",
      description:
        "Control clinical signs, secondary infections, and reduce recurrence."

    }

  ],

  diagnostics:[

    {
      id:"clinical-diagnosis",
      name:"Clinical Diagnosis",
      priority:"Essential",
      reason:
        "Typical respiratory and ocular signs commonly support diagnosis."
    },

    {
      id:"pcr",
      name:"PCR Testing",
      priority:"Recommended",
      reason:
        "Detects feline herpesvirus genetic material."
    },

    {
      id:"ocular-examination",
      name:"Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Identifies conjunctivitis and corneal complications."
    },

    {
      id:"cytology",
      name:"Conjunctival Cytology",
      priority:"Conditional",
      reason:
        "Helps evaluate ocular inflammation and differential diagnoses."

    }

  ],

  drugCategories:[

    {
      category:"Supportive Therapy",
      indication:"Respiratory and ocular disease",
      reason:
        "Improves comfort and recovery."
    },

    {
      category:"Antiviral Therapy",
      indication:"Severe viral disease",
      reason:
        "May reduce viral replication."
    },

    {
      category:"Secondary Infection Management",
      indication:"Bacterial complications",
      reason:
        "Controls secondary bacterial infections."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"famciclovir",
      priority:"Supportive",
      category:"Antiviral"
    },

    {
      drugId:"doxycycline",
      priority:"Supportive",
      category:"Antibiotic"

    }

  ],

  stabilization:[

    "Maintain hydration and nutrition.",
    "Control ocular inflammation.",
    "Manage nasal congestion.",
    "Treat secondary bacterial infections when present.",
    "Reduce stress to limit viral reactivation."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Multi-cat household exposure", weight:70 },

      { finding:"Incomplete vaccination", weight:65 },

      { finding:"Stress event", weight:45 },

      { finding:"Young kitten", weight:60 },

      { finding:"Previous respiratory episodes", weight:65 }

    ],

    clinicalSigns:[

      { finding:"Sneezing", weight:75 },

      { finding:"Nasal discharge", weight:70 },

      { finding:"Conjunctivitis", weight:85 },

      { finding:"Ocular discharge", weight:75 },

      { finding:"Fever", weight:45 },

      { finding:"Corneal ulceration", weight:55 },

      { finding:"Reduced appetite", weight:50 }

    ],

    biochemistry:[

      { finding:"Usually non-specific blood changes", weight:10 },

      { finding:"Inflammatory changes in severe cases", weight:20 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Typical conjunctivitis and respiratory signs", weight:85 },

      { finding:"Positive PCR detection", weight:90 },

      { finding:"Multi-cat exposure", weight:65 },

      { finding:"Recurrent episodes", weight:70 }

    ],

    against:[

      { finding:"No respiratory or ocular signs", weight:-50 },

      { finding:"Alternative respiratory disease confirmed", weight:-40 },

      { finding:"Negative appropriate testing", weight:-25 }

    ],

  },

  monitoring:[

    {
      id:"ocular",
      parameter:"Eye condition",
      frequency:"Regular follow-up",
      reason:
        "Monitors conjunctivitis and corneal complications."
    },

    {
      id:"respiratory",
      parameter:"Nasal and respiratory signs",
      frequency:"Daily during illness",
      reason:
        "Evaluates recovery."
    },

    {
      id:"recurrence",
      parameter:"Repeat respiratory episodes",
      frequency:"Long-term monitoring",
      reason:
        "Detects viral reactivation."

    }

  ],

  precautions:[

    {
      id:"latency",
      title:"Viral Latency",
      description:
        "Recovered cats may carry the virus lifelong and shed during stress."
    },

    {
      id:"contagious",
      title:"Transmission Risk",
      description:
        "Close contact between cats facilitates spread."

    }

  ],

  prognosis:
    "Prognosis is generally good with supportive care, although some cats develop chronic ocular disease or recurrent respiratory episodes.",

  strengtheningEvidence:[

    "Conjunctivitis",

    "Upper respiratory signs",

    "Positive PCR",

    "Recurrent episodes"

  ],

  weakeningEvidence:[

    "No ocular involvement",

    "No respiratory signs",

    "Alternative viral disease confirmed"

  ],

  classicFindings:[

    "Sneezing",

    "Conjunctivitis",

    "Nasal discharge",

    "Corneal disease"

  ],

  ruleOutFindings:[

    "Feline calicivirus infection",

    "Chlamydophila felis infection",

    "Bacterial rhinitis",

    "Foreign body",

    "Fungal rhinitis"

  ],

};