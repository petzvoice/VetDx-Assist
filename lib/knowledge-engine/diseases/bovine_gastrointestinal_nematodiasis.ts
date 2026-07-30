import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineGastrointestinalNematodiasis: DiseaseCard = {
  id: "bovine-gastrointestinal-nematodiasis",

  title: "Bovine Gastrointestinal Nematodiasis",

  description:
    "A parasitic disease of cattle caused by gastrointestinal roundworms, leading to diarrhea, weight loss, anemia, poor growth, and reduced production.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Gastrointestinal Parasitism",
    "GI Worm Infection",
    "Nematode Infection",
    "Internal Parasitism",
  ],

  overview:
    "Gastrointestinal nematodiasis is caused by various gastrointestinal worms including Ostertagia, Cooperia, Haemonchus, Trichostrongylus, and other nematode species. Infection occurs through ingestion of infective larvae from contaminated pasture. Disease severity depends on parasite burden, animal age, nutrition, and immunity.",

  clinicalProblems: [

    "Intestinal parasitism",
    "Diarrhea",
    "Weight loss",
    "Poor feed efficiency",
    "Anemia",
    "Reduced milk production",
    "Growth retardation"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess grazing system, deworming history, age group, and seasonal parasite exposure."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate body condition, diarrhea, anemia, and production changes."
    },

    {
      id: "fecal-testing",
      step: 3,
      title: "Fecal Examination",
      description:
        "Identify parasite eggs and estimate infection level."
    },

    {
      id: "management",
      step: 4,
      title: "Disease Management",
      description:
        "Provide appropriate anthelmintic treatment and improve parasite control."

    }

  ],

  diagnostics: [

    {
      id: "fecal-egg-count",
      name: "Fecal Egg Count",
      priority: "Essential",
      reason:
        "Detects gastrointestinal nematode infection."
    },

    {
      id: "clinical-assessment",
      name: "Clinical Assessment",
      priority: "Essential",
      reason:
        "Evaluates severity and production impact."
    },

    {
      id: "packed-cell-volume",
      name: "Packed Cell Volume Evaluation",
      priority: "Recommended",
      reason:
        "Assesses anemia in blood-feeding parasite infections."

    }

  ],

  drugCategories: [

    {
      category: "Anthelmintics",
      indication: "Gastrointestinal nematode infection",
      reason:
        "Eliminates parasitic worms."
    },

    {
      category: "Supportive Therapy",
      indication: "Poor condition and recovery",
      reason:
        "Supports affected animals."
    },

    {
      category: "Nutritional Support",
      indication: "Production loss",
      reason:
        "Improves growth and recovery."

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
      drugId: "albendazole",
      priority: "Alternative",
      category: "Anthelmintics"
    }

  ],

  stabilization: [

    "Assess hydration and nutritional status.",
    "Provide appropriate anthelmintic therapy.",
    "Correct anemia and weakness when required.",
    "Improve pasture management.",
    "Monitor parasite control effectiveness."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Grazing cattle",
        weight: 90
      },

      {
        finding: "Inadequate parasite control",
        weight: 85
      },

      {
        finding: "Young animals affected",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Diarrhea",
        weight: 85
      },

      {
        finding: "Weight loss",
        weight: 90
      },

      {
        finding: "Poor growth",
        weight: 85
      },

      {
        finding: "Anemia",
        weight: 80
      },

      {
        finding: "Rough hair coat",
        weight: 70
      }

    ],

    biochemistry: [

      {
        finding: "Low protein levels",
        weight: 60
      },

      {
        finding: "Anemia indicators",
        weight: 60
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
        finding: "Elevated fecal egg count",
        weight: 100
      },

      {
        finding: "Response to anthelmintic therapy",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Negative fecal examination",
        weight: -50
      },

      {
        finding: "Alternative cause of diarrhea confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "fecal-egg-count",
      parameter: "Fecal egg count",
      frequency: "Post-treatment and periodic monitoring",
      reason:
        "Evaluates parasite burden and effectiveness of control program."
    },

    {
      id: "body-condition",
      parameter: "Body weight and body condition score",
      frequency: "Regular evaluation",
      reason:
        "Monitors recovery and production impact."
    },

    {
      id: "diarrhea",
      parameter: "Fecal consistency and diarrhea severity",
      frequency: "Daily during clinical disease",
      reason:
        "Assesses intestinal recovery."
    },

    {
      id: "anemia",
      parameter: "Mucous membrane color and anemia signs",
      frequency: "Regular evaluation",
      reason:
        "Monitors blood loss from parasite infections."
    },

    {
      id: "production",
      parameter: "Milk production and growth performance",
      frequency: "Regular evaluation",
      reason:
        "Measures restoration of productivity."

    }

  ],

  precautions: [

    {
      id: "strategic-deworming",
      title: "Strategic Deworming",
      description:
        "Use planned parasite control programs based on risk, season, and parasite burden."
    },

    {
      id: "pasture-management",
      title: "Pasture Management",
      description:
        "Reduce pasture contamination through rotational grazing and appropriate stocking density."
    },

    {
      id: "anthelmintic-resistance",
      title: "Anthelmintic Resistance Prevention",
      description:
        "Avoid unnecessary deworming and rotate treatments appropriately."
    },

    {
      id: "nutrition",
      title: "Nutritional Management",
      description:
        "Provide adequate nutrition to improve immunity and resilience against parasites."

    }

  ],

  prognosis:
    "Prognosis is generally good with effective parasite control. Severe infections causing anemia, protein loss, or poor body condition may require prolonged recovery.",

  strengtheningEvidence: [

    "Elevated fecal egg count",

    "Grazing history",

    "Weight loss and diarrhea",

    "Response to anthelmintic therapy"

  ],

  weakeningEvidence: [

    "Negative fecal examination",

    "No parasitic exposure risk",

    "Alternative gastrointestinal disease confirmed"

  ],

  classicFindings: [

    "Weight loss",

    "Diarrhea",

    "Poor growth",

    "Rough hair coat",

    "Reduced production"

  ],

  ruleOutFindings: [

    "Fasciolosis",

    "Coccidiosis",

    "Johne's disease",

    "Salmonellosis",

    "Nutritional diarrhea",

    "Bovine viral diarrhea"

  ],

};