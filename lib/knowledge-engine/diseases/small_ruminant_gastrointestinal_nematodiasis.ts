import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantGastrointestinalNematodiasis: DiseaseCard = {
  id: "small-ruminant-gastrointestinal-nematodiasis",

  title: "Gastrointestinal Nematodiasis",

  description:
    "A parasitic disease of sheep and goats caused by infection with gastrointestinal nematodes, resulting in anemia, weight loss, diarrhea, reduced growth, poor productivity, and death in severe infections.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Gastrointestinal Worm Infection",
    "Internal Parasitism",
    "Gastrointestinal Helminthiasis",
  ],

  overview:
    "Gastrointestinal nematodiasis is one of the most important parasitic diseases affecting small ruminants worldwide. Major parasites include Haemonchus contortus, Trichostrongylus spp., Teladorsagia spp., Cooperia spp., and Oesophagostomum spp. Infection occurs through ingestion of infective larvae from contaminated pastures. Disease severity depends on parasite burden, host immunity, nutrition, and environmental conditions. Heavy infections can cause anemia, hypoproteinemia, diarrhea, weight loss, and mortality.",

  clinicalProblems: [

    "Anemia",
    "Weight loss",
    "Diarrhea",
    "Hypoproteinemia",
    "Poor growth",
    "Reduced productivity",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess grazing history, deworming practices, pasture management, age of animals, and previous parasite problems."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate body condition, mucous membrane color, fecal consistency, hydration status, and signs of weakness."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Perform fecal examination, fecal egg count, anemia assessment, and evaluate protein status."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Control",
      description:
        "Administer appropriate anthelmintics, improve nutrition, manage pasture contamination, and implement parasite control programs."
    }

  ],

  diagnostics: [

    {
      id: "fecal-examination",
      name: "Fecal Egg Count",
      priority: "Essential",
      reason:
        "Determines gastrointestinal nematode burden and guides treatment decisions."
    },

    {
      id: "fecal-culture",
      name: "Larval Culture",
      priority: "Recommended",
      reason:
        "Identifies parasite species when required."
    },

    {
      id: "famacha",
      name: "FAMACHA Scoring",
      priority: "Recommended",
      reason:
        "Assesses anemia associated with blood-sucking parasites such as Haemonchus contortus."
    },

    {
      id: "serum-protein",
      name: "Serum Total Protein and Albumin",
      priority: "Recommended",
      reason:
        "Detects protein loss caused by gastrointestinal parasites."
    }

  ],

  drugCategories: [

    {
      category: "Anthelmintics",
      indication: "Nematode elimination",
      reason:
        "Removes gastrointestinal nematode infections."
    },

    {
      category: "Nutritional Support",
      indication: "Recovery support",
      reason:
        "Improves resilience and recovery from parasitism."
    },

    {
      category: "Iron Supplementation",
      indication: "Severe anemia",
      reason:
        "May support recovery in cases with significant blood loss."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "ivermectin",
      priority: "First Line",
      category: "Anthelmintics"
    },

    {
      drugId: "fenbendazole",
      priority: "Alternative",
      category: "Anthelmintics"
    },

    {
      drugId: "moxidectin",
      priority: "Alternative",
      category: "Anthelmintics"
    }

  ],

  stabilization: [

    "Assess severity of anemia and dehydration.",
    "Administer effective anthelmintic therapy based on parasite resistance patterns.",
    "Provide nutritional supplementation.",
    "Treat severe anemia supportively.",
    "Improve pasture hygiene and reduce reinfection risk.",
    "Monitor response after treatment."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Grazing on contaminated pasture",
        weight: 95
      },

      {
        finding: "Poor deworming program",
        weight: 90
      },

      {
        finding: "Young animals affected",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Weight loss",
        weight: 95
      },

      {
        finding: "Anemia",
        weight: 100
      },

      {
        finding: "Diarrhea",
        weight: 85
      },

      {
        finding: "Poor body condition",
        weight: 90
      },

      {
        finding: "Weakness",
        weight: 85
      }

    ],

    biochemistry: [

      {
        finding: "Low serum albumin",
        weight: 80
      },

      {
        finding: "Low total protein",
        weight: 75
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
        finding: "Positive fecal egg count",
        weight: 100
      },

      {
        finding: "Improvement after anthelmintic therapy",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Negative fecal examination",
        weight: -50
      },

      {
        finding: "Alternative cause of weight loss confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "fecal-egg-count",
      parameter: "Fecal egg count",
      frequency: "2–4 weeks after treatment and periodically thereafter",
      reason:
        "Evaluates treatment effectiveness and detects anthelmintic resistance."
    },

    {
      id: "famacha",
      parameter: "FAMACHA anemia score",
      frequency: "Every 2–4 weeks during high-risk periods",
      reason:
        "Monitors anemia caused by blood-feeding nematodes."
    },

    {
      id: "body-condition",
      parameter: "Body condition score and body weight",
      frequency: "Monthly",
      reason:
        "Assesses productivity impact and nutritional recovery."
    },

    {
      id: "fecal-consistency",
      parameter: "Fecal consistency and diarrhea severity",
      frequency: "Weekly",
      reason:
        "Monitors gastrointestinal health and response to treatment."
    },

    {
      id: "pasture-contamination",
      parameter: "Pasture parasite burden",
      frequency: "Seasonally",
      reason:
        "Helps evaluate reinfection risk and pasture management effectiveness."
    }

  ],

  precautions: [

    {
      id: "strategic-deworming",
      title: "Strategic Anthelmintic Use",
      description:
        "Use dewormers based on parasite burden, fecal egg counts, and resistance status rather than routine unnecessary treatment."
    },

    {
      id: "pasture-management",
      title: "Pasture Management",
      description:
        "Implement rotational grazing, avoid overstocking, and reduce exposure to contaminated grazing areas."
    },

    {
      id: "quarantine",
      title: "Quarantine New Animals",
      description:
        "Examine and appropriately treat newly introduced animals before mixing with the flock."
    },

    {
      id: "nutrition",
      title: "Improve Nutrition",
      description:
        "Provide adequate protein and mineral nutrition to improve resistance against parasitic infection."
    }

  ],

  prognosis:
    "Prognosis is good when gastrointestinal nematodiasis is identified early and effective anthelmintic therapy is administered. Severe infections causing marked anemia, hypoproteinemia, emaciation, or resistant parasite populations may result in poor response and increased mortality.",

  strengtheningEvidence: [

    "Positive fecal egg count",

    "Anemia with grazing history",

    "Weight loss and poor body condition",

    "Response to anthelmintic treatment"

  ],

  weakeningEvidence: [

    "Negative fecal examination",

    "No history of pasture exposure",

    "Alternative cause of weight loss identified"

  ],

  classicFindings: [

    "Weight loss",

    "Anemia",

    "Diarrhea",

    "Poor growth",

    "Bottle jaw in severe hypoproteinemia"

  ],

  ruleOutFindings: [

    "Coccidiosis",

    "Fasciolosis",

    "Johne's disease",

    "Chronic bacterial enteritis",

    "Nutritional deficiency",

    "Copper deficiency"

  ],

};