import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineLensLuxation: DiseaseCard = {
  id: "feline-lens-luxation-cat",

  title: "Feline Lens Luxation",

  description:
    "A displacement of the crystalline lens from its normal position within the eye, which may cause pain, glaucoma, inflammation, and vision impairment.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Lens Luxation",
    "Lens Subluxation",
    "Dislocated Lens",
    "Feline Lens Displacement",
  ],

  overview:
    "Lens luxation occurs when the lens loses its normal attachment to the zonular fibers and moves partially or completely from its normal position. In cats, lens displacement is often secondary to chronic uveitis, trauma, or intraocular disease rather than primary inherited weakness of the lens support structures. Displaced lenses can obstruct aqueous humor flow and result in secondary glaucoma.",

  clinicalProblems:[

    "Lens displacement",
    "Ocular pain",
    "Secondary glaucoma",
    "Uveitis",
    "Vision impairment",
    "Intraocular inflammation"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess trauma, previous eye inflammation, sudden vision changes, and history of ocular disease."
    },

    {
      id:"ocular-exam",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate lens position, pupil response, cornea, anterior chamber, and intraocular structures."
    },

    {
      id:"pressure-check",
      step:3,
      title:"Intraocular Pressure Assessment",
      description:
        "Measure eye pressure to detect secondary glaucoma."
    },

    {
      id:"cause-investigation",
      step:4,
      title:"Underlying Cause Investigation",
      description:
        "Identify trauma, uveitis, or other ocular disorders causing lens instability."
    },

    {
      id:"management",
      step:5,
      title:"Treatment and Monitoring",
      description:
        "Control inflammation, pressure changes, and preserve comfort and vision."

    }

  ],

  diagnostics:[

    {
      id:"ophthalmic-exam",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Identifies abnormal lens position and associated eye disease."
    },

    {
      id:"tonometry",
      name:"Tonometry",
      priority:"Essential",
      reason:
        "Detects secondary glaucoma."
    },

    {
      id:"ocular-ultrasound",
      name:"Ocular Ultrasound",
      priority:"Recommended",
      reason:
        "Evaluates lens and posterior eye structures when visualization is limited."
    },

    {
      id:"slit-lamp",
      name:"Slit Lamp Examination",
      priority:"Recommended",
      reason:
        "Assesses anterior chamber and lens abnormalities."

    }

  ],

  drugCategories:[

    {
      category:"Anti-inflammatory Therapy",
      indication:"Associated uveitis",
      reason:
        "Controls intraocular inflammation."
    },

    {
      category:"Intraocular Pressure Reduction",
      indication:"Secondary glaucoma",
      reason:
        "Reduces elevated eye pressure."
    },

    {
      category:"Pain Management",
      indication:"Ocular discomfort",
      reason:
        "Improves patient comfort."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"
    },

    {
      drugId:"dorzolamide",
      priority:"Supportive",
      category:"Intraocular Pressure Reduction"

    }

  ],

  stabilization:[

    "Determine if vision is present.",
    "Measure intraocular pressure.",
    "Control ocular pain.",
    "Treat associated inflammation.",
    "Monitor for glaucoma development."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Previous uveitis", weight:75 },

      { finding:"Eye trauma", weight:65 },

      { finding:"Chronic intraocular disease", weight:70 },

      { finding:"Sudden vision change", weight:60 }

    ],

    clinicalSigns:[

      { finding:"Abnormal lens position", weight:95 },

      { finding:"Ocular pain", weight:75 },

      { finding:"Red eye", weight:55 },

      { finding:"Cloudy eye", weight:65 },

      { finding:"Vision impairment", weight:70 },

      { finding:"Dilated or abnormal pupil", weight:60 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Changes due to systemic disease", weight:30 }

    ],

    imaging:[

      { finding:"Ultrasound evidence of displaced lens", weight:85 },

      { finding:"Intraocular abnormalities", weight:60 }

    ],

    supports:[

      { finding:"Lens displacement on examination", weight:95 },

      { finding:"Secondary glaucoma", weight:75 },

      { finding:"History of uveitis or trauma", weight:80 },

      { finding:"Abnormal intraocular anatomy", weight:85 }

    ],

    against:[

      { finding:"Normal lens position", weight:-70 },

      { finding:"Normal ocular examination", weight:-60 },

      { finding:"Alternative diagnosis confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"pressure",
      parameter:"Intraocular pressure",
      frequency:"Frequent monitoring",
      reason:
        "Detects glaucoma development."
    },

    {
      id:"inflammation",
      parameter:"Intraocular inflammation",
      frequency:"Regular follow-up",
      reason:
        "Evaluates response to therapy."
    },

    {
      id:"vision",
      parameter:"Visual function",
      frequency:"Regular assessment",
      reason:
        "Monitors vision preservation."

    }

  ],

  precautions:[

    {
      id:"glaucoma",
      title:"Risk of Secondary Glaucoma",
      description:
        "A displaced lens can obstruct aqueous humor drainage and rapidly increase eye pressure."
    },

    {
      id:"emergency",
      title:"Urgent Evaluation Required",
      description:
        "Sudden lens displacement with pain or pressure elevation requires immediate ophthalmic attention."

    }

  ],

  prognosis:
    "Prognosis depends on lens position, presence of glaucoma, underlying cause, and remaining vision. Early diagnosis improves the chance of preserving ocular comfort.",

  strengtheningEvidence:[

    "Visible lens displacement",

    "Abnormal pupil appearance",

    "High intraocular pressure",

    "History of ocular inflammation"

  ],

  weakeningEvidence:[

    "Normal lens position",

    "Normal tonometry",

    "Alternative ocular disease confirmed"

  ],

  classicFindings:[

    "Displaced lens",

    "Painful eye",

    "Vision changes",

    "Secondary glaucoma"

  ],

  ruleOutFindings:[

    "Anterior uveitis",

    "Glaucoma",

    "Cataract",

    "Corneal disease",

    "Ocular trauma"

  ],

};