import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineAorticThromboembolism: DiseaseCard = {
  id: "feline-aortic-thromboembolism-cat",

  title: "Feline Aortic Thromboembolism (Saddle Thrombus)",

  description:
    "A severe cardiovascular emergency in cats caused by formation of a blood clot that travels through the arterial system and blocks blood flow, most commonly at the terminal aorta supplying the hind limbs.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Aortic Thromboembolism",
    "Feline Saddle Thrombus",
    "Arterial Thromboembolism",
    "Aortic Saddle Thrombus",
  ],

  overview:
    "Feline aortic thromboembolism is most commonly associated with underlying heart disease, especially hypertrophic cardiomyopathy. A blood clot usually forms within an enlarged left atrium and travels into systemic circulation. When the clot lodges at the terminal aorta, it blocks blood supply to the hind limbs, causing sudden pain, paralysis, and cold extremities. It is a life-threatening condition requiring emergency management.",

  clinicalProblems:[

    "Arterial blood flow obstruction",
    "Acute hind limb paralysis",
    "Severe pain",
    "Tissue ischemia",
    "Underlying cardiac disease",
    "Risk of recurrence"

  ],

  workflow:[

    {
      id:"emergency-assessment",
      step:1,
      title:"Emergency Assessment",
      description:
        "Evaluate sudden onset weakness, pain, limb temperature, and cardiovascular status."
    },

    {
      id:"physical-examination",
      step:2,
      title:"Physical Examination",
      description:
        "Assess femoral pulses, limb perfusion, neurological status, and pain severity."
    },

    {
      id:"cardiac-evaluation",
      step:3,
      title:"Cardiac Investigation",
      description:
        "Evaluate underlying heart disease using cardiac diagnostics."
    },

    {
      id:"clot-management",
      step:4,
      title:"Thrombus Management",
      description:
        "Initiate antithrombotic therapy and supportive care."

    },

    {
      id:"long-term-care",
      step:5,
      title:"Long-term Prevention",
      description:
        "Manage underlying cardiac disease and prevent recurrence."

    }

  ],

  diagnostics:[

    {
      id:"physical-examination",
      name:"Vascular and Neurological Examination",
      priority:"Essential",
      reason:
        "Detects absent pulses, cold limbs, and neurological deficits."
    },

    {
      id:"echocardiography",
      name:"Echocardiography",
      priority:"Recommended",
      reason:
        "Identifies underlying cardiac disease and clot risk."
    },

    {
      id:"blood-testing",
      name:"CBC and Serum Biochemistry",
      priority:"Recommended",
      reason:
        "Assesses systemic condition and organ function."
    },

    {
      id:"imaging",
      name:"Cardiac Imaging",
      priority:"Recommended",
      reason:
        "Evaluates cardiovascular abnormalities."

    }

  ],

  drugCategories:[

    {
      category:"Antithrombotic Therapy",
      indication:"Blood clot management",
      reason:
        "Reduces further clot formation."
    },

    {
      category:"Analgesic Therapy",
      indication:"Severe ischemic pain",
      reason:
        "Provides pain control."
    },

    {
      category:"Cardiac Therapy",
      indication:"Underlying heart disease",
      reason:
        "Manages the primary cardiac condition."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"clopidogrel",
      priority:"Supportive",
      category:"Antiplatelet"
    },

    {
      drugId:"buprenorphine",
      priority:"Supportive",
      category:"Analgesic"

    }

  ],

  stabilization:[

    "Provide immediate pain control.",
    "Assess cardiovascular stability.",
    "Begin antithrombotic management.",
    "Monitor limb perfusion.",
    "Evaluate underlying cardiac disease."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Known heart disease", weight:80 },

      { finding:"Previous thromboembolism", weight:75 },

      { finding:"Sudden onset weakness", weight:85 },

      { finding:"Older cat", weight:55 },

      { finding:"Hypertrophic cardiomyopathy history", weight:85 }

    ],

    clinicalSigns:[

      { finding:"Sudden hind limb paralysis", weight:95 },

      { finding:"Severe pain", weight:90 },

      { finding:"Cold hind limbs", weight:85 },

      { finding:"Absent femoral pulses", weight:95 },

      { finding:"Vocalization", weight:70 },

      { finding:"Rapid breathing due to pain", weight:60 }

    ],

    biochemistry:[

      { finding:"Muscle enzyme elevation", weight:45 },

      { finding:"Metabolic abnormalities due to stress", weight:35 },

      { finding:"Changes related to underlying heart disease", weight:40 }

    ],

    imaging:[

      { finding:"Left atrial enlargement", weight:75 },

      { finding:"Underlying cardiomyopathy", weight:80 },

      { finding:"Cardiac clot visualization", weight:90 }

    ],

    supports:[

      { finding:"Acute painful hind limb paralysis", weight:95 },

      { finding:"Absent pulses", weight:95 },

      { finding:"Cold extremities", weight:85 },

      { finding:"Underlying heart disease", weight:80 }

    ],

    against:[

      { finding:"Normal limb circulation", weight:-70 },

      { finding:"Chronic neurological disease", weight:-40 },

      { finding:"Alternative diagnosis confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"limb",
      parameter:"Limb perfusion and neurological function",
      frequency:"Frequent during acute phase",
      reason:
        "Evaluates recovery and progression."
    },

    {
      id:"pain",
      parameter:"Pain level",
      frequency:"Continuous assessment",
      reason:
        "Ensures adequate analgesia."
    },

    {
      id:"heart",
      parameter:"Cardiac status",
      frequency:"Follow-up",
      reason:
        "Monitors underlying disease."

    }

  ],

  precautions:[

    {
      id:"emergency",
      title:"Cardiovascular Emergency",
      description:
        "Sudden hind limb paralysis with absent pulses requires immediate veterinary attention."
    },

    {
      id:"recurrence",
      title:"Recurrence Risk",
      description:
        "Cats with underlying heart disease remain at risk of future thromboembolic events."

    }

  ],

  prognosis:
    "Prognosis is variable and depends on clot location, severity of tissue damage, underlying heart disease, and response to therapy. Recurrence risk remains significant.",

  strengtheningEvidence:[

    "Sudden onset paralysis",

    "Absent femoral pulses",

    "Cold painful limbs",

    "Cardiac disease"

  ],

  weakeningEvidence:[

    "Normal pulses",

    "Gradual neurological disease",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Sudden hind limb paralysis",

    "Severe pain",

    "Cold paws",

    "Absent pulses"

  ],

  ruleOutFindings:[

    "Spinal cord disease",

    "Traumatic injury",

    "Peripheral nerve disease",

    "Fracture",

    "Severe arthritis"

  ],

};