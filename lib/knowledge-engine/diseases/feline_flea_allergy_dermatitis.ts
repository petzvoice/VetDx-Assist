import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineFleaAllergyDermatitis: DiseaseCard = {
  id: "feline-flea-allergy-dermatitis-cat",

  title: "Feline Flea Allergy Dermatitis (FAD)",

  description:
    "An allergic skin disease in cats caused by hypersensitivity to flea saliva, resulting in intense itching, overgrooming, hair loss, and inflammatory skin lesions.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Flea Allergy Dermatitis",
    "Flea Bite Allergy",
    "Flea Hypersensitivity Dermatitis",
    "Flea-Associated Dermatitis",
  ],

  overview:
    "Flea allergy dermatitis is one of the most common allergic skin diseases in cats. It occurs when cats develop hypersensitivity to proteins present in flea saliva. Even a small number of flea bites can trigger severe itching and self-trauma. Cats may remove visible fleas through grooming, making infestation difficult to detect. Lesions commonly affect the back, tail base, neck, and thighs.",

  clinicalProblems:[

    "Allergic skin inflammation",
    "Severe pruritus",
    "Self-trauma",
    "Hair loss",
    "Secondary skin infection",
    "Chronic dermatitis"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess flea exposure, preventive history, seasonal pattern, itching severity, and previous skin problems."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate alopecia, crusting, redness, scabs, and lesion distribution."
    },

    {
      id:"parasite-check",
      step:3,
      title:"Flea Evaluation",
      description:
        "Search for fleas or flea dirt and assess parasite exposure."
    },

    {
      id:"differential-diagnosis",
      step:4,
      title:"Rule Out Other Skin Diseases",
      description:
        "Exclude fungal infections, mites, food allergy, and bacterial dermatitis."
    },

    {
      id:"management",
      step:5,
      title:"Flea Control and Allergy Management",
      description:
        "Eliminate fleas and manage allergic inflammation."

    }

  ],

  diagnostics:[

    {
      id:"flea-comb",
      name:"Flea Comb Examination",
      priority:"Recommended",
      reason:
        "Detects fleas or flea dirt on the coat."
    },

    {
      id:"skin-cytology",
      name:"Skin Cytology",
      priority:"Recommended",
      reason:
        "Evaluates secondary bacterial or yeast infection."
    },

    {
      id:"parasite-control-trial",
      name:"Flea Control Trial",
      priority:"Recommended",
      reason:
        "Improvement after strict flea control supports diagnosis."

    }

  ],

  drugCategories:[

    {
      category:"Ectoparasite Control",
      indication:"Flea elimination",
      reason:
        "Removes the triggering parasite."
    },

    {
      category:"Anti-inflammatory Therapy",
      indication:"Allergic itching",
      reason:
        "Reduces allergic skin inflammation."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Secondary infection",
      reason:
        "Treats bacterial or yeast complications."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"selamectin",
      priority:"Supportive",
      category:"Antiparasitic"
    },

    {
      drugId:"fluralaner",
      priority:"Supportive",
      category:"Antiparasitic"

    }

  ],

  stabilization:[

    "Control flea infestation immediately.",
    "Reduce itching and skin inflammation.",
    "Treat secondary infections if present.",
    "Manage all animals in the household.",
    "Maintain long-term flea prevention."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Flea exposure", weight:85 },

      { finding:"No flea prevention", weight:75 },

      { finding:"Outdoor access", weight:55 },

      { finding:"Seasonal itching", weight:65 },

      { finding:"Previous allergic skin disease", weight:50 }

    ],

    clinicalSigns:[

      { finding:"Severe itching", weight:90 },

      { finding:"Hair loss over tail base", weight:85 },

      { finding:"Overgrooming", weight:80 },

      { finding:"Miliary dermatitis", weight:85 },

      { finding:"Crusting and scabs", weight:75 },

      { finding:"Skin redness", weight:55 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:10 },

      { finding:"Changes due to secondary infection", weight:25 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Flea dirt or fleas identified", weight:90 },

      { finding:"Tail base dermatitis", weight:80 },

      { finding:"Severe pruritus", weight:85 },

      { finding:"Improvement after flea control", weight:85 }

    ],

    against:[

      { finding:"No itching", weight:-40 },

      { finding:"No flea exposure and no response to flea control", weight:-45 },

      { finding:"Alternative skin disease confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"itching",
      parameter:"Pruritus severity",
      frequency:"Regular follow-up",
      reason:
        "Evaluates allergy control."
    },

    {
      id:"skin",
      parameter:"Skin lesion healing",
      frequency:"Periodic",
      reason:
        "Monitors recovery."
    },

    {
      id:"flea-control",
      parameter:"Flea prevention compliance",
      frequency:"Continuous",
      reason:
        "Prevents recurrence."

    }

  ],

  precautions:[

    {
      id:"prevention",
      title:"Strict Flea Prevention Required",
      description:
        "Cats with flea allergy require continuous flea control because occasional bites can trigger severe reactions."
    },

    {
      id:"household",
      title:"Household Management",
      description:
        "All pets and the environment may need flea control to prevent reinfestation."

    }

  ],

  prognosis:
    "Prognosis is excellent with effective flea elimination and long-term prevention. Recurrence is common if flea exposure continues.",

  strengtheningEvidence:[

    "Severe itching",

    "Tail base lesions",

    "Flea exposure",

    "Response to flea control"

  ],

  weakeningEvidence:[

    "No pruritus",

    "No flea exposure",

    "Alternative allergy diagnosis"

  ],

  classicFindings:[

    "Miliary dermatitis",

    "Tail base alopecia",

    "Overgrooming",

    "Severe itching"

  ],

  ruleOutFindings:[

    "Dermatophytosis",

    "Demodicosis",

    "Food allergy dermatitis",

    "Atopic dermatitis",

    "Bacterial pyoderma"

  ],

};