import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineAcutePancreatitis: DiseaseCard = {
  id: "canine-acute-pancreatitis-dog",

  title: "Canine Acute Pancreatitis",

  description:
    "An acute inflammatory disease of the pancreas resulting in autodigestion, systemic inflammation, abdominal pain, and variable degrees of organ dysfunction.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Acute Pancreatitis",
    "Pancreatic Inflammation",
  ],

  overview:
    "Acute pancreatitis is a common gastrointestinal emergency in dogs caused by premature activation of pancreatic digestive enzymes leading to pancreatic autodigestion and inflammation. Disease severity ranges from mild self-limiting illness to severe necrotizing pancreatitis with systemic inflammatory response syndrome (SIRS), disseminated intravascular coagulation, acute kidney injury, and multiple organ dysfunction.",

  clinicalProblems: [

    "Pancreatic inflammation",
    "Abdominal pain",
    "Vomiting",
    "Anorexia",
    "Dehydration",
    "Systemic inflammatory response",
    "Electrolyte abnormalities",
    "Acute kidney injury"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, hydration, abdominal pain, perfusion, and severity of systemic illness."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm pancreatitis using laboratory testing and abdominal imaging while excluding surgical abdominal disease."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Provide aggressive supportive care including fluid therapy, analgesia, antiemetics, nutritional support, and treatment of complications."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor for systemic inflammatory response, organ dysfunction, electrolyte abnormalities, and coagulation disorders."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Gradually transition to enteral nutrition, manage underlying risk factors, and monitor for recurrence."
    }

  ],

  diagnostics: [

    {
      id: "cpl",
      name: "Canine Pancreatic Lipase (Spec cPL)",
      priority: "Essential",
      reason:
        "Most useful laboratory test supporting pancreatitis."
    },

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Evaluates inflammation, hemoconcentration, and systemic disease."
    },

    {
      id: "chemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Assesses organ dysfunction and electrolyte abnormalities."
    },

    {
      id: "ultrasound",
      name: "Abdominal Ultrasonography",
      priority: "Essential",
      reason:
        "Evaluates pancreatic inflammation and excludes surgical disease."
    },

    {
      id: "coagulation",
      name: "Coagulation Profile",
      priority: "Recommended",
      reason:
        "Assesses for disseminated intravascular coagulation in severe cases."
    }

  ],

  drugCategories: [

    {
      category: "Intravenous Fluid",
      indication: "Hypovolemia",
      reason: "Restores perfusion and supports pancreatic microcirculation."
    },

    {
      category: "Opioid",
      indication: "Abdominal pain",
      reason: "Provides effective analgesia."
    },

    {
      category: "Antiemetic",
      indication: "Vomiting",
      reason: "Controls nausea and facilitates early enteral feeding."
    },

    {
      category: "Gastroprotectant",
      indication: "Gastroduodenal ulcer risk",
      reason: "Reduces gastric acid secretion when indicated."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "maropitant",
      priority: "First Line",
      category: "Antiemetic",
    },

    {
      drugId: "methadone",
      priority: "First Line",
      category: "Opioid",
    },

    {
      drugId: "pantoprazole",
      priority: "Adjunctive",
      category: "Gastroprotectant",
    }

  ],

  stabilization: [

    "Restore circulating volume with intravenous crystalloid fluids.",
    "Provide adequate opioid analgesia.",
    "Control vomiting and nausea.",
    "Begin early enteral nutrition when tolerated.",
    "Treat concurrent diseases and monitor for systemic complications."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Acute vomiting", weight: 30 },

      { finding: "Anorexia", weight: 20 },

      { finding: "High-fat meal", weight: 15 },

      { finding: "Previous pancreatitis", weight: 20 }

    ],

    clinicalSigns: [

      { finding: "Cranial abdominal pain", weight: 45 },

      { finding: "Dehydration", weight: 25 },

      { finding: "Vomiting", weight: 25 },

      { finding: "Prayer position", weight: 30 }

    ],

    biochemistry: [

      { finding: "Elevated Spec cPL", weight: 50 },

      { finding: "Increased ALT", weight: 15 },

      { finding: "Hyperlipidemia", weight: 15 },

      { finding: "Azotemia", weight: 20 }

    ],

    urinalysis: [

      { finding: "Concentrated urine", weight: 10 }

    ],

    supports: [

      { finding: "Ultrasound consistent with pancreatitis", weight: 45 },

      { finding: "Positive Spec cPL", weight: 50 }

    ],

    against: [

      { finding: "Normal Spec cPL", weight: -35 },

      { finding: "Alternative surgical abdominal disease", weight: -40 },

      { finding: "Normal pancreas on repeated evaluation", weight: -20 }

    ],

  },

  monitoring: [

    {
      id:"hydration",
      parameter:
        "Hydration and perfusion",
      frequency:
        "Continuous during hospitalization",
      reason:
        "Evaluates response to fluid therapy."
    },

    {
      id:"electrolytes",
      parameter:
        "Electrolytes and renal values",
      frequency:
        "Daily",
      reason:
        "Detects treatment-related abnormalities."
    },

    {
      id:"pain",
      parameter:
        "Pain score and appetite",
      frequency:
        "Every 4–6 hours",
      reason:
        "Guides analgesia and nutritional support."
    }

  ],

  precautions: [

    {
      id:"nutrition",
      title:
        "Early Enteral Nutrition",
      description:
        "Avoid prolonged fasting whenever possible. Early enteral feeding improves gastrointestinal integrity and recovery."
    },

    {
      id:"complications",
      title:
        "Monitor for Systemic Complications",
      description:
        "Severe pancreatitis may progress to SIRS, DIC, acute kidney injury, and multiple organ dysfunction."
    }

  ],

  prognosis:
    "Prognosis ranges from excellent in mild disease to guarded in severe necrotizing pancreatitis with systemic complications. Early aggressive supportive care improves outcome.",

  strengtheningEvidence: [

    "Positive Spec cPL",

    "Cranial abdominal pain",

    "Vomiting",

    "Ultrasound evidence of pancreatitis",

    "Anorexia",

    "Prayer position"

  ],

  weakeningEvidence: [

    "Normal Spec cPL",

    "Alternative surgical disease",

    "Normal pancreatic imaging",

    "No abdominal pain",

    "Alternative confirmed diagnosis"

  ],

  classicFindings: [

    "Acute vomiting",

    "Cranial abdominal pain",

    "Prayer position",

    "Positive Spec cPL",

    "Pancreatic changes on ultrasound",

    "Anorexia"

  ],

  ruleOutFindings: [

    "Gastrointestinal foreign body",

    "Gastric dilatation-volvulus",

    "Acute hepatitis",

    "Pyometra",

    "Diabetic ketoacidosis"

  ],

};