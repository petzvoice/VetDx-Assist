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

const amoxicillinClavulanate: Drug = {
  id: "amoxicillin-clavulanate",

  genericName: "Amoxicillin + Clavulanic Acid",

  brandNames: [
    "Clavamox",
    "Synulox",
    "Augmentin",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "amoxicillin",
    "clavulanate",
    "clavulanic acid",
    "co-amoxiclav",
    "clavamox",
    "synulox",
    "augmentin",
    "amoxyclav",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antibiotic",

    drugClass: "Beta-lactam Antibiotic",

    pharmacologicClass:
      "Aminopenicillin + Beta-lactamase inhibitor",

   commonRoutes: [
  Route.PO,
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
      id: "tablet-50",

      dosageForm: DosageForm.TABLET,

      strength: "50 mg",

      concentration: {
        value: 50,
        unit: ConcentrationUnit.MG_PER_TABLET,
      },

      routes: [Route.PO],
    },

    {
      id: "tablet-250",

      dosageForm: DosageForm.TABLET,

      strength: "250 mg",

      concentration: {
        value: 250,
        unit: ConcentrationUnit.MG_PER_TABLET,
      },

      routes: [Route.PO],
    },

    {
      id: "tablet-500",

      dosageForm: DosageForm.TABLET,

      strength: "500 mg",

      concentration: {
        value: 500,
        unit: ConcentrationUnit.MG_PER_TABLET,
      },

      routes: [Route.PO],
    },

    {
      id: "oral-suspension-62-5",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength: "62.5 mg/mL",

      concentration: {
        value: 62.5,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [Route.PO],

      notes:
        "Verify product concentration before calculating dose.",
    },
  ],

  doseReferences: [
    {
      species: Species.DOG,

      indication: "Susceptible bacterial infections",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 12.5,
        maximum: 25,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency: "Every 8–12 hours",

      reference:
        "Merck Veterinary Manual",
    },

    {
      species: Species.CAT,

      indication: "Susceptible bacterial infections",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 10,
        maximum: 20,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency: "Every 8 hours",

      fixedDose: "62.5 mg/cat every 12 hours (label-dependent)",

      reference:
        "Merck Veterinary Manual",
    },
  ],

  clinical: {
    mechanismOfAction:
      "Amoxicillin inhibits bacterial cell wall synthesis. Clavulanic acid inhibits many beta-lactamases, expanding antibacterial activity.",

    spectrum:
      "Broad-spectrum activity against many susceptible Gram-positive and Gram-negative organisms, including many beta-lactamase-producing bacteria.",

    indications: [
      "Skin and soft tissue infections",
      "Urinary tract infections",
      "Respiratory tract infections",
      "Oral infections",
      "Wound infections",
    ],

    commonUses: [
      "Pyoderma",
      "Abscesses",
      "Periodontal infections",
      "Urinary tract infections",
      "Respiratory infections",
    ],
        clinicalDecisionNotes: [
      "Use antimicrobial therapy based on culture and susceptibility testing whenever possible.",
      "Reassess therapy if expected clinical improvement is not observed.",
      "Select antimicrobial therapy based on the site of infection, likely pathogen, pharmacokinetics, and antimicrobial stewardship principles.",
      "This drug reference is intended for educational and clinical support and does not replace professional veterinary judgment.",
    ],

    clinicalPearls: [
      "Clavulanic acid inhibits many beta-lactamases, extending the activity of amoxicillin.",
      "One of the first-line oral antimicrobials for many uncomplicated canine and feline urinary tract infections caused by susceptible organisms.",
      "Time-dependent antimicrobial; maintaining appropriate dosing intervals is important.",
      "Verify product concentration before calculating administration volume.",
      "Culture and susceptibility testing are recommended for recurrent, deep, severe, or non-responsive infections.",
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
      "Use only after veterinary risk-benefit assessment.",
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
    "Hypersalivation",
    "Loss of appetite",
  ],

  management: [
    "Discontinue the drug.",
  "Provide symptomatic and supportive care.",
  "Maintain hydration and electrolyte balance.",
  "Consider gastrointestinal protectants when clinically indicated.",
  "Monitor renal function in severe overdose.",
  "Monitor the patient until clinical signs resolve.",
  ],
},

safety: {
    contraindications: [
      "Known hypersensitivity to penicillins.",
      "Known hypersensitivity to beta-lactam antibiotics.",
    ],

    precautions: [
      "Use with caution in patients with previous allergic reactions to beta-lactam antimicrobials.",
      "Antimicrobial use should follow responsible antimicrobial stewardship principles.",
      "Dose adjustments may be required in patients with significant renal dysfunction.",
    ],

    adverseEffects: [
      "Vomiting",
      "Diarrhea",
      "Reduced appetite",
      "Hypersensitivity reactions",
      "Rare anaphylaxis",
    ],

    drugInteractions: [
      "Review concurrent medications before prescribing.",
      "Potential interactions may occur with other antimicrobials depending on the clinical situation.",
    ],

    monitoring: [
      "Monitor clinical response.",
      "Monitor gastrointestinal tolerance.",
      "Monitor for allergic reactions.",
    ],



    storage: [
      "Store according to manufacturer recommendations.",
      "Protect tablets from excessive moisture.",
      "Reconstituted suspensions should be stored and discarded according to product labeling.",
    ],
  },

  references: [
    {
      title: "Merck Veterinary Manual",
      publisher: "Merck & Co.",
    },
    {
      title: "Plumb's Veterinary Drug Handbook",
    },
    {
      title: "BSAVA Small Animal Formulary",
    },
  ],

  metadata: {
    version: "1.0.0",
    lastReviewed: "2026-07-10",
    tags: [
      "antibiotic",
      "beta-lactam",
      "penicillin",
      "dog",
      "cat",
      "oral",
      "urinary",
      "skin",
    ],
  },
};

const antibiotics: Drug[] = [
  amoxicillinClavulanate,
];

export default antibiotics;