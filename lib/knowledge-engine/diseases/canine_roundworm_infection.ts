import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineRoundwormInfection: DiseaseCard = {
  id: "canine-roundworm-infection-dog",

  title: "Canine Roundworm Infection (Toxocariasis)",

  description:
    "A parasitic intestinal infection caused by roundworms, primarily Toxocara canis, resulting in gastrointestinal signs, poor growth, and potential complications in puppies.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Toxocariasis",
    "Roundworm Infection",
    "Toxocara canis Infection",
    "Ascarid Infection",
  ],

  overview:
    "Canine roundworm infection is caused mainly by Toxocara canis, an intestinal nematode affecting dogs, especially puppies. Infection can occur through transplacental transmission, ingestion of infective eggs, ingestion of paratenic hosts, and transmammary transmission. Heavy infections may cause gastrointestinal disease, poor growth, abdominal distension, and intestinal obstruction.",

  clinicalProblems: [

    "Small intestinal parasitism",
    "Poor growth",
    "Malnutrition",
    "Abdominal distension",
    "Vomiting",
    "Intestinal obstruction risk",
    "Environmental contamination"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age, deworming history, maternal history, and environmental exposure."
    },

    {
      id:"fecal-diagnosis",
      step:2,
      title:"Fecal Examination",
      description:
        "Identify roundworm eggs through fecal testing."
    },

    {
      id:"clinical-assessment",
      step:3,
      title:"Clinical Assessment",
      description:
        "Evaluate growth, body condition, and gastrointestinal signs."
    },

    {
      id:"treatment",
      step:4,
      title:"Anthelmintic Treatment",
      description:
        "Eliminate intestinal worms and prevent recurrence."
    },

    {
      id:"prevention",
      step:5,
      title:"Preventive Parasite Control",
      description:
        "Maintain regular parasite prevention and environmental hygiene."
    }

  ],

  diagnostics: [

    {
      id:"fecal-flotation",
      name:"Fecal Flotation",
      priority:"Essential",
      reason:
        "Detects characteristic roundworm eggs."
    },

    {
      id:"physical-examination",
      name:"Physical Examination",
      priority:"Essential",
      reason:
        "Evaluates abdominal distension, growth, and body condition."
    },

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "May identify eosinophilia or anemia in severe cases."
    },

    {
      id:"abdominal-imaging",
      name:"Abdominal Imaging",
      priority:"Conditional",
      reason:
        "Evaluates intestinal obstruction in heavy infections."
    }

  ],

  drugCategories:[

    {
      category:"Anthelmintic Therapy",
      indication:"Roundworm elimination",
      reason:
        "Removes intestinal nematodes."
    },

    {
      category:"Preventive Parasite Control",
      indication:"Reduce reinfection",
      reason:
        "Prevents recurrence and environmental contamination."
    }

  ],

  recommendedDrugs:[

    {
      drugId:"fenbendazole",
      priority:"Supportive",
      category:"Antiparasitic"
    },

    {
      drugId:"pyrantel-pamoate",
      priority:"Supportive",
      category:"Antiparasitic"
    }

  ],

  stabilization:[

    "Assess hydration and nutritional status.",
    "Treat heavy parasite burden.",
    "Monitor for intestinal obstruction.",
    "Provide supportive care in debilitated puppies.",
    "Implement environmental parasite control."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Young puppy", weight:50 },

      { finding:"Incomplete deworming history", weight:45 },

      { finding:"Mother with parasite exposure", weight:40 },

      { finding:"Contaminated environment exposure", weight:35 }

    ],

    clinicalSigns:[

      { finding:"Pot-bellied appearance", weight:55 },

      { finding:"Poor growth", weight:45 },

      { finding:"Vomiting", weight:40 },

      { finding:"Diarrhea", weight:35 },

      { finding:"Weight loss", weight:35 },

      { finding:"Visible worms in feces or vomit", weight:60 }

    ],

    biochemistry:[

      { finding:"Eosinophilia", weight:25 },

      { finding:"Anemia in severe infection", weight:20 }

    ],

    imaging:[

      { finding:"Intestinal worm burden on imaging", weight:40 },

      { finding:"Intestinal obstruction pattern", weight:45 }

    ],

    supports:[

      { finding:"Roundworm eggs detected", weight:70 },

      { finding:"Puppy with abdominal distension", weight:50 },

      { finding:"Poor growth with parasite exposure", weight:45 }

    ],

    against:[

      { finding:"Negative repeated fecal testing", weight:-30 },

      { finding:"Adult dog with no parasite exposure", weight:-20 },

      { finding:"Alternative gastrointestinal disease confirmed", weight:-30 }

    ],

  },

  monitoring:[

    {
      id:"growth",
      parameter:"Body weight and growth",
      frequency:"Regular follow-up",
      reason:
        "Evaluates recovery in young dogs."
    },

    {
      id:"stool",
      parameter:"Fecal appearance",
      frequency:"Daily",
      reason:
        "Monitors gastrointestinal improvement."
    },

    {
      id:"parasite",
      parameter:"Fecal parasite status",
      frequency:"Follow-up",
      reason:
        "Confirms parasite control."
    }

  ],

  precautions:[

    {
      id:"puppies",
      title:"High Risk in Puppies",
      description:
        "Transplacental and transmammary transmission can cause significant disease in young dogs."
    },

    {
      id:"zoonotic",
      title:"Zoonotic Importance",
      description:
        "Toxocara canis can cause larval migration disease in humans."
    }

  ],

  prognosis:
    "Prognosis is excellent with appropriate deworming and prevention. Severe infections may require additional supportive management.",

  strengtheningEvidence:[

    "Positive fecal examination",

    "Pot-bellied puppy",

    "Visible worms",

    "Poor growth",

    "Incomplete parasite prevention"

  ],

  weakeningEvidence:[

    "Negative repeated fecal testing",

    "No gastrointestinal signs",

    "Alternative cause of poor growth identified"

  ],

  classicFindings:[

    "Puppy",

    "Pot belly",

    "Poor growth",

    "Vomiting worms",

    "Roundworm eggs"

  ],

  ruleOutFindings:[

    "Hookworm infection",

    "Giardia infection",

    "Foreign body obstruction",

    "Malnutrition",

    "Inflammatory bowel disease"

  ],

};