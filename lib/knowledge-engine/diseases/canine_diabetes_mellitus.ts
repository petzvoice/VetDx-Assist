import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineDiabetesMellitus: DiseaseCard = {
  id: "canine-diabetes-mellitus-dog",

  title: "Canine Diabetes Mellitus",

  description:
    "An endocrine disorder characterized by persistent hyperglycemia resulting from inadequate insulin secretion, leading to impaired glucose metabolism and systemic metabolic dysfunction.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Diabetes Mellitus",
    "DM",
    "Insulin-dependent Diabetes",
  ],

  overview:
    "Canine diabetes mellitus is most commonly an insulin-dependent disease caused by progressive pancreatic beta-cell dysfunction. Persistent hyperglycemia results in glucosuria, osmotic diuresis, dehydration, weight loss, polyphagia, cataract formation, and increased susceptibility to infections. Lifelong insulin therapy combined with dietary management and regular monitoring is essential for successful long-term control.",

  clinicalProblems: [

    "Persistent hyperglycemia",
    "Polyuria/Polydipsia",
    "Polyphagia",
    "Weight loss",
    "Glucosuria",
    "Dehydration",
    "Cataracts",
    "Urinary tract infection"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess hydration status, severity of hyperglycemia, concurrent disease, and screen for diabetic ketoacidosis."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm persistent diabetes mellitus through laboratory testing and identify concurrent disorders."
    },

    {
      id: "initiate-treatment",
      step: 3,
      title: "Initiate Treatment",
      description:
        "Begin insulin therapy, dietary management, and owner education."
    },

    {
      id: "monitor-control",
      step: 4,
      title: "Monitor Glycemic Control",
      description:
        "Adjust insulin dose using serial glucose monitoring and clinical response."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Provide lifelong insulin therapy with routine monitoring for diabetic complications."
    }

  ],

  diagnostics: [

    {
      id: "blood-glucose",
      name: "Blood Glucose Measurement",
      priority: "Essential",
      reason:
        "Confirms persistent hyperglycemia."
    },

    {
      id: "urinalysis",
      name: "Urinalysis",
      priority: "Essential",
      reason:
        "Detects glucosuria, ketonuria, urinary tract infection, and renal abnormalities."
    },

    {
      id: "fructosamine",
      name: "Serum Fructosamine",
      priority: "Essential",
      reason:
        "Confirms chronic hyperglycemia and differentiates stress hyperglycemia."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Essential",
      reason:
        "Evaluates concurrent disease and systemic health."
    },

    {
      id: "urine-culture",
      name: "Urine Culture",
      priority: "Recommended",
      reason:
        "Identifies subclinical urinary tract infections."
    }

  ],

  drugCategories: [

    {
      category: "Insulin",
      indication: "Persistent hyperglycemia",
      reason: "Provides lifelong insulin replacement."
    },

    {
      category: "Antibiotic",
      indication: "Urinary tract infection",
      reason: "Treats concurrent bacterial infection."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "porcine-lente-insulin",
      priority: "First Line",
      category: "Insulin",
    },

    {
      drugId: "insulin-glargine",
      priority: "Alternative",
      category: "Insulin",
    }

  ],

  stabilization: [

    "Correct dehydration before initiating insulin if indicated.",
    "Begin appropriate insulin therapy.",
    "Provide a consistent feeding schedule.",
    "Treat concurrent infections or pancreatitis.",
    "Educate owners regarding insulin administration and hypoglycemia."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Polyuria", weight: 30 },

      { finding: "Polydipsia", weight: 30 },

      { finding: "Weight loss", weight: 25 },

      { finding: "Polyphagia", weight: 20 },

    ],

    clinicalSigns: [

      { finding: "Cataracts", weight: 35 },

      { finding: "Dehydration", weight: 20 },

      { finding: "Poor body condition", weight: 20 },

    ],

    biochemistry: [

      { finding: "Persistent hyperglycemia", weight: 50 },

      { finding: "Hypercholesterolemia", weight: 20 },

      { finding: "Elevated liver enzymes", weight: 15 },

    ],

    urinalysis: [

      { finding: "Glucosuria", weight: 45 },

      { finding: "Ketonuria", weight: 25 },

      { finding: "Bacteriuria", weight: 15 },

    ],

    supports: [

      { finding: "Elevated fructosamine", weight: 45 },

      { finding: "Persistent fasting hyperglycemia", weight: 45 },

    ],

    against: [

      { finding: "Normal fructosamine", weight: -35 },

      { finding: "Transient stress hyperglycemia", weight: -30 },

      { finding: "Hypoglycemia", weight: -40 },

    ],

  },

  monitoring: [

    {
      id:"glucose",
      parameter:
        "Blood glucose curve",
      frequency:
        "Every 1–3 weeks until regulated, then every 3–6 months",
      reason:
        "Optimizes insulin dosage."
    },

    {
      id:"fructosamine",
      parameter:
        "Serum fructosamine",
      frequency:
        "Every 2–3 months",
      reason:
        "Assesses long-term glycemic control."
    },

    {
      id:"weight",
      parameter:
        "Body weight and clinical signs",
      frequency:
        "Every recheck",
      reason:
        "Evaluates treatment success."
    }

  ],

  precautions: [

    {
      id:"hypoglycemia",
      title:
        "Risk of Hypoglycemia",
      description:
        "Excess insulin administration may cause life-threatening hypoglycemia."
    },

    {
      id:"consistency",
      title:
        "Maintain Consistent Routine",
      description:
        "Insulin administration, feeding schedule, and exercise should remain consistent each day."
    }

  ],

  prognosis:
    "Prognosis is generally good with appropriate insulin therapy, dietary management, owner compliance, and treatment of concurrent diseases. Poor regulation and diabetic ketoacidosis worsen prognosis.",

  strengtheningEvidence: [

    "Persistent hyperglycemia",

    "Glucosuria",

    "Elevated fructosamine",

    "Polyuria",

    "Polydipsia",

    "Weight loss"

  ],

  weakeningEvidence: [

    "Normal fructosamine",

    "Transient stress hyperglycemia",

    "Hypoglycemia",

    "No glucosuria",

    "Alternative endocrine disease"

  ],

  classicFindings: [

    "Polyuria",

    "Polydipsia",

    "Polyphagia",

    "Weight loss",

    "Persistent hyperglycemia",

    "Glucosuria"

  ],

  ruleOutFindings: [

    "Hyperadrenocorticism",

    "Chronic kidney disease",

    "Pyometra",

    "Diabetic ketoacidosis",

    "Stress hyperglycemia"

  ],

};