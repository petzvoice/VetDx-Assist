import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantHypothermia: DiseaseCard = {
  id: "small-ruminant-hypothermia",

  title: "Hypothermia",

  description:
    "Hypothermia is a life-threatening condition in sheep and goats characterized by an abnormally low core body temperature resulting from excessive heat loss, inadequate heat production, or impaired thermoregulation. Neonates are particularly susceptible due to limited energy reserves and environmental exposure.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Cold Stress",
    "Neonatal Hypothermia",
    "Environmental Hypothermia",
  ],

  overview:
    "Hypothermia commonly affects newborn lambs and kids exposed to cold, wet, or windy conditions, particularly when colostrum intake is inadequate. Adult animals may develop hypothermia following prolonged environmental exposure, severe illness, shock, starvation, or anesthesia. Progressive hypothermia leads to depression, bradycardia, reduced perfusion, hypoglycemia, metabolic acidosis, coma, and death if prompt warming and supportive care are not instituted.",

  clinicalProblems: [

    "Low body temperature",
    "Hypoglycemia",
    "Bradycardia",
    "Weakness",
    "Recumbency",
    "Coma",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess environmental exposure, age, birth history, colostrum intake, nutritional status, illness, transport, and recent weather conditions."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Measure rectal temperature and evaluate cardiovascular status, hydration, neurological function, suckle reflex, and level of consciousness."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Assess blood glucose, acid-base status, electrolytes, and investigate underlying diseases contributing to hypothermia."
    },

    {
      id: "management",
      step: 4,
      title: "Emergency Treatment",
      description:
        "Provide gradual warming, correct hypoglycemia and dehydration, administer colostrum or energy supplementation, and treat underlying disease."
    }

  ],

  diagnostics: [

    {
      id: "temperature",
      name: "Rectal Temperature",
      priority: "Essential",
      reason:
        "Confirms hypothermia and determines severity."
    },

    {
      id: "blood-glucose",
      name: "Blood Glucose",
      priority: "Essential",
      reason:
        "Detects hypoglycemia, especially in neonates."
    },

    {
      id: "blood-gas",
      name: "Blood Gas Analysis",
      priority: "Recommended",
      reason:
        "Evaluates acid-base disturbances and tissue perfusion."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Assesses electrolyte abnormalities and concurrent disease."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Dehydration and circulatory support",
      reason:
        "Restores circulating volume and improves tissue perfusion."
    },

    {
      category: "Energy Supplementation",
      indication: "Hypoglycemia",
      reason:
        "Corrects energy deficiency and supports thermogenesis."
    },

    {
      category: "Colostrum Therapy",
      indication: "Neonatal support",
      reason:
        "Provides energy, passive immunity, and nutritional support."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "dextrose",
      priority: "First Line",
      category: "Supplement"
    },

    {
      drugId: "lactated-ringers-solution",
      priority: "Supportive",
      category: "Fluid Therapy"
    }

  ],

  stabilization: [

    "Move the animal to a warm, dry environment.",
    "Gradually warm using blankets, warming boxes, or warm air.",
    "Correct hypoglycemia before aggressive warming in severely affected neonates.",
    "Administer warmed intravenous or intraosseous fluids when indicated.",
    "Provide colostrum or milk replacer once swallowing reflex returns.",
    "Treat concurrent disease and monitor continuously."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Cold, wet, or windy environmental exposure",
        weight: 100
      },

      {
        finding: "Poor colostrum intake",
        weight: 95
      },

      {
        finding: "Premature or low birth weight neonate",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Low rectal temperature",
        weight: 100
      },

      {
        finding: "Weakness or inability to stand",
        weight: 95
      },

      {
        finding: "Reduced suckle reflex",
        weight: 95
      },

      {
        finding: "Bradycardia",
        weight: 85
      },

      {
        finding: "Depression or coma",
        weight: 90
      }

    ],

    biochemistry: [

      {
        finding: "Hypoglycemia",
        weight: 100
      },

      {
        finding: "Metabolic acidosis",
        weight: 80
      },

      {
        finding: "Electrolyte abnormalities",
        weight: 70
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
        finding: "Low core body temperature with compatible history",
        weight: 100
      },

      {
        finding: "Rapid improvement following warming and glucose therapy",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Normal rectal temperature",
        weight: -90
      },

      {
        finding: "Alternative cause of recumbency confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "temperature",
      parameter: "Rectal temperature",
      frequency: "Every 30–60 minutes during warming, then every 4–6 hours",
      reason:
        "Ensures effective warming and prevents overheating."
    },

    {
      id: "blood-glucose",
      parameter: "Blood glucose concentration",
      frequency: "Every 2–4 hours in neonatal cases",
      reason:
        "Detects persistent hypoglycemia and guides energy supplementation."
    },

    {
      id: "suckle-reflex",
      parameter: "Suckle reflex and feeding ability",
      frequency: "Every few hours in neonates",
      reason:
        "Determines readiness for oral feeding and recovery."
    },

    {
      id: "cardiovascular",
      parameter: "Heart rate, respiratory rate, and perfusion parameters",
      frequency: "Every 2–4 hours",
      reason:
        "Monitors circulatory recovery and severity of hypothermia."
    },

    {
      id: "hydration",
      parameter: "Hydration status and urine production",
      frequency: "Daily or as clinically indicated",
      reason:
        "Evaluates response to fluid therapy."
    }

  ],

  precautions: [

    {
      id: "newborn-care",
      title: "Neonatal Protection",
      description:
        "Provide warm, dry shelter for newborn lambs and kids immediately after birth."
    },

    {
      id: "colostrum",
      title: "Early Colostrum Intake",
      description:
        "Ensure adequate colostrum intake during the first hours of life to provide energy and passive immunity."
    },

    {
      id: "weather-management",
      title: "Weather Protection",
      description:
        "Protect animals from cold rain, wind, and prolonged exposure to low temperatures."
    },

    {
      id: "nutrition",
      title: "Adequate Nutrition",
      description:
        "Maintain proper nutrition of pregnant females to reduce weak and low-birth-weight offspring."
    }

  ],

  prognosis:
    "Prognosis depends on severity, duration of hypothermia, age, and underlying disease. Neonates treated before severe hypoglycemia or coma develop usually recover well. Prolonged hypothermia with absent suckle reflex, severe metabolic abnormalities, or organ dysfunction carries a poor prognosis.",

  strengtheningEvidence: [

    "Low rectal temperature",

    "Cold environmental exposure",

    "Poor colostrum intake",

    "Rapid improvement after warming and glucose administration"

  ],

  weakeningEvidence: [

    "Normal body temperature",

    "No environmental exposure",

    "Alternative cause of weakness identified"

  ],

  classicFindings: [

    "Cold body surface",

    "Weakness",

    "Reduced suckle reflex",

    "Recumbency",

    "Depression"

  ],

  ruleOutFindings: [

    "Septicemia",

    "Hypoglycemia without hypothermia",

    "White muscle disease",

    "Starvation",

    "Birth trauma",

    "Pneumonia"

  ],

};
