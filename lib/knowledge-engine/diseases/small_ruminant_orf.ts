import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantOrf: DiseaseCard = {
  id: "small-ruminant-orf",

  title: "Orf",

  description:
    "A contagious zoonotic viral disease of sheep and goats caused by Orf virus (Parapoxvirus), characterized by proliferative, crusting lesions around the lips, muzzle, oral cavity, teats, and coronary band.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Contagious Ecthyma",
    "Sore Mouth",
    "Scabby Mouth",
    "Contagious Pustular Dermatitis",
  ],

  overview:
    "Orf is caused by a Parapoxvirus and is transmitted through direct contact with infected animals, contaminated equipment, or environmental fomites. The virus enters through abrasions in the skin or oral mucosa. Although mortality is generally low, affected lambs and kids may develop severe lesions that interfere with nursing and predispose to secondary bacterial infections. Orf is zoonotic and commonly causes localized skin lesions in humans handling infected animals.",

  clinicalProblems: [

    "Papules and pustules",
    "Crusting oral lesions",
    "Painful nursing",
    "Reduced feed intake",
    "Secondary bacterial infection",
    "Zoonotic transmission"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent introduction of animals, flock outbreaks, vaccination history, and human exposure."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate lesions on lips, muzzle, oral cavity, teats, udder, and coronary band."
    },

    {
      id: "laboratory-confirmation",
      step: 3,
      title: "Diagnostic Confirmation",
      description:
        "Confirm diagnosis using PCR, electron microscopy, or histopathology when required."
    },

    {
      id: "management",
      step: 4,
      title: "Disease Management",
      description:
        "Provide supportive care, prevent secondary infection, and implement biosecurity measures."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Characteristic proliferative lesions are usually diagnostic."
    },

    {
      id: "pcr",
      name: "PCR",
      priority: "Recommended",
      reason:
        "Confirms Orf virus infection."
    },

    {
      id: "histopathology",
      name: "Histopathology",
      priority: "Recommended",
      reason:
        "Supports diagnosis in atypical cases."
    },

    {
      id: "electron-microscopy",
      name: "Electron Microscopy",
      priority: "Recommended",
      reason:
        "Identifies parapoxvirus particles."
    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "General supportive care",
      reason:
        "Maintains hydration and nutritional intake."
    },

    {
      category: "Topical Antiseptics",
      indication: "Secondary bacterial prevention",
      reason:
        "Reduces bacterial contamination of lesions."
    },

    {
      category: "Antimicrobials",
      indication: "Secondary bacterial infection",
      reason:
        "Used only when bacterial complications occur."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "chlorhexidine",
      priority: "Supportive",
      category: "Antiseptic"
    },

    {
      drugId: "oxytetracycline",
      priority: "Adjunctive",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Isolate affected animals.",
    "Provide soft, easily accessible feed.",
    "Maintain hydration.",
    "Treat secondary bacterial infections when present.",
    "Use protective gloves while handling affected animals.",
    "Disinfect contaminated equipment and housing."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent flock outbreak",
        weight: 90
      },

      {
        finding: "Introduction of infected animals",
        weight: 85
      },

      {
        finding: "Lack of vaccination in endemic area",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Crusting lesions on lips and muzzle",
        weight: 100
      },

      {
        finding: "Proliferative oral lesions",
        weight: 95
      },

      {
        finding: "Pain during suckling or eating",
        weight: 85
      },

      {
        finding: "Teat lesions",
        weight: 80
      },

      {
        finding: "Coronary band lesions",
        weight: 70
      }

    ],

    biochemistry: [

      {
        finding: "No specific biochemical abnormalities",
        weight: 5
      }

    ],

    imaging: [

      {
        finding: "No routine imaging findings",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Positive PCR for Orf virus",
        weight: 100
      },

      {
        finding: "Characteristic proliferative crusting lesions",
        weight: 95
      }

    ],

    against: [

      {
        finding: "No characteristic skin lesions",
        weight: -70
      },

      {
        finding: "Alternative vesicular disease confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "lesion-healing",
      parameter: "Healing of skin and oral lesions",
      frequency: "Weekly",
      reason:
        "Monitors progression toward recovery and detects secondary bacterial infection."
    },

    {
      id: "feed-intake",
      parameter: "Feed intake and nursing behavior",
      frequency: "Daily",
      reason:
        "Evaluates the animal's ability to eat or suckle despite oral lesions."
    },

    {
      id: "body-condition",
      parameter: "Body weight and body condition",
      frequency: "Weekly",
      reason:
        "Assesses nutritional status during recovery."
    },

    {
      id: "secondary-infection",
      parameter: "Evidence of secondary bacterial infection",
      frequency: "Daily",
      reason:
        "Identifies animals requiring antimicrobial therapy."
    },

    {
      id: "flock-monitoring",
      parameter: "New cases within the flock",
      frequency: "Continuous",
      reason:
        "Evaluates disease spread and effectiveness of biosecurity measures."

    }

  ],

  precautions: [

    {
      id: "biosecurity",
      title: "Strict Biosecurity",
      description:
        "Isolate affected animals and disinfect contaminated equipment and facilities."
    },

    {
      id: "protective-equipment",
      title: "Personal Protective Equipment",
      description:
        "Wear gloves while handling infected animals because Orf is zoonotic."
    },

    {
      id: "vaccination",
      title: "Vaccination",
      description:
        "Use approved live Orf vaccines only in endemic flocks and according to veterinary recommendations."
    },

    {
      id: "wound-management",
      title: "Prevent Skin Trauma",
      description:
        "Reduce skin injuries and maintain good housing conditions to minimize viral entry."

    }

  ],

  prognosis:
    "Prognosis is generally excellent in uncomplicated cases, with lesions resolving within 3–6 weeks. Young animals with severe oral lesions or secondary bacterial infections may have a guarded prognosis.",

  strengtheningEvidence: [

    "Characteristic proliferative crusting lesions",

    "Positive PCR for Orf virus",

    "Multiple affected sheep or goats",

    "Recent introduction of infected animals"

  ],

  weakeningEvidence: [

    "Absence of typical lesions",

    "Negative PCR with incompatible findings",

    "Alternative vesicular disease confirmed"

  ],

  classicFindings: [

    "Crusted lesions around lips",

    "Oral papules and pustules",

    "Painful suckling",

    "Teat lesions",

    "Coronary band lesions"

  ],

  ruleOutFindings: [

    "Foot-and-mouth disease",

    "Bluetongue",

    "Sheep and goat pox",

    "Dermatophilosis",

    "Ulcerative dermatosis",

    "Photosensitization"

  ],

};