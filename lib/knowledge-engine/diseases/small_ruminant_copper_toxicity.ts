import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantCopperToxicity: DiseaseCard = {
  id: "small-ruminant-copper-toxicity",

  title: "Copper Toxicity",

  description:
    "A potentially fatal toxicosis of sheep and, less commonly, goats caused by excessive hepatic copper accumulation followed by sudden release of copper into circulation, resulting in acute intravascular hemolysis, anemia, hemoglobinuria, hepatic injury, and renal failure.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Chronic Copper Poisoning",
    "Copper Poisoning",
    "Copper Storage Disease",
  ],

  overview:
    "Copper toxicity is most common in sheep because of their limited ability to excrete excess copper in bile. Copper accumulates in the liver over weeks to months with no clinical signs. Stress or hepatic injury may trigger sudden release of stored copper, causing oxidative damage to erythrocytes, massive intravascular hemolysis, hemoglobinuria, icterus, acute kidney injury, and death. Goats are generally more resistant but may also develop toxicity after excessive exposure.",

  clinicalProblems: [

    "Acute intravascular hemolysis",
    "Hemolytic anemia",
    "Hemoglobinuria",
    "Icterus",
    "Acute kidney injury",
    "Hepatic necrosis",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess mineral supplementation, concentrate feeding, exposure to cattle feed, copper-containing products, and recent stress events."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate mucous membrane color, heart rate, urine color, hydration, body temperature, and evidence of jaundice."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Perform CBC, serum biochemistry, urinalysis, and evaluate hepatic copper concentration when available."
    },

    {
      id: "management",
      step: 4,
      title: "Emergency Treatment",
      description:
        "Stabilize the patient, provide aggressive supportive care, reduce further copper absorption, and manage hemolysis and renal injury."
    }

  ],

  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Essential",
      reason:
        "Identifies severe regenerative hemolytic anemia."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Evaluates liver injury, renal function, and bilirubin concentration."
    },

    {
      id: "urinalysis",
      name: "Urinalysis",
      priority: "Essential",
      reason:
        "Detects hemoglobinuria and evaluates renal involvement."
    },

    {
      id: "hepatic-copper",
      name: "Liver Copper Concentration",
      priority: "Recommended",
      reason:
        "Confirms excessive hepatic copper accumulation."
    }

  ],

  drugCategories: [

    {
      category: "Chelating Agents",
      indication: "Copper elimination",
      reason:
        "Enhances copper excretion and reduces further toxicity."
    },

    {
      category: "Fluid Therapy",
      indication: "Renal protection",
      reason:
        "Maintains renal perfusion and reduces pigment nephropathy."
    },

    {
      category: "Blood Transfusion",
      indication: "Severe anemia",
      reason:
        "Restores oxygen-carrying capacity in critically affected animals."
    },

    {
      category: "Antioxidants",
      indication: "Supportive therapy",
      reason:
        "May reduce oxidative tissue injury."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "ammonium-molybdate",
      priority: "First Line",
      category: "Chelating Agent"
    },

    {
      drugId: "sodium-thiosulfate",
      priority: "Supportive",
      category: "Chelating Agent"
    },

    {
      drugId: "vitamin-e",
      priority: "Supportive",
      category: "Antioxidants"
    }

  ],

  stabilization: [

    "Immediately remove the source of copper exposure.",
    "Begin aggressive intravenous fluid therapy.",
    "Treat severe anemia with blood transfusion when indicated.",
    "Administer copper antagonists or chelating therapy.",
    "Monitor renal function closely.",
    "Minimize handling stress."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Access to cattle or pig mineral supplements",
        weight: 95
      },

      {
        finding: "Long-term copper supplementation",
        weight: 90
      },

      {
        finding: "Recent stressful event before onset",
        weight: 85
      }

    ],

    clinicalSigns: [

      {
        finding: "Hemoglobinuria",
        weight: 100
      },

      {
        finding: "Icterus",
        weight: 100
      },

      {
        finding: "Pale mucous membranes",
        weight: 95
      },

      {
        finding: "Weakness and collapse",
        weight: 90
      },

      {
        finding: "Dark red to brown urine",
        weight: 100
      }

    ],

    biochemistry: [

      {
        finding: "Hyperbilirubinemia",
        weight: 95
      },

      {
        finding: "Elevated liver enzymes",
        weight: 90
      },

      {
        finding: "Azotemia",
        weight: 80
      }

    ],

    imaging: [

      {
        finding: "No characteristic imaging abnormalities",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Elevated hepatic copper concentration",
        weight: 100
      },

      {
        finding: "Acute hemolytic crisis with hemoglobinuria",
        weight: 100
      }

    ],

    against: [

      {
        finding: "No evidence of hemolysis",
        weight: -70
      },

      {
        finding: "Alternative cause of anemia confirmed",
        weight: -80
      }

    ],

  },
  monitoring: [

    {
      id: "cbc",
      parameter: "Packed cell volume (PCV), hemoglobin, and complete blood count",
      frequency: "Daily during acute illness",
      reason:
        "Monitors progression of hemolytic anemia and response to treatment."
    },

    {
      id: "renal-function",
      parameter: "Serum creatinine, BUN, and urine output",
      frequency: "Daily",
      reason:
        "Detects acute kidney injury secondary to hemoglobinuria."
    },

    {
      id: "liver-function",
      parameter: "Liver enzymes and bilirubin concentration",
      frequency: "Daily",
      reason:
        "Evaluates ongoing hepatic injury and recovery."
    },

    {
      id: "urine-color",
      parameter: "Urine color and urinalysis",
      frequency: "Every 12–24 hours",
      reason:
        "Monitors persistence or resolution of hemoglobinuria."
    },

    {
      id: "hydration-status",
      parameter: "Hydration status and fluid balance",
      frequency: "Daily",
      reason:
        "Guides fluid therapy and supports renal perfusion."
    }

  ],

  precautions: [

    {
      id: "species-feed",
      title: "Use Species-Appropriate Feed",
      description:
        "Never feed cattle, pig, or horse mineral supplements to sheep because of their higher copper content."
    },

    {
      id: "balanced-minerals",
      title: "Balanced Mineral Supplementation",
      description:
        "Provide mineral supplements specifically formulated for sheep or goats and maintain appropriate copper-to-molybdenum ratios."
    },

    {
      id: "feed-analysis",
      title: "Analyze Feed and Water",
      description:
        "Periodically evaluate copper concentrations in feed, forage, water, and mineral supplements in high-risk areas."
    },

    {
      id: "stress-reduction",
      title: "Reduce Stress",
      description:
        "Minimize transportation, overcrowding, and other stressful events in animals with suspected hepatic copper accumulation."
    }

  ],

  prognosis:
    "Prognosis is guarded to poor once acute intravascular hemolysis develops. Animals treated before severe hemolysis or renal failure have a better chance of survival. Extensive hepatic injury, severe anemia, or acute kidney injury markedly worsen the prognosis.",

  strengtheningEvidence: [

    "Dark red or brown urine",

    "Acute hemolytic anemia",

    "Icterus",

    "Elevated hepatic copper concentration"

  ],

  weakeningEvidence: [

    "No evidence of hemolysis",

    "Normal liver copper concentration",

    "Alternative cause of anemia confirmed"

  ],

  classicFindings: [

    "Hemoglobinuria",

    "Icterus",

    "Pale mucous membranes",

    "Weakness",

    "Acute intravascular hemolysis"

  ],

  ruleOutFindings: [

    "Babesiosis",

    "Leptospirosis",

    "Bacillary hemoglobinuria",

    "Brassica poisoning",

    "Onion toxicity",

    "Postparturient hemoglobinuria"

  ],

};