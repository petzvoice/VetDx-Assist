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

const sevoflurane: Drug = {

  id: "sevoflurane",

  genericName: "Sevoflurane",

  brandNames: [
    "SevoFlo",
    "Ultane",
    "Sevorane",
    "Sojourn",
    "Sevoflurane USP",
  ],

  status: DrugStatus.ACTIVE,


  searchTerms: [
    "sevoflurane",
    "sevoflo",
    "ultane",
    "sevorane",
    "sojourn",
    "inhalational anesthetic",
    "volatile anesthetic",
    "general anesthetic",
    "inhalation anesthesia",
    "rapid induction anesthetic",
  ],


  quickFacts: {

    prescriptionRequired: true,

    controlledDrug: false,

    category: "Anesthetic",

    drugClass: "Inhalational General Anesthetic",

    pharmacologicClass:
      "Volatile Halogenated Ether Anesthetic",

    commonRoutes: [
      Route.INHALATION,
    ],

    availableRoutes: [
      Route.INHALATION,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.HORSE,
      Species.SHEEP,
      Species.PIG,
    ],

  },


  species: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
    Species.SHEEP,
    Species.PIG,
  ],



  formulations: [

    {

      id: "sevoflurane-inhalation-liquid",

      dosageForm: DosageForm.INHALATION_LIQUID,

      strength:
        "100% Sevoflurane",

      concentration: {
        value: 100,
        unit: ConcentrationUnit.PERCENT,
      },

      routes: [
        Route.INHALATION,
      ],

      notes:
        "Volatile inhalational anesthetic supplied as liquid for use with precision sevoflurane-calibrated vaporizers.",

    },

  ],



  doseReferences: [

    {

      species: Species.DOG,

      indication:
        "Mask induction of general anesthesia",

      route: Route.INHALATION,

      dose: {
        minimum: 7,
        maximum: 7,
        unit: DoseUnit.PERCENT,
      },

      basis: DoseBasis.CONCENTRATION,

      frequency:
        "Continuous inhalation",

      duration:
        "Until surgical anesthesia achieved",

      maximumTotalDose:
        "",

      notes:
        "Inspired concentrations up to 7% sevoflurane with oxygen may be used for mask induction in healthy dogs. Surgical anesthesia may be achieved within approximately 3–14 minutes.",

      evidence:
        "Label directions; SevoFlo",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {

      species: Species.DOG,

      indication:
        "Maintenance of general anesthesia without premedication",

      route: Route.INHALATION,

      dose: {
        minimum: 3.7,
        maximum: 4,
        unit: DoseUnit.PERCENT,
      },

      basis: DoseBasis.CONCENTRATION,

      frequency:
        "Continuous inhalation",

      duration:
        "Procedure dependent",

      maximumTotalDose:
        "",

      notes:
        "Maintenance concentration varies according to patient response and anesthetic protocol.",

      evidence:
        "Label directions; SevoFlo",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {

      species: Species.DOG,

      indication:
        "Maintenance of general anesthesia with premedication",

      route: Route.INHALATION,

      dose: {
        minimum: 3.3,
        maximum: 3.6,
        unit: DoseUnit.PERCENT,
      },

      basis: DoseBasis.CONCENTRATION,

      frequency:
        "Continuous inhalation",

      duration:
        "Procedure dependent",

      maximumTotalDose:
        "",

      notes:
        "Opioids, alpha-2 agonists, benzodiazepines, or phenothiazines may reduce required maintenance concentrations.",

      evidence:
        "Label directions; SevoFlo",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },



  ],
    clinical: {

    mechanismOfAction:
      "Sevoflurane is a volatile inhalational anesthetic that produces general anesthesia by altering neuronal function within the central nervous system. The exact mechanism is not completely understood but is believed to involve interaction with neuronal membrane lipid matrices, modulation of ion channels, and enhancement of inhibitory neurotransmission resulting in CNS depression, unconsciousness, immobility, and muscle relaxation.",


    spectrum:
      "Provides rapid induction and recovery from general anesthesia due to a very low blood-gas partition coefficient (approximately 0.6). Produces dose-dependent CNS depression, muscle relaxation, vasodilation, respiratory depression, and hypotension with minimal metabolism.",


    indications: [
      "Induction of general anesthesia",
      "Maintenance of general anesthesia",
      "Mask induction anesthesia",
      "Surgical procedures requiring inhalational anesthesia",
      "Balanced anesthesia protocols",
    ],


    commonUses: [
      "Small animal anesthesia",
      "Rapid mask induction",
      "Maintenance anesthesia following injectable induction",
      "Procedures requiring rapid anesthetic adjustment",
      "Equine and large animal inhalation anesthesia",
    ],


    clinicalDecisionNotes: [
      "Sevoflurane has faster induction and recovery compared with isoflurane because of its lower blood-gas solubility.",
      "Requires a precision vaporizer specifically calibrated for sevoflurane.",
      "Anesthetic depth can change rapidly; avoid excessive concentrations during induction.",
      "Provides minimal cardiovascular depression compared with older inhalational agents, but hypotension may occur.",
      "Use cautiously in patients with increased cerebrospinal fluid pressure, head injury, or renal insufficiency.",
      "Rapid recovery may require appropriate sedation and monitoring, especially in large animals.",
      "Geriatric animals may require lower inhalant concentrations.",
    ],


    clinicalPearls: [
      "Rapid mask induction is possible because of low blood-gas partition coefficient.",
      "MAC values vary significantly between species and are affected by temperature, age, acid-base status, disease, and concurrent CNS depressants.",
      "Monitor ventilation closely because respiratory depression is dose dependent.",
      "Replace desiccated CO2 absorbents because reactions may produce compound A.",
      "Use agent-specific out-of-circuit vaporizers.",
      "Maintain airway support, oxygen supplementation, and ventilation equipment availability during anesthesia.",
    ],

  },



  reproduction: {

    pregnancy: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Safety during pregnancy has not been fully established.",
        "Laboratory studies have not demonstrated clear teratogenicity or fetotoxicity, but risk cannot be completely excluded.",
        "Use only when benefits outweigh potential risks.",
      ],

    },


    lactation: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Specific veterinary lactation safety data are limited.",
        "Rapid pulmonary elimination results in minimal persistence after discontinuation.",
        "Use cautiously in lactating animals.",
      ],

    },


    breeding: {

      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "Effects on breeding performance have not been established.",
        "Avoid unnecessary administration in breeding animals.",
      ],

    },

  },



  overdose: {

    signs: [

      "Severe hypotension",

      "Respiratory depression",

      "Apnea",

      "Excessive anesthetic depth",

      "Cardiovascular depression",

      "Delayed recovery",

      "Hypothermia",

    ],


    management: [

      "Immediately discontinue sevoflurane administration.",

      "Maintain airway patency.",

      "Provide oxygen supplementation.",

      "Support ventilation with assisted or mechanical ventilation if required.",

      "Monitor cardiovascular function continuously.",

      "Provide supportive treatment for hypotension and cardiovascular depression.",

      "Maintain body temperature during recovery.",

    ],

  },
    safety: {

    contraindications: [

      "History of malignant hyperthermia",

      "Predisposition toward malignant hyperthermia",

      "Known hypersensitivity to sevoflurane",

    ],


    precautions: [

      "Use cautiously in patients with increased cerebrospinal fluid pressure.",

      "Use cautiously in patients with head injury.",

      "Use cautiously in patients with renal insufficiency.",

      "Avoid excessive concentrations during induction because anesthetic depth changes rapidly.",

      "Use lower inhalant concentrations in geriatric patients when appropriate.",

      "Monitor respiratory function because respiratory depression is dose dependent.",

      "Monitor blood pressure because hypotension is dose related.",

      "Replace desiccated CO2 absorbents to reduce risk of compound A formation.",

      "Use only precision vaporizers calibrated specifically for sevoflurane.",

      "Avoid use in rabbits when possible because breath holding and struggling may occur.",

    ],


    adverseEffects: [

      "Dose-dependent hypotension",

      "Respiratory depression",

      "Bradycardia",

      "Nausea",

      "Vomiting",

      "Ileus",

      "Myocardial depression",

      "Hypothermia",

      "Delayed recovery",

      "Malignant hyperthermia",

      "Cardiovascular depression",

    ],


    drugInteractions: [

      "Concurrent CNS depressants may reduce required sevoflurane concentration.",

      "Opioids may reduce inhalant anesthetic requirements.",

      "Alpha-2 agonists may decrease maintenance anesthetic requirements.",

      "Benzodiazepines may reduce required sevoflurane concentration.",

      "Phenothiazines may alter anesthetic requirements.",

    ],


    monitoring: [

      "Heart rate",

      "Cardiac rhythm",

      "Blood pressure",

      "Respiratory rate",

      "End tidal CO2",

      "Oxygen saturation",

      "Anesthetic depth",

      "Body temperature",

      "Airway function",

      "Recovery quality",

    ],


    storage: [

      "Store at room temperature.",

      "Protect from excessive heat and inappropriate storage conditions.",

      "Sevoflurane does not react with metal.",

      "Store in the original tightly closed container.",

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

    lastReviewed: "2026-07-15",

    tags: [

      "sevoflurane",

      "sevoflo",

      "ultane",

      "sevorane",

      "sojourn",

      "inhalational anesthetic",

      "volatile anesthetic",

      "general anesthesia",

      "rapid induction",

      "rapid recovery",

      "dogs",

      "cats",

      "horses",

      "sheep",

      "swine",

      "veterinary anesthesia",

    ],

  },

};


export default [sevoflurane];