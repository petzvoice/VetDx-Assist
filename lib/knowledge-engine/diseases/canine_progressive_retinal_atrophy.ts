import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineProgressiveRetinalAtrophy: DiseaseCard = {
  id: "canine-progressive-retinal-atrophy-dog",

  title: "Canine Progressive Retinal Atrophy (PRA)",

  description:
    "A group of inherited retinal degenerative disorders causing progressive loss of vision and eventual blindness due to degeneration of photoreceptor cells.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "PRA",
    "Progressive Retinal Degeneration",
    "Inherited Retinal Degeneration",
  ],

  overview:
    "Canine progressive retinal atrophy is an inherited disease characterized by gradual degeneration of retinal photoreceptors responsible for vision. The disease typically begins with impaired night vision and progresses to complete blindness. PRA is caused by genetic mutations affecting retinal function and occurs in many dog breeds. There is no curative treatment, but affected dogs can adapt well to vision loss with appropriate environmental support.",

  clinicalProblems: [

    "Progressive vision loss",
    "Night blindness",
    "Retinal degeneration",
    "Complete blindness",
    "Genetic disease transmission"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess progression of vision loss, night blindness, breed history, and family history."
    },

    {
      id:"ophthalmic-exam",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate retinal appearance and ocular structures."
    },

    {
      id:"retinal-assessment",
      step:3,
      title:"Retinal Function Evaluation",
      description:
        "Assess retinal function and confirm degeneration."
    },

    {
      id:"genetic-evaluation",
      step:4,
      title:"Genetic Assessment",
      description:
        "Identify inherited mutations where testing is available."
    },

    {
      id:"management",
      step:5,
      title:"Vision Support Management",
      description:
        "Provide environmental adaptation and breeding advice."
    }

  ],

  diagnostics: [

    {
      id:"fundic-examination",
      name:"Fundic Examination",
      priority:"Essential",
      reason:
        "Evaluates retinal changes associated with degeneration."
    },

    {
      id:"electroretinography",
      name:"Electroretinography (ERG)",
      priority:"Recommended",
      reason:
        "Assesses retinal electrical function."
    },

    {
      id:"genetic-testing",
      name:"Genetic Testing",
      priority:"Recommended",
      reason:
        "Identifies inherited mutations associated with PRA."
    },

    {
      id:"ophthalmic-exam",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Rules out other causes of blindness."

    }

  ],

  drugCategories:[

    {
      category:"Supportive Management",
      indication:"Vision loss adaptation",
      reason:
        "Improves quality of life in blind patients."
    }

  ],

  recommendedDrugs: [],

  stabilization:[

    "Evaluate remaining vision.",
    "Modify environment to prevent injury.",
    "Avoid unnecessary changes to surroundings.",
    "Provide owner education regarding adaptation.",
    "Consider genetic counselling for breeding animals."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Progressive vision loss", weight:60 },

      { finding:"Night blindness", weight:65 },

      { finding:"Breed predisposition", weight:45 },

      { finding:"Family history of retinal disease", weight:50 },

      { finding:"Slow progression over months to years", weight:55 }

    ],

    clinicalSigns:[

      { finding:"Difficulty seeing in darkness", weight:70 },

      { finding:"Bumping into objects", weight:55 },

      { finding:"Dilated pupils", weight:35 },

      { finding:"Reduced menace response", weight:45 },

      { finding:"Complete blindness", weight:60 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 }

    ],

    imaging:[

      { finding:"Retinal thinning or degeneration", weight:70 },

      { finding:"Changes on fundic examination", weight:65 }

    ],

    supports:[

      { finding:"Abnormal electroretinography", weight:80 },

      { finding:"Progressive night blindness", weight:70 },

      { finding:"Retinal degeneration", weight:75 },

      { finding:"Genetic confirmation", weight:85 }

    ],

    against:[

      { finding:"Sudden blindness onset", weight:-35 },

      { finding:"Normal retinal function", weight:-60 },

      { finding:"Painful eye disease", weight:-30 }

    ],

  },

  monitoring:[

    {
      id:"vision",
      parameter:"Visual function",
      frequency:"Regular follow-up",
      reason:
        "Tracks progression of vision loss."
    },

    {
      id:"retina",
      parameter:"Retinal changes",
      frequency:"Periodic ophthalmic examination",
      reason:
        "Monitors disease progression."
    },

    {
      id:"adaptation",
      parameter:"Environmental adaptation",
      frequency:"Continuous",
      reason:
        "Ensures patient safety."

    }

  ],

  precautions:[

    {
      id:"genetic",
      title:"Inherited Disease",
      description:
        "Affected dogs should be evaluated carefully before breeding."
    },

    {
      id:"blindness",
      title:"Vision Loss Management",
      description:
        "Blind dogs can adapt well when environmental changes are minimized."
    }

  ],

  prognosis:
    "PRA is progressive and ultimately leads to blindness. Although vision cannot be restored, affected dogs generally maintain good quality of life with appropriate support.",

  strengtheningEvidence:[

    "Night blindness",

    "Progressive vision loss",

    "Retinal degeneration",

    "Abnormal ERG",

    "Genetic confirmation"

  ],

  weakeningEvidence:[

    "Sudden blindness",

    "Painful ocular disease",

    "Normal retinal examination"

  ],

  classicFindings:[

    "Night blindness",

    "Slow progressive vision loss",

    "Retinal degeneration",

    "Dilated pupils"

  ],

  ruleOutFindings:[

    "Sudden acquired retinal degeneration syndrome (SARDS)",

    "Retinal detachment",

    "Glaucoma",

    "Cataract",

    "Optic neuritis"

  ],

};