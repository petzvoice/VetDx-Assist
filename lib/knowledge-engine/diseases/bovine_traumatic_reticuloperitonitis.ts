import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineTraumaticReticuloperitonitis: DiseaseCard = {
  id: "bovine-traumatic-reticuloperitonitis",

  title: "Bovine Traumatic Reticuloperitonitis",

  description:
    "A traumatic inflammatory disease of cattle caused by penetration of the reticular wall by ingested foreign bodies, resulting in localized or generalized peritonitis.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "TRP",
    "Hardware Disease",
    "Traumatic Reticulitis",
    "Foreign Body Disease",
  ],

  overview:
    "Traumatic reticuloperitonitis occurs when sharp foreign materials such as wire or nails are ingested and migrate through the reticulum wall. The resulting inflammation may remain localized or extend into the peritoneal cavity. In severe cases, complications may include abscess formation, diaphragmatic injury, or traumatic pericarditis.",

  clinicalProblems: [

    "Reticular penetration",
    "Peritonitis",
    "Abdominal pain",
    "Reduced feed intake",
    "Reduced milk production",
    "Fever",
    "Systemic inflammation"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess sudden production decrease, appetite loss, pain signs, and possible exposure to metallic foreign bodies."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate posture, movement, rumen function, fever, and abdominal pain responses."
    },

    {
      id: "diagnostic-testing",
      step: 3,
      title: "Diagnostic Testing",
      description:
        "Use imaging and laboratory tests to identify foreign bodies and inflammatory changes."
    },

    {
      id: "complication-assessment",
      step: 4,
      title: "Complication Assessment",
      description:
        "Evaluate for abscess formation, peritonitis, or cardiac involvement."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Provide medical management, foreign body control, and supportive treatment."
    }

  ],

  diagnostics: [

    {
      id: "pain-tests",
      name: "Reticular Pain Tests",
      priority: "Essential",
      reason:
        "Pain responses support diagnosis of traumatic reticuloperitonitis."
    },

    {
      id: "radiography",
      name: "Radiography",
      priority: "Recommended",
      reason:
        "May detect metallic foreign bodies."
    },

    {
      id: "ultrasound",
      name: "Ultrasonography",
      priority: "Recommended",
      reason:
        "Evaluates reticular inflammation and complications."
    },

    {
      id: "blood-test",
      name: "Blood Examination",
      priority: "Recommended",
      reason:
        "Detects inflammatory response."

    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Reticular infection and inflammation",
      reason:
        "Controls bacterial contamination."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Provides analgesia and reduces inflammation."
    },

    {
      category: "Supportive Therapy",
      indication: "Recovery support",
      reason:
        "Maintains hydration and nutrition."

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

    "Restrict animal movement.",
    "Provide appropriate antimicrobial therapy.",
    "Control inflammation and pain.",
    "Evaluate foreign body removal options.",
    "Monitor for peritonitis and complications."

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
        finding: "Sudden production loss",
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
        finding: "Reduced rumination",
        weight: 75
      }

    ],

    biochemistry: [

      {
        finding: "Inflammatory leukogram",
        weight: 70
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
        finding: "Foreign body penetration evidence",
        weight: 100
      },

      {
        finding: "Compatible clinical signs",
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
      id: "pain",
      parameter: "Pain response and posture",
      frequency: "Daily",
      reason:
        "Monitors resolution of reticular inflammation."
    },

    {
      id: "appetite",
      parameter: "Feed intake and rumination",
      frequency: "Daily",
      reason:
        "Evaluates restoration of digestive function."
    },

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Detects persistent infection or abscess formation."
    },

    {
      id: "production",
      parameter: "Milk production and body condition",
      frequency: "Regular evaluation",
      reason:
        "Assesses recovery and production improvement."
    },

    {
      id: "complications",
      parameter: "Signs of peritonitis or cardiac involvement",
      frequency: "Regular monitoring",
      reason:
        "Detects progression of severe disease."
    }

  ],

  precautions: [

    {
      id: "feed-safety",
      title: "Feed Contamination Control",
      description:
        "Prevent contamination of feed and pastures with wires, nails, and metallic objects."
    },

    {
      id: "magnet-prevention",
      title: "Rumen Magnet Use",
      description:
        "Use preventive rumen magnets in high-risk cattle to reduce metallic foreign body complications."
    },

    {
      id: "farm-management",
      title: "Farm Environment Management",
      description:
        "Maintain clean feeding areas and regularly inspect cattle housing environments."
    }

  ],

  prognosis:
    "Prognosis depends on the extent of tissue damage and complications. Early uncomplicated cases may recover, while advanced peritonitis, abscessation, or cardiac involvement carries a poor prognosis.",

  strengtheningEvidence: [

    "Metallic foreign body identified",

    "Positive reticular pain tests",

    "Compatible inflammatory response",

    "Ultrasound evidence of reticular inflammation"

  ],

  weakeningEvidence: [

    "No foreign body detected",

    "No pain response",

    "Alternative gastrointestinal disorder confirmed"

  ],

  classicFindings: [

    "Arched back posture",

    "Reluctance to move",

    "Pain during movement",

    "Reduced appetite",

    "Drop in milk production"

  ],

  ruleOutFindings: [

    "Bovine bloat",

    "Rumen acidosis",

    "Displaced abomasum",

    "Abomasal ulcer",

    "Intestinal obstruction",

    "Bovine peritonitis"

  ],

};