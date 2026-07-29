import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineWhipwormInfection: DiseaseCard = {
  id: "canine-whipworm-infection-dog",

  title: "Canine Whipworm Infection (Trichuriasis)",

  description:
    "A parasitic large intestinal infection caused by Trichuris vulpis resulting in chronic colitis, diarrhea, mucus and blood in feces.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Trichuriasis",
    "Whipworm Infection",
    "Trichuris vulpis Infection",
  ],

  overview:
    "Canine whipworm infection is caused by Trichuris vulpis, a nematode that inhabits the cecum and colon. Infection occurs through ingestion of infective eggs from contaminated environments. Adult worms attach to the intestinal mucosa causing inflammation, colitis, and intestinal bleeding. Clinical disease is more common with heavy infections and may resemble inflammatory bowel disease.",

  clinicalProblems: [

    "Large intestinal diarrhea",
    "Colitis",
    "Blood and mucus in feces",
    "Weight loss",
    "Dehydration",
    "Intestinal inflammation"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess chronic diarrhea, environmental exposure, kennel history, and parasite prevention status."
    },

    {
      id:"fecal-diagnosis",
      step:2,
      title:"Fecal Examination",
      description:
        "Identify whipworm eggs through fecal testing."
    },

    {
      id:"treatment",
      step:3,
      title:"Anthelmintic Treatment",
      description:
        "Eliminate intestinal worms and manage gastrointestinal inflammation."
    },

    {
      id:"prevention",
      step:4,
      title:"Environmental Prevention",
      description:
        "Reduce reinfection by controlling environmental contamination."
    }

  ],

  diagnostics: [

    {
      id:"fecal-flotation",
      name:"Fecal Flotation",
      priority:"Essential",
      reason:
        "Detects characteristic whipworm eggs."
    },

    {
      id:"repeat-fecal-testing",
      name:"Repeated Fecal Examination",
      priority:"Recommended",
      reason:
        "Egg shedding may be intermittent."
    },

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "Evaluates anemia and inflammatory changes."
    }

  ],

  drugCategories:[

    {
      category:"Anthelmintic Therapy",
      indication:"Whipworm elimination",
      reason:
        "Removes intestinal nematodes."
    },

    {
      category:"Supportive Gastrointestinal Therapy",
      indication:"Colitis management",
      reason:
        "Supports recovery from intestinal inflammation."
    }

  ],

  recommendedDrugs:[

    {
      drugId:"fenbendazole",
      priority:"Supportive",
      category:"Antiparasitic"
    },

    {
      drugId:"milbemycin-oxime",
      priority:"Supportive",
      category:"Antiparasitic"
    }

  ],

  stabilization:[

    "Correct dehydration if present.",
    "Provide nutritional support.",
    "Treat secondary intestinal inflammation.",
    "Implement environmental parasite control."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Chronic intermittent diarrhea", weight:45 },

      { finding:"Outdoor exposure", weight:35 },

      { finding:"Kennel or multi-dog environment", weight:30 },

      { finding:"Poor parasite prevention history", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Large bowel diarrhea", weight:50 },

      { finding:"Blood in feces", weight:45 },

      { finding:"Mucus in feces", weight:45 },

      { finding:"Tenesmus", weight:40 },

      { finding:"Weight loss", weight:30 }

    ],

    biochemistry:[

      { finding:"Anemia in severe infection", weight:25 },

      { finding:"Protein loss in severe colitis", weight:25 }

    ],

    imaging:[

      { finding:"Usually no specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Whipworm eggs detected", weight:70 },

      { finding:"Chronic colitis signs", weight:50 },

      { finding:"Environmental exposure", weight:35 }

    ],

    against:[

      { finding:"Negative repeated fecal testing", weight:-30 },

      { finding:"Primary small intestinal disease", weight:-25 },

      { finding:"No diarrhea", weight:-20 }

    ],

  },

  monitoring:[

    {
      id:"stool",
      parameter:"Fecal consistency",
      frequency:"Daily",
      reason:
        "Evaluates improvement of colitis."
    },

    {
      id:"fecal",
      parameter:"Fecal parasite status",
      frequency:"Follow-up",
      reason:
        "Confirms control of infection."
    }

  ],

  precautions:[

    {
      id:"environment",
      title:"Environmental Persistence",
      description:
        "Whipworm eggs can survive for long periods in contaminated environments."
    },

    {
      id:"repeat-treatment",
      title:"Need for Repeat Treatment",
      description:
        "Reinfection and delayed maturation of larvae may require repeated therapy."
    }

  ],

  prognosis:
    "Prognosis is generally good with appropriate anthelmintic therapy and environmental control. Severe infections may cause prolonged colitis and dehydration.",

  strengtheningEvidence:[

    "Positive whipworm egg detection",

    "Chronic bloody diarrhea",

    "Mucus in feces",

    "Outdoor exposure"

  ],

  weakeningEvidence:[

    "Negative repeated fecal tests",

    "No gastrointestinal signs",

    "Alternative cause of colitis identified"

  ],

  classicFindings:[

    "Chronic diarrhea",

    "Blood and mucus in feces",

    "Tenesmus",

    "Whipworm eggs"

  ],

  ruleOutFindings:[

    "Giardia infection",

    "Clostridial enterocolitis",

    "Inflammatory bowel disease",

    "Colonic neoplasia"

  ],

};