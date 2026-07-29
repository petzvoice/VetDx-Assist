import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineAtrialSeptalDefect: DiseaseCard = {
  id: "canine-atrial-septal-defect-dog",

  title: "Canine Atrial Septal Defect",

  description:
    "A congenital cardiac defect characterized by an abnormal communication between the left and right atria, resulting in left-to-right shunting, right heart volume overload, and progressive pulmonary overcirculation.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Atrial Septal Defect",
    "ASD",
    "Congenital Atrial Septal Defect",
  ],

  overview:
    "Atrial septal defect (ASD) is an uncommon congenital heart disease in dogs. Most defects are of the ostium secundum type. Left-to-right shunting causes right atrial and right ventricular volume overload with increased pulmonary blood flow. Small defects may remain clinically silent, whereas larger defects may result in exercise intolerance, arrhythmias, right-sided congestive heart failure, pulmonary hypertension, and in advanced cases reversal of shunt direction (Eisenmenger syndrome).",

  clinicalProblems: [

    "Left-to-right atrial shunt",
    "Right atrial enlargement",
    "Right ventricular dilation",
    "Pulmonary overcirculation",
    "Exercise intolerance",
    "Atrial arrhythmias",
    "Right-sided congestive heart failure",
    "Pulmonary hypertension"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, murmur characteristics, exercise intolerance, and signs of right-sided heart failure."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm atrial septal defect using echocardiography and determine shunt direction and pulmonary pressures."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Treat congestive heart failure and clinically significant arrhythmias while evaluating candidacy for defect closure."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor pulmonary hypertension, right heart enlargement, and progression of heart failure."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Provide long-term cardiac monitoring and consider interventional closure in suitable patients."
    }

  ],

  diagnostics: [

    {
      id: "echocardiography",
      name: "Echocardiography with Color Doppler",
      priority: "Essential",
      reason:
        "Confirms atrial septal defect, evaluates defect size, and determines shunt direction."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Assesses right heart enlargement and pulmonary vascular changes."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Recommended",
      reason:
        "Detects right atrial enlargement and atrial arrhythmias."
    },

    {
      id: "blood-pressure",
      name: "Blood Pressure Measurement",
      priority: "Recommended",
      reason:
        "Evaluates systemic cardiovascular status."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Assesses overall health before intervention."
    }

  ],

  drugCategories: [

    {
      category: "Loop Diuretic",
      indication: "Right-sided congestive heart failure",
      reason: "Controls venous congestion and ascites."
    },

    {
      category: "ACE Inhibitor",
      indication: "Congestive heart failure",
      reason: "Reduces cardiac workload."
    },

    {
      category: "Positive Inotrope",
      indication: "Cardiac dysfunction",
      reason: "Supports myocardial performance."
    },

    {
      category: "Antiarrhythmic",
      indication: "Atrial arrhythmias",
      reason: "Controls clinically significant rhythm disturbances."
    }

  ],

  recommendedDrugs: [

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
      drugId: "pimobendan",
      priority: "Adjunctive",
      category: "Positive Inotrope",
    },

    {
      drugId: "diltiazem",
      priority: "Adjunctive",
      category: "Antiarrhythmic",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation if clinically indicated.",
    "Treat right-sided congestive heart failure.",
    "Control clinically significant atrial arrhythmias.",
    "Restrict strenuous exercise until cardiovascular status is stable.",
    "Monitor oxygenation and perfusion."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Young dog", weight: 25 },

      { finding: "Exercise intolerance", weight: 25 },

      { finding: "Poor growth", weight: 20 },

    ],

    clinicalSigns: [

      { finding: "Right-sided systolic murmur", weight: 35 },

      { finding: "Fixed splitting of S2", weight: 30 },

      { finding: "Jugular venous distension", weight: 25 },

      { finding: "Ascites", weight: 30 },

    ],

    biochemistry: [

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Left-to-right atrial shunt on Doppler", weight: 50 },

      { finding: "Right atrial enlargement", weight: 45 },

      { finding: "Right ventricular enlargement", weight: 40 },

      { finding: "Atrial septal defect identified on echocardiography", weight: 50 },

    ],

    against: [

      { finding: "Normal interatrial septum", weight: -50 },

      { finding: "No atrial shunt", weight: -45 },

      { finding: "Alternative congenital heart disease confirmed", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"echo",
      parameter:
        "Echocardiography",
      frequency:
        "Every 6–12 months",
      reason:
        "Monitors shunt severity, right heart enlargement, and pulmonary hypertension."
    },

    {
      id:"ecg",
      parameter:
        "Electrocardiography",
      frequency:
        "During follow-up",
      reason:
        "Detects atrial arrhythmias."
    },

    {
      id:"clinical",
      parameter:
        "Exercise tolerance and signs of heart failure",
      frequency:
        "Every recheck",
      reason:
        "Evaluates disease progression."
    }

  ],

  precautions: [

    {
      id:"pulmonary-hypertension",
      title:
        "Monitor for Pulmonary Hypertension",
      description:
        "Progressive pulmonary hypertension may eventually reverse shunt direction and worsen prognosis."
    },

    {
      id:"closure",
      title:
        "Closure Depends on Defect Size",
      description:
        "Interventional or surgical closure may be appropriate for selected dogs with significant left-to-right shunts."
    }

  ],

  prognosis:
    "Small atrial septal defects generally have an excellent prognosis. Larger defects may progressively cause right-sided cardiac enlargement, pulmonary hypertension, and congestive heart failure if left untreated. Prognosis is favorable when appropriately managed before irreversible pulmonary vascular disease develops.",

  strengtheningEvidence: [

    "Left-to-right atrial shunt",

    "Right atrial enlargement",

    "Right ventricular enlargement",

    "Atrial septal defect on echocardiography",

    "Pulmonary overcirculation",

    "Young dog"

  ],

  weakeningEvidence: [

    "Normal interatrial septum",

    "No atrial shunt",

    "Normal echocardiography",

    "Alternative congenital heart disease",

    "No right heart enlargement"

  ],

  classicFindings: [

    "Young dog",

    "Atrial septal defect",

    "Right atrial enlargement",

    "Right ventricular enlargement",

    "Left-to-right shunt",

    "Pulmonary overcirculation"

  ],

  ruleOutFindings: [

    "Ventricular septal defect",

    "Patent ductus arteriosus",

    "Tricuspid dysplasia",

    "Pulmonic stenosis",

    "Tetralogy of Fallot"

  ],

};