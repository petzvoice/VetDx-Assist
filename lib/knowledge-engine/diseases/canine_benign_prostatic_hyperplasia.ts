import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineBenignProstaticHyperplasia: DiseaseCard = {
  id: "canine-benign-prostatic-hyperplasia-dog",

  title: "Canine Benign Prostatic Hyperplasia",

  description:
    "A common age-related androgen-dependent enlargement of the prostate in intact male dogs resulting in urinary, gastrointestinal, and reproductive tract abnormalities.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Benign Prostatic Hyperplasia",
    "BPH",
    "Prostatic Hyperplasia",
  ],

  overview:
    "Benign prostatic hyperplasia (BPH) is the most common prostatic disorder in intact older male dogs. It develops secondary to chronic androgenic stimulation, particularly dihydrotestosterone, resulting in diffuse enlargement of the prostate gland. Although non-neoplastic, BPH predisposes dogs to prostatitis, prostatic cysts, and abscess formation. Castration is the definitive treatment, while medical therapy is useful when breeding potential must be maintained.",

  clinicalProblems: [

    "Prostatic enlargement",
    "Tenesmus",
    "Hematuria",
    "Hematospermia",
    "Constipation",
    "Lower urinary tract signs",
    "Infertility",
    "Predisposition to prostatitis"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Evaluate reproductive history, urinary signs, rectal examination findings, and overall health."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm prostatic enlargement while excluding infectious and neoplastic disease."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Institute medical therapy or perform castration depending on breeding status."
    },

    {
      id: "monitor-treatment",
      step: 4,
      title: "Monitor Treatment",
      description:
        "Monitor reduction in prostate size and improvement of clinical signs."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Prevent recurrence through definitive therapy and monitor for secondary prostatic disease."
    }

  ],

  diagnostics: [

    {
      id: "rectal-exam",
      name: "Digital Rectal Examination",
      priority: "Essential",
      reason:
        "Assesses prostate size, symmetry, and pain."
    },

    {
      id: "ultrasound",
      name: "Prostatic Ultrasonography",
      priority: "Essential",
      reason:
        "Evaluates enlargement and excludes cysts, abscesses, or neoplasia."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Assesses overall health and concurrent disease."
    },

    {
      id: "urinalysis",
      name: "Urinalysis",
      priority: "Recommended",
      reason:
        "Screens for concurrent urinary tract disease."
    },

    {
      id: "cytology",
      name: "Prostatic Cytology or Aspirate",
      priority: "Recommended",
      reason:
        "Performed when neoplasia or prostatitis cannot be excluded."
    }

  ],

  drugCategories: [

    {
      category: "5-Alpha Reductase Inhibitor",
      indication: "Medical management",
      reason: "Reduces dihydrotestosterone-mediated prostatic enlargement."
    },

    {
      category: "GnRH Agonist",
      indication: "Temporary medical management",
      reason: "Suppresses testosterone production."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "finasteride",
      priority: "First Line",
      category: "5-Alpha Reductase Inhibitor",
    },

    {
      drugId: "deslorelin",
      priority: "Alternative",
      category: "GnRH Agonist",
    }

  ],

  stabilization: [

    "Relieve constipation if present.",
    "Treat concurrent urinary tract infection when identified.",
    "Recommend castration for dogs not intended for breeding.",
    "Initiate medical therapy in breeding dogs.",
    "Monitor for secondary prostatitis or prostatic cyst formation."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Older intact male dog", weight: 35 },

      { finding: "Hematospermia", weight: 30 },

      { finding: "Intermittent hematuria", weight: 25 },

      { finding: "Tenesmus", weight: 25 }

    ],

    clinicalSigns: [

      { finding: "Symmetrical enlarged prostate", weight: 45 },

      { finding: "Non-painful prostate", weight: 30 },

      { finding: "Blood from penis unrelated to urination", weight: 30 },

      { finding: "Constipation", weight: 20 }

    ],

    biochemistry: [

    ],

    urinalysis: [

      { finding: "Microscopic hematuria", weight: 20 }

    ],

    supports: [

      { finding: "Symmetrical prostatic enlargement on ultrasound", weight: 45 },

      { finding: "Normal prostatic architecture without abscessation", weight: 35 },

      { finding: "Resolution following castration or finasteride therapy", weight: 25 }

    ],

    against: [

      { finding: "Painful prostate", weight: -30 },

      { finding: "Prostatic abscess", weight: -35 },

      { finding: "Prostatic neoplasia confirmed", weight: -45 }

    ],

  },

  monitoring: [

    {
      id:"clinical",
      parameter:
        "Clinical signs",
      frequency:
        "Every 4–8 weeks initially",
      reason:
        "Assesses response to therapy."
    },

    {
      id:"rectal",
      parameter:
        "Rectal examination",
      frequency:
        "At each recheck",
      reason:
        "Monitors reduction in prostate size."
    },

    {
      id:"ultrasound",
      parameter:
        "Prostatic ultrasonography",
      frequency:
        "As clinically indicated",
      reason:
        "Evaluates treatment response and detects complications."
    }

  ],

  precautions: [

    {
      id:"castration",
      title:
        "Castration is Definitive Treatment",
      description:
        "Most prostates decrease substantially in size within weeks following orchiectomy."
    },

    {
      id:"infection",
      title:
        "Evaluate for Concurrent Prostatitis",
      description:
        "Pain, fever, or systemic illness should prompt investigation for bacterial prostatitis."
    }

  ],

  prognosis:
    "Prognosis is excellent. Most dogs experience complete resolution of clinical signs following castration or appropriate medical therapy.",

  strengtheningEvidence: [

    "Older intact male",

    "Symmetrical enlarged prostate",

    "Hematospermia",

    "Intermittent hematuria",

    "Non-painful prostate",

    "Typical ultrasound findings"

  ],

  weakeningEvidence: [

    "Painful prostate",

    "Fever",

    "Prostatic abscess",

    "Prostatic carcinoma",

    "Asymmetrical irregular prostate"

  ],

  classicFindings: [

    "Older intact male",

    "Symmetrical enlarged prostate",

    "Hematospermia",

    "Hematuria",

    "Tenesmus",

    "Constipation"

  ],

  ruleOutFindings: [

    "Bacterial prostatitis",

    "Prostatic abscess",

    "Prostatic cyst",

    "Prostatic carcinoma",

    "Paraprostatic cyst"

  ],

};