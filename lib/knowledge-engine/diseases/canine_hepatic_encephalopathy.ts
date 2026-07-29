import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineHepaticEncephalopathy: DiseaseCard = {
  id: "canine-hepatic-encephalopathy-dog",

  title: "Canine Hepatic Encephalopathy",

  description:
    "A neurological syndrome caused by impaired liver function or abnormal portal blood flow resulting in accumulation of neurotoxic substances, especially ammonia, affecting brain function.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Hepatic Encephalopathy",
    "HE",
    "Portosystemic Encephalopathy",
    "Liver Failure Associated Neurological Syndrome",
  ],

  overview:
    "Hepatic encephalopathy is a reversible neurological disorder associated with liver dysfunction or abnormal blood flow bypassing the liver. Reduced hepatic detoxification allows accumulation of substances such as ammonia and other neurotoxins, causing altered mental status and neurological abnormalities. It is commonly associated with congenital or acquired portosystemic shunts, chronic liver disease, and severe hepatic dysfunction. Clinical signs range from mild behavioral changes to seizures and coma.",

  clinicalProblems: [

    "Altered mentation",
    "Neurological dysfunction",
    "Ammonia accumulation",
    "Abnormal portal circulation",
    "Liver dysfunction",
    "Seizures",
    "Reduced detoxification capacity"

  ],

  workflow: [

    {
      id: "neurological-assessment",
      step: 1,
      title: "Neurological Assessment",
      description:
        "Evaluate abnormal behavior, consciousness level, and neurological signs."
    },

    {
      id: "liver-evaluation",
      step: 2,
      title: "Hepatic Evaluation",
      description:
        "Assess liver function and identify underlying hepatic disease."
    },

    {
      id: "portal-system-evaluation",
      step: 3,
      title: "Portal Circulation Assessment",
      description:
        "Investigate congenital or acquired portosystemic abnormalities."
    },

    {
      id: "stabilization",
      step: 4,
      title: "Stabilization",
      description:
        "Reduce toxin absorption and manage neurological complications."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Treat underlying liver disease and prevent recurrence."
    }

  ],

  diagnostics: [

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry Profile",
      priority: "Essential",
      reason:
        "Evaluates liver enzyme activity, protein levels, and hepatic function."
    },

    {
      id: "bile-acids",
      name: "Serum Bile Acid Testing",
      priority: "Essential",
      reason:
        "Assesses hepatic function and portal circulation abnormalities."
    },

    {
      id: "ammonia",
      name: "Blood Ammonia Measurement",
      priority: "Recommended",
      reason:
        "Supports diagnosis of ammonia-associated neurological dysfunction."
    },

    {
      id: "abdominal-ultrasound",
      name: "Abdominal Ultrasound",
      priority: "Recommended",
      reason:
        "Evaluates liver structure and possible portosystemic shunts."
    },

    {
      id: "ct-angiography",
      name: "CT Angiography",
      priority: "Recommended",
      reason:
        "Identifies vascular abnormalities such as portosystemic shunts."
    }

  ],

  drugCategories: [

    {
      category: "Ammonia Reduction Therapy",
      indication: "Reduce intestinal ammonia production",
      reason:
        "Decreases absorption of neurotoxic substances."
    },

    {
      category: "Antibiotic Therapy",
      indication: "Reduce intestinal bacterial ammonia production",
      reason:
        "Modifies intestinal bacterial metabolism."
    },

    {
      category: "Nutritional Management",
      indication: "Support liver function",
      reason:
        "Provides appropriate dietary protein management."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "lactulose",
      priority: "First Line",
      category: "Ammonia Reduction Therapy",
    },

    {
      drugId: "metronidazole",
      priority: "Supportive",
      category: "Antibiotic",
    }

  ],

  stabilization: [

    "Correct dehydration and metabolic abnormalities.",
    "Reduce ammonia absorption.",
    "Control seizures if present.",
    "Provide appropriate nutritional support.",
    "Identify and treat underlying liver disease."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Episodes of abnormal behavior", weight: 40 },

      { finding: "Signs worsen after eating", weight: 35 },

      { finding: "Young dog with possible congenital shunt", weight: 40 },

      { finding: "Known liver disease", weight: 45 },

      { finding: "Intermittent neurological episodes", weight: 45 }

    ],

    clinicalSigns: [

      { finding: "Disorientation", weight: 50 },

      { finding: "Head pressing", weight: 45 },

      { finding: "Ataxia", weight: 40 },

      { finding: "Seizures", weight: 45 },

      { finding: "Behavioral changes", weight: 40 },

      { finding: "Blindness", weight: 25 }

    ],

    biochemistry: [

      { finding: "Increased bile acids", weight: 50 },

      { finding: "Hyperammonemia", weight: 55 },

      { finding: "Low albumin", weight: 30 },

      { finding: "Low BUN", weight: 30 }

    ],

    imaging: [

      { finding: "Portosystemic shunt identified", weight: 70 },

      { finding: "Abnormal liver size", weight: 30 },

      { finding: "Hepatic structural abnormalities", weight: 35 }

    ],

    supports: [

      { finding: "Neurological signs with liver abnormalities", weight: 50 },

      { finding: "High bile acids", weight: 50 },

      { finding: "Portosystemic shunt confirmation", weight: 70 },

      { finding: "Response to ammonia-reducing therapy", weight: 40 }

    ],

    against: [

      { finding: "Normal liver function tests", weight: -35 },

      { finding: "Primary neurological disease confirmed", weight: -40 },

      { finding: "No episodic neurological signs", weight: -25 },

      { finding: "Normal portal circulation", weight: -45 }

    ],

  },

  monitoring: [

    {
      id:"neurological",
      parameter:
        "Neurological status",
      frequency:
        "Regular assessment",
      reason:
        "Detects progression or improvement."
    },

    {
      id:"liver-function",
      parameter:
        "Liver function parameters",
      frequency:
        "Periodic",
      reason:
        "Monitors hepatic disease."
    },

    {
      id:"ammonia",
      parameter:
        "Ammonia-related abnormalities",
      frequency:
        "As indicated",
      reason:
        "Evaluates treatment response."
    }

  ],

  precautions: [

    {
      id:"underlying-cause",
      title:
        "Treat Underlying Liver Disorder",
      description:
        "Hepatic encephalopathy is a consequence of liver dysfunction or abnormal portal circulation."
    },

    {
      id:"neurological",
      title:
        "Monitor Neurological Changes",
      description:
        "Severe cases may progress to seizures, coma, and life-threatening complications."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause. Dogs with treatable portosystemic shunts may improve significantly, while advanced liver disease carries a guarded prognosis.",

  strengtheningEvidence: [

    "Episodic neurological signs",

    "Elevated bile acids",

    "Hyperammonemia",

    "Portosystemic shunt",

    "Known liver disease"

  ],

  weakeningEvidence: [

    "Normal liver evaluation",

    "Persistent progressive neurological disease",

    "No metabolic abnormalities",

    "Alternative neurological diagnosis"

  ],

  classicFindings: [

    "Young dog with episodic signs",

    "Disorientation",

    "Head pressing",

    "High bile acids",

    "Portosystemic shunt"

  ],

  ruleOutFindings: [

    "Primary epilepsy",

    "Brain tumor",

    "Hypoglycemia",

    "Toxicity",

    "Vestibular disease"

  ],

};