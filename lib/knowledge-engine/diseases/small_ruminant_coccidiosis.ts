import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantCoccidiosis: DiseaseCard = {
  id: "small-ruminant-coccidiosis",

  title: "Coccidiosis",

  description:
    "An intestinal protozoal disease of sheep and goats caused by Eimeria species, resulting in intestinal epithelial damage, diarrhea, dehydration, weight loss, poor growth, and occasionally death in severe infections.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Eimeriosis",
    "Eimeria Infection",
    "Protozoal Enteritis",
  ],

  overview:
    "Coccidiosis is an important enteric disease of young sheep and goats caused by host-specific Eimeria species. Clinical disease is most common in stressed, overcrowded, or intensively managed animals. Infection occurs through ingestion of sporulated oocysts from contaminated environments. Intestinal damage leads to diarrhea, reduced nutrient absorption, dehydration, weight loss, and decreased productivity. Prevention depends on hygiene, reducing environmental contamination, and strategic anticoccidial use.",

  clinicalProblems: [

    "Diarrhea",
    "Intestinal damage",
    "Dehydration",
    "Weight loss",
    "Poor growth",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess age of animals, housing conditions, stocking density, hygiene, stress factors, and previous coccidiosis outbreaks."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate diarrhea severity, dehydration, body condition, abdominal discomfort, and growth performance."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Perform fecal examination, oocyst count, species identification when needed, and evaluate intestinal damage."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Control",
      description:
        "Administer anticoccidial therapy, provide supportive care, improve hygiene, and reduce environmental contamination."
    }

  ],

  diagnostics: [

    {
      id: "fecal-oocyst-count",
      name: "Fecal Oocyst Examination",
      priority: "Essential",
      reason:
        "Detects Eimeria oocysts and estimates infection level."
    },

    {
      id: "oocyst-identification",
      name: "Eimeria Species Identification",
      priority: "Recommended",
      reason:
        "Identifies pathogenic species involved in disease."
    },

    {
      id: "fecal-consistency",
      name: "Fecal Evaluation",
      priority: "Essential",
      reason:
        "Assesses severity of diarrhea and intestinal involvement."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates dehydration and metabolic abnormalities in severe cases."
    }

  ],

  drugCategories: [

    {
      category: "Anticoccidials",
      indication: "Eimeria control",
      reason:
        "Inhibits parasite development and reduces intestinal damage."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration",
      reason:
        "Corrects fluid losses caused by diarrhea."
    },

    {
      category: "Nutritional Support",
      indication: "Recovery",
      reason:
        "Supports intestinal healing and growth."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Provides supportive relief when indicated."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "toltrazuril",
      priority: "First Line",
      category: "Anticoccidial"
    },

    {
      drugId: "amprolium",
      priority: "Alternative",
      category: "Anticoccidial"
    },

    {
      drugId: "sulfonamides",
      priority: "Alternative",
      category: "Anticoccidial"
    }

  ],

  stabilization: [

    "Correct dehydration and electrolyte imbalance.",
    "Administer appropriate anticoccidial therapy.",
    "Provide nutritional support.",
    "Separate severely affected animals.",
    "Improve hygiene and reduce fecal contamination.",
    "Monitor young animals closely during outbreaks."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Young animals affected",
        weight: 95
      },

      {
        finding: "Overcrowded housing",
        weight: 90
      },

      {
        finding: "Poor sanitation",
        weight: 90
      },

      {
        finding: "Recent stress event",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Diarrhea",
        weight: 100
      },

      {
        finding: "Weight loss",
        weight: 90
      },

      {
        finding: "Dehydration",
        weight: 85
      },

      {
        finding: "Poor growth",
        weight: 90
      },

      {
        finding: "Straining or abdominal pain",
        weight: 80
      }

    ],

    biochemistry: [

      {
        finding: "Dehydration-related abnormalities",
        weight: 60
      },

      {
        finding: "Electrolyte imbalance",
        weight: 70
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
        finding: "High fecal oocyst count",
        weight: 95
      },

      {
        finding: "Clinical improvement after anticoccidial treatment",
        weight: 90
      }

    ],

    against: [

      {
        finding: "No intestinal signs",
        weight: -50
      },

      {
        finding: "Alternative cause of diarrhea confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "fecal-oocyst-count",
      parameter: "Fecal oocyst shedding",
      frequency: "1–3 weeks after treatment and during outbreaks",
      reason:
        "Evaluates infection level and effectiveness of control measures."
    },

    {
      id: "diarrhea",
      parameter: "Fecal consistency and diarrhea severity",
      frequency: "Daily during active disease",
      reason:
        "Monitors intestinal recovery and treatment response."
    },

    {
      id: "hydration",
      parameter: "Hydration status and electrolyte balance",
      frequency: "Daily in affected animals",
      reason:
        "Detects dehydration caused by intestinal fluid loss."
    },

    {
      id: "growth",
      parameter: "Body weight and growth rate",
      frequency: "Weekly",
      reason:
        "Assesses production impact and recovery in young animals."
    },

    {
      id: "group-monitoring",
      parameter: "Flock-level disease surveillance",
      frequency: "Daily during outbreaks",
      reason:
        "Identifies newly affected animals and controls spread."
    }

  ],

  precautions: [

    {
      id: "hygiene",
      title: "Improve Hygiene",
      description:
        "Keep feeding and watering areas clean to reduce ingestion of infective oocysts."
    },

    {
      id: "stocking-density",
      title: "Avoid Overcrowding",
      description:
        "Reduce stocking density to minimize environmental contamination and stress."
    },

    {
      id: "young-animal-management",
      title: "Protect Young Animals",
      description:
        "Provide clean housing and monitor lambs and kids closely because they are most susceptible."
    },

    {
      id: "anticoccidial-program",
      title: "Strategic Anticoccidial Use",
      description:
        "Use preventive anticoccidial programs in high-risk farms according to veterinary guidance."
    }

  ],

  prognosis:
    "Prognosis is generally good when coccidiosis is diagnosed early and treated appropriately. Severe infections with prolonged diarrhea, dehydration, intestinal damage, or secondary infections may result in poor growth or death.",

  strengtheningEvidence: [

    "Young lambs or kids affected",

    "High fecal oocyst count",

    "Diarrhea with poor growth",

    "Response to anticoccidial therapy"

  ],

  weakeningEvidence: [

    "Negative fecal examination",

    "No diarrhea or intestinal signs",

    "Alternative cause of enteritis confirmed"

  ],

  classicFindings: [

    "Diarrhea",

    "Weight loss",

    "Poor growth",

    "Dehydration",

    "Young age group affected"

  ],

  ruleOutFindings: [

    "Gastrointestinal nematodiasis",

    "Salmonellosis",

    "Clostridial enteritis",

    "Nutritional diarrhea",

    "Cryptosporidiosis",

    "Plant poisoning"

  ],

};
