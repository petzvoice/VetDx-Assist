import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineMegaesophagus: DiseaseCard = {
  id: "canine-megaesophagus-dog",

  title: "Canine Megaesophagus",

  description:
    "A disorder characterized by generalized esophageal dilation and hypomotility resulting in regurgitation, malnutrition, and a high risk of aspiration pneumonia.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Megaesophagus",
    "Generalized Esophageal Hypomotility",
    "Esophageal Dilation",
  ],

  overview:
    "Megaesophagus is characterized by diffuse esophageal dilation with decreased or absent peristalsis, preventing normal transport of food to the stomach. It may be congenital or acquired. Acquired megaesophagus is commonly associated with diseases such as myasthenia gravis, hypoadrenocorticism, hypothyroidism (less commonly), polymyositis, dysautonomia, or may be idiopathic. The greatest complication is aspiration pneumonia, which is the major cause of morbidity and mortality.",

  clinicalProblems: [

    "Regurgitation",
    "Aspiration pneumonia",
    "Weight loss",
    "Malnutrition",
    "Esophageal hypomotility",
    "Dehydration",
    "Poor body condition",
    "Respiratory compromise"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Differentiate regurgitation from vomiting and assess respiratory status and nutritional condition."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm megaesophagus using thoracic imaging and investigate underlying causes."
    },

    {
      id: "treat-underlying-cause",
      step: 3,
      title: "Treat Underlying Cause",
      description:
        "Identify and manage diseases such as myasthenia gravis, hypoadrenocorticism, or other neuromuscular disorders."
    },

    {
      id: "supportive-management",
      step: 4,
      title: "Supportive Management",
      description:
        "Institute feeding modifications, nutritional support, and manage aspiration pneumonia if present."
    },

    {
      id: "long-term-monitoring",
      step: 5,
      title: "Long-Term Management",
      description:
        "Monitor body weight, recurrence of regurgitation, and respiratory complications."
    }

  ],

  diagnostics: [

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiographs",
      priority: "Essential",
      reason:
        "Confirms generalized esophageal dilation and evaluates aspiration pneumonia."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Essential",
      reason:
        "Assesses systemic disease and concurrent illness."
    },

    {
      id: "acetylcholine-receptor-antibody",
      name: "Acetylcholine Receptor Antibody Test",
      priority: "Essential",
      reason:
        "Screens for acquired myasthenia gravis."
    },

    {
      id: "acth-test",
      name: "ACTH Stimulation Test",
      priority: "Recommended",
      reason:
        "Evaluates for hypoadrenocorticism."
    },

    {
      id: "fluoroscopy",
      name: "Contrast Esophagram or Fluoroscopy",
      priority: "Recommended",
      reason:
        "Assesses esophageal motility and excludes focal obstruction."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotic",
      indication: "Aspiration pneumonia",
      reason: "Treats secondary bacterial pneumonia."
    },

    {
      category: "Prokinetic",
      indication: "Selected cases",
      reason: "May improve gastric emptying but has minimal effect on striated esophagus."
    },

    {
      category: "Anticholinesterase",
      indication: "Myasthenia gravis",
      reason: "Improves neuromuscular transmission when myasthenia gravis is present."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "pyridostigmine",
      priority: "Conditional",
      category: "Anticholinesterase",
    },

    {
      drugId: "amoxicillin-clavulanate",
      priority: "Conditional",
      category: "Antibiotic",
    },

    {
      drugId: "metoclopramide",
      priority: "Adjunctive",
      category: "Prokinetic",
    }

  ],

  stabilization: [

    "Evaluate for aspiration pneumonia immediately.",
    "Provide oxygen therapy if respiratory compromise is present.",
    "Initiate appropriate antimicrobial therapy for aspiration pneumonia.",
    "Feed upright using a Bailey chair or elevated position.",
    "Maintain upright posture for 10–20 minutes after feeding.",
    "Provide highly digestible food using the consistency best tolerated by the patient."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Chronic regurgitation", weight: 50 },

      { finding: "Weight loss", weight: 30 },

      { finding: "Difficulty maintaining body condition", weight: 20 },

      { finding: "Episodes after eating or drinking", weight: 25 }

    ],

    clinicalSigns: [

      { finding: "Passive regurgitation", weight: 50 },

      { finding: "Cough", weight: 30 },

      { finding: "Tachypnea", weight: 25 },

      { finding: "Crackles on thoracic auscultation", weight: 30 },

      { finding: "Poor body condition", weight: 20 }

    ],

    biochemistry: [

      { finding: "Electrolyte abnormalities secondary to dehydration", weight: 10 }

    ],

    imaging: [

      { finding: "Generalized esophageal dilation", weight: 50 },

      { finding: "Air-filled esophagus", weight: 45 },

      { finding: "Aspiration pneumonia", weight: 40 }

    ],

    supports: [

      { finding: "Thoracic radiographic evidence of megaesophagus", weight: 50 },

      { finding: "Positive acetylcholine receptor antibody test", weight: 35 },

      { finding: "Improvement after treating underlying disease", weight: 20 }

    ],

    against: [

      { finding: "Vomiting rather than regurgitation", weight: -40 },

      { finding: "Mechanical esophageal obstruction", weight: -35 },

      { finding: "Normal esophageal motility", weight: -45 }

    ],

  },

  monitoring: [

    {
      id: "body-weight",
      parameter: "Body weight and body condition score",
      frequency: "Every 2–4 weeks",
      reason: "Assesses nutritional status."
    },

    {
      id: "respiratory-status",
      parameter: "Respiratory examination",
      frequency: "Every visit or immediately if coughing develops",
      reason: "Detects aspiration pneumonia early."
    },

    {
      id: "thoracic-imaging",
      parameter: "Thoracic radiographs",
      frequency: "As clinically indicated",
      reason: "Monitors aspiration pneumonia."
    }

  ],

  precautions: [

    {
      id: "aspiration",
      title: "Aspiration Pneumonia is the Greatest Risk",
      description:
        "Any coughing, tachypnea, fever, or respiratory distress should prompt immediate thoracic evaluation."
    },

    {
      id: "feeding",
      title: "Feeding Management is Critical",
      description:
        "Successful long-term management depends more on feeding technique than medication in many patients."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause and the frequency of aspiration pneumonia. Dogs with treatable underlying diseases may improve substantially, whereas idiopathic megaesophagus carries a guarded long-term prognosis.",

  strengtheningEvidence: [

    "Passive regurgitation",

    "Generalized esophageal dilation",

    "Air-filled esophagus",

    "Aspiration pneumonia",

    "Weight loss",

    "Positive myasthenia gravis testing"

  ],

  weakeningEvidence: [

    "Active vomiting",

    "Normal thoracic radiographs",

    "Mechanical obstruction",

    "Normal esophageal motility",

    "Alternative gastrointestinal disease"

  ],

  classicFindings: [

    "Passive regurgitation",

    "Weight loss",

    "Generalized megaesophagus",

    "Aspiration pneumonia",

    "Air-filled esophagus",

    "Poor body condition"

  ],

  ruleOutFindings: [

    "Esophageal foreign body",

    "Esophageal stricture",

    "Vascular ring anomaly",

    "Hiatal hernia",

    "Chronic vomiting disorders"

  ],

};