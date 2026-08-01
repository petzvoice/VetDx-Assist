import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantFootAbscess: DiseaseCard = {
  id: "small-ruminant-foot-abscess",

  title: "Foot Abscess",

  description:
    "A localized bacterial infection within the hoof or deeper tissues of the foot of sheep and goats, characterized by acute severe lameness, swelling, pain, and accumulation of purulent material.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Hoof Abscess",
    "Pedal Abscess",
    "Subsolar Abscess",
    "Interdigital Abscess",
  ],

  overview:
    "Foot abscesses usually develop following penetration of the hoof by foreign bodies, trauma, excessive hoof trimming, or extension of interdigital infections. Common bacterial pathogens include Fusobacterium necrophorum, Trueperella pyogenes, Staphylococcus spp., and other opportunistic bacteria. Prompt drainage, antimicrobial therapy when indicated, and appropriate hoof care generally result in an excellent prognosis.",

  clinicalProblems: [

    "Acute severe lameness",
    "Localized foot swelling",
    "Purulent abscess",
    "Pain",
    "Reduced weight bearing",
    "Secondary cellulitis"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess onset of lameness, recent hoof trimming, trauma, foreign body exposure, and previous foot disease."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Examine the hoof, interdigital space, coronary band, and surrounding tissues for swelling, pain, heat, and draining tracts."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Confirm abscess location by careful hoof examination and radiography when bone involvement is suspected."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment",
      description:
        "Drain the abscess, establish adequate drainage, provide analgesia, administer antimicrobials when indicated, and maintain clean housing."
    }

  ],

  diagnostics: [

    {
      id: "hoof-examination",
      name: "Hoof Examination",
      priority: "Essential",
      reason:
        "Identifies the location of pain and purulent material."
    },

    {
      id: "hoof-testers",
      name: "Hoof Testers",
      priority: "Recommended",
      reason:
        "Localizes painful areas within the hoof."
    },

    {
      id: "radiography",
      name: "Radiography",
      priority: "Recommended",
      reason:
        "Evaluates osteomyelitis, fractures, or foreign bodies."
    },

    {
      id: "culture",
      name: "Bacterial Culture",
      priority: "Recommended",
      reason:
        "Useful in chronic or recurrent infections."
    }

  ],

  drugCategories: [

    {
      category: "Antimicrobials",
      indication: "Bacterial infection",
      reason:
        "Controls bacterial spread in complicated infections."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Improves comfort and mobility."
    },

    {
      category: "Topical Antiseptics",
      indication: "Local wound care",
      reason:
        "Reduces bacterial contamination after drainage."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "oxytetracycline",
      priority: "First Line",
      category: "Antibiotic"
    },

    {
      drugId: "penicillin-g",
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

    "Restrain the animal safely.",
    "Drain the abscess completely.",
    "Flush the cavity with antiseptic solution when appropriate.",
    "Provide systemic analgesia.",
    "Bandage the foot if indicated.",
    "Keep the animal on clean, dry bedding."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent hoof trauma",
        weight: 90
      },

      {
        finding: "Recent hoof trimming",
        weight: 80
      },

      {
        finding: "Acute onset of severe lameness",
        weight: 95
      }

    ],

    clinicalSigns: [

      {
        finding: "Marked unilateral lameness",
        weight: 100
      },

      {
        finding: "Localized painful swelling",
        weight: 95
      },

      {
        finding: "Purulent discharge",
        weight: 100
      },

      {
        finding: "Warm hoof",
        weight: 85
      },

      {
        finding: "Pain on hoof tester examination",
        weight: 95
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
        finding: "Soft tissue swelling or bone involvement on radiographs",
        weight: 75
      }

    ],

    supports: [

      {
        finding: "Purulent material released after hoof drainage",
        weight: 100
      },

      {
        finding: "Localized abscess identified on examination",
        weight: 95
      }

    ],

    against: [

      {
        finding: "No evidence of localized infection",
        weight: -70
      },

      {
        finding: "Alternative cause of lameness confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "lameness",
      parameter: "Degree of lameness",
      frequency: "Daily until improvement, then weekly",
      reason:
        "Assesses response to drainage and treatment."
    },

    {
      id: "wound-healing",
      parameter: "Abscess drainage site and wound healing",
      frequency: "Daily",
      reason:
        "Detects persistent infection, inadequate drainage, or delayed healing."
    },

    {
      id: "swelling",
      parameter: "Foot swelling and pain",
      frequency: "Daily",
      reason:
        "Monitors reduction of inflammation and identifies complications."
    },

    {
      id: "bandage",
      parameter: "Bandage condition (if applied)",
      frequency: "Daily",
      reason:
        "Ensures the dressing remains clean, dry, and effective."
    },

    {
      id: "recurrence",
      parameter: "Development of recurrent abscesses",
      frequency: "During follow-up examinations",
      reason:
        "Identifies chronic infection, foreign bodies, or underlying hoof disease."
    }

  ],

  precautions: [

    {
      id: "hoof-care",
      title: "Routine Hoof Care",
      description:
        "Perform regular hoof inspection and trimming while avoiding excessive removal of healthy hoof tissue."
    },

    {
      id: "environment",
      title: "Clean and Dry Housing",
      description:
        "Maintain dry bedding and minimize exposure to muddy, contaminated environments."
    },

    {
      id: "trauma",
      title: "Prevent Hoof Trauma",
      description:
        "Remove sharp objects from grazing areas and handling facilities to reduce hoof injuries."
    },

    {
      id: "early-treatment",
      title: "Prompt Treatment",
      description:
        "Treat foot wounds and interdigital infections early to prevent abscess formation."
    }

  ],

  prognosis:
    "Prognosis is excellent when abscesses are identified early and adequately drained. Delayed treatment, deep tissue involvement, osteomyelitis, or persistent foreign bodies may result in chronic lameness and a guarded prognosis.",

  strengtheningEvidence: [

    "Acute severe unilateral lameness",

    "Localized painful swelling",

    "Purulent discharge after drainage",

    "Pain localized with hoof testers"

  ],

  weakeningEvidence: [

    "No localized swelling",

    "No purulent material",

    "Alternative orthopedic condition identified"

  ],

  classicFindings: [

    "Acute lameness",

    "Warm swollen foot",

    "Pain on hoof pressure",

    "Purulent abscess",

    "Rapid improvement after drainage"

  ],

  ruleOutFindings: [

    "Foot rot",

    "Contagious ovine digital dermatitis",

    "Foot scald",

    "Laminitis",

    "White line disease",

    "Fracture of the digit"

  ],

};