import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felinePanleukopenia: DiseaseCard = {
  id: "feline-panleukopenia-cat",

  title: "Feline Panleukopenia Virus Infection (FPV)",

  description:
    "A highly contagious viral disease of cats caused by feline panleukopenia virus, characterized by severe enteritis, immunosuppression, and marked reduction of white blood cells.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Panleukopenia",
    "Feline Distemper",
    "Feline Infectious Enteritis",
    "Feline Parvovirus Infection",
  ],

  overview:
    "Feline panleukopenia is a severe and highly contagious disease caused by feline panleukopenia virus, a parvovirus affecting rapidly dividing cells. The virus primarily targets intestinal crypt cells, bone marrow cells, and lymphoid tissues. Disease is especially severe in kittens and unvaccinated cats. Infection results in gastrointestinal damage, profound leukopenia, dehydration, secondary bacterial complications, and high mortality in severe cases.",

  clinicalProblems:[

    "Severe enteritis",
    "Profound leukopenia",
    "Dehydration",
    "Immunosuppression",
    "Secondary bacterial infection",
    "High kitten mortality"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess vaccination status, age, exposure to infected cats, shelter environment, and acute onset of illness."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate fever, depression, dehydration, gastrointestinal signs, and systemic illness."
    },

    {
      id:"blood-evaluation",
      step:3,
      title:"Hematological Assessment",
      description:
        "Evaluate white blood cell counts and detect characteristic leukopenia."
    },

    {
      id:"viral-testing",
      step:4,
      title:"Viral Diagnosis",
      description:
        "Perform antigen testing or molecular testing when available."
    },

    {
      id:"supportive-management",
      step:5,
      title:"Supportive Care",
      description:
        "Provide fluid therapy, nutritional support, and management of complications."

    }

  ],

  diagnostics:[

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Essential",
      reason:
        "Detects characteristic leukopenia and evaluates disease severity."
    },

    {
      id:"fecal-antigen-test",
      name:"Fecal Antigen Testing",
      priority:"Recommended",
      reason:
        "Detects viral antigen in fecal samples."
    },

    {
      id:"pcr",
      name:"PCR Testing",
      priority:"Recommended",
      reason:
        "Confirms viral infection with molecular detection."
    },

    {
      id:"serum-biochemistry",
      name:"Serum Biochemistry",
      priority:"Recommended",
      reason:
        "Evaluates dehydration, organ function, and complications."

    }

  ],

  drugCategories:[

    {
      category:"Supportive Fluid Therapy",
      indication:"Dehydration and shock prevention",
      reason:
        "Maintains circulation and corrects fluid losses."
    },

    {
      category:"Antimicrobial Support",
      indication:"Secondary bacterial infection risk",
      reason:
        "Addresses bacterial translocation caused by intestinal damage."
    },

    {
      category:"Antiemetic Therapy",
      indication:"Vomiting control",
      reason:
        "Improves comfort and supports nutrition."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"maropitant",
      priority:"Supportive",
      category:"Antiemetic"
    },

    {
      drugId:"metronidazole",
      priority:"Supportive",
      category:"Antibiotic"

    }

  ],

  stabilization:[

    "Correct dehydration with fluid therapy.",
    "Maintain nutritional support.",
    "Control vomiting and gastrointestinal losses.",
    "Monitor blood cell counts.",
    "Prevent secondary bacterial complications.",
    "Maintain strict isolation."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Unvaccinated kitten", weight:80 },

      { finding:"Recent shelter or multi-cat exposure", weight:70 },

      { finding:"Contact with infected cats", weight:75 },

      { finding:"Young age", weight:65 },

      { finding:"Acute disease onset", weight:55 }

    ],

    clinicalSigns:[

      { finding:"Depression", weight:70 },

      { finding:"Vomiting", weight:65 },

      { finding:"Diarrhea", weight:70 },

      { finding:"Dehydration", weight:75 },

      { finding:"Fever or hypothermia", weight:55 },

      { finding:"Anorexia", weight:75 },

      { finding:"Abdominal pain", weight:40 }

    ],

    biochemistry:[

      { finding:"Severe leukopenia", weight:90 },

      { finding:"Neutropenia", weight:75 },

      { finding:"Dehydration-related changes", weight:40 },

      { finding:"Electrolyte abnormalities", weight:45 }

    ],

    imaging:[

      { finding:"Intestinal changes may be nonspecific", weight:10 }

    ],

    supports:[

      { finding:"Positive FPV antigen test", weight:90 },

      { finding:"Marked leukopenia", weight:85 },

      { finding:"Unvaccinated young cat", weight:75 },

      { finding:"Acute vomiting and diarrhea", weight:70 }

    ],

    against: [
  {
    finding: "jaundice",
    weight: 12
  },
  {
    finding: "7-year-old",
    weight: 15
  },
  {
    finding: "adult cat",
    weight: 10
  },
  {
    finding: "chronic weight loss",
    weight: 12
  }
],

  },

  monitoring:[

    {
      id:"cbc",
      parameter:"White blood cell count",
      frequency:"Serial monitoring",
      reason:
        "Evaluates bone marrow recovery and prognosis."
    },

    {
      id:"hydration",
      parameter:"Hydration status",
      frequency:"Daily",
      reason:
        "Monitors fluid therapy response."
    },

    {
      id:"nutrition",
      parameter:"Food intake and body weight",
      frequency:"Daily",
      reason:
        "Evaluates recovery."

    }

  ],

  precautions:[

    {
      id:"contagious",
      title:"Highly Contagious Virus",
      description:
        "Strict isolation and environmental disinfection are required because the virus survives for long periods in the environment."
    },

    {
      id:"vaccination",
      title:"Vaccination Prevention",
      description:
        "Routine vaccination is the primary method of prevention."

    }

  ],

  prognosis:
    "Prognosis depends on age, immune status, severity of leukopenia, and supportive care. Early intensive supportive treatment improves survival.",

  strengtheningEvidence:[

    "Severe leukopenia",

    "Positive FPV testing",

    "Unvaccinated kitten",

    "Acute vomiting and diarrhea"

  ],

  weakeningEvidence:[

    "Complete vaccination history",

    "Normal leukocyte count",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Kitten with acute illness",

    "Vomiting",

    "Diarrhea",

    "Severe leukopenia"

  ],

  priorityFindings: [
  "kitten",
  "severe leukopenia",
  "diarrhea",
  "acute illness"
],

  requiredFindings: [
  "kitten",
  "young cat",
  "leukopenia"
],

  ruleOutFindings:[

    "Feline coronavirus infection",

    "Feline leukemia virus",

    "Foreign body obstruction",

    "Severe bacterial enteritis",

    "Toxin exposure"

  ],

};