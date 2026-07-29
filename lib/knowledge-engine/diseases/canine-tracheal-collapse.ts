import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineTrachealCollapse: DiseaseCard = {
  id: "canine-tracheal-collapse-dog",

  title: "Canine Tracheal Collapse",

  description:
    "A progressive respiratory disorder caused by weakening of tracheal cartilage resulting in dynamic narrowing of the airway and chronic cough.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Tracheal Collapse",
    "Collapsing Trachea",
    "Cervical Tracheal Collapse",
    "Intrathoracic Tracheal Collapse",
  ],

  overview:
    "Canine tracheal collapse is a chronic progressive airway disease characterized by weakening and flattening of the tracheal cartilage rings and dorsal membrane intrusion into the airway lumen. It commonly affects small breed dogs and may involve cervical trachea, intrathoracic trachea, or both. Clinical signs are often worsened by excitement, exercise, heat, obesity, and airway irritation.",

  clinicalProblems: [

    "Chronic cough",
    "Honking cough",
    "Exercise intolerance",
    "Respiratory distress",
    "Cyanosis",
    "Syncope",
    "Airway inflammation",
    "Reduced activity"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Evaluate respiratory effort, oxygenation, severity of airway obstruction, and presence of respiratory distress."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform airway imaging and evaluation to confirm dynamic tracheal narrowing and exclude other causes of cough."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Manage airway inflammation, coughing, obesity, and environmental triggers using medical therapy."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory distress, progression of airway collapse, cough severity, and response to treatment."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Continue weight management, environmental control, and chronic airway therapy."
    }

  ],

  diagnostics: [

    {
      id: "physical-exam",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Evaluates cough characteristics, respiratory effort, and tracheal sensitivity."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Recommended",
      reason:
        "May identify tracheal narrowing and concurrent pulmonary disease."
    },

    {
      id: "fluoroscopy",
      name: "Dynamic Fluoroscopy",
      priority: "Essential",
      reason:
        "Evaluates dynamic airway collapse during respiration."
    },

    {
      id: "bronchoscopy",
      name: "Bronchoscopy",
      priority: "Recommended",
      reason:
        "Directly evaluates airway collapse severity and allows airway sampling."
    },

    {
      id: "cardiac-evaluation",
      name: "Cardiac Evaluation",
      priority: "Recommended",
      reason:
        "Excludes cardiac causes of chronic coughing."
    }

  ],

  drugCategories: [
    {
      category: "Antitussive",
      indication: "Cough control",
      reason: "Reduces excessive coughing and airway irritation."
    },
    {
      category: "Bronchodilator",
      indication: "Airway support",
      reason: "Improves airflow in selected patients."
    },
    {
      category: "Corticosteroid",
      indication: "Airway inflammation",
      reason: "Reduces inflammatory airway changes."
    },
    {
      category: "Sedative",
      indication: "Excitement-related coughing",
      reason: "Reduces stress-induced airway collapse."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "butorphanol",
      priority: "First Line",
      category: "Antitussive",
    },
    {
      drugId: "prednisolone",
      priority: "Adjunctive",
      category: "Corticosteroid",
    },
    {
      drugId: "theophylline",
      priority: "Adjunctive",
      category: "Bronchodilator",
    },
  ],

  stabilization: [
    "Provide oxygen supplementation in patients with respiratory distress.",
    "Minimize excitement and stress during handling.",
    "Use a harness instead of a neck collar.",
    "Reduce airway irritation and maintain a calm environment."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Small breed dog", weight: 40 },
      { finding: "Obesity", weight: 30 },
      { finding: "Cough worsened by excitement", weight: 35 },
    ],

    clinicalSigns: [
      { finding: "Honking cough", weight: 50 },
      { finding: "Tracheal sensitivity", weight: 40 },
      { finding: "Exercise intolerance", weight: 30 },
      { finding: "Respiratory distress", weight: 35 },
    ],

    biochemistry: [
      { finding: "Usually normal laboratory findings", weight: 10 },
    ],

    urinalysis: [

    ],

    supports: [
      { finding: "Dynamic tracheal collapse on fluoroscopy", weight: 50 },
      { finding: "Bronchoscopic confirmation", weight: 50 },
      { finding: "Compatible clinical signs", weight: 35 },
    ],

    against: [
      { finding: "Normal airway evaluation", weight: -40 },
      { finding: "Confirmed cardiac disease", weight: -25 },
    ],
  },

  monitoring: [

    {
      id:"cough",
      parameter:
        "Cough frequency and severity",
      frequency:
        "Daily assessment",
      reason:
        "Evaluates response to medical management."
    },

    {
      id:"respiratory",
      parameter:
        "Respiratory effort",
      frequency:
        "Regular monitoring",
      reason:
        "Detects progression of airway obstruction."
    },

    {
      id:"weight",
      parameter:
        "Body weight",
      frequency:
        "Monthly",
      reason:
        "Weight reduction improves respiratory function."
    }

  ],

  precautions: [

    {
      id:"neck-pressure",
      title:
        "Avoid Neck Pressure",
      description:
        "Avoid collars that place pressure on the trachea; use harnesses instead."
    },

    {
      id:"obesity",
      title:
        "Weight Management",
      description:
        "Obesity increases respiratory workload and worsens clinical signs."
    }

  ],

  prognosis:
    "The prognosis depends on severity and response to management. Mild to moderate cases can often be controlled medically, while severe collapse with respiratory distress may require interventional procedures and carries a guarded prognosis.",

  strengtheningEvidence: [

    "Honking cough",

    "Small breed predisposition",

    "Cough triggered by excitement",

    "Positive fluoroscopy findings",

    "Bronchoscopic confirmation",

    "Improvement with cough suppression"

  ],

  weakeningEvidence: [

    "Normal airway imaging",

    "No cough",

    "Confirmed cardiac disease",

    "Pulmonary infection identified",

    "Alternative airway disorder confirmed"

  ],

  classicFindings: [

    "Small breed dog",

    "Chronic honking cough",

    "Exercise intolerance",

    "Tracheal sensitivity",

    "Dynamic airway collapse",

    "Obesity",

    "Stress-induced coughing"

  ],

  ruleOutFindings: [

    "Congestive heart failure",

    "Canine bronchitis",

    "Pneumonia",

    "Heartworm disease",

    "Airway foreign body"

  ],

};