import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineUreaToxicity: DiseaseCard = {
  id: "bovine-urea-toxicity",

  title: "Bovine Urea Toxicity",

  description:
    "An acute poisoning condition in cattle caused by excessive intake of urea or non-protein nitrogen sources, leading to rapid ammonia accumulation, neurological signs, respiratory failure, and death.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Ammonia Toxicity",
    "Urea Poisoning",
    "Non-Protein Nitrogen Toxicity",
  ],

  overview:
    "Urea toxicity occurs when cattle consume excessive amounts of urea-containing feed or when dietary adaptation is inadequate. Rumen microbes rapidly convert urea into ammonia. When ammonia production exceeds detoxification capacity of the liver, systemic ammonia toxicity develops, affecting the nervous system and causing severe clinical signs.",

  clinicalProblems: [

    "Ammonia accumulation",
    "Neurological dysfunction",
    "Muscle tremors",
    "Bloat",
    "Respiratory failure",
    "Sudden death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess urea supplementation, feed mixing errors, access to fertilizer, and recent dietary changes."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate neurological signs, muscle activity, respiration, and abdominal distension."
    },

    {
      id: "emergency-management",
      step: 3,
      title: "Emergency Management",
      description:
        "Begin immediate treatment to reduce rumen ammonia absorption."
    },

    {
      id: "prevention",
      step: 4,
      title: "Feed Management Review",
      description:
        "Correct feeding practices and prevent recurrence."
    }

  ],

  diagnostics: [

    {
      id: "history",
      name: "Feed and Exposure History",
      priority: "Essential",
      reason:
        "Rapid diagnosis depends on identifying urea exposure."
    },

    {
      id: "rumen-analysis",
      name: "Rumen Fluid Evaluation",
      priority: "Recommended",
      reason:
        "May demonstrate ammonia-related changes."
    },

    {
      id: "blood-analysis",
      name: "Blood Biochemistry",
      priority: "Recommended",
      reason:
        "May identify metabolic disturbances."

    }

  ],

  drugCategories: [

    {
      category: "Supportive Emergency Therapy",
      indication: "Ammonia toxicity",
      reason:
        "Reduces absorption and supports recovery."
    },

    {
      category: "Rumen Modifying Therapy",
      indication: "Rumen ammonia reduction",
      reason:
        "Helps limit ongoing ammonia production."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "acetic-acid",
      priority: "Emergency",
      category: "Rumen Modifying"
    },

    {
      drugId: "cold-water-rumen-support",
      priority: "Emergency",
      category: "Emergency"
    }

  ],

  stabilization: [

    "Remove access to urea source immediately.",
    "Provide emergency supportive therapy.",
    "Reduce rumen ammonia absorption.",
    "Monitor neurological and respiratory status.",
    "Correct feed formulation errors."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent urea supplementation",
        weight: 100
      },

      {
        finding: "Feed mixing error",
        weight: 95
      },

      {
        finding: "Access to fertilizer urea",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Muscle tremors",
        weight: 90
      },

      {
        finding: "Salivation",
        weight: 85
      },

      {
        finding: "Bloat",
        weight: 80
      },

      {
        finding: "Difficulty breathing",
        weight: 90
      },

      {
        finding: "Sudden death",
        weight: 90
      }

    ],

    biochemistry: [

      {
        finding: "Elevated blood ammonia",
        weight: 90
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
        finding: "Rapid onset after urea ingestion",
        weight: 100
      },

      {
        finding: "Ammonia toxicity signs",
        weight: 95
      }

    ],

    against: [

      {
        finding: "No urea exposure",
        weight: -80
      },

      {
        finding: "Alternative neurological disease confirmed",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "neurological-status",
      parameter: "Neurological signs",
      frequency: "During acute phase",
      reason:
        "Monitors improvement or progression of ammonia toxicity."
    },

    {
      id: "respiratory-status",
      parameter: "Respiratory rate and effort",
      frequency: "During emergency management",
      reason:
        "Detects respiratory compromise."
    },

    {
      id: "rumen-function",
      parameter: "Rumen motility and digestive function",
      frequency: "Regular evaluation",
      reason:
        "Assesses recovery of rumen activity."
    },

    {
      id: "feed-management",
      parameter: "Urea concentration in ration",
      frequency: "After poisoning event",
      reason:
        "Prevents recurrence."
    },

    {
      id: "herd-monitoring",
      parameter: "Other exposed animals",
      frequency: "Immediately after exposure",
      reason:
        "Identifies additional affected cattle."

    }

  ],

  precautions: [

    {
      id: "proper-mixing",
      title: "Proper Feed Mixing",
      description:
        "Ensure uniform mixing of urea-containing rations to prevent accidental overdose."
    },

    {
      id: "gradual-adaptation",
      title: "Gradual Adaptation",
      description:
        "Introduce non-protein nitrogen sources slowly to allow rumen adaptation."
    },

    {
      id: "storage-security",
      title: "Urea Storage Safety",
      description:
        "Prevent direct access of animals to urea fertilizer or feed supplements."
    },

    {
      id: "balanced-ration",
      title: "Balanced Nutrition",
      description:
        "Provide adequate fermentable carbohydrates when using urea supplements."

    }

  ],

  prognosis:
    "Prognosis depends on the amount of urea consumed and speed of intervention. Mild cases may recover rapidly, while severe ammonia toxicity can cause irreversible neurological damage and death.",

  strengtheningEvidence: [

    "Known urea ingestion",

    "Rapid onset after feeding",

    "Neurological signs",

    "Response to emergency rumen therapy"

  ],

  weakeningEvidence: [

    "No urea exposure",

    "Slow progressive neurological disease",

    "Alternative toxic cause identified"

  ],

  classicFindings: [

    "Muscle tremors",

    "Salivation",

    "Bloat",

    "Staggering",

    "Sudden collapse"

  ],

  ruleOutFindings: [

    "Lead poisoning",

    "Nitrate poisoning",

    "Hypomagnesemia",

    "Rabies",

    "Cerebrocortical necrosis",

    "Organophosphate poisoning"

  ],

};