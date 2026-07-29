import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineCalicivirus: DiseaseCard = {
  id: "feline-calicivirus-cat",

  title: "Feline Calicivirus Infection (FCV)",

  description:
    "A contagious viral disease of cats caused by feline calicivirus, commonly affecting the upper respiratory tract and oral cavity with signs ranging from mild respiratory disease to severe systemic illness.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Calicivirus Infection",
    "FCV Infection",
    "Feline Viral Upper Respiratory Infection",
    "Feline Oral Respiratory Disease",
  ],

  overview:
    "Feline calicivirus is a highly contagious RNA virus and one of the major causes of feline upper respiratory disease complex. The virus primarily affects the oral cavity and respiratory tract but may also cause conjunctivitis, pneumonia, lameness syndrome, and in rare cases severe systemic disease. Multiple strains exist with variable clinical severity. Recovered cats may continue to shed virus and contribute to transmission.",

  clinicalProblems:[

    "Upper respiratory infection",
    "Oral ulceration",
    "Gingivitis and stomatitis",
    "Pneumonia",
    "Lameness syndrome",
    "Chronic viral shedding"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess vaccination status, exposure to other cats, shelter environment, and onset of respiratory or oral signs."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate nasal discharge, oral lesions, fever, respiratory signs, and general health status."
    },

    {
      id:"oral-assessment",
      step:3,
      title:"Oral Examination",
      description:
        "Assess tongue and oral cavity for characteristic ulcers and inflammation."
    },

    {
      id:"viral-testing",
      step:4,
      title:"Viral Detection",
      description:
        "Perform PCR testing when confirmation is required."
    },

    {
      id:"management",
      step:5,
      title:"Supportive Management",
      description:
        "Provide supportive care and treat complications."

    }

  ],

  diagnostics:[

    {
      id:"clinical-diagnosis",
      name:"Clinical Diagnosis",
      priority:"Essential",
      reason:
        "Typical oral and respiratory signs often support diagnosis."
    },

    {
      id:"pcr",
      name:"PCR Testing",
      priority:"Recommended",
      reason:
        "Detects feline calicivirus genetic material."
    },

    {
      id:"oral-examination",
      name:"Oral Examination",
      priority:"Essential",
      reason:
        "Identifies characteristic oral ulcers."

    },

    {
      id:"thoracic-imaging",
      name:"Thoracic Imaging",
      priority:"Conditional",
      reason:
        "Evaluates pneumonia or lower respiratory involvement."

    }

  ],

  drugCategories:[

    {
      category:"Supportive Therapy",
      indication:"Viral infection management",
      reason:
        "Supports recovery and maintains hydration and nutrition."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Secondary bacterial infection",
      reason:
        "Treats bacterial complications."
    },

    {
      category:"Pain Management",
      indication:"Oral ulcer discomfort",
      reason:
        "Improves eating ability and comfort."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"doxycycline",
      priority:"Supportive",
      category:"Antibiotic"
    },

    {
      drugId:"buprenorphine",
      priority:"Supportive",
      category:"Analgesic"

    }

  ],

  stabilization:[

    "Maintain hydration status.",
    "Provide nutritional support.",
    "Control oral pain.",
    "Treat secondary bacterial infections.",
    "Reduce stress and minimize transmission."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Multi-cat household exposure", weight:70 },

      { finding:"Shelter environment exposure", weight:75 },

      { finding:"Incomplete vaccination", weight:65 },

      { finding:"Young age", weight:55 },

      { finding:"Previous respiratory disease", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Oral ulcers", weight:85 },

      { finding:"Sneezing", weight:65 },

      { finding:"Nasal discharge", weight:60 },

      { finding:"Conjunctivitis", weight:50 },

      { finding:"Fever", weight:45 },

      { finding:"Pneumonia signs", weight:40 },

      { finding:"Lameness", weight:35 }

    ],

    biochemistry:[

      { finding:"Usually non-specific blood changes", weight:10 },

      { finding:"Inflammatory changes in severe disease", weight:25 }

    ],

    imaging:[

      { finding:"Pulmonary changes in pneumonia cases", weight:35 },

      { finding:"No specific imaging findings in mild disease", weight:5 }

    ],

    supports:[

      { finding:"Characteristic oral ulcers", weight:85 },

      { finding:"Positive FCV PCR", weight:90 },

      { finding:"Upper respiratory disease signs", weight:70 },

      { finding:"Multi-cat exposure", weight:65 }

    ],

    against:[

      { finding:"No oral or respiratory signs", weight:-50 },

      { finding:"Alternative respiratory disease confirmed", weight:-40 },

      { finding:"Complete vaccination and no exposure", weight:-25 }

    ],

  },

  monitoring:[

    {
      id:"oral",
      parameter:"Oral lesions and ability to eat",
      frequency:"Daily during illness",
      reason:
        "Monitors pain and nutritional status."
    },

    {
      id:"respiratory",
      parameter:"Respiratory signs",
      frequency:"Daily",
      reason:
        "Detects progression to pneumonia."
    },

    {
      id:"weight",
      parameter:"Body weight",
      frequency:"Regular follow-up",
      reason:
        "Evaluates nutritional recovery."

    }

  ],

  precautions:[

    {
      id:"contagious",
      title:"Highly Contagious Disease",
      description:
        "Virus spreads easily through direct contact and contaminated environments."
    },

    {
      id:"shedding",
      title:"Persistent Viral Shedding",
      description:
        "Some recovered cats may continue shedding virus."

    }

  ],

  prognosis:
    "Prognosis is generally good in uncomplicated cases with supportive care. Severe systemic disease or pneumonia can result in a poorer outcome.",

  strengtheningEvidence:[

    "Oral ulcers",

    "Positive FCV testing",

    "Upper respiratory signs",

    "Multi-cat exposure"

  ],

  weakeningEvidence:[

    "No oral lesions",

    "No respiratory signs",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Tongue ulcers",

    "Sneezing",

    "Nasal discharge",

    "Oral pain"

  ],

  ruleOutFindings:[

    "Feline herpesvirus-1 infection",

    "Feline chlamydiosis",

    "Feline stomatitis",

    "Bacterial respiratory infection",

    "Foreign body rhinitis"

  ],

};