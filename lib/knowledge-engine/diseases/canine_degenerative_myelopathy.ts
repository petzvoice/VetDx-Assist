import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineDegenerativeMyelopathy: DiseaseCard = {
  id: "canine-degenerative-myelopathy-dog",

  title: "Canine Degenerative Myelopathy",

  description:
    "A progressive degenerative spinal cord disease causing gradual loss of coordination, weakness, and paralysis of the pelvic limbs in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Degenerative Myelopathy",
    "DM",
    "Chronic Degenerative Radiculomyelopathy",
  ],

  overview:
    "Degenerative myelopathy is a progressive, non-painful degenerative disease of the spinal cord that resembles amyotrophic lateral sclerosis in humans. It primarily affects older dogs and is associated with mutations in the SOD1 gene in several breeds. The disease begins with pelvic limb proprioceptive deficits and progresses to paraplegia, loss of urinary and fecal control, and eventually respiratory muscle involvement. There is no curative treatment, and management focuses on supportive care, rehabilitation, and maintaining quality of life.",

  clinicalProblems: [

    "Progressive spinal cord degeneration",
    "Pelvic limb weakness",
    "Ataxia",
    "Loss of proprioception",
    "Paralysis",
    "Muscle atrophy",
    "Urinary dysfunction",
    "Reduced quality of life"

  ],

  workflow: [

    {
      id: "neurological-assessment",
      step: 1,
      title: "Neurological Assessment",
      description:
        "Localize the lesion and evaluate progression of neurological deficits."
    },

    {
      id: "rule-out-differentials",
      step: 2,
      title: "Rule Out Other Spinal Diseases",
      description:
        "Exclude intervertebral disc disease, spinal tumors, and inflammatory disorders."
    },

    {
      id: "diagnostic-support",
      step: 3,
      title: "Diagnostic Support",
      description:
        "Use advanced imaging and genetic testing when appropriate."
    },

    {
      id: "supportive-management",
      step: 4,
      title: "Supportive Management",
      description:
        "Provide rehabilitation, mobility assistance, and nursing care."
    },

    {
      id: "quality-of-life",
      step: 5,
      title: "Quality of Life Monitoring",
      description:
        "Evaluate progression and determine appropriate long-term care decisions."
    }

  ],

  diagnostics: [

    {
      id: "neurological-exam",
      name: "Complete Neurological Examination",
      priority: "Essential",
      reason:
        "Identifies progressive upper motor neuron spinal cord signs."
    },

    {
      id: "mri-spine",
      name: "Spinal MRI",
      priority: "Recommended",
      reason:
        "Rules out compressive spinal diseases."
    },

    {
      id: "genetic-test",
      name: "SOD1 Genetic Testing",
      priority: "Recommended",
      reason:
        "Identifies genetic risk mutation associated with degenerative myelopathy."
    },

    {
      id: "csf-analysis",
      name: "Cerebrospinal Fluid Analysis",
      priority: "Conditional",
      reason:
        "Helps exclude inflammatory spinal cord disease."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates overall health before supportive therapy."
    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "Disease management",
      reason:
        "Improves mobility and quality of life."
    },

    {
      category: "Analgesic",
      indication: "Secondary discomfort",
      reason:
        "Controls pain from compensatory musculoskeletal problems."
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

    "Prevent pressure sores in non-ambulatory patients.",
    "Provide assisted mobility.",
    "Maintain healthy body weight.",
    "Begin physiotherapy and rehabilitation exercises.",
    "Provide bladder and hygiene support when required."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Older large-breed dog", weight: 30 },

      { finding: "Slow progressive weakness", weight: 45 },

      { finding: "Difficulty climbing stairs", weight: 30 },

      { finding: "No obvious pain", weight: 35 }

    ],

    clinicalSigns: [

      { finding: "Pelvic limb proprioceptive deficits", weight: 45 },

      { finding: "Progressive hind limb weakness", weight: 50 },

      { finding: "Ataxia", weight: 40 },

      { finding: "Loss of ambulation", weight: 45 },

      { finding: "Spinal pain absent", weight: 25 }

    ],

    biochemistry: [

      { finding: "Usually normal blood work", weight: 15 }

    ],

    imaging: [

      { finding: "No compressive lesion on MRI", weight: 35 },

      { finding: "Spinal cord atrophy in advanced cases", weight: 30 }

    ],

    supports: [

      { finding: "Progressive non-painful hind limb dysfunction", weight: 50 },

      { finding: "Breed predisposition", weight: 25 },

      { finding: "Positive SOD1 mutation", weight: 45 },

      { finding: "Exclusion of compressive spinal disease", weight: 40 }

    ],

    against: [

      { finding: "Severe spinal pain", weight: -30 },

      { finding: "Acute onset paralysis", weight: -35 },

      { finding: "MRI showing disc compression", weight: -45 },

      { finding: "Inflammatory spinal disease confirmed", weight: -40 }

    ],

  },

  monitoring: [

    {
      id:"neurological",
      parameter:
        "Neurological progression",
      frequency:
        "Every 1–3 months",
      reason:
        "Tracks disease advancement."
    },

    {
      id:"mobility",
      parameter:
        "Mobility and quality of life",
      frequency:
        "Regular assessment",
      reason:
        "Guides supportive care decisions."
    },

    {
      id:"skin",
      parameter:
        "Pressure sores and hygiene",
      frequency:
        "Daily in non-ambulatory patients",
      reason:
        "Prevents secondary complications."
    }

  ],

  precautions: [

    {
      id:"pain",
      title:
        "Pain Suggests Another Diagnosis",
      description:
        "Degenerative myelopathy is typically non-painful; significant pain should prompt investigation of alternative causes."
    },

    {
      id:"mobility",
      title:
        "Supportive Care is Essential",
      description:
        "Assistive devices and rehabilitation can improve function and quality of life."
    }

  ],

  prognosis:
    "Degenerative myelopathy is progressive and ultimately fatal. The rate of progression varies, but most affected dogs gradually lose mobility over months to years.",

  strengtheningEvidence: [

    "Older dog",

    "Progressive hind limb weakness",

    "Non-painful neurological deficits",

    "Proprioceptive loss",

    "SOD1 mutation",

    "No spinal compression"

  ],

  weakeningEvidence: [

    "Acute onset",

    "Severe spinal pain",

    "Disc extrusion",

    "Spinal tumor",

    "Inflammatory myelitis"

  ],

  classicFindings: [

    "Older large-breed dog",

    "Progressive hind limb ataxia",

    "Proprioceptive deficits",

    "No spinal pain",

    "Progression to paralysis"

  ],

  ruleOutFindings: [

    "Intervertebral disc disease",

    "Spinal neoplasia",

    "Fibrocartilaginous embolism",

    "Meningomyelitis",

    "Traumatic spinal injury"

  ],

};