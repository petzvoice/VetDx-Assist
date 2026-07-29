import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineGastricDilatationVolvulus: DiseaseCard = {
  id: "canine-gastric-dilatation-volvulus-dog",

  title: "Canine Gastric Dilatation-Volvulus (GDV)",

  description:
    "A life-threatening emergency characterized by rapid gastric distension with gas and fluid followed by rotation of the stomach causing vascular compromise, shock, and potential gastric necrosis.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "GDV",
    "Bloat",
    "Gastric Torsion",
    "Twisted Stomach",
  ],

  overview:
    "Gastric dilatation-volvulus is a surgical emergency in dogs where the stomach becomes distended and rotates around its axis. Rotation compromises gastric and systemic blood flow, leading to shock, gastric wall ischemia, arrhythmias, and possible death if untreated. Large and giant deep-chested breeds are predisposed. Early recognition, stabilization, decompression, and surgical correction are essential.",

  clinicalProblems: [

    "Gastric distension",
    "Gastric rotation",
    "Hypovolemic shock",
    "Reduced venous return",
    "Gastric ischemia",
    "Cardiac arrhythmias",
    "Electrolyte abnormalities",
    "Systemic inflammatory response"

  ],

  workflow: [

    {
      id: "emergency-recognition",
      step: 1,
      title: "Emergency Recognition",
      description:
        "Identify clinical signs of GDV and assess cardiovascular compromise immediately."
    },

    {
      id: "stabilization",
      step: 2,
      title: "Emergency Stabilization",
      description:
        "Restore perfusion, provide analgesia, and prepare for decompression."
    },

    {
      id: "gastric-decompression",
      step: 3,
      title: "Gastric Decompression",
      description:
        "Relieve gastric pressure using tube decompression or trocarization when required."
    },

    {
      id: "diagnosis",
      step: 4,
      title: "Diagnostic Confirmation",
      description:
        "Confirm gastric volvulus using abdominal imaging."
    },

    {
      id: "surgery",
      step: 5,
      title: "Surgical Correction",
      description:
        "Perform derotation, evaluate gastric viability, and perform gastropexy."
    }

  ],

  diagnostics: [

    {
      id: "physical-examination",
      name: "Emergency Physical Examination",
      priority: "Essential",
      reason:
        "Assesses shock status, abdominal distension, and cardiovascular compromise."
    },

    {
      id: "abdominal-radiography",
      name: "Abdominal Radiography",
      priority: "Essential",
      reason:
        "Confirms gastric volvulus and characteristic stomach displacement."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates systemic response and perfusion abnormalities."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Assesses metabolic abnormalities and organ function."
    },

    {
      id: "ecg",
      name: "Electrocardiography",
      priority: "Recommended",
      reason:
        "Detects cardiac arrhythmias associated with GDV."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Shock management",
      reason:
        "Restores circulating volume and tissue perfusion."
    },

    {
      category: "Analgesic",
      indication: "Severe abdominal pain",
      reason:
        "Provides pain control during stabilization."
    },

    {
      category: "Antibiotic",
      indication: "Surgical contamination risk",
      reason:
        "Reduces risk of bacterial complications when indicated."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "fentanyl",
      priority: "Emergency",
      category: "Analgesic",
    },

    {
      drugId: "cefazolin",
      priority: "Perioperative",
      category: "Antibiotic",
    }

  ],

  stabilization: [

    "Establish intravenous access immediately.",
    "Provide aggressive fluid resuscitation.",
    "Administer appropriate analgesia.",
    "Perform gastric decompression.",
    "Monitor ECG for arrhythmias.",
    "Prepare for emergency surgery."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Large or giant breed dog", weight: 35 },

      { finding: "Deep-chested conformation", weight: 35 },

      { finding: "Recent large meal", weight: 25 },

      { finding: "Restlessness and acute discomfort", weight: 40 }

    ],

    clinicalSigns: [

      { finding: "Non-productive retching", weight: 50 },

      { finding: "Abdominal distension", weight: 50 },

      { finding: "Restlessness", weight: 35 },

      { finding: "Pale mucous membranes", weight: 35 },

      { finding: "Signs of shock", weight: 45 }

    ],

    biochemistry: [

      { finding: "Metabolic abnormalities due to shock", weight: 25 },

      { finding: "Lactic acidosis", weight: 35 }

    ],

    imaging: [

      { finding: "Gastric compartmentalization on radiograph", weight: 50 },

      { finding: "Abnormal gastric position", weight: 50 }

    ],

    supports: [

      { finding: "Acute abdominal distension with retching", weight: 50 },

      { finding: "Radiographic confirmation", weight: 50 },

      { finding: "Shock signs", weight: 40 }

    ],

    against: [

      { finding: "No abdominal distension", weight: -35 },

      { finding: "Chronic vomiting history", weight: -25 },

      { finding: "Normal abdominal imaging", weight: -45 }

    ],

  },

  monitoring: [

    {
      id:"perfusion",
      parameter:
        "Perfusion and shock status",
      frequency:
        "Continuous during emergency",
      reason:
        "Detects cardiovascular deterioration."
    },

    {
      id:"ecg",
      parameter:
        "Cardiac rhythm",
      frequency:
        "Continuous perioperatively",
      reason:
        "Detects GDV-associated arrhythmias."
    },

    {
      id:"postoperative",
      parameter:
        "Postoperative recovery",
      frequency:
        "Daily",
      reason:
        "Detects complications after surgery."
    }

  ],

  precautions: [

    {
      id:"emergency",
      title:
        "GDV is a Surgical Emergency",
      description:
        "Delay in treatment increases risk of gastric necrosis, shock, and death."
    },

    {
      id:"prevention",
      title:
        "Preventive Gastropexy",
      description:
        "Prophylactic gastropexy reduces recurrence risk in predisposed dogs."
    }

  ],

  prognosis:
    "Prognosis depends on time to treatment, severity of shock, gastric tissue viability, and development of complications such as arrhythmias or sepsis.",

  strengtheningEvidence: [

    "Non-productive retching",

    "Abdominal distension",

    "Deep-chested breed",

    "Shock signs",

    "Radiographic confirmation"

  ],

  weakeningEvidence: [

    "No abdominal distension",

    "No retching",

    "Normal abdominal imaging",

    "Alternative cause of vomiting identified"

  ],

  classicFindings: [

    "Large breed dog",

    "Restlessness",

    "Unproductive retching",

    "Distended abdomen",

    "Shock"

  ],

  ruleOutFindings: [

    "Acute gastroenteritis",

    "Simple gastric dilatation",

    "Intestinal obstruction",

    "Pancreatitis",

    "Splenic torsion"

  ],

};