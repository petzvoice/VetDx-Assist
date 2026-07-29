import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineHerpesvirus: DiseaseCard = {
  id: "canine-herpesvirus-dog",

  title: "Canine Herpesvirus Infection",

  description:
    "A contagious viral disease causing fatal systemic infection in neonatal puppies and respiratory or reproductive disease in older dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "CHV-1 Infection",
    "Canine Herpesvirus",
    "Canid Alphaherpesvirus 1 Infection",
  ],

  overview:
    "Canine herpesvirus type 1 (CHV-1) is an alphaherpesvirus affecting dogs worldwide. Neonatal puppies are highly susceptible because of immature immune responses and poor thermoregulation, often developing rapidly fatal systemic disease. Adult dogs usually develop mild upper respiratory disease, genital infections, infertility, abortion, stillbirths, or neonatal mortality. Latent infection is common, with viral reactivation occurring during periods of stress or immunosuppression.",

  clinicalProblems: [

    "Neonatal mortality",
    "Weak puppy syndrome",
    "Respiratory disease",
    "Abortion",
    "Stillbirths",
    "Infertility",
    "Nasal discharge",
    "Fading puppy syndrome"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess age, body temperature, hydration, respiratory status, and reproductive history while isolating affected animals."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform laboratory testing and confirm infection using molecular diagnostics whenever possible."
    },

    {
      id: "supportive-management",
      step: 3,
      title: "Supportive Management",
      description:
        "Provide intensive supportive care, maintain body temperature, hydration, and nutritional support."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor for respiratory deterioration, septic complications, dehydration, and continued neonatal losses."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Implement strict breeding management, hygiene, and isolation protocols to reduce future outbreaks."
    }

  ],

  diagnostics: [

    {
      id: "physical-exam",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Evaluates respiratory, reproductive, and neonatal abnormalities."
    },

    {
      id: "pcr",
      name: "Canine Herpesvirus PCR",
      priority: "Essential",
      reason:
        "Confirms active infection using appropriate clinical samples."
    },

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Recommended",
      reason:
        "Assesses systemic illness and inflammatory response."
    },

    {
      id: "necropsy",
      name: "Necropsy with Histopathology",
      priority: "Recommended",
      reason:
        "Identifies characteristic lesions in deceased neonatal puppies."
    },

    {
      id: "serology",
      name: "Canine Herpesvirus Serology",
      priority: "Recommended",
      reason:
        "Supports diagnosis and evaluates previous exposure."
    }

  ],

  drugCategories: [
    {
      category: "Fluid Therapy",
      indication: "Dehydration",
      reason: "Maintains hydration and tissue perfusion."
    },
    {
      category: "Thermal Support",
      indication: "Hypothermia",
      reason: "Maintains neonatal body temperature."
    },
    {
      category: "Nutritional Support",
      indication: "Poor nursing",
      reason: "Provides adequate caloric intake."
    },
    {
      category: "Antibiotic",
      indication: "Secondary bacterial infection",
      reason: "Treats opportunistic bacterial complications."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "amoxicillin-clavulanate",
      priority: "Adjunctive",
      category: "Antibiotic",
    },
    {
      drugId: "ampicillin",
      priority: "Alternative",
      category: "Antibiotic",
    },
    {
      drugId: "maropitant",
      priority: "Supportive",
      category: "Antiemetic",
    },
  ],

  stabilization: [
    "Maintain neonatal body temperature.",
    "Correct dehydration and hypoglycemia.",
    "Provide supplemental nutrition when nursing is inadequate.",
    "Isolate infected puppies and breeding animals."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Recent neonatal puppy deaths", weight: 45 },
      { finding: "Breeding kennel outbreak", weight: 35 },
    ],

    clinicalSigns: [
      { finding: "Weak puppy syndrome", weight: 40 },
      { finding: "Hypothermia", weight: 35 },
      { finding: "Respiratory distress", weight: 25 },
      { finding: "Nasal discharge", weight: 15 },
    ],

    biochemistry: [
      { finding: "Hypoglycemia", weight: 20 },
    ],

    urinalysis: [

    ],

    supports: [
      { finding: "Positive CHV PCR", weight: 50 },
      { finding: "Characteristic necropsy lesions", weight: 45 },
    ],

    against: [
      { finding: "Alternative confirmed neonatal septicemia", weight: -35 },
    ],
  },

  monitoring: [

    {
      id:"temperature",
      parameter:
        "Body temperature",
      frequency:
        "Every 2–4 hours in neonatal puppies",
      reason:
        "Maintains adequate thermoregulation."
    },

    {
      id:"hydration",
      parameter:
        "Hydration status",
      frequency:
        "Every 4–6 hours",
      reason:
        "Detects dehydration requiring intervention."
    },

    {
      id:"respiratory",
      parameter:
        "Respiratory effort",
      frequency:
        "Continuous in critical patients",
      reason:
        "Detects respiratory deterioration."
    }

  ],

  precautions: [

    {
      id:"breeding",
      title:
        "Breeding Management",
      description:
        "Prevent exposure of pregnant bitches and neonatal litters to infected dogs."
    },

    {
      id:"latent",
      title:
        "Latent Infection",
      description:
        "Recovered dogs may remain lifelong latent carriers capable of viral reactivation."
    }

  ],

  prognosis:
    "The prognosis is poor for neonatal puppies with systemic canine herpesvirus infection despite aggressive supportive care. Adult dogs with respiratory or reproductive disease generally have a good prognosis.",

  strengtheningEvidence: [

    "Positive canine herpesvirus PCR",

    "Neonatal puppy deaths",

    "Weak puppy syndrome",

    "Breeding kennel outbreak",

    "Characteristic necropsy lesions",

    "Hypothermia in neonates",

    "Recent abortion or stillbirths"

  ],

  weakeningEvidence: [

    "Negative PCR with appropriate sampling",

    "Healthy littermates with no clinical signs",

    "Alternative confirmed infectious disease",

    "No reproductive or neonatal history",

    "Alternative confirmed diagnosis"

  ],

  classicFindings: [

    "Weak puppy syndrome",

    "Neonatal mortality",

    "Hypothermia",

    "Failure to nurse",

    "Abortion",

    "Stillbirths",

    "Positive CHV PCR"

  ],

  ruleOutFindings: [

    "Confirmed bacterial septicemia",

    "Canine parvovirus infection",

    "Canine distemper virus infection",

    "Alternative confirmed neonatal disease"

  ],

};