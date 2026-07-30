import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineRespiratorySyncytialVirus: DiseaseCard = {
  id: "bovine-respiratory-syncytial-virus",

  title: "Bovine Respiratory Syncytial Virus",

  description:
    "A highly contagious viral respiratory disease of cattle caused by Bovine Respiratory Syncytial Virus (BRSV), resulting in upper and lower respiratory tract inflammation and predisposing affected animals to secondary bacterial pneumonia.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "BRSV",
    "Bovine RSV",
    "Respiratory Syncytial Virus Infection",
  ],

  overview:
    "Bovine Respiratory Syncytial Virus (BRSV) is an important component of the bovine respiratory disease complex. The virus spreads rapidly through aerosol transmission and direct contact, primarily affecting calves and young cattle. Clinical disease ranges from mild upper respiratory infection to severe bronchointerstitial pneumonia with respiratory distress. Secondary bacterial infections commonly worsen disease severity.",

  clinicalProblems: [

    "Acute viral respiratory infection",
    "Fever",
    "Rhinitis",
    "Bronchitis",
    "Bronchiolitis",
    "Bronchointerstitial pneumonia",
    "Respiratory distress",
    "Secondary bacterial pneumonia"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent transport, commingling, vaccination status, overcrowding, weather changes, and herd respiratory outbreaks."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate fever, nasal discharge, cough, respiratory effort, lung sounds, and evidence of pneumonia."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect deep nasal swabs, transtracheal wash, bronchoalveolar lavage, or lung tissue for laboratory confirmation."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection using PCR, antigen detection, virus isolation, or serology."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Provide supportive care, treat secondary bacterial pneumonia, isolate affected animals, and improve ventilation."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Respiratory signs suggest viral pneumonia."
    },

    {
      id: "pcr",
      name: "PCR",
      priority: "Essential",
      reason:
        "Sensitive detection of BRSV."
    },

    {
      id: "virus-isolation",
      name: "Virus Isolation",
      priority: "Recommended",
      reason:
        "Confirms active infection."
    },

    {
      id: "thoracic-ultrasound",
      name: "Thoracic Ultrasonography",
      priority: "Recommended",
      reason:
        "Evaluates pulmonary consolidation and pleural involvement."
    }

  ],

  drugCategories: [

    {
      category: "NSAIDs",
      indication: "Fever and pulmonary inflammation",
      reason:
        "Improves comfort and reduces inflammation."
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
    "Reduce stress and overcrowding.",
    "Improve ventilation.",
    "Treat dehydration if present.",
    "Treat secondary bacterial pneumonia.",
    "Provide adequate nutrition and water."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Recent transport or commingling", weight: 75 },

      { finding: "Respiratory disease outbreak", weight: 85 },

      { finding: "Young calves affected", weight: 70 },

      { finding: "Poor ventilation", weight: 70 }

    ],

    clinicalSigns: [

      { finding: "Fever", weight: 80 },

      { finding: "Dry cough", weight: 90 },

      { finding: "Tachypnea", weight: 85 },

      { finding: "Dyspnea", weight: 90 },

      { finding: "Nasal discharge", weight: 70 },

      { finding: "Abnormal lung sounds", weight: 85 },

      { finding: "Open-mouth breathing", weight: 80 },

      { finding: "Subcutaneous emphysema", weight: 60 }

    ],

    biochemistry: [

      { finding: "Mild leukopenia", weight: 45 },

      { finding: "Inflammatory leukogram with secondary bacterial infection", weight: 60 }

    ],

    imaging: [

      { finding: "Bronchointerstitial lung pattern", weight: 85 },

      { finding: "Pulmonary consolidation", weight: 80 }

    ],

    supports: [

      { finding: "Positive PCR", weight: 100 },

      { finding: "Typical respiratory outbreak", weight: 90 },

      { finding: "Compatible lung lesions", weight: 85 },

      { finding: "Positive virus isolation", weight: 100 }

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
        "Evaluates appetite and hydration."
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
        "BRSV commonly predisposes cattle to secondary bacterial respiratory infections requiring prompt antimicrobial therapy."
    },

    {
      id: "biosecurity",
      title: "Biosecurity",
      description:
        "Isolate affected animals, improve ventilation, and minimize stress to reduce transmission."
    },

    {
      id: "vaccination",
      title: "Vaccination",
      description:
        "Vaccination helps reduce disease severity and is an important component of respiratory disease prevention programs."
    }

  ],

  prognosis:
    "Most uncomplicated infections have a good prognosis with supportive care. Severe bronchointerstitial pneumonia or secondary bacterial infections may result in prolonged illness, decreased production, or death, particularly in young calves.",

  strengtheningEvidence: [

    "Positive PCR",

    "Typical herd respiratory outbreak",

    "Bronchointerstitial pneumonia",

    "Compatible clinical signs"

  ],

  weakeningEvidence: [

    "Negative PCR",

    "Alternative respiratory disease confirmed",

    "Normal respiratory examination"

  ],

  classicFindings: [

    "High fever",

    "Dry cough",

    "Dyspnea",

    "Tachypnea",

    "Respiratory distress"

  ],

  ruleOutFindings: [

    "Infectious Rhinotracheitis",

    "Parainfluenza-3",

    "Bovine Viral Diarrhea",

    "Mannheimia haemolytica Pneumonia",

    "Pasteurellosis",

    "Mycoplasma bovis Infection"

  ],

};