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

const ondansetron: Drug = {
  id: "ondansetron",

  genericName: "Ondansetron Hydrochloride",

  brandNames: [
    "Zofran",
    "Emeset",
    "Ondem",
    "Ondansetron Injection IP",
    "Ondansetron Tablets",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "ondansetron",
    "ondansetron hydrochloride",
    "zofran",
    "emeset",
    "ondem",
    "5-ht3 antagonist",
    "antiemetic",
    "vomiting",
    "nausea",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Gastrointestinal",

    drugClass: "5-HT3 Receptor Antagonist",

    pharmacologicClass:
      "5-HT3 (Serotonin Type 3) Receptor Antagonist",

    commonRoutes: [
      Route.PO,
      Route.IV,
    ],

    availableRoutes: [
      Route.PO,
      Route.IV,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
  ],

  formulations: [
    {
      id: "tab-4",

      dosageForm: DosageForm.TABLET,

      strength: "4 mg",

      concentration: {
        value: 4,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tab-8",

      dosageForm: DosageForm.TABLET,

      strength: "8 mg",

      concentration: {
        value: 8,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-0-8",

      dosageForm: DosageForm.ORAL_SOLUTION,

      strength: "4 mg/5 mL (0.8 mg/mL)",

      concentration: {
        value: 0.8,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "inj-2mgml",

      dosageForm: DosageForm.INJECTABLE_SOLUTION,

      strength: "2 mg/mL",

      concentration: {
        value: 2,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
      ],

      notes:
        "Available in 2 mL and 4 mL ampoules/vials.",
    },
  ],

  doseReferences: [
    {
      species: Species.DOG,

      indication:
        "Antiemetic",

      route: Route.IV,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.1,
        maximum: 0.2,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 6–12 hours",

      evidence:
        "Otto 2005",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication:
        "Antiemetic",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.1,
        maximum: 1,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 12–24 hours",

      evidence:
        "Otto 2005",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication:
        "Intractable vomiting",

      route: Route.IV,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.1,
        maximum: 0.15,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 6–12 hours as needed",

      notes:
        "Administer as a slow IV push.",

      evidence:
        "Scherk 2003c",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },
  ],
    clinical: {
    mechanismOfAction:
      "Ondansetron is a 5-HT3 (serotonin type 3) receptor antagonist. 5-HT3 receptors are found peripherally on vagal nerve terminals and centrally in the chemoreceptor trigger zone (CTZ). It is not clear if ondansetron's effects are mediated centrally, peripherally, or both.",

    spectrum:
      "Antiemetic activity.",

    indications: [
      "Severe vomiting",
      "Intractable vomiting",
    ],

    commonUses: [
      "Antiemetic",
    ],

    clinicalDecisionNotes: [
      "Ondansetron is a 5-HT3 receptor antagonist for severe vomiting.",
      "Appears to be well tolerated in dogs.",
      "Generic dosage forms are available.",
      "This drug reference is intended for educational and clinical support and does not replace professional veterinary judgment.",
    ],

    clinicalPearls: [
      "5-HT3 receptors are located on vagal nerve terminals and in the chemoreceptor trigger zone (CTZ).",
      "The antiemetic effect may be mediated centrally, peripherally, or both.",
    ],
  },

  reproduction: {
    pregnancy: {
      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "Safety in pregnancy has not been clearly established.",
        "High-dose studies in rodents did not demonstrate overt fetal toxicity or teratogenicity.",
      ],
    },

    lactation: {
      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Ondansetron is excreted in the maternal milk of rats.",
        "Exercise caution when 5-HT3 antagonists are administered to nursing patients.",
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
      "Constipation",
      "Extrapyramidal clinical signs",
      "Arrhythmias",
      "Hypotension",
    ],

     management: [
      "Treat supportively.",
    ],
  },

  safety: {
    contraindications: [
      "Hypersensitivity to ondansetron or other 5-HT3 receptor antagonists.",
    ],

    precautions: [
      "Ondansetron may mask ileus or gastric distention.",
      "It should not be used in place of nasogastric suction.",
      "Use with caution in patients with hepatic dysfunction as the half-life may be prolonged.",
      "Use with caution in herding breeds (e.g., Collies, Shelties, Australian Shepherds) that may have a nonfunctional P-glycoprotein.",
    ],

    adverseEffects: [
      "Constipation",
      "Extrapyramidal clinical signs",
      "Arrhythmias",
      "Hypotension",
    ],

    drugInteractions: [],

    monitoring: [
      "Monitor clinical response.",
      "Monitor for adverse effects.",
    ],

    storage: [
      "Store oral products in tight, light-resistant containers between 2–30°C unless otherwise labeled.",
      "Store the injection between 2–30°C and protect from light.",
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
      "ondansetron",
      "ondansetron hydrochloride",
      "zofran",
      "emeset",
      "ondem",
      "5-ht3 receptor antagonist",
      "antiemetic",
      "vomiting",
      "nausea",
      "dog",
      "cat",
      "gastrointestinal",
    ],
  },

};

export default [ondansetron];