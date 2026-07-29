import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineCerebrovascularAccident: DiseaseCard = {
  id: "canine-cerebrovascular-accident-dog",

  title: "Canine Cerebrovascular Accident (Stroke)",

  description:
    "An acute neurological disorder caused by disruption of blood supply to the brain resulting in ischemic or hemorrhagic brain injury.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Stroke",
    "Cerebrovascular Accident",
    "CVA",
    "Brain Infarction",
    "Intracranial Hemorrhage",
  ],

  overview:
    "Cerebrovascular accidents occur when blood flow to a region of the brain is interrupted or when bleeding occurs within the brain tissue. Ischemic strokes result from vascular obstruction, while hemorrhagic strokes result from vessel rupture. In dogs, underlying diseases such as hypertension, hyperadrenocorticism, kidney disease, cardiac disease, coagulopathies, and neoplasia may predispose to cerebrovascular events. Clinical signs are typically sudden and depend on the affected brain region.",

  clinicalProblems: [

    "Acute neurological dysfunction",
    "Ataxia",
    "Vestibular signs",
    "Seizures",
    "Altered mentation",
    "Cranial nerve deficits",
    "Weakness",
    "Loss of coordination"

  ],

  workflow: [

    {
      id: "emergency-neurological-assessment",
      step: 1,
      title: "Emergency Neurological Assessment",
      description:
        "Evaluate neurological status, consciousness level, and severity of deficits."
    },

    {
      id: "localization",
      step: 2,
      title: "Neuroanatomical Localization",
      description:
        "Identify the affected brain region based on neurological examination."
    },

    {
      id: "diagnostic-evaluation",
      step: 3,
      title: "Diagnostic Evaluation",
      description:
        "Confirm vascular brain injury and investigate underlying causes."
    },

    {
      id: "supportive-care",
      step: 4,
      title: "Supportive Management",
      description:
        "Maintain hydration, oxygenation, nutrition, and prevent complications."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Monitoring",
      description:
        "Manage underlying disease and monitor neurological recovery."
    }

  ],

  diagnostics: [

    {
      id: "neurological-exam",
      name: "Complete Neurological Examination",
      priority: "Essential",
      reason:
        "Localizes brain involvement and assesses severity."
    },

    {
      id: "mri-brain",
      name: "Brain MRI",
      priority: "Essential",
      reason:
        "Confirms ischemic or hemorrhagic brain lesions."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Essential",
      reason:
        "Investigates systemic diseases contributing to stroke."
    },

    {
      id: "blood-pressure",
      name: "Blood Pressure Measurement",
      priority: "Essential",
      reason:
        "Detects systemic hypertension as a risk factor."
    },

    {
      id: "coagulation-profile",
      name: "Coagulation Testing",
      priority: "Recommended",
      reason:
        "Evaluates bleeding disorders and clotting abnormalities."
    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "Acute neurological injury",
      reason:
        "Maintains physiological support during recovery."
    },

    {
      category: "Anticonvulsant",
      indication: "Seizures",
      reason:
        "Controls seizure activity if present."
    },

    {
      category: "Disease-Specific Therapy",
      indication: "Underlying cause",
      reason:
        "Treats contributing systemic disease."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "levetiracetam",
      priority: "Conditional",
      category: "Anticonvulsant",
    },

    {
      drugId: "phenobarbital",
      priority: "Conditional",
      category: "Anticonvulsant",
    }

  ],

  stabilization: [

    "Maintain airway and oxygenation.",
    "Control seizures if present.",
    "Maintain hydration and nutrition.",
    "Monitor body temperature.",
    "Identify and manage underlying systemic disease."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Sudden onset neurological signs", weight: 50 },

      { finding: "Older dog", weight: 25 },

      { finding: "History of hypertension or systemic disease", weight: 30 },

      { finding: "Acute loss of coordination", weight: 40 }

    ],

    clinicalSigns: [

      { finding: "Acute ataxia", weight: 45 },

      { finding: "Vestibular signs", weight: 40 },

      { finding: "Seizures", weight: 35 },

      { finding: "Altered mentation", weight: 40 },

      { finding: "Cranial nerve deficits", weight: 35 }

    ],

    biochemistry: [

      { finding: "Evidence of systemic disease causing vascular injury", weight: 25 },

      { finding: "Hypertension-associated abnormalities", weight: 25 }

    ],

    imaging: [

      { finding: "MRI evidence of cerebral infarction", weight: 50 },

      { finding: "MRI evidence of intracranial hemorrhage", weight: 50 }

    ],

    supports: [

      { finding: "Peracute onset neurological dysfunction", weight: 50 },

      { finding: "MRI-confirmed vascular lesion", weight: 50 },

      { finding: "Rapid stabilization after onset", weight: 30 }

    ],

    against: [

      { finding: "Progressive neurological deterioration over weeks", weight: -35 },

      { finding: "Brain tumor identified", weight: -45 },

      { finding: "Inflammatory CNS disease confirmed", weight: -40 }

    ],

  },

  monitoring: [

    {
      id:"neurological",
      parameter:
        "Neurological status",
      frequency:
        "Daily during acute phase",
      reason:
        "Detects progression or improvement."
    },

    {
      id:"blood-pressure",
      parameter:
        "Blood pressure",
      frequency:
        "Regular monitoring",
      reason:
        "Controls vascular risk factors."
    },

    {
      id:"underlying-disease",
      parameter:
        "Systemic disease monitoring",
      frequency:
        "Long-term",
      reason:
        "Prevents recurrence."
    }

  ],

  precautions: [

    {
      id:"acute",
      title:
        "Sudden Neurological Signs Require Urgent Evaluation",
      description:
        "Stroke signs can resemble seizures, vestibular disease, or inflammatory brain disease."
    },

    {
      id:"cause",
      title:
        "Investigate Underlying Disease",
      description:
        "Identification of hypertension, endocrine disease, or coagulation disorders is essential."
    }

  ],

  prognosis:
    "Prognosis varies depending on lesion location, severity, and underlying cause. Many dogs show improvement over days to weeks with supportive care.",

  strengtheningEvidence: [

    "Sudden onset neurological signs",

    "MRI-confirmed vascular lesion",

    "Older dog",

    "Underlying vascular disease",

    "Rapid stabilization"

  ],

  weakeningEvidence: [

    "Slow progressive signs",

    "Brain tumor",

    "Inflammatory encephalitis",

    "Normal MRI",

    "Toxic cause"

  ],

  classicFindings: [

    "Acute onset",

    "Vestibular signs",

    "Ataxia",

    "Seizures",

    "MRI brain lesion"

  ],

  ruleOutFindings: [

    "Meningoencephalitis",

    "Brain neoplasia",

    "Idiopathic vestibular syndrome",

    "Trauma",

    "Toxic encephalopathy"

  ],

};