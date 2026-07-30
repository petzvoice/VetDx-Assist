import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineFootRot: DiseaseCard = {
  id: "bovine-foot-rot",

  title: "Bovine Foot Rot",

  description:
    "A contagious bacterial infection of the interdigital space and foot tissues in cattle causing acute lameness, swelling, pain, and reduced productivity.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Interdigital Necrobacillosis",
    "Interdigital Phlegmon",
    "Bovine Interdigital Foot Rot",
  ],

  overview:
    "Foot rot is primarily associated with bacterial infection involving Fusobacterium necrophorum and other organisms. Damage to the interdigital skin caused by wet, muddy, abrasive environments allows bacterial invasion. The disease results in severe lameness and can affect weight gain, milk production, and breeding performance.",

  clinicalProblems: [

    "Severe lameness",
    "Foot inflammation",
    "Interdigital infection",
    "Pain",
    "Reduced feed intake",
    "Production loss"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess environmental conditions, recent exposure to wet areas, and herd lameness patterns."
    },

    {
      id: "lameness-examination",
      step: 2,
      title: "Lameness Examination",
      description:
        "Evaluate gait, affected limb, swelling, and pain response."
    },

    {
      id: "foot-examination",
      step: 3,
      title: "Foot Examination",
      description:
        "Inspect interdigital space for lesions, odor, swelling, and tissue damage."
    },

    {
      id: "management",
      step: 4,
      title: "Disease Management",
      description:
        "Provide antimicrobial therapy, foot care, and environmental correction."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Clinical Foot Examination",
      priority: "Essential",
      reason:
        "Diagnosis is mainly based on characteristic lesions and lameness."
    },

    {
      id: "lameness-assessment",
      name: "Lameness Assessment",
      priority: "Recommended",
      reason:
        "Determines severity and treatment response."
    },

    {
      id: "radiography",
      name: "Radiography",
      priority: "Recommended",
      reason:
        "Evaluates deeper structures when complications are suspected."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Bacterial foot infection",
      reason:
        "Eliminates infectious organisms."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Improves comfort and mobility."
    },

    {
      category: "Supportive Therapy",
      indication: "Foot recovery",
      reason:
        "Supports healing and prevents recurrence."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "ceftiofur",
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

    "Identify affected foot.",
    "Clean and inspect lesion.",
    "Provide appropriate antimicrobial therapy.",
    "Reduce exposure to wet contaminated environments.",
    "Monitor improvement in lameness."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Wet muddy environment",
        weight: 85
      },

      {
        finding: "Herd lameness problem",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Sudden severe lameness",
        weight: 95
      },

      {
        finding: "Interdigital swelling",
        weight: 100
      },

      {
        finding: "Pain on foot examination",
        weight: 90
      },

      {
        finding: "Foul odor",
        weight: 85
      },

      {
        finding: "Reduced weight bearing",
        weight: 90
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
        finding: "Bone involvement on radiography in complicated cases",
        weight: 50
      }

    ],

    supports: [

      {
        finding: "Interdigital lesion with swelling",
        weight: 100
      },

      {
        finding: "Rapid improvement after treatment",
        weight: 90
      }

    ],

    against: [

      {
        finding: "No foot lesion identified",
        weight: -80
      },

      {
        finding: "Joint disease confirmed",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "lameness",
      parameter: "Degree of lameness and weight bearing",
      frequency: "Daily",
      reason:
        "Evaluates response to treatment and pain reduction."
    },

    {
      id: "lesion-healing",
      parameter: "Interdigital swelling and lesion healing",
      frequency: "Daily",
      reason:
        "Monitors resolution of infection."
    },

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily in severe cases",
      reason:
        "Detects systemic involvement."
    },

    {
      id: "production",
      parameter: "Milk production and body condition",
      frequency: "Regular evaluation",
      reason:
        "Assesses impact on productivity."
    },

    {
      id: "herd-status",
      parameter: "Occurrence of new cases in herd",
      frequency: "Regular monitoring",
      reason:
        "Detects environmental risk factors and outbreaks."

    }

  ],

  precautions: [

    {
      id: "environment-management",
      title: "Environmental Management",
      description:
        "Maintain clean, dry walking areas and reduce prolonged exposure to mud and moisture."
    },

    {
      id: "foot-hygiene",
      title: "Foot Hygiene",
      description:
        "Implement routine hoof care and inspection programs."
    },

    {
      id: "early-detection",
      title: "Early Lameness Detection",
      description:
        "Identify mild lameness early to prevent severe foot lesions."
    },

    {
      id: "biosecurity",
      title: "Herd Biosecurity",
      description:
        "Prevent introduction and spread of infectious foot pathogens."

    }

  ],

  prognosis:
    "Prognosis is generally good with early treatment. Delayed treatment may lead to chronic lameness, deeper tissue involvement, reduced production, and poor welfare.",

  strengtheningEvidence: [

    "Acute onset severe lameness",

    "Interdigital swelling",

    "Painful foot lesion",

    "Response to antimicrobial therapy"

  ],

  weakeningEvidence: [

    "No interdigital abnormalities",

    "Chronic non-responsive lameness",

    "Joint or bone disease confirmed"

  ],

  classicFindings: [

    "Sudden lameness",

    "Swollen interdigital space",

    "Pain on manipulation",

    "Foul-smelling lesion",

    "Reduced mobility"

  ],

  ruleOutFindings: [

    "Digital dermatitis",

    "Sole ulcer",

    "White line disease",

    "Laminitis",

    "Septic arthritis",

    "Hoof trauma"

  ],

};