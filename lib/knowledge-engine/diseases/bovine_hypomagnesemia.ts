import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineHypomagnesemia: DiseaseCard = {
  id: "bovine-hypomagnesemia",

  title: "Bovine Hypomagnesemia",

  description:
    "A metabolic disorder of cattle caused by decreased blood magnesium concentration, resulting in nervousness, muscle tremors, convulsions, and sudden death.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Grass Tetany",
    "Magnesium Deficiency",
    "Tetany",
    "Lactation Tetany",
  ],

  overview:
    "Hypomagnesemia occurs when magnesium availability is insufficient to meet the animal's requirements. It is commonly seen in grazing cattle consuming rapidly growing grass with low magnesium availability. Magnesium deficiency affects neuromuscular transmission and may result in hyperexcitability, muscle spasms, seizures, and death if untreated.",

  clinicalProblems: [

    "Low blood magnesium",
    "Neuromuscular dysfunction",
    "Muscle tremors",
    "Convulsions",
    "Sudden death",
    "Reduced productivity"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess grazing conditions, recent pasture growth, lactation status, and mineral supplementation."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate nervous signs, muscle tremors, posture, and seizure activity."
    },

    {
      id: "blood-evaluation",
      step: 3,
      title: "Blood Magnesium Evaluation",
      description:
        "Measure serum magnesium concentration to confirm deficiency."
    },

    {
      id: "management",
      step: 4,
      title: "Disease Management",
      description:
        "Restore magnesium levels and provide supportive emergency care."
    },

    {
      id: "prevention",
      step: 5,
      title: "Prevention",
      description:
        "Improve mineral supplementation and pasture management."
    }

  ],

  diagnostics: [

    {
      id: "serum-magnesium",
      name: "Serum Magnesium Measurement",
      priority: "Essential",
      reason:
        "Confirms hypomagnesemia."
    },

    {
      id: "clinical-examination",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Characteristic nervous signs support diagnosis."
    },

    {
      id: "mineral-profile",
      name: "Mineral Profile",
      priority: "Recommended",
      reason:
        "Evaluates associated electrolyte disturbances."
    }

  ],

  drugCategories: [

    {
      category: "Mineral Therapy",
      indication: "Magnesium deficiency correction",
      reason:
        "Restores magnesium concentration."
    },

    {
      category: "Emergency Therapy",
      indication: "Acute tetany",
      reason:
        "Rapid correction is required in severe cases."
    },

    {
      category: "Supportive Therapy",
      indication: "Recovery support",
      reason:
        "Maintains animal stability."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "magnesium-sulfate",
      priority: "Emergency",
      category: "Mineral Therapy"
    },

    {
      drugId: "calcium-magnesium-solution",
      priority: "Emergency",
      category: "Mineral Therapy"
    }

  ],

  stabilization: [

    "Administer magnesium supplementation.",
    "Handle affected animals carefully.",
    "Control seizures and muscle spasms.",
    "Provide supportive care.",
    "Improve mineral availability."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Grazing rapidly growing pasture",
        weight: 90
      },

      {
        finding: "Lactating cattle",
        weight: 85
      },

      {
        finding: "Poor magnesium supplementation",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Muscle tremors",
        weight: 90
      },

      {
        finding: "Nervousness",
        weight: 85
      },

      {
        finding: "Convulsions",
        weight: 95
      },

      {
        finding: "Sudden death",
        weight: 85
      }

    ],

    biochemistry: [

      {
        finding: "Low serum magnesium",
        weight: 100
      }

    ],

    imaging: [

      {
        finding: "No routine diagnostic imaging findings",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Rapid response to magnesium therapy",
        weight: 100
      },

      {
        finding: "Low blood magnesium concentration",
        weight: 100
      }

    ],

    against: [

      {
        finding: "Normal magnesium concentration",
        weight: -80
      },

      {
        finding: "Alternative neurological disorder confirmed",
        weight: -75
      }

    ],

  },
    monitoring: [

    {
      id: "magnesium-levels",
      parameter: "Blood magnesium concentration",
      frequency: "Regular evaluation",
      reason:
        "Monitors correction of magnesium deficiency."
    },

    {
      id: "neurological-status",
      parameter: "Muscle tremors, nervousness, and seizure activity",
      frequency: "During acute cases",
      reason:
        "Evaluates response to therapy."
    },

    {
      id: "feed-mineral-intake",
      parameter: "Mineral supplementation and pasture intake",
      frequency: "Continuous monitoring",
      reason:
        "Prevents recurrence of deficiency."
    },

    {
      id: "production",
      parameter: "Milk production and body condition",
      frequency: "Regular evaluation",
      reason:
        "Assesses recovery and productivity."
    },

    {
      id: "herd-monitoring",
      parameter: "Other animals in herd",
      frequency: "During outbreaks",
      reason:
        "Detects group-level magnesium deficiency."

    }

  ],

  precautions: [

    {
      id: "magnesium-supplementation",
      title: "Magnesium Supplementation",
      description:
        "Provide adequate magnesium supplementation during high-risk periods."
    },

    {
      id: "pasture-management",
      title: "Pasture Management",
      description:
        "Monitor rapidly growing grass pastures that may have reduced magnesium availability."
    },

    {
      id: "transition-risk",
      title: "High-Risk Period Monitoring",
      description:
        "Closely monitor lactating cows during early spring and periods of nutritional stress."
    }

  ],

  prognosis:
    "Prognosis depends on severity and speed of treatment. Early cases respond well to magnesium therapy, while severe convulsions or prolonged deficiency may result in death.",

  strengtheningEvidence: [

    "Low serum magnesium concentration",

    "Rapid response to magnesium therapy",

    "Grazing rapidly growing pasture",

    "Neuromuscular signs"

  ],

  weakeningEvidence: [

    "Normal magnesium levels",

    "No response to magnesium supplementation",

    "Alternative neurological disease confirmed"

  ],

  classicFindings: [

    "Muscle tremors",

    "Hyperexcitability",

    "Convulsions",

    "Staggering gait",

    "Sudden death"

  ],

  ruleOutFindings: [

    "Milk fever",

    "Hypocalcemia",

    "Lead poisoning",

    "Cerebrocortical necrosis",

    "Rabies",

    "Tetanus"

  ],

};
