import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineAtrialFibrillation: DiseaseCard = {
  id: "canine-atrial-fibrillation-dog",

  title: "Canine Atrial Fibrillation",

  description:
    "A supraventricular tachyarrhythmia characterized by chaotic atrial electrical activity and an irregularly irregular ventricular rhythm.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Atrial Fibrillation",
    "AF",
    "Supraventricular Fibrillation",
  ],

  overview:
    "Canine atrial fibrillation (AF) is the most common sustained supraventricular arrhythmia in dogs and is usually associated with marked atrial enlargement secondary to structural heart disease such as dilated cardiomyopathy or advanced degenerative mitral valve disease. Lone atrial fibrillation may occur in giant breeds. Loss of coordinated atrial contraction and rapid ventricular response reduce cardiac output and may precipitate or worsen congestive heart failure.",

  clinicalProblems: [

    "Irregularly irregular rhythm",
    "Tachycardia",
    "Exercise intolerance",
    "Weak pulses",
    "Syncope",
    "Congestive heart failure",
    "Reduced cardiac output",
    "Respiratory distress"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, heart rate, pulse quality, blood pressure, and evidence of congestive heart failure."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm atrial fibrillation with ECG and identify underlying structural heart disease."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Control ventricular rate, treat heart failure if present, and manage the underlying cardiac disease."
    },

    {
      id: "monitor-response",
      step: 4,
      title: "Monitor Response",
      description:
        "Monitor heart rate, ECG findings, blood pressure, and clinical improvement."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Continue lifelong rate-control therapy with periodic reassessment of cardiac function."
    }

  ],

  diagnostics: [

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Essential",
      reason:
        "Confirms atrial fibrillation by absence of P waves and irregularly irregular rhythm."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Essential",
      reason:
        "Evaluates atrial enlargement and underlying structural heart disease."
    },

    {
      id: "thoracic-radiography",
      name: "Thoracic Radiography",
      priority: "Recommended",
      reason:
        "Assesses cardiomegaly and congestive heart failure."
    },

    {
      id: "holter",
      name: "24-Hour Holter Monitoring",
      priority: "Recommended",
      reason:
        "Evaluates ventricular rate control and intermittent rhythm disturbances."
    },

    {
      id: "cbc-chemistry",
      name: "CBC, Serum Biochemistry and Electrolytes",
      priority: "Recommended",
      reason:
        "Evaluates concurrent systemic disease and electrolyte abnormalities."
    }

  ],

  drugCategories: [

    {
      category: "Cardiac Glycoside",
      indication: "Rate control",
      reason: "Slows atrioventricular nodal conduction."
    },

    {
      category: "Calcium Channel Blocker",
      indication: "Rapid ventricular response",
      reason: "Provides ventricular rate control."
    },

    {
      category: "Positive Inotrope",
      indication: "Concurrent systolic dysfunction",
      reason: "Improves cardiac performance."
    },

    {
      category: "Loop Diuretic",
      indication: "Congestive heart failure",
      reason: "Reduces pulmonary congestion."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "digoxin",
      priority: "First Line",
      category: "Cardiac Glycoside",
    },

    {
      drugId: "diltiazem",
      priority: "First Line",
      category: "Calcium Channel Blocker",
    },

    {
      drugId: "pimobendan",
      priority: "Adjunctive",
      category: "Positive Inotrope",
    },

    {
      drugId: "furosemide",
      priority: "Supportive",
      category: "Loop Diuretic",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation if respiratory distress is present.",
    "Treat congestive heart failure when present.",
    "Control excessive ventricular rate.",
    "Correct electrolyte abnormalities.",
    "Monitor ECG continuously in unstable patients."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Large-breed dog", weight: 20 },

      { finding: "Exercise intolerance", weight: 35 },

      { finding: "Known heart disease", weight: 35 },

    ],

    clinicalSigns: [

      { finding: "Irregularly irregular rhythm", weight: 50 },

      { finding: "Tachycardia", weight: 35 },

      { finding: "Pulse deficits", weight: 35 },

      { finding: "Congestive heart failure", weight: 30 },

    ],

    biochemistry: [

      { finding: "Elevated NT-proBNP", weight: 25 },

      { finding: "Electrolyte abnormalities", weight: 15 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Absent P waves on ECG", weight: 50 },

      { finding: "Irregular R-R intervals", weight: 50 },

      { finding: "Left atrial enlargement", weight: 40 },

      { finding: "Underlying structural heart disease", weight: 35 },

    ],

    against: [

      { finding: "Normal sinus rhythm", weight: -50 },

      { finding: "Regular supraventricular rhythm", weight: -35 },

      { finding: "No atrial enlargement", weight: -20 },

    ],

  },

  monitoring: [

    {
      id:"heart-rate",
      parameter:
        "Heart rate and ECG",
      frequency:
        "During hospitalization and every recheck",
      reason:
        "Assesses ventricular rate control."
    },

    {
      id:"digoxin",
      parameter:
        "Serum digoxin concentration",
      frequency:
        "After dose adjustment and periodically",
      reason:
        "Avoids digoxin toxicity."
    },

    {
      id:"renal",
      parameter:
        "Renal function and electrolytes",
      frequency:
        "Periodically",
      reason:
        "Detects medication adverse effects."
    }

  ],

  precautions: [

    {
      id:"rate-control",
      title:
        "Prioritize Rate Control",
      description:
        "Long-term management focuses on controlling ventricular response rather than restoring sinus rhythm."
    },

    {
      id:"digoxin-toxicity",
      title:
        "Monitor Digoxin Therapy",
      description:
        "Monitor serum concentrations and renal function to reduce the risk of digoxin toxicity."
    }

  ],

  prognosis:
    "Prognosis depends primarily on the underlying cardiac disease. Dogs with lone atrial fibrillation generally have a better prognosis than dogs with advanced structural heart disease and congestive heart failure.",

  strengtheningEvidence: [

    "Irregularly irregular rhythm",

    "Absent P waves",

    "Irregular R-R intervals",

    "Left atrial enlargement",

    "Underlying structural heart disease",

    "Rapid ventricular response"

  ],

  weakeningEvidence: [

    "Normal sinus rhythm",

    "Regular ECG rhythm",

    "No atrial enlargement",

    "Normal echocardiography",

    "Alternative arrhythmia diagnosed"

  ],

  classicFindings: [

    "Irregularly irregular rhythm",

    "Absent P waves",

    "Rapid ventricular rate",

    "Large-breed dog",

    "Left atrial enlargement",

    "Dilated cardiomyopathy or DMVD"

  ],

  ruleOutFindings: [

    "Sinus arrhythmia",

    "Frequent atrial premature complexes",

    "Supraventricular tachycardia",

    "Ventricular tachycardia",

    "Second-degree AV block"

  ],

};