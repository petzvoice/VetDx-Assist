import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineAtrioventricularBlock: DiseaseCard = {
  id: "canine-atrioventricular-block-dog",

  title: "Canine Atrioventricular Block",

  description:
    "A disorder of atrioventricular conduction resulting in delayed, intermittent, or complete failure of impulse transmission from the atria to the ventricles.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "AV Block",
    "Heart Block",
    "Atrioventricular Conduction Block",
  ],

  overview:
    "Canine atrioventricular (AV) block is classified as first-degree, second-degree, or third-degree (complete) block depending on the severity of conduction impairment. Third-degree AV block is the most clinically significant form and commonly results in severe bradycardia, exercise intolerance, syncope, and reduced cardiac output. Causes include degenerative conduction system disease, myocarditis, electrolyte disturbances, drug toxicity, and congenital defects. Permanent pacemaker implantation is the treatment of choice for symptomatic high-grade AV block.",

  clinicalProblems: [

    "Bradycardia",
    "Reduced cardiac output",
    "Exercise intolerance",
    "Weakness",
    "Syncope",
    "Collapse",
    "Congestive heart failure",
    "Sudden death"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, perfusion, heart rate, and determine whether emergency stabilization is required."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Determine the degree of AV block using ECG and identify reversible or underlying causes."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Provide temporary medical support for symptomatic bradycardia while evaluating for permanent pacemaker placement."
    },

    {
      id: "monitor-response",
      step: 4,
      title: "Monitor Response",
      description:
        "Monitor cardiac rhythm, perfusion, and progression of conduction abnormalities."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Permanent pacemaker implantation is recommended for symptomatic high-grade AV block."
    }

  ],

  diagnostics: [

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Essential",
      reason:
        "Confirms the type and severity of atrioventricular block."
    },

    {
      id: "holter",
      name: "24-Hour Holter Monitoring",
      priority: "Recommended",
      reason:
        "Detects intermittent conduction disturbances and correlates rhythm with clinical signs."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Recommended",
      reason:
        "Evaluates concurrent structural heart disease."
    },

    {
      id: "electrolytes",
      name: "Serum Electrolytes",
      priority: "Essential",
      reason:
        "Identifies electrolyte abnormalities contributing to AV block."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Screens for systemic disease associated with conduction abnormalities."
    }

  ],

  drugCategories: [

    {
      category: "Anticholinergic",
      indication: "Temporary treatment of symptomatic bradycardia",
      reason: "Increases heart rate during emergency stabilization."
    },

    {
      category: "Sympathomimetic",
      indication: "Temporary chronotropic support",
      reason: "Maintains cardiac output until definitive therapy."
    },

    {
      category: "Methylxanthine",
      indication: "Temporary medical management",
      reason: "Provides positive chronotropic effects."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "atropine",
      priority: "Supportive",
      category: "Anticholinergic",
    },

    {
      drugId: "isoproterenol",
      priority: "Supportive",
      category: "Sympathomimetic",
    },

    {
      drugId: "theophylline",
      priority: "Adjunctive",
      category: "Methylxanthine",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation if indicated.",
    "Establish continuous ECG monitoring.",
    "Treat severe symptomatic bradycardia.",
    "Correct electrolyte abnormalities and discontinue causative drugs.",
    "Prepare for temporary or permanent pacing when indicated."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Recurrent syncope", weight: 40 },

      { finding: "Exercise intolerance", weight: 30 },

      { finding: "Known cardiac disease", weight: 20 },

    ],

    clinicalSigns: [

      { finding: "Marked bradycardia", weight: 45 },

      { finding: "Weak femoral pulses", weight: 35 },

      { finding: "Collapse", weight: 35 },

      { finding: "Hypotension", weight: 30 },

    ],

    biochemistry: [

      { finding: "Hyperkalemia", weight: 25 },

      { finding: "Elevated cardiac troponin", weight: 20 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Second-degree AV block on ECG", weight: 40 },

      { finding: "Third-degree AV block on ECG", weight: 50 },

      { finding: "AV dissociation", weight: 45 },

      { finding: "Slow ventricular escape rhythm", weight: 40 },

    ],

    against: [

      { finding: "Normal atrioventricular conduction", weight: -50 },

      { finding: "Normal ECG", weight: -45 },

      { finding: "Alternative cause of syncope identified", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"ecg",
      parameter:
        "Continuous ECG monitoring",
      frequency:
        "During hospitalization",
      reason:
        "Evaluates progression of AV block and response to therapy."
    },

    {
      id:"heart-rate",
      parameter:
        "Heart rate and pulse quality",
      frequency:
        "Every 2–4 hours in unstable patients",
      reason:
        "Monitors adequacy of cardiac output."
    },

    {
      id:"pacemaker",
      parameter:
        "Pacemaker function (if implanted)",
      frequency:
        "Routine follow-up examinations",
      reason:
        "Confirms appropriate pacing and device function."
    }

  ],

  precautions: [

    {
      id:"pacemaker",
      title:
        "Permanent Pacemaker Recommended",
      description:
        "Symptomatic third-degree AV block is most effectively treated with permanent pacemaker implantation."
    },

    {
      id:"reversible-causes",
      title:
        "Identify Reversible Causes",
      description:
        "Correct electrolyte disturbances and discontinue medications that impair AV conduction whenever possible."
    }

  ],

  prognosis:
    "First-degree and many second-degree AV blocks have a favorable prognosis depending on the underlying cause. Third-degree AV block carries a guarded prognosis without pacemaker implantation but is generally good following successful permanent pacing when significant myocardial disease is absent.",

  strengtheningEvidence: [

    "Third-degree AV block",

    "AV dissociation",

    "Marked bradycardia",

    "Ventricular escape rhythm",

    "Recurrent syncope",

    "ECG confirmation"

  ],

  weakeningEvidence: [

    "Normal ECG",

    "Normal AV conduction",

    "Normal heart rate",

    "Alternative diagnosis confirmed",

    "No conduction abnormalities"

  ],

  classicFindings: [

    "Persistent bradycardia",

    "Third-degree AV block",

    "AV dissociation",

    "Syncope",

    "Slow ventricular escape rhythm",

    "Pacemaker indicated"

  ],

  ruleOutFindings: [

    "Sick sinus syndrome",

    "Hyperkalemia-induced bradycardia",

    "Drug-induced AV block",

    "Vasovagal syncope",

    "Atrial fibrillation"

  ],

};