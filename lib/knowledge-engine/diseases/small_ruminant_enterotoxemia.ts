import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantEnterotoxemia: DiseaseCard = {
  id: "small-ruminant-enterotoxemia",

  title: "Small Ruminant Enterotoxemia",

  description:
    "An acute, often fatal toxemic disease of sheep and goats caused by Clostridium perfringens type C or type D, characterized by rapid toxin production, enteritis, neurological signs, and sudden death.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Overeating Disease",
    "Pulpy Kidney Disease",
    "Clostridial Enterotoxemia",
  ],

  overview:
    "Enterotoxemia is caused by rapid proliferation of Clostridium perfringens within the gastrointestinal tract following dietary changes or excessive intake of highly fermentable feeds. Potent exotoxins are absorbed into the bloodstream, resulting in severe systemic toxemia, neurological dysfunction, and high mortality. Vaccination is the cornerstone of prevention.",

  clinicalProblems: [

    "Acute toxemia",
    "Enteritis",
    "Neurological dysfunction",
    "Sudden death",
    "High flock mortality",
    "Economic losses"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent dietary changes, concentrate feeding, vaccination status, age, and sudden deaths within the flock."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate neurological signs, abdominal pain, diarrhea, recumbency, and severity of systemic illness."
    },

    {
      id: "laboratory-diagnosis",
      step: 3,
      title: "Diagnostic Confirmation",
      description:
        "Confirm diagnosis using postmortem findings, toxin detection, or bacterial identification where available."
    },

    {
      id: "management",
      step: 4,
      title: "Emergency Management",
      description:
        "Initiate supportive therapy, isolate affected animals, and implement flock-wide preventive measures."
    }

  ],

  diagnostics: [

    {
      id: "clinical-history",
      name: "Clinical History",
      priority: "Essential",
      reason:
        "Typical history strongly supports diagnosis."
    },

    {
      id: "postmortem",
      name: "Necropsy Examination",
      priority: "Essential",
      reason:
        "Identifies characteristic intestinal and renal lesions."
    },

    {
      id: "toxin-detection",
      name: "Clostridial Toxin Detection",
      priority: "Recommended",
      reason:
        "Confirms enterotoxemia."
    },

    {
      id: "bacterial-culture",
      name: "Clostridial Culture",
      priority: "Recommended",
      reason:
        "Supports diagnosis when interpreted with clinical findings."
    }

  ],

  drugCategories: [

    {
      category: "Antimicrobials",
      indication: "Control clostridial proliferation",
      reason:
        "May reduce further bacterial multiplication."
    },

    {
      category: "NSAIDs",
      indication: "Inflammation and pain",
      reason:
        "Provides supportive management."
    },

    {
      category: "Fluid Therapy",
      indication: "Shock and dehydration",
      reason:
        "Supports cardiovascular stability."
    },

    {
      category: "Clostridial Antitoxin",
      indication: "Neutralization of circulating toxin",
      reason:
        "Most beneficial when administered early."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "penicillin-g",
      priority: "Initial Therapy",
      category: "Antibiotic"
    },

    {
      drugId: "flunixin",
      priority: "Supportive",
      category: "NSAIDs"
    },

    {
      drugId: "clostridium-perfringens-antitoxin",
      priority: "Emergency",
      category: "Antitoxin"
    }

  ],

  stabilization: [

    "Isolate affected animals.",
    "Provide aggressive supportive care.",
    "Administer clostridial antitoxin when available.",
    "Correct dehydration and shock.",
    "Remove high-carbohydrate feed temporarily.",
    "Vaccinate at-risk flock members."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent dietary change or grain feeding",
        weight: 95
      },

      {
        finding: "Unvaccinated flock",
        weight: 90
      },

      {
        finding: "Multiple sudden deaths",
        weight: 95
      }

    ],

    clinicalSigns: [

      {
        finding: "Sudden death",
        weight: 100
      },

      {
        finding: "Neurological signs",
        weight: 90
      },

      {
        finding: "Abdominal pain",
        weight: 80
      },

      {
        finding: "Diarrhea",
        weight: 75
      },

      {
        finding: "Convulsions",
        weight: 85
      }

    ],

    biochemistry: [

      {
        finding: "No specific biochemical marker",
        weight: 5
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
        finding: "Detection of Clostridium perfringens toxin",
        weight: 100
      },

      {
        finding: "Typical necropsy lesions",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Alternative cause of sudden death confirmed",
        weight: -80
      },

      {
        finding: "Negative toxin testing with incompatible findings",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "neurological-status",
      parameter: "Neurological signs",
      frequency: "Every 4–6 hours during acute illness",
      reason:
        "Monitors progression of toxemia and response to treatment."
    },

    {
      id: "hydration",
      parameter: "Hydration status",
      frequency: "Every 6–12 hours",
      reason:
        "Detects dehydration and guides fluid therapy."
    },

    {
      id: "feed-intake",
      parameter: "Appetite and rumen function",
      frequency: "Daily",
      reason:
        "Evaluates gastrointestinal recovery."
    },

    {
      id: "mortality",
      parameter: "New clinical cases and deaths",
      frequency: "Continuous flock monitoring",
      reason:
        "Assesses outbreak progression and effectiveness of control measures."
    },

    {
      id: "vaccination-status",
      parameter: "Vaccination coverage of flock",
      frequency: "During outbreak investigation",
      reason:
        "Identifies susceptible animals and improves disease prevention."

    }

  ],

  precautions: [

    {
      id: "vaccination",
      title: "Routine Vaccination",
      description:
        "Vaccinate sheep and goats according to recommended clostridial vaccination schedules."
    },

    {
      id: "feeding-management",
      title: "Gradual Dietary Changes",
      description:
        "Introduce concentrate-rich diets gradually to avoid rapid intestinal bacterial proliferation."
    },

    {
      id: "nutrition",
      title: "Balanced Feeding",
      description:
        "Avoid sudden overeating and excessive grain consumption."
    },

    {
      id: "flock-management",
      title: "Flock Health Management",
      description:
        "Maintain good nutrition, minimize stress, and isolate clinically affected animals during outbreaks."

    }

  ],

  prognosis:
    "Prognosis is guarded to poor once clinical signs develop because disease progression is often rapid. Animals treated very early may recover, while sudden death is common in untreated cases.",

  strengtheningEvidence: [

    "Recent grain overload or dietary change",

    "Unvaccinated flock",

    "Detection of Clostridium perfringens toxin",

    "Typical necropsy findings"

  ],

  weakeningEvidence: [

    "No dietary risk factors",

    "Alternative diagnosis confirmed",

    "Negative toxin testing with inconsistent clinical findings"

  ],

  classicFindings: [

    "Sudden death",

    "Neurological signs",

    "Convulsions",

    "Abdominal pain",

    "Bloody diarrhea"

  ],

  ruleOutFindings: [

    "Listeriosis",

    "Polioencephalomalacia",

    "Pregnancy toxemia",

    "Ruminal acidosis",

    "Salmonellosis",

    "Plant poisoning"

  ],

};