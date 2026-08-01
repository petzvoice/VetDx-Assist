import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantHaemonchosis: DiseaseCard = {
  id: "small-ruminant-haemonchosis",

  title: "Haemonchosis",

  description:
    "A highly pathogenic parasitic disease of sheep and goats caused by Haemonchus contortus infection, characterized by severe blood loss, anemia, hypoproteinemia, weakness, reduced productivity, and death.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Barber Pole Worm Infection",
    "Haemonchus contortus Infection",
    "Gastrointestinal Trichostrongylosis",
  ],

  overview:
    "Haemonchosis is one of the most economically important parasitic diseases of small ruminants, particularly in warm and humid climates. Adult Haemonchus contortus worms attach to the abomasal mucosa and consume blood, causing progressive anemia and protein loss. Heavy infections can rapidly cause weakness, bottle jaw, collapse, and death. Anthelmintic resistance is widespread, making targeted parasite control essential.",

  clinicalProblems: [

    "Blood loss anemia",
    "Hypoproteinemia",
    "Weight loss",
    "Weakness",
    "Bottle jaw",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess grazing exposure, climatic conditions, previous deworming history, pasture contamination, and occurrence of anemia or sudden deaths."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate mucous membrane color, FAMACHA score, body condition, submandibular edema, and signs of weakness."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Perform fecal egg count, evaluate anemia, assess protein status, and identify parasite species when necessary."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Control",
      description:
        "Administer effective anthelmintic therapy, provide supportive care, and implement sustainable parasite control strategies."
    }

  ],

  diagnostics: [

    {
      id: "famaccha",
      name: "FAMACHA Scoring",
      priority: "Essential",
      reason:
        "Detects anemia severity associated with Haemonchus blood feeding."
    },

    {
      id: "fecal-egg-count",
      name: "Fecal Egg Count",
      priority: "Essential",
      reason:
        "Determines parasite burden and helps guide treatment."
    },

    {
      id: "fecal-culture",
      name: "Larval Culture or PCR Identification",
      priority: "Recommended",
      reason:
        "Confirms Haemonchus contortus involvement."
    },

    {
      id: "pcv",
      name: "Packed Cell Volume (PCV)",
      priority: "Recommended",
      reason:
        "Quantifies severity of anemia."
    }

  ],

  drugCategories: [

    {
      category: "Anthelmintics",
      indication: "Haemonchus elimination",
      reason:
        "Removes adult and developing parasitic stages."
    },

    {
      category: "Fluid Therapy",
      indication: "Supportive treatment",
      reason:
        "Supports severely dehydrated or weak animals."
    },

    {
      category: "Blood Transfusion",
      indication: "Severe anemia",
      reason:
        "Restores oxygen-carrying capacity in life-threatening anemia."
    },

    {
      category: "Nutritional Support",
      indication: "Recovery",
      reason:
        "Improves immune response and productivity."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "moxidectin",
      priority: "First Line",
      category: "Anthelmintics"
    },

    {
      drugId: "ivermectin",
      priority: "Alternative",
      category: "Anthelmintics"
    },

    {
      drugId: "fenbendazole",
      priority: "Alternative",
      category: "Anthelmintics"
    }

  ],

  stabilization: [

    "Assess anemia severity using FAMACHA score and PCV.",
    "Administer effective anthelmintic treatment based on resistance patterns.",
    "Provide blood transfusion in severe life-threatening anemia.",
    "Correct dehydration and provide nutritional support.",
    "Move severely affected animals to low-risk grazing areas.",
    "Monitor response after treatment."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Warm humid grazing environment",
        weight: 95
      },

      {
        finding: "Poor parasite control program",
        weight: 90
      },

      {
        finding: "Previous anthelmintic use with poor response",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Severe anemia",
        weight: 100
      },

      {
        finding: "Pale mucous membranes",
        weight: 100
      },

      {
        finding: "Bottle jaw",
        weight: 95
      },

      {
        finding: "Weakness",
        weight: 90
      },

      {
        finding: "Weight loss",
        weight: 85
      }

    ],

    biochemistry: [

      {
        finding: "Low packed cell volume",
        weight: 100
      },

      {
        finding: "Low serum protein",
        weight: 90
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
        finding: "High fecal egg count",
        weight: 95
      },

      {
        finding: "Improvement after effective anthelmintic therapy",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Normal PCV and no anemia",
        weight: -70
      },

      {
        finding: "Alternative cause of anemia confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "pcv",
      parameter: "Packed cell volume (PCV) and anemia assessment",
      frequency: "Weekly during treatment and high-risk periods",
      reason:
        "Monitors recovery from blood loss and evaluates treatment response."
    },

    {
      id: "famaccha",
      parameter: "FAMACHA anemia score",
      frequency: "Every 2–4 weeks during parasite season",
      reason:
        "Identifies animals requiring treatment and reduces unnecessary deworming."
    },

    {
      id: "fecal-egg-count",
      parameter: "Fecal egg count",
      frequency: "2–4 weeks after treatment",
      reason:
        "Determines anthelmintic effectiveness and detects resistance."
    },

    {
      id: "body-condition",
      parameter: "Body condition score and weight gain",
      frequency: "Monthly",
      reason:
        "Evaluates recovery and production improvement."
    },

    {
      id: "bottle-jaw",
      parameter: "Submandibular edema assessment",
      frequency: "Weekly",
      reason:
        "Monitors resolution of hypoproteinemia."
    }

  ],

  precautions: [

    {
      id: "targeted-treatment",
      title: "Targeted Selective Treatment",
      description:
        "Treat only animals showing significant parasite burden or anemia to slow development of anthelmintic resistance."
    },

    {
      id: "drug-rotation",
      title: "Responsible Anthelmintic Use",
      description:
        "Use effective drugs based on resistance testing rather than frequent unnecessary rotation."
    },

    {
      id: "pasture-management",
      title: "Pasture Management",
      description:
        "Reduce larval contamination through rotational grazing and avoiding overstocking."
    },

    {
      id: "nutrition",
      title: "Improve Nutritional Status",
      description:
        "Provide adequate protein and minerals to improve immunity against Haemonchus infection."
    }

  ],

  prognosis:
    "Prognosis is good when haemonchosis is detected early and effective anthelmintic therapy is provided. Animals with severe anemia, collapse, or delayed treatment may die despite therapy. Anthelmintic resistance can significantly reduce treatment success.",

  strengtheningEvidence: [

    "Marked anemia",

    "High fecal egg count",

    "Bottle jaw",

    "Low PCV",

    "Response to effective anthelmintic therapy"

  ],

  weakeningEvidence: [

    "Normal PCV",

    "Negative fecal examination",

    "Alternative cause of anemia identified"

  ],

  classicFindings: [

    "Pale mucous membranes",

    "Bottle jaw",

    "Weight loss",

    "Weakness",

    "Severe anemia"

  ],

  ruleOutFindings: [

    "Fasciolosis",

    "Coccidiosis",

    "Copper toxicity",

    "Babesiosis",

    "Nutritional anemia",

    "Chronic blood loss"

  ],

};
