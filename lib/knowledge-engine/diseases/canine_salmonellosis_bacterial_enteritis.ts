import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineSalmonellosis: DiseaseCard = {
  id: "canine-salmonellosis-bacterial-enteritis-dog",

  title: "Canine Salmonellosis / Bacterial Enteritis",

  description:
    "A bacterial gastrointestinal infection caused by Salmonella species resulting in enterocolitis, diarrhea, systemic inflammation, and possible septic complications.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Salmonella Infection",
    "Salmonellosis",
    "Bacterial Enterocolitis",
    "Salmonella Enteritis",
  ],

  overview:
    "Canine salmonellosis is an enteric bacterial infection caused by Salmonella species. Dogs may become infected through ingestion of contaminated food, raw diets, infected animals, or contaminated environments. Many healthy adult dogs can carry Salmonella without clinical signs, but disease may occur in puppies, immunocompromised dogs, or animals exposed to high bacterial loads. Clinical disease ranges from mild diarrhea to severe enterocolitis, dehydration, and septicemia.",

  clinicalProblems: [

    "Bacterial enterocolitis",
    "Diarrhea",
    "Vomiting",
    "Dehydration",
    "Systemic inflammatory response",
    "Septicemia risk",
    "Zoonotic transmission risk"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess diet, raw food exposure, contaminated food sources, and contact with infected animals."
    },

    {
      id:"clinical-assessment",
      step:2,
      title:"Clinical Assessment",
      description:
        "Evaluate severity of gastrointestinal signs and systemic illness."
    },

    {
      id:"laboratory-testing",
      step:3,
      title:"Laboratory Confirmation",
      description:
        "Identify bacterial infection through appropriate diagnostic testing."
    },

    {
      id:"supportive-treatment",
      step:4,
      title:"Supportive Management",
      description:
        "Correct dehydration and manage gastrointestinal inflammation."
    },

    {
      id:"infection-control",
      step:5,
      title:"Infection Control",
      description:
        "Reduce environmental contamination and zoonotic risk."
    }

  ],

  diagnostics: [

    {
      id:"fecal-culture",
      name:"Fecal Culture",
      priority:"Recommended",
      reason:
        "Identifies Salmonella species from fecal samples."
    },

    {
      id:"pcr-testing",
      name:"Fecal PCR Testing",
      priority:"Recommended",
      reason:
        "Provides rapid detection of bacterial pathogens."
    },

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "Evaluates inflammation and systemic response."
    },

    {
      id:"serum-biochemistry",
      name:"Serum Biochemistry",
      priority:"Recommended",
      reason:
        "Assesses dehydration and organ involvement."
    }

  ],

  drugCategories:[

    {
      category:"Fluid Therapy",
      indication:"Dehydration management",
      reason:
        "Corrects fluid losses caused by diarrhea and vomiting."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Severe bacterial infection",
      reason:
        "Reserved for selected cases with systemic illness."
    },

    {
      category:"Gastrointestinal Support",
      indication:"Enteritis management",
      reason:
        "Supports intestinal recovery."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"metronidazole",
      priority:"Supportive",
      category:"Antibiotic"
    }

  ],

  stabilization:[

    "Correct dehydration and electrolyte abnormalities.",
    "Provide nutritional support.",
    "Monitor for systemic infection.",
    "Maintain hygiene and infection control.",
    "Evaluate need for antimicrobial therapy based on severity."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Raw food consumption", weight:45 },

      { finding:"Contaminated food exposure", weight:40 },

      { finding:"Young or immunocompromised dog", weight:40 },

      { finding:"Contact with infected animals", weight:30 },

      { finding:"Shelter or kennel environment", weight:30 }

    ],

    clinicalSigns:[

      { finding:"Acute diarrhea", weight:45 },

      { finding:"Bloody diarrhea", weight:45 },

      { finding:"Vomiting", weight:35 },

      { finding:"Fever", weight:40 },

      { finding:"Lethargy", weight:35 },

      { finding:"Dehydration", weight:40 }

    ],

    biochemistry:[

      { finding:"Inflammatory leukogram", weight:30 },

      { finding:"Electrolyte abnormalities", weight:25 },

      { finding:"Changes associated with dehydration", weight:25 }

    ],

    imaging:[

      { finding:"Usually nonspecific gastrointestinal changes", weight:10 }

    ],

    supports:[

      { finding:"Positive Salmonella detection", weight:70 },

      { finding:"Acute diarrhea with fever", weight:50 },

      { finding:"Raw food exposure", weight:40 },

      { finding:"Systemic illness", weight:45 }

    ],

    against:[

      { finding:"Negative bacterial testing", weight:-25 },

      { finding:"Chronic uncomplicated diarrhea", weight:-20 },

      { finding:"Confirmed parasitic infection", weight:-25 }

    ],

  },

  monitoring:[

    {
      id:"hydration",
      parameter:"Hydration status",
      frequency:"Daily",
      reason:
        "Tracks fluid loss and recovery."
    },

    {
      id:"stool",
      parameter:"Stool frequency and appearance",
      frequency:"Daily",
      reason:
        "Evaluates intestinal recovery."
    },

    {
      id:"systemic",
      parameter:"Temperature and systemic signs",
      frequency:"Regular assessment",
      reason:
        "Detects progression to systemic infection."
    }

  ],

  precautions:[

    {
      id:"zoonotic",
      title:"Zoonotic Risk",
      description:
        "Salmonella can infect humans; strict hygiene and handling precautions are required."
    },

    {
      id:"antibiotic",
      title:"Judicious Antimicrobial Use",
      description:
        "Antibiotics are generally reserved for severe or systemic infections."
    }

  ],

  prognosis:
    "Prognosis is generally good in mild cases with supportive care. Severe infections involving septicemia or systemic complications require intensive management.",

  strengtheningEvidence:[

    "Positive Salmonella testing",

    "Bloody diarrhea",

    "Fever",

    "Raw food exposure",

    "Systemic illness"

  ],

  weakeningEvidence:[

    "Negative bacterial testing",

    "No fever or systemic signs",

    "Alternative cause of diarrhea identified"

  ],

  classicFindings:[

    "Acute diarrhea",

    "Fever",

    "Raw diet exposure",

    "Bloody stool",

    "Dehydration"

  ],

  ruleOutFindings:[

    "Canine parvovirus",

    "Giardiasis",

    "Whipworm infection",

    "Clostridial enterocolitis",

    "Inflammatory bowel disease"

  ],

};