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

const doramectin: Drug = {
  id: "doramectin",

  genericName: "Doramectin",

  brandNames: [
    "Dectomax",
    "Doramax",
    "Doramec",
    "Doravet",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "doramectin",
    "dectomax",
    "macrocyclic lactone",
    "avermectin",
    "endectocide",
    "antiparasitic",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antiparasitic",

    drugClass: "Macrocyclic Lactone",

    pharmacologicClass: "Avermectin Anthelmintic",

    commonRoutes: [
      Route.SC,
      Route.TOPICAL,
    ],

    availableRoutes: [
      Route.SC,
      Route.IM,
      Route.TOPICAL,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.CATTLE,
      Species.PIG,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.CATTLE,
    Species.PIG,
  ],

  formulations: [
    {
      id: "injectable-solution",

      dosageForm: DosageForm.INJECTION,

      strength: "1%",

      concentration: {
        value: 10,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.SC,
        Route.IM,
      ],
    },

    {
      id: "pour-on-solution",

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
  ],

    doseReferences: [
  {
    species: Species.CATTLE,

    indication:
      "Susceptible gastrointestinal nematodes, lungworms, lice, mange mites, grubs, and eyeworms",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    notes:
      "Administer subcutaneously under the loose skin in front of or behind the shoulder. Subcutaneous administration is preferred over intramuscular injection.",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication:
      "Susceptible gastrointestinal nematodes, lungworms, lice, mange mites, and grubs (pour-on formulation)",

    route: Route.TOPICAL,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.5,
      maximum: 0.5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    notes:
      "Apply along the dorsal midline from the withers to the tailhead.",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication:
      "Susceptible gastrointestinal nematodes, lungworms, sucking lice, and mange mites",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.3,
      maximum: 0.3,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    notes:
      "Inject intramuscularly into the neck according to product labeling.",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication:
      "Generalized demodicosis (extra-label)",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.6,
      maximum: 0.6,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once weekly",

    duration:
      "Continue treatment for at least 4 weeks after skin scrapings become negative.",

    notes:
      "Extra-label use. Avoid in MDR1 mutation-susceptible breeds unless genetic testing confirms normal MDR1 status.",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication:
      "Feline demodicosis (Demodex cati, Demodex gatoi) (extra-label)",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.6,
      maximum: 0.6,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once weekly",

    notes:
      "Extra-label use. Obtain informed owner consent before treatment.",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },
],
    clinical: {
    mechanismOfAction:
      "Doramectin is a macrocyclic lactone (avermectin) that binds to glutamate-gated chloride channels in susceptible parasites, increasing chloride ion permeability and causing neuromuscular paralysis and death. It also enhances GABA-mediated neurotransmission in parasites.",

    spectrum:
      "Broad-spectrum endectocide active against gastrointestinal nematodes, lungworms, lice, mange mites, grubs, eyeworms, and other susceptible arthropods. Ineffective against cestodes and trematodes.",

    indications: [
      "Treatment and control of gastrointestinal nematodes.",
      "Lungworm infections.",
      "Lice infestations.",
      "Mange mite infestations.",
      "Cattle grubs.",
      "Eyeworm infections.",
      "Generalized demodicosis in dogs (extra-label).",
      "Feline demodicosis (extra-label).",
    ],

    commonUses: [
      "Routine parasite control in cattle.",
      "Internal and external parasite control in swine.",
      "Treatment of generalized demodicosis in dogs.",
      "Treatment of feline demodicosis.",
    ],

    clinicalDecisionNotes: [
      "Approved primarily for cattle and swine.",
      "Use in dogs and cats is extra-label.",
      "Avoid high-dose use in MDR1 mutation-susceptible dog breeds unless benefits outweigh risks.",
      "Not effective against tapeworms or liver flukes.",
      "Manufacturer advises against use in species not included on the label.",
    ],

    clinicalPearls: [
      "Doramectin has a longer duration of activity than ivermectin in many livestock species.",
      "Subcutaneous administration is preferred over intramuscular injection in cattle.",
      "Injection-site reactions are uncommon but may occur.",
      "Extra-label treatment of canine demodicosis should continue for at least four weeks after negative skin scrapings.",
    ],
  },
    reproduction: {
    pregnancy: {
      recommendation:
        ReproductionRecommendation.SAFE,

      notes: [
        "Studies in breeding cattle at up to three times the recommended dose showed no adverse effects on pregnancy or fetal development.",
        "Use during pregnancy according to approved labeling and species-specific recommendations.",
      ],
    },

    lactation: {
      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Not labeled for use in female dairy cattle 20 months of age or older.",
        "Use during lactation according to product labeling and food animal regulations.",
      ],
    },

    breeding: {
      recommendation:
        ReproductionRecommendation.SAFE,

      notes: [
        "No adverse effects on breeding performance have been demonstrated in breeding cattle at recommended doses.",
      ],
    },
  },

  overdose: {
    signs: [
      "Ataxia.",
      "Mydriasis.",
      "Blindness.",
      "Lethargy.",
      "Depression.",
      "Coma.",
      "Injection-site reactions.",
      "Neurologic toxicity, particularly in MDR1 mutation-susceptible dogs.",
    ],

    management: [
      "Discontinue treatment immediately.",
      "Provide supportive care including intravenous fluids and nursing care.",
      "Monitor neurologic and respiratory function.",
      "Control seizures if present.",
      "There is no specific antidote.",
    ],
  },
    safety: {
    contraindications: [
      "Hypersensitivity to doramectin or other avermectins.",
      "Avoid extra-label use in MDR1 mutation-positive dogs due to increased risk of neurotoxicity.",
      "Do not use in female dairy cattle 20 months of age or older.",
    ],

    precautions: [
      "Use caution in Collies, Australian Shepherds, Shetland Sheepdogs, Long-haired Whippets, and other MDR1 mutation-susceptible breeds.",
      "Manufacturer advises against use in species not included on the product label.",
      "Subcutaneous administration is preferred over intramuscular injection in cattle.",
      "Intramuscular injection may increase injection-site blemishes.",
    ],

    adverseEffects: [
      "Injection-site swelling.",
      "Injection-site pain.",
      "Mydriasis.",
      "Lethargy.",
      "Blindness.",
      "Ataxia.",
      "Coma (high doses).",
      "Neurologic toxicity in susceptible dogs.",
    ],

    drugInteractions: [
      "Other macrocyclic lactones may increase the risk of neurotoxicity.",
      "Drugs that inhibit P-glycoprotein (ABCB1) may increase doramectin exposure.",
      "Concurrent CNS depressants may potentiate neurologic adverse effects.",
    ],

    monitoring: [
      "Clinical response to treatment.",
      "Neurologic status during extra-label use in dogs and cats.",
      "Monitor injection sites following administration.",
      "Observe susceptible breeds closely for signs of neurotoxicity.",
    ],

    withdrawalPeriod: "",

    storage: [
      "Store injectable solution below 30°C.",
      "Store pour-on solution below 30°C and protect from light.",
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
      title: "Dectomax® Package Insert",
    },
  ],

  metadata: {
    version: "1.0.0",

    lastReviewed: "2026-07-14",

    tags: [
      "doramectin",
      "dectomax",
      "macrocyclic lactone",
      "avermectin",
      "endectocide",
      "antiparasitic",
      "demodicosis",
      "cattle",
      "pig",
      "dog",
      "cat",
    ],
  },
};

export default [doramectin];