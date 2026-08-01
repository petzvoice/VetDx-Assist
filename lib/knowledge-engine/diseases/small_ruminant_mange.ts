import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantMange: DiseaseCard = {
  id: "small-ruminant-mange",

  title: "Mange",

  description:
    "A contagious skin disease of sheep and goats caused by infestation with parasitic mites, resulting in itching, skin inflammation, hair loss, crust formation, reduced productivity, and poor body condition.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Acariasis",
    "Mite Infestation",
    "Parasitic Dermatitis",
  ],

  overview:
    "Mange is caused by different mite species affecting the skin of small ruminants. Important mites include Sarcoptes scabiei, Psoroptes ovis, Chorioptes bovis, and Demodex species. Transmission occurs mainly through close contact between animals or contaminated equipment. Clinical severity depends on mite species, immune status, nutrition, and management conditions. Severe infestations cause intense pruritus, skin damage, weight loss, and production losses.",

  clinicalProblems: [

    "Pruritus",
    "Skin inflammation",
    "Hair loss",
    "Crusting lesions",
    "Reduced productivity",
    "Secondary bacterial infection"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess itching severity, animal-to-animal contact, introduction of new animals, housing conditions, and previous ectoparasite control."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate distribution of lesions, skin condition, wool/hair loss, crusts, and signs of secondary infection."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Perform skin scraping and microscopic examination to identify mites."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Control",
      description:
        "Administer effective acaricidal therapy, treat affected contacts, and improve hygiene."
    }

  ],

  diagnostics: [

    {
      id: "skin-scraping",
      name: "Skin Scraping Examination",
      priority: "Essential",
      reason:
        "Detects mites and confirms infestation."
    },

    {
      id: "microscopy",
      name: "Microscopic Identification of Mites",
      priority: "Essential",
      reason:
        "Identifies mite species and guides treatment."
    },

    {
      id: "skin-biopsy",
      name: "Skin Biopsy",
      priority: "Recommended",
      reason:
        "Used when routine scraping is inconclusive."
    }

  ],

  drugCategories: [

    {
      category: "Acaricides",
      indication: "Mite elimination",
      reason:
        "Kills parasitic mites and reduces infestation."
    },

    {
      category: "Antimicrobials",
      indication: "Secondary bacterial infection",
      reason:
        "Treats infected skin lesions."
    },

    {
      category: "Topical Therapy",
      indication: "Skin lesion management",
      reason:
        "Supports healing and reduces irritation."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "ivermectin",
      priority: "First Line",
      category: "Acaricides"
    },

    {
      drugId: "moxidectin",
      priority: "Alternative",
      category: "Acaricides"
    },

    {
      drugId: "amitraz",
      priority: "Alternative",
      category: "Acaricides"
    }

  ],

  stabilization: [

    "Isolate affected animals to reduce transmission.",
    "Perform appropriate acaricidal treatment.",
    "Treat in-contact animals when required.",
    "Clean and disinfect housing areas.",
    "Manage secondary bacterial infections.",
    "Improve nutrition to support skin recovery."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Contact with affected animals",
        weight: 95
      },

      {
        finding: "Poor ectoparasite control",
        weight: 90
      },

      {
        finding: "Overcrowded housing",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Severe itching",
        weight: 100
      },

      {
        finding: "Hair or wool loss",
        weight: 90
      },

      {
        finding: "Skin crusts",
        weight: 90
      },

      {
        finding: "Skin thickening",
        weight: 80
      },

      {
        finding: "Restlessness",
        weight: 75
      }

    ],

    biochemistry: [

      {
        finding: "Usually no specific biochemical abnormalities",
        weight: 10
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
        finding: "Mites detected on skin examination",
        weight: 100
      },

      {
        finding: "Improvement after acaricide therapy",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Negative skin examination",
        weight: -50
      },

      {
        finding: "Alternative dermatological disease confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "skin-lesions",
      parameter: "Skin lesions, crusting, and healing progress",
      frequency: "Weekly",
      reason:
        "Evaluates response to acaricidal treatment."
    },

    {
      id: "pruritus",
      parameter: "Itching severity and discomfort",
      frequency: "Weekly",
      reason:
        "Monitors reduction of mite-related irritation."
    },

    {
      id: "mite-status",
      parameter: "Repeat skin scraping when required",
      frequency: "After treatment if signs persist",
      reason:
        "Confirms elimination of mites and detects treatment failure."
    },

    {
      id: "body-condition",
      parameter: "Body condition and weight",
      frequency: "Monthly",
      reason:
        "Assesses recovery from chronic skin disease."
    },

    {
      id: "group-health",
      parameter: "Examination of contact animals",
      frequency: "During outbreaks",
      reason:
        "Detects additional affected animals and prevents spread."
    }

  ],

  precautions: [

    {
      id: "isolation",
      title: "Isolate Affected Animals",
      description:
        "Separate infected animals to reduce transmission within the flock."
    },

    {
      id: "new-animal-screening",
      title: "Screen New Animals",
      description:
        "Examine and treat newly introduced sheep and goats before mixing with the flock."
    },

    {
      id: "housing-hygiene",
      title: "Improve Housing Hygiene",
      description:
        "Clean housing areas and equipment to reduce environmental contamination."
    },

    {
      id: "regular-control",
      title: "Regular Ectoparasite Control",
      description:
        "Maintain appropriate parasite prevention programs based on farm risk."
    }

  ],

  prognosis:
    "Prognosis is generally good when mange is identified early and appropriate acaricidal therapy is provided. Chronic cases with extensive skin damage, secondary infections, or poor nutrition may require prolonged treatment and have slower recovery.",

  strengtheningEvidence: [

    "Severe pruritus",

    "Characteristic skin lesions",

    "Mites identified on skin scraping",

    "Response to acaricidal therapy"

  ],

  weakeningEvidence: [

    "Negative mite examination",

    "No itching",

    "Alternative skin disease confirmed"

  ],

  classicFindings: [

    "Itching",

    "Hair or wool loss",

    "Crust formation",

    "Skin thickening",

    "Dermatitis"

  ],

  ruleOutFindings: [

    "Dermatophilosis",

    "Fungal dermatitis",

    "Nutritional alopecia",

    "Photosensitization",

    "Allergic dermatitis"

  ],

};