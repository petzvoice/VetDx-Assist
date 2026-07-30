import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineSkinFoldDermatitis: DiseaseCard = {
  id: "canine-skin-fold-dermatitis-dog",

  title: "Canine Skin Fold Dermatitis (Intertrigo)",

  description:
    "An inflammatory skin condition occurring within skin folds due to moisture, friction, poor ventilation, and secondary bacterial or yeast overgrowth.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Intertrigo",
    "Skin Fold Pyoderma",
    "Canine Fold Dermatitis",
    "Wrinkle Dermatitis",
  ],

  overview:
    "Canine skin fold dermatitis is a chronic inflammatory condition affecting areas where skin folds create a warm and moist environment. It commonly occurs in brachycephalic breeds and dogs with excessive skin folds. Friction, trapped moisture, and reduced air circulation promote bacterial and Malassezia yeast overgrowth. Common sites include facial folds, lip folds, tail folds, vulvar folds, and body folds.",

  clinicalProblems:[

    "Skin fold inflammation",
    "Bacterial overgrowth",
    "Yeast overgrowth",
    "Foul odor",
    "Pain and discomfort",
    "Chronic recurrence"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess breed, location of folds, odor, discharge, recurrent skin infections, and previous management."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Fold Examination",
      description:
        "Inspect affected folds for redness, moisture, discharge, and skin damage."
    },

    {
      id:"cytology",
      step:3,
      title:"Skin Cytology",
      description:
        "Identify bacterial and yeast organisms within affected folds."
    },

    {
      id:"underlying",
      step:4,
      title:"Underlying Factor Assessment",
      description:
        "Evaluate obesity, anatomy, allergies, and other contributing conditions."
    },

    {
      id:"management",
      step:5,
      title:"Fold Management",
      description:
        "Control infection, maintain dryness, and prevent recurrence."

    }

  ],

  diagnostics:[

    {
      id:"skin-cytology",
      name:"Skin Cytology",
      priority:"Essential",
      reason:
        "Detects bacterial and yeast overgrowth."
    },

    {
      id:"culture",
      name:"Bacterial Culture and Sensitivity",
      priority:"Recommended",
      reason:
        "Used in recurrent or resistant infections."
    },

    {
      id:"skin-scraping",
      name:"Skin Scraping",
      priority:"Recommended",
      reason:
        "Rules out parasitic skin disease."

    }

  ],

  drugCategories:[

    {
      category:"Topical Antimicrobial Therapy",
      indication:"Affected skin folds",
      reason:
        "Reduces bacterial and yeast populations."
    },

    {
      category:"Systemic Antimicrobial Therapy",
      indication:"Severe infection",
      reason:
        "Treats deeper or extensive infection."
    },

    {
      category:"Skin Care Management",
      indication:"Prevention of recurrence",
      reason:
        "Maintains dry and healthy skin folds."

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

    "Clean and dry affected skin folds.",
    "Control bacterial and yeast infection.",
    "Reduce moisture accumulation.",
    "Manage obesity if present.",
    "Consider corrective procedures in severe anatomical cases."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Brachycephalic breed", weight:65 },

      { finding:"Excessive skin folds", weight:80 },

      { finding:"Recurrent skin infections", weight:55 },

      { finding:"Obesity", weight:40 },

      { finding:"Chronic odor from folds", weight:60 }

    ],

    clinicalSigns:[

      { finding:"Red inflamed skin folds", weight:75 },

      { finding:"Foul odor", weight:70 },

      { finding:"Moist skin within folds", weight:80 },

      { finding:"Discharge from folds", weight:60 },

      { finding:"Skin darkening", weight:45 },

      { finding:"Pain or irritation", weight:55 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Changes due to severe infection", weight:20 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Typical skin fold location", weight:85 },

      { finding:"Yeast or bacteria on cytology", weight:90 },

      { finding:"Improvement after fold management", weight:75 },

      { finding:"Characteristic odor and moisture", weight:80 }

    ],

    against:[

      { finding:"No skin fold involvement", weight:-50 },

      { finding:"Primary systemic disease", weight:-30 },

      { finding:"No inflammation or infection", weight:-40 }

    ],

  },

  monitoring:[

    {
      id:"fold-condition",
      parameter:"Skin fold appearance",
      frequency:"Regular assessment",
      reason:
        "Evaluates improvement."
    },

    {
      id:"infection",
      parameter:"Bacterial or yeast recurrence",
      frequency:"Follow-up",
      reason:
        "Detects relapse."
    },

    {
      id:"hygiene",
      parameter:"Fold cleanliness and dryness",
      frequency:"Daily",
      reason:
        "Prevents recurrence."

    }

  ],

  precautions:[

    {
      id:"anatomy",
      title:"Anatomical Predisposition",
      description:
        "Deep skin folds may continue to predispose dogs to recurrent dermatitis."
    },

    {
      id:"hygiene",
      title:"Regular Fold Care",
      description:
        "Keeping folds clean and dry is essential for long-term control."

    }

  ],

  prognosis:
    "Prognosis is good with proper hygiene and infection control. Dogs with severe anatomical skin folds may require lifelong management or corrective procedures.",

  strengtheningEvidence:[

    "Affected skin folds",

    "Moist irritated skin",

    "Positive cytology",

    "Characteristic odor"

  ],

  weakeningEvidence:[

    "No fold involvement",

    "No infection evidence",

    "Alternative dermatological disease"

  ],

  classicFindings:[

    "Skin fold redness",

    "Moist dermatitis",

    "Odor",

    "Brachycephalic breed"

  ],

  ruleOutFindings:[

    "Malassezia dermatitis",

    "Superficial pyoderma",

    "Atopic dermatitis",

    "Dermatophytosis",

    "Interdigital furunculosis"

  ],

};