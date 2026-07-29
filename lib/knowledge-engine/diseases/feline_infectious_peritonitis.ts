import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineInfectiousPeritonitis: DiseaseCard = {
  id: "feline-infectious-peritonitis-cat",

  title: "Feline Infectious Peritonitis (FIP)",

  description:
    "A progressive immune-mediated disease caused by mutation of feline coronavirus, resulting in inflammatory lesions affecting multiple organs.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Infectious Peritonitis",
    "FIP",
    "Feline Coronavirus Associated Disease",
    "Mutated Feline Coronavirus Infection",
  ],

  overview:
    "Feline infectious peritonitis is a severe systemic disease caused by mutation of feline enteric coronavirus into a form capable of causing widespread inflammation. The disease occurs primarily in young cats and multi-cat environments. FIP has two major clinical forms: effusive (wet) FIP, characterized by fluid accumulation in body cavities, and non-effusive (dry) FIP, characterized by granulomatous inflammation affecting organs such as the eyes, brain, liver, kidneys, and lymph nodes.",

  clinicalProblems:[

    "Systemic inflammatory disease",
    "Effusion accumulation",
    "Neurological involvement",
    "Ocular inflammation",
    "Granulomatous organ lesions",
    "Progressive weight loss"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age, multi-cat exposure, previous coronavirus exposure, weight loss, fever, and chronic illness."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate fever, body condition, abdominal distension, neurological and ocular abnormalities."
    },

    {
      id:"laboratory",
      step:3,
      title:"Laboratory Assessment",
      description:
        "Evaluate blood changes, inflammation, protein abnormalities, and organ involvement."
    },

    {
      id:"fluid-analysis",
      step:4,
      title:"Effusion Evaluation",
      description:
        "Analyze body cavity fluid when present."
    },

    {
      id:"confirmation",
      step:5,
      title:"Diagnostic Confirmation",
      description:
        "Combine clinical findings with laboratory and advanced diagnostic methods."

    }

  ],

  diagnostics:[

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "Evaluates anemia, lymphopenia, and inflammatory changes."
    },

    {
      id:"serum-biochemistry",
      name:"Serum Biochemistry",
      priority:"Essential",
      reason:
        "Detects hyperglobulinemia and organ involvement."
    },

    {
      id:"effusion-analysis",
      name:"Body Cavity Fluid Analysis",
      priority:"Essential",
      reason:
        "Supports diagnosis in wet FIP cases."
    },

    {
      id:"pcr",
      name:"Coronavirus PCR / Molecular Testing",
      priority:"Conditional",
      reason:
        "May support diagnosis when interpreted with clinical findings."

    }

  ],

  drugCategories:[

    {
      category:"Antiviral Therapy",
      indication:"FIP treatment",
      reason:
        "Targets viral replication."
    },

    {
      category:"Supportive Therapy",
      indication:"Systemic illness management",
      reason:
        "Maintains hydration, nutrition, and comfort."
    },

    {
      category:"Anti-inflammatory Management",
      indication:"Inflammatory complications",
      reason:
        "Controls immune-mediated damage."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"remdesivir",
      priority:"Supportive",
      category:"Antiviral"
    },

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"

    }

  ],

  stabilization:[

    "Maintain hydration and nutritional support.",
    "Manage fever and inflammation.",
    "Monitor affected organs.",
    "Evaluate neurological and ocular involvement.",
    "Provide antiviral therapy when available."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Young cat", weight:60 },

      { finding:"Multi-cat environment", weight:65 },

      { finding:"Chronic progressive illness", weight:70 },

      { finding:"Weight loss history", weight:65 },

      { finding:"Previous coronavirus exposure", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Persistent fever", weight:75 },

      { finding:"Weight loss", weight:70 },

      { finding:"Abdominal distension", weight:65 },

      { finding:"Neurological signs", weight:55 },

      { finding:"Eye inflammation", weight:55 },

      { finding:"Lethargy", weight:60 },

      { finding:"Poor appetite", weight:60 }

    ],

    biochemistry:[

      { finding:"Hyperglobulinemia", weight:75 },

      { finding:"Low albumin:globulin ratio", weight:80 },

      { finding:"Anemia", weight:45 },

      { finding:"Elevated inflammatory markers", weight:55 }

    ],

    imaging:[

      { finding:"Abdominal fluid accumulation", weight:80 },

      { finding:"Enlarged lymph nodes", weight:50 },

      { finding:"Organ granulomas", weight:60 }

    ],

    supports:[

      { finding:"Characteristic effusion", weight:85 },

      { finding:"Low albumin:globulin ratio", weight:75 },

      { finding:"Persistent fever", weight:70 },

      { finding:"Compatible clinical signs", weight:80 }

    ],

    against:[

      { finding:"Complete absence of systemic signs", weight:-50 },

      { finding:"Alternative disease confirmed", weight:-60 },

      { finding:"Normal inflammatory profile", weight:-25 }

    ],

  },

  monitoring:[

    {
      id:"weight",
      parameter:"Body weight and appetite",
      frequency:"Regular monitoring",
      reason:
        "Evaluates disease progression and recovery."
    },

    {
      id:"blood",
      parameter:"Blood parameters",
      frequency:"Periodic",
      reason:
        "Monitors inflammation and organ function."
    },

    {
      id:"neurological",
      parameter:"Neurological and ocular signs",
      frequency:"Follow-up",
      reason:
        "Detects progression."

    }

  ],

  precautions:[

    {
      id:"coronavirus",
      title:"Feline Coronavirus Exposure",
      description:
        "Many cats are exposed to feline coronavirus, but only a small proportion develop FIP."
    },

    {
      id:"multi-cat",
      title:"Multi-cat Environment",
      description:
        "Crowded environments increase coronavirus transmission risk."

    }

  ],

  prognosis:
    "FIP was historically considered fatal, but antiviral therapy has significantly improved outcomes. Prognosis depends on disease form, organ involvement, and treatment response.",

  strengtheningEvidence:[

    "Persistent fever",

    "Low albumin:globulin ratio",

    "Characteristic effusion",

    "Young cat with systemic disease"

  ],

  weakeningEvidence:[

    "No systemic signs",

    "Normal inflammatory profile",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Young cat",

    "Persistent fever",

    "Weight loss",

    "Abdominal fluid accumulation"

  ],

  ruleOutFindings:[

    "Feline leukemia virus",

    "Lymphoma",

    "Bacterial peritonitis",

    "Toxoplasmosis",

    "Other inflammatory diseases"

  ],

};