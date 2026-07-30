import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineLeadPoisoning: DiseaseCard = {
  id: "bovine-lead-poisoning",

  title: "Bovine Lead Poisoning",

  description:
    "A toxic condition in cattle caused by ingestion of lead-containing materials, resulting in gastrointestinal disturbances, neurological signs, blindness, convulsions, and death.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Lead Toxicity",
    "Lead Intoxication",
    "Plumbism",
  ],

  overview:
    "Lead poisoning occurs when cattle ingest lead-containing materials such as batteries, paint, contaminated soil, or industrial waste. Lead is absorbed and distributed throughout the body, affecting the nervous system, gastrointestinal tract, kidneys, and blood-forming tissues. Young animals are particularly susceptible.",

  clinicalProblems: [

    "Neurological dysfunction",
    "Blindness",
    "Digestive disturbances",
    "Anemia",
    "Kidney damage",
    "Sudden death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "Exposure History",
      description:
        "Identify possible access to batteries, paints, industrial waste, contaminated areas, or lead-containing materials."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Assess neurological status, gastrointestinal signs, and general condition."
    },

    {
      id: "laboratory-confirmation",
      step: 3,
      title: "Laboratory Diagnosis",
      description:
        "Measure lead concentration in blood or tissues."
    },

    {
      id: "management",
      step: 4,
      title: "Toxicity Management",
      description:
        "Remove exposure source and provide supportive and chelation therapy."

    }

  ],

  diagnostics: [

    {
      id: "blood-lead",
      name: "Blood Lead Level",
      priority: "Essential",
      reason:
        "Confirms lead exposure."
    },

    {
      id: "feed-soil-testing",
      name: "Feed and Environmental Testing",
      priority: "Recommended",
      reason:
        "Identifies contamination source."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "May detect anemia and blood changes."

    }

  ],

  drugCategories: [

    {
      category: "Chelation Therapy",
      indication: "Lead removal",
      reason:
        "Binds lead and promotes elimination."
    },

    {
      category: "Supportive Therapy",
      indication: "Neurological and systemic support",
      reason:
        "Maintains animal stability."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "calcium-edta",
      priority: "First Line",
      category: "Chelation"
    },

    {
      drugId: "dimercaprol",
      priority: "Alternative",
      category: "Chelation"
    }

  ],

  stabilization: [

    "Remove access to lead source.",
    "Provide supportive care.",
    "Administer appropriate chelation therapy.",
    "Monitor neurological signs.",
    "Prevent exposure of other animals."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Access to batteries or lead materials",
        weight: 100
      },

      {
        finding: "Contaminated environment",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Blindness",
        weight: 90
      },

      {
        finding: "Muscle tremors",
        weight: 85
      },

      {
        finding: "Convulsions",
        weight: 90
      },

      {
        finding: "Abdominal pain or diarrhea",
        weight: 70
      },

      {
        finding: "Sudden death",
        weight: 80
      }

    ],

    biochemistry: [

      {
        finding: "Elevated blood lead concentration",
        weight: 100
      },

      {
        finding: "Anemia",
        weight: 60
      }

    ],

    imaging: [

      {
        finding: "Radiopaque foreign material in digestive tract",
        weight: 60
      }

    ],

    supports: [

      {
        finding: "Confirmed lead exposure",
        weight: 100
      },

      {
        finding: "Positive blood lead test",
        weight: 100
      }

    ],

    against: [

      {
        finding: "No possible lead exposure",
        weight: -70
      },

      {
        finding: "Alternative neurological disease confirmed",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "neurological-status",
      parameter: "Neurological signs",
      frequency: "Daily during acute cases",
      reason:
        "Monitors recovery or progression of nervous system effects."
    },

    {
      id: "blood-lead",
      parameter: "Blood lead concentration",
      frequency: "During and after treatment",
      reason:
        "Evaluates lead elimination and treatment response."
    },

    {
      id: "appetite",
      parameter: "Feed intake and digestive function",
      frequency: "Daily",
      reason:
        "Assesses gastrointestinal recovery."
    },

    {
      id: "blood-profile",
      parameter: "Complete blood count changes",
      frequency: "When clinically indicated",
      reason:
        "Monitors anemia and hematological effects."
    },

    {
      id: "environment",
      parameter: "Environmental lead contamination",
      frequency: "After diagnosis",
      reason:
        "Prevents repeated exposure."

    }

  ],

  precautions: [

    {
      id: "environment-control",
      title: "Environmental Control",
      description:
        "Remove batteries, paint residues, industrial waste, and other lead sources from animal areas."
    },

    {
      id: "feed-safety",
      title: "Feed Safety Management",
      description:
        "Prevent contamination of feed and water sources with lead-containing materials."
    },

    {
      id: "pasture-management",
      title: "Pasture Monitoring",
      description:
        "Avoid grazing animals in contaminated areas."
    },

    {
      id: "waste-disposal",
      title: "Safe Waste Disposal",
      description:
        "Dispose of lead-containing materials away from livestock access."

    }

  ],

  prognosis:
    "Prognosis depends on dose of lead exposure and severity of neurological damage. Early removal of exposure and treatment may result in recovery, while severe cases can be fatal.",

  strengtheningEvidence: [

    "Known lead exposure",

    "Neurological signs",

    "Elevated blood lead concentration",

    "Radiopaque lead-containing material"

  ],

  weakeningEvidence: [

    "No lead exposure history",

    "Normal blood lead levels",

    "Alternative neurological disease identified"

  ],

  classicFindings: [

    "Blindness",

    "Depression",

    "Muscle tremors",

    "Convulsions",

    "Digestive disturbances"

  ],

  ruleOutFindings: [

    "Urea toxicity",

    "Nitrate poisoning",

    "Hypomagnesemia",

    "Rabies",

    "Listeriosis",

    "Cerebrocortical necrosis"

  ],

};