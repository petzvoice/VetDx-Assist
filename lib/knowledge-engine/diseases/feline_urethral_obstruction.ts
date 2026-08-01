import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const felineUrethralObstruction: DiseaseCard = {
  id: "feline-urethral-obstruction-cat",

  title: "Feline Urethral Obstruction",

  description:
    "A life-threatening emergency in cats caused by blockage of urine flow through the urethra, resulting in urinary retention, metabolic abnormalities, and potential death if untreated.",

  species:[
    Species.CAT,
  ],

  synonyms:[
    "Feline Urethral Blockage",
    "Blocked Cat",
    "Urethral Plug Syndrome",
    "Feline Urinary Obstruction",
  ],

  overview:
    "Feline urethral obstruction is a common emergency condition, particularly affecting male cats due to their narrow urethral anatomy. Obstruction may occur due to urethral plugs, urinary crystals, stones, inflammation, or muscle spasm. Complete obstruction prevents urine elimination, causing bladder distension, azotemia, electrolyte disturbances, and severe systemic complications. Immediate stabilization and relief of obstruction are required.",

  clinicalProblems:[

    "Urinary blockage",
    "Bladder distension",
    "Electrolyte imbalance",
    "Acute kidney dysfunction",
    "Severe pain",
    "Life-threatening emergency"

  ],

  workflow:[

    {
      id:"emergency-assessment",
      step:1,
      title:"Emergency Assessment",
      description:
        "Assess urinary output, cardiovascular status, pain, hydration, and severity of obstruction."
    },

    {
      id:"physical-examination",
      step:2,
      title:"Physical Examination",
      description:
        "Evaluate bladder size, abdominal pain, heart rate, and systemic compromise."
    },

    {
      id:"stabilization",
      step:3,
      title:"Emergency Stabilization",
      description:
        "Correct life-threatening electrolyte and cardiovascular abnormalities before or during treatment."
    },

    {
      id:"decompression",
      step:4,
      title:"Urinary Decompression",
      description:
        "Restore urine flow through catheterization and appropriate management."

    },

    {
      id:"prevention",
      step:5,
      title:"Recurrence Prevention",
      description:
        "Address dietary, environmental, and urinary risk factors."

    }

  ],

  diagnostics:[

    {
      id:"physical-exam",
      name:"Physical Examination",
      priority:"Essential",
      reason:
        "A large painful bladder with inability to urinate strongly supports obstruction."
    },

    {
      id:"serum-biochemistry",
      name:"Serum Biochemistry",
      priority:"Essential",
      reason:
        "Evaluates kidney function and electrolyte abnormalities."
    },

    {
      id:"urinalysis",
      name:"Urinalysis",
      priority:"Recommended",
      reason:
        "Evaluates crystals, blood, inflammation, and urine characteristics."
    },

    {
      id:"imaging",
      name:"Radiography/Ultrasound",
      priority:"Recommended",
      reason:
        "Identifies stones or structural abnormalities."

    }

  ],

  drugCategories:[

    {
      category:"Analgesic Therapy",
      indication:"Severe urinary pain",
      reason:
        "Provides pain relief during emergency management."
    },

    {
      category:"Urethral Relaxation Therapy",
      indication:"Urethral spasm",
      reason:
        "Helps facilitate urine passage after decompression."
    },

    {
      category:"Supportive Emergency Therapy",
      indication:"Metabolic abnormalities",
      reason:
        "Corrects dehydration and electrolyte disturbances."

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

    "Assess and correct hyperkalemia.",
    "Provide intravenous fluid therapy.",
    "Relieve urinary obstruction.",
    "Provide analgesia.",
    "Monitor kidney function and urine production."

  ],

  clinicalEvidence:{

    history:[

      { finding:"Male cat", weight:70 },

      { finding:"Previous urinary obstruction", weight:75 },

      { finding:"History of FLUTD", weight:65 },

      { finding:"Indoor lifestyle", weight:35 },

      { finding:"Reduced water intake", weight:40 }

    ],

    clinicalSigns:[

      { finding:"Unable to urinate", weight:100 },

      { finding:"Repeated straining", weight:90 },

      { finding:"Painful vocalization", weight:75 },

      { finding:"Frequent litter box visits", weight:75 },

      { finding:"Lethargy", weight:60 },

      { finding:"Vomiting", weight:55 },

      { finding:"Collapse", weight:85 }

    ],

    biochemistry:[

      { finding:"Hyperkalemia", weight:90 },

      { finding:"Azotemia", weight:80 },

      { finding:"Metabolic acidosis", weight:65 },

      { finding:"Electrolyte imbalance", weight:75 }

    ],

    imaging:[

      { finding:"Large distended bladder", weight:90 },

      { finding:"Urinary stones", weight:65 },

      { finding:"Urethral obstruction evidence", weight:90 }

    ],

    supports:[

      { finding:"No urine production", weight:100 },

      { finding:"Firm enlarged bladder", weight:90 },

      { finding:"Electrolyte abnormalities", weight:80 },

      { finding:"Male cat with FLUTD history", weight:70 }

    ],

    against:[

      { finding:"Normal urination", weight:-90 },

      { finding:"Empty bladder", weight:-60 },

      { finding:"Alternative diagnosis confirmed", weight:-50 }

    ],

  },

  monitoring:[

    {
      id:"urine-output",
      parameter:"Urine production",
      frequency:"Continuous after treatment",
      reason:
        "Confirms restoration of urinary flow."
    },

    {
      id:"electrolytes",
      parameter:"Electrolyte levels",
      frequency:"Regular during stabilization",
      reason:
        "Detects metabolic complications."
    },

    {
      id:"kidney",
      parameter:"Renal function",
      frequency:"Follow-up",
      reason:
        "Evaluates recovery from obstruction."

    }

  ],

  precautions:[

    {
      id:"emergency",
      title:"Medical Emergency",
      description:
        "Complete urethral obstruction can become fatal without rapid intervention."
    },

    {
      id:"recurrence",
      title:"Recurrence Risk",
      description:
        "Cats with previous obstruction require long-term preventive strategies."

    }

  ],

  prognosis:
    "Prognosis is good when obstruction is relieved early and complications are controlled. Delayed treatment can result in severe metabolic abnormalities, bladder damage, or death.",

  strengtheningEvidence:[

    "No urine production",

    "Painful straining",

    "Distended bladder",

    "Hyperkalemia"

  ],

  weakeningEvidence:[

    "Normal urination",

    "No bladder enlargement",

    "Alternative cause identified"

  ],

  classicFindings:[

    "Repeated litter box visits",

    "Straining without urine",

    "Pain",

    "Large painful bladder"

  ],

  requiredFindings: [
  "straining",
  "no urine",
  "urinary obstruction"
],

  ruleOutFindings:[

    "Feline idiopathic cystitis",

    "Urinary stones without obstruction",

    "Bacterial cystitis",

    "Kidney disease",

    "Behavioral urination problems"

  ],

};