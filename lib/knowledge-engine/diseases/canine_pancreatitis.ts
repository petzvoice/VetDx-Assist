import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePancreatitis: DiseaseCard = {
  id: "canine-pancreatitis-dog",

  title: "Canine Pancreatitis",

  description:
    "An inflammatory disease of the exocrine pancreas causing abdominal pain, vomiting, anorexia, and systemic illness ranging from mild gastrointestinal signs to life-threatening complications.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Pancreatitis",
    "Acute Pancreatitis",
    "Chronic Pancreatitis",
    "Pancreatic Inflammation",
  ],

  overview:
    "Pancreatitis is a common gastrointestinal and metabolic disorder in dogs caused by inappropriate activation of pancreatic digestive enzymes leading to pancreatic inflammation and tissue injury. Disease severity varies from mild localized inflammation to severe systemic inflammatory response syndrome and multi-organ complications. Risk factors include dietary indiscretion, high-fat meals, obesity, endocrine disorders, and certain medications. Diagnosis is based on clinical signs, pancreatic-specific testing, imaging, and exclusion of other causes.",

  clinicalProblems: [

    "Pancreatic inflammation",
    "Abdominal pain",
    "Vomiting",
    "Anorexia",
    "Dehydration",
    "Systemic inflammatory response",
    "Electrolyte abnormalities",
    "Shock in severe cases"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Evaluate severity, hydration status, abdominal pain, and systemic involvement."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm pancreatic inflammation and rule out other causes of vomiting and abdominal pain."
    },

    {
      id: "severity-assessment",
      step: 3,
      title: "Severity Assessment",
      description:
        "Identify mild, moderate, or severe disease requiring intensive care."
    },

    {
      id: "supportive-treatment",
      step: 4,
      title: "Supportive Treatment",
      description:
        "Provide fluid therapy, analgesia, nutritional support, and antiemetic therapy."
    },

    {
      id: "monitoring",
      step: 5,
      title: "Monitoring",
      description:
        "Track clinical improvement and detect complications."
    }

  ],

  diagnostics: [

    {
      id: "physical-examination",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Assesses abdominal pain, hydration, perfusion, and systemic illness."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates inflammation and systemic response."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Evaluates organ involvement, electrolyte changes, and metabolic abnormalities."
    },

    {
      id: "pancreatic-lipase",
      name: "Pancreatic Lipase Immunoreactivity (cPLI)",
      priority: "Essential",
      reason:
        "Supports diagnosis of pancreatic inflammation."
    },

    {
      id: "abdominal-ultrasound",
      name: "Abdominal Ultrasound",
      priority: "Recommended",
      reason:
        "Identifies pancreatic changes and evaluates surrounding abdominal structures."
    },

    {
      id: "radiography",
      name: "Abdominal Radiography",
      priority: "Conditional",
      reason:
        "Helps exclude gastrointestinal obstruction and other abdominal diseases."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Dehydration and perfusion support",
      reason:
        "Maintains circulation and corrects fluid deficits."
    },

    {
      category: "Analgesic",
      indication: "Pancreatic abdominal pain",
      reason:
        "Pain control is essential in pancreatitis management."
    },

    {
      category: "Antiemetic",
      indication: "Vomiting and nausea",
      reason:
        "Improves comfort and supports nutrition."
    },

    {
      category: "Nutritional Support",
      indication: "Recovery and intestinal function",
      reason:
        "Early enteral nutrition supports gastrointestinal recovery."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "maropitant",
      priority: "Supportive",
      category: "Antiemetic",
    },

    {
      drugId: "ondansetron",
      priority: "Supportive",
      category: "Antiemetic",
    },

    {
      drugId: "buprenorphine",
      priority: "Supportive",
      category: "Analgesic",
    }

  ],

  stabilization: [

    "Provide intravenous fluid therapy when indicated.",
    "Control abdominal pain.",
    "Manage vomiting and nausea.",
    "Monitor electrolyte abnormalities.",
    "Provide nutritional support when tolerated.",
    "Monitor for systemic complications."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Acute vomiting", weight: 40 },

      { finding: "Anorexia", weight: 35 },

      { finding: "Recent high-fat meal", weight: 40 },

      { finding: "Obesity", weight: 25 },

      { finding: "Previous pancreatitis episode", weight: 30 }

    ],

    clinicalSigns: [

      { finding: "Cranial abdominal pain", weight: 45 },

      { finding: "Vomiting", weight: 45 },

      { finding: "Anorexia", weight: 35 },

      { finding: "Lethargy", weight: 30 },

      { finding: "Dehydration", weight: 35 }

    ],

    biochemistry: [

      { finding: "Increased pancreatic lipase", weight: 50 },

      { finding: "Increased liver enzymes", weight: 20 },

      { finding: "Electrolyte abnormalities", weight: 25 }

    ],

    imaging: [

      { finding: "Pancreatic enlargement on ultrasound", weight: 45 },

      { finding: "Peripancreatic inflammation", weight: 40 }

    ],

    supports: [

      { finding: "Abdominal pain with vomiting", weight: 45 },

      { finding: "Positive pancreatic lipase test", weight: 50 },

      { finding: "Ultrasound evidence of pancreatitis", weight: 50 },

      { finding: "Improvement with supportive care", weight: 30 }

    ],

    against: [

      { finding: "No gastrointestinal signs", weight: -35 },

      { finding: "Confirmed intestinal obstruction", weight: -45 },

      { finding: "Normal pancreatic testing and imaging", weight: -35 }

    ],

  },

  monitoring: [

    {
      id:"pain",
      parameter:
        "Abdominal pain",
      frequency:
        "Daily or continuous in hospitalized patients",
      reason:
        "Guides analgesic therapy."
    },

    {
      id:"hydration",
      parameter:
        "Hydration and perfusion status",
      frequency:
        "Regular assessment",
      reason:
        "Detects dehydration and shock."
    },

    {
      id:"nutrition",
      parameter:
        "Food intake and tolerance",
      frequency:
        "Daily",
      reason:
        "Assesses recovery."
    }

  ],

  precautions: [

    {
      id:"severity",
      title:
        "Severe Pancreatitis Can Become Life-Threatening",
      description:
        "Systemic inflammation may result in shock, coagulation abnormalities, and organ dysfunction."
    },

    {
      id:"diet",
      title:
        "Dietary Management is Important",
      description:
        "Avoid excessive dietary fat and monitor nutritional intake."
    }

  ],

  prognosis:
    "Prognosis varies with severity. Mild cases often recover with supportive therapy, while severe pancreatitis may require intensive management and carries a guarded prognosis.",

  strengtheningEvidence: [

    "Vomiting",

    "Cranial abdominal pain",

    "Positive pancreatic lipase testing",

    "Ultrasound pancreatic changes",

    "High-fat dietary history"

  ],

  weakeningEvidence: [

    "No abdominal pain",

    "Normal pancreatic testing",

    "Confirmed obstruction",

    "Alternative cause of vomiting identified"

  ],

  classicFindings: [

    "Vomiting",

    "Abdominal pain",

    "Anorexia",

    "Lethargy",

    "Elevated pancreatic markers"

  ],

  ruleOutFindings: [

    "Intestinal foreign body",

    "Gastritis",

    "Acute gastroenteritis",

    "Gastric dilatation-volvulus",

    "Hepatobiliary disease"

  ],

};