import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineTransmissibleVenerealTumor: DiseaseCard = {
  id: "canine-transmissible-venereal-tumor-dog",

  title: "Canine Transmissible Venereal Tumor (TVT)",

  description:
    "A contagious round cell tumor of dogs transmitted primarily through direct contact with tumor cells, commonly affecting the external genitalia but also occurring at extragenital sites.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "TVT",
    "Canine Transmissible Venereal Sarcoma",
    "Sticker Tumor",
    "Canine Infectious Sarcoma",
  ],

  overview:
    "Canine transmissible venereal tumor is a naturally occurring contagious neoplasia caused by transplantation of living tumor cells between dogs. It is commonly transmitted during mating but can also spread through licking, sniffing, or contact with affected tissues. The tumor usually affects the genital region but may occur in the nasal cavity, oral cavity, skin, or other locations. Unlike many malignant tumors, TVT often responds well to chemotherapy.",

  clinicalProblems:[

    "Genital tumor formation",
    "Bleeding masses",
    "Local tissue irritation",
    "Extragenital tumor spread",
    "Reproductive tract involvement"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess reproductive behavior, contact with stray dogs, genital discharge, and duration of mass development."
    },

    {
      id:"physical-exam",
      step:2,
      title:"Physical Examination",
      description:
        "Examine genital region and check for tumors at other body locations."
    },

    {
      id:"cytology",
      step:3,
      title:"Cytological Diagnosis",
      description:
        "Evaluate tumor cells using impression smear or fine needle aspiration."
    },

    {
      id:"staging",
      step:4,
      title:"Disease Assessment",
      description:
        "Evaluate uncommon metastatic or extragenital involvement."
    },

    {
      id:"treatment",
      step:5,
      title:"Oncology Treatment",
      description:
        "Provide chemotherapy-based management and monitor response."
    }

  ],

  diagnostics:[

    {
      id:"cytology",
      name:"Tumor Cytology",
      priority:"Essential",
      reason:
        "Identifies characteristic transmissible venereal tumor cells."
    },

    {
      id:"physical-examination",
      name:"Genital Examination",
      priority:"Essential",
      reason:
        "Evaluates tumor location and extent."
    },

    {
      id:"histopathology",
      name:"Histopathology",
      priority:"Recommended",
      reason:
        "Confirms tumor characteristics when required."
    },

    {
      id:"imaging",
      name:"Imaging Evaluation",
      priority:"Conditional",
      reason:
        "Assesses internal or metastatic involvement."

    }

  ],

  drugCategories:[

    {
      category:"Chemotherapy",
      indication:"Primary TVT treatment",
      reason:
        "TVT is highly responsive to chemotherapy."
    },

    {
      category:"Supportive Care",
      indication:"Tumor-associated discomfort or secondary infection",
      reason:
        "Improves patient comfort."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"vincristine",
      priority:"First Line",
      category:"Chemotherapy"
    }

  ],

  stabilization:[

    "Control bleeding from tumor masses.",
    "Maintain hygiene around affected areas.",
    "Assess for secondary infection.",
    "Evaluate reproductive tract involvement.",
    "Monitor response during chemotherapy."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Contact with free-roaming dogs", weight:45 },

      { finding:"Sexual contact history", weight:55 },

      { finding:"Young adult dog", weight:40 },

      { finding:"Progressive genital mass", weight:65 },

      { finding:"Previous untreated tumor exposure", weight:35 }

    ],

    clinicalSigns:[

      { finding:"Friable genital mass", weight:75 },

      { finding:"Blood-tinged genital discharge", weight:65 },

      { finding:"External genital swelling", weight:60 },

      { finding:"Bleeding tumor surface", weight:55 },

      { finding:"Extragenital mass", weight:35 },

      { finding:"Sneezing or nasal discharge in nasal TVT", weight:30 }

    ],

    biochemistry:[

      { finding:"Usually nonspecific blood changes", weight:5 },

      { finding:"Changes due to secondary disease", weight:20 }

    ],

    imaging:[

      { finding:"Local soft tissue mass", weight:45 },

      { finding:"Uncommon metastatic lesions", weight:25 }

    ],

    supports:[

      { finding:"Characteristic cytology findings", weight:90 },

      { finding:"Genital transmissible tumor appearance", weight:75 },

      { finding:"Response to vincristine chemotherapy", weight:60 },

      { finding:"Exposure history", weight:45 }

    ],

    against:[

      { finding:"No tumor cells on cytology", weight:-60 },

      { finding:"Alternative genital tumor diagnosis", weight:-40 },

      { finding:"No mass detected", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"tumor-response",
      parameter:"Tumor size and regression",
      frequency:"During chemotherapy",
      reason:
        "Evaluates treatment effectiveness."
    },

    {
      id:"blood",
      parameter:"CBC monitoring",
      frequency:"During chemotherapy",
      reason:
        "Detects treatment-related complications."
    },

    {
      id:"recurrence",
      parameter:"Tumor recurrence",
      frequency:"Follow-up",
      reason:
        "Ensures complete resolution."

    }

  ],

  precautions:[

    {
      id:"transmission",
      title:"Contagious Tumor",
      description:
        "TVT spreads through transfer of living tumor cells during direct contact."
    },

    {
      id:"isolation",
      title:"Contact Control",
      description:
        "Avoid contact with affected dogs until treatment response is achieved."
    }

  ],

  prognosis:
    "Prognosis is generally excellent because TVT is highly responsive to chemotherapy. Complete remission is common with appropriate treatment.",

  strengtheningEvidence:[

    "Genital tumor",

    "Cytology confirmation",

    "Exposure to affected dogs",

    "Bleeding friable mass",

    "Response to chemotherapy"

  ],

  weakeningEvidence:[

    "No tumor cells",

    "Alternative genital disease",

    "No mass present"

  ],

  classicFindings:[

    "Friable cauliflower-like genital mass",

    "Bleeding discharge",

    "Young roaming dog",

    "Chemotherapy-responsive tumor"

  ],

  ruleOutFindings:[

    "Squamous cell carcinoma",

    "Mast cell tumor",

    "Genital infection",

    "Prolapse",

    "Other reproductive tract tumors"

  ],

};