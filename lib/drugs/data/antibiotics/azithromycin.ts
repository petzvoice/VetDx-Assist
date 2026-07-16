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

const azithromycin: Drug = {
  id: "azithromycin",

  genericName: "Azithromycin",

  brandNames: [
    "Aziwok Vet",
    "Azivet",
    "Zithromax",
    "Azithral",
    "Azee",
    "Azax",
    "Azicip",
    "Aziwin",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "azithromycin",
    "macrolide",
    "macrolide antibiotic",
    "Zithromax",
    "Aziwok Vet",
    "Azivet",
    "Azithral",
    "Azee",
    "Azax",
    "Azicip",
    "Aziwin",

    "bacterial infection",
    "gram positive bacteria",
    "gram negative bacteria",
    "streptococcus",
    "staphylococcus",
    "bordetella",
    "mycoplasma",
    "mycoplasma pneumoniae",
    "borrelia",
    "borrelia burgdorferi",
    "lyme disease",
    "toxoplasma",
    "toxoplasmosis",
    "babesia gibsoni",
    "babesiosis",
    "skin infection",
    "dermatologic infection",
    "soft tissue infection",
    "respiratory infection",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antibiotic",

    drugClass: "Macrolide antibiotic",

    pharmacologicClass:
      "Protein synthesis inhibitor (50S ribosomal subunit)",

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
      Species.CAT,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
  ],

  formulations: [
    {
      id: "tablet",

      dosageForm: DosageForm.TABLET,

      strength: "250 mg, 500 mg, 600 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "capsule",

      dosageForm: DosageForm.CAPSULE,

      strength: "250 mg, 500 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-suspension",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength: "100 mg/5 mL, 200 mg/5 mL",

      concentration: {
        value: 20,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "injection",

      dosageForm: DosageForm.INJECTION,

      strength: "500 mg/vial",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.IV,
      ],
    },
  ],
doseReferences: [

  {
    species: Species.DOG,

    indication:
      "Dermatologic (skin) infections caused by susceptible organisms",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 24 hours",

    duration:
      "5–7 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication:
      "Continuation therapy for dermatologic infections after initial treatment",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 5 days (after initial 5–7 day course)",

    duration:
      "As clinically indicated",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication:
      "Babesia gibsoni infection (used with atovaquone)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 24 hours",

    duration:
      "10 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication:
      "Susceptible bacterial infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 24 hours",

    duration:
      "3–5 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

],
clinical: {
  mechanismOfAction:
    "Azithromycin is a bacteriostatic macrolide antibiotic that inhibits bacterial protein synthesis by penetrating the bacterial cell wall and reversibly binding to the 50S ribosomal subunit, preventing peptide chain elongation.",

  spectrum:
    "Broad-spectrum activity against many Gram-positive and Gram-negative bacteria. Active against Streptococcus pneumoniae, Staphylococcus aureus, Haemophilus influenzae, Bordetella spp., Mycoplasma pneumoniae, Borrelia burgdorferi, and Toxoplasma spp. Clinical efficacy should be confirmed by culture and susceptibility testing whenever possible.",

  indications: [
    "Susceptible bacterial infections",
    "Skin and soft tissue infections",
    "Respiratory tract infections",
    "Bordetella infections",
    "Mycoplasma infections",
    "Babesia gibsoni infection (with atovaquone)",
    "Lyme disease (Borrelia burgdorferi)",
    "Toxoplasmosis",
  ],

  commonUses: [
    "Canine skin infections",
    "Respiratory infections",
    "Bordetella infections",
    "Mycoplasma infections",
    "Babesia gibsoni therapy (combined with atovaquone)",
    "Feline bacterial infections",
  ],

  clinicalDecisionNotes: [
    "Has an exceptionally long tissue half-life allowing prolonged tissue concentrations.",
    "Produces fewer gastrointestinal adverse effects than erythromycin.",
    "Use cautiously in patients with hepatic dysfunction.",
    "Culture and susceptibility testing are recommended whenever possible.",
    "Combination therapy is recommended for Babesia gibsoni infection.",
  ],

  clinicalPearls: [
    "Excellent intracellular penetration.",
    "Long tissue persistence permits less frequent dosing in some clinical situations.",
    "May be useful when compliance with frequent dosing is difficult.",
    "Generic formulations have substantially reduced treatment cost.",
    "Monitor liver function during prolonged therapy.",
  ],
},
reproduction: {
  pregnancy: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Safety during pregnancy has not been fully established.",
      "Use only when the expected benefits outweigh potential fetal risks.",
      "Human FDA pregnancy category B.",
      "No evidence of teratogenicity has been demonstrated in animal studies, but adequate veterinary safety data are lacking.",
    ],
  },

  lactation: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Excretion into milk is expected.",
      "Use cautiously in lactating animals.",
      "Monitor nursing offspring for gastrointestinal disturbances if prolonged therapy is required.",
    ],
  },

  breeding: {
    recommendation:
      ReproductionRecommendation.NOT_ESTABLISHED,

    notes: [
      "Safety in breeding animals has not been established.",
      "Use only after veterinary risk-benefit assessment.",
    ],
  },
},
overdose: {
  signs: [
    "Vomiting",
    "Diarrhea",
    "Gastrointestinal cramping",
  ],

  management: [
    "Provide supportive and symptomatic care.",
    "Monitor hydration and electrolyte status if gastrointestinal signs are severe.",
    "There is no specific antidote.",
    "Monitor hepatic function in patients receiving large overdoses or prolonged therapy.",
  ],
},
safety: {
  contraindications: [
    "Hypersensitivity to azithromycin or other macrolide antibiotics.",
  ],

  precautions: [
    "Use cautiously in patients with hepatic dysfunction.",
    "Monitor liver function during prolonged therapy.",
    "Use culture and susceptibility testing whenever possible to minimize antimicrobial resistance.",
    "Administer with food if gastrointestinal upset occurs.",
    "Use cautiously with other potentially hepatotoxic drugs.",
  ],

  adverseEffects: [
    "Vomiting (especially at higher doses in dogs)",
    "Diarrhea",
    "Anorexia",
    "Nausea",
    "Mild gastrointestinal upset",
    "Elevated liver enzymes",
    "Hepatotoxicity (rare)",
    "Pain or local irritation at intravenous injection site",
    "Hypersensitivity reactions",
  ],

  drugInteractions: [
    "Antacids containing aluminum or magnesium may decrease oral absorption.",
    "Concurrent use with other QT-prolonging drugs may increase the risk of cardiac arrhythmias.",
    "Use cautiously with other hepatotoxic medications.",
    "Macrolides may alter the metabolism of certain drugs, although azithromycin has fewer interactions than erythromycin.",
  ],

  monitoring: [
    "Clinical response to therapy.",
    "Resolution of infection.",
    "Gastrointestinal tolerance.",
    "Liver function during prolonged treatment or in patients with hepatic disease.",
  ],

  withdrawalPeriod:
    "Follow species-specific and country-specific regulations for food-producing animals.",

  storage: [
    "Store tablets and capsules below 30°C.",
    "Store dry powder for oral suspension at 5–30°C before reconstitution.",
    "After reconstitution, the multidose oral suspension may be stored at 5–30°C for up to 10 days.",
    "Discard any remaining suspension after 10 days.",
    "Single-dose suspension packets should be administered immediately after reconstitution.",
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
    "azithromycin",
    "macrolide",
    "macrolide antibiotic",
    "protein synthesis inhibitor",
    "50S ribosomal subunit",
    "gram positive bacteria",
    "gram negative bacteria",
    "skin infection",
    "soft tissue infection",
    "respiratory infection",
    "bordetella",
    "mycoplasma",
    "borrelia",
    "lyme disease",
    "toxoplasmosis",
    "babesia gibsoni",
    "babesiosis",
    "dog",
    "cat",
  ],
},
};

export default [azithromycin];