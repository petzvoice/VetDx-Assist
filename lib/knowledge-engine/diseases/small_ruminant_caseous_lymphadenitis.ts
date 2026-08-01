import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantCaseousLymphadenitis: DiseaseCard = {
  id: "small-ruminant-caseous-lymphadenitis",

  title: "Caseous Lymphadenitis",

  description:
    "A chronic contagious bacterial disease of sheep and goats caused by Corynebacterium pseudotuberculosis, characterized by abscess formation in superficial and internal lymph nodes, chronic weight loss, and reduced productivity.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "CLA",
    "Cheesy Gland Disease",
    "Caseous Abscess Disease",
  ],

  overview:
    "Caseous lymphadenitis is a chronic infectious disease caused by Corynebacterium pseudotuberculosis. The organism enters through skin wounds, shearing injuries, ear tagging, castration, or other breaks in the skin. The disease produces characteristic laminated abscesses within lymph nodes and occasionally internal organs, resulting in significant economic losses due to reduced growth, wool quality, milk production, and carcass condemnation.",

  clinicalProblems: [

    "Lymph node abscessation",
    "Chronic weight loss",
    "Reduced milk production",
    "Poor wool quality",
    "Internal organ abscesses",
    "Economic losses"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess previous flock history, chronic abscesses, introduction of new animals, and management practices."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Examine superficial lymph nodes for enlargement, abscesses, and draining tracts."
    },

    {
      id: "laboratory-confirmation",
      step: 3,
      title: "Diagnostic Confirmation",
      description:
        "Confirm diagnosis using bacterial culture, PCR, or serological testing when appropriate."
    },

    {
      id: "control",
      step: 4,
      title: "Disease Control",
      description:
        "Isolate affected animals, manage abscesses appropriately, and improve flock biosecurity."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Physical Examination",
      priority: "Essential",
      reason:
        "Characteristic superficial abscesses strongly support diagnosis."
    },

    {
      id: "bacterial-culture",
      name: "Bacterial Culture",
      priority: "Recommended",
      reason:
        "Confirms Corynebacterium pseudotuberculosis infection."
    },

    {
      id: "pcr",
      name: "PCR Testing",
      priority: "Recommended",
      reason:
        "Provides rapid and specific confirmation."
    },

    {
      id: "serology",
      name: "Serological Testing",
      priority: "Recommended",
      reason:
        "Useful for flock-level surveillance."

    }

  ],

  drugCategories: [

    {
      category: "Antimicrobials",
      indication: "Secondary bacterial infection",
      reason:
        "May reduce secondary infection but rarely eliminates established disease."
    },

    {
      category: "Supportive Therapy",
      indication: "General health support",
      reason:
        "Improves recovery in debilitated animals."
    },

    {
      category: "Surgical Management",
      indication: "Abscess treatment",
      reason:
        "Drainage or removal of abscesses may be required under strict biosecurity."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "penicillin-g",
      priority: "Supportive",
      category: "Antibiotic"
    },

    {
      drugId: "oxytetracycline",
      priority: "Alternative",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Isolate affected animals.",
    "Prevent contamination during abscess management.",
    "Dispose of infectious material safely.",
    "Provide supportive care.",
    "Evaluate herd-level control measures."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "History of chronic abscesses within the flock",
        weight: 95
      },

      {
        finding: "Recent introduction of infected animals",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Enlarged superficial lymph nodes",
        weight: 100
      },

      {
        finding: "Caseous abscesses",
        weight: 100
      },

      {
        finding: "Draining sinus tracts",
        weight: 90
      },

      {
        finding: "Progressive weight loss",
        weight: 75
      },

      {
        finding: "Poor production performance",
        weight: 70
      }

    ],

    biochemistry: [

      {
        finding: "Inflammatory changes",
        weight: 40
      }

    ],

    imaging: [

      {
        finding: "Ultrasonographic evidence of internal abscesses",
        weight: 70
      }

    ],

    supports: [

      {
        finding: "Positive culture or PCR for Corynebacterium pseudotuberculosis",
        weight: 100
      },

      {
        finding: "Characteristic laminated abscess contents",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Alternative cause of lymphadenopathy confirmed",
        weight: -70
      },

      {
        finding: "Negative laboratory confirmation with incompatible lesions",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "lymph-node-size",
      parameter: "Lymph node size and abscess formation",
      frequency: "Every 2–4 weeks",
      reason:
        "Monitors progression of disease and development of new abscesses."
    },

    {
      id: "body-condition",
      parameter: "Body weight and body condition score",
      frequency: "Monthly",
      reason:
        "Evaluates chronic disease progression and recovery."
    },

    {
      id: "wound-healing",
      parameter: "Healing of drained abscesses",
      frequency: "Weekly until healed",
      reason:
        "Detects secondary infection and confirms proper wound healing."
    },

    {
      id: "flock-surveillance",
      parameter: "Occurrence of new abscesses in flock",
      frequency: "Continuous",
      reason:
        "Monitors transmission and effectiveness of control measures."
    },

    {
      id: "production",
      parameter: "Milk production or growth performance",
      frequency: "Monthly",
      reason:
        "Assesses long-term production losses associated with disease."

    }

  ],

  precautions: [

    {
      id: "biosecurity",
      title: "Strict Biosecurity",
      description:
        "Immediately isolate affected animals and prevent contamination of facilities and equipment."
    },

    {
      id: "wound-management",
      title: "Hygienic Surgical Procedures",
      description:
        "Disinfect equipment used for shearing, ear tagging, castration, and abscess drainage."
    },

    {
      id: "quarantine",
      title: "Quarantine New Animals",
      description:
        "Screen newly purchased animals for enlarged lymph nodes before introduction into the flock."
    },

    {
      id: "vaccination",
      title: "Vaccination Program",
      description:
        "Use approved CLA vaccines where available as part of a comprehensive flock control strategy."

    }

  ],

  prognosis:
    "Prognosis is fair for individual animals with superficial lesions but guarded for animals with internal abscesses. Complete eradication from infected flocks is difficult without strict control measures.",

  strengtheningEvidence: [

    "Characteristic laminated abscesses",

    "Enlarged superficial lymph nodes",

    "Positive culture or PCR",

    "History of recurrent flock cases"

  ],

  weakeningEvidence: [

    "No abscess formation",

    "Negative bacterial culture",

    "Alternative cause of lymph node enlargement confirmed"

  ],

  classicFindings: [

    "Enlarged lymph nodes",

    "Caseous abscesses",

    "Chronic weight loss",

    "Draining sinus tracts",

    "Poor production"

  ],

  ruleOutFindings: [

    "Actinobacillosis",

    "Actinomycosis",

    "Tuberculosis",

    "Lymphoma",

    "Abscesses caused by other bacteria",

    "Traumatic swelling"

  ],

};
