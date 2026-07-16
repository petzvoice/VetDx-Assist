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
const enrofloxacin: Drug = {

  id: "enrofloxacin",

  genericName: "Enrofloxacin",

  brandNames: [
    "Baytril",
    "Enrocare",
    "Enrocin",
    "Enrovet",
    "Enroxin",
  ],

  status: DrugStatus.ACTIVE,


  searchTerms: [
    "enrofloxacin",
    "Baytril",
    "Enrocare",
    "Enrocin",
    "Enrovet",
    "Enroxin",

    "fluoroquinolone antibiotic",
    "veterinary fluoroquinolone",
    "quinolone antibiotic",

    "susceptible bacterial infections",
    "gram negative infection",

    "Pasteurella haemolytica",
    "Pasteurella multocida",
    "Haemophilus somnus",

    "bovine respiratory disease",

    "skin infection",
    "urinary tract infection",
    "sepsis",

    "respiratory infection",

    "cat bacterial infection",
    "dog bacterial infection",

    "ratite infection",
    "avian gram negative infection",
  ],


  quickFacts: {

    prescriptionRequired: true,

    controlledDrug: false,


    category:
      "Antibiotic",


    drugClass:
      "Fluoroquinolone antibiotic",


    pharmacologicClass:
      "DNA gyrase and topoisomerase IV inhibitor",


    commonRoutes: [
      Route.PO,
      Route.SC,
      Route.IV,
    ],


    availableRoutes: [
      Route.PO,
      Route.SC,
      Route.IV,
    ],


    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.CATTLE,
      Species.BIRD,
    ],
  },


  species: [
    Species.DOG,
    Species.CAT,
    Species.CATTLE,
    Species.BIRD,
  ],


  formulations: [

    {
      id: "injectable-solution-5-percent",

      dosageForm: DosageForm.INJECTION,

      strength:
        "5% (50 mg/mL)",

      concentration: {
        value: 50,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.SC,
        Route.IV,
      ],
    },


    {
      id: "injectable-solution-10-percent",

      dosageForm: DosageForm.INJECTION,

      strength:
        "10% (100 mg/mL)",

      concentration: {
        value: 100,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.SC,
        Route.IV,
      ],
    },


    {
      id: "tablet",

      dosageForm: DosageForm.TABLET,

      strength:
        "15 mg, 50 mg, 150 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },


    {
      id: "oral-solution-2-5-percent",

      dosageForm: DosageForm.ORAL_SOLUTION,

      strength:
        "2.5% (25 mg/mL)",

      concentration: {
        value: 25,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },


    {
      id: "oral-solution-10-percent",

      dosageForm: DosageForm.ORAL_SOLUTION,

      strength:
        "10% (100 mg/mL)",

      concentration: {
        value: 100,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

  ],
  doseReferences: [

  // DOG - Susceptible infections
  {
    species: Species.DOG,

    indication:
      "Susceptible bacterial infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 20,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Once daily or divided every 12 hours",

    duration:
      "Continue for at least 2–3 days beyond cessation of clinical signs; maximum duration 30 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  // DOG - Sepsis
  {
    species: Species.DOG,

    indication:
      "Sepsis",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 5,
      maximum: 20,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  // DOG - Skin and urinary infections
  {
    species: Species.DOG,

    indication:
      "Skin infections and urinary tract infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 2.5,
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


  // CAT - Susceptible infections
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
      "Once daily or divided every 12 hours",

    duration:
      "Continue for at least 2–3 days beyond cessation of clinical signs; maximum duration 30 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  // CATTLE - Bovine respiratory disease
  {
    species: Species.CATTLE,

    indication:
      "Bovine respiratory disease associated with Pasteurella haemolytica, Pasteurella multocida, and Haemophilus somnus",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 2.5,
      maximum: 5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Once daily",

    duration:
      "3–5 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  // CATTLE - Single dose respiratory treatment
  {
    species: Species.CATTLE,

    indication:
      "Bovine respiratory disease single dose regimen",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 7.5,
      maximum: 12.5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Single dose",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  // BIRDS - Ratites
  {
    species: Species.BIRD,

    indication:
      "Susceptible gram-negative infections in ratites",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 1.5,
      maximum: 2.5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Twice daily",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  // BIRDS - Drinking water administration
  {
    species: Species.BIRD,

    indication:
      "Susceptible gram-negative infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Once daily through drinking water",

    duration:
      "3 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  // BIRDS - Injection/oral
  {
    species: Species.BIRD,

    indication:
      "Susceptible infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 15,
      maximum: 15,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Based on clinical assessment",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  // BIRDS - Drinking water concentration
  {
    species: Species.BIRD,

    indication:
      "Susceptible infections",

    route: Route.PO,

    basis: DoseBasis.FIXED_CONCENTRATION,

    dose: {
      minimum: 250,
      maximum: 250,
      unit: DoseUnit.MG_PER_LITER,
    },

    frequency:
      "Through drinking water",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

],
clinical: {

  mechanismOfAction:
    "Enrofloxacin is a bactericidal fluoroquinolone antibiotic that inhibits bacterial DNA gyrase and topoisomerase IV, enzymes required for DNA replication, transcription, repair, and recombination. Inhibition of these enzymes results in disruption of bacterial DNA synthesis and bacterial cell death.",


  spectrum:
    "Broad-spectrum activity against many Gram-negative and some Gram-positive bacteria. Effective against susceptible Enterobacteriaceae and other bacterial pathogens. Not effective against anaerobic bacteria. Activity includes organisms such as Pasteurella spp., Haemophilus spp., and other susceptible respiratory, urinary, and skin pathogens. Resistance may occur among bacterial populations.",


  indications: [
    "Susceptible bacterial infections",
    "Skin infections caused by susceptible bacteria",
    "Urinary tract infections",
    "Respiratory bacterial infections",
    "Sepsis",
    "Bovine respiratory disease associated with susceptible organisms",
    "Gram-negative bacterial infections",
  ],


  commonUses: [
    "Canine bacterial infections",
    "Feline bacterial infections",
    "Skin and soft tissue infections",
    "Urinary tract infections",
    "Respiratory infections",
    "Septic conditions",
    "Bovine respiratory disease associated with Pasteurella haemolytica, Pasteurella multocida, and Haemophilus somnus",
    "Susceptible avian Gram-negative infections",
  ],


  clinicalDecisionNotes: [
    "Enrofloxacin is a veterinary fluoroquinolone antibiotic with activity against a variety of susceptible bacterial pathogens.",
    "It is not effective against anaerobic bacteria.",
    "Oral bioavailability in dogs is better compared with ciprofloxacin.",
    "Use cautiously in patients with hepatic or renal insufficiency.",
    "Use cautiously in dehydrated patients.",
    "Avoid use in young growing animals due to risk of cartilage abnormalities.",
    "Higher doses should be avoided in cats because of risk of retinal toxicity and blindness.",
    "Intravenous administration may carry increased risk in small animals.",
  ],


  clinicalPearls: [
    "Administer orally on an empty stomach when possible unless gastrointestinal upset occurs.",
    "Fluoroquinolones should be reserved for infections where susceptible organisms are likely or confirmed.",
    "Monitor cats for mydriasis or retinal changes during therapy.",
    "Avoid use in growing animals because fluoroquinolones may cause articular cartilage abnormalities.",
    "Not effective against anaerobic infections.",
    "Culture and susceptibility testing can help guide appropriate fluoroquinolone use.",
  ],

},
reproduction: {

  pregnancy: {

    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "The safety of enrofloxacin in pregnant dogs has been investigated.",
      "Breeding, pregnant, and lactating dogs receiving up to 15 mg/kg/day demonstrated no treatment-related effects.",
      "Because fluoroquinolones may cause cartilage abnormalities in young animals, they are not generally recommended during pregnancy unless benefits clearly outweigh risks.",
      "Safety in pregnant cats has not been established.",
    ],
  },


  lactation: {

    recommendation:
      ReproductionRecommendation.NOT_ESTABLISHED,

    notes: [
      "Safety in lactating cats has not been established.",
      "Use during lactation should be based on veterinary risk-benefit assessment.",
      "Lactating dogs have shown no treatment-related effects at studied doses up to 15 mg/kg/day.",
    ],
  },


  breeding: {

    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Limited studies in male dogs at various dosages have indicated no effects on breeding performance.",
      "Safety information for breeding cats is not established.",
    ],
  },

},
overdose: {

  signs: [
    "Anorexia",
    "Vomiting",
    "Gastrointestinal distress",
    "Blindness in cats following high doses",
    "Seizures",
    "Neurological signs",
    "Retinal degeneration in cats",
  ],


  management: [
    "Most acute overdoses in dogs are unlikely to cause severe clinical signs beyond vomiting and anorexia.",
    "Provide supportive care based on clinical signs.",
    "Monitor gastrointestinal signs and hydration status.",
    "In cats, monitor closely for ocular toxicity including mydriasis, retinal changes, and blindness.",
    "Monitor for neurological signs such as seizures following overdose.",
  ],

},
safety: {

  contraindications: [
    "Known hypersensitivity to enrofloxacin or other fluoroquinolones.",
    "Use is contraindicated in young growing animals due to risk of cartilage abnormalities.",
  ],


  precautions: [
    "Use cautiously in animals with hepatic insufficiency.",
    "Use cautiously in animals with renal insufficiency.",
    "Use cautiously in dehydrated patients.",
    "Avoid use in cats at doses higher than recommended because of risk of retinal toxicity and blindness.",
    "Avoid use in young, growing animals due to potential articular cartilage damage.",
    "FDA prohibits extra-label use in food animals.",
  ],


  adverseEffects: [
    "Vomiting",
    "Anorexia",
    "Gastrointestinal distress",
    "Elevated hepatic enzymes",
    "Ataxia",
    "Seizures",
    "Depression",
    "Lethargy",
    "Nervousness",
    "Hypersensitivity reactions",
    "Crystalluria",
    "Mydriasis in cats",
    "Retinal degeneration in cats",
    "Blindness in cats",
  ],


  drugInteractions: [
    "Concurrent administration with drugs or supplements affecting absorption may reduce fluoroquinolone availability.",
    "Use cautiously with other drugs that may increase risk of neurological stimulation.",
  ],


  monitoring: [
    "Clinical response to therapy.",
    "Gastrointestinal tolerance.",
    "Renal and hepatic function in compromised patients.",
    "Monitor cats for mydriasis and retinal changes.",
    "Monitor for neurological signs in susceptible patients.",
  ],


  withdrawalPeriod:
    "Follow species-specific and country-specific regulations for food-producing animals.",


  storage: [
    "Store according to manufacturer recommendations.",
    "Protect from excessive heat and moisture.",
  ],

},
references: [
  {
    title:
      "Plumb's Veterinary Drug Handbook",

    publisher:
      "Plumb's Veterinary Drug Handbook",
  },

  {
    title:
      "Merck Veterinary Manual",

    publisher:
      "Merck Veterinary Manual",
  },
],


metadata: {

  version:
    "1.0.0",

  lastReviewed:
    "2026-07-11",

  tags: [
    "enrofloxacin",
    "Baytril",
    "fluoroquinolone antibiotic",
    "veterinary antibiotic",
    "bactericidal antibiotic",
    "DNA gyrase inhibitor",
    "dog",
    "cat",
    "cattle",
    "bird",
    "gram negative infection",
    "Pasteurella haemolytica",
    "Pasteurella multocida",
    "Haemophilus somnus",
    "bovine respiratory disease",
    "respiratory infection",
    "urinary tract infection",
    "skin infection",
    "soft tissue infection",
    "sepsis",
    "avian bacterial infection",
  ],

},
};

export default [enrofloxacin];