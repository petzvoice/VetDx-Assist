import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineDiaphragmaticHernia: DiseaseCard = {
  id: "bovine-diaphragmatic-hernia",

  title: "Diaphragmatic Hernia",

  description:
    "A condition in cattle characterized by displacement of abdominal organs through a defect or tear in the diaphragm into the thoracic cavity, resulting in respiratory compromise, digestive disturbances, and reduced production.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Diaphragmatic Rupture",
    "Traumatic Diaphragmatic Hernia",
    "Diaphragm Tear",
  ],

  overview:
    "Diaphragmatic hernia is an uncommon but important surgical condition in cattle, especially high-producing adult animals. It occurs when abdominal viscera, most commonly the reticulum, pass through a defect in the diaphragm into the thoracic cavity. Traumatic causes such as foreign body penetration from traumatic reticuloperitonitis (hardware disease), increased abdominal pressure, and parturition-related stress may contribute. Herniation can interfere with lung expansion and gastrointestinal function, leading to respiratory signs, reduced feed intake, and decreased productivity.",

  clinicalProblems: [

    "Respiratory difficulty",
    "Reduced feed intake",
    "Poor production",
    "Digestive disturbances",
    "Abdominal organ displacement",
    "Reduced quality of life"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess age, production status, history of traumatic reticuloperitonitis, reduced milk yield, appetite changes, and respiratory signs."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate respiratory pattern, rumen activity, heart sounds, digestive function, and general health status."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Use imaging techniques to identify displacement of abdominal organs and diaphragmatic defects."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Management",
      description:
        "Provide supportive care, manage underlying causes, and consider surgical correction in suitable cases."
    }

  ],

  diagnostics: [

    {
      id: "ultrasonography",
      name: "Thoracic and Abdominal Ultrasonography",
      priority: "Essential",
      reason:
        "Helps identify displaced organs, fluid accumulation, and diaphragmatic abnormalities."
    },

    {
      id: "radiography",
      name: "Radiography",
      priority: "Recommended",
      reason:
        "May demonstrate organ displacement and thoracic abnormalities."
    },

    {
      id: "clinical-examination",
      name: "Physical Examination",
      priority: "Essential",
      reason:
        "Identifies respiratory and digestive abnormalities."
    },

    {
      id: "laparotomy-exploration",
      name: "Exploratory Surgery",
      priority: "Recommended",
      reason:
        "May confirm diagnosis and allow correction in selected cases."
    }

  ],

  drugCategories: [

    {
      category: "NSAIDs",
      indication: "Pain and inflammation control",
      reason:
        "Provides supportive treatment in inflammatory conditions."
    },

    {
      category: "Antimicrobials",
      indication: "Secondary infection or traumatic reticuloperitonitis",
      reason:
        "Treats bacterial complications when present."
    },

    {
      category: "Supportive Therapy",
      indication: "Reduced intake and weakness",
      reason:
        "Maintains hydration and nutritional status."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "flunixin",
      priority: "Supportive",
      category: "NSAIDs"
    },

    {
      drugId: "antibiotics",
      priority: "Conditional",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Assess respiratory distress severity.",
    "Provide supportive care and maintain hydration.",
    "Evaluate for traumatic reticuloperitonitis.",
    "Reduce stress and handling in compromised animals.",
    "Correct underlying gastrointestinal problems.",
    "Consider surgical intervention in selected valuable animals."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Adult cattle with reduced production",
        weight: 80
      },

      {
        finding: "History of traumatic reticuloperitonitis",
        weight: 95
      },

      {
        finding: "Chronic weight loss",
        weight: 75
      },

      {
        finding: "Recent calving or increased abdominal pressure",
        weight: 60
      }

    ],

    clinicalSigns: [

      {
        finding: "Respiratory difficulty",
        weight: 90
      },

      {
        finding: "Reduced appetite",
        weight: 80
      },

      {
        finding: "Decreased milk production",
        weight: 75
      },

      {
        finding: "Abnormal thoracic sounds",
        weight: 70
      }

    ],

    biochemistry: [

      {
        finding: "Inflammatory changes due to associated disease",
        weight: 40
      }

    ],

    imaging: [

      {
        finding: "Abdominal organs visualized within thorax",
        weight: 100
      },

      {
        finding: "Diaphragmatic defect on imaging",
        weight: 100
      }

    ],

    supports: [

      {
        finding: "Imaging confirmation of herniated organs",
        weight: 100
      },

      {
        finding: "Respiratory signs with digestive abnormalities",
        weight: 85
      }

    ],

    against: [

      {
        finding: "Normal diaphragm examination",
        weight: -90
      },

      {
        finding: "Alternative respiratory disease confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "respiratory-status",
      parameter: "Respiratory rate, effort, and signs of distress",
      frequency: "Daily or more frequently in severe cases",
      reason:
        "Monitors respiratory compromise caused by organ displacement."
    },

    {
      id: "feed-intake",
      parameter: "Feed intake, rumination, and body condition",
      frequency: "Daily",
      reason:
        "Evaluates digestive function and nutritional status."
    },

    {
      id: "milk-production",
      parameter: "Milk yield and production changes",
      frequency: "Daily in lactating cattle",
      reason:
        "Assesses economic impact and recovery."
    },

    {
      id: "pain-assessment",
      parameter: "Signs of abdominal discomfort or pain",
      frequency: "Daily",
      reason:
        "Identifies ongoing inflammation or associated disease."
    },

    {
      id: "underlying-cause",
      parameter: "Signs of traumatic reticuloperitonitis or infection",
      frequency: "During treatment period",
      reason:
        "Ensures associated conditions are managed."
    }

  ],

  precautions: [

    {
      id: "foreign-body-prevention",
      title: "Prevent Hardware Disease",
      description:
        "Reduce exposure to metallic foreign materials in feed and maintain good feeding management."
    },

    {
      id: "early-detection",
      title: "Early Recognition of Reticuloperitonitis",
      description:
        "Prompt diagnosis and management of traumatic reticuloperitonitis may reduce complications."
    },

    {
      id: "careful-handling",
      title: "Minimize Stress During Handling",
      description:
        "Avoid excessive stress in animals with respiratory compromise."
    },

    {
      id: "surgical-evaluation",
      title: "Evaluate Surgical Options",
      description:
        "Consider correction in valuable animals based on severity, location, and overall health."
    },

    {
      id: "herd-management",
      title: "Maintain Good Herd Management",
      description:
        "Optimize nutrition and reduce factors contributing to digestive and traumatic disorders."
    }

  ],

  prognosis:
    "Prognosis depends on the size and location of the diaphragmatic defect, severity of organ displacement, respiratory compromise, and underlying disease. Mild cases may be managed supportively, while severe cases involving extensive herniation often have a guarded prognosis.",

  strengtheningEvidence: [

    "Imaging confirmation of abdominal organs in thoracic cavity",

    "History of traumatic reticuloperitonitis",

    "Respiratory signs with digestive dysfunction",

    "Reduced production with chronic progression"

  ],

  weakeningEvidence: [

    "Normal diaphragm imaging",

    "No evidence of organ displacement",

    "Alternative respiratory disease identified"

  ],

  classicFindings: [

    "Dyspnea",

    "Reduced feed intake",

    "Weight loss",

    "Reduced milk production",

    "Thoracic organ displacement"

  ],

  ruleOutFindings: [

    "Pneumonia",

    "Pleuropneumonia",

    "Traumatic reticuloperitonitis without hernia",

    "Pericarditis",

    "Abdominal tympany"

  ],

};