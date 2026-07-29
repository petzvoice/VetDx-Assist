import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineMitralValveDysplasia: DiseaseCard = {
  id: "canine-mitral-valve-dysplasia-dog",

  title: "Canine Mitral Valve Dysplasia",

  description:
    "A congenital malformation of the mitral valve resulting in mitral regurgitation, left atrial enlargement, left ventricular volume overload, and progressive left-sided congestive heart failure.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Mitral Valve Dysplasia",
    "Congenital Mitral Dysplasia",
    "Congenital Mitral Regurgitation",
  ],

  overview:
    "Canine mitral valve dysplasia is a congenital defect involving abnormal development of the mitral valve leaflets, chordae tendineae, papillary muscles, or annulus. The malformed valve results in mitral regurgitation, progressive left atrial enlargement, left ventricular dilation, pulmonary venous congestion, and eventually left-sided congestive heart failure. Bull Terriers, German Shepherds, Great Danes, and other large breeds are predisposed.",

  clinicalProblems: [

    "Mitral regurgitation",
    "Left atrial enlargement",
    "Left ventricular dilation",
    "Exercise intolerance",
    "Pulmonary edema",
    "Cough",
    "Atrial arrhythmias",
    "Left-sided congestive heart failure"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, respiratory status, murmur intensity, and evidence of congestive heart failure."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm congenital mitral valve abnormalities using echocardiography and assess severity of regurgitation."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Treat congestive heart failure and manage arrhythmias when clinically indicated."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor progression of mitral regurgitation, chamber enlargement, and pulmonary edema."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Provide lifelong monitoring with periodic cardiac imaging and adjustment of medical therapy."
    }

  ],

  diagnostics: [

    {
      id: "echocardiography",
      name: "Echocardiography with Doppler",
      priority: "Essential",
      reason:
        "Confirms mitral valve malformation and evaluates severity of mitral regurgitation."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Evaluates cardiomegaly and pulmonary edema."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Recommended",
      reason:
        "Detects atrial enlargement and supraventricular arrhythmias."
    },

    {
      id: "blood-pressure",
      name: "Blood Pressure Measurement",
      priority: "Recommended",
      reason:
        "Assesses cardiovascular status."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates systemic health before long-term therapy."
    }

  ],

  drugCategories: [

    {
      category: "Loop Diuretic",
      indication: "Pulmonary edema",
      reason: "Controls pulmonary congestion."
    },

    {
      category: "Positive Inotrope",
      indication: "Mitral regurgitation with heart failure",
      reason: "Improves cardiac output."
    },

    {
      category: "ACE Inhibitor",
      indication: "Congestive heart failure",
      reason: "Reduces cardiac workload."
    },

    {
      category: "Antiarrhythmic",
      indication: "Supraventricular arrhythmias",
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
      drugId: "pimobendan",
      priority: "First Line",
      category: "Positive Inotrope",
    },

    {
      drugId: "enalapril",
      priority: "Adjunctive",
      category: "ACE Inhibitor",
    },

    {
      drugId: "diltiazem",
      priority: "Adjunctive",
      category: "Antiarrhythmic",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation for dyspneic patients.",
    "Treat pulmonary edema aggressively.",
    "Reduce stress and minimize physical activity.",
    "Control atrial arrhythmias if present.",
    "Monitor respiratory rate and oxygenation."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Young dog", weight: 25 },

      { finding: "Exercise intolerance", weight: 25 },

      { finding: "Chronic cough", weight: 20 },

    ],

    clinicalSigns: [

      { finding: "Left apical systolic murmur", weight: 50 },

      { finding: "Pulmonary crackles", weight: 35 },

      { finding: "Tachypnea", weight: 30 },

      { finding: "Signs of left-sided heart failure", weight: 40 },

    ],

    biochemistry: [

      { finding: "Mild elevation of cardiac biomarkers", weight: 15 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Mitral valve malformation on echocardiography", weight: 50 },

      { finding: "Severe mitral regurgitation", weight: 50 },

      { finding: "Left atrial enlargement", weight: 45 },

      { finding: "Left ventricular dilation", weight: 40 },

    ],

    against: [

      { finding: "Normal mitral valve", weight: -50 },

      { finding: "No mitral regurgitation", weight: -45 },

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
        "Monitors progression of mitral regurgitation and chamber enlargement."
    },

    {
      id:"respiratory",
      parameter:
        "Resting respiratory rate",
      frequency:
        "Daily at home and every recheck",
      reason:
        "Detects early pulmonary edema."
    },

    {
      id:"ecg",
      parameter:
        "Electrocardiography",
      frequency:
        "During follow-up",
      reason:
        "Detects atrial arrhythmias."
    }

  ],

  precautions: [

    {
      id:"exercise",
      title:
        "Restrict Excessive Exercise",
      description:
        "Avoid strenuous activity in dogs with advanced cardiac enlargement or heart failure."
    },

    {
      id:"breeding",
      title:
        "Do Not Breed Affected Dogs",
      description:
        "Affected dogs should not be used for breeding because the disease is congenital."
    }

  ],

  prognosis:
    "Mild mitral valve dysplasia may remain stable for years. Dogs with severe mitral regurgitation and progressive left-sided congestive heart failure have a guarded prognosis, although appropriate medical management can improve quality of life.",

  strengtheningEvidence: [

    "Left apical systolic murmur",

    "Mitral valve malformation",

    "Mitral regurgitation",

    "Left atrial enlargement",

    "Left ventricular dilation",

    "Pulmonary edema"

  ],

  weakeningEvidence: [

    "Normal mitral valve",

    "No mitral regurgitation",

    "Normal echocardiography",

    "Alternative congenital heart disease",

    "No left atrial enlargement"

  ],

  classicFindings: [

    "Young dog",

    "Left apical systolic murmur",

    "Mitral regurgitation",

    "Left atrial enlargement",

    "Left ventricular dilation",

    "Pulmonary edema"

  ],

  ruleOutFindings: [

    "Degenerative mitral valve disease",

    "Patent ductus arteriosus",

    "Subaortic stenosis",

    "Dilated cardiomyopathy",

    "Ventricular septal defect"

  ],

};