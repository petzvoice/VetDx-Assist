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

const doxycycline: Drug = {
  id: "doxycycline",

  genericName: "Doxycycline",

  brandNames: [
    "Doxypet",
    "Vibramycin",
    "Doxy",
    "Docmycin",
    "Zedox"
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "doxycycline",
    "doxycycline hyclate",
    "doxycycline monohydrate",
    "doxycycline calcium",
    "tetracycline antibiotic",
    "Doxypet",
    "Vibramycin",
    "Docmycin",
    "Zedox" ,
     "Ehrlichiosis",
  "Ehrlichia canis",
  "canine ehrlichiosis",
  "feline ehrlichiosis",
  "Anaplasmosis",
  "Anaplasma",
  "Rocky Mountain Spotted Fever",
  "Rickettsia rickettsii",
  "rickettsial infection",
  "Hemotropic mycoplasmosis",
  "hemoplasmosis",
  "Mycoplasma haemofelis",
  "Toxoplasmosis",
  "Leptospirosis",
  "Leptospira",
  ],


 quickFacts: {
  prescriptionRequired: true,

  controlledDrug: false,

  category: "Antibiotics",

  drugClass: "Tetracycline antibiotic",

  pharmacologicClass: "Protein synthesis inhibitor (30S ribosomal subunit)",

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
    Species.BIRD,
  ],
},

  species: [
    Species.DOG,
    Species.CAT,
    Species.BIRD,
  ],

  formulations: [
  {
    id: "tablets",

    dosageForm: DosageForm.TABLET,

    strength: "100 mg, 200 mg, 300 mg",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [
      Route.PO,
    ],
  },

  {
    id: "injection",

    dosageForm: DosageForm.INJECTION,

    strength: "100 mg, 200 mg",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [
      Route.IV,
    ],
  },

  {
    id: "oral-suspension",

    dosageForm: DosageForm.ORAL_SUSPENSION,

    strength: "50 mg/5 mL",

    concentration: {
      value: 10,
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
      "Susceptible bacterial infections - general use",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 3,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    duration:
      "7–14 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Soft tissue infections and urinary tract infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 4.4,
      maximum: 11,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    duration:
      "7–14 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Acute Ehrlichia canis infection",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    duration:
      "14–16 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Chronic Ehrlichia canis infection",

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
      "30–42 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Renal carrier state of leptospirosis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Twice daily",

    duration:
      "14 days after penicillin G therapy",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Toxoplasma gondii infection",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
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
      "Rocky Mountain Spotted Fever (Rickettsia rickettsii)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 5,
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
      "Susceptible bacterial infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 5,
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
      "Clinical hemoplasmosis or bartonellosis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12–24 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CAT,

    indication:
      "Feline ehrlichiosis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Twice daily",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CAT,

    indication:
      "Toxoplasma gondii infection",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
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
    species: Species.CAT,

    indication:
      "Hemotropic mycoplasmosis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Once daily",

    duration:
      "14 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },



  {
    species: Species.CAT,

    indication:
      "Systemic infections and bacteremia",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 11,
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
      "Ehrlichiosis or Anaplasmosis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    duration:
      "21 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

],

  clinical: {
  mechanismOfAction:
    "Doxycycline is a bacteriostatic tetracycline antibiotic that inhibits bacterial protein synthesis by reversibly binding to the 30S ribosomal subunit. This prevents attachment of aminoacyl transfer-RNA to the ribosome, inhibiting addition of amino acids to growing peptide chains. It may also bind to the 50S ribosomal subunit and alter bacterial cytoplasmic membrane permeability.",

  spectrum:
    "Broad-spectrum activity against many intracellular and atypical organisms. Effective against most Mycoplasma spp., Rickettsia spp., Chlamydia spp., and spirochetes including Borrelia burgdorferi (Lyme disease organism). Activity against Gram-positive organisms is variable and includes some Staphylococcus spp., Streptococcus spp., Actinomyces spp., Bacillus anthracis, Clostridium spp., Listeria monocytogenes, and Nocardia spp. Gram-negative organisms with susceptibility may include Bordetella spp., Brucella spp., Bartonella spp., Haemophilus spp., Pasteurella multocida, Shigella spp., and Yersinia pestis. Resistance is common among many strains of Escherichia coli, Klebsiella spp., Enterobacter spp., Proteus spp., Pseudomonas aeruginosa, and some Bacteroides spp.",

  indications: [
    "Susceptible bacterial infections",
    "Rickettsial infections",
    "Ehrlichiosis",
    "Anaplasmosis",
    "Hemotropic mycoplasmosis",
    "Chlamydial infections",
    "Mycoplasma infections",
    "Lyme disease",
    "Leptospirosis carrier state",
    "Toxoplasmosis",
    "Respiratory infections caused by susceptible organisms",
    "Urinary tract infections caused by susceptible organisms",
    "Soft tissue infections caused by susceptible organisms",
  ],

  commonUses: [
    "Canine ehrlichiosis",
    "Canine anaplasmosis",
    "Rocky Mountain spotted fever",
    "Feline hemoplasmosis",
    "Feline bartonellosis",
    "Feline infectious diseases caused by Mycoplasma and Chlamydia",
    "Leptospira renal carrier state",
    "Toxoplasma gondii infection",
    "Mycoplasma-associated respiratory infections",
    "Tick-borne diseases",
  ],

  clinicalDecisionNotes: [
    "Doxycycline is preferred for intracellular pathogens such as Ehrlichia, Anaplasma, Rickettsia, and Bartonella.",
    "Use cautiously in young animals and pregnant animals due to potential effects on developing teeth and bone.",
    "Doxycycline is preferred over other tetracyclines in patients with renal insufficiency because it does not require the same degree of renal elimination.",
    "Avoid intramuscular and subcutaneous administration.",
    "Avoid rapid intravenous administration because it may cause cardiovascular effects related to calcium binding.",
  ],

  clinicalPearls: [
    "Most adverse effects are gastrointestinal in nature.",
    "Administer oral doxycycline with food if gastrointestinal upset occurs.",
    "Cats should never be dry-pilled with doxycycline tablets or capsules; follow administration with at least 6 mL water or use a compounded slurry to reduce risk of esophageal injury.",
    "Bone and tooth abnormalities are less common compared with other tetracyclines, but caution is still advised in young animals.",
    "Doxycycline has excellent intracellular penetration and is commonly selected for vector-borne diseases.",
    "Avoid administration with mineral supplements or antacids containing divalent/trivalent cations as absorption may be reduced.",
  ],
},

  reproduction: {
  pregnancy: {
    recommendation:
      ReproductionRecommendation.CONTRAINDICATED,

    notes: [
      "Tetracyclines can retard fetal skeletal development and discolor deciduous teeth.",
      "Doxycycline is considered less likely to cause these abnormalities compared with more water-soluble tetracyclines such as tetracycline and oxytetracycline.",
      "Use only when benefits outweigh fetal risks.",
      "In canine and feline pregnancy safety evaluation, doxycycline is categorized as Class D (contraindicated; associated with congenital malformations or embryotoxicity).",
    ],
  },


  lactation: {
    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Tetracyclines are excreted in milk.",
      "Milk to plasma ratios vary between 0.25 and 1.5.",
      "Avoid nursing if the dam requires doxycycline.",
    ],
  },


  breeding: {
    recommendation:
      ReproductionRecommendation.NOT_ESTABLISHED,

    notes: [
      "Safety information regarding use during breeding is not established.",
      "Use only after veterinary risk-benefit assessment.",
    ],
  },
},

  overdose: {
  signs: [
    "Vomiting",
    "Anorexia",
    "Diarrhea",
    "Gastrointestinal disturbances",
    "Severe emesis",
    "Severe diarrhea",
    "Transient collapse after rapid intravenous administration",
    "Cardiac arrhythmias after rapid intravenous administration",
  ],

  management: [
    "Doxycycline is generally safe in most mild oral overdose situations.",
    "Monitor and replace fluids and electrolytes if severe vomiting or diarrhea occurs.",
    "Provide supportive care based on clinical signs.",
    "Monitor cardiovascular status if overdose occurs following rapid intravenous administration.",
    "Rapid IV administration may cause adverse cardiovascular effects due to interaction with intravascular calcium ions.",
  ],
},

  safety: {
  contraindications: [
    "Known hypersensitivity to doxycycline or other tetracyclines.",
  ],

  precautions: [
    "Use cautiously in young animals because tetracyclines may affect developing teeth and bones.",
    "Avoid concurrent administration with calcium, magnesium, aluminum, iron supplements, or dairy products because they may reduce absorption.",
    "Use cautiously in animals with significant hepatic dysfunction.",
    "Ensure adequate water intake after oral administration, especially in cats, to reduce the risk of esophageal irritation.",
    "Monitor for gastrointestinal adverse effects during therapy.",
  ],

  adverseEffects: [
    "Vomiting",
    "Diarrhea",
    "Anorexia",
    "Gastrointestinal upset",
    "Esophagitis and esophageal stricture in cats after dry-pill administration",
    "Hepatotoxicity (rare)",
    "Photosensitivity reactions (rare)",
    "Tooth discoloration or enamel changes in developing animals",
  ],

  drugInteractions: [
    "Antacids containing calcium, magnesium, or aluminum may reduce absorption.",
    "Iron supplements may decrease absorption.",
    "Concurrent administration with bactericidal antibiotics may theoretically reduce efficacy.",
    "Phenobarbital may increase doxycycline metabolism and reduce serum concentrations.",
  ],

  monitoring: [
    "Clinical response to therapy.",
    "Resolution of infection.",
    "Gastrointestinal tolerance.",
    "Hepatic function in prolonged therapy or patients with liver disease.",
    "Monitor cats for signs of esophageal irritation after oral administration.",
  ],

  withdrawalPeriod:
    "Follow species-specific and country-specific regulations for food-producing animals.",

  storage: [
    "Store tablets and capsules at controlled room temperature in a dry place.",
    "Protect from excessive heat and moisture.",
    "Store oral suspensions according to manufacturer recommendations.",
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

  lastReviewed: "2026-07-11",

  tags: [
    "doxycycline",
    "doxycycline hyclate",
    "doxycycline monohydrate",
    "tetracycline antibiotic",
    "antibiotic",
    "bacteriostatic",
    "protein synthesis inhibitor",
    "dog",
    "cat",
    "ehrlichiosis",
    "Ehrlichia canis",
    "anaplasmosis",
    "rickettsial infection",
    "Rickettsia rickettsii",
    "rocky mountain spotted fever",
    "hemotropic mycoplasmosis",
    "Mycoplasma haemofelis",
    "toxoplasmosis",
    "Toxoplasma gondii",
    "leptospirosis",
    "Leptospira",
    "chlamydiosis",
    "psittacosis",
    "tick borne disease",
    "intracellular bacteria",
    "respiratory infection",
    "urinary tract infection",
    "soft tissue infection",
  ],
},
};

export default [doxycycline];