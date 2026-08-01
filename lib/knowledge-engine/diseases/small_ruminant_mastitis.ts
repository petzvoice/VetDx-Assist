import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantMastitis: DiseaseCard = {
  id: "small-ruminant-mastitis",

  title: "Small Ruminant Mastitis",

  description:
    "Inflammation of the mammary gland in sheep and goats, usually caused by bacterial infection, resulting in reduced milk production, udder abnormalities, systemic illness, and significant economic losses.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Ovine Mastitis",
    "Caprine Mastitis",
    "Mammary Gland Infection",
  ],

  overview:
    "Mastitis is one of the most important diseases affecting lactating sheep and goats. Common pathogens include Staphylococcus aureus, coagulase-negative staphylococci, Mannheimia haemolytica, Pasteurella multocida, Streptococcus spp., Escherichia coli, and Mycoplasma spp. Clinical disease ranges from mild changes in milk to severe gangrenous mastitis accompanied by septicemia.",

  clinicalProblems: [

    "Mammary gland inflammation",
    "Reduced milk production",
    "Abnormal milk",
    "Udder pain and swelling",
    "Systemic illness",
    "Gangrenous mastitis"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess lactation stage, kidding or lambing history, milking management, previous mastitis, and herd outbreaks."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate udder symmetry, heat, pain, swelling, milk appearance, and systemic condition."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Perform milk culture, somatic cell count, and antimicrobial susceptibility testing where appropriate."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Herd Control",
      description:
        "Initiate antimicrobial therapy, supportive care, frequent milk removal, and improve milking hygiene."
    }

  ],

  diagnostics: [

    {
      id: "udder-examination",
      name: "Clinical Udder Examination",
      priority: "Essential",
      reason:
        "Identifies clinical mastitis and severity."
    },

    {
      id: "milk-culture",
      name: "Milk Culture and Sensitivity",
      priority: "Essential",
      reason:
        "Identifies causative organism and guides antimicrobial selection."
    },

    {
      id: "somatic-cell-count",
      name: "Somatic Cell Count",
      priority: "Recommended",
      reason:
        "Assesses mammary inflammation."
    },

    {
      id: "ultrasound",
      name: "Mammary Ultrasonography",
      priority: "Recommended",
      reason:
        "Evaluates abscesses and chronic mammary lesions."
    }

  ],

  drugCategories: [

    {
      category: "Antimicrobials",
      indication: "Bacterial mastitis",
      reason:
        "Eliminates susceptible bacterial pathogens."
    },

    {
      category: "NSAIDs",
      indication: "Pain, inflammation, and fever",
      reason:
        "Improves comfort and reduces inflammation."
    },

    {
      category: "Fluid Therapy",
      indication: "Septicemia or dehydration",
      reason:
        "Supports cardiovascular stability in severe cases."
    },

    {
      category: "Intramammary Therapy",
      indication: "Selected bacterial infections",
      reason:
        "Provides high local antimicrobial concentrations when indicated."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "penicillin-g",
      priority: "First Line",
      category: "Antibiotic"
    },

    {
      drugId: "ceftiofur",
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

    "Milk the affected gland frequently when appropriate.",
    "Administer systemic antimicrobial therapy.",
    "Provide NSAIDs for pain and inflammation.",
    "Correct dehydration and shock in severe cases.",
    "Isolate affected animals when contagious pathogens are suspected.",
    "Improve milking hygiene and sanitation."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent lambing or kidding",
        weight: 80
      },

      {
        finding: "Previous mastitis history",
        weight: 85
      },

      {
        finding: "Poor milking hygiene",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Painful swollen udder",
        weight: 100
      },

      {
        finding: "Abnormal milk",
        weight: 100
      },

      {
        finding: "Reduced milk production",
        weight: 90
      },

      {
        finding: "Fever",
        weight: 75
      },

      {
        finding: "Gangrenous mammary tissue",
        weight: 100
      }

    ],

    biochemistry: [

      {
        finding: "Inflammatory leukogram",
        weight: 60
      },

      {
        finding: "Increased somatic cell count",
        weight: 90
      }

    ],

    imaging: [

      {
        finding: "Mammary abscess or tissue destruction on ultrasonography",
        weight: 70
      }

    ],

    supports: [

      {
        finding: "Positive milk culture",
        weight: 100
      },

      {
        finding: "Characteristic mammary inflammation",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Normal mammary gland examination",
        weight: -70
      },

      {
        finding: "Alternative cause of mammary enlargement confirmed",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "udder-examination",
      parameter: "Udder size, heat, pain, and swelling",
      frequency: "Daily",
      reason:
        "Monitors resolution of mammary inflammation and detects complications."
    },

    {
      id: "milk-quality",
      parameter: "Milk appearance and production",
      frequency: "Each milking",
      reason:
        "Evaluates treatment response and restoration of milk quality."
    },

    {
      id: "body-temperature",
      parameter: "Rectal temperature",
      frequency: "Daily",
      reason:
        "Detects persistent infection or systemic involvement."
    },

    {
      id: "hydration-status",
      parameter: "Hydration status and appetite",
      frequency: "Daily",
      reason:
        "Assesses general health and guides supportive therapy."
    },

    {
      id: "culture",
      parameter: "Milk culture when indicated",
      frequency: "After treatment in chronic or recurrent cases",
      reason:
        "Confirms bacterial elimination and identifies persistent infection."

    }

  ],

  precautions: [

    {
      id: "milking-hygiene",
      title: "Milking Hygiene",
      description:
        "Maintain strict udder hygiene before and after milking to reduce bacterial transmission."
    },

    {
      id: "equipment",
      title: "Milking Equipment Maintenance",
      description:
        "Clean and disinfect milking equipment regularly and ensure proper function."
    },

    {
      id: "isolation",
      title: "Isolation of Affected Animals",
      description:
        "Milk infected animals last and separate them from healthy lactating animals when possible."
    },

    {
      id: "dry-period",
      title: "Dry Period Management",
      description:
        "Provide good nutrition, clean housing, and monitor udders during the dry period to reduce future mastitis risk."

    }

  ],

  prognosis:
    "Prognosis is generally good with early diagnosis and appropriate antimicrobial therapy. Gangrenous mastitis, severe septicemia, or chronic fibrosis may permanently reduce milk production or result in death.",

  strengtheningEvidence: [

    "Painful swollen udder",

    "Abnormal milk secretion",

    "Positive milk culture",

    "Elevated somatic cell count"

  ],

  weakeningEvidence: [

    "Normal milk examination",

    "Negative culture with no inflammatory changes",

    "Alternative mammary disorder confirmed"

  ],

  classicFindings: [

    "Swollen painful udder",

    "Hot mammary gland",

    "Clotted or watery milk",

    "Reduced milk yield",

    "Fever in severe cases"

  ],

  ruleOutFindings: [

    "Mammary abscess",

    "Udder edema",

    "Mammary trauma",

    "Galactostasis",

    "Contagious agalactia",

    "Mammary neoplasia"

  ],

};