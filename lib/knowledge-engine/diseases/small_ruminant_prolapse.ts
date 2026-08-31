import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantProlapse: DiseaseCard = {
  id: "small-ruminant-prolapse",

  title: "Reproductive Tract Prolapse",

  description:
    "A reproductive disorder in sheep and goats characterized by protrusion of the vagina, cervix, or uterus through the vulva, commonly occurring during late pregnancy or around parturition and requiring prompt management to prevent trauma, contamination, and reproductive loss.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Vaginal Prolapse",
    "Uterine Prolapse",
    "Genital Prolapse",
  ],

  overview:
    "Reproductive tract prolapse is most commonly observed during late gestation, especially in heavily pregnant animals. Vaginal prolapse occurs when the vaginal wall protrudes through the vulva before parturition, while uterine prolapse usually occurs after delivery. Risk factors include increased abdominal pressure, multiple fetuses, obesity, excessive fetal size, poor nutrition, mineral imbalance, and genetic predisposition. Early correction is important to prevent tissue damage, infection, hemorrhage, and death.",

  clinicalProblems: [

    "Protruding reproductive tissue",
    "Tissue trauma",
    "Contamination",
    "Difficulty during parturition",
    "Hemorrhage",
    "Death in severe cases"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess pregnancy stage, recent parturition, previous prolapse history, body condition, and management factors."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate type of prolapse, tissue viability, contamination, trauma, and overall animal condition."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Diagnosis is mainly based on physical examination and identification of reproductive tissue protrusion."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Prevention",
      description:
        "Replace prolapsed tissue, prevent recurrence, manage complications, and address risk factors."
    }

  ],

  diagnostics: [

    {
      id: "physical-examination",
      name: "Physical Examination",
      priority: "Essential",
      reason:
        "Confirms prolapse type and assesses tissue condition."
    },

    {
      id: "pregnancy-assessment",
      name: "Pregnancy Evaluation",
      priority: "Recommended",
      reason:
        "Determines fetal status and stage of pregnancy."
    },

    {
      id: "tissue-evaluation",
      name: "Tissue Viability Assessment",
      priority: "Essential",
      reason:
        "Identifies damage requiring additional intervention."
    }

  ],

  drugCategories: [

    {
      category: "Local Anesthetics",
      indication: "Pain control during correction",
      reason:
        "Facilitates replacement procedures."
    },

    {
      category: "Antimicrobials",
      indication: "Contamination or infection risk",
      reason:
        "Prevents or treats reproductive tract infection."
    },

    {
      category: "Analgesics",
      indication: "Pain and inflammation control",
      reason:
        "Improves animal comfort."
    },

    {
      category: "Uterotonics",
      indication: "Postpartum uterine contraction support",
      reason:
        "May support uterine involution after uterine prolapse correction."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "lidocaine",
      priority: "Supportive",
      category: "Local Anesthetic"
    },

    {
      drugId: "antibiotics",
      priority: "Infection",
      category: "Antibiotic"
    },

    {
      drugId: "flunixin",
      priority: "Supportive",
      category: "Analgesic"
    }

  ],

  stabilization: [

    "Protect prolapsed tissue from trauma and contamination.",
    "Clean and assess tissue before replacement.",
    "Replace reproductive tissue carefully.",
    "Prevent recurrence using appropriate retention methods.",
    "Treat infection or tissue damage when present.",
    "Monitor animal until normal reproductive function returns."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Late pregnancy",
        weight: 95
      },

      {
        finding: "Recent parturition",
        weight: 90
      },

      {
        finding: "Previous prolapse history",
        weight: 85
      },

      {
        finding: "Multiple fetus pregnancy",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Visible tissue protruding from vulva",
        weight: 100
      },

      {
        finding: "Swollen or traumatized reproductive tissue",
        weight: 90
      },

      {
        finding: "Straining",
        weight: 80
      },

      {
        finding: "Restlessness",
        weight: 70
      }

    ],

    biochemistry: [

      {
        finding: "No specific biochemical marker",
        weight: 5
      }

    ],

    imaging: [

      {
        finding: "Pregnancy ultrasound findings",
        weight: 50
      }

    ],

    supports: [

      {
        finding: "Direct visualization of prolapsed tissue",
        weight: 100
      },

      {
        finding: "History of late pregnancy or parturition",
        weight: 90
      }

    ],

    against: [

      {
        finding: "No reproductive tract abnormality",
        weight: -100
      },

      {
        finding: "Alternative cause of swelling confirmed",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "tissue-condition",
      parameter: "Prolapsed tissue color, swelling, and damage",
      frequency: "Daily until recovery",
      reason:
        "Detects tissue injury, necrosis, and infection."
    },

    {
      id: "recurrence",
      parameter: "Reappearance of prolapse",
      frequency: "Frequent observation after correction",
      reason:
        "Ensures retention methods are effective."
    },

    {
      id: "parturition-progress",
      parameter: "Labor progress in pregnant females",
      frequency: "During late pregnancy and delivery",
      reason:
        "Identifies recurrence and dystocia risk."
    },

    {
      id: "infection",
      parameter: "Vaginal/uterine discharge and fever",
      frequency: "Daily when tissue contamination occurs",
      reason:
        "Detects reproductive tract infection."
    },

    {
      id: "reproductive-outcome",
      parameter: "Future fertility and reproductive performance",
      frequency: "During breeding season",
      reason:
        "Assesses long-term reproductive effects."
    }

  ],

  precautions: [

    {
      id: "body-condition",
      title: "Maintain Appropriate Body Condition",
      description:
        "Avoid excessive obesity during late pregnancy, which increases abdominal pressure."
    },

    {
      id: "nutrition",
      title: "Balanced Late Pregnancy Nutrition",
      description:
        "Provide adequate nutrition and mineral balance to reduce reproductive complications."
    },

    {
      id: "genetic-selection",
      title: "Avoid Recurrent Prolapse Breeders",
      description:
        "Animals with repeated prolapse history should be evaluated carefully for breeding decisions."
    },

    {
      id: "late-pregnancy-monitoring",
      title: "Monitor High-Risk Animals",
      description:
        "Observe heavily pregnant females closely for early signs of vaginal prolapse."
    }

  ],

  prognosis:
    "Prognosis is generally good when prolapse is corrected early and tissue remains viable. Delayed correction, severe trauma, contamination, or uterine prolapse complications may lead to infection, reproductive failure, or death.",

  strengtheningEvidence: [

    "Visible reproductive tissue protrusion",

    "Late pregnancy or postpartum status",

    "History of previous prolapse",

    "Successful correction after replacement"

  ],

  weakeningEvidence: [

    "No visible prolapse",

    "No reproductive history",

    "Alternative cause of swelling identified"

  ],

  classicFindings: [

    "Vaginal or uterine tissue outside vulva",

    "Swollen exposed tissue",

    "Straining",

    "Restlessness",

    "Pregnancy-associated occurrence"

  ],

  ruleOutFindings: [

    "Vaginitis",

    "Vulvar swelling",

    "Urinary tract prolapse",

    "Dystocia without prolapse",

    "Traumatic injury"

  ],

};