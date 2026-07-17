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

const meropenem: Drug = {
  id: "meropenem",

  genericName: "Meropenem",

  brandNames: [
    "Merrem",
    "Meronem",
    "Meromac",
    "Meropen",
    "Merocrit",
    "Meropenem for Injection IP",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "meropenem",
    "merrem",
    "meronem",
    "meromac",
    "meropen",
    "merocrit",
    "carbapenem",
    "beta lactam",
    "antibiotic",
    "bacteremia",
    "sepsis",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antibiotic",

    drugClass: "Carbapenem Antibiotic",

    pharmacologicClass:
      "Carbapenem Beta-lactam Antibiotic",

    commonRoutes: [
      Route.IV,
      Route.SC,
    ],

    availableRoutes: [
      Route.IV,
      Route.SC,
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
    Route.SC,
  ],
},

{
  id: "inj-1000",

  dosageForm: DosageForm.POWDER_FOR_INJECTION,

  strength: "1 g/vial",

  concentration: {
    value: 0,
    unit: ConcentrationUnit.OTHER,
  },

  vialStrengths: [1000],

  routes: [
    Route.IV,
    Route.SC,
  ],
},

{
  id: "inj-2000",

  dosageForm: DosageForm.POWDER_FOR_INJECTION,

  strength: "2 g/vial",

  concentration: {
    value: 0,
    unit: ConcentrationUnit.OTHER,
  },

  vialStrengths: [2000],

  routes: [
    Route.IV,
    Route.SC,
  ],
    },
  ],

  doseReferences: [
    {
      species: Species.DOG,

      indication:
        "Bacteremia/Sepsis",

      route: Route.IV,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 24,
        maximum: 24,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 24 hours",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication:
        "Bacteremia/Sepsis",

      route: Route.SC,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 12,
        maximum: 12,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 8 hours",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication:
        "Bacteremia/Sepsis",

      route: Route.IV,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 24,
        maximum: 24,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 24 hours",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication:
        "Bacteremia/Sepsis",

      route: Route.SC,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 12,
        maximum: 12,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 8 hours",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },
  ],
    clinical: {
    mechanismOfAction:
      "Meropenem is a carbapenem antibiotic with a broad antibacterial spectrum similar to that of imipenem. It is more active against Enterobacteriaceae and less active against gram-positive bacteria. Because meropenem is more stable to renal dehydropeptidase-I than imipenem, it does not require the addition of cilastatin. Meropenem may also have less potential to induce seizures than imipenem.",

    spectrum:
      "Broad-spectrum antibacterial activity. More active against Enterobacteriaceae and less active against gram-positive bacteria. Oxacillin-resistant Staphylococcus are usually resistant.",

    indications: [
      "Susceptible bacterial infections",
      "Bacteremia",
      "Sepsis",
      "Resistant gram-negative infections",
    ],

    commonUses: [
      "Treatment of susceptible infections",
      "Treatment of bacteremia",
      "Treatment of sepsis",
    ],

    clinicalDecisionNotes: [
      "Carbapenem antibiotic similar to imipenem but may be more effective against some resistant gram-negative infections.",
      "May have less potential to induce seizures than imipenem.",
      "Use should be reserved for documented resistant infections and/or when aminoglycosides are not indicated (e.g., renal dysfunction or CNS infections).",
      "Must be administered intravenously or subcutaneously.",
      "Expense may be a limiting factor.",
      "This drug reference is intended for educational and clinical support and does not replace professional veterinary judgment.",
    ],

    clinicalPearls: [
      "Does not require cilastatin because of stability to renal dehydropeptidase-I.",
      "Generally well tolerated in animal patients.",
      "May be preferred over imipenem for some resistant gram-negative infections.",
    ],
  },

  reproduction: {
    pregnancy: {
      recommendation:
        ReproductionRecommendation.SAFE,

      notes: [
        "FDA Pregnancy Category B.",
        "Animal studies have not demonstrated risk to the fetus.",
      ],
    },

    lactation: {
      recommendation:
        ReproductionRecommendation.SAFE,

      notes: [
        "Meropenem is likely safe to use during lactation.",
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
    signs: [],

    management: [
      "Discontinue the drug if necessary.",
      "Delay the next dose by a few hours if appropriate.",
      "Meropenem can be removed by hemodialysis when necessary.",
    ],
  },

  safety: {
    contraindications: [
      "Hypersensitivity to meropenem.",
      "Hypersensitivity to other carbapenems.",
      "History of anaphylaxis following any beta-lactam antibiotic.",
    ],

    precautions: [
      "Reserve use for documented resistant infections.",
    ],

    adverseEffects: [
      "Slight hair loss at subcutaneous injection sites.",
      "Nausea.",
      "Vomiting.",
      "Diarrhea.",
    ],

    drugInteractions: [],

    monitoring: [
      "Monitor clinical response.",
      "Monitor for gastrointestinal adverse effects.",
      "Monitor subcutaneous injection sites.",
    ],

    storage: [
      "Store the powder for injection at controlled room temperature (20–25°C; 69–77°F).",
      "After reconstitution with sterile water for injection to a concentration of up to 50 mg/mL, the solution is stable for up to 2 hours at room temperature.",
      "After reconstitution, the solution is stable for up to 12 hours under refrigeration.",
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
      "meropenem",
      "merrem",
      "meronem",
      "meromac",
      "meropen",
      "merocrit",
      "carbapenem",
      "beta-lactam",
      "antibiotic",
      "bacteremia",
      "sepsis",
      "dog",
      "cat",
    ],
  },

};

export default [meropenem];