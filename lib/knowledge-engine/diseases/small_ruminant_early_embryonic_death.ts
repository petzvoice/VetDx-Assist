import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantEarlyEmbryonicDeath: DiseaseCard = {
  id: "small-ruminant-early-embryonic-death",

  title: "Early Embryonic Death",

  description:
    "A reproductive disorder in sheep and goats characterized by loss of the embryo during the early stages of pregnancy before fetal development becomes detectable, resulting in reduced conception rates, repeat breeding, and economic losses.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Early Embryonic Loss",
    "Embryonic Mortality",
    "Early Pregnancy Failure",
  ],

  overview:
    "Early embryonic death occurs during the period from fertilization until early implantation and early fetal development. It is one of the major causes of reproductive failure in small ruminants. Causes include maternal factors, infectious diseases, hormonal abnormalities, nutritional deficiencies, genetic abnormalities, heat stress, and environmental stress. Embryonic loss may occur before the female returns to estrus, resulting in apparent infertility or repeat breeding.",

  clinicalProblems: [

    "Reduced conception rate",
    "Repeat breeding",
    "Extended kidding/lambing interval",
    "Reduced reproductive efficiency",
    "Economic loss"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess breeding records, estrus return, nutrition, infectious disease history, stress factors, and reproductive management."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Reproductive Examination",
      description:
        "Evaluate body condition, reproductive tract health, and evidence of pregnancy failure."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Perform pregnancy diagnosis and evaluate infectious, nutritional, hormonal, and management-related causes."
    },

    {
      id: "management",
      step: 4,
      title: "Control and Prevention",
      description:
        "Correct underlying causes, improve nutrition, control infections, and optimize breeding management."
    }

  ],

  diagnostics: [

    {
      id: "pregnancy-diagnosis",
      name: "Ultrasonography Pregnancy Examination",
      priority: "Essential",
      reason:
        "Detects pregnancy status and identifies early pregnancy loss."
    },

    {
      id: "breeding-records",
      name: "Breeding History Evaluation",
      priority: "Essential",
      reason:
        "Identifies repeat breeding and reproductive performance problems."
    },

    {
      id: "infectious-testing",
      name: "Reproductive Disease Testing",
      priority: "Recommended",
      reason:
        "Identifies infectious causes of embryonic loss."
    },

    {
      id: "nutritional-assessment",
      name: "Nutritional Evaluation",
      priority: "Recommended",
      reason:
        "Detects nutritional deficiencies affecting embryo survival."
    }

  ],

  drugCategories: [

    {
      category: "Hormonal Therapy",
      indication: "Reproductive management disorders",
      reason:
        "Used when hormonal abnormalities contribute to reproductive failure."
    },

    {
      category: "Antimicrobials",
      indication: "Infectious reproductive causes",
      reason:
        "Treats susceptible reproductive infections."
    },

    {
      category: "Nutritional Support",
      indication: "Deficiency-related reproductive loss",
      reason:
        "Corrects nutritional factors affecting pregnancy maintenance."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "progesterone-support",
      priority: "Conditional",
      category: "Hormone"
    },

    {
      drugId: "antibiotics",
      priority: "Infection",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Identify and remove reproductive stress factors.",
    "Improve nutritional status before breeding.",
    "Investigate infectious causes.",
    "Maintain appropriate body condition.",
    "Review breeding and management practices.",
    "Monitor future pregnancy success."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Repeat breeding after mating",
        weight: 95
      },

      {
        finding: "Previous reproductive losses",
        weight: 85
      },

      {
        finding: "Poor body condition",
        weight: 80
      },

      {
        finding: "Heat stress exposure",
        weight: 75
      }

    ],

    clinicalSigns: [

      {
        finding: "Return to estrus after breeding",
        weight: 90
      },

      {
        finding: "Failure to maintain pregnancy",
        weight: 95
      },

      {
        finding: "No visible pregnancy on examination",
        weight: 85
      }

    ],

    biochemistry: [

      {
        finding: "Hormonal abnormalities when present",
        weight: 50
      }

    ],

    imaging: [

      {
        finding: "Ultrasound evidence of early pregnancy loss",
        weight: 90
      }

    ],

    supports: [

      {
        finding: "Pregnancy loss confirmed after conception",
        weight: 100
      },

      {
        finding: "Repeated early reproductive failure",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Normal pregnancy maintenance",
        weight: -90
      },

      {
        finding: "Failure to conceive from the beginning",
        weight: -50
      }

    ],

  },
    monitoring: [

    {
      id: "pregnancy-status",
      parameter: "Pregnancy maintenance and embryo/fetal viability",
      frequency: "Early gestation monitoring",
      reason:
        "Detects pregnancy loss and evaluates reproductive success."
    },

    {
      id: "body-condition",
      parameter: "Body condition score and weight",
      frequency: "Monthly and before breeding",
      reason:
        "Ensures adequate nutritional status for embryo survival."
    },

    {
      id: "estrus-return",
      parameter: "Return to estrus after mating",
      frequency: "During breeding season",
      reason:
        "Identifies failure of pregnancy establishment."
    },

    {
      id: "reproductive-performance",
      parameter: "Conception rate and kidding/lambing rate",
      frequency: "Each breeding cycle",
      reason:
        "Measures overall reproductive efficiency."
    }

  ],

  precautions: [

    {
      id: "nutrition",
      title: "Optimize Breeding Nutrition",
      description:
        "Provide adequate energy, protein, minerals, and vitamins before and during early pregnancy."
    },

    {
      id: "heat-stress",
      title: "Reduce Heat Stress",
      description:
        "Provide shade, ventilation, and appropriate management during hot periods."
    },

    {
      id: "disease-control",
      title: "Control Reproductive Diseases",
      description:
        "Maintain vaccination and biosecurity programs against infectious causes of pregnancy loss."
    },

    {
      id: "breeding-management",
      title: "Improve Breeding Management",
      description:
        "Maintain accurate breeding records and monitor reproductive performance."
    },

    {
      id: "genetic-selection",
      title: "Select Healthy Breeding Animals",
      description:
        "Avoid animals with repeated reproductive failure."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause. Correction of nutritional, environmental, and management factors can significantly improve reproductive performance. Infectious or genetic causes may require specific control measures.",

  strengtheningEvidence: [

    "Pregnancy confirmed followed by early loss",

    "Repeat breeding pattern",

    "Ultrasound confirmation of pregnancy failure",

    "Identification of reproductive risk factors"

  ],

  weakeningEvidence: [

    "Failure to conceive initially",

    "Normal pregnancy progression",

    "No evidence of embryo loss"

  ],

  classicFindings: [

    "Repeat breeding",

    "Return to estrus",

    "Reduced conception rate",

    "Early pregnancy loss",

    "Extended kidding/lambing interval"

  ],

  ruleOutFindings: [

    "Infertility due to anestrus",

    "Poor mating management",

    "Male infertility",

    "Late-term abortion",

    "Dystocia"

  ],

};