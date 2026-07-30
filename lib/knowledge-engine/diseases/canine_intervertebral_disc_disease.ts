import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineIntervertebralDiscDisease: DiseaseCard = {
  id: "canine-intervertebral-disc-disease-dog",

  title: "Canine Intervertebral Disc Disease (IVDD)",

  description:
    "A spinal disorder caused by degeneration and herniation of intervertebral discs resulting in spinal cord compression, pain, neurological deficits, and possible paralysis.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "IVDD",
    "Intervertebral Disc Herniation",
    "Disc Extrusion",
    "Disc Protrusion",
    "Hansen Type I Disc Disease",
    "Hansen Type II Disc Disease",
  ],

  overview:
    "Intervertebral disc disease is one of the most common neurological disorders in dogs. It occurs when degenerative changes in the intervertebral discs lead to extrusion or protrusion of disc material into the vertebral canal, causing spinal cord compression. Hansen Type I disc extrusion commonly affects chondrodystrophic breeds and causes acute neurological deterioration, while Hansen Type II disc protrusion is associated with chronic compression in older dogs. Clinical severity ranges from spinal pain to complete paralysis.",

  clinicalProblems: [

    "Spinal cord compression",
    "Back pain",
    "Neck pain",
    "Ataxia",
    "Paresis",
    "Paralysis",
    "Loss of deep pain sensation",
    "Urinary dysfunction"

  ],

  workflow: [

    {
      id: "neurological-assessment",
      step: 1,
      title: "Neurological Assessment",
      description:
        "Localize the spinal lesion and grade neurological severity."
    },

    {
      id: "stabilization",
      step: 2,
      title: "Initial Stabilization",
      description:
        "Control pain, prevent further spinal injury, and support affected patients."
    },

    {
      id: "diagnostic-evaluation",
      step: 3,
      title: "Diagnostic Evaluation",
      description:
        "Confirm disc compression using advanced spinal imaging."
    },

    {
      id: "treatment-selection",
      step: 4,
      title: "Treatment Selection",
      description:
        "Choose conservative management or surgical decompression based on neurological grade."
    },

    {
      id: "rehabilitation",
      step: 5,
      title: "Rehabilitation and Monitoring",
      description:
        "Support neurological recovery and prevent recurrence."
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
      id: "mri",
      name: "Spinal MRI",
      priority: "Essential",
      reason:
        "Gold standard imaging for spinal cord compression and disc material."
    },

    {
      id: "ct-myelography",
      name: "CT Myelography",
      priority: "Recommended",
      reason:
        "Alternative imaging method when MRI is unavailable."
    },

    {
      id: "radiographs",
      name: "Spinal Radiographs",
      priority: "Recommended",
      reason:
        "May identify disc mineralization and vertebral abnormalities."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Pre-anesthetic evaluation before surgery."
    }

  ],

  drugCategories: [

    {
      category: "Analgesic",
      indication: "Spinal pain",
      reason:
        "Provides pain control."
    },

    {
      category: "Anti-inflammatory",
      indication: "Inflammation associated with spinal compression",
      reason:
        "Reduces inflammatory response."
    },

    {
      category: "Muscle Relaxant",
      indication: "Muscle spasms",
      reason:
        "Improves comfort."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "gabapentin",
      priority: "First Line",
      category: "Analgesic",
    },

    {
      drugId: "methocarbamol",
      priority: "Adjunctive",
      category: "Muscle Relaxant",
    },

    {
      drugId: "meloxicam",
      priority: "Conditional",
      category: "Anti-inflammatory",
    }

  ],

  stabilization: [

    "Restrict activity immediately.",
    "Provide appropriate analgesia.",
    "Prevent further spinal trauma.",
    "Maintain bladder function in non-ambulatory patients.",
    "Refer severe neurological cases for surgical evaluation."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Acute onset weakness", weight: 40 },

      { finding: "Previous episodes of back pain", weight: 25 },

      { finding: "Chondrodystrophic breed", weight: 30 },

      { finding: "Difficulty walking", weight: 40 }

    ],

    clinicalSigns: [

      { finding: "Spinal pain", weight: 45 },

      { finding: "Ataxia", weight: 40 },

      { finding: "Paresis", weight: 45 },

      { finding: "Paralysis", weight: 50 },

      { finding: "Loss of deep pain sensation", weight: 50 }

    ],

    biochemistry: [

      { finding: "Usually normal serum biochemistry", weight: 10 }

    ],

    imaging: [

      { finding: "Disc extrusion on MRI", weight: 50 },

      { finding: "Spinal cord compression", weight: 50 },

      { finding: "Disc mineralization on radiographs", weight: 20 }

    ],

    supports: [

      { finding: "Neurological signs consistent with spinal lesion", weight: 45 },

      { finding: "MRI-confirmed disc compression", weight: 50 },

      { finding: "Improvement after decompression surgery", weight: 30 }

    ],

    against: [

      { finding: "Normal neurological examination", weight: -40 },

      { finding: "No evidence of spinal compression", weight: -45 },

      { finding: "Alternative neurological disease confirmed", weight: -40 }

    ],

  },

  monitoring: [

    {
      id:"neurological",
      parameter:
        "Neurological status",
      frequency:
        "Daily during acute disease",
      reason:
        "Detects progression or recovery."
    },

    {
      id:"pain",
      parameter:
        "Pain assessment",
      frequency:
        "Daily",
      reason:
        "Guides analgesic therapy."
    },

    {
      id:"bladder",
      parameter:
        "Urinary function",
      frequency:
        "Daily in non-ambulatory patients",
      reason:
        "Prevents urinary complications."
    }

  ],

  precautions: [

    {
      id:"activity",
      title:
        "Strict Activity Restriction",
      description:
        "Uncontrolled activity may worsen spinal cord compression."
    },

    {
      id:"deep-pain",
      title:
        "Deep Pain Loss is Prognostically Important",
      description:
        "Loss of deep pain sensation indicates severe spinal cord injury and requires urgent evaluation."
    }

  ],

  prognosis:
    "Prognosis depends on neurological grade, duration of compression, and treatment method. Dogs treated before severe neurological deterioration have better recovery potential.",

  strengtheningEvidence: [

    "Spinal pain",

    "Ataxia",

    "Paresis",

    "Acute neurological deterioration",

    "MRI-confirmed disc compression",

    "Breed predisposition"

  ],

  weakeningEvidence: [

    "Normal neurological examination",

    "No spinal lesion on imaging",

    "Peripheral nerve disease",

    "Muscle disease",

    "Brain disorder"

  ],

  classicFindings: [

    "Back or neck pain",

    "Difficulty walking",

    "Ataxia",

    "Paresis",

    "Paralysis",

    "Disc compression on MRI"

  ],

  ruleOutFindings: [

    "Fibrocartilaginous embolism",

    "Spinal neoplasia",

    "Meningomyelitis",

    "Trauma",

    "Degenerative myelopathy"

  ],

};