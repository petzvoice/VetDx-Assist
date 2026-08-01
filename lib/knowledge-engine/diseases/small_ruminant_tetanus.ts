import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantTetanus: DiseaseCard = {
  id: "small-ruminant-tetanus",

  title: "Tetanus",

  description:
    "An acute, frequently fatal neuroparalytic disease of sheep and goats caused by the neurotoxin of Clostridium tetani, characterized by progressive muscle rigidity, hyperesthesia, spasms, and respiratory failure.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Lockjaw",
    "Clostridial Tetanus",
  ],

  overview:
    "Tetanus results from infection of contaminated wounds with Clostridium tetani. Spores germinate under anaerobic conditions and produce tetanospasmin, which blocks inhibitory neurotransmitter release, causing generalized muscle rigidity and spasms. Castration, tail docking, ear tagging, shearing wounds, and parturition injuries are common portals of entry in small ruminants. The disease is largely preventable through vaccination and proper wound management.",

  clinicalProblems: [

    "Generalized muscle rigidity",
    "Painful muscle spasms",
    "Lockjaw",
    "Respiratory compromise",
    "Recumbency",
    "High mortality"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent wounds, castration, tail docking, ear tagging, surgery, kidding or lambing, and vaccination status."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate muscle rigidity, trismus, third eyelid prolapse, hypersensitivity, and respiratory function."
    },

    {
      id: "diagnosis",
      step: 3,
      title: "Clinical Diagnosis",
      description:
        "Diagnosis is primarily based on characteristic clinical signs and history."
    },

    {
      id: "management",
      step: 4,
      title: "Emergency Treatment",
      description:
        "Administer tetanus antitoxin, antimicrobial therapy, supportive care, and minimize external stimulation."
    }

  ],

  diagnostics: [

    {
      id: "clinical-diagnosis",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Characteristic neurological signs are highly suggestive."
    },

    {
      id: "wound-evaluation",
      name: "Wound Examination",
      priority: "Recommended",
      reason:
        "Identifies potential source of infection."
    },

    {
      id: "laboratory-testing",
      name: "Laboratory Testing",
      priority: "Recommended",
      reason:
        "Primarily used to exclude differential diagnoses."
    }

  ],

  drugCategories: [

    {
      category: "Tetanus Antitoxin",
      indication: "Neutralization of circulating toxin",
      reason:
        "Provides passive immunity against unbound toxin."
    },

    {
      category: "Antimicrobials",
      indication: "Elimination of Clostridium tetani",
      reason:
        "Stops further toxin production."
    },

    {
      category: "Muscle Relaxants",
      indication: "Control of muscle spasms",
      reason:
        "Improves comfort and reduces rigidity."
    },

    {
      category: "Supportive Therapy",
      indication: "Hydration and nutritional support",
      reason:
        "Maintains vital body functions."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "tetanus-antitoxin",
      priority: "Emergency",
      category: "Antitoxin"
    },

    {
      drugId: "penicillin-g",
      priority: "First Line",
      category: "Antibiotic"
    },

    {
      drugId: "diazepam",
      priority: "Supportive",
      category: "Muscle Relaxants"
    }

  ],

  stabilization: [

    "Place the animal in a quiet, dark environment.",
    "Administer tetanus antitoxin as early as possible.",
    "Treat or surgically debride contaminated wounds.",
    "Provide antimicrobial therapy.",
    "Control muscle spasms with appropriate medications.",
    "Provide nutritional and fluid support."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent wound or surgical procedure",
        weight: 100
      },

      {
        finding: "Recent castration or tail docking",
        weight: 95
      },

      {
        finding: "Lack of vaccination",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Generalized muscle rigidity",
        weight: 100
      },

      {
        finding: "Lockjaw (trismus)",
        weight: 100
      },

      {
        finding: "Third eyelid prolapse",
        weight: 90
      },

      {
        finding: "Hyperesthesia",
        weight: 90
      },

      {
        finding: "Sawhorse stance",
        weight: 95
      }

    ],

    biochemistry: [

      {
        finding: "No specific biochemical abnormalities",
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
        finding: "Typical clinical presentation with recent wound",
        weight: 100
      },

      {
        finding: "Characteristic muscle rigidity",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Flaccid paralysis instead of spastic paralysis",
        weight: -80
      },

      {
        finding: "Alternative neurological disease confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "muscle-rigidity",
      parameter: "Muscle rigidity and frequency of spasms",
      frequency: "Every 4–6 hours during acute illness",
      reason:
        "Assesses disease progression and response to treatment."
    },

    {
      id: "respiratory-status",
      parameter: "Respiratory rate and effort",
      frequency: "Every 4–6 hours",
      reason:
        "Detects respiratory compromise caused by muscle rigidity."
    },

    {
      id: "hydration-nutrition",
      parameter: "Hydration status and feed intake",
      frequency: "Daily",
      reason:
        "Ensures adequate supportive care in animals with impaired swallowing."
    },

    {
      id: "wound-healing",
      parameter: "Healing of the primary wound",
      frequency: "Daily",
      reason:
        "Monitors elimination of the source of toxin production."
    },

    {
      id: "body-temperature",
      parameter: "Rectal temperature",
      frequency: "Daily",
      reason:
        "Identifies secondary infections or complications."

    }

  ],

  precautions: [

    {
      id: "vaccination",
      title: "Routine Vaccination",
      description:
        "Vaccinate breeding animals and young stock using recommended clostridial vaccination schedules."
    },

    {
      id: "aseptic-procedures",
      title: "Aseptic Surgical Technique",
      description:
        "Perform castration, tail docking, ear tagging, and other procedures under clean conditions with sterile equipment."
    },

    {
      id: "wound-care",
      title: "Prompt Wound Management",
      description:
        "Clean, disinfect, and appropriately treat wounds to minimize anaerobic bacterial growth."
    },

    {
      id: "environment",
      title: "Clean Housing",
      description:
        "Maintain hygienic housing and reduce contamination of wounds with soil or manure."

    }

  ],

  prognosis:
    "Prognosis is guarded to poor once generalized clinical signs develop. Animals receiving early treatment before severe respiratory involvement have a better chance of recovery.",

  strengtheningEvidence: [

    "Recent wound or surgical procedure",

    "Generalized muscle rigidity",

    "Lockjaw",

    "Third eyelid prolapse"

  ],

  weakeningEvidence: [

    "No history of wound exposure",

    "Flaccid paralysis",

    "Alternative neurological disease confirmed"

  ],

  classicFindings: [

    "Sawhorse stance",

    "Generalized muscle rigidity",

    "Lockjaw",

    "Third eyelid prolapse",

    "Hyperesthesia"

  ],

  ruleOutFindings: [

    "Polioencephalomalacia",

    "Listeriosis",

    "Rabies",

    "Hypomagnesemia",

    "Strychnine poisoning",

    "Meningitis"

  ],

};
