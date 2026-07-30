import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineSickSinusSyndrome: DiseaseCard = {
  id: "canine-sick-sinus-syndrome-dog",

  title: "Canine Sick Sinus Syndrome",

  description:
    "A disorder of the sinoatrial node resulting in inappropriate sinus bradycardia, sinus arrest, sinoatrial block, or alternating bradyarrhythmias and tachyarrhythmias.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Sick Sinus Syndrome",
    "SSS",
    "Sinus Node Dysfunction",
  ],

  overview:
    "Canine sick sinus syndrome (SSS) is a primary disorder of sinoatrial node impulse formation and conduction. It occurs most commonly in Miniature Schnauzers, West Highland White Terriers, Dachshunds, Cocker Spaniels, and other predisposed breeds. Clinical signs result from prolonged periods of bradycardia leading to cerebral hypoperfusion. Some dogs develop bradycardia-tachycardia syndrome with episodes of supraventricular tachyarrhythmias alternating with profound bradycardia.",

  clinicalProblems: [

    "Sinus bradycardia",
    "Sinus arrest",
    "Sinoatrial block",
    "Syncope",
    "Exercise intolerance",
    "Weakness",
    "Bradycardia-tachycardia syndrome",
    "Reduced cardiac output"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, heart rate, perfusion, and determine if symptomatic bradycardia is present."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm sinus node dysfunction using ECG and ambulatory rhythm monitoring while excluding reversible causes."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Provide temporary medical management for symptomatic bradycardia while assessing candidacy for pacemaker implantation."
    },

    {
      id: "monitor-response",
      step: 4,
      title: "Monitor Response",
      description:
        "Monitor heart rhythm, clinical signs, and response to treatment."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Permanent pacemaker implantation is the treatment of choice for symptomatic dogs."
    }

  ],

  diagnostics: [

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Essential",
      reason:
        "Identifies sinus arrest, sinoatrial block, and marked sinus bradycardia."
    },

    {
      id: "holter",
      name: "24-Hour Holter Monitoring",
      priority: "Essential",
      reason:
        "Detects intermittent pauses and correlates arrhythmias with clinical signs."
    },

    {
      id: "atropine-response",
      name: "Atropine Response Test",
      priority: "Recommended",
      reason:
        "Helps differentiate intrinsic sinus node disease from excessive vagal tone."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Recommended",
      reason:
        "Evaluates concurrent structural heart disease."
    },

    {
      id: "cbc-chemistry",
      name: "CBC, Serum Biochemistry and Electrolytes",
      priority: "Recommended",
      reason:
        "Rules out metabolic and electrolyte disorders contributing to bradycardia."
    }

  ],

  drugCategories: [

    {
      category: "Anticholinergic",
      indication: "Temporary treatment of symptomatic bradycardia",
      reason: "Increases heart rate during stabilization."
    },

    {
      category: "Sympathomimetic",
      indication: "Temporary chronotropic support",
      reason: "Improves heart rate until definitive treatment."
    },

    {
      category: "Methylxanthine",
      indication: "Medical management when pacemaker is unavailable",
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
      drugId: "terbutaline",
      priority: "Adjunctive",
      category: "Sympathomimetic",
    },

    {
      drugId: "theophylline",
      priority: "Adjunctive",
      category: "Methylxanthine",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation if clinically indicated.",
    "Monitor ECG continuously in symptomatic patients.",
    "Treat severe symptomatic bradycardia.",
    "Correct electrolyte abnormalities.",
    "Prepare for pacemaker implantation if indicated."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Recurrent syncope", weight: 40 },

      { finding: "Exercise intolerance", weight: 30 },

      { finding: "Predisposed breed", weight: 25 },

    ],

    clinicalSigns: [

      { finding: "Marked bradycardia", weight: 45 },

      { finding: "Irregular pauses", weight: 40 },

      { finding: "Weak pulses", weight: 30 },

      { finding: "Collapse", weight: 35 },

    ],

    biochemistry: [

      { finding: "Normal electrolyte profile", weight: 10 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Sinus arrest on ECG", weight: 50 },

      { finding: "Sinoatrial block", weight: 50 },

      { finding: "Holter-confirmed prolonged pauses", weight: 45 },

      { finding: "Poor atropine response", weight: 35 },

    ],

    against: [

      { finding: "Normal sinus rhythm", weight: -50 },

      { finding: "Bradycardia explained by systemic disease", weight: -35 },

      { finding: "Normal Holter monitoring", weight: -40 },

    ],

  },

  monitoring: [

    {
      id:"ecg",
      parameter:
        "Electrocardiography",
      frequency:
        "Continuous during hospitalization",
      reason:
        "Detects prolonged pauses and response to therapy."
    },

    {
      id:"holter",
      parameter:
        "Holter monitoring",
      frequency:
        "During follow-up",
      reason:
        "Assesses frequency of sinus pauses and treatment effectiveness."
    },

    {
      id:"pacemaker",
      parameter:
        "Pacemaker function (if implanted)",
      frequency:
        "At scheduled rechecks",
      reason:
        "Ensures appropriate device function."
    }

  ],

  precautions: [

    {
      id:"pacemaker",
      title:
        "Pacemaker is Definitive Therapy",
      description:
        "Symptomatic dogs generally require permanent pacemaker implantation for long-term control."
    },

    {
      id:"drug-limitations",
      title:
        "Medical Therapy is Temporary",
      description:
        "Chronotropic medications are generally less effective than permanent pacing."
    }

  ],

  prognosis:
    "Prognosis is good following successful pacemaker implantation in dogs without significant concurrent disease. Untreated symptomatic sick sinus syndrome carries a continued risk of recurrent syncope and reduced quality of life.",

  strengtheningEvidence: [

    "Sinus arrest",

    "Sinoatrial block",

    "Marked sinus bradycardia",

    "Holter-confirmed pauses",

    "Poor atropine response",

    "Recurrent syncope"

  ],

  weakeningEvidence: [

    "Normal sinus rhythm",

    "Normal Holter monitoring",

    "Bradycardia due to metabolic disease",

    "Drug-induced bradycardia",

    "Normal heart rate"

  ],

  classicFindings: [

    "Miniature Schnauzer",

    "Recurrent syncope",

    "Sinus arrest",

    "Marked bradycardia",

    "Long sinus pauses",

    "Pacemaker responsiveness"

  ],

  ruleOutFindings: [

    "High-grade AV block",

    "Hyperkalemia",

    "Hypothyroidism",

    "Drug-induced bradycardia",

    "Vasovagal syncope"

  ],

};