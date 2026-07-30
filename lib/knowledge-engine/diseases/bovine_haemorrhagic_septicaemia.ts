import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineHaemorrhagicSepticaemia: DiseaseCard = {
  id: "bovine-haemorrhagic-septicaemia",

  title: "Bovine Haemorrhagic Septicaemia",

  description:
    "An acute, highly fatal bacterial septicemic disease of cattle caused by Pasteurella multocida, characterized by fever, respiratory distress, edema, and sudden death.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "HS",
    "Haemorrhagic Septicaemia",
    "Pasteurella multocida Septicaemia",
  ],

  overview:
    "Haemorrhagic septicaemia is an acute bacterial disease primarily caused by Pasteurella multocida serotypes B:2 and E:2. It is an important cause of mortality in cattle and buffaloes, especially during humid and stressful conditions. The organism may exist in the upper respiratory tract of healthy animals and cause disease following stress, environmental changes, or immune suppression. The disease progresses rapidly with septicemia, respiratory distress, edema, and high mortality.",

  clinicalProblems: [

    "Acute bacterial septicemia",
    "High fever",
    "Respiratory distress",
    "Submandibular edema",
    "Dysphagia",
    "Depression",
    "Sudden death",
    "Endotoxic shock"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess sudden deaths, seasonal occurrence, vaccination status, recent stress, transport, and herd outbreak pattern."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate fever, nasal discharge, respiratory distress, edema of throat region, and systemic illness."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect blood, nasal swabs, and tissues from freshly dead animals for bacterial identification."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection using bacterial culture, PCR, and identification of Pasteurella multocida."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Initiate early antibiotic therapy, provide supportive care, isolate affected animals, and implement vaccination programs."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Rapid onset with characteristic edema and respiratory signs suggests HS."
    },

    {
      id: "bacterial-culture",
      name: "Bacterial Culture",
      priority: "Essential",
      reason:
        "Confirms Pasteurella multocida infection."
    },

    {
      id: "pcr",
      name: "PCR",
      priority: "Recommended",
      reason:
        "Provides rapid identification of bacterial pathogen."
    },

    {
      id: "necropsy",
      name: "Necropsy Examination",
      priority: "Recommended",
      reason:
        "Shows characteristic septicemic lesions."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Primary bacterial infection",
      reason:
        "Essential for elimination of Pasteurella multocida infection when administered early."
    },

    {
      category: "NSAIDs",
      indication: "Fever and inflammation",
      reason:
        "Reduces fever and improves comfort."
    },

    {
      category: "Fluid Therapy",
      indication: "Septicemia and dehydration",
      reason:
        "Supports circulation and hydration."
    },

    {
      category: "Supportive Therapy",
      indication: "Shock management",
      reason:
        "Supports recovery during systemic illness."
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

    "Administer antibiotics as early as possible.",
    "Isolate affected animals.",
    "Provide fluid and electrolyte support.",
    "Reduce environmental stress.",
    "Monitor closely due to rapid disease progression."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Sudden deaths in herd", weight: 95 },

      { finding: "Humid rainy season", weight: 80 },

      { finding: "Recent transport or stress", weight: 75 },

      { finding: "Unvaccinated cattle", weight: 85 }

    ],

    clinicalSigns: [

      { finding: "High fever", weight: 90 },

      { finding: "Submandibular edema", weight: 95 },

      { finding: "Respiratory distress", weight: 90 },

      { finding: "Nasal discharge", weight: 70 },

      { finding: "Depression", weight: 80 },

      { finding: "Sudden death", weight: 95 }

    ],

    biochemistry: [

      { finding: "Leukocytosis or inflammatory response", weight: 60 },

      { finding: "Signs of septicemia", weight: 80 }

    ],

    imaging: [

      { finding: "Pulmonary edema and consolidation", weight: 70 }

    ],

    supports: [

      { finding: "Isolation of Pasteurella multocida", weight: 100 },

      { finding: "Positive PCR", weight: 100 },

      { finding: "Characteristic septicemic lesions", weight: 90 }

    ],

    against: [

      { finding: "Negative bacterial testing", weight: -80 },

      { finding: "Alternative septicemic disease confirmed", weight: -75 }

    ],

  },
    monitoring: [

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Monitors response to antibiotic therapy and resolution of infection."
    },

    {
      id: "respiratory-status",
      parameter: "Respiratory rate and effort",
      frequency: "Several times daily",
      reason:
        "Detects worsening respiratory compromise."
    },

    {
      id: "edema",
      parameter: "Submandibular and throat swelling",
      frequency: "Daily",
      reason:
        "Evaluates progression or improvement of inflammatory edema."
    },

    {
      id: "appetite",
      parameter: "Feed and water intake",
      frequency: "Daily",
      reason:
        "Assesses recovery and systemic illness."
    },

    {
      id: "mortality",
      parameter: "Herd mortality pattern",
      frequency: "Daily during outbreak",
      reason:
        "Helps evaluate outbreak control measures."
    }

  ],

  precautions: [

    {
      id: "rapid-progression",
      title: "Rapid Disease Progression",
      description:
        "Haemorrhagic septicaemia can progress rapidly to death, therefore early diagnosis and treatment are critical."
    },

    {
      id: "biosecurity",
      title: "Biosecurity Measures",
      description:
        "Separate sick animals, restrict movement, and properly dispose of carcasses to reduce disease spread."
    },

    {
      id: "vaccination",
      title: "Vaccination",
      description:
        "Regular vaccination is the most effective preventive measure in endemic regions."
    }

  ],

  prognosis:
    "Prognosis depends on early detection and treatment. Animals treated during the early stage may recover, but advanced septicemia often results in death despite therapy.",

  strengtheningEvidence: [

    "Sudden deaths in cattle",

    "Submandibular edema",

    "Isolation of Pasteurella multocida",

    "Positive PCR"

  ],

  weakeningEvidence: [

    "Negative bacterial testing",

    "Alternative septicemic disease confirmed",

    "No compatible clinical signs"

  ],

  classicFindings: [

    "High fever",

    "Severe depression",

    "Throat and submandibular swelling",

    "Respiratory distress",

    "Sudden death"

  ],

  ruleOutFindings: [

    "Anthrax",

    "Blackleg",

    "Malignant Catarrhal Fever",

    "Bovine Viral Diarrhea",

    "Salmonellosis",

    "Clostridial Septicemia",

    "Pneumonic Pasteurellosis"

  ],

};