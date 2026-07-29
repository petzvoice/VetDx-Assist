import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineVestibularDisease: DiseaseCard = {
  id: "canine-vestibular-disease-dog",

  title: "Canine Vestibular Disease",

  description:
    "A neurological disorder affecting the vestibular system causing balance impairment, head tilt, abnormal eye movements, and incoordination.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Vestibular Syndrome",
    "Peripheral Vestibular Disease",
    "Central Vestibular Disease",
    "Idiopathic Vestibular Syndrome",
    "Old Dog Vestibular Syndrome",
  ],

  overview:
    "Vestibular disease results from dysfunction of the peripheral or central vestibular system responsible for maintaining balance and spatial orientation. Peripheral vestibular disease commonly involves the inner ear or vestibular nerve, while central vestibular disease involves the brainstem or cerebellum. Idiopathic vestibular syndrome is frequently seen in older dogs and often improves spontaneously within days to weeks. Accurate localization is essential because central causes may indicate serious intracranial disease.",

  clinicalProblems: [

    "Loss of balance",
    "Head tilt",
    "Ataxia",
    "Nystagmus",
    "Circling",
    "Nausea",
    "Vomiting",
    "Difficulty standing"

  ],

  workflow: [

    {
      id: "neurological-localization",
      step: 1,
      title: "Neurological Localization",
      description:
        "Determine whether vestibular signs originate from peripheral or central disease."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Investigate ear disease, metabolic disorders, and intracranial causes."
    },

    {
      id: "supportive-treatment",
      step: 3,
      title: "Supportive Treatment",
      description:
        "Provide nursing care, hydration support, and control nausea when required."
    },

    {
      id: "underlying-cause",
      step: 4,
      title: "Treat Underlying Cause",
      description:
        "Manage otitis interna, inflammatory disease, neoplasia, or other identified causes."
    },

    {
      id: "follow-up",
      step: 5,
      title: "Follow-Up",
      description:
        "Monitor neurological recovery and progression of clinical signs."
    }

  ],

  diagnostics: [

    {
      id: "neurological-exam",
      name: "Complete Neurological Examination",
      priority: "Essential",
      reason:
        "Localizes vestibular dysfunction and differentiates central from peripheral disease."
    },

    {
      id: "ear-examination",
      name: "Otoscopic Examination",
      priority: "Essential",
      reason:
        "Evaluates otitis externa and middle/inner ear disease."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Identifies systemic disease and metabolic abnormalities."
    },

    {
      id: "mri-brain",
      name: "Brain MRI",
      priority: "Recommended",
      reason:
        "Evaluates central vestibular disease including inflammation and neoplasia."
    },

    {
      id: "ear-imaging",
      name: "Advanced Ear Imaging",
      priority: "Recommended",
      reason:
        "Assesses middle and inner ear pathology."
    }

  ],

  drugCategories: [

    {
      category: "Antiemetic",
      indication: "Nausea and vomiting",
      reason:
        "Improves patient comfort."
    },

    {
      category: "Antibiotic",
      indication: "Bacterial otitis interna",
      reason:
        "Treats infectious causes."
    },

    {
      category: "Anti-inflammatory",
      indication: "Inflammatory vestibular disease",
      reason:
        "Reduces inflammation when appropriate."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "maropitant",
      priority: "Supportive",
      category: "Antiemetic",
    },

    {
      drugId: "ondansetron",
      priority: "Supportive",
      category: "Antiemetic",
    },

    {
      drugId: "amoxicillin-clavulanate",
      priority: "Conditional",
      category: "Antibiotic",
    }

  ],

  stabilization: [

    "Prevent injury from falling.",
    "Provide assisted nursing care.",
    "Maintain hydration and nutrition.",
    "Control nausea and vomiting.",
    "Treat underlying ear or neurological disease."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Sudden onset imbalance", weight: 40 },

      { finding: "Older dog", weight: 25 },

      { finding: "Recent ear disease", weight: 30 },

      { finding: "Progressive neurological signs", weight: 30 }

    ],

    clinicalSigns: [

      { finding: "Head tilt", weight: 45 },

      { finding: "Nystagmus", weight: 50 },

      { finding: "Ataxia", weight: 45 },

      { finding: "Circling", weight: 35 },

      { finding: "Loss of balance", weight: 40 }

    ],

    biochemistry: [

      { finding: "Usually normal laboratory findings in idiopathic cases", weight: 15 }

    ],

    imaging: [

      { finding: "Middle/inner ear disease on imaging", weight: 40 },

      { finding: "Brain lesion on MRI", weight: 45 }

    ],

    supports: [

      { finding: "Vestibular signs with normal mentation", weight: 35 },

      { finding: "Peripheral vestibular localization", weight: 40 },

      { finding: "Spontaneous improvement over time", weight: 30 }

    ],

    against: [

      { finding: "No vestibular signs", weight: -40 },

      { finding: "Severe altered mentation", weight: -35 },

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
      id:"hydration",
      parameter:
        "Hydration and nutrition",
      frequency:
        "Daily",
      reason:
        "Prevents complications from inability to eat or drink."
    },

    {
      id:"balance",
      parameter:
        "Balance and mobility",
      frequency:
        "During recovery",
      reason:
        "Evaluates functional improvement."
    }

  ],

  precautions: [

    {
      id:"central",
      title:
        "Differentiate Central Vestibular Disease",
      description:
        "Central lesions may indicate inflammatory disease, stroke, or brain neoplasia."
    },

    {
      id:"falls",
      title:
        "Prevent Injury",
      description:
        "Affected dogs may fall repeatedly and require environmental support."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause. Idiopathic vestibular syndrome often improves significantly, while central vestibular disease has a more variable outcome.",

  strengtheningEvidence: [

    "Head tilt",

    "Nystagmus",

    "Ataxia",

    "Sudden onset",

    "Normal mentation",

    "Older dog with spontaneous improvement"

  ],

  weakeningEvidence: [

    "No vestibular signs",

    "Severe systemic illness",

    "Brain tumor",

    "Trauma",

    "Metabolic encephalopathy"

  ],

  classicFindings: [

    "Head tilt",

    "Nystagmus",

    "Loss of balance",

    "Circling",

    "Ataxia",

    "Sudden onset"

  ],

  ruleOutFindings: [

    "Otitis interna",

    "Brain tumor",

    "Meningoencephalitis",

    "Cerebrovascular accident",

    "Toxicity"

  ],

};