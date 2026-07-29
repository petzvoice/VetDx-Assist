import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePericardialEffusion: DiseaseCard = {
  id: "canine-pericardial-effusion-dog",

  title: "Canine Pericardial Effusion",

  description:
    "Accumulation of fluid within the pericardial sac causing impaired cardiac filling and potentially life-threatening cardiac tamponade in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Pericardial Fluid Accumulation",
    "Pericardial Disease",
    "Hemopericardium",
  ],

  overview:
    "Canine pericardial effusion is characterized by abnormal accumulation of fluid within the pericardial sac. Common causes include cardiac neoplasia, idiopathic pericarditis, right atrial rupture, coagulopathy, infectious disease, and trauma. Progressive fluid accumulation restricts ventricular filling, decreases cardiac output, and may result in cardiac tamponade requiring emergency intervention.",

  clinicalProblems: [

    "Cardiac tamponade",
    "Weak pulses",
    "Collapse",
    "Exercise intolerance",
    "Ascites",
    "Lethargy",
    "Muffled heart sounds",
    "Shock"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess cardiovascular stability, perfusion, pulse quality, and determine whether emergency pericardiocentesis is required."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm pericardial effusion, identify cardiac tamponade, and investigate the underlying cause."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Stabilize the patient and perform therapeutic pericardiocentesis when indicated."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor recurrence of effusion, cardiovascular stability, and complications following drainage."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Treat the underlying disease and consider surgical pericardiectomy for recurrent or idiopathic cases."
    }

  ],

  diagnostics: [

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Essential",
      reason:
        "Confirms pericardial effusion, cardiac tamponade, and detects cardiac masses."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Recommended",
      reason:
        "May demonstrate electrical alternans or associated arrhythmias."
    },

    {
      id: "thoracic-radiography",
      name: "Thoracic Radiography",
      priority: "Recommended",
      reason:
        "Evaluates cardiac silhouette and concurrent thoracic disease."
    },

    {
      id: "pericardial-fluid",
      name: "Pericardial Fluid Analysis",
      priority: "Recommended",
      reason:
        "Helps investigate infectious, inflammatory, or neoplastic causes."
    },

    {
      id: "cbc-chemistry",
      name: "CBC, Serum Biochemistry and Coagulation Profile",
      priority: "Essential",
      reason:
        "Assesses systemic disease, anemia, and coagulation abnormalities."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Poor perfusion before drainage",
      reason:
        "Provides temporary circulatory support."
    },

    {
      category: "Analgesic",
      indication: "Pericardiocentesis",
      reason:
        "Provides patient comfort during procedures."
    },

    {
      category: "Antiarrhythmic",
      indication: "Procedure-induced arrhythmias",
      reason:
        "Controls clinically significant ventricular arrhythmias."
    },

    {
      category: "Oxygen Therapy",
      indication: "Shock or hypoxemia",
      reason:
        "Improves oxygen delivery during stabilization."
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

    "Provide oxygen supplementation.",
    "Minimize stress and unnecessary handling.",
    "Perform emergency pericardiocentesis when cardiac tamponade is present.",
    "Support blood pressure until cardiac filling is restored."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Collapse episodes", weight: 35 },

      { finding: "Exercise intolerance", weight: 30 },

      { finding: "Large-breed dog", weight: 20 },

    ],

    clinicalSigns: [

      { finding: "Muffled heart sounds", weight: 45 },

      { finding: "Weak femoral pulses", weight: 40 },

      { finding: "Jugular venous distension", weight: 40 },

      { finding: "Pale mucous membranes", weight: 25 },

      { finding: "Ascites", weight: 30 },

    ],

    biochemistry: [

      { finding: "Anemia", weight: 20 },

      { finding: "Elevated lactate", weight: 20 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Pericardial fluid on echocardiography", weight: 50 },

      { finding: "Right atrial collapse", weight: 50 },

      { finding: "Improvement following pericardiocentesis", weight: 40 },

      { finding: "Cardiac mass identified", weight: 35 },

    ],

    against: [

      { finding: "Normal echocardiogram", weight: -50 },

      { finding: "No pericardial fluid", weight: -45 },

      { finding: "Alternative cause of shock confirmed", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"perfusion",
      parameter:
        "Heart rate, pulse quality and perfusion",
      frequency:
        "Continuous during stabilization",
      reason:
        "Evaluates response following pericardiocentesis."
    },

    {
      id:"echo",
      parameter:
        "Repeat echocardiography",
      frequency:
        "As clinically indicated",
      reason:
        "Detects recurrence of pericardial effusion."
    },

    {
      id:"arrhythmia",
      parameter:
        "Electrocardiography",
      frequency:
        "During and after pericardiocentesis",
      reason:
        "Detects procedure-associated arrhythmias."
    }

  ],

  precautions: [

    {
      id:"tamponade",
      title:
        "Cardiac Tamponade is an Emergency",
      description:
        "Prompt pericardiocentesis is lifesaving in dogs with hemodynamically significant tamponade."
    },

    {
      id:"recurrence",
      title:
        "Monitor for Recurrence",
      description:
        "Recurrent pericardial effusion is common with neoplastic and idiopathic disease."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause. Idiopathic pericardial effusion often carries a fair to good prognosis following treatment, whereas cardiac neoplasia or recurrent hemopericardium carries a guarded to poor prognosis.",

  strengtheningEvidence: [

    "Pericardial effusion on echocardiography",

    "Right atrial collapse",

    "Muffled heart sounds",

    "Weak pulses",

    "Jugular venous distension",

    "Improvement after pericardiocentesis"

  ],

  weakeningEvidence: [

    "Normal echocardiography",

    "No pericardial fluid",

    "Normal cardiac filling",

    "Alternative diagnosis confirmed",

    "Normal cardiovascular examination"

  ],

  classicFindings: [

    "Muffled heart sounds",

    "Weak femoral pulses",

    "Jugular venous distension",

    "Pericardial effusion",

    "Cardiac tamponade",

    "Rapid improvement after pericardiocentesis"

  ],

  ruleOutFindings: [

    "Dilated cardiomyopathy",

    "Degenerative mitral valve disease",

    "Congestive heart failure",

    "Hypovolemic shock",

    "Pleural effusion"

  ],

};