import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineDystocia: DiseaseCard = {
  id: "bovine-dystocia",

  title: "Bovine Dystocia",

  description:
    "A calving disorder in cattle characterized by difficulty or failure of normal delivery due to maternal, fetal, or mechanical causes.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Difficult Calving",
    "Abnormal Parturition",
    "Calving Difficulty",
  ],

  overview:
    "Dystocia is one of the major reproductive problems in cattle and may result from oversized fetus, abnormal fetal presentation, inadequate maternal pelvic size, uterine inertia, or reproductive tract abnormalities. Early recognition and proper intervention are essential to reduce calf mortality, maternal injury, and postpartum complications.",

  clinicalProblems: [

    "Failure of normal parturition",
    "Calf loss",
    "Maternal trauma",
    "Retained fetal membranes",
    "Postpartum infection",
    "Reduced fertility"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess gestation length, breed, previous calving history, and signs of labor progression."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate maternal condition, stage of labor, and visible fetal parts."
    },

    {
      id: "obstetrical-examination",
      step: 3,
      title: "Obstetrical Examination",
      description:
        "Determine fetal presentation, position, posture, and viability."
    },

    {
      id: "intervention",
      step: 4,
      title: "Obstetrical Intervention",
      description:
        "Correct abnormalities or perform assisted delivery when appropriate."
    },

    {
      id: "postpartum-care",
      step: 5,
      title: "Postpartum Care",
      description:
        "Monitor for trauma, infection, and reproductive complications."
    }

  ],

  diagnostics: [

    {
      id: "obstetrical-exam",
      name: "Obstetrical Examination",
      priority: "Essential",
      reason:
        "Determines cause of calving difficulty."
    },

    {
      id: "fetal-position",
      name: "Fetal Presentation Assessment",
      priority: "Essential",
      reason:
        "Identifies malpresentation or abnormal posture."
    },

    {
      id: "ultrasound",
      name: "Ultrasonography",
      priority: "Recommended",
      reason:
        "Assesses fetal viability and reproductive tract."
    }

  ],

  drugCategories: [

    {
      category: "Obstetrical Therapy",
      indication: "Assisted delivery",
      reason:
        "Facilitates correction and delivery when indicated."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Provides postpartum comfort."
    },

    {
      category: "Antibiotics",
      indication: "Postpartum infection risk",
      reason:
        "Used when contamination or infection occurs."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    },

    {
      drugId: "ceftiofur",
      priority: "Preventive",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Assess maternal and fetal condition.",
    "Correct fetal malpresentation when possible.",
    "Avoid excessive traction.",
    "Provide pain management.",
    "Monitor postpartum complications."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Prolonged labor",
        weight: 95
      },

      {
        finding: "First-calf heifer",
        weight: 80
      },

      {
        finding: "Large calf risk",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Failure to progress during labor",
        weight: 100
      },

      {
        finding: "Visible abnormal fetal parts",
        weight: 95
      },

      {
        finding: "Maternal straining",
        weight: 80
      },

      {
        finding: "Exhaustion",
        weight: 75
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
        finding: "Abnormal fetal position on ultrasound",
        weight: 80
      }

    ],

    supports: [

      {
        finding: "Abnormal fetal presentation",
        weight: 100
      },

      {
        finding: "Prolonged unsuccessful labor",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Normal progression of labor",
        weight: -100
      },

      {
        finding: "Alternative cause of dystocia-like signs",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "maternal-condition",
      parameter: "Maternal health status",
      frequency: "Postpartum daily evaluation",
      reason:
        "Detects trauma, infection, and recovery problems."
    },

    {
      id: "uterine-health",
      parameter: "Uterine discharge and involution",
      frequency: "Daily",
      reason:
        "Monitors postpartum reproductive recovery."
    },

    {
      id: "calf-health",
      parameter: "Newborn calf vitality and suckling ability",
      frequency: "Immediately after delivery",
      reason:
        "Evaluates neonatal outcome."
    },

    {
      id: "reproductive-performance",
      parameter: "Future fertility and breeding status",
      frequency:
        "Long-term monitoring",
      reason:
        "Assesses reproductive impact of dystocia."
    },

    {
      id: "injury-monitoring",
      parameter: "Birth canal and reproductive tract injuries",
      frequency:
        "After assisted delivery",
      reason:
        "Identifies complications."

    }

  ],

  precautions: [

    {
      id: "breeding-selection",
      title: "Breeding Management",
      description:
        "Select appropriate sire and dam genetics to reduce risk of oversized calves."
    },

    {
      id: "heifer-management",
      title: "Heifer Management",
      description:
        "Maintain appropriate growth and body condition before first calving."
    },

    {
      id: "calving-supervision",
      title: "Calving Supervision",
      description:
        "Monitor parturition closely and provide timely assistance when required."
    }

  ],

  prognosis:
    "Prognosis depends on duration of dystocia, cause, and speed of intervention. Early correction usually results in good recovery, while prolonged dystocia may cause maternal injury, calf loss, or infertility.",

  strengtheningEvidence: [

    "Prolonged labor",

    "Abnormal fetal presentation",

    "Failure of normal delivery progression",

    "Need for obstetrical assistance"

  ],

  weakeningEvidence: [

    "Normal labor progression",

    "Normal fetal presentation",

    "Alternative cause of delayed calving identified"

  ],

  classicFindings: [

    "Repeated straining",

    "No progress during labor",

    "Abnormal fetal posture",

    "Maternal exhaustion",

    "Delayed calving"

  ],

  ruleOutFindings: [

    "Uterine torsion",

    "Vaginal prolapse",

    "Retained fetal membranes",

    "Metritis",

    "Milk fever",

    "Hypomagnesemia"

  ],

};