import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineHyperthyroidism: DiseaseCard = {
  id: "feline-hyperthyroidism-cat",

  title: "Feline Hyperthyroidism",

  description:
    "A common endocrine disorder in older cats caused by excessive production of thyroid hormones, leading to increased metabolic activity and systemic effects.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Hyperthyroidism",
    "Thyrotoxicosis",
    "Excess Thyroid Hormone Disease",
  ],

  overview:
    "Feline hyperthyroidism is one of the most common endocrine diseases affecting older cats. It is usually caused by benign enlargement of thyroid tissue resulting in excessive production of thyroid hormones. Increased thyroid hormone levels accelerate metabolism and affect multiple organ systems including the cardiovascular, gastrointestinal, renal, and nervous systems. Early diagnosis and management are important to prevent complications.",

  clinicalProblems:[

    "Excess thyroid hormone production",
    "Weight loss",
    "Increased metabolic rate",
    "Cardiovascular changes",
    "Gastrointestinal disturbances",
    "Hypertension risk"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess weight loss, appetite changes, vomiting, increased activity, and changes in drinking or urination."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate thyroid enlargement, heart rate, body condition, and cardiovascular abnormalities."
    },

    {
      id:"thyroid-testing",
      step:3,
      title:"Thyroid Hormone Evaluation",
      description:
        "Measure thyroid hormone levels to confirm hyperthyroidism."
    },

    {
      id:"organ-assessment",
      step:4,
      title:"Organ Function Assessment",
      description:
        "Evaluate kidney and heart function before treatment."

    },

    {
      id:"management",
      step:5,
      title:"Hyperthyroidism Management",
      description:
        "Control thyroid hormone production and manage complications."

    }

  ],

  diagnostics:[

    {
      id:"total-t4",
      name:"Total Thyroxine (T4)",
      priority:"Essential",
      reason:
        "Primary screening test for feline hyperthyroidism."
    },

    {
      id:"free-t4",
      name:"Free T4 Testing",
      priority:"Recommended",
      reason:
        "Supports diagnosis when total T4 results are inconclusive."
    },

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "Evaluates systemic health changes."
    },

    {
      id:"biochemistry",
      name:"Serum Biochemistry",
      priority:"Essential",
      reason:
        "Assesses kidney and organ function before therapy."

    }

  ],

  drugCategories:[

    {
      category:"Antithyroid Therapy",
      indication:"Control thyroid hormone production",
      reason:
        "Reduces excessive thyroid hormone synthesis."
    },

    {
      category:"Cardiovascular Support",
      indication:"Heart-related complications",
      reason:
        "Manages effects of increased metabolic activity."
    },

    {
      category:"Definitive Therapy",
      indication:"Long-term control",
      reason:
        "Removes or destroys abnormal thyroid tissue."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"methimazole",
      priority:"Supportive",
      category:"Antithyroid"
    },

    {
      drugId:"atenolol",
      priority:"Supportive",
      category:"Cardiovascular"

    }

  ],

  stabilization:[

    "Assess cardiovascular status.",
    "Monitor kidney function before and during treatment.",
    "Control severe hypertension if present.",
    "Maintain adequate nutrition.",
    "Monitor thyroid hormone levels during therapy."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Older cat", weight:75 },

      { finding:"Progressive weight loss", weight:80 },

      { finding:"Increased appetite", weight:70 },

      { finding:"Increased activity or restlessness", weight:55 },

      { finding:"Vomiting history", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Weight loss", weight:90 },

      { finding:"Polyphagia", weight:70 },

      { finding:"Tachycardia", weight:75 },

      { finding:"Hyperactivity", weight:60 },

      { finding:"Vomiting", weight:50 },

      { finding:"Diarrhea", weight:45 },

      { finding:"Poor coat quality", weight:55 },

      { finding:"Muscle wasting", weight:65 }

    ],

    biochemistry:[

      { finding:"Elevated total T4", weight:90 },

      { finding:"Elevated liver enzymes", weight:45 },

      { finding:"Changes in kidney parameters", weight:40 },

      { finding:"Mild metabolic abnormalities", weight:30 }

    ],

    imaging:[

      { finding:"Thyroid gland enlargement", weight:60 },

      { finding:"Cardiac changes due to disease", weight:35 },

      { finding:"No specific imaging findings", weight:10 }

    ],

    supports:[

      { finding:"High total T4 concentration", weight:95 },

      { finding:"Typical clinical signs", weight:80 },

      { finding:"Older cat", weight:75 },

      { finding:"Palpable thyroid enlargement", weight:70 }

    ],

    against:[

      { finding:"Normal thyroid hormone levels", weight:-60 },

      { finding:"Young cat without signs", weight:-30 },

      { finding:"Alternative diagnosis confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"thyroid",
      parameter:"Thyroid hormone levels",
      frequency:"Periodic",
      reason:
        "Evaluates treatment response."
    },

    {
      id:"kidney",
      parameter:"Renal function",
      frequency:"Regular monitoring",
      reason:
        "Detects kidney changes after treatment."
    },

    {
      id:"heart",
      parameter:"Heart rate and cardiovascular status",
      frequency:"Follow-up",
      reason:
        "Monitors complications."

    }

  ],

  precautions:[

    {
      id:"renal",
      title:"Kidney Function Monitoring",
      description:
        "Treatment may reveal underlying kidney disease by reducing thyroid-driven changes in renal blood flow."
    },

    {
      id:"cardiac",
      title:"Cardiovascular Assessment",
      description:
        "Long-standing hyperthyroidism may affect heart function."

    }

  ],

  prognosis:
    "Prognosis is generally good when diagnosed and managed appropriately. Long-term outcome depends on treatment response and presence of kidney or cardiac disease.",

  strengtheningEvidence:[

    "Elevated T4",

    "Older cat",

    "Weight loss despite appetite",

    "Thyroid enlargement"

  ],

  weakeningEvidence:[

    "Normal thyroid testing",

    "No metabolic signs",

    "Alternative disease identified"

  ],

  classicFindings:[

    "Weight loss",

    "Increased appetite",

    "Hyperactivity",

    "Tachycardia"

  ],

  ruleOutFindings:[

    "Diabetes mellitus",

    "Chronic kidney disease",

    "Inflammatory bowel disease",

    "Intestinal lymphoma",

    "Chronic liver disease"

  ],

};