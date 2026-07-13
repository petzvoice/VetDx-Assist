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
const ceftriaxone: Drug = {
  id: "ceftriaxone",

  genericName: "Ceftriaxone sodium",

  brandNames: [
    "Topcef Vet",
    "Rocephin",
    "Monocef",
    "Intacef",
    "Xone",
    "Oframax",
    "C-Tri",
    "Cefaxone",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "ceftriaxone",
    "ceftriaxone sodium",
    "rocephin",
    "topcef vet",
    "monocef",
    "xone",
    "oframax",
    "c-tri",
    "cefaxone",

    "third generation cephalosporin",
    "3rd generation cephalosporin",
    "cephalosporin antibiotic",
    "beta lactam antibiotic",

    "meningitis",
    "borreliosis",
    "lyme disease",
    "preoperative prophylaxis",
    "intraoperative prophylaxis",
    "skin infection",
    "genitourinary infection",
    "systemic infection",
    "infectious endocarditis",

    "gram negative bacteria",
    "gram positive bacteria",
    "central nervous system infection",
    "cns infection",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antibacterial",

    drugClass: "Third-generation cephalosporin",

    pharmacologicClass:
      "Beta-lactam antibiotic (cell wall synthesis inhibitor)",

    commonRoutes: [
      Route.IV,
      Route.IM,
    ],

    availableRoutes: [
      Route.IV,
      Route.IM,
    
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.HORSE,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
  ],

  formulations: [
    {
      id: "injectable-powder",

      dosageForm: DosageForm.INJECTION,

      strength:
        "250 mg/vial, 500 mg/vial, 1 g/vial, 2 g/vial",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.IV,
        Route.IM,
      ],
    },
  ],
  doseReferences: [

  // =========================
  // DOG
  // =========================

  {
    species: Species.DOG,

    indication:
      "Meningitis or borreliosis",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 15,
      maximum: 50,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    duration:
      "4–14 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },



  {
    species: Species.DOG,

    indication:
      "Preoperative or intraoperative prophylaxis",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Single dose",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Skin and genitourinary infections",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Once daily",

    duration:
      "7–14 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Infectious endocarditis",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 20,
      maximum: 20,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Susceptible infections",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 15,
      maximum: 50,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Once daily",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  // =========================
  // CAT
  // =========================

  {
    species: Species.CAT,

    indication:
      "Systemic infections",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 50,
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
      "Systemic infections",

    route: Route.IM,
    

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 50,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

  // =========================
  // HORSE
  // =========================

  {
    species: Species.HORSE,

    indication:
      "Susceptible infections",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 50,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },



],
clinical: {

  mechanismOfAction:
    "Ceftriaxone is a bactericidal third-generation cephalosporin that inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs), preventing peptidoglycan cross-linking and resulting in bacterial cell death.",


  spectrum:
    "Third-generation cephalosporin with retained Gram-positive activity and expanded Gram-negative activity compared with earlier-generation cephalosporins. Individual bacterial susceptibility varies; therefore, culture and susceptibility testing are recommended. Ceftriaxone achieves high concentrations within the central nervous system.",


  indications: [
    "Susceptible bacterial infections",
    "Meningitis",
    "Borreliosis",
    "Systemic infections",
    "Skin infections",
    "Genitourinary infections",
    "Infectious endocarditis",
    "Preoperative antimicrobial prophylaxis",
    "Intraoperative antimicrobial prophylaxis",
  ],


  commonUses: [
    "Central nervous system infections",
    "Meningitis",
    "Borreliosis",
    "Systemic bacterial infections",
    "Skin infections",
    "Genitourinary infections",
    "Infectious endocarditis",
    "Perioperative antimicrobial prophylaxis",
  ],


  clinicalDecisionNotes: [
    "Excellent penetration into the central nervous system.",
    "Long elimination half-life permits convenient dosing.",
    "Culture and susceptibility testing should be performed because bacterial susceptibility varies among third-generation cephalosporins.",
    "Dose adjustment may be necessary in severe renal failure, particularly with concurrent hepatic impairment.",
    "Administer intravenous doses slowly over at least 30 minutes.",
    "Intramuscular administration may be painful.",
    "Avoid mixing or administering with calcium-containing solutions within 48 hours.",
  ],


  clinicalPearls: [
    "Useful alternative to aminoglycosides when broad Gram-negative coverage is desired with lower nephrotoxic potential.",
    "Monitor for biliary sludge during prolonged or high-dose therapy.",
    "Avoid use in patients with icterus when possible.",
    "Do not mix ceftriaxone with calcium-containing solutions.",
  ],

},
reproduction: {

  pregnancy: {

    recommendation:
      ReproductionRecommendation.GENERALLY_SAFE,

    notes: [
      "No teratogenic effects were demonstrated in studies in pregnant mice and rats receiving up to 20 times the labeled dose.",
      "FDA Pregnancy Category B in humans.",
      "Use during pregnancy only when clearly indicated after evaluating the benefits and risks.",
    ],
  },


  lactation: {

    recommendation:
      ReproductionRecommendation.GENERALLY_SAFE,

    notes: [
      "Ceftriaxone is distributed into maternal milk in low concentrations.",
      "Low concentrations in milk are unlikely to pose significant risk to nursing offspring.",
    ],
  },


  breeding: {

    recommendation:
      ReproductionRecommendation.NOT_ESTABLISHED,

    notes: [
      "Specific safety information for breeding animals has not been established.",
      "Use only after veterinary risk-benefit assessment.",
    ],
  },

},
overdose: {

  signs: [
    "Adverse effects similar to those seen during therapy",
    "Potential hematologic abnormalities",
    "Diarrhea",
    "Hypersensitivity reactions",
    "Injection site pain",
    "Biliary sludge",
    "Azotemia",
  ],


  management: [
    "Limited information is available regarding overdose.",
    "Monitor the patient closely.",
    "Provide symptomatic and supportive treatment as required.",
  ],

},
safety: {

  contraindications: [
    "Known hypersensitivity to ceftriaxone or other cephalosporins.",
  ],


  precautions: [
    "Use cautiously in patients with known hypersensitivity to penicillins because cross-reactivity may occur.",
    "Dose adjustment may be required in severe renal failure, particularly when concurrent hepatic impairment is present.",
    "Use cautiously in patients with vitamin K deficiency or impaired vitamin K synthesis (e.g., severe hepatic disease).",
    "Avoid use in patients with icterus.",
    "Administer intravenous doses over at least 30 minutes.",
    "Do not mix with calcium-containing solutions or administer calcium-containing products within 48 hours of ceftriaxone administration.",
  ],


  adverseEffects: [
    "Injection site pain after intramuscular administration",
    "Diarrhea",
    "Hypersensitivity reactions",
    "Eosinophilia",
    "Thrombocytosis",
    "Leukopenia",
    "Anemia",
    "Neutropenia",
    "Lymphopenia",
    "Thrombocytopenia",
    "Increased liver enzyme concentrations",
    "Increased blood urea nitrogen",
    "Increased serum creatinine",
    "Urinary casts",
    "Biliary sludge",
  ],


  drugInteractions: [
    "Do not mix or administer with calcium-containing solutions within 48 hours of ceftriaxone administration.",
  ],


  monitoring: [
    "Clinical response to therapy.",
    "Monitor for adverse effects.",
    "Monitor renal function in patients with renal disease.",
    "Monitor hepatic function during prolonged therapy.",
    "Monitor complete blood count during prolonged treatment.",
    "Monitor for biliary sludge during high-dose or prolonged therapy.",
  ],


  withdrawalPeriod:
    "Follow species-specific and country-specific regulations for food-producing animals.",


  storage: [
    "Store sterile powder for reconstitution at or below 25°C.",
    "Protect from light.",
    "Solutions reconstituted with 0.9% sodium chloride or 5% dextrose are stable for 3 days at room temperature or 10 days under refrigeration (approximately 100 mg/mL).",
    "Do not mix with calcium-containing solutions.",
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
  lastReviewed: "",
  tags: [],
},
};

export default [ceftriaxone];