import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineMulticentricLymphoma: DiseaseCard = {
  id: "canine-multicentric-lymphoma-dog",

  title: "Canine Multicentric Lymphoma",

  description:
    "A malignant cancer of lymphoid cells characterized by enlargement of multiple lymph nodes and potential involvement of internal organs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Canine Lymphoma",
    "Lymphosarcoma",
    "Multicentric Lymphosarcoma",
    "Malignant Lymphoma",
  ],

  overview:
    "Canine multicentric lymphoma is one of the most common cancers affecting dogs. It originates from lymphocytes and commonly presents as generalized enlargement of peripheral lymph nodes. The disease may involve the spleen, liver, bone marrow, gastrointestinal tract, skin, and other tissues. Clinical progression varies depending on lymphoma subtype, immunophenotype, stage, and response to therapy.",

  clinicalProblems:[

    "Lymph node enlargement",
    "Systemic cancer progression",
    "Organ infiltration",
    "Immune dysfunction",
    "Weight loss and weakness"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess lymph node enlargement, weight loss, appetite changes, lethargy, and duration of clinical signs."
    },

    {
      id:"physical-exam",
      step:2,
      title:"Physical Examination",
      description:
        "Evaluate peripheral lymph nodes, mucous membranes, body condition, and systemic abnormalities."
    },

    {
      id:"cytology",
      step:3,
      title:"Cytological Diagnosis",
      description:
        "Perform lymph node aspirate evaluation to identify malignant lymphoid cells."
    },

    {
      id:"staging",
      step:4,
      title:"Cancer Staging",
      description:
        "Determine extent of disease involvement using imaging and laboratory evaluation."
    },

    {
      id:"treatment",
      step:5,
      title:"Oncology Management",
      description:
        "Select chemotherapy or supportive treatment based on lymphoma type and stage."
    }

  ],

  diagnostics:[

    {
      id:"lymph-node-fna",
      name:"Fine Needle Aspiration of Lymph Node",
      priority:"Essential",
      reason:
        "Provides cytological confirmation of lymphoma."
    },

    {
      id:"histopathology",
      name:"Histopathology",
      priority:"Recommended",
      reason:
        "Characterizes tumour type and grade."
    },

    {
      id:"immunophenotyping",
      name:"Immunophenotyping",
      priority:"Recommended",
      reason:
        "Differentiates B-cell and T-cell lymphoma."
    },

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "Evaluates blood cell abnormalities and marrow involvement."
    },

    {
      id:"abdominal-imaging",
      name:"Abdominal Imaging",
      priority:"Recommended",
      reason:
        "Assesses internal organ involvement."

    }

  ],

  drugCategories:[

    {
      category:"Chemotherapy",
      indication:"Systemic lymphoma treatment",
      reason:
        "Targets malignant lymphoid cells."
    },

    {
      category:"Corticosteroid Therapy",
      indication:"Lymphoma-associated inflammation or palliative care",
      reason:
        "Provides lympholytic and supportive effects."
    },

    {
      category:"Supportive Oncology Care",
      indication:"Treatment-related complications",
      reason:
        "Maintains quality of life during therapy."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"
    }

  ],

  stabilization:[

    "Evaluate patient stability and cancer stage.",
    "Manage dehydration or secondary complications.",
    "Assess for tumour-associated metabolic abnormalities.",
    "Provide nutritional support.",
    "Discuss treatment goals with owner."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Generalized lymph node enlargement", weight:70 },

      { finding:"Middle-aged to older dog", weight:40 },

      { finding:"Weight loss", weight:45 },

      { finding:"Reduced appetite", weight:35 },

      { finding:"Lethargy", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Peripheral lymphadenopathy", weight:80 },

      { finding:"Multiple enlarged lymph nodes", weight:75 },

      { finding:"Fever", weight:25 },

      { finding:"Pale mucous membranes", weight:25 },

      { finding:"Organ enlargement", weight:40 },

      { finding:"Respiratory difficulty due to mediastinal involvement", weight:30 }

    ],

    biochemistry:[

      { finding:"Hypercalcemia", weight:40 },

      { finding:"Liver enzyme abnormalities", weight:25 },

      { finding:"Blood abnormalities with marrow involvement", weight:35 }

    ],

    imaging:[

      { finding:"Internal lymphadenopathy", weight:55 },

      { finding:"Splenic enlargement", weight:35 },

      { finding:"Hepatic involvement", weight:35 }

    ],

    supports:[

      { finding:"Lymph node cytology confirming lymphoma", weight:90 },

      { finding:"Multiple enlarged lymph nodes", weight:70 },

      { finding:"B-cell or T-cell confirmation", weight:80 },

      { finding:"Response to chemotherapy", weight:40 }

    ],

    against:[

      { finding:"Normal lymph nodes", weight:-60 },

      { finding:"Reactive lymph node cytology", weight:-40 },

      { finding:"No evidence of lymphoid malignancy", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"lymph-nodes",
      parameter:"Lymph node size",
      frequency:"Regular evaluation",
      reason:
        "Assesses treatment response."
    },

    {
      id:"cbc-monitoring",
      parameter:"Blood cell counts",
      frequency:"During chemotherapy",
      reason:
        "Detects treatment-related bone marrow suppression."
    },

    {
      id:"quality-of-life",
      parameter:"Appetite, activity, comfort",
      frequency:"Continuous",
      reason:
        "Evaluates patient wellbeing."

    }

  ],

  precautions:[

    {
      id:"chemotherapy",
      title:"Chemotherapy Monitoring",
      description:
        "Chemotherapy requires monitoring for adverse effects and complications."
    },

    {
      id:"staging",
      title:"Importance of Staging",
      description:
        "Treatment response and prognosis depend on lymphoma stage and subtype."
    }

  ],

  prognosis:
    "Prognosis varies with lymphoma subtype, stage, and treatment response. Many dogs respond initially to chemotherapy, but relapse may occur.",

  strengtheningEvidence:[

    "Generalized lymph node enlargement",

    "Lymph node cytology",

    "Weight loss",

    "Organ involvement",

    "Immunophenotyping confirmation"

  ],

  weakeningEvidence:[

    "Normal lymph nodes",

    "Reactive lymph node changes",

    "No malignant lymphoid cells"

  ],

  classicFindings:[

    "Multiple enlarged lymph nodes",

    "Lethargy",

    "Weight loss",

    "Systemic illness"

  ],

  ruleOutFindings:[

    "Reactive lymphadenopathy",

    "Lymph node infection",

    "Immune-mediated disease",

    "Metastatic carcinoma",

    "Leukemia"

  ],

};