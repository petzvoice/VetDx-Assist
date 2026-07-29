import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineCholangitis: DiseaseCard = {
  id: "feline-cholangitis-cat",

  title: "Feline Cholangitis / Cholangiohepatitis",

  description:
    "An inflammatory disease of the feline bile ducts and liver tissue characterized by hepatobiliary inflammation, abnormal liver function, and variable systemic illness.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Cholangitis",
    "Cholangiohepatitis",
    "Feline Biliary Inflammatory Disease",
    "Neutrophilic Cholangitis",
    "Lymphocytic Cholangitis",
  ],

  overview:
    "Feline cholangitis is an inflammatory disorder affecting the bile ducts and liver. It is one of the most common hepatobiliary diseases in cats and may occur as neutrophilic cholangitis, commonly associated with bacterial infection, or lymphocytic cholangitis, associated with chronic immune-mediated inflammation. Due to the close anatomical relationship between the bile duct, pancreas, and intestine, cholangitis may occur together with pancreatitis and inflammatory bowel disease as part of feline triaditis.",

  clinicalProblems:[

    "Biliary tract inflammation",
    "Liver inflammation",
    "Jaundice",
    "Reduced appetite",
    "Vomiting",
    "Systemic illness"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess appetite changes, vomiting, weight loss, previous gastrointestinal disease, and duration of illness."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate jaundice, abdominal discomfort, dehydration, and body condition."
    },

    {
      id:"laboratory",
      step:3,
      title:"Laboratory Evaluation",
      description:
        "Assess liver enzymes, bilirubin, and inflammatory changes."
    },

    {
      id:"imaging",
      step:4,
      title:"Biliary Imaging",
      description:
        "Evaluate liver, gall bladder, and bile ducts."
    },

    {
      id:"confirmation",
      step:5,
      title:"Diagnostic Confirmation",
      description:
        "Use cytology, culture, or biopsy when required."

    }

  ],

  diagnostics:[

    {
      id:"biochemistry",
      name:"Serum Biochemistry",
      priority:"Essential",
      reason:
        "Evaluates liver enzyme elevation and bilirubin abnormalities."
    },

    {
      id:"ultrasound",
      name:"Abdominal Ultrasound",
      priority:"Essential",
      reason:
        "Assesses liver, gall bladder, and biliary tract changes."
    },

    {
      id:"bile-analysis",
      name:"Bile Cytology and Culture",
      priority:"Recommended",
      reason:
        "Helps identify bacterial involvement."
    },

    {
      id:"liver-biopsy",
      name:"Liver Biopsy",
      priority:"Conditional",
      reason:
        "Characterizes inflammatory pattern and chronic disease."

    }

  ],

  drugCategories:[

    {
      category:"Antimicrobial Therapy",
      indication:"Neutrophilic cholangitis",
      reason:
        "Treats bacterial biliary infection when present."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Lymphocytic cholangitis",
      reason:
        "Controls chronic inflammatory response."
    },

    {
      category:"Supportive Therapy",
      indication:"Hepatobiliary disease",
      reason:
        "Maintains hydration and nutritional support."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"doxycycline",
      priority:"Supportive",
      category:"Antibiotic"
    },

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"

    }

  ],

  stabilization:[

    "Provide fluid and nutritional support.",
    "Manage nausea and vomiting.",
    "Monitor liver function.",
    "Treat bacterial infection when indicated.",
    "Evaluate concurrent pancreatic and intestinal disease."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Chronic gastrointestinal disease", weight:55 },

      { finding:"Reduced appetite", weight:75 },

      { finding:"Weight loss", weight:65 },

      { finding:"Concurrent pancreatitis or IBD", weight:70 },

      { finding:"Older cat", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Jaundice", weight:85 },

      { finding:"Anorexia", weight:80 },

      { finding:"Vomiting", weight:55 },

      { finding:"Lethargy", weight:60 },

      { finding:"Weight loss", weight:65 },

      { finding:"Abdominal discomfort", weight:40 },

      { finding:"Fever", weight:45 }

    ],

    biochemistry:[

      { finding:"Elevated liver enzymes", weight:80 },

      { finding:"Elevated bilirubin", weight:85 },

      { finding:"Cholestatic changes", weight:75 },

      { finding:"Inflammatory changes", weight:45 }

    ],

    imaging:[

      { finding:"Gall bladder abnormalities", weight:60 },

      { finding:"Bile duct changes", weight:65 },

      { finding:"Liver abnormalities", weight:50 }

    ],

    supports:[

      { finding:"Jaundice with liver enzyme elevation", weight:85 },

      { finding:"Compatible ultrasound findings", weight:75 },

      { finding:"Bile inflammation evidence", weight:80 },

      { finding:"Triaditis involvement", weight:70 }

    ],

    against:[

      { finding:"Normal liver evaluation", weight:-40 },

      { finding:"No hepatobiliary signs", weight:-35 },

      { finding:"Alternative liver disease confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"liver",
      parameter:"Liver enzymes and bilirubin",
      frequency:"Periodic",
      reason:
        "Evaluates liver recovery."
    },

    {
      id:"appetite",
      parameter:"Food intake",
      frequency:"Daily",
      reason:
        "Monitors nutritional status."
    },

    {
      id:"weight",
      parameter:"Body weight",
      frequency:"Regular monitoring",
      reason:
        "Detects improvement or decline."

    }

  ],

  precautions:[

    {
      id:"triaditis",
      title:"Concurrent Disease Evaluation",
      description:
        "Cats with cholangitis may also have pancreatitis and inflammatory bowel disease."
    },

    {
      id:"nutrition",
      title:"Nutritional Support",
      description:
        "Maintaining adequate nutrition is important in hepatobiliary disease."

    }

  ],

  prognosis:
    "Prognosis depends on the type and severity of cholangitis. Neutrophilic cases may respond well to appropriate therapy, while chronic lymphocytic disease may require long-term management.",

  strengtheningEvidence:[

    "Jaundice",

    "Elevated bilirubin",

    "Biliary abnormalities",

    "Concurrent gastrointestinal inflammation"

  ],

  weakeningEvidence:[

    "Normal liver parameters",

    "No hepatobiliary signs",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Jaundice",

    "Anorexia",

    "Elevated liver enzymes",

    "Biliary inflammation"

  ],

  ruleOutFindings:[

    "Hepatic lipidosis",

    "Pancreatitis",

    "Feline triaditis",

    "Hepatic neoplasia",

    "Toxic liver disease"

  ],

};