import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantHypomagnesemia: DiseaseCard = {
  id: "small-ruminant-hypomagnesemia",

  title: "Hypomagnesemia",

  description:
    "A metabolic disorder of sheep and goats caused by low blood magnesium concentration, resulting in neuromuscular dysfunction, muscle tremors, convulsions, seizures, and sudden death in severe cases.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Grass Tetany",
    "Magnesium Deficiency",
    "Hypomagnesemic Tetany",
  ],

  overview:
    "Hypomagnesemia occurs when magnesium intake or absorption is insufficient to maintain normal blood magnesium levels. It is commonly associated with rapidly growing lush pastures, low magnesium diets, high potassium intake, stress, lactation, and sudden dietary changes. Magnesium is essential for neuromuscular function, and deficiency causes increased nerve excitability leading to tremors, muscle spasms, seizures, collapse, and death.",

  clinicalProblems: [

    "Neuromuscular excitability",
    "Muscle tremors",
    "Convulsions",
    "Seizures",
    "Sudden death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess pasture type, recent diet changes, lactation status, mineral supplementation, weather stress, and previous metabolic disease."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate muscle tremors, gait abnormalities, nervousness, seizures, temperature, and cardiovascular status."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Measure serum magnesium concentration and evaluate related electrolyte abnormalities."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Control",
      description:
        "Administer magnesium supplementation, correct metabolic imbalance, and implement preventive mineral management."
    }

  ],

  diagnostics: [

    {
      id: "serum-magnesium",
      name: "Serum Magnesium Concentration",
      priority: "Essential",
      reason:
        "Confirms magnesium deficiency."
    },

    {
      id: "serum-calcium",
      name: "Serum Calcium Concentration",
      priority: "Recommended",
      reason:
        "Identifies concurrent calcium abnormalities."
    },

    {
      id: "postmortem",
      name: "Postmortem Examination",
      priority: "Recommended",
      reason:
        "Supports diagnosis in sudden death cases."
    }

  ],

  drugCategories: [

    {
      category: "Magnesium Supplementation",
      indication: "Hypomagnesemia correction",
      reason:
        "Restores magnesium concentration and reduces neuromuscular signs."
    },

    {
      category: "Calcium Therapy",
      indication: "Concurrent hypocalcemia",
      reason:
        "Corrects associated mineral imbalance."
    },

    {
      category: "Supportive Therapy",
      indication: "Seizures and metabolic stress",
      reason:
        "Supports stabilization during acute episodes."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "magnesium-sulfate",
      priority: "First Line",
      category: "Supplement"
    },

    {
      drugId: "calcium-magnesium-solution",
      priority: "Supportive",
      category: "Mineral Therapy"
    }

  ],

  stabilization: [

    "Handle affected animals quietly to avoid triggering seizures.",
    "Administer magnesium-containing therapy immediately.",
    "Provide intravenous mineral therapy in severe cases.",
    "Correct dehydration and metabolic disturbances.",
    "Remove animals from high-risk pasture.",
    "Begin preventive mineral supplementation."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Grazing lush rapidly growing pasture",
        weight: 95
      },

      {
        finding: "Early lactation",
        weight: 90
      },

      {
        finding: "Low magnesium supplementation",
        weight: 90
      },

      {
        finding: "Sudden weather change or stress",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Muscle tremors",
        weight: 95
      },

      {
        finding: "Hyperexcitability",
        weight: 90
      },

      {
        finding: "Convulsions",
        weight: 100
      },

      {
        finding: "Collapse",
        weight: 90
      },

      {
        finding: "Sudden death",
        weight: 95
      }

    ],

    biochemistry: [

      {
        finding: "Low serum magnesium",
        weight: 100
      },

      {
        finding: "Low serum calcium",
        weight: 60
      }

    ],

    imaging: [

      {
        finding: "No routine imaging findings",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Rapid response to magnesium therapy",
        weight: 95
      },

      {
        finding: "Low blood magnesium concentration",
        weight: 100
      }

    ],

    against: [

      {
        finding: "Normal magnesium level",
        weight: -70
      },

      {
        finding: "Alternative neurological disease confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "serum-magnesium",
      parameter: "Blood magnesium concentration",
      frequency: "During acute treatment and recovery",
      reason:
        "Confirms correction of magnesium deficiency."
    },

    {
      id: "neurological-status",
      parameter: "Muscle tremors, gait, and seizure activity",
      frequency: "Continuous during acute cases",
      reason:
        "Monitors response to emergency therapy."
    },

    {
      id: "feed-intake",
      parameter: "Feed intake and general activity",
      frequency: "Daily",
      reason:
        "Assesses recovery and metabolic stability."
    },

    {
      id: "mineral-status",
      parameter: "Dietary mineral supplementation assessment",
      frequency: "Monthly or seasonally",
      reason:
        "Prevents recurrence of magnesium deficiency."
    }

  ],

  precautions: [

    {
      id: "magnesium-supplementation",
      title: "Provide Adequate Magnesium",
      description:
        "Ensure diets and mineral mixtures provide sufficient magnesium, especially during high-risk periods."
    },

    {
      id: "pasture-management",
      title: "Manage High-Risk Pastures",
      description:
        "Monitor rapidly growing lush pastures that may have low magnesium availability."
    },

    {
      id: "avoid-stress",
      title: "Reduce Stress Factors",
      description:
        "Minimize sudden dietary changes, transport stress, and environmental stress."
    },

    {
      id: "lactation-monitoring",
      title: "Monitor Lactating Animals",
      description:
        "Pay special attention to lactating females because magnesium requirements increase."
    }

  ],

  prognosis:
    "Prognosis depends on rapid treatment. Animals treated early usually recover well. Severe cases with prolonged seizures, collapse, or delayed magnesium administration may die suddenly or develop complications.",

  strengtheningEvidence: [

    "Low serum magnesium",

    "Neuromuscular signs",

    "High-risk pasture exposure",

    "Rapid response to magnesium therapy"

  ],

  weakeningEvidence: [

    "Normal magnesium concentration",

    "No response to magnesium therapy",

    "Alternative neurological disorder identified"

  ],

  classicFindings: [

    "Muscle tremors",

    "Convulsions",

    "Hyperexcitability",

    "Collapse",

    "Sudden death"

  ],

  ruleOutFindings: [

    "Hypocalcemia",

    "Polioencephalomalacia",

    "Tetanus",

    "Rabies",

    "Plant poisoning",

    "Cerebral infections"

  ],

};