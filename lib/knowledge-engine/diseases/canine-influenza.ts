import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineInfluenza: DiseaseCard = {
  id: "canine-influenza-dog",

  title: "Canine Influenza",

  description:
    "A highly contagious viral respiratory disease causing acute cough, fever, nasal discharge, and pneumonia in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Canine Influenza Virus Infection",
    "Dog Flu",
    "CIV",
  ],

  overview:
    "Canine influenza is an acute contagious respiratory disease caused by influenza A viruses, primarily H3N8 and H3N2 subtypes. Transmission occurs through respiratory droplets, direct contact, and contaminated fomites. Clinical disease ranges from mild upper respiratory infection to severe bronchointerstitial pneumonia, particularly in puppies, geriatric dogs, and immunocompromised animals.",

  clinicalProblems: [

    "Acute cough",
    "Fever",
    "Nasal discharge",
    "Ocular discharge",
    "Lethargy",
    "Anorexia",
    "Tachypnea",
    "Pneumonia"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess respiratory effort, oxygenation, hydration status, and identify evidence of pneumonia or respiratory distress."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform baseline laboratory testing and respiratory pathogen testing while evaluating for pulmonary involvement."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Provide supportive care and initiate antimicrobial therapy when secondary bacterial pneumonia is suspected."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory function, oxygenation, hydration, and progression to pneumonia."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Recommend isolation, vaccination where appropriate, and follow-up until complete clinical recovery."
    }

  ],

  diagnostics: [

    {
      id: "physical-exam",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Evaluates respiratory severity and detects evidence of pneumonia."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Identifies bronchointerstitial or alveolar pulmonary disease."
    },

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Recommended",
      reason:
        "Assesses inflammatory response and possible secondary bacterial infection."
    },

    {
      id: "respiratory-pcr",
      name: "Influenza PCR",
      priority: "Recommended",
      reason:
        "Confirms active canine influenza infection."
    },

    {
      id: "serology",
      name: "Influenza Serology",
      priority: "Recommended",
      reason:
        "Supports diagnosis when paired serum samples are available."
    }

  ],

  drugCategories: [
    {
      category: "Antibiotic",
      indication: "Secondary bacterial pneumonia",
      reason: "Treats bacterial respiratory complications."
    },
    {
      category: "Fluid Therapy",
      indication: "Dehydration",
      reason: "Maintains hydration and tissue perfusion."
    },
    {
      category: "Nebulization",
      indication: "Airway support",
      reason: "Improves airway clearance and secretion mobilization."
    },
    {
      category: "Oxygen Therapy",
      indication: "Hypoxemia",
      reason: "Supports oxygenation in severe respiratory disease."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "doxycycline",
      priority: "Adjunctive",
      category: "Antibiotic",
    },
    {
      drugId: "amoxicillin-clavulanate",
      priority: "Alternative",
      category: "Antibiotic",
    },
    {
      drugId: "maropitant",
      priority: "Supportive",
      category: "Antiemetic",
    },
  ],

  stabilization: [
    "Assess airway patency and respiratory effort immediately.",
    "Provide oxygen supplementation in hypoxemic patients.",
    "Correct dehydration with appropriate fluid therapy.",
    "Hospitalize patients with pneumonia or respiratory distress."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Recent boarding or daycare exposure", weight: 40 },
      { finding: "Contact with coughing dogs", weight: 40 },
    ],

    clinicalSigns: [
      { finding: "Persistent cough", weight: 35 },
      { finding: "Fever", weight: 25 },
      { finding: "Nasal discharge", weight: 20 },
      { finding: "Tachypnea", weight: 25 },
    ],

    biochemistry: [
      { finding: "Inflammatory acute phase response", weight: 10 },
    ],

    urinalysis: [

    ],

    supports: [
      { finding: "Positive influenza PCR", weight: 50 },
      { finding: "Bronchointerstitial pneumonia", weight: 30 },
    ],

    against: [
      { finding: "No respiratory signs", weight: -30 },
      { finding: "Confirmed cardiac disease", weight: -25 },
    ],
  },

  monitoring: [

    {
      id:"respiration",
      parameter:
        "Respiratory rate and effort",
      frequency:
        "Every 4–8 hours in hospitalized patients",
      reason:
        "Detects progression of respiratory compromise."
    },

    {
      id:"oxygen",
      parameter:
        "Oxygen saturation",
      frequency:
        "Continuous in critical patients",
      reason:
        "Monitors adequacy of oxygenation."
    },

    {
      id:"temperature",
      parameter:
        "Body temperature",
      frequency:
        "Daily",
      reason:
        "Assesses response to treatment."
    }

  ],

  precautions: [

    {
      id:"isolation",
      title:
        "Strict Isolation",
      description:
        "Affected dogs should be isolated to minimize transmission to susceptible animals."
    },

    {
      id:"secondary-infection",
      title:
        "Secondary Bacterial Pneumonia",
      description:
        "Monitor closely for bacterial pneumonia requiring antimicrobial therapy."
    }

  ],

  prognosis:
    "The prognosis is excellent for uncomplicated canine influenza with appropriate supportive care. Dogs that develop severe pneumonia, respiratory failure, or secondary bacterial infection have a guarded prognosis.",

  strengtheningEvidence: [

    "Positive influenza PCR",

    "Recent kennel or daycare exposure",

    "Exposure to coughing dogs",

    "Persistent cough",

    "Fever",

    "Bronchointerstitial pneumonia",

    "Clinical outbreak in local dog population"

  ],

  weakeningEvidence: [

    "Negative influenza PCR with appropriate sampling",

    "No respiratory signs",

    "Alternative confirmed respiratory disease",

    "No exposure to other dogs",

    "Alternative confirmed diagnosis"

  ],

  classicFindings: [

    "Recent boarding or daycare",

    "Acute cough",

    "Fever",

    "Serous nasal discharge",

    "Lethargy",

    "Bronchointerstitial pneumonia",

    "Positive influenza PCR"

  ],

  ruleOutFindings: [

    "Congestive heart failure",

    "Chronic collapsing trachea",

    "Foreign body aspiration",

    "Pulmonary neoplasia"

  ],

};