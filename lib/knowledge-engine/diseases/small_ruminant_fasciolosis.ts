import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantFasciolosis: DiseaseCard = {
  id: "small-ruminant-fasciolosis",

  title: "Fasciolosis",

  description:
    "A liver fluke disease of sheep and goats caused by Fasciola hepatica and Fasciola gigantica, resulting in hepatic damage, anemia, weight loss, reduced productivity, and death in severe infections.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Liver Fluke Infection",
    "Fasciola Infection",
    "Hepatic Trematodiasis",
  ],

  overview:
    "Fasciolosis is an important parasitic disease affecting grazing sheep and goats. Infection occurs when animals ingest metacercariae attached to vegetation in contaminated wet pastures. Immature flukes migrate through the liver causing tissue damage, while adult flukes reside in bile ducts causing chronic inflammation, fibrosis, anemia, and reduced production. Disease severity depends on parasite burden, nutritional status, and environmental conditions supporting snail intermediate hosts.",

  clinicalProblems: [

    "Liver damage",
    "Anemia",
    "Weight loss",
    "Hypoproteinemia",
    "Reduced productivity",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess grazing in wet areas, access to marshy pastures, seasonal occurrence, and previous fluke control programs."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate body condition, mucous membrane color, abdominal distension, submandibular edema, and signs of weakness."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Perform fecal examination, serum biochemical evaluation, and imaging or postmortem examination when necessary."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Control",
      description:
        "Administer effective flukicides, improve pasture management, and control intermediate snail hosts."
    }

  ],

  diagnostics: [

    {
      id: "fecal-examination",
      name: "Fecal Examination for Fluke Eggs",
      priority: "Essential",
      reason:
        "Detects Fasciola eggs in chronic infections."
    },

    {
      id: "serum-biochemistry",
      name: "Liver Function Tests",
      priority: "Recommended",
      reason:
        "Evaluates hepatic injury and reduced liver function."
    },

    {
      id: "ultrasound",
      name: "Abdominal Ultrasonography",
      priority: "Recommended",
      reason:
        "May identify liver abnormalities in advanced cases."
    },

    {
      id: "postmortem",
      name: "Postmortem Examination",
      priority: "Essential",
      reason:
        "Confirms liver fluke infection and assesses lesions."
    }

  ],

  drugCategories: [

    {
      category: "Flukicides",
      indication: "Fasciola elimination",
      reason:
        "Removes liver fluke infection."
    },

    {
      category: "Nutritional Support",
      indication: "Recovery",
      reason:
        "Improves response after hepatic damage."
    },

    {
      category: "Iron Supplementation",
      indication: "Anemia support",
      reason:
        "Supports recovery in chronic blood loss cases."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "triclabendazole",
      priority: "First Line",
      category: "Flukicides"
    },

    {
      drugId: "closantel",
      priority: "Alternative",
      category: "Flukicides"
    },

    {
      drugId: "nitroxynil",
      priority: "Alternative",
      category: "Flukicides"
    }

  ],

  stabilization: [

    "Assess severity of anemia and liver dysfunction.",
    "Administer appropriate flukicide therapy.",
    "Provide nutritional supplementation.",
    "Correct dehydration and weakness.",
    "Move animals away from contaminated wet pastures.",
    "Implement long-term fluke control measures."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Grazing in wet or marshy areas",
        weight: 95
      },

      {
        finding: "Seasonal occurrence",
        weight: 85
      },

      {
        finding: "Poor fluke control program",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Weight loss",
        weight: 90
      },

      {
        finding: "Anemia",
        weight: 85
      },

      {
        finding: "Bottle jaw",
        weight: 85
      },

      {
        finding: "Weakness",
        weight: 85
      },

      {
        finding: "Poor productivity",
        weight: 90
      }

    ],

    biochemistry: [

      {
        finding: "Elevated liver enzymes",
        weight: 85
      },

      {
        finding: "Low serum protein",
        weight: 75
      }

    ],

    imaging: [

      {
        finding: "Liver abnormalities on ultrasound",
        weight: 75
      }

    ],

    supports: [

      {
        finding: "Fasciola eggs detected in feces",
        weight: 100
      },

      {
        finding: "Liver flukes identified at necropsy",
        weight: 100
      }

    ],

    against: [

      {
        finding: "No exposure to wet pasture",
        weight: -40
      },

      {
        finding: "Alternative liver disease confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "liver-function",
      parameter: "Liver enzymes and biochemical profile",
      frequency: "Before treatment and during recovery",
      reason:
        "Evaluates hepatic injury and improvement after flukicide therapy."
    },

    {
      id: "fecal-egg-count",
      parameter: "Fecal examination for Fasciola eggs",
      frequency: "4–12 weeks after treatment",
      reason:
        "Assesses treatment success and reinfection."
    },

    {
      id: "body-condition",
      parameter: "Body condition score and weight",
      frequency: "Monthly",
      reason:
        "Monitors recovery and production improvement."
    },

    {
      id: "anemia",
      parameter: "Packed cell volume and mucous membrane color",
      frequency: "During severe infections",
      reason:
        "Monitors recovery from anemia and blood loss."
    },

    {
      id: "pasture-risk",
      parameter: "Wet pasture exposure and snail habitat monitoring",
      frequency: "Seasonally",
      reason:
        "Helps prevent reinfection by identifying high-risk areas."
    }

  ],

  precautions: [

    {
      id: "pasture-management",
      title: "Manage Wet Grazing Areas",
      description:
        "Avoid grazing animals in marshy, waterlogged areas where snail intermediate hosts are present."
    },

    {
      id: "strategic-treatment",
      title: "Strategic Flukicide Treatment",
      description:
        "Use flukicides at appropriate times based on local parasite life cycle and risk periods."
    },

    {
      id: "snail-control",
      title: "Reduce Snail Habitats",
      description:
        "Improve drainage and reduce environmental conditions that support intermediate snail hosts."
    },

    {
      id: "quarantine",
      title: "Treat Introduced Animals",
      description:
        "Examine and treat new animals before introducing them into an established flock."
    }

  ],

  prognosis:
    "Prognosis is generally favorable when fasciolosis is detected early and effective flukicide therapy is provided. Severe acute hepatic damage, extensive fibrosis, anemia, or chronic weight loss may result in poor recovery and increased mortality.",

  strengtheningEvidence: [

    "Exposure to wet contaminated pastures",

    "Fasciola eggs detected",

    "Liver enzyme elevation",

    "Improvement after flukicide treatment"

  ],

  weakeningEvidence: [

    "No wet pasture exposure",

    "Negative parasite testing",

    "Alternative liver disease identified"

  ],

  classicFindings: [

    "Weight loss",

    "Anemia",

    "Bottle jaw",

    "Poor growth",

    "Liver damage"

  ],

  ruleOutFindings: [

    "Haemonchosis",

    "Gastrointestinal nematodiasis",

    "Chronic hepatitis",

    "Copper toxicity",

    "Johne's disease",

    "Nutritional deficiency"

  ],

};
