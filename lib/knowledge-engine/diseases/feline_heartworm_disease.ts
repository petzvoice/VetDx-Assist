import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineHeartwormDisease: DiseaseCard = {
  id: "feline-heartworm-disease-cat",

  title: "Feline Heartworm Disease (Dirofilariasis)",

  description:
    "A parasitic cardiovascular and respiratory disease in cats caused by infection with Dirofilaria immitis, affecting pulmonary arteries and causing variable respiratory and systemic signs.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Heartworm Disease",
    "Feline Dirofilariasis",
    "Heartworm Infection",
    "Dirofilaria immitis Infection",
  ],

  overview:
    "Feline heartworm disease is caused by infection with Dirofilaria immitis transmitted through mosquito bites. Cats are less suitable hosts than dogs, but infection can cause significant respiratory disease, pulmonary vascular damage, and sometimes sudden death. Even a small number of adult worms or immature stages can produce severe clinical effects. Diagnosis can be challenging because cats often have low worm burdens and variable test results.",

  clinicalProblems:[

    "Pulmonary vascular inflammation",
    "Respiratory disease",
    "Coughing",
    "Exercise intolerance",
    "Sudden respiratory collapse",
    "Potential sudden death"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess respiratory signs, mosquito exposure, preventive history, and geographic risk."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate respiratory effort, lung sounds, cardiovascular status, and overall condition."
    },

    {
      id:"heartworm-testing",
      step:3,
      title:"Heartworm Testing",
      description:
        "Use antigen, antibody, and additional diagnostic methods because feline infections may be difficult to confirm."
    },

    {
      id:"imaging",
      step:4,
      title:"Thoracic Imaging",
      description:
        "Evaluate pulmonary and cardiovascular changes."

    },

    {
      id:"management",
      step:5,
      title:"Disease Management",
      description:
        "Provide supportive care and prevent further infection."

    }

  ],

  diagnostics:[

    {
      id:"antibody-test",
      name:"Heartworm Antibody Test",
      priority:"Recommended",
      reason:
        "Detects exposure to heartworm infection."
    },

    {
      id:"antigen-test",
      name:"Heartworm Antigen Test",
      priority:"Recommended",
      reason:
        "Detects adult female worm antigen but may be negative in cats with low worm numbers."
    },

    {
      id:"thoracic-radiography",
      name:"Thoracic Radiography",
      priority:"Essential",
      reason:
        "Evaluates pulmonary artery and lung changes."
    },

    {
      id:"echocardiography",
      name:"Echocardiography",
      priority:"Recommended",
      reason:
        "May identify worms or cardiac effects."

    }

  ],

  drugCategories:[

    {
      category:"Preventive Antiparasitic Therapy",
      indication:"Heartworm prevention",
      reason:
        "Prevents development of infection."
    },

    {
      category:"Supportive Respiratory Therapy",
      indication:"Respiratory complications",
      reason:
        "Manages clinical signs."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Pulmonary inflammation",
      reason:
        "Controls inflammatory response."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"ivermectin",
      priority:"Supportive",
      category:"Antiparasitic"
    },

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"

    }

  ],

  stabilization:[

    "Provide oxygen support during respiratory distress.",
    "Minimize stress during handling.",
    "Manage pulmonary inflammation.",
    "Monitor respiratory function.",
    "Prevent future infection."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Mosquito exposure", weight:70 },

      { finding:"No heartworm prevention", weight:65 },

      { finding:"Residence in endemic area", weight:75 },

      { finding:"Previous respiratory disease", weight:35 }

    ],

    clinicalSigns:[

      { finding:"Coughing", weight:60 },

      { finding:"Difficulty breathing", weight:75 },

      { finding:"Rapid breathing", weight:65 },

      { finding:"Vomiting", weight:35 },

      { finding:"Lethargy", weight:55 },

      { finding:"Sudden collapse", weight:80 }

    ],

    biochemistry:[

      { finding:"Usually non-specific changes", weight:15 },

      { finding:"Inflammatory changes", weight:35 },

      { finding:"Organ abnormalities in severe disease", weight:40 }

    ],

    imaging:[

      { finding:"Pulmonary artery enlargement", weight:75 },

      { finding:"Lung pattern abnormalities", weight:65 },

      { finding:"Adult worms visualized", weight:90 }

    ],

    supports:[

      { finding:"Positive heartworm antibody test", weight:75 },

      { finding:"Compatible respiratory signs", weight:65 },

      { finding:"Radiographic pulmonary changes", weight:75 },

      { finding:"Heartworm visualization", weight:95 }

    ],

    against:[

      { finding:"No respiratory abnormalities", weight:-30 },

      { finding:"Negative evaluation with no risk factors", weight:-40 },

      { finding:"Alternative respiratory disease confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"respiration",
      parameter:"Respiratory status",
      frequency:"Regular monitoring",
      reason:
        "Detects worsening pulmonary disease."
    },

    {
      id:"testing",
      parameter:"Heartworm testing",
      frequency:"Periodic",
      reason:
        "Evaluates infection status."
    },

    {
      id:"prevention",
      parameter:"Preventive medication compliance",
      frequency:"Continuous",
      reason:
        "Prevents new infection."

    }

  ],

  precautions:[

    {
      id:"diagnosis",
      title:"Diagnostic Limitations",
      description:
        "Heartworm diagnosis in cats can be difficult because infections often involve few worms."
    },

    {
      id:"prevention",
      title:"Prevention Importance",
      description:
        "Regular preventive therapy is important because treatment options are limited in cats."

    }

  ],

  prognosis:
    "Prognosis varies depending on severity of pulmonary disease and complications. Some cats remain stable, while others may develop severe respiratory disease or sudden death.",

  strengtheningEvidence:[

    "Mosquito exposure",

    "Respiratory signs",

    "Positive antibody testing",

    "Pulmonary artery changes"

  ],

  weakeningEvidence:[

    "No exposure risk",

    "Normal thoracic evaluation",

    "Alternative respiratory diagnosis"

  ],

  classicFindings:[

    "Coughing",

    "Breathing difficulty",

    "Mosquito exposure",

    "Pulmonary changes"

  ],

  requiredFindings: [
  "cough",
  "dyspnea"
],

  ruleOutFindings:[

    "Feline asthma",

    "Pneumonia",

    "Heart disease",

    "Lung parasites",

    "Pleural disease"

  ],

};