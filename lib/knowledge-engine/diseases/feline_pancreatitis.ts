import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felinePancreatitis: DiseaseCard = {
  id: "feline-pancreatitis-cat",

  title: "Feline Pancreatitis",

  description:
    "An inflammatory disease of the feline pancreas characterized by pancreatic tissue inflammation, with variable clinical signs ranging from mild illness to severe systemic disease.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Pancreatitis",
    "Pancreatic Inflammation",
    "Feline Exocrine Pancreatic Inflammation",
  ],

  overview:
    "Feline pancreatitis is an inflammatory condition of the pancreas that may occur as an acute, chronic, or recurrent disease. Unlike dogs, cats often show subtle and non-specific clinical signs, making diagnosis challenging. The disease may occur alone or as part of feline triaditis involving the pancreas, liver, and intestinal tract. Causes are often not identified, but inflammatory disease, infection, trauma, toxins, and immune-mediated mechanisms may contribute.",

  clinicalProblems:[

    "Pancreatic inflammation",
    "Reduced appetite",
    "Weight loss",
    "Dehydration",
    "Systemic inflammation",
    "Concurrent hepatobiliary or intestinal disease"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess appetite changes, vomiting, weight loss, previous gastrointestinal disease, and concurrent illnesses."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate hydration status, abdominal discomfort, body condition, and systemic abnormalities."
    },

    {
      id:"laboratory",
      step:3,
      title:"Laboratory Assessment",
      description:
        "Evaluate pancreatic markers, blood changes, and organ function."
    },

    {
      id:"imaging",
      step:4,
      title:"Diagnostic Imaging",
      description:
        "Assess pancreas and surrounding organs using imaging techniques."
    },

    {
      id:"management",
      step:5,
      title:"Supportive Management",
      description:
        "Provide nutritional support, pain control, and management of complications."

    }

  ],

  diagnostics:[

    {
      id:"fpli",
      name:"Feline Pancreatic Lipase Immunoreactivity (fPLI)",
      priority:"Recommended",
      reason:
        "Helps detect pancreatic inflammation."
    },

    {
      id:"ultrasound",
      name:"Abdominal Ultrasound",
      priority:"Recommended",
      reason:
        "Evaluates pancreatic changes and surrounding abdominal organs."
    },

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "Assesses inflammatory changes and systemic response."
    },

    {
      id:"biochemistry",
      name:"Serum Biochemistry",
      priority:"Essential",
      reason:
        "Evaluates liver, kidney, and metabolic abnormalities."

    }

  ],

  drugCategories:[

    {
      category:"Supportive Therapy",
      indication:"Pancreatitis management",
      reason:
        "Maintains hydration and nutritional status."
    },

    {
      category:"Analgesic Therapy",
      indication:"Pancreatic pain",
      reason:
        "Controls discomfort."
    },

    {
      category:"Antiemetic Therapy",
      indication:"Vomiting and nausea",
      reason:
        "Improves appetite and comfort."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"buprenorphine",
      priority:"Supportive",
      category:"Analgesic"
    },

    {
      drugId:"maropitant",
      priority:"Supportive",
      category:"Antiemetic"

    }

  ],

  stabilization:[

    "Provide fluid support when dehydrated.",
    "Maintain early nutritional support.",
    "Control nausea and vomiting.",
    "Provide appropriate pain management.",
    "Monitor concurrent liver or intestinal disease."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Reduced appetite", weight:70 },

      { finding:"Weight loss", weight:65 },

      { finding:"Previous gastrointestinal disease", weight:45 },

      { finding:"Concurrent inflammatory disease", weight:50 },

      { finding:"Older cat", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Anorexia", weight:80 },

      { finding:"Lethargy", weight:70 },

      { finding:"Weight loss", weight:65 },

      { finding:"Vomiting", weight:45 },

      { finding:"Dehydration", weight:55 },

      { finding:"Abdominal pain", weight:40 },

      { finding:"Diarrhea", weight:30 }

    ],

    biochemistry:[

      { finding:"Elevated pancreatic markers", weight:80 },

      { finding:"Elevated liver enzymes", weight:40 },

      { finding:"Electrolyte abnormalities", weight:35 },

      { finding:"Inflammatory changes", weight:45 }

    ],

    imaging:[

      { finding:"Pancreatic enlargement", weight:65 },

      { finding:"Pancreatic hypoechogenicity", weight:55 },

      { finding:"Abdominal inflammation", weight:45 }

    ],

    supports:[

      { finding:"Positive feline pancreatic lipase test", weight:85 },

      { finding:"Compatible ultrasound findings", weight:75 },

      { finding:"Persistent anorexia", weight:70 },

      { finding:"Weight loss with lethargy", weight:65 }

    ],

    against:[

      { finding:"Normal pancreatic evaluation", weight:-30 },

      { finding:"Alternative diagnosis confirmed", weight:-50 },

      { finding:"No clinical signs", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"appetite",
      parameter:"Food intake",
      frequency:"Daily",
      reason:
        "Evaluates recovery and nutritional status."
    },

    {
      id:"weight",
      parameter:"Body weight",
      frequency:"Regular monitoring",
      reason:
        "Detects ongoing weight loss."
    },

    {
      id:"blood",
      parameter:"Pancreatic and organ parameters",
      frequency:"Periodic",
      reason:
        "Monitors disease progression."

    }

  ],

  precautions:[

    {
      id:"nutrition",
      title:"Nutritional Support",
      description:
        "Early nutritional management is important in feline pancreatitis recovery."
    },

    {
      id:"triaditis",
      title:"Concurrent Disease Evaluation",
      description:
        "Cats may have concurrent intestinal and hepatobiliary inflammation."

    }

  ],

  prognosis:
    "Prognosis varies depending on disease severity, complications, and concurrent disorders. Mild cases may recover well, while severe systemic disease can carry a guarded prognosis.",

  strengtheningEvidence:[

    "Persistent anorexia",

    "Positive pancreatic testing",

    "Compatible ultrasound findings",

    "Weight loss"

  ],

  weakeningEvidence:[

    "Normal pancreatic evaluation",

    "Alternative diagnosis confirmed",

    "No appetite changes"

  ],

  classicFindings:[

    "Anorexia",

    "Lethargy",

    "Weight loss",

    "Dehydration"

  ],

  ruleOutFindings:[

    "Feline inflammatory bowel disease",

    "Feline hepatic lipidosis",

    "Gastrointestinal foreign body",

    "Cholangitis",

    "Neoplasia"

  ],

};