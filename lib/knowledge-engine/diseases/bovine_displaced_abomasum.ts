import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineDisplacedAbomasum: DiseaseCard = {
  id: "bovine-displaced-abomasum",

  title: "Bovine Displaced Abomasum",

  description:
    "A digestive disorder of cattle in which the abomasum moves from its normal anatomical position, causing reduced feed intake, decreased production, and metabolic disturbances.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "DA",
    "Left Displaced Abomasum",
    "Right Displaced Abomasum",
    "LDA",
    "RDA",
  ],

  overview:
    "Displaced abomasum is commonly seen in high-producing dairy cattle, especially during the postpartum period. Reduced abomasal motility, gas accumulation, and changes in abdominal space allow the abomasum to shift position. Left displacement is more common, while right displacement may progress to volvulus and become a surgical emergency.",

  clinicalProblems: [

    "Abomasal displacement",
    "Reduced feed intake",
    "Milk production loss",
    "Ketosis association",
    "Abomasal distension",
    "Metabolic imbalance",
    "Possible volvulus"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent calving, sudden drop in milk production, appetite loss, ketosis history, and dietary changes."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate appetite, rumen activity, dehydration, abdominal contour, and characteristic auscultation findings."
    },

    {
      id: "auscultation",
      step: 3,
      title: "Auscultation and Percussion",
      description:
        "Identify characteristic ping sounds associated with gas-filled displaced abomasum."
    },

    {
      id: "laboratory-evaluation",
      step: 4,
      title: "Laboratory Evaluation",
      description:
        "Assess metabolic abnormalities including ketosis and electrolyte disturbances."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Correct metabolic abnormalities and reposition the abomasum medically or surgically."
    }

  ],

  diagnostics: [

    {
      id: "auscultation",
      name: "Auscultation and Percussion",
      priority: "Essential",
      reason:
        "Characteristic high-pitched ping supports diagnosis."
    },

    {
      id: "ultrasound",
      name: "Ultrasonography",
      priority: "Recommended",
      reason:
        "Helps identify abomasal position and contents."
    },

    {
      id: "blood-work",
      name: "Blood Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates metabolic disturbances."
    },

    {
      id: "ketone-testing",
      name: "Ketone Testing",
      priority: "Recommended",
      reason:
        "Detects associated ketosis."
    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "Metabolic support",
      reason:
        "Corrects associated nutritional and metabolic problems."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration and electrolyte imbalance",
      reason:
        "Maintains hydration status."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Provides supportive comfort."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Correct dehydration and electrolyte abnormalities.",
    "Evaluate for ketosis.",
    "Restore abomasal position.",
    "Provide nutritional support.",
    "Monitor for recurrence."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent calving",
        weight: 90
      },

      {
        finding: "High-producing dairy cow",
        weight: 85
      },

      {
        finding: "Sudden milk drop",
        weight: 90
      },

      {
        finding: "Recent metabolic disease",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Reduced appetite",
        weight: 85
      },

      {
        finding: "Reduced milk production",
        weight: 90
      },

      {
        finding: "Weight loss",
        weight: 75
      },

      {
        finding: "Decreased rumen motility",
        weight: 75
      }

    ],

    biochemistry: [

      {
        finding: "Ketosis",
        weight: 70
      },

      {
        finding: "Electrolyte imbalance",
        weight: 60
      }

    ],

    imaging: [

      {
        finding: "Displaced abomasum identified on ultrasound",
        weight: 95
      }

    ],

    supports: [

      {
        finding: "Characteristic ping sound",
        weight: 100
      },

      {
        finding: "Postpartum dairy cow",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Normal abdominal examination",
        weight: -70
      },

      {
        finding: "Alternative digestive disorder confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "feed-intake",
      parameter: "Feed intake and appetite",
      frequency: "Daily",
      reason:
        "Monitors restoration of normal digestive function."
    },

    {
      id: "milk-production",
      parameter: "Milk production",
      frequency: "Daily in lactating cows",
      reason:
        "Evaluates recovery after correction of displacement."
    },

    {
      id: "rumen-function",
      parameter: "Rumen motility and rumination",
      frequency: "Daily",
      reason:
        "Assesses gastrointestinal recovery."
    },

    {
      id: "ketosis",
      parameter: "Ketone levels",
      frequency: "Regular evaluation",
      reason:
        "Monitors associated metabolic disease."
    },

    {
      id: "recurrence",
      parameter: "Signs of recurrent displacement",
      frequency: "Long-term monitoring",
      reason:
        "Identifies repeated episodes."

    }

  ],

  precautions: [

    {
      id: "transition-management",
      title: "Transition Cow Management",
      description:
        "Provide balanced nutrition during the dry period and postpartum transition to reduce metabolic disorders."
    },

    {
      id: "feed-management",
      title: "Diet Management",
      description:
        "Maintain appropriate fiber levels and avoid sudden dietary changes."
    },

    {
      id: "ketosis-control",
      title: "Ketosis Prevention",
      description:
        "Prevent excessive negative energy balance after calving."
    }

  ],

  prognosis:
    "Prognosis is generally good when diagnosed early and corrected promptly. Right displacement with volvulus has a more guarded prognosis due to vascular compromise and tissue damage.",

  strengtheningEvidence: [

    "Postpartum dairy cow",

    "Characteristic ping sound",

    "Sudden milk production decrease",

    "Ultrasound confirmation"

  ],

  weakeningEvidence: [

    "No abnormal percussion findings",

    "Normal feed intake",

    "Alternative cause of production loss identified"

  ],

  classicFindings: [

    "Left abdominal ping",

    "Reduced appetite",

    "Drop in milk production",

    "Reduced rumination",

    "Ketosis association"

  ],

  ruleOutFindings: [

    "Rumen acidosis",

    "Bovine bloat",

    "Traumatic reticuloperitonitis",

    "Abomasal ulcer",

    "Ketosis",

    "Intestinal obstruction"

  ],

};