import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const caninePortosystemicShunt: DiseaseCard = {
  id: "canine-portosystemic-shunt-dog",

  title: "Canine Portosystemic Shunt",

  description:
    "A congenital or acquired vascular anomaly in which portal blood bypasses the liver, resulting in hepatic insufficiency and accumulation of neurotoxic substances.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Portosystemic Shunt",
    "PSS",
    "Portocaval Shunt",
    "Congenital Portosystemic Shunt",
  ],

  overview:
    "Portosystemic shunt (PSS) is an abnormal vascular communication that diverts portal blood directly into the systemic circulation, bypassing hepatic metabolism. Congenital shunts are most common in young dogs, whereas acquired shunts usually develop secondary to portal hypertension. Reduced hepatic detoxification leads to hepatic encephalopathy, poor growth, gastrointestinal disease, ammonium biurate urolithiasis, and impaired drug metabolism. Surgical attenuation is the treatment of choice for most congenital shunts.",

  clinicalProblems: [

    "Hepatic encephalopathy",
    "Poor growth",
    "Gastrointestinal signs",
    "Ammonium biurate urolithiasis",
    "Microhepatica",
    "Hypoglycemia",
    "Hypoalbuminemia",
    "Coagulopathy"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Evaluate neurological status, gastrointestinal signs, growth history, and evidence of hepatic dysfunction."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm hepatic dysfunction and identify the location of the shunt using laboratory testing and advanced imaging."
    },

    {
      id: "medical-stabilization",
      step: 3,
      title: "Medical Stabilization",
      description:
        "Control hepatic encephalopathy and stabilize the patient before definitive treatment."
    },

    {
      id: "definitive-treatment",
      step: 4,
      title: "Definitive Treatment",
      description:
        "Perform surgical attenuation when appropriate and continue perioperative medical management."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Monitor liver function, neurological status, and nutritional management following treatment."
    }

  ],

  diagnostics: [

    {
      id: "bile-acids",
      name: "Pre- and Post-Prandial Serum Bile Acids",
      priority: "Essential",
      reason:
        "Highly sensitive screening test for portovascular anomalies."
    },

    {
      id: "ammonia",
      name: "Blood Ammonia Concentration",
      priority: "Essential",
      reason:
        "Supports diagnosis of hepatic encephalopathy."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Essential",
      reason:
        "Evaluates hepatic function and metabolic abnormalities."
    },

    {
      id: "abdominal-ultrasound",
      name: "Abdominal Ultrasonography",
      priority: "Essential",
      reason:
        "Identifies abnormal portal vasculature and microhepatica."
    },

    {
      id: "ct-angiography",
      name: "CT Angiography",
      priority: "Recommended",
      reason:
        "Defines shunt anatomy and assists surgical planning."
    }

  ],

  drugCategories: [

    {
      category: "Non-absorbable Disaccharide",
      indication: "Hepatic encephalopathy",
      reason: "Reduces intestinal ammonia absorption."
    },

    {
      category: "Antibiotic",
      indication: "Hepatic encephalopathy",
      reason: "Decreases intestinal ammonia-producing bacteria."
    },

    {
      category: "Anticonvulsant",
      indication: "Seizures",
      reason: "Controls neurologic complications when required."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "lactulose",
      priority: "First Line",
      category: "Non-absorbable Disaccharide",
    },

    {
      drugId: "metronidazole",
      priority: "Adjunctive",
      category: "Antibiotic",
    },

    {
      drugId: "levetiracetam",
      priority: "Supportive",
      category: "Anticonvulsant",
    },

  ],

  stabilization: [

    "Correct dehydration and electrolyte abnormalities.",
    "Initiate lactulose therapy.",
    "Administer appropriate antibiotics for hepatic encephalopathy.",
    "Feed a highly digestible hepatic diet.",
    "Stabilize neurological signs before anesthesia."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Young dog with poor growth", weight: 35 },

      { finding: "Intermittent neurological episodes after eating", weight: 40 },

      { finding: "Hypersalivation", weight: 20 },

      { finding: "Ammonium biurate urolithiasis", weight: 35 },

    ],

    clinicalSigns: [

      { finding: "Hepatic encephalopathy", weight: 50 },

      { finding: "Depression", weight: 25 },

      { finding: "Ataxia", weight: 30 },

      { finding: "Microhepatica", weight: 30 },

    ],

    biochemistry: [

      { finding: "Low BUN", weight: 30 },

      { finding: "Hypoalbuminemia", weight: 25 },

      { finding: "Hypoglycemia", weight: 20 },

      { finding: "Low cholesterol", weight: 20 },

    ],

    urinalysis: [

      { finding: "Ammonium biurate crystals", weight: 40 },

      { finding: "Low urine specific gravity", weight: 15 },

    ],

    supports: [

      { finding: "Markedly elevated bile acids", weight: 50 },

      { finding: "Hyperammonemia", weight: 45 },

      { finding: "Portosystemic shunt identified on imaging", weight: 50 },

    ],

    against: [

      { finding: "Normal bile acid stimulation test", weight: -40 },

      { finding: "Normal portal vasculature on advanced imaging", weight: -35 },

      { finding: "Alternative neurologic diagnosis confirmed", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"bile-acids",
      parameter:
        "Serum bile acids",
      frequency:
        "Before treatment and during follow-up",
      reason:
        "Assesses hepatic function and treatment response."
    },

    {
      id:"neurologic",
      parameter:
        "Neurological status",
      frequency:
        "Daily during hospitalization and every recheck",
      reason:
        "Monitors hepatic encephalopathy."
    },

    {
      id:"liver",
      parameter:
        "CBC and serum biochemistry",
      frequency:
        "Every 3–6 months",
      reason:
        "Evaluates long-term hepatic function."
    }

  ],

  precautions: [

    {
      id:"anesthesia",
      title:
        "Use Hepatically Metabolized Drugs Carefully",
      description:
        "Reduced hepatic metabolism may prolong the effects of many anesthetic and sedative drugs."
    },

    {
      id:"surgery",
      title:
        "Gradual Shunt Attenuation",
      description:
        "Rapid complete occlusion may result in life-threatening portal hypertension."
    }

  ],

  prognosis:
    "Prognosis is generally excellent for dogs with congenital extrahepatic shunts that undergo successful surgical attenuation. Medical management alone can improve clinical signs but is usually not curative.",

  strengtheningEvidence: [

    "Elevated bile acids",

    "Hyperammonemia",

    "Ammonium biurate crystals",

    "Poor growth",

    "Hepatic encephalopathy",

    "Shunt identified on imaging"

  ],

  weakeningEvidence: [

    "Normal bile acid stimulation test",

    "Normal blood ammonia",

    "Normal portal vasculature",

    "Alternative neurologic disease",

    "No evidence of hepatic dysfunction"

  ],

  classicFindings: [

    "Young dog",

    "Poor growth",

    "Hepatic encephalopathy",

    "Elevated bile acids",

    "Hyperammonemia",

    "Ammonium biurate crystalluria"

  ],

  ruleOutFindings: [

    "Meningoencephalitis",

    "Idiopathic epilepsy",

    "Hypoglycemia of other causes",

    "Chronic hepatitis",

    "Toxin exposure"

  ],

};