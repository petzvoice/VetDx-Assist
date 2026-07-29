import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineCornealUlcer: DiseaseCard = {
  id: "feline-corneal-ulcer-cat",

  title: "Feline Corneal Ulcer",

  description:
    "A painful defect or loss of the corneal surface in cats caused by trauma, infection, tear film disorders, or underlying ocular disease.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Corneal Ulcer",
    "Corneal Erosion",
    "Corneal Defect",
    "Feline Ulcerative Keratitis",
  ],

  overview:
    "Corneal ulcers occur when the protective epithelial layer of the cornea is damaged, exposing deeper corneal tissue. In cats, common causes include feline herpesvirus-associated keratitis, trauma, foreign bodies, eyelid abnormalities, and reduced tear production. Early diagnosis is important because progressive ulcers can lead to corneal melting, perforation, and vision loss.",

  clinicalProblems:[

    "Corneal damage",
    "Ocular pain",
    "Inflammation",
    "Vision impairment risk",
    "Secondary infection",
    "Corneal perforation risk"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess trauma, eye discharge, previous herpesvirus infection, medications, and duration of ocular signs."
    },

    {
      id:"ocular-exam",
      step:2,
      title:"Complete Ophthalmic Examination",
      description:
        "Evaluate cornea, conjunctiva, anterior chamber, pupil response, and ocular pain."
    },

    {
      id:"ulcer-confirmation",
      step:3,
      title:"Corneal Ulcer Detection",
      description:
        "Perform fluorescein staining to identify corneal epithelial defects."
    },

    {
      id:"severity-assessment",
      step:4,
      title:"Ulcer Severity Assessment",
      description:
        "Determine depth, infection risk, and risk of corneal weakening."
    },

    {
      id:"management",
      step:5,
      title:"Treatment and Monitoring",
      description:
        "Protect cornea, control infection, and monitor healing."

    }

  ],

  diagnostics:[

    {
      id:"fluorescein",
      name:"Fluorescein Staining",
      priority:"Essential",
      reason:
        "Confirms presence and extent of corneal epithelial defects."
    },

    {
      id:"ocular-examination",
      name:"Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Assesses ulcer severity and surrounding ocular structures."
    },

    {
      id:"tear-test",
      name:"Schirmer Tear Test",
      priority:"Recommended",
      reason:
        "Evaluates tear production abnormalities."
    },

    {
      id:"cytology",
      name:"Corneal Cytology",
      priority:"Recommended",
      reason:
        "Evaluates infectious organisms and inflammatory cells."

    }

  ],

  drugCategories:[

    {
      category:"Topical Antimicrobial Therapy",
      indication:"Infected or high-risk ulcers",
      reason:
        "Prevents or controls bacterial infection."
    },

    {
      category:"Antiviral Therapy",
      indication:"Herpesvirus-associated ulcers",
      reason:
        "Controls viral-associated corneal disease."
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
      drugId:"oxytetracycline",
      priority:"Supportive",
      category:"Topical Medication"
    },

    {
      drugId:"famciclovir",
      priority:"Supportive",
      category:"Antiviral"

    }

  ],

  stabilization:[

    "Prevent rubbing and self-trauma.",
    "Evaluate ulcer depth immediately.",
    "Control secondary infection.",
    "Provide pain relief.",
    "Monitor for progression or perforation."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Eye trauma", weight:75 },

      { finding:"Previous feline herpesvirus infection", weight:70 },

      { finding:"Foreign body exposure", weight:55 },

      { finding:"Chronic eye disease", weight:50 }

    ],

    clinicalSigns:[

      { finding:"Squinting (blepharospasm)", weight:90 },

      { finding:"Eye pain", weight:85 },

      { finding:"Excessive tearing", weight:75 },

      { finding:"Corneal opacity", weight:70 },

      { finding:"Red eye", weight:65 },

      { finding:"Pawing at eye", weight:75 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Changes due to systemic disease", weight:25 }

    ],

    imaging:[

      { finding:"No routine imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Positive fluorescein staining", weight:95 },

      { finding:"Corneal defect visualized", weight:90 },

      { finding:"Ocular pain", weight:85 },

      { finding:"Compatible ocular history", weight:75 }

    ],

    against:[

      { finding:"Negative fluorescein staining", weight:-60 },

      { finding:"No ocular pain or abnormalities", weight:-40 },

      { finding:"Alternative ocular disease confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"ulcer",
      parameter:"Ulcer size and healing",
      frequency:"Frequent rechecks",
      reason:
        "Ensures progressive healing."
    },

    {
      id:"pain",
      parameter:"Ocular discomfort",
      frequency:"Daily assessment",
      reason:
        "Evaluates clinical improvement."
    },

    {
      id:"cornea",
      parameter:"Corneal integrity",
      frequency:"During treatment",
      reason:
        "Detects worsening or perforation."

    }

  ],

  precautions:[

    {
      id:"steroids",
      title:"Avoid Inappropriate Steroid Use",
      description:
        "Topical corticosteroids may worsen infectious or deep corneal ulcers."
    },

    {
      id:"emergency",
      title:"Deep Ulcer Emergency",
      description:
        "Deep ulcers or corneal thinning require urgent ophthalmic evaluation."

    }

  ],

  prognosis:
    "Prognosis depends on ulcer depth, cause, and treatment timing. Superficial ulcers generally heal well, while deep ulcers may threaten vision.",

  strengtheningEvidence:[

    "Positive fluorescein stain",

    "Corneal defect",

    "Ocular pain",

    "Squinting"

  ],

  weakeningEvidence:[

    "Negative fluorescein test",

    "No corneal lesion",

    "Alternative ocular disease confirmed"

  ],

  classicFindings:[

    "Squinting",

    "Tearing",

    "Corneal opacity",

    "Fluorescein-positive defect"

  ],

  ruleOutFindings:[

    "Conjunctivitis",

    "Uveitis",

    "Glaucoma",

    "Corneal sequestrum",

    "Foreign body"

  ],

};