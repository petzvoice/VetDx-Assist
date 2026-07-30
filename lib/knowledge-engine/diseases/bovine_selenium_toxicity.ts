import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineSeleniumToxicity: DiseaseCard = {
  id: "bovine-selenium-toxicity",

  title: "Bovine Selenium Toxicity",

  description:
    "A toxic disorder in cattle caused by excessive selenium intake, resulting in gastrointestinal disturbances, neurological abnormalities, hoof and hair changes, and sometimes death.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Selenosis",
    "Selenium Poisoning",
    "Chronic Selenium Toxicity",
  ],

  overview:
    "Selenium toxicity occurs when cattle consume excessive selenium from plants, supplements, mineral mixtures, or contaminated feed. Selenium is an essential trace mineral, but excessive intake causes oxidative tissue damage. Toxicity may occur as acute, subacute, or chronic selenosis.",

  clinicalProblems: [

    "Oxidative tissue damage",
    "Gastrointestinal disturbance",
    "Neurological abnormalities",
    "Hoof damage",
    "Hair loss",
    "Reduced productivity"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "Exposure History",
      description:
        "Assess mineral supplementation, selenium-rich feed sources, and environmental exposure."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate gastrointestinal signs, neurological changes, and physical abnormalities."
    },

    {
      id: "laboratory-testing",
      step: 3,
      title: "Laboratory Evaluation",
      description:
        "Measure selenium concentrations in blood, feed, or tissues."
    },

    {
      id: "management",
      step: 4,
      title: "Toxicity Management",
      description:
        "Remove selenium source and provide supportive care."

    }

  ],

  diagnostics: [

    {
      id: "selenium-testing",
      name: "Selenium Concentration Testing",
      priority: "Essential",
      reason:
        "Confirms selenium exposure."
    },

    {
      id: "feed-analysis",
      name: "Feed and Mineral Analysis",
      priority: "Recommended",
      reason:
        "Identifies source of excessive selenium."
    },

    {
      id: "clinical-evaluation",
      name: "Clinical Assessment",
      priority: "Essential",
      reason:
        "Evaluates toxicity severity."

    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "Toxicity management",
      reason:
        "Maintains hydration and supports recovery."
    },

    {
      category: "Nutritional Management",
      indication: "Mineral imbalance correction",
      reason:
        "Prevents continued selenium exposure."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "supportive-fluid-therapy",
      priority: "Supportive",
      category: "Fluid Therapy"
    }

  ],

  stabilization: [

    "Remove selenium-containing feed or supplements.",
    "Provide supportive care.",
    "Monitor gastrointestinal and neurological signs.",
    "Correct mineral supplementation errors.",
    "Prevent exposure of other animals."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Excess selenium supplementation",
        weight: 100
      },

      {
        finding: "Selenium-rich feed exposure",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Loss of hair",
        weight: 80
      },

      {
        finding: "Hoof abnormalities",
        weight: 90
      },

      {
        finding: "Weight loss",
        weight: 75
      },

      {
        finding: "Digestive disturbance",
        weight: 70
      },

      {
        finding: "Neurological abnormalities",
        weight: 75
      }

    ],

    biochemistry: [

      {
        finding: "Elevated selenium concentration",
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
        finding: "High selenium exposure with compatible signs",
        weight: 100
      },

      {
        finding: "Elevated selenium levels",
        weight: 100
      }

    ],

    against: [

      {
        finding: "No selenium exposure",
        weight: -70
      },

      {
        finding: "Alternative mineral toxicity confirmed",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "neurological-status",
      parameter: "Neurological signs and coordination",
      frequency: "Daily during acute cases",
      reason:
        "Monitors severity and recovery."
    },

    {
      id: "feed-intake",
      parameter: "Feed intake and body condition",
      frequency: "Daily",
      reason:
        "Evaluates recovery and nutritional status."
    },

    {
      id: "hoof-health",
      parameter: "Hoof condition and lameness",
      frequency: "Regular evaluation",
      reason:
        "Monitors chronic selenium-related hoof damage."
    },

    {
      id: "selenium-levels",
      parameter: "Selenium concentration in blood or tissues",
      frequency: "When available",
      reason:
        "Evaluates exposure status."
    },

    {
      id: "feed-source",
      parameter: "Selenium content in feed and mineral supplements",
      frequency: "After diagnosis",
      reason:
        "Prevents recurrence."

    }

  ],

  precautions: [

    {
      id: "supplement-management",
      title: "Mineral Supplement Management",
      description:
        "Avoid excessive selenium supplementation and follow recommended inclusion levels."
    },

    {
      id: "feed-testing",
      title: "Feed Analysis",
      description:
        "Test feed sources when selenium exposure is suspected."
    },

    {
      id: "accurate-dosing",
      title: "Accurate Supplement Dosing",
      description:
        "Prevent errors during preparation and administration of mineral mixtures."
    },

    {
      id: "storage",
      title: "Supplement Storage",
      description:
        "Store mineral supplements safely to prevent accidental overconsumption."

    }

  ],

  prognosis:
    "Prognosis depends on severity and duration of selenium exposure. Mild cases may recover after removal of the source, while severe toxicity may result in permanent damage or death.",

  strengtheningEvidence: [

    "History of excessive selenium supplementation",

    "Elevated selenium concentration",

    "Hoof and hair abnormalities",

    "Multiple animals affected after mineral exposure"

  ],

  weakeningEvidence: [

    "Normal selenium levels",

    "No selenium exposure",

    "Alternative mineral toxicity confirmed"

  ],

  classicFindings: [

    "Hair loss",

    "Hoof abnormalities",

    "Weight loss",

    "Weakness",

    "Neurological abnormalities"

  ],

  ruleOutFindings: [

    "Copper toxicity",

    "Arsenic poisoning",

    "Lead poisoning",

    "Nutritional deficiency",

    "Chronic infectious disease"

  ],

};