import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineJohnesDisease: DiseaseCard = {
  id: "bovine-johnes-disease",

  title: "Bovine Johne's Disease",

  description:
    "A chronic infectious granulomatous enteritis of cattle caused by Mycobacterium avium subsp. paratuberculosis (MAP), characterized by progressive weight loss, chronic diarrhea, and reduced production.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Johne's Disease",
    "Paratuberculosis",
    "MAP Infection",
    "Bovine Paratuberculosis",
  ],

  overview:
    "Johne's disease is caused by Mycobacterium avium subsp. paratuberculosis, a chronic intracellular bacterial infection affecting the intestinal tract of cattle. Infection usually occurs early in life through ingestion of contaminated feces, milk, feed, or water. The organism causes granulomatous inflammation of the ileum and associated lymph nodes, resulting in impaired nutrient absorption, chronic diarrhea, weight loss, and reduced productivity.",

  clinicalProblems: [

    "Chronic granulomatous enteritis",
    "Progressive weight loss",
    "Chronic diarrhea",
    "Reduced milk production",
    "Poor body condition",
    "Protein loss",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess chronic weight loss, persistent diarrhea, herd history, age of onset, and previous Johne's disease cases."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate body condition, diarrhea, dehydration, production loss, and signs of chronic wasting."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect feces, blood, or tissue samples for bacterial detection and immune testing."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection using fecal culture, PCR, ELISA, and histopathological examination."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "There is no effective curative treatment; focus on herd control, reducing transmission, and management of infected animals."
    }

  ],

  diagnostics: [

    {
      id: "fecal-pcr",
      name: "Fecal PCR",
      priority: "Essential",
      reason:
        "Detects MAP shedding in feces."
    },

    {
      id: "fecal-culture",
      name: "Fecal Culture",
      priority: "Recommended",
      reason:
        "Confirms MAP infection but requires prolonged incubation."
    },

    {
      id: "elisa",
      name: "ELISA",
      priority: "Recommended",
      reason:
        "Detects antibodies and is useful for herd screening."
    },

    {
      id: "histopathology",
      name: "Histopathology",
      priority: "Recommended",
      reason:
        "Demonstrates characteristic granulomatous intestinal lesions."
    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "Clinical management",
      reason:
        "Supports nutrition and general health."
    },

    {
      category: "Antibiotics",
      indication: "Not routinely curative",
      reason:
        "Treatment is generally ineffective due to chronic intracellular infection."
    }

  ],

  recommendedDrugs: [],

  stabilization: [

    "Improve nutritional management.",
    "Reduce environmental contamination.",
    "Separate affected animals when possible.",
    "Maintain hygiene in calving areas.",
    "Implement herd testing and control programs."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Adult cattle affected", weight: 85 },

      { finding: "Chronic herd problem", weight: 90 },

      { finding: "Previous Johne's disease cases", weight: 85 },

      { finding: "Calf exposure to contaminated environment", weight: 75 }

    ],

    clinicalSigns: [

      { finding: "Chronic weight loss", weight: 95 },

      { finding: "Persistent diarrhea", weight: 95 },

      { finding: "Reduced milk production", weight: 80 },

      { finding: "Poor body condition", weight: 85 },

      { finding: "Normal appetite despite weight loss", weight: 70 }

    ],

    biochemistry: [

      { finding: "Low serum protein", weight: 70 },

      { finding: "Hypoalbuminemia", weight: 75 }

    ],

    imaging: [

      { finding: "Thickened intestinal wall on ultrasound", weight: 40 }

    ],

    supports: [

      { finding: "Positive MAP PCR", weight: 100 },

      { finding: "Positive fecal culture", weight: 100 },

      { finding: "Positive ELISA with compatible signs", weight: 90 }

    ],

    against: [

      { finding: "Negative MAP testing", weight: -80 },

      { finding: "Alternative cause of chronic diarrhea confirmed", weight: -75 }

    ],

  },
  monitoring: [

    {
      id: "body-condition",
      parameter: "Body condition score and weight",
      frequency: "Monthly",
      reason:
        "Monitors progressive weight loss and nutritional decline."
    },

    {
      id: "fecal-shedding",
      parameter: "MAP shedding status",
      frequency: "Periodic herd testing",
      reason:
        "Evaluates infection status and transmission risk."
    },

    {
      id: "milk-production",
      parameter: "Milk production",
      frequency: "Daily in lactating animals",
      reason:
        "Assesses production losses associated with chronic infection."
    },

    {
      id: "diarrhea",
      parameter: "Fecal consistency",
      frequency: "Regular evaluation",
      reason:
        "Monitors progression of intestinal disease."
    },

    {
      id: "herd-status",
      parameter: "Herd infection status",
      frequency: "Scheduled surveillance",
      reason:
        "Helps evaluate control program effectiveness."
    }

  ],

  precautions: [

    {
      id: "calf-management",
      title: "Calf Protection",
      description:
        "Prevent exposure of young calves to contaminated manure, milk, and calving environments because infection usually occurs early in life."
    },

    {
      id: "testing-program",
      title: "Herd Testing Program",
      description:
        "Regular testing helps identify infected animals and reduce disease spread."
    },

    {
      id: "biosecurity",
      title: "Biosecurity",
      description:
        "Avoid introduction of infected replacement animals into the herd."
    }

  ],

  prognosis:
    "Prognosis is poor for clinically affected cattle because there is no reliable curative treatment. Management focuses on reducing transmission, maintaining productivity, and removing heavily infected animals.",

  strengtheningEvidence: [

    "Chronic progressive weight loss",

    "Persistent diarrhea in adult cattle",

    "Positive MAP PCR",

    "Positive fecal culture"

  ],

  weakeningEvidence: [

    "Negative MAP testing",

    "Recovery without progression",

    "Alternative cause of chronic diarrhea identified"

  ],

  classicFindings: [

    "Adult cow with chronic diarrhea",

    "Severe weight loss",

    "Normal appetite despite wasting",

    "Reduced production",

    "Poor body condition"

  ],

  ruleOutFindings: [

    "Bovine Salmonellosis",

    "Bovine Viral Diarrhoea",

    "Parasitic Gastroenteritis",

    "Malnutrition",

    "Chronic Liver Disease",

    "Intestinal Neoplasia"

  ],

};