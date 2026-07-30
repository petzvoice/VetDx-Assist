import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineViralDiarrhea: DiseaseCard = {
  id: "bovine-viral-diarrhea",

  title: "Bovine Viral Diarrhea",

  description:
    "A contagious viral disease of cattle caused by Bovine Viral Diarrhea Virus (BVDV), resulting in gastrointestinal, respiratory, reproductive, and immunosuppressive disorders.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "BVD",
    "Bovine Viral Diarrhoea",
    "BVDV Infection",
    "Mucosal Disease",
  ],

  overview:
    "Bovine Viral Diarrhea is caused by Pestiviruses (BVDV-1 and BVDV-2) of the family Flaviviridae. Clinical manifestations vary from subclinical infection to severe diarrhea, respiratory disease, reproductive failure, congenital defects, and fatal mucosal disease. Persistently infected (PI) animals are the major reservoir and continuously shed virus throughout life, making identification and removal of PI animals essential for disease control.",

  clinicalProblems: [

    "Acute viral infection",
    "Diarrhea",
    "Pyrexia",
    "Oral ulceration",
    "Respiratory disease",
    "Immunosuppression",
    "Reproductive failure",
    "Persistent infection",
    "Mucosal disease"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess vaccination status, reproductive performance, introduction of new cattle, diarrhea outbreaks, and presence of persistently infected animals."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate fever, oral lesions, diarrhea, dehydration, respiratory signs, and reproductive abnormalities."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect whole blood, serum, ear notch samples, nasal swabs, or tissues for laboratory testing."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection using PCR, antigen ELISA, virus isolation, or immunohistochemistry."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Provide supportive care, isolate infected cattle, identify persistently infected animals, and strengthen vaccination and biosecurity."

    }

  ],

  diagnostics: [

    {
      id: "pcr",
      name: "PCR",
      priority: "Essential",
      reason:
        "Highly sensitive detection of BVD virus."
    },

    {
      id: "antigen-elisa",
      name: "Antigen ELISA",
      priority: "Essential",
      reason:
        "Useful for detecting persistently infected cattle."
    },

    {
      id: "virus-isolation",
      name: "Virus Isolation",
      priority: "Recommended",
      reason:
        "Confirms active infection."
    },

    {
      id: "immunohistochemistry",
      name: "Immunohistochemistry",
      priority: "Recommended",
      reason:
        "Useful for confirmation of persistent infection."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Diarrhea and dehydration",
      reason:
        "Restores hydration and electrolyte balance."
    },

    {
      category: "NSAIDs",
      indication: "Fever and inflammation",
      reason:
        "Improves comfort and reduces pyrexia."
    },

    {
      category: "Antimicrobial Therapy",
      indication: "Secondary bacterial infections",
      reason:
        "Controls opportunistic bacterial complications."
    },

    {
      category: "Supportive Therapy",
      indication: "General supportive care",
      reason:
        "No specific antiviral treatment is available."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "meloxicam",
      priority: "Adjunctive",
      category: "NSAIDs"
    },

    {
      drugId: "oxytetracycline",
      priority: "Supportive",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Isolate clinically affected cattle.",
    "Correct dehydration and electrolyte imbalance.",
    "Treat secondary bacterial infections.",
    "Provide easily digestible feed.",
    "Identify and remove persistently infected animals.",
    "Strengthen herd biosecurity."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Recent herd outbreak", weight: 80 },

      { finding: "Presence of persistently infected cattle", weight: 100 },

      { finding: "Poor reproductive performance", weight: 75 },

      { finding: "Unvaccinated herd", weight: 70 }

    ],

    clinicalSigns: [

      { finding: "Fever", weight: 75 },

      { finding: "Profuse diarrhea", weight: 90 },

      { finding: "Oral erosions or ulcers", weight: 95 },

      { finding: "Nasal discharge", weight: 60 },

      { finding: "Depression", weight: 70 },

      { finding: "Leukopenia", weight: 80 },

      { finding: "Abortions", weight: 70 },

      { finding: "Mucosal disease", weight: 100 }

    ],

    biochemistry: [

      { finding: "Leukopenia", weight: 85 },

      { finding: "Electrolyte abnormalities due to diarrhea", weight: 60 }

    ],

    imaging: [

      { finding: "No routine imaging findings", weight: 5 }

    ],

    supports: [

      { finding: "Positive PCR", weight: 100 },

      { finding: "Positive antigen ELISA", weight: 100 },

      { finding: "Persistently infected animal identified", weight: 100 },

      { finding: "Typical oral erosions", weight: 90 }

    ],

    against: [

      { finding: "Negative PCR", weight: -90 },

      { finding: "Alternative enteric disease confirmed", weight: -80 },

      { finding: "No compatible clinical signs", weight: -50 }

    ],

  },
    monitoring: [

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Monitors disease progression and response to therapy."
    },

    {
      id: "hydration",
      parameter: "Hydration status",
      frequency: "Daily",
      reason:
        "Evaluates severity of diarrhea and effectiveness of fluid therapy."
    },

    {
      id: "feces",
      parameter: "Fecal consistency",
      frequency: "Daily",
      reason:
        "Assesses improvement or progression of enteric disease."
    },

    {
      id: "feed-intake",
      parameter: "Feed intake",
      frequency: "Daily",
      reason:
        "Monitors recovery and nutritional status."
    },

    {
      id: "respiratory",
      parameter: "Respiratory signs",
      frequency: "Daily",
      reason:
        "Detects secondary respiratory complications."
    },

    {
      id: "reproduction",
      parameter: "Reproductive performance",
      frequency: "During breeding season",
      reason:
        "Evaluates abortions, infertility, and congenital disease."
    }

  ],

  precautions: [

    {
      id: "pi",
      title: "Persistently Infected Animals",
      description:
        "Persistently infected cattle continuously shed virus throughout life and should be identified and removed from the herd."
    },

    {
      id: "biosecurity",
      title: "Strict Biosecurity",
      description:
        "Quarantine newly introduced animals and prevent contact with infected cattle to reduce transmission."
    },

    {
      id: "vaccination",
      title: "Vaccination",
      description:
        "Routine vaccination and surveillance programs reduce the incidence of clinical disease and reproductive losses."
    }

  ],

  prognosis:
    "Most uncomplicated acute infections have a good prognosis with supportive care. Persistently infected cattle remain lifelong virus shedders, while mucosal disease carries a grave prognosis with high mortality. Herd-level reproductive and economic losses can be substantial.",

  strengtheningEvidence: [

    "Positive PCR",

    "Positive antigen ELISA",

    "Persistently infected animal",

    "Characteristic oral erosions",

    "Leukopenia"

  ],

  weakeningEvidence: [

    "Negative PCR",

    "Alternative enteric disease confirmed",

    "No compatible clinical signs"

  ],

  classicFindings: [

    "Fever",

    "Profuse diarrhea",

    "Oral erosions",

    "Leukopenia",

    "Reproductive failure"

  ],

  ruleOutFindings: [

    "Salmonellosis",

    "Coccidiosis",

    "Johne's Disease",

    "Winter Dysentery",

    "Malignant Catarrhal Fever",

    "Rinderpest (where applicable)"

  ],

};