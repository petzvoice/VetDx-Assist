import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePulmonaryThromboembolism: DiseaseCard = {
  id: "canine-pulmonary-thromboembolism-dog",

  title: "Canine Pulmonary Thromboembolism",

  description:
    "A life-threatening vascular disorder caused by obstruction of pulmonary arteries by thrombi, resulting in impaired pulmonary circulation and respiratory compromise in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Pulmonary Thromboembolism",
    "PTE",
    "Pulmonary Embolism",
  ],

  overview:
    "Canine pulmonary thromboembolism occurs when blood clots obstruct pulmonary arteries, reducing pulmonary blood flow and impairing oxygen exchange. It is commonly associated with hypercoagulable states including immune-mediated disease, neoplasia, protein-losing disorders, sepsis, and severe systemic inflammation. Clinical signs vary from mild respiratory abnormalities to acute respiratory collapse and death.",

  clinicalProblems: [

    "Acute respiratory distress",
    "Tachypnea",
    "Exercise intolerance",
    "Cyanosis",
    "Weakness",
    "Syncope",
    "Tachycardia",
    "Pulmonary hypertension"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess respiratory distress, oxygenation, cardiovascular stability, and initiate emergency support."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Evaluate pulmonary circulation, coagulation status, and underlying diseases causing hypercoagulability."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Provide oxygen support, anticoagulant therapy, and treatment of the underlying condition."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory function, coagulation parameters, and progression of pulmonary hypertension."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Continue anticoagulation when indicated and manage underlying predispositions."
    }

  ],

  diagnostics: [

    {
      id: "blood-gas",
      name: "Arterial Blood Gas Analysis",
      priority: "Essential",
      reason:
        "Evaluates oxygenation abnormalities associated with pulmonary vascular obstruction."
    },

    {
      id: "coagulation-profile",
      name: "Coagulation Testing",
      priority: "Essential",
      reason:
        "Assesses clotting abnormalities and hypercoagulable states."
    },

    {
      id: "thoracic-imaging",
      name: "Thoracic Imaging",
      priority: "Recommended",
      reason:
        "Evaluates pulmonary changes and excludes other respiratory diseases."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Recommended",
      reason:
        "Assesses pulmonary hypertension and right-sided cardiac changes."
    },

    {
      id: "d-dimer",
      name: "D-dimer Testing",
      priority: "Recommended",
      reason:
        "Supports evaluation of active clot formation and breakdown."
    }

  ],

  drugCategories: [
    {
      category: "Anticoagulant",
      indication: "Thrombus formation",
      reason: "Prevents extension of existing thrombi and formation of new clots."
    },
    {
      category: "Antiplatelet",
      indication: "Thrombotic risk reduction",
      reason: "Reduces platelet-mediated clot formation."
    },
    {
      category: "Oxygen Therapy",
      indication: "Hypoxemia",
      reason: "Improves oxygen delivery."
    },
    {
      category: "Supportive Therapy",
      indication: "Underlying disease",
      reason: "Treats contributing conditions."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "clopidogrel",
      priority: "Antithrombotic",
      category: "Antiplatelet",
    },
    {
      drugId: "heparin",
      priority: "Emergency",
      category: "Anticoagulant",
    },
    
  ],

  stabilization: [
    "Provide immediate oxygen supplementation.",
    "Minimize stress and unnecessary handling.",
    "Stabilize cardiovascular function.",
    "Begin anticoagulant therapy when thromboembolism is strongly suspected."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Hypercoagulable disease", weight: 45 },
      { finding: "Recent surgery or severe illness", weight: 30 },
    ],

    clinicalSigns: [
      { finding: "Acute respiratory distress", weight: 50 },
      { finding: "Tachypnea", weight: 40 },
      { finding: "Cyanosis", weight: 35 },
      { finding: "Syncope", weight: 35 },
    ],

    biochemistry: [
      { finding: "Elevated D-dimer", weight: 30 },
      { finding: "Hypercoagulability abnormalities", weight: 35 },
    ],

    urinalysis: [

    ],

    supports: [
      { finding: "Pulmonary hypertension", weight: 35 },
      { finding: "Compatible coagulation abnormalities", weight: 30 },
      { finding: "Underlying thrombotic disease", weight: 40 },
      { finding: "Imaging evidence of vascular obstruction", weight: 50 },
    ],

    against: [
      { finding: "Normal respiratory evaluation", weight: -40 },
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
        "Detects changes in respiratory status."
    },

    {
      id:"coagulation",
      parameter:
        "Coagulation parameters",
      frequency:
        "During anticoagulant therapy",
      reason:
        "Monitors treatment safety and effectiveness."
    },

    {
      id:"cardiac",
      parameter:
        "Pulmonary hypertension and cardiac function",
      frequency:
        "Follow-up evaluation",
      reason:
        "Assesses cardiovascular complications."
    }

  ],

  precautions: [

    {
      id:"bleeding-risk",
      title:
        "Anticoagulant Monitoring",
      description:
        "Monitor carefully for bleeding complications during anticoagulant therapy."
    },

    {
      id:"stress",
      title:
        "Avoid Stress",
      description:
        "Stress can worsen oxygen demand and respiratory compromise."
    }

  ],

  prognosis:
    "Prognosis is variable and depends on severity, size of thrombus, underlying disease, and response to therapy. Severe respiratory compromise, pulmonary hypertension, or extensive thrombosis carries a guarded prognosis.",

  strengtheningEvidence: [

    "Acute respiratory distress",

    "Hypercoagulable disease",

    "Elevated D-dimer",

    "Pulmonary hypertension",

    "Imaging evidence of thromboembolism",

    "Response to anticoagulant therapy"

  ],

  weakeningEvidence: [

    "Normal coagulation evaluation",

    "No thrombotic risk factors",

    "Alternative confirmed respiratory disease",

    "Normal pulmonary evaluation",

    "No respiratory compromise"

  ],

  classicFindings: [

    "Sudden onset respiratory distress",

    "Tachypnea",

    "Cyanosis",

    "Hypercoagulable state",

    "Pulmonary hypertension",

    "Syncope",

    "Anticoagulant requirement"

  ],

  ruleOutFindings: [

    "Pulmonary edema",

    "Pneumonia",

    "Heartworm disease",

    "Airway obstruction",

    "Congestive heart failure"

  ],

};