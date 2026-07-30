import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineMilkFever: DiseaseCard = {
  id: "bovine-milk-fever",

  title: "Bovine Milk Fever",

  description:
    "A metabolic disorder of dairy cattle caused by acute hypocalcemia around calving, resulting in muscle weakness, recumbency, and reduced neuromuscular function.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Parturient Paresis",
    "Hypocalcemia",
    "Calcium Deficiency Disease",
  ],

  overview:
    "Milk fever occurs when calcium demand for colostrum and milk production exceeds the ability of the cow to maintain blood calcium concentration. It is most common shortly before or after calving in high-producing dairy cattle. Reduced blood calcium affects muscle contraction, nerve function, and gastrointestinal motility.",

  clinicalProblems: [

    "Hypocalcemia",
    "Muscle weakness",
    "Recumbency",
    "Cold extremities",
    "Reduced rumen motility",
    "Reduced production",
    "Secondary metabolic complications"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess calving status, parity, previous milk fever history, and dietary calcium management."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate weakness, posture, body temperature, rumen activity, and neurologic signs."
    },

    {
      id: "blood-evaluation",
      step: 3,
      title: "Blood Calcium Evaluation",
      description:
        "Measure serum calcium concentration when available."
    },

    {
      id: "management",
      step: 4,
      title: "Disease Management",
      description:
        "Restore calcium levels and provide supportive care."
    }

  ],

  diagnostics: [

    {
      id: "serum-calcium",
      name: "Serum Calcium Measurement",
      priority: "Essential",
      reason:
        "Confirms hypocalcemia."
    },

    {
      id: "clinical-examination",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Characteristic clinical signs support diagnosis."
    }

  ],

  drugCategories: [

    {
      category: "Mineral Therapy",
      indication: "Hypocalcemia correction",
      reason:
        "Restores calcium concentration and neuromuscular function."
    },

    {
      category: "Supportive Therapy",
      indication: "Recumbent animals",
      reason:
        "Prevents secondary complications."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "calcium-borogluconate",
      priority: "Emergency",
      category: "Mineral Therapy"
    }

  ],

  stabilization: [

    "Administer calcium supplementation.",
    "Monitor heart function during calcium administration.",
    "Keep recumbent animals in sternal position.",
    "Prevent secondary injuries.",
    "Monitor recovery of muscle function."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recently calved cow",
        weight: 100
      },

      {
        finding: "High-producing dairy cow",
        weight: 90
      },

      {
        finding: "Previous milk fever history",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Weakness",
        weight: 90
      },

      {
        finding: "Recumbency",
        weight: 95
      },

      {
        finding: "Cold ears and limbs",
        weight: 80
      },

      {
        finding: "Reduced rumen motility",
        weight: 80
      }

    ],

    biochemistry: [

      {
        finding: "Low serum calcium",
        weight: 100
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
        finding: "Response to calcium therapy",
        weight: 100
      },

      {
        finding: "Low blood calcium concentration",
        weight: 100
      }

    ],

    against: [

      {
        finding: "Normal calcium concentration",
        weight: -70
      },

      {
        finding: "Alternative cause of recumbency confirmed",
        weight: -75
      }

    ],

  },
    monitoring: [

    {
      id: "calcium-response",
      parameter: "Response after calcium administration",
      frequency: "During treatment",
      reason:
        "Evaluates restoration of neuromuscular function."
    },

    {
      id: "rumen-function",
      parameter: "Rumen motility and appetite",
      frequency: "Daily",
      reason:
        "Monitors digestive recovery."
    },

    {
      id: "posture",
      parameter: "Standing ability and muscle strength",
      frequency: "Regular evaluation",
      reason:
        "Detects recovery from weakness."
    },

    {
      id: "temperature",
      parameter: "Body temperature and peripheral circulation",
      frequency: "Daily",
      reason:
        "Detects complications associated with prolonged recumbency."
    },

    {
      id: "production",
      parameter: "Milk production",
      frequency: "Daily",
      reason:
        "Assesses recovery after calving."

    }

  ],

  precautions: [

    {
      id: "transition-diet",
      title: "Transition Cow Nutrition",
      description:
        "Manage prepartum mineral nutrition to reduce risk of calcium imbalance after calving."
    },

    {
      id: "calcium-management",
      title: "Calcium Balance Management",
      description:
        "Maintain appropriate dietary strategies before parturition."
    },

    {
      id: "high-risk-cows",
      title: "High-Risk Cow Monitoring",
      description:
        "Closely monitor older cows and animals with previous milk fever episodes."

    }

  ],

  prognosis:
    "Prognosis is excellent when treated early with calcium supplementation. Delayed treatment may lead to prolonged recumbency, secondary complications, and death.",

  strengtheningEvidence: [

    "Recent calving",

    "Recumbency with weakness",

    "Low serum calcium",

    "Rapid response to calcium therapy"

  ],

  weakeningEvidence: [

    "Normal calcium levels",

    "No response to calcium therapy",

    "Alternative neurological or musculoskeletal disease confirmed"

  ],

  classicFindings: [

    "Cold ears",

    "Sternal or lateral recumbency",

    "Muscle weakness",

    "Reduced rumen activity",

    "Depression"

  ],

  ruleOutFindings: [

    "Ketosis",

    "Hypomagnesemia",

    "Toxic mastitis",

    "Trauma",

    "Neurological disorders",

    "Musculoskeletal injury"

  ],

};