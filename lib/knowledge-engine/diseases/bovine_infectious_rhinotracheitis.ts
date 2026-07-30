import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineInfectiousRhinotracheitis: DiseaseCard = {
  id: "bovine-infectious-rhinotracheitis",

  title: "Bovine Infectious Rhinotracheitis",

  description:
    "A highly contagious viral disease of cattle caused by Bovine herpesvirus-1 (BoHV-1), primarily affecting the respiratory tract, eyes, and reproductive system.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "IBR",
    "Bovine Herpesvirus-1 Infection",
    "BoHV-1 Infection",
    "Red Nose Disease",
  ],

  overview:
    "Infectious rhinotracheitis is caused by Bovine herpesvirus type 1 (BoHV-1), an alphaherpesvirus capable of establishing lifelong latent infection. The virus spreads through respiratory secretions, ocular discharge, semen, and direct contact. Clinical manifestations include respiratory disease, conjunctivitis, infectious pustular vulvovaginitis, balanoposthitis, abortion, infertility, and occasionally encephalitis. Stress may reactivate latent infection, resulting in viral shedding.",

  clinicalProblems: [

    "Acute respiratory infection",
    "Fever",
    "Rhinitis",
    "Tracheitis",
    "Conjunctivitis",
    "Nasal discharge",
    "Reduced milk production",
    "Abortion",
    "Infertility",
    "Latent viral infection"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess vaccination status, recent animal introductions, transport stress, breeding history, abortion events, and herd outbreaks."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate fever, nasal discharge, conjunctivitis, respiratory distress, genital lesions, and abortion history."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect nasal, ocular, genital swabs, blood, or fetal tissues for laboratory confirmation."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection using PCR, virus isolation, fluorescent antibody testing, or serology."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Institute isolation, supportive care, vaccination, and strict biosecurity measures."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Typical respiratory and ocular lesions strongly support IBR."
    },

    {
      id: "pcr",
      name: "PCR",
      priority: "Essential",
      reason:
        "Highly sensitive detection of BoHV-1 infection."
    },

    {
      id: "virus-isolation",
      name: "Virus Isolation",
      priority: "Recommended",
      reason:
        "Confirms active viral infection."
    },

    {
      id: "serology",
      name: "Serology",
      priority: "Recommended",
      reason:
        "Useful for herd surveillance and exposure assessment."
    }

  ],

  drugCategories: [

    {
      category: "NSAIDs",
      indication: "Fever and inflammation",
      reason:
        "Improves comfort and reduces pyrexia."
    },

    {
      category: "Antimicrobial Therapy",
      indication: "Secondary bacterial pneumonia",
      reason:
        "Treats bacterial complications."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration",
      reason:
        "Maintains hydration and electrolyte balance."
    },

    {
      category: "Supportive Therapy",
      indication: "General supportive care",
      reason:
        "No specific antiviral therapy is routinely available."
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

    "Isolate affected animals.",
    "Reduce stress and overcrowding.",
    "Provide adequate hydration and nutrition.",
    "Treat secondary bacterial infections.",
    "Implement strict biosecurity.",
    "Vaccinate susceptible animals according to herd protocols."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Recent transport stress", weight: 70 },

      { finding: "Introduction of new cattle", weight: 75 },

      { finding: "Recent herd outbreak", weight: 85 },

      { finding: "History of abortion", weight: 65 },

      { finding: "Unvaccinated herd", weight: 70 }

    ],

    clinicalSigns: [

      { finding: "High fever", weight: 80 },

      { finding: "Hyperemic nasal mucosa", weight: 95 },

      { finding: "Serous to mucopurulent nasal discharge", weight: 90 },

      { finding: "Conjunctivitis", weight: 85 },

      { finding: "Cough", weight: 80 },

      { finding: "Dyspnea", weight: 75 },

      { finding: "Reduced milk production", weight: 60 },

      { finding: "Abortion", weight: 75 }

    ],

    biochemistry: [

      { finding: "Non-specific inflammatory changes", weight: 20 },

      { finding: "Leukocytosis with secondary bacterial infection", weight: 40 }

    ],

    imaging: [

      { finding: "Bronchopneumonia", weight: 65 }

    ],

    supports: [

      { finding: "Positive PCR for BoHV-1", weight: 100 },

      { finding: "Positive virus isolation", weight: 100 },

      { finding: "Typical respiratory outbreak", weight: 90 },

      { finding: "Characteristic nasal lesions", weight: 90 }

    ],

    against: [

      { finding: "Negative PCR", weight: -90 },

      { finding: "Alternative respiratory disease confirmed", weight: -80 },

      { finding: "No compatible respiratory signs", weight: -50 }

    ],

  },
    monitoring: [

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Monitors fever and response to treatment."
    },

    {
      id: "respiratory",
      parameter: "Respiratory signs",
      frequency: "Daily",
      reason:
        "Evaluates severity of respiratory disease and recovery."
    },

    {
      id: "nasal-discharge",
      parameter: "Nasal and ocular discharge",
      frequency: "Daily",
      reason:
        "Assesses progression of upper respiratory inflammation."
    },

    {
      id: "feed-intake",
      parameter: "Feed and water intake",
      frequency: "Daily",
      reason:
        "Monitors appetite and hydration."
    },

    {
      id: "milk-production",
      parameter: "Milk production",
      frequency: "Daily",
      reason:
        "Evaluates production losses in lactating cattle."
    },

    {
      id: "abortion",
      parameter: "Pregnant animals",
      frequency: "Daily during outbreak",
      reason:
        "Detects abortion or reproductive complications."
    }

  ],

  precautions: [

    {
      id: "latency",
      title: "Lifelong Latent Infection",
      description:
        "Recovered cattle may remain lifelong carriers with periodic viral reactivation during stress."
    },

    {
      id: "biosecurity",
      title: "Strict Biosecurity",
      description:
        "Rapid isolation of affected animals and movement control are essential to reduce transmission."
    },

    {
      id: "vaccination",
      title: "Vaccination",
      description:
        "Routine vaccination significantly reduces clinical disease and viral shedding in endemic regions."
    }

  ],

  prognosis:
    "Most uncomplicated cases recover within one to two weeks with supportive care. Prognosis is generally good in adult cattle but may become guarded when severe pneumonia, reproductive losses, or secondary bacterial infections occur. Herd-level economic losses can be substantial due to decreased productivity and abortion.",

  strengtheningEvidence: [

    "Positive PCR for BoHV-1",

    "Hyperemic nasal mucosa",

    "Characteristic respiratory outbreak",

    "Positive virus isolation"

  ],

  weakeningEvidence: [

    "Negative PCR",

    "Alternative respiratory diagnosis confirmed",

    "Absence of compatible clinical signs"

  ],

  classicFindings: [

    "High fever",

    "Red nose",

    "Serous to mucopurulent nasal discharge",

    "Conjunctivitis",

    "Cough"

  ],

  ruleOutFindings: [

    "Bovine Respiratory Syncytial Virus",

    "Parainfluenza-3",

    "Bovine Viral Diarrhea",

    "Mannheimia haemolytica Pneumonia",

    "Pasteurellosis",

    "Mycoplasma bovis Infection"

  ],

};