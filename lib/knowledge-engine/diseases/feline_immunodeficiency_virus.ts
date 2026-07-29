import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineImmunodeficiencyVirus: DiseaseCard = {
  id: "feline-immunodeficiency-virus-cat",

  title: "Feline Immunodeficiency Virus Infection (FIV)",

  description:
    "A chronic retroviral infection of cats caused by feline immunodeficiency virus, leading to progressive immune dysfunction and increased susceptibility to secondary infections.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Immunodeficiency Virus",
    "FIV Infection",
    "Feline AIDS-like Syndrome",
    "Feline Lentivirus Infection",
  ],

  overview:
    "Feline immunodeficiency virus is a lentivirus that primarily infects immune cells, especially T lymphocytes, causing gradual impairment of immune function. Many infected cats remain clinically healthy for years before developing disease. Advanced infection may result in chronic infections, oral disease, weight loss, neurological abnormalities, and increased risk of certain cancers. Transmission occurs mainly through bite wounds from infected cats.",

  clinicalProblems:[

    "Progressive immune dysfunction",
    "Chronic infections",
    "Oral inflammatory disease",
    "Weight loss",
    "Neurological complications",
    "Increased neoplasia risk"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess outdoor exposure, bite wounds, contact with unknown cats, recurrent infections, and vaccination status."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate oral cavity, lymph nodes, body condition, skin, and signs of chronic disease."
    },

    {
      id:"screening",
      step:3,
      title:"FIV Screening",
      description:
        "Perform antibody-based testing for initial evaluation."
    },

    {
      id:"confirmation",
      step:4,
      title:"Confirmatory Testing",
      description:
        "Use additional testing when infection status requires confirmation."
    },

    {
      id:"management",
      step:5,
      title:"Long-term Health Management",
      description:
        "Monitor immune status and prevent complications."

    }

  ],

  diagnostics:[

    {
      id:"fiv-antibody-test",
      name:"FIV Antibody Testing",
      priority:"Essential",
      reason:
        "Detects antibodies produced against FIV infection."
    },

    {
      id:"pcr",
      name:"PCR Testing",
      priority:"Recommended",
      reason:
        "May detect viral genetic material."
    },

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "Evaluates anemia and immune-related changes."
    },

    {
      id:"serum-biochemistry",
      name:"Serum Biochemistry",
      priority:"Recommended",
      reason:
        "Assesses systemic health and organ function."

    }

  ],

  drugCategories:[

    {
      category:"Supportive Management",
      indication:"Chronic viral infection",
      reason:
        "Maintains health and manages complications."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Secondary infections",
      reason:
        "Controls infections associated with immune dysfunction."
    },

    {
      category:"Dental Management",
      indication:"Chronic oral inflammation",
      reason:
        "Addresses painful oral disease."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"doxycycline",
      priority:"Supportive",
      category:"Antibiotic"
    },

    {
      drugId:"buprenorphine",
      priority:"Supportive",
      category:"Analgesic"

    }

  ],

  stabilization:[

    "Treat secondary infections promptly.",
    "Maintain nutritional support.",
    "Monitor oral health.",
    "Reduce stress and infectious exposure.",
    "Perform regular health evaluations."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Outdoor lifestyle", weight:70 },

      { finding:"History of bite wounds", weight:80 },

      { finding:"Contact with unknown cats", weight:65 },

      { finding:"Adult male cat", weight:55 },

      { finding:"Recurrent illness history", weight:70 }

    ],

    clinicalSigns:[

      { finding:"Chronic gingivitis/stomatitis", weight:80 },

      { finding:"Weight loss", weight:65 },

      { finding:"Lethargy", weight:55 },

      { finding:"Recurrent infections", weight:75 },

      { finding:"Lymph node enlargement", weight:55 },

      { finding:"Fever", weight:40 },

      { finding:"Skin disease", weight:45 }

    ],

    biochemistry:[

      { finding:"Anemia", weight:45 },

      { finding:"Blood cell abnormalities", weight:55 },

      { finding:"Hyperglobulinemia", weight:45 },

      { finding:"Usually variable changes", weight:20 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 },

      { finding:"Changes due to secondary disease", weight:25 }

    ],

    supports:[

      { finding:"Positive FIV antibody test", weight:90 },

      { finding:"History of bite exposure", weight:75 },

      { finding:"Chronic oral disease", weight:75 },

      { finding:"Recurrent infections", weight:70 }

    ],

    against:[

      { finding:"Repeated negative testing", weight:-60 },

      { finding:"No exposure risk", weight:-25 },

      { finding:"Alternative diagnosis confirmed", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"immune",
      parameter:"General health and infection frequency",
      frequency:"Regular follow-up",
      reason:
        "Monitors immune function changes."
    },

    {
      id:"oral",
      parameter:"Oral health status",
      frequency:"Periodic",
      reason:
        "Detects chronic stomatitis and dental disease."
    },

    {
      id:"blood",
      parameter:"Complete blood count",
      frequency:"Periodic",
      reason:
        "Monitors blood abnormalities."

    }

  ],

  precautions:[

    {
      id:"transmission",
      title:"Transmission Risk",
      description:
        "FIV spreads mainly through bite wounds, so preventing fighting reduces transmission."
    },

    {
      id:"testing",
      title:"Testing Before Introduction",
      description:
        "New cats should be tested before joining households with FIV-negative cats."

    }

  ],

  prognosis:
    "Many FIV-positive cats can live normal lives with appropriate care. Prognosis depends on immune status, secondary infections, and development of complications.",

  strengtheningEvidence:[

    "Positive FIV antibody test",

    "Bite wound history",

    "Chronic oral disease",

    "Recurrent infections"

  ],

  weakeningEvidence:[

    "Repeated negative testing",

    "No risk exposure",

    "Alternative cause identified"

  ],

  classicFindings:[

    "Adult outdoor cat",

    "Gingivitis/stomatitis",

    "Recurrent infections",

    "Weight loss"

  ],

  ruleOutFindings:[

    "Feline leukemia virus",

    "Chronic bacterial infection",

    "Immune-mediated disease",

    "Dental disease",

    "Lymphoma"

  ],

};