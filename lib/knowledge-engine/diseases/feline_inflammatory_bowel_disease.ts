import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineInflammatoryBowelDisease: DiseaseCard = {
  id: "feline-inflammatory-bowel-disease-cat",

  title: "Feline Inflammatory Bowel Disease (IBD)",

  description:
    "A chronic inflammatory disorder of the feline gastrointestinal tract characterized by persistent intestinal inflammation, digestive disturbances, and variable clinical signs.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Inflammatory Bowel Disease",
    "Feline IBD",
    "Chronic Enteropathy",
    "Lymphoplasmacytic Enteritis",
  ],

  overview:
    "Feline inflammatory bowel disease is a group of chronic gastrointestinal disorders characterized by infiltration of inflammatory cells into the intestinal wall. The exact cause is unknown but may involve abnormal immune responses to intestinal bacteria, dietary components, or other environmental factors. Cats commonly present with chronic vomiting, diarrhea, weight loss, and appetite changes. IBD may occur with other inflammatory conditions such as pancreatitis and cholangitis.",

  clinicalProblems:[

    "Chronic intestinal inflammation",
    "Vomiting",
    "Diarrhea",
    "Weight loss",
    "Malabsorption",
    "Nutritional imbalance"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess duration of vomiting, diarrhea, appetite changes, weight loss, diet history, and previous gastrointestinal disease."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate body condition, hydration, abdominal discomfort, and overall health."
    },

    {
      id:"laboratory",
      step:3,
      title:"Laboratory Assessment",
      description:
        "Evaluate blood parameters and rule out metabolic or infectious causes."
    },

    {
      id:"imaging",
      step:4,
      title:"Gastrointestinal Imaging",
      description:
        "Assess intestinal wall changes and abdominal abnormalities."
    },

    {
      id:"biopsy",
      step:5,
      title:"Intestinal Biopsy Evaluation",
      description:
        "Histopathology confirms inflammatory changes and helps differentiate neoplasia."

    }

  ],

  diagnostics:[

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "Evaluates systemic inflammation and blood abnormalities."
    },

    {
      id:"biochemistry",
      name:"Serum Biochemistry",
      priority:"Essential",
      reason:
        "Assesses organ function and nutritional abnormalities."
    },

    {
      id:"ultrasound",
      name:"Abdominal Ultrasound",
      priority:"Recommended",
      reason:
        "Evaluates intestinal wall changes and abdominal organs."
    },

    {
      id:"biopsy",
      name:"Intestinal Biopsy",
      priority:"Recommended",
      reason:
        "Identifies inflammatory cell infiltration and excludes neoplasia."

    }

  ],

  drugCategories:[

    {
      category:"Anti-inflammatory Therapy",
      indication:"Intestinal inflammation",
      reason:
        "Reduces inflammatory immune response."
    },

    {
      category:"Dietary Management",
      indication:"Food-responsive intestinal disease",
      reason:
        "Identifies and controls dietary triggers."
    },

    {
      category:"Immunomodulatory Therapy",
      indication:"Chronic inflammatory disease",
      reason:
        "Controls immune-mediated intestinal inflammation."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"
    },

    {
      drugId:"metronidazole",
      priority:"Supportive",
      category:"Gastrointestinal"

    }

  ],

  stabilization:[

    "Maintain adequate nutrition.",
    "Correct dehydration if present.",
    "Control vomiting and diarrhea.",
    "Evaluate dietary response.",
    "Monitor body weight and intestinal health."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Chronic vomiting history", weight:70 },

      { finding:"Chronic diarrhea history", weight:65 },

      { finding:"Weight loss", weight:75 },

      { finding:"Dietary sensitivity history", weight:50 },

      { finding:"Older cat", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Chronic vomiting", weight:75 },

      { finding:"Weight loss", weight:80 },

      { finding:"Diarrhea", weight:65 },

      { finding:"Reduced appetite", weight:55 },

      { finding:"Poor body condition", weight:65 },

      { finding:"Lethargy", weight:40 }

    ],

    biochemistry:[

      { finding:"Low cobalamin levels", weight:55 },

      { finding:"Protein abnormalities", weight:40 },

      { finding:"Inflammatory changes", weight:35 },

      { finding:"Usually variable changes", weight:20 }

    ],

    imaging:[

      { finding:"Intestinal wall thickening", weight:60 },

      { finding:"Altered intestinal layering", weight:45 },

      { finding:"Enlarged lymph nodes", weight:35 }

    ],

    supports:[

      { finding:"Chronic gastrointestinal signs", weight:80 },

      { finding:"Compatible ultrasound findings", weight:65 },

      { finding:"Inflammatory biopsy findings", weight:90 },

      { finding:"Response to anti-inflammatory therapy", weight:60 }

    ],

    against:[

      { finding:"Acute short duration illness", weight:-35 },

      { finding:"Intestinal lymphoma confirmed", weight:-60 },

      { finding:"No gastrointestinal signs", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"weight",
      parameter:"Body weight",
      frequency:"Regular monitoring",
      reason:
        "Detects improvement or ongoing weight loss."
    },

    {
      id:"stool",
      parameter:"Fecal consistency",
      frequency:"Daily",
      reason:
        "Evaluates intestinal response."
    },

    {
      id:"appetite",
      parameter:"Food intake",
      frequency:"Daily",
      reason:
        "Monitors nutritional status."

    }

  ],

  precautions:[

    {
      id:"diet",
      title:"Dietary Management",
      description:
        "Diet trials may be important in identifying food-responsive gastrointestinal disease."
    },

    {
      id:"differential",
      title:"Rule Out Neoplasia",
      description:
        "Intestinal lymphoma may resemble inflammatory bowel disease clinically."

    }

  ],

  prognosis:
    "Prognosis varies depending on severity and response to therapy. Many cats can be managed successfully with appropriate dietary and medical treatment.",

  strengtheningEvidence:[

    "Chronic vomiting",

    "Weight loss",

    "Inflammatory intestinal biopsy",

    "Compatible ultrasound findings"

  ],

  weakeningEvidence:[

    "Acute gastrointestinal disease",

    "No intestinal signs",

    "Confirmed intestinal lymphoma"

  ],

  classicFindings:[

    "Chronic vomiting",

    "Weight loss",

    "Diarrhea",

    "Poor body condition"

  ],

  ruleOutFindings:[

    "Intestinal lymphoma",

    "Food intolerance",

    "Parasite infection",

    "Pancreatitis",

    "Feline triaditis"

  ],

};