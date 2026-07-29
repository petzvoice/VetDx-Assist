import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineProstatitis: DiseaseCard = {
  id: "canine-prostatitis-dog",

  title: "Canine Prostatitis",

  description:
    "A bacterial infection and inflammation of the prostate gland that may present as an acute life-threatening illness or a chronic recurrent condition in intact male dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Bacterial Prostatitis",
    "Acute Prostatitis",
    "Chronic Prostatitis",
    "Prostatic Infection",
  ],

  overview:
    "Canine prostatitis is most commonly caused by ascending bacterial infection from the urinary tract. Acute prostatitis is characterized by systemic illness, fever, abdominal pain, and septic complications, whereas chronic prostatitis often presents with recurrent urinary tract infections and infertility. Benign prostatic hyperplasia frequently predisposes intact male dogs to infection. Diagnosis relies on clinical findings, rectal examination, urinalysis, urine culture, imaging, and culture of prostatic fluid when appropriate.",

  clinicalProblems: [

    "Bacterial infection",
    "Prostatic inflammation",
    "Lower urinary tract disease",
    "Fever",
    "Septicemia",
    "Painful prostate",
    "Recurrent urinary tract infection",
    "Infertility"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess systemic illness, urinary signs, reproductive history, and prostate enlargement."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm bacterial infection using urinalysis, urine culture, imaging, and prostatic evaluation."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Administer appropriate antibiotics, provide supportive care, and manage septic complications."
    },

    {
      id: "monitor-treatment",
      step: 4,
      title: "Monitor Treatment",
      description:
        "Monitor clinical improvement and repeat cultures to confirm infection resolution."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Address predisposing diseases and consider castration after infection control."
    }

  ],

  diagnostics: [

    {
      id: "urinalysis",
      name: "Complete Urinalysis",
      priority: "Essential",
      reason:
        "Detects pyuria, bacteriuria, and hematuria."
    },

    {
      id: "urine-culture",
      name: "Urine Culture and Susceptibility",
      priority: "Essential",
      reason:
        "Identifies the causative organism and guides antimicrobial therapy."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Essential",
      reason:
        "Evaluates systemic inflammation and organ function."
    },

    {
      id: "ultrasound",
      name: "Prostatic Ultrasonography",
      priority: "Essential",
      reason:
        "Assesses prostate size, abscessation, and cyst formation."
    },

    {
      id: "prostatic-fluid",
      name: "Prostatic Fluid Culture",
      priority: "Recommended",
      reason:
        "Confirms infection in selected chronic cases."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotic",
      indication: "Bacterial prostatitis",
      reason: "Eliminates prostatic bacterial infection."
    },

    {
      category: "Intravenous Fluid",
      indication: "Sepsis or dehydration",
      reason: "Supports cardiovascular stability."
    },

    {
      category: "Analgesic",
      indication: "Pain",
      reason: "Improves patient comfort."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "enrofloxacin",
      priority: "First Line",
      category: "Antibiotic",
    },

    {
      drugId: "trimethoprim-sulfamethoxazole",
      priority: "Alternative",
      category: "Antibiotic",
    },

    {
      drugId: "marbofloxacin",
      priority: "Alternative",
      category: "Antibiotic",
    }

  ],

  stabilization: [

    "Treat septic shock if present.",
    "Initiate culture-guided antimicrobial therapy.",
    "Provide intravenous fluid therapy when indicated.",
    "Administer analgesia.",
    "Drain prostatic abscesses surgically if necessary."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Intact male dog", weight: 30 },

      { finding: "Recurrent urinary tract infections", weight: 35 },

      { finding: "Hematuria", weight: 25 },

      { finding: "Infertility", weight: 15 }

    ],

    clinicalSigns: [

      { finding: "Fever", weight: 35 },

      { finding: "Painful enlarged prostate", weight: 45 },

      { finding: "Caudal abdominal pain", weight: 25 },

      { finding: "Purulent preputial discharge", weight: 25 }

    ],

    biochemistry: [

      { finding: "Inflammatory leukogram", weight: 25 },

      { finding: "Hyperglobulinemia", weight: 15 }

    ],

    urinalysis: [

      { finding: "Pyuria", weight: 40 },

      { finding: "Bacteriuria", weight: 40 },

      { finding: "Hematuria", weight: 30 }

    ],

    supports: [

      { finding: "Positive urine culture", weight: 45 },

      { finding: "Ultrasound evidence of prostatitis", weight: 45 },

      { finding: "Positive prostatic fluid culture", weight: 50 }

    ],

    against: [

      { finding: "Normal prostate examination", weight: -20 },

      { finding: "Negative bacterial cultures", weight: -30 },

      { finding: "Alternative prostatic disease confirmed", weight: -35 }

    ],

  },

  monitoring: [

    {
      id:"clinical",
      parameter:
        "Clinical signs and rectal examination",
      frequency:
        "Weekly during treatment",
      reason:
        "Assesses treatment response."
    },

    {
      id:"culture",
      parameter:
        "Repeat urine culture",
      frequency:
        "After completion of therapy",
      reason:
        "Confirms bacterial eradication."
    },

    {
      id:"ultrasound",
      parameter:
        "Prostatic ultrasonography",
      frequency:
        "As indicated",
      reason:
        "Monitors abscess resolution and prostate size."
    }

  ],

  precautions: [

    {
      id:"abscess",
      title:
        "Prostatic Abscesses Require Intervention",
      description:
        "Medical therapy alone is often insufficient for large prostatic abscesses."
    },

    {
      id:"castration",
      title:
        "Consider Castration",
      description:
        "Castration reduces recurrence by resolving benign prostatic hyperplasia and decreasing prostatic size."
    }

  ],

  prognosis:
    "Prognosis is good for uncomplicated cases receiving appropriate antimicrobial therapy. Prognosis becomes guarded with septicemia, prostatic abscessation, or delayed treatment.",

  strengtheningEvidence: [

    "Painful enlarged prostate",

    "Positive urine culture",

    "Pyuria",

    "Bacteriuria",

    "Ultrasound evidence of prostatitis",

    "Intact male dog"

  ],

  weakeningEvidence: [

    "Negative bacterial culture",

    "Normal prostate",

    "Alternative reproductive disease",

    "Sterile prostatic cyst",

    "Prostatic neoplasia"

  ],

  classicFindings: [

    "Intact male",

    "Fever",

    "Painful enlarged prostate",

    "Hematuria",

    "Pyuria",

    "Positive urine culture"

  ],

  ruleOutFindings: [

    "Benign prostatic hyperplasia",

    "Prostatic abscess",

    "Prostatic cyst",

    "Prostatic neoplasia",

    "Bacterial cystitis"

  ],

};