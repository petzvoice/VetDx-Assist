import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineRabies: DiseaseCard = {
  id: "bovine-rabies",

  title: "Bovine Rabies",

  description:
    "A fatal zoonotic viral encephalomyelitis caused by Rabies virus, resulting in progressive neurological dysfunction and death.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Rabies",
    "Lyssavirus Infection",
    "Hydrophobia",
  ],

  overview:
    "Rabies is an acute, progressive, and invariably fatal viral disease caused by viruses of the genus Lyssavirus (family Rhabdoviridae). Infection usually occurs following bites from infected dogs, wild carnivores, or vampire bats in endemic regions. Following peripheral replication, the virus travels along peripheral nerves to the central nervous system, producing fatal encephalitis. Rabies is a major zoonosis requiring immediate public health notification.",

  clinicalProblems: [

    "Acute viral encephalitis",
    "Behavioral changes",
    "Hyperesthesia",
    "Progressive ataxia",
    "Ascending paralysis",
    "Dysphagia",
    "Excessive salivation",
    "Recumbency",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess history of animal bites, wildlife exposure, vaccination status, sudden neurological disease, and regional rabies occurrence."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate behavioral abnormalities, cranial nerve deficits, paralysis, excessive salivation, dysphagia, and recumbency."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Brain tissue should be collected only after death using appropriate biosafety precautions for laboratory confirmation."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection using direct fluorescent antibody testing, RT-PCR, or immunohistochemistry."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Immediately isolate suspected animals, notify veterinary authorities, and implement public health measures."
    }

  ],

  diagnostics: [

    {
      id: "neurological-examination",
      name: "Neurological Examination",
      priority: "Essential",
      reason:
        "Progressive neurological disease strongly supports rabies."

    },

    {
      id: "direct-fluorescent-antibody",
      name: "Direct Fluorescent Antibody Test",
      priority: "Essential",
      reason:
        "Gold standard postmortem diagnostic test."

    },

    {
      id: "rt-pcr",
      name: "RT-PCR",
      priority: "Recommended",
      reason:
        "Sensitive confirmation of rabies virus."

    },

    {
      id: "histopathology",
      name: "Histopathology",
      priority: "Recommended",
      reason:
        "May demonstrate characteristic Negri bodies."

    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "Animal welfare",
      reason:
        "No effective treatment exists once clinical disease develops."
    }

  ],

  recommendedDrugs: [],

  stabilization: [

    "Immediately isolate the animal.",
    "Avoid direct handling without appropriate personal protective equipment.",
    "Notify veterinary and public health authorities immediately.",
    "Prevent exposure of humans and animals.",
    "Humane euthanasia is generally recommended according to national regulations."

  ],

  clinicalEvidence: {

    history: [

      { finding: "History of bite wound", weight: 95 },

      { finding: "Wildlife exposure", weight: 90 },

      { finding: "Unvaccinated animal", weight: 80 },

      { finding: "Rabies-endemic region", weight: 80 }

    ],

    clinicalSigns: [

      { finding: "Behavioral changes", weight: 90 },

      { finding: "Hyperesthesia", weight: 80 },

      { finding: "Progressive paralysis", weight: 100 },

      { finding: "Dysphagia", weight: 95 },

      { finding: "Profuse salivation", weight: 90 },

      { finding: "Ataxia", weight: 85 },

      { finding: "Recumbency", weight: 90 }

    ],

    biochemistry: [

      { finding: "No characteristic clinicopathological abnormalities", weight: 5 }

    ],

    imaging: [

      { finding: "No routine diagnostic imaging findings", weight: 5 }

    ],

    supports: [

      { finding: "Positive fluorescent antibody test", weight: 100 },

      { finding: "Positive RT-PCR", weight: 100 },

      { finding: "Characteristic neurological progression", weight: 95 },

      { finding: "Negri bodies identified", weight: 95 }

    ],

    against: [

      { finding: "Negative confirmatory testing", weight: -90 },

      { finding: "Alternative neurological disease confirmed", weight: -85 },

      { finding: "Recovery after onset of neurological signs", weight: -100 }

    ],

  },
    monitoring: [

    {
      id: "neurological-status",
      parameter: "Neurological progression",
      frequency: "Every 4–6 hours",
      reason:
        "Monitors progression of encephalomyelitis."
    },

    {
      id: "behavior",
      parameter: "Behavioral changes",
      frequency: "Every 4–6 hours",
      reason:
        "Evaluates worsening aggression, depression, or abnormal behavior."
    },

    {
      id: "swallowing",
      parameter: "Swallowing ability",
      frequency: "Every 4–6 hours",
      reason:
        "Detects progression of dysphagia and aspiration risk."
    },

    {
      id: "recumbency",
      parameter: "Ability to stand",
      frequency: "Every 4–6 hours",
      reason:
        "Assesses progression to paralysis."
    },

    {
      id: "human-exposure",
      parameter: "Human and animal exposure",
      frequency: "Continuous",
      reason:
        "Essential for public health risk assessment and post-exposure management."
    }

  ],

  precautions: [

    {
      id: "zoonotic",
      title: "Zoonotic Risk",
      description:
        "Rabies is invariably fatal after clinical signs develop and poses an extreme zoonotic risk. Avoid direct contact with saliva and nervous tissue."
    },

    {
      id: "notification",
      title: "Immediate Notification",
      description:
        "Suspected cases must be reported immediately to the appropriate veterinary and public health authorities according to local regulations."
    },

    {
      id: "ppe",
      title: "Personal Protective Equipment",
      description:
        "Use gloves, eye protection, face protection, and other appropriate PPE when handling suspected animals or specimens."
    }

  ],

  prognosis:
    "Grave. Rabies is almost invariably fatal once clinical signs develop. There is no effective treatment, and humane euthanasia is generally recommended in accordance with national disease control regulations.",

  strengtheningEvidence: [

    "History of bite exposure",

    "Progressive neurological disease",

    "Positive fluorescent antibody test",

    "Positive RT-PCR"

  ],

  weakeningEvidence: [

    "Negative confirmatory testing",

    "Alternative neurological diagnosis confirmed",

    "Recovery following onset of neurological signs"

  ],

  classicFindings: [

    "Behavioral changes",

    "Profuse salivation",

    "Dysphagia",

    "Progressive paralysis",

    "Death"

  ],

  ruleOutFindings: [

    "Listeriosis",

    "Polioencephalomalacia",

    "Lead Poisoning",

    "Nervous Ketosis",

    "Botulism",

    "Hypomagnesemic Tetany",

    "Thrombotic Meningoencephalitis"

  ],

};