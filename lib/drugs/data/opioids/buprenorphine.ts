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

const buprenorphine: Drug = {
  id: "buprenorphine",

  genericName: "Buprenorphine hydrochloride",

  brandNames: [
    "Vetergesic",
    "Simbadol",
    "Buprenex",
    "Temgesic",
    "Buprecare",
    "Buprenorphine Injection",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "buprenorphine",
    "buprenorphine hydrochloride",
    "vetergesic",
    "simbadol",
    "buprenex",
    "temgesic",
    "buprecare",

    "opioid",
    "partial mu agonist",
    "partial opioid agonist",
    "opiate analgesic",
    "injectable opioid",
    "buccal analgesic",

    "analgesia",
    "pain",
    "postoperative pain",
    "perioperative analgesia",
    "neuroleptanalgesia",

    "dog",
    "cat",
    "horse",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: true,

    category: "Analgesic",

    drugClass: "Partial opioid agonist",

    pharmacologicClass:
      "Partial mu-opioid receptor agonist",

    commonRoutes: [
      Route.IV,
      Route.IM,
      Route.SC,
      Route.BUCCAL,
    ],

    availableRoutes: [
      Route.IV,
      Route.IM,
      Route.SC,
      Route.BUCCAL,
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
      id: "injectable-0.3",

      dosageForm: DosageForm.INJECTABLE_SOLUTION,

      strength: "0.3 mg/mL",

      concentration: {
        value: 0.3,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
        Route.SC,
      ],
    },

    {
      id: "injectable-1.8",

      dosageForm: DosageForm.INJECTABLE_SOLUTION,

      strength: "1.8 mg/mL",

      concentration: {
        value: 1.8,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
        Route.SC,
      ],
    },

  ],

  doseReferences: [
      // =========================
  // DOG
  // =========================

  {
    species: Species.DOG,

    indication: "Analgesia",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.006,
      maximum: 0.02,
      unit: DoseUnit.MG_PER_KG,
    },

    duration: "6–12 hours",

    notes:
      "Relatively effective analgesic. May be difficult to reverse with naloxone if untoward effects occur.",

    reference:
      "Perkowski 2006b; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Analgesia",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.006,
      maximum: 0.02,
      unit: DoseUnit.MG_PER_KG,
    },

    duration: "6–12 hours",

    notes:
      "Relatively effective analgesic. May be difficult to reverse with naloxone if untoward effects occur.",

    reference:
      "Perkowski 2006b; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Analgesia",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.006,
      maximum: 0.02,
      unit: DoseUnit.MG_PER_KG,
    },

    duration: "6–12 hours",

    notes:
      "Relatively effective analgesic. May be difficult to reverse with naloxone if untoward effects occur.",

    reference:
      "Perkowski 2006b; Plumb's Veterinary Drug Handbook.",
  },



  {
  species: Species.CAT,

  indication: "Analgesia",

  route: Route.BUCCAL, 

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.01,
    maximum: 0.03,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency: "Every 8 hours",

  duration: "As clinically indicated",

  notes:
    "Administer transmucosally by squirting the dose directly into the mouth. Buccal administration is well tolerated and effective in cats.",

  evidence: "Lichtenberger 2006e",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CAT,

  indication: "Analgesia",

  route: Route.IM,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.005,
    maximum: 0.01,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency: "Every 6–12 hours",

  duration: "As clinically indicated",

  notes:
    "Provides effective analgesia. Duration is typically 6–8 hours, although analgesia may persist up to 12 hours in some patients.",

  evidence: "Hendrix & Hansen 2000",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CAT,

  indication: "Analgesia",

  route: Route.IV,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.005,
    maximum: 0.01,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency: "Every 6–12 hours",

  duration: "As clinically indicated",

  notes:
    "Provides effective analgesia. Duration is typically 6–8 hours, although analgesia may persist up to 12 hours in some patients.",

  evidence: "Hendrix & Hansen 2000",

  reference: "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CAT,

  indication: "Analgesia",

  route: Route.SC,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.005,
    maximum: 0.01,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency: "Every 6–12 hours",

  duration: "As clinically indicated",

  notes:
    "Provides effective analgesia. Duration is typically 6–8 hours, although analgesia may persist up to 12 hours in some patients.",

  evidence: "Hendrix & Hansen 2000",

  reference: "Plumb's Veterinary Drug Handbook",
},
    // =========================
  // HORSE
  // =========================

  {
    species: Species.HORSE,

    indication: "Neuroleptanalgesia",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.004,
      maximum: 0.004,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Administer with acepromazine 0.02 mg/kg IV.",

    reference:
      "Thurmon and Benson 1987; Plumb's Veterinary Drug Handbook.",
  },

],
  
 clinical: {

  mechanismOfAction:
    "Buprenorphine is a partial mu-opioid receptor agonist. It is approximately 30 times more potent than morphine and produces dose-related analgesia. At higher doses, analgesic effects may decrease (ceiling effect). Its high affinity for central mu receptors contributes to its relatively long duration of action.",

  spectrum:
    "Provides analgesia primarily through partial mu-opioid receptor agonism. Effective for mild to moderate pain in small animals and commonly used as an injectable or buccal analgesic.",

  indications: [
    "Analgesia",
    "Perioperative analgesia",
    "Preanesthetic medication",
    "Neuroleptanalgesia",
  ],

  commonUses: [
    "Postoperative pain management in dogs and cats",
    "Buccal analgesia in cats",
    "Preanesthetic opioid",
    "Part of balanced anesthesia protocols",
    "Neuroleptanalgesia in horses",
  ],

  clinicalDecisionNotes: [
    "Buccal administration is well tolerated and effective in cats.",
    "Analgesia typically lasts 6–8 hours but may persist up to 12 hours.",
    "Analgesic effects may decrease at higher doses because of a ceiling effect.",
    "May be difficult to reverse with naloxone because of its high affinity for mu-opioid receptors.",
  ],

  clinicalPearls: [
    "Approximately 30 times more potent than morphine.",
    "High receptor affinity contributes to prolonged duration of analgesia.",
    "Primarily used as an injectable or transmucosal (buccal) analgesic in small animals.",
    "Respiratory depression is uncommon but should be monitored.",
  ],

},
reproduction: {

  pregnancy: {

    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "No controlled studies have been performed in domestic animals.",
      "No evidence of teratogenicity or impaired fertility has been demonstrated in laboratory animals.",
      "FDA Pregnancy Category C in humans.",
      "Use only when the potential benefits outweigh the risks.",
    ],
  },

  lactation: {

    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "No information regarding safety during lactation was provided in the reference.",
      "Use cautiously in nursing animals due to limited safety data.",
    ],
  },

  breeding: {

    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Manufacturer does not recommend use in breeding horses.",
      "Use cautiously in breeding animals because adequate reproductive safety data are lacking.",
    ],
  },

},
overdose: {

  signs: [
    "Respiratory depression",
    "Cardiovascular depression",
  ],

  management: [
    "Provide supportive care and monitor respiratory and cardiovascular function.",
    "Naloxone may be used to help reverse opioid-induced respiratory or cardiac effects, although reversal may be incomplete because of buprenorphine's high affinity for mu-opioid receptors.",
    "Doxapram has been suggested as an adjunct in cases of respiratory depression.",
  ],

},
safety: {

  contraindications: [
    "No absolute contraindications were specified in the reference other than general opioid hypersensitivity.",
  ],

  precautions: [
    "Use cautiously in patients with hypothyroidism.",
    "Use cautiously in patients with severe renal insufficiency.",
    "Use cautiously in patients with adrenocortical insufficiency (Addison's disease).",
    "Use cautiously in geriatric or severely debilitated animals.",
  ],

  adverseEffects: [
    "Respiratory depression (rare)",
    "Sedation",
  ],

  drugInteractions: [
    "No clinically significant drug interactions were specifically listed in the reference.",
  ],

  monitoring: [
    "Monitor respiratory rate and effort.",
    "Monitor depth and duration of sedation.",
    "Monitor analgesic response.",
    "Monitor cardiovascular status during and after administration.",
  ],

  withdrawalPeriod:
    "Follow species-specific and country-specific regulations for food-producing animals.",

  storage: [
    "Store at room temperature (15–30°C).",
    "Avoid temperatures above 40°C or below freezing.",
    "Protect from bright light.",
    "Avoid autoclaving because it may considerably decrease drug potency.",
    "Stable between pH 3.5 and 5.",
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
    "buprenorphine",
    "buprenorphine hydrochloride",
    "Buprenex",
    "Vetergesic",
    "Simbadol",
    "Temgesic",
    "Buprecare",
    "partial mu opioid agonist",
    "opioid analgesic",
    "controlled substance",
    "C-III",
    "dog",
    "cat",
    "horse",
    "analgesia",
    "pain management",
    "perioperative analgesia",
    "preanesthetic",
    "neuroleptanalgesia",
    "buccal administration",
    "transmucosal",
  ],

},
};

export default [buprenorphine];