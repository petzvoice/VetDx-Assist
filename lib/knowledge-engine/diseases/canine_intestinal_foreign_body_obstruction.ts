import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineIntestinalForeignBodyObstruction: DiseaseCard = {
  id: "canine-intestinal-foreign-body-obstruction-dog",

  title: "Canine Intestinal Foreign Body Obstruction",

  description:
    "A mechanical gastrointestinal obstruction caused by ingestion of foreign material leading to impaired intestinal passage, vomiting, abdominal pain, and potential intestinal compromise.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Intestinal Foreign Body",
    "Gastrointestinal Foreign Body",
    "Bowel Obstruction",
    "Intestinal Blockage",
  ],

  overview:
    "Intestinal foreign body obstruction is a common surgical emergency in dogs caused by ingestion of objects that cannot pass through the gastrointestinal tract. Common foreign materials include toys, bones, cloth, stones, and household objects. Obstruction may be partial or complete and can lead to intestinal distension, vascular compromise, necrosis, perforation, and septic peritonitis if untreated. Early diagnosis and intervention improve outcome.",

  clinicalProblems: [

    "Mechanical intestinal obstruction",
    "Vomiting",
    "Abdominal pain",
    "Dehydration",
    "Electrolyte imbalance",
    "Intestinal ischemia",
    "Perforation risk",
    "Sepsis"

  ],

  workflow: [

    {
      id: "history-assessment",
      step: 1,
      title: "History Assessment",
      description:
        "Identify possible foreign material ingestion and evaluate duration of clinical signs."
    },

    {
      id: "physical-examination",
      step: 2,
      title: "Physical Examination",
      description:
        "Assess hydration, abdominal pain, and systemic deterioration."
    },

    {
      id: "diagnostic-imaging",
      step: 3,
      title: "Diagnostic Imaging",
      description:
        "Confirm obstruction location and severity."
    },

    {
      id: "stabilization",
      step: 4,
      title: "Stabilization",
      description:
        "Correct dehydration, electrolyte abnormalities, and prepare for intervention."
    },

    {
      id: "surgical-management",
      step: 5,
      title: "Surgical Management",
      description:
        "Remove foreign material and evaluate intestinal viability."
    }

  ],

  diagnostics: [

    {
      id: "physical-examination",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Evaluates abdominal pain, dehydration, and systemic illness."
    },

    {
      id: "abdominal-radiography",
      name: "Abdominal Radiography",
      priority: "Essential",
      reason:
        "Detects obstructive patterns and radiopaque foreign material."
    },

    {
      id: "abdominal-ultrasound",
      name: "Abdominal Ultrasound",
      priority: "Recommended",
      reason:
        "Identifies intestinal obstruction, foreign material, and intestinal changes."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates inflammation, infection, and systemic response."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Assesses dehydration, electrolyte abnormalities, and organ function."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Dehydration and stabilization",
      reason:
        "Corrects fluid deficits before intervention."
    },

    {
      category: "Analgesic",
      indication: "Abdominal pain",
      reason:
        "Provides pain control during stabilization."
    },

    {
      category: "Antiemetic",
      indication: "Vomiting control",
      reason:
        "Reduces vomiting and improves comfort."
    },

    {
      category: "Antibiotic",
      indication: "Peritonitis or surgical contamination risk",
      reason:
        "Used when bacterial contamination is suspected."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "maropitant",
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

    "Provide intravenous fluid therapy.",
    "Correct electrolyte abnormalities.",
    "Control vomiting.",
    "Provide analgesia.",
    "Prepare patient for surgical or endoscopic removal when indicated.",
    "Monitor for intestinal compromise."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Known foreign material ingestion", weight: 50 },

      { finding: "Access to toys, bones, or household objects", weight: 35 },

      { finding: "Acute onset vomiting", weight: 40 },

      { finding: "Reduced appetite", weight: 30 }

    ],

    clinicalSigns: [

      { finding: "Persistent vomiting", weight: 50 },

      { finding: "Abdominal pain", weight: 40 },

      { finding: "Lethargy", weight: 30 },

      { finding: "Dehydration", weight: 35 },

      { finding: "Reduced fecal output", weight: 35 }

    ],

    biochemistry: [

      { finding: "Electrolyte abnormalities", weight: 25 },

      { finding: "Dehydration-related azotemia", weight: 20 }

    ],

    imaging: [

      { finding: "Obstructive intestinal pattern on radiograph", weight: 45 },

      { finding: "Foreign material identified on imaging", weight: 50 },

      { finding: "Intestinal dilation proximal to obstruction", weight: 40 }

    ],

    supports: [

      { finding: "History of foreign body ingestion", weight: 50 },

      { finding: "Persistent vomiting", weight: 45 },

      { finding: "Imaging-confirmed obstruction", weight: 50 },

      { finding: "Abdominal pain", weight: 35 }

    ],

    against: [

      { finding: "Normal abdominal imaging", weight: -45 },

      { finding: "No vomiting or gastrointestinal signs", weight: -30 },

      { finding: "Alternative cause identified", weight: -35 }

    ],

  },

  monitoring: [

    {
      id:"vomiting",
      parameter:
        "Vomiting frequency",
      frequency:
        "Daily or continuous in hospitalized patients",
      reason:
        "Evaluates progression and treatment response."
    },

    {
      id:"hydration",
      parameter:
        "Hydration and perfusion",
      frequency:
        "Regular assessment",
      reason:
        "Detects deterioration."
    },

    {
      id:"postoperative",
      parameter:
        "Postoperative intestinal recovery",
      frequency:
        "Daily after surgery",
      reason:
        "Detects complications."
    }

  ],

  precautions: [

    {
      id:"surgery",
      title:
        "Delayed Treatment Increases Risk",
      description:
        "Prolonged obstruction may cause intestinal necrosis, perforation, and septic peritonitis."
    },

    {
      id:"imaging",
      title:
        "Imaging is Important",
      description:
        "Clinical signs alone cannot reliably determine obstruction severity or location."
    }

  ],

  prognosis:
    "Prognosis is generally good when diagnosed early and treated before intestinal damage occurs. Prognosis becomes guarded with perforation, necrosis, or septic complications.",

  strengtheningEvidence: [

    "Foreign body ingestion history",

    "Persistent vomiting",

    "Abdominal pain",

    "Imaging evidence of obstruction",

    "Reduced fecal output"

  ],

  weakeningEvidence: [

    "Normal imaging",

    "No vomiting",

    "Chronic stable signs",

    "Alternative gastrointestinal diagnosis"

  ],

  classicFindings: [

    "Vomiting",

    "Abdominal pain",

    "Foreign object ingestion",

    "Dehydration",

    "Obstructive imaging findings"

  ],

  ruleOutFindings: [

    "Acute gastroenteritis",

    "Pancreatitis",

    "Gastric dilatation-volvulus",

    "Intussusception",

    "Gastrointestinal neoplasia"

  ],

};