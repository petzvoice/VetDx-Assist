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

const butorphanol: Drug = {
  id: "butorphanol",

  genericName: "Butorphanol Tartrate",

  brandNames: [
    "Torbugesic",
    "Torbutrol",
    "Stadol",
    "Dolorex",
    "Butorphanol Injection",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "butorphanol",
    "butorphanol tartrate",
    "torbugesic",
    "torbutrol",
    "stadol",
    "dolorex",
    "opioid",
    "partial opioid agonist",
    "partial opiate agonist",
    "opioid agonist antagonist",
    "kappa agonist",
    "opioid analgesic",
    "analgesic",
    "premedication",
    "preanesthetic",
    "antitussive",
    "antiemetic",
    "chemical restraint",
    "colic",
    "pain management",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: true,

    category: "Analgesic",

    drugClass: "Opioid Partial Agonist",

    pharmacologicClass:
      "Kappa Opioid Receptor Agonist / Partial Mu Opioid Receptor Antagonist",

    commonRoutes: [
      Route.IV,
      Route.IM,
      Route.SC,
    ],

    availableRoutes: [
      Route.IV,
      Route.IM,
      Route.SC,
      Route.PO,
      Route.INTRANASAL,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.HORSE,
      Species.CATTLE,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
    Species.CATTLE,
  ],

  formulations: [

    {
      id: "inj-2",

      dosageForm: DosageForm.INJECTION,

      strength: "2 mg/mL",

      concentration: {
        value: 2,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
        Route.SC,
      ],
    },

    {
      id: "inj-10",

      dosageForm: DosageForm.INJECTION,

      strength: "10 mg/mL",

      concentration: {
        value: 10,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
        Route.SC,
      ],
    },

    {
  id: "butorphanol-tablets",

  dosageForm: DosageForm.TABLET,

  strength: "10 mg",

  concentration: {
    value: 10,
    unit: ConcentrationUnit.MG,
  },

  routes: [
    Route.PO,
  ],
},

    {
      id: "intranasal",

      dosageForm: DosageForm.NASAL_SPRAY,

      strength: "10 mg/mL",

      concentration: {
        value: 10,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.INTRANASAL,
      ],
    },

  ],

  
doseReferences: [


  {
    species: Species.DOG,

    indication: "Antitussive",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.055,
      maximum: 0.11,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 6–12 hours",

    duration: "Treatment should normally not exceed 7 days",

    notes:
      "Treatment should normally not be required for longer than 7 days.",

    reference:
      "Package Insert (Torbutrol®); Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Antitussive",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.55,
      maximum: 1.1,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 6–12 hours",

    duration: "Treatment should normally not exceed 7 days",

    notes:
      "Begin at 0.55 mg/kg PO; the dose may be increased to 1.1 mg/kg PO if needed. Treatment should normally not be required for longer than 7 days.",

    reference:
      "Package Insert (Torbutrol®); Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Analgesia",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Provides analgesia for approximately 1–2 hours for moderate pain and 2–4 hours for mild pain.",

    reference:
      "Mathews 1999; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Analgesia",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Provides analgesia for approximately 1–2 hours for moderate pain and 2–4 hours for mild pain.",

    reference:
      "Mathews 1999; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Analgesia",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Use the lower end of the dose range when administered IV. Provides analgesia for approximately 1–2 hours for moderate pain and 2–4 hours for mild pain.",

    reference:
      "Mathews 1999; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Analgesia (oral)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.4,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Three times daily",

    notes:
      "Administer to the nearest quarter tablet. Provides relatively short-duration analgesia.",

    reference:
      "Mathews 1999; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Constant rate infusion (CRI)",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.1,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG_HR,
    },

    notes:
      "Occasionally used for abdominal pain.",

    reference:
      "Hellyer 2006; Plumb's Veterinary Drug Handbook.",
  },
    {
    species: Species.DOG,

    indication: "Preanesthetic",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.05,
      maximum: 0.05,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Administer IV as a preanesthetic.",

    reference:
      "Morgan 1988; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Preanesthetic",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.4,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Administer SC as a preanesthetic.",

    reference:
      "Morgan 1988; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Preanesthetic",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.4,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Administer IM as a preanesthetic.",

    reference:
      "Morgan 1988; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Preanesthetic",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Used in combination with acepromazine (0.02–0.04 mg/kg IM).",

    reference:
      "Reidesel; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Antiemetic prior to cisplatin treatment",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.4,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Administer IM 30 minutes before cisplatin infusion.",

    reference:
      "Klausner and Bell 1988; Plumb's Veterinary Drug Handbook.",
  },

  // =========================
  // CAT
  // =========================

  {
    species: Species.CAT,

    indication: "Analgesia",

    route: Route.SC,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Provides analgesia for approximately 1–2 hours for moderate pain and 2–4 hours for mild pain.",

    reference:
      "Mathews 1999; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication: "Analgesia",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Provides analgesia for approximately 1–2 hours for moderate pain and 2–4 hours for mild pain.",

    reference:
      "Mathews 1999; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication: "Analgesia",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Use the lower end of the dose range when administered IV. Provides analgesia for approximately 1–2 hours for moderate pain and 2–4 hours for mild pain.",

    reference:
      "Mathews 1999; Plumb's Veterinary Drug Handbook.",
  },
    {
    species: Species.CAT,

    indication: "Analgesia (oral)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.4,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Three times daily",

    notes:
      "Administer to the nearest quarter tablet. Provides relatively short-duration analgesia.",

    reference:
      "Mathews 1999; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication: "Preanesthetic",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.2,
      maximum: 0.4,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Used in combination with glycopyrrolate (0.01 mg/kg IM) and ketamine (4–10 mg/kg IM).",

    reference:
      "Reidesel; Plumb's Veterinary Drug Handbook.",
  },

  // =========================
  // CATTLE
  // =========================

  {
    species: Species.CATTLE,

    indication: "Analgesia",

    route: Route.IV,

    basis: DoseBasis.FIXED_DOSE,

    dose: {
      minimum: 20,
      maximum: 30,
      unit: DoseUnit.MG,
    },

    notes:
      "Administer via the jugular vein. Pretreatment with xylazine (10 mg) may be beneficial.",

    reference:
      "Powers 1985; Plumb's Veterinary Drug Handbook.",
  },

  // =========================
  // HORSE
  // =========================

  {
    species: Species.HORSE,

    indication: "Analgesia",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.1,
      maximum: 0.1,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 3–4 hours",

    duration: "Do not exceed 48 hours",

    notes:
      "Maximum treatment duration is 48 hours.",

    reference:
      "Package Insert (Torbugesic®); Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.HORSE,

    indication: "Colic pain",

    route: Route.IV,

    basis: DoseBasis.FIXED_DOSE,

    dose: {
      minimum: 5,
      maximum: 10,
      unit: DoseUnit.MG,
    },

    notes:
      "Administer with xylazine 100–200 mg IV (total dose) for a 450–500 kg horse.",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },
    {
    species: Species.HORSE,

    indication: "Preanesthetic, outpatient surgery, or chemical restraint",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.01,
      maximum: 0.04,
      unit: DoseUnit.MG_PER_KG,
    },

    notes:
      "Administer with xylazine 0.1–0.5 mg/kg IV.",

    reference:
      "Orsini 1988; Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.HORSE,

    indication: "Antitussive",

    route: Route.IM,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.02,
      maximum: 0.02,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Two to three times daily",

    reference:
      "Orsini 1988; Plumb's Veterinary Drug Handbook.",
  },

],
clinical: {

  mechanismOfAction:
    "Butorphanol is a synthetic opioid with partial agonist/antagonist activity. Its agonist effects occur primarily at kappa and sigma opioid receptors, producing analgesia mainly at the limbic system and spinal cord. It exhibits a ceiling effect, where increasing doses do not produce proportionally greater analgesia.",

  spectrum:
    "Provides mild to moderate analgesia, sedation, antitussive and antiemetic effects. It is widely used as an analgesic, preanesthetic, chemical restraint adjunct and cough suppressant in multiple veterinary species.",

  indications: [
    "Mild to moderate pain",
    "Preanesthetic medication",
    "Antitussive therapy",
    "Antiemetic prior to cisplatin administration",
    "Chemical restraint",
    "Colic pain in horses (with xylazine)",
  ],

  commonUses: [
    "Perioperative analgesia",
    "Premedication before anesthesia",
    "Cough suppression in dogs",
    "Feline analgesia",
    "Equine visceral analgesia",
    "Adjunct in multimodal anesthesia",
  ],

  clinicalDecisionNotes: [
    "Not a good choice as the sole analgesic for moderate to severe pain in small animals.",
    "Analgesic effect reaches a ceiling at higher doses.",
    "Provides relatively short duration of analgesia in dogs and cats.",
    "Frequently combined with sedatives or anesthetic agents for balanced anesthesia.",
    "Controlled substance (Schedule IV).",
  ],

  clinicalPearls: [
    "Provides better analgesia for mild pain than severe pain.",
    "Frequently combined with acepromazine, xylazine, ketamine or glycopyrrolate depending on species and procedure.",
    "Use lower IV doses when administered intravenously.",
    "Useful as an antitussive in dogs.",
    "Widely used for equine colic analgesia in combination with xylazine.",
  ],

},
reproduction: {

  pregnancy: {

    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "No controlled studies have been performed in domestic animals.",
      "No evidence of teratogenicity or impaired fertility has been demonstrated in laboratory animals.",
      "The manufacturer does not recommend use in pregnant bitches, foals, weanlings (equine), or breeding horses.",
      "FDA Pregnancy Category C in humans.",
      "Papich pregnancy classification: Class B (safe if used cautiously; avoid near term).",
    ],
  },

  lactation: {

    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Specific safety data during lactation were not located.",
      "Use only when the potential benefits outweigh the risks.",
    ],
  },

  breeding: {

    recommendation:
      ReproductionRecommendation.AVOID,

    notes: [
      "The manufacturer does not recommend use in breeding horses.",
      "Use in animals intended for breeding should be based on a careful benefit-risk assessment.",
    ],
  },

},
overdose: {

  signs: [
    "Profound sedation",
    "Respiratory depression",
    "Cardiovascular depression",
    "CNS depression",
  ],

  management: [
    "Maintain a patent airway and provide respiratory support as needed.",
    "Monitor cardiovascular function closely.",
    "Provide supportive and symptomatic care.",
    "An opioid antagonist (e.g., naloxone) may be used if clinically indicated.",
  ],

},

