import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineBacterialCystitis: DiseaseCard = {
  id: "canine-bacterial-cystitis-dog",

  title: "Canine Bacterial Cystitis",

  description:
    "A bacterial infection of the urinary bladder causing lower urinary tract inflammation characterized by dysuria, pollakiuria, hematuria, and urinary discomfort.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Bacterial Urinary Tract Infection",
    "Lower Urinary Tract Infection",
    "UTI",
    "Bacterial Cystitis",
  ],

  overview:
    "Bacterial cystitis is the most common urinary tract infection in dogs and usually results from ascending bacterial infection of the urinary bladder. Escherichia coli is the most frequently isolated pathogen, although other Gram-negative and Gram-positive bacteria may be involved. Predisposing factors include endocrine disease, urinary calculi, urinary catheterization, anatomic abnormalities, urinary incontinence, and immunosuppression. Diagnosis requires urinalysis and ideally quantitative urine culture with antimicrobial susceptibility testing.",

  clinicalProblems: [

    "Lower urinary tract infection",
    "Pollakiuria",
    "Dysuria",
    "Hematuria",
    "Urinary urgency",
    "Urinary inflammation",
    "Bacteriuria",
    "Recurrent urinary tract infection"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Evaluate lower urinary tract signs, duration of illness, previous infections, and predisposing conditions."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm urinary tract infection with urinalysis and urine culture before antimicrobial therapy whenever possible."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Initiate appropriate antimicrobial therapy based on culture and susceptibility results."
    },

    {
      id: "monitor-response",
      step: 4,
      title: "Monitor Response",
      description:
        "Assess resolution of clinical signs and repeat culture when indicated."
    },

    {
      id: "prevent-recurrence",
      step: 5,
      title: "Prevent Recurrence",
      description:
        "Identify and correct underlying causes that predispose to recurrent infection."
    }

  ],

  diagnostics: [

    {
      id: "urinalysis",
      name: "Complete Urinalysis",
      priority: "Essential",
      reason:
        "Detects pyuria, hematuria, bacteriuria, and urine characteristics."
    },

    {
      id: "urine-culture",
      name: "Quantitative Urine Culture and Susceptibility",
      priority: "Essential",
      reason:
        "Gold standard for diagnosis and antimicrobial selection."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates concurrent disease and systemic involvement."
    },

    {
      id: "ultrasound",
      name: "Abdominal Ultrasonography",
      priority: "Recommended",
      reason:
        "Detects uroliths, bladder abnormalities, or predisposing disease."
    },

    {
      id: "radiographs",
      name: "Abdominal Radiographs",
      priority: "Recommended",
      reason:
        "Evaluates urinary calculi and structural abnormalities."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotic",
      indication: "Bacterial cystitis",
      reason: "Eliminates urinary tract infection."
    },

    {
      category: "Analgesic",
      indication: "Urinary discomfort",
      reason: "Improves patient comfort when appropriate."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "amoxicillin-clavulanate",
      priority: "First Line",
      category: "Antibiotic",
    },

    {
      drugId: "cephalexin",
      priority: "Alternative",
      category: "Antibiotic",
    },

    {
      drugId: "enrofloxacin",
      priority: "Conditional",
      category: "Antibiotic",
    }

  ],

  stabilization: [

    "Obtain urine culture before initiating antimicrobials whenever possible.",
    "Provide adequate hydration.",
    "Treat urinary obstruction immediately if present.",
    "Identify underlying diseases predisposing to recurrent infection.",
    "Complete the prescribed antimicrobial course."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Pollakiuria", weight: 35 },

      { finding: "Dysuria", weight: 35 },

      { finding: "Hematuria", weight: 30 },

      { finding: "Urinary accidents", weight: 20 }

    ],

    clinicalSigns: [

      { finding: "Painful urination", weight: 30 },

      { finding: "Frequent small-volume urination", weight: 40 },

      { finding: "Bladder discomfort", weight: 20 },

      { finding: "Perigenital licking", weight: 20 }

    ],

    biochemistry: [

      { finding: "Usually normal serum biochemistry", weight: 10 }

    ],

    urinalysis: [

      { finding: "Pyuria", weight: 45 },

      { finding: "Bacteriuria", weight: 45 },

      { finding: "Hematuria", weight: 35 },

      { finding: "Positive urine culture", weight: 50 }

    ],

    supports: [

      { finding: "Positive quantitative urine culture", weight: 50 },

      { finding: "Pyuria with bacteriuria", weight: 45 },

      { finding: "Clinical response to appropriate antibiotics", weight: 20 }

    ],

    against: [

      { finding: "Negative urine culture", weight: -40 },

      { finding: "No pyuria", weight: -25 },

      { finding: "Alternative lower urinary tract disease confirmed", weight: -35 }

    ],

  },

  monitoring: [

    {
      id:"clinical",
      parameter:
        "Clinical signs",
      frequency:
        "Throughout treatment",
      reason:
        "Confirms clinical improvement."
    },

    {
      id:"culture",
      parameter:
        "Urine culture",
      frequency:
        "After treatment in recurrent or complicated cases",
      reason:
        "Confirms bacterial elimination."
    },

    {
      id:"urinalysis",
      parameter:
        "Urinalysis",
      frequency:
        "At recheck",
      reason:
        "Assesses resolution of inflammation."
    }

  ],

  precautions: [

    {
      id:"culture",
      title:
        "Culture Before Antibiotics",
      description:
        "Whenever possible, obtain urine for quantitative culture before starting antimicrobial therapy."
    },

    {
      id:"predisposing",
      title:
        "Investigate Underlying Causes",
      description:
        "Dogs with recurrent infections should be evaluated for endocrine disease, urinary calculi, anatomical abnormalities, or neoplasia."
    }

  ],

  prognosis:
    "Prognosis is excellent for uncomplicated bacterial cystitis when treated appropriately. Prognosis depends on successful management of underlying predisposing conditions in recurrent or complicated infections.",

  strengtheningEvidence: [

    "Positive urine culture",

    "Pyuria",

    "Bacteriuria",

    "Pollakiuria",

    "Dysuria",

    "Hematuria"

  ],

  weakeningEvidence: [

    "Negative urine culture",

    "Absence of pyuria",

    "Sterile cystitis",

    "Urinary neoplasia",

    "Urolithiasis without infection"

  ],

  classicFindings: [

    "Pollakiuria",

    "Dysuria",

    "Hematuria",

    "Pyuria",

    "Bacteriuria",

    "Positive urine culture"

  ],

  ruleOutFindings: [

    "Urolithiasis",

    "Sterile cystitis",

    "Transitional cell carcinoma",

    "Prostatitis",

    "Urinary obstruction"

  ],

};