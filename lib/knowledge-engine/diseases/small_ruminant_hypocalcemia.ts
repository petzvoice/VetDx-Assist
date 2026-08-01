import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantHypocalcemia: DiseaseCard = {
  id: "small-ruminant-hypocalcemia",

  title: "Hypocalcemia",

  description:
    "An acute metabolic disorder of sheep and goats caused by decreased blood calcium concentration, most commonly occurring during late gestation or early lactation, resulting in muscle weakness, recumbency, ruminal stasis, and potentially death if untreated.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Milk Fever",
    "Parturient Paresis",
    "Periparturient Hypocalcemia",
  ],

  overview:
    "Hypocalcemia develops when calcium demand during late pregnancy or early lactation exceeds the animal's ability to maintain normal serum calcium concentrations. Multiple fetuses, heavy milk production, stress, transportation, and inadequate dietary calcium adaptation increase risk. Rapid diagnosis and intravenous calcium administration usually result in an excellent clinical response.",

  clinicalProblems: [

    "Hypocalcemia",
    "Muscle weakness",
    "Ruminal hypomotility",
    "Recumbency",
    "Reduced feed intake",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess stage of pregnancy or lactation, litter size, nutritional management, transport, and previous episodes."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate mentation, posture, muscle strength, rumen motility, heart rate, and body temperature."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Measure serum calcium and evaluate concurrent metabolic disorders."
    },

    {
      id: "management",
      step: 4,
      title: "Emergency Treatment",
      description:
        "Administer calcium therapy promptly with appropriate supportive care and correction of underlying risk factors."
    }

  ],

  diagnostics: [

    {
      id: "serum-calcium",
      name: "Serum Calcium Concentration",
      priority: "Essential",
      reason:
        "Confirms hypocalcemia."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates concurrent electrolyte and metabolic abnormalities."
    },

    {
      id: "response-treatment",
      name: "Response to Calcium Therapy",
      priority: "Recommended",
      reason:
        "Rapid improvement strongly supports the diagnosis."
    }

  ],

  drugCategories: [

    {
      category: "Calcium Preparations",
      indication: "Correction of hypocalcemia",
      reason:
        "Rapidly restores circulating calcium concentrations."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration and supportive care",
      reason:
        "Maintains circulatory stability."
    },

    {
      category: "Energy Supplements",
      indication: "Concurrent metabolic disease",
      reason:
        "Useful when pregnancy toxemia is also present."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "calcium-borogluconate",
      priority: "Emergency",
      category: "Supplement"
    },

    {
      drugId: "dextrose",
      priority: "Supportive",
      category: "Supplement"
    }

  ],

  stabilization: [

    "Administer intravenous calcium slowly while monitoring the heart.",
    "Continue oral calcium supplementation when appropriate.",
    "Provide comfortable bedding for recumbent animals.",
    "Correct dehydration if present.",
    "Treat concurrent metabolic disorders.",
    "Improve nutritional management."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Late pregnancy or early lactation",
        weight: 100
      },

      {
        finding: "Multiple fetuses",
        weight: 90
      },

      {
        finding: "Recent transport or stress",
        weight: 70
      }

    ],

    clinicalSigns: [

      {
        finding: "Muscle weakness",
        weight: 95
      },

      {
        finding: "Recumbency",
        weight: 100
      },

      {
        finding: "Cold extremities",
        weight: 75
      },

      {
        finding: "Reduced rumen motility",
        weight: 90
      },

      {
        finding: "Rapid improvement after calcium administration",
        weight: 100
      }

    ],

    biochemistry: [

      {
        finding: "Low serum calcium concentration",
        weight: 100
      },

      {
        finding: "Possible concurrent hypophosphatemia",
        weight: 50
      }

    ],

    imaging: [

      {
        finding: "No characteristic imaging abnormalities",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Confirmed hypocalcemia",
        weight: 100
      },

      {
        finding: "Rapid clinical response following calcium therapy",
        weight: 100
      }

    ],

    against: [

      {
        finding: "Normal serum calcium concentration",
        weight: -80
      },

      {
        finding: "Alternative cause of recumbency identified",
        weight: -70
      }

    ],

  },
  monitoring: [

    {
      id: "serum-calcium",
      parameter: "Serum calcium concentration",
      frequency: "As clinically indicated after treatment",
      reason:
        "Confirms correction of hypocalcemia and detects recurrence."
    },

    {
      id: "cardiovascular-status",
      parameter: "Heart rate and cardiac rhythm",
      frequency: "Continuously during intravenous calcium administration",
      reason:
        "Detects calcium-induced cardiac arrhythmias."
    },

    {
      id: "standing-ability",
      parameter: "Ability to stand and walk",
      frequency: "Every 2–6 hours after treatment",
      reason:
        "Evaluates response to calcium therapy and neurological recovery."
    },

    {
      id: "rumen-function",
      parameter: "Rumen motility and appetite",
      frequency: "Daily",
      reason:
        "Assesses restoration of gastrointestinal function."
    },

    {
      id: "metabolic-screening",
      parameter: "Evaluation for concurrent metabolic disorders",
      frequency: "As clinically indicated",
      reason:
        "Identifies pregnancy toxemia, hypomagnesemia, or other concurrent conditions."

    }

  ],

  precautions: [

    {
      id: "nutrition",
      title: "Balanced Mineral Nutrition",
      description:
        "Provide appropriately balanced dietary calcium and phosphorus throughout late gestation and early lactation."
    },

    {
      id: "body-condition",
      title: "Maintain Optimal Body Condition",
      description:
        "Avoid excessive obesity and underconditioning before parturition."
    },

    {
      id: "high-risk",
      title: "Monitor High-Risk Animals",
      description:
        "Closely observe animals carrying multiple fetuses or producing large amounts of milk."
    },

    {
      id: "stress-reduction",
      title: "Reduce Periparturient Stress",
      description:
        "Minimize transportation, prolonged fasting, overcrowding, and environmental stress around parturition."

    }

  ],

  prognosis:
    "Prognosis is excellent when hypocalcemia is recognized early and treated promptly. Delayed treatment, prolonged recumbency, aspiration pneumonia, or concurrent metabolic disorders worsen the prognosis.",

  strengtheningEvidence: [

    "Low serum calcium concentration",

    "Rapid response to calcium administration",

    "Late gestation or early lactation",

    "Reduced rumen motility"

  ],

  weakeningEvidence: [

    "Normal serum calcium concentration",

    "Failure to improve following calcium therapy",

    "Alternative cause of recumbency confirmed"

  ],

  classicFindings: [

    "Muscle weakness",

    "Recumbency",

    "Ruminal stasis",

    "Cold extremities",

    "Rapid improvement after calcium therapy"

  ],

  ruleOutFindings: [

    "Pregnancy toxemia",

    "Hypomagnesemia",

    "Listeriosis",

    "Polioencephalomalacia",

    "Traumatic injury",

    "Severe mastitis"

  ],

};