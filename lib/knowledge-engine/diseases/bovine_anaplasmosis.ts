import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineAnaplasmosis: DiseaseCard = {
  id: "bovine-anaplasmosis",

  title: "Bovine Anaplasmosis",

  description:
    "A tick-borne and mechanically transmitted infectious disease of cattle caused by Anaplasma marginale, characterized primarily by progressive hemolytic anemia, jaundice, weakness, and production losses.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Anaplasma marginale Infection",
    "Bovine Tick Fever",
    "Gall Sickness",
  ],

  overview:
    "Bovine anaplasmosis is caused by Anaplasma marginale, an obligate intracellular rickettsial organism that infects erythrocytes. The organism causes extravascular hemolysis resulting in anemia, icterus, weakness, and occasionally death. Transmission occurs mainly through ticks and mechanical transfer by biting flies or contaminated instruments. Older cattle often develop more severe clinical disease.",

  clinicalProblems: [

    "Hemolytic anemia",
    "Jaundice",
    "Weakness",
    "Weight loss",
    "Reduced milk production",
    "Fever",
    "Abortion",
    "Death in severe cases"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess tick exposure, geographic location, herd history, vaccination status, anemia, and production losses."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate mucous membrane color, temperature, jaundice, weakness, weight loss, and signs of anemia."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect blood samples for hematology, blood smear examination, PCR, and serological testing."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection through blood smear microscopy, PCR, or serological tests."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Provide specific antimicrobial therapy, manage anemia, control vectors, and implement preventive strategies."
    }

  ],

  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Essential",
      reason:
        "Detects regenerative anemia and evaluates severity."
    },

    {
      id: "blood-smear",
      name: "Blood Smear Examination",
      priority: "Essential",
      reason:
        "May identify organisms attached to erythrocytes."
    },

    {
      id: "pcr",
      name: "PCR",
      priority: "Recommended",
      reason:
        "Provides sensitive detection of Anaplasma marginale."
    },

    {
      id: "serology",
      name: "Serological Testing",
      priority: "Recommended",
      reason:
        "Detects exposure and herd infection status."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Anaplasma infection",
      reason:
        "Used for elimination or suppression of bacterial organism."
    },

    {
      category: "Supportive Therapy",
      indication: "Severe anemia and weakness",
      reason:
        "Supports recovery during hemolytic disease."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration and supportive care",
      reason:
        "Maintains hydration status."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "oxytetracycline",
      priority: "First Line",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Assess severity of anemia.",
    "Provide rest and reduce stress.",
    "Administer appropriate antibiotic therapy.",
    "Provide nutritional support.",
    "Control ticks and biting insects."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Tick exposure", weight: 85 },

      { finding: "Endemic area", weight: 80 },

      { finding: "Reduced milk production", weight: 70 },

      { finding: "Older cattle affected", weight: 75 }

    ],

    clinicalSigns: [

      { finding: "Pale mucous membranes", weight: 95 },

      { finding: "Jaundice", weight: 90 },

      { finding: "Weakness", weight: 85 },

      { finding: "Fever", weight: 70 },

      { finding: "Weight loss", weight: 70 },

      { finding: "Abortion", weight: 60 }

    ],

    biochemistry: [

      { finding: "Regenerative anemia", weight: 95 },

      { finding: "Increased bilirubin", weight: 80 },

      { finding: "Elevated liver enzymes", weight: 50 }

    ],

    imaging: [

      { finding: "No routine imaging findings", weight: 5 }

    ],

    supports: [

      { finding: "Anaplasma identified on blood smear", weight: 100 },

      { finding: "Positive PCR", weight: 100 },

      { finding: "Compatible anemia with tick exposure", weight: 90 }

    ],

    against: [

      { finding: "Negative PCR and smear examination", weight: -80 },

      { finding: "Alternative cause of anemia confirmed", weight: -75 }

    ],

  },
    monitoring: [

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Monitors response to infection control and therapy."
    },

    {
      id: "mucous-membranes",
      parameter: "Mucous membrane color",
      frequency: "Daily",
      reason:
        "Evaluates progression or recovery from anemia."
    },

    {
      id: "hematology",
      parameter: "Packed cell volume and red blood cell count",
      frequency: "Every few days during treatment",
      reason:
        "Monitors severity and improvement of hemolytic anemia."
    },

    {
      id: "appetite",
      parameter: "Feed intake and body condition",
      frequency: "Daily",
      reason:
        "Assesses recovery and production status."
    },

    {
      id: "tick-control",
      parameter: "Tick burden",
      frequency: "Regular evaluation",
      reason:
        "Evaluates effectiveness of vector control measures."
    }

  ],

  precautions: [

    {
      id: "vector-control",
      title: "Vector Control",
      description:
        "Control ticks and biting insects to reduce transmission of Anaplasma marginale."
    },

    {
      id: "equipment-hygiene",
      title: "Equipment Hygiene",
      description:
        "Avoid mechanical transmission through contaminated needles, surgical instruments, and blood-contaminated equipment."
    },

    {
      id: "carrier-animals",
      title: "Carrier Animals",
      description:
        "Recovered cattle may remain carriers and contribute to infection spread within herds."
    }

  ],

  prognosis:
    "Prognosis depends on severity of anemia and timing of treatment. Mild to moderate cases generally respond well to therapy, while severe anemia may result in death, especially in adult cattle.",

  strengtheningEvidence: [

    "Regenerative anemia",

    "Tick exposure",

    "Anaplasma identified on blood smear",

    "Positive PCR"

  ],

  weakeningEvidence: [

    "Negative PCR",

    "Negative blood smear",

    "Alternative cause of anemia confirmed"

  ],

  classicFindings: [

    "Pale mucous membranes",

    "Jaundice",

    "Weakness",

    "Fever",

    "Weight loss"

  ],

  ruleOutFindings: [

    "Babesiosis",

    "Theileriosis",

    "Leptospirosis",

    "Copper Deficiency",

    "Chronic Blood Loss",

    "Hemolytic Toxicities"

  ],

};