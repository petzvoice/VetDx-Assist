import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantPolioencephalomalacia: DiseaseCard = {
  id: "small-ruminant-polioencephalomalacia",

  title: "Polioencephalomalacia",

  description:
    "An acute neurological disease of sheep and goats characterized by cerebrocortical necrosis resulting from thiamine deficiency, excessive dietary sulfur, or disturbances in thiamine metabolism, leading to cortical blindness, opisthotonos, seizures, and recumbency.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "PEM",
    "Cerebrocortical Necrosis",
    "CCN",
    "Thiamine Deficiency",
  ],

  overview:
    "Polioencephalomalacia is a common metabolic neurological disorder of small ruminants. It is associated with thiamine deficiency, excessive sulfur intake, high-concentrate diets, ruminal disturbances, and certain medications affecting thiamine metabolism. Cerebral cortical necrosis develops rapidly, resulting in blindness, altered mentation, seizures, and death if untreated. Early administration of thiamine dramatically improves prognosis.",

  clinicalProblems: [

    "Cortical blindness",
    "Depression",
    "Head pressing",
    "Opisthotonos",
    "Seizures",
    "Recumbency",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess dietary changes, sulfur exposure, concentrate feeding, ruminal disease, recent medication use, and flock history."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate vision, cranial nerves, mentation, gait, seizure activity, posture, and response to external stimuli."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Diagnosis is primarily based on clinical findings, response to thiamine therapy, and exclusion of other neurological diseases."
    },

    {
      id: "management",
      step: 4,
      title: "Emergency Treatment",
      description:
        "Administer thiamine immediately, provide supportive care, control seizures when necessary, and eliminate dietary risk factors."
    }

  ],

  diagnostics: [

    {
      id: "neurological-examination",
      name: "Neurological Examination",
      priority: "Essential",
      reason:
        "Identifies characteristic cortical neurological deficits."
    },

    {
      id: "response-thiamine",
      name: "Response to Thiamine Therapy",
      priority: "Essential",
      reason:
        "Rapid improvement strongly supports the diagnosis."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates concurrent metabolic abnormalities."
    },

    {
      id: "necropsy",
      name: "Postmortem Examination",
      priority: "Recommended",
      reason:
        "May demonstrate cerebrocortical necrosis in fatal cases."
    }

  ],

  drugCategories: [

    {
      category: "Vitamin Therapy",
      indication: "Thiamine deficiency",
      reason:
        "Thiamine is the treatment of choice and should be administered immediately."
    },

    {
      category: "Anticonvulsants",
      indication: "Seizure control",
      reason:
        "Controls severe seizure activity when present."
    },

    {
      category: "Fluid Therapy",
      indication: "Supportive care",
      reason:
        "Maintains hydration and corrects metabolic disturbances."
    },

    {
      category: "NSAIDs",
      indication: "Supportive care",
      reason:
        "May reduce cerebral inflammation in selected cases."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "thiamine",
      priority: "First Line",
      category: "Vitamin"
    },

    {
      drugId: "diazepam",
      priority: "Emergency",
      category: "Anticonvulsant"
    },

    {
      drugId: "flunixin",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Administer thiamine immediately.",
    "Control seizures if present.",
    "Provide intravenous fluids when indicated.",
    "Place the animal in a quiet, dark environment.",
    "Correct dietary deficiencies and remove excess sulfur sources.",
    "Provide nursing care for recumbent animals."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent dietary change",
        weight: 90
      },

      {
        finding: "High sulfur intake",
        weight: 95
      },

      {
        finding: "High concentrate feeding",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Cortical blindness",
        weight: 100
      },

      {
        finding: "Head pressing",
        weight: 95
      },

      {
        finding: "Opisthotonos",
        weight: 95
      },

      {
        finding: "Seizures",
        weight: 95
      },

      {
        finding: "Dorsomedial strabismus",
        weight: 90
      }

    ],

    biochemistry: [

      {
        finding: "No pathognomonic biochemical abnormalities",
        weight: 10
      }

    ],

    imaging: [

      {
        finding: "No routine diagnostic imaging findings",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Rapid improvement after thiamine administration",
        weight: 100
      },

      {
        finding: "Typical cortical neurological signs",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Normal neurological examination",
        weight: -70
      },

      {
        finding: "Alternative neurological disease confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "neurological-status",
      parameter: "Neurological examination",
      frequency: "Every 6–12 hours during acute illness",
      reason:
        "Monitors progression of neurological deficits and response to thiamine therapy."
    },

    {
      id: "vision",
      parameter: "Vision and menace response",
      frequency: "Daily",
      reason:
        "Assesses recovery of cortical blindness."
    },

    {
      id: "seizure-activity",
      parameter: "Frequency and severity of seizures",
      frequency: "Continuous during hospitalization",
      reason:
        "Determines effectiveness of anticonvulsant therapy and disease progression."
    },

    {
      id: "feed-water-intake",
      parameter: "Feed intake, water intake, and hydration",
      frequency: "Daily",
      reason:
        "Ensures adequate nutritional support during recovery."
    },

    {
      id: "ambulation",
      parameter: "Ability to stand and walk",
      frequency: "Daily",
      reason:
        "Evaluates neurological recovery and overall prognosis."
    }

  ],

  precautions: [

    {
      id: "dietary-management",
      title: "Balanced Nutrition",
      description:
        "Introduce dietary changes gradually and provide balanced rations to maintain normal rumen function."
    },

    {
      id: "sulfur-control",
      title: "Control Sulfur Intake",
      description:
        "Avoid excessive sulfur concentrations in feed, water, and dietary supplements."
    },

    {
      id: "rumen-health",
      title: "Maintain Rumen Health",
      description:
        "Prevent ruminal acidosis through proper feeding practices and adequate fiber intake."
    },

    {
      id: "high-risk-monitoring",
      title: "Monitor High-Risk Animals",
      description:
        "Closely observe animals following dietary changes or concentrate feeding for early neurological signs."
    }

  ],

  prognosis:
    "Prognosis is good when treatment with thiamine is initiated early. Animals with prolonged recumbency, severe cerebral damage, uncontrolled seizures, or delayed treatment have a guarded to poor prognosis.",

  strengtheningEvidence: [

    "Cortical blindness",

    "Head pressing",

    "Rapid response to thiamine",

    "History of dietary change or excessive sulfur intake"

  ],

  weakeningEvidence: [

    "No improvement following thiamine therapy",

    "Normal neurological examination",

    "Alternative neurological disorder confirmed"

  ],

  classicFindings: [

    "Cortical blindness",

    "Head pressing",

    "Opisthotonos",

    "Dorsomedial strabismus",

    "Seizures"

  ],

  ruleOutFindings: [

    "Listeriosis",

    "Pregnancy toxemia",

    "Hypocalcemia",

    "Rabies",

    "Lead poisoning",

    "Brain abscess"

  ],

};