import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineBabesiosis: DiseaseCard = {
  id: "bovine-babesiosis",

  title: "Bovine Babesiosis",

  description:
    "A tick-borne protozoal disease of cattle caused by Babesia species, characterized by intravascular hemolysis, fever, anemia, hemoglobinuria, and potentially fatal complications.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Redwater Disease",
    "Tick Fever",
    "Bovine Piroplasmosis",
    "Babesia Infection",
  ],

  overview:
    "Bovine babesiosis is caused mainly by Babesia bovis and Babesia bigemina, which are intraerythrocytic protozoan parasites transmitted primarily by Rhipicephalus ticks. The organisms multiply inside red blood cells causing intravascular hemolysis, anemia, fever, and hemoglobinuria. Severe infections may result in cerebral babesiosis, shock, and death.",

  clinicalProblems: [

    "Intravascular hemolysis",
    "Hemolytic anemia",
    "Hemoglobinuria",
    "High fever",
    "Jaundice",
    "Weakness",
    "Reduced production",
    "Neurological signs",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess tick exposure, endemic area, recent introduction of cattle, vaccination status, and sudden illness or deaths."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate fever, anemia, jaundice, urine color, weakness, and neurological signs."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect peripheral blood samples for microscopy, PCR, and hematological evaluation."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection by identifying Babesia organisms on blood smear or using molecular testing."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Administer antiprotozoal therapy, provide supportive care, manage anemia, and control tick infestation."
    }

  ],

  diagnostics: [

    {
      id: "blood-smear",
      name: "Blood Smear Examination",
      priority: "Essential",
      reason:
        "Detects Babesia organisms within erythrocytes."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Essential",
      reason:
        "Evaluates severity of anemia and hemolysis."
    },

    {
      id: "pcr",
      name: "PCR",
      priority: "Recommended",
      reason:
        "Provides sensitive detection and species identification."
    },

    {
      id: "serology",
      name: "Serological Testing",
      priority: "Recommended",
      reason:
        "Useful for exposure assessment and herd monitoring."
    }

  ],

  drugCategories: [

    {
      category: "Antiprotozoal",
      indication: "Babesia infection",
      reason:
        "Targets intraerythrocytic protozoal parasites."
    },

    {
      category: "Supportive Therapy",
      indication: "Anemia and systemic illness",
      reason:
        "Supports recovery during hemolysis."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration and hemoglobinuria",
      reason:
        "Maintains hydration and supports renal function."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "imidocarb",
      priority: "First Line",
      category: "Antiprotozoal"
    }

  ],

  stabilization: [

    "Reduce stress and provide rest.",
    "Assess severity of anemia.",
    "Provide fluid support when required.",
    "Control tick infestation.",
    "Monitor for neurological complications."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Tick exposure", weight: 90 },

      { finding: "Endemic area", weight: 85 },

      { finding: "Recent cattle introduction", weight: 75 },

      { finding: "Sudden deaths", weight: 85 }

    ],

    clinicalSigns: [

      { finding: "High fever", weight: 90 },

      { finding: "Hemoglobinuria", weight: 95 },

      { finding: "Pale mucous membranes", weight: 90 },

      { finding: "Jaundice", weight: 85 },

      { finding: "Weakness", weight: 80 },

      { finding: "Neurological signs", weight: 70 }

    ],

    biochemistry: [

      { finding: "Regenerative anemia", weight: 95 },

      { finding: "Increased bilirubin", weight: 80 },

      { finding: "Hemoglobinemia", weight: 85 }

    ],

    imaging: [

      { finding: "No routine diagnostic imaging findings", weight: 5 }

    ],

    supports: [

      { finding: "Babesia organisms detected on smear", weight: 100 },

      { finding: "Positive PCR", weight: 100 },

      { finding: "Compatible hemolytic anemia with tick exposure", weight: 90 }

    ],

    against: [

      { finding: "Negative PCR and smear", weight: -80 },

      { finding: "Alternative cause of hemolysis confirmed", weight: -75 }

    ],

  },
    monitoring: [

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Monitors response to antiprotozoal therapy and resolution of fever."
    },

    {
      id: "urine-color",
      parameter: "Urine color and hemoglobinuria",
      frequency: "Daily",
      reason:
        "Evaluates severity and improvement of intravascular hemolysis."
    },

    {
      id: "hematology",
      parameter: "Packed cell volume and red blood cell count",
      frequency: "Every few days during treatment",
      reason:
        "Monitors recovery from hemolytic anemia."
    },

    {
      id: "hydration",
      parameter: "Hydration status",
      frequency: "Daily",
      reason:
        "Assesses dehydration risk associated with fever and hemoglobinuria."
    },

    {
      id: "tick-burden",
      parameter: "Tick infestation level",
      frequency: "Regular evaluation",
      reason:
        "Determines effectiveness of tick control measures."
    }

  ],

  precautions: [

    {
      id: "tick-control",
      title: "Tick Control",
      description:
        "Effective tick management reduces transmission and prevents recurrence of babesiosis."
    },

    {
      id: "carrier-management",
      title: "Carrier Animals",
      description:
        "Recovered animals may remain carriers and contribute to infection maintenance in endemic regions."
    },

    {
      id: "stress-reduction",
      title: "Stress Reduction",
      description:
        "Avoid unnecessary transport and stress because stressed cattle may develop severe clinical disease."
    }

  ],

  prognosis:
    "Prognosis depends on severity of hemolysis and timing of treatment. Early diagnosed cases generally respond well to therapy, while severe anemia, cerebral involvement, or shock may result in death.",

  strengtheningEvidence: [

    "Hemoglobinuria",

    "Tick exposure",

    "Babesia identified on blood smear",

    "Positive PCR"

  ],

  weakeningEvidence: [

    "Negative blood smear",

    "Negative PCR",

    "Alternative hemolytic disease confirmed"

  ],

  classicFindings: [

    "Red urine",

    "High fever",

    "Anemia",

    "Jaundice",

    "Weakness"

  ],

  ruleOutFindings: [

    "Bovine Anaplasmosis",

    "Theileriosis",

    "Leptospirosis",

    "Copper Toxicity",

    "Immune-mediated Hemolytic Anemia",

    "Hemolytic Plant Poisoning"

  ],

};