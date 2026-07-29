import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineFibrocartilaginousEmbolism: DiseaseCard = {
  id: "canine-fibrocartilaginous-embolism-dog",

  title: "Canine Fibrocartilaginous Embolism (FCE)",

  description:
    "A non-inflammatory spinal cord vascular disorder caused by obstruction of spinal blood vessels by fibrocartilaginous material resulting in sudden neurological deficits.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Fibrocartilaginous Embolism",
    "FCE",
    "Spinal Cord Stroke",
    "Cartilaginous Embolism",
  ],

  overview:
    "Fibrocartilaginous embolism is an acute spinal cord injury caused by embolization of fibrocartilaginous material similar to the nucleus pulposus into spinal cord vasculature. It produces sudden onset neurological deficits that are often asymmetric. Unlike intervertebral disc disease, FCE is typically non-painful after the initial episode and does not cause progressive spinal cord compression. Recovery depends on the severity and location of the spinal cord infarction.",

  clinicalProblems: [

    "Acute spinal cord dysfunction",
    "Sudden weakness",
    "Paresis",
    "Paralysis",
    "Asymmetric neurological deficits",
    "Loss of proprioception",
    "Urinary dysfunction"

  ],

  workflow: [

    {
      id: "neurological-assessment",
      step: 1,
      title: "Neurological Assessment",
      description:
        "Localize the spinal cord lesion and determine severity of neurological impairment."
    },

    {
      id: "emergency-stabilization",
      step: 2,
      title: "Initial Stabilization",
      description:
        "Provide supportive care and prevent secondary injury."
    },

    {
      id: "diagnostic-evaluation",
      step: 3,
      title: "Diagnostic Evaluation",
      description:
        "Differentiate FCE from compressive and inflammatory spinal diseases."
    },

    {
      id: "rehabilitation",
      step: 4,
      title: "Rehabilitation",
      description:
        "Initiate physiotherapy and supportive mobility management."
    },

    {
      id: "follow-up",
      step: 5,
      title: "Follow-Up",
      description:
        "Monitor neurological recovery and functional improvement."
    }

  ],

  diagnostics: [

    {
      id: "neurological-exam",
      name: "Complete Neurological Examination",
      priority: "Essential",
      reason:
        "Determines lesion localization and severity."
    },

    {
      id: "mri-spine",
      name: "Spinal MRI",
      priority: "Essential",
      reason:
        "Identifies spinal cord infarction and excludes compression."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates general health and concurrent disease."
    },

    {
      id: "csf-analysis",
      name: "Cerebrospinal Fluid Analysis",
      priority: "Conditional",
      reason:
        "Helps exclude inflammatory myelitis."
    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "Spinal cord recovery",
      reason:
        "Maintains function and prevents complications."
    },

    {
      category: "Analgesic",
      indication: "Initial discomfort",
      reason:
        "Controls pain if present."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "gabapentin",
      priority: "Conditional",
      category: "Analgesic",
    }

  ],

  stabilization: [

    "Provide supportive nursing care.",
    "Maintain bladder function.",
    "Prevent pressure sores.",
    "Begin controlled rehabilitation exercises.",
    "Avoid unnecessary corticosteroid therapy unless another indication exists."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Sudden onset neurological deficit", weight: 50 },

      { finding: "Exercise or activity before onset", weight: 25 },

      { finding: "No previous neurological disease", weight: 20 }

    ],

    clinicalSigns: [

      { finding: "Acute paresis", weight: 45 },

      { finding: "Asymmetric neurological deficits", weight: 45 },

      { finding: "Non-painful neurological dysfunction", weight: 40 },

      { finding: "Loss of proprioception", weight: 35 },

      { finding: "Paralysis", weight: 40 }

    ],

    biochemistry: [

      { finding: "Usually normal blood work", weight: 15 }

    ],

    imaging: [

      { finding: "MRI evidence of spinal cord infarction", weight: 50 },

      { finding: "Absence of spinal cord compression", weight: 40 }

    ],

    supports: [

      { finding: "Sudden onset with rapid stabilization", weight: 45 },

      { finding: "Asymmetric spinal cord signs", weight: 45 },

      { finding: "No spinal pain", weight: 30 },

      { finding: "MRI confirmation", weight: 50 }

    ],

    against: [

      { finding: "Progressive worsening over days", weight: -35 },

      { finding: "Severe spinal pain", weight: -30 },

      { finding: "Disc extrusion on MRI", weight: -45 },

      { finding: "Inflammatory CSF findings", weight: -30 }

    ],

  },

  monitoring: [

    {
      id:"neurological",
      parameter:
        "Neurological function",
      frequency:
        "Daily initially",
      reason:
        "Tracks recovery or deterioration."
    },

    {
      id:"mobility",
      parameter:
        "Mobility and rehabilitation progress",
      frequency:
        "Weekly to monthly",
      reason:
        "Evaluates functional improvement."
    },

    {
      id:"bladder",
      parameter:
        "Urinary function",
      frequency:
        "Daily if non-ambulatory",
      reason:
        "Prevents urinary complications."
    }

  ],

  precautions: [

    {
      id:"differential",
      title:
        "Differentiate From IVDD",
      description:
        "FCE can resemble disc herniation but typically lacks progressive compression and severe pain."
    },

    {
      id:"rehabilitation",
      title:
        "Early Rehabilitation is Important",
      description:
        "Physiotherapy improves mobility and prevents secondary complications."
    }

  ],

  prognosis:
    "Prognosis depends mainly on neurological severity and preservation of deep pain sensation. Many dogs improve with supportive care and rehabilitation.",

  strengtheningEvidence: [

    "Sudden onset",

    "Asymmetric deficits",

    "Non-painful neurological signs",

    "MRI evidence of spinal cord infarction",

    "No compression"

  ],

  weakeningEvidence: [

    "Severe spinal pain",

    "Progressive deterioration",

    "Disc compression",

    "Spinal tumor",

    "Inflammatory myelitis"

  ],

  classicFindings: [

    "Sudden weakness",

    "Asymmetric paresis",

    "Non-painful deficits",

    "Normal mentation",

    "MRI spinal cord lesion"

  ],

  ruleOutFindings: [

    "Intervertebral disc disease",

    "Spinal neoplasia",

    "Meningomyelitis",

    "Trauma",

    "Degenerative myelopathy"

  ],

};