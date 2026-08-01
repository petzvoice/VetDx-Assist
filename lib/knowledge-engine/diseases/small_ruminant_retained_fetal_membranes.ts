import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantRetainedFetalMembranes: DiseaseCard = {
  id: "small-ruminant-retained-fetal-membranes",

  title: "Retained Fetal Membranes",

  description:
    "A postpartum reproductive disorder in sheep and goats characterized by failure of normal expulsion of fetal membranes after parturition, increasing the risk of uterine infection, delayed reproductive recovery, and reduced fertility.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Retained Placenta",
    "Retained Placental Membranes",
    "Failure of Placental Expulsion",
  ],

  overview:
    "Retained fetal membranes occur when placental separation and expulsion fail after delivery. In small ruminants, fetal membranes are normally expelled shortly after parturition. Risk factors include dystocia, abortion, premature birth, multiple fetuses, nutritional deficiencies, metabolic disorders, and uterine infections. Retained membranes may serve as a source of bacterial growth and increase the risk of metritis and reduced reproductive performance.",

  clinicalProblems: [

    "Failure of placental expulsion",
    "Uterine contamination",
    "Metritis",
    "Delayed uterine recovery",
    "Reduced fertility"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess time since parturition, occurrence of dystocia, abortion history, nutritional status, and previous reproductive problems."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate presence of retained membranes, vaginal discharge, temperature, appetite, and systemic illness."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Assess reproductive tract condition and identify complications such as metritis or systemic infection."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Management",
      description:
        "Provide supportive care, monitor for infection, and treat complications when present."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Reproductive Examination",
      priority: "Essential",
      reason:
        "Confirms retained membranes and evaluates reproductive tract condition."
    },

    {
      id: "temperature",
      name: "Body Temperature Monitoring",
      priority: "Recommended",
      reason:
        "Detects fever associated with uterine infection."
    },

    {
      id: "blood-profile",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "May identify systemic inflammation or infection."
    }

  ],

  drugCategories: [

    {
      category: "Uterotonics",
      indication: "Support uterine contraction",
      reason:
        "May assist uterine involution in selected cases."
    },

    {
      category: "Antimicrobials",
      indication: "Metritis or uterine infection",
      reason:
        "Treats bacterial complications."
    },

    {
      category: "NSAIDs",
      indication: "Inflammation and pain",
      reason:
        "Provides supportive therapy in affected animals."
    },

    {
      category: "Supportive Therapy",
      indication: "Postpartum recovery",
      reason:
        "Supports appetite, hydration, and recovery."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "oxytocin",
      priority: "Selected Cases",
      category: "Ecbolic"
    },

    {
      drugId: "antibiotics",
      priority: "Infection",
      category: "Antibiotic"
    },

    {
      drugId: "flunixin",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Assess duration of retained membranes.",
    "Monitor temperature and signs of systemic illness.",
    "Avoid forceful manual removal of firmly attached membranes.",
    "Treat uterine infection if present.",
    "Provide nutritional and supportive postpartum care.",
    "Monitor reproductive recovery."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent parturition",
        weight: 100
      },

      {
        finding: "Dystocia history",
        weight: 90
      },

      {
        finding: "Abortion or premature birth",
        weight: 85
      },

      {
        finding: "Multiple fetuses",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Fetal membranes hanging from vulva after expected period",
        weight: 100
      },

      {
        finding: "Foul vaginal discharge",
        weight: 80
      },

      {
        finding: "Fever",
        weight: 75
      },

      {
        finding: "Reduced appetite",
        weight: 70
      }

    ],

    biochemistry: [

      {
        finding: "Inflammatory changes on blood profile",
        weight: 50
      }

    ],

    imaging: [

      {
        finding: "Uterine abnormalities on ultrasound",
        weight: 60
      }

    ],

    supports: [

      {
        finding: "Failure of membrane expulsion after parturition",
        weight: 100
      },

      {
        finding: "Postpartum uterine infection signs",
        weight: 85
      }

    ],

    against: [

      {
        finding: "Normal membrane expulsion",
        weight: -90
      },

      {
        finding: "No recent parturition",
        weight: -100
      }

    ],

  },
    monitoring: [

    {
      id: "membrane-status",
      parameter: "Presence and progression of retained fetal membranes",
      frequency: "Daily until resolution",
      reason:
        "Determines whether membranes are being expelled and identifies complications."
    },

    {
      id: "uterine-infection",
      parameter: "Vaginal discharge, odor, fever, and appetite",
      frequency: "Daily postpartum",
      reason:
        "Detects development of metritis or systemic infection."
    },

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily in high-risk cases",
      reason:
        "Monitors inflammatory response and infection."
    },

    {
      id: "reproductive-recovery",
      parameter: "Uterine involution and future fertility",
      frequency: "During breeding evaluation",
      reason:
        "Assesses long-term reproductive impact."
    },

    {
      id: "milk-production",
      parameter: "Milk yield and udder health",
      frequency: "Daily during lactation",
      reason:
        "Detects postpartum effects on productivity."
    }

  ],

  precautions: [

    {
      id: "nutrition",
      title: "Maintain Proper Nutrition",
      description:
        "Provide adequate energy, protein, vitamins, and minerals during late pregnancy to reduce reproductive complications."
    },

    {
      id: "selenium-vitamin-e",
      title: "Prevent Nutritional Deficiencies",
      description:
        "Ensure appropriate selenium and vitamin E status where deficiency contributes to retained membranes."
    },

    {
      id: "assist-dystocia",
      title: "Proper Management of Difficult Births",
      description:
        "Reduce trauma and infection risk by providing timely and hygienic obstetrical assistance."
    },

    {
      id: "postpartum-monitoring",
      title: "Postpartum Observation",
      description:
        "Monitor recently lambed or kidded females for retained membranes and early signs of infection."
    }

  ],

  prognosis:
    "Prognosis is generally favorable when retained fetal membranes are monitored and complications are prevented. Cases complicated by metritis, toxemia, or delayed treatment may result in reduced fertility or severe illness.",

  strengtheningEvidence: [

    "Recent parturition",

    "Failure of placental expulsion",

    "History of dystocia or abortion",

    "Postpartum uterine infection signs"

  ],

  weakeningEvidence: [

    "Normal postpartum recovery",

    "No retained membranes present",

    "Alternative cause of illness identified"

  ],

  classicFindings: [

    "Retained placenta",

    "Postpartum vaginal discharge",

    "Reduced appetite",

    "Fever when complicated",

    "Risk of metritis"

  ],

  ruleOutFindings: [

    "Normal postpartum discharge",

    "Metritis without retained membranes",

    "Vaginal prolapse",

    "Uterine prolapse",

    "Dystocia-related trauma"

  ],

};
