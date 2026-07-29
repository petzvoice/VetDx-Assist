import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const lymeDisease: DiseaseCard = {
  id: "lyme-disease-dog",

  title: "Lyme Disease",

  description:
    "A tick-borne bacterial disease caused by Borrelia burgdorferi, commonly resulting in shifting-leg lameness, polyarthritis, fever, and, in some dogs, protein-losing nephropathy.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Borreliosis",
    "Canine Lyme Disease",
    "Borrelia burgdorferi infection",
  ],

  overview:
    "Lyme disease is a tick-borne infection caused by Borrelia burgdorferi and transmitted primarily by Ixodes ticks. Many infected dogs remain subclinical, while clinically affected dogs typically develop fever, shifting-leg lameness, polyarthritis, and lymphadenopathy. A small proportion develop Lyme nephropathy characterized by severe protein-losing nephropathy, azotemia, and edema.",

  clinicalProblems: [

    "Shifting-leg lameness",
    "Polyarthritis",
    "Fever",
    "Lethargy/Weakness",
    "Lymphadenopathy",
    "Anorexia",
    "Protein-losing nephropathy",
    "Acute kidney injury"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess mobility, hydration, renal involvement, cardiovascular stability, and history of tick exposure."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform hematology, serum biochemistry, urinalysis, Lyme serology, and confirmatory testing where appropriate."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Initiate antimicrobial therapy together with supportive care based on musculoskeletal and renal involvement."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor renal function, proteinuria, joint pain, and clinical response throughout treatment."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Continue follow-up evaluation, monitor renal function, and institute lifelong tick prevention."
    }

  ],

  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Evaluates inflammatory and hematologic abnormalities."
    },

    {
      id: "chemistry",
      name: "Serum Biochemistry Panel",
      priority: "Essential",
      reason:
        "Assesses renal involvement and systemic abnormalities."
    },

    {
      id: "urinalysis",
      name: "Urinalysis with UPC Ratio",
      priority: "Essential",
      reason:
        "Detects proteinuria and evaluates for Lyme nephropathy."
    },

    {
      id: "snap4dx",
      name: "Lyme Serology (SNAP 4Dx)",
      priority: "Recommended",
      reason:
        "Screens for antibodies against Borrelia burgdorferi."
    },

    {
      id: "c6",
      name: "Quantitative C6 Antibody Test",
      priority: "Recommended",
      reason:
        "Supports diagnosis and treatment monitoring in selected patients."
    }

  ],

  drugCategories: [
    {
      category: "Antibiotic",
      indication: "Borrelia infection",
      reason: "Eliminates susceptible Borrelia organisms."
    },
    {
      category: "Analgesic",
      indication: "Polyarthritis",
      reason: "Reduces pain and improves mobility."
    },
    {
      category: "Fluid Therapy",
      indication: "Renal involvement",
      reason: "Supports renal perfusion and hydration."
    },
    {
      category: "Renal Support",
      indication: "Protein-losing nephropathy",
      reason: "Helps manage renal complications."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "doxycycline",
      priority: "First Line",
      category: "Antibiotic",
    },
    {
      drugId: "amoxicillin",
      priority: "Alternative",
      category: "Antibiotic",
    },
    {
      drugId: "carprofen",
      priority: "Adjunctive",
      category: "Analgesic",
    },
  ],

  stabilization: [
    "Assess hydration status and provide IV fluids if indicated.",
    "Control joint pain and improve patient comfort.",
    "Evaluate for protein-losing nephropathy and renal dysfunction.",
    "Initiate antimicrobial therapy when Lyme disease is strongly suspected."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Tick exposure", weight: 40 },
      { finding: "Residence in endemic area", weight: 30 },
    ],

    clinicalSigns: [
      { finding: "Shifting-leg lameness", weight: 40 },
      { finding: "Fever", weight: 20 },
      { finding: "Joint pain", weight: 30 },
      { finding: "Lymphadenopathy", weight: 15 },
    ],

    biochemistry: [
      { finding: "Azotemia", weight: 30 },
      { finding: "Hypoalbuminemia", weight: 25 },
    ],

    urinalysis: [
      { finding: "Proteinuria", weight: 35 },
      { finding: "Increased UPC ratio", weight: 30 },
    ],

    supports: [
      { finding: "Positive Lyme serology", weight: 40 },
      { finding: "Protein-losing nephropathy", weight: 35 },
    ],

    against: [
      { finding: "No tick exposure history", weight: -15 },
    ],
  },

  monitoring: [

    {
      id: "renal",
      parameter:
        "Renal values (BUN, Creatinine)",
      frequency:
        "Weekly in affected dogs",
      reason:
        "Detects progression of renal disease."
    },

    {
      id: "proteinuria",
      parameter:
        "Urine protein and UPC ratio",
      frequency:
        "Every 2–4 weeks",
      reason:
        "Monitors response of Lyme nephropathy."
    },

    {
      id: "clinical",
      parameter:
        "Lameness and joint pain",
      frequency:
        "Daily during treatment",
      reason:
        "Evaluates clinical improvement."
    }

  ],

  precautions: [

    {
      id: "nephropathy",
      title:
        "Lyme Nephropathy",
      description:
        "Monitor dogs with proteinuria closely as progressive renal disease can develop."
    },

    {
      id: "coinfection",
      title:
        "Tick-borne Coinfections",
      description:
        "Concurrent infection with Anaplasma, Ehrlichia, or Babesia should be considered."
    }

  ],

  prognosis:
    "The prognosis is excellent for uncomplicated Lyme disease treated early with appropriate antibiotics. Dogs that develop Lyme nephropathy have a guarded to poor prognosis depending on the severity of renal injury.",

  strengtheningEvidence: [

    "Positive Lyme serology",

    "Positive C6 antibody test",

    "Tick exposure",

    "Shifting-leg lameness",

    "Polyarthritis",

    "Proteinuria",

    "Protein-losing nephropathy",

    "Rapid improvement after doxycycline"

  ],

  weakeningEvidence: [

    "Negative Lyme serology after appropriate interval",

    "No tick exposure",

    "Normal urinalysis in suspected nephropathy",

    "Alternative confirmed orthopedic disease",

    "Alternative confirmed diagnosis"

  ],

  classicFindings: [

    "Tick exposure",

    "Shifting-leg lameness",

    "Polyarthritis",

    "Fever",

    "Positive Lyme serology",

    "Proteinuria",

    "Protein-losing nephropathy"

  ],

  ruleOutFindings: [

    "Alternative orthopedic disease explaining lameness",

    "Persistent normal renal evaluation in suspected nephropathy",

    "Alternative confirmed infectious disease"

  ],

};