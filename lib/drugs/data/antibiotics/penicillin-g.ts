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
const penicillinG: Drug = {
  id: "penicillin-g",

  genericName: "Penicillin G",

  brandNames: [
    "Crystapen",
    "Pfizerpen",
    "PenOne Pro",
    "VetPen",
    "Benzylpenicillin Injection",
    "Penicillin G Sodium Injection",
    "Penicillin G Potassium Injection",
    "Penicillin G Procaine Injection",
    "Penicillin G Benzathine Injection",
    "Combi-Pen-48",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "penicillin g",
    "benzylpenicillin",
    "penicillin g sodium",
    "penicillin g potassium",
    "procaine penicillin g",
    "benzathine penicillin g",
    "penicillin g procaine",
    "penicillin g benzathine",
    "crystapen",
    "pfizerpen",
    "vetpen",
    "penone pro",
    "combi-pen-48",

    "beta lactam antibiotic",
    "penicillin antibiotic",
    "natural penicillin",

    "gram positive infection",
    "gram positive aerobes",
    "gram positive anaerobes",

    "bacteremia",
    "systemic infection",
    "soft tissue infection",
    "orthopedic infection",
    "bone infection",
    "surgical prophylaxis",
    "orthopedic surgery prophylaxis",
    "leptospiremia",
    "leptospirosis",
    "renal carrier leptospirosis",
    "septicemia",
    "actinomycosis",
    "actinomyces",
    "bovine respiratory disease",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antibiotic",

    drugClass: "Penicillin antibiotic",

    pharmacologicClass:
      "Beta-lactam antibiotic (cell wall synthesis inhibitor)",

    commonRoutes: [
      Route.IM,
      Route.SC,
      Route.IV,
      Route.PO,
    ],

    availableRoutes: [
      Route.IM,
      Route.SC,
      Route.IV,
      Route.PO,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.CATTLE,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.CATTLE,
  ],

  formulations: [

    {
      id: "penicillin-g-sodium",

      dosageForm: DosageForm.POWDER_FOR_INJECTION,

      strength:
        "1 million IU/vial, 5 million IU/vial, 10 million IU/vial, 20 million IU/vial",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.IV,
      ],

      vialStrengths: [
    1000000,
    5000000,
    10000000,
    20000000,
  ],
  reconstitutionUnit:
  ConcentrationUnit.IU_PER_ML,
    },


    {
      id: "penicillin-g-potassium",

      dosageForm: DosageForm.POWDER_FOR_INJECTION,

      strength:
        "1 million IU/vial, 5 million IU/vial, 10 million IU/vial",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.IV,
      ],
    },


    {
      id: "penicillin-g-procaine",

      dosageForm: DosageForm.INJECTION,

      strength:
        "150,000 IU/mL, 300,000 IU/mL",

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
      id: "penicillin-g-benzathine",

      dosageForm: DosageForm.INJECTION,

      strength:
        "300,000 IU/mL, 600,000 IU/mL",

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
      id: "penicillin-g-procaine-benzathine",

      dosageForm: DosageForm.INJECTION,

      strength:
        "150,000 IU + 150,000 IU/mL (300,000 IU/mL total), 300,000 IU + 300,000 IU/mL (600,000 IU/mL total)",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
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
      "Bacteremia and systemic infections (Penicillin G potassium)",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 20000,
      maximum: 40000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 4–6 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Orthopedic infections (Penicillin G potassium)",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 20000,
      maximum: 40000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 6 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Orthopedic surgical prophylaxis (Penicillin G potassium)",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 40000,
      maximum: 40000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Single dose 1 hour before surgery; repeat if surgery exceeds 90 minutes",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Soft tissue infections (Penicillin G potassium)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 40000,
      maximum: 60000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 8 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Susceptible bacterial infections (Penicillin G procaine)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 20000,
      maximum: 40000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 12–24 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Susceptible bacterial infections (Penicillin G benzathine)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 40000,
      maximum: 40000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 5 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Leptospiremia",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25000,
      maximum: 40000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 12–24 hours",

    duration:
      "14 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Adjunctive therapy for septicemia (Penicillin G sodium or potassium)",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25000,
      maximum: 25000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 6 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },



  // =========================
  // CAT
  // =========================

  {
    species: Species.CAT,

    indication:
      "Soft tissue and systemic infections (Penicillin G potassium)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 40000,
      maximum: 40000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 6–8 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CAT,

    indication:
      "Soft tissue infections (Penicillin G procaine)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 20000,
      maximum: 20000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 12 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CAT,

    indication:
      "Orthopedic infections (Penicillin G procaine)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 20000,
      maximum: 40000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 8 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CAT,

    indication:
      "Actinomyces infections (Penicillin G procaine)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 50000,
      maximum: 100000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 12 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CAT,

    indication:
      "Susceptible bacterial infections (Penicillin G benzathine)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 50000,
      maximum: 50000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 5 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },



  // =========================
  // CATTLE
  // =========================

  {
    species: Species.CATTLE,

    indication:
      "Susceptible bacterial infections (Penicillin G procaine)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 44000,
      maximum: 66000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Once daily",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CATTLE,

    indication:
      "Susceptible bacterial infections (Penicillin G benzathine)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 44000,
      maximum: 66000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 2 days",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CATTLE,

    indication:
      "Bovine respiratory disease complex",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 66000,
      maximum: 66000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Once daily",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CATTLE,

    indication:
      "Susceptible bacterial infections (Penicillin G procaine)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 40000,
      maximum: 40000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Once daily",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CATTLE,

    indication:
      "Susceptible bacterial infections (Penicillin G procaine/benzathine combination)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 40000,
      maximum: 40000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Single dose",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CATTLE,

    indication:
      "Susceptible bacterial infections (Penicillin G procaine)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10000,
      maximum: 20000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 12–24 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.CATTLE,

    indication:
      "Susceptible bacterial infections (Penicillin G benzathine)",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10000,
      maximum: 20000,
      unit: DoseUnit.IU_PER_KG,
    },

    frequency:
      "Every 48 hours",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

],
clinical: {

  mechanismOfAction:
    "Penicillin G is a bactericidal beta-lactam antibiotic that inhibits bacterial cell wall synthesis. It binds to penicillin-binding proteins (PBPs), including transpeptidases, carboxypeptidases, and endopeptidases, preventing peptidoglycan cross-linking and resulting in a defective cell wall, osmotic instability, and bacterial cell death. It is most effective against actively growing bacteria.",


  spectrum:
    "Primarily active against susceptible Gram-positive aerobic and anaerobic bacteria. Penicillin G has activity against many organisms susceptible to the natural penicillins and is slightly more active in vitro than penicillin K on a weight basis. Benzathine penicillin provides prolonged concentrations but is effective only against highly susceptible organisms.",


  indications: [
    "Susceptible Gram-positive bacterial infections",
    "Bacteremia",
    "Systemic bacterial infections",
    "Soft tissue infections",
    "Orthopedic infections",
    "Surgical prophylaxis",
    "Leptospiremia",
    "Septicemia",
    "Actinomyces infections",
    "Bovine respiratory disease",
  ],


  commonUses: [
    "Gram-positive bacterial infections",
    "Bacteremia",
    "Systemic infections",
    "Soft tissue infections",
    "Orthopedic infections",
    "Orthopedic surgical prophylaxis",
    "Leptospiremia",
    "Adjunctive treatment of septicemia",
    "Actinomycosis",
    "Bovine respiratory disease",
  ],


  clinicalDecisionNotes: [
    "Penicillin G is the prototype natural penicillin antibiotic.",
    "Best administered by parenteral routes for systemic infections.",
    "Benzathine penicillin is effective only against highly susceptible organisms because of prolonged low serum concentrations.",
    "Certain animal species may be sensitive to procaine penicillin G.",
    "Use cautiously in animals with previous hypersensitivity to beta-lactam antibiotics because cross-reactivity may occur.",
    "Penicillins are generally most effective against actively dividing bacteria.",
  ],


  clinicalPearls: [
    "Procaine Penicillin (Penicillin G Procaine) is an intramuscular (IM) injection only and must never be given intravenously (IV).",
    "Penicillin G is generally preferred for susceptible Gram-positive aerobic and anaerobic infections.",
    "Hypersensitivity reactions remain the most important adverse effect.",
    "Very high parenteral doses may produce central nervous system effects, particularly in animals with renal impairment.",
    "Rapid identification of allergic reactions is important during therapy.",
    "Routine therapeutic drug monitoring is generally unnecessary because penicillins have a wide safety margin.",
  ],

},
reproduction: {

  pregnancy: {

    recommendation:
      ReproductionRecommendation.GENERALLY_SAFE,

    notes: [
      "Procaine Penicillin (Penicillin G Procaine) is an intramuscular (IM) injection only and must never be given intravenously (IV).",
      "Penicillins cross the placenta.",
      "Safe use during pregnancy has not been firmly established.",
      "No documented teratogenic effects have been reported.",
      "Use only when the potential benefits outweigh the risks.",
      "FDA Pregnancy Category B in humans.",
      "Class A (Probably safe) in canine and feline pregnancy according to Papich (1989).",
    ],
  },


  lactation: {

    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Penicillins are excreted into maternal milk in low concentrations.",
      "Nursing offspring may develop diarrhea, candidiasis, or allergic reactions.",
      "Use during lactation only after assessing risks and benefits.",
    ],
  },


  breeding: {

    recommendation:
      ReproductionRecommendation.GENERALLY_SAFE,

    notes: [
      "No documented adverse effects on breeding animals have been reported.",
      "Use according to veterinary risk-benefit assessment.",
    ],
  },

},
overdose: {

  signs: [
    "Gastrointestinal distress",
    "Vomiting",
    "Diarrhea",
    "Hypersensitivity reactions",
    "Central nervous system effects with very high parenteral doses",
    "Neurologic signs, particularly in patients with renal disease",
  ],


  management: [
    "Most acute oral overdoses are unlikely to cause significant toxicity beyond gastrointestinal upset.",
    "Provide supportive and symptomatic care.",
    "Monitor for hypersensitivity reactions.",
    "Monitor neurological status following large parenteral overdoses.",
    "Patients with renal disease may be at greater risk of central nervous system toxicity after high parenteral doses.",
  ],

},
safety: {

  contraindications: [
    "Procaine Penicillin (Penicillin G Procaine) is an intramuscular (IM) injection only and must never be given intravenously (IV).",
    "Known hypersensitivity to penicillins.",
    "Use cautiously in patients with documented hypersensitivity to other beta-lactam antibiotics because cross-reactivity may occur.",
  ],


  precautions: [
    "Cross-reactivity may occur with cephalosporins, cefamycins, and carbapenems.",
    "Very high parenteral doses may cause central nervous system effects, particularly in patients with renal disease.",
    "Certain animal species may be sensitive to procaine penicillin G.",
    "Benzathine penicillin should only be used for infections caused by highly susceptible organisms.",
  ],


  adverseEffects: [
    "Hypersensitivity reactions",
    "Rash",
    "Fever",
    "Eosinophilia",
    "Neutropenia",
    "Agranulocytosis",
    "Thrombocytopenia",
    "Leukopenia",
    "Anemia",
    "Lymphadenopathy",
    "Anaphylaxis",
    "Central nervous system effects following very high doses",
  ],


  drugInteractions: [
    "Use cautiously with other beta-lactam antibiotics in patients with a history of hypersensitivity because cross-reactivity may occur.",
  ],


  monitoring: [
    "Monitor clinical response to therapy.",
    "Monitor for hypersensitivity reactions.",
    "Routine therapeutic drug monitoring is generally not required.",
    "Monitor for toxic signs if high doses are administered.",
  ],


  withdrawalPeriod:
    "Follow species-specific and country-specific regulations for food-producing animals.",


  storage: [
    "Store according to manufacturer recommendations.",
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
    "penicillin g",
    "benzylpenicillin",
    "penicillin g sodium",
    "penicillin g potassium",
    "penicillin g procaine",
    "penicillin g benzathine",
    "beta-lactam antibiotic",
    "penicillin antibiotic",
    "gram-positive bacteria",
    "bactericidal antibiotic",
    "cell wall synthesis inhibitor",
    "dog",
    "cat",
    "cattle",
    "bacteremia",
    "systemic infection",
    "soft tissue infection",
    "orthopedic infection",
    "orthopedic surgery prophylaxis",
    "septicemia",
    "leptospiremia",
    "leptospirosis",
    "actinomycosis",
    "bovine respiratory disease",
  ],
},
};

export default [penicillinG];