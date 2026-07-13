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

const fenbendazole: Drug = {
  id: "fenbendazole",

  genericName: "Fenbendazole",

  brandNames: [
    "Panacur",
    "Fentas Plus",
    "Fenacure",
    "Fenac",
    "Wormban",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "fenbendazole",
    "panacur",
    "safe guard",
    "safe-guard",
    "benzimidazole",
    "anthelmintic",
    "dewormer",
    "wormer",
    "giardia",
    "roundworms",
    "hookworms",
    "whipworms",
    "tapeworms",
    "lungworms",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antiparasitic",

    drugClass: "Benzimidazole Anthelmintic",

    pharmacologicClass: "Benzimidazole",

    commonRoutes: [
      Route.PO,
    ],

    availableRoutes: [
      Route.PO,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.HORSE,
      Species.CATTLE,
      Species.SHEEP,
      Species.GOAT,
      Species.PIG,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
    Species.CATTLE,
    Species.SHEEP,
    Species.GOAT,
    Species.PIG,
  ],

  formulations: [
    {
      id: "oral-suspension-2-5",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength: "2.5% (25 mg/mL)",

      concentration: {
        value: 25,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-suspension-10",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength: "10% (100 mg/mL)",

      concentration: {
        value: 100,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-paste",

      dosageForm: DosageForm.ORAL_PASTE,

      strength: "10% (100 mg/g)",

      concentration: {
        value: 100,
        unit: ConcentrationUnit.MG_PER_G,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tablet",

      dosageForm: DosageForm.TABLET,

      strength: "150 mg, 222 mg, 500 mg, 1 g",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "bolus",

      dosageForm: DosageForm.BOLUS,

      strength: "1.5 g, 3 g",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
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
      "Ascarids, hookworms, whipworms and Taenia tapeworms",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 50,
      maximum: 50,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once daily",

    duration: "3 consecutive days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication:
      "Prevention of transplacental and transmammary transmission of Toxocara canis and Ancylostoma caninum",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 50,
      maximum: 50,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once daily",

    duration:
      "From day 40 of gestation until day 14 of lactation",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication:
      "Ascarids, hookworms, Strongyloides and Taenia tapeworms",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 50,
      maximum: 50,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once daily",

    duration: "5 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication:
      "Gastrointestinal nematodes and lungworms",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 7.5,
      maximum: 7.5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.HORSE,

    indication:
      "Large strongyles, small strongyles and pinworms",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication:
      "Susceptible gastrointestinal parasites",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication:
      "Susceptible gastrointestinal parasites (in-feed)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 3,
      maximum: 3,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Daily",

    duration: "3 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication:
      "Ascarids",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication:
      "Whipworms in pot-bellied pigs",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 9,
      maximum: 9,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once daily",

    duration: "3 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.SHEEP,

    indication:
      "Susceptible gastrointestinal parasites",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Daily",

    duration: "3 days (in feed)",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.GOAT,

    indication:
      "Susceptible gastrointestinal parasites",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Daily",

    duration: "3 days (in feed)",

    reference: "Plumb's Veterinary Drug Handbook.",
  },
],
clinical: {
  mechanismOfAction:
    "Fenbendazole is a benzimidazole anthelmintic that selectively binds parasite β-tubulin, preventing microtubule polymerization and disrupting intracellular transport. At higher concentrations it also inhibits parasite metabolic enzymes, including malate dehydrogenase and fumarate reductase, resulting in parasite death.",

  spectrum:
    "Broad-spectrum anthelmintic active against many gastrointestinal and pulmonary nematodes and selected cestodes (Taenia spp.). It is not effective against Dipylidium caninum.",

  indications: [
    "Ascarid infections.",
    "Hookworm infections.",
    "Whipworm infections.",
    "Strongyle infections.",
    "Lungworm infections.",
    "Pinworm infections in horses.",
    "Selected tapeworm infections (Taenia spp.).",
    "Gastrointestinal nematodes in ruminants and swine.",
  ],

  commonUses: [
    "Routine deworming of dogs and cats.",
    "Strategic parasite control in cattle, sheep, goats and swine.",
    "Equine deworming.",
    "Treatment of gastrointestinal nematodes.",
    "Treatment of lungworm infections.",
    "Treatment of whipworms and hookworms.",
  ],

  clinicalDecisionNotes: [
    "Effective against Taenia spp. but not Dipylidium caninum.",
    "Generally considered one of the safest anthelmintics available.",
    "Hypersensitivity reactions secondary to antigen release from dying parasites may occur, particularly following treatment of heavy parasite burdens.",
    "Dose accurately according to body weight to reduce treatment failure and resistance.",
    "Use fecal egg count–guided parasite control whenever practical in herd and flock species.",
    "Routine deworming recommendations: Dogs and cats every 3 months; puppies and kittens every 2 weeks from 2–8 weeks, then monthly until 6 months using fenbendazole for 3 consecutive days as indicated. Cattle: deworm 2–4 times yearly based on grazing management and parasite risk. Sheep and goats: strategic deworming based on fecal egg counts and pasture contamination; avoid routine blanket deworming. Swine: deworm breeding stock before farrowing and growers/finishers according to farm parasite-control programs (commonly every 3–6 months). Always dose accurately by body weight and combine treatment with sound parasite-management practices.",
  ],

  clinicalPearls: [
    "Broad-spectrum benzimidazole anthelmintic used across multiple veterinary species.",
    "Excellent safety margin; tolerated at doses far exceeding recommended therapeutic doses.",
    "Safe for use during pregnancy in most veterinary species.",
    "Accurate dosing by body weight improves efficacy and helps reduce anthelmintic resistance.",
    "Parasite control programs should integrate pasture management and fecal egg count monitoring rather than relying solely on anthelmintics.",
    "Dogs & Cats: Routine deworming every 3 months; puppies and kittens every 2 weeks from 2–8 weeks, then monthly until 6 months.",
    "Cattle: Use a parasite-control program based on grazing management, parasite risk, and monitoring results. Treatment frequency may range from 2–4 times annually, with calves in high-risk areas requiring closer monitoring and more frequent intervention.",
    "Sheep & Goats: Deworm strategically based on fecal egg counts (FEC) and pasture contamination; avoid routine blanket deworming to reduce resistance.",
    "Swine: Deworm breeding stock before farrowing and growers/finishers according to farm parasite-control programs, commonly every 3–6 months.",
  ],
},
reproduction: {
  pregnancy: {
    recommendation:
      ReproductionRecommendation.SAFE,

    notes: [
      "Considered safe for use during pregnancy in most veterinary species.",
      "Safe for use in pregnant bitches to reduce transplacental and transmammary transmission of Toxocara canis and Ancylostoma caninum.",
      "Pregnancy safety in dogs and cats is classified as Class A (Probably safe).",
    ],
  },

  lactation: {
    recommendation:
      ReproductionRecommendation.SAFE,

    notes: [
      "Generally considered safe during lactation.",
      "May be administered during lactation when clinically indicated.",
    ],
  },

  breeding: {
    recommendation:
      ReproductionRecommendation.SAFE,

    notes: [
      "No evidence of adverse effects on breeding animals at recommended doses.",
      "Generally considered safe for use in breeding animals.",
    ],
  },
},

overdose: {
  signs: [
    "Acute toxicity is unlikely even at large overdoses.",
    "Vomiting (uncommon).",
    "Hypersensitivity reactions secondary to antigen release from dying parasites.",
    "Clinical signs are uncommon even at doses up to 100 times the recommended dose.",
  ],

  management: [
    "Provide supportive and symptomatic care.",
    "Treat hypersensitivity reactions if they occur.",
    "Monitor hydration and gastrointestinal status.",
    "Significant toxicity is not expected following accidental overdose.",
  ],
},
safety: {
  contraindications: [
    "No specific contraindications at recommended doses.",
    "Avoid use in animals with known hypersensitivity to fenbendazole or other benzimidazoles.",
  ],

  precautions: [
    "Hypersensitivity reactions may occur due to antigen release from dying parasites, especially in animals with heavy parasite burdens.",
    "Dose accurately according to body weight.",
    "Use strategic deworming and fecal egg count monitoring to minimize anthelmintic resistance.",
    "Not effective against Dipylidium caninum.",
  ],

  adverseEffects: [
    "Vomiting (uncommon in dogs and cats).",
    "Hypersensitivity reactions associated with dying parasites.",
    "Transient gastrointestinal upset (rare).",
  ],

  drugInteractions: [
    "No clinically significant drug interactions are commonly reported.",
  ],

  monitoring: [
    "Clinical response.",
    "Fecal egg count reduction when appropriate.",
    "Resolution of clinical signs associated with parasitism.",
    "Monitor for hypersensitivity reactions in animals with heavy parasite burdens.",
  ],

  withdrawalPeriod: "",

  storage: [
    "Store fenbendazole products at room temperature.",
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

  lastReviewed: "2026-07-12",

  tags: [
    "fenbendazole",
    "panacur",
    "safe guard",
    "benzimidazole",
    "anthelmintic",
    "dewormer",
    "roundworms",
    "hookworms",
    "whipworms",
    "lungworms",
    "strongyles",
    "tapeworm",
    "dog",
    "cat",
    "horse",
    "cattle",
    "sheep",
    "goat",
    "pig",
  ],
},
};

export default [fenbendazole];