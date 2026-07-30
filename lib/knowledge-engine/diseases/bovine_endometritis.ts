import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineEndometritis: DiseaseCard = {
  id: "bovine-endometritis",

  title: "Bovine Endometritis",

  description:
    "A postpartum reproductive disorder of cattle characterized by inflammation of the uterine lining, commonly associated with delayed uterine recovery and reduced fertility.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Clinical Endometritis",
    "Subclinical Endometritis",
    "Postpartum Endometritis",
  ],

  overview:
    "Bovine endometritis is inflammation of the endometrium occurring after calving. It is commonly associated with bacterial contamination during parturition, retained fetal membranes, dystocia, and impaired uterine immune defense. Unlike metritis, endometritis is usually limited to the uterine lining and may occur without systemic illness.",

  clinicalProblems: [

    "Uterine inflammation",
    "Delayed uterine involution",
    "Reduced conception rate",
    "Repeat breeding",
    "Extended calving interval",
    "Infertility"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess postpartum period, breeding history, calving difficulty, and previous uterine disease."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate uterine discharge, reproductive status, and general health."
    },

    {
      id: "uterine-evaluation",
      step: 3,
      title: "Uterine Assessment",
      description:
        "Assess uterine involution and endometrial health."
    },

    {
      id: "management",
      step: 4,
      title: "Disease Management",
      description:
        "Manage uterine infection and improve reproductive recovery."
    }

  ],

  diagnostics: [

    {
      id: "vaginal-examination",
      name: "Vaginal Examination",
      priority: "Essential",
      reason:
        "Identifies abnormal uterine discharge."
    },

    {
      id: "uterine-examination",
      name: "Uterine Examination",
      priority: "Recommended",
      reason:
        "Evaluates uterine involution and abnormalities."
    },

    {
      id: "ultrasound",
      name: "Reproductive Ultrasonography",
      priority: "Recommended",
      reason:
        "Assesses uterine contents and ovarian activity."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Bacterial uterine infection",
      reason:
        "Used when infection requires antimicrobial therapy."
    },

    {
      category: "Hormonal Therapy",
      indication: "Uterine clearance and reproductive management",
      reason:
        "May support reproductive recovery in selected cases."
    },

    {
      category: "Supportive Therapy",
      indication: "Reproductive recovery",
      reason:
        "Improves overall health status."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "ceftiofur",
      priority: "Initial Therapy",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Evaluate uterine health.",
    "Identify and treat concurrent reproductive disorders.",
    "Maintain good nutritional status.",
    "Monitor reproductive performance.",
    "Reduce risk factors for recurrence."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent calving",
        weight: 95
      },

      {
        finding: "History of dystocia",
        weight: 80
      },

      {
        finding: "Previous uterine infection",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Abnormal uterine discharge",
        weight: 95
      },

      {
        finding: "Reduced fertility",
        weight: 90
      },

      {
        finding: "Repeat breeding",
        weight: 85
      },

      {
        finding: "Usually no systemic illness",
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
        finding: "Uterine fluid or abnormalities on ultrasound",
        weight: 75
      }

    ],

    supports: [

      {
        finding: "Postpartum abnormal uterine discharge",
        weight: 100
      },

      {
        finding: "Reduced reproductive performance",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Normal reproductive examination",
        weight: -80
      },

      {
        finding: "Systemic toxic illness suggesting metritis",
        weight: -50
      }

    ],

  },
    monitoring: [

    {
      id: "uterine-discharge",
      parameter: "Uterine discharge",
      frequency: "Regular evaluation",
      reason:
        "Monitors resolution of endometrial inflammation."
    },

    {
      id: "uterine-involution",
      parameter: "Uterine size and recovery",
      frequency: "Regular reproductive examination",
      reason:
        "Assesses restoration of normal reproductive function."
    },

    {
      id: "fertility",
      parameter: "Conception rate and breeding performance",
      frequency: "Long-term monitoring",
      reason:
        "Evaluates impact on reproductive efficiency."
    },

    {
      id: "ovarian-function",
      parameter: "Return of ovarian cyclicity",
      frequency: "Regular evaluation",
      reason:
        "Assesses postpartum reproductive recovery."
    },

    {
      id: "production",
      parameter: "Milk production and body condition",
      frequency: "Regular evaluation",
      reason:
        "Monitors overall recovery."

    }

  ],

  precautions: [

    {
      id: "calving-hygiene",
      title: "Calving Hygiene",
      description:
        "Maintain clean calving areas and proper obstetrical practices to reduce uterine contamination."
    },

    {
      id: "postpartum-monitoring",
      title: "Postpartum Monitoring",
      description:
        "Examine cows after calving for early detection of uterine disease."
    },

    {
      id: "nutrition",
      title: "Nutritional Support",
      description:
        "Provide balanced energy, protein, vitamins, and minerals to support uterine immunity."
    }

  ],

  prognosis:
    "Prognosis is generally favorable when detected early. Delayed diagnosis may result in prolonged infertility, repeat breeding, and increased calving interval.",

  strengtheningEvidence: [

    "Abnormal uterine discharge",

    "Reduced fertility",

    "Postpartum period",

    "Ultrasound evidence of uterine fluid"

  ],

  weakeningEvidence: [

    "Normal uterine examination",

    "Normal reproductive performance",

    "Systemic illness indicating another condition"

  ],

  classicFindings: [

    "Mucopurulent uterine discharge",

    "Repeat breeding",

    "Delayed conception",

    "Reduced reproductive efficiency",

    "Minimal systemic signs"

  ],

  ruleOutFindings: [

    "Metritis",

    "Retained fetal membranes",

    "Uterine prolapse",

    "Dystocia",

    "Vaginitis",

    "Pyometra"

  ],

};