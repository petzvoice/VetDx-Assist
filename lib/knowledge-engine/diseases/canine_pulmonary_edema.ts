import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePulmonaryEdema: DiseaseCard = {
  id: "canine-pulmonary-edema-dog",

  title: "Canine Pulmonary Edema",

  description:
    "Accumulation of fluid within the pulmonary interstitium and alveoli causing impaired gas exchange and respiratory distress in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Pulmonary Edema",
    "Cardiogenic Pulmonary Edema",
    "Non-Cardiogenic Pulmonary Edema",
  ],

  overview:
    "Canine pulmonary edema occurs when fluid accumulates within lung tissue and alveolar spaces, interfering with normal oxygen exchange. It may be caused by increased hydrostatic pressure, commonly due to left-sided congestive heart failure, or by increased vascular permeability from conditions such as trauma, inflammation, toxins, or near drowning. Severe pulmonary edema can rapidly progress to life-threatening respiratory failure.",

  clinicalProblems: [

    "Acute respiratory distress",
    "Tachypnea",
    "Cough",
    "Exercise intolerance",
    "Open-mouth breathing",
    "Cyanosis",
    "Weakness",
    "Hypoxemia"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Rapidly assess respiratory distress, oxygenation, cardiovascular status, and stabilize the patient."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Differentiate cardiogenic and non-cardiogenic causes using imaging and cardiovascular evaluation."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Provide oxygen therapy, reduce pulmonary fluid accumulation, and treat the underlying cause."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory function, oxygenation, cardiac status, and treatment response."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Manage underlying cardiac or systemic disease to prevent recurrence."
    }

  ],

  diagnostics: [

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Identifies pulmonary edema patterns and helps determine underlying cardiac involvement."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Recommended",
      reason:
        "Evaluates cardiac function and identifies cardiac causes of pulmonary edema."
    },

    {
      id: "blood-gas",
      name: "Blood Gas Analysis",
      priority: "Recommended",
      reason:
        "Assesses oxygenation and severity of respiratory compromise."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates systemic health and underlying disease."
    },

    {
      id: "blood-pressure",
      name: "Blood Pressure Measurement",
      priority: "Recommended",
      reason:
        "Assesses cardiovascular status and contributing factors."
    }

  ],

  drugCategories: [
    {
      category: "Diuretic",
      indication: "Fluid accumulation",
      reason: "Reduces pulmonary fluid overload."
    },
    {
      category: "Cardiovascular Drug",
      indication: "Cardiac-related pulmonary edema",
      reason: "Improves cardiac function and reduces congestion."
    },
    {
      category: "Oxygen Therapy",
      indication: "Hypoxemia",
      reason: "Improves oxygen delivery."
    },
    {
      category: "Sedative",
      indication: "Severe respiratory distress",
      reason: "Reduces anxiety and oxygen demand."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "furosemide",
      priority: "First Line",
      category: "Diuretic",
    },
    {
      drugId: "pimobendan",
      priority: "Adjunctive",
      category: "Cardiovascular",
    },
    {
      drugId: "enalapril",
      priority: "Adjunctive",
      category: "Cardiovascular",
    },
  ],

  stabilization: [
    "Provide immediate oxygen supplementation.",
    "Minimize stress and unnecessary handling.",
    "Place patient in a comfortable position to improve breathing.",
    "Initiate treatment to reduce pulmonary fluid accumulation."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Known cardiac disease", weight: 40 },
      { finding: "Recent toxin exposure or trauma", weight: 25 },
    ],

    clinicalSigns: [
      { finding: "Tachypnea", weight: 40 },
      { finding: "Respiratory distress", weight: 50 },
      { finding: "Cough", weight: 25 },
      { finding: "Cyanosis", weight: 35 },
    ],

    biochemistry: [
      { finding: "Elevated cardiac biomarkers", weight: 20 },
    ],

    urinalysis: [

    ],

    supports: [
      { finding: "Pulmonary alveolar pattern on radiographs", weight: 50 },
      { finding: "Cardiac enlargement", weight: 35 },
      { finding: "Response to diuretic therapy", weight: 30 },
    ],

    against: [
      { finding: "Normal thoracic radiographs", weight: -45 },
      { finding: "Alternative respiratory disease confirmed", weight: -30 },
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
        "Detects improvement or worsening respiratory status."
    },

    {
      id:"oxygenation",
      parameter:
        "Oxygen saturation",
      frequency:
        "Continuous during oxygen therapy",
      reason:
        "Evaluates adequacy of oxygen support."
    },

    {
      id:"fluid",
      parameter:
        "Body weight and hydration status",
      frequency:
        "Daily during hospitalization",
      reason:
        "Monitors fluid balance and diuretic response."
    }

  ],

  precautions: [

    {
      id:"stress",
      title:
        "Avoid Stress",
      description:
        "Stress and excessive handling increase oxygen demand and may worsen respiratory distress."
    },

    {
      id:"diuretic-monitoring",
      title:
        "Monitor Diuretic Therapy",
      description:
        "Monitor renal function and hydration status during diuretic treatment."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause and severity of respiratory compromise. Cardiogenic pulmonary edema associated with severe heart disease carries a guarded prognosis, while reversible non-cardiogenic causes may have better outcomes.",

  strengtheningEvidence: [

    "Acute respiratory distress",

    "Pulmonary edema pattern on radiographs",

    "Cardiac disease history",

    "Hypoxemia",

    "Positive response to diuretics",

    "Echocardiographic evidence of heart disease"

  ],

  weakeningEvidence: [

    "Normal thoracic radiographs",

    "No respiratory signs",

    "Alternative confirmed airway disease",

    "Normal cardiac evaluation",

    "No evidence of fluid accumulation"

  ],

  classicFindings: [

    "Sudden respiratory distress",

    "Tachypnea",

    "Cough",

    "Pulmonary infiltrates",

    "Hypoxemia",

    "Cardiac disease",

    "Improvement with oxygen and diuretics"

  ],

  ruleOutFindings: [

    "Pneumonia",

    "Tracheal collapse",

    "Laryngeal paralysis",

    "Pulmonary thromboembolism",

    "Pleural effusion"

  ],

};