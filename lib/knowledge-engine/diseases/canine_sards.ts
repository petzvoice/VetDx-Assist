import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineSARDS: DiseaseCard = {
  id: "canine-sards-dog",

  title: "Canine Sudden Acquired Retinal Degeneration Syndrome (SARDS)",

  description:
    "A condition causing sudden, irreversible blindness due to rapid dysfunction and degeneration of retinal photoreceptor cells.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "SARDS",
    "Sudden Retinal Degeneration",
    "Acute Retinal Dysfunction Syndrome",
  ],

  overview:
    "Sudden acquired retinal degeneration syndrome is characterized by rapid onset blindness caused by sudden loss of retinal function. Unlike progressive retinal atrophy, SARDS develops over a short period, often within days to weeks. The exact cause is not fully understood, but immune-mediated mechanisms and metabolic abnormalities have been proposed. Affected dogs may show behavioral changes associated with sudden vision loss and may develop increased thirst, increased urination, and weight gain.",

  clinicalProblems: [

    "Sudden blindness",
    "Retinal dysfunction",
    "Loss of visual navigation",
    "Behavioral changes",
    "Possible endocrine abnormalities"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess speed of vision loss, behavioral changes, thirst, urination, appetite changes, and previous illness."
    },

    {
      id:"ophthalmic-exam",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate retina, optic nerve, and ocular structures."
    },

    {
      id:"retinal-function",
      step:3,
      title:"Retinal Function Assessment",
      description:
        "Determine whether retinal function is impaired despite normal appearance."
    },

    {
      id:"systemic-evaluation",
      step:4,
      title:"Systemic Disease Evaluation",
      description:
        "Assess for concurrent metabolic or endocrine abnormalities."
    },

    {
      id:"support",
      step:5,
      title:"Supportive Management",
      description:
        "Help the dog adapt to sudden blindness."
    }

  ],

  diagnostics: [

    {
      id:"electroretinography",
      name:"Electroretinography (ERG)",
      priority:"Essential",
      reason:
        "Confirms loss of retinal electrical function."
    },

    {
      id:"fundic-examination",
      name:"Fundic Examination",
      priority:"Essential",
      reason:
        "Evaluates retinal appearance and rules out structural disease."
    },

    {
      id:"ophthalmic-examination",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Rules out other causes of sudden blindness."
    },

    {
      id:"blood-testing",
      name:"Blood and Endocrine Evaluation",
      priority:"Recommended",
      reason:
        "Investigates associated systemic abnormalities."
    }

  ],

  drugCategories:[

    {
      category:"Supportive Management",
      indication:"Adaptation to blindness",
      reason:
        "Improves safety and quality of life."
    }

  ],

  recommendedDrugs: [],

  stabilization:[

    "Confirm blindness cause.",
    "Assess retinal function.",
    "Rule out other emergency causes of blindness.",
    "Modify environment for safety.",
    "Educate owners regarding adaptation."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Sudden onset blindness", weight:75 },

      { finding:"Rapid progression over days to weeks", weight:65 },

      { finding:"Middle-aged to older dog", weight:35 },

      { finding:"Increased thirst and urination", weight:35 },

      { finding:"Weight gain", weight:25 }

    ],

    clinicalSigns:[

      { finding:"Complete blindness", weight:75 },

      { finding:"Dilated pupils", weight:45 },

      { finding:"Reduced menace response", weight:60 },

      { finding:"Normal appearing retina initially", weight:40 },

      { finding:"Behavioral changes", weight:40 }

    ],

    biochemistry:[

      { finding:"Possible endocrine abnormalities", weight:30 },

      { finding:"Possible metabolic changes", weight:25 }

    ],

    imaging:[

      { finding:"Normal fundic appearance early", weight:30 },

      { finding:"Absent retinal function on ERG", weight:80 }

    ],

    supports:[

      { finding:"Absent electroretinogram response", weight:85 },

      { finding:"Sudden blindness", weight:75 },

      { finding:"Normal ocular structures", weight:50 },

      { finding:"Older dog with acute vision loss", weight:40 }

    ],

    against:[

      { finding:"Slow progressive blindness", weight:-40 },

      { finding:"Retinal structural degeneration", weight:-30 },

      { finding:"Painful ocular disease", weight:-35 }

    ],

  },

  monitoring:[

    {
      id:"vision",
      parameter:"Visual function",
      frequency:"Regular assessment",
      reason:
        "Documents permanent vision loss and adaptation."
    },

    {
      id:"systemic",
      parameter:"Body weight and metabolic signs",
      frequency:"Follow-up",
      reason:
        "Monitors associated systemic changes."
    },

    {
      id:"adaptation",
      parameter:"Environmental adjustment",
      frequency:"Continuous",
      reason:
        "Maintains quality of life."

    }

  ],

  precautions:[

    {
      id:"differential",
      title:"Rule Out Other Causes",
      description:
        "Sudden blindness requires evaluation for retinal detachment, optic nerve disease, and neurological causes."
    },

    {
      id:"adaptation",
      title:"Blindness Support",
      description:
        "Dogs can adapt well if their environment remains consistent."
    }

  ],

  prognosis:
    "Vision loss caused by SARDS is generally permanent. Most affected dogs adapt well with appropriate environmental support and owner guidance.",

  strengtheningEvidence:[

    "Sudden blindness",

    "Absent ERG response",

    "Normal appearing eye",

    "Older dog",

    "Rapid vision loss"

  ],

  weakeningEvidence:[

    "Slow progression",

    "Abnormal retinal appearance",

    "Painful eye disease"

  ],

  classicFindings:[

    "Sudden blindness",

    "Dilated pupils",

    "Absent ERG response",

    "Normal retina initially"

  ],

  ruleOutFindings:[

    "Progressive retinal atrophy",

    "Retinal detachment",

    "Optic neuritis",

    "Glaucoma",

    "CNS disease"

  ],

};