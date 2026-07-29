import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineDeepPyoderma: DiseaseCard = {
  id: "canine-deep-pyoderma-dog",

  title: "Canine Deep Pyoderma",

  description:
    "A severe bacterial skin infection involving deeper layers of the skin, including hair follicles, dermis, and subcutaneous tissues, commonly developing from underlying skin disease.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Deep Bacterial Folliculitis",
    "Deep Superficial Pyoderma",
    "Deep Skin Infection",
    "Bacterial Furunculosis",
  ],

  overview:
    "Canine deep pyoderma is a serious bacterial infection affecting deeper skin structures. It commonly develops as a complication of chronic superficial pyoderma, allergies, parasites, immune disorders, or hormonal diseases. Staphylococcus pseudintermedius is frequently involved. Lesions include nodules, draining tracts, ulcers, crusts, pain, and severe inflammation. Deep infections require investigation of underlying causes and prolonged management.",

  clinicalProblems:[

    "Deep bacterial skin infection",
    "Hair follicle destruction",
    "Skin abscess formation",
    "Pain and inflammation",
    "Secondary complications",
    "Underlying disease recurrence"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess duration of skin disease, previous infections, antibiotic use, allergies, and underlying disorders."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate nodules, ulcers, crusting, draining tracts, and affected body areas."
    },

    {
      id:"cytology",
      step:3,
      title:"Skin Cytology",
      description:
        "Identify bacteria and inflammatory cells from lesions."
    },

    {
      id:"culture",
      step:4,
      title:"Bacterial Culture",
      description:
        "Perform culture and sensitivity testing for recurrent or severe infections."
    },

    {
      id:"underlying-cause",
      step:5,
      title:"Underlying Disease Investigation",
      description:
        "Identify allergies, parasites, endocrine disease, or immune dysfunction."

    }

  ],

  diagnostics:[

    {
      id:"skin-cytology",
      name:"Skin Cytology",
      priority:"Essential",
      reason:
        "Detects bacteria and inflammatory changes."
    },

    {
      id:"bacterial-culture",
      name:"Bacterial Culture and Sensitivity",
      priority:"Essential",
      reason:
        "Guides antibiotic selection in deep or recurrent infections."
    },

    {
      id:"deep-skin-sampling",
      name:"Deep Lesion Sampling",
      priority:"Recommended",
      reason:
        "Improves diagnostic accuracy in deep infections."
    },

    {
      id:"underlying-disease-testing",
      name:"Underlying Disease Evaluation",
      priority:"Recommended",
      reason:
        "Identifies causes contributing to recurrence."

    }

  ],

  drugCategories:[

    {
      category:"Systemic Antibiotic Therapy",
      indication:"Deep bacterial infection",
      reason:
        "Required to reach infected deeper tissues."
    },

    {
      category:"Topical Antimicrobial Therapy",
      indication:"Skin surface support",
      reason:
        "Reduces bacterial contamination."
    },

    {
      category:"Underlying Disease Management",
      indication:"Prevent recurrence",
      reason:
        "Controls contributing disorders."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"cephalexin",
      priority:"Supportive",
      category:"Antibiotic"
    },

    {
      drugId:"amoxicillin-clavulanate",
      priority:"Supportive",
      category:"Antibiotic"

    }

  ],

  stabilization:[

    "Control bacterial infection.",
    "Provide appropriate wound care.",
    "Manage pain and inflammation.",
    "Identify underlying skin disease.",
    "Monitor for recurrence."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Previous recurrent pyoderma", weight:60 },

      { finding:"Chronic skin disease", weight:55 },

      { finding:"Previous antibiotic exposure", weight:45 },

      { finding:"Underlying allergy", weight:50 },

      { finding:"Immune or endocrine disease risk", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Deep skin nodules", weight:75 },

      { finding:"Pus-filled lesions", weight:70 },

      { finding:"Draining tracts", weight:80 },

      { finding:"Ulceration", weight:60 },

      { finding:"Painful skin lesions", weight:65 },

      { finding:"Crusting", weight:55 },

      { finding:"Hair loss around lesions", weight:45 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Inflammatory changes in severe cases", weight:25 }

    ],

    imaging:[

      { finding:"No routine imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Bacteria on cytology", weight:85 },

      { finding:"Positive bacterial culture", weight:90 },

      { finding:"Deep infected lesions", weight:80 },

      { finding:"Response to antibiotic therapy", weight:70 }

    ],

    against:[

      { finding:"Negative bacterial evaluation", weight:-40 },

      { finding:"Primary fungal infection confirmed", weight:-50 },

      { finding:"No skin lesions", weight:-60 }

    ],

  },

  monitoring:[

    {
      id:"lesions",
      parameter:"Skin lesion healing",
      frequency:"Regular follow-up",
      reason:
        "Evaluates treatment response."
    },

    {
      id:"infection",
      parameter:"Signs of infection",
      frequency:"Follow-up",
      reason:
        "Detects persistent infection."
    },

    {
      id:"recurrence",
      parameter:"Repeat pyoderma episodes",
      frequency:"Long-term monitoring",
      reason:
        "Identifies unresolved underlying causes."

    }

  ],

  precautions:[

    {
      id:"culture",
      title:"Antibiotic Selection",
      description:
        "Culture and sensitivity testing is important in recurrent, severe, or resistant infections."
    },

    {
      id:"underlying",
      title:"Underlying Disease Control",
      description:
        "Deep pyoderma frequently occurs secondary to allergies, parasites, or immune problems."

    }

  ],

  prognosis:
    "Prognosis is good with appropriate antimicrobial therapy and correction of underlying causes. Severe or recurrent cases require prolonged management.",

  strengtheningEvidence:[

    "Deep bacterial lesions",

    "Positive cytology",

    "Positive culture",

    "Response to antibiotics"

  ],

  weakeningEvidence:[

    "No bacterial evidence",

    "Fungal disease confirmed",

    "No inflammatory skin lesions"

  ],

  classicFindings:[

    "Deep nodules",

    "Pus formation",

    "Draining tracts",

    "Painful skin lesions"

  ],

  ruleOutFindings:[

    "Deep fungal infection",

    "Neoplasia",

    "Demodicosis",

    "Sarcoptic mange",

    "Foreign body reaction"

  ],

};