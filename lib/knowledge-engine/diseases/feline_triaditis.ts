import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineTriaditis: DiseaseCard = {
  id: "feline-triaditis-cat",

  title: "Feline Triaditis",

  description:
    "A concurrent inflammatory condition involving the pancreas, liver/biliary system, and intestinal tract in cats, resulting from combined gastrointestinal and hepatobiliary inflammation.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Triaditis",
    "Pancreatitis-Cholangitis-Inflammatory Bowel Disease Complex",
    "Feline Multiorgan Inflammatory Syndrome",
  ],

  overview:
    "Feline triaditis refers to the simultaneous occurrence of inflammatory disease affecting the pancreas, liver/biliary tract, and small intestine. The close anatomical relationship between the pancreatic duct, bile duct, and intestinal tract in cats allows inflammation or infection in one system to influence the others. Clinical signs are often non-specific and may include anorexia, vomiting, weight loss, lethargy, and jaundice. Diagnosis requires evaluation of multiple organ systems.",

  clinicalProblems:[

    "Pancreatic inflammation",
    "Cholangitis/cholangiohepatitis",
    "Inflammatory bowel disease",
    "Chronic gastrointestinal signs",
    "Reduced appetite",
    "Weight loss"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess appetite changes, vomiting, diarrhea, weight loss, previous gastrointestinal disease, and chronic illness."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate hydration, abdominal discomfort, body condition, and signs of liver disease."
    },

    {
      id:"laboratory",
      step:3,
      title:"Laboratory Assessment",
      description:
        "Evaluate pancreatic, hepatic, inflammatory, and nutritional parameters."
    },

    {
      id:"imaging",
      step:4,
      title:"Abdominal Imaging",
      description:
        "Assess pancreas, liver, gall bladder, and intestinal abnormalities."
    },

    {
      id:"management",
      step:5,
      title:"Multisystem Management",
      description:
        "Treat inflammation, support nutrition, and manage affected organs."

    }

  ],

  diagnostics:[

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "Evaluates inflammation and systemic response."
    },

    {
      id:"biochemistry",
      name:"Serum Biochemistry",
      priority:"Essential",
      reason:
        "Assesses liver enzymes, bilirubin, and organ function."
    },

    {
      id:"fpli",
      name:"Feline Pancreatic Lipase Immunoreactivity",
      priority:"Recommended",
      reason:
        "Evaluates pancreatic involvement."
    },

    {
      id:"ultrasound",
      name:"Abdominal Ultrasound",
      priority:"Essential",
      reason:
        "Evaluates pancreas, liver, biliary tract, and intestine."

    }

  ],

  drugCategories:[

    {
      category:"Supportive Therapy",
      indication:"Multiorgan inflammatory disease",
      reason:
        "Maintains hydration and nutritional status."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Inflammatory intestinal and hepatic disease",
      reason:
        "Controls inflammatory response."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Suspected bacterial cholangitis",
      reason:
        "Addresses bacterial involvement when present."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"
    },

    {
      drugId:"doxycycline",
      priority:"Supportive",
      category:"Antibiotic"

    }

  ],

  stabilization:[

    "Provide fluid therapy when required.",
    "Support early nutritional intake.",
    "Control nausea and vomiting.",
    "Monitor liver and pancreatic function.",
    "Manage concurrent intestinal inflammation."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Chronic gastrointestinal signs", weight:70 },

      { finding:"Reduced appetite", weight:75 },

      { finding:"Weight loss", weight:65 },

      { finding:"Previous pancreatitis", weight:60 },

      { finding:"Chronic inflammatory disease", weight:55 }

    ],

    clinicalSigns:[

      { finding:"Anorexia", weight:80 },

      { finding:"Vomiting", weight:55 },

      { finding:"Weight loss", weight:70 },

      { finding:"Lethargy", weight:60 },

      { finding:"Jaundice", weight:55 },

      { finding:"Diarrhea", weight:45 },

      { finding:"Abdominal discomfort", weight:40 }

    ],

    biochemistry:[

      { finding:"Elevated liver enzymes", weight:70 },

      { finding:"Elevated bilirubin", weight:65 },

      { finding:"Elevated pancreatic markers", weight:75 },

      { finding:"Inflammatory changes", weight:50 }

    ],

    imaging:[

      { finding:"Pancreatic abnormalities", weight:65 },

      { finding:"Biliary tract changes", weight:60 },

      { finding:"Intestinal thickening", weight:55 }

    ],

    supports:[

      { finding:"Evidence of multiple organ inflammation", weight:90 },

      { finding:"Compatible ultrasound findings", weight:80 },

      { finding:"Pancreatic involvement", weight:70 },

      { finding:"Chronic gastrointestinal signs", weight:65 }

    ],

    against:[

      { finding:"Single organ disease only", weight:-25 },

      { finding:"Normal abdominal imaging", weight:-30 },

      { finding:"Alternative diagnosis confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"appetite",
      parameter:"Food intake",
      frequency:"Daily",
      reason:
        "Evaluates nutritional recovery."
    },

    {
      id:"liver",
      parameter:"Liver parameters",
      frequency:"Periodic",
      reason:
        "Monitors hepatobiliary involvement."
    },

    {
      id:"pancreas",
      parameter:"Pancreatic markers",
      frequency:"Follow-up",
      reason:
        "Assesses pancreatic recovery."

    }

  ],

  precautions:[

    {
      id:"nutrition",
      title:"Nutritional Management",
      description:
        "Maintaining adequate nutrition is important in cats with chronic inflammatory disease."
    },

    {
      id:"multiorgan",
      title:"Multisystem Disease",
      description:
        "Evaluation of pancreas, liver, and intestine together improves diagnosis."

    }

  ],

  prognosis:
    "Prognosis varies depending on severity, chronicity, and organ involvement. Early recognition and supportive management improve outcomes.",

  strengtheningEvidence:[

    "Concurrent pancreatic and liver disease",

    "Chronic gastrointestinal signs",

    "Compatible imaging findings",

    "Reduced appetite"

  ],

  weakeningEvidence:[

    "Single organ involvement",

    "Normal abdominal evaluation",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Anorexia",

    "Weight loss",

    "Vomiting",

    "Liver and pancreatic abnormalities"

  ],
  priorityFindings: [
   "vomiting",
   "anorexia",
   "weight loss"
],

  ruleOutFindings:[

    "Feline pancreatitis alone",

    "Feline inflammatory bowel disease",

    "Hepatic lipidosis",

    "Cholangitis",

    "Gastrointestinal neoplasia"

  ],

};