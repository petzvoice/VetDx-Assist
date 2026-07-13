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

const phenylbutazone: Drug = {
  id: "phenylbutazone",

  genericName: "Phenylbutazone",

  brandNames: [
    "Butazolidin",
    "Phenylbutazone Injection",
    "Phenylbutazone Bolus",
    "Phenylbutazone Vet",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "phenylbutazone",
    "bute",
    "butazolidin",
    "NSAID",
    "non steroidal anti inflammatory",
    "cox inhibitor",
    "analgesic",
    "anti inflammatory",
    "antipyretic",
    "horse",
    "equine",
    "dog",
    "cattle",
    "swine",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "NSAID",

    drugClass: "Non-steroidal Anti-inflammatory Drug",

    pharmacologicClass: "Cyclooxygenase (COX) inhibitor",

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
      Species.HORSE,
      Species.CATTLE,
      Species.PIG,
    ],
  },

  species: [
    Species.DOG,
    Species.HORSE,
    Species.CATTLE,
    Species.PIG,
  ],

  formulations: [
    {
      id: "injectable-solution",

      dosageForm: DosageForm.INJECTION,

      strength: "200 mg/mL",

      concentration: {
        value: 200,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
      ],
    },

    {
      id: "oral-paste",

      dosageForm: DosageForm.ORAL_PASTE,

      strength: "20% (200 mg/g)",

      concentration: {
        value: 200,
        unit: ConcentrationUnit.MG_PER_G,
      },

      routes: [
        Route.PO,
      ],
    },


    {
      id: "bolus-tablet",

      dosageForm: DosageForm.TABLET,

      strength: "1 g, 2 g",

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

    indication: "Analgesia",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 1,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8 hours",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Anti-inflammatory therapy (historical use)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 14,
      maximum: 14,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Three times daily initially",


    notes:
      "Titrate to the lowest effective dose. Use is generally discouraged because safer NSAIDs are available.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.HORSE,

    indication: "Pain and inflammation",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 4.4,
      maximum: 8.8,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 24 hours",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.HORSE,

    indication: "Pain and inflammation",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 3,
      maximum: 6,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours",


    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication: "Pain and inflammation (extra-label)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 4,
      maximum: 8,
      unit: DoseUnit.MG_PER_KG,
    },

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication: "Pain and inflammation (extra-label)",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 2,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication: "Pain and inflammation (extra-label)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 4,
      maximum: 8,
      unit: DoseUnit.MG_PER_KG,
    },

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication: "Pain and inflammation (extra-label)",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 2,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    reference: "Plumb's Veterinary Drug Handbook.",
  },
],
clinical: {
  mechanismOfAction:
    "Phenylbutazone is a non-steroidal anti-inflammatory drug (NSAID) that inhibits cyclooxygenase (COX), reducing prostaglandin synthesis. It provides analgesic, anti-inflammatory, and antipyretic effects. Additional pharmacologic effects include decreased renal blood flow, reduced glomerular filtration rate, decreased platelet aggregation, and potential gastric mucosal injury.",

  spectrum:
    "Non-selective cyclooxygenase inhibitor with analgesic, anti-inflammatory, and antipyretic activity. It has no antimicrobial activity.",

  indications: [
    "Musculoskeletal pain and inflammation in horses.",
    "Lameness associated with orthopedic conditions.",
    "Osteoarthritis.",
    "Soft tissue injuries.",
    "Pain and inflammation in dogs (historical use; largely replaced by safer NSAIDs).",
  ],

  commonUses: [
    "Equine lameness.",
    "Equine osteoarthritis.",
    "Musculoskeletal disorders in horses.",
    "Post-traumatic inflammation.",
    "Analgesia in selected veterinary patients.",
  ],

  clinicalDecisionNotes: [
    "Primarily used in horses; little reason exists to use phenylbutazone in dogs because safer NSAIDs are available.",
    "Avoid use in food-producing animals.",
    "Do not administer by IM or SC routes.",
    "Intra-articular administration may cause seizures and should be avoided.",
    "Use the lowest effective dose for the shortest possible duration.",
  ],

  clinicalPearls: [
    "One of the most commonly used NSAIDs in equine medicine.",
    "Long-term therapy increases the risk of gastrointestinal ulceration and renal toxicity.",
    "Monitor serum protein concentrations during prolonged treatment.",
    "Foals and ponies are more susceptible to adverse gastrointestinal effects.",
    "Concurrent administration with other NSAIDs or corticosteroids should be avoided.",
  ],
},
reproduction: {
  pregnancy: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Use during pregnancy only when the potential benefits outweigh the potential risks.",
      "No direct teratogenic effects have been demonstrated, but rodent studies showed reduced litter size, increased neonatal mortality, and increased stillbirth rates.",
      "Pregnancy safety in dogs and cats is classified as Class C.",
    ],
  },

  lactation: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Safety during lactation has not been established.",
      "Use cautiously in nursing animals.",
    ],
  },

  breeding: {
    recommendation:
      ReproductionRecommendation.NOT_ESTABLISHED,

    notes: [
      "Breeding safety has not been established.",
      "Use cautiously in breeding animals until additional safety data are available.",
    ],
  },
},

