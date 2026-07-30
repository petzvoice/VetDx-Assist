import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineTuberculosis: DiseaseCard = {
  id: "bovine-tuberculosis",

  title: "Bovine Tuberculosis",

  description:
    "A chronic contagious bacterial disease of cattle caused by Mycobacterium bovis, characterized by granulomatous lesions, progressive respiratory signs, weight loss, and zoonotic importance.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Bovine TB",
    "Mycobacterium bovis Infection",
    "Tuberculous Disease",
  ],

  overview:
    "Bovine tuberculosis is caused by Mycobacterium bovis, a slow-growing intracellular bacterium belonging to the Mycobacterium tuberculosis complex. Transmission occurs mainly through respiratory droplets but may also occur through ingestion of contaminated materials. The disease develops slowly, producing granulomatous lesions mainly in respiratory and lymphatic tissues. It is an important zoonotic disease affecting animal health, public health, and livestock productivity.",

  clinicalProblems: [

    "Chronic bacterial infection",
    "Granulomatous inflammation",
    "Progressive weight loss",
    "Chronic cough",
    "Respiratory difficulty",
    "Reduced production",
    "Lymph node enlargement",
    "Zoonotic risk"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess chronic respiratory signs, weight loss, herd history, introduction of new animals, and previous tuberculosis detection."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate body condition, respiratory signs, lymph nodes, coughing, and general health status."
    },

    {
      id: "screening",
      step: 3,
      title: "Screening Testing",
      description:
        "Perform tuberculosis screening using intradermal tuberculin testing or other approved methods."
    },

    {
      id: "confirmation",
      step: 4,
      title: "Confirmatory Diagnosis",
      description:
        "Confirm infection using culture, PCR, and histopathological examination of lesions."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Implement herd control measures, removal of infected animals, testing programs, and biosecurity."
    }

  ],

  diagnostics: [

    {
      id: "tuberculin-test",
      name: "Tuberculin Skin Test",
      priority: "Essential",
      reason:
        "Primary screening method for detection of infected cattle."
    },

    {
      id: "interferon-gamma",
      name: "Interferon Gamma Assay",
      priority: "Recommended",
      reason:
        "Detects cell-mediated immune response against Mycobacterium bovis."
    },

    {
      id: "culture",
      name: "Mycobacterial Culture",
      priority: "Essential",
      reason:
        "Confirms presence of viable Mycobacterium bovis."
    },

    {
      id: "histopathology",
      name: "Histopathology",
      priority: "Recommended",
      reason:
        "Identifies characteristic granulomatous lesions."
    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "General health support",
      reason:
        "Supports affected animals where appropriate."
    },

    {
      category: "Antibiotics",
      indication: "Not routinely recommended in livestock control programs",
      reason:
        "Treatment is generally avoided because of prolonged therapy requirements and control concerns."
    }

  ],

  recommendedDrugs: [],

  stabilization: [

    "Identify and isolate suspected animals.",
    "Perform herd testing.",
    "Maintain strict biosecurity.",
    "Prevent exposure of humans and animals.",
    "Follow regulatory control measures.",
    "Remove confirmed infected animals according to guidelines."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Chronic herd problem",
        weight: 90
      },

      {
        finding: "Introduction of new animals",
        weight: 85
      },

      {
        finding: "Previous tuberculosis-positive animals",
        weight: 95
      },

      {
        finding: "Close animal housing",
        weight: 75
      }

    ],

    clinicalSigns: [

      {
        finding: "Chronic cough",
        weight: 85
      },

      {
        finding: "Progressive weight loss",
        weight: 90
      },

      {
        finding: "Reduced milk production",
        weight: 75
      },

      {
        finding: "Enlarged lymph nodes",
        weight: 85
      },

      {
        finding: "Exercise intolerance",
        weight: 70
      }

    ],

    biochemistry: [

      {
        finding: "Chronic inflammatory changes",
        weight: 40
      }

    ],

    imaging: [

      {
        finding: "Thoracic lesions on imaging",
        weight: 60
      }

    ],

    supports: [

      {
        finding: "Positive tuberculin test",
        weight: 95
      },

      {
        finding: "Positive Mycobacterium bovis culture",
        weight: 100
      },

      {
        finding: "Characteristic granulomas",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Negative tuberculosis testing",
        weight: -85
      },

      {
        finding: "Alternative chronic respiratory disease confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "respiratory-status",
      parameter: "Respiratory signs and chronic cough",
      frequency: "Regular evaluation",
      reason:
        "Monitors progression of respiratory involvement."
    },

    {
      id: "body-condition",
      parameter: "Body condition score and weight",
      frequency: "Monthly",
      reason:
        "Detects progressive wasting associated with chronic infection."
    },

    {
      id: "production",
      parameter: "Milk production and performance",
      frequency: "Daily in lactating animals",
      reason:
        "Evaluates economic impact of infection."
    },

    {
      id: "herd-testing",
      parameter: "Tuberculosis screening status",
      frequency: "Scheduled herd surveillance",
      reason:
        "Identifies infected animals and controls transmission."
    },

    {
      id: "biosecurity",
      parameter: "Animal movement and introduction control",
      frequency: "Continuous",
      reason:
        "Prevents introduction and spread of infection."
    }

  ],

  precautions: [

    {
      id: "zoonotic-risk",
      title: "Zoonotic Protection",
      description:
        "Mycobacterium bovis can infect humans; avoid consumption of unpasteurized dairy products and maintain protective handling practices."
    },

    {
      id: "testing-program",
      title: "Regular Testing Program",
      description:
        "Routine screening helps identify infected cattle before clinical disease becomes apparent."
    },

    {
      id: "animal-movement",
      title: "Movement Control",
      description:
        "Test new animals before introduction into herds to reduce disease transmission."
    }

  ],

  prognosis:
    "Clinical bovine tuberculosis is a chronic progressive disease with poor individual prognosis. Control relies mainly on surveillance, testing, removal of infected animals, and prevention of transmission.",

  strengtheningEvidence: [

    "Positive tuberculin skin test",

    "Positive Mycobacterium bovis culture",

    "Granulomatous lesions on pathology",

    "Chronic weight loss with respiratory signs"

  ],

  weakeningEvidence: [

    "Negative tuberculosis testing",

    "Absence of compatible lesions",

    "Alternative chronic respiratory disease confirmed"

  ],

  classicFindings: [

    "Chronic cough",

    "Progressive weight loss",

    "Enlarged lymph nodes",

    "Reduced productivity",

    "Chronic respiratory disease"

  ],

  ruleOutFindings: [

    "Bovine Respiratory Disease Complex",

    "Bovine Theileriosis",

    "Johne's Disease",

    "Lungworm Infection",

    "Chronic Pneumonia",

    "Lung Neoplasia"

  ],

};