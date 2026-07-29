import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineChronicBronchitis: DiseaseCard = {
  id: "canine-chronic-bronchitis-dog",

  title: "Canine Chronic Bronchitis",

  description:
    "A chronic inflammatory airway disease characterized by persistent cough due to inflammation and remodeling of the bronchi in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Chronic Bronchitis",
    "Chronic Inflammatory Airway Disease",
    "Canine Chronic Airway Disease",
  ],

  overview:
    "Canine chronic bronchitis is a progressive inflammatory disorder of the lower airways characterized by excessive mucus production, airway inflammation, and structural remodeling. It is defined clinically by a persistent cough lasting more than two months after exclusion of other causes. Chronic airway inflammation leads to increased airway resistance, reduced airflow, and respiratory difficulty.",

  clinicalProblems: [

    "Chronic cough",
    "Exercise intolerance",
    "Increased respiratory effort",
    "Airway inflammation",
    "Excessive mucus production",
    "Wheezing",
    "Respiratory distress",
    "Reduced activity"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Evaluate respiratory pattern, cough severity, airway sounds, and rule out emergency respiratory compromise."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform imaging and airway evaluation to confirm chronic airway inflammation and exclude other causes."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Control airway inflammation, improve airflow, and reduce mucus accumulation."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor cough severity, respiratory function, and progression of airway disease."
    },

    {
      id:  "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Maintain airway control, reduce environmental irritants, and manage chronic disease progression."
    }

  ],

  diagnostics: [

    {
      id: "thoracic-radiography",
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
        "Identifies inflammatory cell populations and airway changes."
    },

    {
      id: "bronchoscopy",
      name: "Bronchoscopy",
      priority: "Recommended",
      reason:
        "Allows direct visualization of airways and sample collection."
    },

    {
      id: "airway-culture",
      name: "Airway Culture",
      priority: "Recommended",
      reason:
        "Identifies secondary bacterial infections."
    },

    {
      id: "heartworm-test",
      name: "Heartworm Testing",
      priority: "Recommended",
      reason:
        "Rules out parasitic causes of chronic respiratory signs."
    }

  ],

  drugCategories: [

    {
      category: "Corticosteroid",
      indication: "Airway inflammation",
      reason:
        "Reduces chronic bronchial inflammation."
    },

    {
      category: "Bronchodilator",
      indication: "Airway narrowing",
      reason:
        "Improves airflow by relaxing airway smooth muscle."
    },

    {
      category: "Antitussive",
      indication: "Severe non-productive cough",
      reason:
        "Reduces excessive coughing when appropriate."
    },

    {
      category: "Antibiotic",
      indication: "Secondary bacterial infection",
      reason:
        "Treats documented bacterial complications."
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
      priority: "Adjunctive",
      category: "Antibiotic",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation if respiratory distress occurs.",
    "Reduce exposure to smoke, dust, and airway irritants.",
    "Maintain appropriate body weight.",
    "Minimize stress during respiratory episodes."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Chronic cough for more than two months", weight: 50 },

      { finding: "Exposure to airway irritants", weight: 30 },

      { finding: "Older age", weight: 25 },

    ],

    clinicalSigns: [

      { finding: "Persistent cough", weight: 50 },

      { finding: "Wheezing", weight: 30 },

      { finding: "Exercise intolerance", weight: 30 },

      { finding: "Increased respiratory effort", weight: 35 },

    ],

    biochemistry: [

      { finding: "Usually non-specific findings", weight: 10 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Bronchial pattern on radiographs", weight: 45 },

      { finding: "Airway inflammation on cytology", weight: 40 },

      { finding: "Chronic cough without alternative cause", weight: 50 },

      { finding: "Response to corticosteroid therapy", weight: 30 },

    ],

    against: [

      { finding: "Acute onset respiratory signs", weight: -25 },

      { finding: "Normal airway evaluation", weight: -40 },

      { finding: "Alternative confirmed respiratory disease", weight: -35 },

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
        "Evaluates response to therapy."
    },

    {
      id:"respiratory",
      parameter:
        "Respiratory effort and airway sounds",
      frequency:
        "Regular follow-up",
      reason:
        "Detects progression of airway disease."
    },

    {
      id:"therapy",
      parameter:
        "Adverse effects of long-term medication",
      frequency:
        "Periodic evaluation",
      reason:
        "Ensures safe chronic management."
    }

  ],

  precautions: [

    {
      id:"irritant-exposure",
      title:
        "Avoid Airway Irritants",
      description:
        "Reduce exposure to smoke, dust, perfumes, aerosols, and environmental pollutants."
    },

    {
      id:"long-term-steroids",
      title:
        "Monitor Corticosteroid Therapy",
      description:
        "Long-term corticosteroid use requires monitoring for adverse effects."
    }

  ],

  prognosis:
    "Canine chronic bronchitis is a lifelong progressive condition. Clinical signs can often be controlled with appropriate therapy, but airway remodeling and chronic inflammation may persist.",

  strengtheningEvidence: [

    "Chronic cough",

    "Bronchial pattern on radiographs",

    "Airway inflammation",

    "Older dog",

    "Exclusion of other respiratory diseases",

    "Response to anti-inflammatory therapy"

  ],

  weakeningEvidence: [

    "Acute respiratory onset",

    "Normal thoracic imaging",

    "No cough history",

    "Confirmed infectious pneumonia",

    "Cardiac disease explaining cough"

  ],

  classicFindings: [

    "Persistent cough",

    "Older dogs",

    "Bronchial airway changes",

    "Mucus production",

    "Wheezing",

    "Chronic airway inflammation"

  ],

  ruleOutFindings: [

    "Canine asthma",

    "Heartworm disease",

    "Pneumonia",

    "Pulmonary edema",

    "Tracheal collapse"

  ],

};