overdose: {
  signs: [
    "Gastrointestinal ulceration or perforation.",
    "Vomiting.",
    "Diarrhea.",
    "Melena.",
    "Renal failure.",
    "Proteinuria.",
    "Hematuria.",
    "Hepatomegaly.",
    "Jaundice.",
    "Bone marrow suppression.",
    "Metabolic or respiratory acidosis.",
    "Hyperventilation.",
    "Seizures.",
    "Coma.",
    "Hypotension.",
  ],

  management: [
    "Discontinue phenylbutazone immediately.",
    "Perform gastrointestinal decontamination when appropriate following acute oral exposure.",
    "Provide supportive care with intravenous fluids.",
    "Administer gastrointestinal protectants as indicated.",
    "Monitor CBC, serum biochemistry, liver and renal function, and urine output.",
    "Treat seizures and other complications symptomatically.",
  ],
},
safety: {
  contraindications: [
    "Hypersensitivity to phenylbutazone or other NSAIDs.",
    "Preexisting hematologic or bone marrow abnormalities.",
    "Preexisting gastrointestinal ulceration.",
    "Food-producing animals.",
    "Lactating dairy cattle.",
  ],

  precautions: [
    "Use cautiously in foals and ponies due to increased risk of hypoproteinemia and gastrointestinal ulceration.",
    "Use cautiously in patients with renal disease, congestive heart failure, or dehydration.",
    "Foals with heavy parasite burdens or poor nutritional status may be more susceptible to toxicity.",
    "Avoid concurrent administration with other NSAIDs or corticosteroids.",
    "Do not administer by IM or SC routes.",
    "Avoid intra-articular administration because seizures have been reported.",
  ],

  adverseEffects: [
    "Oral and gastrointestinal erosions and ulceration.",
    "Hypoalbuminemia.",
    "Diarrhea.",
    "Anorexia.",
    "Azotemia.",
    "Renal papillary necrosis.",
    "Sodium and water retention.",
    "Reduced renal blood flow.",
    "Blood dyscrasias.",
  ],

  drugInteractions: [
    "Other NSAIDs.",
    "Corticosteroids.",
    "Highly protein-bound drugs (may alter protein binding).",
    "Potential interactions with drugs affecting renal perfusion.",
  ],

  monitoring: [
    "Clinical response.",
    "Signs of gastrointestinal ulceration or bleeding.",
    "CBC during prolonged therapy.",
    "Serum biochemistry including renal and hepatic parameters.",
    "Serum total protein and albumin during long-term treatment.",
    "Hydration status.",
  ],

  withdrawalPeriod: "",

  storage: [
    "Store oral products in tightly closed, child-resistant containers.",
    "Store injectable solution refrigerated or in a cool place (approximately 8–13°C; 46–56°F).",
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
    "phenylbutazone",
    "bute",
    "NSAID",
    "cyclooxygenase inhibitor",
    "analgesic",
    "anti inflammatory",
    "antipyretic",
    "horse",
    "equine",
    "lameness",
    "osteoarthritis",
    "dog",
    "cattle",
    "swine",
  ],
},
};

export default [phenylbutazone];