import {
  ConcentrationUnit,
  DosageForm,
  DoseBasis,
  DoseUnit,
  Drug,
  DrugStatus,
  ReproductionRecommendation,
  Route,
  Species,
} from "../../types";

const metoclopramide: Drug = {
  id: "metoclopramide",

  genericName: "Metoclopramide Hydrochloride",

  brandNames: [
    "Reglan",
    "Maxolon",
    "Perinorm",
    "Metoclopramide Injection IP",
    "Metoclopramide Tablets",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "metoclopramide",
    "metoclopramide hydrochloride",
    "reglan",
    "maxolon",
    "perinorm",
    "gi prokinetic",
    "prokinetic",
    "antiemetic",
    "vomiting",
    "nausea",
    "reflux esophagitis",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Gastrointestinal",

    drugClass: "GI Prokinetic Agent",

    pharmacologicClass:
      "Dopamine (D₂) Receptor Antagonist",

    commonRoutes: [
      Route.PO,
      Route.SC,
      Route.IM,
    ],

    availableRoutes: [
      Route.PO,
      Route.SC,
      Route.IM,
      Route.IV,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.HORSE,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
  ],

  formulations: [
    {
      id: "tab-5",

      dosageForm: DosageForm.TABLET,

      strength: "5 mg",

      concentration: {
        value: 5,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tab-10",

      dosageForm: DosageForm.TABLET,

      strength: "10 mg",

      concentration: {
        value: 10,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "inj-5mgml",

      dosageForm: DosageForm.INJECTABLE_SOLUTION,

      strength: "5 mg/mL",

      concentration: {
        value: 5,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
        Route.SC,
      ],

      notes:
        "Available in 2 mL and 10 mL ampoules/vials.",
    },

    {
      id: "oral-1mgml",

      dosageForm: DosageForm.ORAL_SOLUTION,

      strength: "1 mg/mL (5 mg/5 mL)",

      concentration: {
        value: 1,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },
  ],

  doseReferences: [
    {
      species: Species.DOG,

      indication:
        "Antiemetic",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.1,
        maximum: 0.4,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 6 hours",

      evidence:
        "Washabau and Elie 1995",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication:
        "Antiemetic",

      route: Route.SC,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.1,
        maximum: 0.4,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 6 hours",

      evidence:
        "Washabau and Elie 1995",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication:
        "Antiemetic",

      route: Route.IM,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.1,
        maximum: 0.4,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 6 hours",

      evidence:
        "Washabau and Elie 1995",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication:
        "Antiemetic",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.2,
        maximum: 0.4,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "3–4 times daily",

      evidence:
        "Trepanier 1999",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication:
        "Antiemetic",

      route: Route.SC,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.2,
        maximum: 0.4,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "3–4 times daily",

      evidence:
        "Trepanier 1999",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.HORSE,

      indication:
        "Reflux esophagitis",

      route: Route.SC,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.02,
        maximum: 0.1,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 4–12 hours",

      notes:
        "Horses may be prone to the extrapyramidal neurologic side effects of metoclopramide.",

      evidence:
        "Jones and Blikslager 2004",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },
  ],
    clinical: {
    mechanismOfAction:
      "Metoclopramide works as both an anti-nausea drug and a gastrointestinal prokinetic. It blocks dopamine (D₂) receptors centrally and peripherally, stimulates serotonin (5-HT₄) receptors, and sensitizes muscarinic receptors in the gastrointestinal tract. Centrally, it blocks D₂ and 5-HT₃ receptors in the chemoreceptor trigger zone (CTZ) of the medulla oblongata to inhibit nausea and vomiting. Peripherally, dopamine D₂ receptor blockade allows acetylcholine-mediated gastrointestinal smooth muscle activity. Stimulation of 5-HT₄ receptors further enhances acetylcholine release, increasing lower esophageal sphincter tone, gastric contractions, gastric emptying, and intestinal transit while relaxing the pyloric sphincter.",

    spectrum:
      "Gastrointestinal prokinetic and antiemetic activity.",

    indications: [
      "Antiemetic",
      "Gastrointestinal hypomotility",
      "Reflux esophagitis",
    ],

    commonUses: [
      "Treatment of nausea and vomiting",
      "Enhancement of upper gastrointestinal motility",
      "Management of reflux esophagitis",
    ],

    clinicalDecisionNotes: [
      "More potent as an antiemetic than as a prokinetic agent.",
      "Contraindicated in patients with gastrointestinal hemorrhage, obstruction, or perforation.",
      "Relatively contraindicated in patients with seizure disorders.",
      "In patients with pheochromocytoma, metoclopramide may induce a hypertensive crisis.",
      "This drug reference is intended for educational and clinical support and does not replace professional veterinary judgment.",
    ],

    clinicalPearls: [
      "Stimulates upper gastrointestinal motility and has antiemetic properties.",
      "Increases lower esophageal sphincter tone.",
      "Accelerates gastric emptying and intestinal transit.",
      "Relaxes the pyloric sphincter.",
      "More effective as an antiemetic than as a prokinetic agent.",
    ],
  },

  reproduction: {
    pregnancy: {
      recommendation:
        ReproductionRecommendation.SAFE,

      notes: [
        "Papich (1989): Class B (Safe for use if used cautiously).",
      ],
    },

    lactation: {
      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "Safety during lactation has not been established.",
      ],
    },

    breeding: {
      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "Safety in breeding animals has not been established.",
      ],
    },
  },

  overdose: {
    signs: [
      "Changes in mentation",
      "Behavioral changes",
      "Motor restlessness",
      "Hyperactivity",
      "Drowsiness",
      "Depression",
      "Constipation",
      "Frenzied behavior",
      "Disorientation",
      "Severe central nervous system effects",
      "Abdominal pain",
    ],

    management: [
      "Discontinue the drug.",
      "Provide symptomatic and supportive care.",
    ],
  },

  safety: {
    contraindications: [
      "Gastrointestinal hemorrhage.",
      "Gastrointestinal obstruction.",
      "Gastrointestinal perforation.",
      "Hypersensitivity to metoclopramide.",
    ],

    precautions: [
      "Use cautiously in patients with seizure disorders.",
      "Use cautiously in patients with pheochromocytoma due to the risk of hypertensive crisis.",
      "Horses may be prone to extrapyramidal neurologic adverse effects.",
    ],

    adverseEffects: [
      "Dogs: Changes in mentation and behavior.",
      "Dogs: Motor restlessness.",
      "Dogs: Hyperactivity.",
      "Dogs: Drowsiness.",
      "Dogs: Depression.",
      "Dogs and cats: Constipation.",
      "Cats: Frenzied behavior.",
      "Cats: Disorientation.",
      "Horses: Severe central nervous system effects.",
      "Horses: Behavioral changes.",
      "Horses: Abdominal pain.",
      "Foals: Adverse effects less common.",
    ],

    drugInteractions: [],

    monitoring: [
      "Monitor for behavioral and neurologic adverse effects.",
      "Monitor gastrointestinal motility and clinical response.",
    ],

    storage: [
      "Store in light-resistant containers.",
      "Store at room temperature.",
      "Keep tablets in tightly closed containers.",
    ],
  },
    references: [
    {
      title: "Plumb's Veterinary Drug Handbook",
    },

  ],

  metadata: {
    version: "1.0.0",

    lastReviewed: "2026-07-17",

    tags: [
      "metoclopramide",
      "metoclopramide hydrochloride",
      "reglan",
      "maxolon",
      "perinorm",
      "antiemetic",
      "prokinetic",
      "gastrointestinal",
      "dog",
      "cat",
      "horse",
      "reflux esophagitis",
      "vomiting",
      "nausea",
    ],
  },

};

export default [metoclopramide];