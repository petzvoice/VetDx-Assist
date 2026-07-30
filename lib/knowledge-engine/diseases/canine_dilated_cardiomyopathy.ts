import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineDilatedCardiomyopathy: DiseaseCard = {
  id: "canine-dilated-cardiomyopathy-dog",

  title: "Canine Dilated Cardiomyopathy",

  description:
    "A primary myocardial disease characterized by ventricular dilation and impaired systolic function leading to reduced cardiac output, arrhythmias, and congestive heart failure.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Dilated Cardiomyopathy",
    "DCM",
    "Idiopathic Dilated Cardiomyopathy",
  ],

  overview:
    "Canine dilated cardiomyopathy (DCM) is a myocardial disease characterized by ventricular dilation, poor systolic contractility, and progressive cardiac remodeling. It primarily affects medium and large breed dogs, with breeds such as Doberman Pinschers, Great Danes, Boxers, Irish Wolfhounds, and Cocker Spaniels at increased risk. Clinical manifestations range from occult disease to congestive heart failure, ventricular arrhythmias, syncope, and sudden cardiac death.",

  clinicalProblems: [

    "Reduced cardiac output",
    "Exercise intolerance",
    "Congestive heart failure",
    "Pulmonary edema",
    "Pleural effusion",
    "Cardiac arrhythmias",
    "Syncope",
    "Sudden death"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess cardiovascular stability, respiratory compromise, perfusion, and evidence of congestive heart failure or life-threatening arrhythmias."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm myocardial dysfunction using echocardiography and evaluate arrhythmias, pulmonary congestion, and cardiac enlargement."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Improve cardiac output, manage heart failure, and control clinically significant arrhythmias."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor cardiac rhythm, renal function, respiratory status, and progression of myocardial dysfunction."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Continue lifelong cardiac therapy, periodic reassessment, and owner monitoring for recurrence of clinical signs."
    }

  ],

  diagnostics: [

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Essential",
      reason:
        "Confirms ventricular dilation, reduced systolic function, and chamber enlargement."
    },

    {
      id: "thoracic-radiography",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Evaluates cardiomegaly, pulmonary edema, and pleural effusion."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Essential",
      reason:
        "Detects atrial and ventricular arrhythmias."
    },

    {
      id: "holter",
      name: "24-Hour Holter Monitoring",
      priority: "Recommended",
      reason:
        "Identifies intermittent ventricular arrhythmias, particularly in predisposed breeds."
    },

    {
      id: "ntprobnp",
      name: "NT-proBNP",
      priority: "Recommended",
      reason:
        "Supports assessment of myocardial disease severity."
    }

  ],

  drugCategories: [

    {
      category: "Positive Inotrope",
      indication: "Reduced systolic function",
      reason:
        "Improves myocardial contractility and cardiac output."
    },

    {
      category: "Loop Diuretic",
      indication: "Congestive heart failure",
      reason:
        "Reduces pulmonary and systemic congestion."
    },

    {
      category: "ACE Inhibitor",
      indication: "Chronic heart failure",
      reason:
        "Reduces neurohormonal activation and cardiac workload."
    },

    {
      category: "Antiarrhythmic",
      indication: "Clinically significant ventricular arrhythmias",
      reason:
        "Reduces arrhythmia burden and risk of sudden cardiac death."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "pimobendan",
      priority: "First Line",
      category: "Positive Inotrope",
    },

    {
      drugId: "furosemide",
      priority: "First Line",
      category: "Loop Diuretic",
    },

    {
      drugId: "enalapril",
      priority: "Adjunctive",
      category: "ACE Inhibitor",
    },

    {
      drugId: "sotalol",
      priority: "Adjunctive",
      category: "Antiarrhythmic",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation if respiratory distress is present.",
    "Treat pulmonary edema with appropriate diuretic therapy.",
    "Stabilize clinically significant ventricular arrhythmias.",
    "Minimize stress and excessive physical activity.",
    "Monitor blood pressure and tissue perfusion."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Large or giant breed dog", weight: 35 },

      { finding: "Exercise intolerance", weight: 35 },

      { finding: "Syncope", weight: 35 },

      { finding: "Progressive weakness", weight: 30 },

    ],

    clinicalSigns: [

      { finding: "Weak femoral pulses", weight: 30 },

      { finding: "Cardiac arrhythmia", weight: 45 },

      { finding: "Heart murmur", weight: 20 },

      { finding: "Pulmonary crackles", weight: 35 },

      { finding: "Ascites", weight: 25 },

    ],

    biochemistry: [

      { finding: "Elevated NT-proBNP", weight: 35 },

      { finding: "Elevated cardiac troponin", weight: 25 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Reduced systolic function on echocardiography", weight: 50 },

      { finding: "Left ventricular dilation", weight: 50 },

      { finding: "Atrial enlargement", weight: 40 },

      { finding: "Ventricular arrhythmias on ECG or Holter", weight: 45 },

    ],

    against: [

      { finding: "Normal echocardiographic systolic function", weight: -50 },

      { finding: "Normal ventricular chamber size", weight: -45 },

      { finding: "Alternative cardiac disease confirmed", weight: -35 },

    ],

  },

  monitoring: [

    {
      id:"rrr",
      parameter:
        "Resting respiratory rate",
      frequency:
        "Daily at home",
      reason:
        "Detects development or recurrence of congestive heart failure."
    },

    {
      id:"renal",
      parameter:
        "Renal values and electrolytes",
      frequency:
        "After medication adjustments and periodically",
      reason:
        "Monitors adverse effects of cardiac medications."
    },

    {
      id:"rhythm",
      parameter:
        "Electrocardiography or Holter monitoring",
      frequency:
        "As clinically indicated",
      reason:
        "Evaluates progression of arrhythmias and treatment response."
    }

  ],

  precautions: [

    {
      id:"exercise",
      title:
        "Restrict Strenuous Exercise",
      description:
        "Avoid strenuous physical activity in dogs with advanced myocardial dysfunction or significant arrhythmias."
    },

    {
      id:"arrhythmia",
      title:
        "Monitor for Sudden Cardiac Death",
      description:
        "Dogs with ventricular arrhythmias remain at risk for sudden death despite therapy."
    }

  ],

  prognosis:
    "Prognosis depends on breed, disease stage, presence of congestive heart failure, and ventricular arrhythmias. Occult disease may remain stable for months, whereas symptomatic DCM carries a guarded to poor prognosis despite treatment.",

  strengtheningEvidence: [

    "Large-breed predisposition",

    "Reduced systolic function",

    "Left ventricular dilation",

    "Ventricular arrhythmias",

    "Elevated NT-proBNP",

    "Congestive heart failure"

  ],

  weakeningEvidence: [

    "Normal echocardiography",

    "Normal systolic function",

    "No ventricular enlargement",

    "Alternative cardiac diagnosis",

    "Normal Holter monitoring"

  ],

  classicFindings: [

    "Large-breed dog",

    "Exercise intolerance",

    "Left ventricular dilation",

    "Reduced systolic function",

    "Ventricular arrhythmias",

    "Congestive heart failure"

  ],

  ruleOutFindings: [

    "Degenerative mitral valve disease",

    "Pericardial effusion",

    "Congenital cardiomyopathy",

    "Primary respiratory disease",

    "Pulmonary hypertension"

  ],

};