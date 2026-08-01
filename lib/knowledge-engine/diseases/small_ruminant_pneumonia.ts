import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantPneumonia: DiseaseCard = {
  id: "small-ruminant-pneumonia",

  title: "Small Ruminant Pneumonia",

  description:
    "A common respiratory disease complex of sheep and goats caused by bacterial, viral, mycoplasmal, or parasitic pathogens, resulting in bronchopneumonia, respiratory distress, reduced productivity, and mortality.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Bronchopneumonia",
    "Respiratory Disease Complex",
    "Enzootic Pneumonia",
  ],

  overview:
    "Pneumonia in sheep and goats is a multifactorial disease involving infectious agents, environmental stressors, poor ventilation, transportation, overcrowding, and nutritional deficiencies. Common bacterial pathogens include Mannheimia haemolytica, Pasteurella multocida, and Bibersteinia trehalosi, while viral and mycoplasmal infections often predispose animals to secondary bacterial pneumonia.",

  clinicalProblems: [

    "Bronchopneumonia",
    "Respiratory distress",
    "Fever",
    "Reduced feed intake",
    "Weight loss",
    "Mortality"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent transport, weather changes, overcrowding, ventilation, vaccination status, and previous respiratory disease."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate respiratory effort, cough, nasal discharge, lung sounds, fever, and hydration status."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Perform laboratory testing, thoracic imaging, or pathogen identification when indicated."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Control",
      description:
        "Provide antimicrobial therapy, supportive care, and improve environmental conditions."
    }

  ],

  diagnostics: [

    {
      id: "physical-examination",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Identifies respiratory disease severity."
    },

    {
      id: "thoracic-ultrasound",
      name: "Thoracic Ultrasonography",
      priority: "Recommended",
      reason:
        "Detects lung consolidation and pleural disease."
    },

    {
      id: "tracheal-sample",
      name: "Culture and PCR",
      priority: "Recommended",
      reason:
        "Identifies the causative pathogen."
    },

    {
      id: "radiography",
      name: "Thoracic Radiography",
      priority: "Recommended",
      reason:
        "Evaluates pulmonary lesions when available."
    }

  ],

  drugCategories: [

    {
      category: "Antimicrobials",
      indication: "Bacterial pneumonia",
      reason:
        "Controls bacterial infection."
    },

    {
      category: "NSAIDs",
      indication: "Fever and inflammation",
      reason:
        "Improves comfort and reduces pulmonary inflammation."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration and systemic illness",
      reason:
        "Maintains hydration and tissue perfusion."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "oxytetracycline",
      priority: "First Line",
      category: "Antibiotic"
    },

    {
      drugId: "florfenicol",
      priority: "Alternative",
      category: "Antibiotic"
    },

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Isolate affected animals.",
    "Provide antimicrobial therapy.",
    "Administer NSAIDs for fever and inflammation.",
    "Correct dehydration.",
    "Improve ventilation and reduce stress.",
    "Provide high-quality nutrition."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent transportation or environmental stress",
        weight: 85
      },

      {
        finding: "Poor ventilation",
        weight: 90
      },

      {
        finding: "Respiratory disease outbreak in flock",
        weight: 95
      }

    ],

    clinicalSigns: [

      {
        finding: "Cough",
        weight: 90
      },

      {
        finding: "Fever",
        weight: 85
      },

      {
        finding: "Nasal discharge",
        weight: 80
      },

      {
        finding: "Increased respiratory effort",
        weight: 95
      },

      {
        finding: "Abnormal lung sounds",
        weight: 95
      }

    ],

    biochemistry: [

      {
        finding: "Inflammatory leukogram",
        weight: 60
      }

    ],

    imaging: [

      {
        finding: "Pulmonary consolidation",
        weight: 90
      },

      {
        finding: "Pleural effusion",
        weight: 70
      }

    ],

    supports: [

      {
        finding: "Positive bacterial culture or PCR",
        weight: 90
      },

      {
        finding: "Characteristic thoracic imaging findings",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Normal respiratory examination",
        weight: -70
      },

      {
        finding: "Alternative non-respiratory disease confirmed",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "temperature",
      parameter: "Rectal temperature",
      frequency: "Daily",
      reason:
        "Monitors response to antimicrobial therapy and progression of infection."
    },

    {
      id: "respiratory-status",
      parameter: "Respiratory rate, effort, and lung sounds",
      frequency: "Daily or more frequently in severe cases",
      reason:
        "Assesses severity of pneumonia and treatment response."
    },

    {
      id: "feed-intake",
      parameter: "Appetite, water intake, and body condition",
      frequency: "Daily",
      reason:
        "Evaluates recovery and nutritional status."
    },

    {
      id: "hydration",
      parameter: "Hydration status",
      frequency: "Daily",
      reason:
        "Guides fluid therapy and detects dehydration."
    },

    {
      id: "flock-surveillance",
      parameter: "New respiratory cases and mortality",
      frequency: "Continuous during outbreaks",
      reason:
        "Evaluates disease spread and effectiveness of control measures."

    }

  ],

  precautions: [

    {
      id: "ventilation",
      title: "Adequate Ventilation",
      description:
        "Maintain good airflow while minimizing drafts to reduce respiratory disease risk."
    },

    {
      id: "biosecurity",
      title: "Biosecurity",
      description:
        "Quarantine newly introduced animals and isolate clinically affected individuals."
    },

    {
      id: "vaccination",
      title: "Vaccination",
      description:
        "Implement vaccination programs against important respiratory pathogens where appropriate."
    },

    {
      id: "stress-reduction",
      title: "Stress Reduction",
      description:
        "Minimize overcrowding, transportation stress, abrupt weather exposure, and nutritional deficiencies."

    }

  ],

  prognosis:
    "Prognosis is generally good with early diagnosis and appropriate therapy. Severe bronchopneumonia, pleuropneumonia, or delayed treatment may result in chronic lung damage or death.",

  strengtheningEvidence: [

    "Fever with respiratory distress",

    "Abnormal lung sounds",

    "Pulmonary consolidation on imaging",

    "Positive bacterial culture or PCR"

  ],

  weakeningEvidence: [

    "Normal thoracic examination",

    "Normal thoracic imaging",

    "Alternative diagnosis confirmed"

  ],

  classicFindings: [

    "Fever",

    "Cough",

    "Nasal discharge",

    "Tachypnea",

    "Crackles or wheezes on auscultation"

  ],

  ruleOutFindings: [

    "Contagious caprine pleuropneumonia",

    "Peste des petits ruminants",

    "Lungworm infection",

    "Pulmonary edema",

    "Aspiration pneumonia",

    "Cardiac disease"

  ],

};