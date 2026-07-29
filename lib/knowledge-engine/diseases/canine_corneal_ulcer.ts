import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineCornealUlcer: DiseaseCard = {
  id: "canine-corneal-ulcer-dog",

  title: "Canine Corneal Ulcer",

  description:
    "A defect or loss of the corneal epithelium caused by trauma, infection, tear deficiency, or ocular surface disease, which may progress to corneal perforation if untreated.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Corneal Ulceration",
    "Corneal Erosion",
    "Ulcerative Keratitis",
    "Corneal Defect",
  ],

  overview:
    "Canine corneal ulcer is a painful ocular condition involving damage to the corneal surface. It may result from trauma, foreign bodies, bacterial infection, dry eye disease, eyelid abnormalities, or chemical injury. Superficial ulcers may heal with appropriate treatment, while deep ulcers can progress to stromal loss, corneal melting, rupture, and vision-threatening complications.",

  clinicalProblems: [

    "Corneal epithelial loss",
    "Ocular pain",
    "Inflammation",
    "Vision impairment",
    "Corneal melting",
    "Risk of globe rupture"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess trauma, foreign body exposure, eye rubbing, discharge, previous eye disease, and onset of signs."
    },

    {
      id:"ophthalmic-exam",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate corneal appearance, inflammation, and severity of damage."
    },

    {
      id:"fluorescein-test",
      step:3,
      title:"Corneal Staining",
      description:
        "Identify corneal epithelial defects using fluorescein staining."
    },

    {
      id:"severity-assessment",
      step:4,
      title:"Ulcer Severity Assessment",
      description:
        "Determine superficial, stromal, deep, or melting ulcer involvement."
    },

    {
      id:"treatment",
      step:5,
      title:"Corneal Protection and Treatment",
      description:
        "Prevent infection, control pain, and promote healing."
    }

  ],

  diagnostics: [

    {
      id:"fluorescein-staining",
      name:"Fluorescein Staining",
      priority:"Essential",
      reason:
        "Confirms corneal epithelial defects."
    },

    {
      id:"ophthalmic-examination",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Evaluates ulcer depth and associated ocular disease."
    },

    {
      id:"tonometry",
      name:"Intraocular Pressure Measurement",
      priority:"Recommended",
      reason:
        "Assesses secondary glaucoma risk."
    },

    {
      id:"corneal-cytology",
      name:"Corneal Cytology",
      priority:"Conditional",
      reason:
        "Evaluates infectious or inflammatory components."
    },

    {
      id:"culture",
      name:"Corneal Culture",
      priority:"Conditional",
      reason:
        "Identifies bacterial organisms in complicated ulcers."
    }

  ],

  drugCategories:[

    {
      category:"Topical Antimicrobial Therapy",
      indication:"Prevent or treat bacterial infection",
      reason:
        "Reduces risk of infectious keratitis."
    },

    {
      category:"Pain Management",
      indication:"Ocular discomfort",
      reason:
        "Controls pain associated with corneal injury."
    },

    {
      category:"Tear Support Therapy",
      indication:"Poor ocular surface protection",
      reason:
        "Improves corneal lubrication."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"ciprofloxacin",
      priority:"Supportive",
      category:"Antibiotic"
    },

    {
      drugId:"atropine",
      priority:"Supportive",
      category:"Mydriatic"
    }

  ],

  stabilization:[

    "Prevent self-trauma using an Elizabethan collar.",
    "Control ocular pain.",
    "Treat secondary infection risk.",
    "Assess ulcer depth.",
    "Refer deep or melting ulcers for surgical management."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Eye trauma", weight:50 },

      { finding:"Foreign body exposure", weight:45 },

      { finding:"Dry eye history", weight:45 },

      { finding:"Eyelid abnormality", weight:35 },

      { finding:"Recent ocular surgery", weight:30 }

    ],

    clinicalSigns:[

      { finding:"Squinting (blepharospasm)", weight:60 },

      { finding:"Eye pain", weight:55 },

      { finding:"Excessive tearing", weight:45 },

      { finding:"Red conjunctiva", weight:45 },

      { finding:"Corneal cloudiness", weight:50 },

      { finding:"Pawing at eye", weight:40 }

    ],

    biochemistry:[

      { finding:"Usually no specific blood abnormalities", weight:5 }

    ],

    imaging:[

      { finding:"Corneal defect on examination", weight:70 },

      { finding:"Corneal thinning on advanced evaluation", weight:50 }

    ],

    supports:[

      { finding:"Positive fluorescein staining", weight:80 },

      { finding:"Painful red eye", weight:60 },

      { finding:"Visible corneal defect", weight:70 },

      { finding:"History of trauma", weight:45 }

    ],

    against:[

      { finding:"Negative fluorescein staining", weight:-50 },

      { finding:"No ocular discomfort", weight:-30 },

      { finding:"Normal cornea", weight:-60 }

    ],

  },

  monitoring:[

    {
      id:"ulcer-size",
      parameter:"Corneal ulcer size and healing",
      frequency:"Regular ophthalmic follow-up",
      reason:
        "Ensures healing progression."
    },

    {
      id:"pain",
      parameter:"Ocular pain",
      frequency:"Daily",
      reason:
        "Evaluates comfort and recovery."
    },

    {
      id:"infection",
      parameter:"Discharge and corneal appearance",
      frequency:"Daily",
      reason:
        "Detects worsening infection."

    }

  ],

  precautions:[

    {
      id:"steroids",
      title:"Avoid Topical Steroids",
      description:
        "Corticosteroids may worsen corneal ulcers and delay healing."
    },

    {
      id:"emergency",
      title:"Deep Ulcer Emergency",
      description:
        "Deep or melting ulcers can rapidly progress to corneal rupture."
    }

  ],

  prognosis:
    "Prognosis depends on ulcer depth and underlying cause. Superficial ulcers usually heal well, while deep ulcers require intensive management and may threaten vision.",

  strengtheningEvidence:[

    "Positive fluorescein staining",

    "Eye pain",

    "Corneal defect",

    "Trauma history",

    "Excessive tearing"

  ],

  weakeningEvidence:[

    "Negative fluorescein test",

    "No corneal abnormality",

    "Alternative cause of eye discomfort identified"

  ],

  classicFindings:[

    "Squinting",

    "Painful red eye",

    "Tearing",

    "Fluorescein positive corneal defect",

    "Cloudy cornea"

  ],

  ruleOutFindings:[

    "Keratoconjunctivitis sicca",

    "Uveitis",

    "Glaucoma",

    "Conjunctivitis",

    "Corneal foreign body"

  ],

};