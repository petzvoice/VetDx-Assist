import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineParainfluenza3: DiseaseCard = {
  id: "bovine-parainfluenza-3",

  title: "Bovine Parainfluenza-3",

  description:
    "A contagious viral respiratory disease of cattle caused by Bovine Parainfluenza Virus Type 3 (PI3), commonly contributing to the bovine respiratory disease complex.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "PI3",
    "Parainfluenza-3",
    "Bovine PI3 Infection",
    "BPIV-3 Infection",
  ],

  overview:
    "Bovine Parainfluenza-3 Virus (BPIV-3) is a member of the family Paramyxoviridae and is an important viral component of bovine respiratory disease complex. Infection damages the respiratory epithelium, impairs mucociliary clearance, and predisposes cattle to secondary bacterial pneumonia. Young calves, recently transported animals, and crowded feedlot cattle are most commonly affected.",

  clinicalProblems: [

    "Acute viral respiratory infection",
    "Fever",
    "Rhinitis",
    "Tracheitis",
    "Bronchitis",
    "Pneumonia",
    "Respiratory distress",
    "Secondary bacterial pneumonia"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess transport history, overcrowding, vaccination status, recent herd additions, and respiratory outbreaks."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate nasal discharge, cough, fever, respiratory effort, lung sounds, and evidence of pneumonia."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect nasal swabs, tracheal wash, bronchoalveolar lavage, or lung tissue for laboratory diagnosis."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection using PCR, virus isolation, antigen detection, or serology."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Provide supportive care, treat secondary bacterial infections, improve ventilation, and isolate affected cattle."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Typical respiratory signs support clinical diagnosis."
    },

    {
      id: "pcr",
      name: "PCR",
      priority: "Essential",
      reason:
        "Highly sensitive detection of BPIV-3."
    },

    {
      id: "virus-isolation",
      name: "Virus Isolation",
      priority: "Recommended",
      reason:
        "Confirms active viral infection."
    },

    {
      id: "thoracic-ultrasound",
      name: "Thoracic Ultrasonography",
      priority: "Recommended",
      reason:
        "Evaluates pulmonary involvement and consolidation."
    }

  ],

  drugCategories: [

    {
      category: "NSAIDs",
      indication: "Fever and inflammation",
      reason:
        "Reduces pyrexia and improves comfort."
    },

    {
      category: "Antibiotics",
      indication: "Secondary bacterial pneumonia",
      reason:
        "Treats bacterial respiratory complications."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration",
      reason:
        "Maintains hydration and electrolyte balance."
    },

    {
      category: "Supportive Therapy",
      indication: "General supportive care",
      reason:
        "Supports recovery from viral respiratory disease."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    },

    {
      drugId: "oxytetracycline",
      priority: "Supportive",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Isolate affected cattle.",
    "Reduce stress.",
    "Improve ventilation.",
    "Treat dehydration if present.",
    "Treat secondary bacterial pneumonia.",
    "Provide adequate nutrition."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Recent transport", weight: 75 },

      { finding: "Overcrowding", weight: 70 },

      { finding: "Respiratory outbreak", weight: 85 },

      { finding: "Young calves affected", weight: 70 }

    ],

    clinicalSigns: [

      { finding: "Fever", weight: 75 },

      { finding: "Serous nasal discharge", weight: 80 },

      { finding: "Dry cough", weight: 90 },

      { finding: "Tachypnea", weight: 80 },

      { finding: "Dyspnea", weight: 80 },

      { finding: "Abnormal lung sounds", weight: 80 },

      { finding: "Depression", weight: 65 }

    ],

    biochemistry: [

      { finding: "Mild leukopenia", weight: 40 },

      { finding: "Inflammatory leukogram with secondary bacterial infection", weight: 60 }

    ],

    imaging: [

      { finding: "Pulmonary consolidation", weight: 80 },

      { finding: "Bronchointerstitial lung pattern", weight: 75 }

    ],

    supports: [

      { finding: "Positive PCR", weight: 100 },

      { finding: "Positive virus isolation", weight: 100 },

      { finding: "Typical respiratory outbreak", weight: 90 },

      { finding: "Compatible respiratory lesions", weight: 85 }

    ],

    against: [

      { finding: "Negative PCR", weight: -90 },

      { finding: "Alternative respiratory disease confirmed", weight: -80 },

      { finding: "Normal respiratory examination", weight: -50 }

    ],

  },
    monitoring: [

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Monitors fever and response to treatment."
    },

    {
      id: "respiratory-rate",
      parameter: "Respiratory rate and effort",
      frequency: "Daily",
      reason:
        "Assesses progression of respiratory disease."
    },

    {
      id: "lung-sounds",
      parameter: "Pulmonary auscultation",
      frequency: "Daily",
      reason:
        "Monitors development or resolution of pneumonia."
    },

    {
      id: "feed-intake",
      parameter: "Feed and water intake",
      frequency: "Daily",
      reason:
        "Evaluates appetite and hydration status."
    },

    {
      id: "oxygenation",
      parameter: "Signs of hypoxia",
      frequency: "Daily",
      reason:
        "Detects severe respiratory compromise."
    }

  ],

  precautions: [

    {
      id: "secondary-infection",
      title: "Secondary Bacterial Pneumonia",
      description:
        "Parainfluenza-3 commonly predisposes cattle to secondary bacterial pneumonia requiring appropriate antibiotic therapy."
    },

    {
      id: "biosecurity",
      title: "Biosecurity",
      description:
        "Prompt isolation of affected cattle, adequate ventilation, and minimizing stress help reduce disease transmission."
    },

    {
      id: "vaccination",
      title: "Vaccination",
      description:
        "Vaccination is recommended as part of bovine respiratory disease complex prevention programs."
    }

  ],

  prognosis:
    "Most uncomplicated infections have an excellent prognosis with supportive care. Prognosis becomes guarded when severe secondary bacterial pneumonia develops or multiple respiratory pathogens are involved.",

  strengtheningEvidence: [

    "Positive PCR",

    "Typical herd respiratory outbreak",

    "Compatible respiratory lesions",

    "Positive virus isolation"

  ],

  weakeningEvidence: [

    "Negative PCR",

    "Alternative respiratory disease confirmed",

    "Normal respiratory examination"

  ],

  classicFindings: [

    "Fever",

    "Dry cough",

    "Serous nasal discharge",

    "Tachypnea",

    "Bronchopneumonia"

  ],

  ruleOutFindings: [

    "Infectious Rhinotracheitis",

    "Respiratory Syncytial Virus",

    "Bovine Viral Diarrhea",

    "Mannheimia haemolytica Pneumonia",

    "Pasteurellosis",

    "Mycoplasma bovis Infection"

  ],

};