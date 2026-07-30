import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineMastitis: DiseaseCard = {
  id: "bovine-mastitis",

  title: "Bovine Mastitis",

  description:
    "An inflammatory disease of the mammary gland in cattle, most commonly caused by bacterial infection, resulting in abnormal milk, reduced production, and economic losses.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Mastitis",
    "Bovine Udder Infection",
    "Intramammary Infection",
  ],

  overview:
    "Bovine mastitis is inflammation of the mammary gland caused mainly by bacterial pathogens entering through the teat canal. It may occur as clinical mastitis with visible udder abnormalities and milk changes or as subclinical mastitis detected through diagnostic testing. Common pathogens include Staphylococcus aureus, Streptococcus agalactiae, Streptococcus dysgalactiae, Streptococcus uberis, and Escherichia coli. Disease severity ranges from mild inflammation to severe systemic illness.",

  clinicalProblems: [

    "Mammary gland inflammation",
    "Abnormal milk production",
    "Udder swelling",
    "Milk clots or discoloration",
    "Painful udder",
    "Reduced milk yield",
    "Systemic illness in severe cases",
    "Chronic udder damage"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess lactation stage, previous mastitis episodes, milking hygiene, teat injuries, housing conditions, and milk production changes."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Examine udder quarters, teat condition, milk appearance, temperature, pain, and systemic signs."
    },

    {
      id: "milk-sampling",
      step: 3,
      title: "Milk Sample Collection",
      description:
        "Collect aseptic milk samples from affected quarters before antimicrobial therapy."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Perform somatic cell count, bacterial culture, antimicrobial sensitivity testing, and pathogen identification."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Provide appropriate antimicrobial therapy when indicated, supportive care, milking management, and prevention strategies."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Udder Examination",
      priority: "Essential",
      reason:
        "Detects swelling, pain, heat, and visible abnormalities."
    },

    {
      id: "somatic-cell-count",
      name: "Somatic Cell Count",
      priority: "Essential",
      reason:
        "Detects inflammation and subclinical mastitis."
    },

    {
      id: "milk-culture",
      name: "Milk Culture",
      priority: "Essential",
      reason:
        "Identifies bacterial pathogens causing mastitis."
    },

    {
      id: "sensitivity-testing",
      name: "Antimicrobial Sensitivity Testing",
      priority: "Recommended",
      reason:
        "Guides appropriate antibiotic selection."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Bacterial mastitis",
      reason:
        "Used when bacterial infection requires antimicrobial therapy."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Reduces inflammatory response and improves comfort."
    },

    {
      category: "Fluid Therapy",
      indication: "Severe systemic mastitis",
      reason:
        "Supports hydration and circulation."
    },

    {
      category: "Supportive Therapy",
      indication: "Udder care",
      reason:
        "Supports recovery and milk production."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "ceftiofur",
      priority: "First Line",
      category: "Antibiotic"
    },

    {
      drugId: "oxytetracycline",
      priority: "Alternative",
      category: "Antibiotic"
    },

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Isolate severely affected animals when required.",
    "Collect milk samples before antibiotic administration.",
    "Maintain clean milking practices.",
    "Provide hydration and nutritional support.",
    "Monitor for systemic inflammatory response.",
    "Discard milk according to withdrawal periods."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Recent calving", weight: 75 },

      { finding: "Poor milking hygiene", weight: 85 },

      { finding: "Previous mastitis history", weight: 80 },

      { finding: "Sudden milk production decrease", weight: 85 }

    ],

    clinicalSigns: [

      { finding: "Udder swelling", weight: 90 },

      { finding: "Udder pain", weight: 85 },

      { finding: "Abnormal milk appearance", weight: 100 },

      { finding: "Milk clots", weight: 95 },

      { finding: "Reduced milk yield", weight: 85 },

      { finding: "Fever in severe cases", weight: 70 }

    ],

    biochemistry: [

      { finding: "Increased somatic cell count", weight: 95 },

      { finding: "Inflammatory leukogram in severe cases", weight: 60 }

    ],

    imaging: [

      { finding: "Ultrasonographic udder changes", weight: 50 }

    ],

    supports: [

      { finding: "Positive milk culture", weight: 100 },

      { finding: "High somatic cell count", weight: 95 },

      { finding: "Compatible udder inflammation", weight: 90 }

    ],

    against: [

      { finding: "Normal milk evaluation", weight: -80 },

      { finding: "Non-mammary cause of milk reduction confirmed", weight: -70 }

    ],

  },
    monitoring: [

    {
      id: "udder-status",
      parameter: "Udder swelling, heat, pain, and consistency",
      frequency: "Daily",
      reason:
        "Monitors resolution of mammary inflammation."
    },

    {
      id: "milk-quality",
      parameter: "Milk appearance and production",
      frequency: "Each milking",
      reason:
        "Evaluates improvement in milk abnormalities and production recovery."
    },

    {
      id: "body-temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Detects systemic infection or severe inflammatory response."
    },

    {
      id: "somatic-cell-count",
      parameter: "Somatic cell count",
      frequency: "During follow-up testing",
      reason:
        "Assesses recovery from subclinical inflammation."
    },

    {
      id: "milk-culture",
      parameter: "Repeat milk culture when indicated",
      frequency: "After treatment failure or recurrence",
      reason:
        "Identifies persistent infection or resistant pathogens."
    }

  ],

  precautions: [

    {
      id: "milking-hygiene",
      title: "Milking Hygiene",
      description:
        "Maintain clean milking procedures, teat sanitation, and proper milking equipment management to reduce new infections."
    },

    {
      id: "antibiotic-use",
      title: "Responsible Antibiotic Use",
      description:
        "Use antimicrobial therapy based on clinical assessment, culture results, and withdrawal period requirements."
    },

    {
      id: "chronic-cases",
      title: "Chronic Mastitis",
      description:
        "Chronic infections, especially those caused by contagious pathogens, may require long-term herd management decisions."
    }

  ],

  prognosis:
    "Prognosis depends on the pathogen involved, severity of inflammation, and timing of treatment. Mild cases generally recover well, while severe or chronic mastitis may result in permanent udder damage and reduced milk production.",

  strengtheningEvidence: [

    "Abnormal milk appearance",

    "High somatic cell count",

    "Positive milk culture",

    "Udder inflammation"

  ],

  weakeningEvidence: [

    "Normal milk evaluation",

    "Negative milk culture",

    "Alternative cause of reduced milk production identified"

  ],

  classicFindings: [

    "Hot swollen udder",

    "Milk clots",

    "Abnormal milk color",

    "Reduced milk yield",

    "Painful mammary gland"

  ],

  ruleOutFindings: [

    "Teat injury",

    "Udder edema after calving",

    "Milk let-down disorders",

    "Nutritional production decline",

    "Systemic diseases causing reduced milk yield"

  ],

};