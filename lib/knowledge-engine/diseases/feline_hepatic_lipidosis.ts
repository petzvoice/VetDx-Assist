import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineHepaticLipidosis: DiseaseCard = {
  id: "feline-hepatic-lipidosis-cat",

  title: "Feline Hepatic Lipidosis (Fatty Liver Disease)",

  description:
    "A metabolic liver disorder in cats characterized by excessive accumulation of fat within hepatocytes, commonly associated with prolonged anorexia and rapid weight loss.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Hepatic Lipidosis",
    "Feline Fatty Liver Syndrome",
    "Idiopathic Hepatic Lipidosis",
    "Secondary Hepatic Lipidosis",
  ],

  overview:
    "Feline hepatic lipidosis is one of the most common acquired liver diseases in cats. It occurs when excessive fat accumulates in liver cells, usually following a period of reduced food intake. Obesity, stress, concurrent disease, and sudden appetite loss increase the risk. The condition may be primary (idiopathic) or secondary to diseases such as diabetes mellitus, pancreatitis, inflammatory bowel disease, or neoplasia. Early nutritional support is essential for recovery.",

  clinicalProblems:[

    "Fat accumulation in liver",
    "Severe anorexia",
    "Weight loss",
    "Jaundice",
    "Liver dysfunction",
    "Metabolic abnormalities"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess duration of anorexia, weight loss, obesity history, stress events, and underlying diseases."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate body condition, dehydration, jaundice, muscle loss, and general health."
    },

    {
      id:"laboratory",
      step:3,
      title:"Laboratory Assessment",
      description:
        "Evaluate liver enzymes, bilirubin, electrolytes, and metabolic changes."
    },

    {
      id:"imaging",
      step:4,
      title:"Abdominal Imaging",
      description:
        "Assess liver changes and rule out other causes of disease."
    },

    {
      id:"nutritional-support",
      step:5,
      title:"Nutritional Management",
      description:
        "Provide adequate nutritional support and manage underlying disease."

    }

  ],

  diagnostics:[

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "Evaluates anemia, inflammation, and systemic changes."
    },

    {
      id:"biochemistry",
      name:"Serum Biochemistry",
      priority:"Essential",
      reason:
        "Detects liver enzyme abnormalities and bilirubin elevation."
    },

    {
      id:"ultrasound",
      name:"Abdominal Ultrasound",
      priority:"Recommended",
      reason:
        "Evaluates liver appearance and excludes other disorders."
    },

    {
      id:"liver-cytology",
      name:"Liver Cytology/Biopsy",
      priority:"Conditional",
      reason:
        "Confirms hepatic fat accumulation and evaluates other liver diseases."

    }

  ],

  drugCategories:[

    {
      category:"Nutritional Support",
      indication:"Hepatic lipidosis recovery",
      reason:
        "Provides calories needed to reverse fat accumulation."
    },

    {
      category:"Supportive Therapy",
      indication:"Metabolic and liver support",
      reason:
        "Maintains hydration and corrects abnormalities."
    },

    {
      category:"Antiemetic Therapy",
      indication:"Nausea management",
      reason:
        "Improves feeding tolerance."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"maropitant",
      priority:"Supportive",
      category:"Antiemetic"
    },

    {
      drugId:"ondansetron",
      priority:"Supportive",
      category:"Antiemetic"

    }

  ],

  stabilization:[

    "Provide nutritional support early.",
    "Correct dehydration and electrolyte abnormalities.",
    "Monitor liver function.",
    "Identify and treat underlying disease.",
    "Monitor body weight and feeding response."

  ],

  clinicalEvidence:{
    signalment:[

{
finding:"Adult cat",
weight:25
},

{
finding:"Obese cat",
weight:60
}

],

    history: [

  { finding: "Prolonged anorexia", weight: 100 },

  { finding: "Recent rapid weight loss", weight: 95 },

  { finding: "Obesity history", weight: 85 },

  { finding: "Stress event", weight: 50 },

  { finding: "Concurrent disease", weight: 65 }

],

   clinicalSigns: [

  { finding: "Anorexia", weight: 100 },

  { finding: "Jaundice", weight: 95 },

  { finding: "Weight loss", weight: 90 },

  { finding: "Lethargy", weight: 60 },

  { finding: "Vomiting", weight: 40 },

  { finding: "Dehydration", weight: 50 },

  { finding: "Muscle wasting", weight: 60 }

],
    biochemistry:[

      { finding:"Elevated liver enzymes", weight:70 },

      { finding:"Elevated bilirubin", weight:85 },

      { finding:"Electrolyte abnormalities", weight:45 },

      { finding:"Changes associated with liver dysfunction", weight:65 }

    ],

    imaging:[

      { finding:"Increased liver echogenicity on ultrasound", weight:70 },

      { finding:"Enlarged liver", weight:45 },

      { finding:"No specific findings in early disease", weight:10 }

    ],

    supports: [

  {
    finding: "Prolonged anorexia",
    weight: 100
  },

  {
    finding: "Rapid weight loss",
    weight: 95
  },

  {
    finding: "Jaundice",
    weight: 90
  },

  {
    finding: "Elevated bilirubin",
    weight: 85
  },

  {
    finding: "Increased liver echogenicity",
    weight: 75
  },

  {
    finding: "Liver fat accumulation",
    weight: 100
  }

],

    against: [

  {
    finding: "Normal bilirubin",
    weight: -40
  },

  {
    finding: "Normal liver enzymes",
    weight: -35
  },

  {
    finding: "No anorexia",
    weight: -60
  },

  {
    finding: "Alternative liver disease confirmed",
    weight: -70
  }

],

  },

  monitoring:[

    {
      id:"nutrition",
      parameter:"Food intake",
      frequency:"Daily",
      reason:
        "Ensures adequate nutritional recovery."
    },

    {
      id:"weight",
      parameter:"Body weight",
      frequency:"Regular monitoring",
      reason:
        "Evaluates recovery from weight loss."
    },

    {
      id:"liver",
      parameter:"Liver enzymes and bilirubin",
      frequency:"Periodic",
      reason:
        "Monitors liver recovery."

    }

  ],

  precautions:[

    {
      id:"nutrition",
      title:"Early Nutritional Support",
      description:
        "Delayed nutritional support can worsen hepatic fat accumulation."
    },

    {
      id:"underlying",
      title:"Underlying Disease Investigation",
      description:
        "Many cases occur secondary to another disease causing anorexia."

    }

  ],

  prognosis:
    "Prognosis depends on early nutritional intervention and control of underlying disease. Cats receiving appropriate support may recover, while delayed treatment can result in severe complications.",

  strengtheningEvidence:[

"Prolonged anorexia",

"Rapid weight loss",

"Jaundice",

"Elevated bilirubin",

"Increased liver echogenicity",

"Liver fat accumulation"

],

  weakeningEvidence:[

"No anorexia",

"Normal bilirubin",

"Normal liver enzymes",

"Alternative diagnosis confirmed"

],

  classicFindings:[

"prolonged anorexia",

"rapid weight loss",

"jaundice",

"obese cat"

],
  
  priorityFindings: [

"prolonged anorexia",

"rapid weight loss",

"jaundice",

"elevated bilirubin"

],
  ruleOutFindings:[

    "Cholangitis",

    "Pancreatitis",

    "Hepatic neoplasia",

    "Toxic liver disease",

    "Feline triaditis"

  ],

};