import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineAnteriorUveitis: DiseaseCard = {
  id: "canine-anterior-uveitis-dog",

  title: "Canine Anterior Uveitis",

  description:
    "An inflammatory disease of the anterior uveal tract involving the iris and ciliary body, causing ocular pain, inflammation, and potential vision impairment.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Anterior Uveitis",
    "Iritis",
    "Iridocyclitis",
    "Inflammation of Uveal Tract",
  ],

  overview:
    "Canine anterior uveitis is inflammation of the iris and ciliary body caused by infectious, immune-mediated, traumatic, metabolic, or neoplastic conditions. Inflammation disrupts normal ocular function and may lead to complications such as glaucoma, cataract formation, retinal damage, and vision loss. Identifying the underlying cause is important because uveitis may be a manifestation of systemic disease.",

  clinicalProblems: [

    "Ocular inflammation",
    "Eye pain",
    "Reduced vision",
    "Aqueous flare",
    "Secondary glaucoma risk",
    "Secondary cataract risk"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess onset, trauma, systemic illness, infectious exposure, and previous eye problems."
    },

    {
      id:"ophthalmic-exam",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate ocular inflammation, pupil changes, and anterior chamber abnormalities."
    },

    {
      id:"pressure-assessment",
      step:3,
      title:"Intraocular Pressure Assessment",
      description:
        "Measure eye pressure to differentiate uveitis from glaucoma and detect complications."
    },

    {
      id:"cause-investigation",
      step:4,
      title:"Underlying Cause Investigation",
      description:
        "Evaluate infectious, immune-mediated, traumatic, or systemic causes."
    },

    {
      id:"treatment",
      step:5,
      title:"Anti-inflammatory Management",
      description:
        "Control inflammation and prevent secondary ocular damage."
    }

  ],

  diagnostics: [

    {
      id:"ophthalmic-exam",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Identifies ocular inflammation and associated abnormalities."
    },

    {
      id:"tonometry",
      name:"Intraocular Pressure Measurement",
      priority:"Essential",
      reason:
        "Helps differentiate uveitis from glaucoma and monitors complications."
    },

    {
      id:"slit-lamp",
      name:"Slit Lamp Examination",
      priority:"Recommended",
      reason:
        "Detects anterior chamber inflammation and cellular changes."
    },

    {
      id:"blood-testing",
      name:"Systemic Disease Screening",
      priority:"Recommended",
      reason:
        "Investigates infectious and systemic causes."
    },

    {
      id:"ocular-ultrasound",
      name:"Ocular Ultrasound",
      priority:"Conditional",
      reason:
        "Evaluates posterior structures when visibility is reduced."
    }

  ],

  drugCategories:[

    {
      category:"Topical Anti-inflammatory Therapy",
      indication:"Anterior ocular inflammation",
      reason:
        "Reduces inflammation within the eye."
    },

    {
      category:"Systemic Anti-inflammatory Therapy",
      indication:"Severe or immune-mediated inflammation",
      reason:
        "Controls deeper ocular inflammation."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Infectious uveitis",
      reason:
        "Targets underlying infectious causes."
    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone-acetate",
      priority:"First Line",
      category:"Corticosteroid"
    },

    {
      drugId:"atropine",
      priority:"Supportive",
      category:"Mydriatic"
    }

  ],

  stabilization:[

    "Control ocular pain.",
    "Reduce intraocular inflammation.",
    "Measure intraocular pressure.",
    "Investigate underlying systemic disease.",
    "Prevent secondary complications."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Recent eye trauma", weight:45 },

      { finding:"Systemic infectious disease risk", weight:40 },

      { finding:"Immune-mediated disease history", weight:35 },

      { finding:"Sudden onset ocular signs", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Red eye", weight:45 },

      { finding:"Ocular pain", weight:55 },

      { finding:"Squinting (blepharospasm)", weight:50 },

      { finding:"Constriction of pupil (miosis)", weight:45 },

      { finding:"Cloudy anterior chamber", weight:55 },

      { finding:"Light sensitivity", weight:35 }

    ],

    biochemistry:[

      { finding:"Systemic inflammatory changes", weight:25 },

      { finding:"Changes related to underlying disease", weight:30 }

    ],

    imaging:[

      { finding:"Anterior chamber abnormalities", weight:50 },

      { finding:"Ocular ultrasound changes", weight:30 }

    ],

    supports:[

      { finding:"Aqueous flare", weight:70 },

      { finding:"Low intraocular pressure with inflammation", weight:55 },

      { finding:"Painful red eye", weight:60 },

      { finding:"Miosis", weight:45 }

    ],

    against:[

      { finding:"Normal ophthalmic examination", weight:-50 },

      { finding:"High intraocular pressure as primary finding", weight:-30 },

      { finding:"No ocular discomfort or inflammation", weight:-35 }

    ],

  },

  monitoring:[

    {
      id:"iop",
      parameter:"Intraocular pressure",
      frequency:"Regular follow-up",
      reason:
        "Detects secondary glaucoma."
    },

    {
      id:"inflammation",
      parameter:"Ocular inflammation",
      frequency:"Daily during treatment",
      reason:
        "Evaluates response to therapy."
    },

    {
      id:"vision",
      parameter:"Visual function",
      frequency:"Follow-up",
      reason:
        "Monitors vision preservation."

    }

  ],

  precautions:[

    {
      id:"glaucoma-risk",
      title:"Secondary Glaucoma Risk",
      description:
        "Inflammation can interfere with aqueous drainage and increase eye pressure."
    },

    {
      id:"underlying-disease",
      title:"Systemic Disease Association",
      description:
        "Uveitis may indicate infectious, immune-mediated, or systemic disease."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause, severity, and speed of treatment. Early management improves the chance of preserving vision.",

  strengtheningEvidence:[

    "Painful red eye",

    "Aqueous flare",

    "Miosis",

    "Low intraocular pressure",

    "Ocular inflammation"

  ],

  weakeningEvidence:[

    "Normal eye examination",

    "No inflammation",

    "Primary glaucoma signs"

  ],

  classicFindings:[

    "Red painful eye",

    "Squinting",

    "Small pupil",

    "Cloudy anterior chamber",

    "Low eye pressure"

  ],

  ruleOutFindings:[

    "Glaucoma",

    "Corneal ulcer",

    "Conjunctivitis",

    "Lens luxation",

    "Endophthalmitis"

  ],

};