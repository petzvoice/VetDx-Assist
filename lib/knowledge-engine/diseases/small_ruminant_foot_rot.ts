import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantFootRot: DiseaseCard = {
  id: "small-ruminant-foot-rot",

  title: "Foot Rot",

  description:
    "A highly contagious bacterial disease of sheep and goats characterized by interdigital dermatitis, underrunning of the hoof horn, severe lameness, and production losses.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Ovine Foot Rot",
    "Caprine Foot Rot",
    "Infectious Foot Rot",
  ],

  overview:
    "Foot rot is primarily caused by Dichelobacter nodosus, often in association with Fusobacterium necrophorum. The disease develops under warm, wet environmental conditions and spreads rapidly within flocks. Progressive destruction of the hoof results in pain, lameness, reduced grazing, weight loss, and decreased productivity.",

  clinicalProblems: [

    "Interdigital dermatitis",
    "Hoof separation",
    "Severe lameness",
    "Pain",
    "Weight loss",
    "Reduced productivity"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess environmental conditions, flock history, introduction of new animals, and previous foot rot outbreaks."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Examine all feet for interdigital inflammation, hoof underrunning, foul odor, and lameness."
    },

    {
      id: "diagnosis",
      step: 3,
      title: "Diagnosis",
      description:
        "Establish diagnosis based on characteristic lesions and laboratory testing when required."
    },

    {
      id: "management",
      step: 4,
      title: "Disease Management",
      description:
        "Treat affected animals, improve environmental hygiene, and implement flock control measures."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Hoof Examination",
      priority: "Essential",
      reason:
        "Characteristic lesions are usually diagnostic."
    },

    {
      id: "bacterial-testing",
      name: "PCR or Bacterial Identification",
      priority: "Recommended",
      reason:
        "Confirms Dichelobacter nodosus infection."
    },

    {
      id: "lameness-scoring",
      name: "Lameness Assessment",
      priority: "Recommended",
      reason:
        "Determines disease severity."

    }

  ],

  drugCategories: [

    {
      category: "Antimicrobials",
      indication: "Bacterial infection",
      reason:
        "Controls bacterial proliferation."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Improves animal comfort and mobility."
    },

    {
      category: "Topical Therapy",
      indication: "Local hoof lesions",
      reason:
        "Promotes healing and reduces bacterial load."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "oxytetracycline",
      priority: "First Line",
      category: "Antibiotic"
    },

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Isolate affected animals.",
    "Trim diseased hooves when appropriate.",
    "Clean and disinfect affected feet.",
    "Administer systemic antimicrobial therapy.",
    "Provide pain management.",
    "Improve environmental hygiene."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Wet environmental conditions",
        weight: 90
      },

      {
        finding: "Recent introduction of infected animals",
        weight: 85
      },

      {
        finding: "Previous flock outbreaks",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Severe lameness",
        weight: 100
      },

      {
        finding: "Interdigital dermatitis",
        weight: 95
      },

      {
        finding: "Underrunning hoof horn",
        weight: 100
      },

      {
        finding: "Characteristic foul odor",
        weight: 90
      },

      {
        finding: "Weight loss due to reduced grazing",
        weight: 75
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
        finding: "Radiographs for advanced hoof involvement if indicated",
        weight: 40
      }

    ],

    supports: [

      {
        finding: "Characteristic hoof lesions",
        weight: 100
      },

      {
        finding: "Positive PCR for Dichelobacter nodosus",
        weight: 95
      }

    ],

    against: [

      {
        finding: "No hoof lesions",
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
      parameter: "Lameness severity",
      frequency: "Every 3–7 days during treatment",
      reason:
        "Assesses response to therapy and improvement in mobility."
    },

    {
      id: "hoof-lesions",
      parameter: "Healing of hoof lesions",
      frequency: "Weekly",
      reason:
        "Monitors resolution of interdigital dermatitis and hoof separation."
    },

    {
      id: "feed-intake",
      parameter: "Feed intake and body condition",
      frequency: "Weekly",
      reason:
        "Evaluates recovery of grazing behavior and production."
    },

    {
      id: "flock-surveillance",
      parameter: "Occurrence of new lameness cases",
      frequency: "Continuous",
      reason:
        "Detects disease spread within the flock."
    },

    {
      id: "environment",
      parameter: "Pen and pasture hygiene",
      frequency: "Regular evaluation",
      reason:
        "Reduces environmental persistence and transmission."

    }

  ],

  precautions: [

    {
      id: "hoof-trimming",
      title: "Routine Hoof Care",
      description:
        "Perform regular hoof inspection and trimming to maintain hoof health."
    },

    {
      id: "biosecurity",
      title: "Biosecurity",
      description:
        "Quarantine newly introduced animals and examine their feet before mixing with the flock."
    },

    {
      id: "footbaths",
      title: "Footbath Programs",
      description:
        "Use appropriate disinfectant footbaths as part of flock control programs."
    },

    {
      id: "environment",
      title: "Environmental Management",
      description:
        "Reduce prolonged exposure to wet, muddy conditions and improve drainage."

    }

  ],

  prognosis:
    "Prognosis is generally good with early diagnosis and appropriate treatment. Chronic or neglected cases may develop permanent hoof deformities and recurrent lameness.",

  strengtheningEvidence: [

    "Characteristic underrunning hoof horn",

    "Interdigital dermatitis",

    "Positive PCR for Dichelobacter nodosus",

    "Multiple affected animals in wet conditions"

  ],

  weakeningEvidence: [

    "No hoof lesions",

    "Dry, healthy feet",

    "Alternative orthopedic disease confirmed"

  ],

  classicFindings: [

    "Severe lameness",

    "Foul-smelling hoof lesions",

    "Interdigital inflammation",

    "Hoof horn separation",

    "Reduced grazing"

  ],

  ruleOutFindings: [

    "Foot abscess",

    "Contagious ovine digital dermatitis",

    "Laminitis",

    "Foot scald",

    "Traumatic hoof injury",

    "Arthritis"

  ],

};
