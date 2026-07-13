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

const flunixin: Drug = {
  id: "flunixin",

  genericName: "Flunixin Meglumine",

  brandNames: [
    "Finadyne",
    "Flunixin",
    "Flumeg",
    "Megludyne",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "flunixin",
    "flunixin meglumine",
    "banamine",
    "finadyne",
    "NSAID",
    "equine colic",
    "endotoxemia",
    "cattle",
    "horse",
    "swine",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "NSAID",

    drugClass: "Non-steroidal Anti-inflammatory Drug",

    pharmacologicClass: "Cyclooxygenase Inhibitor",

    commonRoutes: [
      Route.IV,
      Route.IM,
      Route.PO,
    ],

    availableRoutes: [
      Route.IV,
      Route.IM,
      Route.PO,
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

      strength: "50 mg/mL",

      concentration: {
        value: 50,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
      ],
    },

    {
      id: "oral-paste",

      dosageForm: DosageForm.ORAL_PASTE,

      strength: "1.5%",

      concentration: {
        value: 15,
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

    indication: "Analgesia and anti-inflammatory therapy",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.5,
      maximum: 2.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    duration: "One treatment",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Analgesia and anti-inflammatory therapy",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.5,
      maximum: 2.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    duration: "One treatment",

    notes:
      "Do not administer more than once in animals that have received corticosteroids.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication: "Analgesia",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 1.1,
      maximum: 2.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 6–12 hours",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.HORSE,

    indication: "Labeled indications (injectable)",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 1.1,
      maximum: 1.1,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once daily",

    duration: "Up to 5 days",

    notes:
      "For colic cases, use the IV route; repeat dosing only when necessary.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  

  {
    species: Species.PIG,

    indication: "Pyrexia associated with swine respiratory disease",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 2.2,
      maximum: 2.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Single dose",

    duration: "One treatment",

    notes:
      "Administer only in the neck musculature; maximum 10 mL per injection site.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },
],
clinical: {
  mechanismOfAction:
    "Potent non-steroidal anti-inflammatory drug (NSAID) that inhibits cyclooxygenase (COX), decreasing prostaglandin synthesis to produce analgesic, anti-inflammatory, and antipyretic effects.",

  spectrum:
    "Not applicable. NSAID with analgesic, anti-inflammatory, antipyretic, and anti-endotoxic activity.",

  indications: [
    "Pain management",
    "Inflammation",
    "Pyrexia",
    "Equine colic",
    "Endotoxemia",
    "Musculoskeletal disorders",
    "Pyrexia associated with swine respiratory disease",
  ],

  commonUses: [
    "Visceral analgesia for equine colic",
    "Treatment of musculoskeletal pain and inflammation in horses",
    "Management of endotoxemia in horses",
    "Analgesia and anti-inflammatory therapy in cattle",
    "Control of pyrexia associated with swine respiratory disease",
    "Occasional extra-label analgesic use in dogs",
  ],

  clinicalDecisionNotes: [
    "If the initial dose fails to provide analgesia, additional doses are unlikely to improve pain control and may increase the risk of toxicity.",
    "Use cautiously in horses with colic because clinical signs of intestinal devitalization or endotoxemia may be masked.",
    "In cattle, the IV route is preferred; IM administration is extra-label.",
    "Use in small animals has largely been replaced by safer NSAIDs approved for those species.",
  ],

  clinicalPearls: [
    "Highly effective for visceral pain associated with equine colic.",
    "Provides anti-endotoxic effects in addition to analgesic and anti-inflammatory activity.",
    "Avoid concurrent use with other NSAIDs or corticosteroids.",
    "Monitor renal function and gastrointestinal health during therapy, especially with repeated dosing.",
    "Rare anaphylactic reactions have been reported in horses and cattle, particularly after rapid IV administration.",
  ],
},
reproduction: {
  pregnancy: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Use cautiously during pregnancy.",
      "No reports of teratogenicity, adverse breeding performance, or altered gestation length have been documented.",
      "Use only when the potential benefits outweigh the potential risks.",
      "Pregnancy safety in dogs and cats is classified as Class C.",
    ],
  },

  lactation: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Use cautiously in nursing animals.",
      "Safety during lactation has not been well established.",
    ],
  },

  breeding: {
    recommendation:
      ReproductionRecommendation.NOT_ESTABLISHED,

    notes: [
      "Not recommended for use in breeding bulls because reproductive safety data are lacking.",
      "Breeding safety has not been established in other species.",
    ],
  },
},

overdose: {
  signs: [
    "Gastrointestinal irritation or ulceration.",
    "Vomiting.",
    "Diarrhea.",
    "Melena.",
    "Renal dysfunction.",
    "Lethargy.",
    "Anorexia.",
  ],

  management: [
    "Discontinue flunixin immediately.",
    "Initiate gastrointestinal decontamination when appropriate following acute oral exposure.",
    "Provide supportive care including intravenous fluid therapy.",
    "Administer gastrointestinal protectants as indicated.",
    "Monitor CBC, serum biochemistry, renal parameters, and hydration status.",
  ],
},
safety: {
  contraindications: [
    "History of hypersensitivity to flunixin meglumine.",
    "Known hypersensitivity to NSAIDs.",
  ],

  precautions: [
    "Use cautiously in patients with preexisting gastrointestinal ulceration.",
    "Use cautiously in animals with renal disease.",
    "Use cautiously in animals with hepatic disease.",
    "Use cautiously in animals with hematologic disorders.",
    "In horses with colic, flunixin may mask signs of endotoxemia or intestinal devitalization.",
    "Intramuscular administration in cattle is extra-label and should only be used when IV administration is not feasible.",
    "Do not use to force or facilitate ambulation of cattle intended for slaughter.",
    "Avoid concurrent use with other NSAIDs or corticosteroids.",
    "If the first dose is ineffective for pain control, repeated dosing is unlikely to provide additional benefit and may increase toxicity.",
    "Use cautiously in pregnant animals.",
    "Generally contraindicated in cats except under specialist supervision for short-term use.",
  ],

  adverseEffects: [
    "Gastrointestinal ulceration.",
    "Vomiting.",
    "Diarrhea.",
    "Melena.",
    "Renal toxicity.",
    "Hepatotoxicity.",
    "Injection-site pain and swelling following IM administration.",
    "Localized induration and stiffness after IM injection in horses.",
    "Rare anaphylactic reactions, particularly after rapid IV administration in horses and cattle.",
  ],

  drugInteractions: [
    "Other NSAIDs.",
    "Corticosteroids.",
    "Potentially nephrotoxic drugs.",
    "Highly protein-bound drugs.",
  ],

  monitoring: [
    "Clinical response.",
    "Signs of gastrointestinal toxicity.",
    "Renal function.",
    "Hepatic function.",
    "CBC during prolonged therapy.",
    "Hydration status.",
  ],

  withdrawalPeriod: "",

  storage: [
    "Store injectable solution at controlled room temperature according to manufacturer recommendations.",
    "Protect from excessive heat and freezing.",
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
    "flunixin meglumine",
    "flunixin",
    "banamine",
    "NSAID",
    "cyclooxygenase inhibitor",
    "analgesic",
    "anti inflammatory",
    "antipyretic",
    "equine colic",
    "endotoxemia",
    "horse",
    "cattle",
    "swine",
    "dog",
  ],
},
};

export default [flunixin];