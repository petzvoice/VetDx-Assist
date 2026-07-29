import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePneumonia: DiseaseCard = {
  id: "canine-pneumonia-dog",

  title: "Canine Pneumonia",

  description:
    "An inflammatory disease of the lungs caused by infectious or non-infectious processes resulting in impaired gas exchange and respiratory dysfunction in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Bronchopneumonia",
    "Aspiration Pneumonia",
    "Infectious Pneumonia",
    "Community-Acquired Pneumonia",
  ],

  overview:
    "Canine pneumonia is characterized by inflammation and consolidation of pulmonary tissue due to infectious agents, aspiration of foreign material, or inflammatory injury. Bacterial pneumonia is common in dogs, but viral, fungal, parasitic, and aspiration-related causes may also occur. Clinical severity varies from mild coughing to severe respiratory failure.",

  clinicalProblems: [

    "Cough",
    "Fever",
    "Respiratory distress",
    "Nasal discharge",
    "Lethargy",
    "Exercise intolerance",
    "Reduced appetite",
    "Hypoxemia"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess respiratory effort, oxygenation, hydration status, and severity of pulmonary involvement."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Identify pulmonary changes, determine infectious cause, and evaluate severity."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Provide antimicrobial therapy when indicated and supportive respiratory care."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor oxygenation, respiratory effort, treatment response, and development of complications."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Address predisposing factors and prevent recurrence."
    }

  ],

  diagnostics: [

    {
      id: "thoracic-radiography",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Identifies pulmonary infiltrates, consolidation, and distribution of lung lesions."
    },

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Evaluates inflammatory response and systemic involvement."
    },

    {
      id: "airway-sampling",
      name: "Airway Sampling and Cytology",
      priority: "Recommended",
      reason:
        "Identifies inflammatory cells and helps guide antimicrobial selection."
    },

    {
      id: "culture",
      name: "Bacterial Culture and Sensitivity",
      priority: "Recommended",
      reason:
        "Determines bacterial pathogens and appropriate antimicrobial therapy."
    },

    {
      id: "blood-gas",
      name: "Blood Gas Analysis",
      priority: "Recommended",
      reason:
        "Evaluates oxygenation status in severe respiratory disease."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotic",
      indication: "Bacterial pneumonia",
      reason:
        "Targets bacterial respiratory pathogens."
    },

    {
      category: "Bronchodilator",
      indication: "Airway obstruction",
      reason:
        "Improves airflow when bronchoconstriction is present."
    },

    {
      category: "Mucolytic",
      indication: "Airway secretion management",
      reason:
        "Helps reduce respiratory secretion viscosity."
    },

    {
      category: "Oxygen Therapy",
      indication: "Hypoxemia",
      reason:
        "Improves oxygen delivery."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "amoxicillin-clavulanate",
      priority: "First Line",
      category: "Antibiotic",
    },

    {
      drugId: "doxycycline",
      priority: "Alternative",
      category: "Antibiotic",
    },

    {
      drugId: "terbutaline",
      priority: "Adjunctive",
      category: "Bronchodilator",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation in dogs with respiratory compromise.",
    "Maintain hydration while avoiding fluid overload.",
    "Remove airway secretions when necessary.",
    "Minimize stress and excessive handling."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Aspiration risk", weight: 40 },

      { finding: "Recent respiratory infection", weight: 30 },

      { finding: "Immunosuppression", weight: 35 },

    ],

    clinicalSigns: [

      { finding: "Cough", weight: 35 },

      { finding: "Fever", weight: 30 },

      { finding: "Respiratory distress", weight: 45 },

      { finding: "Nasal discharge", weight: 25 },

    ],

    biochemistry: [

      { finding: "Inflammatory leukogram", weight: 30 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Pulmonary infiltrates on radiographs", weight: 50 },

      { finding: "Positive airway culture", weight: 45 },

      { finding: "Airway inflammatory cells", weight: 35 },

      { finding: "Response to antimicrobial therapy", weight: 30 },

    ],

    against: [

      { finding: "Normal thoracic radiographs", weight: -45 },

      { finding: "No respiratory signs", weight: -30 },

      { finding: "Alternative confirmed respiratory disease", weight: -25 },

    ],

  },

  monitoring: [

    {
      id:"respiratory",
      parameter:
        "Respiratory rate and effort",
      frequency:
        "Daily or continuous in severe cases",
      reason:
        "Detects worsening respiratory compromise."
    },

    {
      id:"temperature",
      parameter:
        "Body temperature",
      frequency:
        "Daily",
      reason:
        "Monitors inflammatory response and treatment response."
    },

    {
      id:"imaging",
      parameter:
        "Thoracic radiographic changes",
      frequency:
        "Follow-up evaluation",
      reason:
        "Assesses resolution of pulmonary lesions."
    }

  ],

  precautions: [

    {
      id:"oxygen",
      title:
        "Monitor Oxygen Requirement",
      description:
        "Patients with severe pneumonia may deteriorate rapidly and require oxygen support."
    },

    {
      id:"aspiration",
      title:
        "Prevent Aspiration",
      description:
        "Identify and manage conditions that increase aspiration risk."
    }

  ],

  prognosis:
    "Prognosis depends on the severity of pulmonary involvement, underlying cause, and response to treatment. Mild uncomplicated pneumonia often responds well, while severe pneumonia with respiratory failure carries a guarded prognosis.",

  strengtheningEvidence: [

    "Cough",

    "Fever",

    "Pulmonary infiltrates",

    "Positive airway culture",

    "Inflammatory leukogram",

    "Response to antimicrobial therapy"

  ],

  weakeningEvidence: [

    "Normal thoracic radiographs",

    "No respiratory abnormalities",

    "Alternative confirmed diagnosis",

    "No inflammatory evidence",

    "Non-responsive to appropriate therapy"

  ],

  classicFindings: [

    "Cough",

    "Fever",

    "Respiratory distress",

    "Pulmonary infiltrates",

    "Nasal discharge",

    "Inflammatory response"

  ],

  ruleOutFindings: [

    "Pulmonary edema",

    "Pulmonary thromboembolism",

    "Heartworm disease",

    "Tracheal collapse",

    "Pleural effusion"

  ],

};