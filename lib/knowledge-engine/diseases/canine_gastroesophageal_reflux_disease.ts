import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineGastroesophagealRefluxDisease: DiseaseCard = {
  id: "canine-gastroesophageal-reflux-disease-dog",

  title: "Canine Gastroesophageal Reflux Disease (GERD)",

  description:
    "A disorder caused by abnormal movement of gastric contents back into the esophagus, resulting in esophageal irritation, inflammation, and discomfort.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "GERD",
    "Gastroesophageal Reflux",
    "Acid Reflux",
    "Reflux Esophagitis",
  ],

  overview:
    "Gastroesophageal reflux disease occurs when gastric contents repeatedly flow backward into the esophagus due to dysfunction of the lower esophageal sphincter or increased gastric pressure. Acid, bile, and digestive enzymes can damage the esophageal lining, causing inflammation and discomfort. It may occur secondary to anesthesia, hiatal hernia, delayed gastric emptying, obesity, or gastrointestinal disorders. Chronic reflux may progress to esophagitis and esophageal stricture formation.",

  clinicalProblems: [

    "Esophageal irritation",
    "Regurgitation",
    "Esophagitis",
    "Painful swallowing",
    "Reduced appetite",
    "Aspiration risk",
    "Esophageal stricture risk"

  ],

  workflow: [

    {
      id: "clinical-assessment",
      step: 1,
      title: "Clinical Assessment",
      description:
        "Differentiate regurgitation from vomiting and evaluate swallowing abnormalities."
    },

    {
      id: "history-evaluation",
      step: 2,
      title: "History Evaluation",
      description:
        "Assess anesthesia history, diet, feeding pattern, and previous gastrointestinal disease."
    },

    {
      id: "esophageal-evaluation",
      step: 3,
      title: "Esophageal Evaluation",
      description:
        "Evaluate esophageal inflammation and structural abnormalities."
    },

    {
      id: "management",
      step: 4,
      title: "Medical Management",
      description:
        "Reduce acid exposure and support esophageal healing."
    },

    {
      id: "monitoring",
      step: 5,
      title: "Monitoring",
      description:
        "Evaluate recurrence and complications."
    }

  ],

  diagnostics: [

    {
      id: "history-examination",
      name: "History and Physical Examination",
      priority: "Essential",
      reason:
        "Differentiates reflux-associated regurgitation from other causes."
    },

    {
      id: "endoscopy",
      name: "Esophagoscopy / Endoscopy",
      priority: "Recommended",
      reason:
        "Directly evaluates esophageal inflammation and mucosal damage."
    },

    {
      id: "contrast-radiography",
      name: "Contrast Esophagram",
      priority: "Recommended",
      reason:
        "Evaluates esophageal movement and structural abnormalities."
    },

    {
      id: "thoracic-imaging",
      name: "Thoracic Imaging",
      priority: "Conditional",
      reason:
        "Assesses aspiration-related complications."
    }

  ],

  drugCategories: [

    {
      category: "Acid Suppression Therapy",
      indication: "Reduce gastric acid injury",
      reason:
        "Decreases acid exposure to esophageal mucosa."
    },

    {
      category: "Gastroprotective Therapy",
      indication: "Esophageal mucosal protection",
      reason:
        "Supports healing of irritated tissue."
    },

    {
      category: "Dietary Management",
      indication: "Reduce reflux episodes",
      reason:
        "Improves gastric emptying and reduces reflux triggers."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "omeprazole",
      priority: "Supportive",
      category: "Gastrointestinal",
    },

    {
      drugId: "sucralfate",
      priority: "Supportive",
      category: "Gastroprotectant",
    }

  ],

  stabilization: [

    "Prevent aspiration complications.",
    "Provide appropriate feeding management.",
    "Reduce gastric acid exposure.",
    "Treat underlying causes such as hiatal hernia when present.",
    "Monitor swallowing ability."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Previous anesthesia", weight: 35 },

      { finding: "Hiatal hernia risk", weight: 40 },

      { finding: "Repeated regurgitation episodes", weight: 50 },

      { finding: "Post-feeding episodes", weight: 40 },

      { finding: "Obesity", weight: 25 }

    ],

    clinicalSigns: [

      { finding: "Regurgitation", weight: 55 },

      { finding: "Difficulty swallowing", weight: 45 },

      { finding: "Excessive swallowing", weight: 35 },

      { finding: "Pain during swallowing", weight: 40 },

      { finding: "Reduced appetite", weight: 30 },

      { finding: "Coughing due to aspiration", weight: 35 }

    ],

    biochemistry: [

      { finding: "Usually normal blood parameters", weight: 10 },

      { finding: "Changes related to concurrent disease", weight: 20 }

    ],

    imaging: [

      { finding: "Esophageal inflammation on endoscopy", weight: 60 },

      { finding: "Hiatal hernia", weight: 50 },

      { finding: "Aspiration changes on thoracic imaging", weight: 35 }

    ],

    supports: [

      { finding: "Repeated regurgitation", weight: 55 },

      { finding: "Endoscopic esophagitis", weight: 60 },

      { finding: "Response to acid suppression therapy", weight: 35 },

      { finding: "Post-anesthetic reflux history", weight: 40 }

    ],

    against: [

      { finding: "True vomiting with abdominal effort", weight: -35 },

      { finding: "Normal esophageal evaluation", weight: -40 },

      { finding: "Primary gastric disease confirmed", weight: -30 },

      { finding: "Neurological swallowing disorder", weight: -25 }

    ],

  },

  monitoring: [

    {
      id:"regurgitation",
      parameter:
        "Frequency of regurgitation",
      frequency:
        "Daily",
      reason:
        "Evaluates response to treatment."
    },

    {
      id:"swallowing",
      parameter:
        "Swallowing comfort",
      frequency:
        "Regular assessment",
      reason:
        "Detects persistent esophageal irritation."
    },

    {
      id:"respiratory",
      parameter:
        "Respiratory signs",
      frequency:
        "Daily when aspiration risk exists",
      reason:
        "Detects aspiration pneumonia."
    }

  ],

  precautions: [

    {
      id:"aspiration",
      title:
        "Monitor Aspiration Risk",
      description:
        "Chronic reflux may result in aspiration pneumonia."
    },

    {
      id:"stricture",
      title:
        "Monitor for Esophageal Stricture",
      description:
        "Severe inflammation can cause narrowing of the esophagus."
    }

  ],

  prognosis:
    "Prognosis is generally good when underlying causes are identified and managed. Chronic severe reflux with complications may require long-term treatment.",

  strengtheningEvidence: [

    "Repeated regurgitation",

    "Post-feeding reflux episodes",

    "Endoscopic esophagitis",

    "Response to acid suppression",

    "Hiatal hernia"

  ],

  weakeningEvidence: [

    "Vomiting with abdominal contractions",

    "Normal esophageal evaluation",

    "No regurgitation",

    "Confirmed alternative cause"

  ],

  classicFindings: [

    "Passive regurgitation",

    "Repeated swallowing",

    "Esophageal discomfort",

    "Post-meal episodes",

    "Esophagitis"

  ],

  ruleOutFindings: [

    "Megaesophagus",

    "Foreign body obstruction",

    "Gastritis",

    "Vomiting disorders",

    "Neurological dysphagia"

  ],

};