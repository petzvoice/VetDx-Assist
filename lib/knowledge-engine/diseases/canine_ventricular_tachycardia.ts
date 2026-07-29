import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineVentricularTachycardia: DiseaseCard = {
  id: "canine-ventricular-tachycardia-dog",

  title: "Canine Ventricular Tachycardia",

  description:
    "A potentially life-threatening ventricular tachyarrhythmia characterized by three or more consecutive ventricular premature complexes resulting in reduced cardiac output and increased risk of sudden cardiac death.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Ventricular Tachycardia",
    "VT",
    "Sustained Ventricular Tachycardia",
  ],

  overview:
    "Canine ventricular tachycardia (VT) originates from ectopic ventricular foci and may occur secondary to dilated cardiomyopathy, myocarditis, splenic disease, gastric dilatation-volvulus, trauma, electrolyte abnormalities, cardiac neoplasia, or drug toxicity. Sustained VT significantly decreases ventricular filling time, compromises cardiac output, and may degenerate into ventricular fibrillation, resulting in sudden cardiac death.",

  clinicalProblems: [

    "Tachycardia",
    "Weak pulses",
    "Hypotension",
    "Syncope",
    "Poor cardiac output",
    "Collapse",
    "Sudden cardiac death",
    "Congestive heart failure"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Emergency Assessment",
      description:
        "Assess cardiovascular stability, pulse quality, perfusion, blood pressure, and determine if emergency antiarrhythmic therapy is required."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm ventricular tachycardia by ECG and identify the underlying cardiac or systemic disease."
    },

    {
      id: "emergency-treatment",
      step: 3,
      title: "Emergency Treatment",
      description:
        "Treat hemodynamically significant ventricular tachycardia while correcting reversible causes."
    },

    {
      id: "monitor-response",
      step: 4,
      title: "Monitor Response",
      description:
        "Monitor ECG, blood pressure, perfusion, and recurrence of ventricular arrhythmias."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Continue antiarrhythmic therapy as indicated and manage the underlying disease."
    }

  ],

  diagnostics: [

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Essential",
      reason:
        "Confirms ventricular tachycardia and differentiates it from supraventricular tachycardia."
    },

    {
      id: "holter",
      name: "24-Hour Holter Monitoring",
      priority: "Essential",
      reason:
        "Evaluates frequency, duration, and severity of ventricular arrhythmias."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Essential",
      reason:
        "Identifies structural heart disease contributing to ventricular tachycardia."
    },

    {
      id: "electrolytes",
      name: "Serum Electrolytes",
      priority: "Essential",
      reason:
        "Detects electrolyte abnormalities contributing to arrhythmias."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates systemic diseases associated with ventricular tachycardia."
    }

  ],

  drugCategories: [

    {
      category: "Class IB Antiarrhythmic",
      indication: "Hemodynamically significant VT",
      reason: "Suppresses ventricular ectopic activity."
    },

    {
      category: "Class III Antiarrhythmic",
      indication: "Chronic ventricular tachycardia",
      reason: "Reduces recurrence of ventricular arrhythmias."
    },

    {
      category: "Class IB Antiarrhythmic (Oral)",
      indication: "Long-term management",
      reason: "Maintains ventricular rhythm control."
    },

    {
      category: "Positive Inotrope",
      indication: "Concurrent myocardial dysfunction",
      reason: "Improves cardiac performance."
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
      priority: "First Line",
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

    "Provide oxygen supplementation.",
    "Establish continuous ECG monitoring.",
    "Administer intravenous lidocaine for unstable ventricular tachycardia.",
    "Correct electrolyte and acid-base abnormalities.",
    "Treat the underlying cardiac or systemic disease."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Collapse or syncope", weight: 40 },

      { finding: "Known dilated cardiomyopathy", weight: 35 },

      { finding: "Splenic mass or GDV", weight: 25 },

    ],

    clinicalSigns: [

      { finding: "Heart rate >180 bpm", weight: 35 },

      { finding: "Pulse deficits", weight: 40 },

      { finding: "Weak femoral pulses", weight: 35 },

      { finding: "Hypotension", weight: 35 },

      { finding: "Syncope", weight: 40 },

    ],

    biochemistry: [

      { finding: "Hypokalemia", weight: 20 },

      { finding: "Elevated cardiac troponin", weight: 25 },

      { finding: "Hypomagnesemia", weight: 15 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Wide QRS tachycardia on ECG", weight: 50 },

      { finding: "Atrioventricular dissociation", weight: 45 },

      { finding: "Runs of ventricular premature complexes", weight: 45 },

      { finding: "Holter confirmation", weight: 40 },

    ],

    against: [

      { finding: "Normal sinus rhythm", weight: -50 },

      { finding: "Supraventricular tachycardia confirmed", weight: -40 },

      { finding: "Normal Holter monitoring", weight: -35 },

    ],

  },

  monitoring: [

    {
      id:"ecg",
      parameter:
        "Continuous ECG",
      frequency:
        "During hospitalization",
      reason:
        "Detects recurrence or progression of ventricular tachycardia."
    },

    {
      id:"blood-pressure",
      parameter:
        "Blood pressure",
      frequency:
        "Every 15–30 minutes until stable",
      reason:
        "Assesses adequacy of cardiac output."
    },

    {
      id:"electrolytes",
      parameter:
        "Electrolytes",
      frequency:
        "Daily or as clinically indicated",
      reason:
        "Corrects reversible causes of ventricular arrhythmias."
    }

  ],

  precautions: [

    {
      id:"vf-risk",
      title:
        "Risk of Ventricular Fibrillation",
      description:
        "Untreated sustained ventricular tachycardia may progress to ventricular fibrillation and sudden cardiac death."
    },

    {
      id:"antiarrhythmics",
      title:
        "Continuous ECG Monitoring",
      description:
        "Antiarrhythmic therapy should be initiated with ECG monitoring whenever possible."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying disease, duration of ventricular tachycardia, and response to antiarrhythmic therapy. VT associated with severe myocardial disease carries a guarded to poor prognosis because of the risk of sudden cardiac death.",

  strengtheningEvidence: [

    "Wide QRS tachycardia",

    "Atrioventricular dissociation",

    "Runs of ventricular premature complexes",

    "Syncope",

    "Hypotension",

    "Underlying myocardial disease"

  ],

  weakeningEvidence: [

    "Normal sinus rhythm",

    "Narrow-complex supraventricular tachycardia",

    "Normal Holter monitoring",

    "No ventricular ectopy",

    "Alternative arrhythmia diagnosed"

  ],

  classicFindings: [

    "Wide-complex tachycardia",

    "Pulse deficits",

    "Syncope",

    "Hypotension",

    "Dilated cardiomyopathy",

    "Ventricular premature complexes"

  ],

  ruleOutFindings: [

    "Supraventricular tachycardia",

    "Atrial fibrillation",

    "Sinus tachycardia",

    "Accelerated idioventricular rhythm",

    "Second-degree AV block"

  ],

};