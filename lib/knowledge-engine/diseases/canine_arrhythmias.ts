import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineArrhythmias: DiseaseCard = {
  id: "canine-arrhythmias-dog",

  title: "Canine Arrhythmias",

  description:
    "Abnormalities in cardiac impulse formation or conduction resulting in irregular heart rhythms that may reduce cardiac output or increase the risk of sudden cardiac death.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Cardiac Arrhythmias",
    "Cardiac Dysrhythmias",
    "Heart Rhythm Disorders",
  ],

  overview:
    "Canine arrhythmias encompass disorders of impulse generation and conduction that may originate from the atria, atrioventricular junction, or ventricles. Arrhythmias may be secondary to structural heart disease, systemic illness, electrolyte disturbances, drug toxicity, or primary electrical disorders. Clinical significance ranges from incidental findings to life-threatening rhythm disturbances causing syncope, congestive heart failure, or sudden cardiac death.",

  clinicalProblems: [

    "Irregular heart rhythm",
    "Tachycardia",
    "Bradycardia",
    "Exercise intolerance",
    "Syncope",
    "Weak pulses",
    "Congestive heart failure",
    "Sudden cardiac death"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Evaluate cardiovascular stability, heart rate, pulse quality, blood pressure, and evidence of poor perfusion."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Identify the arrhythmia type, determine hemodynamic significance, and investigate the underlying cause."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Treat life-threatening arrhythmias while correcting underlying cardiac or systemic disease."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Response",
      description:
        "Monitor ECG, blood pressure, perfusion, and response to antiarrhythmic therapy."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Provide continued rhythm monitoring and adjust therapy according to clinical progression."
    }

  ],

  diagnostics: [

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Essential",
      reason:
        "Identifies and classifies cardiac rhythm abnormalities."
    },

    {
      id: "holter",
      name: "24-Hour Holter Monitoring",
      priority: "Essential",
      reason:
        "Detects intermittent or occult arrhythmias."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Essential",
      reason:
        "Evaluates structural heart disease associated with arrhythmias."
    },

    {
      id: "electrolytes",
      name: "Serum Electrolytes",
      priority: "Essential",
      reason:
        "Identifies electrolyte abnormalities contributing to arrhythmias."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Detects systemic disorders associated with cardiac rhythm disturbances."
    }

  ],

  drugCategories: [

    {
      category: "Antiarrhythmic",
      indication: "Tachyarrhythmias",
      reason: "Controls clinically significant cardiac arrhythmias."
    },

    {
      category: "Positive Inotrope",
      indication: "Concurrent systolic dysfunction",
      reason: "Improves cardiac output."
    },

    {
      category: "Electrolyte Replacement",
      indication: "Electrolyte abnormalities",
      reason: "Corrects reversible causes of arrhythmias."
    },

    {
      category: "Oxygen Therapy",
      indication: "Poor perfusion or hypoxemia",
      reason: "Supports tissue oxygenation."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "lidocaine",
      priority: "First Line",
      category: "Antiarrhythmic",
    },

    {
      drugId: "sotalol",
      priority: "Adjunctive",
      category: "Antiarrhythmic",
    },

    {
      drugId: "mexiletine",
      priority: "Adjunctive",
      category: "Antiarrhythmic",
    },

    {
      drugId: "pimobendan",
      priority: "Supportive",
      category: "Positive Inotrope",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation if indicated.",
    "Establish continuous ECG monitoring.",
    "Treat hemodynamically unstable arrhythmias immediately.",
    "Correct electrolyte and acid-base abnormalities.",
    "Treat the underlying cardiac or systemic disease."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Collapse or syncope", weight: 40 },

      { finding: "Exercise intolerance", weight: 30 },

      { finding: "Known heart disease", weight: 35 },

    ],

    clinicalSigns: [

      { finding: "Irregular heart rhythm", weight: 45 },

      { finding: "Pulse deficits", weight: 40 },

      { finding: "Weak femoral pulses", weight: 30 },

      { finding: "Bradycardia or tachycardia", weight: 40 },

    ],

    biochemistry: [

      { finding: "Hypokalemia", weight: 25 },

      { finding: "Hyperkalemia", weight: 25 },

      { finding: "Elevated cardiac troponin", weight: 20 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Arrhythmia confirmed on ECG", weight: 50 },

      { finding: "Intermittent arrhythmia on Holter monitoring", weight: 45 },

      { finding: "Structural heart disease identified", weight: 35 },

    ],

    against: [

      { finding: "Normal ECG and Holter monitoring", weight: -50 },

      { finding: "Alternative cause of syncope identified", weight: -35 },

    ],

  },

  monitoring: [

    {
      id:"ecg",
      parameter:
        "Continuous ECG monitoring",
      frequency:
        "During hospitalization",
      reason:
        "Evaluates rhythm stability and response to treatment."
    },

    {
      id:"blood-pressure",
      parameter:
        "Systemic blood pressure",
      frequency:
        "Every 4–6 hours in unstable patients",
      reason:
        "Assesses cardiovascular perfusion."
    },

    {
      id:"electrolytes",
      parameter:
        "Serum electrolytes",
      frequency:
        "Daily or as clinically indicated",
      reason:
        "Detects abnormalities that promote arrhythmias."
    }

  ],

  precautions: [

    {
      id:"drug-selection",
      title:
        "Select Antiarrhythmics Carefully",
      description:
        "Choice of antiarrhythmic should be based on the specific rhythm disturbance and underlying cardiac disease."
    },

    {
      id:"underlying-disease",
      title:
        "Treat Underlying Disease",
      description:
        "Successful long-term rhythm control requires correction of underlying cardiac or systemic disorders whenever possible."
    }

  ],

  prognosis:
    "Prognosis depends on the arrhythmia type, underlying disease, response to therapy, and presence of structural heart disease. Benign arrhythmias may require only monitoring, whereas malignant ventricular arrhythmias carry a guarded to poor prognosis.",

  strengtheningEvidence: [

    "ECG-confirmed arrhythmia",

    "Pulse deficits",

    "Holter abnormalities",

    "Structural heart disease",

    "Syncope",

    "Exercise intolerance"

  ],

  weakeningEvidence: [

    "Normal ECG",

    "Normal Holter monitoring",

    "Normal cardiac examination",

    "Alternative diagnosis confirmed",

    "No rhythm abnormalities"

  ],

  classicFindings: [

    "Irregular heart rhythm",

    "Pulse deficits",

    "Syncope",

    "Exercise intolerance",

    "ECG abnormalities",

    "Underlying cardiac disease"

  ],

  ruleOutFindings: [

    "Vasovagal syncope",

    "Hypoglycemia",

    "Seizure disorder",

    "Electrolyte imbalance without arrhythmia",

    "Primary respiratory disease"

  ],

};