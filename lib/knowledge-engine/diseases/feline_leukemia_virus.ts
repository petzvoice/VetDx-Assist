import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineLeukemiaVirus: DiseaseCard = {
  id: "feline-leukemia-virus-cat",

  title: "Feline Leukemia Virus Infection (FeLV)",

  description:
    "A contagious retroviral disease of cats caused by feline leukemia virus, leading to immune suppression, anemia, persistent infection, and increased risk of lymphoma.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Leukemia Virus Infection",
    "FeLV Infection",
    "Feline Retroviral Disease",
    "Feline Leukemia",
  ],

  overview:
    "Feline leukemia virus is an oncogenic retrovirus that infects cats worldwide. The virus primarily affects immune cells and bone marrow, resulting in immunosuppression, anemia, chronic inflammation, and increased susceptibility to secondary infections. Some infected cats eliminate the virus, while others develop persistent infection with progressive disease. Transmission occurs mainly through saliva during close contact, grooming, and bite wounds.",

  clinicalProblems:[

    "Retroviral infection",
    "Immunosuppression",
    "Anemia",
    "Secondary infections",
    "Lymphoma development risk",
    "Chronic inflammatory disease"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess vaccination status, outdoor exposure, contact with infected cats, and recurrent illness."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate body condition, lymph nodes, mucous membranes, infections, and systemic abnormalities."
    },

    {
      id:"screening",
      step:3,
      title:"FeLV Screening",
      description:
        "Perform initial viral antigen testing."
    },

    {
      id:"confirmation",
      step:4,
      title:"Confirmatory Testing",
      description:
        "Use additional testing methods to determine infection status."
    },

    {
      id:"management",
      step:5,
      title:"Long-term Management",
      description:
        "Monitor infected cats and manage complications."

    }

  ],

  diagnostics:[

    {
      id:"felv-antigen-test",
      name:"FeLV Antigen Test",
      priority:"Essential",
      reason:
        "Detects circulating viral antigen during infection."
    },

    {
      id:"pcr",
      name:"PCR Testing",
      priority:"Recommended",
      reason:
        "Detects viral genetic material and helps characterize infection."
    },

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Essential",
      reason:
        "Evaluates anemia, leukopenia, and blood abnormalities."
    },

    {
      id:"serum-biochemistry",
      name:"Serum Biochemistry",
      priority:"Recommended",
      reason:
        "Assesses organ function and systemic complications."

    }

  ],

  drugCategories:[

    {
      category:"Supportive Management",
      indication:"Chronic viral disease",
      reason:
        "Maintains health and manages complications."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Secondary infections",
      reason:
        "Controls infections due to immune suppression."
    },

    {
      category:"Oncology Management",
      indication:"FeLV-associated lymphoma",
      reason:
        "Treats neoplastic complications."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"doxycycline",
      priority:"Supportive",
      category:"Antibiotic"
    },

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"

    }

  ],

  stabilization:[

    "Treat secondary infections promptly.",
    "Maintain good nutrition and body condition.",
    "Monitor blood abnormalities.",
    "Reduce exposure to infectious risks.",
    "Provide regular veterinary follow-up."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Outdoor lifestyle", weight:55 },

      { finding:"Contact with unknown cats", weight:70 },

      { finding:"Multi-cat household", weight:65 },

      { finding:"No FeLV vaccination", weight:60 },

      { finding:"Recurrent illness history", weight:70 }

    ],

    clinicalSigns:[

      { finding:"Weight loss", weight:65 },

      { finding:"Lethargy", weight:55 },

      { finding:"Pale mucous membranes", weight:60 },

      { finding:"Recurrent infections", weight:80 },

      { finding:"Lymph node enlargement", weight:60 },

      { finding:"Fever", weight:45 },

      { finding:"Poor appetite", weight:50 }

    ],

    biochemistry:[

      { finding:"Anemia", weight:70 },

      { finding:"Leukopenia", weight:55 },

      { finding:"Blood cell abnormalities", weight:75 },

      { finding:"Hyperglobulinemia", weight:35 }

    ],

    imaging:[

      { finding:"Lymph node enlargement", weight:50 },

      { finding:"Mass lesions with lymphoma", weight:60 },

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Positive FeLV antigen test", weight:90 },

      { finding:"Persistent blood abnormalities", weight:70 },

      { finding:"Recurrent infections", weight:75 },

      { finding:"FeLV-associated lymphoma", weight:85 }

    ],

    against:[

      { finding:"Repeated negative FeLV testing", weight:-60 },

      { finding:"No exposure risk", weight:-25 },

      { finding:"Alternative disease confirmed", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"blood",
      parameter:"Complete blood count",
      frequency:"Periodic",
      reason:
        "Monitors anemia and immune status."
    },

    {
      id:"infection",
      parameter:"Secondary infections",
      frequency:"Regular follow-up",
      reason:
        "Detects complications early."
    },

    {
      id:"weight",
      parameter:"Body weight and appetite",
      frequency:"Regular monitoring",
      reason:
        "Evaluates overall health."

    }

  ],

  precautions:[

    {
      id:"transmission",
      title:"Transmission Prevention",
      description:
        "Avoid unnecessary contact between infected and uninfected cats."
    },

    {
      id:"vaccination",
      title:"Vaccination Protection",
      description:
        "Vaccination reduces risk in cats exposed to FeLV."

    }

  ],

  prognosis:
    "Prognosis varies widely. Some infected cats remain healthy for years, while persistently infected cats have increased risk of immune suppression, lymphoma, and progressive disease.",

  strengtheningEvidence:[

    "Positive FeLV antigen test",

    "Recurrent infections",

    "Blood abnormalities",

    "Lymphoma development"

  ],

  weakeningEvidence:[

    "Repeated negative testing",

    "No risk exposure",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Chronic illness",

    "Anemia",

    "Recurrent infections",

    "Lymph node enlargement"

  ],

  ruleOutFindings:[

    "Feline immunodeficiency virus",

    "Immune-mediated anemia",

    "Lymphoma",

    "Chronic bacterial infection",

    "Other causes of immunosuppression"

  ],

};