import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineCataract: DiseaseCard = {
  id: "feline-cataract-cat",

  title: "Feline Cataract",

  description:
    "A condition characterized by partial or complete opacity of the lens of the eye, reducing light transmission and potentially causing vision impairment.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Cataract",
    "Lens Opacity",
    "Feline Lens Degeneration",
    "Cloudy Lens",
  ],

  overview:
    "A cataract occurs when the normally transparent lens becomes cloudy due to structural changes in lens proteins. In cats, cataracts are less common than in dogs and are frequently associated with chronic uveitis, trauma, metabolic disease, nutritional abnormalities, or aging. Cataracts may be mild and non-progressive or may interfere with vision and lead to secondary complications.",

  clinicalProblems:[

    "Lens opacity",
    "Reduced vision",
    "Light scattering",
    "Secondary inflammation",
    "Risk of lens-induced uveitis",
    "Possible blindness"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age, trauma history, previous uveitis, systemic disease, and progression of visual changes."
    },

    {
      id:"ocular-exam",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate lens clarity, pupil response, retina visibility, and other ocular structures."
    },

    {
      id:"cause-investigation",
      step:3,
      title:"Underlying Cause Investigation",
      description:
        "Determine whether cataract is associated with inflammation, trauma, metabolic disease, or aging."
    },

    {
      id:"vision-assessment",
      step:4,
      title:"Vision Assessment",
      description:
        "Evaluate retinal function and visual ability."
    },

    {
      id:"management",
      step:5,
      title:"Management and Monitoring",
      description:
        "Monitor progression and manage associated ocular disease."

    }

  ],

  diagnostics:[

    {
      id:"ophthalmic-exam",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Confirms lens opacity and evaluates other ocular structures."
    },

    {
      id:"slit-lamp",
      name:"Slit Lamp Examination",
      priority:"Recommended",
      reason:
        "Characterizes cataract location and severity."
    },

    {
      id:"ocular-ultrasound",
      name:"Ocular Ultrasound",
      priority:"Recommended",
      reason:
        "Evaluates retina when the lens prevents visualization."
    },

    {
      id:"blood-testing",
      name:"Systemic Evaluation",
      priority:"Recommended",
      reason:
        "Investigates underlying metabolic or systemic disease."

    }

  ],

  drugCategories:[

    {
      category:"Anti-inflammatory Therapy",
      indication:"Lens-associated inflammation",
      reason:
        "Controls secondary uveitis."
    },

    {
      category:"Supportive Ocular Therapy",
      indication:"Ocular surface support",
      reason:
        "Maintains ocular comfort."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"
    }

  ],

  stabilization:[

    "Determine degree of vision impairment.",
    "Evaluate for concurrent uveitis.",
    "Check intraocular pressure.",
    "Identify underlying cause.",
    "Monitor cataract progression."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Previous uveitis", weight:75 },

      { finding:"Eye trauma", weight:65 },

      { finding:"Older age", weight:45 },

      { finding:"Systemic metabolic disease", weight:50 }

    ],

    clinicalSigns:[

      { finding:"Lens opacity", weight:95 },

      { finding:"Cloudy appearance of eye", weight:85 },

      { finding:"Reduced vision", weight:75 },

      { finding:"Abnormal visual behaviour", weight:60 },

      { finding:"Secondary eye inflammation", weight:55 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Changes related to systemic disease", weight:40 }

    ],

    imaging:[

      { finding:"Ultrasound showing lens abnormality", weight:70 },

      { finding:"Retinal abnormalities secondary to disease", weight:50 }

    ],

    supports:[

      { finding:"Visible lens opacity", weight:95 },

      { finding:"Progressive vision impairment", weight:80 },

      { finding:"History of ocular inflammation", weight:75 },

      { finding:"Confirmed lens changes", weight:90 }

    ],

    against:[

      { finding:"Clear normal lens", weight:-70 },

      { finding:"Vision loss without lens abnormality", weight:-30 },

      { finding:"Alternative ocular diagnosis confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"cataract",
      parameter:"Lens opacity progression",
      frequency:"Periodic examination",
      reason:
        "Evaluates disease progression."
    },

    {
      id:"pressure",
      parameter:"Intraocular pressure",
      frequency:"Regular monitoring",
      reason:
        "Detects secondary glaucoma."
    },

    {
      id:"inflammation",
      parameter:"Signs of uveitis",
      frequency:"Follow-up visits",
      reason:
        "Detects inflammatory complications."

    }

  ],

  precautions:[

    {
      id:"uveitis",
      title:"Monitor for Lens-induced Uveitis",
      description:
        "Cataracts may trigger inflammation inside the eye."
    },

    {
      id:"vision",
      title:"Assess Vision Before Treatment Decisions",
      description:
        "Vision outcome depends on retinal and optic nerve function."

    }

  ],

  prognosis:
    "Prognosis depends on cataract severity, underlying cause, and presence of complications. Some cataracts remain stable, while progressive cataracts may affect vision.",

  strengtheningEvidence:[

    "Lens opacity",

    "Reduced vision",

    "Ocular examination findings",

    "History of uveitis or trauma"

  ],

  weakeningEvidence:[

    "Normal lens examination",

    "No visual abnormalities",

    "Alternative cause of vision loss confirmed"

  ],

  classicFindings:[

    "Cloudy lens",

    "Reduced vision",

    "White pupil appearance",

    "Lens opacity"

  ],

  ruleOutFindings:[

    "Nuclear sclerosis",

    "Corneal opacity",

    "Glaucoma",

    "Uveitis",

    "Retinal disease"

  ],

};