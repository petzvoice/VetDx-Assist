import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineHemangiosarcoma: DiseaseCard = {
  id: "canine-hemangiosarcoma-dog",

  title: "Canine Hemangiosarcoma",

  description:
    "A highly aggressive malignant tumor originating from vascular endothelial cells, commonly affecting the spleen, heart, liver, and other organs with a high risk of internal bleeding and metastasis.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Hemangiosarcoma",
    "HSA",
    "Splenic Hemangiosarcoma",
    "Cardiac Hemangiosarcoma",
    "Vascular Sarcoma",
  ],

  overview:
    "Canine hemangiosarcoma is an aggressive cancer arising from blood vessel-forming cells. It commonly affects the spleen and right side of the heart but may occur in many organs. Tumors are fragile and highly vascular, making spontaneous bleeding into body cavities a major complication. Clinical signs may be vague until rupture occurs, resulting in acute collapse. Metastatic spread is common.",

  clinicalProblems:[

    "Internal bleeding",
    "Abdominal hemorrhage",
    "Cardiac compromise",
    "Metastatic disease",
    "Anemia",
    "Acute collapse"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess weakness, collapse episodes, abdominal distension, exercise intolerance, and sudden deterioration."
    },

    {
      id:"physical-exam",
      step:2,
      title:"Physical Examination",
      description:
        "Evaluate mucous membranes, heart sounds, abdominal changes, and signs of shock."
    },

    {
      id:"imaging",
      step:3,
      title:"Imaging Evaluation",
      description:
        "Identify masses, bleeding, and possible metastatic lesions."
    },

    {
      id:"cytology-histology",
      step:4,
      title:"Tumor Confirmation",
      description:
        "Confirm diagnosis through cytology or histopathology when possible."
    },

    {
      id:"staging",
      step:5,
      title:"Cancer Staging",
      description:
        "Assess metastatic spread and disease severity."
    },

    {
      id:"management",
      step:6,
      title:"Oncology Management",
      description:
        "Provide surgical and systemic cancer management with supportive care."

    }

  ],

  diagnostics:[

    {
      id:"abdominal-ultrasound",
      name:"Abdominal Ultrasound",
      priority:"Essential",
      reason:
        "Detects splenic, hepatic, or abdominal masses and internal bleeding."
    },

    {
      id:"thoracic-imaging",
      name:"Thoracic Imaging",
      priority:"Recommended",
      reason:
        "Evaluates pulmonary metastatic disease."
    },

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Essential",
      reason:
        "Assesses anemia and blood loss."
    },

    {
      id:"histopathology",
      name:"Histopathology",
      priority:"Recommended",
      reason:
        "Provides definitive diagnosis of vascular tumor."

    }

  ],

  drugCategories:[

    {
      category:"Chemotherapy",
      indication:"Post-surgical or metastatic disease management",
      reason:
        "Targets remaining malignant vascular cells."
    },

    {
      category:"Supportive Emergency Care",
      indication:"Hemorrhage or shock",
      reason:
        "Stabilizes patients with acute blood loss."
    },

    {
      category:"Analgesic Therapy",
      indication:"Cancer-associated pain",
      reason:
        "Improves patient comfort."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"doxorubicin",
      priority:"Supportive",
      category:"Chemotherapy"
    }

  ],

  stabilization:[

    "Assess cardiovascular stability.",
    "Evaluate for internal hemorrhage.",
    "Provide emergency supportive care if shock is present.",
    "Perform staging before treatment decisions.",
    "Discuss prognosis and quality-of-life goals."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Older dog", weight:45 },

      { finding:"Large breed predisposition", weight:45 },

      { finding:"Episodes of weakness or collapse", weight:70 },

      { finding:"Exercise intolerance", weight:45 },

      { finding:"Sudden clinical deterioration", weight:60 }

    ],

    clinicalSigns:[

      { finding:"Pale mucous membranes", weight:55 },

      { finding:"Abdominal distension", weight:45 },

      { finding:"Weakness", weight:60 },

      { finding:"Collapse", weight:75 },

      { finding:"Tachycardia", weight:40 },

      { finding:"Signs of shock", weight:70 }

    ],

    biochemistry:[

      { finding:"Anemia due to blood loss", weight:60 },

      { finding:"Possible platelet abnormalities", weight:35 },

      { finding:"Changes associated with organ involvement", weight:30 }

    ],

    imaging:[

      { finding:"Splenic mass", weight:65 },

      { finding:"Abdominal free fluid compatible with hemorrhage", weight:70 },

      { finding:"Cardiac mass", weight:55 },

      { finding:"Metastatic lesions", weight:50 }

    ],

    supports:[

      { finding:"Histopathology confirming hemangiosarcoma", weight:95 },

      { finding:"Vascular abdominal mass with bleeding", weight:80 },

      { finding:"Older large breed dog", weight:45 },

      { finding:"Hemorrhagic abdominal effusion", weight:70 }

    ],

    against:[

      { finding:"No mass identified", weight:-50 },

      { finding:"Benign vascular lesion confirmed", weight:-40 },

      { finding:"Alternative cause of bleeding", weight:-30 }

    ],

  },

  monitoring:[

    {
      id:"anemia",
      parameter:"Packed cell volume / blood loss",
      frequency:"Regular during active disease",
      reason:
        "Monitors hemorrhage risk."
    },

    {
      id:"tumor",
      parameter:"Tumor progression",
      frequency:"Periodic imaging",
      reason:
        "Evaluates disease progression."
    },

    {
      id:"quality-life",
      parameter:"Activity, appetite, comfort",
      frequency:"Continuous",
      reason:
        "Guides supportive care decisions."

    }

  ],

  precautions:[

    {
      id:"rupture",
      title:"Risk of Tumor Rupture",
      description:
        "Highly vascular tumors may rupture and cause life-threatening internal bleeding."
    },

    {
      id:"metastasis",
      title:"High Metastatic Potential",
      description:
        "Hemangiosarcoma frequently spreads to distant organs."
    }

  ],

  prognosis:
    "Hemangiosarcoma has a guarded to poor prognosis due to aggressive biological behavior, frequent metastasis, and risk of sudden hemorrhage. Management focuses on extending survival and maintaining quality of life.",

  strengtheningEvidence:[

    "Vascular mass",

    "Internal bleeding",

    "Older large breed dog",

    "Histopathology confirmation",

    "Metastatic lesions"

  ],

  weakeningEvidence:[

    "No detectable mass",

    "Non-vascular tumor confirmed",

    "Alternative bleeding cause"

  ],
  
requiredFindings: [
  "Splenic mass",
  "Internal bleeding"
],
  classicFindings:[

    "Sudden collapse",

    "Splenic mass",

    "Pale mucous membranes",

    "Internal bleeding"

  ],

  ruleOutFindings:[

    "Splenic hematoma",

    "Splenic nodular hyperplasia",

    "Other abdominal tumors",

    "Coagulopathy",

    "Cardiac disease"

  ],

};