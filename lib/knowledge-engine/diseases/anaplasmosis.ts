import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const anaplasmosis: DiseaseCard = {
  id: "anaplasmosis-dog",

  title: "Anaplasmosis",

  description:
    "A tick-borne bacterial disease causing fever, thrombocytopenia, polyarthritis, and systemic illness in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Canine Anaplasmosis",
    "Anaplasma infection",
  ],

  overview:
    "Canine anaplasmosis is a tick-borne disease caused primarily by Anaplasma phagocytophilum and Anaplasma platys. A. phagocytophilum infects neutrophils, whereas A. platys infects platelets. Clinical manifestations vary from mild, self-limiting illness to severe systemic disease characterized by fever, thrombocytopenia, polyarthritis, and bleeding tendencies. Coinfection with other tick-borne pathogens is common.",

  clinicalProblems: [

    "Fever",
    "Lethargy/Weakness",
    "Thrombocytopenia",
    "Lameness/Polyarthritis",
    "Anorexia",
    "Lymphadenopathy",
    "Petechiae/Ecchymoses",
    "Joint pain"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess hydration, evidence of hemorrhage, joint pain, cardiovascular stability, and history of tick exposure."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform hematology, serum biochemistry, tick-borne disease screening, and confirmatory Anaplasma testing."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Initiate doxycycline therapy together with supportive care based on clinical severity."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor platelet count, lameness, bleeding tendency, and response to treatment."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Complete antimicrobial therapy and maintain effective tick prevention with follow-up evaluation."
    }

  ],

  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Identifies thrombocytopenia and inflammatory leukogram."
    },

    {
      id: "chemistry",
      name: "Serum Biochemistry Panel",
      priority: "Essential",
      reason:
        "Evaluates systemic organ involvement."
    },

    {
      id: "snap4dx",
      name: "Tick-borne Disease Serology (SNAP 4Dx)",
      priority: "Recommended",
      reason:
        "Screens for Anaplasma exposure and concurrent tick-borne diseases."
    },

    {
      id: "pcr",
      name: "Anaplasma PCR",
      priority: "Recommended",
      reason:
        "Confirms active infection and identifies the infecting species."
    },

    {
      id: "blood-smear",
      name: "Blood Smear Examination",
      priority: "Recommended",
      reason:
        "May identify morulae within neutrophils or platelets."
    }

  ],

  drugCategories: [
    {
      category: "Antibiotic",
      indication: "Anaplasma infection",
      reason: "Eliminates susceptible intracellular bacteria."
    },
    {
      category: "Fluid Therapy",
      indication: "Dehydration",
      reason: "Maintains hydration and tissue perfusion."
    },
    {
      category: "Analgesic",
      indication: "Joint pain",
      reason: "Improves comfort in dogs with polyarthritis."
    },
    {
      category: "Tick Control",
      indication: "Prevention",
      reason: "Prevents reinfection and additional tick-borne diseases."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "doxycycline",
      priority: "First Line",
      category: "Antibiotic",
    },
    {
      drugId: "carprofen",
      priority: "Adjunctive",
      category: "Analgesic",
    },
    {
      drugId: "tramadol",
      priority: "Alternative",
      category: "Analgesic",
    },
  ],

  stabilization: [
    "Correct dehydration if present.",
    "Control pain associated with polyarthritis.",
    "Monitor for active bleeding in severely thrombocytopenic patients.",
    "Initiate doxycycline when clinical suspicion is high."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Tick exposure", weight: 40 },
      { finding: "Travel to endemic area", weight: 25 },
    ],

    clinicalSigns: [
      { finding: "Fever", weight: 20 },
      { finding: "Lameness", weight: 30 },
      { finding: "Joint pain", weight: 30 },
      { finding: "Petechiae", weight: 30 },
    ],

    biochemistry: [
      { finding: "Hyperglobulinemia", weight: 20 },
      { finding: "Mild increased ALT", weight: 15 },
    ],

    urinalysis: [
      { finding: "Proteinuria", weight: 15 },
    ],

    supports: [
      { finding: "Thrombocytopenia", weight: 40 },
      { finding: "Morulae in neutrophils", weight: 45 },
      { finding: "Positive Anaplasma PCR", weight: 50 },
    ],

    against: [
      { finding: "Normal platelet count", weight: -20 },
    ],
  },

  monitoring: [

    {
      id: "platelets",
      parameter:
        "Platelet count",
      frequency:
        "Every 3–7 days initially",
      reason:
        "Monitors recovery from thrombocytopenia."
    },

    {
      id: "clinical",
      parameter:
        "Lameness and joint pain",
      frequency:
        "Daily during hospitalization",
      reason:
        "Assesses clinical response to treatment."
    },

    {
      id: "cbc",
      parameter:
        "Complete Blood Count",
      frequency:
        "Weekly until recovery",
      reason:
        "Monitors hematologic improvement."
    }

  ],

  precautions: [

    {
      id: "coinfection",
      title:
        "Concurrent Tick-borne Diseases",
      description:
        "Evaluate for Ehrlichia, Babesia, Lyme disease, and other tick-borne coinfections."
    },

    {
      id: "bleeding",
      title:
        "Bleeding Risk",
      description:
        "Avoid unnecessary invasive procedures in severely thrombocytopenic patients."
    }

  ],

  prognosis:
    "The prognosis is excellent in most dogs with early diagnosis and appropriate doxycycline therapy. Severe thrombocytopenia, persistent polyarthritis, or concurrent tick-borne infections may result in a more guarded prognosis.",

  strengtheningEvidence: [

    "Positive Anaplasma PCR",

    "Positive SNAP 4Dx",

    "Morulae within neutrophils",

    "Thrombocytopenia",

    "Tick exposure",

    "Polyarthritis",

    "Fever",

    "Rapid response to doxycycline"

  ],

  weakeningEvidence: [

    "Negative PCR with appropriate sampling",

    "Negative serology after appropriate interval",

    "Normal platelet count",

    "No history of tick exposure",

    "Alternative confirmed diagnosis"

  ],

  classicFindings: [

    "Tick exposure",

    "Fever",

    "Lameness",

    "Polyarthritis",

    "Thrombocytopenia",

    "Joint pain",

    "Positive Anaplasma PCR"

  ],

  ruleOutFindings: [

    "Persistent normal platelet count",

    "Alternative orthopedic disease explaining lameness",

    "Alternative confirmed infectious disease"

  ],

};