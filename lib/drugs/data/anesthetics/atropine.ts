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

const atropine: Drug = {
  id: "atropine",

  genericName: "Atropine sulfate",

  brandNames: [
    "Atropine Sulphate Injection",
    "Isopto Atropine",
    "Atropine Eye Drops",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "atropine",
    "atropine sulfate",
    "atropine sulphate",
    "isopto atropine",

    "anticholinergic",
    "antimuscarinic",
    "parasympatholytic",

    "preanesthetic",
    "premedication",
    "bradycardia",
    "organophosphate poisoning",
    "organophosphate toxicity",
    "cholinergic toxicity",
    "bronchoconstriction",
    "bronchodilator",
    "mydriatic",
    "cycloplegic",

    "ophthalmic atropine",
    "eye drops",
    "vagal bradycardia",
    "acetylcholine antagonist",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Autonomic nervous system",

    drugClass: "Anticholinergic",

    pharmacologicClass:
      "Antimuscarinic (parasympatholytic agent)",

    commonRoutes: [
      Route.IV,
      Route.IM,
      Route.SC,
      Route.OPHTHALMIC,
    ],

    availableRoutes: [
      Route.IV,
      Route.IM,
      Route.SC,
      Route.OPHTHALMIC,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.CATTLE,
      Species.SHEEP,
      Species.GOAT,
      Species.HORSE,
      Species.BIRD,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.CATTLE,
    Species.SHEEP,
    Species.GOAT,
    Species.HORSE,
    Species.BIRD,
  ],

  formulations: [
    {
      id: "injectable",

      dosageForm: DosageForm.INJECTION,

      strength:
        "0.25 mg/mL, 0.5 mg/mL, 0.6 mg/mL, 1 mg/mL",

      concentration: {
        value: 1,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
        Route.SC,
      ],
    },

    {
      id: "ophthalmic-solution",

      dosageForm: DosageForm.OPHTHALMIC_SOLUTION,

      strength:
        "0.5%, 1%",

      concentration: {
        value: 1,
        unit: ConcentrationUnit.PERCENT,
      },

      routes: [
        Route.OPHTHALMIC,
      ],
    },

    {
      id: "ophthalmic-ointment",

      dosageForm: DosageForm.OPHTHALMIC_OINTMENT,

      strength:
        "1%",

      concentration: {
        value: 1,
        unit: ConcentrationUnit.PERCENT,
      },

      routes: [
        Route.OPHTHALMIC,
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
    "Preanesthetic adjunct",

  route: Route.IM,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.022,
    maximum: 0.044,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency:
    "Single dose",

  reference:
    "Muir",

  notes:
    "Administer as a preanesthetic adjunct by the IM route.",
},

{
  species: Species.DOG,

  indication:
    "Preanesthetic adjunct",

  route: Route.SC,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.022,
    maximum: 0.044,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency:
    "Single dose",

  reference:
    "Muir",

  notes:
    "Administer as a preanesthetic adjunct by the SC route.",
},

{
  species: Species.DOG,

  indication:
    "Cholinergic toxicity",

  route: Route.IV,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.2,
    maximum: 2,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency:
    "Single dose; repeat as clinically indicated",

  reference:
    "Morgan 1988",

  notes:
    "Administer one-fourth of the calculated dose IV and the remaining three-fourths SC or IM.",
},


{
  species: Species.DOG,

  indication:
    "Bronchoconstriction",

  route: Route.IV,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.02,
    maximum: 0.04,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency:
    "Single dose",

  reference:
    "Papich 1986",

  notes:
    "Produces bronchodilation with a duration of effect of approximately 1–1.5 hours.",
},
// =========================
// CAT
// =========================

{
  species: Species.CAT,

  indication:
    "Preanesthetic adjunct",

  route: Route.IM,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.022,
    maximum: 0.044,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency:
    "Single dose",

  reference:
    "Muir",

  notes:
    "Administer as a preanesthetic adjunct by the IM route.",
},

{
  species: Species.CAT,

  indication:
    "Preanesthetic adjunct",

  route: Route.SC,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.022,
    maximum: 0.044,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency:
    "Single dose",

  reference:
    "Muir",

  notes:
    "Administer as a preanesthetic adjunct by the SC route.",
},
// =========================
// CATTLE
// =========================

{
  species: Species.CATTLE,

  indication:
    "Cholinergic toxicity (organophosphate poisoning)",

  route: Route.IV,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.5,
    maximum: 0.5,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency:
    "Every 3–4 hours for 1–2 days as needed",

  reference:
    "Bailey 1986",

  notes:
    "Average dose. Administer one-fourth of the calculated dose IV and the remaining three-fourths SC or IM. Repeat every 3–4 hours for 1–2 days as required. Same for sheep and goats",
},


  {
    species: Species.HORSE,

    indication: "Bronchodilation",

    route: Route.IV,

    basis: DoseBasis.FIXED_DOSE,

    dose: {
      minimum: 5,
      maximum: 5,
      unit: DoseUnit.MG,
    },

    frequency: "Single dose",

    notes:
      "Dose applies to a 400–500 kg horse.",

    reference:
      "Beech 1987",
  },

  {
    species: Species.HORSE,

    indication: "Organophosphate poisoning",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 1,
      maximum: 1,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Repeat SC every 1.5–2 hours as required",

    notes:
      "Administer IV to effect. Use mydriasis and absence of salivation as clinical endpoints of therapy.",

    reference:
      "Oehme 1987",
  },

  // =========================
  // BIRDS
  // =========================

  {
    species: Species.BIRD,

    indication: "Organophosphate poisoning",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.1,
      maximum: 0.2,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "As needed",

    notes:
      "May also be administered subcutaneously.",

    reference:
      "Clubb 1986",
  },

    ],
  clinical: {

    mechanismOfAction:
      "Atropine competitively blocks muscarinic acetylcholine receptors at postganglionic parasympathetic neuroeffector sites. At higher doses it also blocks nicotinic receptors at autonomic ganglia and the neuromuscular junction.",

    spectrum:
      "Antimuscarinic (parasympatholytic) agent producing dose-dependent reduction of secretions, bronchodilation, mydriasis, cycloplegia, increased heart rate, and decreased gastrointestinal and urinary tract motility.",

    indications: [
      "Premedication before anesthesia",
      "Treatment of bradycardia",
      "Treatment of cholinergic toxicity",
      "Organophosphate poisoning",
      "Bronchodilation",
      "Reduction of salivary and bronchial secretions",
    ],

    commonUses: [
      "Anesthetic premedication",
      "Management of vagally mediated bradycardia",
      "Treatment of organophosphate toxicity",
      "Treatment of muscarinic cholinergic signs",
      "Bronchodilator in selected patients",
    ],

    clinicalDecisionNotes: [
      "Contraindicated where anticholinergic effects would be detrimental (e.g. narrow-angle glaucoma, tachycardia, paralytic ileus, urinary obstruction).",
      "May aggravate signs associated with amitraz toxicity by increasing hypertension and reducing gastrointestinal motility.",
      "Use therapy endpoints such as mydriasis and absence of salivation when treating organophosphate poisoning in horses.",
      "Pharmacologic effects are dose dependent.",
    ],

    clinicalPearls: [
      "Low doses primarily reduce salivary and bronchial secretions.",
      "Moderate doses increase heart rate and produce mydriasis with cycloplegia.",
      "Higher doses reduce gastrointestinal and urinary tract motility.",
      "Initial bradycardia may occur before tachycardia develops.",
    ],

  },

  reproduction: {

    pregnancy: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "FDA Pregnancy Category C in humans.",
        "May cause fetal tachycardia during pregnancy.",
        "Use only when benefits outweigh potential risks.",
      ],
    },

    lactation: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Specific veterinary safety data during lactation are limited.",
        "Use only when clinically indicated.",
      ],
    },

    breeding: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "No specific breeding safety concerns were described in the provided reference.",
      ],
    },

  },

  overdose: {

    signs: [
      "Severe tachycardia",
      "Cardiac arrhythmias",
      "Dry mouth",
      "Urinary retention",
      "Constipation",
      "Mydriasis",
      "Photophobia",
      "Ataxia",
      "Seizures",
      "Respiratory depression",
      "Circulatory failure",
    ],

    management: [
      "Provide supportive and symptomatic care.",
      "Monitor cardiovascular, neurologic, and respiratory function.",
      "Treat clinically significant arrhythmias or seizures as indicated.",
    ],

  },
    safety: {

    contraindications: [
      "Narrow-angle glaucoma.",
      "Synechiae between the iris and lens.",
      "Hypersensitivity to atropine or other anticholinergic drugs.",
      "Tachycardia secondary to thyrotoxicosis or cardiac insufficiency.",
      "Myocardial ischemia.",
      "Unstable cardiac status during acute hemorrhage.",
      "Gastrointestinal obstructive disease.",
      "Paralytic ileus.",
      "Severe ulcerative colitis.",
      "Obstructive uropathy.",
      "Myasthenia gravis (unless used to reverse adverse muscarinic effects of therapy).",
    ],

    precautions: [
      "Use cautiously during pregnancy.",
      "May aggravate signs associated with amitraz toxicity, including hypertension and decreased gastrointestinal motility.",
      "Adverse effects are dose dependent.",
    ],

    adverseEffects: [
      "Dry mouth (xerostomia).",
      "Reduced salivary and bronchial secretions.",
      "Initial bradycardia followed by tachycardia.",
      "Constipation.",
      "Vomiting.",
      "Thirst.",
      "Urinary retention or hesitancy.",
      "CNS stimulation.",
      "Drowsiness.",
      "Ataxia.",
      "Seizures.",
      "Respiratory depression.",
      "Mydriasis.",
      "Cycloplegia.",
      "Photophobia.",
      "Hypertension.",
      "Hypotension.",
      "Cardiac arrhythmias.",
      "Circulatory failure.",
    ],

    drugInteractions: [
      "Drug interactions were noted in the reference; use caution when combining with other agents possessing anticholinergic activity.",
    ],

    monitoring: [
      "Monitor heart rate and rhythm.",
      "Monitor gastrointestinal motility.",
      "Monitor urine production in susceptible patients.",
      "Monitor pupil size and response.",
      "Monitor for excessive anticholinergic effects.",
    ],

    withdrawalPeriod:
      "For sheep and goats, FARAD recommends a 28-day meat withdrawal and 6-day milk withdrawal when used at doses up to 0.2 mg/kg. Follow country-specific regulations for food-producing animals.",

    storage: [
      "Store atropine sulfate injection at room temperature.",
      "Avoid freezing.",
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
      "atropine",
      "atropine sulfate",
      "anticholinergic",
      "antimuscarinic",
      "premedication",
      "bradycardia",
      "organophosphate poisoning",
      "cholinergic toxicity",
      "bronchodilator",
      "mydriasis",
      "dog",
      "cat",
      "horse",
      "cattle",
      "sheep",
      "goat",
      "bird",
    ],
  },

};

export default [atropine];