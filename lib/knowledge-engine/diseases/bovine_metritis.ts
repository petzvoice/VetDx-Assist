import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineMetritis: DiseaseCard = {
  id: "bovine-metritis",

  title: "Bovine Metritis",

  description:
    "An acute postpartum uterine infection in cattle involving inflammation of all layers of the uterus, commonly occurring after calving complications.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Puerperal Metritis",
    "Acute Postpartum Metritis",
    "Septic Metritis",
  ],

  overview:
    "Bovine metritis occurs during the postpartum period due to bacterial contamination and infection of the uterus. Risk factors include retained fetal membranes, dystocia, stillbirth, twins, and poor calving hygiene. Severe cases may cause systemic illness, fever, reduced milk production, and infertility.",

  clinicalProblems: [

    "Uterine infection",
    "Postpartum inflammation",
    "Fever",
    "Toxic systemic illness",
    "Reduced milk production",
    "Delayed fertility"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent calving, dystocia, retained fetal membranes, abortion, and postpartum complications."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate temperature, appetite, milk production, uterine discharge, and systemic illness."
    },

    {
      id: "uterine-evaluation",
      step: 3,
      title: "Uterine Assessment",
      description:
        "Assess uterine size, involution, and character of uterine discharge."
    },

    {
      id: "management",
      step: 4,
      title: "Disease Management",
      description:
        "Provide appropriate antimicrobial therapy and supportive treatment."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Diagnosis is based on postpartum signs and uterine findings."
    },

    {
      id: "temperature",
      name: "Body Temperature Evaluation",
      priority: "Essential",
      reason:
        "Identifies systemic inflammatory response."
    },

    {
      id: "uterine-discharge",
      name: "Uterine Discharge Evaluation",
      priority: "Recommended",
      reason:
        "Assesses severity of uterine infection."
    },

    {
      id: "ultrasound",
      name: "Uterine Ultrasonography",
      priority: "Recommended",
      reason:
        "Evaluates uterine contents and involution."

    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Postpartum uterine infection",
      reason:
        "Controls bacterial infection."
    },

    {
      category: "NSAIDs",
      indication: "Fever and inflammation",
      reason:
        "Reduces inflammatory response and improves comfort."
    },

    {
      category: "Supportive Therapy",
      indication: "Systemic illness",
      reason:
        "Supports recovery."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "ceftiofur",
      priority: "First Line",
      category: "Antibiotic"
    },

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Assess severity of systemic illness.",
    "Provide antimicrobial therapy when indicated.",
    "Control fever and inflammation.",
    "Maintain hydration and nutrition.",
    "Monitor reproductive recovery."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent calving",
        weight: 100
      },

      {
        finding: "Retained fetal membranes",
        weight: 90
      },

      {
        finding: "Dystocia history",
        weight: 85
      },

      {
        finding: "Stillbirth or twins",
        weight: 75
      }

    ],

    clinicalSigns: [

      {
        finding: "Fever",
        weight: 90
      },

      {
        finding: "Foul watery uterine discharge",
        weight: 95
      },

      {
        finding: "Depression",
        weight: 80
      },

      {
        finding: "Reduced milk production",
        weight: 85
      },

      {
        finding: "Reduced appetite",
        weight: 80
      }

    ],

    biochemistry: [

      {
        finding: "Inflammatory leukogram",
        weight: 60
      }

    ],

    imaging: [

      {
        finding: "Abnormal uterine contents on ultrasound",
        weight: 70
      }

    ],

    supports: [

      {
        finding: "Postpartum fever with uterine discharge",
        weight: 100
      },

      {
        finding: "Systemic illness after calving",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Normal postpartum recovery",
        weight: -80
      },

      {
        finding: "Alternative postpartum disorder confirmed",
        weight: -70
      }

    ],

  },
  monitoring: [

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Monitors resolution of systemic infection."
    },

    {
      id: "uterine-discharge",
      parameter: "Uterine discharge character and amount",
      frequency: "Daily",
      reason:
        "Evaluates improvement of uterine infection."
    },

    {
      id: "appetite",
      parameter: "Feed intake and general condition",
      frequency: "Daily",
      reason:
        "Assesses systemic recovery."
    },

    {
      id: "milk-production",
      parameter: "Milk production",
      frequency: "Daily",
      reason:
        "Monitors production recovery after illness."
    },

    {
      id: "fertility",
      parameter: "Return to reproductive function",
      frequency: "Long-term monitoring",
      reason:
        "Evaluates impact on future fertility."

    }

  ],

  precautions: [

    {
      id: "calving-hygiene",
      title: "Calving Hygiene",
      description:
        "Maintain clean calving environments and proper obstetrical hygiene to reduce bacterial contamination."
    },

    {
      id: "retained-membranes",
      title: "Retained Placenta Management",
      description:
        "Monitor cows with retained fetal membranes closely for early detection of metritis."
    },

    {
      id: "nutrition",
      title: "Postpartum Nutrition",
      description:
        "Provide adequate energy and mineral nutrition to support immune function after calving."
    }

  ],

  prognosis:
    "Prognosis depends on severity. Early uncomplicated cases respond well to treatment, while severe toxic metritis may lead to reduced fertility, production losses, or death.",

  strengtheningEvidence: [

    "Fever after calving",

    "Foul-smelling watery uterine discharge",

    "Systemic illness",

    "History of dystocia or retained fetal membranes"

  ],

  weakeningEvidence: [

    "Normal postpartum recovery",

    "No fever or uterine abnormalities",

    "Alternative cause of illness identified"

  ],

  classicFindings: [

    "Postpartum fever",

    "Depression",

    "Foul uterine discharge",

    "Reduced appetite",

    "Milk production drop"

  ],

  ruleOutFindings: [

    "Endometritis",

    "Retained fetal membranes",

    "Uterine prolapse",

    "Ketosis",

    "Milk fever",

    "Mastitis"

  ],

};