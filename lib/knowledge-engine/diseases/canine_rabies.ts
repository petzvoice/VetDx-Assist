import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineRabies: DiseaseCard = {
  id: "canine-rabies",

  title: "Canine Rabies",

  description:
    "A fatal zoonotic viral encephalomyelitis caused by Rabies virus, characterized by progressive neurological dysfunction, behavioral changes, paralysis, and death.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Rabies",
    "Canine Rabies Virus Infection",
    "Lyssavirus Infection",
    "Hydrophobia",
  ],

  overview:
    "Canine rabies is caused by Rabies virus, a member of the genus Lyssavirus (family Rhabdoviridae). Infection usually occurs following bites from infected animals when virus-containing saliva enters tissues. After local replication, the virus travels along peripheral nerves to the central nervous system, producing fatal encephalomyelitis. Clinical disease occurs in furious and paralytic forms. Once neurological signs develop, rabies is almost invariably fatal and represents a major public health emergency.",

  clinicalProblems: [

    "Acute viral encephalomyelitis",
    "Behavioral changes",
    "Aggression",
    "Hyperesthesia",
    "Cranial nerve dysfunction",
    "Dysphagia",
    "Profuse salivation",
    "Progressive paralysis",
    "Respiratory failure",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess vaccination status, bite wounds, wildlife exposure, travel history, and recent contact with suspected rabid animals."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate behavioral abnormalities, cranial nerve deficits, dysphagia, paralysis, aggression, and excessive salivation."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Ante-mortem diagnosis is limited. Definitive diagnosis is generally performed postmortem using brain tissue collected with appropriate biosafety precautions."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection using direct fluorescent antibody testing, RT-PCR, immunohistochemistry, or virus isolation."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Immediately isolate suspected animals, notify public health authorities, prevent human exposure, and manage according to national rabies regulations."
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
        "Highly sensitive confirmation of Rabies virus."
    },

    {
      id: "histopathology",
      name: "Histopathology",
      priority: "Recommended",
      reason:
        "May demonstrate characteristic Negri bodies within neurons."
    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "Animal welfare",
      reason:
        "There is no effective treatment once clinical signs develop."
    }

  ],

  recommendedDrugs: [],

  stabilization: [

    "Immediately isolate the animal.",
    "Prevent contact with humans and other animals.",
    "Use appropriate personal protective equipment.",
    "Notify veterinary and public health authorities immediately.",
    "Humane euthanasia is generally recommended according to local regulations."

  ],

  clinicalEvidence: {

    history: [

      { finding: "History of bite wound", weight: 95 },

      { finding: "Wildlife exposure", weight: 90 },

      { finding: "Unvaccinated dog", weight: 85 },

      { finding: "Residence in rabies-endemic area", weight: 80 }

    ],

    clinicalSigns: [

      { finding: "Behavioral changes", weight: 95 },

      { finding: "Aggression", weight: 90 },

      { finding: "Profuse salivation", weight: 95 },

      { finding: "Dysphagia", weight: 95 },

      { finding: "Dropped jaw", weight: 85 },

      { finding: "Progressive paralysis", weight: 100 },

      { finding: "Voice change", weight: 80 },

      { finding: "Seizures", weight: 70 }

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
      parameter: "Neurological status",
      frequency: "Every 4–6 hours",
      reason:
        "Monitors progression of encephalomyelitis."
    },

    {
      id: "behavior",
      parameter: "Behavior and mentation",
      frequency: "Every 4–6 hours",
      reason:
        "Evaluates worsening aggression, depression, or altered mental status."
    },

    {
      id: "swallowing",
      parameter: "Swallowing ability",
      frequency: "Every 4–6 hours",
      reason:
        "Detects progression of dysphagia and aspiration risk."
    },

    {
      id: "ambulation",
      parameter: "Ambulation and paralysis",
      frequency: "Every 4–6 hours",
      reason:
        "Assesses progression to generalized paralysis."
    },

    {
      id: "human-exposure",
      parameter: "Human and animal exposure",
      frequency: "Continuous",
      reason:
        "Critical for public health risk assessment and post-exposure management."
    }

  ],

  precautions: [

    {
      id: "zoonotic-risk",
      title: "Extreme Zoonotic Risk",
      description:
        "Rabies is almost invariably fatal after clinical signs develop. Avoid all direct contact with saliva, nervous tissue, and cerebrospinal fluid."
    },

    {
      id: "notification",
      title: "Immediate Notification",
      description:
        "Immediately notify veterinary and public health authorities. Follow all local rabies control regulations."
    },

    {
      id: "ppe",
      title: "Personal Protective Equipment",
      description:
        "Wear gloves, gown, face protection, and eye protection when handling suspected cases or diagnostic specimens."
    }

  ],

  prognosis:
    "Grave. Once clinical signs develop, rabies is almost invariably fatal. Humane euthanasia is generally recommended in accordance with national and local rabies control regulations.",

  strengtheningEvidence: [

    "History of bite from rabid animal",

    "Progressive neurological disease",

    "Positive fluorescent antibody test",

    "Positive RT-PCR"

  ],

  weakeningEvidence: [

    "Negative confirmatory testing",

    "Alternative neurological disease confirmed",

    "Recovery after onset of neurological signs"

  ],

  classicFindings: [

    "Behavioral changes",

    "Aggression",

    "Profuse salivation",

    "Dropped jaw",

    "Progressive paralysis"

  ],

  ruleOutFindings: [

    "Canine Distemper",

    "Tetanus",

    "Botulism",

    "Meningoencephalitis of Unknown Origin (MUO)",

    "Lead Poisoning",

    "Hypoglycemia",

    "Brain Neoplasia"

  ],

};