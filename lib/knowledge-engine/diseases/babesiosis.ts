import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const babesiosis: DiseaseCard = {
  id: "babesiosis-dog",

  title: "Babesiosis",

  description:
    "A tick-borne protozoal disease causing hemolytic anemia, thrombocytopenia, and systemic inflammatory illness in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Canine Babesiosis",
    "Babesia infection",
  ],

  overview:
    "Canine babesiosis is a tick-borne hemoprotozoal disease caused by Babesia species, primarily Babesia vogeli and Babesia gibsoni. The organisms infect erythrocytes, resulting in immune-mediated and direct hemolysis, thrombocytopenia, systemic inflammation, and variable organ dysfunction. Disease severity ranges from subclinical infection to life-threatening hemolytic crisis and multiple organ dysfunction syndrome.",

  clinicalProblems: [

    "Hemolytic anemia",
    "Thrombocytopenia",
    "Fever",
    "Lethargy/Weakness",
    "Anorexia",
    "Jaundice",
    "Hemoglobinuria",
    "Splenomegaly"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess cardiovascular stability, severity of anemia, hydration status, and evidence of shock or hemolysis."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform hematology, serum biochemistry, blood smear evaluation, and confirmatory Babesia testing."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Initiate specific antiprotozoal therapy together with supportive care based on disease severity."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor anemia, thrombocytopenia, renal function, coagulation status, and response to treatment."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Continue follow-up testing, evaluate for persistent infection, and maintain effective tick prevention."
    }

  ],

  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Identifies anemia, thrombocytopenia, and inflammatory leukogram."
    },

    {
      id: "chemistry",
      name: "Serum Biochemistry Panel",
      priority: "Essential",
      reason:
        "Evaluates hepatic, renal, and metabolic abnormalities secondary to hemolysis."
    },

    {
      id: "blood-smear",
      name: "Blood Smear Examination",
      priority: "Essential",
      reason:
        "May demonstrate intraerythrocytic Babesia organisms."
    },

    {
      id: "pcr",
      name: "Babesia PCR",
      priority: "Recommended",
      reason:
        "Confirms infection and assists in species identification."
    },

    {
      id: "serology",
      name: "Babesia Serology",
      priority: "Recommended",
      reason:
        "Supports diagnosis in selected clinical situations."
    }

  ],

  drugCategories: [
    {
      category: "Antiprotozoal",
      indication: "Babesia infection",
      reason: "Eliminates or suppresses Babesia organisms."
    },
    {
      category: "Fluid Therapy",
      indication: "Shock/Dehydration",
      reason: "Restores tissue perfusion and hydration."
    },
    {
      category: "Blood Products",
      indication: "Severe anemia",
      reason: "Improves oxygen-carrying capacity."
    },
    {
      category: "Antiemetic",
      indication: "Vomiting",
      reason: "Improves patient comfort and nutritional intake."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "imidocarb",
      priority: "First Line",
      category: "Antiprotozoal",
    },
    {
      drugId: "atovaquone",
      priority: "Alternative",
      category: "Antiprotozoal",
    },
    {
      drugId: "azithromycin",
      priority: "Adjunctive",
      category: "Antiprotozoal",
    },
  ],

  stabilization: [
    "Assess perfusion and treat hypovolemic shock if present.",
    "Administer IV fluids according to cardiovascular status.",
    "Provide blood transfusion when severe anemia compromises oxygen delivery.",
    "Initiate specific antiprotozoal therapy as soon as diagnosis is suspected."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Tick exposure", weight: 40 },
      { finding: "Travel to endemic area", weight: 30 },
    ],

    clinicalSigns: [
      { finding: "Pale mucous membranes", weight: 35 },
      { finding: "Fever", weight: 20 },
      { finding: "Jaundice", weight: 30 },
      { finding: "Hemoglobinuria", weight: 35 },
    ],

    biochemistry: [
      { finding: "Hyperbilirubinemia", weight: 30 },
      { finding: "Increased ALT", weight: 15 },
    ],

    urinalysis: [
      { finding: "Hemoglobinuria", weight: 30 },
      { finding: "Bilirubinuria", weight: 20 },
    ],

    supports: [
      { finding: "Regenerative anemia", weight: 40 },
      { finding: "Thrombocytopenia", weight: 35 },
      { finding: "Babesia organisms on blood smear", weight: 50 },
    ],

    against: [
      { finding: "Persistent normal hematocrit", weight: -20 },
    ],
  },

  monitoring: [

    {
      id: "pcv",
      parameter:
        "PCV/Hematocrit",
      frequency:
        "Daily during hospitalization",
      reason:
        "Monitors progression or resolution of anemia."
    },

    {
      id: "platelets",
      parameter:
        "Platelet count",
      frequency:
        "Daily",
      reason:
        "Evaluates recovery from thrombocytopenia."
    },

    {
      id: "renal",
      parameter:
        "Renal function and urine output",
      frequency:
        "Daily",
      reason:
        "Detects renal complications associated with hemolysis."
    }

  ],

  precautions: [

    {
      id: "coinfection",
      title:
        "Concurrent Tick-borne Diseases",
      description:
        "Dogs may be simultaneously infected with Ehrlichia, Anaplasma, or other tick-borne pathogens."
    },

    {
      id: "transfusion",
      title:
        "Blood Transfusion Considerations",
      description:
        "Blood typing and cross-matching are recommended before transfusion whenever possible."
    }

  ],

  prognosis:
    "Prognosis is generally good with early diagnosis and appropriate therapy. Severe hemolysis, disseminated intravascular coagulation, acute kidney injury, or multiple organ dysfunction are associated with a guarded to poor prognosis.",

  strengtheningEvidence: [

    "Positive Babesia PCR",

    "Babesia organisms on blood smear",

    "Regenerative hemolytic anemia",

    "Thrombocytopenia",

    "Hyperbilirubinemia",

    "Hemoglobinuria",

    "Tick exposure",

    "Clinical response to antiprotozoal therapy"

  ],

  weakeningEvidence: [

    "Negative PCR with appropriate sampling",

    "Repeated negative blood smear",

    "Normal hematocrit",

    "No history of tick exposure",

    "Alternative confirmed diagnosis"

  ],

  classicFindings: [

    "Tick exposure",

    "Fever",

    "Pale mucous membranes",

    "Hemolytic anemia",

    "Thrombocytopenia",

    "Hemoglobinuria",

    "Splenomegaly"

  ],

  ruleOutFindings: [

    "Persistent normal erythrogram",

    "Absence of anemia despite severe illness",

    "Alternative confirmed cause of hemolytic anemia"

  ],

};