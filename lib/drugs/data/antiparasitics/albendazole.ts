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
const albendazole: Drug = {
  id: "albendazole",

  genericName: "Albendazole",

  brandNames: [
    "Valbazen",
    "Albomar",
    "Albovet",
    "Albend Vet",
    "Albectin",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "albendazole",
    "valbazen",
    "benzimidazole",
    "dewormer",
    "anthelmintic",
    "liver fluke",
    "fluke",
    "tapeworm",
    "roundworm",
    "nematode",
    "cestode",
    "fasciola",
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
      Species.CATTLE,
      Species.SHEEP,
      Species.GOAT,
      Species.PIG,
    ],
  },

  species: [
    Species.DOG,
    Species.CATTLE,
    Species.SHEEP,
    Species.GOAT,
    Species.PIG,
  ],

  formulations: [
    {
      id: "oral-suspension-25",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength: "2.5%",

      concentration: {
        value: 25,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-suspension-50",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength: "5%",

      concentration: {
        value: 50,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-suspension-100",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength: "10%",

      concentration: {
        value: 100,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "bolus",

      dosageForm: DosageForm.BOLUS,

      strength: "600 mg, 1.5 g, 2.5 g, 3 g",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tablet",

      dosageForm: DosageForm.TABLET,

      strength: "250 mg, 400 mg, 600 mg",

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
      "Susceptible nematode infections (including Oslerus osleri)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours",

    duration: "5 days; may repeat in 2 weeks",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication:
      "Susceptible gastrointestinal nematodes",

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
    species: Species.CATTLE,

    indication:
      "Adult liver flukes (Fasciola hepatica)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    notes:
      "Best administered in autumn when most flukes are adults; a second winter treatment may be beneficial.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication:
      "Adult liver flukes (alternative regimen)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 15,
      maximum: 15,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication:
      "Gastrointestinal cestodes",

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
      "Susceptible gastrointestinal parasites",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.SHEEP,

    indication:
      "Susceptible gastrointestinal parasites",

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
    species: Species.GOAT,

    indication:
      "Susceptible gastrointestinal parasites",

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
],
clinical: {
  mechanismOfAction:
    "Albendazole is a benzimidazole anthelmintic that selectively binds parasite β-tubulin, preventing microtubule polymerization and disrupting intracellular transport. At higher concentrations it also inhibits parasite metabolic enzymes, including malate dehydrogenase and fumarate reductase, leading to parasite death.",

  spectrum:
    "Broad-spectrum anthelmintic active against numerous gastrointestinal and pulmonary nematodes, selected cestodes, and adult liver flukes (Fasciola spp.). It also has activity against some protozoa.",

  indications: [
    "Gastrointestinal nematode infections.",
    "Lungworm infections.",
    "Adult liver fluke (Fasciola spp.) infections.",
    "Moniezia tapeworm infections.",
    "Selected cestode infections.",
  ],

  commonUses: [
    "Deworming cattle.",
    "Deworming sheep and goats.",
    "Treatment of liver fluke infections.",
    "Control of gastrointestinal nematodes.",
    "Treatment of susceptible parasitic infections in dogs (extra-label).",
  ],

  clinicalDecisionNotes: [
    "Approved primarily for cattle and sheep.",
    "Contraindicated during early pregnancy because of teratogenic and embryotoxic effects.",
    "Do not use in lactating dairy cattle.",
    "Do not use in pigeons, doves, or alpaca crias due to reported severe toxicity.",
    "Highly effective against adult liver flukes but has little or no efficacy against immature flukes.",
    "Shake oral suspension thoroughly before administration.",
  ],

  clinicalPearls: [
    "Broad-spectrum benzimidazole anthelmintic.",
    "Provides excellent efficacy against many gastrointestinal nematodes and adult Fasciola spp.",
    "Generally well tolerated at recommended doses in cattle and sheep.",
    "Resistance can develop with repeated indiscriminate use; integrate parasite-control strategies with fecal egg count monitoring where appropriate.",
    "Dose accurately according to body weight to maximize efficacy and minimize resistance development.",
    "Dogs & Cats Deworming frequency depends on age and parasite risk; puppies/kittens require frequent early deworming, while adults are commonly treated every 3 months when indicated using albendazole only under veterinary guidance (cats require caution).",
    "Cattle: Strategic deworming generally 2–4 times yearly based on parasite burden, grazing system, and fecal examination results.",
    "Sheep & Goats: Treat based on parasite risk and fecal egg counts (FEC); commonly targeted before/after high-risk grazing periods rather than routine frequent dosing.",
    "Swine: Deworm breeding animals before breeding/farrowing and treat growers/finishers according to farm parasite-control programs (often every 3–6 months if needed).",
  ],
},
reproduction: {
  pregnancy: {
    recommendation:
      ReproductionRecommendation.CONTRAINDICATED,

    notes: [
      "Associated with teratogenic and embryotoxic effects when administered during early pregnancy.",
      "Do not administer to female cattle during the first 45 days of pregnancy or for 45 days after removal of bulls.",
      "Do not administer to ewes during the first 30 days of pregnancy or for 30 days after removal of rams.",
      "Human pregnancy category C.",
    ],
  },

  lactation: {
    recommendation:
      ReproductionRecommendation.CONTRAINDICATED,

    notes: [
      "Not approved for use in lactating dairy cattle.",
      "Safety during nursing has not been established.",
    ],
  },

  breeding: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Avoid administration to breeding females during the recommended post-breeding withdrawal period (45 days after bull removal in cattle; 30 days after ram removal in sheep).",
      "Use cautiously in breeding animals due to reproductive safety concerns.",
    ],
  },
},

overdose: {
  signs: [
    "At recommended doses toxicity is uncommon in cattle and sheep.",
    "Cats: weight loss, neutropenia and mental dullness after prolonged high-dose administration (100 mg/kg/day for 14–21 days).",
    "Very high doses may cause death in cattle and sheep.",
  ],

  management: [
    "Discontinue albendazole immediately.",
    "Provide supportive and symptomatic care.",
    "Monitor CBC and liver function in significant overdoses.",
    "Treat dehydration and gastrointestinal signs as needed.",
  ],
},
safety: {
  contraindications: [
    "Known hypersensitivity to albendazole or other benzimidazoles.",
    "Hepatic failure.",
    "Early pregnancy.",
    "Lactating dairy cattle.",
    "Pigeons and doves.",
    "Alpaca crias.",
  ],

  precautions: [
    "Use cautiously in patients with hepatic disease.",
    "Use cautiously in patients with hematologic disorders.",
    "Do not administer during early pregnancy because of teratogenic risk.",
    "Not effective against immature liver flukes; best efficacy is against adult Fasciola spp.",
    "Shake oral suspension well before use.",
  ],

  adverseEffects: [
    "Gastrointestinal upset.",
    "Hepatic dysfunction.",
    "Rare blood dyscrasias including aplastic anemia.",
    "Neutropenia after prolonged high-dose administration.",
    "Mental dullness (reported in cats after prolonged overdose).",
    "Severe diarrhea and bone marrow suppression in alpaca crias.",
  ],

  drugInteractions: [
    "No clinically significant veterinary drug interactions are well established.",
  ],

  monitoring: [
    "Clinical response.",
    "Fecal egg count reduction when appropriate.",
    "Liver function during prolonged therapy or in patients with hepatic disease.",
    "CBC if prolonged or high-dose treatment is used.",
  ],

  withdrawalPeriod: "",

  storage: [
    "Store oral suspension at room temperature (15–30°C).",
    "Protect from freezing.",
    "Shake suspension well before use.",
    "Store paste at controlled room temperature (15–30°C).",
    "Protect paste from freezing.",
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
    "albendazole",
    "valbazen",
    "benzimidazole",
    "anthelmintic",
    "dewormer",
    "liver fluke",
    "fasciola",
    "nematodes",
    "cestodes",
    "protozoa",
    "dog",
    "cattle",
    "sheep",
    "goat",
    "pig",
  ],
},
};

export default [albendazole];