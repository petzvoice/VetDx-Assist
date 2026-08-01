import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantWhiteMuscleDisease: DiseaseCard = {
  id: "small-ruminant-white-muscle-disease",

  title: "White Muscle Disease",

  description:
    "A nutritional myodegenerative disease of lambs and kids caused by selenium and/or vitamin E deficiency, resulting in degeneration and mineralization of skeletal and cardiac muscles, weakness, recumbency, dysphagia, respiratory distress, and sudden death.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Nutritional Muscular Dystrophy",
    "Selenium Deficiency",
    "Vitamin E/Selenium Deficiency",
    "Myodegeneration",
  ],

  overview:
    "White muscle disease primarily affects rapidly growing lambs and kids born in selenium-deficient regions or from deficient dams. Selenium and vitamin E function as important antioxidants that protect muscle cell membranes from oxidative damage. Deficiency results in degeneration and mineralization of skeletal and cardiac muscle. Early recognition and prompt selenium-vitamin E therapy greatly improve the prognosis in skeletal muscle cases, whereas cardiac involvement often carries a poor prognosis.",

  clinicalProblems: [

    "Muscle degeneration",
    "Generalized weakness",
    "Stiff gait",
    "Recumbency",
    "Dysphagia",
    "Respiratory distress",
    "Sudden death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess age, geographical selenium status, maternal nutrition, supplementation history, and flock occurrence."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate gait, muscle strength, posture, cardiac function, respiratory effort, and ability to nurse."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Measure serum selenium, glutathione peroxidase activity, creatine kinase, AST, and evaluate cardiac involvement when indicated."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment",
      description:
        "Administer selenium and vitamin E promptly, provide supportive nursing care, and correct dietary deficiencies within the flock."
    }

  ],

  diagnostics: [

    {
      id: "serum-selenium",
      name: "Serum Selenium Concentration",
      priority: "Essential",
      reason:
        "Confirms selenium deficiency."
    },

    {
      id: "ck",
      name: "Creatine Kinase (CK)",
      priority: "Essential",
      reason:
        "Marked elevation indicates active muscle damage."
    },

    {
      id: "ast",
      name: "Aspartate Aminotransferase (AST)",
      priority: "Recommended",
      reason:
        "Supports diagnosis of muscle injury."
    },

    {
      id: "ecg-echocardiography",
      name: "Cardiac Evaluation",
      priority: "Recommended",
      reason:
        "Assesses cardiac involvement in affected animals."
    }

  ],

  drugCategories: [

    {
      category: "Selenium Preparations",
      indication: "Selenium deficiency",
      reason:
        "Corrects the underlying mineral deficiency."
    },

    {
      category: "Vitamin Therapy",
      indication: "Vitamin E deficiency",
      reason:
        "Provides antioxidant protection and complements selenium therapy."
    },

    {
      category: "Fluid Therapy",
      indication: "Supportive care",
      reason:
        "Maintains hydration and circulation in weak or recumbent animals."
    },

    {
      category: "NSAIDs",
      indication: "Supportive care",
      reason:
        "May improve comfort in selected cases."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "selenium-vitamin-e",
      priority: "First Line",
      category: "Supplement"
    },

    {
      drugId: "vitamin-e",
      priority: "Supportive",
      category: "Vitamin"
    }

  ],

  stabilization: [

    "Administer selenium-vitamin E preparation promptly.",
    "Provide adequate nursing care and soft bedding.",
    "Assist weak neonates with feeding when necessary.",
    "Minimize handling stress.",
    "Treat dehydration if present.",
    "Correct flock nutritional deficiencies."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Birth in selenium-deficient area",
        weight: 95
      },

      {
        finding: "Unsupplemented dam",
        weight: 90
      },

      {
        finding: "Young rapidly growing lamb or kid",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Generalized muscle weakness",
        weight: 100
      },

      {
        finding: "Stiff gait",
        weight: 95
      },

      {
        finding: "Recumbency",
        weight: 95
      },

      {
        finding: "Difficulty nursing",
        weight: 90
      },

      {
        finding: "Respiratory distress or sudden death",
        weight: 90
      }

    ],

    biochemistry: [

      {
        finding: "Elevated creatine kinase",
        weight: 100
      },

      {
        finding: "Elevated AST",
        weight: 90
      },

      {
        finding: "Low serum selenium concentration",
        weight: 100
      }

    ],

    imaging: [

      {
        finding: "Cardiac abnormalities on echocardiography in cardiac form",
        weight: 70
      }

    ],

    supports: [

      {
        finding: "Low selenium concentration with elevated muscle enzymes",
        weight: 100
      },

      {
        finding: "Clinical improvement following selenium-vitamin E therapy",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Normal selenium status",
        weight: -70
      },

      {
        finding: "Alternative neuromuscular disease confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "muscle-strength",
      parameter: "Muscle strength and ability to stand",
      frequency: "Daily",
      reason:
        "Assesses response to selenium-vitamin E therapy and functional recovery."
    },

    {
      id: "feed-intake",
      parameter: "Nursing behavior, appetite, and body weight",
      frequency: "Daily",
      reason:
        "Evaluates nutritional recovery and overall health."
    },

    {
      id: "muscle-enzymes",
      parameter: "Creatine kinase (CK) and AST concentrations",
      frequency: "Every 2–5 days",
      reason:
        "Monitors resolution of muscle injury."
    },

    {
      id: "cardiac-status",
      parameter: "Heart rate, rhythm, and respiratory effort",
      frequency: "Daily",
      reason:
        "Detects progression of cardiac involvement and heart failure."
    },

    {
      id: "flock-monitoring",
      parameter: "Occurrence of additional affected lambs or kids",
      frequency: "Throughout the lambing/kidding season",
      reason:
        "Identifies flock-level selenium deficiency requiring preventive intervention."
    }

  ],

  precautions: [

    {
      id: "maternal-supplementation",
      title: "Supplement Pregnant Females",
      description:
        "Provide adequate selenium and vitamin E supplementation to pregnant ewes and does in deficient regions according to local recommendations."
    },

    {
      id: "balanced-nutrition",
      title: "Balanced Nutrition",
      description:
        "Feed balanced rations containing appropriate selenium and vitamin E concentrations while avoiding excessive supplementation."
    },

    {
      id: "soil-deficiency",
      title: "Recognize Regional Deficiency",
      description:
        "Monitor animals raised in selenium-deficient geographical areas and implement preventive supplementation programs."
    },

    {
      id: "avoid-overdose",
      title: "Prevent Selenium Toxicity",
      description:
        "Do not exceed recommended selenium supplementation levels because excessive selenium administration can be toxic."
    }

  ],

  prognosis:
    "Prognosis is good when skeletal muscle disease is recognized early and treated promptly with selenium and vitamin E. Animals with severe cardiac involvement, prolonged recumbency, or respiratory failure have a guarded to poor prognosis.",

  strengtheningEvidence: [

    "Young lamb or kid",

    "Low serum selenium concentration",

    "Marked elevation of CK",

    "Rapid improvement after selenium-vitamin E administration"

  ],

  weakeningEvidence: [

    "Normal selenium concentration",

    "Normal muscle enzyme activities",

    "Alternative neuromuscular disorder confirmed"

  ],

  classicFindings: [

    "Generalized muscle weakness",

    "Stiff gait",

    "Difficulty standing",

    "Elevated CK",

    "Response to selenium-vitamin E therapy"

  ],

  ruleOutFindings: [

    "Polioencephalomalacia",

    "Clostridial myositis",

    "Copper deficiency",

    "Traumatic injury",

    "Congenital myopathy",

    "Septic arthritis"

  ],

};