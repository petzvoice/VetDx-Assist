import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineTheileriosis: DiseaseCard = {
  id: "bovine-theileriosis",

  title: "Bovine Theileriosis",

  description:
    "A tick-borne protozoal disease of cattle caused by Theileria species, characterized by fever, lymph node enlargement, anemia, immunosuppression, and production losses.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "East Coast Fever",
    "Tropical Theileriosis",
    "Theileria Infection",
    "Mediterranean Theileriosis",
  ],

  overview:
    "Bovine theileriosis is caused by intracellular protozoan parasites of the genus Theileria. Important species include Theileria annulata and Theileria parva. Infection occurs through tick transmission, followed by multiplication of schizonts in lymphocytes and piroplasms in erythrocytes. Disease severity depends on parasite species, cattle susceptibility, and immune status. Severe infections may result in fever, lymphadenopathy, anemia, respiratory distress, and death.",

  clinicalProblems: [

    "Tick-borne protozoal infection",
    "High fever",
    "Lymph node enlargement",
    "Anemia",
    "Weight loss",
    "Reduced milk production",
    "Respiratory distress",
    "Immunosuppression",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess tick exposure, endemic area, introduction of susceptible cattle, vaccination history, and production losses."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate fever, enlarged lymph nodes, anemia, respiratory signs, and general condition."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect lymph node aspirates and blood samples for microscopic and molecular examination."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection by detecting Theileria organisms using microscopy, PCR, or serological methods."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Administer antiprotozoal therapy, provide supportive care, control ticks, and improve herd prevention."
    }

  ],

  diagnostics: [

    {
      id: "lymph-node-smear",
      name: "Lymph Node Aspirate Examination",
      priority: "Essential",
      reason:
        "Detects schizont stages of Theileria infection."
    },

    {
      id: "blood-smear",
      name: "Blood Smear Examination",
      priority: "Essential",
      reason:
        "May detect erythrocytic piroplasm stages."
    },

    {
      id: "pcr",
      name: "PCR",
      priority: "Recommended",
      reason:
        "Provides sensitive confirmation and species identification."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates anemia and disease severity."
    }

  ],

  drugCategories: [

    {
      category: "Antiprotozoal",
      indication: "Theileria infection",
      reason:
        "Targets protozoal organisms responsible for disease."
    },

    {
      category: "Antibiotics",
      indication: "Secondary bacterial infections",
      reason:
        "Used when secondary infections complicate disease."
    },

    {
      category: "NSAIDs",
      indication: "Fever and inflammation",
      reason:
        "Improves comfort and reduces inflammatory response."
    },

    {
      category: "Supportive Therapy",
      indication: "Anemia and weakness",
      reason:
        "Supports recovery during systemic disease."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "buparvaquone",
      priority: "First Line",
      category: "Antiprotozoal"
    },

    {
      drugId: "oxytetracycline",
      priority: "Alternative",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Reduce stress and handling.",
    "Provide supportive nursing care.",
    "Control tick infestation.",
    "Monitor anemia severity.",
    "Maintain hydration and nutrition."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Tick exposure", weight: 90 },

      { finding: "Endemic region", weight: 85 },

      { finding: "Introduction of susceptible cattle", weight: 80 },

      { finding: "Production losses", weight: 70 }

    ],

    clinicalSigns: [

      { finding: "High fever", weight: 90 },

      { finding: "Enlarged lymph nodes", weight: 95 },

      { finding: "Anemia", weight: 85 },

      { finding: "Weight loss", weight: 70 },

      { finding: "Respiratory distress", weight: 70 },

      { finding: "Weakness", weight: 80 }

    ],

    biochemistry: [

      { finding: "Anemia", weight: 80 },

      { finding: "Increased bilirubin", weight: 60 },

      { finding: "Inflammatory changes", weight: 50 }

    ],

    imaging: [

      { finding: "No routine diagnostic imaging findings", weight: 5 }

    ],

    supports: [

      { finding: "Theileria detected in lymph node aspirate", weight: 100 },

      { finding: "Positive PCR", weight: 100 },

      { finding: "Compatible signs with tick exposure", weight: 90 }

    ],

    against: [

      { finding: "Negative PCR", weight: -80 },

      { finding: "Alternative tick-borne disease confirmed", weight: -75 }

    ],

  },
    monitoring: [

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Monitors response to antiprotozoal treatment and resolution of fever."
    },

    {
      id: "lymph-nodes",
      parameter: "Peripheral lymph node size",
      frequency: "Daily",
      reason:
        "Evaluates reduction of lymphadenopathy during recovery."
    },

    {
      id: "hematology",
      parameter: "Packed cell volume and red blood cell parameters",
      frequency: "Every few days during treatment",
      reason:
        "Monitors anemia and recovery of erythrocyte status."
    },

    {
      id: "appetite",
      parameter: "Feed intake and body condition",
      frequency: "Daily",
      reason:
        "Assesses improvement in systemic illness and production recovery."
    },

    {
      id: "tick-burden",
      parameter: "Tick infestation level",
      frequency: "Regular evaluation",
      reason:
        "Determines effectiveness of tick control strategies."
    }

  ],

  precautions: [

    {
      id: "tick-control",
      title: "Tick Control",
      description:
        "Regular tick control programs are essential to reduce transmission of Theileria species."
    },

    {
      id: "carrier-status",
      title: "Carrier Animals",
      description:
        "Recovered cattle may remain infected and contribute to parasite maintenance within herds."
    },

    {
      id: "stress-management",
      title: "Stress Reduction",
      description:
        "Minimize transport and environmental stress because severe disease may occur in susceptible cattle."
    }

  ],

  prognosis:
    "Prognosis varies with parasite species, severity of infection, and timing of treatment. Early treated cases may recover, while severe infections with respiratory distress, anemia, or organ involvement may have a guarded prognosis.",

  strengtheningEvidence: [

    "Enlarged lymph nodes",

    "Tick exposure",

    "Theileria detected in lymph node aspirate",

    "Positive PCR"

  ],

  weakeningEvidence: [

    "Negative PCR",

    "Negative microscopic examination",

    "Alternative tick-borne disease confirmed"

  ],

  classicFindings: [

    "High fever",

    "Generalized lymphadenopathy",

    "Anemia",

    "Weight loss",

    "Weakness"

  ],

  ruleOutFindings: [

    "Bovine Babesiosis",

    "Bovine Anaplasmosis",

    "Bovine Leukosis Virus Infection",

    "Tuberculosis",

    "Malignant Catarrhal Fever",

    "Chronic Bacterial Infection"

  ],

};