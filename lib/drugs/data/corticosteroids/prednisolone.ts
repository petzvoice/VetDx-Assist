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

const prednisolone: Drug = {
  id: "prednisolone",

  genericName: "Prednisolone",
  brandNames: [
  "Prednicortone",
  "Omnipred",
  "Pred Forte",
  "Wysolone",
  "Pred Vet",
  "(Generic brands vary by country)",
],

status: DrugStatus.ACTIVE,

searchTerms: [
  "prednisolone",
  "prednisone",
  "prednisolone sodium succinate",
  "prednisolone sodium phosphate",
  "prednisolone acetate",
  "prednisolone tebutate",
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
    Route.OPHTHALMIC,
  ],

  availableRoutes: [
    Route.PO,
    Route.IV,
    Route.IM,
    Route.OPHTHALMIC,
  ],

  availableSpecies: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
    Species.CATTLE,
    Species.PIG,
  ],
},

species: [
  Species.DOG,
  Species.CAT,
  Species.HORSE,
  Species.CATTLE,
  Species.PIG,
],

formulations: [
  {
    id: "prednisolone-tablets",

    dosageForm: DosageForm.TABLET,

    strength: "1 mg, 5 mg, 10 mg, 20 mg, 25 mg, 50 mg",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [Route.PO],

    notes: "Prednisolone base tablets.",
  },

  {
    id: "prednisolone-oral-solution",

    dosageForm: DosageForm.ORAL_SOLUTION,

    strength: "1 mg/mL, 3 mg/mL",

    concentration: {
      value: 1,
      unit: ConcentrationUnit.MG_PER_ML,
    },

    routes: [Route.PO],

    notes: "Available as prednisolone base or prednisolone sodium phosphate.",
  },

  {
    id: "prednisolone-sodium-phosphate-injection",

    dosageForm: DosageForm.INJECTION,

    strength: "25 mg/mL",

    concentration: {
      value: 25,
      unit: ConcentrationUnit.MG_PER_ML,
    },

    routes: [
      Route.IV,
      Route.IM,
    ],

    notes: "Prednisolone sodium phosphate.",
  },

  {
    id: "prednisolone-sodium-succinate",

    dosageForm: DosageForm.POWDER_FOR_INJECTION,

    strength: "100 mg/vial, 250 mg/vial, 500 mg/vial, 1 g/vial",

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
    id: "prednisolone-acetate",

    dosageForm: DosageForm.OPHTHALMIC_SUSPENSION,

    strength: "0.12%, 1%",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [Route.OPHTHALMIC],

    notes: "Ophthalmic corticosteroid suspension.",
  },

  {
    id: "prednisolone-sodium-phosphate-ophthalmic",

    dosageForm: DosageForm.OPHTHALMIC_SOLUTION,

    strength: "0.125%, 0.5%, 1%",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [Route.OPHTHALMIC],

    notes: "Ophthalmic corticosteroid solution.",
  },
  ], 

 doseReferences: [
  {
    species: Species.DOG,

    indication: "Anti-inflammatory therapy",

    route: Route.PO,

    dose: {
      minimum: 0.25,
      maximum: 1,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Every 12–24 hours",

    duration: "Adjust according to clinical response; taper if prolonged therapy.",

    maximumTotalDose: "",

    notes: "Typical anti-inflammatory dosage.",

    evidence: "Established veterinary clinical use.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Immunosuppressive therapy",

    route: Route.PO,

    dose: {
      minimum: 2,
      maximum: 4,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Every 24 hours initially",

    duration: "Reduce gradually to the lowest effective maintenance dose.",

    maximumTotalDose: "",

    notes: "Used for immune-mediated diseases.",

    evidence: "Established veterinary clinical use.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Hypoadrenocortical crisis (Prednisolone sodium succinate)",

    route: Route.IV,

    dose: {
      minimum: 4,
      maximum: 20,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "May repeat every 2–6 hours if required",

    duration: "Acute emergency treatment.",

    maximumTotalDose: "",

    notes: "Administer by slow IV injection.",

    evidence: "Published veterinary emergency recommendations.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication: "Anti-inflammatory therapy",

    route: Route.PO,

    dose: {
      minimum: 0.5,
      maximum: 1,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Every 12–24 hours",

    duration: "Adjust according to clinical response; taper if prolonged therapy.",

    maximumTotalDose: "",

    notes: "Prednisolone is preferred over prednisone in cats.",

    evidence: "Established veterinary clinical use.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication: "Immunosuppressive therapy",

    route: Route.PO,

    dose: {
      minimum: 2,
      maximum: 4,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Every 24 hours initially",

    duration: "Reduce gradually once remission is achieved.",

    maximumTotalDose: "",

    notes: "Prednisolone is preferred over prednisone in cats.",

    evidence: "Established veterinary clinical use.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.HORSE,

    indication: "Systemic anti-inflammatory therapy",

    route: Route.PO,

    dose: {
      minimum: 0.5,
      maximum: 1,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Every 24 hours",

    duration: "Adjust according to clinical response; taper if prolonged therapy.",

    maximumTotalDose: "",

    notes: "Prednisolone is preferred over prednisone in horses.",

    evidence: "Established veterinary clinical use.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CATTLE,

    indication: "Adjunctive therapy for aseptic laminitis (Prednisolone sodium succinate)",

    route: Route.IV,

    dose: {
      minimum: 0.25,
      maximum: 1,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Every 24 hours",

    duration: "2–3 days",

    maximumTotalDose: "",

    notes: "May be administered IV or IM.",

    evidence: "Published veterinary recommendations.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.PIG,

    indication: "Systemic corticosteroid therapy (Prednisolone sodium succinate)",

    route: Route.IV,

    dose: {
      minimum: 0.2,
      maximum: 1,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Every 24 hours as clinically indicated",

    duration: "According to clinical response.",

    maximumTotalDose: "",

    notes: "May be administered IV or IM.",

    evidence: "Published veterinary recommendations.",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
  species: Species.CATTLE,

  indication: "Adjunctive therapy for aseptic laminitis (Prednisolone sodium succinate)",

  route: Route.IV,

  dose: {
    minimum: 100,
    maximum: 200,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Every 24 hours",

  duration: "2–3 days",

  maximumTotalDose: "",

  notes: "May be administered IV or IM.",

  evidence: "Published veterinary recommendations.",

  reference: "Plumb's Veterinary Drug Handbook.",
},

],

clinical: {
  mechanismOfAction:
    "Prednisolone is a synthetic intermediate-acting glucocorticoid that binds intracellular glucocorticoid receptors, altering gene transcription to suppress inflammatory mediators, reduce leukocyte migration, stabilize lysosomal membranes, decrease capillary permeability, and suppress immune responses.",

  spectrum:
    "Potent anti-inflammatory, immunosuppressive, antiallergic, and glucocorticoid replacement agent with mild mineralocorticoid activity.",

  indications: [
    "Inflammatory disorders.",
    "Immune-mediated diseases.",
    "Allergic disorders.",
    "Autoimmune diseases.",
    "Hypoadrenocorticism (glucocorticoid replacement).",
    "Respiratory diseases.",
    "Dermatologic diseases.",
    "Neurologic disorders.",
    "Hematologic disorders.",
    "Neoplastic diseases.",
    "Ophthalmic inflammatory conditions.",
  ],

  commonUses: [
    "Anti-inflammatory therapy.",
    "Immunosuppressive therapy.",
    "Management of allergic reactions.",
    "Treatment of immune-mediated hemolytic anemia (IMHA).",
    "Treatment of immune-mediated thrombocytopenia (IMTP).",
    "Adjunctive therapy for lymphoma and other neoplasms.",
    "Management of hypoadrenocorticism.",
    "Treatment of inflammatory eye disease.",
  ],

  clinicalDecisionNotes: [
    "Use the lowest effective dose for the shortest possible duration.",
    "Gradually taper therapy after prolonged administration to avoid adrenal suppression.",
    "Prednisolone is preferred over prednisone in cats, horses, and patients with hepatic insufficiency.",
    "Long-acting injectable corticosteroids are not recommended for chronic systemic therapy.",
    "Rule out infectious diseases before initiating immunosuppressive doses.",
  ],

  clinicalPearls: [
    "Prednisolone is approximately four times more potent than hydrocortisone.",
    "Prednisone is poorly absorbed in horses and is inconsistently converted to prednisolone in cats.",
    "Alternate-day therapy reduces the risk of hypothalamic-pituitary-adrenal axis suppression during long-term treatment.",
    "Monitor carefully for signs of iatrogenic hyperadrenocorticism during prolonged therapy.",
  ],
},
reproduction: {
  pregnancy: {
    recommendation: ReproductionRecommendation.BENEFIT_RISK,

    notes: [
      "Use only when the potential maternal benefit outweighs fetal risk.",
      "Corticosteroids may induce parturition in large animal species during late pregnancy.",
      "Use the lowest effective dose for the shortest possible duration.",
    ],
  },

  lactation: {
    recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Prednisolone is excreted into milk in small amounts.",
      "Short-term therapy is generally compatible with nursing, but prolonged high-dose therapy may affect neonates.",
      "Monitor nursing offspring if prolonged therapy is required.",
    ],
  },

  breeding: {
    recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "No established adverse effects on fertility at therapeutic doses.",
      "Long-term or high-dose corticosteroid therapy should be used cautiously in breeding animals.",
    ],
  },
},

overdose: {
  signs: [
    "Polyuria.",
    "Polydipsia.",
    "Polyphagia.",
    "Panting.",
    "Vomiting.",
    "Diarrhea.",
    "Hyperglycemia.",
    "Gastrointestinal ulceration.",
    "Secondary infections.",
    "Iatrogenic hyperadrenocorticism with chronic overdose.",
  ],

  management: [
    "Discontinue or gradually taper corticosteroid therapy when appropriate.",
    "Provide supportive care and treat clinical signs.",
    "Correct fluid and electrolyte abnormalities.",
    "Manage gastrointestinal ulceration if present.",
    "Monitor blood glucose and secondary infections.",
  ],
},
safety: {
  contraindications: [
    "Systemic fungal infections (unless used for physiologic replacement in hypoadrenocorticism).",
    "Hypersensitivity to prednisolone or other corticosteroids.",
    "Long-acting injectable corticosteroids for chronic systemic therapy.",
    "Intramuscular administration in patients with idiopathic thrombocytopenia.",
  ],

  precautions: [
    "Use cautiously in active bacterial, viral, or parasitic infections.",
    "Use cautiously in diabetes mellitus.",
    "Use cautiously in corneal ulcers.",
    "Use cautiously in congestive heart failure, hypertension, renal insufficiency, or osteoporosis.",
    "Use cautiously in patients with gastrointestinal ulceration.",
    "Avoid abrupt withdrawal following prolonged therapy; taper gradually.",
    "Use the lowest effective dose for the shortest duration possible.",
  ],

  adverseEffects: [
    "Polyuria.",
    "Polydipsia.",
    "Polyphagia.",
    "Panting.",
    "Weight gain.",
    "Muscle wasting.",
    "Delayed wound healing.",
    "Immunosuppression.",
    "Gastrointestinal ulceration.",
    "Vomiting.",
    "Diarrhea.",
    "Iatrogenic hyperadrenocorticism with prolonged therapy.",
    "Adrenal suppression after long-term administration.",
    "Growth retardation in young animals.",
  ],

  drugInteractions: [
    "NSAIDs (increased risk of gastrointestinal ulceration).",
    "Vaccines (reduced immune response).",
    "Insulin and oral hypoglycemic agents (reduced effectiveness).",
    "Phenobarbital and other hepatic enzyme inducers (may reduce corticosteroid effect).",
    "Potassium-depleting diuretics (increased risk of hypokalemia).",
    "Cyclosporine (altered concentrations of either drug).",
  ],

  monitoring: [
    "Clinical response.",
    "Body weight.",
    "Water intake and urination.",
    "Blood glucose.",
    "Complete blood count.",
    "Serum biochemistry.",
    "Blood pressure during prolonged therapy.",
    "Signs of secondary infection.",
    "Evidence of gastrointestinal ulceration.",
  ],

  withdrawalPeriod: "",

  storage: [
    "Store tablets and oral solutions at controlled room temperature unless otherwise specified by the manufacturer.",
    "Protect injectable formulations from freezing.",
    "Store ophthalmic products according to manufacturer recommendations and keep containers tightly closed.",
    "Reconstituted prednisolone sodium succinate should be used according to manufacturer stability recommendations.",
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
    "prednisolone",
    "prednisone",
    "prednisolone sodium succinate",
    "prednisolone sodium phosphate",
    "prednisolone acetate",
    "glucocorticoid",
    "corticosteroid",
    "anti-inflammatory",
    "immunosuppressant",
    "adrenal insufficiency",
    "allergy",
    "IMHA",
    "IMTP",
  ],
},
};

export default [prednisolone];
