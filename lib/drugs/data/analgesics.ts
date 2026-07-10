import {
  ConcentrationUnit,
  DosageForm,
  DoseBasis,
  DoseUnit,
  Drug,
  DrugStatus,
  PregnancyCategory,
  Route,
  Species,
} from "../types";

const meloxicam: Drug = {
  id: "meloxicam",

  genericName: "Meloxicam",

  brandNames: [
    "Metacam",
    "Melonex",
    "Meloxidyl",
    "Loxicom",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "meloxicam",
    "metacam",
    "melonex",
    "meloxidyl",
    "loxicom",
    "nsaid",
    "pain",
    "anti inflammatory",
    "anti-inflammatory",
    "osteoarthritis",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Analgesic",

    drugClass: "NSAID",

    pharmacologicClass:
      "Oxicam Non-steroidal Anti-inflammatory Drug",

   commonRoutes: [
  Route.PO,
  Route.SC,
],

availableRoutes: [
  Route.PO,
  Route.SC,
  Route.IV,
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
      id: "inj-5mgml",

      dosageForm: DosageForm.INJECTION,

      strength: "5 mg/mL",

      concentration: {
        value: 5,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.SC,
      ],
    },

    {
      id: "oral-1-5",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength: "1.5 mg/mL",

      concentration: {
        value: 1.5,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-0-5",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength: "0.5 mg/mL",

      concentration: {
        value: 0.5,
        unit: ConcentrationUnit.MG_PER_ML,
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
        "Pain and inflammation",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.1,
        maximum: 0.2,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Initial dose followed by maintenance according to approved product labeling.",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication:
        "Pain management (label-dependent)",

      route: Route.SC,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.2,
        maximum: 0.3,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Single perioperative dose according to product labeling.",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },
  ],
    clinical: {
    mechanismOfAction:
      "Meloxicam selectively inhibits cyclooxygenase enzymes, reducing prostaglandin synthesis and producing anti-inflammatory, analgesic, and antipyretic effects.",

    spectrum:
      "Anti-inflammatory and analgesic activity; not an antimicrobial agent.",

    indications: [
      "Osteoarthritis-associated pain and inflammation",
      "Musculoskeletal pain",
      "Postoperative pain management",
      "Inflammatory conditions",
    ],

    commonUses: [
      "Chronic osteoarthritis management",
      "Acute pain associated with soft tissue injury",
      "Perioperative analgesia",
      "Inflammatory joint conditions",
    ],

    clinicalDecisionNotes: [
      "Assess renal, hepatic, and gastrointestinal risk factors before NSAID therapy.",
      "Avoid concurrent use with other NSAIDs or corticosteroids unless specifically directed by a veterinarian.",
      "Use the lowest effective dose for the shortest appropriate duration.",
      "This drug reference is intended for educational and clinical support and does not replace professional veterinary judgment.",
    ],

    clinicalPearls: [
      "Meloxicam is one of the most commonly used veterinary NSAIDs.",
      "Clinical response should be monitored, especially during long-term therapy.",
      "Baseline evaluation of renal function is recommended in patients requiring prolonged NSAID administration.",
      "Gastrointestinal adverse effects may occur and should be monitored.",
      "NSAID selection should consider patient-specific risk factors and concurrent medications.",
    ],
  },


  safety: {
    contraindications: [
      "Known hypersensitivity to meloxicam or NSAIDs.",
      "Patients with active gastrointestinal ulceration or bleeding.",
      "Patients with severe renal or hepatic dysfunction unless specifically assessed.",
    ],

    precautions: [
      "Use cautiously in dehydrated, hypotensive, or critically ill patients.",
      "Evaluate kidney and liver function when clinically indicated.",
      "Avoid concurrent administration with corticosteroids or other NSAIDs.",
      "Monitor patients receiving long-term therapy.",
    ],

    adverseEffects: [
      "Vomiting",
      "Diarrhea",
      "Reduced appetite",
      "Gastrointestinal irritation",
      "Gastrointestinal ulceration or bleeding",
      "Renal adverse effects",
    ],

    drugInteractions: [
      "Concurrent NSAIDs may increase risk of adverse effects.",
      "Concurrent corticosteroids may increase gastrointestinal risk.",
      "Review nephrotoxic medications before use.",
    ],

    monitoring: [
      "Monitor appetite and gastrointestinal signs.",
      "Monitor hydration status.",
      "Monitor renal and hepatic parameters when appropriate.",
      "Evaluate pain control and clinical response.",
    ],

    pregnancy: {
      category: PregnancyCategory.USE_WITH_CAUTION,

      notes:
        "Use only after veterinary risk-benefit assessment and according to product information.",
    },

    lactation:
      "Use according to species-specific product information and veterinary assessment.",

    storage: [
      "Store according to manufacturer recommendations.",
      "Protect from excessive heat and moisture.",
    ],
  },
    references: [
    {
      title: "Plumb's Veterinary Drug Handbook",
    },
    {
      title: "Merck Veterinary Manual",
      publisher: "Merck & Co.",
    },
    {
      title: "BSAVA Small Animal Formulary",
    },
  ],


  metadata: {
    version: "1.0.0",

    lastReviewed: "2026-07-10",

    tags: [
      "meloxicam",
      "nsaid",
      "analgesic",
      "anti-inflammatory",
      "dog",
      "cat",
      "pain",
      "osteoarthritis",
    ],
  },

};



const analgesics: Drug[] = [
  meloxicam,
];


export default analgesics;