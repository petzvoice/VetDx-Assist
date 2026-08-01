import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantContagiousOvineDigitalDermatitis: DiseaseCard = {
  id: "small-ruminant-contagious-ovine-digital-dermatitis",

  title: "Contagious Ovine Digital Dermatitis",

  description:
    "A highly contagious infectious disease of the feet of sheep and occasionally goats characterized by severe lameness, ulcerative dermatitis at the coronary band, progressive hoof capsule separation, and significant welfare and production losses.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "CODD",
    "Contagious Digital Dermatitis",
    "Ovine Digital Dermatitis",
  ],

  overview:
    "Contagious Ovine Digital Dermatitis (CODD) is an emerging infectious hoof disease primarily affecting sheep and occasionally goats. The disease is associated with Treponema spp. together with other bacterial pathogens including Dichelobacter nodosus and Fusobacterium necrophorum. Lesions typically begin at the coronary band and progress to complete separation of the hoof capsule. Early diagnosis, isolation of affected animals, antimicrobial therapy, and strict biosecurity are essential for disease control.",

  clinicalProblems: [

    "Severe lameness",
    "Coronary band dermatitis",
    "Hoof capsule separation",
    "Pain",
    "Reduced grazing",
    "Weight loss",
    "Poor flock productivity"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess flock history of lameness, introduction of new animals, previous foot rot or CODD outbreaks, and environmental conditions."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Examine the coronary band, interdigital skin, hoof capsule, and severity of lameness."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Diagnosis is primarily clinical with PCR used to identify associated bacterial pathogens when required."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Control",
      description:
        "Isolate affected animals, administer systemic antimicrobial therapy, provide analgesia, improve environmental hygiene, and implement flock biosecurity."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Foot Examination",
      priority: "Essential",
      reason:
        "Characteristic coronary band lesions strongly support diagnosis."
    },

    {
      id: "lameness-score",
      name: "Lameness Assessment",
      priority: "Recommended",
      reason:
        "Determines severity and treatment response."
    },

    {
      id: "pcr",
      name: "PCR for Treponema spp. and Dichelobacter nodosus",
      priority: "Recommended",
      reason:
        "Confirms bacterial involvement during surveillance or outbreaks."
    },

    {
      id: "bacterial-culture",
      name: "Bacterial Culture",
      priority: "Recommended",
      reason:
        "Useful in selected research or complicated cases."
    }

  ],

  drugCategories: [

    {
      category: "Antimicrobials",
      indication: "Bacterial infection",
      reason:
        "Controls associated bacterial pathogens and promotes healing."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Improves animal welfare and mobility."
    },

    {
      category: "Topical Antiseptics",
      indication: "Foot disinfection",
      reason:
        "Reduces environmental bacterial contamination."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "oxytetracycline",
      priority: "First Line",
      category: "Antibiotic"
    },

    {
      drugId: "gamithromycin",
      priority: "Alternative",
      category: "Antibiotic"
    },

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Immediately isolate affected animals.",
    "Administer appropriate systemic antimicrobial therapy.",
    "Provide NSAIDs for pain control.",
    "Maintain clean, dry footing.",
    "Avoid unnecessary hoof trimming of active lesions.",
    "Implement strict flock biosecurity."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "History of CODD within the flock",
        weight: 95
      },

      {
        finding: "Introduction of replacement animals",
        weight: 85
      },

      {
        finding: "Previous foot rot outbreak",
        weight: 75
      }

    ],

    clinicalSigns: [

      {
        finding: "Severe lameness",
        weight: 100
      },

      {
        finding: "Ulceration at the coronary band",
        weight: 100
      },

      {
        finding: "Progressive hoof capsule separation",
        weight: 100
      },

      {
        finding: "Marked pain during hoof examination",
        weight: 90
      },

      {
        finding: "Multiple affected animals",
        weight: 85
      }

    ],

    biochemistry: [

      {
        finding: "No characteristic biochemical abnormalities",
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
        finding: "Typical coronary band lesions with hoof capsule separation",
        weight: 100
      },

      {
        finding: "Positive PCR for associated pathogens",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Normal hoof examination",
        weight: -80
      },

      {
        finding: "Alternative cause of lameness confirmed",
        weight: -70
      }

    ],

  },
  monitoring: [

    {
      id: "lameness-score",
      parameter: "Lameness score",
      frequency: "Weekly",
      reason:
        "Assesses response to treatment and identifies persistent cases."
    },

    {
      id: "hoof-lesions",
      parameter: "Coronary band lesions and hoof capsule integrity",
      frequency: "Weekly",
      reason:
        "Monitors healing and detects progression of hoof separation."
    },

    {
      id: "body-condition",
      parameter: "Body condition score and body weight",
      frequency: "Monthly",
      reason:
        "Evaluates the impact of chronic lameness on productivity."
    },

    {
      id: "new-cases",
      parameter: "Number of new affected animals",
      frequency: "Continuous",
      reason:
        "Determines effectiveness of flock control measures and biosecurity."
    },

    {
      id: "treatment-response",
      parameter: "Response to antimicrobial therapy",
      frequency: "Weekly",
      reason:
        "Identifies treatment failures and animals requiring further intervention."
    }

  ],

  precautions: [

    {
      id: "quarantine",
      title: "Quarantine New Animals",
      description:
        "Isolate newly purchased animals and examine their feet before introduction into the flock."
    },

    {
      id: "isolation",
      title: "Isolate Affected Animals",
      description:
        "Immediately separate clinically affected animals to reduce transmission."
    },

    {
      id: "biosecurity",
      title: "Strict Biosecurity",
      description:
        "Disinfect hoof trimming equipment, handling facilities, and transport vehicles after use."
    },

    {
      id: "environment",
      title: "Environmental Management",
      description:
        "Maintain clean, dry housing and avoid prolonged exposure to wet, muddy conditions that favor disease transmission."
    }

  ],

  prognosis:
    "Prognosis is good when disease is identified early and aggressive flock-level control measures are implemented. Chronic hoof capsule separation, delayed treatment, or failure to eliminate infection from the flock may result in recurrent disease and significant production losses.",

  strengtheningEvidence: [

    "Severe lameness",

    "Ulceration at the coronary band",

    "Hoof capsule separation",

    "Positive PCR for associated pathogens"

  ],

  weakeningEvidence: [

    "No coronary band lesions",

    "Normal hoof capsule",

    "Alternative orthopedic disease confirmed"

  ],

  classicFindings: [

    "Coronary band ulceration",

    "Progressive hoof capsule detachment",

    "Marked pain",

    "Severe lameness",

    "Multiple affected sheep"

  ],

  ruleOutFindings: [

    "Foot rot",

    "Foot abscess",

    "Foot scald (interdigital dermatitis)",

    "White line disease",

    "Laminitis",

    "Traumatic hoof injury"

  ],

};