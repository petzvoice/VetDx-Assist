import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineRabies: DiseaseCard = {
  id: "feline-rabies",

  title: "Feline Rabies",

  description:
    "A fatal zoonotic viral encephalomyelitis caused by Rabies virus, characterized by rapidly progressive neurological dysfunction, behavioral changes, paralysis, and death.",

  species: [
    Species.CAT,
  ],

  synonyms: [
    "Rabies",
    "Feline Rabies Virus Infection",
    "Lyssavirus Infection",
    "Hydrophobia",
  ],

  overview:
    "Feline rabies is caused by Rabies virus, a member of the genus Lyssavirus (family Rhabdoviridae). Infection usually follows bites from infected animals, particularly dogs, wildlife, or bats in endemic regions. The virus ascends peripheral nerves to the central nervous system, producing fatal encephalomyelitis. Cats commonly present with the furious form characterized by aggression and hypersensitivity, although paralytic disease also occurs. Rabies is a major zoonosis requiring immediate notification and public health intervention.",

  clinicalProblems: [

    "Acute viral encephalomyelitis",
    "Behavioral changes",
    "Aggression",
    "Hyperesthesia",
    "Dysphagia",
    "Profuse salivation",
    "Cranial nerve dysfunction",
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
        "Assess vaccination status, outdoor access, bite wounds, wildlife exposure, travel history, and contact with suspected rabid animals."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate behavioral abnormalities, aggression, cranial nerve deficits, dysphagia, paralysis, and excessive salivation."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Definitive diagnosis is generally performed postmortem using brain tissue collected with appropriate biosafety precautions."
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
        "Immediately isolate suspected cats, notify veterinary and public health authorities, prevent human exposure, and follow national rabies control regulations."
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

    "Immediately isolate the cat.",
    "Prevent contact with humans and other animals.",
    "Use appropriate personal protective equipment.",
    "Notify veterinary and public health authorities immediately.",
    "Humane euthanasia is generally recommended according to local regulations."

  ],

  clinicalEvidence: {

    history: [

      { finding: "History of bite wound", weight: 95 },

      { finding: "Outdoor access", weight: 80 },

      { finding: "Wildlife or bat exposure", weight: 90 },

      { finding: "Unvaccinated cat", weight: 85 }

    ],

    clinicalSigns: [

      { finding: "Behavioral changes", weight: 95 },

      { finding: "Aggression", weight: 95 },

      { finding: "Hyperesthesia", weight: 85 },

      { finding: "Profuse salivation", weight: 95 },

      { finding: "Dysphagia", weight: 95 },

      { finding: "Progressive paralysis", weight: 100 },

      { finding: "Anisocoria", weight: 70 },

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
        "Rabies is almost invariably fatal after clinical signs develop. Avoid all direct contact with saliva and nervous tissue."
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
        "Wear gloves, gown, face protection, and eye protection when handling suspected cats or diagnostic specimens."
    }

  ],

  prognosis:
    "Grave. Clinical rabies is almost invariably fatal. Humane euthanasia is generally recommended in accordance with national and local rabies control regulations.",

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

    "Hyperesthesia",

    "Progressive paralysis"

  ],

  ruleOutFindings: [

    "Feline Infectious Peritonitis (Neurologic Form)",

    "Toxoplasmosis",

    "Cryptococcosis",

    "Brain Neoplasia",

    "Lead Poisoning",

    "Traumatic Brain Injury",

    "Status Epilepticus"

  ],

};