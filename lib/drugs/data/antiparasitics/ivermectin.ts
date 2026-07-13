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

const ivermectin: Drug = {
  id: "ivermectin",

  genericName: "Ivermectin",

  brandNames: [
    "Ivomec",
    "Neomec",
    "Ivercare",
    "Ivermax",
    "Ivervet",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "ivermectin",
    "ivomec",
    "heartgard",
    "macrocyclic lactone",
    "avermectin",
    "heartworm",
    "demodex",
    "demodicosis",
    "mange",
    "scabies",
    "mite",
    "lice",
    "nematode",
    "roundworm",
    "lungworm",
    "bot",
    "parasite",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antiparasitic",

    drugClass: "Macrocyclic Lactone",

    pharmacologicClass: "Avermectin Endectocide",

    commonRoutes: [
      Route.PO,
      Route.SC,
      Route.TOPICAL,
    ],

    availableRoutes: [
      Route.PO,
      Route.SC,
      Route.TOPICAL,
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
      id: "injectable-1-percent",

      dosageForm: DosageForm.INJECTION,

      strength: "1%",

      concentration: {
        value: 10,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.SC,
        
      ],
    },

    {
      id: "injectable-3-15-percent",

      dosageForm: DosageForm.INJECTION,

      strength: "3.15%",

      concentration: {
        value: 31.5,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.SC,

      ],
    },

    {
      id: "oral-solution-0-08-percent",

      dosageForm: DosageForm.ORAL_SOLUTION,

      strength: "0.08%",

      concentration: {
        value: 0.8,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-solution-0-1-percent",

      dosageForm: DosageForm.ORAL_SOLUTION,

      strength: "0.1%",

      concentration: {
        value: 1,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-paste",

      dosageForm: DosageForm.ORAL_PASTE,

      strength: "1.87%",

      concentration: {
        value: 18.7,
        unit: ConcentrationUnit.MG_PER_G,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "pour-on",

      dosageForm: DosageForm.POUR_ON,

      strength: "0.5%",

      concentration: {
        value: 5,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.TOPICAL,
      ],
    },

    {
      id: "tablet-3mg",

      dosageForm: DosageForm.TABLET,

      strength: "3 mg",

      concentration: {
        value: 3,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tablet-6mg",

      dosageForm: DosageForm.TABLET,

      strength: "6 mg",

      concentration: {
        value: 6,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tablet-12mg",

      dosageForm: DosageForm.TABLET,

      strength: "12 mg",

      concentration: {
        value: 12,
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

    indication: "Heartworm prevention",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.006,
      maximum: 0.012,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once monthly",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Generalized demodicosis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.6,
      maximum: 0.6,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once daily (gradually increase dose)",

    duration:
      "Continue for 1–2 months after two consecutive negative skin scrapings.",

    notes:
      "Start at 0.1 mg/kg PO daily and increase by 0.1 mg/kg every 3 days until 0.6 mg/kg is reached. Avoid in MDR1 mutation-susceptible breeds unless genetically tested.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Sarcoptic mange",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.3,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once weekly",

    duration: "4 weeks",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Capillaria spp. lungworm infection",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication: "Heartworm prevention",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.024,
      maximum: 0.024,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 30–45 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication: "Susceptible internal and external parasites",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    notes:
      "Volumes greater than 10 mL should be divided between two injection sites.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.HORSE,

    indication: "Susceptible internal parasites",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication: "Susceptible internal and external parasites",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.3,
      maximum: 0.3,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    notes:
      "Administer subcutaneously in the neck immediately behind the ear.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.SHEEP,

    indication: "Susceptible internal parasites",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.GOAT,

    indication: "Susceptible internal parasites (extra-label)",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },
],
  clinical: {
    mechanismOfAction:
      "Macrocyclic lactone antiparasitic that binds to glutamate-gated chloride channels in parasites, increasing chloride ion influx, causing neuromuscular paralysis and death. It also enhances GABA-mediated neurotransmission in susceptible parasites.",

    spectrum:
      "Broad-spectrum activity against many nematodes, mites, lice, bots, and certain other ectoparasites. Ineffective against cestodes and trematodes.",

    indications: [
      "Heartworm prevention in dogs and cats.",
      "Generalized demodicosis in dogs.",
      "Sarcoptic mange.",
      "Gastrointestinal nematode infections.",
      "Lungworm infections.",
      "Control of lice and mange mites.",
      "Bots and strongyles in horses.",
      "Parasite control in cattle, sheep, goats, and swine.",
    ],

    commonUses: [
      "Monthly heartworm prophylaxis.",
      "Treatment of generalized demodicosis.",
      "Treatment of sarcoptic mange.",
      "Treatment and control of gastrointestinal nematodes.",
      "Control of ectoparasites in livestock.",
      "Routine deworming programs in food animals and horses.",
    ],

    clinicalDecisionNotes: [
      "Always consider MDR1 mutation status before using high-dose ivermectin in susceptible dog breeds.",
      "Use species-specific formulations whenever possible.",
      "Not effective against tapeworms or liver flukes.",
      "Heartworm-positive dogs should be managed according to current heartworm treatment guidelines.",
      "Dose varies considerably depending on indication (heartworm prevention vs. mange treatment).",
    ],

    clinicalPearls: [
      "One of the most widely used macrocyclic lactones in veterinary medicine.",
      "High-dose protocols for demodicosis require gradual dose escalation and close monitoring.",
      "Neurotoxicity risk is markedly increased in MDR1 mutation-positive dogs.",
      "Most livestock formulations are extra-label in dogs and cats and require accurate dose calculations.",
      "Overdose can cause severe CNS depression, coma, and death.",
    ],
  },
    reproduction: {
    pregnancy: {
      recommendation:
        ReproductionRecommendation.SAFE,

      notes: [
        "Generally considered safe during pregnancy at recommended doses.",
        "Reproductive studies in dogs, horses, cattle, and swine have not demonstrated fetal adverse effects.",
      ],
    },

    lactation: {
      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Excreted into milk in low concentrations.",
        "Generally considered compatible with lactation when used at recommended doses, but follow product labeling in food-producing animals.",
      ],
    },

    breeding: {
      recommendation:
        ReproductionRecommendation.SAFE,

      notes: [
        "No evidence of adverse effects on fertility or reproductive performance in breeding animals at recommended doses.",
      ],
    },
  },

  overdose: {
    signs: [
      "Ataxia.",
      "Blindness.",
      "Mydriasis.",
      "Tremors.",
      "Hypersalivation.",
      "Vomiting.",
      "Depression.",
      "Disorientation.",
      "Hyperesthesia.",
      "Hypothermia.",
      "Recumbency.",
      "Coma.",
      "Respiratory depression.",
      "Death in severe cases.",
    ],

    management: [
      "Discontinue ivermectin immediately.",
      "Provide supportive care including intravenous fluids and temperature support.",
      "Control seizures if present.",
      "Monitor respiratory and cardiovascular function.",
      "Provide nutritional support for prolonged recoveries.",
      "Consider lipid emulsion therapy in severe intoxications where appropriate.",
      "There is no specific antidote.",
    ],
  },
    safety: {
    contraindications: [
      "Hypersensitivity to ivermectin or other avermectins.",
      "High-dose use in MDR1 mutation-positive dogs (e.g., Collies, Australian Shepherds, Shetland Sheepdogs, Long-haired Whippets, Old English Sheepdogs) unless benefits outweigh risks.",
      "Use only according to approved labeling in species or age groups where safety has been established.",
    ],

    precautions: [
      "Use caution in debilitated animals or those with severe systemic illness.",
      "Screen susceptible herding breeds for the MDR1 mutation before administering high-dose ivermectin.",
      "Heartworm-positive dogs may develop a shock-like reaction due to rapid microfilarial death.",
      "Hypersensitivity reactions may occur in horses following death of Onchocerca microfilariae.",
      "Injection-site swelling or discomfort may occur in cattle.",
      "Use species-specific formulations whenever possible.",
    ],

    adverseEffects: [
      "Ataxia.",
      "Mydriasis.",
      "Blindness.",
      "Tremors.",
      "Vomiting.",
      "Hypersalivation.",
      "Depression.",
      "Disorientation.",
      "Hyperesthesia (cats).",
      "Hypothermia.",
      "Injection-site swelling.",
      "Pruritus following parasite death.",
    ],

    drugInteractions: [
      "Other macrocyclic lactones may increase the risk of neurotoxicity.",
      "Drugs that inhibit P-glycoprotein (ABCB1) may increase ivermectin exposure.",
      "Concurrent CNS depressants may potentiate neurologic adverse effects.",
    ],

    monitoring: [
      "Clinical response to therapy.",
      "Neurologic status, particularly during high-dose treatment.",
      "Monitor susceptible breeds closely for signs of neurotoxicity.",
      "Monitor for hypersensitivity reactions after treatment of heavy parasite burdens.",
    ],

    withdrawalPeriod: "",

    storage: [
      "Protect from light.",
      "Store at room temperature (15–30°C) unless otherwise specified by the manufacturer.",
      "Keep containers tightly closed.",
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
      title: "American Heartworm Society Guidelines",
    },
  ],

  metadata: {
    version: "1.0.0",

    lastReviewed: "2026-07-14",

    tags: [
      "ivermectin",
      "macrocyclic lactone",
      "avermectin",
      "antiparasitic",
      "heartworm",
      "demodicosis",
      "mange",
      "nematodes",
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

export default [ivermectin];