import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineMammaryTumor: DiseaseCard = {
  id: "feline-mammary-tumor-cat",

  title: "Feline Mammary Gland Tumour",

  description:
    "A neoplastic condition affecting mammary tissue in cats, with the majority of feline mammary tumours being malignant carcinomas.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Mammary Carcinoma",
    "Mammary Adenocarcinoma",
    "Breast Cancer in Cats",
    "Mammary Neoplasia",
  ],

  overview:
    "Mammary gland tumours are among the most common cancers in female cats. Unlike dogs, most feline mammary tumours are malignant and have a high tendency for local invasion and metastasis, particularly to regional lymph nodes and lungs. Risk is influenced by hormonal exposure, with early ovariohysterectomy reducing the risk of mammary tumour development.",

  clinicalProblems:[

    "Mammary mass formation",
    "Malignant tumour growth",
    "Local tissue invasion",
    "Metastasis risk",
    "Pain and inflammation",
    "Reduced quality of life"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age, reproductive status, hormonal exposure, previous mammary masses, and rate of growth."
    },

    {
      id:"physical-exam",
      step:2,
      title:"Mammary Examination",
      description:
        "Evaluate size, location, number, consistency, ulceration, and attachment of mammary masses."
    },

    {
      id:"sampling",
      step:3,
      title:"Tumour Sampling",
      description:
        "Perform cytology or biopsy to determine tumour type."
    },

    {
      id:"staging",
      step:4,
      title:"Cancer Staging",
      description:
        "Assess lymph nodes and distant metastasis before treatment planning."
    },

    {
      id:"management",
      step:5,
      title:"Treatment Planning",
      description:
        "Determine surgical and supportive management based on tumour stage."

    }

  ],

  diagnostics:[

    {
      id:"physical-examination",
      name:"Mammary Examination",
      priority:"Essential",
      reason:
        "Identifies mammary masses and evaluates tumour characteristics."
    },

    {
      id:"cytology",
      name:"Fine Needle Aspiration Cytology",
      priority:"Recommended",
      reason:
        "Provides preliminary evaluation of mammary cells."
    },

    {
      id:"histopathology",
      name:"Histopathology",
      priority:"Essential",
      reason:
        "Confirms tumour type and malignancy."
    },

    {
      id:"thoracic-imaging",
      name:"Thoracic Imaging",
      priority:"Recommended",
      reason:
        "Evaluates pulmonary metastasis."

    },

    {
      id:"lymph-node-evaluation",
      name:"Regional Lymph Node Assessment",
      priority:"Recommended",
      reason:
        "Checks tumour spread."

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

    "Assess tumour size and progression.",
    "Evaluate for metastasis.",
    "Control pain and inflammation.",
    "Determine surgical suitability.",
    "Monitor quality of life."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Older female cat", weight:60 },

      { finding:"Intact reproductive status", weight:55 },

      { finding:"History of mammary mass", weight:75 },

      { finding:"Rapid mass enlargement", weight:80 }

    ],

    clinicalSigns:[

      { finding:"Mammary lump", weight:95 },

      { finding:"Multiple mammary nodules", weight:75 },

      { finding:"Ulcerated mammary mass", weight:80 },

      { finding:"Pain or discomfort", weight:60 },

      { finding:"Weight loss in advanced disease", weight:55 },

      { finding:"Regional lymph node enlargement", weight:70 }

    ],

    biochemistry:[

      { finding:"Usually non-specific changes", weight:20 },

      { finding:"Changes due to metastatic disease", weight:45 }

    ],

    imaging:[

      { finding:"Pulmonary metastatic lesions", weight:85 },

      { finding:"Regional lymph node enlargement", weight:70 },

      { finding:"Local tissue invasion", weight:75 }

    ],

    supports:[

      { finding:"Histopathology confirming carcinoma", weight:100 },

      { finding:"Firm mammary mass", weight:85 },

      { finding:"Rapid growth", weight:80 },

      { finding:"Metastatic lesions", weight:90 }

    ],

    against:[

      { finding:"No mammary abnormality", weight:-70 },

      { finding:"Benign lesion confirmed", weight:-50 },

      { finding:"Alternative tumour diagnosis", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"tumour-size",
      parameter:"Tumour size and progression",
      frequency:"Regular examination",
      reason:
        "Detects growth or recurrence."
    },

    {
      id:"metastasis",
      parameter:"Metastatic disease evaluation",
      frequency:"Follow-up staging",
      reason:
        "Monitors disease spread."
    },

    {
      id:"quality-life",
      parameter:"Quality of life",
      frequency:"Continuous",
      reason:
        "Guides treatment decisions."

    }

  ],

  precautions:[

    {
      id:"malignancy",
      title:"High Malignancy Rate in Cats",
      description:
        "Most feline mammary tumours are malignant and require early evaluation."
    },

    {
      id:"early-treatment",
      title:"Early Detection Improves Outcome",
      description:
        "Small tumours generally have better prognosis compared with advanced disease."

    }

  ],

  prognosis:
    "Prognosis depends on tumour size, histologic type, lymph node involvement, metastasis, and early intervention. Smaller tumours treated before spread generally have better outcomes.",

  strengtheningEvidence:[

    "Mammary mass",

    "Rapid tumour growth",

    "Histopathology confirmation",

    "Metastatic lesions"

  ],

  weakeningEvidence:[

    "No mammary lesion",

    "Benign mammary change",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Firm mammary lump",

    "Multiple nodules",

    "Older female cat",

    "Rapid enlargement"

  ],

  ruleOutFindings:[

    "Mammary hyperplasia",

    "Mastitis",

    "Benign mammary tumour",

    "Abscess",

    "Other skin masses"

  ],

};