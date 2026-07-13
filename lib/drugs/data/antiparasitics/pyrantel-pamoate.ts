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

const pyrantelPamoate: Drug = {
  id: "pyrantel-pamoate",

  genericName: "Pyrantel pamoate",

  brandNames: [
    "Nemex",
    "Pyrantel Vet",
    "Kiwof Plus",
    "Drontal Plus",
    "Canworm Plus",
    "Skyworm",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "pyrantel",
    "pyrantel pamoate",
    "pyrantel embonate",
    "nemex",
    "strongid",
    "roundworm",
    "hookworm",
    "ascarid",
    "physaloptera",
    "tapeworm",
    "anthelmintic",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antiparasitic",

    drugClass: "Anthelmintic",

    pharmacologicClass: "Tetrahydropyrimidine Anthelmintic",

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
      id: "oral-suspension-50",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength: "50 mg/mL",

      concentration: {
        value: 50,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-suspension-144",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength: "144 mg/mL pyrantel pamoate (equivalent to 50 mg/mL pyrantel base)",

      concentration: {
        value: 144,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tablet",

      dosageForm: DosageForm.TABLET,

      strength: "125 mg, 250 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-paste",

      dosageForm: DosageForm.ORAL_PASTE,

      strength: "43.9%",

      concentration: {
        value: 439,
        unit: ConcentrationUnit.MG_PER_G,
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
      "Hookworm and roundworm infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose after meals",

    duration: "Repeat in 7–10 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication:
      "Ascarids, hookworms and Physaloptera infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    duration:
      "Repeat in 2 weeks (one repeat only for Physaloptera)",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.HORSE,

    indication:
      "Susceptible gastrointestinal nematodes",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 6.6,
      maximum: 6.6,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    notes:
      "Dose expressed as pyrantel base.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.HORSE,

    indication:
      "Anoplocephala perfoliata (tapeworm)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 13.2,
      maximum: 13.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    notes:
      "Dose expressed as pyrantel base.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication:
      "Ascaris suum and Oesophagostomum spp. (Pyrantel tartrate)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 22,
      maximum: 22,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication:
      "Ascaris suum (Pyrantel tartrate in feed)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 2.6,
      maximum: 2.6,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Daily",

    duration: "3 days",

    notes:
      "Administered as medicated feed.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication:
      "Susceptible gastrointestinal parasites (Pyrantel tartrate)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.SHEEP,

    indication:
      "Susceptible gastrointestinal parasites (Pyrantel tartrate)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.GOAT,

    indication:
      "Susceptible gastrointestinal parasites (Pyrantel tartrate)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },
],
clinical: {
  mechanismOfAction:
    "Pyrantel is a tetrahydropyrimidine anthelmintic that acts as a depolarizing neuromuscular-blocking agent in susceptible parasites. It produces persistent activation of nicotinic acetylcholine receptors, resulting in spastic paralysis and expulsion of the parasite. Pyrantel also inhibits cholinesterase.",

  spectrum:
    "Primarily active against gastrointestinal nematodes including ascarids (roundworms), hookworms, stomach worms (Physaloptera), strongyles, Parascaris equorum, Oesophagostomum spp., and Ascaris suum. At double the recommended equine dose it is also active against Anoplocephala perfoliata (tapeworm).",

  indications: [
    "Roundworm (ascarid) infections.",
    "Hookworm infections.",
    "Stomach worm (Physaloptera) infections.",
    "Strongyle infections in horses.",
    "Parascaris equorum infections.",
    "Tapeworm (Anoplocephala perfoliata) infections in horses at double dose.",
    "Ascaris suum and Oesophagostomum spp. infections in swine.",
  ],

  commonUses: [
    "Routine deworming of puppies and kittens.",
    "Treatment of canine and feline roundworms and hookworms.",
    "Equine parasite control.",
    "Control of gastrointestinal nematodes in livestock.",
    "Frequently combined with praziquantel, febantel, or ivermectin in broad-spectrum dewormers.",
  ],

  clinicalDecisionNotes: [
    "Pyrantel pamoate is commonly used in dogs and cats, whereas pyrantel tartrate is commonly used in horses and livestock.",
    "Dose for horses is expressed as pyrantel base.",
    "Administer after meals in dogs when treating hookworms and roundworms.",
    "Repeat treatment as recommended to eliminate parasites emerging from migrating larval stages.",
    "Use cautiously in severely debilitated animals.",
  ],

  clinicalPearls: [
    "Excellent safety profile at recommended doses.",
    "Highly effective against susceptible gastrointestinal nematodes but has no activity against whipworms.",
    "One of the safest anthelmintics for young puppies and kittens.",
    "Routine environmental hygiene and feces removal reduce reinfection.",
    "Appropriate parasite-control programs and periodic fecal examinations help minimize anthelmintic resistance.",
  ],
},
reproduction: {
  pregnancy: {
    recommendation:
      ReproductionRecommendation.SAFE,

    notes: [
      "Considered safe for use during pregnancy in veterinary patients.",
      "Canine and feline pregnancy safety is classified as Class A (Probably safe).",
      "Human FDA pregnancy category C.",
    ],
  },

  lactation: {
    recommendation:
      ReproductionRecommendation.SAFE,

    notes: [
      "Considered safe for use in nursing veterinary patients.",
    ],
  },

  breeding: {
    recommendation:
      ReproductionRecommendation.SAFE,

    notes: [
      "No evidence of adverse effects on fertility or breeding animals when administered at recommended therapeutic doses.",
    ],
  },
},

overdose: {
  signs: [
    "Vomiting (most common).",
    "Transient gastrointestinal upset.",
    "Signs of toxicity are uncommon due to the moderate margin of safety.",
  ],

  management: [
    "Provide supportive and symptomatic care.",
    "Maintain hydration if gastrointestinal signs occur.",
    "Monitor until clinical signs resolve.",
  ],
},
safety: {
  contraindications: [
    "Known hypersensitivity to pyrantel.",
    "Severely debilitated animals.",
  ],

  precautions: [
    "Use with caution in severely debilitated animals.",
    "Dose accurately according to body weight.",
    "Follow recommended repeat dosing schedules to eliminate newly matured parasites.",
    "Implement environmental parasite control to reduce reinfection.",
  ],

  adverseEffects: [
    "Vomiting (occasional in dogs and cats).",
    "Transient gastrointestinal upset.",
    "Adverse effects are uncommon at recommended doses.",
  ],

  drugInteractions: [
    "Do not administer concurrently with levamisole due to similar cholinergic mechanisms and potential additive toxicity.",
    "Avoid concurrent use with organophosphate compounds because of increased risk of cholinergic adverse effects.",
    "May antagonize the anthelmintic effect of piperazine.",
  ],

  monitoring: [
    "Resolution of clinical signs.",
    "Fecal examinations to assess treatment efficacy when appropriate.",
    "Monitor for vomiting or other gastrointestinal adverse effects.",
    "Evaluate for reinfection and implement appropriate parasite-control measures.",
  ],

  withdrawalPeriod: "",

  storage: [
    "Store in tightly closed, light-resistant containers.",
    "Store at room temperature (15–30°C) unless otherwise directed by the manufacturer.",
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
    "pyrantel",
    "pyrantel pamoate",
    "pyrantel embonate",
    "pyrantel tartrate",
    "nemex",
    "strongid",
    "anthelmintic",
    "tetrahydropyrimidine",
    "roundworm",
    "hookworm",
    "ascarid",
    "horse",
    "dog",
    "cat",
    "cattle",
    "sheep",
    "goat",
    "pig",
  ],
},
};

export default [pyrantelPamoate];