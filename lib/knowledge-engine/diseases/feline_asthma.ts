import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineAsthma: DiseaseCard = {
  id: "feline-asthma-cat",

  title: "Feline Asthma / Feline Bronchial Disease",

  description:
    "A chronic inflammatory respiratory disease in cats characterized by airway inflammation, bronchoconstriction, mucus production, and episodes of breathing difficulty.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Asthma",
    "Feline Bronchial Disease",
    "Feline Allergic Airway Disease",
    "Chronic Bronchitis in Cats",
  ],

  overview:
    "Feline asthma is a lower airway inflammatory disease caused by hypersensitivity reactions to inhaled allergens. In affected cats, inflammation of the bronchi leads to airway narrowing, increased mucus production, coughing, and respiratory distress. Clinical severity ranges from occasional coughing episodes to life-threatening airway obstruction. Environmental allergens, smoke, dust, perfumes, and other irritants may trigger episodes.",

  clinicalProblems:[

    "Airway inflammation",
    "Bronchoconstriction",
    "Respiratory distress",
    "Chronic coughing",
    "Mucus accumulation",
    "Exercise intolerance"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess coughing episodes, breathing difficulty, environmental exposure, and duration of respiratory signs."
    },

    {
      id:"respiratory-examination",
      step:2,
      title:"Respiratory Examination",
      description:
        "Evaluate respiratory effort, lung sounds, and severity of breathing difficulty."
    },

    {
      id:"imaging",
      step:3,
      title:"Thoracic Imaging",
      description:
        "Assess bronchial changes and exclude other respiratory diseases."
    },

    {
      id:"airway-evaluation",
      step:4,
      title:"Airway Assessment",
      description:
        "Evaluate inflammatory airway changes when required."

    },

    {
      id:"management",
      step:5,
      title:"Asthma Management",
      description:
        "Reduce airway inflammation and control bronchoconstriction."

    }

  ],

  diagnostics:[

    {
      id:"thoracic-radiography",
      name:"Thoracic Radiography",
      priority:"Recommended",
      reason:
        "Evaluates bronchial patterns and excludes other lung diseases."
    },

    {
      id:"cbc",
      name:"Complete Blood Count",
      priority:"Recommended",
      reason:
        "May identify inflammatory or eosinophilic changes."
    },

    {
      id:"airway-sampling",
      name:"Airway Cytology",
      priority:"Conditional",
      reason:
        "Evaluates inflammatory cell populations."

    }

  ],

  drugCategories:[

    {
      category:"Bronchodilator Therapy",
      indication:"Airway narrowing",
      reason:
        "Relaxes airway smooth muscle and improves airflow."
    },

    {
      category:"Corticosteroid Therapy",
      indication:"Airway inflammation",
      reason:
        "Reduces inflammatory response."
    },

    {
      category:"Emergency Respiratory Support",
      indication:"Severe respiratory distress",
      reason:
        "Provides stabilization during acute episodes."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"prednisolone",
      priority:"Supportive",
      category:"Corticosteroid"
    },

    {
      drugId:"terbutaline",
      priority:"Supportive",
      category:"Bronchodilator"

    }

  ],

  stabilization:[

    "Provide oxygen support during respiratory distress.",
    "Minimize stress during handling.",
    "Control acute bronchoconstriction.",
    "Reduce exposure to respiratory irritants.",
    "Monitor respiratory effort."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Recurrent coughing episodes", weight:85 },

      { finding:"Exposure to dust or smoke", weight:60 },

      { finding:"Indoor environment", weight:45 },

      { finding:"Previous respiratory episodes", weight:65 }

    ],

    clinicalSigns:[

      { finding:"Coughing", weight:85 },

      { finding:"Difficulty breathing", weight:80 },

      { finding:"Increased respiratory effort", weight:75 },

      { finding:"Wheezing", weight:70 },

      { finding:"Open-mouth breathing", weight:85 },

      { finding:"Exercise intolerance", weight:45 }

    ],

    biochemistry:[

      { finding:"Usually non-specific blood changes", weight:15 },

      { finding:"Eosinophilic changes", weight:40 },

      { finding:"Inflammatory changes", weight:30 }

    ],

    imaging:[

      { finding:"Bronchial pattern on radiographs", weight:80 },

      { finding:"Air trapping", weight:60 },

      { finding:"Hyperinflation of lungs", weight:55 }

    ],

    supports:[

      { finding:"Chronic coughing episodes", weight:85 },

      { finding:"Compatible radiographic changes", weight:80 },

      { finding:"Wheezing respiratory sounds", weight:70 },

      { finding:"Response to bronchodilator therapy", weight:65 }

    ],

    against:[

      { finding:"Normal respiratory evaluation", weight:-40 },

      { finding:"Acute infectious pneumonia confirmed", weight:-50 },

      { finding:"Alternative respiratory disease confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"respiration",
      parameter:"Respiratory rate and effort",
      frequency:"Regular monitoring",
      reason:
        "Detects worsening airway disease."
    },

    {
      id:"cough",
      parameter:"Cough frequency",
      frequency:"Daily",
      reason:
        "Evaluates disease control."
    },

    {
      id:"environment",
      parameter:"Exposure to irritants",
      frequency:"Continuous",
      reason:
        "Helps prevent asthma episodes."

    }

  ],

  precautions:[

    {
      id:"emergency",
      title:"Respiratory Distress",
      description:
        "Severe breathing difficulty requires immediate stabilization and oxygen support."
    },

    {
      id:"environment",
      title:"Environmental Control",
      description:
        "Reducing exposure to smoke, dust, perfumes, and airborne irritants may decrease episodes."

    }

  ],

  prognosis:
    "Feline asthma is usually a chronic condition requiring long-term management. Many cats maintain good quality of life with appropriate control of airway inflammation and triggers.",

  strengtheningEvidence:[

    "Chronic coughing",

    "Bronchial radiographic pattern",

    "Wheezing",

    "Response to bronchodilator therapy"

  ],

  weakeningEvidence:[

    "Normal respiratory imaging",

    "No coughing episodes",

    "Confirmed infectious respiratory disease"

  ],

  classicFindings:[

    "Chronic cough",

    "Wheezing",

    "Respiratory distress",

    "Bronchial changes"

  ],

  ruleOutFindings:[

    "Heart disease",

    "Pneumonia",

    "Lung parasites",

    "Pleural disease",

    "Airway foreign body"

  ],

};