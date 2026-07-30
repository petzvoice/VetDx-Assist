import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineCoccidiosis: DiseaseCard = {
  id: "bovine-coccidiosis",

  title: "Bovine Coccidiosis",

  description:
    "An intestinal parasitic disease of cattle caused by Eimeria species, resulting in diarrhea, intestinal damage, dehydration, and reduced growth performance.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Eimeriosis",
    "Coccidial Enteritis",
    "Bovine Intestinal Coccidiosis",
  ],

  overview:
    "Bovine coccidiosis is caused by intracellular protozoan parasites of the genus Eimeria. Disease occurs mainly in calves and young cattle under stressful conditions such as overcrowding, poor hygiene, and nutritional stress. Severe infection damages intestinal mucosa and may cause bloody diarrhea, dehydration, and death.",

  clinicalProblems: [

    "Intestinal epithelial damage",
    "Diarrhea",
    "Blood loss",
    "Dehydration",
    "Poor growth",
    "Reduced performance"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess age group, housing conditions, hygiene, stocking density, and previous diarrhea outbreaks."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate diarrhea, dehydration, body condition, and systemic illness."
    },

    {
      id: "fecal-testing",
      step: 3,
      title: "Fecal Examination",
      description:
        "Identify Eimeria oocysts and evaluate parasite burden."
    },

    {
      id: "management",
      step: 4,
      title: "Disease Management",
      description:
        "Provide anticoccidial therapy, hydration support, and improve sanitation."
    }

  ],

  diagnostics: [

    {
      id: "fecal-examination",
      name: "Fecal Oocyst Examination",
      priority: "Essential",
      reason:
        "Detects Eimeria infection."
    },

    {
      id: "clinical-assessment",
      name: "Clinical Assessment",
      priority: "Essential",
      reason:
        "Evaluates disease severity."
    },

    {
      id: "fecal-speciation",
      name: "Eimeria Species Identification",
      priority: "Recommended",
      reason:
        "Helps identify pathogenic species."

    }

  ],

  drugCategories: [

    {
      category: "Antiprotozoal Therapy",
      indication: "Coccidial infection",
      reason:
        "Reduces parasite multiplication."
    },

    {
      category: "Supportive Therapy",
      indication: "Dehydration and intestinal damage",
      reason:
        "Maintains fluid balance and recovery."
    },

    {
      category: "Nutritional Support",
      indication: "Growth recovery",
      reason:
        "Improves restoration of body condition."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "amprolium",
      priority: "First Line",
      category: "Antiprotozoal"
    },

    {
      drugId: "toltrazuril",
      priority: "Alternative",
      category: "Antiprotozoal"
    }

  ],

  stabilization: [

    "Correct dehydration.",
    "Provide electrolyte support.",
    "Administer appropriate anticoccidial therapy.",
    "Improve hygiene and reduce contamination.",
    "Monitor fecal output and recovery."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Young calves affected",
        weight: 90
      },

      {
        finding: "Overcrowded or poor hygiene conditions",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Diarrhea",
        weight: 90
      },

      {
        finding: "Bloody diarrhea",
        weight: 100
      },

      {
        finding: "Dehydration",
        weight: 80
      },

      {
        finding: "Weight loss",
        weight: 75
      }

    ],

    biochemistry: [

      {
        finding: "Electrolyte imbalance due to diarrhea",
        weight: 50
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
        finding: "Eimeria oocysts detected",
        weight: 100
      },

      {
        finding: "Bloody diarrhea in young cattle",
        weight: 95
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
      id: "fecal-output",
      parameter: "Frequency and severity of diarrhea",
      frequency: "Daily",
      reason:
        "Monitors intestinal recovery."
    },

    {
      id: "hydration",
      parameter: "Hydration status",
      frequency: "Daily",
      reason:
        "Detects dehydration caused by diarrhea."
    },

    {
      id: "body-condition",
      parameter: "Body weight and body condition",
      frequency: "Regular evaluation",
      reason:
        "Assesses recovery and growth."
    },

    {
      id: "fecal-oocysts",
      parameter: "Fecal oocyst shedding",
      frequency: "During outbreak monitoring",
      reason:
        "Evaluates parasite burden and control effectiveness."
    },

    {
      id: "herd-health",
      parameter: "Occurrence of new cases",
      frequency: "Continuous monitoring",
      reason:
        "Detects ongoing environmental contamination."

    }

  ],

  precautions: [

    {
      id: "hygiene",
      title: "Environmental Hygiene",
      description:
        "Maintain clean housing and reduce fecal contamination in calf areas."
    },

    {
      id: "stocking-density",
      title: "Stocking Density Control",
      description:
        "Avoid overcrowding to reduce parasite transmission."
    },

    {
      id: "calf-management",
      title: "Calf Management",
      description:
        "Provide clean feeding areas and reduce stress during high-risk periods."
    },

    {
      id: "preventive-program",
      title: "Preventive Anticoccidial Program",
      description:
        "Use appropriate preventive strategies in high-risk herds."

    }

  ],

  prognosis:
    "Prognosis is generally good with early treatment and supportive care. Severe intestinal damage, dehydration, or secondary infections may result in poor growth or death.",

  strengtheningEvidence: [

    "Young cattle affected",

    "Bloody diarrhea",

    "Positive fecal oocyst detection",

    "Outbreak in contaminated environment"

  ],

  weakeningEvidence: [

    "Negative fecal examination",

    "No intestinal signs",

    "Other diarrhea cause identified"

  ],

  classicFindings: [

    "Bloody diarrhea",

    "Straining during defecation",

    "Weight loss",

    "Dehydration",

    "Poor growth"

  ],

  ruleOutFindings: [

    "Salmonellosis",

    "Bovine coronavirus diarrhea",

    "Cryptosporidiosis",

    "Bovine viral diarrhea",

    "Nutritional diarrhea",

    "Parasitic gastroenteritis"

  ],

};