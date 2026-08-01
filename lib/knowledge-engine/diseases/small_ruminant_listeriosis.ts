import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantListeriosis: DiseaseCard = {
  id: "small-ruminant-listeriosis",

  title: "Listeriosis",

  description:
    "An important bacterial disease of sheep and goats caused by Listeria monocytogenes, characterized by encephalitis, septicemia, abortion, and occasionally mastitis. The encephalitic form is the most common presentation in adult small ruminants.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Circling Disease",
    "Listeria monocytogenes Infection",
    "Listerial Encephalitis",
  ],

  overview:
    "Listeriosis is caused by Listeria monocytogenes and is commonly associated with poorly fermented or spoiled silage. The organism invades through oral mucosal wounds and migrates along cranial nerves to the brainstem, producing encephalitis. Infection may also cause abortion, septicemia in neonates, and occasional mastitis. The disease is zoonotic and requires appropriate precautions during handling of infected animals and abortion materials.",

  clinicalProblems: [

    "Encephalitis",
    "Cranial nerve dysfunction",
    "Circling",
    "Abortion",
    "Septicemia",
    "High mortality"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess silage quality, recent dietary changes, abortion history, neurological signs, and flock outbreaks."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate mentation, cranial nerve deficits, circling behavior, facial paralysis, dysphagia, and recumbency."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Confirm diagnosis using bacterial culture, PCR, CSF analysis, or postmortem examination when available."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Control",
      description:
        "Begin antimicrobial therapy immediately, provide supportive care, and remove contaminated feed sources."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Neurological Examination",
      priority: "Essential",
      reason:
        "Characteristic brainstem signs strongly support diagnosis."
    },

    {
      id: "bacterial-culture",
      name: "Bacterial Culture",
      priority: "Recommended",
      reason:
        "Confirms Listeria monocytogenes infection."
    },

    {
      id: "pcr",
      name: "PCR",
      priority: "Recommended",
      reason:
        "Rapidly detects Listeria DNA."
    },

    {
      id: "csf-analysis",
      name: "Cerebrospinal Fluid Analysis",
      priority: "Recommended",
      reason:
        "Supports diagnosis of encephalitis."
    }

  ],

  drugCategories: [

    {
      category: "Antimicrobials",
      indication: "Listerial infection",
      reason:
        "High-dose antimicrobial therapy is most effective when initiated early."
    },

    {
      category: "NSAIDs",
      indication: "Inflammation",
      reason:
        "Provides supportive management."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration and anorexia",
      reason:
        "Maintains hydration and systemic perfusion."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "penicillin-g",
      priority: "First Line",
      category: "Antibiotic"
    },

    {
      drugId: "oxytetracycline",
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

    "Begin antimicrobial therapy immediately.",
    "Provide fluid and nutritional support.",
    "Place recumbent animals on soft bedding.",
    "Remove poor-quality silage from the ration.",
    "Minimize stress and maintain hydration.",
    "Isolate affected animals when appropriate."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Feeding poorly fermented silage",
        weight: 100
      },

      {
        finding: "Recent neurological cases within flock",
        weight: 90
      },

      {
        finding: "Abortion outbreak",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Circling behavior",
        weight: 100
      },

      {
        finding: "Unilateral facial paralysis",
        weight: 95
      },

      {
        finding: "Head tilt",
        weight: 90
      },

      {
        finding: "Dysphagia",
        weight: 90
      },

      {
        finding: "Depression or recumbency",
        weight: 85
      }

    ],

    biochemistry: [

      {
        finding: "Inflammatory leukogram",
        weight: 40
      }

    ],

    imaging: [

      {
        finding: "No routine imaging findings",
        weight: 10
      }

    ],

    supports: [

      {
        finding: "Positive PCR or bacterial culture for Listeria monocytogenes",
        weight: 100
      },

      {
        finding: "Typical brainstem neurological signs",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Normal neurological examination",
        weight: -70
      },

      {
        finding: "Alternative neurological disease confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "neurological-status",
      parameter: "Neurological examination",
      frequency: "Every 6–12 hours during acute illness",
      reason:
        "Assesses progression of encephalitis and response to treatment."
    },

    {
      id: "feed-water-intake",
      parameter: "Feed intake, swallowing ability, and hydration",
      frequency: "Daily",
      reason:
        "Identifies dysphagia, dehydration, and need for supportive care."
    },

    {
      id: "body-temperature",
      parameter: "Rectal temperature",
      frequency: "Daily",
      reason:
        "Monitors systemic infection and response to antimicrobial therapy."
    },

    {
      id: "recumbency",
      parameter: "Ability to stand and ambulate",
      frequency: "Daily",
      reason:
        "Evaluates neurological recovery and prognosis."
    },

    {
      id: "flock-surveillance",
      parameter: "New neurological or abortion cases",
      frequency: "Continuous",
      reason:
        "Detects additional affected animals and evaluates outbreak control."

    }

  ],

  precautions: [

    {
      id: "silage-quality",
      title: "High-Quality Silage",
      description:
        "Feed only properly fermented, good-quality silage and discard spoiled feed."
    },

    {
      id: "feed-storage",
      title: "Proper Feed Storage",
      description:
        "Store silage correctly to minimize contamination and poor fermentation."
    },

    {
      id: "biosecurity",
      title: "Biosecurity",
      description:
        "Isolate affected animals and promptly remove contaminated feed sources."
    },

    {
      id: "zoonotic-protection",
      title: "Human Health Protection",
      description:
        "Wear gloves when handling infected animals, aborted materials, or contaminated feed because Listeria monocytogenes is zoonotic."

    }

  ],

  prognosis:
    "Prognosis is fair when treatment is initiated early in the encephalitic stage. Animals with prolonged recumbency, severe neurological deficits, or inability to swallow have a guarded to poor prognosis.",

  strengtheningEvidence: [

    "History of spoiled silage feeding",

    "Circling behavior",

    "Cranial nerve deficits",

    "Positive PCR or bacterial culture"

  ],

  weakeningEvidence: [

    "No neurological abnormalities",

    "No exposure to poor-quality silage",

    "Alternative neurological disease confirmed"

  ],

  classicFindings: [

    "Circling",

    "Head tilt",

    "Facial paralysis",

    "Dysphagia",

    "Depression"

  ],

  ruleOutFindings: [

    "Polioencephalomalacia",

    "Tetanus",

    "Rabies",

    "Brain abscess",

    "Otitis media/interna",

    "Pregnancy toxemia"

  ],

};