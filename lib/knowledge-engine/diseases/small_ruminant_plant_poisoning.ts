import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantPlantPoisoning: DiseaseCard = {
  id: "small-ruminant-plant-poisoning",

  title: "Plant Poisoning",

  description:
    "Plant poisoning is an intoxication caused by ingestion of toxic plants containing compounds such as alkaloids, glycosides, oxalates, cyanogenic glycosides, nitrates, or other phytotoxins, resulting in gastrointestinal, neurological, cardiovascular, hepatic, renal, or respiratory disease in sheep and goats.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Phytotoxicosis",
    "Toxic Plant Poisoning",
    "Poisonous Plant Intoxication",
  ],

  overview:
    "Numerous poisonous plants can affect sheep and goats. Clinical presentation depends on the plant species, toxic compound, amount consumed, and duration of exposure. Common toxic plants include Lantana spp., Oleander (Nerium oleander), Bracken fern, Senecio spp., Rhododendron spp., Oak (Quercus spp.), Castor bean (Ricinus communis), and many others. Early identification of exposure, prompt removal from contaminated pasture, supportive care, and administration of specific antidotes when available are essential for successful management.",

  clinicalProblems: [

    "Gastrointestinal disease",
    "Neurological dysfunction",
    "Respiratory distress",
    "Cardiac abnormalities",
    "Hepatic injury",
    "Renal injury",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Determine recent grazing history, access to ornamental plants, feed contamination, seasonal pasture changes, and the number of affected animals."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Perform a complete physical examination with emphasis on neurological, cardiovascular, gastrointestinal, hepatic, and respiratory systems."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Identify suspected plants, perform laboratory testing, and evaluate organ function according to the suspected toxicosis."
    },

    {
      id: "management",
      step: 4,
      title: "Emergency Management",
      description:
        "Immediately prevent further exposure, provide supportive care, administer specific antidotes when indicated, and manage organ dysfunction."
    }

  ],

  diagnostics: [

    {
      id: "plant-identification",
      name: "Plant Identification",
      priority: "Essential",
      reason:
        "Identification of the suspected toxic plant is critical for diagnosis and treatment."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates systemic effects and inflammatory changes."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Assesses hepatic, renal, electrolyte, and metabolic abnormalities."
    },

    {
      id: "rumen-contents",
      name: "Rumen Content Examination",
      priority: "Recommended",
      reason:
        "May identify toxic plant material following recent ingestion."
    }

  ],

  drugCategories: [

    {
      category: "Activated Charcoal",
      indication: "Recent toxin ingestion",
      reason:
        "Reduces gastrointestinal absorption of many plant toxins."
    },

    {
      category: "Fluid Therapy",
      indication: "Supportive care",
      reason:
        "Maintains hydration and supports organ perfusion."
    },

    {
      category: "Specific Antidotes",
      indication: "Selected toxic plants",
      reason:
        "Neutralizes or counteracts specific toxins when available."
    },

    {
      category: "Anticonvulsants",
      indication: "Seizure control",
      reason:
        "Controls toxin-induced seizure activity."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "activated-charcoal",
      priority: "First Line",
      category: "Activated Charcoal"
    },

    {
      drugId: "diazepam",
      priority: "Emergency",
      category: "Anticonvulsant"
    },

    {
      drugId: "atropine",
      priority: "Specific",
      category: "Antidote"
    }

  ],

  stabilization: [

    "Remove animals from the toxic pasture immediately.",
    "Identify the suspected toxic plant whenever possible.",
    "Administer activated charcoal if ingestion is recent and appropriate.",
    "Provide intravenous fluid therapy and supportive care.",
    "Treat seizures, arrhythmias, or respiratory compromise as indicated.",
    "Monitor hepatic and renal function during recovery."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent access to toxic plants",
        weight: 100
      },

      {
        finding: "Multiple animals affected simultaneously",
        weight: 90
      },

      {
        finding: "Recent pasture or feed change",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Acute gastrointestinal signs",
        weight: 85
      },

      {
        finding: "Neurological abnormalities",
        weight: 90
      },

      {
        finding: "Sudden onset after grazing",
        weight: 95
      },

      {
        finding: "Cardiovascular abnormalities",
        weight: 80
      },

      {
        finding: "Photosensitization or jaundice",
        weight: 75
      }

    ],

    biochemistry: [

      {
        finding: "Organ-specific biochemical abnormalities",
        weight: 85
      },

      {
        finding: "Electrolyte disturbances",
        weight: 70
      }

    ],

    imaging: [

      {
        finding: "No characteristic imaging findings",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Confirmed ingestion of toxic plant",
        weight: 100
      },

      {
        finding: "Compatible clinical syndrome following exposure",
        weight: 95
      }

    ],

    against: [

      {
        finding: "No exposure history",
        weight: -60
      },

      {
        finding: "Alternative diagnosis confirmed",
        weight: -90
      }

    ],

  },
    monitoring: [

    {
      id: "clinical-status",
      parameter: "General clinical condition and vital parameters",
      frequency: "Every 4–8 hours during the acute phase",
      reason:
        "Monitors disease progression and response to treatment."
    },

    {
      id: "neurological-status",
      parameter: "Neurological examination",
      frequency: "Every 6–12 hours if neurological signs are present",
      reason:
        "Detects progression of CNS involvement and seizure activity."
    },

    {
      id: "organ-function",
      parameter: "Serum biochemistry (hepatic and renal function)",
      frequency: "Daily",
      reason:
        "Evaluates organ injury and recovery following toxicosis."
    },

    {
      id: "hydration",
      parameter: "Hydration status and urine production",
      frequency: "Daily",
      reason:
        "Guides fluid therapy and detects renal impairment."
    },

    {
      id: "herd-surveillance",
      parameter: "Monitoring of other exposed animals",
      frequency: "Daily",
      reason:
        "Identifies additional affected animals and evaluates the effectiveness of preventive measures."
    }

  ],

  precautions: [

    {
      id: "pasture-inspection",
      title: "Regular Pasture Inspection",
      description:
        "Identify and remove poisonous plants from grazing areas whenever possible."
    },

    {
      id: "feed-quality",
      title: "Safe Feed Management",
      description:
        "Prevent contamination of hay, silage, and concentrate feeds with toxic plant material."
    },

    {
      id: "adequate-nutrition",
      title: "Provide Adequate Nutrition",
      description:
        "Well-fed animals are less likely to consume unfamiliar or toxic plants during grazing."
    },

    {
      id: "controlled-grazing",
      title: "Controlled Grazing",
      description:
        "Avoid grazing hungry animals in unfamiliar pastures or drought-stressed fields where toxic plants may predominate."
    }

  ],

  prognosis:
    "Prognosis varies depending on the plant involved, quantity ingested, time to treatment, and degree of organ damage. Early recognition and prompt supportive therapy generally result in a favorable outcome, whereas severe hepatic, renal, cardiac, or neurological injury carries a guarded to poor prognosis.",

  strengtheningEvidence: [

    "Recent access to toxic plants",

    "Multiple animals affected simultaneously",

    "Compatible clinical signs after grazing",

    "Identification of toxic plant material"

  ],

  weakeningEvidence: [

    "No history of toxic plant exposure",

    "Normal pasture inspection",

    "Alternative diagnosis confirmed"

  ],

  classicFindings: [

    "Acute onset after grazing",

    "Gastrointestinal disturbances",

    "Neurological abnormalities",

    "Depression",

    "Multiple affected animals"

  ],

  ruleOutFindings: [

    "Nitrate poisoning",

    "Copper toxicity",

    "Urea toxicity",

    "Enterotoxemia",

    "Polioencephalomalacia",

    "Lead poisoning"

  ],

};