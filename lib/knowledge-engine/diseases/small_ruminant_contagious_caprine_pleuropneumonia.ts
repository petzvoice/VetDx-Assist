import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantContagiousCaprinePleuropneumonia: DiseaseCard = {
  id: "small-ruminant-contagious-caprine-pleuropneumonia",

  title: "Contagious Caprine Pleuropneumonia",

  description:
    "A severe, highly contagious respiratory disease of goats caused by Mycoplasma capricolum subsp. capripneumoniae (Mccp), characterized by fibrinous pleuropneumonia, respiratory distress, and high mortality.",

  species: [
    Species.GOAT,
  ],

  synonyms: [
    "CCPP",
    "Caprine Pleuropneumonia",
    "Mycoplasmal Pleuropneumonia of Goats",
  ],

  overview:
    "Contagious caprine pleuropneumonia is caused by Mycoplasma capricolum subsp. capripneumoniae and spreads rapidly through close contact and respiratory secretions. The disease causes severe fibrinous pleuropneumonia with significant economic losses due to high morbidity, mortality, decreased productivity, and trade restrictions. Early diagnosis and rapid outbreak control are essential.",

  clinicalProblems: [

    "Severe pneumonia",
    "Pleuritis",
    "Respiratory distress",
    "High fever",
    "Sudden death",
    "High mortality"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent animal introductions, respiratory outbreaks, transport stress, and flock mortality."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate respiratory effort, fever, coughing, nasal discharge, and thoracic pain."
    },

    {
      id: "laboratory-confirmation",
      step: 3,
      title: "Diagnostic Confirmation",
      description:
        "Confirm infection using PCR, culture, or serological methods where available."
    },

    {
      id: "outbreak-control",
      step: 4,
      title: "Disease Control",
      description:
        "Isolate affected animals, begin treatment, and implement strict biosecurity."
    }

  ],

  diagnostics: [

    {
      id: "pcr",
      name: "PCR",
      priority: "Essential",
      reason:
        "Provides rapid confirmation of Mccp infection."
    },

    {
      id: "culture",
      name: "Mycoplasma Culture",
      priority: "Recommended",
      reason:
        "Confirms causative organism."
    },

    {
      id: "thoracic-ultrasound",
      name: "Thoracic Ultrasonography",
      priority: "Recommended",
      reason:
        "Evaluates pleural effusion and lung involvement."
    },

    {
      id: "necropsy",
      name: "Postmortem Examination",
      priority: "Recommended",
      reason:
        "Identifies characteristic fibrinous pleuropneumonia."

    }

  ],

  drugCategories: [

    {
      category: "Antimicrobials",
      indication: "Mycoplasma infection",
      reason:
        "Reduces bacterial multiplication and disease severity."
    },

    {
      category: "NSAIDs",
      indication: "Fever and pleural inflammation",
      reason:
        "Provides supportive care and improves comfort."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration and systemic illness",
      reason:
        "Supports severely affected animals."
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

    "Immediately isolate affected goats.",
    "Provide antimicrobial therapy.",
    "Administer NSAIDs and supportive care.",
    "Correct dehydration when present.",
    "Reduce stress and improve ventilation.",
    "Restrict animal movement during outbreaks."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent introduction of goats",
        weight: 90
      },

      {
        finding: "Rapid respiratory outbreak",
        weight: 100
      },

      {
        finding: "High flock mortality",
        weight: 95
      }

    ],

    clinicalSigns: [

      {
        finding: "Severe respiratory distress",
        weight: 100
      },

      {
        finding: "High fever",
        weight: 90
      },

      {
        finding: "Painful respiration",
        weight: 90
      },

      {
        finding: "Coughing",
        weight: 80
      },

      {
        finding: "Nasal discharge",
        weight: 75
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
        finding: "Pleural effusion and lung consolidation",
        weight: 90
      }

    ],

    supports: [

      {
        finding: "Positive PCR for Mycoplasma capricolum subsp. capripneumoniae",
        weight: 100
      },

      {
        finding: "Characteristic fibrinous pleuropneumonia",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Negative PCR with incompatible findings",
        weight: -70
      },

      {
        finding: "Alternative respiratory pathogen confirmed",
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
        "Monitors severity of infection and response to antimicrobial therapy."
    },

    {
      id: "respiratory-status",
      parameter: "Respiratory rate and effort",
      frequency: "Every 6–12 hours in severe cases",
      reason:
        "Detects progression of pleuropneumonia and respiratory compromise."
    },

    {
      id: "hydration",
      parameter: "Hydration status and appetite",
      frequency: "Daily",
      reason:
        "Guides supportive therapy and nutritional management."
    },

    {
      id: "thoracic-lesions",
      parameter: "Thoracic auscultation or ultrasonography",
      frequency: "As clinically indicated",
      reason:
        "Evaluates resolution of pleural and pulmonary lesions."
    },

    {
      id: "flock-surveillance",
      parameter: "New respiratory cases and mortality",
      frequency: "Continuous during outbreak",
      reason:
        "Assesses disease spread and effectiveness of control measures."

    }

  ],

  precautions: [

    {
      id: "quarantine",
      title: "Quarantine New Animals",
      description:
        "Isolate newly purchased goats before introducing them into the herd."
    },

    {
      id: "biosecurity",
      title: "Strict Biosecurity",
      description:
        "Restrict animal movement and disinfect equipment to reduce transmission."
    },

    {
      id: "isolation",
      title: "Rapid Isolation",
      description:
        "Immediately separate clinically affected goats from healthy animals."
    },

    {
      id: "vaccination",
      title: "Vaccination",
      description:
        "Use approved vaccines where available in endemic regions as part of herd disease control."

    }

  ],

  prognosis:
    "Prognosis is guarded to poor in severe outbreaks. Early diagnosis, prompt antimicrobial therapy, and effective supportive care improve survival, while untreated outbreaks may have high mortality.",

  strengtheningEvidence: [

    "Positive PCR for Mycoplasma capricolum subsp. capripneumoniae",

    "Severe fibrinous pleuropneumonia",

    "Rapid respiratory outbreak",

    "High morbidity and mortality"

  ],

  weakeningEvidence: [

    "Negative PCR with incompatible findings",

    "No evidence of pleuropneumonia",

    "Alternative respiratory disease confirmed"

  ],

  classicFindings: [

    "High fever",

    "Severe respiratory distress",

    "Painful breathing",

    "Pleural friction sounds",

    "High mortality"

  ],

  ruleOutFindings: [

    "Pasteurellosis",

    "Peste des petits ruminants",

    "Lungworm infection",

    "Aspiration pneumonia",

    "Mycoplasma ovipneumoniae infection",

    "Pulmonary abscess"

  ],

};