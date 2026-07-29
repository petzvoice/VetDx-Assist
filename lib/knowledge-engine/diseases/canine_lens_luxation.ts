import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineLensLuxation: DiseaseCard = {
  id: "canine-lens-luxation-dog",

  title: "Canine Lens Luxation",

  description:
    "A displacement of the crystalline lens from its normal anatomical position due to zonular weakness, trauma, or secondary ocular disease.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Lens Displacement",
    "Lens Subluxation",
    "Lens Dislocation",
  ],

  overview:
    "Canine lens luxation occurs when the supporting zonular fibers that hold the lens in position become weakened or damaged, causing the lens to move from its normal location. Lens movement may occur forward into the anterior chamber or backward into the vitreous chamber. Anterior lens luxation is an ocular emergency because it can rapidly increase intraocular pressure and cause glaucoma.",

  clinicalProblems: [

    "Lens displacement",
    "Secondary glaucoma",
    "Ocular pain",
    "Vision impairment",
    "Corneal edema",
    "Uveitis"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess sudden vision changes, eye pain, trauma, breed predisposition, and previous eye disease."
    },

    {
      id:"ophthalmic-exam",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate lens position, anterior chamber, and ocular inflammation."
    },

    {
      id:"pressure-check",
      step:3,
      title:"Intraocular Pressure Assessment",
      description:
        "Measure eye pressure to detect secondary glaucoma."
    },

    {
      id:"lens-assessment",
      step:4,
      title:"Lens Position Assessment",
      description:
        "Determine whether lens displacement is anterior, posterior, or partial."
    },

    {
      id:"management",
      step:5,
      title:"Treatment Planning",
      description:
        "Manage pressure, inflammation, and consider surgical intervention."

    }

  ],

  diagnostics: [

    {
      id:"ophthalmic-exam",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Identifies abnormal lens position and associated ocular disease."
    },

    {
      id:"tonometry",
      name:"Intraocular Pressure Measurement",
      priority:"Essential",
      reason:
        "Detects glaucoma caused by lens displacement."
    },

    {
      id:"slit-lamp",
      name:"Slit Lamp Examination",
      priority:"Recommended",
      reason:
        "Evaluates lens position and anterior chamber changes."
    },

    {
      id:"ocular-ultrasound",
      name:"Ocular Ultrasound",
      priority:"Conditional",
      reason:
        "Assesses lens and posterior eye structures when visualization is limited."

    }

  ],

  drugCategories:[

    {
      category:"IOP Lowering Therapy",
      indication:"Secondary glaucoma",
      reason:
        "Reduces increased intraocular pressure."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Lens-induced uveitis",
      reason:
        "Controls ocular inflammation."
    }

  ],

  recommendedDrugs:[

    {
      drugId:"dorzolamide",
      priority:"Supportive",
      category:"Carbonic Anhydrase Inhibitor"
    },

    {
      drugId:"prednisolone-acetate",
      priority:"Supportive",
      category:"Corticosteroid"
    }

  ],

  stabilization:[

    "Measure intraocular pressure immediately.",
    "Control ocular pain.",
    "Reduce inflammation.",
    "Assess visual potential.",
    "Refer surgical cases when appropriate."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Sudden vision impairment", weight:55 },

      { finding:"Breed predisposition", weight:45 },

      { finding:"Previous eye trauma", weight:35 },

      { finding:"Previous glaucoma or ocular disease", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Abnormally positioned lens", weight:80 },

      { finding:"Painful eye", weight:50 },

      { finding:"Cloudy cornea", weight:45 },

      { finding:"Red eye", weight:40 },

      { finding:"Vision loss", weight:55 },

      { finding:"Dilated pupil", weight:35 }

    ],

    biochemistry:[

      { finding:"Usually no specific blood abnormalities", weight:5 }

    ],

    imaging:[

      { finding:"Lens displacement on ophthalmic examination", weight:80 },

      { finding:"Ultrasound evidence of lens position", weight:40 }

    ],

    supports:[

      { finding:"Abnormal lens location", weight:85 },

      { finding:"Elevated intraocular pressure", weight:55 },

      { finding:"Acute painful eye", weight:45 },

      { finding:"Breed predisposition", weight:40 }

    ],

    against:[

      { finding:"Normal lens position", weight:-60 },

      { finding:"No ocular abnormalities", weight:-50 },

      { finding:"Alternative cause of vision loss", weight:-30 }

    ],

  },

  monitoring:[

    {
      id:"iop",
      parameter:"Intraocular pressure",
      frequency:"Frequent monitoring",
      reason:
        "Detects secondary glaucoma."
    },

    {
      id:"lens",
      parameter:"Lens position",
      frequency:"Regular ophthalmic evaluation",
      reason:
        "Monitors progression."
    },

    {
      id:"pain",
      parameter:"Ocular discomfort",
      frequency:"Daily during acute disease",
      reason:
        "Evaluates pain control."

    }

  ],

  precautions:[

    {
      id:"emergency",
      title:"Anterior Lens Luxation Emergency",
      description:
        "Forward displacement of the lens can rapidly cause glaucoma and permanent blindness."
    },

    {
      id:"breeding",
      title:"Inherited Risk",
      description:
        "Primary lens luxation may have a hereditary component in predisposed breeds."
    }

  ],

  prognosis:
    "Prognosis depends on lens position, duration, intraocular pressure, and remaining vision. Early intervention improves the chance of preserving vision.",

  strengtheningEvidence:[

    "Displaced lens",

    "High intraocular pressure",

    "Painful eye",

    "Sudden vision loss",

    "Breed predisposition"

  ],

  weakeningEvidence:[

    "Normal lens position",

    "No ocular abnormalities",

    "Alternative cause of blindness"

  ],

  classicFindings:[

    "Lens displacement",

    "Painful red eye",

    "Vision reduction",

    "Secondary glaucoma"

  ],

  ruleOutFindings:[

    "Cataract",

    "Glaucoma",

    "Uveitis",

    "Retinal disease",

    "Corneal ulcer"

  ],

};