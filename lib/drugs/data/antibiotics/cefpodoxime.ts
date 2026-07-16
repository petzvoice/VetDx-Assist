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
const cefpodoxime: Drug = {
  id: "cefpodoxime",

  genericName: "Cefpodoxime proxetil",

  brandNames: [
    "Simplicef",
    "Cefpoderm",
    "Cefpo Vet",
    "CefPET",
    "Pawxy",
    "Vantin",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "cefpodoxime",
    "cefpodoxime proxetil",
    "simplicef",
    "vantin",
    "cefpoderm",
    "cefpo vet",
    "cefpet",
    "pawxy",

    "third generation cephalosporin",
    "3rd generation cephalosporin",
    "cephalosporin antibiotic",
    "beta lactam antibiotic",

    "skin infection",
    "pyoderma",
    "staphylococcal skin infection",
    "soft tissue infection",
    "bacterial skin infection",
    "urinary tract infection",
    "uti",
    "susceptible bacterial infection",

    "staphylococcus",
    "streptococcus",
    "escherichia coli",
    "e coli",
    "proteus",
    "klebsiella",
    "enterobacteriaceae",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antibiotic",

    drugClass: "Third-generation cephalosporin",

    pharmacologicClass:
      "Beta-lactam antibiotic (cell wall synthesis inhibitor)",

    commonRoutes: [
      Route.PO,
    ],

    availableRoutes: [
      Route.PO,
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

      strength:
        "100 mg, 200 mg",

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

      strength:
        "50 mg/5 mL, 100 mg/5 mL",

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

  // =========================
  // DOG
  // =========================

  {
    species: Species.DOG,

    indication:
      "Susceptible skin infections",

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
      "5–7 days or 2–3 days beyond cessation of clinical signs (maximum 28 days)",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Staphylococcal skin infections",

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
    species: Species.DOG,

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


  // =========================
  // CAT
  // =========================

  {
    species: Species.CAT,

    indication:
      "Susceptible skin and soft tissue infections",

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
      "Susceptible skin and soft tissue infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 10,
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
    "Cefpodoxime inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs), preventing peptidoglycan cross-linking. It is a bactericidal third-generation cephalosporin and is relatively resistant to many bacterial beta-lactamases.",


  spectrum:
    "Active primarily against Gram-negative bacteria in the family Enterobacteriaceae (excluding Pseudomonas), including Escherichia coli, Proteus spp., and Klebsiella spp. Also active against susceptible Gram-positive Streptococcus spp. (excluding Enterococcus) and Staphylococcus spp. It is not effective against Pseudomonas aeruginosa, Enterococcus spp., anaerobes, or methicillin-resistant Staphylococcus strains (MRSA).",


  indications: [
    "Susceptible bacterial infections",
    "Skin infections",
    "Staphylococcal skin infections",
    "Soft tissue infections",
  ],


  commonUses: [
    "Canine skin infections",
    "Canine staphylococcal pyoderma",
    "Soft tissue infections",
    "Bacterial infections caused by susceptible organisms",
  ],


  clinicalDecisionNotes: [
    "Use cefpodoxime-specific susceptibility testing because susceptibility cannot be inferred from other third-generation cephalosporins.",
    "Dose adjustment may be required in patients with significantly reduced renal function.",
    "Use cautiously in patients with seizure disorders.",
    "Not effective against Pseudomonas aeruginosa, Enterococcus spp., anaerobes, or methicillin-resistant Staphylococcus strains.",
  ],


  clinicalPearls: [
    "May be administered with or without food.",
    "Generally well tolerated in dogs and cats.",
    "Primarily useful for susceptible skin and soft tissue infections.",
    "Treatment of acute infections should not continue beyond 3–4 days if no clinical response is observed.",
  ],

},
reproduction: {

  pregnancy: {

    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Cefpodoxime has not been shown to be teratogenic.",
      "Use during pregnancy only when clearly indicated.",
      "The safety of cefpodoxime proxetil has not been established in breeding dogs, pregnant dogs, or lactating bitches.",
      "FDA Pregnancy Category B in humans.",
    ],
  },


  lactation: {

    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "The drug enters maternal milk in low concentrations.",
      "Alteration of intestinal flora with resultant diarrhea in nursing offspring is theoretically possible.",
      "The safety of cefpodoxime proxetil has not been established in lactating bitches.",
    ],
  },


  breeding: {

    recommendation:
      ReproductionRecommendation.NOT_ESTABLISHED,

    notes: [
      "The safety of cefpodoxime proxetil has not been demonstrated in dogs used for breeding.",
    ],
  },

},
overdose: {

  signs: [
    "Gastrointestinal disturbances",
    "Vomiting",
    "Diarrhea",
    "Inappetence",
    "Hypersensitivity reactions",
    "Other adverse effects associated with cephalosporins",
  ],


  management: [
    "Cephalosporin overdoses are unlikely to cause significant toxicity.",
    "Provide supportive and symptomatic care.",
    "Monitor for gastrointestinal signs.",
    "Monitor for hypersensitivity reactions.",
    "Treat adverse effects as clinically indicated.",
  ],

},
safety: {

  contraindications: [
    "Known hypersensitivity to cefpodoxime.",
    "Known hypersensitivity to other cephalosporins.",
  ],


  precautions: [
    "Adjust dosage or dosing interval in patients with significantly reduced renal function.",
    "Use cautiously in patients with seizure disorders.",
    "Use during pregnancy only when clearly indicated.",
  ],


  adverseEffects: [
    "Inappetence",
    "Diarrhea",
    "Vomiting",
    "Hypersensitivity reactions",
    "Positive direct Coombs' test",
    "Blood dyscrasias following high doses (rare)",
  ],


  drugInteractions: [
    "No clinically significant drug interactions were provided in the reference.",
  ],


  monitoring: [
    "Monitor clinical response to therapy.",
    "Monitor for gastrointestinal adverse effects.",
    "Monitor renal function in patients with renal impairment.",
    "Monitor for hypersensitivity reactions.",
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
    publisher: "Plumb's Veterinary Drug Handbook",
  },
  {
    title: "Merck Veterinary Manual",
    publisher: "Merck Veterinary Manual",
  },
  {
    title: "BSAVA Small Animal Formulary",
    publisher: "BSAVA",
  },
],
metadata: {
  version: "1.0.0",

  lastReviewed: "2026-07-11",

  tags: [
    "cefpodoxime",
    "cefpodoxime proxetil",
    "Simplicef",
    "Vantin",
    "Cefpoderm",
    "Cefpo Vet",
    "CefPET",
    "Pawxy",
    "third-generation cephalosporin",
    "3rd generation cephalosporin",
    "cephalosporin antibiotic",
    "beta-lactam antibiotic",
    "cell wall synthesis inhibitor",
    "dog",
    "cat",
    "skin infection",
    "soft tissue infection",
    "staphylococcal skin infection",
    "pyoderma",
    "Escherichia coli",
    "Proteus",
    "Klebsiella",
    "Enterobacteriaceae",
    "Staphylococcus",
    "Streptococcus",
  ],
},
};

export default [cefpodoxime];