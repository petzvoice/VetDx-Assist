import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const brucellosis: DiseaseCard = {
  id: "brucellosis-dog",

  title: "Canine Brucellosis",

  description:
    "A zoonotic bacterial disease primarily affecting the reproductive system, causing infertility, abortion, orchitis, and chronic infection in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Brucella canis Infection",
    "Canine Brucellosis",
    "Brucellosis",
  ],

  overview:
    "Canine brucellosis is a contagious bacterial disease caused primarily by Brucella canis. Transmission occurs through reproductive secretions, aborted fetuses, semen, vaginal discharge, urine, and contaminated environments. The disease primarily affects the reproductive tract but may also cause discospondylitis, uveitis, lymphadenopathy, and chronic systemic illness. Infected dogs often remain lifelong carriers and represent an important zoonotic risk.",

  clinicalProblems: [

    "Abortion",
    "Infertility",
    "Stillbirths",
    "Orchitis/Epididymitis",
    "Scrotal swelling",
    "Lymphadenopathy",
    "Discospondylitis",
    "Chronic weight loss"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess reproductive history, systemic illness, spinal pain, and zoonotic risk while implementing isolation precautions."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform laboratory testing together with serology, PCR, and bacterial culture to confirm infection."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Institute prolonged antimicrobial therapy, reproductive management, and supportive care while counseling owners regarding zoonotic risk."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor reproductive disease, spinal involvement, treatment response, and recurrence."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Recommend neutering, repeated testing, strict hygiene, and removal of infected dogs from breeding programs."
    }

  ],

  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Evaluates systemic inflammatory changes."
    },

    {
      id: "chemistry",
      name: "Serum Biochemistry Panel",
      priority: "Essential",
      reason:
        "Assesses systemic organ involvement before prolonged treatment."
    },

    {
      id: "rsat",
      name: "Rapid Slide Agglutination Test (RSAT)",
      priority: "Essential",
      reason:
        "Provides initial screening for Brucella canis infection."
    },

    {
      id: "pcr",
      name: "Brucella PCR",
      priority: "Recommended",
      reason:
        "Confirms active infection with high specificity."
    },

    {
      id: "culture",
      name: "Blood or Reproductive Sample Culture",
      priority: "Recommended",
      reason:
        "Definitively identifies Brucella organisms."
    }

  ],

  drugCategories: [
    {
      category: "Antibiotic",
      indication: "Brucella infection",
      reason: "Reduces bacterial burden during prolonged therapy."
    },
    {
      category: "Analgesic",
      indication: "Discospondylitis",
      reason: "Controls pain and improves mobility."
    },
    {
      category: "Fluid Therapy",
      indication: "Systemic illness",
      reason: "Maintains hydration and perfusion."
    },
    {
      category: "Reproductive Management",
      indication: "Breeding animals",
      reason: "Reduces disease transmission."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "doxycycline",
      priority: "First Line",
      category: "Antibiotic",
    },
    {
      drugId: "gentamicin",
      priority: "Combination Therapy",
      category: "Antibiotic",
    },
    {
      drugId: "enrofloxacin",
      priority: "Alternative",
      category: "Antibiotic",
    },
  ],

  stabilization: [
    "Implement strict zoonotic precautions.",
    "Isolate infected dogs from other animals.",
    "Treat dehydration and systemic illness as indicated.",
    "Advise immediate removal of infected dogs from breeding activities."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Breeding kennel exposure", weight: 40 },
      { finding: "Recent abortion or infertility", weight: 45 },
    ],

    clinicalSigns: [
      { finding: "Abortion", weight: 40 },
      { finding: "Orchitis", weight: 35 },
      { finding: "Scrotal swelling", weight: 30 },
      { finding: "Back pain", weight: 25 },
    ],

    biochemistry: [
      { finding: "Hyperglobulinemia", weight: 20 },
    ],

    urinalysis: [

    ],

    supports: [
      { finding: "Positive RSAT", weight: 40 },
      { finding: "Positive Brucella PCR", weight: 50 },
      { finding: "Positive bacterial culture", weight: 50 },
    ],

    against: [
      { finding: "Alternative confirmed reproductive disease", weight: -30 },
    ],
  },

  monitoring: [

    {
      id:"serology",
      parameter:
        "Brucella serology",
      frequency:
        "Every 2–3 months",
      reason:
        "Evaluates response to treatment and recurrence."
    },

    {
      id:"clinical",
      parameter:
        "Reproductive and systemic signs",
      frequency:
        "At each recheck",
      reason:
        "Assesses clinical improvement."
    },

    {
      id:"cbc",
      parameter:
        "Complete Blood Count and Biochemistry",
      frequency:
        "Periodically during therapy",
      reason:
        "Monitors prolonged antimicrobial treatment."
    }

  ],

  precautions: [

    {
      id:"zoonotic",
      title:
        "Zoonotic Disease",
      description:
        "Use appropriate personal protective equipment when handling reproductive tissues, blood, urine, and aborted material."
    },

    {
      id:"breeding",
      title:
        "Breeding Restriction",
      description:
        "Infected dogs should not be used for breeding because they remain important sources of infection."
    }

  ],

  prognosis:
    "The prognosis for complete elimination of infection is guarded because relapse is common despite prolonged antimicrobial therapy. Prognosis for life is generally fair in uncomplicated cases but poor for breeding soundness.",

  strengtheningEvidence: [

    "Positive Brucella PCR",

    "Positive bacterial culture",

    "Positive RSAT",

    "Recent abortion",

    "Infertility",

    "Orchitis",

    "Breeding kennel exposure"

  ],

  weakeningEvidence: [

    "Negative confirmatory testing",

    "Alternative confirmed reproductive disorder",

    "No breeding history",

    "No reproductive abnormalities",

    "Alternative confirmed diagnosis"

  ],

  classicFindings: [

    "Abortion",

    "Infertility",

    "Orchitis",

    "Epididymitis",

    "Discospondylitis",

    "Positive Brucella testing",

    "Breeding kennel exposure"

  ],

  ruleOutFindings: [

    "Alternative confirmed bacterial reproductive disease",

    "Neoplastic reproductive disease",

    "Traumatic spinal disease",

    "Alternative confirmed diagnosis"

  ],

};