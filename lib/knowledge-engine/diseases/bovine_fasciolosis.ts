import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineFasciolosis: DiseaseCard = {
  id: "bovine-fasciolosis",

  title: "Bovine Fasciolosis",

  description:
    "A liver fluke infection of cattle caused by Fasciola species, resulting in liver damage, reduced productivity, anemia, weight loss, and sometimes death.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Liver Fluke Disease",
    "Fasciola hepatica Infection",
    "Fasciola gigantica Infection",
  ],

  overview:
    "Fasciolosis is a trematode parasitic disease affecting the liver and bile ducts of cattle. Infection occurs through ingestion of metacercariae present on contaminated vegetation. Migrating immature flukes damage liver tissue, while adult flukes cause chronic bile duct inflammation and impaired liver function.",

  clinicalProblems: [

    "Liver damage",
    "Chronic weight loss",
    "Anemia",
    "Reduced milk production",
    "Poor growth",
    "Hypoproteinemia"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess grazing conditions, wet pasture exposure, seasonal occurrence, and parasite control history."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate body condition, anemia, weight loss, and signs of chronic disease."
    },

    {
      id: "fecal-testing",
      step: 3,
      title: "Fecal Examination",
      description:
        "Detect Fasciola eggs and assess parasite infection."
    },

    {
      id: "laboratory-evaluation",
      step: 4,
      title: "Laboratory Evaluation",
      description:
        "Assess liver function and protein status when required."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Provide anthelmintic treatment and improve pasture management."
    }

  ],

  diagnostics: [

    {
      id: "fecal-examination",
      name: "Fecal Sedimentation Test",
      priority: "Essential",
      reason:
        "Detects Fasciola eggs."
    },

    {
      id: "serology",
      name: "Fasciola Antibody Testing",
      priority: "Recommended",
      reason:
        "May detect infection earlier than egg detection."
    },

    {
      id: "liver-function",
      name: "Liver Function Evaluation",
      priority: "Recommended",
      reason:
        "Assesses liver damage."
    },

    {
      id: "ultrasound",
      name: "Liver Ultrasonography",
      priority: "Recommended",
      reason:
        "May identify liver abnormalities."

    }

  ],

  drugCategories: [

    {
      category: "Anthelmintics",
      indication: "Liver fluke infection",
      reason:
        "Eliminates Fasciola parasites."
    },

    {
      category: "Supportive Therapy",
      indication: "Liver damage recovery",
      reason:
        "Supports affected animals."
    },

    {
      category: "Nutritional Support",
      indication: "Weight loss and production loss",
      reason:
        "Improves recovery."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "triclabendazole",
      priority: "First Line",
      category: "Anthelmintics"
    },

    {
      drugId: "closantel",
      priority: "Alternative",
      category: "Anthelmintics"
    }

  ],

  stabilization: [

    "Assess severity of liver damage.",
    "Provide appropriate flukicide therapy.",
    "Improve nutrition.",
    "Reduce exposure to contaminated pastures.",
    "Monitor recovery and production."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Grazing wet marshy pasture",
        weight: 90
      },

      {
        finding: "Seasonal parasite exposure",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Weight loss",
        weight: 85
      },

      {
        finding: "Anemia",
        weight: 90
      },

      {
        finding: "Reduced milk production",
        weight: 80
      },

      {
        finding: "Poor body condition",
        weight: 85
      }

    ],

    biochemistry: [

      {
        finding: "Low serum protein",
        weight: 70
      },

      {
        finding: "Elevated liver enzymes",
        weight: 75
      }

    ],

    imaging: [

      {
        finding: "Liver lesions on ultrasound",
        weight: 70
      }

    ],

    supports: [

      {
        finding: "Fasciola eggs detected",
        weight: 100
      },

      {
        finding: "Compatible liver disease signs",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Negative parasite testing",
        weight: -50
      },

      {
        finding: "Alternative liver disease confirmed",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "body-condition",
      parameter: "Body weight and body condition score",
      frequency: "Regular evaluation",
      reason:
        "Monitors recovery from chronic liver disease."
    },

    {
      id: "anemia",
      parameter: "Mucous membrane color and anemia signs",
      frequency: "Regular evaluation",
      reason:
        "Assesses improvement of blood loss and liver dysfunction."
    },

    {
      id: "production",
      parameter: "Milk production and growth performance",
      frequency: "Regular evaluation",
      reason:
        "Measures restoration of productivity."
    },

    {
      id: "fecal-egg-output",
      parameter: "Fasciola egg shedding",
      frequency: "Post-treatment monitoring",
      reason:
        "Evaluates parasite control effectiveness."
    },

    {
      id: "liver-function",
      parameter: "Liver function indicators",
      frequency: "When clinically indicated",
      reason:
        "Monitors recovery from hepatic damage."

    }

  ],

  precautions: [

    {
      id: "pasture-management",
      title: "Pasture Management",
      description:
        "Reduce access to wet marshy areas where intermediate snail hosts are present."
    },

    {
      id: "strategic-deworming",
      title: "Strategic Anthelmintic Program",
      description:
        "Implement parasite control programs based on local risk and season."
    },

    {
      id: "snail-control",
      title: "Intermediate Host Control",
      description:
        "Reduce snail habitats where feasible to limit transmission."
    },

    {
      id: "nutrition",
      title: "Nutritional Support",
      description:
        "Provide adequate nutrition to improve resistance and recovery."

    }

  ],

  prognosis:
    "Prognosis is generally good in chronic cases treated before severe liver damage occurs. Heavy infections causing acute liver injury may result in mortality.",

  strengtheningEvidence: [

    "Exposure to wet pasture",

    "Positive Fasciola egg detection",

    "Anemia and weight loss",

    "Reduced production"

  ],

  weakeningEvidence: [

    "Negative parasite testing",

    "No liver abnormalities",

    "Alternative cause of weight loss confirmed"

  ],

  classicFindings: [

    "Poor body condition",

    "Anemia",

    "Weight loss",

    "Reduced milk production",

    "Chronic weakness"

  ],

  ruleOutFindings: [

    "Gastrointestinal nematodiasis",

    "Johne's disease",

    "Chronic liver disease",

    "Malnutrition",

    "Chronic bacterial infection"

  ],

};