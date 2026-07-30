import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineKetosis: DiseaseCard = {
  id: "bovine-ketosis",

  title: "Bovine Ketosis",

  description:
    "A metabolic disorder of dairy cattle caused by negative energy balance after calving, resulting in excessive ketone body production, reduced appetite, and decreased milk production.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Acetonemia",
    "Hyperketonemia",
    "Primary Ketosis",
    "Secondary Ketosis",
  ],

  overview:
    "Bovine ketosis commonly occurs during early lactation when energy requirements for milk production exceed dietary energy intake. Increased fat mobilization leads to excessive production of ketone bodies including beta-hydroxybutyrate (BHBA), acetoacetate, and acetone. The disease may reduce production and predispose cows to other postpartum disorders.",

  clinicalProblems: [

    "Negative energy balance",
    "Ketone accumulation",
    "Reduced feed intake",
    "Milk production loss",
    "Weight loss",
    "Digestive dysfunction",
    "Secondary metabolic disease"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess postpartum period, body condition loss, feeding management, and production decline."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate appetite, milk production, body condition, behavior, and signs of metabolic disease."
    },

    {
      id: "ketone-testing",
      step: 3,
      title: "Ketone Detection",
      description:
        "Measure ketone bodies in blood, urine, or milk."
    },

    {
      id: "metabolic-evaluation",
      step: 4,
      title: "Metabolic Evaluation",
      description:
        "Assess associated disorders such as fatty liver or displaced abomasum."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Restore energy balance and improve nutritional support."
    }

  ],

  diagnostics: [

    {
      id: "bhba",
      name: "Blood Beta-Hydroxybutyrate Measurement",
      priority: "Essential",
      reason:
        "Detects increased ketone production."
    },

    {
      id: "milk-ketones",
      name: "Milk Ketone Testing",
      priority: "Recommended",
      reason:
        "Provides screening for ketosis."
    },

    {
      id: "urine-ketones",
      name: "Urine Ketone Testing",
      priority: "Recommended",
      reason:
        "Detects ketone bodies."
    },

    {
      id: "clinical-evaluation",
      name: "Clinical Assessment",
      priority: "Essential",
      reason:
        "Identifies compatible metabolic signs."
    }

  ],

  drugCategories: [

    {
      category: "Metabolic Therapy",
      indication: "Energy deficiency",
      reason:
        "Provides glucose precursors and improves energy balance."
    },

    {
      category: "Supportive Therapy",
      indication: "Recovery",
      reason:
        "Supports nutrition and metabolic recovery."
    },

    {
      category: "Hormonal Therapy",
      indication: "Selected ketosis cases",
      reason:
        "May assist glucose metabolism in specific cases."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "propylene-glycol",
      priority: "First Line",
      category: "Metabolic Therapy"
    },

    {
      drugId: "dextrose",
      priority: "Emergency",
      category: "Metabolic Therapy"
    }

  ],

  stabilization: [

    "Restore energy balance.",
    "Provide oral energy supplementation.",
    "Correct dehydration if present.",
    "Identify and treat concurrent diseases.",
    "Improve feeding management."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Early lactation cow",
        weight: 95
      },

      {
        finding: "High milk production",
        weight: 85
      },

      {
        finding: "Recent body condition loss",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Reduced appetite",
        weight: 85
      },

      {
        finding: "Reduced milk production",
        weight: 90
      },

      {
        finding: "Weight loss",
        weight: 80
      },

      {
        finding: "Depression",
        weight: 70
      },

      {
        finding: "Acetone odor",
        weight: 75
      }

    ],

    biochemistry: [

      {
        finding: "Elevated BHBA",
        weight: 100
      },

      {
        finding: "Increased ketone bodies",
        weight: 95
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
        finding: "Positive ketone test",
        weight: 100
      },

      {
        finding: "Postpartum negative energy balance",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Normal ketone levels",
        weight: -80
      },

      {
        finding: "Alternative metabolic disorder confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "ketone-levels",
      parameter: "Blood BHBA or ketone concentration",
      frequency: "Regular evaluation",
      reason:
        "Monitors response to metabolic therapy."
    },

    {
      id: "feed-intake",
      parameter: "Feed intake and appetite",
      frequency: "Daily",
      reason:
        "Evaluates restoration of energy balance."
    },

    {
      id: "milk-production",
      parameter: "Milk production",
      frequency: "Daily",
      reason:
        "Monitors production recovery."
    },

    {
      id: "body-condition",
      parameter: "Body condition score",
      frequency: "Regular evaluation",
      reason:
        "Assesses ongoing energy status."
    },

    {
      id: "concurrent-disease",
      parameter: "Signs of displaced abomasum or other postpartum disease",
      frequency: "Regular evaluation",
      reason:
        "Detects secondary disorders."

    }

  ],

  precautions: [

    {
      id: "transition-management",
      title: "Transition Cow Management",
      description:
        "Provide balanced nutrition before and after calving to reduce excessive negative energy balance."
    },

    {
      id: "body-condition",
      title: "Body Condition Management",
      description:
        "Avoid excessive body condition loss during late gestation and early lactation."
    },

    {
      id: "feeding-strategy",
      title: "Feeding Strategy",
      description:
        "Ensure adequate energy density and dry matter intake after calving."
    }

  ],

  prognosis:
    "Prognosis is generally good when detected early and treated appropriately. Severe ketosis associated with fatty liver or other metabolic diseases may have a guarded prognosis.",

  strengtheningEvidence: [

    "Early lactation period",

    "Elevated BHBA levels",

    "Reduced milk production",

    "Positive response to energy therapy"

  ],

  weakeningEvidence: [

    "Normal ketone levels",

    "No energy deficit history",

    "Alternative cause of weight loss confirmed"

  ],

  classicFindings: [

    "Reduced appetite",

    "Milk production drop",

    "Weight loss",

    "Positive ketone test",

    "Acetone smell"

  ],

  ruleOutFindings: [

    "Milk fever",

    "Displaced abomasum",

    "Rumen acidosis",

    "Fatty liver syndrome",

    "Toxic mastitis",

    "Hypomagnesemia"

  ],

};