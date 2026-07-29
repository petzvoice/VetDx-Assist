import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineDiabetesMellitus: DiseaseCard = {
  id: "feline-diabetes-mellitus-cat",

  title: "Feline Diabetes Mellitus",

  description:
    "A metabolic endocrine disorder in cats characterized by persistent hyperglycemia due to impaired insulin secretion, insulin resistance, or both.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Diabetes",
    "Diabetes Mellitus in Cats",
    "Feline Hyperglycemia Syndrome",
  ],

  overview:
    "Feline diabetes mellitus is a common endocrine disease involving inadequate insulin action and persistent elevation of blood glucose levels. Most diabetic cats develop a condition similar to type 2 diabetes in humans, where insulin resistance and reduced pancreatic beta-cell function contribute to disease. Obesity, physical inactivity, pancreatitis, certain medications, and other endocrine disorders may increase risk. Early diagnosis and appropriate management can result in diabetic remission in some cats.",

  clinicalProblems:[

    "Persistent hyperglycemia",
    "Insulin resistance",
    "Increased thirst",
    "Increased urination",
    "Weight loss",
    "Diabetic complications"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess increased drinking, urination, appetite changes, weight loss, obesity, medications, and previous pancreatic disease."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate body condition, hydration, muscle loss, and neurological abnormalities."
    },

    {
      id:"blood-testing",
      step:3,
      title:"Blood Glucose Assessment",
      description:
        "Evaluate persistent hyperglycemia and metabolic changes."
    },

    {
      id:"urine-testing",
      step:4,
      title:"Urine Evaluation",
      description:
        "Assess glucose loss and ketone production."
    },

    {
      id:"management",
      step:5,
      title:"Diabetes Management",
      description:
        "Implement dietary management, insulin therapy, and monitoring."

    }

  ],

  diagnostics:[

    {
      id:"blood-glucose",
      name:"Blood Glucose Measurement",
      priority:"Essential",
      reason:
        "Detects persistent hyperglycemia."
    },

    {
      id:"urinalysis",
      name:"Urinalysis",
      priority:"Essential",
      reason:
        "Detects glucosuria and ketones."
    },

    {
      id:"fructosamine",
      name:"Serum Fructosamine",
      priority:"Recommended",
      reason:
        "Evaluates longer-term blood glucose control."
    },

    {
      id:"cbc-biochemistry",
      name:"CBC and Serum Biochemistry",
      priority:"Recommended",
      reason:
        "Assesses systemic health and concurrent disease."

    }

  ],

  drugCategories:[

    {
      category:"Insulin Therapy",
      indication:"Blood glucose regulation",
      reason:
        "Provides insulin replacement and improves glucose control."
    },

    {
      category:"Dietary Management",
      indication:"Diabetes control",
      reason:
        "Supports glucose regulation and weight management."
    },

    {
      category:"Supportive Management",
      indication:"Diabetic complications",
      reason:
        "Addresses associated metabolic problems."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"insulin-glargine",
      priority:"Supportive",
      category:"Insulin"
    }

  ],

  stabilization:[

    "Correct dehydration.",
    "Manage diabetic ketoacidosis if present.",
    "Begin appropriate nutritional management.",
    "Monitor blood glucose response.",
    "Educate owners regarding insulin administration."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Increased drinking", weight:70 },

      { finding:"Increased urination", weight:75 },

      { finding:"Weight loss despite appetite", weight:80 },

      { finding:"Obesity history", weight:65 },

      { finding:"Steroid therapy history", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Polyuria", weight:80 },

      { finding:"Polydipsia", weight:80 },

      { finding:"Weight loss", weight:85 },

      { finding:"Increased appetite", weight:50 },

      { finding:"Weakness", weight:45 },

      { finding:"Plantigrade stance", weight:60 },

      { finding:"Poor coat quality", weight:35 }

    ],

    biochemistry:[

      { finding:"Persistent hyperglycemia", weight:90 },

      { finding:"Elevated fructosamine", weight:85 },

      { finding:"Glucosuria", weight:85 },

      { finding:"Ketones in blood or urine", weight:70 },

      { finding:"Electrolyte abnormalities", weight:40 }

    ],

    imaging:[

      { finding:"Usually no specific imaging findings", weight:5 },

      { finding:"Pancreatic abnormalities if concurrent disease", weight:30 }

    ],

    supports:[

      { finding:"Persistent fasting hyperglycemia", weight:90 },

      { finding:"Glucosuria", weight:85 },

      { finding:"Elevated fructosamine", weight:85 },

      { finding:"Typical clinical signs", weight:75 }

    ],

    against:[

      { finding:"Normal glucose regulation", weight:-60 },

      { finding:"Transient stress hyperglycemia only", weight:-40 },

      { finding:"Alternative diagnosis confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"glucose",
      parameter:"Blood glucose concentration",
      frequency:"Regular monitoring",
      reason:
        "Evaluates diabetic control."
    },

    {
      id:"fructosamine",
      parameter:"Fructosamine level",
      frequency:"Periodic",
      reason:
        "Assesses long-term glucose regulation."
    },

    {
      id:"weight",
      parameter:"Body weight",
      frequency:"Regular monitoring",
      reason:
        "Evaluates nutritional and metabolic status."

    }

  ],

  precautions:[

    {
      id:"hypoglycemia",
      title:"Hypoglycemia Risk",
      description:
        "Insulin therapy requires monitoring to prevent dangerously low blood glucose."
    },

    {
      id:"remission",
      title:"Possible Remission",
      description:
        "Some cats may achieve diabetic remission with early diagnosis and appropriate management."

    }

  ],

  prognosis:
    "Prognosis varies depending on glucose control, concurrent disease, and owner compliance. Many cats can maintain good quality of life, and some may achieve remission.",

  strengtheningEvidence:[

    "Persistent hyperglycemia",

    "Glucosuria",

    "Elevated fructosamine",

    "Polyuria and polydipsia"

  ],

  weakeningEvidence:[

    "Normal glucose levels",

    "Stress-related temporary hyperglycemia",

    "Alternative metabolic disease"

  ],

  classicFindings:[

    "Increased drinking",

    "Increased urination",

    "Weight loss",

    "Hyperglycemia"

  ],

  ruleOutFindings:[

    "Stress hyperglycemia",

    "Hyperthyroidism",

    "Chronic kidney disease",

    "Pancreatitis",

    "Hyperadrenocorticism"

  ],

};