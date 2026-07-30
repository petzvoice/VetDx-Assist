import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineMycoplasmosis: DiseaseCard = {
  id: "bovine-mycoplasmosis",

  title: "Bovine Mycoplasmosis",

  description:
    "A contagious disease of cattle caused by Mycoplasma species, commonly associated with pneumonia, mastitis, arthritis, otitis, and reproductive disorders.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Mycoplasma Infection",
    "Bovine Mycoplasma Disease",
    "Mycoplasma bovis Infection",
  ],

  overview:
    "Bovine mycoplasmosis is an important infectious disease caused mainly by Mycoplasma bovis. The organism lacks a cell wall, allowing it to evade some antimicrobial therapies. Infection may occur through respiratory secretions, milk, and close contact. Clinical manifestations include respiratory disease, chronic pneumonia, mastitis, arthritis, and reproductive problems.",

  clinicalProblems: [

    "Chronic pneumonia",
    "Mastitis",
    "Polyarthritis",
    "Otitis media",
    "Reduced growth",
    "Reduced milk production",
    "Treatment failure risk"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess herd respiratory disease, mastitis history, antibiotic response, and introduction of new animals."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate respiratory signs, udder abnormalities, joint swelling, and ear disease."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect appropriate samples from respiratory tract, milk, joints, or affected tissues."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Diagnosis",
      description:
        "Confirm infection using culture, PCR, or other pathogen detection methods."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Control spread, provide supportive care, and implement herd management strategies."
    }

  ],

  diagnostics: [

    {
      id: "pcr",
      name: "PCR Testing for Mycoplasma",
      priority: "Essential",
      reason:
        "Provides specific pathogen detection."
    },

    {
      id: "culture",
      name: "Mycoplasma Culture",
      priority: "Recommended",
      reason:
        "Confirms organism isolation."
    },

    {
      id: "milk-testing",
      name: "Milk Sample Testing",
      priority: "Recommended",
      reason:
        "Important in Mycoplasma-associated mastitis."
    },

    {
      id: "radiography",
      name: "Thoracic Imaging",
      priority: "Recommended",
      reason:
        "May identify chronic lung changes."

    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Mycoplasma infection management",
      reason:
        "Used based on susceptibility and clinical situation."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Provides supportive relief."
    },

    {
      category: "Supportive Therapy",
      indication: "Chronic disease management",
      reason:
        "Maintains animal condition."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "tulathromycin",
      priority: "Alternative",
      category: "Antibiotic"
    },

    {
      drugId: "florfenicol",
      priority: "Alternative",
      category: "Antibiotic"
    },

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Isolate affected animals when possible.",
    "Identify affected herd groups.",
    "Provide supportive respiratory care.",
    "Manage mastitis and arthritis complications.",
    "Improve biosecurity practices."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Herd respiratory disease",
        weight: 85
      },

      {
        finding: "Poor response to routine antibiotics",
        weight: 90
      },

      {
        finding: "Introduction of new cattle",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Chronic pneumonia",
        weight: 90
      },

      {
        finding: "Mastitis unresponsive to treatment",
        weight: 90
      },

      {
        finding: "Joint swelling and lameness",
        weight: 85
      },

      {
        finding: "Otitis media",
        weight: 75
      }

    ],

    biochemistry: [

      {
        finding: "No specific biochemical marker",
        weight: 5
      }

    ],

    imaging: [

      {
        finding: "Chronic lung lesions on imaging",
        weight: 60
      },

      {
        finding: "Joint abnormalities",
        weight: 50
      }

    ],

    supports: [

      {
        finding: "Positive Mycoplasma PCR or culture",
        weight: 100
      },

      {
        finding: "Multiple organ involvement",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Negative Mycoplasma testing",
        weight: -70
      },

      {
        finding: "Alternative bacterial pathogen confirmed",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "respiratory-status",
      parameter: "Respiratory signs and lung function",
      frequency: "Daily",
      reason:
        "Monitors progression or improvement of pneumonia."
    },

    {
      id: "milk-quality",
      parameter: "Milk production and udder health",
      frequency: "Daily",
      reason:
        "Detects mastitis-associated complications."
    },

    {
      id: "joint-health",
      parameter: "Joint swelling and lameness",
      frequency: "Regular evaluation",
      reason:
        "Monitors arthritis development."
    },

    {
      id: "weight-gain",
      parameter: "Body condition and growth performance",
      frequency: "Regular evaluation",
      reason:
        "Assesses chronic disease impact."
    },

    {
      id: "herd-monitoring",
      parameter: "New cases within herd",
      frequency: "Continuous monitoring",
      reason:
        "Evaluates transmission and outbreak control."

    }

  ],

  precautions: [

    {
      id: "biosecurity",
      title: "Biosecurity Measures",
      description:
        "Quarantine and screen newly introduced animals to reduce introduction of Mycoplasma infection."
    },

    {
      id: "mastitis-control",
      title: "Mastitis Prevention",
      description:
        "Maintain proper milking hygiene and identify infected animals early."
    },

    {
      id: "respiratory-management",
      title: "Respiratory Disease Control",
      description:
        "Reduce overcrowding, stress, and poor ventilation that increase respiratory disease risk."
    },

    {
      id: "carrier-control",
      title: "Carrier Management",
      description:
        "Identify persistently infected animals and implement herd control strategies."

    }

  ],

  prognosis:
    "Prognosis varies depending on the affected system and severity. Respiratory and joint infections may become chronic, while Mycoplasma mastitis can be difficult to eliminate and may result in production losses.",

  strengtheningEvidence: [

    "Positive Mycoplasma PCR or culture",

    "Chronic pneumonia with poor treatment response",

    "Mastitis unresponsive to routine therapy",

    "Multiple organ involvement"

  ],

  weakeningEvidence: [

    "Negative pathogen testing",

    "Rapid response to conventional antibiotics",

    "Alternative infectious agent confirmed"

  ],

  classicFindings: [

    "Chronic respiratory disease",

    "Treatment-resistant mastitis",

    "Arthritis and lameness",

    "Otitis media",

    "Poor growth performance"

  ],

  ruleOutFindings: [

    "Bovine respiratory disease complex",

    "Pasteurella pneumonia",

    "Mannheimia infection",

    "Staphylococcal mastitis",

    "Septic arthritis",

    "Viral respiratory disease"

  ],

};