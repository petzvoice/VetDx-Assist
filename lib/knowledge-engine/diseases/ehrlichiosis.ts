import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const ehrlichiosis: DiseaseCard = {
  id: "ehrlichiosis-dog",

  title: "Ehrlichiosis",

  description:
    "A tick-borne bacterial disease of dogs caused primarily by Ehrlichia canis, resulting in thrombocytopenia, vasculitis, and multisystemic illness.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Canine Ehrlichiosis",
    "Tropical Canine Pancytopenia",
    "Ehrlichia canis infection",
  ],

  overview:
    "Canine ehrlichiosis is a tick-borne disease caused primarily by Ehrlichia canis and transmitted by the brown dog tick (Rhipicephalus sanguineus). The organism infects monocytes, leading to vasculitis, thrombocytopenia, immune-mediated injury, and bone marrow suppression. Clinical disease ranges from acute fever and lethargy to chronic pancytopenia and hemorrhagic complications.",

  clinicalProblems: [

    "Fever",
    "Lethargy/Weakness",
    "Anorexia",
    "Thrombocytopenia",
    "Bleeding tendency",
    "Lymphadenopathy",
    "Splenomegaly",
    "Weight loss"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess cardiovascular status, evidence of hemorrhage, hydration, anemia, and history of tick exposure."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform hematology, serum biochemistry, tick-borne disease screening, and confirmatory Ehrlichia testing."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Initiate appropriate antimicrobial therapy and supportive care while correcting hematologic abnormalities."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor platelet count, anemia, bleeding, renal function, and response to treatment."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Complete antimicrobial therapy, repeat laboratory evaluation, and institute tick prevention."
    }

  ],

  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Identifies thrombocytopenia, anemia, leukocyte abnormalities, and pancytopenia."
    },

    {
      id: "chemistry",
      name: "Serum Biochemistry Panel",
      priority: "Essential",
      reason:
        "Evaluates organ involvement and protein abnormalities."
    },

    {
      id: "snap",
      name: "Tick-borne Disease Serology (SNAP 4Dx)",
      priority: "Recommended",
      reason:
        "Screens for exposure to Ehrlichia species and other tick-borne pathogens."
    },

    {
      id: "pcr",
      name: "Ehrlichia PCR",
      priority: "Recommended",
      reason:
        "Confirms active infection, especially during acute disease."
    },

    {
      id: "blood-smear",
      name: "Blood Smear Examination",
      priority: "Recommended",
      reason:
        "May occasionally demonstrate morulae within circulating monocytes."
    }

  ],

  drugCategories: [
    {
      category: "Antibiotic",
      indication: "Ehrlichia infection",
      reason: "Eliminates the intracellular organism."
    },
    {
      category: "Fluid Therapy",
      indication: "Dehydration",
      reason: "Maintains hydration and tissue perfusion."
    },
    {
      category: "Blood Products",
      indication: "Severe anemia or hemorrhage",
      reason: "Supports oxygen delivery and replaces blood loss."
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
      drugId: "imidocarb",
      priority: "Alternative",
      category: "Antibiotic",
    },
    {
      drugId: "maropitant",
      priority: "Adjunctive",
      category: "Antiemetic",
    },
  ],

  stabilization: [
    "Control active hemorrhage if present.",
    "Correct dehydration with appropriate fluid therapy.",
    "Consider blood transfusion for severe anemia.",
    "Begin doxycycline as soon as ehrlichiosis is strongly suspected.",
  ],

  clinicalEvidence: {
    history: [
      { finding: "Tick exposure", weight: 40 },
      { finding: "Travel to tick-endemic area", weight: 25 },
    ],

    clinicalSigns: [
      { finding: "Fever", weight: 20 },
      { finding: "Lethargy", weight: 15 },
      { finding: "Petechiae", weight: 35 },
      { finding: "Epistaxis", weight: 35 },
    ],

    biochemistry: [
      { finding: "Hyperglobulinemia", weight: 30 },
      { finding: "Hypoalbuminemia", weight: 20 },
    ],

    urinalysis: [
      { finding: "Proteinuria", weight: 20 },
    ],

    supports: [
      { finding: "Thrombocytopenia", weight: 45 },
      { finding: "Pancytopenia", weight: 40 },
    ],

    against: [
      { finding: "Marked neutrophilic leukocytosis", weight: -15 },
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
        "Evaluates response to therapy and bleeding risk."
    },

    {
      id: "cbc",
      parameter:
        "Complete Blood Count",
      frequency:
        "Weekly until improvement",
      reason:
        "Monitors anemia and bone marrow recovery."
    },

    {
      id: "chemistry",
      parameter:
        "Serum Biochemistry",
      frequency:
        "Every 2–4 weeks",
      reason:
        "Monitors systemic organ involvement."
    }

  ],

  precautions: [

    {
      id: "coinfection",
      title:
        "Concurrent Tick-borne Diseases",
      description:
        "Dogs may be co-infected with Anaplasma, Babesia, or Lyme disease."
    },

    {
      id: "bleeding-risk",
      title:
        "Hemorrhage Risk",
      description:
        "Minimize invasive procedures in severely thrombocytopenic patients."
    }

  ],

  prognosis:
    "Prognosis is good when ehrlichiosis is recognized early and treated appropriately with doxycycline. Chronic disease with severe pancytopenia, bone marrow suppression, or uncontrolled hemorrhage carries a guarded to poor prognosis.",

  strengtheningEvidence: [

    "Positive Ehrlichia PCR",

    "Positive Ehrlichia serology",

    "Thrombocytopenia",

    "Hyperglobulinemia",

    "Pancytopenia",

    "Tick exposure",

    "Petechiae or epistaxis",

    "Clinical improvement after doxycycline"

  ],

  weakeningEvidence: [

    "Negative PCR with appropriate sampling",

    "Negative serology after adequate time for seroconversion",

    "Normal platelet count",

    "No history of tick exposure",

    "Alternative confirmed diagnosis"

  ],

  classicFindings: [

    "Tick exposure",

    "Fever",

    "Lethargy",

    "Thrombocytopenia",

    "Petechiae",

    "Epistaxis",

    "Hyperglobulinemia"

  ],

  ruleOutFindings: [

    "Severe azotemia with icterus suggesting leptospirosis",

    "Marked regenerative hemolytic anemia without thrombocytopenia",

    "Alternative confirmed infectious or immune-mediated disease"

  ],

};