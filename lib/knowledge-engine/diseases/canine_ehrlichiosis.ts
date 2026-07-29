import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineEhrlichiosis: DiseaseCard = {
  id: "canine-ehrlichiosis-dog",

  title: "Canine Ehrlichiosis",

  description:
    "A tick-borne infectious disease caused by Ehrlichia species resulting in hematological abnormalities, immune dysfunction, and systemic illness.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Canine Monocytic Ehrlichiosis",
    "Ehrlichia canis Infection",
    "Tick Fever",
    "Tropical Canine Pancytopenia",
  ],

  overview:
    "Canine ehrlichiosis is an important tick-borne disease caused primarily by Ehrlichia canis, an obligate intracellular bacterium transmitted by the brown dog tick Rhipicephalus sanguineus. The organism infects monocytes and causes acute, subclinical, or chronic disease phases. Clinical severity depends on immune response, duration of infection, and bone marrow involvement.",

  clinicalProblems: [

    "Tick-borne infection",
    "Thrombocytopenia",
    "Anemia",
    "Leukopenia",
    "Bleeding tendency",
    "Immune-mediated complications",
    "Chronic bone marrow suppression"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess tick exposure, geographic risk, previous tick control, and duration of clinical signs."
    },

    {
      id:"clinical-assessment",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate fever, lymph node enlargement, bleeding signs, and systemic abnormalities."
    },

    {
      id:"hematology",
      step:3,
      title:"Hematological Evaluation",
      description:
        "Assess platelet count, red blood cells, and white blood cell changes."
    },

    {
      id:"confirmation",
      step:4,
      title:"Diagnostic Confirmation",
      description:
        "Confirm infection using antibody testing or molecular methods."
    },

    {
      id:"treatment",
      step:5,
      title:"Antimicrobial Management",
      description:
        "Treat infection and manage hematological complications."
    }

  ],

  diagnostics: [

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Essential",
      reason:
        "Detects thrombocytopenia, anemia, and leukocyte abnormalities."
    },

    {
      id:"blood-smear",
      name:"Peripheral Blood Smear",
      priority:"Recommended",
      reason:
        "May identify intracellular organisms, although sensitivity is limited."
    },

    {
      id:"serology",
      name:"Ehrlichia Antibody Testing",
      priority:"Recommended",
      reason:
        "Detects exposure and supports diagnosis."
    },

    {
      id:"pcr",
      name:"PCR Testing",
      priority:"Recommended",
      reason:
        "Detects Ehrlichia genetic material and supports active infection diagnosis."
    },

    {
      id:"biochemistry",
      name:"Serum Biochemistry",
      priority:"Recommended",
      reason:
        "Evaluates organ involvement and systemic effects."
    }

  ],

  drugCategories:[

    {
      category:"Tetracycline Antibiotics",
      indication:"Ehrlichia infection",
      reason:
        "Primary antimicrobial therapy against intracellular organisms."
    },

    {
      category:"Supportive Therapy",
      indication:"Hematological complications",
      reason:
        "Manages anemia, bleeding, and systemic effects."
    }

  ],

  recommendedDrugs:[

    {
      drugId:"doxycycline",
      priority:"First Line",
      category:"Antibiotic"
    }

  ],

  stabilization:[

    "Control tick exposure.",
    "Assess severity of thrombocytopenia and anemia.",
    "Provide supportive care for bleeding complications.",
    "Monitor hydration and systemic status.",
    "Treat concurrent infections if present."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Tick exposure", weight:55 },

      { finding:"Poor tick prevention history", weight:45 },

      { finding:"Endemic area exposure", weight:40 },

      { finding:"Previous tick infestation", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Fever", weight:40 },

      { finding:"Lethargy", weight:35 },

      { finding:"Petechiae or bleeding", weight:55 },

      { finding:"Lymphadenopathy", weight:35 },

      { finding:"Weight loss", weight:30 },

      { finding:"Ocular abnormalities", weight:30 }

    ],

    biochemistry:[

      { finding:"Thrombocytopenia", weight:65 },

      { finding:"Anemia", weight:45 },

      { finding:"Hyperglobulinemia", weight:30 },

      { finding:"Elevated liver enzymes", weight:25 }

    ],

    imaging:[

      { finding:"Usually no specific imaging findings", weight:5 },

      { finding:"Splenomegaly", weight:25 }

    ],

    supports:[

      { finding:"Positive Ehrlichia PCR", weight:75 },

      { finding:"Positive antibody test with compatible signs", weight:60 },

      { finding:"Tick exposure with thrombocytopenia", weight:65 },

      { finding:"Response to doxycycline therapy", weight:40 }

    ],

    against:[

      { finding:"Normal platelet count", weight:-35 },

      { finding:"Negative testing with no exposure", weight:-30 },

      { finding:"Alternative cause of thrombocytopenia confirmed", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"cbc",
      parameter:"CBC and platelet count",
      frequency:"Regular follow-up",
      reason:
        "Monitors recovery of blood cell abnormalities."
    },

    {
      id:"clinical-response",
      parameter:"Fever and clinical signs",
      frequency:"Daily during treatment",
      reason:
        "Evaluates treatment response."
    },

    {
      id:"tick-control",
      parameter:"Tick prevention status",
      frequency:"Continuous",
      reason:
        "Prevents reinfection."

    }

  ],

  precautions:[

    {
      id:"chronic-phase",
      title:"Chronic Infection Risk",
      description:
        "Untreated infection may progress to severe bone marrow suppression and chronic disease."
    },

    {
      id:"tick-control",
      title:"Tick Prevention",
      description:
        "Effective tick control is essential to prevent recurrence."
    }

  ],

  prognosis:
    "Prognosis is generally good when treated during early disease stages. Chronic cases with severe bone marrow suppression may have a guarded prognosis.",

  strengtheningEvidence:[

    "Tick exposure",

    "Thrombocytopenia",

    "Positive Ehrlichia testing",

    "Fever",

    "Response to doxycycline"

  ],

  weakeningEvidence:[

    "Normal platelet count",

    "No tick exposure",

    "Alternative cause of blood abnormalities"

  ],

  classicFindings:[

    "Tick exposure",

    "Low platelets",

    "Bleeding tendency",

    "Fever",

    "Lethargy"

  ],

  ruleOutFindings:[

    "Canine babesiosis",

    "Immune-mediated thrombocytopenia",

    "Leptospirosis",

    "Canine anaplasmosis",

    "Bone marrow disorders"

  ],

};