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

const firocoxib: Drug = {
  id: "firocoxib",

  genericName: "Firocoxib",

  brandNames: [
    "Previcox",
    "Firodyl",
    "Firocox",
    "Firovet",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "firocoxib",
    "previcox",
    "equioxx",
    "cox-2 inhibitor",
    "nsaid",
    "osteoarthritis",
    "dog",
    "horse",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "NSAID",

    drugClass: "Selective COX-2 Inhibitor",

    pharmacologicClass: "Coxib",

    commonRoutes: [
      Route.PO,
    ],

    availableRoutes: [
      Route.PO,
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
      id: "chewable-tablet",

      dosageForm: DosageForm.CHEWABLE_TABLET,

      strength: "57 mg, 227 mg",

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

      strength: "0.82%",

      concentration: {
        value: 8.2,
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
        "Control of pain and inflammation associated with osteoarthritis",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 5,
        maximum: 5,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Once daily",

      duration:
        "According to clinical response",

      reference:
        "Plumb's Veterinary Drug Handbook.",
    },

  ],
    clinical: {
    mechanismOfAction:
      "Firocoxib is a selective cyclooxygenase-2 (COX-2) inhibitor that reduces prostaglandin synthesis responsible for pain, inflammation, and fever while largely sparing COX-1 activity at therapeutic doses.",

    spectrum:
      "Not applicable (NSAID; no antimicrobial activity).",

    indications: [
      "Control of pain and inflammation associated with osteoarthritis in dogs.",
      "Control of pain and inflammation associated with osteoarthritis in horses.",
      "Management of postoperative pain and inflammation.",
      "Treatment of musculoskeletal pain and inflammatory conditions.",
    ],

    commonUses: [
      "Canine osteoarthritis.",
      "Equine osteoarthritis.",
      "Postoperative analgesia.",
      "Orthopedic and soft tissue pain.",
      "Management of inflammatory conditions requiring NSAID therapy.",
    ],

    clinicalDecisionNotes: [
      "Use cautiously in patients with renal, hepatic, cardiovascular disease, dehydration, hypovolemia, hypotension, or those receiving diuretics.",
      "Avoid use in animals with active gastrointestinal ulceration or bleeding disorders.",
      "Geriatric patients require closer monitoring during prolonged therapy.",
      "Use the lowest effective dose for the shortest duration necessary.",
    ],

    clinicalPearls: [
      "Selective COX-2 inhibition generally provides good analgesia with fewer COX-1 related gastrointestinal adverse effects than non-selective NSAIDs.",
      "Approved for osteoarthritis in both dogs and horses.",
      "May also be useful for postoperative pain and other inflammatory conditions when clinically appropriate.",
      "Do not administer concurrently with other NSAIDs or corticosteroids.",
    ],
  },
    reproduction: {
    pregnancy: {
      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Safety in pregnant dogs and horses has not been established.",
        "Use only when the potential benefits outweigh the potential risks.",
        "Experimental studies in rabbits demonstrated maternal and fetal toxicity.",
      ],
    },

    lactation: {
      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Safety during lactation has not been established in dogs or horses.",
        "Use cautiously in nursing animals.",
      ],
    },

    breeding: {
      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "Safety in breeding animals has not been established.",
      ],
    },
  },

  overdose: {
    signs: [
      "Vomiting.",
      "Diarrhea.",
      "Anorexia.",
      "Lethargy.",
      "Gastrointestinal ulceration.",
      "Melena.",
      "Renal dysfunction.",
      "Potential hepatotoxicity.",
    ],

    management: [
      "Discontinue firocoxib immediately.",
      "Initiate gastrointestinal decontamination when appropriate after acute ingestion.",
      "Provide supportive care including intravenous fluids.",
      "Administer gastrointestinal protectants such as sucralfate when indicated.",
      "Monitor renal function, liver enzymes, CBC, and hydration status.",
      "Consult an animal poison control center for significant overdoses.",
    ],
  },
    safety: {
    contraindications: [
      "Hypersensitivity to firocoxib or other NSAIDs.",
      "Active gastrointestinal ulceration or gastrointestinal bleeding.",
      "Bleeding disorders or thrombocytopenia.",
      "Concurrent administration with other NSAIDs or corticosteroids.",
    ],

    precautions: [
      "Use cautiously in patients with renal dysfunction.",
      "Use cautiously in patients with hepatic disease.",
      "Use cautiously in patients with cardiovascular disease.",
      "Use cautiously in dehydrated, hypovolemic, or hypotensive animals.",
      "Use cautiously in animals receiving diuretic therapy.",
      "Geriatric patients require enhanced monitoring during long-term therapy.",
    ],

    adverseEffects: [
      "Vomiting.",
      "Decreased appetite or anorexia.",
      "Diarrhea.",
      "Gastrointestinal ulceration or bleeding.",
      "Renal adverse effects.",
      "Hepatic adverse effects.",
      "Mouth ulcers (horses).",
      "Facial skin lesions (horses).",
      "Excitation (rare in horses).",
    ],

    drugInteractions: [
      "Avoid concurrent use with other NSAIDs.",
      "Avoid concurrent corticosteroid therapy.",
      "Use caution with nephrotoxic medications.",
      "Use caution with diuretics because of increased renal risk.",
      "Monitor carefully when administered with highly protein-bound drugs.",
    ],

    monitoring: [
      "Clinical response and pain control.",
      "Signs of gastrointestinal toxicity.",
      "CBC during prolonged therapy.",
      "Serum biochemistry including renal and hepatic parameters.",
      "Hydration status.",
      "Periodic reassessment during long-term treatment, especially in geriatric patients.",
    ],

    withdrawalPeriod:
      "Follow country-specific regulatory withdrawal recommendations when used in food-producing species.",

    storage: [
      "Store tablets and oral paste at room temperature (15–30°C).",
      "Brief temperature excursions up to 40°C are permitted.",
      "Protect from excessive heat and moisture.",
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
      "firocoxib",
      "previcox",
      "equioxx",
      "NSAID",
      "cox-2 inhibitor",
      "coxib",
      "analgesic",
      "anti inflammatory",
      "antipyretic",
      "osteoarthritis",
      "postoperative pain",
      "dog",
      "horse",
    ],
  },
};

export default [firocoxib];