import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineRetinalDegeneration: DiseaseCard = {
  id: "feline-retinal-degeneration-cat",

  title: "Feline Retinal Degeneration",

  description:
    "A progressive disorder involving degeneration of retinal photoreceptor cells, leading to gradual vision impairment and possible blindness.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Progressive Retinal Atrophy",
    "Retinal Degeneration",
    "Photoreceptor Degeneration",
    "Feline Retinal Disease",
  ],

  overview:
    "Retinal degeneration involves progressive damage and loss of retinal photoreceptor cells responsible for vision. In cats, retinal degeneration may occur due to inherited disease, nutritional deficiency, toxicity, systemic disease, or age-related changes. Unlike retinal detachment, degeneration is usually a gradual process causing progressive visual decline.",

  clinicalProblems:[

    "Progressive vision loss",
    "Photoreceptor degeneration",
    "Night blindness",
    "Retinal abnormalities",
    "Complete blindness risk"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess progression of vision loss, night vision changes, diet history, toxin exposure, and genetic background."
    },

    {
      id:"ocular-exam",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate retinal appearance, pupil responses, and ocular structures."
    },

    {
      id:"retinal-assessment",
      step:3,
      title:"Retinal Evaluation",
      description:
        "Assess retinal changes using fundic examination."
    },

    {
      id:"cause-investigation",
      step:4,
      title:"Underlying Cause Investigation",
      description:
        "Investigate nutritional, toxic, inherited, and systemic causes."
    },

    {
      id:"management",
      step:5,
      title:"Management and Monitoring",
      description:
        "Monitor progression and improve environmental safety."

    }

  ],

  diagnostics:[

    {
      id:"fundoscopy",
      name:"Fundoscopic Examination",
      priority:"Essential",
      reason:
        "Evaluates retinal structure and degenerative changes."
    },

    {
      id:"electroretinography",
      name:"Electroretinography (ERG)",
      priority:"Recommended",
      reason:
        "Assesses retinal electrical function."
    },

    {
      id:"blood-tests",
      name:"CBC and Serum Biochemistry",
      priority:"Recommended",
      reason:
        "Investigates systemic causes."
    },

    {
      id:"nutritional-evaluation",
      name:"Nutritional Assessment",
      priority:"Recommended",
      reason:
        "Identifies dietary deficiencies contributing to retinal disease."

    }

  ],

  drugCategories:[

    {
      category:"Supportive Management",
      indication:"Progressive retinal disease",
      reason:
        "Maintains quality of life and safety."
    },

    {
      category:"Nutritional Support",
      indication:"Deficiency-associated disease",
      reason:
        "Corrects underlying nutritional abnormalities."

    }

  ],

  recommendedDrugs:[

  ],

  stabilization:[

    "Assess degree of vision loss.",
    "Evaluate retinal function.",
    "Identify reversible causes.",
    "Provide safe indoor environment.",
    "Monitor progression."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Gradual vision loss", weight:80 },

      { finding:"Night vision difficulty", weight:85 },

      { finding:"Nutritional deficiency risk", weight:55 },

      { finding:"Toxin exposure", weight:45 },

      { finding:"Inherited disease history", weight:60 }

    ],

    clinicalSigns:[

      { finding:"Reduced menace response", weight:75 },

      { finding:"Dilated pupils", weight:60 },

      { finding:"Abnormal retinal appearance", weight:90 },

      { finding:"Progressive blindness", weight:85 },

      { finding:"Difficulty navigating environment", weight:80 }

    ],

    biochemistry:[

      { finding:"Changes due to systemic disease", weight:40 },

      { finding:"Nutritional abnormalities", weight:45 }

    ],

    imaging:[

      { finding:"Retinal thinning or structural changes", weight:70 }

    ],

    supports:[

      { finding:"Progressive vision loss", weight:85 },

      { finding:"Retinal degeneration on examination", weight:95 },

      { finding:"Abnormal ERG findings", weight:90 },

      { finding:"No evidence of acute ocular disease", weight:60 }

    ],

    against:[

      { finding:"Normal retinal examination", weight:-70 },

      { finding:"Sudden onset blindness", weight:-30 },

      { finding:"Alternative cause confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"vision",
      parameter:"Visual function",
      frequency:"Periodic assessment",
      reason:
        "Tracks progression of vision loss."
    },

    {
      id:"retina",
      parameter:"Retinal appearance",
      frequency:"Follow-up examination",
      reason:
        "Monitors degenerative changes."
    },

    {
      id:"environment",
      parameter:"Adaptation and safety",
      frequency:"Long-term",
      reason:
        "Ensures quality of life."

    }

  ],

  precautions:[

    {
      id:"safety",
      title:"Environmental Safety",
      description:
        "Cats with progressive blindness require a consistent and safe environment."
    },

    {
      id:"reversible",
      title:"Rule Out Reversible Causes",
      description:
        "Nutritional deficiency and toxic causes should be investigated."

    }

  ],

  prognosis:
    "Retinal degeneration is often progressive and irreversible. Prognosis depends on the underlying cause and degree of retinal damage.",

  strengtheningEvidence:[

    "Progressive vision loss",

    "Retinal degeneration",

    "Abnormal ERG",

    "Gradual onset blindness"

  ],

  weakeningEvidence:[

    "Normal retina",

    "Acute onset blindness",

    "Alternative neurological cause"

  ],

  classicFindings:[

    "Night blindness",

    "Dilated pupils",

    "Retinal degeneration",

    "Progressive vision loss"

  ],

  ruleOutFindings:[

    "Retinal detachment",

    "Glaucoma",

    "Cataract",

    "Optic nerve disease",

    "Uveitis"

  ],

};