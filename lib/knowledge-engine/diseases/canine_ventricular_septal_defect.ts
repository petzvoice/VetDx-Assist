import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineVentricularSeptalDefect: DiseaseCard = {
  id: "canine-ventricular-septal-defect-dog",

  title: "Canine Ventricular Septal Defect",

  description:
    "A congenital cardiac defect characterized by an abnormal communication between the left and right ventricles resulting in left-to-right shunting, pulmonary overcirculation, and progressive cardiac remodeling.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Ventricular Septal Defect",
    "VSD",
    "Congenital Ventricular Septal Defect",
  ],

  overview:
    "Ventricular septal defect (VSD) is one of the most common congenital cardiac defects in dogs. Most defects are located in the membranous interventricular septum. Small restrictive defects may remain asymptomatic throughout life, whereas moderate to large defects produce significant left-to-right shunting, pulmonary overcirculation, left atrial and left ventricular enlargement, congestive heart failure, pulmonary hypertension, and in advanced cases reversal of shunt direction (Eisenmenger syndrome).",

  clinicalProblems: [

    "Left-to-right shunt",
    "Left atrial enlargement",
    "Left ventricular volume overload",
    "Pulmonary overcirculation",
    "Exercise intolerance",
    "Congestive heart failure",
    "Pulmonary hypertension",
    "Eisenmenger syndrome"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, murmur characteristics, respiratory status, and evidence of congestive heart failure."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm ventricular septal defect with echocardiography and determine defect size, shunt direction, and pulmonary pressures."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Treat congestive heart failure and pulmonary edema while determining suitability for defect closure."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor progression of pulmonary hypertension, cardiac enlargement, and shunt direction."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Provide regular cardiac monitoring and consider interventional or surgical closure when appropriate."
    }

  ],

  diagnostics: [

    {
      id: "echocardiography",
      name: "Echocardiography with Color Doppler",
      priority: "Essential",
      reason:
        "Confirms ventricular septal defect, measures defect size, and identifies shunt direction."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Evaluates cardiomegaly and pulmonary vascular changes."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Recommended",
      reason:
        "Assesses chamber enlargement and detects arrhythmias."
    },

    {
      id: "blood-pressure",
      name: "Blood Pressure Measurement",
      priority: "Recommended",
      reason:
        "Assesses systemic cardiovascular status."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates overall patient health before intervention."
    }

  ],

  drugCategories: [

    {
      category: "Loop Diuretic",
      indication: "Congestive heart failure",
      reason: "Controls pulmonary edema."
    },

    {
      category: "Positive Inotrope",
      indication: "Cardiac dysfunction",
      reason: "Improves cardiac output."
    },

    {
      category: "ACE Inhibitor",
      indication: "Heart failure",
      reason: "Reduces cardiac workload."
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
      priority: "Adjunctive",
      category: "Positive Inotrope",
    },

    {
      drugId: "enalapril",
      priority: "Adjunctive",
      category: "ACE Inhibitor",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation if respiratory distress is present.",
    "Treat pulmonary edema when present.",
    "Stabilize congestive heart failure before intervention.",
    "Restrict strenuous exercise in symptomatic dogs.",
    "Monitor oxygenation and perfusion."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Young dog", weight: 25 },

      { finding: "Exercise intolerance", weight: 25 },

      { finding: "Poor growth", weight: 20 },

    ],

    clinicalSigns: [

      { finding: "Right sternal systolic murmur", weight: 50 },

      { finding: "Tachypnea", weight: 25 },

      { finding: "Pulmonary crackles", weight: 30 },

      { finding: "Exercise intolerance", weight: 30 },

    ],

    biochemistry: [

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Left-to-right interventricular shunt on Doppler", weight: 50 },

      { finding: "Membranous septal defect", weight: 45 },

      { finding: "Left atrial enlargement", weight: 35 },

      { finding: "Left ventricular enlargement", weight: 35 },

    ],

    against: [

      { finding: "Normal interventricular septum", weight: -50 },

      { finding: "No interventricular shunt", weight: -45 },

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
        "Monitors shunt severity, chamber enlargement, and pulmonary hypertension."
    },

    {
      id:"respiratory",
      parameter:
        "Respiratory rate and effort",
      frequency:
        "Daily if heart failure is present",
      reason:
        "Detects progression of pulmonary edema."
    },

    {
      id:"clinical",
      parameter:
        "Exercise tolerance",
      frequency:
        "Every recheck",
      reason:
        "Assesses disease progression."
    }

  ],

  precautions: [

    {
      id:"pulmonary-hypertension",
      title:
        "Monitor for Pulmonary Hypertension",
      description:
        "Progressive pulmonary hypertension may result in Eisenmenger syndrome with right-to-left shunting."
    },

    {
      id:"closure",
      title:
        "Intervention Depends on Defect Size",
      description:
        "Large symptomatic defects may benefit from surgical or transcatheter closure, whereas many small restrictive defects require monitoring only."
    }

  ],

  prognosis:
    "Small restrictive ventricular septal defects generally carry an excellent prognosis. Moderate to large defects have a variable prognosis depending on shunt severity, development of pulmonary hypertension, and response to medical or interventional treatment.",

  strengtheningEvidence: [

    "Right sternal systolic murmur",

    "Left-to-right interventricular shunt",

    "Membranous ventricular septal defect",

    "Left atrial enlargement",

    "Left ventricular enlargement",

    "Young dog"

  ],

  weakeningEvidence: [

    "Normal interventricular septum",

    "No ventricular shunt",

    "Normal echocardiography",

    "Alternative congenital heart disease",

    "No cardiac murmur"

  ],

  classicFindings: [

    "Young dog",

    "Right sternal systolic murmur",

    "Membranous ventricular septal defect",

    "Left-to-right shunt",

    "Left heart enlargement",

    "Pulmonary overcirculation"

  ],

  ruleOutFindings: [

    "Patent ductus arteriosus",

    "Subaortic stenosis",

    "Pulmonic stenosis",

    "Atrial septal defect",

    "Tetralogy of Fallot"

  ],

};