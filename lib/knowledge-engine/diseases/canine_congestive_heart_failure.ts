import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineCongestiveHeartFailure: DiseaseCard = {
  id: "canine-congestive-heart-failure-dog",

  title: "Canine Congestive Heart Failure",

  description:
    "A clinical syndrome resulting from the inability of the heart to maintain adequate cardiac output, leading to pulmonary or systemic congestion in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "CHF",
    "Congestive Cardiac Failure",
    "Heart Failure",
  ],

  overview:
    "Canine congestive heart failure (CHF) develops when cardiac dysfunction results in increased filling pressures and inadequate forward cardiac output. The disease is most commonly secondary to degenerative mitral valve disease or dilated cardiomyopathy. Left-sided CHF causes pulmonary edema, whereas right-sided CHF results in ascites, pleural effusion, and systemic venous congestion. Early recognition and aggressive stabilization significantly improve patient outcomes.",

  clinicalProblems: [

    "Respiratory distress",
    "Pulmonary edema",
    "Exercise intolerance",
    "Cough",
    "Ascites",
    "Pleural effusion",
    "Syncope",
    "Poor perfusion"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess respiratory effort, oxygenation, perfusion, blood pressure, and determine if emergency stabilization is required."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm heart failure, determine underlying cardiac disease, and assess severity of congestion."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Reduce congestion, improve cardiac output, and initiate evidence-based cardiac therapy."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory function, renal function, electrolyte balance, blood pressure, and progression of heart failure."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Maintain optimal cardiac therapy, monitor disease progression, and educate owners regarding recurrence of clinical signs."
    }

  ],

  diagnostics: [

    {
      id: "thoracic-radiography",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Evaluates cardiomegaly, pulmonary edema, pleural effusion, and pulmonary vasculature."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Essential",
      reason:
        "Identifies the underlying cardiac disease and evaluates cardiac function."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Recommended",
      reason:
        "Detects arrhythmias and conduction abnormalities."
    },

    {
      id: "ntprobnp",
      name: "NT-proBNP",
      priority: "Recommended",
      reason:
        "Supports differentiation of cardiac from non-cardiac respiratory disease."
    },

    {
      id: "cbc-chemistry",
      name: "CBC, Serum Biochemistry and Electrolytes",
      priority: "Essential",
      reason:
        "Evaluates renal function, electrolyte disturbances, and suitability for cardiac medications."
    }

  ],

  drugCategories: [

    {
      category: "Loop Diuretic",
      indication: "Pulmonary edema or fluid overload",
      reason:
        "Rapidly reduces congestion and improves respiratory function."
    },

    {
      category: "Positive Inotrope",
      indication: "Reduced cardiac output",
      reason:
        "Improves myocardial contractility and cardiac performance."
    },

    {
      category: "ACE Inhibitor",
      indication: "Chronic heart failure",
      reason:
        "Reduces neurohormonal activation and cardiac workload."
    },

    {
      category: "Oxygen Therapy",
      indication: "Respiratory distress",
      reason:
        "Improves oxygen delivery in hypoxemic patients."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "furosemide",
      priority: "First Line",
      category: "Loop Diuretic",
    },

    {
      drugId: "pimobendan",
      priority: "First Line",
      category: "Positive Inotrope",
    },

    {
      drugId: "enalapril",
      priority: "Adjunctive",
      category: "ACE Inhibitor",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation immediately.",
    "Minimize stress and patient handling.",
    "Administer diuretic therapy for pulmonary edema.",
    "Perform thoracocentesis or abdominocentesis when indicated to relieve severe effusions.",
    "Monitor blood pressure and perfusion continuously."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Known heart murmur", weight: 35 },

      { finding: "Exercise intolerance", weight: 30 },

      { finding: "Progressive cough", weight: 30 },

      { finding: "Collapse or syncope", weight: 25 },

    ],

    clinicalSigns: [

      { finding: "Tachypnea", weight: 40 },

      { finding: "Respiratory distress", weight: 45 },

      { finding: "Heart murmur", weight: 35 },

      { finding: "Pulmonary crackles", weight: 40 },

      { finding: "Ascites", weight: 35 },

      { finding: "Weak pulses", weight: 25 },

    ],

    biochemistry: [

      { finding: "Elevated NT-proBNP", weight: 40 },

      { finding: "Prerenal azotemia", weight: 20 },

      { finding: "Electrolyte abnormalities", weight: 20 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Pulmonary edema on thoracic radiographs", weight: 50 },

      { finding: "Cardiomegaly", weight: 40 },

      { finding: "Echocardiographic evidence of cardiac disease", weight: 50 },

      { finding: "Response to diuretic therapy", weight: 30 },

    ],

    against: [

      { finding: "Normal echocardiogram", weight: -50 },

      { finding: "Normal thoracic radiographs", weight: -40 },

      { finding: "Primary respiratory disease confirmed", weight: -35 },

    ],

  },

  monitoring: [

    {
      id:"respiratory",
      parameter:
        "Respiratory rate and respiratory effort",
      frequency:
        "Continuous during hospitalization",
      reason:
        "Detects progression or resolution of pulmonary edema."
    },

    {
      id:"renal",
      parameter:
        "Renal values and electrolytes",
      frequency:
        "Within 3–7 days after therapy changes and periodically thereafter",
      reason:
        "Monitors adverse effects of diuretics and ACE inhibitors."
    },

    {
      id:"blood-pressure",
      parameter:
        "Systemic blood pressure",
      frequency:
        "Each recheck",
      reason:
        "Evaluates perfusion and medication effects."
    }

  ],

  precautions: [

    {
      id:"fluid-therapy",
      title:
        "Use Fluids Carefully",
      description:
        "Aggressive intravenous fluid administration may worsen pulmonary edema and congestion."
    },

    {
      id:"renal-monitoring",
      title:
        "Monitor Renal Function",
      description:
        "Diuretics and ACE inhibitors may cause azotemia, hypotension, and electrolyte disturbances."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cardiac disease, stage of heart failure, and response to therapy. Early-stage CHF can often be medically managed for months to years, whereas refractory heart failure carries a poor prognosis.",

  strengtheningEvidence: [

    "Pulmonary edema",

    "Cardiomegaly",

    "Heart murmur",

    "Elevated NT-proBNP",

    "Positive echocardiography",

    "Response to furosemide"

  ],

  weakeningEvidence: [

    "Normal echocardiogram",

    "Normal cardiac silhouette",

    "Normal NT-proBNP",

    "Primary pulmonary disease diagnosed",

    "No evidence of congestion"

  ],

  classicFindings: [

    "Heart murmur",

    "Exercise intolerance",

    "Pulmonary edema",

    "Cardiomegaly",

    "Tachypnea",

    "Positive echocardiographic findings"

  ],

  ruleOutFindings: [

    "Primary pneumonia",

    "Pleural effusion without cardiac disease",

    "Pulmonary thromboembolism",

    "Tracheal collapse",

    "Non-cardiogenic pulmonary edema"

  ],

};