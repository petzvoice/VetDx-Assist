import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePeritoneopericardialDiaphragmaticHernia: DiseaseCard = {
  id: "canine-peritoneopericardial-diaphragmatic-hernia-dog",

  title: "Canine Peritoneopericardial Diaphragmatic Hernia",

  description:
    "A congenital communication between the peritoneal and pericardial cavities allowing abdominal organs to herniate into the pericardial sac.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Peritoneopericardial Diaphragmatic Hernia",
    "PPDH",
    "Congenital Diaphragmatic Pericardial Hernia",
  ],

  overview:
    "Peritoneopericardial diaphragmatic hernia (PPDH) is a congenital defect caused by incomplete separation of the septum transversum during embryonic development. Abdominal organs such as the liver, gallbladder, small intestine, stomach, spleen, omentum, or falciform fat may herniate into the pericardial sac. Some dogs remain asymptomatic throughout life, whereas others develop gastrointestinal signs, respiratory compromise, cardiac compression, or recurrent infections. Surgical correction is recommended for symptomatic animals.",

  clinicalProblems: [

    "Pericardial herniation of abdominal organs",
    "Respiratory distress",
    "Exercise intolerance",
    "Vomiting",
    "Anorexia",
    "Cardiac compression",
    "Pleural or pericardial compromise",
    "Intestinal incarceration"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess respiratory effort, cardiovascular stability, gastrointestinal signs, and evidence of organ entrapment."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm PPDH using thoracic imaging and identify herniated abdominal organs."
    },

    {
      id: "stabilization",
      step: 3,
      title: "Patient Stabilization",
      description:
        "Stabilize respiratory and cardiovascular compromise before surgical intervention."
    },

    {
      id: "definitive-treatment",
      step: 4,
      title: "Definitive Treatment",
      description:
        "Perform surgical reduction of herniated organs and diaphragmatic reconstruction."
    },

    {
      id: "postoperative-monitoring",
      step: 5,
      title: "Postoperative Monitoring",
      description:
        "Monitor for respiratory complications, arrhythmias, recurrence, and gastrointestinal function."
    }

  ],

  diagnostics: [

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Demonstrates enlarged cardiac silhouette and abdominal organs within the pericardial sac."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Essential",
      reason:
        "Differentiates PPDH from pericardial effusion or cardiac masses."
    },

    {
      id: "thoracic-ultrasound",
      name: "Thoracic Ultrasound",
      priority: "Recommended",
      reason:
        "Identifies herniated liver or intestinal loops."
    },

    {
      id: "ct",
      name: "Computed Tomography",
      priority: "Recommended",
      reason:
        "Provides detailed anatomical evaluation before surgery."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates systemic health before anesthesia."
    }

  ],

  drugCategories: [

    {
      category: "Analgesic",
      indication: "Perioperative pain",
      reason: "Provides effective pain control."
    },

    {
      category: "Antibiotic",
      indication: "Contaminated surgery or aspiration risk",
      reason: "Reduces perioperative infection risk."
    },

    {
      category: "Antiemetic",
      indication: "Vomiting",
      reason: "Controls nausea before and after surgery."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "methadone",
      priority: "First Line",
      category: "Analgesic",
    },

    {
      drugId: "cefazolin",
      priority: "Perioperative",
      category: "Antibiotic",
    },

    {
      drugId: "maropitant",
      priority: "Adjunctive",
      category: "Antiemetic",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation when respiratory compromise is present.",
    "Stabilize cardiovascular status before anesthesia.",
    "Correct dehydration and electrolyte abnormalities.",
    "Withhold food prior to surgery.",
    "Prepare for emergency surgery if gastrointestinal strangulation is suspected."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Congenital abnormality detected incidentally", weight: 25 },

      { finding: "Chronic vomiting", weight: 20 },

      { finding: "Exercise intolerance", weight: 20 },

    ],

    clinicalSigns: [

      { finding: "Muffled heart sounds", weight: 35 },

      { finding: "Respiratory distress", weight: 35 },

      { finding: "Decreased lung sounds", weight: 20 },

      { finding: "Abdominal discomfort", weight: 20 },

    ],

    biochemistry: [

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Abdominal organs within pericardial sac", weight: 50 },

      { finding: "Loss of diaphragmatic outline", weight: 40 },

      { finding: "Enlarged cardiac silhouette", weight: 30 },

      { finding: "PPDH confirmed by CT or echocardiography", weight: 50 },

    ],

    against: [

      { finding: "Normal diaphragm", weight: -40 },

      { finding: "No herniated abdominal organs", weight: -50 },

      { finding: "Alternative thoracic disease confirmed", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"respiratory",
      parameter:
        "Respiratory rate and effort",
      frequency:
        "Continuous until stable",
      reason:
        "Detects postoperative respiratory complications."
    },

    {
      id:"cardiac",
      parameter:
        "Electrocardiography",
      frequency:
        "During hospitalization",
      reason:
        "Detects perioperative arrhythmias."
    },

    {
      id:"pain",
      parameter:
        "Pain assessment",
      frequency:
        "Every 4–6 hours",
      reason:
        "Ensures adequate analgesia."
    }

  ],

  precautions: [

    {
      id:"anesthesia",
      title:
        "Careful Anesthetic Planning",
      description:
        "Cardiopulmonary compromise may increase anesthetic risk."
    },

    {
      id:"incarceration",
      title:
        "Risk of Organ Entrapment",
      description:
        "Herniated abdominal organs may become incarcerated or strangulated, requiring emergency surgery."
    }

  ],

  prognosis:
    "Prognosis is generally excellent following successful surgical repair in uncomplicated cases. Prognosis becomes guarded if severe cardiopulmonary compromise, organ strangulation, or delayed diagnosis occurs.",

  strengtheningEvidence: [

    "Abdominal organs within pericardial sac",

    "Enlarged cardiac silhouette",

    "Loss of diaphragmatic border",

    "Respiratory distress",

    "Muffled heart sounds",

    "PPDH confirmed by imaging"

  ],

  weakeningEvidence: [

    "Normal diaphragm",

    "Normal thoracic imaging",

    "No abdominal organ displacement",

    "Alternative thoracic disease",

    "Normal echocardiography"

  ],

  classicFindings: [

    "Congenital defect",

    "Enlarged cardiac silhouette",

    "Liver within pericardial sac",

    "Respiratory signs",

    "Muffled heart sounds",

    "Thoracic radiographic diagnosis"

  ],

  ruleOutFindings: [

    "Pericardial effusion",

    "Diaphragmatic hernia",

    "Peritoneopericardial cyst",

    "Cardiac neoplasia",

    "Pleural effusion"

  ],

};