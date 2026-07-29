import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineSystemicLupusErythematosus: DiseaseCard = {
  id: "canine-systemic-lupus-erythematosus-dog",

  title: "Canine Systemic Lupus Erythematosus (SLE)",

  description:
    "A multisystem autoimmune disease in which immune complexes cause inflammation and damage in multiple organs including joints, skin, blood cells, and kidneys.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Systemic Lupus Erythematosus",
    "Canine SLE",
    "Systemic Autoimmune Disease",
    "Immune Complex Disease",
  ],

  overview:
    "Canine systemic lupus erythematosus is a rare autoimmune disorder characterized by abnormal immune responses against the body's own tissues. Formation of autoantibodies and immune complexes can result in inflammation affecting multiple organs. Common manifestations include polyarthritis, skin lesions, kidney involvement, anemia, and fever. Diagnosis requires combination of clinical findings, laboratory abnormalities, and immune testing.",

  clinicalProblems:[

    "Multisystem autoimmune inflammation",
    "Immune-mediated arthritis",
    "Skin disease",
    "Kidney involvement",
    "Blood cell destruction",
    "Chronic inflammatory disease"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess chronic illness, shifting lameness, skin lesions, fever episodes, and systemic signs."
    },

    {
      id:"physical-examination",
      step:2,
      title:"Complete Physical Examination",
      description:
        "Evaluate joints, skin, mucous membranes, lymph nodes, and organ-related abnormalities."
    },

    {
      id:"laboratory-testing",
      step:3,
      title:"Laboratory Evaluation",
      description:
        "Assess blood cells, kidney function, inflammation, and immune abnormalities."
    },

    {
      id:"immune-testing",
      step:4,
      title:"Autoimmune Evaluation",
      description:
        "Perform appropriate antibody testing and evaluate immune-mediated disease evidence."
    },

    {
      id:"management",
      step:5,
      title:"Immunosuppressive Management",
      description:
        "Control immune-mediated inflammation and monitor affected organs."

    }

  ],

  diagnostics:[

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Essential",
      reason:
        "Detects immune-mediated blood cell abnormalities."
    },

    {
      id:"serum-biochemistry",
      name:"Serum Biochemistry",
      priority:"Essential",
      reason:
        "Evaluates kidney and systemic organ involvement."
    },

    {
      id:"urinalysis",
      name:"Urinalysis",
      priority:"Essential",
      reason:
        "Assesses renal involvement."
    },

    {
      id:"ana-testing",
      name:"Antinuclear Antibody Testing",
      priority:"Recommended",
      reason:
        "Supports diagnosis of systemic autoimmune disease."

    }

  ],

  drugCategories:[

    {
      category:"Immunosuppressive Therapy",
      indication:"Control autoimmune disease",
      reason:
        "Suppresses abnormal immune activity."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Pain and inflammation",
      reason:
        "Reduces tissue inflammation."
    },

    {
      category:"Supportive Organ Management",
      indication:"Affected organs",
      reason:
        "Addresses complications."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"
    },

    {
      drugId:"azathioprine",
      priority:"Supportive",
      category:"Immunosuppressant"

    }

  ],

  stabilization:[

    "Control autoimmune inflammation.",
    "Assess kidney and blood involvement.",
    "Manage joint pain and mobility problems.",
    "Monitor response to immunosuppressive therapy.",
    "Prevent complications of immune suppression."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Chronic waxing and waning illness", weight:55 },

      { finding:"Multiple organ involvement", weight:80 },

      { finding:"Recurring fever episodes", weight:50 },

      { finding:"Chronic joint problems", weight:60 },

      { finding:"Skin abnormalities", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Polyarthritis", weight:75 },

      { finding:"Lameness", weight:60 },

      { finding:"Fever", weight:55 },

      { finding:"Skin lesions", weight:45 },

      { finding:"Pale mucous membranes", weight:40 },

      { finding:"Kidney-related signs", weight:50 },

      { finding:"Lymph node enlargement", weight:35 }

    ],

    biochemistry:[

      { finding:"Proteinuria", weight:70 },

      { finding:"Kidney function abnormalities", weight:55 },

      { finding:"Inflammatory changes", weight:40 },

      { finding:"Anemia or blood abnormalities", weight:50 }

    ],

    imaging:[

      { finding:"Joint changes due to chronic inflammation", weight:30 },

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Positive autoimmune testing", weight:85 },

      { finding:"Multiple organ involvement", weight:90 },

      { finding:"Immune-mediated arthritis", weight:75 },

      { finding:"Response to immunosuppressive therapy", weight:65 }

    ],

    against:[

      { finding:"Single localized disease only", weight:-40 },

      { finding:"Confirmed infectious disease", weight:-50 },

      { finding:"Negative autoimmune evaluation", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"blood",
      parameter:"Blood cell counts",
      frequency:"Periodic",
      reason:
        "Monitors disease activity and treatment effects."
    },

    {
      id:"kidney",
      parameter:"Kidney function and urine protein",
      frequency:"Periodic",
      reason:
        "Detects renal complications."
    },

    {
      id:"clinical",
      parameter:"Joint, skin, and systemic signs",
      frequency:"Regular follow-up",
      reason:
        "Evaluates disease control."

    }

  ],

  precautions:[

    {
      id:"immunosuppression",
      title:"Immunosuppressive Therapy Monitoring",
      description:
        "Long-term immune suppression requires monitoring for adverse effects and infections."
    },

    {
      id:"infection",
      title:"Infection Risk",
      description:
        "Reduced immune function can increase susceptibility to infections."

    }

  ],

  prognosis:
    "Prognosis varies depending on organs affected. Early recognition and appropriate immunosuppressive management can improve outcomes, while kidney involvement may worsen prognosis.",

  strengtheningEvidence:[

    "Multiple organ involvement",

    "Positive autoimmune testing",

    "Immune-mediated arthritis",

    "Proteinuria or blood abnormalities"

  ],

  weakeningEvidence:[

    "Confirmed infection",

    "Single organ disease only",

    "Negative autoimmune evidence"

  ],

  classicFindings:[

    "Polyarthritis",

    "Fever",

    "Skin lesions",

    "Kidney involvement"

  ],

  ruleOutFindings:[

    "Immune-mediated polyarthritis",

    "Rheumatoid arthritis",

    "Leishmaniasis",

    "Bacterial infection",

    "Drug-induced autoimmune disease"

  ],

};