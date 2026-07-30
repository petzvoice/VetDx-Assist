import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePneumothorax: DiseaseCard = {
  id: "canine-pneumothorax-dog",

  title: "Canine Pneumothorax",

  description:
    "A respiratory emergency caused by accumulation of air within the pleural space resulting in reduced lung expansion and respiratory compromise in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Spontaneous Pneumothorax",
    "Traumatic Pneumothorax",
    "Pleural Air Accumulation",
  ],

  overview:
    "Canine pneumothorax occurs when air enters the pleural space, eliminating the normal negative pressure required for lung expansion. It may be caused by trauma, thoracic surgery, penetrating injuries, pulmonary disease, or spontaneous rupture of pulmonary lesions. The severity depends on the volume and rate of air accumulation and whether the condition is open, closed, or tension pneumothorax.",

  clinicalProblems: [

    "Acute respiratory distress",
    "Tachypnea",
    "Reduced lung sounds",
    "Exercise intolerance",
    "Cyanosis",
    "Weakness",
    "Collapse",
    "Hypoxemia"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess respiratory compromise, oxygenation, cardiovascular stability, and determine urgency of intervention."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm pleural air accumulation and identify the underlying cause."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Provide oxygen therapy and remove pleural air when clinically indicated."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory function, recurrence of pneumothorax, and underlying pulmonary disease."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Address underlying causes and prevent recurrence when possible."
    }

  ],

  diagnostics: [

    {
      id: "thoracic-radiography",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Confirms pleural air accumulation and evaluates lung collapse."
    },

    {
      id: "thoracic-ultrasound",
      name: "Thoracic Ultrasound",
      priority: "Recommended",
      reason:
        "Rapidly detects pleural air and assists emergency assessment."
    },

    {
      id: "ct-scan",
      name: "Thoracic CT",
      priority: "Recommended",
      reason:
        "Identifies underlying pulmonary lesions in recurrent or spontaneous cases."
    },

    {
      id: "blood-gas",
      name: "Blood Gas Analysis",
      priority: "Recommended",
      reason:
        "Evaluates severity of hypoxemia and respiratory impairment."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Assesses systemic health and trauma-related abnormalities."
    }

  ],

  drugCategories: [

    {
      category: "Oxygen Therapy",
      indication: "Hypoxemia",
      reason:
        "Improves oxygen delivery and supports respiratory function."
    },

    {
      category: "Analgesic",
      indication: "Thoracic trauma or pain",
      reason:
        "Reduces pain-associated respiratory compromise."
    },

    {
      category: "Antibiotic",
      indication: "Open thoracic injury",
      reason:
        "Prevents or treats bacterial contamination."
    },

    {
      category: "Sedative",
      indication: "Stress-related respiratory worsening",
      reason:
        "Reduces anxiety and oxygen demand."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "butorphanol",
      priority: "Supportive",
      category: "Analgesic",
    },

    {
      drugId: "amoxicillin-clavulanate",
      priority: "Supportive",
      category: "Antibiotic",
    },

    {
      drugId: "oxygen-therapy",
      priority: "First Line",
      category: "Oxygen Therapy",
    },

  ],

  stabilization: [

    "Provide immediate oxygen supplementation.",
    "Perform thoracocentesis in clinically significant pneumothorax.",
    "Minimize stress and handling.",
    "Treat shock or trauma-related complications."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Recent thoracic trauma", weight: 45 },

      { finding: "Thoracic surgery history", weight: 35 },

      { finding: "Underlying pulmonary disease", weight: 30 },

    ],

    clinicalSigns: [

      { finding: "Acute respiratory distress", weight: 50 },

      { finding: "Tachypnea", weight: 40 },

      { finding: "Reduced lung sounds", weight: 45 },

      { finding: "Cyanosis", weight: 35 },

    ],

    biochemistry: [

      { finding: "Hypoxemia", weight: 35 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Pleural air on thoracic radiographs", weight: 50 },

      { finding: "Improvement after thoracocentesis", weight: 40 },

      { finding: "Pleural air detected by ultrasound", weight: 45 },

    ],

    against: [

      { finding: "Normal thoracic imaging", weight: -50 },

      { finding: "No respiratory abnormalities", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"respiratory",
      parameter:
        "Respiratory rate and effort",
      frequency:
        "Continuous in critical patients",
      reason:
        "Detects worsening respiratory compromise."
    },

    {
      id:"recurrence",
      parameter:
        "Reaccumulation of pleural air",
      frequency:
        "Repeated evaluation when indicated",
      reason:
        "Identifies recurrence requiring intervention."
    },

    {
      id:"oxygenation",
      parameter:
        "Oxygen saturation",
      frequency:
        "During oxygen therapy",
      reason:
        "Evaluates respiratory support effectiveness."
    }

  ],

  precautions: [

    {
      id:"emergency",
      title:
        "Respiratory Emergency",
      description:
        "Pneumothorax can rapidly progress and requires immediate assessment in unstable patients."
    },

    {
      id:"stress",
      title:
        "Avoid Stress",
      description:
        "Stress and excessive handling increase oxygen demand and respiratory effort."
    }

  ],

  prognosis:
    "Prognosis depends on the severity, underlying cause, and speed of intervention. Small stable pneumothoraces may resolve with monitoring, while tension pneumothorax or severe pulmonary disease carries a guarded prognosis.",

  strengtheningEvidence: [

    "Acute respiratory distress",

    "Pleural air on imaging",

    "Reduced lung sounds",

    "Recent trauma",

    "Improvement after thoracocentesis",

    "Hypoxemia"

  ],

  weakeningEvidence: [

    "Normal thoracic imaging",

    "No respiratory signs",

    "Pleural fluid without air accumulation",

    "Alternative confirmed respiratory disease",

    "Normal oxygenation"

  ],

  classicFindings: [

    "Sudden respiratory distress",

    "Tachypnea",

    "Reduced lung sounds",

    "Pleural air accumulation",

    "Trauma history",

    "Thoracocentesis response"

  ],

  ruleOutFindings: [

    "Pleural effusion",

    "Pulmonary edema",

    "Pneumonia",

    "Pulmonary thromboembolism",

    "Tracheal collapse"

  ],

};