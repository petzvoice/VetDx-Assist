import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantMetritis: DiseaseCard = {
  id: "small-ruminant-metritis",

  title: "Metritis",

  description:
    "An inflammatory and infectious disease of the uterus in sheep and goats, usually occurring after parturition, abortion, dystocia, or retained fetal membranes, causing uterine infection, systemic illness, reduced fertility, and production losses.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Postpartum Metritis",
    "Uterine Infection",
    "Puerperal Metritis",
  ],

  overview:
    "Metritis is an acute inflammation and infection of the uterus commonly associated with bacterial contamination after parturition. Risk factors include dystocia, retained fetal membranes, abortion, poor hygiene, and traumatic obstetrical procedures. Common bacterial organisms include Escherichia coli, Trueperella pyogenes, Streptococcus spp., and anaerobic bacteria. Disease severity ranges from mild uterine inflammation to severe systemic illness and toxemia.",

  clinicalProblems: [

    "Uterine inflammation",
    "Foul uterine discharge",
    "Fever",
    "Reduced appetite",
    "Infertility",
    "Systemic infection"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent parturition, abortion, dystocia, retained fetal membranes, reproductive procedures, and hygiene conditions."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate temperature, appetite, attitude, vaginal discharge, hydration status, and signs of systemic illness."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Assess uterine infection through clinical examination, cytology, culture, and supportive laboratory tests when required."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Management",
      description:
        "Provide antimicrobial therapy when indicated, supportive care, and monitor reproductive recovery."
    }

  ],

  diagnostics: [

    {
      id: "clinical-exam",
      name: "Reproductive Tract Examination",
      priority: "Essential",
      reason:
        "Identifies abnormal uterine discharge and inflammation."
    },

    {
      id: "vaginal-cytology",
      name: "Vaginal Cytology",
      priority: "Recommended",
      reason:
        "Assesses inflammatory cell presence."
    },

    {
      id: "bacterial-culture",
      name: "Bacterial Culture and Sensitivity",
      priority: "Recommended",
      reason:
        "Identifies pathogens and antimicrobial susceptibility."
    },

    {
      id: "blood-profile",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates systemic inflammatory response."
    }

  ],

  drugCategories: [

    {
      category: "Antimicrobials",
      indication: "Bacterial uterine infection",
      reason:
        "Controls bacterial growth and uterine infection."
    },

    {
      category: "NSAIDs",
      indication: "Inflammation and fever",
      reason:
        "Reduces inflammation and improves comfort."
    },

    {
      category: "Ecbolics / Uterotonics",
      indication: "Uterine evacuation support",
      reason:
        "May assist uterine clearance in selected cases."
    },

    {
      category: "Fluid Therapy",
      indication: "Systemic illness and dehydration",
      reason:
        "Supports circulation and recovery."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "oxytocin",
      priority: "Selected Cases",
      category: "Ecbolic"
    },

    {
      drugId: "antibiotics",
      priority: "First Line",
      category: "Antibiotic"
    },

    {
      drugId: "flunixin",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Assess severity of infection and systemic illness.",
    "Provide appropriate antimicrobial therapy when indicated.",
    "Control fever and inflammation.",
    "Correct dehydration and metabolic disturbances.",
    "Monitor uterine discharge and reproductive recovery.",
    "Provide nutritional support during recovery."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent parturition",
        weight: 100
      },

      {
        finding: "Retained fetal membranes",
        weight: 95
      },

      {
        finding: "Dystocia history",
        weight: 90
      },

      {
        finding: "Abortion history",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Foul-smelling vaginal discharge",
        weight: 100
      },

      {
        finding: "Fever",
        weight: 90
      },

      {
        finding: "Reduced appetite",
        weight: 85
      },

      {
        finding: "Depression or weakness",
        weight: 85
      },

      {
        finding: "Reduced milk production",
        weight: 75
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
        finding: "Uterine fluid accumulation on ultrasound",
        weight: 75
      }

    ],

    supports: [

      {
        finding: "Purulent uterine discharge",
        weight: 100
      },

      {
        finding: "Positive bacterial culture",
        weight: 90
      }

    ],

    against: [

      {
        finding: "No reproductive history",
        weight: -80
      },

      {
        finding: "Alternative systemic infection confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "uterine-discharge",
      parameter: "Vaginal discharge character, quantity, and odor",
      frequency: "Daily during active infection",
      reason:
        "Monitors uterine infection progression and response to therapy."
    },

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily until fever resolves",
      reason:
        "Evaluates systemic inflammatory response."
    },

    {
      id: "appetite",
      parameter: "Feed intake and general activity",
      frequency: "Daily",
      reason:
        "Assesses recovery from systemic illness."
    },

    {
      id: "milk-production",
      parameter: "Milk yield and udder status",
      frequency: "Daily during lactation",
      reason:
        "Monitors production losses associated with postpartum infection."
    },

    {
      id: "reproductive-recovery",
      parameter: "Return to normal reproductive function",
      frequency: "During breeding evaluation",
      reason:
        "Determines impact on future fertility."
    }

  ],

  precautions: [

    {
      id: "hygienic-parturition",
      title: "Maintain Clean Parturition Practices",
      description:
        "Provide clean birthing areas and hygienic assistance during difficult deliveries."
    },

    {
      id: "dystocia-prevention",
      title: "Prevent Dystocia Complications",
      description:
        "Early identification and correction of difficult births reduces uterine infection risk."
    },

    {
      id: "retained-membrane-management",
      title: "Monitor Retained Fetal Membranes",
      description:
        "Identify and manage retained membranes early to reduce metritis development."
    },

    {
      id: "nutrition",
      title: "Optimize Peripartum Nutrition",
      description:
        "Adequate nutrition supports immune function and postpartum recovery."
    }

  ],

  prognosis:
    "Prognosis is generally good when metritis is identified early and treated appropriately. Severe infections causing toxemia, delayed treatment, or chronic uterine damage may result in reduced fertility or death.",

  strengtheningEvidence: [

    "Recent parturition or abortion",

    "Foul uterine discharge",

    "Fever with reproductive signs",

    "Positive bacterial culture",

    "Response to antimicrobial therapy"

  ],

  weakeningEvidence: [

    "No reproductive event history",

    "Normal postpartum recovery",

    "Alternative cause of fever identified"

  ],

  classicFindings: [

    "Foul-smelling vaginal discharge",

    "Fever",

    "Depression",

    "Reduced appetite",

    "Postpartum illness"

  ],

  ruleOutFindings: [

    "Retained fetal membranes without infection",

    "Vaginitis",

    "Urinary tract infection",

    "Mastitis",

    "Systemic bacterial infection"

  ],

};