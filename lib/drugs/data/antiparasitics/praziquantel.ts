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

const praziquantel: Drug = {
  id: "praziquantel",

  genericName: "Praziquantel",

  brandNames: [
    "Droncit",
    "PraziVet",
    "PraziCare",
    "Kiwof Plus",
    "Canworm Plus",
    "Drontal Plus",
    "Milbemax",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "praziquantel",
    "droncit",
    "drontal plus",
    "milbemax",
    "tapeworm",
    "cestode",
    "echinococcus",
    "dipylidium",
    "taenia",
    "anthelmintic",
    "anticestodal",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antiparasitic",

    drugClass: "Anthelmintic",

    pharmacologicClass: "Isoquinoline Anticestodal",

    commonRoutes: [
      Route.PO,
      Route.SC,
      Route.IM,
    ],

    availableRoutes: [
      Route.PO,
      Route.SC,
      Route.IM,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.SHEEP,
      Species.GOAT,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.SHEEP,
    Species.GOAT,
  ],

  formulations: [
    {
      id: "tablet-50",

      dosageForm: DosageForm.TABLET,

      strength: "50 mg",

      concentration: {
        value: 50,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tablet-150",

      dosageForm: DosageForm.TABLET,

      strength: "150 mg",

      concentration: {
        value: 150,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tablet-600",

      dosageForm: DosageForm.TABLET,

      strength: "600 mg",

      concentration: {
        value: 600,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "injectable",

      dosageForm: DosageForm.INJECTION,

      strength: "56.8 mg/mL",

      concentration: {
        value: 56.8,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.SC,
        Route.IM,
      ],
    },
  ],

 doseReferences: [
  {
    species: Species.DOG,

    indication:
      "Echinococcus granulosus infection",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication:
      "Diphyllobothrium spp. infection",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 7.5,
      maximum: 7.5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication:
      "Liver fluke infections (Platynosomum spp. or Opisthorchiidae)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 20,
      maximum: 40,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once daily",

    duration:
      "3–10 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication:
      "Paragonimus kellicotti infection (Paragonimiasis)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 23,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8 hours",

    duration:
      "3 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.SHEEP,

    indication:
      "Moniezia, Stilesia and Avitellina tapeworm infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 15,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.GOAT,

    indication:
      "Moniezia, Stilesia and Avitellina tapeworm infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 15,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },
],
clinical: {
  mechanismOfAction:
    "Praziquantel increases calcium ion permeability across the parasite tegument, causing rapid muscular contraction, paralysis, tegumental damage, vacuolization, and eventual disintegration or death of susceptible cestodes and trematodes.",

  spectrum:
    "Primarily active against cestodes (tapeworms) including Dipylidium, Taenia, Echinococcus, Moniezia, Stilesia, and Avitellina spp. It also has activity against selected trematodes (flukes) and other parasites such as Paragonimus, Alaria, and Spirometra spp.",

  indications: [
    "Tapeworm (cestode) infections.",
    "Echinococcus granulosus infections.",
    "Diphyllobothrium infections.",
    "Paragonimus infections.",
    "Selected liver fluke infections.",
    "Moniezia infections in sheep and goats.",
  ],

  commonUses: [
    "Treatment of Dipylidium caninum.",
    "Treatment of Taenia spp. infections.",
    "Treatment of Echinococcus spp.",
    "Treatment of tapeworm infections in dogs and cats.",
    "Treatment of selected trematode infections.",
  ],

  clinicalDecisionNotes: [
    "A single oral dose is usually effective for susceptible tapeworm infections.",
    "Fasting before treatment is not required and is not recommended.",
    "Implement flea control and environmental parasite control to prevent reinfection with Dipylidium caninum.",
    "Contraindicated in puppies younger than 4 weeks and kittens younger than 6 weeks of age.",
    "Injectable formulations are associated with more adverse effects than oral products.",
  ],

  clinicalPearls: [
    "Excellent activity against most veterinary tapeworms.",
    "Very wide margin of safety following oral administration.",
    "Generally well tolerated after oral administration.",
    "Reinfection is common unless intermediate hosts (especially fleas) are controlled.",
    "Often administered as part of combination deworming products.",
  ],
},
reproduction: {
  pregnancy: {
    recommendation:
      ReproductionRecommendation.SAFE,

    notes: [
      "Considered safe for use during pregnancy in dogs and cats.",
      "Pregnancy safety is classified as Class A (Probably safe) in dogs and cats.",
      "Human FDA pregnancy category B.",
    ],
  },

  lactation: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Use during lactation only when clinically indicated.",
      "No significant adverse effects have been reported in nursing animals, but veterinary data are limited.",
    ],
  },

  breeding: {
    recommendation:
      ReproductionRecommendation.NOT_ESTABLISHED,

    notes: [
      "Specific reproductive safety studies in breeding animals are limited.",
      "No evidence of impaired fertility has been reported at recommended therapeutic doses.",
    ],
  },
},

overdose: {
  signs: [
    "Vomiting.",
    "Transient lethargy.",
    "Ataxia (primarily following injectable overdose in cats).",
    "Depression.",
    "Very high injectable doses may be fatal in cats.",
  ],

  management: [
    "Provide supportive and symptomatic care.",
    "Monitor neurological status following significant overdose.",
    "Maintain hydration and treat gastrointestinal signs as needed.",
    "Praziquantel has a wide margin of safety following oral administration.",
  ],
},
safety: {
  contraindications: [
    "Known hypersensitivity to praziquantel.",
    "Puppies less than 4 weeks of age.",
    "Kittens less than 6 weeks of age.",
  ],

  precautions: [
    "Use only at recommended doses in young animals meeting the minimum approved age.",
    "Implement flea control and environmental parasite control to prevent reinfection with Dipylidium caninum.",
    "Injectable formulations may produce more adverse effects than oral formulations.",
  ],

  adverseEffects: [
    "Oral administration: anorexia, vomiting, lethargy, or diarrhea (uncommon in dogs; <5%).",
    "Cats: salivation and diarrhea (rare; <2%).",
    "Injectable administration: pain at injection site.",
    "Injectable administration: anorexia, salivation, vomiting, lethargy, weakness, or diarrhea.",
  ],

  drugInteractions: [
    "No clinically significant veterinary drug interactions are well established.",
  ],

  monitoring: [
    "Resolution of clinical signs.",
    "Passage or elimination of tapeworm segments when appropriate.",
    "Monitor for adverse gastrointestinal effects after treatment.",
    "Assess for reinfection, particularly when flea control is inadequate.",
  ],

  withdrawalPeriod: "",

  storage: [
    "Store tablets in tightly closed containers at room temperature.",
    "Protect from light.",
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
    "praziquantel",
    "droncit",
    "drontal plus",
    "milbemax",
    "anthelmintic",
    "anticestodal",
    "tapeworm",
    "cestode",
    "dipylidium",
    "taenia",
    "echinococcus",
    "moniezia",
    "dog",
    "cat",
    "sheep",
    "goat",
  ],
},
};

export default [praziquantel];