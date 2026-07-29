import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineDegenerativeMitralValveDisease: DiseaseCard = {
  id: "canine-degenerative-mitral-valve-disease-dog",

  title: "Canine Degenerative Mitral Valve Disease",

  description:
    "A progressive myxomatous degeneration of the mitral valve causing mitral regurgitation, cardiac remodeling, and eventual congestive heart failure in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Degenerative Mitral Valve Disease",
    "DMVD",
    "Myxomatous Mitral Valve Disease",
    "Mitral Valve Endocardiosis",
    "Chronic Mitral Valve Disease",
  ],

  overview:
    "Canine degenerative mitral valve disease (DMVD) is the most common acquired cardiac disease in dogs, particularly affecting small and older breeds. Progressive degeneration of the mitral valve leaflets and chordae tendineae results in mitral regurgitation, left atrial enlargement, left ventricular volume overload, and eventually left-sided congestive heart failure. Disease progression is gradual, although acute deterioration may occur following chordae tendineae rupture or onset of atrial fibrillation.",

  clinicalProblems: [

    "Heart murmur",
    "Mitral regurgitation",
    "Exercise intolerance",
    "Cough",
    "Pulmonary edema",
    "Left atrial enlargement",
    "Congestive heart failure",
    "Syncope"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Staging",
      description:
        "Determine ACVIM disease stage, assess clinical signs, murmur intensity, and evaluate for congestive heart failure."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm mitral valve degeneration and assess cardiac remodeling using imaging and echocardiography."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Initiate stage-appropriate therapy to delay progression and manage congestive heart failure when present."
    },

    {
      id: "monitor-progression",
      step: 4,
      title: "Monitor Disease Progression",
      description:
        "Monitor cardiac enlargement, respiratory rate, renal function, and response to therapy."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Provide lifelong monitoring, medication adjustment, and owner education regarding progression to heart failure."
    }

  ],

  diagnostics: [

    {
      id: "auscultation",
      name: "Cardiac Auscultation",
      priority: "Essential",
      reason:
        "Detects characteristic left apical systolic heart murmur."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Essential",
      reason:
        "Confirms mitral valve degeneration, mitral regurgitation, and cardiac remodeling."
    },

    {
      id: "thoracic-radiography",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Evaluates cardiomegaly and pulmonary edema."
    },

    {
      id: "ntprobnp",
      name: "NT-proBNP",
      priority: "Recommended",
      reason:
        "Supports assessment of cardiac disease severity."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Recommended",
      reason:
        "Identifies arrhythmias associated with advanced disease."
    }

  ],

  drugCategories: [

    {
      category: "Positive Inotrope",
      indication: "Stage B2 and CHF",
      reason:
        "Improves cardiac performance and delays progression."
    },

    {
      category: "ACE Inhibitor",
      indication: "Congestive heart failure",
      reason:
        "Reduces neurohormonal activation and cardiac workload."
    },

    {
      category: "Loop Diuretic",
      indication: "Pulmonary edema",
      reason:
        "Reduces pulmonary congestion."
    },

    {
      category: "Aldosterone Antagonist",
      indication: "Advanced heart failure",
      reason:
        "Provides additional neurohormonal blockade."
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
      drugId: "spironolactone",
      priority: "Adjunctive",
      category: "Aldosterone Antagonist",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation if pulmonary edema is present.",
    "Minimize stress during respiratory distress.",
    "Treat pulmonary edema with appropriate diuretic therapy.",
    "Stabilize severe arrhythmias when present."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Older small-breed dog", weight: 35 },

      { finding: "Exercise intolerance", weight: 30 },

      { finding: "Chronic cough", weight: 25 },

      { finding: "Known heart murmur", weight: 35 },

    ],

    clinicalSigns: [

      { finding: "Left apical systolic murmur", weight: 50 },

      { finding: "Tachypnea", weight: 30 },

      { finding: "Pulmonary crackles", weight: 35 },

      { finding: "Syncope", weight: 20 },

    ],

    biochemistry: [

      { finding: "Elevated NT-proBNP", weight: 35 },

      { finding: "Azotemia secondary to CHF therapy", weight: 15 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Mitral valve degeneration on echocardiography", weight: 50 },

      { finding: "Left atrial enlargement", weight: 45 },

      { finding: "Mitral regurgitation", weight: 50 },

      { finding: "Cardiomegaly on thoracic radiographs", weight: 35 },

    ],

    against: [

      { finding: "Normal echocardiogram", weight: -50 },

      { finding: "No mitral regurgitation", weight: -45 },

      { finding: "Alternative cardiac disease diagnosed", weight: -30 },

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
        "Detects early development of pulmonary edema."
    },

    {
      id:"renal",
      parameter:
        "Renal function and electrolytes",
      frequency:
        "After medication adjustments and periodically",
      reason:
        "Monitors adverse effects of cardiac medications."
    },

    {
      id:"echo",
      parameter:
        "Echocardiographic progression",
      frequency:
        "Every 6–12 months or as clinically indicated",
      reason:
        "Assesses progression of cardiac remodeling."
    }

  ],

  precautions: [

    {
      id:"fluid",
      title:
        "Avoid Excessive Fluid Administration",
      description:
        "Intravenous fluids may precipitate or worsen pulmonary edema."
    },

    {
      id:"renal",
      title:
        "Monitor Kidney Function",
      description:
        "Renal function should be monitored during long-term diuretic and ACE inhibitor therapy."
    }

  ],

  prognosis:
    "Prognosis varies with ACVIM stage. Many dogs remain asymptomatic for years, while progression to congestive heart failure significantly worsens long-term survival. Early diagnosis and guideline-directed therapy improve quality of life and survival.",

  strengtheningEvidence: [

    "Left apical systolic murmur",

    "Mitral regurgitation",

    "Left atrial enlargement",

    "Mitral valve degeneration on echocardiography",

    "Cardiomegaly",

    "Elevated NT-proBNP"

  ],

  weakeningEvidence: [

    "Normal echocardiography",

    "No mitral regurgitation",

    "Normal cardiac silhouette",

    "No cardiac murmur",

    "Alternative cardiac diagnosis"

  ],

  classicFindings: [

    "Older small-breed dog",

    "Left apical systolic murmur",

    "Mitral regurgitation",

    "Left atrial enlargement",

    "Progressive cardiomegaly",

    "Pulmonary edema in advanced disease"

  ],

  ruleOutFindings: [

    "Dilated cardiomyopathy",

    "Congenital mitral valve dysplasia",

    "Infective endocarditis",

    "Pericardial effusion",

    "Primary respiratory disease"

  ],

};