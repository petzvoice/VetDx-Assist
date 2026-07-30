import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineInfectiousRespiratoryDiseaseComplex: DiseaseCard = {
  id: "canine-infectious-respiratory-disease-complex-dog",

  title: "Canine Infectious Respiratory Disease Complex",

  description:
    "A highly contagious multifactorial respiratory syndrome characterized by acute cough, tracheobronchitis, and upper respiratory disease in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "CIRDC",
    "Kennel Cough",
    "Infectious Tracheobronchitis",
  ],

  overview:
    "Canine Infectious Respiratory Disease Complex (CIRDC), commonly known as kennel cough, is a contagious respiratory syndrome caused by one or more viral and bacterial pathogens including Bordetella bronchiseptica, canine parainfluenza virus, canine adenovirus-2, canine influenza virus, canine respiratory coronavirus, Mycoplasma cynos, and others. Clinical severity ranges from mild self-limiting cough to severe bronchopneumonia, particularly in puppies, geriatric dogs, and immunocompromised patients.",

  clinicalProblems: [

    "Acute cough",
    "Harsh hacking cough",
    "Retching/Gagging",
    "Nasal discharge",
    "Fever",
    "Lethargy",
    "Tracheobronchitis",
    "Bronchopneumonia"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess respiratory effort, oxygenation, hydration status, and determine whether uncomplicated or pneumonia-associated disease is present."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform physical examination and diagnostic testing to identify pneumonia and, when indicated, respiratory pathogens."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Institute supportive care with appropriate antimicrobial therapy when bacterial infection or pneumonia is suspected."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory rate, effort, oxygenation, appetite, and progression to bronchopneumonia."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Recommend isolation, vaccination, environmental management, and follow-up until complete clinical recovery."
    }

  ],

  diagnostics: [

    {
      id: "physical-exam",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Differentiates uncomplicated upper airway disease from pneumonia."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Evaluates for bronchopneumonia and other pulmonary abnormalities."
    },

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Recommended",
      reason:
        "Assesses inflammatory response and systemic illness."
    },

    {
      id: "respiratory-pcr",
      name: "Respiratory PCR Panel",
      priority: "Recommended",
      reason:
        "Identifies infectious respiratory pathogens in outbreaks or severe disease."
    },

    {
      id: "airway-sampling",
      name: "Airway Cytology and Culture",
      priority: "Recommended",
      reason:
        "Guides antimicrobial therapy in complicated respiratory infections."
    }

  ],

  drugCategories: [
    {
      category: "Antibiotic",
      indication: "Suspected bacterial infection",
      reason: "Treats susceptible bacterial respiratory pathogens."
    },
    {
      category: "Antitussive",
      indication: "Non-productive cough",
      reason: "Reduces persistent coughing in uncomplicated disease."
    },
    {
      category: "Nebulization",
      indication: "Airway support",
      reason: "Promotes airway hydration and secretion clearance."
    },
    {
      category: "Oxygen Therapy",
      indication: "Respiratory distress",
      reason: "Improves oxygen delivery in hypoxemic patients."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "doxycycline",
      priority: "First Line",
      category: "Antibiotic",
    },
    {
      drugId: "amoxicillin-clavulanate",
      priority: "Alternative",
      category: "Antibiotic",
    },
    {
      drugId: "butorphanol",
      priority: "Adjunctive",
      category: "Antitussive",
    },
  ],

  stabilization: [
    "Assess airway and respiratory effort immediately.",
    "Provide oxygen supplementation in hypoxemic patients.",
    "Correct dehydration and maintain adequate hydration.",
    "Hospitalize dogs with pneumonia or respiratory distress."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Recent boarding or kennel stay", weight: 40 },
      { finding: "Exposure to coughing dogs", weight: 40 },
    ],

    clinicalSigns: [
      { finding: "Harsh hacking cough", weight: 40 },
      { finding: "Cough induced by tracheal palpation", weight: 45 },
      { finding: "Nasal discharge", weight: 15 },
      { finding: "Fever", weight: 20 },
    ],

    biochemistry: [
      { finding: "Inflammatory acute phase response", weight: 10 },
    ],

    urinalysis: [

    ],

    supports: [
      { finding: "Bronchointerstitial lung pattern", weight: 30 },
      { finding: "Positive respiratory PCR", weight: 40 },
    ],

    against: [
      { finding: "Evidence of congestive heart failure", weight: -35 },
      { finding: "Chronic collapsing trachea", weight: -20 },
    ],
  },

  monitoring: [

    {
      id: "respiratory-rate",
      parameter:
        "Respiratory rate and effort",
      frequency:
        "Every 4–8 hours in hospitalized patients",
      reason:
        "Detects deterioration and progression to respiratory distress."
    },

    {
      id: "temperature",
      parameter:
        "Body temperature",
      frequency:
        "Daily",
      reason:
        "Monitors resolution of infection."
    },

    {
      id: "appetite",
      parameter:
        "Appetite and hydration",
      frequency:
        "Daily",
      reason:
        "Assesses overall clinical recovery."
    }

  ],

  precautions: [

    {
      id: "isolation",
      title:
        "Isolation Required",
      description:
        "Affected dogs should be isolated to reduce transmission to susceptible animals."
    },

    {
      id: "antitussives",
      title:
        "Avoid Antitussives in Productive Cough",
      description:
        "Suppressing a productive cough may impair clearance of respiratory secretions."
    }

  ],

  prognosis:
    "The prognosis is excellent for uncomplicated CIRDC, with most dogs recovering within 1–3 weeks. Dogs that develop bronchopneumonia, severe respiratory compromise, or concurrent systemic disease have a guarded prognosis.",

  strengtheningEvidence: [

    "Recent kennel or shelter exposure",

    "Exposure to coughing dogs",

    "Harsh hacking cough",

    "Positive tracheal cough reflex",

    "Positive respiratory PCR",

    "Bronchointerstitial lung pattern",

    "Clinical improvement with appropriate therapy"

  ],

  weakeningEvidence: [

    "No respiratory signs",

    "Alternative confirmed cardiac disease",

    "Alternative confirmed airway disease",

    "Negative respiratory PCR during outbreak",

    "No exposure history"

  ],

  classicFindings: [

    "Recent boarding",

    "Exposure to coughing dogs",

    "Harsh hacking cough",

    "Cough induced by tracheal palpation",

    "Mild fever",

    "Normal appetite in uncomplicated cases",

    "Bronchopneumonia in severe cases"

  ],

  ruleOutFindings: [

    "Left-sided congestive heart failure",

    "Chronic tracheal collapse",

    "Pulmonary neoplasia",

    "Foreign body aspiration"

  ],

};