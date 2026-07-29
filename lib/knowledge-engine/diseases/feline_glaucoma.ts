import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineGlaucoma: DiseaseCard = {
  id: "feline-glaucoma-cat",

  title: "Feline Glaucoma",

  description:
    "A progressive eye disease in cats caused by increased intraocular pressure, leading to pain, optic nerve damage, and possible blindness.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Glaucoma",
    "Increased Intraocular Pressure",
    "Ocular Hypertension",
    "Secondary Glaucoma",
  ],

  overview:
    "Glaucoma occurs when the pressure inside the eye increases due to impaired drainage of aqueous humor. In cats, glaucoma is most commonly secondary to other ocular diseases such as uveitis, lens abnormalities, trauma, or intraocular inflammation. Chronic elevated pressure damages the optic nerve and retina, resulting in vision loss.",

  clinicalProblems:[

    "Increased intraocular pressure",
    "Ocular pain",
    "Optic nerve damage",
    "Vision loss",
    "Eye enlargement",
    "Secondary blindness"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess onset of eye changes, previous uveitis, trauma, medications, and vision changes."
    },

    {
      id:"ocular-exam",
      step:2,
      title:"Complete Ophthalmic Examination",
      description:
        "Evaluate eye appearance, pupil response, cornea, lens, and optic nerve."
    },

    {
      id:"pressure-measurement",
      step:3,
      title:"Measure Intraocular Pressure",
      description:
        "Perform tonometry to confirm increased ocular pressure."
    },

    {
      id:"cause-investigation",
      step:4,
      title:"Identify Underlying Cause",
      description:
        "Determine whether glaucoma is associated with uveitis, trauma, or other ocular disease."
    },

    {
      id:"management",
      step:5,
      title:"Pressure Control and Monitoring",
      description:
        "Reduce intraocular pressure and preserve remaining vision."

    }

  ],

  diagnostics:[

    {
      id:"tonometry",
      name:"Tonometry",
      priority:"Essential",
      reason:
        "Confirms elevated intraocular pressure."
    },

    {
      id:"ocular-examination",
      name:"Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Evaluates ocular structures and complications."
    },

    {
      id:"gonioscopy",
      name:"Gonioscopy",
      priority:"Essential",
      reason:
        "Assesses drainage angle abnormalities."
    },

    {
      id:"ocular-ultrasound",
      name:"Ocular Ultrasound",
      priority:"Recommended",
      reason:
        "Evaluates intraocular structures when visualization is limited."

    }

  ],

  drugCategories:[

    {
      category:"Intraocular Pressure Reduction",
      indication:"Elevated eye pressure",
      reason:
        "Decreases aqueous humor production or improves drainage."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Secondary inflammatory glaucoma",
      reason:
        "Controls underlying inflammation."
    },

    {
      category:"Pain Management",
      indication:"Ocular pain",
      reason:
        "Improves patient comfort."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"dorzolamide",
      priority:"Supportive",
      category:"Intraocular Pressure Reduction"
    },

    {
      drugId:"timolol",
      priority:"Supportive",
      category:"Intraocular Pressure Reduction"

    }

  ],

  stabilization:[

    "Measure intraocular pressure immediately.",
    "Control ocular pain.",
    "Determine if vision is present.",
    "Treat underlying ocular disease.",
    "Monitor pressure response."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Previous uveitis", weight:75 },

      { finding:"Eye trauma", weight:60 },

      { finding:"Previous ocular disease", weight:70 },

      { finding:"Chronic eye inflammation", weight:65 }

    ],

    clinicalSigns:[

      { finding:"Elevated intraocular pressure", weight:95 },

      { finding:"Eye pain", weight:85 },

      { finding:"Dilated pupil", weight:75 },

      { finding:"Cloudy cornea", weight:70 },

      { finding:"Red eye", weight:60 },

      { finding:"Vision loss", weight:80 },

      { finding:"Enlarged eyeball (buphthalmos)", weight:70 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Changes due to underlying systemic disease", weight:25 }

    ],

    imaging:[

      { finding:"Optic nerve abnormalities", weight:60 },

      { finding:"Intraocular structural changes", weight:55 }

    ],

    supports:[

      { finding:"High intraocular pressure", weight:95 },

      { finding:"Optic nerve damage", weight:85 },

      { finding:"Painful enlarged eye", weight:80 },

      { finding:"Secondary ocular disease", weight:75 }

    ],

    against:[

      { finding:"Normal intraocular pressure", weight:-70 },

      { finding:"No ocular abnormalities", weight:-50 },

      { finding:"Alternative ocular disease confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"pressure",
      parameter:"Intraocular pressure",
      frequency:"Frequent monitoring",
      reason:
        "Evaluates pressure control."
    },

    {
      id:"vision",
      parameter:"Vision status",
      frequency:"Regular assessment",
      reason:
        "Determines progression of optic nerve damage."
    },

    {
      id:"pain",
      parameter:"Ocular discomfort",
      frequency:"Regular assessment",
      reason:
        "Monitors quality of life."

    }

  ],

  precautions:[

    {
      id:"emergency",
      title:"Ocular Emergency",
      description:
        "Sudden glaucoma can rapidly cause irreversible blindness if pressure is not controlled."
    },

    {
      id:"secondary",
      title:"Usually Secondary in Cats",
      description:
        "Underlying diseases such as uveitis should always be investigated."

    }

  ],

  prognosis:
    "Prognosis depends on severity, duration of increased pressure, and whether vision remains. Early intervention provides the best chance of preserving vision and comfort.",

  strengtheningEvidence:[

    "High intraocular pressure",

    "Painful eye",

    "Optic nerve damage",

    "Vision changes"

  ],

  weakeningEvidence:[

    "Normal tonometry",

    "No ocular abnormalities",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Painful enlarged eye",

    "High intraocular pressure",

    "Dilated pupil",

    "Cloudy cornea"

  ],

  ruleOutFindings:[

    "Anterior uveitis",

    "Corneal ulcer",

    "Lens luxation",

    "Conjunctivitis",

    "Ocular tumour"

  ],

};