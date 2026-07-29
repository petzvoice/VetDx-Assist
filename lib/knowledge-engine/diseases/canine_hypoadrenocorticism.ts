import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineHypoadrenocorticism: DiseaseCard = {
  id: "canine-hypoadrenocorticism-dog",

  title: "Canine Hypoadrenocorticism",

  description:
    "A potentially life-threatening endocrine disorder caused by deficient glucocorticoid and mineralocorticoid production resulting in electrolyte abnormalities, hypovolemia, and circulatory collapse.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Addison's Disease",
    "Primary Hypoadrenocorticism",
    "Addison Disease",
  ],

  overview:
    "Hypoadrenocorticism is caused by destruction or dysfunction of the adrenal cortex leading to deficiency of cortisol and, in primary disease, aldosterone. Affected dogs often present with vague gastrointestinal signs, lethargy, weight loss, and intermittent illness, while severe cases develop an Addisonian crisis characterized by hypovolemic shock, hyperkalemia, hyponatremia, and life-threatening bradycardia. Early diagnosis and hormone replacement therapy result in an excellent long-term prognosis.",

  clinicalProblems: [

    "Glucocorticoid deficiency",
    "Mineralocorticoid deficiency",
    "Hypovolemia",
    "Hyponatremia",
    "Hyperkalemia",
    "Bradycardia",
    "Hypotension",
    "Addisonian crisis"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, hydration status, electrolyte abnormalities, and evidence of Addisonian crisis."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm hypoadrenocorticism using ACTH stimulation testing and laboratory evaluation."
    },

    {
      id: "emergency-management",
      step: 3,
      title: "Emergency Management",
      description:
        "Restore circulating volume, correct electrolyte abnormalities, and initiate glucocorticoid therapy."
    },

    {
      id: "monitor-recovery",
      step: 4,
      title: "Monitor Recovery",
      description:
        "Monitor cardiovascular status, electrolytes, hydration, and response to hormone replacement."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Provide lifelong glucocorticoid and mineralocorticoid replacement with routine monitoring."
    }

  ],

  diagnostics: [

    {
      id: "acth",
      name: "ACTH Stimulation Test",
      priority: "Essential",
      reason:
        "Gold standard for confirming hypoadrenocorticism."
    },

    {
      id: "electrolytes",
      name: "Serum Electrolytes",
      priority: "Essential",
      reason:
        "Detects characteristic hyponatremia and hyperkalemia."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Essential",
      reason:
        "Evaluates dehydration, azotemia, hypoglycemia, and concurrent disease."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Essential",
      reason:
        "Identifies hyperkalemia-associated cardiac abnormalities."
    },

    {
      id: "baseline-cortisol",
      name: "Baseline Cortisol",
      priority: "Recommended",
      reason:
        "Useful screening test to exclude hypoadrenocorticism when normal."
    }

  ],

  drugCategories: [

    {
      category: "Intravenous Fluid",
      indication: "Hypovolemia",
      reason: "Restores circulating volume and improves tissue perfusion."
    },

    {
      category: "Glucocorticoid",
      indication: "Cortisol deficiency",
      reason: "Replaces deficient glucocorticoids."
    },

    {
      category: "Mineralocorticoid",
      indication: "Aldosterone deficiency",
      reason: "Corrects electrolyte imbalance and maintains sodium and potassium homeostasis."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "dexamethasone",
      priority: "Emergency",
      category: "Glucocorticoid",
    },

    {
      drugId: "desoxycorticosterone-pivalate",
      priority: "First Line",
      category: "Mineralocorticoid",
    },

    {
      drugId: "prednisolone",
      priority: "Maintenance",
      category: "Glucocorticoid",
    },

    {
      drugId: "fludrocortisone",
      priority: "Alternative",
      category: "Mineralocorticoid",
    },

  ],

  stabilization: [

    "Administer intravenous isotonic crystalloid fluids immediately.",
    "Treat severe hyperkalemia when clinically indicated.",
    "Administer dexamethasone after obtaining diagnostic samples.",
    "Correct hypoglycemia if present.",
    "Initiate mineralocorticoid replacement once diagnosis is confirmed."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Intermittent vomiting", weight: 25 },

      { finding: "Diarrhea", weight: 20 },

      { finding: "Lethargy", weight: 25 },

      { finding: "Collapse", weight: 35 },

    ],

    clinicalSigns: [

      { finding: "Bradycardia", weight: 40 },

      { finding: "Weak pulses", weight: 30 },

      { finding: "Dehydration", weight: 25 },

      { finding: "Hypothermia", weight: 20 },

    ],

    biochemistry: [

      { finding: "Hyponatremia", weight: 45 },

      { finding: "Hyperkalemia", weight: 45 },

      { finding: "Azotemia", weight: 25 },

      { finding: "Hypoglycemia", weight: 20 },

    ],

    urinalysis: [

      { finding: "Inappropriately low urine specific gravity", weight: 20 },

    ],

    supports: [

      { finding: "Absent ACTH stimulation response", weight: 50 },

      { finding: "Low sodium:potassium ratio", weight: 40 },

      { finding: "Baseline cortisol below reference interval", weight: 30 },

    ],

    against: [

      { finding: "Normal ACTH stimulation test", weight: -50 },

      { finding: "Persistent hypercortisolemia", weight: -40 },

      { finding: "Alternative cause of electrolyte abnormalities", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"electrolytes",
      parameter:
        "Serum electrolytes",
      frequency:
        "Frequently during stabilization, then every 2–4 weeks initially",
      reason:
        "Guides mineralocorticoid dose adjustments."
    },

    {
      id:"hydration",
      parameter:
        "Hydration status and blood pressure",
      frequency:
        "Daily during hospitalization",
      reason:
        "Assesses response to fluid therapy."
    },

    {
      id:"clinical",
      parameter:
        "Body weight and clinical signs",
      frequency:
        "Every recheck",
      reason:
        "Evaluates long-term disease control."
    }

  ],

  precautions: [

    {
      id:"crisis",
      title:
        "Addisonian Crisis is a Medical Emergency",
      description:
        "Immediate fluid resuscitation and glucocorticoid therapy are critical to prevent cardiovascular collapse."
    },

    {
      id:"stress-dose",
      title:
        "Increase Glucocorticoids During Stress",
      description:
        "Dogs receiving maintenance therapy require increased glucocorticoid doses during illness, surgery, or other stressful events."
    }

  ],

  prognosis:
    "Prognosis is excellent with lifelong hormone replacement and appropriate monitoring. Most dogs return to a normal quality of life once treatment is established. Delayed recognition of Addisonian crisis increases mortality.",

  strengtheningEvidence: [

    "Hyponatremia",

    "Hyperkalemia",

    "Low sodium:potassium ratio",

    "Absent ACTH stimulation response",

    "Bradycardia",

    "Collapse"

  ],

  weakeningEvidence: [

    "Normal ACTH stimulation test",

    "Persistent hypercortisolemia",

    "Normal electrolytes with alternative diagnosis",

    "Hyperthyroidism",

    "Alternative cause of shock"

  ],

  classicFindings: [

    "Vomiting",

    "Diarrhea",

    "Collapse",

    "Bradycardia",

    "Hyponatremia",

    "Hyperkalemia"

  ],

  ruleOutFindings: [

    "Acute kidney injury",

    "Gastroenteritis",

    "Hypovolemic shock",

    "Hyperadrenocorticism",

    "Sepsis"

  ],

};