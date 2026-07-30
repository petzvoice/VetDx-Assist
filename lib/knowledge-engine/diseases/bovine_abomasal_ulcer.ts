import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineAbomasalUlcer: DiseaseCard = {
  id: "bovine-abomasal-ulcer",

  title: "Bovine Abomasal Ulcer",

  description:
    "A gastrointestinal disorder of cattle characterized by ulceration of the abomasal lining, which may result in pain, bleeding, anemia, perforation, and peritonitis.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Abomasal Ulcer Disease",
    "Bovine Gastric Ulcer",
    "Abomasal Erosion",
  ],

  overview:
    "Abomasal ulcers occur when the protective mechanisms of the abomasal mucosa are compromised, allowing acid-induced injury. They are commonly associated with stress, high-concentrate diets, metabolic diseases, infectious conditions, and postpartum disorders. Ulcers may range from superficial erosions to deep perforating lesions causing severe complications.",

  clinicalProblems: [

    "Abomasal mucosal damage",
    "Gastrointestinal bleeding",
    "Abdominal pain",
    "Anemia",
    "Peritonitis",
    "Reduced production",
    "Sudden death in severe cases"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess postpartum status, stress, feeding practices, concurrent diseases, and production changes."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate appetite, abdominal pain, fecal appearance, anemia signs, and systemic illness."
    },

    {
      id: "laboratory-evaluation",
      step: 3,
      title: "Laboratory Evaluation",
      description:
        "Assess anemia, inflammation, and metabolic abnormalities."
    },

    {
      id: "imaging",
      step: 4,
      title: "Diagnostic Imaging",
      description:
        "Use ultrasonography or other methods when available to evaluate complications."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Provide supportive care, reduce risk factors, and manage complications."
    }

  ],

  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Detects anemia associated with gastrointestinal bleeding."
    },

    {
      id: "fecal-occult-blood",
      name: "Fecal Occult Blood Test",
      priority: "Recommended",
      reason:
        "May detect gastrointestinal bleeding."
    },

    {
      id: "ultrasound",
      name: "Ultrasonography",
      priority: "Recommended",
      reason:
        "Helps identify abdominal complications."
    },

    {
      id: "clinical-evaluation",
      name: "Clinical Assessment",
      priority: "Essential",
      reason:
        "Evaluates signs of pain, bleeding, and systemic disease."
    }

  ],

  drugCategories: [

    {
      category: "Gastroprotectants",
      indication: "Abomasal mucosal protection",
      reason:
        "Reduce mucosal irritation and support healing."
    },

    {
      category: "NSAIDs",
      indication: "Pain management",
      reason:
        "Used cautiously for pain control."
    },

    {
      category: "Supportive Therapy",
      indication: "Systemic support",
      reason:
        "Maintains hydration and recovery."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "omeprazole",
      priority: "Supportive",
      category: "Gastroprotectant"
    },

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Correct dehydration and weakness.",
    "Reduce dietary stress.",
    "Provide supportive nutrition.",
    "Monitor for gastrointestinal bleeding.",
    "Evaluate for perforation or peritonitis."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Postpartum cow",
        weight: 85
      },

      {
        finding: "High concentrate diet",
        weight: 75
      },

      {
        finding: "Concurrent metabolic disease",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Reduced appetite",
        weight: 75
      },

      {
        finding: "Abdominal pain",
        weight: 80
      },

      {
        finding: "Melena or dark feces",
        weight: 90
      },

      {
        finding: "Weakness",
        weight: 70
      },

      {
        finding: "Sudden death",
        weight: 80
      }

    ],

    biochemistry: [

      {
        finding: "Anemia",
        weight: 80
      },

      {
        finding: "Inflammatory changes",
        weight: 50
      }

    ],

    imaging: [

      {
        finding: "Abdominal abnormalities on ultrasound",
        weight: 60
      }

    ],

    supports: [

      {
        finding: "Evidence of gastrointestinal bleeding",
        weight: 95
      },

      {
        finding: "Compatible clinical signs",
        weight: 85
      }

    ],

    against: [

      {
        finding: "No evidence of bleeding",
        weight: -50
      },

      {
        finding: "Alternative digestive disease confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "fecal-monitoring",
      parameter: "Fecal color and consistency",
      frequency: "Daily",
      reason:
        "Detects ongoing gastrointestinal bleeding."
    },

    {
      id: "appetite",
      parameter: "Feed intake and rumination",
      frequency: "Daily",
      reason:
        "Evaluates improvement in digestive function."
    },

    {
      id: "anemia",
      parameter: "Mucous membrane color and packed cell volume",
      frequency: "Regular evaluation",
      reason:
        "Monitors blood loss and anemia progression."
    },

    {
      id: "pain",
      parameter: "Signs of abdominal pain",
      frequency: "Daily",
      reason:
        "Assesses discomfort and disease progression."
    },

    {
      id: "production",
      parameter: "Milk production and body condition",
      frequency: "Regular evaluation",
      reason:
        "Monitors recovery and production impact."
    }

  ],

  precautions: [

    {
      id: "nutrition",
      title: "Nutritional Management",
      description:
        "Maintain balanced diets with adequate fiber and avoid excessive concentrate feeding."
    },

    {
      id: "stress-control",
      title: "Stress Reduction",
      description:
        "Reduce management stressors that increase risk of abomasal ulceration."
    },

    {
      id: "metabolic-control",
      title: "Control Concurrent Diseases",
      description:
        "Prevent and manage ketosis, displaced abomasum, and other metabolic disorders associated with ulcer formation."
    }

  ],

  prognosis:
    "Prognosis varies with severity. Superficial ulcers may improve with supportive management, while perforating ulcers causing peritonitis have a poor prognosis.",

  strengtheningEvidence: [

    "Evidence of gastrointestinal bleeding",

    "Dark tarry feces",

    "Anemia",

    "Postpartum or high-stress period"

  ],

  weakeningEvidence: [

    "No evidence of bleeding",

    "Normal blood parameters",

    "Alternative cause of clinical signs identified"

  ],

  classicFindings: [

    "Melena",

    "Pale mucous membranes",

    "Reduced appetite",

    "Abdominal discomfort",

    "Sudden collapse in severe cases"

  ],

  ruleOutFindings: [

    "Traumatic reticuloperitonitis",

    "Displaced abomasum",

    "Rumen acidosis",

    "Bovine bloat",

    "Intestinal hemorrhage",

    "Septic peritonitis"

  ],

};