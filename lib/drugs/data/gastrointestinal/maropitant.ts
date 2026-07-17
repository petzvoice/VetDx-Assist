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

const maropitant: Drug = {
  id: "maropitant",

  genericName: "Maropitant Citrate",

  brandNames: [
    "Cerenia",
    "Prevomax",
    "Maropitant Tablets",
    "Maropitant Injection",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "maropitant",
    "maropitant citrate",
    "cerenia",
    "prevomax",
    "nk1 antagonist",
    "neurokinin receptor antagonist",
    "antiemetic",
    "vomiting",
    "motion sickness",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Gastrointestinal",

    drugClass: "Antiemetic",

    pharmacologicClass:
      "Neurokinin (NK1) Receptor Antagonist",

    commonRoutes: [
      Route.SC,
      Route.PO,
    ],

    availableRoutes: [
      Route.SC,
      Route.PO,
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
      id: "tab-16",

      dosageForm: DosageForm.TABLET,

      strength: "16 mg",

      concentration: {
        value: 16,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tab-24",

      dosageForm: DosageForm.TABLET,

      strength: "24 mg",

      concentration: {
        value: 24,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tab-60",

      dosageForm: DosageForm.TABLET,

      strength: "60 mg",

      concentration: {
        value: 60,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tab-160",

      dosageForm: DosageForm.TABLET,

      strength: "160 mg",

      concentration: {
        value: 160,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "inj-10mgml",

      dosageForm: DosageForm.INJECTABLE_SOLUTION,

      strength: "10 mg/mL",

      concentration: {
        value: 10,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.SC,
      ],

      notes:
        "Available in 20 mL and 50 mL vials.",
    },
  ],

  doseReferences: [
    {
      species: Species.DOG,

      indication:
        "Treatment of acute vomiting",

      route: Route.SC,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 1,
        maximum: 1,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 24 hours for up to 5 consecutive days",

      notes:
        "If a longer duration of therapy is needed, a 48-hour washout period is recommended due to accumulation of the drug.",

      evidence:
        "Jordan",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },
  ],
    clinical: {
    mechanismOfAction:
      "Maropitant is a neurokinin-1 (NK1) receptor antagonist that acts in the central nervous system by inhibiting Substance P, the key neurotransmitter involved in vomiting. Maropitant suppresses both peripheral and centrally mediated emesis.",

    spectrum:
      "Antiemetic activity.",

    indications: [
      "Treatment of acute vomiting",
      "Prevention of acute vomiting",
      "Prevention of vomiting due to motion sickness",
    ],

    commonUses: [
      "Treatment of acute vomiting",
      "Prevention of acute vomiting",
      "Prevention of vomiting associated with motion sickness",
    ],

    clinicalDecisionNotes: [
      "Veterinary-approved antiemetic for use in dogs 16 weeks of age and older.",
      "Also used extra-label in cats.",
      "Acts at the emetic center and is effective for emesis mediated via either peripheral or central mechanisms.",
      "Subcutaneous injection is approved for the prevention and treatment of acute vomiting.",
      "Oral tablets are approved for the prevention of acute vomiting and the prevention of vomiting due to motion sickness.",
      "Different oral dosages are used for each indication.",
      "The oral dose is higher than the subcutaneous dose because of decreased oral bioavailability.",
      "This drug reference is intended for educational and clinical support and does not replace professional veterinary judgment.",
    ],

    clinicalPearls: [
      "Blocks neurokinin-1 (NK1) receptors.",
      "Inhibits Substance P, the key neurotransmitter involved in vomiting.",
      "Suppresses both centrally and peripherally mediated emesis.",
    ],
  },

  reproduction: {
    pregnancy: {
      recommendation:
        ReproductionRecommendation.BENEFIT_RISK,

      notes: [
        "The safe use of maropitant has not been evaluated in pregnant bitches.",
        "Use only following a benefit/risk assessment by the veterinarian.",
      ],
    },

    lactation: {
      recommendation:
        ReproductionRecommendation.BENEFIT_RISK,

      notes: [
        "The safe use of maropitant has not been evaluated in lactating bitches.",
        "Use only following a benefit/risk assessment by the veterinarian.",
      ],
    },

    breeding: {
      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "The safe use of maropitant has not been evaluated in dogs used for breeding.",
      ],
    },
  },

  overdose: {
    signs: [],

    management: [
      "Dogs tolerated doses up to 3 times the recommended oral dose of 8 mg/kg administered for 3 times longer than the proposed maximum duration of treatment.",
    ],
  },

  safety: {
    contraindications: [],

    precautions: [
      "Use with caution in dogs with hepatic dysfunction.",
      "Use with caution with other highly protein-bound medications.",
    ],

    adverseEffects: [
      "Pre-travel vomiting.",
      "Hypersalivation.",
      "Swelling at the injection site.",
      "Pain at the injection site.",
      "Diarrhea.",
      "Anorexia.",
    ],

    drugInteractions: [],

    monitoring: [
      "Monitor for gastrointestinal adverse effects.",
      "Monitor the injection site following subcutaneous administration.",
    ],

        storage: [
      "Store the injectable solution at controlled room temperature 20–25°C (68–77°F).",
      "Temperature excursions between 15–30°C (59–86°F) are permitted.",
      "The injectable solution contains a preservative and is intended for multi-dose use.",
      "Use the vial within 28 days of the first vial puncture in accordance with FDA requirements.",
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
      "maropitant",
      "maropitant citrate",
      "cerenia",
      "prevomax",
      "nk1 receptor antagonist",
      "neurokinin receptor antagonist",
      "antiemetic",
      "vomiting",
      "motion sickness",
      "dog",
      "cat",
      "gastrointestinal",
    ],
  },

};

export default [maropitant];