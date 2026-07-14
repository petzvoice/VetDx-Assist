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

const methylprednisolone: Drug = {
  id: "methylprednisolone",

  genericName: "Methylprednisolone",

  brandNames: [
  "Solu-Medrol",
  "Depo-Medrol",
  "Medrol",
  "MPS Injection",
  "(Generic brands vary by country)",
],

status: DrugStatus.ACTIVE,

searchTerms: [
  "methylprednisolone",
  "methylprednisolone sodium succinate",
  "methylprednisolone acetate",
  "Solu-Medrol",
  "Depo-Medrol",
  "Medrol",
  "glucocorticoid",
  "corticosteroid",
  "steroid",
  "anti-inflammatory",
  "immunosuppressant",
],

quickFacts: {
  prescriptionRequired: true,

  controlledDrug: false,

  category: "Corticosteroid",

  drugClass: "Glucocorticoid",

  pharmacologicClass: "Intermediate-acting Corticosteroid",

  commonRoutes: [
    Route.PO,
    Route.IV,
    Route.IM,
  ],

  availableRoutes: [
    Route.PO,
    Route.IV,
    Route.IM,
    Route.SC,
    Route.IA,
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
    id: "methylprednisolone-tablets",

    dosageForm: DosageForm.TABLET,

    strength: "2 mg, 4 mg, 8 mg, 16 mg, 32 mg",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [Route.PO],

    notes: "Methylprednisolone tablets.",
  },

  {
    id: "methylprednisolone-sodium-succinate",

    dosageForm: DosageForm.POWDER_FOR_INJECTION,

    strength: "40 mg/vial, 125 mg/vial, 500 mg/vial, 1 g/vial, 2 g/vial",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [
      Route.IV,
      Route.IM,
    ],

    notes: "Rapid-acting injectable formulation requiring reconstitution.",
  },

  {
    id: "methylprednisolone-acetate",

    dosageForm: DosageForm.INJECTABLE_SUSPENSION,

    strength: "20 mg/mL, 40 mg/mL, 80 mg/mL",

    concentration: {
      value: 20,
      unit: ConcentrationUnit.MG_PER_ML,
    },

    routes: [
      Route.IM,
      Route.SC,
      Route.IA,
    ],

    notes: "Long-acting depot corticosteroid suspension.",
  },
],

doseReferences: [
  // DOG
  {
    species: Species.DOG,

    indication: "Anti-inflammatory therapy",

    route: Route.PO,

    dose: {
      minimum: 1,
      maximum: 2,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Divide into 2–3 doses daily initially",

    duration: "5–10 days, then taper",

    maximumTotalDose: "",

    notes:
      "After clinical improvement, consolidate to once daily dosing (7–10 AM) for 1 week, then taper to 0.5–1 mg/kg/day for 5–7 days.",

    evidence: "Standard anti-inflammatory protocol.",

    reference: "Plumb's Veterinary Drug Handbook",
  },

  {
    species: Species.DOG,

    indication: "Anti-inflammatory therapy (Methylprednisolone)",

    route: Route.PO,

    dose: {
      minimum: 1,
      maximum: 1,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Every 8 hours",

    duration: "As clinically indicated",

    maximumTotalDose: "",

    notes: "Oral methylprednisolone.",

    evidence: "Jenkins 1985",

    reference: "Plumb's Veterinary Drug Handbook",
  },

  {
    species: Species.DOG,

    indication: "Anti-inflammatory therapy (Methylprednisolone acetate)",

    route: Route.IM,

    dose: {
      minimum: 1,
      maximum: 1,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Every 14 days",

    duration: "As clinically indicated",

    maximumTotalDose: "",

    notes: "Long-acting depot preparation.",

    evidence: "Jenkins 1985",

    reference: "Plumb's Veterinary Drug Handbook",
  },

  {
    species: Species.DOG,

    indication: "Immunosuppressive pulse therapy (Methylprednisolone sodium succinate)",

    route: Route.IV,

    dose: {
      minimum: 11,
      maximum: 11,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Once daily",

    duration: "3 consecutive days",

    maximumTotalDose: "",

    notes:
      "Infuse in 250 mL D5W over 1 hour for autoimmune skin diseases.",

    evidence: "Pulse therapy protocol.",

    reference: "Plumb's Veterinary Drug Handbook",
  },

  {
    species: Species.DOG,

    indication: "Acute immunosuppressive therapy (Methylprednisolone sodium succinate)",

    route: Route.IV,

    dose: {
      minimum: 30,
      maximum: 30,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Initial dose",

    duration: "Single initial dose",

    maximumTotalDose: "",

    notes:
      "Follow 2 hours later with 15 mg/kg IV, then 10 mg/kg IV or SC four times daily for 24–36 hours before tapering over 7 days.",

    evidence: "High-dose immunosuppressive protocol.",

    reference: "Plumb's Veterinary Drug Handbook",
  },

  // CAT
  {
    species: Species.CAT,

    indication: "Anti-inflammatory therapy (Methylprednisolone acetate)",

    route: Route.SC,

    dose: {
      minimum: 5.5,
      maximum: 5.5,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Single dose",

    duration: "Effects may last 1 week to 6 months",

    maximumTotalDose: "",

    notes: "May also be administered IM. Average adult cat receives approximately 20 mg.",

    evidence: "Scott 1982",

    reference: "Plumb's Veterinary Drug Handbook",
  },

  {
    species: Species.CAT,

    indication: "Adjunctive treatment of feline asthma",

    route: Route.SC,

    dose: {
      minimum: 2,
      maximum: 2,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "As directed",

    duration: "Clinical response dependent",

    maximumTotalDose: "",

    notes:
      "Reference does not specify route or dosing interval; methylprednisolone acetate used clinically.",

    evidence: "Papich 1986",

    reference: "Plumb's Veterinary Drug Handbook",
  },

  // HORSE
  {
    species: Species.HORSE,

    indication: "Anti-inflammatory therapy",

    route: Route.PO,

    dose: {
      minimum: 0.5,
      maximum: 0.5,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "As directed",

    duration: "Clinical response dependent",

    maximumTotalDose: "",

    notes: "Oral methylprednisolone.",

    evidence: "Robinson 1987",

    reference: "Plumb's Veterinary Drug Handbook",
  },

  {
    species: Species.HORSE,

    indication: "Anti-inflammatory therapy (Methylprednisolone sodium succinate)",

    route: Route.IV,

    dose: {
      minimum: 0.5,
      maximum: 0.5,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "As directed",

    duration: "Clinical response dependent",

    maximumTotalDose: "",

    notes: "May also be administered IM.",

    evidence: "Robinson 1987",

    reference: "Plumb's Veterinary Drug Handbook",
  },

  {
    species: Species.HORSE,

    indication: "Intra-articular therapy (Methylprednisolone acetate)",

    route: Route.IA,

    dose: {
      minimum: 100,
      maximum: 100,
      unit: DoseUnit.MG,
    },

    basis: DoseBasis.FIXED_DOSE,

    frequency: "Single intra-articular injection",

    duration: "As clinically indicated",

    maximumTotalDose: "",

    notes: "For joint disease.",

    evidence: "McClure 2002",

    reference: "Plumb's Veterinary Drug Handbook",
  },
],

clinical: {
  mechanismOfAction:
    "Synthetic glucocorticoid that diffuses across cell membranes and binds intracellular glucocorticoid receptors. The receptor-drug complex alters gene transcription, suppressing pro-inflammatory cytokines, prostaglandins and leukotrienes, reducing leukocyte migration, stabilizing lysosomal membranes, decreasing capillary permeability, and producing potent anti-inflammatory and immunosuppressive effects. Methylprednisolone has minimal mineralocorticoid activity.",

  spectrum:
    "Potent anti-inflammatory and immunosuppressive corticosteroid with approximately 4–5 times the anti-inflammatory potency of hydrocortisone and negligible mineralocorticoid effects.",

  indications: [
    "Inflammatory disorders",
    "Immune-mediated diseases",
    "Autoimmune dermatologic diseases",
    "Allergic conditions",
    "Asthma",
    "Anaphylaxis (adjunctive therapy)",
    "Spinal cord injury (historical protocols)",
    "Shock (selected protocols)",
    "Joint inflammation (intra-articular acetate)",
  ],

  commonUses: [
    "Anti-inflammatory therapy",
    "Immunosuppressive therapy",
    "Management of autoimmune diseases",
    "Dermatologic disorders",
    "Respiratory inflammatory diseases",
    "Emergency corticosteroid therapy (sodium succinate)",
    "Long-acting depot therapy (acetate formulation)",
    "Intra-articular treatment of joint inflammation",
  ],

  clinicalDecisionNotes: [
    "Use the lowest effective dose for the shortest possible duration.",
    "Taper gradually after prolonged therapy to avoid adrenal insufficiency.",
    "Sodium succinate is preferred when rapid IV glucocorticoid effects are required.",
    "Acetate formulation provides prolonged depot activity and is not appropriate for emergencies.",
    "Minimal mineralocorticoid activity makes methylprednisolone preferable when sodium retention is undesirable.",
    "Avoid long-acting depot formulations for chronic systemic corticosteroid therapy whenever possible.",
  ],

  clinicalPearls: [
    "Approximately 4–5 times more potent than hydrocortisone.",
    "Has negligible mineralocorticoid activity compared with prednisolone.",
    "Sodium succinate is water-soluble and suitable for IV or IM emergency administration.",
    "Acetate formulation is a long-acting depot preparation with prolonged duration of action.",
    "Monitor patients receiving long-term therapy for iatrogenic hyperadrenocorticism.",
    "Consider gastroprotectants in patients at increased risk of gastrointestinal ulceration.",
  ],
},
reproduction: {
  pregnancy: {
    recommendation: ReproductionRecommendation.BENEFIT_RISK,

    notes: [
      "Use only when the expected clinical benefit outweighs potential fetal risks.",
      "Excessive doses during early pregnancy may be teratogenic or embryotoxic.",
      "Administration during late pregnancy in horses and ruminants may induce parturition.",
    ],
  },

  lactation: {
    recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Use cautiously in nursing animals.",
      "Use the lowest effective dose for the shortest possible duration.",
      "Monitor neonates if prolonged maternal therapy is required.",
    ],
  },

  breeding: {
    recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "No specific evidence of impaired fertility at therapeutic doses.",
      "Avoid unnecessary corticosteroid exposure in breeding animals.",
      "Use only after a careful benefit-risk assessment.",
    ],
  },
},
overdose: {
  signs: [
    "Polyuria",
    "Polydipsia",
    "Polyphagia",
    "Vomiting",
    "Diarrhea",
    "Lethargy",
    "Panting",
    "Muscle weakness",
    "Hyperglycemia",
    "Acute CNS signs (rare)",
    "Signs of iatrogenic hyperadrenocorticism with chronic overdose",
    "Adrenal suppression",
  ],

  management: [
    "Discontinue or gradually taper therapy depending on treatment duration.",
    "Provide supportive and symptomatic care.",
    "Correct fluid, electrolyte, and metabolic abnormalities as needed.",
    "Monitor blood glucose and electrolytes.",
    "Monitor gastrointestinal complications and provide gastroprotective therapy if indicated.",
    "Avoid abrupt withdrawal after prolonged corticosteroid administration.",
  ],
},

safety: {
  contraindications: [
    "Systemic fungal infections",
    "Hypersensitivity to methylprednisolone",
    "Viral infections (manufacturer warning)",
    "Active untreated tuberculosis",
    "Peptic ulcer disease",
    "Acute psychoses",
    "Corneal ulceration",
    "Cushingoid syndrome",
  ],

  precautions: [
    "Use the lowest effective dose for the shortest possible duration.",
    "Taper gradually after prolonged therapy.",
    "Use cautiously in diabetes mellitus.",
    "Use cautiously in hypertension or congestive heart failure.",
    "Use cautiously in renal insufficiency.",
    "Use cautiously in osteoporosis.",
    "Use cautiously with active bacterial infections.",
    "Monitor for secondary infections during prolonged therapy.",
    "Avoid live vaccines during immunosuppressive treatment.",
  ],

  adverseEffects: [
    "Polyuria",
    "Polydipsia",
    "Polyphagia",
    "Panting",
    "Weight gain",
    "Muscle wasting",
    "Delayed wound healing",
    "Gastrointestinal ulceration",
    "Immunosuppression",
    "Increased susceptibility to infection",
    "Iatrogenic hyperadrenocorticism",
    "Adrenal suppression",
  ],

  drugInteractions: [
    "NSAIDs (increased gastrointestinal ulcer risk)",
    "Vaccines (reduced immune response)",
    "Insulin and oral hypoglycemics (reduced efficacy)",
    "Phenobarbital",
    "Phenytoin",
    "Rifampin",
    "Cyclosporine",
    "Diuretics causing hypokalemia",
  ],

  monitoring: [
    "Clinical response",
    "Signs of infection",
    "Body weight",
    "Blood glucose",
    "Serum electrolytes",
    "Liver enzymes",
    "Urinalysis during long-term therapy",
    "Signs of hyperadrenocorticism",
  ],

  withdrawalPeriod: "Not applicable for companion animals. Observe regional withdrawal periods for food-producing animals.",

  storage: [
    "Store all formulations at 15–30°C.",
    "Protect from freezing.",
    "After reconstitution, methylprednisolone sodium succinate should be stored at room temperature and used within 48 hours.",
    "Use only clear reconstituted sodium succinate solutions.",
    "Protect injectable products from excessive heat and light.",
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

  lastReviewed: "2026-07-14",

  tags: [
    "methylprednisolone",
    "methylprednisolone sodium succinate",
    "methylprednisolone acetate",
    "Solu-Medrol",
    "Depo-Medrol",
    "Medrol",
    "glucocorticoid",
    "corticosteroid",
    "anti-inflammatory",
    "immunosuppressant",
    "emergency corticosteroid",
    "depot corticosteroid",
    "intra-articular",
  ],
},
};

export default [methylprednisolone];