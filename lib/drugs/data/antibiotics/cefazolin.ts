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


const cefazolin: Drug = {

  id: "cefazolin",

  genericName: "Cefazolin",

  brandNames: [
    "Cefazolin",
    "Ancef",
    "Kefzol",
  ],

  status: DrugStatus.ACTIVE,


  searchTerms: [
    "cefazolin",
    "cephalosporin",
    "first generation cephalosporin",
    "beta lactam",
    "surgical prophylaxis",
    "infection",
    "gram positive",
  ],


  quickFacts: {

    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antibiotic",

    drugClass: "Beta-lactam Antibiotic",

    pharmacologicClass:
      "First Generation Cephalosporin",

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
      Species.CATTLE,
    ],
  },


  species: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
    Species.CATTLE,
  ],


  formulations: [

    {
  id: "cefazolin-injection",

  dosageForm: DosageForm.POWDER_FOR_INJECTION,

  strength: "Powder for Injection",

  concentration: {
    value: 0,
    unit: ConcentrationUnit.OTHER,
  },

  vialStrengths: [
    250,
    500,
    1000,
  ],

  routes: [
    Route.IV,
    Route.IM,
  ],

      notes:
        "Powder for reconstitution before administration.",
    },

  ],


  doseReferences: [

    {
      species: Species.DOG,

      indication:
        "Susceptible bacterial infections and perioperative antimicrobial prophylaxis",

      route: Route.IV,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 20,
        maximum: 30,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Typically administered every 6–8 hours depending on indication and clinical situation.",

      reference:
        "Veterinary drug references should be consulted for final dosing decisions.",
    },


    {
      species: Species.CAT,

      indication:
        "Susceptible bacterial infections",

      route: Route.IV,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 20,
        maximum: 30,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Interval depends on clinical condition and veterinary assessment.",

      reference:
        "Veterinary drug references should be consulted for final dosing decisions.",
    },

  ],



  clinical: {

    mechanismOfAction:
      "Cefazolin inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins, resulting in bacterial cell death.",


    spectrum:
      "Primarily active against many Gram-positive bacteria and some susceptible Gram-negative organisms.",


    indications: [

      "Surgical antimicrobial prophylaxis",

      "Skin and soft tissue infections",

      "Wound infections",

      "Bone and joint infections caused by susceptible organisms",

      "Bacterial infections caused by susceptible pathogens",

    ],


    commonUses: [

      "Perioperative antibiotic coverage",

      "Hospital-acquired susceptible bacterial infections",

      "Treatment of infections caused by Staphylococcus species",

    ],


    clinicalDecisionNotes: [

      "Culture and susceptibility testing should guide antimicrobial selection whenever possible.",

      "Avoid unnecessary use to reduce antimicrobial resistance.",

      "Consider renal function in patients receiving prolonged therapy.",

      "Not effective against organisms producing certain beta-lactamases.",

    ],


    clinicalPearls: [

      "Cefazolin is commonly selected for surgical prophylaxis because of good tissue penetration.",

      "It is a first-generation cephalosporin with strong Gram-positive activity.",

      "Administration timing before surgery is important for prophylactic effectiveness.",

      "Monitor for allergic reactions in patients with beta-lactam sensitivity.",

    ],

  },



 reproduction: {

  pregnancy: {

    recommendation:
      ReproductionRecommendation.BENEFIT_RISK,

    notes: [
      "Use only after veterinary risk-benefit assessment.",
    ],

  },


  lactation: {

    recommendation:
      ReproductionRecommendation.BENEFIT_RISK,

    notes: [
      "Use after veterinary assessment.",
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

      "Vomiting",

      "Diarrhea",

      "Gastrointestinal disturbance",

      "Hypersensitivity reactions",

      "Neurological signs in severe cases",

    ],


    management: [

      "Discontinue administration if clinically indicated.",

      "Provide supportive care.",

      "Monitor gastrointestinal signs.",

      "Treat allergic reactions appropriately.",

      "Monitor renal function in prolonged or high exposure cases.",

    ],

  },



  safety: {


    contraindications: [

      "Known hypersensitivity to cephalosporins or beta-lactam antibiotics.",

    ],


    precautions: [

      "Use cautiously in patients with previous beta-lactam reactions.",

      "Adjust therapy based on renal function when clinically required.",

      "Monitor prolonged therapy.",

    ],


    adverseEffects: [

      "Vomiting",

      "Diarrhea",

      "Injection site reactions",

      "Hypersensitivity reactions",

    ],


    drugInteractions: [

      "Concurrent nephrotoxic drugs may increase renal monitoring requirements.",

      "Review concurrent antimicrobial therapy to avoid unnecessary combinations.",

    ],


    monitoring: [

      "Clinical response",

      "Injection site reaction",

      "Signs of allergic reaction",

      "Renal function when indicated",

    ],


   
    storage: [

      "Store according to manufacturer recommendations.",

      "Protect from moisture.",

      "Use reconstituted solution according to product instructions.",

    ],

  },



  references: [

    {
      title:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      title:
        "Merck Veterinary Manual",
      publisher:
        "Merck & Co.",
    },

    {
      title:
        "BSAVA Small Animal Formulary",
    },

  ],



  metadata: {

    version:
      "1.0.0",

    lastReviewed:
      "2026-07-11",

    tags: [

      "cefazolin",

      "cephalosporin",

      "antibiotic",

      "surgical prophylaxis",

      "dog",

      "cat",

    ],

  },


};


export default [cefazolin];