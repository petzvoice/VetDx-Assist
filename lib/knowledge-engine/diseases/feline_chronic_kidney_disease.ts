import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineChronicKidneyDisease: DiseaseCard = {
  id: "feline-chronic-kidney-disease-cat",

  title: "Feline Chronic Kidney Disease (CKD)",

  description:
    "A progressive and irreversible loss of kidney function in cats resulting in impaired filtration, fluid balance disturbances, and metabolic abnormalities.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Chronic Kidney Disease",
    "Chronic Renal Disease",
    "Chronic Renal Failure",
    "Feline CKD",
  ],

  overview:
    "Feline chronic kidney disease is one of the most common disorders affecting older cats. It develops due to progressive loss of functional kidney tissue, reducing the ability of the kidneys to concentrate urine, remove waste products, and maintain electrolyte balance. Disease progression varies between cats. Common consequences include dehydration, weight loss, hypertension, anemia, and metabolic abnormalities.",

  clinicalProblems:[

    "Progressive kidney dysfunction",
    "Azotemia",
    "Dehydration",
    "Weight loss",
    "Hypertension",
    "Metabolic imbalance"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess increased drinking, increased urination, appetite changes, weight loss, vomiting, and duration of signs."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate hydration status, body condition, blood pressure, and signs of systemic disease."
    },

    {
      id:"renal-testing",
      step:3,
      title:"Renal Function Assessment",
      description:
        "Evaluate kidney biomarkers and urine concentration ability."
    },

    {
      id:"staging",
      step:4,
      title:"Disease Staging",
      description:
        "Classify severity based on renal function, protein loss, and blood pressure."

    },

    {
      id:"management",
      step:5,
      title:"Long-term Kidney Management",
      description:
        "Control complications and slow disease progression."

    }

  ],

  diagnostics:[

    {
      id:"serum-biochemistry",
      name:"Serum Biochemistry",
      priority:"Essential",
      reason:
        "Evaluates kidney function markers and metabolic abnormalities."
    },

    {
      id:"urinalysis",
      name:"Urinalysis",
      priority:"Essential",
      reason:
        "Assesses urine concentration and kidney abnormalities."
    },

    {
      id:"sdma",
      name:"Symmetric Dimethylarginine (SDMA)",
      priority:"Recommended",
      reason:
        "Helps detect reduced kidney function earlier."
    },

    {
      id:"blood-pressure",
      name:"Blood Pressure Measurement",
      priority:"Recommended",
      reason:
        "Detects hypertension associated with kidney disease."

    }

  ],

  drugCategories:[

    {
      category:"Renal Support Therapy",
      indication:"Chronic kidney disease management",
      reason:
        "Supports kidney function and reduces complications."
    },

    {
      category:"Antihypertensive Therapy",
      indication:"Systemic hypertension",
      reason:
        "Controls blood pressure-associated damage."
    },

    {
      category:"Gastrointestinal Support",
      indication:"Uremic nausea and vomiting",
      reason:
        "Improves appetite and comfort."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"benazepril",
      priority:"Supportive",
      category:"Renal Support"
    },

    {
      drugId:"amlodipine",
      priority:"Supportive",
      category:"Antihypertensive"
    },

    {
      drugId:"maropitant",
      priority:"Supportive",
      category:"Gastrointestinal"

    }

  ],

  stabilization:[

    "Correct dehydration.",
    "Provide appropriate renal nutrition.",
    "Manage electrolyte abnormalities.",
    "Control hypertension.",
    "Monitor progression of kidney disease."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Older cat", weight:75 },

      { finding:"Increased drinking", weight:80 },

      { finding:"Increased urination", weight:80 },

      { finding:"Progressive weight loss", weight:70 },

      { finding:"Reduced appetite", weight:60 }

    ],

    clinicalSigns:[

      { finding:"Polyuria", weight:85 },

      { finding:"Polydipsia", weight:85 },

      { finding:"Weight loss", weight:75 },

      { finding:"Dehydration", weight:65 },

      { finding:"Vomiting", weight:55 },

      { finding:"Poor coat quality", weight:45 },

      { finding:"Oral ulcers", weight:30 },

      { finding:"Lethargy", weight:60 }

    ],

    biochemistry:[

      { finding:"Increased creatinine", weight:85 },

      { finding:"Increased BUN", weight:80 },

      { finding:"Low urine concentration", weight:80 },

      { finding:"Phosphorus elevation", weight:55 },

      { finding:"Anemia", weight:45 }

    ],

    imaging:[

      { finding:"Small irregular kidneys", weight:55 },

      { finding:"Structural kidney changes", weight:50 },

      { finding:"No specific imaging findings", weight:10 }

    ],

    supports:[

      { finding:"Persistent azotemia", weight:90 },

      { finding:"Poor urine concentrating ability", weight:85 },

      { finding:"Older cat with PU/PD", weight:80 },

      { finding:"SDMA elevation", weight:80 }

    ],

    against:[

      { finding:"Normal kidney function tests", weight:-60 },

      { finding:"Acute reversible kidney injury", weight:-35 },

      { finding:"Alternative diagnosis confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"renal",
      parameter:"Kidney function parameters",
      frequency:"Periodic",
      reason:
        "Tracks disease progression."
    },

    {
      id:"weight",
      parameter:"Body weight",
      frequency:"Regular monitoring",
      reason:
        "Detects muscle loss and nutritional decline."
    },

    {
      id:"blood-pressure",
      parameter:"Blood pressure",
      frequency:"Periodic",
      reason:
        "Monitors hypertension risk."

    }

  ],

  precautions:[

    {
      id:"nutrition",
      title:"Renal Diet Management",
      description:
        "Dietary modification is an important part of long-term CKD management."
    },

    {
      id:"hydration",
      title:"Hydration Monitoring",
      description:
        "Cats with CKD are prone to dehydration due to reduced urine concentrating ability."

    }

  ],

  prognosis:
    "Chronic kidney disease is progressive and cannot be reversed, but many cats can maintain good quality of life with appropriate long-term management.",

  strengtheningEvidence:[

    "Persistent azotemia",

    "Poor urine concentration",

    "Older cat",

    "Polyuria and polydipsia"

  ],

  weakeningEvidence:[

    "Normal renal parameters",

    "Temporary acute kidney changes",

    "Alternative disease confirmed"

  ],

  classicFindings:[

    "Increased drinking",

    "Increased urination",

    "Weight loss",

    "Elevated kidney values"

  ],

  ruleOutFindings:[

    "Acute kidney injury",

    "Diabetes mellitus",

    "Hyperthyroidism",

    "Urinary obstruction",

    "Pyelonephritis"

  ],

};