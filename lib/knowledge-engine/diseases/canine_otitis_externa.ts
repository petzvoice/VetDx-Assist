import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineOtitisExterna: DiseaseCard = {
  id: "canine-otitis-externa-dog",

  title: "Canine Otitis Externa (External Ear Infection)",

  description:
    "An inflammatory disease of the external ear canal commonly associated with bacterial infection, yeast overgrowth, parasites, allergies, and ear canal abnormalities.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "External Ear Infection",
    "Otitis Externa",
    "Canine Ear Infection",
    "Ear Canal Inflammation",
  ],

  overview:
    "Canine otitis externa is one of the most common ear disorders in dogs. It involves inflammation of the external ear canal and usually develops due to multiple interacting factors. Primary causes include allergies, ear mites, foreign bodies, endocrine disorders, and anatomical abnormalities. Secondary infections caused by bacteria and Malassezia yeast commonly worsen clinical signs. Chronic inflammation may result in ear canal thickening and permanent changes.",

  clinicalProblems:[

    "Ear canal inflammation",
    "Pain and discomfort",
    "Head shaking",
    "Ear discharge",
    "Hearing impairment",
    "Chronic ear changes"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess duration of ear problems, previous infections, allergies, swimming exposure, and treatment history."
    },

    {
      id:"ear-examination",
      step:2,
      title:"Ear Examination",
      description:
        "Evaluate ear canal appearance, discharge, odor, pain, and inflammation."
    },

    {
      id:"cytology",
      step:3,
      title:"Ear Cytology",
      description:
        "Identify yeast, bacteria, and inflammatory cells."
    },

    {
      id:"otoscopy",
      step:4,
      title:"Otoscopy Evaluation",
      description:
        "Assess ear canal and tympanic membrane condition."
    },

    {
      id:"underlying-cause",
      step:5,
      title:"Underlying Cause Investigation",
      description:
        "Identify allergies, parasites, foreign bodies, or anatomical factors."

    }

  ],

  diagnostics:[

    {
      id:"ear-cytology",
      name:"Ear Cytology",
      priority:"Essential",
      reason:
        "Identifies bacterial and yeast organisms causing infection."
    },

    {
      id:"otoscopy",
      name:"Otoscopy",
      priority:"Essential",
      reason:
        "Evaluates ear canal and tympanic membrane."
    },

    {
      id:"ear-culture",
      name:"Bacterial Culture and Sensitivity",
      priority:"Recommended",
      reason:
        "Guides treatment in chronic or resistant infections."
    },

    {
      id:"parasite-check",
      name:"Ear Parasite Examination",
      priority:"Recommended",
      reason:
        "Detects ear mites and other parasites."

    }

  ],

  drugCategories:[

    {
      category:"Topical Ear Therapy",
      indication:"External ear infection",
      reason:
        "Directly treats organisms and inflammation in the ear canal."
    },

    {
      category:"Systemic Therapy",
      indication:"Severe or complicated disease",
      reason:
        "Used when deeper infection or extensive inflammation is present."
    },

    {
      category:"Ear Cleaning Management",
      indication:"Removal of debris",
      reason:
        "Improves medication effectiveness."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"mometasone-gentamicin-clotrimazole",
      priority:"Supportive",
      category:"Topical Medication"
    },

    {
      drugId:"chlorhexidine",
      priority:"Supportive",
      category:"Antiseptic"

    }

  ],

  stabilization:[

    "Identify and treat the underlying cause.",
    "Remove excessive ear debris.",
    "Control bacterial or yeast infection.",
    "Reduce inflammation and pain.",
    "Prevent chronic ear changes."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Previous ear infections", weight:65 },

      { finding:"Allergy history", weight:60 },

      { finding:"Swimming or moisture exposure", weight:45 },

      { finding:"Long pendulous ears", weight:40 },

      { finding:"Chronic skin disease", weight:55 }

    ],

    clinicalSigns:[

      { finding:"Head shaking", weight:70 },

      { finding:"Ear scratching", weight:75 },

      { finding:"Ear odor", weight:70 },

      { finding:"Ear discharge", weight:75 },

      { finding:"Red inflamed ear canal", weight:65 },

      { finding:"Pain on ear examination", weight:60 },

      { finding:"Thickened ear canal in chronic cases", weight:45 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Changes due to underlying endocrine disease", weight:20 }

    ],

    imaging:[

      { finding:"No routine imaging findings", weight:5 },

      { finding:"CT/MRI may be useful in chronic middle ear disease", weight:20 }

    ],

    supports:[

      { finding:"Abnormal ear cytology", weight:90 },

      { finding:"Characteristic ear discharge", weight:75 },

      { finding:"Inflamed ear canal", weight:80 },

      { finding:"Response to appropriate ear therapy", weight:70 }

    ],

    against:[

      { finding:"Normal ear examination", weight:-60 },

      { finding:"No ear discomfort", weight:-40 },

      { finding:"Alternative neurological cause confirmed", weight:-30 }

    ],

  },

  monitoring:[

    {
      id:"ear",
      parameter:"Ear canal appearance",
      frequency:"Follow-up visits",
      reason:
        "Evaluates resolution of inflammation."
    },

    {
      id:"cytology",
      parameter:"Microbial population",
      frequency:"During treatment",
      reason:
        "Confirms infection control."
    },

    {
      id:"recurrence",
      parameter:"Repeated ear infections",
      frequency:"Long-term monitoring",
      reason:
        "Identifies unresolved underlying disease."

    }

  ],

  precautions:[

    {
      id:"chronic",
      title:"Chronic Ear Disease",
      description:
        "Untreated recurrent otitis can cause permanent ear canal changes."
    },

    {
      id:"tympanum",
      title:"Tympanic Membrane Assessment",
      description:
        "Ear medications should be selected carefully when ear drum integrity is uncertain."

    }

  ],

  prognosis:
    "Prognosis is good when the underlying cause is identified and treated. Chronic recurrent cases require long-term management.",

  strengtheningEvidence:[

    "Ear discharge",

    "Positive cytology",

    "Head shaking",

    "Ear canal inflammation",

    "Response to therapy"

  ],

  weakeningEvidence:[

    "Normal ear examination",

    "No ear-related signs",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Head shaking",

    "Ear scratching",

    "Odor",

    "Ear discharge"

  ],

  ruleOutFindings:[

    "Ear mites",

    "Foreign body",

    "Otitis media",

    "Allergic dermatitis",

    "Aural hematoma"

  ],

};