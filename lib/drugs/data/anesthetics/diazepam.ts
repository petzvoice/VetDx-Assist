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

const diazepam: Drug = {
  id: "diazepam",

  genericName: "Diazepam",

  brandNames: [
    "Valium",
    "Calmpose",
    "Diazepam Injection IP",
    "Diazepam Injection",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "diazepam",
    "valium",
    "calmpose",
    "benzodiazepine",

    "anxiolytic",
    "sedative",
    "muscle relaxant",
    "hypnotic",
    "anticonvulsant",
    "appetite stimulant",

    "status epilepticus",
    "cluster seizures",
    "seizure",
    "epilepsy",
    "preanesthetic",
    "premedication",

    "dog",
    "cat",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: true,

    category: "Central Nervous System",

    drugClass: "Benzodiazepine",

    pharmacologicClass:
      "Benzodiazepine anxiolytic, anticonvulsant, skeletal muscle relaxant",

    commonRoutes: [
      Route.IV,
      Route.PO,
      Route.PR,
    ],

    availableRoutes: [
      Route.IV,
      Route.PO,
      Route.PR,
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
      id: "injectable",

      dosageForm: DosageForm.INJECTION,

      strength: "5 mg/mL",

      concentration: {
        value: 5,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
      ],
    },

    {
      id: "tablet",

      dosageForm: DosageForm.TABLET,

      strength: "2 mg, 5 mg, 10 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-solution",

      dosageForm: DosageForm.ORAL_SOLUTION,

      strength: "1 mg/mL",

      concentration: {
        value: 1,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "rectal-gel",

      dosageForm: DosageForm.RECTAL_GEL,

      strength: "10 mg, 20 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PR,
      ],
    },

  ],

  doseReferences: [
        // =========================
    // DOG
    // =========================

    {
      species: Species.DOG,

      indication: "Cluster seizures or status epilepticus (home treatment)",

      route: Route.PR,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 2,
        maximum: 2,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "At onset of seizure; may repeat up to 3 doses within 24 hours, but not within 10 minutes of the previous dose",

      notes:
        "Use diazepam parenteral solution administered per rectum. Intended for dogs receiving phenobarbital.",

      reference:
        "Podell 2000; Podell 2006b",
    },

    {
  species: Species.DOG,

  indication: "Refractory status epilepticus (constant rate infusion)",

  route: Route.IV,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.1,
    maximum: 0.5,
    unit: DoseUnit.MG_PER_KG_HR,
  },

  frequency: "Constant rate infusion",

  notes:
    "Dilute in 5% dextrose (D5W) before administration.",

  reference:
    "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.DOG,

  indication: "Preanesthetic medication",

  route: Route.IV,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.1,
    maximum: 0.1,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency: "Single dose",

  notes:
    "Inject intravenously slowly.",

  reference:
    "Morgan 1988",
},

    // =========================
    // CAT
    // =========================

    {
      species: Species.CAT,

      indication: "Seizure disorders",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.25,
        maximum: 0.5,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency: "Every 8–12 hours",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication: "Ongoing seizure",

      route: Route.IV,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.5,
        maximum: 1,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency: "Single dose as needed",

      notes:
        "Administer slowly by intravenous injection to terminate an active seizure.",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },
      ],

  clinical: {

    mechanismOfAction:
      "Diazepam depresses subcortical regions of the CNS (primarily the limbic system, thalamus, and hypothalamus). It enhances GABA-mediated inhibition, producing anxiolytic, anticonvulsant, skeletal muscle relaxant, and sedative effects.",

    spectrum:
      "Benzodiazepine with anxiolytic, anticonvulsant, sedative, hypnotic, skeletal muscle relaxant, and appetite-stimulating properties.",

    indications: [
      "Seizure disorders",
      "Status epilepticus",
      "Cluster seizures",
      "Preanesthetic medication",
      "Anxiolysis",
      "Muscle relaxation",
      "Sedation",
      "Appetite stimulation",
    ],

    commonUses: [
      "Emergency seizure control",
      "Management of status epilepticus",
      "Preanesthetic sedation",
      "Adjunctive anticonvulsant therapy",
    ],

    clinicalDecisionNotes: [
      "Inject intravenously slowly.",
      "Avoid intra-carotid arterial injection.",
      "Rapid IV administration in small animals or neonates may cause cardiotoxicity due to propylene glycol in the formulation.",
      "Cats receiving oral diazepam for several days have developed idiosyncratic hepatic failure.",
      "Cats exposed to chlorpyrifos should not receive diazepam.",
      "Doses above 0.2 mg/kg in horses may induce recumbency because of muscle relaxation.",
    ],

    clinicalPearls: [
      "Controlled drug (Schedule C-IV).",
      "Sedation and ataxia are the most common adverse effects.",
      "Dogs may occasionally develop paradoxical CNS excitement.",
      "Cats may develop behavioral changes following administration.",
      "Muscle fasciculations may occur in horses.",
    ],

  },

  reproduction: {

    pregnancy: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "May be teratogenic.",
        "FDA Pregnancy Category C in humans.",
        "Use only when the potential benefit outweighs the risk.",
        "Canine and feline pregnancy classification: Class C.",
      ],
    },

    lactation: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Diazepam and its metabolites are distributed into milk.",
        "May produce CNS depression in nursing neonates.",
      ],
    },

    breeding: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Use cautiously in breeding animals because of potential reproductive risk.",
      ],
    },

  },

  overdose: {

    signs: [
      "Profound CNS depression",
      "Confusion",
      "Coma",
      "Reduced reflexes",
      "Hypotension",
      "Respiratory depression",
      "Cardiac arrest (rare)",
    ],

    management: [
      "Provide supportive and symptomatic care.",
      "Maintain airway and cardiovascular function.",
      "Monitor respiratory and neurologic status.",
    ],

  },
    safety: {

    contraindications: [
      "Hypersensitivity to benzodiazepines.",
      "Cats exposed to chlorpyrifos.",
      "Significant liver disease, especially in cats.",
    ],

    precautions: [
      "Use cautiously in patients with hepatic disease.",
      "Use cautiously in patients with renal disease.",
      "Use cautiously in aggressive, debilitated, or geriatric patients.",
      "Use cautiously in patients with coma, shock, or significant respiratory depression.",
      "Inject intravenously slowly.",
      "Avoid intra-carotid arterial injection.",
      "Rapid IV administration may cause thrombophlebitis or cardiotoxicity due to propylene glycol.",
    ],

    adverseEffects: [
      "Sedation.",
      "Ataxia.",
      "CNS excitement in dogs.",
      "Behavioral changes in cats.",
      "Hepatic failure in cats receiving repeated oral therapy.",
      "Muscle fasciculations in horses.",
      "Weakness.",
      "Recumbency at higher doses in horses.",
      "Respiratory depression (overdose).",
      "Hypotension (rare).",
    ],

    drugInteractions: [
      "Drug interactions are possible; monitor carefully when administered with other CNS depressants.",
    ],

    monitoring: [
      "Monitor level of sedation.",
      "Monitor respiratory function.",
      "Monitor seizure control.",
      "Monitor liver function in cats receiving repeated oral administration.",
      "Monitor for paradoxical excitement or behavioral changes.",
    ],

    withdrawalPeriod:
      "Not applicable for companion animals. Follow country-specific regulations for food-producing animals.",

    storage: [
      "Store all diazepam products at room temperature (15–30°C).",
      "Protect injectable solution from light.",
      "Do not freeze the injectable solution.",
      "Store tablets and capsules in tightly closed containers protected from light.",
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

    lastReviewed: "2026-07-16",

    tags: [
      "diazepam",
      "valium",
      "benzodiazepine",
      "anticonvulsant",
      "anxiolytic",
      "muscle relaxant",
      "sedative",
      "status epilepticus",
      "cluster seizures",
      "preanesthetic",
      "dog",
      "cat",
    ],
  },

};

export default [diazepam];