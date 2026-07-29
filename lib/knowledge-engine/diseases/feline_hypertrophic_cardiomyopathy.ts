import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineHypertrophicCardiomyopathy: DiseaseCard = {
  id: "feline-hypertrophic-cardiomyopathy-cat",

  title: "Feline Hypertrophic Cardiomyopathy (HCM)",

  description:
    "A primary heart disease in cats characterized by thickening of the ventricular heart muscle, impaired relaxation, and potential development of heart failure or thromboembolic complications.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline HCM",
    "Hypertrophic Cardiomyopathy",
    "Left Ventricular Hypertrophy",
    "Feline Cardiomyopathy",
  ],

  overview:
    "Hypertrophic cardiomyopathy is the most common acquired heart disease in cats. It is characterized by abnormal thickening of the left ventricular myocardium, which reduces ventricular filling and may increase pressure within the heart chambers. Some cats remain asymptomatic for years, while others develop congestive heart failure, arterial thromboembolism, or sudden death. Certain breeds have increased risk due to genetic mutations.",

  clinicalProblems:[

    "Cardiac muscle thickening",
    "Reduced ventricular relaxation",
    "Congestive heart failure",
    "Arterial thromboembolism",
    "Exercise intolerance",
    "Sudden cardiac events"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess breathing difficulty, exercise tolerance, collapse episodes, appetite changes, and breed risk."
    },

    {
      id:"cardiac-examination",
      step:2,
      title:"Cardiac Examination",
      description:
        "Evaluate heart sounds, murmurs, gallop rhythm, respiratory effort, and pulse quality."
    },

    {
      id:"cardiac-testing",
      step:3,
      title:"Cardiac Evaluation",
      description:
        "Perform echocardiography and cardiac assessment to identify structural changes."
    },

    {
      id:"complication-assessment",
      step:4,
      title:"Complication Assessment",
      description:
        "Evaluate risk of congestive heart failure and thromboembolism."
    },

    {
      id:"management",
      step:5,
      title:"Cardiac Management",
      description:
        "Manage clinical signs and reduce risk of complications."

    }

  ],

  diagnostics:[

    {
      id:"echocardiography",
      name:"Echocardiography",
      priority:"Essential",
      reason:
        "Confirms myocardial thickening and evaluates cardiac function."
    },

    {
      id:"thoracic-radiography",
      name:"Thoracic Radiography",
      priority:"Recommended",
      reason:
        "Evaluates pulmonary edema and heart enlargement."
    },

    {
      id:"ecg",
      name:"Electrocardiography",
      priority:"Recommended",
      reason:
        "Detects rhythm abnormalities."
    },

    {
      id:"nt-probnp",
      name:"NT-proBNP Testing",
      priority:"Recommended",
      reason:
        "Helps evaluate cardiac stress."

    }

  ],

  drugCategories:[

    {
      category:"Cardiac Support Therapy",
      indication:"Hypertrophic cardiomyopathy management",
      reason:
        "Improves cardiac function and reduces complications."
    },

    {
      category:"Diuretic Therapy",
      indication:"Congestive heart failure",
      reason:
        "Reduces fluid accumulation."
    },

    {
      category:"Antithrombotic Therapy",
      indication:"Thromboembolism prevention",
      reason:
        "Reduces risk of clot formation."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"clopidogrel",
      priority:"Supportive",
      category:"Antiplatelet"
    },

    {
      drugId:"furosemide",
      priority:"Supportive",
      category:"Diuretic"

    }

  ],

  stabilization:[

    "Provide oxygen support during respiratory distress.",
    "Manage congestive heart failure if present.",
    "Control stress and activity.",
    "Monitor respiratory rate.",
    "Assess thromboembolism risk."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Older cat", weight:50 },

      { finding:"Breed predisposition", weight:55 },

      { finding:"Breathing difficulty episodes", weight:70 },

      { finding:"Collapse episodes", weight:60 },

      { finding:"Previous heart disease", weight:65 }

    ],

    clinicalSigns:[

      { finding:"Tachypnea", weight:75 },

      { finding:"Dyspnea", weight:80 },

      { finding:"Exercise intolerance", weight:55 },

      { finding:"Syncope/collapse", weight:65 },

      { finding:"Heart murmur", weight:60 },

      { finding:"Gallop rhythm", weight:75 },

      { finding:"Hind limb weakness due to thromboembolism", weight:85 }

    ],

    biochemistry:[

      { finding:"Usually non-specific changes", weight:10 },

      { finding:"Cardiac biomarker elevation", weight:50 },

      { finding:"Changes due to heart failure", weight:35 }

    ],

    imaging:[

      { finding:"Left ventricular wall thickening", weight:90 },

      { finding:"Left atrial enlargement", weight:80 },

      { finding:"Pulmonary edema", weight:75 },

      { finding:"Pleural effusion", weight:55 }

    ],

    supports:[

      { finding:"Echocardiographic confirmation", weight:95 },

      { finding:"Left ventricular hypertrophy", weight:90 },

      { finding:"Left atrial enlargement", weight:75 },

      { finding:"Congestive heart failure signs", weight:70 }

    ],

    against:[

      { finding:"Normal echocardiogram", weight:-80 },

      { finding:"No cardiac abnormalities", weight:-50 },

      { finding:"Alternative cardiac disease confirmed", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"respiration",
      parameter:"Respiratory rate and effort",
      frequency:"Daily in affected cats",
      reason:
        "Detects development of congestive heart failure."
    },

    {
      id:"echocardiography",
      parameter:"Cardiac structure",
      frequency:"Periodic",
      reason:
        "Monitors disease progression."
    },

    {
      id:"thromboembolism",
      parameter:"Clot risk assessment",
      frequency:"Follow-up",
      reason:
        "Evaluates complication risk."

    }

  ],

  precautions:[

    {
      id:"heart-failure",
      title:"Congestive Heart Failure Risk",
      description:
        "Cats with HCM may suddenly develop respiratory distress due to fluid accumulation."
    },

    {
      id:"thromboembolism",
      title:"Arterial Thromboembolism Risk",
      description:
        "Blood clots may form in the enlarged left atrium and travel to systemic arteries."

    }

  ],

  prognosis:
    "Prognosis varies widely. Some cats remain stable for years, while others develop heart failure or thromboembolic complications. Regular monitoring improves early detection of progression.",

  strengtheningEvidence:[

    "Echocardiographic myocardial thickening",

    "Left atrial enlargement",

    "Congestive heart failure signs",

    "Thromboembolism history"

  ],

  weakeningEvidence:[

    "Normal cardiac imaging",

    "No cardiac abnormalities",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Heart murmur",

    "Respiratory distress",

    "Left ventricular thickening",

    "Hind limb paralysis from clot"

  ],

  ruleOutFindings:[

    "Restrictive cardiomyopathy",

    "Dilated cardiomyopathy",

    "Hyperthyroidism-associated heart disease",

    "Congenital heart disease",

    "Pleural disease"

  ],

};