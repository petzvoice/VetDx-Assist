import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineNitratePoisoning: DiseaseCard = {
  id: "bovine-nitrate-poisoning",

  title: "Bovine Nitrate Poisoning",

  description:
    "A toxic metabolic disorder in cattle caused by ingestion of excessive nitrate-containing plants or feed, resulting in methemoglobinemia, oxygen transport failure, respiratory distress, and sudden death.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Nitrate Toxicity",
    "Nitrate-Nitrite Poisoning",
    "Methemoglobinemia",
  ],

  overview:
    "Nitrate poisoning occurs when cattle consume feeds or plants containing high nitrate concentrations. Rumen microorganisms convert nitrate to nitrite, which oxidizes hemoglobin into methemoglobin, reducing oxygen-carrying capacity. Risk increases during drought, frost damage, heavy fertilization, and consumption of certain forage crops.",

  clinicalProblems: [

    "Oxygen transport failure",
    "Respiratory distress",
    "Cyanosis",
    "Neurological signs",
    "Sudden death",
    "Reduced production"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent feed changes, forage source, fertilization history, drought conditions, and access to suspect plants."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate respiratory distress, mucous membrane color, weakness, and neurological signs."
    },

    {
      id: "sample-analysis",
      step: 3,
      title: "Feed and Blood Evaluation",
      description:
        "Test feed nitrate concentration and evaluate blood changes when possible."
    },

    {
      id: "emergency-treatment",
      step: 4,
      title: "Emergency Management",
      description:
        "Provide rapid antidotal therapy and remove exposure source."
    }

  ],

  diagnostics: [

    {
      id: "history",
      name: "Exposure History",
      priority: "Essential",
      reason:
        "Identifies nitrate-containing feed exposure."
    },

    {
      id: "feed-testing",
      name: "Feed Nitrate Testing",
      priority: "Recommended",
      reason:
        "Confirms source of toxicity."
    },

    {
      id: "blood-color",
      name: "Blood Appearance Evaluation",
      priority: "Recommended",
      reason:
        "Chocolate-brown blood may indicate methemoglobinemia."
    },

    {
      id: "methemoglobin",
      name: "Methemoglobin Measurement",
      priority: "Recommended",
      reason:
        "Confirms impaired oxygen transport."

    }

  ],

  drugCategories: [

    {
      category: "Antidotal Therapy",
      indication: "Methemoglobinemia",
      reason:
        "Restores hemoglobin oxygen-carrying ability."
    },

    {
      category: "Supportive Therapy",
      indication: "Toxicity management",
      reason:
        "Maintains animal stability."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "methylene-blue",
      priority: "Emergency",
      category: "Antidote"
    }

  ],

  stabilization: [

    "Remove access to nitrate source.",
    "Administer antidotal therapy when indicated.",
    "Provide supportive care.",
    "Monitor respiratory status.",
    "Prevent further exposure."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Consumption of nitrate-rich forage",
        weight: 100
      },

      {
        finding: "Recent feed change",
        weight: 85
      },

      {
        finding: "Drought or frost-damaged plants",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Difficulty breathing",
        weight: 90
      },

      {
        finding: "Cyanotic mucous membranes",
        weight: 95
      },

      {
        finding: "Weakness",
        weight: 80
      },

      {
        finding: "Sudden death",
        weight: 90
      }

    ],

    biochemistry: [

      {
        finding: "Elevated methemoglobin",
        weight: 100
      }

    ],

    imaging: [

      {
        finding: "No diagnostic imaging findings",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Chocolate-brown blood",
        weight: 100
      },

      {
        finding: "Response to methylene blue therapy",
        weight: 95
      }

    ],

    against: [

      {
        finding: "No nitrate exposure history",
        weight: -70
      },

      {
        finding: "Alternative respiratory disease confirmed",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "respiratory-status",
      parameter: "Respiratory rate and effort",
      frequency: "During acute cases",
      reason:
        "Monitors recovery from oxygen transport failure."
    },

    {
      id: "mucous-membranes",
      parameter: "Mucous membrane color",
      frequency: "Regular evaluation",
      reason:
        "Assesses improvement of methemoglobinemia."
    },

    {
      id: "methemoglobin",
      parameter: "Methemoglobin concentration",
      frequency: "When available",
      reason:
        "Evaluates severity and treatment response."
    },

    {
      id: "feed-source",
      parameter: "Nitrate level in feed or forage",
      frequency: "Before re-exposure",
      reason:
        "Prevents recurrence."
    },

    {
      id: "herd-monitoring",
      parameter: "Other exposed animals",
      frequency: "During poisoning events",
      reason:
        "Detects additional affected cattle."

    }

  ],

  precautions: [

    {
      id: "feed-testing",
      title: "Feed Nitrate Testing",
      description:
        "Test high-risk forage and feed sources before feeding."
    },

    {
      id: "forage-management",
      title: "Forage Management",
      description:
        "Avoid feeding drought-stressed, frost-damaged, or heavily fertilized plants without evaluation."
    },

    {
      id: "gradual-adaptation",
      title: "Gradual Feed Introduction",
      description:
        "Introduce new forage sources gradually to allow rumen adaptation."
    },

    {
      id: "storage-management",
      title: "Feed Storage Management",
      description:
        "Maintain proper storage practices to reduce feed-related toxicity risks."

    }

  ],

  prognosis:
    "Prognosis depends on the amount of nitrate consumed and speed of treatment. Rapid intervention can result in recovery, while severe methemoglobinemia may cause sudden death.",

  strengtheningEvidence: [

    "Known nitrate-containing feed exposure",

    "Chocolate-brown blood",

    "Cyanosis and respiratory distress",

    "Response to methylene blue therapy"

  ],

  weakeningEvidence: [

    "No nitrate exposure",

    "Normal methemoglobin levels",

    "Alternative cause of respiratory distress confirmed"

  ],

  classicFindings: [

    "Sudden onset respiratory distress",

    "Blue mucous membranes",

    "Weakness",

    "Tremors",

    "Sudden death"

  ],

  ruleOutFindings: [

    "Hydrogen cyanide poisoning",

    "Bovine respiratory disease",

    "Anaphylaxis",

    "Carbon monoxide poisoning",

    "Cardiac disease",

    "Heat stress"

  ],

};