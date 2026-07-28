import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";
export const canineInfectiousHepatitis: DiseaseCard = {

  id: "canine-infectious-hepatitis",

  title: "Canine Infectious Hepatitis",

  description:
    "A systemic viral disease caused by canine adenovirus type 1, primarily affecting the liver, vascular endothelium, and other organs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Infectious canine hepatitis",
    "CAV-1 infection",
    "Canine adenovirus type 1 infection",
  ],


  overview:
    "Canine infectious hepatitis is a contagious viral disease caused by canine adenovirus type 1. The virus primarily affects the liver, vascular endothelium, kidneys, and other tissues. Clinical severity ranges from mild fever to severe hepatic injury, bleeding disorders, and systemic complications.",


  clinicalProblems: [

    "Fever",

    "Lethargy/Weakness",

    "Vomiting",

    "Abdominal pain",

    "Jaundice",

    "Hepatic dysfunction",

    "Bleeding tendency",

    "Corneal edema",

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess hydration status, cardiovascular stability, fever severity, hepatic involvement, bleeding risk, and ocular abnormalities."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform laboratory testing and confirmatory viral testing while evaluating liver function and systemic complications."
    },

    {
      id: "supportive-management",
      step: 3,
      title: "Supportive Management",
      description:
        "Provide supportive therapy based on hepatic dysfunction, dehydration, vomiting, and coagulation abnormalities."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor liver enzymes, coagulation status, renal function, ocular changes, and progression of systemic disease."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Implement preventive strategies including vaccination and exposure control."
    }

  ],


  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Evaluates inflammatory response, anemia, thrombocytopenia, and systemic involvement."
    },

    {
      id: "chemistry",
      name: "Serum Biochemistry Panel",
      priority: "Essential",
      reason:
        "Assesses hepatic injury, bilirubin changes, and organ dysfunction."
    },

    {
      id: "coagulation",
      name: "Coagulation Profile",
      priority: "Recommended",
      reason:
        "Evaluates clotting abnormalities associated with hepatic dysfunction."
    },

    {
      id: "urinalysis",
      name: "Urinalysis",
      priority: "Recommended",
      reason:
        "Assesses renal involvement and urinary abnormalities."
    },

    {
      id: "pcr",
      name: "Canine Adenovirus Type 1 PCR",
      priority: "Recommended",
      reason:
        "Helps confirm active viral infection."
    }

  ],
    drugCategories: [

    {
  category: "Nutritional Support",
  indication: "Hepatic dysfunction and systemic illness",
  reason:
    "Supportive nutritional management helps maintain energy requirements during recovery."
},

    {
      category: "Antiemetic",
      indication: "Vomiting",
      reason:
        "Controls nausea and vomiting to improve comfort and nutritional intake."
    },

    {
      category: "Hepatoprotectant",
      indication: "Liver injury",
      reason:
        "Provides supportive care during hepatic inflammation and recovery."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration and perfusion support",
      reason:
        "Maintains hydration and supports circulation in affected patients."
    }

  ],


  recommendedDrugs: [

    {
      drugId: "maropitant",
      priority: "Adjunctive",
      category: "Antiemetic",
    },

    {
      drugId: "s-adenosylmethionine",
      priority: "Adjunctive",
      category: "Hepatoprotectant",
    },

  ],
    clinicalEvidence: {

    history: [

      {
        finding: "Vaccination history unknown",
        weight: 10,
      },
       
      {
    finding: "Young dog",
    weight: 20,
  },

    ],


    clinicalSigns: [

      {
        finding: "Fever",
        weight: 25,
      },

      {
        finding: "Vomiting",
        weight: 15,
      },

      {
        finding: "Jaundice",
        weight: 30,
      },

      {
        finding: "Lethargy",
        weight: 15,
      },

      {
        finding: "Abdominal pain",
        weight: 20,
      },

    ],


    physicalExam: [

      {
  finding: "Corneal edema",
  weight: 35,
},
{
  finding: "Petechiae",
  weight: 25,
},
{
  finding: "Bleeding tendency",
  weight: 30,
},

    ],


    biochemistry: [

      {
        finding: "Increased ALT",
        weight: 25,
      },

      {
        finding: "Increased Bilirubin",
        weight: 30,
      },

    ],


    supports: [

      {
        finding: "Hepatic dysfunction",
        weight: 35,
      },

    ],


    against: [

      {
        finding: "Severe kidney injury",
        weight: -20,
      },

      {
        finding: "Pulmonary hemorrhage",
        weight: -15,
      },

    ],

  },

  stabilization: [
  "Assess hydration status and correct dehydration.",
  "Provide IV fluid therapy if indicated.",
  "Control vomiting and nausea.",
  "Monitor liver enzymes and coagulation profile.",
],

    monitoring: [

    {
      id: "hepatic",
      parameter:
        "Liver enzymes (ALT, AST, ALP) and bilirubin",
      frequency:
        "Daily during acute illness",
      reason:
        "Tracks hepatic injury and recovery."
    },

    {
      id: "coagulation",
      parameter:
        "Coagulation profile",
      frequency:
        "As clinically indicated",
      reason:
        "Monitors bleeding risk associated with hepatic dysfunction."
    },

    {
      id: "renal",
      parameter:
        "Renal values (BUN, Creatinine)",
      frequency:
        "Daily during hospitalization",
      reason:
        "Evaluates possible kidney involvement."
    },

    {
      id: "clinical",
      parameter:
        "Temperature, appetite, vomiting, and hydration status",
      frequency:
        "Daily",
      reason:
        "Assesses clinical response and progression."
    }

  ],


   precautions: [

    {
      id: "vaccination",
      title:
        "Vaccination Status",
      description:
        "Maintain appropriate vaccination protocols to reduce risk of canine adenovirus infection."
    },

    {
      id: "infectious-control",
      title:
        "Infectious Disease Control",
      description:
        "Practice appropriate isolation and hygiene measures in suspected infectious cases."
    }

  ],


  prognosis:
    "Prognosis depends on severity of hepatic injury and systemic complications. Mild cases may recover with supportive care, while severe hepatic dysfunction, coagulopathy, or multi-organ involvement may carry a guarded prognosis.",
  strengtheningEvidence: [

  "Positive Canine Adenovirus-1 PCR",

  "Marked elevation of ALT and AST",

  "Hyperbilirubinemia",

  "Thrombocytopenia",

  "Prolonged PT/aPTT",

  "Leukopenia during early infection",

  "Corneal edema (Blue eye)"

],

weakeningEvidence: [

  "Complete vaccination history",

  "Normal liver enzymes",

  "Normal coagulation profile",

  "Negative Canine Adenovirus-1 PCR",

  "Alternative confirmed diagnosis"

],

classicFindings: [

  "Acute high fever",

  "Vomiting",

  "Depression",

  "Abdominal pain",

  "Jaundice",

  "Corneal edema (Blue eye)",

  "Bleeding tendency"

],

ruleOutFindings: [

  "Marked azotemia with severe renal injury",

  "Stagnant water exposure",

  "Pulmonary hemorrhage",

  "Positive Leptospira PCR"

],  

};