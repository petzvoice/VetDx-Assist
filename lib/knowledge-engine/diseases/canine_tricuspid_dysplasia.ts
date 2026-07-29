import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineTricuspidDysplasia: DiseaseCard = {
  id: "canine-tricuspid-dysplasia-dog",

  title: "Canine Tricuspid Dysplasia",

  description:
    "A congenital malformation of the tricuspid valve resulting in tricuspid regurgitation, right atrial enlargement, right ventricular volume overload, and right-sided congestive heart failure.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Tricuspid Valve Dysplasia",
    "Congenital Tricuspid Dysplasia",
    "Tricuspid Regurgitation (Congenital)",
  ],

  overview:
    "Canine tricuspid dysplasia is a congenital malformation involving one or more components of the tricuspid valve apparatus including the valve leaflets, chordae tendineae, papillary muscles, or valve annulus. The resulting tricuspid regurgitation causes progressive right atrial enlargement, right ventricular dilation, venous congestion, atrial arrhythmias, and right-sided congestive heart failure. Labrador Retrievers are among the most commonly affected breeds.",

  clinicalProblems: [

    "Tricuspid regurgitation",
    "Right atrial enlargement",
    "Right ventricular dilation",
    "Exercise intolerance",
    "Ascites",
    "Jugular venous distension",
    "Atrial arrhythmias",
    "Right-sided congestive heart failure"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Evaluate cardiovascular stability, evidence of right-sided heart failure, exercise intolerance, and cardiac murmur."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm congenital tricuspid valve abnormalities using echocardiography and assess severity of regurgitation."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Control right-sided congestive heart failure and manage atrial arrhythmias when present."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor progression of chamber enlargement, venous congestion, and cardiac rhythm abnormalities."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Provide lifelong cardiac monitoring and adjust therapy according to progression of right-sided heart failure."
    }

  ],

  diagnostics: [

    {
      id: "echocardiography",
      name: "Echocardiography with Doppler",
      priority: "Essential",
      reason:
        "Confirms tricuspid valve malformation and evaluates severity of regurgitation."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Essential",
      reason:
        "Detects atrial enlargement and supraventricular arrhythmias."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Recommended",
      reason:
        "Evaluates cardiomegaly and evidence of right-sided heart disease."
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
        "Assesses systemic health and establishes baseline values."
    }

  ],

  drugCategories: [

    {
      category: "Loop Diuretic",
      indication: "Right-sided congestive heart failure",
      reason: "Controls ascites and systemic venous congestion."
    },

    {
      category: "ACE Inhibitor",
      indication: "Congestive heart failure",
      reason: "Reduces neurohormonal activation and cardiac workload."
    },

    {
      category: "Positive Inotrope",
      indication: "Cardiac dysfunction",
      reason: "Supports myocardial performance."
    },

    {
      category: "Antiarrhythmic",
      indication: "Supraventricular arrhythmias",
      reason: "Controls clinically significant atrial arrhythmias."
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

    "Provide oxygen supplementation if respiratory compromise is present.",
    "Treat right-sided congestive heart failure.",
    "Control clinically significant atrial arrhythmias.",
    "Restrict strenuous exercise during periods of decompensation.",
    "Monitor fluid balance and body weight."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Young Labrador Retriever", weight: 30 },

      { finding: "Exercise intolerance", weight: 25 },

      { finding: "Progressive abdominal distension", weight: 30 },

    ],

    clinicalSigns: [

      { finding: "Right apical systolic murmur", weight: 50 },

      { finding: "Jugular venous distension", weight: 35 },

      { finding: "Ascites", weight: 40 },

      { finding: "Right-sided heart failure", weight: 40 },

    ],

    biochemistry: [

      { finding: "Mild hepatic enzyme elevation", weight: 15 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Tricuspid valve malformation on echocardiography", weight: 50 },

      { finding: "Severe tricuspid regurgitation", weight: 50 },

      { finding: "Right atrial enlargement", weight: 40 },

      { finding: "Right ventricular dilation", weight: 35 },

    ],

    against: [

      { finding: "Normal tricuspid valve", weight: -50 },

      { finding: "No tricuspid regurgitation", weight: -45 },

      { finding: "Alternative congenital cardiac defect confirmed", weight: -30 },

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
        "Monitors progression of tricuspid regurgitation and chamber enlargement."
    },

    {
      id:"ecg",
      parameter:
        "Electrocardiography",
      frequency:
        "At follow-up visits",
      reason:
        "Detects atrial arrhythmias."
    },

    {
      id:"clinical",
      parameter:
        "Body weight, ascites and exercise tolerance",
      frequency:
        "Every recheck",
      reason:
        "Assesses progression of right-sided congestive heart failure."
    }

  ],

  precautions: [

    {
      id:"exercise",
      title:
        "Limit Vigorous Exercise",
      description:
        "Dogs with advanced disease may decompensate during strenuous activity."
    },

    {
      id:"breeding",
      title:
        "Do Not Breed Affected Dogs",
      description:
        "Affected dogs should not be used for breeding because of the inherited nature of the disease."
    }

  ],

  prognosis:
    "Dogs with mild tricuspid dysplasia may remain asymptomatic for years. Moderate to severe disease has a guarded prognosis because progressive tricuspid regurgitation can lead to right-sided congestive heart failure and atrial arrhythmias.",

  strengtheningEvidence: [

    "Right apical systolic murmur",

    "Severe tricuspid regurgitation",

    "Right atrial enlargement",

    "Right ventricular dilation",

    "Ascites",

    "Congenital valve abnormality"

  ],

  weakeningEvidence: [

    "Normal tricuspid valve",

    "No tricuspid regurgitation",

    "Normal echocardiography",

    "Alternative congenital heart disease",

    "No right heart enlargement"

  ],

  classicFindings: [

    "Young Labrador Retriever",

    "Right apical systolic murmur",

    "Jugular venous distension",

    "Ascites",

    "Right atrial enlargement",

    "Tricuspid regurgitation"

  ],

  ruleOutFindings: [

    "Pulmonic stenosis",

    "Patent ductus arteriosus",

    "Subaortic stenosis",

    "Dilated cardiomyopathy",

    "Pericardial effusion"

  ],

};