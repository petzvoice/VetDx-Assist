import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const leptospirosis: DiseaseCard = {
  id: "leptospirosis-dog",

  title: "Leptospirosis",

  description:
    "A zoonotic bacterial disease causing acute kidney injury, hepatic dysfunction, and sometimes pulmonary hemorrhage in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Lepto",
    "Leptospira infection",
  ],

  overview:
    "Leptospirosis is a systemic bacterial infection caused by pathogenic Leptospira species. Dogs are infected through exposure to contaminated water, soil, or urine from infected animals. The disease commonly causes acute kidney injury and hepatic dysfunction but may also involve pulmonary hemorrhage, vasculitis, and other systemic complications.",


  clinicalProblems: [

    "Acute kidney injury",
    "Hepatic dysfunction",
    "Vomiting/Anorexia",
    "Lethargy/Weakness",
    "Dehydration",
    "Fever",
    "Jaundice",
    "Pulmonary hemorrhage"

  ],


  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess hydration status, cardiovascular stability, renal involvement, respiratory compromise, and zoonotic risk."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform baseline laboratory testing and specific Leptospira testing to confirm infection and assess organ involvement."
    },

    {
      id: "supportive-management",
      step: 3,
      title: "Supportive Management",
      description:
        "Provide supportive care based on renal, hepatic, respiratory, and systemic abnormalities."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor renal function, urine output, respiratory status, electrolyte abnormalities, and coagulation changes."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Plan follow-up monitoring and preventive strategies including vaccination and owner education."
    }

  ],


  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Evaluates inflammatory response, platelet abnormalities, and systemic involvement."
    },

    {
      id: "chemistry",
      name: "Serum Biochemistry Panel",
      priority: "Essential",
      reason:
        "Assesses renal and hepatic function."
    },

    {
      id: "urinalysis",
      name: "Urinalysis",
      priority: "Essential",
      reason:
        "Evaluates urinary abnormalities and renal involvement."
    },

    {
      id: "pcr",
      name: "Leptospira PCR",
      priority: "Recommended",
      reason:
        "Helps identify active infection during appropriate disease stages."
    },

    {
      id: "mat",
      name: "Microscopic Agglutination Test (MAT)",
      priority: "Recommended",
      reason:
        "Detects antibody response against Leptospira."
    }

  ],


  drugCategories: [

    {
      category:
        "Antimicrobials (Acute Phase)",
      indication:
        "Treatment of active infection",
      reason:
        "Used to reduce bacterial burden during acute leptospiremia."
    },

    {
      category:
        "Antimicrobials (Carrier State)",
      indication:
        "Reduction of urinary shedding",
      reason:
        "Used to eliminate renal carrier status."
    },

    {
      category:
        "Fluid Therapy",
      indication:
        "Management of dehydration and renal dysfunction",
      reason:
        "Supports renal perfusion and electrolyte balance."
    },

    {
      category:
        "Anti-emetics",
      indication:
        "Control vomiting and nausea",
      reason:
        "Improves patient comfort and supports nutrition."
    }

  ],

  clinicalEvidence: {
  history: [
    { finding: "Stagnant water", weight: 40 },
    { finding: "Rodent exposure", weight: 35 },
  ],

  clinicalSigns: [
    { finding: "Fever", weight: 25 },
    { finding: "Vomiting", weight: 15 },
    { finding: "Lethargy", weight: 15 },
    { finding: "Jaundice", weight: 30 },
  ],

  biochemistry: [
    { finding: "Increased Creatinine", weight: 35 },
    { finding: "Increased Bilirubin", weight: 30 },
  ],

  urinalysis: [
    { finding: "Proteinuria", weight: 20 },
    { finding: "Isosthenuria", weight: 20 },
  ],

  supports: [
    { finding: "Acute kidney injury", weight: 40 },
  ],

  against: [
    { finding: "Hyperglycemia", weight: -20 },
  ],
},

  monitoring: [

    {
      id:"renal",
      parameter:
        "Renal values (BUN, Creatinine, Phosphorus)",
      frequency:
        "Daily during hospitalization",
      reason:
        "Tracks progression or recovery of kidney injury."
    },

    {
      id:"electrolytes",
      parameter:
        "Electrolytes",
      frequency:
        "Daily",
      reason:
        "Detects clinically important abnormalities."
    },

    {
      id:"urine",
      parameter:
        "Urine output",
      frequency:
        "Continuous monitoring in critical patients",
      reason:
        "Assesses renal function and fluid balance."
    }

  ],


  precautions: [

    {
      id:"zoonotic-risk",
      title:
        "Zoonotic Transmission Risk",
      description:
        "Use appropriate protective equipment when handling infected animals and urine."
    },

    {
      id:"fluid-overload",
      title:
        "Fluid Overload Risk",
      description:
        "Monitor fluid therapy carefully in patients with severe kidney injury."
    }

  ],


  prognosis:
    "Prognosis depends on severity of renal and hepatic involvement. Early diagnosis and aggressive supportive care improve outcomes. Severe kidney failure, pulmonary hemorrhage, or multi-organ dysfunction carries a guarded prognosis."

};