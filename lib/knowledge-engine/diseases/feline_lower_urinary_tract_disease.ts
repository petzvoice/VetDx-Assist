import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineLowerUrinaryTractDisease: DiseaseCard = {
  id: "feline-lower-urinary-tract-disease-cat",

  title: "Feline Lower Urinary Tract Disease (FLUTD)",

  description:
    "A group of disorders affecting the feline bladder and urethra causing urinary discomfort, abnormal urination, and possible urinary obstruction.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "FLUTD",
    "Feline Lower Urinary Tract Disease",
    "Feline Urologic Syndrome",
    "Idiopathic Cystitis",
  ],

  overview:
    "Feline lower urinary tract disease describes a collection of conditions affecting the urinary bladder and urethra. Causes include feline idiopathic cystitis, urinary crystals, bladder stones, bacterial infection, anatomical abnormalities, and urethral obstruction. Many cats develop lower urinary signs without an identifiable cause, particularly related to stress and environmental factors. Male cats are at increased risk of life-threatening urethral obstruction.",

  clinicalProblems:[

    "Bladder inflammation",
    "Urinary discomfort",
    "Difficult urination",
    "Blood in urine",
    "Urethral obstruction",
    "Stress-associated urinary disease"

  ],

  workflow:[

    {
      id:"history",
      step:1,
      title:"History Evaluation",
      description:
        "Assess urination frequency, straining, urine appearance, water intake, diet, stress factors, and previous urinary episodes."
    },

    {
      id:"clinical-examination",
      step:2,
      title:"Clinical Examination",
      description:
        "Evaluate bladder size, abdominal discomfort, hydration, and signs of obstruction."
    },

    {
      id:"urine-analysis",
      step:3,
      title:"Urinalysis Evaluation",
      description:
        "Assess urine concentration, blood, crystals, infection indicators, and inflammatory changes."
    },

    {
      id:"imaging",
      step:4,
      title:"Urinary Tract Imaging",
      description:
        "Evaluate bladder stones, obstruction causes, and structural abnormalities."
    },

    {
      id:"management",
      step:5,
      title:"Urinary Management",
      description:
        "Treat underlying cause and prevent recurrence."

    }

  ],

  diagnostics:[

    {
      id:"urinalysis",
      name:"Urinalysis",
      priority:"Essential",
      reason:
        "Evaluates inflammation, blood, crystals, and urine characteristics."
    },

    {
      id:"urine-culture",
      name:"Urine Culture",
      priority:"Recommended",
      reason:
        "Identifies bacterial urinary infection when suspected."
    },

    {
      id:"radiography",
      name:"Abdominal Radiography",
      priority:"Recommended",
      reason:
        "Detects radiopaque urinary stones."
    },

    {
      id:"ultrasound",
      name:"Urinary Ultrasound",
      priority:"Recommended",
      reason:
        "Evaluates bladder wall, stones, and urinary tract abnormalities."

    }

  ],

  drugCategories:[

    {
      category:"Pain Management",
      indication:"Urinary discomfort",
      reason:
        "Controls pain associated with bladder inflammation."
    },

    {
      category:"Urinary Relaxation Therapy",
      indication:"Urethral spasm",
      reason:
        "Helps reduce urinary tract muscle spasm."
    },

    {
      category:"Antimicrobial Therapy",
      indication:"Bacterial urinary infection",
      reason:
        "Treats confirmed bacterial infections."

    }

  ],

  recommendedDrugs:[

    {
      drugId:"buprenorphine",
      priority:"Supportive",
      category:"Analgesic"
    },

    {
      drugId:"prazosin",
      priority:"Supportive",
      category:"Urinary Relaxation"

    }

  ],

  stabilization:[

    "Relieve urethral obstruction immediately if present.",
    "Provide pain control.",
    "Correct fluid and electrolyte abnormalities.",
    "Increase water intake.",
    "Reduce environmental stressors."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Previous urinary episodes", weight:70 },

      { finding:"Stressful environmental changes", weight:55 },

      { finding:"Indoor lifestyle", weight:45 },

      { finding:"Dry food diet", weight:40 },

      { finding:"Male cat", weight:60 }

    ],

    clinicalSigns:[

      { finding:"Straining to urinate", weight:85 },

      { finding:"Frequent urination", weight:75 },

      { finding:"Blood in urine", weight:70 },

      { finding:"Urinating outside litter box", weight:65 },

      { finding:"Pain during urination", weight:75 },

      { finding:"Complete inability to urinate", weight:95 }

    ],

    biochemistry:[

      { finding:"Electrolyte abnormalities in obstruction", weight:70 },

      { finding:"Azotemia due to obstruction", weight:55 },

      { finding:"Usually normal blood values in uncomplicated cases", weight:10 }

    ],

    imaging:[

      { finding:"Urinary stones", weight:75 },

      { finding:"Bladder wall thickening", weight:55 },

      { finding:"Urethral obstruction findings", weight:85 }

    ],

    supports:[

      { finding:"Stranguria", weight:85 },

      { finding:"Hematuria", weight:75 },

      { finding:"Abnormal urination behavior", weight:70 },

      { finding:"Urinary crystals or stones", weight:80 }

    ],

    against:[

      { finding:"Normal urinary evaluation", weight:-40 },

      { finding:"No urinary signs", weight:-60 },

      { finding:"Alternative disease confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"urination",
      parameter:"Urination pattern",
      frequency:"Daily",
      reason:
        "Detects recurrence or obstruction."
    },

    {
      id:"urine",
      parameter:"Urine characteristics",
      frequency:"Follow-up",
      reason:
        "Monitors urinary health."
    },

    {
      id:"hydration",
      parameter:"Water intake",
      frequency:"Regular monitoring",
      reason:
        "Reduces urinary concentration."

    }

  ],

  precautions:[

    {
      id:"obstruction",
      title:"Urethral Obstruction Emergency",
      description:
        "Blocked male cats require immediate veterinary intervention due to risk of severe metabolic complications."
    },

    {
      id:"prevention",
      title:"Recurrence Prevention",
      description:
        "Environmental enrichment, stress reduction, and increased water intake help reduce recurrence."

    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause. Many cats with uncomplicated FLUTD improve with appropriate management, while urethral obstruction is a life-threatening emergency.",

  strengtheningEvidence:[

    "Straining to urinate",

    "Hematuria",

    "Urinary frequency",

    "Urinary obstruction"

  ],

  weakeningEvidence:[

    "Normal urinary function",

    "No urinary signs",

    "Alternative diagnosis confirmed"

  ],

  classicFindings:[

    "Frequent urination",

    "Straining",

    "Blood in urine",

    "Urination outside litter box"

  ],

  ruleOutFindings:[

    "Urinary stones",

    "Bacterial cystitis",

    "Urinary obstruction",

    "Bladder neoplasia",

    "Kidney disease"

  ],

};