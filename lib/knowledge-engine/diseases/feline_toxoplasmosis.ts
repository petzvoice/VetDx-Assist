import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineToxoplasmosis: DiseaseCard = {
  id: "feline-toxoplasmosis-cat",

  title: "Feline Toxoplasmosis",

  description:
    "A protozoal disease caused by Toxoplasma gondii infection in cats, with potential involvement of the intestinal tract, nervous system, eyes, lungs, and other organs.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Toxoplasma gondii Infection",
    "Feline Toxoplasmosis",
    "Toxoplasma Infection",
    "Protozoal Disease",
  ],

  overview:
    "Toxoplasmosis is caused by Toxoplasma gondii, an intracellular protozoan parasite for which cats are the definitive host. Cats become infected primarily by ingestion of infected prey or undercooked meat. Most healthy cats remain asymptomatic, but clinical disease may occur in kittens, immunocompromised cats, or cats with concurrent disease. Clinical signs depend on affected organs and may include neurological, ocular, respiratory, gastrointestinal, and systemic abnormalities.",

  clinicalProblems:[

    "Protozoal infection",
    "Neurological disease",
    "Ocular inflammation",
    "Respiratory disease",
    "Systemic inflammation",
    "Potential zoonotic concern"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess outdoor access, hunting behavior, raw meat feeding, immune status, and concurrent diseases."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate neurological, ocular, respiratory, and systemic abnormalities."
    },

    {
      id:"laboratory-testing",
      step:3,
      title:"Laboratory Evaluation",
      description:
        "Assess blood abnormalities and evidence of infection."
    },

    {
      id:"organ-assessment",
      step:4,
      title:"Organ Involvement Assessment",
      description:
        "Evaluate affected organs based on clinical presentation."
    },

    {
      id:"treatment",
      step:5,
      title:"Antiprotozoal Management",
      description:
        "Treat active infection and manage complications."

    }

  ],

  diagnostics:[

    {
      id:"serology",
      name:"Toxoplasma Antibody Testing",
      priority:"Recommended",
      reason:
        "Evaluates exposure and immune response to infection."
    },

    {
      id:"pcr",
      name:"PCR Testing",
      priority:"Conditional",
      reason:
        "May identify parasite genetic material in appropriate samples."
    },

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "Evaluates inflammatory and systemic changes."
    },

    {
      id:"imaging",
      name:"Diagnostic Imaging",
      priority:"Conditional",
      reason:
        "Evaluates organ involvement such as neurological or respiratory disease."

    }

  ],

  drugCategories:[

    {
      category:"Antiprotozoal Therapy",
      indication:"Active toxoplasmosis",
      reason:
        "Targets Toxoplasma organisms."
    },

    {
      category:"Supportive Therapy",
      indication:"Systemic disease",
      reason:
        "Maintains hydration and organ support."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Inflammatory complications",
      reason:
        "Controls immune-mediated tissue damage."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"clindamycin",
      priority:"Supportive",
      category:"Antiprotozoal"

    }

  ],

  stabilization:[

    "Provide supportive care for affected organs.",
    "Maintain hydration and nutrition.",
    "Manage neurological or ocular complications.",
    "Reduce exposure to raw meat and infected prey.",
    "Monitor response to therapy."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Outdoor access", weight:60 },

      { finding:"Hunting behavior", weight:75 },

      { finding:"Raw meat feeding", weight:70 },

      { finding:"Immune suppression", weight:65 },

      { finding:"Concurrent disease", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Neurological abnormalities", weight:70 },

      { finding:"Uveitis", weight:65 },

      { finding:"Fever", weight:55 },

      { finding:"Lethargy", weight:50 },

      { finding:"Respiratory signs", weight:40 },

      { finding:"Diarrhea", weight:35 },

      { finding:"Muscle weakness", weight:45 }

    ],

    biochemistry:[

      { finding:"Inflammatory changes", weight:35 },

      { finding:"Liver enzyme abnormalities", weight:30 },

      { finding:"Anemia in some cases", weight:25 }

    ],

    imaging:[

      { finding:"Central nervous system changes", weight:40 },

      { finding:"Pulmonary changes", weight:35 },

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Compatible clinical signs", weight:70 },

      { finding:"Positive antibody evidence", weight:65 },

      { finding:"Positive PCR detection", weight:85 },

      { finding:"Immunocompromised cat", weight:60 }

    ],

    against:[

      { finding:"No clinical disease signs", weight:-30 },

      { finding:"Alternative diagnosis confirmed", weight:-50 },

      { finding:"Negative appropriate testing", weight:-25 }

    ],

  },

  monitoring:[

    {
      id:"neurological",
      parameter:"Neurological status",
      frequency:"Regular monitoring",
      reason:
        "Detects progression or improvement."
    },

    {
      id:"ocular",
      parameter:"Eye examination",
      frequency:"Follow-up",
      reason:
        "Monitors ocular complications."
    },

    {
      id:"blood",
      parameter:"Blood parameters",
      frequency:"Periodic",
      reason:
        "Evaluates systemic response."

    }

  ],

  precautions:[

    {
      id:"zoonotic",
      title:"Zoonotic Consideration",
      description:
        "Human infection risk is mainly associated with contaminated food, soil, and cat fecal material."
    },

    {
      id:"hygiene",
      title:"Hygiene Measures",
      description:
        "Proper litter box hygiene and food handling reduce exposure risk."

    }

  ],

  prognosis:
    "Prognosis depends on the severity and organs affected. Many cases respond well to treatment when diagnosed early, while severe neurological or systemic disease may carry a guarded prognosis.",

  strengtheningEvidence:[

    "Neurological signs",

    "Ocular inflammation",

    "Positive Toxoplasma testing",

    "Risk exposure history"

  ],

  weakeningEvidence:[

    "No compatible signs",

    "Alternative diagnosis confirmed",

    "No exposure risk"

  ],

  classicFindings:[

    "Neurological disease",

    "Uveitis",

    "Fever",

    "Outdoor cat exposure"

  ],

  ruleOutFindings:[

    "Feline infectious peritonitis",

    "Feline leukemia virus",

    "Feline immunodeficiency virus",

    "Bacterial infection",

    "Neurological disorders"

  ],

};