safety: {

  contraindications: [
    "Known hypersensitivity to butorphanol.",
  ],

  precautions: [
    "Use cautiously in patients with liver disease.",
    "Use cautiously in patients with hypothyroidism.",
    "Use cautiously in patients with severe renal insufficiency.",
    "Use cautiously in patients with adrenocortical insufficiency (Addison's disease).",
    "Use with extreme caution in patients with head trauma, increased cerebrospinal fluid (CSF) pressure, or other CNS dysfunction (e.g., coma).",
    "Use cautiously in geriatric or severely debilitated patients.",
  ],

  adverseEffects: [
    "Sedation",
    "Ataxia",
    "Anorexia",
    "Diarrhea (rare)",
    "Transient ataxia in horses",
    "Transient sedation in horses",
    "CNS excitement in horses",
  ],

  drugInteractions: [
    "May be used in combination with acepromazine, glycopyrrolate, ketamine, or xylazine as part of anesthetic protocols.",
  ],

  monitoring: [
    "Monitor depth of sedation and analgesia.",
    "Monitor respiratory function.",
    "Monitor cardiovascular status.",
    "Monitor recovery following sedation or anesthesia.",
  ],

 

  storage: [
    "Store injectable solution at room temperature.",
    "Protect from bright light.",
    "Do not freeze.",
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
    "butorphanol",
    "butorphanol tartrate",
    "Torbugesic",
    "Torbutrol",
    "Stadol",
    "Dolorex",
    "opioid",
    "partial opioid agonist",
    "kappa agonist",
    "analgesic",
    "sedative",
    "premedication",
    "preanesthetic",
    "antitussive",
    "antiemetic",
    "chemical restraint",
    "CRI",
    "colic",
    "dog",
    "cat",
    "horse",
    "cattle",
    "C-IV",
  ],
},

};

export default [butorphanol];