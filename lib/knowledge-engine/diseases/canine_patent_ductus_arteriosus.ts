import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePatentDuctusArteriosus: DiseaseCard = {
  id: "canine-patent-ductus-arteriosus-dog",

  title: "Canine Patent Ductus Arteriosus",

  description:
    "A common congenital cardiac defect in which the ductus arteriosus fails to close after birth, resulting in persistent left-to-right shunting and progressive volume overload of the left heart.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Patent Ductus Arteriosus",
    "PDA",
    "Persistent Ductus Arteriosus",
  ],

  overview:
    "Patent ductus arteriosus (PDA) is one of the most common congenital heart diseases in dogs. Failure of ductal closure allows blood to flow continuously from the aorta into the pulmonary artery, producing pulmonary overcirculation and left-sided volume overload. If untreated, progressive left ventricular enlargement, congestive heart failure, pulmonary hypertension, or reversal of shunt direction (Eisenmenger syndrome) may occur. Early surgical or transcatheter closure provides an excellent prognosis.",

  clinicalProblems: [

    "Continuous heart murmur",
    "Left ventricular volume overload",
    "Left atrial enlargement",
    "Congestive heart failure",
    "Exercise intolerance",
    "Pulmonary edema",
    "Pulmonary hypertension",
    "Eisenmenger syndrome"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Evaluate cardiovascular status, presence of heart failure, murmur characteristics, and peripheral pulse quality."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm PDA using echocardiography and determine shunt direction, chamber enlargement, and pulmonary hypertension."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Stabilization",
      description:
        "Stabilize congestive heart failure before definitive ductal closure if required."
    },

    {
      id: "definitive-treatment",
      step: 4,
      title: "Definitive Treatment",
      description:
        "Perform surgical ligation or transcatheter occlusion when appropriate."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Monitoring",
      description:
        "Monitor cardiac remodeling, residual shunting, and resolution of heart failure after PDA closure."
    }

  ],

  diagnostics: [

    {
      id: "echocardiography",
      name: "Echocardiography with Doppler",
      priority: "Essential",
      reason:
        "Confirms PDA, evaluates shunt direction, and assesses cardiac remodeling."
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
        "Assesses rhythm abnormalities and chamber enlargement."
    },

    {
      id: "blood-pressure",
      name: "Blood Pressure Measurement",
      priority: "Recommended",
      reason:
        "Evaluates systemic perfusion before intervention."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Assesses overall patient health before anesthesia or intervention."
    }

  ],

  drugCategories: [

    {
      category: "Loop Diuretic",
      indication: "Congestive heart failure",
      reason: "Reduces pulmonary edema."
    },

    {
      category: "Positive Inotrope",
      indication: "Reduced cardiac function",
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
      priority: "Supportive",
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
    "Treat pulmonary edema before anesthesia.",
    "Stabilize congestive heart failure medically.",
    "Plan definitive PDA closure once stable."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Young dog", weight: 30 },

      { finding: "Exercise intolerance", weight: 20 },

      { finding: "Poor growth", weight: 20 },

    ],

    clinicalSigns: [

      { finding: "Continuous machinery murmur", weight: 50 },

      { finding: "Bounding femoral pulses", weight: 45 },

      { finding: "Hyperdynamic precordium", weight: 30 },

      { finding: "Pulmonary crackles", weight: 30 },

    ],

    biochemistry: [

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Left-to-right ductal flow on Doppler", weight: 50 },

      { finding: "Left atrial enlargement", weight: 40 },

      { finding: "Left ventricular enlargement", weight: 40 },

      { finding: "Continuous turbulent ductal flow", weight: 45 },

    ],

    against: [

      { finding: "Normal echocardiogram", weight: -50 },

      { finding: "No ductal flow identified", weight: -45 },

      { finding: "Alternative congenital defect confirmed", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"echo",
      parameter:
        "Repeat echocardiography",
      frequency:
        "After intervention and during follow-up",
      reason:
        "Evaluates cardiac remodeling and residual shunting."
    },

    {
      id:"respiratory",
      parameter:
        "Respiratory rate and effort",
      frequency:
        "Daily if heart failure is present",
      reason:
        "Detects worsening pulmonary edema."
    },

    {
      id:"cardiac",
      parameter:
        "Cardiac auscultation",
      frequency:
        "Every recheck examination",
      reason:
        "Assesses persistence or resolution of murmurs."
    }

  ],

  precautions: [

    {
      id:"closure",
      title:
        "Early Closure is Recommended",
      description:
        "Closure before development of irreversible cardiac remodeling provides the best long-term outcome."
    },

    {
      id:"reverse-shunt",
      title:
        "Do Not Close Reverse PDA",
      description:
        "Dogs with right-to-left shunting due to severe pulmonary hypertension should not undergo ductal closure."
    }

  ],

  prognosis:
    "Excellent when PDA is diagnosed early and successfully closed before irreversible myocardial remodeling develops. Prognosis is guarded to poor in dogs with untreated congestive heart failure or Eisenmenger syndrome.",

  strengtheningEvidence: [

    "Continuous machinery murmur",

    "Bounding pulses",

    "Left-to-right ductal flow",

    "Left atrial enlargement",

    "Left ventricular enlargement",

    "Young dog"

  ],

  weakeningEvidence: [

    "Normal echocardiography",

    "No ductal shunt",

    "Alternative congenital heart disease",

    "Normal cardiac examination",

    "No continuous murmur"

  ],

  classicFindings: [

    "Continuous machinery murmur",

    "Bounding femoral pulses",

    "Young dog",

    "Left heart enlargement",

    "Pulmonary overcirculation",

    "Doppler-confirmed PDA"

  ],

  ruleOutFindings: [

    "Pulmonic stenosis",

    "Subaortic stenosis",

    "Ventricular septal defect",

    "Aortic insufficiency",

    "Reverse PDA"

  ],

};