import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineHypothyroidism: DiseaseCard = {
  id: "canine-hypothyroidism-dog",

  title: "Canine Hypothyroidism",

  description:
    "A common endocrine disorder resulting from inadequate thyroid hormone production, leading to reduced metabolic activity and multisystem clinical disease.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Hypothyroidism",
    "Primary Hypothyroidism",
    "Thyroid Hormone Deficiency",
  ],

  overview:
    "Canine hypothyroidism is most commonly caused by lymphocytic thyroiditis or idiopathic thyroid gland atrophy. Reduced thyroid hormone production results in decreased metabolic rate affecting the skin, cardiovascular system, nervous system, and reproductive system. Most affected dogs respond well to lifelong levothyroxine supplementation.",

  clinicalProblems: [

    "Thyroid hormone deficiency",
    "Weight gain",
    "Lethargy",
    "Exercise intolerance",
    "Dermatologic disease",
    "Hyperlipidemia",
    "Bradycardia",
    "Neuromuscular dysfunction"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Evaluate compatible clinical signs, dermatologic abnormalities, body condition, and concurrent diseases."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm hypothyroidism using thyroid hormone testing while excluding euthyroid sick syndrome."
    },

    {
      id: "initiate-treatment",
      step: 3,
      title: "Initiate Treatment",
      description:
        "Begin levothyroxine supplementation and educate the owner regarding lifelong therapy."
    },

    {
      id: "monitor-treatment",
      step: 4,
      title: "Monitor Treatment",
      description:
        "Monitor thyroid hormone concentrations and clinical response to adjust dosage."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Continue lifelong levothyroxine therapy with periodic reassessment."
    }

  ],

  diagnostics: [

    {
      id: "total-t4",
      name: "Total T4",
      priority: "Essential",
      reason:
        "Initial screening test for hypothyroidism."
    },

    {
      id: "free-t4",
      name: "Free T4 by Equilibrium Dialysis",
      priority: "Essential",
      reason:
        "Improves diagnostic accuracy when total T4 is low."
    },

    {
      id: "tsh",
      name: "Canine TSH",
      priority: "Essential",
      reason:
        "Supports diagnosis when elevated with low T4."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Essential",
      reason:
        "Evaluates concurrent disease and common biochemical abnormalities."
    },

    {
      id: "lipid-profile",
      name: "Serum Cholesterol and Triglycerides",
      priority: "Recommended",
      reason:
        "Identifies hyperlipidemia associated with hypothyroidism."
    }

  ],

  drugCategories: [

    {
      category: "Thyroid Hormone",
      indication: "Hormone replacement",
      reason: "Restores normal thyroid hormone concentrations."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "levothyroxine",
      priority: "First Line",
      category: "Hormone",
    }

  ],

  stabilization: [

    "Confirm diagnosis before initiating therapy.",
    "Begin oral levothyroxine supplementation.",
    "Treat concurrent skin or ear infections.",
    "Institute weight management if obese.",
    "Educate owners regarding lifelong treatment."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Weight gain", weight: 30 },

      { finding: "Lethargy", weight: 30 },

      { finding: "Exercise intolerance", weight: 20 },

      { finding: "Cold intolerance", weight: 20 },

    ],

    clinicalSigns: [

      { finding: "Bilateral symmetrical alopecia", weight: 35 },

      { finding: "Seborrhea", weight: 25 },

      { finding: "Bradycardia", weight: 25 },

      { finding: "Tragic facial expression", weight: 20 },

    ],

    biochemistry: [

      { finding: "Hypercholesterolemia", weight: 35 },

      { finding: "Hypertriglyceridemia", weight: 25 },

      { finding: "Mild non-regenerative anemia", weight: 15 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Low Total T4", weight: 35 },

      { finding: "Low Free T4", weight: 45 },

      { finding: "Elevated canine TSH", weight: 40 },

    ],

    against: [

      { finding: "Normal Free T4", weight: -35 },

      { finding: "Euthyroid sick syndrome", weight: -30 },

      { finding: "Hyperthyroidism", weight: -45 },

    ],

  },

  monitoring: [

    {
      id:"t4",
      parameter:
        "Serum Total T4",
      frequency:
        "4–8 weeks after starting or changing dose, then every 6–12 months",
      reason:
        "Guides levothyroxine dosage adjustments."
    },

    {
      id:"clinical",
      parameter:
        "Body weight and clinical signs",
      frequency:
        "Every recheck",
      reason:
        "Assesses response to treatment."
    },

    {
      id:"lipids",
      parameter:
        "Serum cholesterol",
      frequency:
        "Periodic monitoring",
      reason:
        "Evaluates metabolic improvement."
    }

  ],

  precautions: [

    {
      id:"diagnosis",
      title:
        "Confirm Diagnosis Before Treatment",
      description:
        "Do not diagnose hypothyroidism based on Total T4 alone because concurrent illness and medications can suppress thyroid hormone concentrations."
    },

    {
      id:"lifelong",
      title:
        "Lifelong Therapy Required",
      description:
        "Most dogs require lifelong levothyroxine supplementation with regular monitoring."
    }

  ],

  prognosis:
    "Prognosis is excellent with appropriate lifelong levothyroxine therapy. Most dogs show marked clinical improvement within weeks, while dermatologic abnormalities may require several months to resolve.",

  strengtheningEvidence: [

    "Low Free T4",

    "Elevated canine TSH",

    "Hypercholesterolemia",

    "Symmetrical alopecia",

    "Weight gain",

    "Lethargy"

  ],

  weakeningEvidence: [

    "Normal Free T4",

    "Hyperthyroidism",

    "Euthyroid sick syndrome",

    "Alternative dermatologic diagnosis",

    "Normal thyroid profile"

  ],

  classicFindings: [

    "Weight gain",

    "Lethargy",

    "Exercise intolerance",

    "Symmetrical alopecia",

    "Hypercholesterolemia",

    "Low Free T4"

  ],

  ruleOutFindings: [

    "Hyperadrenocorticism",

    "Obesity",

    "Chronic dermatologic disease",

    "Euthyroid sick syndrome",

    "Sex hormone alopecia"

  ],

};