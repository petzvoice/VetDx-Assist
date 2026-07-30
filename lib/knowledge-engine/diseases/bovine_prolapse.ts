import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineProlapse: DiseaseCard = {
  id: "bovine-prolapse",

  title: "Bovine Prolapse",

  description:
    "A reproductive disorder in cattle characterized by protrusion of reproductive tract tissues, most commonly occurring before or after calving.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Uterine Prolapse",
    "Vaginal Prolapse",
    "Cervical Prolapse",
    "Postpartum Prolapse",
  ],

  overview:
    "Bovine prolapse involves displacement and protrusion of reproductive organs through the vulva. Vaginal prolapse commonly occurs during late pregnancy, while uterine prolapse usually occurs shortly after calving. Risk factors include increased abdominal pressure, hormonal changes, difficult calving, hypocalcemia, excessive straining, and genetic predisposition.",

  clinicalProblems: [

    "Reproductive tract displacement",
    "Tissue trauma",
    "Hemorrhage risk",
    "Infection risk",
    "Difficulty calving",
    "Reduced reproductive performance"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess pregnancy stage, recent calving, previous prolapse history, dystocia, and metabolic disorders."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate type of prolapse, tissue condition, swelling, contamination, and viability."
    },

    {
      id: "assessment",
      step: 3,
      title: "Severity Assessment",
      description:
        "Determine degree of tissue damage, necrosis, and associated complications."
    },

    {
      id: "correction",
      step: 4,
      title: "Prolapse Correction",
      description:
        "Replace affected tissues and prevent recurrence."
    },

    {
      id: "post-treatment",
      step: 5,
      title: "Post-Treatment Monitoring",
      description:
        "Monitor healing, infection, and reproductive recovery."
    }

  ],

  diagnostics: [

    {
      id: "physical-examination",
      name: "Physical Examination",
      priority: "Essential",
      reason:
        "Diagnosis is based on visual identification of prolapsed tissue."
    },

    {
      id: "tissue-assessment",
      name: "Tissue Viability Assessment",
      priority: "Essential",
      reason:
        "Determines severity and treatment approach."
    },

    {
      id: "metabolic-evaluation",
      name: "Metabolic Evaluation",
      priority: "Recommended",
      reason:
        "Identifies contributing disorders such as hypocalcemia."

    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Contaminated or damaged reproductive tissues",
      reason:
        "Prevents or treats bacterial infection."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Improves comfort and reduces inflammation."
    },

    {
      category: "Supportive Therapy",
      indication: "Recovery support",
      reason:
        "Maintains overall health during recovery."
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

    "Protect exposed tissues from trauma and contamination.",
    "Assess animal stability.",
    "Correct prolapsed tissue carefully.",
    "Control pain and inflammation.",
    "Monitor for recurrence and infection."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Late pregnancy",
        weight: 85
      },

      {
        finding: "Recent calving",
        weight: 95
      },

      {
        finding: "History of dystocia",
        weight: 80
      },

      {
        finding: "Previous prolapse",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Tissue protruding through vulva",
        weight: 100
      },

      {
        finding: "Swollen reproductive tissue",
        weight: 90
      },

      {
        finding: "Straining",
        weight: 75
      },

      {
        finding: "Bleeding or tissue injury",
        weight: 80
      }

    ],

    biochemistry: [

      {
        finding: "Low calcium or metabolic abnormalities",
        weight: 50
      }

    ],

    imaging: [

      {
        finding: "Not routinely required",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Visible reproductive tissue protrusion",
        weight: 100
      },

      {
        finding: "Pregnancy or postpartum association",
        weight: 90
      }

    ],

    against: [

      {
        finding: "No reproductive tissue displacement",
        weight: -100
      },

      {
        finding: "Alternative cause of vaginal swelling confirmed",
        weight: -70
      }

    ],

  },
  monitoring: [

    {
      id: "tissue-condition",
      parameter: "Condition of replaced reproductive tissues",
      frequency: "Daily",
      reason:
        "Detects swelling, necrosis, or delayed healing."
    },

    {
      id: "infection",
      parameter: "Signs of reproductive tract infection",
      frequency: "Daily",
      reason:
        "Monitors contamination-related complications."
    },

    {
      id: "straining",
      parameter: "Straining and recurrence of prolapse",
      frequency: "Daily",
      reason:
        "Detects failure of correction or recurrence."
    },

    {
      id: "appetite",
      parameter: "Feed intake and general condition",
      frequency: "Daily",
      reason:
        "Assesses overall recovery."
    },

    {
      id: "reproductive-health",
      parameter: "Future reproductive performance",
      frequency: "Long-term monitoring",
      reason:
        "Evaluates effect on fertility."

    }

  ],

  precautions: [

    {
      id: "nutrition",
      title: "Nutritional Management",
      description:
        "Maintain balanced mineral and energy nutrition during late pregnancy."
    },

    {
      id: "calcium-control",
      title: "Metabolic Disease Prevention",
      description:
        "Reduce risk factors such as hypocalcemia that may contribute to prolapse."
    },

    {
      id: "breeding-management",
      title: "Breeding Selection",
      description:
        "Avoid repeated breeding of animals with hereditary tendency for prolapse."
    },

    {
      id: "calving-management",
      title: "Calving Management",
      description:
        "Provide appropriate assistance during difficult calving to reduce trauma."

    }

  ],

  prognosis:
    "Prognosis depends on the type of prolapse, duration of exposure, tissue damage, and complications. Early correction with healthy tissue has a good outcome, while severe trauma or necrosis may result in poor reproductive performance.",

  strengtheningEvidence: [

    "Visible reproductive tissue protrusion",

    "Late pregnancy or postpartum occurrence",

    "History of dystocia",

    "Recurrence of prolapse"

  ],

  weakeningEvidence: [

    "No tissue protrusion",

    "Normal reproductive examination",

    "Alternative cause of swelling confirmed"

  ],

  classicFindings: [

    "Mass protruding from vulva",

    "Swollen exposed tissue",

    "Straining",

    "Tissue contamination",

    "Postpartum occurrence"

  ],

  ruleOutFindings: [

    "Vaginitis",

    "Vaginal hematoma",

    "Uterine torsion",

    "Dystocia",

    "Retained fetal membranes",

    "Metritis"

  ],

};