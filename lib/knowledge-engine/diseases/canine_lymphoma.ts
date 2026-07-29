import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineLymphoma: DiseaseCard = {
  id: "canine-lymphoma-dog",

  title: "Canine Lymphoma",

  description:
    "A malignant cancer of lymphoid cells affecting lymph nodes, lymphatic tissues, and various organs including the spleen, liver, bone marrow, and gastrointestinal tract.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Lymphosarcoma",
    "Canine Malignant Lymphoma",
    "Multicentric Lymphoma",
    "Lymphoid Neoplasia",
  ],

  overview:
    "Canine lymphoma is one of the most common malignant tumors in dogs. It originates from lymphocytes and may occur in different anatomical forms including multicentric, alimentary, mediastinal, cutaneous, and extranodal lymphoma. Multicentric lymphoma is the most common presentation and is characterized by generalized lymph node enlargement. Disease progression and prognosis depend on lymphoma subtype, immunophenotype, stage, and response to therapy.",

  clinicalProblems:[

    "Malignant lymphoid proliferation",
    "Generalized lymphadenopathy",
    "Organ infiltration",
    "Bone marrow involvement",
    "Immune dysfunction",
    "Systemic illness"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess lymph node enlargement, appetite changes, weight loss, lethargy, fever, and duration of clinical signs."
    },

    {
      id:"physical-examination",
      step:2,
      title:"Physical Examination",
      description:
        "Evaluate peripheral lymph nodes, abdominal organs, mucous membranes, and systemic abnormalities."
    },

    {
      id:"cytology",
      step:3,
      title:"Cytological Diagnosis",
      description:
        "Perform lymph node aspiration to identify malignant lymphoid cells."
    },

    {
      id:"staging",
      step:4,
      title:"Clinical Staging",
      description:
        "Determine disease distribution using laboratory tests and imaging."
    },

    {
      id:"treatment",
      step:5,
      title:"Oncology Management",
      description:
        "Select chemotherapy protocols based on lymphoma type and patient status."
    }

  ],

  diagnostics:[

    {
      id:"lymph-node-fna",
      name:"Lymph Node Fine Needle Aspiration",
      priority:"Essential",
      reason:
        "Provides rapid identification of lymphoma cells."
    },

    {
      id:"histopathology",
      name:"Histopathology",
      priority:"Recommended",
      reason:
        "Characterizes lymphoma subtype and tissue architecture."
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
      priority:"Essential",
      reason:
        "Evaluates anemia, blood cell abnormalities, and marrow involvement."
    },

    {
      id:"abdominal-imaging",
      name:"Abdominal Ultrasound",
      priority:"Recommended",
      reason:
        "Evaluates spleen, liver, and abdominal lymph nodes."
    },

    {
      id:"thoracic-imaging",
      name:"Thoracic Imaging",
      priority:"Recommended",
      reason:
        "Assesses mediastinal involvement and metastasis."

    }

  ],

  drugCategories:[

    {
      category:"Chemotherapy",
      indication:"Systemic lymphoma treatment",
      reason:
        "Targets malignant lymphoid cells throughout the body."
    },

    {
      category:"Corticosteroid Therapy",
      indication:"Lympholytic and supportive treatment",
      reason:
        "May reduce inflammation and temporarily decrease lymphoma burden."
    },

    {
      category:"Supportive Oncology Care",
      indication:"Treatment complications",
      reason:
        "Maintains patient comfort and quality of life."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"
    },

    {
      drugId:"vincristine",
      priority:"First Line",
      category:"Chemotherapy"
    }

  ],

  stabilization:[

    "Evaluate patient stability and lymphoma stage.",
    "Manage dehydration and nutritional compromise.",
    "Assess for metabolic complications.",
    "Monitor infection risk.",
    "Discuss treatment goals and prognosis."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Generalized lymph node enlargement", weight:80 },

      { finding:"Middle-aged to older dog", weight:45 },

      { finding:"Weight loss", weight:50 },

      { finding:"Lethargy", weight:45 },

      { finding:"Reduced appetite", weight:35 },

      { finding:"Fever episodes", weight:25 }

    ],

    clinicalSigns:[

      { finding:"Peripheral lymphadenopathy", weight:85 },

      { finding:"Multiple enlarged lymph nodes", weight:80 },

      { finding:"Splenomegaly", weight:45 },

      { finding:"Hepatomegaly", weight:40 },

      { finding:"Weakness", weight:40 },

      { finding:"Vomiting or diarrhea in alimentary lymphoma", weight:35 },

      { finding:"Respiratory signs in mediastinal lymphoma", weight:30 }

    ],

    biochemistry:[

      { finding:"Hypercalcemia", weight:40 },

      { finding:"Anemia", weight:35 },

      { finding:"Abnormal liver parameters with organ involvement", weight:25 },

      { finding:"Blood cell abnormalities with marrow involvement", weight:45 }

    ],

    imaging:[

      { finding:"Generalized lymph node enlargement", weight:75 },

      { finding:"Splenic enlargement", weight:45 },

      { finding:"Hepatic involvement", weight:40 },

      { finding:"Mediastinal mass", weight:40 },

      { finding:"Bone marrow involvement", weight:35 }

    ],

    supports:[

      { finding:"Lymph node cytology confirming lymphoma", weight:95 },

      { finding:"Immunophenotyping confirmation", weight:90 },

      { finding:"Generalized lymphadenopathy", weight:75 },

      { finding:"Response to chemotherapy", weight:40 }

    ],

    against:[

      { finding:"Normal lymph nodes", weight:-60 },

      { finding:"Reactive lymph node changes only", weight:-45 },

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
      id:"cbc",
      parameter:"Blood cell counts",
      frequency:"During chemotherapy",
      reason:
        "Detects bone marrow suppression and complications."
    },

    {
      id:"organ-function",
      parameter:"Liver and kidney parameters",
      frequency:"During treatment",
      reason:
        "Monitors systemic effects."

    },

    {
      id:"quality-life",
      parameter:"Appetite, activity, comfort",
      frequency:"Continuous",
      reason:
        "Evaluates patient wellbeing."

    }

  ],

  precautions:[

    {
      id:"staging",
      title:"Importance of Staging",
      description:
        "Clinical stage and lymphoma subtype influence treatment response and prognosis."
    },

    {
      id:"chemotherapy",
      title:"Chemotherapy Monitoring",
      description:
        "Patients receiving chemotherapy require monitoring for adverse effects and complications."
    }

  ],

  prognosis:
    "Prognosis varies depending on lymphoma subtype, stage, immunophenotype, and response to treatment. Many dogs initially respond well to chemotherapy, but relapse is common.",

  strengtheningEvidence:[

    "Generalized lymphadenopathy",

    "Lymph node cytology confirmation",

    "B-cell or T-cell confirmation",

    "Organ involvement",

    "Systemic clinical signs"

  ],

  weakeningEvidence:[

    "Normal lymph nodes",

    "Reactive lymphadenopathy",

    "No malignant lymphoid cells"

  ],

  classicFindings:[

    "Multiple enlarged lymph nodes",

    "Weight loss",

    "Lethargy",

    "Systemic illness"

  ],

  ruleOutFindings:[

    "Reactive lymphadenitis",

    "Bacterial lymph node infection",

    "Metastatic carcinoma",

    "Immune-mediated lymphadenopathy",

    "Leukemia"

  ],

};