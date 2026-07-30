import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineRumenAcidosis: DiseaseCard = {
  id: "bovine-rumen-acidosis",

  title: "Bovine Rumen Acidosis",

  description:
    "A metabolic digestive disorder of cattle caused by excessive fermentation of rapidly digestible carbohydrates in the rumen, resulting in reduced rumen pH, microbial imbalance, and systemic illness.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Rumen Acidosis",
    "Subacute Ruminal Acidosis",
    "Acute Ruminal Acidosis",
    "Grain Overload",
  ],

  overview:
    "Rumen acidosis occurs when cattle consume excessive amounts of rapidly fermentable carbohydrates such as grain or high-energy feed. Increased production of volatile fatty acids and lactic acid lowers rumen pH, disrupting normal microbial populations. Severe cases may lead to rumenitis, laminitis, dehydration, liver abscesses, and death.",

  clinicalProblems: [

    "Rumen fermentation disorder",
    "Reduced feed intake",
    "Diarrhea",
    "Dehydration",
    "Rumen dysfunction",
    "Laminitis",
    "Production loss",
    "Death in severe cases"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent dietary changes, grain feeding, concentrate intake, feed mixing errors, and sudden access to carbohydrate-rich feeds."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate rumen motility, appetite, fecal consistency, dehydration, abdominal discomfort, and gait abnormalities."
    },

    {
      id: "rumen-analysis",
      step: 3,
      title: "Rumen Fluid Examination",
      description:
        "Evaluate rumen pH, color, odor, protozoal activity, and fermentation status when required."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Evaluation",
      description:
        "Assess metabolic disturbances including acid-base imbalance and dehydration."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Correct rumen pH imbalance, provide supportive therapy, modify diet, and prevent recurrence."
    }

  ],

  diagnostics: [

    {
      id: "rumen-ph",
      name: "Rumen Fluid pH Analysis",
      priority: "Essential",
      reason:
        "Confirms ruminal acidification."
    },

    {
      id: "history",
      name: "Dietary History Evaluation",
      priority: "Essential",
      reason:
        "Identifies carbohydrate overload and feeding errors."
    },

    {
      id: "blood-gas",
      name: "Blood Gas and Acid-Base Evaluation",
      priority: "Recommended",
      reason:
        "Detects systemic metabolic acidosis."
    },

    {
      id: "fecal-examination",
      name: "Fecal Evaluation",
      priority: "Recommended",
      reason:
        "Assesses digestive disturbance."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Dehydration and metabolic imbalance",
      reason:
        "Restores hydration and circulation."
    },

    {
      category: "Buffers",
      indication: "Rumen pH correction",
      reason:
        "Helps restore rumen environment."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Provides supportive relief."
    },

    {
      category: "Supportive Therapy",
      indication: "Recovery",
      reason:
        "Supports rumen function and nutrition."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "sodium-bicarbonate",
      priority: "Initial Therapy",
      category: "Buffers"
    },

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Remove access to high-grain feed.",
    "Provide fluid therapy when dehydrated.",
    "Correct rumen acidosis.",
    "Restore normal feeding gradually.",
    "Monitor for laminitis.",
    "Prevent sudden dietary changes."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent grain overload",
        weight: 100
      },

      {
        finding: "Sudden diet change",
        weight: 90
      },

      {
        finding: "High concentrate feeding",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Reduced appetite",
        weight: 80
      },

      {
        finding: "Diarrhea",
        weight: 85
      },

      {
        finding: "Depression",
        weight: 75
      },

      {
        finding: "Rumen stasis",
        weight: 80
      },

      {
        finding: "Lameness from laminitis",
        weight: 70
      }

    ],

    biochemistry: [

      {
        finding: "Metabolic acidosis",
        weight: 90
      },

      {
        finding: "Dehydration changes",
        weight: 70
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
        finding: "Low rumen pH",
        weight: 100
      },

      {
        finding: "History of carbohydrate overload",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Normal rumen pH",
        weight: -80
      },

      {
        finding: "Alternative digestive disorder confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "rumen-function",
      parameter: "Rumen motility and contractions",
      frequency: "Daily",
      reason:
        "Monitors recovery of rumen activity."
    },

    {
      id: "feed-intake",
      parameter: "Feed intake and appetite",
      frequency: "Daily",
      reason:
        "Evaluates restoration of normal feeding behavior."
    },

    {
      id: "fecal-consistency",
      parameter: "Fecal consistency",
      frequency: "Daily",
      reason:
        "Monitors gastrointestinal recovery."
    },

    {
      id: "laminitis",
      parameter: "Gait and hoof health",
      frequency: "Regular evaluation",
      reason:
        "Detects secondary laminitis associated with acidosis."
    },

    {
      id: "production",
      parameter: "Milk production and body condition",
      frequency: "Regular evaluation",
      reason:
        "Assesses production recovery."

    }

  ],

  precautions: [

    {
      id: "diet-management",
      title: "Feed Management",
      description:
        "Introduce high-energy feeds gradually and maintain appropriate forage-to-concentrate ratios."
    },

    {
      id: "feed-transition",
      title: "Gradual Dietary Changes",
      description:
        "Avoid sudden changes in concentrate feeding to allow rumen microbes to adapt."
    },

    {
      id: "monitoring",
      title: "Early Detection",
      description:
        "Monitor feed intake, manure consistency, and production changes in high-producing cattle."
    }

  ],

  prognosis:
    "Prognosis depends on severity. Mild cases may recover with dietary correction and supportive management, while severe acute acidosis may result in systemic complications, laminitis, or death.",

  strengtheningEvidence: [

    "Recent grain overload",

    "Low rumen pH",

    "Metabolic acidosis",

    "Reduced feed intake with diarrhea"

  ],

  weakeningEvidence: [

    "Normal rumen pH",

    "No dietary risk factors",

    "Alternative gastrointestinal disease confirmed"

  ],

  classicFindings: [

    "History of sudden grain intake",

    "Depression",

    "Diarrhea",

    "Rumen stasis",

    "Laminitis"

  ],

  ruleOutFindings: [

    "Bovine bloat",

    "Traumatic reticuloperitonitis",

    "Displaced abomasum",

    "Salmonellosis",

    "Parasitic gastroenteritis",

    "Feed poisoning"

  ],

};