import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantBrucellosis: DiseaseCard = {
  id: "small-ruminant-brucellosis",

  title: "Small Ruminant Brucellosis",

  description:
    "A contagious zoonotic bacterial disease of sheep and goats caused primarily by Brucella melitensis, characterized by abortion, stillbirths, infertility, orchitis, epididymitis, and reduced reproductive performance.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Ovine Brucellosis",
    "Caprine Brucellosis",
    "Brucella melitensis Infection",
    "Malta Fever (Human Disease)"
  ],

  overview:
    "Brucellosis is a major reproductive disease caused predominantly by Brucella melitensis in sheep and goats. Infection spreads through aborted fetuses, placentas, uterine discharges, milk, semen, and contaminated environments. The organism localizes in reproductive tissues, causing abortion storms and infertility. Because of its zoonotic importance, strict biosecurity, surveillance, and eradication programs are essential.",

  clinicalProblems: [

    "Late-term abortion",
    "Stillbirths",
    "Weak offspring",
    "Retained fetal membranes",
    "Infertility",
    "Orchitis and epididymitis",
    "Reduced flock fertility"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess abortion outbreaks, introduction of replacement animals, reproductive history, and zoonotic exposure."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate aborted females, placentas, mammary glands, and breeding males for reproductive abnormalities."
    },

    {
      id: "laboratory-confirmation",
      step: 3,
      title: "Laboratory Diagnosis",
      description:
        "Confirm infection using serology, PCR, bacterial culture, or organism isolation."
    },

    {
      id: "control",
      step: 4,
      title: "Disease Control",
      description:
        "Implement quarantine, culling policies where required, movement restrictions, and appropriate reporting to veterinary authorities."
    }

  ],

  diagnostics: [

    {
      id: "serology",
      name: "Serological Testing",
      priority: "Essential",
      reason:
        "Primary screening method for flock surveillance."
    },

    {
      id: "pcr",
      name: "PCR",
      priority: "Recommended",
      reason:
        "Provides rapid and highly specific confirmation."
    },

    {
      id: "culture",
      name: "Bacterial Culture",
      priority: "Recommended",
      reason:
        "Definitively confirms Brucella infection."
    },

    {
      id: "placental-examination",
      name: "Placental and Fetal Examination",
      priority: "Recommended",
      reason:
        "Supports diagnosis following abortion."
    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "Management of affected animals",
      reason:
        "Provides supportive care; treatment is generally not recommended in eradication programs."
    },

    {
      category: "Biosecurity",
      indication: "Disease control",
      reason:
        "Essential to prevent transmission within and between flocks."
    }

  ],

  recommendedDrugs: [],

  stabilization: [

    "Immediately isolate aborting animals.",
    "Safely dispose of aborted fetuses and placentas.",
    "Disinfect contaminated environments.",
    "Restrict animal movement.",
    "Protect personnel with appropriate PPE.",
    "Report disease where legally required."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Late-term abortion outbreak",
        weight: 100
      },

      {
        finding: "Introduction of replacement animals",
        weight: 85
      },

      {
        finding: "History of reproductive failure",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Late-term abortion",
        weight: 100
      },

      {
        finding: "Retained fetal membranes",
        weight: 80
      },

      {
        finding: "Stillbirths",
        weight: 90
      },

      {
        finding: "Orchitis or epididymitis in males",
        weight: 90
      },

      {
        finding: "Infertility",
        weight: 80
      }

    ],

    biochemistry: [

      {
        finding: "No pathognomonic biochemical abnormalities",
        weight: 10
      }

    ],

    imaging: [

      {
        finding: "No routine diagnostic imaging findings",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Positive Brucella serology",
        weight: 95
      },

      {
        finding: "Positive PCR or bacterial culture",
        weight: 100
      }

    ],

    against: [

      {
        finding: "Negative confirmatory laboratory testing",
        weight: -70
      },

      {
        finding: "Alternative cause of abortion confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "abortion-rate",
      parameter: "Abortion and stillbirth rate",
      frequency: "Continuous during lambing/kidding season",
      reason:
        "Detects ongoing transmission and evaluates effectiveness of control measures."
    },

    {
      id: "serology",
      parameter: "Flock serological surveillance",
      frequency: "As recommended by local control programs",
      reason:
        "Identifies infected animals and monitors herd status."
    },

    {
      id: "reproductive-performance",
      parameter: "Fertility, conception rate, and kidding/lambing performance",
      frequency: "Each breeding season",
      reason:
        "Assesses long-term reproductive impact."
    },

    {
      id: "male-breeders",
      parameter: "Breeding male reproductive examination",
      frequency: "Before each breeding season",
      reason:
        "Detects orchitis, epididymitis, and infertility."
    },

    {
      id: "new-cases",
      parameter: "New clinical and laboratory-confirmed cases",
      frequency: "Continuous",
      reason:
        "Monitors disease eradication progress."

    }

  ],

  precautions: [

    {
      id: "biosecurity",
      title: "Strict Biosecurity",
      description:
        "Prevent introduction of infected animals and immediately isolate suspected cases."
    },

    {
      id: "quarantine",
      title: "Quarantine New Animals",
      description:
        "Test replacement animals before introducing them into the flock."
    },

    {
      id: "abortion-material",
      title: "Safe Disposal of Abortion Materials",
      description:
        "Dispose of aborted fetuses, placentas, and contaminated bedding safely and disinfect affected areas."
    },

    {
      id: "zoonosis",
      title: "Human Health Protection",
      description:
        "Wear gloves and protective clothing while handling abortion materials and avoid consumption of unpasteurized milk."

    }

  ],

  prognosis:
    "Prognosis for individual reproductive performance is guarded. At the flock level, successful control depends on surveillance, biosecurity, vaccination where permitted, and eradication programs. Because brucellosis is a significant zoonosis, public health considerations are critical.",

  strengtheningEvidence: [

    "Late-term abortion storm",

    "Positive Brucella serology",

    "Positive PCR or bacterial culture",

    "Orchitis or epididymitis in breeding males"

  ],

  weakeningEvidence: [

    "Repeated negative confirmatory testing",

    "Normal reproductive performance",

    "Alternative infectious cause of abortion confirmed"

  ],

  classicFindings: [

    "Late-term abortion",

    "Retained fetal membranes",

    "Stillbirths",

    "Orchitis",

    "Infertility"

  ],

  ruleOutFindings: [

    "Chlamydial abortion",

    "Campylobacteriosis",

    "Toxoplasmosis",

    "Q fever (Coxiellosis)",

    "Listeriosis",

    "Salmonellosis"

  ],

};