import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineAsthma: DiseaseCard = {
  id: "canine-asthma-dog",

  title: "Canine Asthma",

  description:
    "A chronic inflammatory airway disease causing bronchoconstriction, coughing, and respiratory difficulty due to airway hypersensitivity.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Canine Allergic Airway Disease",
    "Bronchial Asthma",
    "Reactive Airway Disease",
  ],

  overview:
    "Canine asthma is a chronic inflammatory disorder of the lower airways characterized by airway hyperresponsiveness, bronchoconstriction, and reversible airflow limitation. It is commonly associated with hypersensitivity reactions to environmental allergens, inhaled irritants, or inflammatory triggers. Clinical severity ranges from intermittent coughing to severe respiratory distress.",

  clinicalProblems: [

    "Chronic cough",
    "Wheezing",
    "Dyspnea",
    "Exercise intolerance",
    "Increased respiratory effort",
    "Bronchoconstriction",
    "Airway inflammation",
    "Respiratory distress"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess respiratory effort, oxygenation status, airway sounds, and severity of respiratory compromise."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform imaging and airway diagnostics to evaluate bronchial inflammation and exclude other causes of respiratory signs."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Control airway inflammation and bronchoconstriction using appropriate anti-inflammatory and bronchodilator therapy."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory effort, cough severity, oxygenation, and response to therapy."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Reduce allergen exposure and continue chronic airway management when required."
    }

  ],

  diagnostics: [

    {
      id: "physical-exam",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Evaluates respiratory pattern, airway sounds, and severity of clinical signs."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Evaluates bronchial patterns and excludes other pulmonary diseases."
    },

    {
      id: "airway-cytology",
      name: "Airway Cytology",
      priority: "Recommended",
      reason:
        "Identifies inflammatory cell patterns within the airways."
    },

    {
      id: "bronchoscopy",
      name: "Bronchoscopy",
      priority: "Recommended",
      reason:
        "Allows direct airway evaluation and sample collection."
    },

    {
      id: "airway-culture",
      name: "Airway Culture",
      priority: "Recommended",
      reason:
        "Detects secondary bacterial infection."
    }

  ],

  drugCategories: [
    {
      category: "Bronchodilator",
      indication: "Bronchoconstriction",
      reason: "Relaxes airway smooth muscle and improves airflow."
    },
    {
      category: "Corticosteroid",
      indication: "Airway inflammation",
      reason: "Reduces inflammatory airway response."
    },
    {
      category: "Oxygen Therapy",
      indication: "Respiratory distress",
      reason: "Improves oxygenation during severe episodes."
    },
    {
      category: "Antibiotic",
      indication: "Secondary infection",
      reason: "Treats documented bacterial complications."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "prednisolone",
      priority: "First Line",
      category: "Corticosteroid",
    },
    {
      drugId: "theophylline",
      priority: "Adjunctive",
      category: "Bronchodilator",
    },
    {
      drugId: "terbutaline",
      priority: "Adjunctive",
      category: "Bronchodilator",
    },
  ],

  stabilization: [
    "Provide oxygen supplementation during severe respiratory distress.",
    "Minimize stress and unnecessary handling.",
    "Remove exposure to suspected airway irritants.",
    "Provide bronchodilator therapy when bronchoconstriction is present."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Exposure to environmental allergens", weight: 35 },
      { finding: "Intermittent respiratory episodes", weight: 40 },
    ],

    clinicalSigns: [
      { finding: "Chronic cough", weight: 35 },
      { finding: "Wheezing", weight: 40 },
      { finding: "Dyspnea", weight: 40 },
      { finding: "Exercise intolerance", weight: 25 },
    ],

    biochemistry: [
      { finding: "Usually non-specific findings", weight: 10 },
    ],

    urinalysis: [

    ],

    supports: [
      { finding: "Bronchial pattern on radiographs", weight: 40 },
      { finding: "Airway eosinophilic inflammation", weight: 45 },
      { finding: "Response to bronchodilator therapy", weight: 35 },
    ],

    against: [
      { finding: "Pulmonary infection confirmed", weight: -30 },
      { finding: "Cardiac disease confirmed", weight: -35 },
    ],
  },

  monitoring: [

    {
      id:"respiratory",
      parameter:
        "Respiratory effort and rate",
      frequency:
        "Regular monitoring",
      reason:
        "Detects worsening airway obstruction."
    },

    {
      id:"cough",
      parameter:
        "Cough frequency",
      frequency:
        "Daily assessment",
      reason:
        "Evaluates treatment response."
    },

    {
      id:"therapy",
      parameter:
        "Response and adverse effects of corticosteroid therapy",
      frequency:
        "At follow-up visits",
      reason:
        "Ensures safe long-term management."
    }

  ],

  precautions: [

    {
      id:"irritants",
      title:
        "Avoid Airway Irritants",
      description:
        "Reduce exposure to smoke, dust, perfumes, aerosols, and other inhaled irritants."
    },

    {
      id:"steroid-monitoring",
      title:
        "Corticosteroid Monitoring",
      description:
        "Monitor patients receiving prolonged corticosteroid therapy for adverse effects."
    }

  ],

  prognosis:
    "Canine asthma is generally manageable with appropriate long-term therapy and environmental control. Severe uncontrolled airway inflammation may result in progressive respiratory compromise.",

  strengtheningEvidence: [

    "Chronic intermittent cough",

    "Wheezing",

    "Bronchial pattern on radiographs",

    "Airway eosinophilic inflammation",

    "Improvement with bronchodilator therapy",

    "Environmental allergen exposure"

  ],

  weakeningEvidence: [

    "Pulmonary infection confirmed",

    "Normal airway evaluation",

    "Primary cardiac disease",

    "No respiratory signs",

    "Alternative confirmed respiratory disorder"

  ],

  classicFindings: [

    "Chronic cough",

    "Wheezing",

    "Bronchoconstriction",

    "Airway inflammation",

    "Environmental trigger exposure",

    "Response to bronchodilators"

  ],

  ruleOutFindings: [

    "Canine bronchitis",

    "Tracheal collapse",

    "Pneumonia",

    "Congestive heart failure",

    "Heartworm disease"

  ],

};