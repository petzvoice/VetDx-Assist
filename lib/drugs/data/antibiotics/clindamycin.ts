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
const clindamycin: Drug = {
  id: "clindamycin",

  genericName: "Clindamycin",

  brandNames: [
    "Antirobe",
    "Bioclan",
    "Clintabs",
    "Clindacure",
    "Clindavet",
    "ClinDrops",
    "Dalacin C",
    "Cleocin",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    // Generic names
    "clindamycin",
    "clindamycin hydrochloride",
    "clindamycin hcl",
    "clindamycin palmitate",
    "clindamycin palmitate hcl",
    "clindamycin phosphate",

    // Brand names
    "Antirobe",
    "Bioclan",
    "Clintabs",
    "Clindacure",
    "Clindavet",
    "ClinDrops",
    "Dalacin C",
    "Cleocin",

    // Drug class
    "lincosamide",
    "lincosamide antibiotic",

    // Organisms
    "Staphylococcus",
    "Streptococcus",
    "gram positive cocci",
    "anaerobes",
    "Bacteroides",
    "Fusobacterium",
    "Peptostreptococcus",
    "Peptococcus",
    "Clostridium",
    "Toxoplasma gondii",

    // Diseases / indications
    "bacterial infection",
    "skin infection",
    "soft tissue infection",
    "wound infection",
    "abscess",
    "dental infection",
    "osteomyelitis",
    "toxoplasmosis",
    "neosporosis",
    "Hepatozoon canis",
    "hepatozoonosis",
    "babesiosis",
    "Babesia",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antibiotic",

    drugClass: "Lincosamide antibiotic",

    pharmacologicClass:
      "Protein synthesis inhibitor (50S ribosomal subunit)",

    commonRoutes: [
      Route.PO,
      Route.IM,
    ],

    availableRoutes: [
      Route.PO,
      Route.IM,
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
      id: "capsule",

      dosageForm: DosageForm.CAPSULE,

      strength: "25 mg, 75 mg, 150 mg, 300 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },
tabletStrengths: [
    25,
    75,
    150,
    300,
  ],
      routes: [
        Route.PO,
      ],
    },

    {
      id: "tablet",

      dosageForm: DosageForm.TABLET,

      strength: "25 mg, 75 mg, 150 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },
tabletStrengths: [
    25,
    75,
    150,
    300,
  ],
      routes: [
        Route.PO,
      ],
    },

    {
    id: "oral_solution_25",
    dosageForm: DosageForm.ORAL_SOLUTION,

    strength: "25 mg/mL",

    concentration: {
      value: 25,
      unit: ConcentrationUnit.MG_PER_ML,
    },

    routes: [
      Route.PO
    ]
  },

  {
    id: "oral_solution_75_5ml",
    dosageForm: DosageForm.ORAL_SOLUTION,

    strength: "75 mg/5 mL",

    concentration: {
      value: 15,
      unit: ConcentrationUnit.MG_PER_ML,
    },

    routes: [
      Route.PO
    ]
  },
  
    {
      id: "injectable-solution",

      dosageForm: DosageForm.INJECTION,

      strength: "150 mg/mL",

      concentration: {
        value: 150,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IM,
        Route.IV,
      ],
    },
  ],
  doseReferences: [

  {
    species: Species.DOG,

    indication:
      "Infected wounds, abscesses, and dental infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5.5,
      maximum: 33,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    duration:
      "Up to 28 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Osteomyelitis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 11,
      maximum: 33,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    duration:
      "Up to 28 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Toxoplasmosis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 12.5,
      maximum: 12.5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    duration:
      "28 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },



  {
    species: Species.DOG,

    indication:
      "Neosporosis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    duration:
      "4 weeks",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Hepatozoon canis infection",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 8 hours",

    duration:
      "2–4 weeks",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Babesia spp. infection",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 12.5,
      maximum: 12.5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    duration:
      "2 weeks",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Babesia infection (when specific antibabesial drugs are unavailable)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    duration:
      "7–21 days",

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
      "Every 12 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CAT,

    indication:
      "Infected wounds, abscesses, and dental infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 11,
      maximum: 33,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 24 hours",

    duration:
      "Up to 14 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CAT,

    indication:
      "Toxoplasmosis (reduce oocyst shedding)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 50,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Once daily",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

],
clinical: {
  mechanismOfAction:
    "Clindamycin is a lincosamide antibiotic that inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit of susceptible bacteria, thereby inhibiting peptide bond formation. Depending on drug concentration at the site of infection and organism susceptibility, it may exhibit bacteriostatic or bactericidal activity.",

  spectrum:
    "Active against many anaerobic bacteria, gram-positive aerobic cocci, and Toxoplasma gondii. Lincomycin and clindamycin exhibit complete cross-resistance with each other, and partial cross-resistance may occur with macrolides such as erythromycin.",

  indications: [
    "Susceptible bacterial infections",
    "Skin and soft tissue infections",
    "Wound infections",
    "Abscesses",
    "Dental infections",
    "Osteomyelitis",
    "Toxoplasmosis",
    "Neosporosis",
    "Hepatozoonosis",
    "Babesiosis (adjunctive therapy)",
  ],

  commonUses: [
    "Infected wounds",
    "Abscesses",
    "Dental infections",
    "Osteomyelitis",
    "Canine toxoplasmosis",
    "Feline toxoplasmosis",
    "Neospora caninum infection",
    "Hepatozoon canis infection",
    "Babesia infections when specific antibabesial drugs are unavailable",
  ],

  clinicalDecisionNotes: [
    "Contraindicated in horses, rabbits, guinea pigs, hamsters, chinchillas, and ruminants because severe gastrointestinal toxicity may occur.",
    "Use cautiously in patients with severe hepatic or renal dysfunction; dosage reduction may be required.",
    "Avoid routine use in neonatal small animals.",
    "Cats should not receive dry capsules or tablets without food or water because esophageal injury may occur.",
    "Monitor liver function, kidney function, and complete blood count during therapy exceeding 30 days.",
  ],

  clinicalPearls: [
    "Effective against many anaerobic bacteria and gram-positive cocci.",
    "Commonly selected for dental infections, abscesses, and osteomyelitis.",
    "Administer oral tablets or capsules to cats with food or a water bolus to reduce the risk of esophagitis and esophageal stricture.",
    "Intramuscular administration may be painful.",
    "If no clinical improvement is observed after 3–4 days for acute infections, reassess therapy.",
  ],
},
reproduction: {
  pregnancy: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Clindamycin crosses the placenta.",
      "Cord blood concentrations are approximately 46% of maternal serum concentrations.",
      "Safe use during pregnancy has not been established.",
      "No teratogenic effects have been documented.",
      "Use only when the potential benefits outweigh the potential risks.",
      "In canine and feline pregnancy safety evaluations, clindamycin is classified as Class A (probably safe).",
    ],
  },

  lactation: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Clindamycin is excreted into maternal milk.",
      "Use cautiously in nursing animals.",
      "Monitor nursing offspring for gastrointestinal disturbances.",
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
    "Anorexia",
    "Vomiting",
    "Weight loss",
    "Gastrointestinal disturbances",
  ],

  management: [
    "Provide supportive and symptomatic care.",
    "Monitor hydration and electrolyte status if gastrointestinal signs are severe.",
    "Discontinue clindamycin if significant adverse effects develop.",
    "There is no specific antidote.",
  ],
},
safety: {
  contraindications: [
    "Hypersensitivity to clindamycin or lincomycin.",
    "Contraindicated in horses, rabbits, guinea pigs, hamsters, chinchillas, and ruminants because severe gastrointestinal effects, including death, may occur.",
  ],

  precautions: [
    "Use cautiously in patients with severe hepatic dysfunction.",
    "Use cautiously in patients with severe renal dysfunction.",
    "Consider dosage reduction in patients with severe hepatic or renal disease.",
    "Avoid routine use in neonatal small animals.",
    "Administer oral tablets or capsules to cats with food or a water bolus to reduce the risk of esophageal injury.",
  ],

  adverseEffects: [
    "Vomiting",
    "Loose stools",
    "Bloody diarrhea (uncommon in dogs)",
    "Gastroenteritis",
    "Esophagitis in cats",
    "Esophageal stricture in cats",
    "Hypersalivation in cats",
    "Lip smacking in cats",
    "Pain at intramuscular injection site",
  ],

  drugInteractions: [
    "Complete cross-resistance occurs with lincomycin.",
    "Partial cross-resistance may occur with erythromycin and other macrolides.",
  ],

  monitoring: [
    "Clinical efficacy.",
    "Adverse effects, particularly severe diarrhea.",
    "Liver function during prolonged therapy.",
    "Kidney function during prolonged therapy.",
    "Complete blood count if therapy exceeds 30 days.",
  ],

  withdrawalPeriod:
    "Not established.",

  storage: [
    "Store capsules and palmitate powder for oral solution at 15–30°C.",
    "Do not refrigerate reconstituted human palmitate oral solution as thickening may occur.",
    "Reconstituted human oral solution is stable for 2 weeks at room temperature.",
    "Veterinary oral solution should be stored at room temperature according to manufacturer recommendations.",
    "Store clindamycin phosphate injection at room temperature.",
    "If crystals form after refrigeration or freezing, warm until they redissolve before use.",
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
    "clindamycin",
    "lincosamide",
    "antibiotic",
    "anaerobic bacteria",
    "gram positive bacteria",
    "staphylococcal infection",
    "streptococcal infection",
    "dental infection",
    "osteomyelitis",
    "skin infection",
    "soft tissue infection",
    "abscess",
    "toxoplasmosis",
    "babesiosis",
    "neosporosis",
    "hepatozoonosis",
    "dog",
    "cat",
  ],
},
};

export default [clindamycin];