import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineCataract: DiseaseCard = {
  id: "canine-cataract-dog",

  title: "Canine Cataract",

  description:
    "A progressive or non-progressive opacity of the lens of the eye causing reduced vision and potential blindness in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Lens Opacity",
    "Cataract Formation",
    "Canine Lens Cataract",
  ],

  overview:
    "Canine cataract is an abnormal opacity of the crystalline lens that interferes with light transmission to the retina. Cataracts may develop due to inherited factors, diabetes mellitus, aging, trauma, inflammation, or metabolic disorders. Depending on severity and progression, cataracts can cause partial vision impairment or complete blindness. Surgical removal of the affected lens is the definitive treatment in suitable patients.",

  clinicalProblems: [

    "Lens opacity",
    "Reduced vision",
    "Blindness",
    "Secondary glaucoma risk",
    "Lens-induced uveitis",
    "Ocular inflammation"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess onset of vision changes, age, breed predisposition, trauma, diabetes history, and progression."
    },

    {
      id:"ophthalmic-examination",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate lens opacity and assess overall eye health."
    },

    {
      id:"vision-assessment",
      step:3,
      title:"Vision Assessment",
      description:
        "Determine degree of visual impairment and functional vision status."
    },

    {
      id:"underlying-cause",
      step:4,
      title:"Underlying Disease Evaluation",
      description:
        "Investigate metabolic, inflammatory, or hereditary causes."
    },

    {
      id:"management",
      step:5,
      title:"Treatment Planning",
      description:
        "Determine medical management or surgical suitability."
    }

  ],

  diagnostics: [

    {
      id:"ophthalmic-exam",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Confirms lens opacity and evaluates associated ocular disease."
    },

    {
      id:"slit-lamp",
      name:"Slit Lamp Examination",
      priority:"Recommended",
      reason:
        "Characterizes cataract location and severity."
    },

    {
      id:"tonometry",
      name:"Intraocular Pressure Measurement",
      priority:"Essential",
      reason:
        "Screens for secondary glaucoma."
    },

    {
      id:"ocular-ultrasound",
      name:"Ocular Ultrasound",
      priority:"Conditional",
      reason:
        "Evaluates posterior eye structures when lens opacity prevents visualization."
    },

    {
      id:"blood-glucose",
      name:"Blood Glucose Testing",
      priority:"Recommended",
      reason:
        "Evaluates diabetes-associated cataract."
    }

  ],

  drugCategories:[

    {
      category:"Anti-inflammatory Therapy",
      indication:"Lens-induced inflammation",
      reason:
        "Controls secondary ocular inflammation."
    },

    {
      category:"Supportive Ophthalmic Therapy",
      indication:"Ocular comfort",
      reason:
        "Manages associated eye irritation."
    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone-acetate",
      priority:"Supportive",
      category:"Corticosteroid"
    }

  ],

  stabilization:[

    "Assess vision status.",
    "Control secondary ocular inflammation.",
    "Evaluate intraocular pressure.",
    "Investigate underlying diseases such as diabetes.",
    "Refer suitable patients for cataract surgery evaluation."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Progressive vision loss", weight:50 },

      { finding:"Older age", weight:30 },

      { finding:"Diabetes mellitus", weight:55 },

      { finding:"Breed predisposition", weight:35 },

      { finding:"Previous eye trauma", weight:30 }

    ],

    clinicalSigns:[

      { finding:"White or cloudy appearance of lens", weight:70 },

      { finding:"Vision impairment", weight:60 },

      { finding:"Bumping into objects", weight:45 },

      { finding:"Reduced navigation ability", weight:40 },

      { finding:"Ocular discomfort due to inflammation", weight:30 }

    ],

    biochemistry:[

      { finding:"Hyperglycemia", weight:45 },

      { finding:"Diabetes-associated metabolic changes", weight:35 }

    ],

    imaging:[

      { finding:"Lens opacity on ophthalmic examination", weight:70 },

      { finding:"Posterior segment evaluation by ultrasound", weight:30 }

    ],

    supports:[

      { finding:"Lens opacity confirmed", weight:75 },

      { finding:"Progressive vision loss", weight:55 },

      { finding:"Diabetes history", weight:45 },

      { finding:"Breed-associated cataract risk", weight:35 }

    ],

    against:[

      { finding:"Normal lens examination", weight:-50 },

      { finding:"Acute painful red eye without lens opacity", weight:-30 },

      { finding:"Normal vision with no lens changes", weight:-35 }

    ],

  },

  monitoring:[

    {
      id:"vision",
      parameter:"Visual function",
      frequency:"Regular follow-up",
      reason:
        "Monitors progression of vision impairment."
    },

    {
      id:"pressure",
      parameter:"Intraocular pressure",
      frequency:"Follow-up",
      reason:
        "Detects secondary glaucoma."
    },

    {
      id:"inflammation",
      parameter:"Signs of ocular inflammation",
      frequency:"Regular assessment",
      reason:
        "Monitors lens-induced uveitis."

    }

  ],

  precautions:[

    {
      id:"glaucoma",
      title:"Secondary Glaucoma Risk",
      description:
        "Advanced cataracts may contribute to glaucoma development."
    },

    {
      id:"surgery",
      title:"Surgical Evaluation",
      description:
        "Cataract surgery requires assessment of retinal function and ocular health."
    }

  ],

  prognosis:
    "Prognosis depends on cataract cause, progression, and presence of complications. Surgical treatment can restore vision in suitable cases.",

  strengtheningEvidence:[

    "Lens opacity",

    "Progressive vision loss",

    "Diabetes mellitus",

    "Ophthalmic confirmation"

  ],

  weakeningEvidence:[

    "Normal lens examination",

    "No vision impairment",

    "Alternative cause of blindness identified"

  ],

  classicFindings:[

    "Cloudy lens",

    "Vision reduction",

    "Older dog or diabetic dog",

    "Lens opacity"

  ],

  ruleOutFindings:[

    "Nuclear sclerosis",

    "Glaucoma",

    "Retinal disease",

    "Uveitis",

    "Corneal opacity"

  ],

};