import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineClostridialDiseases: DiseaseCard = {
  id: "bovine-clostridial-diseases",

  title: "Bovine Clostridial Diseases",

  description:
    "A group of acute, often fatal diseases of cattle caused by Clostridium species producing toxins, characterized by sudden death, muscle damage, enteritis, and systemic illness.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Clostridial Infections",
    "Blackleg",
    "Black Disease",
    "Enterotoxaemia",
    "Botulism",
  ],

  overview:
    "Bovine clostridial diseases are caused by anaerobic spore-forming bacteria of the genus Clostridium. Important diseases include blackleg caused by Clostridium chauvoei, malignant edema caused by Clostridium septicum and related organisms, enterotoxaemia caused by Clostridium perfringens, black disease caused by Clostridium novyi, and botulism caused by Clostridium botulinum toxin. These diseases often progress rapidly and may cause sudden death.",

  clinicalProblems: [

    "Acute toxin-mediated disease",
    "Sudden death",
    "Myositis",
    "Gas formation in tissues",
    "Enteritis",
    "Neurological signs",
    "Septicemia",
    "High mortality"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess sudden deaths, vaccination status, age group affected, recent wounds, feed changes, and pasture exposure."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate fever, swelling, lameness, muscle pain, neurological signs, and systemic deterioration."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect affected tissues, blood, intestinal contents, or toxin samples before antimicrobial treatment when possible."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection through bacterial identification, toxin detection, PCR, and pathological examination."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Provide emergency treatment when possible, supportive care, carcass management, and preventive vaccination."
    }

  ],

  diagnostics: [

    {
      id: "necropsy",
      name: "Necropsy Examination",
      priority: "Essential",
      reason:
        "Characteristic lesions often provide rapid diagnostic clues."
    },

    {
      id: "toxin-testing",
      name: "Toxin Detection",
      priority: "Recommended",
      reason:
        "Identifies toxin-mediated disease."
    },

    {
      id: "pcr",
      name: "PCR Testing",
      priority: "Recommended",
      reason:
        "Detects Clostridium species."
    },

    {
      id: "culture",
      name: "Bacterial Culture",
      priority: "Recommended",
      reason:
        "May identify causative organisms."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Active bacterial infection",
      reason:
        "May be used in early cases before toxin-mediated damage becomes severe."
    },

    {
      category: "Supportive Therapy",
      indication: "Systemic illness",
      reason:
        "Supports affected animals."
    },

    {
      category: "Vaccines",
      indication: "Prevention",
      reason:
        "Vaccination is the most important control measure."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "penicillin-g",
      priority: "First Line",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Provide immediate veterinary attention.",
    "Administer appropriate antimicrobial therapy early when indicated.",
    "Provide supportive care.",
    "Remove and safely dispose of carcasses.",
    "Implement vaccination programs."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Sudden death", weight: 95 },

      { finding: "Unvaccinated cattle", weight: 90 },

      { finding: "Young rapidly growing cattle affected", weight: 80 },

      { finding: "Recent wounds or tissue injury", weight: 70 }

    ],

    clinicalSigns: [

      { finding: "Sudden death", weight: 100 },

      { finding: "Muscle swelling", weight: 90 },

      { finding: "Lameness", weight: 80 },

      { finding: "Crepitation under skin", weight: 90 },

      { finding: "Neurological signs", weight: 70 }

    ],

    biochemistry: [

      { finding: "Elevated muscle enzymes", weight: 60 }

    ],

    imaging: [

      { finding: "Gas accumulation in affected tissues", weight: 80 }

    ],

    supports: [

      { finding: "Characteristic necropsy lesions", weight: 100 },

      { finding: "Clostridium identified", weight: 100 },

      { finding: "Positive toxin detection", weight: 100 }

    ],

    against: [

      { finding: "Negative toxin testing", weight: -70 },

      { finding: "Alternative cause of sudden death confirmed", weight: -80 }

    ],

  },
    monitoring: [

    {
      id: "mortality",
      parameter: "Sudden deaths within herd",
      frequency: "Daily during outbreak",
      reason:
        "Detects ongoing clostridial disease transmission and outbreak progression."
    },

    {
      id: "swelling",
      parameter: "Muscle swelling and tissue changes",
      frequency: "Daily",
      reason:
        "Monitors progression of myonecrosis and inflammatory lesions."
    },

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Assesses systemic inflammatory response."
    },

    {
      id: "neurological-status",
      parameter: "Neurological signs",
      frequency: "Daily",
      reason:
        "Monitors toxin-associated neurological complications."
    },

    {
      id: "vaccination-status",
      parameter: "Herd vaccination coverage",
      frequency: "Scheduled review",
      reason:
        "Evaluates prevention strategy effectiveness."
    }

  ],

  precautions: [

    {
      id: "vaccination",
      title: "Vaccination Program",
      description:
        "Routine clostridial vaccination is the most effective method for preventing severe disease and sudden death."
    },

    {
      id: "carcass-disposal",
      title: "Carcass Management",
      description:
        "Dispose of dead animals properly because Clostridium spores can contaminate soil and persist for long periods."
    },

    {
      id: "wound-management",
      title: "Wound Prevention",
      description:
        "Reduce tissue injuries and maintain hygiene to decrease risk of wound-associated clostridial infections."
    }

  ],

  prognosis:
    "Prognosis is often poor once clinical signs develop because toxin production causes rapid tissue damage. Prevention through vaccination and management is far more effective than treatment.",

  strengtheningEvidence: [

    "Sudden death pattern",

    "Unvaccinated animals",

    "Gas-filled muscle lesions",

    "Positive toxin detection"

  ],

  weakeningEvidence: [

    "Negative toxin testing",

    "Alternative cause of sudden death identified",

    "No compatible pathological lesions"

  ],

  classicFindings: [

    "Sudden death",

    "Muscle swelling",

    "Crepitus on palpation",

    "Rapid disease progression",

    "High mortality"

  ],

  ruleOutFindings: [

    "Anthrax",

    "Hemorrhagic Septicemia",

    "Lightning strike",

    "Plant poisoning",

    "Acute poisoning",

    "Severe trauma"

  ],

};