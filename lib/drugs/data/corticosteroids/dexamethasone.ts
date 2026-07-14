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

const dexamethasone: Drug = {
  id: "dexamethasone",

  genericName: "Dexamethasone",

  brandNames: [
    "Dexadreson",
    "Dexona Vet",
    "Dexavet",
    "Dexcare",
    "Decadron",
    "Dexona",
    "Dexasone",
    "Dexashot",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "dexamethasone",
    "dexamethasone sodium phosphate",
    "dexadreson",
    "dexona",
    "dexavet",
    "decadron",
    "glucocorticoid",
    "corticosteroid",
    "anti-inflammatory",
    "immunosuppressant",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Corticosteroid",

    drugClass: "Glucocorticoid",

    pharmacologicClass: "Long-acting Corticosteroid",

    commonRoutes: [
      Route.PO,
      Route.IV,
      Route.IM,
    ],

    availableRoutes: [
      Route.PO,
      Route.IV,
      Route.IM,
      Route.OPHTHALMIC,
      Route.OTIC,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.CATTLE,
      Species.HORSE,
      Species.PIG,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.CATTLE,
    Species.HORSE,
    Species.PIG,
  ],

  formulations: [
    {
      id: "dexamethasone-injection",

      dosageForm: DosageForm.INJECTION,

      strength: "2 mg/mL",

      concentration: {
        value: 2,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
      ],
    },

    {
      id: "dexamethasone-injection-4",

      dosageForm: DosageForm.INJECTION,

      strength: "4 mg/mL",

      concentration: {
        value: 4,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
      ],
    },

    {
      id: "dexamethasone-tablets",

      dosageForm: DosageForm.TABLET,

      strength: "0.5 mg, 0.75 mg, 1 mg, 2 mg, 4 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "dexamethasone-oral-solution",

      dosageForm: DosageForm.ORAL_SOLUTION,

      strength: "0.5 mg/5 mL, 2 mg/5 mL",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "dexamethasone-sodium-phosphate-injection",

      dosageForm: DosageForm.INJECTION,

      strength: "2 mg/mL, 4 mg/mL",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.IV,
        Route.IM,
      ],
    },

    {
      id: "dexamethasone-ophthalmic",

      dosageForm: DosageForm.OPHTHALMIC_SOLUTION,

      strength: "0.1%",

      concentration: {
        value: 0.1,
        unit: ConcentrationUnit.PERCENT,
      },

      routes: [
        Route.OPHTHALMIC,
      ],
    },

    {
      id: "dexamethasone-otic",

      dosageForm: DosageForm.OTIC_SOLUTION,

      strength: "0.1%",

      concentration: {
        value: 0.1,
        unit: ConcentrationUnit.PERCENT,
      },

      routes: [
        Route.OTIC,
      ],
    },
  ],
doseReferences: [
  {
    species: Species.DOG,

    indication: "Anti-inflammatory therapy (label dose)",

    route: Route.IV,

    dose: {
      minimum: 0.5,
      maximum: 1,
      unit: DoseUnit.MG,
    },

    basis: DoseBasis.FIXED_DOSE,

    frequency: "May be repeated every 24 hours.",

    duration: "3–5 days.",

    maximumTotalDose: "",

    notes: "Label dose for injectable dexamethasone.",

    evidence: "Manufacturer labeling.",

    reference: "Azium® Package Insert",
  },

  {
    species: Species.DOG,

    indication: "Anti-inflammatory therapy (label dose)",

    route: Route.IM,

    dose: {
      minimum: 0.5,
      maximum: 1,
      unit: DoseUnit.MG,
    },

    basis: DoseBasis.FIXED_DOSE,

    frequency: "May be repeated every 24 hours.",

    duration: "3–5 days.",

    maximumTotalDose: "",

    notes: "Label dose for injectable dexamethasone.",

    evidence: "Manufacturer labeling.",

    reference: "Azium® Package Insert",
  },

  {
    species: Species.DOG,

    indication: "Anti-inflammatory therapy (label dose)",

    route: Route.PO,

    dose: {
      minimum: 0.25,
      maximum: 1.25,
      unit: DoseUnit.MG,
    },

    basis: DoseBasis.FIXED_DOSE,

    frequency: "Once daily or in two divided doses.",

    duration: "As clinically indicated.",

    maximumTotalDose: "",

    notes: "Label oral tablet dose.",

    evidence: "Manufacturer labeling.",

    reference: "Azium® Package Insert",
  },

  {
    species: Species.DOG,

    indication: "Low-dose dexamethasone suppression test",

    route: Route.IV,

    dose: {
      minimum: 0.01,
      maximum: 0.015,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Single dose.",

    duration: "One time.",

    maximumTotalDose: "",

    notes: "Collect cortisol samples before dosing and at 4 and 8 hours post-administration.",

    evidence: "Kemppainen & Zerbe (1989).",

    reference: "Plumb's Veterinary Drug Handbook",
  },

  {
    species: Species.DOG,

    indication: "Low-dose dexamethasone suppression test",

    route: Route.IV,

    dose: {
      minimum: 0.01,
      maximum: 0.01,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Single dose.",

    duration: "One time.",

    maximumTotalDose: "",

    notes: "Using dexamethasone sodium phosphate; obtain cortisol sample 8 hours after injection.",

    evidence: "Feldman; Morgan.",

    reference: "Plumb's Veterinary Drug Handbook",
  },

  {
    species: Species.DOG,

    indication: "High-dose dexamethasone suppression test",

    route: Route.IV,

    dose: {
      minimum: 0.1,
      maximum: 1,
      unit: DoseUnit.MG_PER_KG,
    },

    basis: DoseBasis.BODY_WEIGHT,

    frequency: "Single dose.",

    duration: "One time.",

    maximumTotalDose: "",

    notes: "Use 1 mg/kg only if not suppressed with 0.1 mg/kg; use cautiously in diabetic patients.",

    evidence: "Kemppainen & Zerbe (1989).",

    reference: "Plumb's Veterinary Drug Handbook",
  },

{
  species: Species.DOG,

  indication: "High-dose dexamethasone suppression test (HDDST)",

  route: Route.IV,

  dose: {
    minimum: 0.1,
    maximum: 0.1,
    unit: DoseUnit.MG_PER_KG,
  },

  basis: DoseBasis.BODY_WEIGHT,

  frequency: "Single dose",

  duration: "One-time administration",

  maximumTotalDose: "",

  notes: "Use dexamethasone sodium phosphate. Collect serum cortisol sample 8 hours after administration.",

  evidence: "Feldman (1989).",

  reference: "Plumb's Veterinary Drug Handbook.",
},

{
  species: Species.DOG,

  indication: "High-dose dexamethasone suppression test (HDDST)",

  route: Route.IV,

  dose: {
    minimum: 0.1,
    maximum: 0.1,
    unit: DoseUnit.MG_PER_KG,
  },

  basis: DoseBasis.BODY_WEIGHT,

  frequency: "Single dose",

  duration: "One-time administration",

  maximumTotalDose: "",

  notes: "Use dexamethasone sodium phosphate. Collect serum cortisol sample 4 hours after administration.",

  evidence: "Morgan (1988).",

  reference: "Plumb's Veterinary Drug Handbook.",
},

{
  species: Species.DOG,

  indication: "Combined dexamethasone suppression-ACTH stimulation test",

  route: Route.IV,

  dose: {
    minimum: 0.1,
    maximum: 0.1,
    unit: DoseUnit.MG_PER_KG,
  },

  basis: DoseBasis.BODY_WEIGHT,

  frequency: "Single dose",

  duration: "One-time administration",

  maximumTotalDose: "",

  notes: "Collect a baseline cortisol sample, administer dexamethasone, collect a sample 4 hours later, administer ACTH, then collect a post-ACTH cortisol sample 2 hours later.",

  evidence: "Kemppainen & Zerbe (1989).",

  reference: "Plumb's Veterinary Drug Handbook.",
},

{
  species: Species.DOG,

  indication: "Tentative diagnosis of hypoadrenocorticism (Addison's disease)",

  route: Route.IV,

  dose: {
    minimum: 2,
    maximum: 5,
    unit: DoseUnit.MG_PER_KG,
  },

  basis: DoseBasis.BODY_WEIGHT,

  frequency: "Single dose",

  duration: "One-time administration during diagnostic evaluation",

  maximumTotalDose: "",

  notes: "Administer dexamethasone sodium phosphate after collecting baseline blood samples and immediately before cosyntropin administration.",

  evidence: "Schaer (2006).",

  reference: "Plumb's Veterinary Drug Handbook.",
},

{
  species: Species.CAT,

  indication: "Anti-inflammatory therapy (label dose)",

  route: Route.IV,

  dose: {
    minimum: 0.125,
    maximum: 0.5,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Every 24 hours, if needed",

  duration: "3–5 days",

  maximumTotalDose: "",

  notes: "Injectable label dose.",

  evidence: "Manufacturer labeling.",

  reference: "Azium® Package Insert.",
},

{
  species: Species.CAT,

  indication: "Anti-inflammatory therapy (label dose)",

  route: Route.IM,

  dose: {
    minimum: 0.125,
    maximum: 0.5,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Every 24 hours, if needed",

  duration: "3–5 days",

  maximumTotalDose: "",

  notes: "Injectable label dose.",

  evidence: "Manufacturer labeling.",

  reference: "Azium® Package Insert.",
},

{
  species: Species.CAT,

  indication: "Anti-inflammatory therapy (label dose)",

  route: Route.PO,

  dose: {
    minimum: 0.125,
    maximum: 0.5,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Once daily or in divided doses",

  duration: "According to clinical response",

  maximumTotalDose: "",

  notes: "Oral tablet label dose.",

  evidence: "Manufacturer labeling.",

  reference: "Azium® Package Insert.",
},
{
  species: Species.CAT,

  indication: "High-dose dexamethasone suppression test (screening for hyperadrenocorticism)",

  route: Route.IV,

  dose: {
    minimum: 0.1,
    maximum: 0.1,
    unit: DoseUnit.MG_PER_KG,
  },

  basis: DoseBasis.BODY_WEIGHT,

  frequency: "Single dose.",

  duration: "One time.",

  maximumTotalDose: "",

  notes: "A dose of 1 mg/kg IV may help differentiate pituitary-dependent hyperadrenocorticism from adrenal tumor.",

  evidence: "Zerbe (1989).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CAT,

  indication: "Combined dexamethasone suppression-ACTH stimulation test",

  route: Route.IV,

  dose: {
    minimum: 0.1,
    maximum: 0.1,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Single dose.",

  duration: "One time.",

  maximumTotalDose: "",

  notes: "Collect baseline blood sample, administer dexamethasone, collect sample after 2 hours, administer ACTH, then collect samples at 1 and 2 hours post-ACTH.",

  evidence: "Zerbe (1989).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CAT,

  indication: "Endotoxic or septicemic shock",

  route: Route.IV,

  dose: {
    minimum: 5,
    maximum: 5,
    unit: DoseUnit.MG_PER_KG,
  },

  basis: DoseBasis.BODY_WEIGHT,

  frequency: "Single dose.",

  duration: "As clinically indicated.",

  maximumTotalDose: "",

  notes: "Use dexamethasone sodium succinate formulation.",

  evidence: "Jenkins (1985).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CATTLE,

  indication: "Adjunctive therapy for insect bites or stings",

  route: Route.IM,

  dose: {
    minimum: 2,
    maximum: 2,
    unit: DoseUnit.MG_PER_KG,
  },

  basis: DoseBasis.BODY_WEIGHT,

  frequency: "Every 4 hours.",

  duration: "As clinically indicated.",

  maximumTotalDose: "",

  notes: "Use epinephrine if anaphylaxis develops.",

  evidence: "Fowler (1993).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CATTLE,

  indication: "Adjunctive therapy for insect bites or stings",

  route: Route.IV,

  dose: {
    minimum: 2,
    maximum: 2,
    unit: DoseUnit.MG_PER_KG,
  },

  basis: DoseBasis.BODY_WEIGHT,

  frequency: "Every 4 hours.",

  duration: "As clinically indicated.",

  maximumTotalDose: "",

  notes: "Use epinephrine if anaphylaxis develops.",

  evidence: "Fowler (1993).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CATTLE,

  indication: "Adjunctive therapy for cerebral edema secondary to polioencephalomalacia",

  route: Route.IV,

  dose: {
    minimum: 1,
    maximum: 2,
    unit: DoseUnit.MG_PER_KG,
  },

  basis: DoseBasis.BODY_WEIGHT,

  frequency: "As clinically indicated.",

  duration: "",

  maximumTotalDose: "",

  notes: "",

  evidence: "Dill (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},
{
  species: Species.CATTLE,

  indication: "Adjunctive therapy for radial nerve injury or femoral nerve paralysis (adult cattle)",

  route: Route.IM,

  dose: {
    minimum: 20,
    maximum: 40,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Once daily.",

  duration: "2–3 days; many cases require only a single dose.",

  maximumTotalDose: "",

  notes: "For adult cattle weighing 400–800 kg; not recommended in pregnant cattle.",

  evidence: "Rebhun (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CATTLE,

  indication: "Adjunctive therapy for radial nerve injury or femoral nerve paralysis (adult cattle)",

  route: Route.IV,

  dose: {
    minimum: 20,
    maximum: 40,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Once daily.",

  duration: "2–3 days; many cases require only a single dose.",

  maximumTotalDose: "",

  notes: "For adult cattle weighing 400–800 kg; not recommended in pregnant cattle.",

  evidence: "Rebhun (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CATTLE,

  indication: "Adjunctive therapy for radial nerve injury or femoral nerve paralysis (calves)",

  route: Route.IM,

  dose: {
    minimum: 10,
    maximum: 10,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Single dose or as clinically indicated.",

  duration: "",

  maximumTotalDose: "",

  notes: "Calf dose.",

  evidence: "Rebhun (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CATTLE,

  indication: "Adjunctive therapy for radial nerve injury or femoral nerve paralysis (calves)",

  route: Route.IV,

  dose: {
    minimum: 10,
    maximum: 10,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Single dose or as clinically indicated.",

  duration: "",

  maximumTotalDose: "",

  notes: "Calf dose.",

  evidence: "Rebhun (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CATTLE,

  indication: "Adjunctive therapy for obturator nerve paralysis",

  route: Route.IM,

  dose: {
    minimum: 10,
    maximum: 40,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Once daily.",

  duration: "2–3 days.",

  maximumTotalDose: "",

  notes: "Discontinue after 2–3 days.",

  evidence: "Rebhun (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CATTLE,

  indication: "Adjunctive therapy for obturator nerve paralysis",

  route: Route.IV,

  dose: {
    minimum: 10,
    maximum: 40,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Once daily.",

  duration: "2–3 days.",

  maximumTotalDose: "",

  notes: "Discontinue after 2–3 days.",

  evidence: "Rebhun (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},
{
  species: Species.CATTLE,

  indication: "Induction of abortion (>150 days gestation)",

  route: Route.IM,

  dose: {
    minimum: 25,
    maximum: 25,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Single dose.",

  duration: "One time.",

  maximumTotalDose: "",

  notes: "Administer with prostaglandin F2α 25 mg after 150 days of gestation.",

  evidence: "Drost (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CATTLE,

  indication: "Induction of parturition (within 2 weeks of normal term)",

  route: Route.IM,

  dose: {
    minimum: 20,
    maximum: 30,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Single dose.",

  duration: "One time.",

  maximumTotalDose: "",

  notes: "",

  evidence: "Barth (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CATTLE,

  indication: "Adjunctive therapy for aseptic laminitis",

  route: Route.IM,

  dose: {
    minimum: 5,
    maximum: 20,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "As clinically indicated.",

  duration: "Continue for 2–3 days.",

  maximumTotalDose: "",

  notes: "",

  evidence: "Berg (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CATTLE,

  indication: "Adjunctive therapy for aseptic laminitis",

  route: Route.IV,

  dose: {
    minimum: 5,
    maximum: 20,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "As clinically indicated.",

  duration: "Continue for 2–3 days.",

  maximumTotalDose: "",

  notes: "",

  evidence: "Berg (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.HORSE,

  indication: "Anti-inflammatory therapy (label dose)",

  route: Route.IV,

  dose: {
    minimum: 2.5,
    maximum: 5,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "As clinically indicated.",

  duration: "",

  maximumTotalDose: "",

  notes: "Dexamethasone injection.",

  evidence: "Manufacturer labeling.",

  reference: "Azium® Package Insert",
},

{
  species: Species.HORSE,

  indication: "Anti-inflammatory therapy (label dose)",

  route: Route.IM,

  dose: {
    minimum: 2.5,
    maximum: 5,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "As clinically indicated.",

  duration: "",

  maximumTotalDose: "",

  notes: "Dexamethasone injection.",

  evidence: "Manufacturer labeling.",

  reference: "Azium® Package Insert",
},
{
  species: Species.HORSE,

  indication: "Anti-inflammatory therapy (dexamethasone sodium phosphate)",

  route: Route.IV,

  dose: {
    minimum: 2.5,
    maximum: 5,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "As clinically indicated.",

  duration: "",

  maximumTotalDose: "",

  notes: "Dexamethasone sodium phosphate injection.",

  evidence: "Manufacturer labeling.",

  reference: "Azium® SP Package Insert",
},

{
  species: Species.HORSE,

  indication: "Recurrent airway obstruction (heaves)",

  route: Route.IM,

  dose: {
    minimum: 40,
    maximum: 40,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Every other day.",

  duration: "3 treatments initially, then taper by 5 mg every 3 treatments until discontinued.",

  maximumTotalDose: "",

  notes: "For a 500 kg horse. Use cautiously in horses predisposed to laminitis or endocrinopathies.",

  evidence: "Ainsworth & Hackett (2004).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.HORSE,

  indication: "Glucocorticoid therapy",

  route: Route.IV,

  dose: {
    minimum: 0.05,
    maximum: 0.2,
    unit: DoseUnit.MG_PER_KG,
  },

  basis: DoseBasis.BODY_WEIGHT,

  frequency: "Once daily.",

  duration: "",

  maximumTotalDose: "",

  notes: "",

  evidence: "Robinson (1987).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.HORSE,

  indication: "Glucocorticoid therapy",

  route: Route.IM,

  dose: {
    minimum: 0.05,
    maximum: 0.2,
    unit: DoseUnit.MG_PER_KG,
  },

  basis: DoseBasis.BODY_WEIGHT,

  frequency: "Once daily.",

  duration: "",

  maximumTotalDose: "",

  notes: "",

  evidence: "Robinson (1987).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.HORSE,

  indication: "Glucocorticoid therapy",

  route: Route.PO,

  dose: {
    minimum: 0.05,
    maximum: 0.2,
    unit: DoseUnit.MG_PER_KG,
  },

  basis: DoseBasis.BODY_WEIGHT,

  frequency: "Once daily.",

  duration: "",

  maximumTotalDose: "",

  notes: "",

  evidence: "Robinson (1987).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.HORSE,

  indication: "Dexamethasone suppression test",

  route: Route.IM,

  dose: {
    minimum: 20,
    maximum: 20,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "Single dose.",

  duration: "One time.",

  maximumTotalDose: "",

  notes: "Normal cortisol concentrations decrease approximately 50% at 2 hours, 70% at 4 hours, 80% at 6 hours, and remain approximately 30% below baseline at 24 hours.",

  evidence: "Beech (1987).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.PIG,

  indication: "Glucocorticoid therapy",

  route: Route.IV,

  dose: {
    minimum: 1,
    maximum: 10,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "As clinically indicated.",

  duration: "",

  maximumTotalDose: "",

  notes: "",

  evidence: "Howard (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.PIG,

  indication: "Glucocorticoid therapy",

  route: Route.IM,

  dose: {
    minimum: 1,
    maximum: 10,
    unit: DoseUnit.MG,
  },

  basis: DoseBasis.FIXED_DOSE,

  frequency: "As clinically indicated.",

  duration: "",

  maximumTotalDose: "",

  notes: "",

  evidence: "Howard (1986).",

  reference: "Plumb's Veterinary Drug Handbook",
},
],

clinical: {
  mechanismOfAction:
    "Dexamethasone is a potent synthetic glucocorticoid that binds intracellular glucocorticoid receptors. The activated receptor complex translocates to the nucleus where it alters gene transcription, suppressing pro-inflammatory cytokines, prostaglandins, and leukotrienes while increasing anti-inflammatory protein synthesis. It also decreases leukocyte migration, reduces capillary permeability, and produces marked anti-inflammatory and immunosuppressive effects. Dexamethasone has negligible mineralocorticoid activity.",

  spectrum:
    "Potent glucocorticoid with anti-inflammatory, immunosuppressive, anti-allergic, anti-edematous, and anti-shock activity. Not an antimicrobial or antiparasitic drug.",

  indications: [
    "Inflammatory disorders",
    "Immune-mediated diseases",
    "Allergic conditions",
    "Anaphylaxis (adjunctive therapy)",
    "Cerebral edema",
    "Respiratory diseases",
    "Hypoadrenocorticism (adjunctive therapy with mineralocorticoid replacement)",
    "Endotoxic or septic shock",
    "Parturition induction in cattle",
    "Diagnostic endocrine suppression tests",
  ],

  commonUses: [
    "Anti-inflammatory therapy",
    "Immunosuppressive therapy",
    "Treatment of allergic reactions",
    "Adjunctive treatment of shock",
    "Management of cerebral edema",
    "Management of recurrent airway obstruction (horses)",
    "Treatment of ketosis and neurologic disorders in cattle",
    "Low-dose dexamethasone suppression test",
    "High-dose dexamethasone suppression test",
    "Combined dexamethasone suppression-ACTH stimulation test",
  ],

  clinicalDecisionNotes: [
    "Long-acting glucocorticoid approximately 30 times more potent than hydrocortisone.",
    "Has negligible mineralocorticoid activity; not suitable alone for adrenal insufficiency.",
    "Use the lowest effective dose for the shortest possible duration.",
    "Gradually taper prolonged therapy to minimize adrenal suppression.",
    "Dexamethasone sodium phosphate is preferred when rapid intravenous action is required.",
  ],

  clinicalPearls: [
    "Long duration of action makes it useful when prolonged glucocorticoid activity is desired.",
    "Frequently selected for endocrine diagnostic testing because it does not significantly interfere with cortisol assays.",
    "Monitor patients receiving prolonged therapy for signs of iatrogenic hyperadrenocorticism.",
    "Use cautiously in diabetic, hypertensive, ulcer-prone, or immunocompromised patients.",
    "Avoid unnecessary long-term use because adverse effects are dose- and duration-dependent.",
  ],
},
reproduction: {
  pregnancy: {
    recommendation: ReproductionRecommendation.BENEFIT_RISK,

    notes: [
      "Use only when the expected clinical benefit outweighs potential fetal risk.",
      "Glucocorticoid therapy may induce parturition in large animal species during late pregnancy.",
      "Human FDA pregnancy category C.",
      "Papich canine/feline reproductive safety classification: Class C.",
    ],
  },

  lactation: {
    recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Use cautiously in lactating animals.",
      "Systemic corticosteroids may be excreted into milk; monitor nursing offspring when prolonged or high-dose therapy is required.",
    ],
  },

  breeding: {
    recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "No specific evidence of impaired fertility at therapeutic doses.",
      "Avoid prolonged or unnecessary systemic glucocorticoid administration in breeding animals.",
      "Use only when benefits outweigh potential reproductive risks.",
    ],
  },
},

overdose: {
  signs: [
    "Acute overdose is generally well tolerated.",
    "Polyuria",
    "Polydipsia",
    "Polyphagia",
    "Panting (dogs)",
    "Gastrointestinal upset",
    "Rare acute CNS signs",
    "Chronic overdose may cause iatrogenic hyperadrenocorticism (Cushingoid syndrome).",
  ],

  management: [
    "Provide supportive and symptomatic care.",
    "Monitor hydration, electrolytes, and blood glucose.",
    "Treat gastrointestinal complications if present.",
    "Gradually taper therapy after prolonged administration; avoid abrupt withdrawal.",
    "Monitor for adrenal suppression following chronic excessive dosing.",
  ],
},
safety: {
  contraindications: [
    "Systemic fungal infections (unless used for replacement therapy in Addison's disease).",
    "Hypersensitivity to dexamethasone or formulation components.",
    "Do not use sustained-release injectable glucocorticoids for chronic systemic corticosteroid therapy.",
    "Should not be used alone for adrenal insufficiency because of negligible mineralocorticoid activity.",
    "Intramuscular administration in patients with idiopathic thrombocytopenia.",
  ],

  precautions: [
    "Use the lowest effective dose for the shortest possible duration.",
    "Taper gradually after prolonged therapy to prevent adrenal insufficiency.",
    "Use cautiously in patients with diabetes mellitus.",
    "Use cautiously in animals with hypertension, congestive heart failure, renal insufficiency, osteoporosis, corneal ulcers, gastrointestinal ulceration, or active bacterial infections.",
    "Monitor growing animals as glucocorticoids may retard growth.",
    "May interfere with vaccination and increase susceptibility to infection.",
    "Numerous drug and laboratory test interactions are possible.",
  ],

  adverseEffects: [
    "Polyuria",
    "Polydipsia",
    "Polyphagia",
    "Panting (dogs)",
    "Iatrogenic hyperadrenocorticism (Cushingoid syndrome)",
    "Delayed wound healing",
    "Immunosuppression",
    "Increased susceptibility to infection",
    "Muscle wasting",
    "Gastrointestinal ulceration",
    "Growth retardation in young animals",
  ],

  drugInteractions: [
    "NSAIDs (increased gastrointestinal ulcer risk)",
    "Vaccines (reduced immune response)",
    "Insulin and oral hypoglycemic agents",
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
    "Water intake and urine output",
    "Blood glucose",
    "Electrolytes during prolonged therapy",
    "Signs of adrenal suppression with long-term treatment",
  ],

  withdrawalPeriod: "Follow individual product labeling for food-producing animals.",

  storage: [
    "Store at room temperature (15–30°C).",
    "Protect dexamethasone sodium phosphate injection from light.",
    "Store tablets in tightly closed containers.",
    "Do not use products beyond the manufacturer's expiration date.",
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
    "dexamethasone",
    "dexamethasone sodium phosphate",
    "glucocorticoid",
    "corticosteroid",
    "anti-inflammatory",
    "immunosuppressant",
    "anti-allergic",
    "anti-edema",
    "shock",
    "cushing",
    "addison",
    "suppression test",
    "dogs",
    "cats",
    "horses",
    "cattle",
    "swine",
  ],
},
};

export default [dexamethasone];