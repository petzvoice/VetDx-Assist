import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantNitratePoisoning: DiseaseCard = {
  id: "small-ruminant-nitrate-poisoning",

  title: "Nitrate Poisoning",

  description:
    "A toxic metabolic disorder in sheep and goats caused by ingestion of high nitrate-containing plants or water, resulting in methemoglobinemia, reduced oxygen transport, respiratory distress, cyanosis, collapse, and death.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Nitrate Toxicity",
    "Methemoglobinemia",
    "Nitrite Poisoning",
  ],

  overview:
    "Nitrate poisoning occurs when rumen microorganisms convert excessive dietary nitrate into nitrite, which is absorbed into the bloodstream and oxidizes hemoglobin to methemoglobin. Methemoglobin cannot effectively transport oxygen, resulting in tissue hypoxia. Risk factors include drought-stressed plants, heavily fertilized crops, sudden access to high nitrate feeds, contaminated water sources, and improper feed management.",

  clinicalProblems: [

    "Methemoglobinemia",
    "Oxygen deprivation",
    "Respiratory distress",
    "Neurological signs",
    "Sudden death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent feed changes, access to nitrate-rich plants, water sources, fertilizer exposure, and number of affected animals."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate mucous membrane color, respiratory signs, weakness, heart rate, and neurological status."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Measure methemoglobin levels and evaluate feed or water nitrate concentration."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Control",
      description:
        "Remove nitrate source, provide emergency antidotal therapy, and improve feed management."
    }

  ],

  diagnostics: [

    {
      id: "methemoglobin",
      name: "Methemoglobin Measurement",
      priority: "Essential",
      reason:
        "Confirms impaired oxygen transport due to nitrate toxicity."
    },

    {
      id: "feed-analysis",
      name: "Feed and Plant Nitrate Analysis",
      priority: "Recommended",
      reason:
        "Identifies nitrate source responsible for poisoning."
    },

    {
      id: "blood-examination",
      name: "Blood Examination",
      priority: "Recommended",
      reason:
        "May support diagnosis and evaluate severity."
    }

  ],

  drugCategories: [

    {
      category: "Antidotes",
      indication: "Methemoglobinemia correction",
      reason:
        "Converts methemoglobin back to functional hemoglobin."
    },

    {
      category: "Supportive Therapy",
      indication: "Oxygenation and stabilization",
      reason:
        "Supports affected animals during oxygen deficiency."
    },

    {
      category: "Fluid Therapy",
      indication: "Circulatory support",
      reason:
        "Maintains hydration and circulation."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "methylene-blue",
      priority: "First Line",
      category: "Antidote"
    }

  ],

  stabilization: [

    "Immediately remove animals from nitrate source.",
    "Administer antidotal therapy when indicated.",
    "Provide oxygen support if available.",
    "Maintain circulation and hydration.",
    "Monitor severely affected animals closely.",
    "Identify and correct contaminated feed sources."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Access to nitrate-rich plants",
        weight: 95
      },

      {
        finding: "Recent feed change",
        weight: 90
      },

      {
        finding: "Drought or fertilization stress",
        weight: 85
      },

      {
        finding: "Multiple animals affected suddenly",
        weight: 95
      }

    ],

    clinicalSigns: [

      {
        finding: "Chocolate-brown mucous membranes",
        weight: 100
      },

      {
        finding: "Difficulty breathing",
        weight: 95
      },

      {
        finding: "Weakness and collapse",
        weight: 90
      },

      {
        finding: "Cyanosis",
        weight: 90
      },

      {
        finding: "Sudden death",
        weight: 95
      }

    ],

    biochemistry: [

      {
        finding: "Increased methemoglobin level",
        weight: 100
      }

    ],

    imaging: [

      {
        finding: "No specific imaging findings",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Positive nitrate feed analysis",
        weight: 90
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
        finding: "Alternative cause of respiratory distress confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "respiratory-status",
      parameter: "Respiratory rate, effort, and oxygenation signs",
      frequency: "Continuous during acute cases",
      reason:
        "Monitors severity of oxygen deficiency and response to treatment."
    },

    {
      id: "mucous-membrane-color",
      parameter: "Mucous membrane color",
      frequency: "Frequently during treatment",
      reason:
        "Evaluates improvement of methemoglobinemia."
    },

    {
      id: "methemoglobin-level",
      parameter: "Blood methemoglobin concentration",
      frequency: "During severe poisoning",
      reason:
        "Confirms restoration of normal oxygen-carrying capacity."
    },

    {
      id: "feed-source",
      parameter: "Nitrate level in feed and water sources",
      frequency: "After poisoning event",
      reason:
        "Prevents recurrence by identifying contaminated sources."
    },

    {
      id: "flock-health",
      parameter: "Additional affected animals",
      frequency: "Daily after exposure",
      reason:
        "Detects delayed cases within the group."
    }

  ],

  precautions: [

    {
      id: "feed-testing",
      title: "Test High-Risk Feeds",
      description:
        "Analyze forage and feeds from heavily fertilized or drought-stressed crops before feeding."
    },

    {
      id: "gradual-introduction",
      title: "Gradual Feed Changes",
      description:
        "Introduce new feeds slowly to allow rumen adaptation."
    },

    {
      id: "pasture-management",
      title: "Manage High-Risk Pastures",
      description:
        "Avoid sudden grazing on plants known to accumulate high nitrate levels."
    },

    {
      id: "water-quality",
      title: "Monitor Water Sources",
      description:
        "Check water nitrate contamination, especially after fertilizer runoff."
    },

    {
      id: "balanced-diet",
      title: "Maintain Balanced Nutrition",
      description:
        "Adequate energy availability reduces excessive conversion of nitrate to nitrite in the rumen."
    }

  ],

  prognosis:
    "Prognosis depends on the amount of nitrate consumed and speed of treatment. Animals treated early with effective antidotal therapy may recover rapidly. Severe methemoglobinemia can cause sudden death despite treatment.",

  strengtheningEvidence: [

    "Sudden onset after feed exposure",

    "Chocolate-brown blood or mucous membranes",

    "High methemoglobin concentration",

    "Response to methylene blue therapy"

  ],

  weakeningEvidence: [

    "No nitrate exposure",

    "Normal methemoglobin level",

    "Alternative toxic cause identified"

  ],

  classicFindings: [

    "Respiratory distress",

    "Cyanosis",

    "Chocolate-brown mucous membranes",

    "Weakness",

    "Sudden death"

  ],

  ruleOutFindings: [

    "Hydrogen cyanide poisoning",

    "Pulmonary disease",

    "Septicemia",

    "Anaphylaxis",

    "Cardiac failure"

  ],

};