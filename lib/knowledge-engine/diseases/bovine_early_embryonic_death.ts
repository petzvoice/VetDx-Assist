import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineEarlyEmbryonicDeath: DiseaseCard = {
  id: "bovine-early-embryonic-death",

  title: "Early Embryonic Death",

  description:
    "A reproductive disorder in cattle characterized by loss of the embryo during early gestation after fertilization, resulting in repeat breeding, increased calving interval, and reduced reproductive efficiency.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Early Embryonic Loss",
    "Embryonic Mortality",
    "Early Pregnancy Failure",
  ],

  overview:
    "Early embryonic death is one of the major causes of reproductive failure in cattle. It occurs after fertilization during early gestation before the embryo develops into a recognizable fetus. Causes include inadequate progesterone support, uterine environment abnormalities, infectious reproductive diseases, nutritional deficiencies, heat stress, genetic abnormalities, and management problems. Many cases remain unnoticed because cows return to estrus after an extended interval and are classified as repeat breeders.",

  clinicalProblems: [

    "Repeat breeding",
    "Extended calving interval",
    "Reduced conception efficiency",
    "Poor herd reproductive performance",
    "Economic loss"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess breeding records, repeat breeding status, heat detection accuracy, nutrition, stress factors, and herd reproductive performance."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Reproductive Examination",
      description:
        "Evaluate reproductive tract health, ovarian activity, uterine condition, and possible causes of pregnancy failure."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Confirm pregnancy status and investigate infectious, hormonal, nutritional, and management-related causes."
    },

    {
      id: "management",
      step: 4,
      title: "Control and Prevention",
      description:
        "Improve fertility through nutritional management, disease prevention, reproductive monitoring, and correction of risk factors."
    }

  ],

  diagnostics: [

    {
      id: "ultrasound",
      name: "Transrectal Ultrasonography",
      priority: "Essential",
      reason:
        "Detects early pregnancy and identifies embryonic loss."
    },

    {
      id: "pregnancy-associated-glycoprotein",
      name: "Pregnancy-Associated Glycoprotein Testing",
      priority: "Recommended",
      reason:
        "Helps confirm pregnancy status after conception."
    },

    {
      id: "reproductive-examination",
      name: "Reproductive Tract Examination",
      priority: "Essential",
      reason:
        "Identifies uterine and ovarian abnormalities affecting pregnancy maintenance."
    },

    {
      id: "infectious-disease-testing",
      name: "Reproductive Disease Screening",
      priority: "Recommended",
      reason:
        "Detects infectious causes of embryonic loss."
    },

    {
      id: "nutritional-assessment",
      name: "Nutritional Assessment",
      priority: "Recommended",
      reason:
        "Identifies nutritional factors affecting embryo survival."
    }

  ],

  drugCategories: [

    {
      category: "Hormonal Therapy",
      indication: "Luteal insufficiency and reproductive management",
      reason:
        "Supports reproductive hormone balance when indicated."
    },

    {
      category: "Antimicrobials",
      indication: "Confirmed infectious reproductive disease",
      reason:
        "Treats susceptible bacterial reproductive infections."
    },

    {
      category: "Nutritional Support",
      indication: "Deficiency-related reproductive failure",
      reason:
        "Corrects nutritional factors affecting embryo survival."
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

    "Evaluate reproductive records and identify repeat breeders.",
    "Correct nutritional deficiencies.",
    "Reduce environmental and heat stress.",
    "Investigate infectious reproductive causes.",
    "Improve breeding timing and pregnancy monitoring.",
    "Monitor affected animals for future reproductive performance."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Repeat breeding cows",
        weight: 95
      },

      {
        finding: "Increased days open",
        weight: 90
      },

      {
        finding: "Heat stress exposure",
        weight: 80
      },

      {
        finding: "Poor herd conception rate",
        weight: 90
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
        finding: "Normal reproductive examination between cycles",
        weight: 70
      }

    ],

    biochemistry: [

      {
        finding: "Low progesterone concentration",
        weight: 60
      },

      {
        finding: "Metabolic imbalance",
        weight: 50
      }

    ],

    imaging: [

      {
        finding: "Ultrasound evidence of embryonic loss",
        weight: 95
      }

    ],

    supports: [

      {
        finding: "Pregnancy confirmed followed by early loss",
        weight: 100
      },

      {
        finding: "Repeated early reproductive failure",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Successful pregnancy maintenance",
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
      parameter: "Pregnancy confirmation and embryo viability",
      frequency: "Early gestation monitoring",
      reason:
        "Detects embryonic loss and evaluates pregnancy maintenance."
    },

    {
      id: "reproductive-records",
      parameter: "Conception rate, repeat breeding, and days open",
      frequency: "Monthly herd review",
      reason:
        "Identifies herd-level reproductive problems."
    },

    {
      id: "body-condition",
      parameter: "Body condition score and nutritional status",
      frequency: "Before breeding and during early pregnancy",
      reason:
        "Ensures adequate energy availability for embryo survival."
    },

    {
      id: "progesterone-monitoring",
      parameter: "Corpus luteum function and progesterone support",
      frequency: "When hormonal dysfunction is suspected",
      reason:
        "Evaluates luteal support required for pregnancy maintenance."
    },

    {
      id: "herd-health-monitoring",
      parameter: "Reproductive disease surveillance",
      frequency: "Routine herd health program",
      reason:
        "Identifies infectious causes of embryonic loss."
    }

  ],

  precautions: [

    {
      id: "nutrition",
      title: "Optimize Reproductive Nutrition",
      description:
        "Maintain adequate energy, protein, minerals, and vitamins before breeding and during early pregnancy."
    },

    {
      id: "heat-stress",
      title: "Reduce Heat Stress",
      description:
        "Provide shade, cooling systems, and proper environmental management during hot periods."
    },

    {
      id: "disease-control",
      title: "Control Reproductive Diseases",
      description:
        "Maintain vaccination, biosecurity, and disease monitoring programs for infectious causes of pregnancy loss."
    },

    {
      id: "breeding-management",
      title: "Improve Breeding Management",
      description:
        "Ensure accurate estrus detection, proper artificial insemination timing, and semen handling."
    },

    {
      id: "metabolic-health",
      title: "Maintain Metabolic Health",
      description:
        "Prevent metabolic disorders that negatively affect fertility and embryo survival."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause. Nutritional, environmental, and management-related causes can often be corrected successfully. Persistent infectious, hormonal, or genetic causes may continue to reduce reproductive efficiency if not addressed.",

  strengtheningEvidence: [

    "Pregnancy confirmed followed by early loss",

    "Repeat breeding pattern",

    "Ultrasound-confirmed embryonic loss",

    "Reduced herd conception rate",

    "Presence of reproductive risk factors"

  ],

  weakeningEvidence: [

    "Failure to conceive after mating",

    "Normal pregnancy progression",

    "No evidence of embryo loss",

    "Male infertility confirmed"

  ],

  classicFindings: [

    "Repeat breeder cows",

    "Return to estrus after breeding",

    "Increased days open",

    "Reduced conception rate",

    "Early pregnancy loss"

  ],

  ruleOutFindings: [

    "Bull infertility",

    "Poor heat detection",

    "Anestrus",

    "Late-term abortion",

    "Dystocia",

    "Uterine infection causing infertility"

  ],

};