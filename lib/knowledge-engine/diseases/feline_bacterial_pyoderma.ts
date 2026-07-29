import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineBacterialPyoderma: DiseaseCard = {
  id: "feline-bacterial-pyoderma-cat",

  title: "Feline Bacterial Pyoderma (Superficial Skin Infection)",

  description:
    "A bacterial infection of the feline skin characterized by inflammation, pustules, crusts, hair loss, and skin lesions, often occurring secondary to another underlying skin disorder.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Pyoderma",
    "Bacterial Dermatitis",
    "Superficial Bacterial Skin Infection",
    "Feline Bacterial Folliculitis",
  ],

  overview:
    "Bacterial pyoderma in cats is less common as a primary disease compared with dogs and is often associated with underlying conditions such as allergies, parasites, fungal infections, immune disorders, trauma, or hormonal disease. Bacteria commonly involved include Staphylococcus species. Diagnosis requires identification of bacterial infection and investigation of the underlying cause to prevent recurrence.",

  clinicalProblems:[

    "Bacterial skin infection",
    "Hair follicle inflammation",
    "Skin barrier damage",
    "Pustule formation",
    "Secondary infection",
    "Chronic recurrent dermatitis"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess previous skin disease, allergies, parasite exposure, grooming, medications, and recurrence pattern."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate pustules, crusts, redness, alopecia, discharge, and lesion distribution."
    },

    {
      id:"skin-testing",
      step:3,
      title:"Skin Diagnostic Testing",
      description:
        "Perform cytology and other tests to identify bacterial infection."
    },

    {
      id:"culture",
      step:4,
      title:"Bacterial Culture",
      description:
        "Evaluate bacterial species and antimicrobial susceptibility when indicated."
    },

    {
      id:"management",
      step:5,
      title:"Treatment and Prevention",
      description:
        "Treat infection and identify underlying dermatological disease."

    }

  ],

  diagnostics:[

    {
      id:"skin-cytology",
      name:"Skin Cytology",
      priority:"Essential",
      reason:
        "Identifies bacteria and inflammatory cells in skin lesions."
    },

    {
      id:"bacterial-culture",
      name:"Bacterial Culture and Sensitivity",
      priority:"Recommended",
      reason:
        "Guides antimicrobial selection in resistant or recurrent infections."
    },

    {
      id:"skin-scraping",
      name:"Skin Scraping",
      priority:"Recommended",
      reason:
        "Rules out parasitic causes."
    },

    {
      id:"fungal-testing",
      name:"Fungal Testing",
      priority:"Recommended",
      reason:
        "Excludes dermatophyte infection."

    }

  ],

  drugCategories:[

    {
      category:"Antibacterial Therapy",
      indication:"Confirmed bacterial infection",
      reason:
        "Eliminates bacterial organisms."
    },

    {
      category:"Topical Antiseptic Therapy",
      indication:"Localized skin infection",
      reason:
        "Reduces bacterial load on skin surface."
    },

    {
      category:"Underlying Disease Management",
      indication:"Primary cause control",
      reason:
        "Prevents recurrence."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"cephalexin",
      priority:"Supportive",
      category:"Antibiotic"
    },

    {
      drugId:"chlorhexidine",
      priority:"Supportive",
      category:"Antiseptic"

    }

  ],

  stabilization:[

    "Identify and treat underlying skin disease.",
    "Control bacterial infection.",
    "Prevent self-trauma from scratching.",
    "Maintain skin hygiene.",
    "Monitor response to therapy."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Previous skin disease", weight:70 },

      { finding:"Allergy history", weight:60 },

      { finding:"Parasite exposure", weight:45 },

      { finding:"Recurrent lesions", weight:75 },

      { finding:"Immunosuppressive medication use", weight:55 }

    ],

    clinicalSigns:[

      { finding:"Pustules", weight:85 },

      { finding:"Crust formation", weight:75 },

      { finding:"Redness", weight:65 },

      { finding:"Hair loss", weight:55 },

      { finding:"Skin discharge", weight:70 },

      { finding:"Itching", weight:45 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Inflammatory changes in severe infection", weight:35 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Bacteria on skin cytology", weight:95 },

      { finding:"Pustular skin lesions", weight:85 },

      { finding:"Positive bacterial culture", weight:90 },

      { finding:"Response to antibacterial therapy", weight:70 }

    ],

    against:[

      { finding:"No bacteria identified", weight:-40 },

      { finding:"Pure fungal infection confirmed", weight:-50 },

      { finding:"Alternative skin disease confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"skin",
      parameter:"Skin lesion improvement",
      frequency:"Regular follow-up",
      reason:
        "Evaluates treatment response."
    },

    {
      id:"infection",
      parameter:"Bacterial infection status",
      frequency:"During therapy",
      reason:
        "Confirms resolution."
    },

    {
      id:"recurrence",
      parameter:"New lesion development",
      frequency:"Long-term monitoring",
      reason:
        "Detects underlying disease."

    }

  ],

  precautions:[

    {
      id:"underlying",
      title:"Look for Primary Cause",
      description:
        "Bacterial pyoderma in cats is frequently secondary to another dermatological condition."
    },

    {
      id:"resistance",
      title:"Antimicrobial Resistance",
      description:
        "Culture and sensitivity testing may be required in recurrent or non-responsive infections."

    }

  ],

  prognosis:
    "Prognosis is usually good when the infection and underlying cause are appropriately managed. Recurrence is common if the primary disease is not identified.",

  strengtheningEvidence:[

    "Pustules",

    "Positive skin cytology",

    "Bacterial culture",

    "Response to antibacterial therapy"

  ],

  weakeningEvidence:[

    "Negative cytology",

    "Fungal infection confirmed",

    "Parasitic disease confirmed"

  ],

  classicFindings:[

    "Pustules",

    "Crusts",

    "Hair loss",

    "Bacteria on cytology"

  ],

  ruleOutFindings:[

    "Dermatophytosis",

    "Demodicosis",

    "Flea allergy dermatitis",

    "Eosinophilic dermatitis",

    "Autoimmune skin disease"

  ],

};