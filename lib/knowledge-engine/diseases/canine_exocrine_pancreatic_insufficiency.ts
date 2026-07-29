import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineExocrinePancreaticInsufficiency: DiseaseCard = {
  id: "canine-exocrine-pancreatic-insufficiency-dog",

  title: "Canine Exocrine Pancreatic Insufficiency (EPI)",

  description:
    "A disorder caused by inadequate production of pancreatic digestive enzymes resulting in maldigestion, weight loss, diarrhea, and nutrient deficiency.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "EPI",
    "Exocrine Pancreatic Insufficiency",
    "Pancreatic Insufficiency",
    "Pancreatic Enzyme Deficiency",
  ],

  overview:
    "Exocrine pancreatic insufficiency occurs when the pancreas cannot produce sufficient digestive enzymes required for digestion and absorption of nutrients. The most common cause in dogs is pancreatic acinar atrophy, although chronic pancreatitis and pancreatic destruction may also contribute. German Shepherd Dogs and related breeds are predisposed. Affected dogs typically show weight loss despite increased appetite, large-volume loose stools, and poor body condition. Diagnosis is primarily based on serum trypsin-like immunoreactivity (cTLI).",

  clinicalProblems: [

    "Maldigestion",
    "Malabsorption",
    "Weight loss",
    "Chronic diarrhea",
    "Polyphagia",
    "Poor body condition",
    "Vitamin deficiency",
    "Intestinal microbiome imbalance"

  ],

  workflow: [

    {
      id: "history-assessment",
      step: 1,
      title: "History Assessment",
      description:
        "Evaluate weight loss, appetite changes, stool characteristics, and duration of gastrointestinal signs."
    },

    {
      id: "clinical-evaluation",
      step: 2,
      title: "Clinical Evaluation",
      description:
        "Assess body condition, muscle mass, hydration, and nutritional status."
    },

    {
      id: "diagnostic-confirmation",
      step: 3,
      title: "Diagnostic Confirmation",
      description:
        "Perform pancreatic function testing and evaluate associated abnormalities."
    },

    {
      id: "enzyme-replacement",
      step: 4,
      title: "Enzyme Replacement Therapy",
      description:
        "Provide pancreatic enzymes with meals to restore digestion."
    },

    {
      id: "long-term-monitoring",
      step: 5,
      title: "Long-Term Monitoring",
      description:
        "Monitor weight gain, stool quality, and nutritional improvement."
    }

  ],

  diagnostics: [

    {
      id: "ctli",
      name: "Serum Canine Trypsin-Like Immunoreactivity (cTLI)",
      priority: "Essential",
      reason:
        "Primary diagnostic test for exocrine pancreatic insufficiency."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates systemic health and concurrent disease."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Assesses nutritional and metabolic abnormalities."
    },

    {
      id: "cobalamin",
      name: "Serum Cobalamin Measurement",
      priority: "Recommended",
      reason:
        "Evaluates vitamin B12 deficiency associated with EPI."
    },

    {
      id: "fecal-examination",
      name: "Fecal Examination",
      priority: "Recommended",
      reason:
        "Rules out parasitic causes of chronic diarrhea."
    }

  ],

  drugCategories: [

    {
      category: "Pancreatic Enzyme Replacement",
      indication: "Digestive enzyme deficiency",
      reason:
        "Replaces missing pancreatic enzymes required for digestion."
    },

    {
      category: "Nutritional Supplementation",
      indication: "Vitamin deficiency",
      reason:
        "Corrects nutritional deficiencies."
    },

    {
      category: "Dietary Management",
      indication: "Improved digestion",
      reason:
        "Supports nutrient absorption and gastrointestinal health."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "pancrelipase",
      priority: "First Line",
      category: "Enzyme",
    }

  ],

  stabilization: [

    "Provide pancreatic enzyme supplementation with meals.",
    "Correct nutritional deficiencies.",
    "Monitor body weight regularly.",
    "Address concurrent intestinal dysbiosis when present.",
    "Provide dietary support."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Weight loss despite increased appetite", weight: 50 },

      { finding: "Chronic diarrhea", weight: 40 },

      { finding: "German Shepherd predisposition", weight: 30 },

      { finding: "Long-term poor body condition", weight: 40 }

    ],

    clinicalSigns: [

      { finding: "Polyphagia", weight: 45 },

      { finding: "Weight loss", weight: 50 },

      { finding: "Large-volume soft feces", weight: 45 },

      { finding: "Poor body condition", weight: 40 },

      { finding: "Flatulence", weight: 25 }

    ],

    biochemistry: [

      { finding: "Low serum cTLI", weight: 60 },

      { finding: "Low cobalamin concentration", weight: 25 },

      { finding: "Nutritional abnormalities", weight: 25 }

    ],

    imaging: [

      { finding: "Pancreatic atrophy or chronic pancreatic changes", weight: 25 }

    ],

    supports: [

      { finding: "Weight loss with increased appetite", weight: 50 },

      { finding: "Low cTLI concentration", weight: 60 },

      { finding: "Improvement after enzyme supplementation", weight: 50 }

    ],

    against: [

      { finding: "Acute vomiting without weight loss", weight: -30 },

      { finding: "Normal cTLI value", weight: -60 },

      { finding: "Intestinal obstruction", weight: -40 },

      { finding: "Severe abdominal pain", weight: -25 }

    ],

  },

  monitoring: [

    {
      id:"weight",
      parameter:
        "Body weight and body condition",
      frequency:
        "Regular follow-up",
      reason:
        "Evaluates response to enzyme therapy."
    },

    {
      id:"stool",
      parameter:
        "Fecal quality",
      frequency:
        "Daily owner monitoring",
      reason:
        "Assesses digestion improvement."
    },

    {
      id:"nutrition",
      parameter:
        "Nutritional status",
      frequency:
        "Periodic",
      reason:
        "Detects deficiencies."
    }

  ],

  precautions: [

    {
      id:"lifelong",
      title:
        "Usually Requires Long-Term Therapy",
      description:
        "Most affected dogs require lifelong pancreatic enzyme supplementation."
    },

    {
      id:"diagnosis",
      title:
        "Confirm Diagnosis Before Treatment",
      description:
        "Clinical signs overlap with many chronic gastrointestinal diseases."
    }

  ],

  prognosis:
    "With appropriate enzyme replacement and nutritional management, most dogs show marked clinical improvement. Long-term monitoring is required.",

  strengtheningEvidence: [

    "Weight loss despite increased appetite",

    "Large-volume diarrhea",

    "Low cTLI concentration",

    "Breed predisposition",

    "Response to enzyme supplementation"

  ],

  weakeningEvidence: [

    "Normal cTLI",

    "Acute gastrointestinal signs",

    "Severe abdominal pain",

    "Confirmed intestinal obstruction",

    "Alternative chronic enteropathy"

  ],

  classicFindings: [

    "Polyphagia",

    "Weight loss",

    "Poor body condition",

    "Chronic diarrhea",

    "Low cTLI"

  ],

  ruleOutFindings: [

    "Inflammatory bowel disease",

    "Intestinal parasites",

    "Food-responsive enteropathy",

    "Chronic pancreatitis",

    "Gastrointestinal neoplasia"

  ],

};