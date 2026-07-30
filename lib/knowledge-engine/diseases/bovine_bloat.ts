import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineBloat: DiseaseCard = {
  id: "bovine-bloat",

  title: "Bovine Bloat",

  description:
    "A digestive emergency in cattle caused by excessive accumulation of gas in the rumen, leading to ruminal distension, respiratory compromise, and possible death.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Ruminal Tympany",
    "Rumen Tympany",
    "Frothy Bloat",
    "Free Gas Bloat",
  ],

  overview:
    "Bovine bloat occurs when gas produced during rumen fermentation cannot be expelled through eructation. It may occur as frothy bloat due to stable foam formation trapping gas bubbles, commonly associated with lush legumes, or as free gas bloat caused by failure of eructation. Severe ruminal distension compresses the diaphragm and major blood vessels, resulting in respiratory distress and sudden death.",

  clinicalProblems: [

    "Rumen gas accumulation",
    "Abdominal distension",
    "Respiratory distress",
    "Reduced feed intake",
    "Cardiovascular compromise",
    "Sudden death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent access to lush pasture, legumes, high-concentrate feeds, choking episodes, or feeding changes."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate left abdominal distension, respiratory distress, rumen sounds, anxiety, and signs of collapse."
    },

    {
      id: "rumen-assessment",
      step: 3,
      title: "Rumen Evaluation",
      description:
        "Differentiate frothy bloat from free gas bloat through physical examination and response to decompression."
    },

    {
      id: "emergency-management",
      step: 4,
      title: "Emergency Management",
      description:
        "Relieve ruminal pressure immediately in severe cases to prevent death."
    },

    {
      id: "prevention",
      step: 5,
      title: "Prevention",
      description:
        "Modify feeding practices and reduce risk factors associated with recurrent bloat."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Characteristic left-sided abdominal distension supports diagnosis."
    },

    {
      id: "rumen-trocar-response",
      name: "Rumen Decompression Assessment",
      priority: "Essential",
      reason:
        "Helps differentiate gas accumulation types."
    },

    {
      id: "history",
      name: "Dietary History",
      priority: "Recommended",
      reason:
        "Identifies pasture and feed-related risk factors."
    }

  ],

  drugCategories: [

    {
      category: "Emergency Therapy",
      indication: "Severe ruminal distension",
      reason:
        "Rapid gas removal is required to prevent death."
    },

    {
      category: "Antifoaming Agents",
      indication: "Frothy bloat",
      reason:
        "Breaks down stable foam in the rumen."
    },

    {
      category: "Supportive Therapy",
      indication: "Recovery",
      reason:
        "Supports affected animals after correction."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "poloxalene",
      priority: "Emergency",
      category: "Antifoaming"
    },

    {
      drugId: "simethicone",
      priority: "Emergency",
      category: "Antifoaming"
    }

  ],

  stabilization: [

    "Relieve rumen pressure immediately in severe cases.",
    "Place animal in appropriate position if possible.",
    "Administer antifoaming agents for frothy bloat.",
    "Identify and correct dietary cause.",
    "Monitor respiratory status."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Access to lush legume pasture",
        weight: 90
      },

      {
        finding: "Recent feed change",
        weight: 80
      },

      {
        finding: "High concentrate intake",
        weight: 75
      }

    ],

    clinicalSigns: [

      {
        finding: "Left abdominal distension",
        weight: 100
      },

      {
        finding: "Respiratory distress",
        weight: 90
      },

      {
        finding: "Restlessness",
        weight: 75
      },

      {
        finding: "Collapse",
        weight: 85
      }

    ],

    biochemistry: [

      {
        finding: "No specific diagnostic biochemical marker",
        weight: 5
      }

    ],

    imaging: [

      {
        finding: "Rumen distension",
        weight: 70
      }

    ],

    supports: [

      {
        finding: "Characteristic abdominal distension",
        weight: 100
      },

      {
        finding: "Rapid improvement after gas removal",
        weight: 95
      }

    ],

    against: [

      {
        finding: "No ruminal distension",
        weight: -80
      },

      {
        finding: "Alternative abdominal disorder confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "abdominal-distension",
      parameter: "Rumen size and left abdominal distension",
      frequency: "Regular assessment after treatment",
      reason:
        "Detects recurrence of ruminal gas accumulation."
    },

    {
      id: "respiratory-status",
      parameter: "Respiratory rate and effort",
      frequency: "During acute cases",
      reason:
        "Monitors improvement after rumen decompression."
    },

    {
      id: "rumen-motility",
      parameter: "Rumen contractions",
      frequency: "Daily",
      reason:
        "Evaluates restoration of normal rumen function."
    },

    {
      id: "feed-intake",
      parameter: "Feed intake and appetite",
      frequency: "Daily",
      reason:
        "Assesses recovery and prevents recurrence."
    },

    {
      id: "diet-management",
      parameter: "Feed composition and pasture exposure",
      frequency: "Continuous",
      reason:
        "Prevents future episodes of bloat."
    }

  ],

  precautions: [

    {
      id: "pasture-management",
      title: "Pasture Management",
      description:
        "Avoid sudden introduction of cattle to lush legume pastures and provide adequate dry forage."
    },

    {
      id: "feeding-management",
      title: "Feeding Practices",
      description:
        "Introduce concentrate feeds gradually and avoid sudden dietary changes."
    },

    {
      id: "bloat-prevention",
      title: "Preventive Measures",
      description:
        "Use appropriate preventive strategies in high-risk animals and monitor susceptible groups."
    }

  ],

  prognosis:
    "Prognosis depends on severity and speed of intervention. Mild cases respond well to treatment, while severe untreated bloat can rapidly cause respiratory failure and death.",

  strengtheningEvidence: [

    "Severe left abdominal distension",

    "Respiratory distress",

    "Recent access to bloat-inducing feeds",

    "Rapid improvement after decompression"

  ],

  weakeningEvidence: [

    "No abdominal distension",

    "Normal rumen function",

    "Alternative abdominal disease identified"

  ],

  classicFindings: [

    "Left flank swelling",

    "Difficulty breathing",

    "Restlessness",

    "Reduced rumen contractions",

    "Sudden collapse"

  ],

  ruleOutFindings: [

    "Traumatic reticuloperitonitis",

    "Displaced abomasum",

    "Rumen acidosis",

    "Intestinal obstruction",

    "Peritonitis"

  ],

};