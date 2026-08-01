import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantHeatStress: DiseaseCard = {
  id: "small-ruminant-heat-stress",

  title: "Heat Stress",

  description:
    "A thermoregulatory disorder of sheep and goats that develops when environmental heat load exceeds the animal's ability to dissipate heat, resulting in hyperthermia, dehydration, electrolyte imbalance, reduced productivity, organ dysfunction, and potentially fatal heat stroke.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Heat Exhaustion",
    "Heat Stroke",
    "Hyperthermia",
    "Environmental Heat Stress",
  ],

  overview:
    "Heat stress occurs during periods of high ambient temperature, humidity, solar radiation, and poor ventilation. Risk factors include transportation, overcrowding, inadequate water availability, obesity, heavy fleece, and high-producing animals. Clinical severity ranges from mild panting and reduced feed intake to circulatory collapse, neurological dysfunction, multiorgan failure, and death. Early cooling and supportive care are essential for survival.",

  clinicalProblems: [

    "Hyperthermia",
    "Panting",
    "Dehydration",
    "Electrolyte imbalance",
    "Reduced feed intake",
    "Circulatory collapse",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess environmental temperature, humidity, transportation history, ventilation, stocking density, and water availability."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate rectal temperature, respiratory rate, heart rate, hydration, mentation, and evidence of neurological dysfunction."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Assess hydration, electrolyte abnormalities, acid-base balance, and organ function in severe cases."
    },

    {
      id: "management",
      step: 4,
      title: "Emergency Treatment",
      description:
        "Immediately reduce body temperature, provide intravenous fluids, correct electrolyte abnormalities, and minimize stress."
    }

  ],

  diagnostics: [

    {
      id: "temperature",
      name: "Rectal Temperature",
      priority: "Essential",
      reason:
        "Confirms hyperthermia and guides treatment."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates electrolyte imbalance and organ dysfunction."
    },

    {
      id: "blood-gas",
      name: "Blood Gas Analysis",
      priority: "Recommended",
      reason:
        "Assesses acid-base disturbances in severe heat stress."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates hemoconcentration and concurrent disease."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Dehydration and shock",
      reason:
        "Restores circulating volume and corrects electrolyte disturbances."
    },

    {
      category: "Electrolyte Solutions",
      indication: "Electrolyte imbalance",
      reason:
        "Corrects fluid and electrolyte deficits."
    },

    {
      category: "NSAIDs",
      indication: "Supportive care",
      reason:
        "May be considered in selected cases under veterinary supervision after stabilization."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "lactated-ringers-solution",
      priority: "First Line",
      category: "Fluid Therapy"
    },

    {
      drugId: "normal-saline",
      priority: "Alternative",
      category: "Fluid Therapy"
    }

  ],

  stabilization: [

    "Move the animal immediately to a shaded, well-ventilated area.",
    "Begin active cooling using cool (not ice-cold) water and airflow.",
    "Administer intravenous fluids as indicated.",
    "Correct electrolyte and acid-base abnormalities.",
    "Minimize handling and transportation.",
    "Continue cooling until body temperature approaches the normal range."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Exposure to hot, humid weather",
        weight: 100
      },

      {
        finding: "Recent transportation",
        weight: 85
      },

      {
        finding: "Limited water availability",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Marked hyperthermia",
        weight: 100
      },

      {
        finding: "Open-mouth panting",
        weight: 95
      },

      {
        finding: "Profuse salivation",
        weight: 80
      },

      {
        finding: "Weakness or collapse",
        weight: 95
      },

      {
        finding: "Neurological abnormalities",
        weight: 90
      }

    ],

    biochemistry: [

      {
        finding: "Hemoconcentration",
        weight: 75
      },

      {
        finding: "Electrolyte abnormalities",
        weight: 80
      },

      {
        finding: "Metabolic acidosis",
        weight: 75
      }

    ],

    imaging: [

      {
        finding: "No characteristic imaging abnormalities",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Hyperthermia following environmental heat exposure",
        weight: 100
      },

      {
        finding: "Rapid improvement after cooling therapy",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Normal body temperature",
        weight: -80
      },

      {
        finding: "Alternative cause of hyperthermia confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "body-temperature",
      parameter: "Rectal temperature",
      frequency: "Every 15–30 minutes until normal, then every 4–6 hours",
      reason:
        "Evaluates response to cooling therapy and prevents rebound hyperthermia or overcooling."
    },

    {
      id: "cardiorespiratory",
      parameter: "Heart rate and respiratory rate",
      frequency: "Every 1–2 hours during acute treatment",
      reason:
        "Monitors cardiovascular stability and respiratory recovery."
    },

    {
      id: "hydration",
      parameter: "Hydration status, mucous membranes, and capillary refill time",
      frequency: "Every 4–6 hours",
      reason:
        "Guides fluid therapy and assesses circulatory perfusion."
    },

    {
      id: "electrolytes",
      parameter: "Serum electrolytes and acid-base status",
      frequency: "Daily or as clinically indicated",
      reason:
        "Detects persistent electrolyte disturbances and metabolic abnormalities."
    },

    {
      id: "neurological-status",
      parameter: "Neurological status and level of consciousness",
      frequency: "Every 4–6 hours",
      reason:
        "Identifies cerebral edema, heat stroke progression, or recovery."
    }

  ],

  precautions: [

    {
      id: "shade",
      title: "Provide Adequate Shade",
      description:
        "Ensure animals have continuous access to shaded areas during periods of high environmental temperatures."
    },

    {
      id: "water",
      title: "Unlimited Clean Water",
      description:
        "Provide unrestricted access to cool, clean drinking water at all times."
    },

    {
      id: "ventilation",
      title: "Optimize Ventilation",
      description:
        "Maintain adequate airflow in barns and transport vehicles while avoiding overcrowding."
    },

    {
      id: "management",
      title: "Reduce Heat Exposure",
      description:
        "Schedule transport, handling, shearing, and other stressful procedures during cooler parts of the day."

    }

  ],

  prognosis:
    "Prognosis is excellent when mild heat stress is recognized early and corrected promptly. Animals with heat stroke, neurological dysfunction, disseminated intravascular coagulation, multiple organ failure, or prolonged hyperthermia have a guarded to poor prognosis.",

  strengtheningEvidence: [

    "Exposure to high environmental temperatures",

    "Rectal hyperthermia",

    "Open-mouth panting",

    "Rapid improvement following cooling therapy"

  ],

  weakeningEvidence: [

    "Normal body temperature",

    "No environmental heat exposure",

    "Alternative cause of hyperthermia identified"

  ],

  classicFindings: [

    "Hyperthermia",

    "Panting",

    "Profuse salivation",

    "Weakness",

    "Collapse"

  ],

  ruleOutFindings: [

    "Pneumonia",

    "Septicemia",

    "Enterotoxemia",

    "Polioencephalomalacia",

    "Plant poisoning",

    "Anaphylaxis"

  ],

};
