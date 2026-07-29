import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineDiabeticKetoacidosis: DiseaseCard = {
  id: "canine-diabetic-ketoacidosis-dog",

  title: "Canine Diabetic Ketoacidosis",

  description:
    "A life-threatening metabolic emergency characterized by insulin deficiency, persistent hyperglycemia, ketosis, metabolic acidosis, dehydration, and electrolyte abnormalities.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Diabetic Ketoacidosis",
    "DKA",
    "Ketotic Diabetes",
  ],

  overview:
    "Diabetic ketoacidosis (DKA) is a severe complication of diabetes mellitus resulting from absolute or relative insulin deficiency. Reduced cellular glucose utilization leads to lipolysis and hepatic ketone production, causing metabolic acidosis. Marked osmotic diuresis results in dehydration, electrolyte disturbances, and impaired tissue perfusion. Prompt fluid therapy, insulin administration, electrolyte correction, and treatment of concurrent disease are essential for survival.",

  clinicalProblems: [

    "Severe hyperglycemia",
    "Ketosis",
    "Metabolic acidosis",
    "Dehydration",
    "Electrolyte abnormalities",
    "Vomiting",
    "Hypovolemia",
    "Concurrent infection or pancreatitis"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, hydration, neurological status, electrolyte abnormalities, and concurrent disease."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm diabetic ketoacidosis using blood glucose, ketone testing, blood gas analysis, and laboratory evaluation."
    },

    {
      id: "emergency-treatment",
      step: 3,
      title: "Emergency Treatment",
      description:
        "Restore circulating volume, initiate insulin therapy, correct electrolyte abnormalities, and treat concurrent disease."
    },

    {
      id: "monitor-therapy",
      step: 4,
      title: "Monitor Therapy",
      description:
        "Monitor glucose decline, electrolyte concentrations, hydration status, acid-base balance, and ketone resolution."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Transition to maintenance insulin therapy and address precipitating factors."
    }

  ],

  diagnostics: [

    {
      id: "blood-glucose",
      name: "Blood Glucose Measurement",
      priority: "Essential",
      reason:
        "Confirms marked hyperglycemia."
    },

    {
      id: "blood-gas",
      name: "Blood Gas Analysis",
      priority: "Essential",
      reason:
        "Evaluates metabolic acidosis and acid-base disturbances."
    },

    {
      id: "electrolytes",
      name: "Serum Electrolytes",
      priority: "Essential",
      reason:
        "Detects potassium, phosphorus, and sodium abnormalities."
    },

    {
      id: "urinalysis",
      name: "Urinalysis",
      priority: "Essential",
      reason:
        "Identifies glucosuria and ketonuria."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Essential",
      reason:
        "Evaluates concurrent disease and organ function."
    }

  ],

  drugCategories: [

    {
      category: "Regular Insulin",
      indication: "Diabetic ketoacidosis",
      reason: "Reduces hyperglycemia and suppresses ketone production."
    },

    {
      category: "Intravenous Fluid",
      indication: "Hypovolemia and dehydration",
      reason: "Restores tissue perfusion and corrects dehydration."
    },

    {
      category: "Potassium Supplement",
      indication: "Hypokalemia",
      reason: "Corrects potassium depletion during treatment."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "regular-insulin",
      priority: "First Line",
      category: "Insulin",
    },

    {
      drugId: "potassium-chloride",
      priority: "Supportive",
      category: "Supplement",
    },

  ],

  stabilization: [

    "Restore intravascular volume with intravenous crystalloid fluids.",
    "Correct dehydration before aggressive insulin administration.",
    "Begin regular insulin therapy using an appropriate protocol.",
    "Supplement potassium and phosphorus when indicated.",
    "Treat concurrent diseases such as pancreatitis or infection."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Known diabetes mellitus", weight: 30 },

      { finding: "Vomiting", weight: 25 },

      { finding: "Polyuria and polydipsia", weight: 25 },

      { finding: "Anorexia", weight: 20 },

    ],

    clinicalSigns: [

      { finding: "Dehydration", weight: 35 },

      { finding: "Depression", weight: 30 },

      { finding: "Acetone breath", weight: 25 },

      { finding: "Weakness", weight: 20 },

    ],

    biochemistry: [

      { finding: "Hyperglycemia", weight: 50 },

      { finding: "Metabolic acidosis", weight: 45 },

      { finding: "Hypokalemia", weight: 30 },

      { finding: "Hypophosphatemia", weight: 25 },

    ],

    urinalysis: [

      { finding: "Glucosuria", weight: 40 },

      { finding: "Ketonuria", weight: 50 },

    ],

    supports: [

      { finding: "Positive blood ketones", weight: 50 },

      { finding: "High anion gap metabolic acidosis", weight: 45 },

    ],

    against: [

      { finding: "Normal blood glucose", weight: -40 },

      { finding: "Absence of ketosis", weight: -45 },

      { finding: "Normal acid-base status", weight: -35 },

    ],

  },

  monitoring: [

    {
      id:"glucose",
      parameter:
        "Blood glucose",
      frequency:
        "Every 1–2 hours initially",
      reason:
        "Guides insulin therapy."
    },

    {
      id:"electrolytes",
      parameter:
        "Electrolytes and blood gas",
      frequency:
        "Every 4–6 hours",
      reason:
        "Monitors correction of metabolic abnormalities."
    },

    {
      id:"hydration",
      parameter:
        "Hydration status and urine output",
      frequency:
        "Continuous during hospitalization",
      reason:
        "Assesses response to fluid therapy."
    }

  ],

  precautions: [

    {
      id:"potassium",
      title:
        "Monitor Potassium Closely",
      description:
        "Insulin administration rapidly shifts potassium intracellularly, increasing the risk of severe hypokalemia."
    },

    {
      id:"glucose-drop",
      title:
        "Avoid Rapid Glucose Reduction",
      description:
        "Gradual reduction of blood glucose minimizes complications during treatment."
    }

  ],

  prognosis:
    "Prognosis is fair to good with prompt intensive treatment. Delayed therapy, severe electrolyte abnormalities, cerebral complications, or significant concurrent disease worsen prognosis.",

  strengtheningEvidence: [

    "Hyperglycemia",

    "Ketonuria",

    "Positive blood ketones",

    "Metabolic acidosis",

    "Glucosuria",

    "Known diabetes mellitus"

  ],

  weakeningEvidence: [

    "Normal blood glucose",

    "No ketosis",

    "Normal blood gas",

    "Alternative metabolic disease",

    "Stress hyperglycemia without ketosis"

  ],

  classicFindings: [

    "Known diabetic dog",

    "Vomiting",

    "Dehydration",

    "Hyperglycemia",

    "Ketonuria",

    "Metabolic acidosis"

  ],

  ruleOutFindings: [

    "Uncomplicated diabetes mellitus",

    "Hyperosmolar hyperglycemic syndrome",

    "Acute pancreatitis",

    "Addisonian crisis",

    "Sepsis"

  ],

};