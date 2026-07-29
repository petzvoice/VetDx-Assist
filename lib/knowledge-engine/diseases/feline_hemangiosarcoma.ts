import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineHemangiosarcoma: DiseaseCard = {
  id: "feline-hemangiosarcoma-cat",

  title: "Feline Hemangiosarcoma",

  description:
    "A malignant tumour arising from vascular endothelial cells, affecting blood vessels and organs such as the spleen, liver, skin, and heart.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Hemangiosarcoma",
    "Angiosarcoma",
    "Vascular Sarcoma",
    "Blood Vessel Tumour",
  ],

  overview:
    "Hemangiosarcoma is an aggressive malignant tumour originating from endothelial cells lining blood vessels. Although less common in cats compared with dogs, it can occur in various organs including spleen, liver, skin, and subcutaneous tissues. Clinical signs often result from internal bleeding, organ dysfunction, or tumour spread.",

  clinicalProblems:[

    "Vascular tumour formation",
    "Internal bleeding risk",
    "Organ dysfunction",
    "Anaemia",
    "Metastatic disease",
    "Sudden clinical deterioration"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess weakness, collapse episodes, weight loss, bleeding signs, and progression of illness."
    },

    {
      id:"physical-exam",
      step:2,
      title:"Physical Examination",
      description:
        "Evaluate mucous membranes, abdominal palpation, cardiovascular status, and overall condition."
    },

    {
      id:"imaging",
      step:3,
      title:"Tumour Localization",
      description:
        "Perform imaging to identify masses and internal bleeding."
    },

    {
      id:"sampling",
      step:4,
      title:"Tumour Confirmation",
      description:
        "Obtain cytology or biopsy when safe and appropriate."
    },

    {
      id:"staging",
      step:5,
      title:"Disease Staging",
      description:
        "Assess tumour spread and organ involvement."

    }

  ],

  diagnostics:[

    {
      id:"ultrasound",
      name:"Abdominal Ultrasound",
      priority:"Essential",
      reason:
        "Detects internal masses and organ abnormalities."
    },

    {
      id:"blood-tests",
      name:"CBC and Serum Biochemistry",
      priority:"Recommended",
      reason:
        "Evaluates anaemia, bleeding, and organ function."
    },

    {
      id:"cytology",
      name:"Fine Needle Aspiration Cytology",
      priority:"Recommended",
      reason:
        "May provide tumour cell evaluation."
    },

    {
      id:"histopathology",
      name:"Histopathology",
      priority:"Essential",
      reason:
        "Confirms vascular tumour diagnosis."

    }

  ],

  drugCategories:[

    {
      category:"Pain Management",
      indication:"Tumour-associated discomfort",
      reason:
        "Improves patient comfort."
    },

    {
      category:"Supportive Oncology Care",
      indication:"Advanced disease",
      reason:
        "Maintains quality of life."

    }

  ],

  recommendedDrugs:[

  ],

  stabilization:[

    "Assess cardiovascular stability.",
    "Check for internal bleeding.",
    "Evaluate anaemia.",
    "Confirm tumour location.",
    "Provide supportive care."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Progressive weakness", weight:70 },

      { finding:"Collapse episodes", weight:80 },

      { finding:"Weight loss", weight:60 },

      { finding:"Older age", weight:45 },

      { finding:"Bleeding tendency", weight:55 }

    ],

    clinicalSigns:[

      { finding:"Abdominal mass", weight:75 },

      { finding:"Pale mucous membranes", weight:70 },

      { finding:"Weakness", weight:65 },

      { finding:"Abdominal distension", weight:60 },

      { finding:"Sudden collapse", weight:75 },

      { finding:"Skin vascular mass", weight:60 }

    ],

    biochemistry:[

      { finding:"Anaemia", weight:65 },

      { finding:"Regenerative response due to blood loss", weight:50 },

      { finding:"Organ dysfunction changes", weight:55 }

    ],

    imaging:[

      { finding:"Splenic mass", weight:85 },

      { finding:"Liver mass", weight:75 },

      { finding:"Abdominal bleeding", weight:80 },

      { finding:"Metastatic lesions", weight:70 }

    ],

    supports:[

      { finding:"Histopathology confirming hemangiosarcoma", weight:100 },

      { finding:"Vascular tumour appearance", weight:90 },

      { finding:"Internal bleeding signs", weight:80 },

      { finding:"Compatible imaging findings", weight:85 }

    ],

    against:[

      { finding:"No mass detected", weight:-60 },

      { finding:"Normal imaging", weight:-50 },

      { finding:"Alternative tumour diagnosis", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"anaemia",
      parameter:"Red blood cell parameters",
      frequency:"Regular monitoring",
      reason:
        "Detects ongoing blood loss."
    },

    {
      id:"tumour",
      parameter:"Tumour progression",
      frequency:"Follow-up imaging",
      reason:
        "Monitors disease progression."
    },

    {
      id:"quality",
      parameter:"Quality of life",
      frequency:"Continuous",
      reason:
        "Guides treatment decisions."

    }

  ],

  precautions:[

    {
      id:"bleeding",
      title:"Risk of Internal Bleeding",
      description:
        "Vascular tumours may rupture and cause life-threatening haemorrhage."
    },

    {
      id:"diagnosis",
      title:"Careful Diagnostic Approach",
      description:
        "Some vascular tumours may carry bleeding risks during sampling."

    }

  ],

  prognosis:
    "Hemangiosarcoma generally carries a guarded prognosis due to aggressive biological behaviour, metastatic potential, and risk of bleeding complications.",

  strengtheningEvidence:[

    "Vascular tumour confirmation",

    "Internal bleeding",

    "Mass lesions",

    "Anaemia"

  ],

  weakeningEvidence:[

    "No tumour detected",

    "Normal imaging",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Weakness",

    "Collapse",

    "Abdominal mass",

    "Anaemia"

  ],

  ruleOutFindings:[

    "Splenic lymphoma",

    "Benign splenic mass",

    "Internal bleeding from trauma",

    "Other soft tissue sarcoma",

    "Inflammatory disease"

  ],

};