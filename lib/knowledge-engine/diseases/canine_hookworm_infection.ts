import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineHookwormInfection: DiseaseCard = {
  id: "canine-hookworm-infection-dog",

  title: "Canine Hookworm Infection (Ancylostomiasis)",

  description:
    "A parasitic intestinal infection caused by hookworms that attach to the intestinal mucosa and consume blood, leading to anemia, diarrhea, and weakness.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Ancylostomiasis",
    "Hookworm Infection",
    "Ancylostoma Infection",
  ],

  overview:
    "Canine hookworm infection is caused mainly by Ancylostoma caninum, a blood-feeding intestinal nematode. Adult worms attach to the small intestinal mucosa and cause blood loss through feeding activity. Infection occurs through ingestion of larvae, skin penetration, transmammary transmission, or ingestion of infected hosts. Puppies are particularly vulnerable due to severe blood loss and anemia.",

  clinicalProblems: [

    "Intestinal blood loss",
    "Anemia",
    "Diarrhea",
    "Weight loss",
    "Poor growth",
    "Weakness",
    "Dehydration"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age, parasite prevention history, environment, and gastrointestinal signs."
    },

    {
      id:"fecal-diagnosis",
      step:2,
      title:"Fecal Examination",
      description:
        "Identify hookworm eggs through fecal testing."
    },

    {
      id:"blood-assessment",
      step:3,
      title:"Blood Evaluation",
      description:
        "Assess anemia severity and systemic effects."
    },

    {
      id:"treatment",
      step:4,
      title:"Anthelmintic Treatment",
      description:
        "Eliminate intestinal parasites and provide supportive care."
    },

    {
      id:"prevention",
      step:5,
      title:"Prevention",
      description:
        "Reduce reinfection through parasite control and hygiene."
    }

  ],

  diagnostics: [

    {
      id:"fecal-flotation",
      name:"Fecal Flotation",
      priority:"Essential",
      reason:
        "Detects hookworm eggs in feces."
    },

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Essential",
      reason:
        "Evaluates anemia caused by intestinal blood loss."
    },

    {
      id:"fecal-antigen-test",
      name:"Hookworm Antigen Testing",
      priority:"Recommended",
      reason:
        "May improve detection in early infections."
    }

  ],

  drugCategories:[

    {
      category:"Anthelmintic Therapy",
      indication:"Hookworm elimination",
      reason:
        "Removes intestinal nematodes."
    },

    {
      category:"Supportive Therapy",
      indication:"Anemia and dehydration",
      reason:
        "Addresses complications of heavy infection."
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

    "Assess anemia severity.",
    "Provide fluid support if dehydrated.",
    "Treat heavy parasite burden.",
    "Provide nutritional support.",
    "Consider blood transfusion in severe anemia."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Young puppy", weight:45 },

      { finding:"Poor parasite prevention history", weight:40 },

      { finding:"Contaminated soil exposure", weight:35 },

      { finding:"Nursing puppy exposure", weight:35 }

    ],

    clinicalSigns:[

      { finding:"Pale mucous membranes", weight:55 },

      { finding:"Diarrhea", weight:40 },

      { finding:"Melena", weight:50 },

      { finding:"Weakness", weight:40 },

      { finding:"Poor growth", weight:35 },

      { finding:"Weight loss", weight:35 }

    ],

    biochemistry:[

      { finding:"Regenerative anemia", weight:60 },

      { finding:"Low protein due to intestinal loss", weight:25 },

      { finding:"Eosinophilia", weight:20 }

    ],

    imaging:[

      { finding:"Usually no specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Hookworm eggs detected", weight:70 },

      { finding:"Anemia with gastrointestinal signs", weight:55 },

      { finding:"Puppy with diarrhea and weakness", weight:45 }

    ],

    against:[

      { finding:"Normal blood count", weight:-30 },

      { finding:"Negative parasite testing", weight:-25 },

      { finding:"No gastrointestinal signs", weight:-20 }

    ],

  },

  monitoring:[

    {
      id:"cbc",
      parameter:"Packed cell volume / CBC",
      frequency:"Follow-up",
      reason:
        "Monitors recovery from blood loss."
    },

    {
      id:"stool",
      parameter:"Fecal consistency",
      frequency:"Daily",
      reason:
        "Evaluates gastrointestinal improvement."
    },

    {
      id:"parasite",
      parameter:"Parasite status",
      frequency:"Follow-up",
      reason:
        "Confirms treatment effectiveness."

    }

  ],

  precautions:[

    {
      id:"puppies",
      title:"High Risk in Puppies",
      description:
        "Young dogs may develop severe anemia due to blood-feeding parasites."
    },

    {
      id:"zoonotic",
      title:"Zoonotic Importance",
      description:
        "Some hookworm species can cause skin disease in humans."
    }

  ],

  prognosis:
    "Prognosis is excellent with early diagnosis and treatment. Severe infections causing anemia or weakness require intensive supportive care.",

  strengtheningEvidence:[

    "Positive hookworm detection",

    "Regenerative anemia",

    "Puppy age",

    "Bloody diarrhea",

    "Poor parasite prevention"

  ],

  weakeningEvidence:[

    "Normal CBC",

    "Negative fecal testing",

    "No gastrointestinal signs",

    "Alternative cause of anemia"

  ],

  classicFindings:[

    "Puppy",

    "Pale gums",

    "Diarrhea",

    "Anemia",

    "Hookworm eggs"

  ],

  ruleOutFindings:[

    "Whipworm infection",

    "Parvoviral enteritis",

    "Gastrointestinal bleeding",

    "Flea-associated anemia"

  ],

};