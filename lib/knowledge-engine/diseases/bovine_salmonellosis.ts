import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineSalmonellosis: DiseaseCard = {
  id: "bovine-salmonellosis",

  title: "Bovine Salmonellosis",

  description:
    "A bacterial enteric disease of cattle caused by Salmonella species, characterized by diarrhea, fever, dehydration, septicemia, abortion, and production losses.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Salmonella Infection",
    "Salmonellosis",
    "Bovine Enteric Salmonellosis",
  ],

  overview:
    "Bovine salmonellosis is caused by Salmonella species, especially Salmonella Dublin and Salmonella Typhimurium. Infection occurs through ingestion of contaminated feed, water, feces, or environmental sources. Disease severity varies from mild diarrhea to severe enterocolitis, septicemia, abortion, and death. Young calves and stressed animals are at higher risk.",

  clinicalProblems: [

    "Bacterial enteritis",
    "Diarrhea",
    "Fever",
    "Dehydration",
    "Septicemia",
    "Abortion",
    "Reduced growth",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess age of affected animals, recent introduction, hygiene conditions, contaminated feed or water exposure, and herd outbreak pattern."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate diarrhea, fever, dehydration, depression, abdominal discomfort, and systemic illness."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect fecal samples, blood samples in septicemic cases, and tissue samples from deceased animals."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection through bacterial culture, PCR, and antimicrobial susceptibility testing."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Management",
      description:
        "Provide fluid therapy, appropriate antimicrobial therapy in indicated cases, isolation, and hygiene management."
    }

  ],

  diagnostics: [

    {
      id: "fecal-culture",
      name: "Fecal Culture",
      priority: "Essential",
      reason:
        "Identifies Salmonella species from fecal samples."
    },

    {
      id: "pcr",
      name: "PCR Testing",
      priority: "Recommended",
      reason:
        "Provides rapid detection of Salmonella DNA."
    },

    {
      id: "sensitivity",
      name: "Antimicrobial Sensitivity Testing",
      priority: "Recommended",
      reason:
        "Guides antibiotic selection."
    },

    {
      id: "blood-culture",
      name: "Blood Culture",
      priority: "Recommended",
      reason:
        "Useful in septicemic infections."
    }

  ],

  drugCategories: [

    {
      category: "Antibiotics",
      indication: "Septicemic or severe bacterial infection",
      reason:
        "Used when systemic bacterial infection is suspected."
    },

    {
      category: "Fluid Therapy",
      indication: "Diarrhea and dehydration",
      reason:
        "Corrects fluid and electrolyte losses."
    },

    {
      category: "NSAIDs",
      indication: "Fever and inflammation",
      reason:
        "Improves comfort and reduces inflammatory response."
    },

    {
      category: "Supportive Therapy",
      indication: "Recovery support",
      reason:
        "Maintains nutrition and recovery."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "ceftiofur",
      priority: "First Line",
      category: "Antibiotic"
    },

    {
      drugId: "oxytetracycline",
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

    "Correct dehydration with fluid therapy.",
    "Isolate affected animals.",
    "Provide nutritional support.",
    "Maintain strict hygiene.",
    "Monitor for septicemia.",
    "Reduce environmental contamination."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Contaminated feed or water exposure", weight: 85 },

      { finding: "Calf or young animal affected", weight: 80 },

      { finding: "Recent outbreak in herd", weight: 85 },

      { finding: "Poor hygiene conditions", weight: 75 }

    ],

    clinicalSigns: [

      { finding: "Diarrhea", weight: 95 },

      { finding: "Fever", weight: 85 },

      { finding: "Dehydration", weight: 85 },

      { finding: "Depression", weight: 80 },

      { finding: "Abortion", weight: 70 },

      { finding: "Sudden death", weight: 75 }

    ],

    biochemistry: [

      { finding: "Dehydration changes", weight: 70 },

      { finding: "Inflammatory leukogram", weight: 60 },

      { finding: "Electrolyte imbalance", weight: 70 }

    ],

    imaging: [

      { finding: "No routine diagnostic imaging findings", weight: 5 }

    ],

    supports: [

      { finding: "Positive Salmonella culture", weight: 100 },

      { finding: "Positive PCR", weight: 100 },

      { finding: "Compatible outbreak pattern", weight: 90 }

    ],

    against: [

      { finding: "Negative Salmonella testing", weight: -80 },

      { finding: "Alternative diarrheal disease confirmed", weight: -75 }

    ],

  },
    monitoring: [

    {
      id: "hydration",
      parameter: "Hydration status and dehydration score",
      frequency: "Daily",
      reason:
        "Monitors fluid losses caused by diarrhea."
    },

    {
      id: "fecal-character",
      parameter: "Fecal consistency and frequency",
      frequency: "Daily",
      reason:
        "Evaluates improvement or progression of enteritis."
    },

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Detects persistent infection and septic complications."
    },

    {
      id: "feed-intake",
      parameter: "Feed intake and activity",
      frequency: "Daily",
      reason:
        "Assesses recovery and systemic health."
    },

    {
      id: "herd-monitoring",
      parameter: "New cases within herd",
      frequency: "Daily during outbreaks",
      reason:
        "Identifies ongoing transmission and outbreak control effectiveness."
    }

  ],

  precautions: [

    {
      id: "biosecurity",
      title: "Biosecurity Measures",
      description:
        "Maintain hygiene, isolate affected animals, and prevent fecal contamination of feed and water sources."
    },

    {
      id: "zoonotic-risk",
      title: "Zoonotic Risk",
      description:
        "Salmonella can infect humans; proper hygiene and protective measures are required during handling."
    },

    {
      id: "carrier-control",
      title: "Carrier Animals",
      description:
        "Recovered animals may shed Salmonella and contribute to herd contamination."
    }

  ],

  prognosis:
    "Prognosis depends on age, severity of dehydration, presence of septicemia, and timing of treatment. Mild enteric infections may recover, while septicemic disease has a guarded prognosis.",

  strengtheningEvidence: [

    "Positive Salmonella culture",

    "Positive PCR",

    "Fever with diarrhea",

    "Herd outbreak pattern"

  ],

  weakeningEvidence: [

    "Negative Salmonella testing",

    "Alternative cause of diarrhea identified",

    "No fever or systemic illness"

  ],

  classicFindings: [

    "Profuse diarrhea",

    "Fever",

    "Dehydration",

    "Depression",

    "Abortion in adult cattle"

  ],

  ruleOutFindings: [

    "Bovine Viral Diarrhoea",

    "Coronavirus Infection",

    "Rotavirus Infection",

    "Coccidiosis",

    "Parasitic Gastroenteritis",

    "Johne's Disease"

  ],

};