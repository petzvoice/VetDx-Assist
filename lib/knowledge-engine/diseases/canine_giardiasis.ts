import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineGiardiasis: DiseaseCard = {
  id: "canine-giardiasis-dog",

  title: "Canine Giardia Infection",

  description:
    "A protozoal intestinal infection caused by Giardia species resulting in malabsorption, diarrhea, and gastrointestinal disturbance.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Giardiasis",
    "Giardia Infection",
    "Protozoal Enteritis",
  ],

  overview:
    "Giardiasis is an intestinal parasitic disease caused by Giardia organisms that colonize the small intestine. Infection occurs through ingestion of contaminated water, food, or fecal material. Giardia can interfere with intestinal absorption and cause intermittent diarrhea, especially in young dogs. Some infected dogs remain asymptomatic while others develop chronic gastrointestinal signs.",

  clinicalProblems: [

    "Small intestinal diarrhea",
    "Malabsorption",
    "Weight loss",
    "Intestinal irritation",
    "Dehydration risk",
    "Environmental contamination"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess diarrhea duration, environmental exposure, water source, and contact with other animals."
    },

    {
      id:"fecal-testing",
      step:2,
      title:"Fecal Diagnosis",
      description:
        "Identify Giardia infection using appropriate fecal testing methods."
    },

    {
      id:"treatment",
      step:3,
      title:"Antiparasitic Management",
      description:
        "Treat infection and reduce environmental contamination."
    },

    {
      id:"prevention",
      step:4,
      title:"Prevention",
      description:
        "Reduce reinfection through hygiene and environmental control."
    }

  ],

  diagnostics: [

    {
      id:"fecal-examination",
      name:"Fecal Examination",
      priority:"Essential",
      reason:
        "Detects Giardia cysts and other intestinal parasites."
    },

    {
      id:"fecal-antigen-test",
      name:"Giardia Antigen Testing",
      priority:"Recommended",
      reason:
        "Improves detection of Giardia infection."
    },

    {
      id:"fecal-centrifugation",
      name:"Fecal Centrifugation / Concentration",
      priority:"Recommended",
      reason:
        "Improves identification of parasite stages."
    }

  ],

  drugCategories:[

    {
      category:"Antiprotozoal Therapy",
      indication:"Giardia infection",
      reason:
        "Targets intestinal protozoal infection."
    },

    {
      category:"Environmental Control",
      indication:"Prevent reinfection",
      reason:
        "Reduces contamination and transmission."
    }

  ],

  recommendedDrugs:[

    {
      drugId:"fenbendazole",
      priority:"Supportive",
      category:"Antiprotozoal"
    },

    {
      drugId:"metronidazole",
      priority:"Supportive",
      category:"Antiprotozoal"
    }

  ],

  stabilization:[

    "Correct dehydration if present.",
    "Provide nutritional support.",
    "Treat concurrent intestinal parasites.",
    "Maintain hygiene to prevent reinfection."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Exposure to contaminated water", weight:40 },

      { finding:"Young dog", weight:35 },

      { finding:"Multi-animal environment", weight:30 },

      { finding:"Recurrent diarrhea", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Intermittent diarrhea", weight:45 },

      { finding:"Soft or greasy feces", weight:40 },

      { finding:"Weight loss", weight:30 },

      { finding:"Poor body condition", weight:25 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Changes due to dehydration", weight:20 }

    ],

    imaging:[

      { finding:"Usually no specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Positive Giardia test", weight:70 },

      { finding:"Chronic intermittent diarrhea", weight:45 },

      { finding:"Environmental exposure", weight:35 }

    ],

    against:[

      { finding:"Negative repeated Giardia testing", weight:-30 },

      { finding:"Severe systemic illness", weight:-25 },

      { finding:"Primary large intestinal disease", weight:-20 }

    ],

  },

  monitoring:[

    {
      id:"stool",
      parameter:"Stool consistency",
      frequency:"Daily",
      reason:
        "Evaluates gastrointestinal recovery."
    },

    {
      id:"reinfection",
      parameter:"Recurrence of diarrhea",
      frequency:"Follow-up",
      reason:
        "Detects reinfection."
    }

  ],

  precautions:[

    {
      id:"zoonotic",
      title:"Zoonotic Consideration",
      description:
        "Some Giardia strains may infect humans; hygiene is important."
    },

    {
      id:"environment",
      title:"Environmental Cleaning",
      description:
        "Contaminated environments can lead to reinfection."
    }

  ],

  prognosis:
    "Prognosis is generally good with appropriate treatment and environmental management. Recurrence may occur if reinfection is not prevented.",

  strengtheningEvidence:[

    "Positive Giardia test",

    "Intermittent diarrhea",

    "Young dog",

    "Contaminated water exposure"

  ],

  weakeningEvidence:[

    "Negative parasite testing",

    "Severe systemic disease",

    "No diarrhea"

  ],

  classicFindings:[

    "Intermittent diarrhea",

    "Young dog",

    "Poor stool quality",

    "Exposure risk"

  ],

  ruleOutFindings:[

    "Whipworm infection",

    "Food intolerance",

    "Inflammatory bowel disease",

    "Bacterial enteritis"

  ],

};