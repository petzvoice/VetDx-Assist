import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineHyperadrenocorticism: DiseaseCard = {
  id: "canine-hyperadrenocorticism-dog",

  title: "Canine Hyperadrenocorticism",

  description:
    "A chronic endocrine disorder caused by excessive cortisol production resulting in characteristic clinical signs, metabolic abnormalities, and multiple systemic complications.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Cushing's Disease",
    "Cushing Syndrome",
    "Hypercortisolism",
  ],

  overview:
    "Hyperadrenocorticism (HAC) is caused by chronic excessive cortisol production and is classified as pituitary-dependent, adrenal-dependent, or iatrogenic. Excess cortisol affects nearly every organ system, leading to polyuria, polydipsia, polyphagia, abdominal enlargement, muscle wasting, dermatologic changes, hypertension, hypercoagulability, and increased susceptibility to infections. Diagnosis requires compatible clinical signs together with endocrine testing and imaging.",

  clinicalProblems: [

    "Hypercortisolemia",
    "Polyuria/Polydipsia",
    "Polyphagia",
    "Pot-bellied abdomen",
    "Muscle wasting",
    "Panting",
    "Dermatologic disease",
    "Hypertension"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess clinical signs, concurrent diseases, blood pressure, and evidence of cortisol excess."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm hyperadrenocorticism using endocrine testing and determine the underlying cause."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Initiate cortisol-lowering therapy and treat concurrent disorders."
    },

    {
      id: "monitor-treatment",
      step: 4,
      title: "Monitor Treatment",
      description:
        "Adjust medication based on clinical response and endocrine monitoring."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Provide lifelong monitoring for disease control, recurrence, and treatment complications."
    }

  ],

  diagnostics: [

    {
      id: "acth-stimulation",
      name: "ACTH Stimulation Test",
      priority: "Essential",
      reason:
        "Evaluates adrenal response and monitors trilostane therapy."
    },

    {
      id: "ldds",
      name: "Low-Dose Dexamethasone Suppression Test",
      priority: "Essential",
      reason:
        "Preferred screening test for naturally occurring hyperadrenocorticism."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Essential",
      reason:
        "Detects characteristic biochemical abnormalities and concurrent disease."
    },

    {
      id: "urinalysis",
      name: "Urinalysis and Urine Culture",
      priority: "Essential",
      reason:
        "Identifies urinary tract infection and assesses urine concentration."
    },

    {
      id: "abdominal-ultrasound",
      name: "Abdominal Ultrasonography",
      priority: "Recommended",
      reason:
        "Evaluates adrenal glands and differentiates pituitary- from adrenal-dependent disease."
    }

  ],

  drugCategories: [

    {
      category: "Adrenal Enzyme Inhibitor",
      indication: "Medical management",
      reason: "Reduces cortisol production."
    },

    {
      category: "Adrenocorticolytic",
      indication: "Alternative therapy",
      reason: "Selective destruction of adrenal cortex."
    },

    {
      category: "Antihypertensive",
      indication: "Systemic hypertension",
      reason: "Controls secondary hypertension."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "trilostane",
      priority: "First Line",
      category: "Adrenal Enzyme Inhibitor",
    },

    {
      drugId: "mitotane",
      priority: "Alternative",
      category: "Adrenocorticolytic",
    },

    {
      drugId: "amlodipine",
      priority: "Adjunctive",
      category: "Antihypertensive",
    },

  ],

  stabilization: [

    "Correct dehydration if present.",
    "Treat concurrent urinary tract infections.",
    "Control hypertension when indicated.",
    "Initiate cortisol-lowering therapy.",
    "Educate owners regarding signs of hypocortisolism."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Polyuria and polydipsia", weight: 35 },

      { finding: "Polyphagia", weight: 25 },

      { finding: "Chronic panting", weight: 20 },

      { finding: "Progressive abdominal enlargement", weight: 25 },

    ],

    clinicalSigns: [

      { finding: "Pot-bellied appearance", weight: 35 },

      { finding: "Bilateral symmetrical alopecia", weight: 35 },

      { finding: "Thin skin", weight: 30 },

      { finding: "Muscle wasting", weight: 25 },

    ],

    biochemistry: [

      { finding: "Increased ALP", weight: 40 },

      { finding: "Hypercholesterolemia", weight: 25 },

      { finding: "Stress leukogram", weight: 20 },

    ],

    urinalysis: [

      { finding: "Low urine specific gravity", weight: 25 },

      { finding: "Proteinuria", weight: 15 },

      { finding: "Bacteriuria", weight: 15 },

    ],

    supports: [

      { finding: "Positive LDDST", weight: 50 },

      { finding: "Positive ACTH stimulation test", weight: 45 },

      { finding: "Adrenal enlargement on ultrasound", weight: 35 },

    ],

    against: [

      { finding: "Normal endocrine testing", weight: -45 },

      { finding: "Hypoadrenocorticism confirmed", weight: -50 },

      { finding: "Alternative endocrine disease", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"acth",
      parameter:
        "ACTH stimulation test",
      frequency:
        "10–14 days after starting or changing therapy, then every 3–6 months",
      reason:
        "Guides dose adjustment and avoids overtreatment."
    },

    {
      id:"electrolytes",
      parameter:
        "Serum electrolytes and biochemistry",
      frequency:
        "At each recheck",
      reason:
        "Detects adverse effects and concurrent disease."
    },

    {
      id:"clinical",
      parameter:
        "Clinical signs, body weight, water intake",
      frequency:
        "Every recheck",
      reason:
        "Assesses treatment response."
    }

  ],

  precautions: [

    {
      id:"hypocortisolism",
      title:
        "Risk of Hypoadrenocorticism",
      description:
        "Excessive cortisol suppression may cause iatrogenic hypoadrenocorticism requiring immediate treatment."
    },

    {
      id:"monitoring",
      title:
        "Routine Monitoring Required",
      description:
        "Regular endocrine testing is essential for safe long-term therapy."
    }

  ],

  prognosis:
    "Prognosis is generally good with appropriate long-term medical management and monitoring. Prognosis depends on the underlying cause, concurrent diseases, and owner compliance.",

  strengtheningEvidence: [

    "Polyuria and polydipsia",

    "Polyphagia",

    "Pot-bellied abdomen",

    "Symmetrical alopecia",

    "Elevated ALP",

    "Positive LDDST"

  ],

  weakeningEvidence: [

    "Normal endocrine testing",

    "Hypoadrenocorticism confirmed",

    "Normal cortisol suppression",

    "Alternative diagnosis established",

    "No compatible clinical signs"

  ],

  classicFindings: [

    "Polyuria",

    "Polydipsia",

    "Polyphagia",

    "Pot-bellied abdomen",

    "Symmetrical alopecia",

    "Elevated ALP"

  ],

  ruleOutFindings: [

    "Hypoadrenocorticism",

    "Diabetes mellitus",

    "Chronic kidney disease",

    "Hypothyroidism",

    "Psychogenic polydipsia"

  ],

};