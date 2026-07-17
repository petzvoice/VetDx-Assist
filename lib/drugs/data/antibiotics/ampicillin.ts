import {
  ConcentrationUnit,
  DosageForm,
  DoseBasis,
  DoseUnit,
  Drug,
  DrugStatus,
  DrugReference,
  ReproductionRecommendation,
  Route,
  Species,
} from "../../types";

const ampicillin: Drug = {
  id: "ampicillin",

  genericName: "Ampicillin",

  brandNames: [
    "Ampicin",
    "Penbritin",
    "Polyflex",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "ampicillin",
    "penicillin",
    "beta lactam",
    "broad spectrum",
    "gram positive",
    "gram negative",
  ],

  quickFacts: {
    prescriptionRequired: true,
    controlledDrug: false,
    category: "Antibiotic",
    drugClass: "Beta-lactam Antibiotic",
    pharmacologicClass: "Aminopenicillin",
    commonRoutes: [
      Route.IV,
      Route.IM,
      Route.SC,
      Route.PO,
    ],
    availableRoutes: [
      Route.IV,
      Route.IM,
      Route.SC,
      Route.PO,
    ],
    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.CATTLE,
      Species.HORSE,
      Species.SHEEP,
      Species.GOAT,
      Species.PIG,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.CATTLE,
    Species.HORSE,
    Species.SHEEP,
    Species.GOAT,
    Species.PIG,
  ],

  formulations: [
    {
  id: "inj-500",

  dosageForm: DosageForm.POWDER_FOR_INJECTION,

  strength: "500 mg/vial",

  concentration: {
    value: 0,
    unit: ConcentrationUnit.OTHER,
  },

  vialStrengths: [500],

  routes: [
    Route.IV,
    Route.IM,
    Route.SC,
      ],
    },
  ],

  doseReferences: [
    {
      species: Species.DOG,
      indication: "Susceptible bacterial infections",
      route: Route.IV,
      basis: DoseBasis.BODY_WEIGHT,
      dose: {
        minimum: 20,
        maximum: 40,
        unit: DoseUnit.MG_PER_KG,
      },
      frequency: "Every 6–8 hours.",
      reference: "Plumb's Veterinary Drug Handbook",
    },
    {
      species: Species.CAT,
      indication: "Susceptible bacterial infections",
      route: Route.IV,
      basis: DoseBasis.BODY_WEIGHT,
      dose: {
        minimum: 20,
        maximum: 30,
        unit: DoseUnit.MG_PER_KG,
      },
      frequency: "Every 8 hours.",
      reference: "Plumb's Veterinary Drug Handbook",
    },
  ],

  clinical: {
    mechanismOfAction:
      "Inhibits bacterial cell wall synthesis by binding penicillin-binding proteins, resulting in bacterial cell lysis.",

    spectrum:
      "Broad spectrum activity against many Gram-positive organisms and selected Gram-negative bacteria.",

    indications: [
      "Respiratory infections",
      "Urinary tract infections",
      "Soft tissue infections",
      "Gastrointestinal bacterial infections",
      "Septicemia",
    ],

    commonUses: [
      "Empirical treatment of susceptible bacterial infections",
      "Hospital antimicrobial therapy",
      "Perioperative antimicrobial coverage",
    ],

    clinicalDecisionNotes: [
      "Use culture and susceptibility testing whenever possible.",
      "Adjust dosage in severe renal impairment.",
      "Not effective against beta-lactamase-producing organisms unless combined with an inhibitor.",
    ],

    clinicalPearls: [
      "Time-dependent antimicrobial.",
      "Maintain appropriate dosing intervals.",
      "Avoid unnecessary antimicrobial use.",
    ],
  },

  reproduction: {
    pregnancy: {
      recommendation: ReproductionRecommendation.BENEFIT_RISK,
      notes: [
        "Use after veterinary benefit-risk assessment.",
      ],
    },

    lactation: {
      recommendation: ReproductionRecommendation.BENEFIT_RISK,
      notes: [
        "Small quantities may be excreted in milk.",
      ],
    },

    breeding: {
      recommendation: ReproductionRecommendation.NOT_ESTABLISHED,
      notes: [
        "Specific breeding safety data are limited.",
      ],
    },
  },

  overdose: {
    signs: [
      "Vomiting",
      "Diarrhea",
      "Hypersensitivity reactions",
      "Neurological signs at very high doses",
    ],

    management: [
      "Discontinue the drug.",
      "Provide supportive care.",
      "Maintain hydration and electrolyte balance.",
      "Monitor renal function.",
      "Treat hypersensitivity reactions when indicated.",
    ],
  },

  safety: {
    contraindications: [
      "Known hypersensitivity to penicillins.",
    ],

    precautions: [
      "Use cautiously in patients with previous beta-lactam allergy.",
      "Adjust dosage in severe renal dysfunction.",
    ],

    adverseEffects: [
      "Vomiting",
      "Diarrhea",
      "Injection site pain",
      "Hypersensitivity reactions",
    ],

    drugInteractions: [
      "Bacteriostatic antimicrobials may reduce bactericidal activity.",
    ],

    monitoring: [
      "Clinical response",
      "Renal function during prolonged therapy",
    ],

    withdrawalPeriod: "Follow country-specific regulations for food-producing animals.",

    storage: [
      "Store according to manufacturer recommendations.",
      "Use reconstituted solutions within recommended time.",
    ],
  },

  references: [
    {
      title: "Plumb's Veterinary Drug Handbook",
    },
    {
      title: "Merck Veterinary Manual",
    },
    {
      title: "BSAVA Small Animal Formulary",
    },
  ],

  metadata: {
    version: "1.0.0",
    lastReviewed: "2026-07-11",
    tags: [
      "ampicillin",
      "antibiotic",
      "aminopenicillin",
      "dog",
      "cat",
    ],
  },
};

export default [ampicillin];