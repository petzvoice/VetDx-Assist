import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineHardwareDisease: DiseaseCard = {
  id: "bovine-hardware-disease",

  title: "Bovine Hardware Disease",

  description:
    "A traumatic digestive disorder of cattle caused by ingestion of metallic foreign bodies that penetrate the reticulum and may cause reticuloperitonitis or injury to surrounding organs.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Traumatic Reticuloperitonitis",
    "TRP",
    "Foreign Body Disease",
    "Hardware Disease",
  ],

  overview:
    "Hardware disease occurs when cattle accidentally ingest metallic objects such as nails, wires, and other sharp materials while feeding. These objects settle in the reticulum and may penetrate the reticular wall during rumen contractions. Penetration can result in localized inflammation, peritonitis, abscess formation, or injury to adjacent organs including the diaphragm and heart.",

  clinicalProblems: [

    "Reticular trauma",
    "Reticuloperitonitis",
    "Abdominal pain",
    "Reduced feed intake",
    "Reduced milk production",
    "Fever",
    "Peritonitis",
    "Rare cardiac complications"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess reduced production, sudden drop in appetite, pain signs, and exposure to contaminated feed or environment."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate pain responses, posture, rumen function, fever, and signs of abdominal discomfort."
    },

    {
      id: "metal-detection",
      step: 3,
      title: "Foreign Body Detection",
      description:
        "Use diagnostic methods to identify metallic foreign bodies and associated complications."
    },

    {
      id: "laboratory-evaluation",
      step: 4,
      title: "Laboratory Evaluation",
      description:
        "Assess inflammatory changes and systemic effects."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Provide medical management, remove foreign objects when indicated, and manage complications."
    }

  ],

  diagnostics: [

    {
      id: "pain-tests",
      name: "Reticular Pain Tests",
      priority: "Essential",
      reason:
        "Pain response supports diagnosis of traumatic reticuloperitonitis."
    },

    {
      id: "radiography",
      name: "Radiography",
      priority: "Recommended",
      reason:
        "May identify metallic foreign bodies."
    },

    {
      id: "ultrasound",
      name: "Ultrasonography",
      priority: "Recommended",
      reason:
        "Evaluates reticular inflammation and abscess formation."
    },

    {
      id: "blood-work",
      name: "Blood Examination",
      priority: "Recommended",
      reason:
        "Detects inflammatory response."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Reticuloperitonitis and infection",
      reason:
        "Controls bacterial complications."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Reduces inflammatory pain."
    },

    {
      category: "Supportive Therapy",
      indication: "Recovery",
      reason:
        "Supports appetite and general health."
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

    "Restrict movement to reduce reticular injury.",
    "Provide appropriate antimicrobial therapy when indicated.",
    "Control pain and inflammation.",
    "Evaluate need for foreign body removal.",
    "Monitor for peritonitis or cardiac complications."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Adult cattle affected",
        weight: 80
      },

      {
        finding: "Exposure to metallic materials",
        weight: 95
      },

      {
        finding: "Sudden production decrease",
        weight: 75
      }

    ],

    clinicalSigns: [

      {
        finding: "Painful movement",
        weight: 90
      },

      {
        finding: "Arched back posture",
        weight: 85
      },

      {
        finding: "Reduced appetite",
        weight: 80
      },

      {
        finding: "Fever",
        weight: 70
      },

      {
        finding: "Reduced milk production",
        weight: 75
      }

    ],

    biochemistry: [

      {
        finding: "Inflammatory leukogram",
        weight: 60
      }

    ],

    imaging: [

      {
        finding: "Metallic foreign body detected",
        weight: 100
      },

      {
        finding: "Reticular inflammation on ultrasound",
        weight: 85
      }

    ],

    supports: [

      {
        finding: "Metallic foreign body identified",
        weight: 100
      },

      {
        finding: "Compatible pain response",
        weight: 90
      }

    ],

    against: [

      {
        finding: "No evidence of foreign body",
        weight: -60
      },

      {
        finding: "Alternative abdominal disease confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "pain-response",
      parameter: "Abdominal pain signs and posture",
      frequency: "Daily",
      reason:
        "Monitors resolution of reticular inflammation and discomfort."
    },

    {
      id: "appetite",
      parameter: "Feed intake and rumination",
      frequency: "Daily",
      reason:
        "Evaluates recovery of digestive function."
    },

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Detects persistent infection or abscess formation."
    },

    {
      id: "milk-production",
      parameter: "Milk production",
      frequency: "Daily in lactating cows",
      reason:
        "Assesses recovery of production losses."
    },

    {
      id: "complications",
      parameter: "Signs of peritonitis or cardiac involvement",
      frequency: "Regular evaluation",
      reason:
        "Detects progression of disease."

    }

  ],

  precautions: [

    {
      id: "foreign-body-prevention",
      title: "Foreign Body Prevention",
      description:
        "Reduce exposure to metallic objects by maintaining clean feeding areas and preventing contamination of feed."
    },

    {
      id: "magnet-use",
      title: "Rumen Magnet Use",
      description:
        "Preventive rumen magnets may reduce risk of metallic foreign body complications in high-risk cattle."
    },

    {
      id: "feed-management",
      title: "Feed Safety",
      description:
        "Inspect feed sources and remove metallic contaminants before feeding."
    }

  ],

  prognosis:
    "Prognosis depends on severity and extent of organ involvement. Early uncomplicated cases may recover well, while advanced peritonitis or cardiac involvement carries a poor prognosis.",

  strengtheningEvidence: [

    "Metallic foreign body detected",

    "Pain on reticular movement tests",

    "Reduced production with abdominal pain",

    "Ultrasound evidence of reticular inflammation"

  ],

  weakeningEvidence: [

    "No foreign body detected",

    "Normal pain responses",

    "Alternative cause of abdominal pain identified"

  ],

  classicFindings: [

    "Arched back",

    "Reluctance to move",

    "Pain during movement",

    "Reduced rumination",

    "Drop in milk production"

  ],

  ruleOutFindings: [

    "Bovine bloat",

    "Displaced abomasum",

    "Rumen acidosis",

    "Intestinal obstruction",

    "Abomasal ulcer",

    "Peritonitis"

  ],

};