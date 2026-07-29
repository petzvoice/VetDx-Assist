import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineTetralogyOfFallot: DiseaseCard = {
  id: "canine-tetralogy-of-fallot-dog",

  title: "Canine Tetralogy of Fallot",

  description:
    "A cyanotic congenital heart disease consisting of pulmonic stenosis, ventricular septal defect, overriding aorta, and right ventricular hypertrophy resulting in right-to-left shunting and systemic hypoxemia.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Tetralogy of Fallot",
    "TOF",
    "Cyanotic Congenital Heart Disease",
  ],

  overview:
    "Tetralogy of Fallot (TOF) is an uncommon but severe congenital cardiac defect characterized by four anatomical abnormalities: pulmonic stenosis, ventricular septal defect, overriding aorta, and right ventricular hypertrophy. Severe right ventricular outflow obstruction results in right-to-left shunting across the ventricular septal defect, causing systemic hypoxemia, cyanosis, polycythemia, exercise intolerance, syncope, and poor growth. Prognosis depends on the severity of pulmonic stenosis and degree of hypoxemia.",

  clinicalProblems: [

    "Pulmonic stenosis",
    "Ventricular septal defect",
    "Right-to-left shunt",
    "Systemic hypoxemia",
    "Cyanosis",
    "Polycythemia",
    "Exercise intolerance",
    "Syncope"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess oxygenation, cardiovascular stability, cyanosis, exercise intolerance, and signs of hypoxemia."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm the four characteristic cardiac abnormalities using echocardiography and Doppler studies."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Manage hypoxemia, polycythemia, and clinical signs while evaluating suitability for surgical intervention."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor oxygenation, packed cell volume, arrhythmias, and progression of right ventricular dysfunction."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Provide lifelong monitoring and supportive care with consideration of referral for advanced cardiac procedures."
    }

  ],

  diagnostics: [

    {
      id: "echocardiography",
      name: "Echocardiography with Doppler",
      priority: "Essential",
      reason:
        "Confirms all four components of Tetralogy of Fallot and evaluates shunt severity."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Evaluates cardiac silhouette and pulmonary vasculature."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Recommended",
      reason:
        "Detects right ventricular enlargement and arrhythmias."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Essential",
      reason:
        "Identifies secondary polycythemia caused by chronic hypoxemia."
    },

    {
      id: "pulse-oximetry",
      name: "Pulse Oximetry / Arterial Blood Gas",
      priority: "Recommended",
      reason:
        "Assesses severity of systemic hypoxemia."
    }

  ],

  drugCategories: [

    {
      category: "Beta Blocker",
      indication: "Dynamic right ventricular outflow obstruction",
      reason: "Reduces myocardial oxygen demand and improves ventricular filling."
    },

    {
      category: "Antithrombotic",
      indication: "Marked polycythemia",
      reason: "Reduces thromboembolic risk in selected patients."
    },

    {
      category: "Fluid Therapy",
      indication: "Hypovolemia",
      reason: "Maintains adequate tissue perfusion while avoiding overload."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "atenolol",
      priority: "First Line",
      category: "Beta Blocker",
    },

    {
      drugId: "clopidogrel",
      priority: "Adjunctive",
      category: "Antiplatelet",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation when hypoxemic.",
    "Minimize stress and excitement.",
    "Correct dehydration cautiously.",
    "Treat severe hyperviscosity if present.",
    "Restrict strenuous exercise."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Exercise intolerance", weight: 35 },

      { finding: "Syncope", weight: 35 },

      { finding: "Poor growth", weight: 25 },

    ],

    clinicalSigns: [

      { finding: "Cyanosis", weight: 50 },

      { finding: "Right basilar systolic murmur", weight: 40 },

      { finding: "Weakness after exercise", weight: 35 },

      { finding: "Clubbing of digits", weight: 20 },

    ],

    biochemistry: [

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Pulmonic stenosis", weight: 45 },

      { finding: "Ventricular septal defect", weight: 45 },

      { finding: "Overriding aorta", weight: 45 },

      { finding: "Right ventricular hypertrophy", weight: 45 },

      { finding: "Right-to-left shunt", weight: 50 },

      { finding: "Polycythemia", weight: 35 },

    ],

    against: [

      { finding: "Normal cardiac anatomy", weight: -50 },

      { finding: "No ventricular septal defect", weight: -40 },

      { finding: "No pulmonic stenosis", weight: -40 },

    ],

  },

  monitoring: [

    {
      id:"pcv",
      parameter:
        "Packed cell volume / Hematocrit",
      frequency:
        "Every 3–6 months",
      reason:
        "Detects progression of secondary polycythemia."
    },

    {
      id:"oxygen",
      parameter:
        "Oxygen saturation",
      frequency:
        "At every evaluation",
      reason:
        "Monitors severity of hypoxemia."
    },

    {
      id:"echo",
      parameter:
        "Echocardiography",
      frequency:
        "Every 6–12 months",
      reason:
        "Monitors cardiac anatomy and progression."
    }

  ],

  precautions: [

    {
      id:"stress",
      title:
        "Avoid Stress",
      description:
        "Stress and strenuous exercise may worsen right-to-left shunting and hypoxemia."
    },

    {
      id:"polycythemia",
      title:
        "Monitor Hyperviscosity",
      description:
        "Severe polycythemia may require therapeutic phlebotomy under specialist supervision."
    }

  ],

  prognosis:
    "Tetralogy of Fallot carries a guarded to poor prognosis without corrective intervention. Mildly affected dogs may survive for several years with supportive care, whereas severe hypoxemia and marked pulmonic stenosis are associated with shortened survival.",

  strengtheningEvidence: [

    "Cyanosis",

    "Right-to-left shunt",

    "Pulmonic stenosis",

    "Ventricular septal defect",

    "Overriding aorta",

    "Right ventricular hypertrophy",

    "Polycythemia"

  ],

  weakeningEvidence: [

    "Normal echocardiography",

    "No ventricular septal defect",

    "No pulmonic stenosis",

    "Normal oxygen saturation",

    "Alternative congenital heart disease"

  ],

  classicFindings: [

    "Young cyanotic dog",

    "Exercise intolerance",

    "Right basilar systolic murmur",

    "Polycythemia",

    "Right-to-left shunt",

    "Four characteristic cardiac defects"

  ],

  ruleOutFindings: [

    "Isolated pulmonic stenosis",

    "Patent ductus arteriosus",

    "Atrial septal defect",

    "Subaortic stenosis",

    "Ventricular septal defect without cyanosis"

  ],

};