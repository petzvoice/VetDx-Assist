import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineOtitisMediaInterna: DiseaseCard = {
  id: "canine-otitis-media-interna-dog",

  title: "Canine Otitis Media / Interna (Middle and Inner Ear Infection)",

  description:
    "An infection and inflammation involving the middle and inner ear structures, often developing as a complication of chronic otitis externa and causing pain, neurological signs, and balance disorders.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Middle Ear Infection",
    "Inner Ear Infection",
    "Otitis Media",
    "Otitis Interna",
    "Vestibular Ear Disease",
  ],

  overview:
    "Canine otitis media and interna involve inflammation of deeper ear structures beyond the external ear canal. Infection commonly spreads through an intact or damaged tympanic membrane from chronic otitis externa, although other causes such as ascending infections or trauma may occur. Otitis media affects the tympanic cavity, while otitis interna involves the inner ear structures responsible for balance and hearing. Disease may result in head tilt, vestibular signs, facial nerve dysfunction, and hearing loss.",

  clinicalProblems:[

    "Middle ear infection",
    "Inner ear inflammation",
    "Vestibular dysfunction",
    "Hearing impairment",
    "Facial nerve involvement",
    "Chronic ear disease"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess chronic ear infection history, previous treatments, head tilt, balance problems, and neurological signs."
    },

    {
      id:"ear-examination",
      step:2,
      title:"Ear Examination",
      description:
        "Evaluate external ear disease and tympanic membrane condition."
    },

    {
      id:"neurological-assessment",
      step:3,
      title:"Neurological Evaluation",
      description:
        "Assess vestibular and cranial nerve abnormalities."
    },

    {
      id:"advanced-diagnostics",
      step:4,
      title:"Advanced Imaging",
      description:
        "Evaluate deeper ear structures using appropriate imaging methods."
    },

    {
      id:"treatment",
      step:5,
      title:"Medical Management",
      description:
        "Treat infection, inflammation, and underlying ear disease."

    }

  ],

  diagnostics:[

    {
      id:"otoscopy",
      name:"Otoscopy",
      priority:"Essential",
      reason:
        "Evaluates external ear canal and tympanic membrane."
    },

    {
      id:"ear-cytology",
      name:"Ear Cytology",
      priority:"Recommended",
      reason:
        "Identifies bacterial or yeast organisms."
    },

    {
      id:"ct-mri",
      name:"CT / MRI Imaging",
      priority:"Recommended",
      reason:
        "Evaluates middle and inner ear structures."
    },

    {
      id:"culture",
      name:"Bacterial Culture and Sensitivity",
      priority:"Recommended",
      reason:
        "Guides antimicrobial selection in chronic infections."

    }

  ],

  drugCategories:[

    {
      category:"Systemic Antimicrobial Therapy",
      indication:"Middle or inner ear infection",
      reason:
        "Required for deeper ear infections."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Inflammation and discomfort",
      reason:
        "Reduces inflammatory damage."
    },

    {
      category:"Ear Disease Management",
      indication:"Underlying ear pathology",
      reason:
        "Prevents recurrence."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"amoxicillin-clavulanate",
      priority:"Supportive",
      category:"Antibiotic"
    },

    {
      drugId:"enrofloxacin",
      priority:"Supportive",
      category:"Antibiotic"

    }

  ],

  stabilization:[

    "Treat underlying ear infection.",
    "Control pain and inflammation.",
    "Assess neurological complications.",
    "Prevent progression to permanent damage.",
    "Manage chronic external ear disease."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Chronic recurrent otitis externa", weight:75 },

      { finding:"Previous unsuccessful ear treatment", weight:55 },

      { finding:"Long-standing ear disease", weight:65 },

      { finding:"History of ear trauma or infection", weight:40 },

      { finding:"Hearing changes noticed", weight:45 }

    ],

    clinicalSigns:[

      { finding:"Head tilt", weight:80 },

      { finding:"Loss of balance", weight:75 },

      { finding:"Circling", weight:65 },

      { finding:"Nystagmus", weight:75 },

      { finding:"Facial nerve dysfunction", weight:55 },

      { finding:"Hearing loss", weight:60 },

      { finding:"Ear pain", weight:55 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Inflammatory changes in severe disease", weight:20 }

    ],

    imaging:[

      { finding:"Middle ear cavity changes on CT/MRI", weight:85 },

      { finding:"No external ear findings despite neurological signs", weight:40 }

    ],

    supports:[

      { finding:"Chronic otitis history", weight:80 },

      { finding:"Vestibular signs", weight:85 },

      { finding:"Imaging evidence of ear involvement", weight:95 },

      { finding:"Positive bacterial culture", weight:80 }

    ],

    against:[

      { finding:"Normal neurological examination", weight:-40 },

      { finding:"No ear disease evidence", weight:-50 },

      { finding:"Alternative neurological disease confirmed", weight:-60 }

    ],

  },

  monitoring:[

    {
      id:"neurological",
      parameter:"Vestibular and neurological signs",
      frequency:"Regular follow-up",
      reason:
        "Evaluates recovery of balance and nerve function."
    },

    {
      id:"infection",
      parameter:"Ear infection status",
      frequency:"Follow-up examination",
      reason:
        "Confirms treatment response."
    },

    {
      id:"hearing",
      parameter:"Hearing ability",
      frequency:"Long-term monitoring",
      reason:
        "Detects permanent hearing changes."

    }

  ],

  precautions:[

    {
      id:"chronic",
      title:"Chronic Ear Disease Risk",
      description:
        "Long-standing external ear infections can progress into deeper ear structures."
    },

    {
      id:"neurological",
      title:"Neurological Complications",
      description:
        "Inner ear involvement may cause balance problems and cranial nerve abnormalities."

    }

  ],

  prognosis:
    "Prognosis depends on severity and duration of disease. Early treatment generally provides good outcomes, while chronic cases may have persistent neurological deficits.",

  strengtheningEvidence:[

    "Chronic ear infection",

    "Head tilt",

    "Vestibular signs",

    "Imaging confirmation",

    "Positive culture"

  ],

  weakeningEvidence:[

    "Normal ear examination",

    "No neurological signs",

    "Alternative neurological disease"

  ],

  classicFindings:[

    "Head tilt",

    "Nystagmus",

    "Balance loss",

    "Chronic ear disease"

  ],

  ruleOutFindings:[

    "Idiopathic vestibular disease",

    "Brain disease",

    "Ear foreign body",

    "Otitis externa",

    "Trauma"

  ],

};