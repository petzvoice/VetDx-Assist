import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePleuralEffusion: DiseaseCard = {
  id: "canine-pleural-effusion-dog",

  title: "Canine Pleural Effusion",

  description:
    "Accumulation of abnormal fluid within the pleural space causing impaired lung expansion and respiratory compromise in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Pleural Fluid Accumulation",
    "Thoracic Effusion",
    "Pleural Space Disease",
  ],

  overview:
    "Canine pleural effusion occurs when fluid accumulates between the pleural membranes surrounding the lungs. It develops due to increased hydrostatic pressure, decreased oncotic pressure, inflammation, infection, trauma, neoplasia, or lymphatic obstruction. The accumulated fluid restricts lung expansion and may result in tachypnea, respiratory distress, and hypoxemia.",

  clinicalProblems: [

    "Tachypnea",
    "Respiratory distress",
    "Exercise intolerance",
    "Cough",
    "Lethargy",
    "Reduced appetite",
    "Open-mouth breathing",
    "Cyanosis"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess respiratory compromise, oxygenation, cardiovascular stability, and determine need for emergency fluid removal."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Identify the type of pleural fluid and determine the underlying cause through imaging and fluid analysis."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Remove pleural fluid when necessary and treat the underlying disease process."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory function, recurrence of fluid accumulation, and response to treatment."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Manage underlying cardiac, infectious, inflammatory, or neoplastic causes."
    }

  ],

  diagnostics: [

    {
      id: "thoracic-imaging",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Identifies pleural fluid accumulation and evaluates thoracic abnormalities."
    },

    {
      id: "thoracocentesis",
      name: "Diagnostic Thoracocentesis",
      priority: "Essential",
      reason:
        "Provides fluid samples for classification and immediate respiratory relief."
    },

    {
      id: "fluid-analysis",
      name: "Pleural Fluid Analysis",
      priority: "Essential",
      reason:
        "Classifies effusion and helps determine underlying cause."
    },

    {
      id: "ultrasound",
      name: "Thoracic Ultrasound",
      priority: "Recommended",
      reason:
        "Detects fluid pockets and assists with sampling."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Recommended",
      reason:
        "Evaluates cardiac causes of pleural effusion."
    }

  ],

  drugCategories: [

    {
      category: "Diuretic",
      indication: "Cardiac-related effusion",
      reason:
        "Reduces fluid accumulation caused by congestive heart disease."
    },

    {
      category: "Antibiotic",
      indication: "Septic effusion",
      reason:
        "Treats bacterial infection within the pleural space."
    },

    {
      category: "Anti-inflammatory",
      indication: "Inflammatory disease",
      reason:
        "Reduces inflammatory processes when appropriate."
    },

    {
      category: "Oxygen Therapy",
      indication: "Respiratory compromise",
      reason:
        "Improves oxygenation."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "furosemide",
      priority: "First Line",
      category: "Diuretic",
    },

    {
      drugId: "amoxicillin-clavulanate",
      priority: "Supportive",
      category: "Antibiotic",
    },

    {
      drugId: "prednisolone",
      priority: "Adjunctive",
      category: "Anti-inflammatory",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation during respiratory distress.",
    "Perform thoracocentesis when fluid accumulation compromises breathing.",
    "Minimize stress and unnecessary handling.",
    "Treat shock or cardiovascular compromise if present."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Known heart disease", weight: 35 },

      { finding: "Trauma history", weight: 30 },

      { finding: "Cancer history", weight: 40 },

    ],

    clinicalSigns: [

      { finding: "Tachypnea", weight: 45 },

      { finding: "Respiratory distress", weight: 50 },

      { finding: "Reduced lung sounds", weight: 40 },

      { finding: "Exercise intolerance", weight: 25 },

    ],

    biochemistry: [

      { finding: "Low albumin", weight: 25 },

      { finding: "Inflammatory changes", weight: 20 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Pleural fluid identified on imaging", weight: 50 },

      { finding: "Abnormal pleural fluid analysis", weight: 45 },

      { finding: "Improvement after thoracocentesis", weight: 35 },

    ],

    against: [

      { finding: "Normal thoracic imaging", weight: -45 },

      { finding: "No respiratory signs", weight: -25 },

    ],

  },

  monitoring: [

    {
      id:"respiratory",
      parameter:
        "Respiratory rate and effort",
      frequency:
        "Continuous in hospitalized patients",
      reason:
        "Detects worsening respiratory compromise."
    },

    {
      id:"fluid",
      parameter:
        "Pleural fluid recurrence",
      frequency:
        "During follow-up evaluations",
      reason:
        "Monitors disease progression and treatment response."
    },

    {
      id:"oxygenation",
      parameter:
        "Oxygen saturation",
      frequency:
        "During respiratory compromise",
      reason:
        "Evaluates oxygen delivery."
    }

  ],

  precautions: [

    {
      id:"respiratory-stress",
      title:
        "Avoid Respiratory Stress",
      description:
        "Minimize handling and excitement in dogs with breathing difficulty."
    },

    {
      id:"thoracocentesis",
      title:
        "Fluid Recurrence Monitoring",
      description:
        "Monitor closely because some causes may result in repeated fluid accumulation."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause and severity of respiratory compromise. Effusions caused by treatable conditions may resolve, while neoplastic disease, severe infection, or advanced cardiac disease carries a guarded prognosis.",

  strengtheningEvidence: [

    "Pleural fluid on thoracic imaging",

    "Reduced lung sounds",

    "Respiratory distress",

    "Positive thoracocentesis findings",

    "Underlying cardiac or systemic disease",

    "Improvement after fluid removal"

  ],

  weakeningEvidence: [

    "Normal thoracic imaging",

    "No respiratory signs",

    "Alternative confirmed respiratory disease",

    "No pleural fluid detected",

    "Normal thoracic ultrasound"

  ],

  classicFindings: [

    "Tachypnea",

    "Respiratory distress",

    "Reduced lung sounds",

    "Pleural fluid accumulation",

    "Thoracocentesis required",

    "Exercise intolerance"

  ],

  ruleOutFindings: [

    "Pulmonary edema",

    "Pneumonia",

    "Tracheal collapse",

    "Pulmonary thromboembolism",

    "Upper airway obstruction"

  ],

};