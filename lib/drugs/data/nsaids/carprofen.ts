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
const carprofen: Drug = {
  id: "carprofen",

  genericName: "Carprofen",

  brandNames: [
    "Rimadyl",
    "Carodyl",
    "Carodyl Plus",
    "Carprox",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "carprofen",
    "rimadyl",
    "carodyl",
    "carprox",
    "nsaid",
    "cox-2 inhibitor",
    "pain relief",
    "anti inflammatory",
    "analgesic",
    "postoperative pain",
    "osteoarthritis",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "NSAID",

    drugClass: "Non-steroidal Anti-inflammatory Drug",

    pharmacologicClass: "Propionic acid derivative",

    commonRoutes: [
      Route.PO,
      Route.SC,
    ],

    availableRoutes: [
      Route.PO,
      Route.SC,
    ],

    availableSpecies: [
      Species.DOG,
    ],
  },

  species: [
    Species.DOG,
  ],

  formulations: [
    {
      id: "tablet-25",

      dosageForm: DosageForm.TABLET,

      strength: "25 mg",

      concentration: {
        value: 25,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tablet-50",

      dosageForm: DosageForm.TABLET,

      strength: "50 mg",

      concentration: {
        value: 50,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tablet-75",

      dosageForm: DosageForm.TABLET,

      strength: "75 mg",

      concentration: {
        value: 75,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "tablet-100",

      dosageForm: DosageForm.TABLET,

      strength: "100 mg",

      concentration: {
        value: 100,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "injectable",

      dosageForm: DosageForm.INJECTION,

      strength: "50 mg/mL",

      concentration: {
        value: 50,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.SC,
      ],
    },
  ],
    doseReferences: [

    {
      species: Species.DOG,

      indication:
        "Anti-inflammatory and analgesic therapy",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 4.4,
        maximum: 4.4,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Once daily or divided into two doses every 12 hours",

      duration:
        "Based on clinical response",

      reference:
        "Plumb's Veterinary Drug Handbook.",
    },

    {
      species: Species.DOG,

      indication:
        "Pain and inflammation (non-surgical)",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 2.2,
        maximum: 2.2,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 12–24 hours",

      duration:
        "Based on clinical response",

      reference:
        "Plumb's Veterinary Drug Handbook.",
    },
      
    {
      species: Species.DOG,

      indication:
        "Postoperative surgical pain",

      route: Route.SC,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 4,
        maximum: 4,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Single dose",

      duration:
        "Perioperative administration",

      reference:
        "Plumb's Veterinary Drug Handbook.",
    },

  ],
    clinical: {
    mechanismOfAction:
      "Carprofen is a non-steroidal anti-inflammatory drug that produces analgesic, anti-inflammatory, and antipyretic effects primarily through inhibition of cyclooxygenase enzymes and reduction of prostaglandin synthesis. It also inhibits phospholipase A2 activity. Carprofen shows relative COX-2 preference in dogs, resulting in fewer COX-1 related adverse effects compared with older NSAIDs.",

    spectrum:
      "Not applicable (NSAID; no antimicrobial activity).",

    indications: [
      "Management of pain and inflammation associated with osteoarthritis.",
      "Control of postoperative pain and inflammation.",
      "Musculoskeletal disorders requiring analgesia and anti-inflammatory therapy.",
    ],

    commonUses: [
      "Canine osteoarthritis.",
      "Postoperative analgesia.",
      "Soft tissue inflammation and pain.",
      "Chronic orthopedic pain management.",
    ],

    clinicalDecisionNotes: [
      "Baseline evaluation with physical examination, CBC, serum chemistry profile, liver and renal function assessment is recommended before long-term therapy.",
      "Use cautiously in geriatric dogs and patients with renal, hepatic, gastrointestinal, or inflammatory bowel disease.",
      "Allow an appropriate washout period before switching to another NSAID.",
      "Discontinue therapy if signs of gastrointestinal, hepatic, renal, or hematologic toxicity develop.",
    ],

    clinicalPearls: [
      "Carprofen generally has a lower incidence of gastrointestinal adverse effects compared with older non-selective NSAIDs.",
      "Rare cases of idiosyncratic hepatotoxicity have been reported; monitor liver enzymes during prolonged therapy.",
      "Clinical signs requiring attention include vomiting, diarrhea, melena, anorexia, lethargy, jaundice, polyuria/polydipsia, behavioral changes, ataxia, or seizures.",
      "Avoid concurrent use with corticosteroids or other NSAIDs due to increased risk of adverse effects.",
    ],
  },
    reproduction: {
    pregnancy: {
      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Safety during pregnancy has not been established in dogs.",
        "Use only when the potential benefits outweigh the risks.",
        "Animal studies have shown delayed parturition and increased neonatal mortality at high experimental doses.",
      ],
    },

    lactation: {
      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Safety during lactation has not been established.",
        "Use cautiously in lactating animals and monitor offspring for adverse effects.",
      ],
    },

    breeding: {
      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "Safety in breeding dogs has not been demonstrated.",
        "Use cautiously in breeding animals.",
      ],
    },
  },

  overdose: {
    signs: [
      "Vomiting.",
      "Diarrhea.",
      "Anorexia.",
      "Gastrointestinal ulceration or bleeding.",
      "Melena.",
      "Hypoalbuminemia.",
      "Elevated liver enzymes (ALT).",
      "Renal dysfunction.",
      "Lethargy.",
    ],

    management: [
      "Discontinue carprofen administration.",
      "Provide supportive and symptomatic therapy.",
      "Consider gastrointestinal protectants when indicated.",
      "Monitor CBC, serum biochemistry, liver and renal parameters.",
      "Monitor hydration status and renal function in severe overdoses.",
    ],
  },
    safety: {
    contraindications: [
      "Dogs with known hypersensitivity to carprofen.",
      "Dogs with previous serious reactions to carprofen or other propionic-class NSAIDs.",
      "Dogs with bleeding disorders such as von Willebrand disease.",
      "Concurrent use with other NSAIDs or corticosteroids.",
    ],

    precautions: [
      "Use cautiously in geriatric patients.",
      "Use cautiously in animals with renal insufficiency.",
      "Use cautiously in animals with hepatic disease.",
      "Use cautiously in patients with inflammatory bowel disease or gastrointestinal disease.",
      "Evaluate baseline CBC, serum chemistry profile, and urinalysis before prolonged therapy.",
    ],

    adverseEffects: [
      "Vomiting.",
      "Diarrhea.",
      "Anorexia or inappetence.",
      "Gastrointestinal ulceration or bleeding.",
      "Melena.",
      "Elevated liver enzymes.",
      "Rare hepatocellular injury or hepatic failure.",
      "Renal adverse effects.",
      "Behavioral changes.",
      "Ataxia or seizures (rare).",
    ],

    drugInteractions: [
      "Avoid concurrent administration with other NSAIDs.",
      "Avoid concurrent corticosteroid therapy.",
      "Use caution with nephrotoxic drugs or medications affecting renal function.",
      "Allow an appropriate washout period before changing to another NSAID.",
    ],

    monitoring: [
      "Clinical response and pain control.",
      "Signs of gastrointestinal adverse effects.",
      "CBC during prolonged therapy.",
      "Serum chemistry profile including liver and renal parameters.",
      "Urinalysis when long-term therapy is planned.",
      "Monitor liver enzymes periodically during chronic treatment.",
    ],

    withdrawalPeriod:
      "Not applicable for companion animal use. Follow regulatory withdrawal recommendations in food-producing species if used.",

    storage: [
      "Store tablets and chewable tablets at room temperature (15–30°C).",
      "Store injectable solution refrigerated (2–8°C).",
      "Once opened, injectable solution may be stored up to 25°C for 28 days.",
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
      "carprofen",
      "NSAID",
      "cox-2 preferential",
      "analgesic",
      "anti inflammatory",
      "antipyretic",
      "osteoarthritis",
      "postoperative pain",
      "dog",
    ],
  },
};
export default [carprofen];