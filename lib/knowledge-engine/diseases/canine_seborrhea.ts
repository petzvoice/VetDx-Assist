import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineSeborrhea: DiseaseCard = {
  id: "canine-seborrhea-seborrheic-dermatitis-dog",

  title: "Canine Seborrhea (Seborrheic Dermatitis)",

  description:
    "A skin disorder characterized by abnormal keratinization and excessive scaling, oil production, and skin inflammation, either as a primary inherited condition or secondary to other diseases.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Seborrheic Dermatitis",
    "Primary Seborrhea",
    "Secondary Seborrhea",
    "Scaling Skin Disease",
  ],

  overview:
    "Canine seborrhea is a disorder of epidermal turnover and sebaceous gland function. It may occur as a primary inherited keratinization disorder or develop secondary to allergies, infections, endocrine diseases, parasites, or nutritional disorders. Dogs may show dry flaky skin, greasy coat, unpleasant odor, crusting, and recurrent infections. Secondary seborrhea is more common than primary disease.",

  clinicalProblems:[

    "Abnormal skin scaling",
    "Excess oil production",
    "Greasy coat",
    "Skin odor",
    "Secondary bacterial infection",
    "Yeast overgrowth"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess age of onset, breed predisposition, diet, itching, recurrent infections, and underlying disease history."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate scaling, oiliness, odor, crusting, and distribution of lesions."
    },

    {
      id:"cytology",
      step:3,
      title:"Skin Cytology",
      description:
        "Identify bacterial and yeast overgrowth associated with seborrhea."
    },

    {
      id:"underlying-cause",
      step:4,
      title:"Underlying Disease Investigation",
      description:
        "Evaluate allergies, endocrine disorders, parasites, and nutritional causes."
    },

    {
      id:"management",
      step:5,
      title:"Skin Management",
      description:
        "Control scaling, improve skin health, and manage underlying causes."

    }

  ],

  diagnostics:[

    {
      id:"skin-cytology",
      name:"Skin Cytology",
      priority:"Recommended",
      reason:
        "Detects secondary bacterial and yeast infections."
    },

    {
      id:"skin-scraping",
      name:"Skin Scraping",
      priority:"Recommended",
      reason:
        "Rules out parasitic causes."
    },

    {
      id:"endocrine-testing",
      name:"Endocrine Disease Evaluation",
      priority:"Conditional",
      reason:
        "Identifies hormonal disorders causing secondary seborrhea."
    },

    {
      id:"diet-evaluation",
      name:"Dietary Assessment",
      priority:"Recommended",
      reason:
        "Evaluates nutritional factors affecting skin health."

    }

  ],

  drugCategories:[

    {
      category:"Medicated Shampoo Therapy",
      indication:"Scaling and oil control",
      reason:
        "Improves skin surface condition."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Secondary infection",
      reason:
        "Controls bacterial and yeast overgrowth."
    },

    {
      category:"Underlying Disease Management",
      indication:"Secondary seborrhea",
      reason:
        "Treats the primary cause."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"chlorhexidine",
      priority:"Supportive",
      category:"Topical Antimicrobial"
    },

    {
      drugId:"ketoconazole",
      priority:"Supportive",
      category:"Antifungal"

    }

  ],

  stabilization:[

    "Control excessive scaling and oil production.",
    "Treat secondary bacterial or yeast infections.",
    "Improve skin barrier function.",
    "Investigate underlying disease.",
    "Maintain regular skin care."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Chronic skin scaling", weight:60 },

      { finding:"Recurrent skin infections", weight:55 },

      { finding:"Breed predisposition", weight:40 },

      { finding:"Underlying allergy history", weight:45 },

      { finding:"Endocrine disease risk", weight:35 }

    ],

    clinicalSigns:[

      { finding:"Dry flaky skin", weight:70 },

      { finding:"Greasy oily coat", weight:75 },

      { finding:"Skin odor", weight:65 },

      { finding:"Crusting", weight:55 },

      { finding:"Hair coat abnormalities", weight:60 },

      { finding:"Pruritus if secondary disease present", weight:50 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Hormonal abnormalities in secondary cases", weight:30 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Characteristic scaling and greasy coat", weight:80 },

      { finding:"Secondary yeast or bacterial infection", weight:70 },

      { finding:"Improvement with medicated shampoo", weight:65 },

      { finding:"Underlying disease identified", weight:75 }

    ],

    against:[

      { finding:"No scaling or oiliness", weight:-50 },

      { finding:"Primary infectious disease confirmed", weight:-40 },

      { finding:"Normal skin examination", weight:-60 }

    ],

  },

  monitoring:[

    {
      id:"skin",
      parameter:"Scaling and coat condition",
      frequency:"Regular follow-up",
      reason:
        "Evaluates skin improvement."
    },

    {
      id:"infection",
      parameter:"Secondary infection signs",
      frequency:"Follow-up",
      reason:
        "Detects bacterial or yeast recurrence."
    },

    {
      id:"underlying",
      parameter:"Control of primary disease",
      frequency:"Long-term monitoring",
      reason:
        "Prevents relapse."

    }

  ],

  precautions:[

    {
      id:"secondary",
      title:"Identify Underlying Cause",
      description:
        "Most seborrhea cases are secondary to another skin, hormonal, or allergic disorder."
    },

    {
      id:"chronic",
      title:"Long-term Skin Care",
      description:
        "Primary seborrhea often requires lifelong management."

    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause. Secondary seborrhea improves when the primary disease is controlled, while primary seborrhea requires ongoing management.",

  strengtheningEvidence:[

    "Characteristic scaling",

    "Greasy coat",

    "Skin odor",

    "Response to skin therapy"

  ],

  weakeningEvidence:[

    "No scaling",

    "No coat changes",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Flaky skin",

    "Greasy coat",

    "Odor",

    "Recurrent infections"

  ],

  ruleOutFindings:[

    "Malassezia dermatitis",

    "Atopic dermatitis",

    "Dermatophytosis",

    "Hypothyroidism",

    "Demodicosis"

  ],

};