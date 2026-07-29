import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineFoodAllergyDermatitis: DiseaseCard = {
  id: "canine-food-allergy-dermatitis-dog",

  title: "Canine Food Allergy Dermatitis",

  description:
    "An adverse immune response to dietary ingredients causing chronic pruritus, skin inflammation, and recurrent dermatological disease.",

  species:[
    Species.DOG,
  ],

  synonyms:[
    "Cutaneous Adverse Food Reaction",
    "Food Allergy Dermatitis",
    "Dietary Hypersensitivity",
    "Food-Induced Allergic Dermatitis",
  ],

  overview:
    "Canine food allergy dermatitis is a non-seasonal allergic skin disease caused by hypersensitivity to dietary proteins. Common triggers include beef, dairy products, chicken, wheat, and other food ingredients. Clinical signs may occur throughout the year and commonly involve generalized itching, ear disease, and recurrent skin infections. Diagnosis requires elimination diet trials followed by dietary challenge.",

  clinicalProblems:[

    "Chronic pruritus",
    "Allergic skin inflammation",
    "Recurrent otitis externa",
    "Secondary bacterial infection",
    "Skin barrier disruption",
    "Reduced quality of life"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess diet history, duration of itching, seasonal pattern, previous food exposure, and response to treatments."
    },

    {
      id:"skin-examination",
      step:2,
      title:"Dermatological Examination",
      description:
        "Evaluate itching distribution, skin lesions, ear involvement, and secondary infections."
    },

    {
      id:"rule-out",
      step:3,
      title:"Exclude Other Allergies",
      description:
        "Rule out parasites, bacterial infections, yeast infections, and environmental allergies."
    },

    {
      id:"diet-trial",
      step:4,
      title:"Elimination Diet Trial",
      description:
        "Feed a controlled diet to evaluate improvement in clinical signs."
    },

    {
      id:"confirmation",
      step:5,
      title:"Diet Challenge",
      description:
        "Confirm diagnosis by reintroducing previous diet ingredients and observing recurrence."

    }

  ],

  diagnostics:[

    {
      id:"elimination-diet",
      name:"Elimination Diet Trial",
      priority:"Essential",
      reason:
        "Main diagnostic method for confirming food-responsive dermatitis."
    },

    {
      id:"diet-challenge",
      name:"Dietary Challenge",
      priority:"Essential",
      reason:
        "Confirms relationship between food ingredient and clinical signs."
    },

    {
      id:"skin-cytology",
      name:"Skin Cytology",
      priority:"Recommended",
      reason:
        "Detects secondary bacterial or yeast infections."
    },

    {
      id:"parasite-testing",
      name:"Parasite Evaluation",
      priority:"Recommended",
      reason:
        "Rules out parasitic causes of itching."

    }

  ],

  drugCategories:[

    {
      category:"Dietary Management",
      indication:"Food allergy control",
      reason:
        "Avoids triggering dietary proteins."
    },

    {
      category:"Antipruritic Therapy",
      indication:"Allergic itching",
      reason:
        "Reduces inflammation and improves comfort."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Secondary infections",
      reason:
        "Treats bacterial and yeast complications."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"oclacitinib",
      priority:"Supportive",
      category:"JAK Inhibitor"
    },

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"

    }

  ],

  stabilization:[

    "Identify and remove triggering food ingredients.",
    "Control severe itching.",
    "Treat secondary skin and ear infections.",
    "Maintain skin barrier health.",
    "Monitor response during diet trial."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Non-seasonal itching", weight:70 },

      { finding:"Long-term skin problems", weight:55 },

      { finding:"History of multiple diets", weight:45 },

      { finding:"Poor response to flea control", weight:40 },

      { finding:"Recurrent ear infections", weight:60 }

    ],

    clinicalSigns:[

      { finding:"Generalized pruritus", weight:75 },

      { finding:"Paw licking", weight:65 },

      { finding:"Recurrent otitis externa", weight:70 },

      { finding:"Facial itching", weight:55 },

      { finding:"Red inflamed skin", weight:50 },

      { finding:"Secondary pyoderma", weight:55 }

    ],

    biochemistry:[

      { finding:"Usually normal blood parameters", weight:5 },

      { finding:"Changes due to secondary infection", weight:20 }

    ],

    imaging:[

      { finding:"No specific imaging findings", weight:5 }

    ],

    supports:[

      { finding:"Improvement during elimination diet", weight:90 },

      { finding:"Recurrence after food challenge", weight:95 },

      { finding:"Non-seasonal pruritus", weight:70 },

      { finding:"Recurrent ear disease", weight:65 }

    ],

    against:[

      { finding:"Seasonal itching pattern only", weight:-40 },

      { finding:"Confirmed flea allergy", weight:-45 },

      { finding:"No improvement with diet trial", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"itching",
      parameter:"Pruritus severity",
      frequency:"Weekly during diet trial",
      reason:
        "Evaluates response to dietary management."
    },

    {
      id:"skin",
      parameter:"Skin lesions",
      frequency:"Follow-up",
      reason:
        "Monitors recovery."
    },

    {
      id:"diet",
      parameter:"Diet compliance",
      frequency:"Continuous",
      reason:
        "Ensures accurate diagnosis."

    }

  ],

  precautions:[

    {
      id:"diet-trial",
      title:"Strict Diet Compliance",
      description:
        "Even small amounts of previous food ingredients can interfere with diagnosis."
    },

    {
      id:"secondary",
      title:"Secondary Infection Risk",
      description:
        "Allergic skin inflammation can predispose dogs to bacterial and yeast infections."

    }

  ],

  prognosis:
    "Prognosis is good when triggering ingredients are identified and avoided. Lifelong dietary management may be required.",

  strengtheningEvidence:[

    "Response to elimination diet",

    "Recurrence after food challenge",

    "Non-seasonal itching",

    "Recurrent ear infections"

  ],

  weakeningEvidence:[

    "No response to dietary trial",

    "Confirmed parasite infestation",

    "Environmental allergy diagnosis"

  ],

  classicFindings:[

    "Year-round itching",

    "Paw licking",

    "Ear infections",

    "Diet response"

  ],

  ruleOutFindings:[

    "Flea allergy dermatitis",

    "Atopic dermatitis",

    "Sarcoptic mange",

    "Demodicosis",

    "Malassezia dermatitis"

  ],

};