import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineKeratoconjunctivitisSicca: DiseaseCard = {
  id: "canine-keratoconjunctivitis-sicca-dog",

  title: "Canine Keratoconjunctivitis Sicca (KCS / Dry Eye)",

  description:
    "A disorder caused by inadequate tear production or abnormal tear quality resulting in corneal inflammation, discomfort, and potential vision loss.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "KCS",
    "Dry Eye Disease",
    "Keratoconjunctivitis Sicca",
    "Tear Deficiency Disease",
  ],

  overview:
    "Canine keratoconjunctivitis sicca is an ocular surface disease caused primarily by reduced tear production from lacrimal gland dysfunction. Insufficient tears result in corneal drying, inflammation, ulceration, pigmentation, and scarring. The most common cause is immune-mediated destruction of lacrimal tissue, but other causes include drug reactions, nerve damage, trauma, and congenital abnormalities.",

  clinicalProblems: [

    "Reduced tear production",
    "Chronic ocular inflammation",
    "Corneal ulceration",
    "Corneal pigmentation",
    "Vision impairment",
    "Ocular pain"

  ],

  workflow: [

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess chronic eye discharge, discomfort, previous medications, trauma, and breed predisposition."
    },

    {
      id:"ophthalmic-exam",
      step:2,
      title:"Ophthalmic Examination",
      description:
        "Evaluate conjunctiva, cornea, discharge, and ocular surface changes."
    },

    {
      id:"tear-testing",
      step:3,
      title:"Tear Production Assessment",
      description:
        "Measure tear production using Schirmer tear test."
    },

    {
      id:"corneal-evaluation",
      step:4,
      title:"Corneal Assessment",
      description:
        "Identify ulcers, pigmentation, and structural changes."
    },

    {
      id:"treatment",
      step:5,
      title:"Long-Term Ocular Management",
      description:
        "Restore tear production, control inflammation, and protect cornea."
    }

  ],

  diagnostics: [

    {
      id:"schirmer-tear-test",
      name:"Schirmer Tear Test",
      priority:"Essential",
      reason:
        "Measures tear production and confirms tear deficiency."
    },

    {
      id:"fluorescein-staining",
      name:"Fluorescein Staining",
      priority:"Essential",
      reason:
        "Detects corneal ulcers and epithelial defects."
    },

    {
      id:"ophthalmic-examination",
      name:"Complete Ophthalmic Examination",
      priority:"Essential",
      reason:
        "Evaluates ocular surface changes."
    },

    {
      id:"tonometry",
      name:"Intraocular Pressure Measurement",
      priority:"Recommended",
      reason:
        "Screens for secondary glaucoma."
    }

  ],

  drugCategories:[

    {
      category:"Immunomodulatory Therapy",
      indication:"Immune-mediated tear gland dysfunction",
      reason:
        "Improves tear production and controls inflammation."
    },

    {
      category:"Artificial Tear Replacement",
      indication:"Ocular surface lubrication",
      reason:
        "Provides moisture and protects cornea."
    },

    {
      category:"Antibiotic Therapy",
      indication:"Secondary bacterial infection",
      reason:
        "Controls infection associated with ocular surface damage."
    }

  ],

  recommendedDrugs:[

    {
      drugId:"cyclosporine",
      priority:"First Line",
      category:"Immunomodulator"
    },

    {
      drugId:"tacrolimus",
      priority:"Supportive",
      category:"Immunomodulator"
    }

  ],

  stabilization:[

    "Confirm tear deficiency.",
    "Protect cornea from ulceration.",
    "Control ocular inflammation.",
    "Manage secondary infections.",
    "Maintain lifelong monitoring."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Chronic eye discharge", weight:45 },

      { finding:"Breed predisposition", weight:35 },

      { finding:"Previous immune-mediated disease", weight:35 },

      { finding:"History of tear gland injury", weight:30 }

    ],

    clinicalSigns:[

      { finding:"Thick mucus discharge", weight:55 },

      { finding:"Red conjunctiva", weight:45 },

      { finding:"Squinting", weight:50 },

      { finding:"Painful eye", weight:45 },

      { finding:"Corneal pigmentation", weight:40 },

      { finding:"Reduced vision", weight:35 }

    ],

    biochemistry:[

      { finding:"Usually no specific blood abnormalities", weight:5 },

      { finding:"Changes related to underlying systemic disease", weight:20 }

    ],

    imaging:[

      { finding:"Usually no specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Low Schirmer tear test values", weight:80 },

      { finding:"Mucopurulent ocular discharge", weight:55 },

      { finding:"Chronic corneal changes", weight:45 },

      { finding:"Response to immunomodulatory therapy", weight:40 }

    ],

    against:[

      { finding:"Normal tear production", weight:-60 },

      { finding:"Acute traumatic eye disease", weight:-25 },

      { finding:"No ocular surface changes", weight:-35 }

    ],

  },

  monitoring:[

    {
      id:"tear-production",
      parameter:"Schirmer tear test values",
      frequency:"Regular follow-up",
      reason:
        "Monitors response to therapy."
    },

    {
      id:"cornea",
      parameter:"Corneal condition",
      frequency:"Regular ophthalmic examination",
      reason:
        "Detects ulcers and progression."
    },

    {
      id:"comfort",
      parameter:"Ocular discomfort",
      frequency:"Daily assessment",
      reason:
        "Evaluates clinical improvement."

    }

  ],

  precautions:[

    {
      id:"lifelong",
      title:"Long-Term Management",
      description:
        "Many dogs require lifelong therapy and monitoring."
    },

    {
      id:"corneal-ulcer",
      title:"Corneal Ulcer Risk",
      description:
        "Reduced tears increase the risk of painful corneal damage."
    }

  ],

  prognosis:
    "Prognosis is generally good with early diagnosis and consistent therapy. Chronic untreated cases may develop severe corneal scarring and vision impairment.",

  strengtheningEvidence:[

    "Low Schirmer tear test",

    "Mucous discharge",

    "Chronic red eye",

    "Corneal pigmentation",

    "Breed predisposition"

  ],

  weakeningEvidence:[

    "Normal tear production",

    "Acute eye injury",

    "No ocular surface disease"

  ],

  classicFindings:[

    "Dry eye",

    "Thick discharge",

    "Red conjunctiva",

    "Corneal pigmentation",

    "Low tear production"

  ],

  ruleOutFindings:[

    "Conjunctivitis",

    "Corneal ulcer",

    "Uveitis",

    "Glaucoma",

    "Foreign body"

  ],

};