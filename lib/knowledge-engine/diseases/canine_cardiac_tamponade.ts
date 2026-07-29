import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineCardiacTamponade: DiseaseCard = {
  id: "canine-cardiac-tamponade-dog",

  title: "Canine Cardiac Tamponade",

  description:
    "A life-threatening syndrome caused by increased intrapericardial pressure that impairs cardiac filling, resulting in reduced cardiac output and obstructive shock.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Cardiac Tamponade",
    "Pericardial Tamponade",
    "Obstructive Cardiac Shock",
  ],

  overview:
    "Cardiac tamponade occurs when pericardial fluid accumulates under sufficient pressure to compress the heart and impair diastolic filling. Even relatively small volumes of rapidly accumulating fluid can produce severe hemodynamic compromise. Common causes include pericardial effusion secondary to neoplasia, idiopathic pericarditis, right atrial rupture, trauma, and coagulopathies. Immediate recognition and pericardiocentesis are lifesaving.",

  clinicalProblems: [

    "Obstructive shock",
    "Poor cardiac output",
    "Hypotension",
    "Weak pulses",
    "Collapse",
    "Jugular venous distension",
    "Respiratory distress",
    "Cardiovascular instability"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Emergency Assessment",
      description:
        "Rapidly assess airway, breathing, circulation, pulse quality, blood pressure, and evidence of obstructive shock."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Confirmation",
      description:
        "Confirm cardiac tamponade using focused echocardiography while minimizing delays in treatment."
    },

    {
      id: "emergency-treatment",
      step: 3,
      title: "Emergency Treatment",
      description:
        "Perform therapeutic pericardiocentesis to restore cardiac filling and improve cardiac output."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Recovery",
      description:
        "Monitor cardiovascular stability, recurrence of tamponade, and procedure-related complications."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Treat Underlying Cause",
      description:
        "Investigate the underlying disease and determine whether surgery or oncology referral is indicated."
    }

  ],

  diagnostics: [

    {
      id: "focused-echo",
      name: "Focused Echocardiography",
      priority: "Essential",
      reason:
        "Rapidly confirms pericardial effusion, chamber collapse, and cardiac tamponade."
    },

    {
      id: "full-echo",
      name: "Complete Echocardiography",
      priority: "Essential",
      reason:
        "Evaluates cardiac masses, chamber dimensions, and underlying cardiac disease."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Recommended",
      reason:
        "Detects electrical alternans and procedure-associated arrhythmias."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Recommended",
      reason:
        "Assesses cardiac silhouette and concurrent thoracic disease after stabilization."
    },

    {
      id: "cbc-chemistry",
      name: "CBC, Serum Biochemistry and Coagulation Profile",
      priority: "Essential",
      reason:
        "Evaluates anemia, systemic disease, and coagulation abnormalities."
    }

  ],

  drugCategories: [

    {
      category: "Oxygen Therapy",
      indication: "Shock and hypoxemia",
      reason: "Improves oxygen delivery."
    },

    {
      category: "Fluid Therapy",
      indication: "Temporary circulatory support",
      reason: "Maintains preload until tamponade is relieved."
    },

    {
      category: "Analgesic",
      indication: "Pericardiocentesis",
      reason: "Provides patient comfort."
    },

    {
      category: "Antiarrhythmic",
      indication: "Procedure-associated ventricular arrhythmias",
      reason: "Treats life-threatening arrhythmias."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "lactated-ringers-solution",
      priority: "Supportive",
      category: "Fluid Therapy",
    },

    {
      drugId: "butorphanol",
      priority: "Adjunctive",
      category: "Analgesic",
    },

    {
      drugId: "lidocaine",
      priority: "Supportive",
      category: "Antiarrhythmic",
    },

  ],

  stabilization: [

    "Provide immediate oxygen supplementation.",
    "Minimize patient stress and excessive restraint.",
    "Establish intravenous access.",
    "Administer cautious fluid boluses if hypotensive.",
    "Perform emergency pericardiocentesis without unnecessary delay."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Acute collapse", weight: 40 },

      { finding: "Exercise intolerance", weight: 20 },

      { finding: "Known pericardial effusion", weight: 40 },

    ],

    clinicalSigns: [

      { finding: "Muffled heart sounds", weight: 45 },

      { finding: "Weak femoral pulses", weight: 45 },

      { finding: "Jugular venous distension", weight: 45 },

      { finding: "Hypotension", weight: 40 },

      { finding: "Tachycardia", weight: 30 },

      { finding: "Collapse", weight: 35 },

    ],

    biochemistry: [

      { finding: "Elevated blood lactate", weight: 25 },

      { finding: "Anemia", weight: 20 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Right atrial collapse on echocardiography", weight: 50 },

      { finding: "Right ventricular diastolic collapse", weight: 50 },

      { finding: "Large pericardial effusion", weight: 45 },

      { finding: "Immediate improvement after pericardiocentesis", weight: 45 },

    ],

    against: [

      { finding: "Normal echocardiogram", weight: -50 },

      { finding: "No pericardial effusion", weight: -50 },

      { finding: "Alternative cause of obstructive shock", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"hemodynamics",
      parameter:
        "Heart rate, pulse quality, blood pressure",
      frequency:
        "Continuous until stable",
      reason:
        "Assesses restoration of cardiac output."
    },

    {
      id:"echo",
      parameter:
        "Repeat echocardiography",
      frequency:
        "After pericardiocentesis and as clinically indicated",
      reason:
        "Detects recurrent tamponade."
    },

    {
      id:"ecg-monitoring",
      parameter:
        "Electrocardiography",
      frequency:
        "Continuous during and after pericardiocentesis",
      reason:
        "Detects ventricular arrhythmias."
    }

  ],

  precautions: [

    {
      id:"emergency",
      title:
        "Medical Emergency",
      description:
        "Cardiac tamponade is immediately life-threatening and requires prompt pericardiocentesis."
    },

    {
      id:"fluid",
      title:
        "Avoid Excessive Fluid Therapy",
      description:
        "Fluids provide temporary support but do not replace definitive treatment with pericardiocentesis."
    }

  ],

  prognosis:
    "Short-term prognosis is favorable when tamponade is rapidly relieved. Long-term prognosis depends on the underlying cause. Idiopathic pericarditis has a better outcome than neoplastic causes such as hemangiosarcoma or chemodectoma.",

  strengtheningEvidence: [

    "Pericardial effusion",

    "Right atrial collapse",

    "Right ventricular diastolic collapse",

    "Jugular venous distension",

    "Weak pulses",

    "Immediate improvement after pericardiocentesis"

  ],

  weakeningEvidence: [

    "Normal echocardiography",

    "No pericardial effusion",

    "Normal cardiac filling",

    "Alternative diagnosis established",

    "Stable cardiovascular parameters"

  ],

  classicFindings: [

    "Muffled heart sounds",

    "Jugular venous distension",

    "Weak femoral pulses",

    "Hypotension",

    "Pericardial effusion",

    "Right atrial collapse"

  ],

  ruleOutFindings: [

    "Hypovolemic shock",

    "Dilated cardiomyopathy",

    "Congestive heart failure",

    "Pulmonary thromboembolism",

    "Tension pneumothorax"

  ],

};