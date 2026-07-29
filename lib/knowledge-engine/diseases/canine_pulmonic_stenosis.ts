import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePulmonicStenosis: DiseaseCard = {
  id: "canine-pulmonic-stenosis-dog",

  title: "Canine Pulmonic Stenosis",

  description:
    "A congenital obstruction of right ventricular outflow causing pressure overload, right ventricular hypertrophy, and reduced pulmonary blood flow.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Pulmonary Stenosis",
    "PS",
    "Right Ventricular Outflow Tract Obstruction",
  ],

  overview:
    "Pulmonic stenosis (PS) is one of the most common congenital heart diseases in dogs. The obstruction is most commonly valvular but may also be subvalvular or supravalvular. Progressive right ventricular pressure overload results in concentric hypertrophy, myocardial ischemia, ventricular arrhythmias, right-sided congestive heart failure, and sudden death in severe cases. Balloon valvuloplasty is the treatment of choice for many dogs with severe valvular pulmonic stenosis.",

  clinicalProblems: [

    "Right ventricular outflow obstruction",
    "Right ventricular hypertrophy",
    "Exercise intolerance",
    "Syncope",
    "Right-sided congestive heart failure",
    "Ventricular arrhythmias",
    "Sudden death",
    "Reduced cardiac output"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, murmur intensity, exercise intolerance, syncope, and evidence of right-sided heart failure."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm pulmonic stenosis with echocardiography and determine stenosis severity using Doppler-derived pressure gradients."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Manage arrhythmias and congestive heart failure while evaluating suitability for balloon valvuloplasty."
    },

    {
      id: "definitive-treatment",
      step: 4,
      title: "Definitive Treatment",
      description:
        "Perform balloon valvuloplasty for appropriate severe valvular pulmonic stenosis cases."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Monitoring",
      description:
        "Monitor pressure gradients, right ventricular function, arrhythmias, and progression of disease."
    }

  ],

  diagnostics: [

    {
      id: "echocardiography",
      name: "Echocardiography with Doppler",
      priority: "Essential",
      reason:
        "Confirms pulmonic stenosis, measures pressure gradient, and evaluates right ventricular remodeling."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Essential",
      reason:
        "Detects right ventricular enlargement and ventricular arrhythmias."
    },

    {
      id: "thoracic-radiography",
      name: "Thoracic Radiography",
      priority: "Recommended",
      reason:
        "Evaluates cardiac enlargement and pulmonary vasculature."
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
        "Evaluates overall health before intervention."
    }

  ],

  drugCategories: [

    {
      category: "Beta Blocker",
      indication: "Moderate to severe pulmonic stenosis",
      reason: "Reduces myocardial oxygen demand and ventricular arrhythmias."
    },

    {
      category: "Loop Diuretic",
      indication: "Right-sided congestive heart failure",
      reason: "Controls fluid accumulation."
    },

    {
      category: "Antiarrhythmic",
      indication: "Ventricular arrhythmias",
      reason: "Treats clinically significant rhythm disturbances."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "atenolol",
      priority: "First Line",
      category: "Beta Blocker",
    },

    {
      drugId: "furosemide",
      priority: "Supportive",
      category: "Loop Diuretic",
    },

    {
      drugId: "sotalol",
      priority: "Adjunctive",
      category: "Antiarrhythmic",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation if clinically indicated.",
    "Treat right-sided congestive heart failure before intervention.",
    "Control ventricular arrhythmias when present.",
    "Restrict strenuous exercise until definitive treatment."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Young dog", weight: 30 },

      { finding: "Exercise intolerance", weight: 30 },

      { finding: "Syncope", weight: 35 },

    ],

    clinicalSigns: [

      { finding: "Left basilar systolic murmur", weight: 50 },

      { finding: "Jugular distension", weight: 25 },

      { finding: "Right-sided heart failure", weight: 30 },

      { finding: "Weak femoral pulses", weight: 20 },

    ],

    biochemistry: [

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Pulmonic valve stenosis on echocardiography", weight: 50 },

      { finding: "Elevated Doppler pressure gradient", weight: 50 },

      { finding: "Right ventricular hypertrophy", weight: 45 },

      { finding: "Post-stenotic pulmonary artery dilation", weight: 35 },

    ],

    against: [

      { finding: "Normal pulmonic valve", weight: -50 },

      { finding: "No Doppler pressure gradient", weight: -45 },

      { finding: "Alternative congenital heart disease confirmed", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"echo",
      parameter:
        "Echocardiography",
      frequency:
        "Every 6–12 months or after intervention",
      reason:
        "Evaluates pressure gradients and right ventricular function."
    },

    {
      id:"ecg",
      parameter:
        "Electrocardiography",
      frequency:
        "During follow-up",
      reason:
        "Detects ventricular arrhythmias."
    },

    {
      id:"clinical",
      parameter:
        "Exercise tolerance and syncope",
      frequency:
        "Every recheck",
      reason:
        "Monitors disease progression."
    }

  ],

  precautions: [

    {
      id:"balloon",
      title:
        "Balloon Valvuloplasty",
      description:
        "Recommended for dogs with severe valvular pulmonic stenosis and appropriate valve anatomy."
    },

    {
      id:"exercise",
      title:
        "Restrict Vigorous Exercise",
      description:
        "Dogs with severe pulmonic stenosis have an increased risk of syncope and sudden cardiac death during strenuous activity."
    }

  ],

  prognosis:
    "Mild pulmonic stenosis generally carries an excellent prognosis. Dogs with severe disease have a guarded prognosis without intervention but often improve significantly following successful balloon valvuloplasty.",

  strengtheningEvidence: [

    "Left basilar systolic murmur",

    "Pulmonic valve stenosis",

    "Elevated Doppler pressure gradient",

    "Right ventricular hypertrophy",

    "Exercise intolerance",

    "Young dog"

  ],

  weakeningEvidence: [

    "Normal pulmonic valve",

    "No pressure gradient",

    "Normal echocardiography",

    "Alternative congenital defect",

    "No systolic murmur"

  ],

  classicFindings: [

    "Young dog",

    "Left basilar systolic murmur",

    "Right ventricular hypertrophy",

    "Pulmonic valve stenosis",

    "Elevated Doppler gradient",

    "Exercise intolerance"

  ],

  ruleOutFindings: [

    "Patent ductus arteriosus",

    "Subaortic stenosis",

    "Tetralogy of Fallot",

    "Tricuspid dysplasia",

    "Ventricular septal defect"

  ],

};