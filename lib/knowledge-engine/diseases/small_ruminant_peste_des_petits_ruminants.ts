import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantPesteDesPetitsRuminants: DiseaseCard = {
  id: "small-ruminant-peste-des-petits-ruminants",

  title: "Peste des Petits Ruminants (PPR)",

  description:
    "A highly contagious viral disease of sheep and goats caused by Peste des petits ruminants virus (PPRV), characterized by fever, ocular and nasal discharge, stomatitis, diarrhea, pneumonia, and high mortality.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "PPR",
    "Goat Plague",
    "Ovine Rinderpest",
  ],

  overview:
    "PPR is caused by a Morbillivirus belonging to the family Paramyxoviridae. The disease spreads primarily through close contact with infected animals via respiratory secretions. Goats are generally more severely affected than sheep. Morbidity and mortality can be very high in susceptible populations, making vaccination and strict biosecurity essential for disease control.",

  clinicalProblems: [

    "High fever",
    "Necrotizing stomatitis",
    "Oculonasal discharge",
    "Severe diarrhea",
    "Bronchopneumonia",
    "Dehydration",
    "High mortality"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent animal introductions, vaccination status, outbreak history, and rapid spread within the flock."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate fever, oral erosions, ocular discharge, respiratory disease, diarrhea, and dehydration."
    },

    {
      id: "laboratory-confirmation",
      step: 3,
      title: "Laboratory Diagnosis",
      description:
        "Confirm infection using PCR, antigen detection, or serological testing."
    },

    {
      id: "outbreak-control",
      step: 4,
      title: "Disease Control",
      description:
        "Isolate affected animals, provide supportive care, and implement strict biosecurity measures."
    }

  ],

  diagnostics: [

    {
      id: "rt-pcr",
      name: "RT-PCR",
      priority: "Essential",
      reason:
        "Highly sensitive and specific confirmation of PPRV infection."
    },

    {
      id: "antigen-elisa",
      name: "Antigen ELISA",
      priority: "Recommended",
      reason:
        "Detects viral antigen during active infection."
    },

    {
      id: "serology",
      name: "Serology",
      priority: "Recommended",
      reason:
        "Supports diagnosis and surveillance."
    },

    {
      id: "necropsy",
      name: "Postmortem Examination",
      priority: "Recommended",
      reason:
        "Identifies characteristic lesions."

    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "Dehydration and systemic illness",
      reason:
        "Maintains hydration and improves survival."
    },

    {
      category: "NSAIDs",
      indication: "Fever and inflammation",
      reason:
        "Provides supportive treatment."
    },

    {
      category: "Broad-spectrum Antibiotics",
      indication: "Secondary bacterial infections",
      reason:
        "Reduces complications associated with pneumonia and enteritis."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    },

    {
      drugId: "oxytetracycline",
      priority: "Supportive",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Isolate affected animals immediately.",
    "Provide aggressive fluid therapy.",
    "Correct electrolyte imbalance.",
    "Treat secondary bacterial infections.",
    "Improve nutrition and nursing care.",
    "Notify veterinary authorities where required."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent introduction of unvaccinated animals",
        weight: 90
      },

      {
        finding: "Rapid flock outbreak",
        weight: 100
      },

      {
        finding: "No history of PPR vaccination",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "High fever",
        weight: 90
      },

      {
        finding: "Oral erosions",
        weight: 100
      },

      {
        finding: "Oculonasal discharge",
        weight: 95
      },

      {
        finding: "Profuse diarrhea",
        weight: 90
      },

      {
        finding: "Bronchopneumonia",
        weight: 90
      }

    ],

    biochemistry: [

      {
        finding: "Hemoconcentration due to dehydration",
        weight: 60
      }

    ],

    imaging: [

      {
        finding: "Thoracic lesions compatible with pneumonia",
        weight: 60
      }

    ],

    supports: [

      {
        finding: "Positive RT-PCR for PPR virus",
        weight: 100
      },

      {
        finding: "Positive antigen detection",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Negative PCR with incompatible clinical findings",
        weight: -80
      },

      {
        finding: "Alternative infectious disease confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "body-temperature",
      parameter: "Rectal temperature",
      frequency: "Daily",
      reason:
        "Monitors progression of viral infection and response to treatment."
    },

    {
      id: "hydration-status",
      parameter: "Hydration status",
      frequency: "Every 6–12 hours in hospitalized animals",
      reason:
        "Guides fluid therapy and detects worsening dehydration."
    },

    {
      id: "respiratory-status",
      parameter: "Respiratory rate and effort",
      frequency: "Daily",
      reason:
        "Assesses progression of pneumonia."
    },

    {
      id: "feed-intake",
      parameter: "Feed intake and body condition",
      frequency: "Daily",
      reason:
        "Evaluates recovery and nutritional status."
    },

    {
      id: "flock-surveillance",
      parameter: "New clinical cases and mortality",
      frequency: "Continuous during outbreak",
      reason:
        "Monitors disease spread and effectiveness of control measures."

    }

  ],

  precautions: [

    {
      id: "vaccination",
      title: "Routine Vaccination",
      description:
        "Vaccinate susceptible sheep and goats in endemic or high-risk regions using approved PPR vaccines."
    },

    {
      id: "quarantine",
      title: "Quarantine New Animals",
      description:
        "Isolate newly introduced animals before mixing with the resident flock."
    },

    {
      id: "biosecurity",
      title: "Strict Biosecurity",
      description:
        "Restrict animal movement, disinfect equipment, and minimize contact between infected and healthy animals."
    },

    {
      id: "outbreak-control",
      title: "Rapid Outbreak Response",
      description:
        "Immediately isolate affected animals and notify veterinary authorities where the disease is reportable."

    }

  ],

  prognosis:
    "Prognosis depends on virulence of the virus, vaccination status, and supportive care. Mortality may be high in naïve flocks, while vaccinated animals generally have an excellent prognosis.",

  strengtheningEvidence: [

    "Rapid flock outbreak",

    "Oral erosions with oculonasal discharge",

    "Positive RT-PCR or antigen ELISA",

    "Unvaccinated flock"

  ],

  weakeningEvidence: [

    "Negative laboratory confirmation",

    "No fever or oral lesions",

    "Alternative respiratory or enteric disease confirmed"

  ],

  classicFindings: [

    "High fever",

    "Ocular and nasal discharge",

    "Necrotic stomatitis",

    "Profuse diarrhea",

    "Bronchopneumonia"

  ],

  ruleOutFindings: [

    "Contagious ecthyma (Orf)",

    "Bluetongue",

    "Pasteurellosis",

    "Contagious caprine pleuropneumonia",

    "Foot-and-mouth disease",

    "Sheep and goat pox"

  ],

};