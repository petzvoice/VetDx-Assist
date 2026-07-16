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
const ceftiofur: Drug = {
  id: "ceftiofur",

  genericName: "Ceftiofur",
brandNames: [
  "Excenel RTU",
  "Excede",
  "Naxcel",
  "Spectramast LC",
  "Spectramast DC",
  "Cefenil",
  "Cefticure",
],

status: DrugStatus.ACTIVE,

searchTerms: [
  "ceftiofur",
  "ceftiofur hydrochloride",
  "ceftiofur sodium",
  "ceftiofur crystalline free acid",
  "Excenel RTU",
  "Excede",
  "Naxcel",
  "Spectramast LC",
  "Spectramast DC",
  "Cefenil",
  "Cefticure",

  "third generation cephalosporin",
  "3rd generation cephalosporin",
  "cephalosporin antibiotic",
  "beta lactam antibiotic",

  "bacterial infection",
  "gram positive bacteria",
  "gram negative bacteria",

  "bovine respiratory disease",
  "shipping fever",
  "mastitis",
  "metritis",
  "foot rot",
  "interdigital necrobacillosis",
  "swine respiratory disease",
  "respiratory infection",

  "Escherichia coli",
  "E coli",
  "Pasteurella multocida",
  "Mannheimia haemolytica",
  "Histophilus somni",
  "Actinobacillus pleuropneumoniae",
  "Fusobacterium necrophorum",
  "Trueperella pyogenes",
  "Streptococcus",
  "Staphylococcus",

  "cattle",
  "bovine",
  "cow",
  "calf",
  "dairy cattle",
  "beef cattle",
  "swine",
  "pig",
],

quickFacts: {
  prescriptionRequired: true,

  controlledDrug: false,

  category: "Antibiotics",

  drugClass: "Third-generation cephalosporin",

  pharmacologicClass:
    "Beta-lactam antibiotic; bacterial cell wall synthesis inhibitor",

  commonRoutes: [
    Route.IM,
    Route.SC,
    Route.INTRAMAMMARY,
  ],

  availableRoutes: [
    Route.IM,
    Route.SC,
    Route.INTRAMAMMARY,
  ],

 availableSpecies: [
  Species.DOG,
  Species.CAT,
  Species.CATTLE,
  Species.SHEEP,
  Species.GOAT,
  Species.PIG,
],
},

species: [
  Species.DOG,
  Species.CAT,
  Species.CATTLE,
  Species.SHEEP,
  Species.GOAT,
  Species.PIG,
],

formulations: [
  {
    id: "injectable-suspension-50",

    dosageForm: DosageForm.INJECTION,

    strength: "50 mg/mL (Ceftiofur hydrochloride)",

    concentration: {
      value: 50,
      unit: ConcentrationUnit.MG_PER_ML,
    },

    routes: [
      Route.IM,
      Route.SC,
    ],
  },

  {
    id: "injectable-suspension-100",

    dosageForm: DosageForm.INJECTION,

    strength: "100 mg/mL (Ceftiofur crystalline free acid)",

    concentration: {
      value: 100,
      unit: ConcentrationUnit.MG_PER_ML,
    },

    routes: [
      Route.IM,
      Route.SC,
    ],
  },

  {
    id: "powder-1g",

    dosageForm: DosageForm.INJECTION,

    strength: "1 g/vial",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [
      Route.IM,
      Route.SC,
    ],
  },

  {
    id: "powder-4g",

    dosageForm: DosageForm.INJECTION,

    strength: "4 g/vial",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [
      Route.IM,
      Route.SC,
    ],
  },

  {
    id: "intramammary-125",

    dosageForm: DosageForm.INTRAMAMMARY_INFUSION,

    strength: "125 mg/syringe",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [
      Route.INTRAMAMMARY,
    ],
  },

  {
    id: "intramammary-500",

    dosageForm: DosageForm.INTRAMAMMARY_INFUSION,

    strength: "500 mg/syringe",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [
      Route.INTRAMAMMARY,
    ],
  },
],
doseReferences: [

  {
    species: Species.CATTLE,

    indication:
      "Susceptible bacterial infections (Ceftiofur crystalline free acid)",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 6.6,
      maximum: 6.6,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Single dose",

    duration:
      "One treatment",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication:
      "Bovine respiratory disease",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 6.6,
      maximum: 6.6,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Single dose",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication:
      "Acute bovine interdigital necrobacillosis (foot rot)",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 6.6,
      maximum: 6.6,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Single dose",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication:
      "Acute postpartum metritis associated with susceptible bacteria",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 6.6,
      maximum: 6.6,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Single dose",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication:
      "Susceptible bacterial infections",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Single dose",

    duration:
      "One treatment",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication:
      "Swine respiratory disease",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Single dose",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },
  {
    species: Species.CATTLE,

    indication:
      "Susceptible bacterial infections (Ceftiofur sodium)",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 1.1,
      maximum: 2.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 24 hours",

    duration:
      "3 consecutive days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.SHEEP,

    indication:
      "Susceptible bacterial infections (Ceftiofur sodium)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 1.1,
      maximum: 2.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 24 hours",

    duration:
      "3 consecutive days (may extend to 5 days if needed)",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.GOAT,

    indication:
      "Susceptible bacterial infections (Ceftiofur sodium)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 1.1,
      maximum: 2.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 24 hours",

    duration:
      "3 consecutive days (may extend to 5 days if needed)",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication:
      "Urinary tract infection (Ceftiofur sodium)",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 2.2,
      maximum: 2.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 24 hours",

    duration:
      "5–14 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication:
      "Urinary tract infection (Ceftiofur sodium)",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 2.2,
      maximum: 2.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 24 hours",

    duration:
      "5–14 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


],
clinical: {
  mechanismOfAction:
    "Ceftiofur is a third-generation cephalosporin that inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs), resulting in bacterial cell lysis. It is a bactericidal, time-dependent beta-lactam antimicrobial.",

  spectrum:
    "Broad-spectrum activity against many Gram-positive and Gram-negative bacteria. Effective against organisms including Mannheimia haemolytica, Pasteurella multocida, Histophilus somni, Actinobacillus pleuropneumoniae, Fusobacterium necrophorum, Trueperella pyogenes, Escherichia coli, Streptococcus spp., and susceptible Staphylococcus spp. Activity against Pseudomonas spp., Enterococcus spp., and methicillin-resistant staphylococci is limited or absent.",

  indications: [
    "Bovine respiratory disease",
    "Swine respiratory disease",
    "Acute bovine interdigital necrobacillosis (foot rot)",
    "Acute postpartum metritis",
    "Mastitis",
    "Susceptible bacterial infections",
  ],

  commonUses: [
    "Bovine respiratory disease",
    "Swine respiratory disease",
    "Foot rot in cattle",
    "Postpartum metritis",
    "Clinical mastitis",
    "Dry cow therapy",
  ],

  clinicalDecisionNotes: [
    "A veterinary-only third-generation cephalosporin.",
    "Bactericidal activity is time-dependent.",
    "Use according to antimicrobial stewardship principles and approved label directions.",
    "Culture and susceptibility testing are recommended whenever feasible.",
    "Excede® is administered as a single long-acting injection.",
  ],

  clinicalPearls: [
    "Shake injectable suspensions thoroughly before administration.",
    "Administer Excede® subcutaneously at the base/posterior aspect of the ear in cattle according to label directions.",
    "Administer Excede® intramuscularly in the post-auricular region of the neck in swine.",
    "Observe appropriate meat and milk withdrawal periods for food-producing animals.",
    "Monitor treatment response and injection sites after administration.",
  ],
},
reproduction: {
  pregnancy: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Specific reproductive safety studies in veterinary species are limited.",
      "Use only when the potential benefits outweigh potential risks.",
      "Cephalosporins have generally demonstrated a wide margin of safety during pregnancy.",
    ],
  },

  lactation: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Use cautiously in lactating animals.",
      "Follow product-specific milk withdrawal periods for dairy cattle.",
      "Monitor nursing offspring if prolonged therapy is required.",
    ],
  },

  breeding: {
    recommendation:
      ReproductionRecommendation.NOT_ESTABLISHED,

    notes: [
      "Safety in breeding animals has not been fully established.",
      "Use after veterinary risk-benefit assessment.",
    ],
  },
},
overdose: {
  signs: [
    "Gastrointestinal upset",
    "Diarrhea",
    "Vomiting",
    "Hypersensitivity reactions",
  ],

  management: [
    "Cephalosporin overdoses are unlikely to cause significant toxicity other than gastrointestinal signs.",
    "Provide supportive and symptomatic care.",
    "Monitor hydration and electrolyte balance if gastrointestinal signs are severe.",
    "Discontinue therapy if hypersensitivity reactions occur and institute appropriate treatment.",
    "There is no specific antidote.",
  ],
},
safety: {
  contraindications: [
    "Known hypersensitivity to ceftiofur, cephalosporins, or other beta-lactam antibiotics.",
  ],

  precautions: [
    "Use cautiously in patients with documented hypersensitivity to penicillins or other beta-lactam antimicrobials because cross-reactivity may occur.",
    "Use antimicrobials responsibly to minimize the development of antimicrobial resistance.",
    "Topical exposure may cause allergic reactions in sensitized individuals; avoid accidental self-injection or skin contact.",
    "Administer according to labeled route and injection site recommendations.",
    "Shake the sterile suspension thoroughly before use.",
  ],

  adverseEffects: [
    "Injection site swelling",
    "Injection site pain",
    "Hypersensitivity reactions",
    "Diarrhea",
    "Granulocytopenia (rare)",
    "Thrombocytopenia (rare)",
  ],

  drugInteractions: [
    "No clinically significant drug interactions have been well established.",
    "Concurrent administration with bacteriostatic antimicrobials may theoretically reduce bactericidal activity.",
  ],

  monitoring: [
    "Clinical response to therapy.",
    "Resolution of infection.",
    "Injection site reactions.",
    "Monitor for hypersensitivity reactions.",
  ],

  withdrawalPeriod:
    "Follow product-specific and country-specific meat and milk withdrawal periods for food-producing animals.",

  storage: [
    "Store at controlled room temperature (20–25°C).",
    "Shake well before each use.",
    "Use contents within 12 weeks after the first dose is withdrawn.",
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
      "ceftiofur",
      "cephalosporin",
      "third generation cephalosporin",
      "beta-lactam",
      "antibiotic",
      "cattle",
      "swine",
      "bovine respiratory disease",
      "foot rot",
      "metritis",
      "mastitis",
      "bacterial infection",
      "injectable",
      "intramammary",
      "food animal",
      "time dependent",
      "gram positive",
      "gram negative",
    ],
  },
};

export default [ceftiofur];