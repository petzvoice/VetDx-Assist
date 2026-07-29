import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineBronchitis: DiseaseCard = {
  id: "canine-bronchitis-dog",

  title: "Canine Bronchitis",

  description:
    "An inflammatory disease of the bronchi causing persistent cough and airway irritation in dogs, commonly associated with chronic airway inflammation.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Chronic Bronchitis",
    "Canine Chronic Inflammatory Airway Disease",
    "Inflammatory Bronchial Disease",
  ],

  overview:
    "Canine bronchitis is characterized by inflammation of the bronchial airways leading to chronic cough and excessive mucus production. Chronic bronchitis is defined by persistent cough for most days over a prolonged period without another identifiable cause. It may occur due to airway irritation, infectious triggers, environmental factors, or hypersensitivity responses. Small breed and middle-aged to older dogs are commonly affected.",

  clinicalProblems: [

    "Chronic cough",
    "Exercise intolerance",
    "Increased respiratory effort",
    "Airway inflammation",
    "Mucus accumulation",
    "Wheezing",
    "Reduced activity",
    "Secondary bacterial infection"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess respiratory pattern, cough characteristics, airway sounds, and determine severity of respiratory compromise."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform thoracic imaging and airway diagnostics to exclude infectious, cardiac, and structural airway diseases."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Provide airway management using anti-inflammatory therapy, bronchodilators, and environmental modification."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor cough severity, respiratory effort, exercise tolerance, and secondary infection."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Manage chronic airway inflammation through weight control, environmental modification, and ongoing therapy."
    }

  ],

  diagnostics: [

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Evaluates bronchial patterns and excludes cardiac or pulmonary diseases."
    },

    {
      id: "airway-cytology",
      name: "Airway Cytology",
      priority: "Recommended",
      reason:
        "Identifies inflammatory cell patterns and airway changes."
    },

    {
      id: "bronchoscopy",
      name: "Bronchoscopy",
      priority: "Recommended",
      reason:
        "Allows visualization of airway abnormalities and sample collection."
    },

    {
      id: "airway-culture",
      name: "Airway Culture",
      priority: "Recommended",
      reason:
        "Detects secondary bacterial infection when indicated."
    },

    {
      id: "cardiac-evaluation",
      name: "Cardiac Evaluation",
      priority: "Recommended",
      reason:
        "Helps differentiate cardiac causes of chronic cough."
    }

  ],

  drugCategories: [
    {
      category: "Corticosteroid",
      indication: "Airway inflammation",
      reason: "Reduces bronchial inflammation and mucus production."
    },
    {
      category: "Bronchodilator",
      indication: "Airway narrowing",
      reason: "Improves airflow through dilated bronchi."
    },
    {
      category: "Antitussive",
      indication: "Non-productive cough",
      reason: "Reduces excessive coughing when appropriate."
    },
    {
      category: "Antibiotic",
      indication: "Secondary bacterial infection",
      reason: "Treats documented or suspected bacterial complications."
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
      drugId: "doxycycline",
      priority: "Alternative",
      category: "Antibiotic",
    },
  ],

  stabilization: [
    "Assess respiratory distress and oxygen requirement.",
    "Reduce exposure to airway irritants such as smoke and aerosols.",
    "Provide oxygen support if severe respiratory compromise occurs.",
    "Maintain appropriate body weight to reduce respiratory workload."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Chronic cough history", weight: 45 },
      { finding: "Environmental irritant exposure", weight: 25 },
    ],

    clinicalSigns: [
      { finding: "Persistent cough", weight: 45 },
      { finding: "Exercise intolerance", weight: 25 },
      { finding: "Increased respiratory effort", weight: 30 },
      { finding: "Wheezing", weight: 25 },
    ],

    biochemistry: [
      { finding: "Usually normal laboratory findings", weight: 10 },
    ],

    urinalysis: [

    ],

    supports: [
      { finding: "Bronchial pattern on radiographs", weight: 40 },
      { finding: "Airway neutrophilic inflammation", weight: 35 },
      { finding: "Chronic cough without infection", weight: 35 },
    ],

    against: [
      { finding: "Acute severe fever", weight: -25 },
      { finding: "Confirmed cardiac disease", weight: -35 },
    ],
  },

  monitoring: [

    {
      id:"cough",
      parameter:
        "Cough frequency and severity",
      frequency:
        "Daily assessment by owner",
      reason:
        "Evaluates response to therapy."
    },

    {
      id:"respiratory",
      parameter:
        "Respiratory rate and effort",
      frequency:
        "Regular monitoring",
      reason:
        "Detects progression of airway disease."
    },

    {
      id:"weight",
      parameter:
        "Body weight",
      frequency:
        "Monthly",
      reason:
        "Weight management improves respiratory function."
    }

  ],

  precautions: [

    {
      id:"steroid-use",
      title:
        "Long-Term Corticosteroid Monitoring",
      description:
        "Monitor patients receiving prolonged corticosteroid therapy for adverse effects."
    },

    {
      id:"irritants",
      title:
        "Environmental Irritants",
      description:
        "Avoid smoke, dust, aerosols, and other airway irritants that worsen coughing."
    }

  ],

  prognosis:
    "Canine bronchitis is a chronic condition that can often be managed successfully but may not be completely cured. Prognosis is generally good with appropriate long-term management, although severe airway disease may result in progressive respiratory compromise.",

  strengtheningEvidence: [

    "Chronic non-productive cough",

    "Bronchial pattern on thoracic radiographs",

    "Airway inflammation",

    "Exercise intolerance",

    "Improvement with anti-inflammatory therapy",

    "Absence of cardiac disease"

  ],

  weakeningEvidence: [

    "Acute onset cough",

    "High fever",

    "Severe systemic illness",

    "Confirmed cardiac disease",

    "Pulmonary mass identified"

  ],

  classicFindings: [

    "Persistent cough",

    "Middle-aged or older dog",

    "Bronchial radiographic pattern",

    "Exercise intolerance",

    "Mucus production",

    "Airway inflammation",

    "Response to corticosteroids"

  ],

  ruleOutFindings: [

    "Congestive heart failure",

    "Tracheal collapse",

    "Pulmonary neoplasia",

    "Pneumonia",

    "Foreign body airway disease"

  ],

};