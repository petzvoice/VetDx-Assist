import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineGlaucoma: DiseaseCard = {
  id: "canine-glaucoma-dog",

  title: "Canine Glaucoma",

  description:
    "A vision-threatening ocular disease characterized by increased intraocular pressure causing damage to the optic nerve and retina.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Increased Intraocular Pressure",
    "Canine Ocular Hypertension",
    "Optic Nerve Damage Due to Glaucoma",
  ],

  overview:
    "Canine glaucoma occurs when drainage of aqueous humor from the eye is impaired, resulting in increased intraocular pressure (IOP). Persistent elevation of pressure damages the optic nerve and retina, leading to irreversible blindness. Glaucoma may be primary due to inherited abnormalities of the drainage angle or secondary to conditions such as uveitis, lens luxation, trauma, or intraocular tumors.",

  clinicalProblems: [

    "Increased intraocular pressure",
    "Optic nerve damage",
    "Vision loss",
    "Ocular pain",
    "Corneal edema",
    "Retinal degeneration"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess onset of vision loss, eye pain, previous ocular disease, trauma, and breed predisposition."
    },

    {
      id:"ophthalmic-exam",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate globe appearance, pupil response, cornea, and anterior chamber."
    },

    {
      id:"pressure-measurement",
      step:3,
      title:"Intraocular Pressure Assessment",
      description:
        "Measure IOP using tonometry to confirm glaucoma."
    },

    {
      id:"cause-identification",
      step:4,
      title:"Determine Underlying Cause",
      description:
        "Differentiate primary glaucoma from secondary causes."
    },

    {
      id:"emergency-management",
      step:5,
      title:"Emergency Pressure Reduction",
      description:
        "Rapidly reduce intraocular pressure to preserve vision."
    }

  ],

  diagnostics: [

    {
      id:"tonometry",
      name:"Tonometry",
      priority:"Essential",
      reason:
        "Measures intraocular pressure and confirms glaucoma."
    },

    {
      id:"gonioscopy",
      name:"Gonioscopy",
      priority:"Recommended",
      reason:
        "Evaluates the drainage angle and helps classify glaucoma."
    },

    {
      id:"ophthalmic-exam",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Assesses ocular damage and associated disease."
    },

    {
      id:"ocular-ultrasound",
      name:"Ocular Ultrasound",
      priority:"Conditional",
      reason:
        "Evaluates intraocular structures when visualization is impaired."
    },

    {
      id:"retinal-assessment",
      name:"Retinal Function Assessment",
      priority:"Recommended",
      reason:
        "Determines visual potential."

    }

  ],

  drugCategories:[

    {
      category:"IOP Lowering Therapy",
      indication:"Acute glaucoma",
      reason:
        "Reduces intraocular pressure to protect vision."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Secondary inflammatory glaucoma",
      reason:
        "Controls ocular inflammation."
    }

  ],

  recommendedDrugs:[

    {
      drugId:"dorzolamide",
      priority:"First Line",
      category:"Carbonic Anhydrase Inhibitor"
    },

    {
      drugId:"timolol",
      priority:"Supportive",
      category:"Beta Blocker"
    }

  ],

  stabilization:[

    "Reduce intraocular pressure immediately.",
    "Assess vision status.",
    "Control ocular pain.",
    "Identify and treat underlying cause.",
    "Refer for surgical options when indicated."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Sudden vision loss", weight:55 },

      { finding:"Previous eye disease", weight:40 },

      { finding:"Breed predisposition", weight:35 },

      { finding:"History of trauma", weight:30 },

      { finding:"Previous uveitis", weight:35 }

    ],

    clinicalSigns:[

      { finding:"Painful eye", weight:55 },

      { finding:"Red eye", weight:45 },

      { finding:"Dilated pupil", weight:45 },

      { finding:"Cloudy cornea", weight:55 },

      { finding:"Vision loss", weight:65 },

      { finding:"Enlarged globe (buphthalmos)", weight:45 }

    ],

    biochemistry:[

      { finding:"Usually no specific blood abnormalities", weight:5 }

    ],

    imaging:[

      { finding:"Increased intraocular pressure", weight:75 },

      { finding:"Optic nerve changes", weight:45 },

      { finding:"Ocular ultrasound abnormalities", weight:30 }

    ],

    supports:[

      { finding:"Elevated intraocular pressure", weight:80 },

      { finding:"Vision loss with painful eye", weight:65 },

      { finding:"Corneal edema", weight:50 },

      { finding:"Optic nerve damage", weight:60 }

    ],

    against:[

      { finding:"Normal intraocular pressure", weight:-50 },

      { finding:"No ocular abnormalities", weight:-40 },

      { finding:"Vision loss with normal eye pressure", weight:-25 }

    ],

  },

  monitoring:[

    {
      id:"iop",
      parameter:"Intraocular pressure",
      frequency:"Frequent monitoring",
      reason:
        "Evaluates response to therapy."
    },

    {
      id:"vision",
      parameter:"Visual function",
      frequency:"Regular follow-up",
      reason:
        "Determines progression of optic nerve damage."
    },

    {
      id:"pain",
      parameter:"Ocular discomfort",
      frequency:"Daily during acute disease",
      reason:
        "Assesses pain control."

    }

  ],

  precautions:[

    {
      id:"emergency",
      title:"Ocular Emergency",
      description:
        "Acute glaucoma can cause irreversible blindness if pressure is not reduced quickly."
    },

    {
      id:"bilateral-risk",
      title:"Risk to Other Eye",
      description:
        "Primary glaucoma may affect both eyes; monitoring of the opposite eye is important."
    }

  ],

  prognosis:
    "Prognosis depends on duration of increased pressure and remaining retinal function. Early treatment may preserve vision, while chronic glaucoma often results in irreversible blindness.",

  strengtheningEvidence:[

    "Elevated intraocular pressure",

    "Painful red eye",

    "Vision loss",

    "Corneal edema",

    "Optic nerve changes"

  ],

  weakeningEvidence:[

    "Normal intraocular pressure",

    "No ocular pain",

    "Alternative cause of vision loss identified"

  ],

  classicFindings:[

    "Painful eye",

    "Cloudy cornea",

    "High intraocular pressure",

    "Vision loss",

    "Dilated pupil"

  ],

  ruleOutFindings:[

    "Uveitis",

    "Lens luxation",

    "Cataract",

    "Corneal ulcer",

    "Retinal disease"

  ],

};