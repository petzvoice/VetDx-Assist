import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineAnthrax: DiseaseCard = {
  id: "bovine-anthrax",

  title: "Bovine Anthrax",

  description:
    "A highly fatal bacterial disease of cattle caused by Bacillus anthracis, characterized by sudden death, septicemia, bleeding from natural openings, and serious zoonotic risk.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Anthrax",
    "Splenic Fever",
    "Bacillus anthracis Infection",
  ],

  overview:
    "Bovine anthrax is caused by Bacillus anthracis, a spore-forming zoonotic bacterium that persists in soil for many years. Cattle become infected mainly by ingestion of spores from contaminated pastures or feed. The disease commonly causes peracute septicemia with sudden death. Handling infected carcasses can expose humans and other animals, making rapid recognition and proper carcass management essential.",

  clinicalProblems: [

    "Acute septicemia",
    "Sudden death",
    "High fever",
    "Bleeding from body openings",
    "Edema",
    "Respiratory distress",
    "Zoonotic infection risk"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess sudden unexplained deaths, endemic areas, previous anthrax outbreaks, vaccination status, and pasture exposure."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate fever, depression, bleeding from natural openings, swelling, and rapid deterioration while avoiding unnecessary handling."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect peripheral blood or approved diagnostic samples using strict biosafety precautions. Avoid opening carcasses suspected of anthrax."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection through microscopy, PCR, culture, or antigen detection."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Implement isolation, reporting, carcass disposal, vaccination, and public health precautions."
    }

  ],

  diagnostics: [

    {
      id: "blood-smear",
      name: "Blood Smear Examination",
      priority: "Essential",
      reason:
        "May demonstrate characteristic Bacillus anthracis organisms."
    },

    {
      id: "pcr",
      name: "PCR Testing",
      priority: "Essential",
      reason:
        "Confirms presence of Bacillus anthracis DNA."
    },

    {
      id: "culture",
      name: "Bacterial Culture",
      priority: "Recommended",
      reason:
        "Identifies the causative organism under controlled laboratory conditions."
    },

    {
      id: "antigen-test",
      name: "Antigen Detection",
      priority: "Recommended",
      reason:
        "Supports rapid confirmation."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Confirmed or suspected anthrax",
      reason:
        "Early antimicrobial therapy may be beneficial before advanced septicemia."
    },

    {
      category: "Vaccines",
      indication: "Prevention",
      reason:
        "Vaccination is the primary preventive measure in endemic areas."
    },

    {
      category: "Supportive Therapy",
      indication: "Clinical support",
      reason:
        "Supports affected animals when appropriate."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "penicillin-g",
      priority: "First Line",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Avoid opening suspected anthrax carcasses.",
    "Isolate affected animals.",
    "Use protective equipment.",
    "Notify veterinary authorities.",
    "Vaccinate at-risk animals.",
    "Dispose carcasses safely according to regulations."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Sudden unexplained deaths", weight: 95 },

      { finding: "Endemic area exposure", weight: 90 },

      { finding: "Unvaccinated herd", weight: 85 },

      { finding: "Pasture contamination risk", weight: 80 }

    ],

    clinicalSigns: [

      { finding: "Sudden death", weight: 100 },

      { finding: "Bleeding from natural openings", weight: 95 },

      { finding: "High fever", weight: 80 },

      { finding: "Depression", weight: 75 },

      { finding: "Subcutaneous edema", weight: 70 }

    ],

    biochemistry: [

      { finding: "Septicemia changes", weight: 70 }

    ],

    imaging: [

      { finding: "No routine diagnostic imaging findings", weight: 5 }

    ],

    supports: [

      { finding: "Positive PCR for Bacillus anthracis", weight: 100 },

      { finding: "Characteristic blood findings", weight: 90 },

      { finding: "Compatible sudden death outbreak", weight: 90 }

    ],

    against: [

      { finding: "Negative anthrax testing", weight: -80 },

      { finding: "Alternative cause of sudden death confirmed", weight: -85 }

    ],

  },
    monitoring: [

    {
      id: "mortality",
      parameter: "Sudden deaths in herd",
      frequency: "Daily during suspected outbreak",
      reason:
        "Monitors disease spread and outbreak severity."
    },

    {
      id: "clinical-signs",
      parameter: "Fever, depression, edema, and bleeding signs",
      frequency: "Daily",
      reason:
        "Detects new clinical cases while maintaining safety precautions."
    },

    {
      id: "vaccination-status",
      parameter: "Anthrax vaccination coverage",
      frequency: "Scheduled review",
      reason:
        "Evaluates herd protection and prevention effectiveness."
    },

    {
      id: "environment",
      parameter: "Pasture and environmental risk factors",
      frequency: "During outbreak investigation",
      reason:
        "Identifies possible sources of spore exposure."
    }

  ],

  precautions: [

    {
      id: "zoonotic-protection",
      title: "Zoonotic Safety",
      description:
        "Avoid direct contact with suspected carcasses because Bacillus anthracis can infect humans."
    },

    {
      id: "carcass-disposal",
      title: "Safe Carcass Disposal",
      description:
        "Do not open suspected anthrax carcasses. Follow approved disposal methods to prevent environmental contamination."
    },

    {
      id: "vaccination",
      title: "Preventive Vaccination",
      description:
        "Vaccinate cattle in endemic areas to reduce risk of future outbreaks."
    }

  ],

  prognosis:
    "Prognosis is poor once clinical signs appear because anthrax progresses rapidly. Early recognition, prevention, and herd vaccination are critical for control.",

  strengtheningEvidence: [

    "Sudden death without previous illness",

    "Bleeding from natural openings",

    "Positive Bacillus anthracis PCR",

    "History of anthrax in area"

  ],

  weakeningEvidence: [

    "Negative diagnostic testing",

    "Carcass findings inconsistent with anthrax",

    "Alternative septicemic disease confirmed"

  ],

  classicFindings: [

    "Sudden death",

    "Dark unclotted blood from openings",

    "Rapid decomposition",

    "High fever",

    "Septicemia"

  ],

  ruleOutFindings: [

    "Clostridial diseases",

    "Hemorrhagic septicemia",

    "Plant poisoning",

    "Acute chemical poisoning",

    "Lightning strike",

    "Severe trauma"

  ],

};