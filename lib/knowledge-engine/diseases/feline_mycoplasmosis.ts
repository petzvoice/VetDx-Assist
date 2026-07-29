import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineMycoplasmosis: DiseaseCard = {
  id: "feline-mycoplasmosis-cat",

  title: "Feline Mycoplasmosis (Hemotropic Mycoplasma Infection)",

  description:
    "A blood-borne bacterial infection of cats caused by hemotropic Mycoplasma organisms that attach to red blood cells and may cause hemolytic anemia.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Infectious Anemia",
    "Hemotropic Mycoplasmosis",
    "Feline Hemoplasmosis",
    "Mycoplasma haemofelis Infection",
    "Mycoplasma Infection",
  ],

  overview:
    "Feline mycoplasmosis is caused by hemotropic Mycoplasma species that attach to erythrocyte surfaces, causing immune-mediated destruction of red blood cells and anemia. The most pathogenic species is Mycoplasma haemofelis, while other species may cause milder disease. Transmission may occur through blood exposure, including flea and tick transmission, bite wounds, or contaminated blood.",

  clinicalProblems:[

    "Hemolytic anemia",
    "Red blood cell destruction",
    "Fever",
    "Weakness",
    "Reduced oxygen delivery",
    "Immune-mediated complications"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess flea exposure, outdoor access, fighting history, previous illness, and immunosuppressive conditions."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate mucous membrane colour, hydration, temperature, weakness, and signs of anemia."
    },

    {
      id:"hematology",
      step:3,
      title:"Hematological Evaluation",
      description:
        "Assess anemia severity and regenerative response."
    },

    {
      id:"organism-detection",
      step:4,
      title:"Organism Identification",
      description:
        "Use molecular testing to detect hemotropic Mycoplasma infection."

    },

    {
      id:"management",
      step:5,
      title:"Treatment and Support",
      description:
        "Control infection, manage anemia, and address contributing factors."

    }

  ],

  diagnostics:[

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Essential",
      reason:
        "Identifies anemia and regenerative response."
    },

    {
      id:"blood-smear",
      name:"Blood Smear Examination",
      priority:"Recommended",
      reason:
        "May show organisms attached to erythrocytes but sensitivity is limited."
    },

    {
      id:"pcr",
      name:"PCR Testing",
      priority:"Recommended",
      reason:
        "Provides sensitive detection of hemotropic Mycoplasma DNA."
    },

    {
      id:"reticulocyte-count",
      name:"Reticulocyte Count",
      priority:"Recommended",
      reason:
        "Evaluates bone marrow response to anemia."

    }

  ],

  drugCategories:[

    {
      category:"Antimicrobial Therapy",
      indication:"Mycoplasma infection",
      reason:
        "Reduces organism load."
    },

    {
      category:"Supportive Blood Therapy",
      indication:"Severe anemia",
      reason:
        "Improves oxygen carrying capacity."
    },

    {
      category:"Immune Modulation",
      indication:"Immune-mediated hemolysis",
      reason:
        "Controls excessive red blood cell destruction."

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
      category:"Immunomodulator"

    }

  ],

  stabilization:[

    "Assess severity of anemia.",
    "Provide oxygen support if required.",
    "Consider blood transfusion in severe anemia.",
    "Control flea and tick exposure.",
    "Monitor packed cell volume/hematocrit."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Flea exposure", weight:65 },

      { finding:"Outdoor lifestyle", weight:50 },

      { finding:"Bite wound history", weight:45 },

      { finding:"Immunosuppression", weight:55 },

      { finding:"Previous blood disease", weight:35 }

    ],

    clinicalSigns:[

      { finding:"Pale mucous membranes", weight:85 },

      { finding:"Weakness", weight:75 },

      { finding:"Lethargy", weight:70 },

      { finding:"Fever", weight:60 },

      { finding:"Weight loss", weight:45 },

      { finding:"Jaundice", weight:55 }

    ],

    biochemistry:[

      { finding:"Regenerative anemia", weight:85 },

      { finding:"Increased bilirubin", weight:55 },

      { finding:"Inflammatory changes", weight:35 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 },

      { finding:"Splenomegaly in some cases", weight:35 }

    ],

    supports:[

      { finding:"Positive PCR test", weight:95 },

      { finding:"Regenerative hemolytic anemia", weight:85 },

      { finding:"Organisms on blood evaluation", weight:70 },

      { finding:"Compatible clinical signs", weight:75 }

    ],

    against:[

      { finding:"Normal CBC", weight:-50 },

      { finding:"No evidence of anemia", weight:-40 },

      { finding:"Alternative cause of anemia confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"cbc",
      parameter:"Packed cell volume and red blood cell count",
      frequency:"Regular monitoring",
      reason:
        "Evaluates recovery from anemia."
    },

    {
      id:"clinical",
      parameter:"Energy level and clinical signs",
      frequency:"Regular follow-up",
      reason:
        "Assesses treatment response."
    },

    {
      id:"infection",
      parameter:"Mycoplasma status",
      frequency:"As required",
      reason:
        "Evaluates infection control."

    }

  ],

  precautions:[

    {
      id:"carrier",
      title:"Carrier State",
      description:
        "Some cats may remain infected after treatment and act as carriers."
    },

    {
      id:"blood",
      title:"Blood Transmission Risk",
      description:
        "Blood screening and parasite control reduce transmission risk."

    }

  ],

  prognosis:
    "Prognosis depends on severity of anemia and underlying disease. Many cats respond well to therapy, although recurrence or persistent infection may occur.",

  strengtheningEvidence:[

    "Regenerative anemia",

    "Positive PCR",

    "Flea exposure",

    "Hemolytic signs"

  ],

  weakeningEvidence:[

    "Normal blood parameters",

    "No anemia",

    "Alternative anemia diagnosis"

  ],

  classicFindings:[

    "Anemia",

    "Pale mucous membranes",

    "Weakness",

    "Fever"

  ],

  ruleOutFindings:[

    "Feline leukemia virus-associated anemia",

    "Immune-mediated hemolytic anemia",

    "Blood loss",

    "Chronic kidney disease",

    "Bone marrow disorders"

  ],

};