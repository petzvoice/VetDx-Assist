import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineAcuteGastroenteritis: DiseaseCard = {
  id: "canine-acute-gastroenteritis-dog",

  title: "Canine Acute Gastroenteritis",

  description:
    "An acute inflammatory disorder of the gastrointestinal tract characterized by sudden onset vomiting, diarrhea, abdominal discomfort, and variable dehydration.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Acute Gastroenteritis",
    "Acute Vomiting and Diarrhea Syndrome",
    "Gastrointestinal Upset",
  ],

  overview:
    "Acute gastroenteritis is a common clinical syndrome in dogs caused by inflammation of the stomach and intestinal mucosa. Causes include dietary indiscretion, sudden diet changes, infectious agents, parasites, toxins, medications, and stress. Clinical severity ranges from mild self-limiting disease to severe dehydration, electrolyte abnormalities, and systemic illness. Diagnosis is based on history, clinical examination, and exclusion of more serious gastrointestinal diseases.",

  clinicalProblems: [

    "Vomiting",
    "Diarrhea",
    "Dehydration",
    "Electrolyte imbalance",
    "Abdominal discomfort",
    "Anorexia",
    "Lethargy",
    "Fluid loss"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Evaluate hydration status, severity of vomiting and diarrhea, abdominal pain, and systemic illness."
    },

    {
      id: "rule-out-emergencies",
      step: 2,
      title: "Rule Out Serious Disease",
      description:
        "Exclude pancreatitis, foreign body obstruction, GDV, parvoviral enteritis, and other emergencies."
    },

    {
      id: "diagnostic-evaluation",
      step: 3,
      title: "Diagnostic Evaluation",
      description:
        "Perform laboratory testing and imaging when clinical severity requires further investigation."
    },

    {
      id: "supportive-treatment",
      step: 4,
      title: "Supportive Treatment",
      description:
        "Provide fluid therapy, gastrointestinal support, and symptomatic management."
    },

    {
      id: "monitoring",
      step: 5,
      title: "Monitoring",
      description:
        "Assess response to treatment and progression of clinical signs."
    }

  ],

  diagnostics: [

    {
      id: "physical-examination",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Assesses hydration, abdominal pain, temperature, and systemic involvement."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates inflammation, infection, and hemoconcentration."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates electrolyte abnormalities, renal function, and systemic effects."
    },

    {
      id: "fecal-examination",
      name: "Fecal Examination",
      priority: "Recommended",
      reason:
        "Detects intestinal parasites and infectious causes."
    },

    {
      id: "abdominal-imaging",
      name: "Abdominal Radiography or Ultrasound",
      priority: "Conditional",
      reason:
        "Rules out foreign body obstruction and other structural diseases."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Dehydration",
      reason:
        "Restores circulating volume and corrects fluid deficits."
    },

    {
      category: "Antiemetic",
      indication: "Vomiting",
      reason:
        "Controls nausea and vomiting."
    },

    {
      category: "Gastroprotectant",
      indication: "Gastric irritation",
      reason:
        "Provides gastric mucosal support when indicated."
    },

    {
      category: "Antiparasitic",
      indication: "Parasitic gastroenteritis",
      reason:
        "Treats identified intestinal parasites."
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
      drugId: "pantoprazole",
      priority: "Conditional",
      category: "Gastroprotectant",
    }

  ],

  stabilization: [

    "Assess and correct dehydration.",
    "Provide intravenous or subcutaneous fluids when required.",
    "Control persistent vomiting.",
    "Correct electrolyte abnormalities.",
    "Withhold inappropriate dietary intake temporarily and introduce easily digestible nutrition."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Sudden onset vomiting", weight: 40 },

      { finding: "Acute diarrhea", weight: 45 },

      { finding: "Recent dietary change", weight: 35 },

      { finding: "Dietary indiscretion", weight: 40 },

      { finding: "Exposure to garbage or spoiled food", weight: 30 }

    ],

    clinicalSigns: [

      { finding: "Vomiting", weight: 40 },

      { finding: "Diarrhea", weight: 45 },

      { finding: "Mild abdominal discomfort", weight: 25 },

      { finding: "Dehydration", weight: 35 },

      { finding: "Lethargy", weight: 25 }

    ],

    biochemistry: [

      { finding: "Electrolyte abnormalities due to fluid loss", weight: 20 },

      { finding: "Pre-renal azotemia due to dehydration", weight: 20 }

    ],

    imaging: [

      { finding: "No evidence of obstruction", weight: 20 }

    ],

    supports: [

      { finding: "Acute onset gastrointestinal signs", weight: 45 },

      { finding: "History of dietary indiscretion", weight: 40 },

      { finding: "Improvement with supportive therapy", weight: 35 }

    ],

    against: [

      { finding: "Persistent vomiting despite therapy", weight: -30 },

      { finding: "Abdominal mass or obstruction", weight: -45 },

      { finding: "Severe systemic illness", weight: -35 },

      { finding: "Neurological cause of vomiting", weight: -25 }

    ],

  },

  monitoring: [

    {
      id:"hydration",
      parameter:
        "Hydration status",
      frequency:
        "Daily during illness",
      reason:
        "Detects ongoing fluid loss."
    },

    {
      id:"vomiting",
      parameter:
        "Frequency of vomiting",
      frequency:
        "Daily",
      reason:
        "Evaluates treatment response."
    },

    {
      id:"stool",
      parameter:
        "Frequency and character of diarrhea",
      frequency:
        "Daily",
      reason:
        "Monitors gastrointestinal recovery."
    }

  ],

  precautions: [

    {
      id:"dehydration",
      title:
        "Monitor Dehydration",
      description:
        "Young, geriatric, or severely affected dogs may deteriorate rapidly."
    },

    {
      id:"differentials",
      title:
        "Exclude Serious Gastrointestinal Disease",
      description:
        "Persistent or severe signs require investigation for obstruction, pancreatitis, infection, or other causes."
    }

  ],

  prognosis:
    "Most uncomplicated cases recover with appropriate supportive care. Prognosis depends on underlying cause, severity of dehydration, and presence of concurrent disease.",

  strengtheningEvidence: [

    "Acute vomiting",

    "Acute diarrhea",

    "Dietary indiscretion",

    "Mild abdominal discomfort",

    "Response to supportive therapy"

  ],

  weakeningEvidence: [

    "Persistent vomiting",

    "Severe abdominal pain",

    "Foreign body obstruction",

    "Bloody diarrhea with systemic illness",

    "Progressive deterioration"

  ],

  classicFindings: [

    "Sudden vomiting",

    "Diarrhea",

    "Dietary change history",

    "Mild dehydration",

    "Normal or mildly abnormal blood work"

  ],

  ruleOutFindings: [

    "Gastric dilatation-volvulus",

    "Intestinal foreign body",

    "Pancreatitis",

    "Parvoviral enteritis",

    "Intestinal neoplasia"

  ],

};