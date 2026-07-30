import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineRetainedFetalMembranes: DiseaseCard = {
  id: "bovine-retained-fetal-membranes",

  title: "Bovine Retained Fetal Membranes",

  description:
    "A postpartum reproductive disorder in cattle characterized by failure to expel fetal membranes within the expected period after calving, increasing the risk of uterine infection and reduced fertility.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Retained Placenta",
    "Retained Fetal Placenta",
    "RFM",
    "Retained Afterbirth",
  ],

  overview:
    "Retained fetal membranes occur when placental separation and expulsion fail after parturition. It is commonly associated with dystocia, abortion, premature calving, nutritional deficiencies, metabolic disorders, and immune dysfunction. Retention increases the risk of metritis, endometritis, delayed uterine recovery, and reproductive losses.",

  clinicalProblems: [

    "Failure of placental expulsion",
    "Postpartum uterine infection risk",
    "Delayed uterine involution",
    "Reduced fertility",
    "Milk production loss",
    "Metritis predisposition"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess calving difficulty, abortion history, nutritional status, metabolic diseases, and previous reproductive problems."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate presence of retained membranes, fever, appetite, uterine discharge, and systemic illness."
    },

    {
      id: "uterine-assessment",
      step: 3,
      title: "Uterine Evaluation",
      description:
        "Assess uterine involution and signs of infection when indicated."
    },

    {
      id: "management",
      step: 4,
      title: "Disease Management",
      description:
        "Provide supportive management, monitor for infection, and treat complications."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Diagnosis is mainly based on failure of membrane expulsion after calving."
    },

    {
      id: "temperature",
      name: "Body Temperature Monitoring",
      priority: "Recommended",
      reason:
        "Detects development of postpartum infection."
    },

    {
      id: "uterine-evaluation",
      name: "Uterine Examination",
      priority: "Recommended",
      reason:
        "Assesses uterine health and complications."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Metritis or uterine infection",
      reason:
        "Used when bacterial infection develops."
    },

    {
      category: "Supportive Therapy",
      indication: "Postpartum recovery",
      reason:
        "Supports immune function and recovery."
    },

    {
      category: "Mineral Therapy",
      indication: "Associated deficiencies",
      reason:
        "Corrects nutritional risk factors."

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

    "Monitor temperature and appetite.",
    "Maintain hygiene around reproductive tract.",
    "Identify signs of metritis.",
    "Correct nutritional deficiencies.",
    "Monitor reproductive recovery."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent calving",
        weight: 100
      },

      {
        finding: "Difficult calving",
        weight: 85
      },

      {
        finding: "Abortion or premature birth",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Fetal membranes visible after calving",
        weight: 100
      },

      {
        finding: "Foul uterine discharge",
        weight: 70
      },

      {
        finding: "Fever",
        weight: 60
      },

      {
        finding: "Reduced appetite",
        weight: 60
      }

    ],

    biochemistry: [

      {
        finding: "Metabolic disorder indicators",
        weight: 40
      }

    ],

    imaging: [

      {
        finding: "Uterine abnormalities on ultrasound",
        weight: 60
      }

    ],

    supports: [

      {
        finding: "Failure of placental expulsion",
        weight: 100
      },

      {
        finding: "Postpartum reproductive complication",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Normal placental expulsion",
        weight: -100
      },

      {
        finding: "Alternative reproductive disorder confirmed",
        weight: -70
      }

    ],

  },
  monitoring: [

    {
      id: "uterine-health",
      parameter: "Uterine discharge and involution",
      frequency: "Daily",
      reason:
        "Detects development of postpartum uterine infection."
    },

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Identifies fever associated with metritis."
    },

    {
      id: "appetite",
      parameter: "Feed intake and general condition",
      frequency: "Daily",
      reason:
        "Monitors systemic health after calving."
    },

    {
      id: "milk-production",
      parameter: "Milk production",
      frequency: "Daily",
      reason:
        "Evaluates production impact."
    },

    {
      id: "reproductive-recovery",
      parameter: "Return to reproductive cycle",
      frequency: "Long-term monitoring",
      reason:
        "Assesses fertility recovery."

    }

  ],

  precautions: [

    {
      id: "calving-management",
      title: "Calving Management",
      description:
        "Reduce dystocia and maintain hygienic calving conditions to lower risk."
    },

    {
      id: "nutrition",
      title: "Nutritional Management",
      description:
        "Provide adequate minerals, vitamins, and balanced nutrition during late gestation."
    },

    {
      id: "metabolic-control",
      title: "Metabolic Disease Prevention",
      description:
        "Prevent disorders such as milk fever and ketosis that increase risk of retained membranes."
    }

  ],

  prognosis:
    "Prognosis is usually good when complications are prevented. Severe cases complicated by metritis or systemic infection may result in reduced fertility and production losses.",

  strengtheningEvidence: [

    "Failure to expel fetal membranes after calving",

    "Recent parturition",

    "History of dystocia or abortion",

    "Development of postpartum uterine infection"

  ],

  weakeningEvidence: [

    "Normal placental expulsion",

    "No postpartum reproductive abnormalities",

    "Alternative reproductive disease confirmed"

  ],

  classicFindings: [

    "Visible retained placenta",

    "Postpartum period",

    "Uterine discharge",

    "Reduced appetite",

    "Fever in complicated cases"

  ],

  ruleOutFindings: [

    "Metritis",

    "Endometritis",

    "Uterine prolapse",

    "Dystocia",

    "Vaginal trauma",

    "Abortion disorders"

  ],

};