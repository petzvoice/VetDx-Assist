import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineUpperRespiratoryInfectionComplex: DiseaseCard = {
  id: "feline-upper-respiratory-infection-complex-cat",

  title: "Feline Upper Respiratory Infection Complex (Feline URI)",

  description:
    "A group of contagious respiratory diseases in cats caused by viral and bacterial pathogens resulting in sneezing, nasal discharge, conjunctivitis, and respiratory inflammation.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline URI",
    "Feline Upper Respiratory Disease Complex",
    "Cat Flu",
    "Feline Respiratory Complex",
  ],

  overview:
    "Feline upper respiratory infection complex is a common contagious disease syndrome involving multiple pathogens. The most important viral causes include feline herpesvirus-1 and feline calicivirus, while bacterial organisms such as Chlamydia felis, Mycoplasma species, and secondary bacterial infections may contribute. Disease severity varies depending on age, vaccination status, immune status, and environmental stress. Young cats and cats in shelters or multi-cat households are at increased risk.",

  clinicalProblems:[

    "Upper respiratory inflammation",
    "Conjunctivitis",
    "Nasal discharge",
    "Sneezing",
    "Reduced appetite",
    "Secondary bacterial infection"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess vaccination status, exposure to other cats, shelter history, stress factors, and duration of signs."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate respiratory signs, eyes, oral cavity, hydration status, and general condition."
    },

    {
      id:"ocular-assessment",
      step:3,
      title:"Ocular Evaluation",
      description:
        "Assess conjunctivitis and possible corneal complications."
    },

    {
      id:"pathogen-evaluation",
      step:4,
      title:"Pathogen Assessment",
      description:
        "Consider viral and bacterial causes based on clinical presentation."
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
        "Most cases are diagnosed based on characteristic clinical signs."
    },

    {
      id:"ocular-examination",
      name:"Ophthalmic Examination",
      priority:"Recommended",
      reason:
        "Detects conjunctivitis and corneal involvement."
    },

    {
      id:"pcr",
      name:"Respiratory PCR Panel",
      priority:"Conditional",
      reason:
        "Identifies specific viral or bacterial pathogens."
    },

    {
      id:"cytology",
      name:"Conjunctival Cytology",
      priority:"Conditional",
      reason:
        "Supports evaluation of ocular infections."

    }

  ],

  drugCategories:[

    {
      category:"Supportive Therapy",
      indication:"Respiratory disease management",
      reason:
        "Maintains hydration, nutrition, and comfort."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Bacterial involvement",
      reason:
        "Treats bacterial infections or complications."
    },

    {
      category:"Ophthalmic Therapy",
      indication:"Eye disease",
      reason:
        "Manages conjunctivitis and ocular complications."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"doxycycline",
      priority:"Supportive",
      category:"Antibiotic"
    },

    {
      drugId:"famciclovir",
      priority:"Supportive",
      category:"Antiviral"

    }

  ],

  stabilization:[

    "Maintain hydration.",
    "Support appetite and nutrition.",
    "Clean nasal and ocular discharge.",
    "Treat secondary bacterial infections when indicated.",
    "Reduce stress and prevent spread."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Multi-cat household exposure", weight:75 },

      { finding:"Shelter or cattery environment", weight:80 },

      { finding:"Incomplete vaccination", weight:65 },

      { finding:"Young kitten", weight:60 },

      { finding:"Recent stress event", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Sneezing", weight:80 },

      { finding:"Nasal discharge", weight:75 },

      { finding:"Conjunctivitis", weight:75 },

      { finding:"Ocular discharge", weight:70 },

      { finding:"Fever", weight:45 },

      { finding:"Reduced appetite", weight:60 },

      { finding:"Oral ulcers", weight:40 }

    ],

    biochemistry:[

      { finding:"Usually non-specific changes", weight:10 },

      { finding:"Dehydration-related changes", weight:25 },

      { finding:"Inflammatory changes", weight:20 }

    ],

    imaging:[

      { finding:"Usually no specific imaging findings", weight:5 },

      { finding:"Lower respiratory changes in pneumonia", weight:35 }

    ],

    supports:[

      { finding:"Typical respiratory signs", weight:85 },

      { finding:"Conjunctivitis", weight:75 },

      { finding:"Multi-cat exposure", weight:70 },

      { finding:"Positive respiratory pathogen testing", weight:85 }

    ],

    against:[

      { finding:"No respiratory signs", weight:-60 },

      { finding:"Alternative disease confirmed", weight:-40 },

      { finding:"No exposure risk", weight:-20 }

    ],

  },

  monitoring:[

    {
      id:"respiratory",
      parameter:"Sneezing and nasal discharge",
      frequency:"Daily during illness",
      reason:
        "Evaluates respiratory improvement."
    },

    {
      id:"ocular",
      parameter:"Eye condition",
      frequency:"Regular follow-up",
      reason:
        "Detects ocular complications."
    },

    {
      id:"nutrition",
      parameter:"Food intake and body weight",
      frequency:"Daily",
      reason:
        "Monitors recovery."

    }

  ],

  precautions:[

    {
      id:"contagious",
      title:"Contagious Disease",
      description:
        "Respiratory pathogens spread easily between cats through close contact and secretions."
    },

    {
      id:"isolation",
      title:"Isolation Measures",
      description:
        "Affected cats should be separated from healthy cats during illness."

    }

  ],

  prognosis:
    "Most uncomplicated cases recover with supportive care. Severe disease, especially in kittens or immunocompromised cats, may result in prolonged illness or complications.",

  strengtheningEvidence:[

    "Sneezing",

    "Conjunctivitis",

    "Nasal discharge",

    "Multi-cat exposure"

  ],

  weakeningEvidence:[

    "No respiratory signs",

    "No ocular involvement",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Sneezing",

    "Eye discharge",

    "Nasal discharge",

    "Reduced appetite"

  ],

  ruleOutFindings:[

    "Feline herpesvirus infection",

    "Feline calicivirus infection",

    "Feline chlamydiosis",

    "Fungal rhinitis",

    "Foreign body rhinitis"

  ],

};