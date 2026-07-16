import {
  ConcentrationUnit,
  DosageForm,
  DoseBasis,
  DoseUnit,
  Drug,
  DrugStatus,
  DrugReference,
  ReproductionRecommendation,
  Route,
  Species,
} from "../../types";

const cephalexin: Drug = {
  id: "cephalexin",

  genericName: "Cephalexin",

  brandNames: [
     "Cephavet",
    "Sporidex",
    "Lixen",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "cephalexin",
  "keflex",
  "first generation cephalosporin",
  "cephalosporin",
  "beta lactam",
  "oral cephalosporin",
  "bactericidal antibiotic",
  "cell wall synthesis inhibitor",
  "penicillin binding proteins",
  "gram positive",
  "gram negative",
  "staphylococcal infection",
  "staphylococcus",
  "streptococcus",
  "skin infection",
  "soft tissue infection",
  "pyoderma",
  "deep pyoderma",
  "superficial pyoderma",
  "cellulitis",
  "juvenile cellulitis",
  "wound infection",
  "abscess",
  "respiratory infection",
  "urinary tract infection",
  "UTI",
  "cystitis",
  "pyelonephritis",
  "otitis",
  "otitis externa",
  "bone infection",
  "orthopedic infection",
  "osteomyelitis",
  "pyometra",
  "metritis",
  "susceptible bacterial infection",
  "dog",
  "cat",
  ],

  quickFacts: {
  prescriptionRequired: true,

  controlledDrug: false,

  category: "Antibiotics",

  drugClass: "First-generation cephalosporin",

  pharmacologicClass: "Beta-lactam antibiotic",

  commonRoutes: [
    Route.PO,
  ],

  availableRoutes: [
    Route.PO,
  ],

  availableSpecies: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
    Species.RABBIT,
    Species.FERRET,
    Species.BIRD,
    Species.GUINEA_PIG,
  ],
},

  species: [
    Species.DOG,
    Species.CAT,
     
  ],

  formulations: [
  {
    id: "capsules",

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
    id: "tablets",

    dosageForm: DosageForm.TABLET,

    strength: "300 mg, 600 mg",

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

    strength: "125 mg/5 mL, 250 mg/5 mL",

    concentration: {
      value: 25,
      unit: ConcentrationUnit.MG_PER_ML,
    },

    routes: [
      Route.PO,
    ],
  },

  {
    id: "oral-suspension-forte",

    dosageForm: DosageForm.ORAL_SUSPENSION,

    strength: "250 mg/5 mL",

    concentration: {
      value: 50,
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

    indication: "Susceptible Staphylococcal infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 30,
      maximum: 30,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours.",

    reference: "Campbell & Rosin 1998",
  },

  {
    species: Species.DOG,

    indication: "Pyoderma",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 22,
      maximum: 35,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours (or 22 mg/kg every 8 hours).",

    reference: "Greene & Watson 1998",
  },

  {
    species: Species.DOG,

    indication: "Respiratory tract infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 20,
      maximum: 40,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8 hours.",

    reference: "Greene & Watson 1998",
  },

  {
    species: Species.DOG,

    indication: "Soft tissue infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 30,
      maximum: 50,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours.",

    reference: "Greene & Watson 1998",
  },

  {
    species: Species.DOG,

    indication: "Systemic infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 60,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8 hours.",

    reference: "Greene & Watson 1998",
  },

  {
    species: Species.DOG,

    indication: "Orthopedic infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 22,
      maximum: 30,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 6–8 hours for 28 days.",

    reference: "Greene & Watson 1998",
  },

  {
    species: Species.DOG,

    indication: "Gram-positive infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 22,
      maximum: 22,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours.",

    reference: "Aucoin 2000",
  },

  {
    species: Species.DOG,

    indication: "Gram-negative infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 30,
      maximum: 30,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8 hours.",

    reference: "Aucoin 2000",
  },

  {
    species: Species.DOG,

    indication: "Infectious otitis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 22,
      maximum: 22,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours.",

    reference: "Kwochka 2002",
  },

  {
    species: Species.DOG,

    indication: "Pyometra and metritis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 30,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8–12 hours.",

    reference: "Freshman 2002",
  },

  {
    species: Species.DOG,

    indication: "Urinary tract infection",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 30,
      maximum: 40,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8 hours.",

    reference: "Brovida 2003",
  },

  {
    species: Species.DOG,

    indication: "Juvenile cellulitis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 20,
      maximum: 20,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8 hours.",

    reference: "Macintire 2004",
  },

  {
    species: Species.DOG,

    indication: "Recurrent pyoderma",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 22,
      maximum: 22,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours (every 8 hours for deep pyoderma).",

    reference: "Hillier 2006",
  },

  {
    species: Species.CAT,

    indication: "Soft tissue infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 30,
      maximum: 50,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours.",

    reference: "Greene & Watson 1998",
  },

  {
    species: Species.CAT,

    indication: "Systemic infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 35,
      maximum: 35,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 6–8 hours.",

    reference: "Greene & Watson 1998",
  },

  {
    species: Species.CAT,

    indication: "Susceptible bacterial infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 22,
      maximum: 40,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8 hours (22 mg/kg commonly used).",

    reference: "Vaden & Papich 1995; Lappin 2002",
  },

  {
    species: Species.CAT,

    indication: "Gram-positive infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 22,
      maximum: 22,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours.",

    reference: "Aucoin 2000",
  },

  {
    species: Species.CAT,

    indication: "Gram-negative infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 30,
      maximum: 30,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8 hours.",

    reference: "Aucoin 2000",
  },

],
 clinical: {
  mechanismOfAction:
    "Cephalexin is a bactericidal first-generation cephalosporin that inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs), disrupting peptidoglycan cross-linking and resulting in bacterial cell lysis. It is most effective against actively dividing bacteria.",

  spectrum:
    "Excellent activity against most Gram-positive bacteria with variable to limited activity against Gram-negative organisms. Active against susceptible Staphylococcus spp., Streptococcus spp., Proteus mirabilis, some Escherichia coli, Klebsiella spp., Pasteurella spp., Actinobacillus spp., Haemophilus equigenitalis, Shigella spp., Salmonella spp., and most anaerobes except Bacteroides fragilis. Generally ineffective against Enterococcus spp., methicillin-resistant staphylococci (MRSA/MRSP), Pseudomonas spp., Enterobacter spp., Serratia spp., Citrobacter spp., and indole-positive Proteus spp.",

  indications: [
    "Susceptible bacterial infections",
    "Staphylococcal infections",
    "Skin infections",
    "Soft tissue infections",
    "Pyoderma",
    "Respiratory tract infections",
    "Urinary tract infections",
    "Pyelonephritis",
    "Otitis externa",
    "Pyometra",
    "Metritis",
    "Juvenile cellulitis",
    "Neonatal bacterial infections",
  ],

  commonUses: [
    "Canine pyoderma",
    "Feline skin and soft tissue infections",
    "Wound infections",
    "Abscesses",
    "Cellulitis",
    "Urinary tract infections",
    "Respiratory infections",
    "Otitis externa",
    "Postoperative wound infections",
    "Bone and joint infections",
  ],

  clinicalDecisionNotes: [
    "Perform bacterial culture and susceptibility testing whenever possible.",
    "Continue treatment for 5 to 7 days beyond clinical resolution or until culture-negative.",
    "Deep pyoderma and orthopedic infections require prolonged treatment.",
    "Reduce dosage in animals with renal impairment.",
    "Parenteral antibiotics are preferred over oral therapy in septicemia or shock due to unreliable gastrointestinal absorption.",
  ],

  clinicalPearls: [
    "Administer with food if gastrointestinal upset occurs.",
    "Excellent empirical choice for uncomplicated Gram-positive skin infections.",
    "Less reliable against Gram-negative organisms than later-generation cephalosporins.",
    "Not effective against methicillin-resistant staphylococci (MRSA/MRSP) or Pseudomonas spp.",
    "Dose adjustment may be required in renal insufficiency.",
  ],
},

  reproduction: {
  pregnancy: {
    recommendation: ReproductionRecommendation.BENEFIT_RISK,

    notes: [
      "Cephalosporins cross the placenta.",
      "Safe use during pregnancy has not been firmly established.",
      "No documented teratogenic effects have been reported.",
      "Use only when the potential benefits outweigh the potential risks.",
      "FDA Pregnancy Category B (human classification).",
    ],
  },

  lactation: {
    recommendation: ReproductionRecommendation.BENEFIT_RISK,

    notes: [
      "Small amounts are excreted into milk.",
      "May alter gastrointestinal flora in nursing neonates.",
      "Use with caution in lactating animals when clinically indicated.",
    ],
  },

  breeding: {
    recommendation:
      ReproductionRecommendation.NOT_ESTABLISHED,

    notes: [
      "No veterinary studies have established effects on fertility or breeding performance.",
      "Use in breeding animals should be based on a risk-benefit assessment.",
    ],
  },
},
  overdose: {
  signs: [
    "Vomiting",
    "Diarrhea",
    "Anorexia",
    "Salivation (dogs)",
    "Tachypnea (dogs)",
    "Excitability (dogs)",
    "Fever (cats)",
    "Hypersensitivity reactions",
    "Neurotoxicity with very high doses or prolonged administration",
    "Nephrotoxicity (rare, increased risk in renal impairment)",
  ],

  management: [
    "There is no specific antidote.",
    "Discontinue cephalexin.",
    "Provide symptomatic and supportive care.",
    "Correct dehydration and electrolyte abnormalities with fluid therapy if needed.",
    "Monitor renal function, especially in patients with pre-existing renal disease.",
    "Treat hypersensitivity or anaphylaxis appropriately if present.",
    "Monitor neurological status in severe overdoses.",
    "Most acute oral overdoses result primarily in gastrointestinal signs.",
  ],
},
  safety: {
  contraindications: [
    "Known hypersensitivity to cephalosporins.",
    "Use with extreme caution in patients with a history of hypersensitivity to other beta-lactam antibiotics (e.g., penicillins, cephamycins, carbapenems) due to possible cross-reactivity.",
  ],

  precautions: [
    "Reduce dosage in patients with renal impairment.",
    "Administer with food if gastrointestinal upset occurs.",
    "Avoid oral administration in patients with septicemia, shock, or other critical illnesses where gastrointestinal absorption may be impaired; parenteral therapy is preferred.",
    "Use cautiously in geriatric patients and those receiving other nephrotoxic drugs.",
    "Monitor for hypersensitivity reactions during therapy.",
    "Prolonged therapy may promote overgrowth of resistant organisms.",
  ],

  adverseEffects: [
    "Vomiting",
    "Diarrhea",
    "Anorexia",
    "Salivation (dogs)",
    "Tachypnea (dogs)",
    "Excitability (dogs)",
    "Fever (cats)",
    "Hypersensitivity reactions",
    
  ],

  drugInteractions: [
    "Probenecid inhibits renal tubular secretion of cephalexin, increasing serum concentrations and elimination half-life.",
  ],

  monitoring: [
    "Monitor clinical response to treatment.",
    "Perform bacterial culture and susceptibility testing when appropriate.",
    "Monitor renal function during prolonged therapy or in patients with renal disease.",
    "Monitor for gastrointestinal adverse effects.",
    "Monitor for hypersensitivity reactions.",
    "Be aware of possible false-positive urine glucose, creatinine, Coombs' test, and urinary ketosteroid laboratory results.",
  ],

  storage: [
    "Store at controlled room temperature.",
    "Protect from excessive heat and moisture.",
    "Keep container tightly closed.",
    "Store reconstituted oral suspension according to the manufacturer's recommendations and discard after the recommended expiration period.",
  ],
},

  references: [
  {
    title: "Plumb's Veterinary Drug Handbook. Cephalexin Monograph.",
 },
],
  metadata: {
  version: "1.0.0",

  lastReviewed: "2026-07-11",

  tags: [
    "cephalexin",
    "keflex",
    "cephalosporin",
    "first generation cephalosporin",
    "beta lactam",
    "oral antibiotic",
    "antibacterial",
    "gram positive",
    "gram negative",
    "staphylococcal infection",
    "staphylococcus",
    "streptococcus",
    "skin infection",
    "soft tissue infection",
    "pyoderma",
    "deep pyoderma",
    "superficial pyoderma",
    "cellulitis",
    "juvenile cellulitis",
    "wound infection",
    "abscess",
    "respiratory infection",
    "urinary tract infection",
    "UTI",
    "cystitis",
    "pyelonephritis",
    "otitis",
    "otitis externa",
    "bone infection",
    "orthopedic infection",
    "osteomyelitis",
    "pyometra",
    "metritis",
    "dog",
    "cat",
    "rabbit",
    "horse",
    "bird",
    "ferret",
    "guinea pig",
 ],

  },


};

export default [cephalexin];