import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantAbortion: DiseaseCard = {
  id: "small-ruminant-abortion",

  title: "Abortion",

  description:
    "A reproductive disorder in sheep and goats characterized by loss of pregnancy before normal parturition due to infectious, nutritional, genetic, environmental, or management-related causes.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Pregnancy Loss",
    "Fetal Loss",
    "Premature Pregnancy Termination",
  ],

  overview:
    "Abortion in small ruminants is an important reproductive problem causing economic losses through reduced lambing or kidding rates, increased veterinary costs, and risk of infectious disease spread. Causes include infectious agents such as Brucella spp., Chlamydia abortus, Campylobacter spp., Toxoplasma gondii, Listeria monocytogenes, and Coxiella burnetii, as well as nutritional deficiencies, toxins, stress, and reproductive management problems. Investigation of abortion outbreaks requires evaluation of the dam, fetus, placenta, and flock-level risk factors.",

  clinicalProblems: [

    "Pregnancy loss",
    "Reduced reproductive efficiency",
    "Fetal death",
    "Placental disease",
    "Neonatal losses",
    "Disease transmission risk"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess timing of abortion, number of affected animals, vaccination status, introduction of new animals, nutrition, and environmental factors."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate affected females for fever, reproductive discharge, illness, and other systemic signs."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Examine fetus and placenta, perform laboratory testing, and identify infectious causes."
    },

    {
      id: "management",
      step: 4,
      title: "Control and Management",
      description:
        "Implement biosecurity, treat identified causes, and prevent further reproductive losses."
    }

  ],

  diagnostics: [

    {
      id: "fetus-placenta-examination",
      name: "Fetal and Placental Examination",
      priority: "Essential",
      reason:
        "Provides important diagnostic samples for abortion investigation."
    },

    {
      id: "bacterial-testing",
      name: "Bacterial Culture and PCR",
      priority: "Recommended",
      reason:
        "Identifies infectious abortion agents."
    },

    {
      id: "serology",
      name: "Serological Testing",
      priority: "Recommended",
      reason:
        "Detects exposure to specific infectious organisms."
    },

    {
      id: "blood-profile",
      name: "Dam Blood Examination",
      priority: "Recommended",
      reason:
        "Assesses systemic disease or nutritional status."
    }

  ],

  drugCategories: [

    {
      category: "Antimicrobials",
      indication: "Bacterial reproductive infections",
      reason:
        "Treats susceptible bacterial abortion causes."
    },

    {
      category: "Antiparasitic Therapy",
      indication: "Protozoal causes",
      reason:
        "Targets parasitic reproductive infections."
    },

    {
      category: "Supportive Therapy",
      indication: "Affected females",
      reason:
        "Supports recovery and general health."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "antibiotics",
      priority: "Infection",
      category: "Antibiotic"
    },

    {
      drugId: "toltrazuril",
      priority: "Conditional",
      category: "Antiparasitic"
    }

  ],

  stabilization: [

    "Separate aborted animals when infectious disease is suspected.",
    "Remove and safely dispose of fetal tissues and placenta.",
    "Collect diagnostic samples before treatment when possible.",
    "Provide supportive care to affected females.",
    "Implement farm biosecurity measures.",
    "Identify and control the underlying cause."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Multiple abortions in flock",
        weight: 100
      },

      {
        finding: "Recent introduction of new animals",
        weight: 90
      },

      {
        finding: "Poor vaccination or biosecurity program",
        weight: 85
      },

      {
        finding: "Late pregnancy losses",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Fetal expulsion before term",
        weight: 100
      },

      {
        finding: "Placental abnormalities",
        weight: 90
      },

      {
        finding: "Vaginal discharge",
        weight: 70
      },

      {
        finding: "Maternal illness",
        weight: 75
      }

    ],

    biochemistry: [

      {
        finding: "Nonspecific inflammatory changes",
        weight: 40
      }

    ],

    imaging: [

      {
        finding: "Ultrasound evidence of fetal death",
        weight: 80
      }

    ],

    supports: [

      {
        finding: "Pathogen identified from fetal or placental samples",
        weight: 100
      },

      {
        finding: "Abortion outbreak pattern",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Normal pregnancy progression",
        weight: -90
      },

      {
        finding: "Alternative non-reproductive illness identified",
        weight: -50
      }

    ],

  },
    monitoring: [

    {
      id: "abortion-rate",
      parameter: "Number of abortions and reproductive losses",
      frequency: "Daily during outbreaks",
      reason:
        "Evaluates severity and spread of reproductive disease."
    },

    {
      id: "affected-females",
      parameter: "Health status of aborted females",
      frequency: "Daily",
      reason:
        "Detects fever, infection, and complications."
    },

    {
      id: "laboratory-followup",
      parameter: "Diagnostic test results and pathogen monitoring",
      frequency: "As required",
      reason:
        "Confirms cause and guides control measures."
    },

    {
      id: "breeding-performance",
      parameter: "Conception rate and subsequent reproductive performance",
      frequency: "Next breeding season",
      reason:
        "Measures long-term reproductive impact."
    },

    {
      id: "newborn-survival",
      parameter: "Lamb and kid survival rate",
      frequency: "During lambing/kidding season",
      reason:
        "Assesses effect of reproductive disease control."
    }

  ],

  precautions: [

    {
      id: "biosecurity",
      title: "Improve Biosecurity",
      description:
        "Quarantine new animals and prevent introduction of infectious abortion agents into the flock."
    },

    {
      id: "vaccination",
      title: "Maintain Vaccination Programs",
      description:
        "Use appropriate vaccines against important reproductive pathogens where available."
    },

    {
      id: "hygiene",
      title: "Safe Disposal of Aborted Materials",
      description:
        "Remove fetus and placenta promptly to reduce environmental contamination and disease spread."
    },

    {
      id: "nutrition",
      title: "Optimize Pregnancy Nutrition",
      description:
        "Provide balanced nutrition and mineral supplementation to reduce non-infectious pregnancy losses."
    },

    {
      id: "isolation",
      title: "Isolate Affected Females",
      description:
        "Separate aborting animals until infectious causes are investigated."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause. Individual animals may recover well, but flock-level reproductive losses can continue if infectious causes are not identified and controlled. Early diagnosis and prevention are essential.",

  strengtheningEvidence: [

    "Multiple abortions in a flock",

    "Abnormal fetus or placenta",

    "Positive infectious disease testing",

    "History of exposure to abortion pathogens"

  ],

  weakeningEvidence: [

    "Single isolated abortion with no additional signs",

    "Normal fetal and placental examination",

    "No evidence of infectious disease"

  ],

  classicFindings: [

    "Pregnancy loss",

    "Fetal expulsion before term",

    "Placental abnormalities",

    "Abortion storms",

    "Reduced lambing/kidding rate"

  ],

  ruleOutFindings: [

    "Normal parturition",

    "Dystocia",

    "Stillbirth at term",

    "Nutritional infertility",

    "Neonatal mortality after normal birth"

  ],

};