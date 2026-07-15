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

const isoflurane: Drug = {

  id: "isoflurane",

  genericName: "Isoflurane",

  brandNames: [
    "IsoFlo",
    "Iso-Thesia",
    "Aerrane",
    "Forane",
    "Isoflurane USP",
  ],

  status: DrugStatus.ACTIVE,


  searchTerms: [
    "isoflurane",
    "isoflo",
    "iso-thesia",
    "aerrane",
    "forane",
    "inhalant anesthetic",
    "general anesthetic",
    "volatile anesthetic",
    "inhalation anesthesia",
  ],


  quickFacts: {

    prescriptionRequired: true,

    controlledDrug: false,

    category: "Anesthetic",

    drugClass: "Inhalant General Anesthetic",

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
    ],

  },


  species: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
  ],


  formulations: [

    {

      id: "isoflurane-inhalation-liquid",

      dosageForm: DosageForm.INHALATION_LIQUID,

      strength:
        "100% Isoflurane",

      concentration: {
        value: 100,
        unit: ConcentrationUnit.PERCENT,
      },

      routes: [
        Route.INHALATION,
      ],

      notes:
        "Volatile inhalant anesthetic supplied as liquid for use with calibrated vaporizer systems.",

    },

  ],



  doseReferences: [

    {

      species: Species.DOG,

      indication:
        "General anesthesia induction and maintenance",

      route: Route.INHALATION,

      dose: {
        minimum: 0.5,
        maximum: 5,
        unit: DoseUnit.PERCENT,
      },

      basis: DoseBasis.CONCENTRATION,

      frequency:
        "Continuous inhalation",

      duration:
        "Administer to effect",

      maximumTotalDose:
        "",

      notes:
        "Typical induction concentration approximately 5%; maintenance approximately 1.5–2.5%. Concentration depends on fresh gas flow rate and patient response.",

      evidence:
        "Papich 1992",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {

      species: Species.CAT,

      indication:
        "General anesthesia induction and maintenance",

      route: Route.INHALATION,

      dose: {
        minimum: 0.5,
        maximum: 5,
        unit: DoseUnit.PERCENT,
      },

      basis: DoseBasis.CONCENTRATION,

      frequency:
        "Continuous inhalation",

      duration:
        "Administer to effect",

      maximumTotalDose:
        "",

      notes:
        "Typical induction concentration approximately 5%; maintenance approximately 1.5–2.5%.",

      evidence:
        "Papich 1992",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


  ],
    clinical: {

    mechanismOfAction:
      "Isoflurane is a volatile inhalant anesthetic that produces general anesthesia by altering neuronal activity within the central nervous system. The exact mechanism is not completely understood, but it is believed to involve effects on neuronal membrane lipid matrices, enhancement of inhibitory neurotransmission, and modulation of ion channels leading to CNS depression, unconsciousness, immobility, and muscle relaxation.",


    spectrum:
      "Produces rapid induction and recovery from general anesthesia with dose-dependent CNS depression, muscle relaxation, and minimal metabolism. Provides no significant analgesic properties after discontinuation and should be combined with appropriate analgesic protocols.",


    indications: [
      "Induction and maintenance of general anesthesia",
      "Surgical anesthesia",
      "Diagnostic procedures requiring anesthesia",
      "Balanced anesthesia protocols",
      "Maintenance anesthesia following injectable induction",
    ],


    commonUses: [
      "Small animal anesthesia",
      "Equine inhalation anesthesia",
      "Maintenance of anesthesia after propofol or injectable induction agents",
      "Procedures requiring precise anesthetic depth control",
    ],


    clinicalDecisionNotes: [
      "Requires a calibrated vaporizer and appropriate anesthesia delivery system.",
      "Anesthetic depth can be rapidly adjusted because isoflurane has low blood solubility and rapid changes in CNS concentration.",
      "Produces dose-dependent hypotension mainly due to peripheral vasodilation rather than severe myocardial depression.",
      "Provides minimal cardiovascular depression compared with some older inhalant anesthetics.",
      "Monitor ventilation because respiratory depression increases with anesthetic depth.",
      "Use cautiously in patients with increased intracranial pressure or head injury because cerebral blood flow may increase.",
    ],


    clinicalPearls: [
      "Isoflurane is commonly used as a maintenance anesthetic because of rapid adjustment of anesthetic depth.",
      "Most of the drug is eliminated unchanged through the lungs; hepatic metabolism is minimal.",
      "MAC values vary between species and indicate anesthetic potency.",
      "Use active warming measures because inhalant anesthesia can contribute to hypothermia.",
      "Always monitor blood pressure, ventilation, oxygenation, and temperature during anesthesia.",
      "Arrhythmias are uncommon compared with some older inhalant anesthetics.",
    ],

  },



  reproduction: {

    pregnancy: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Isoflurane crosses the placenta.",
        "Some studies indicate possible fetotoxic effects.",
        "Use during pregnancy only when benefits outweigh potential risks.",
        "Avoid unnecessary use near term when possible.",
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
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Effects on breeding performance have not been fully established.",
        "Avoid unnecessary exposure in breeding animals.",
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

      "Reduce or discontinue isoflurane administration.",

      "Provide oxygen supplementation.",

      "Support ventilation if respiratory depression occurs.",

      "Monitor cardiovascular parameters continuously.",

      "Provide intravenous fluids and supportive therapy for hypotension when indicated.",

      "Maintain body temperature during recovery.",

    ],

  },
    safety: {

    contraindications: [

      "History of malignant hyperthermia",

      "Predisposition to malignant hyperthermia",

      "Known hypersensitivity to isoflurane",

    ],


    precautions: [

      "Use cautiously in patients with increased cerebrospinal fluid pressure.",

      "Use cautiously in patients with head injury.",

      "Use cautiously in patients with myasthenia gravis.",

      "Monitor blood pressure because hypotension is dose dependent.",

      "Monitor respiratory function because respiratory depression increases with anesthetic depth.",

      "Provide active warming measures to reduce hypothermia risk.",

      "Use appropriate ventilation support in patients with compromised respiratory function.",

    ],


    adverseEffects: [

      "Dose-dependent hypotension",

      "Respiratory depression",

      "Nausea",

      "Vomiting",

      "Ileus",

      "Hypothermia",

      "Myocardial depression",

      "Arrhythmias (rare)",

      "Delayed recovery",

    ],


    drugInteractions: [

      "Concurrent CNS depressants may enhance anesthetic effects.",

      "Opioids and sedatives may reduce required isoflurane concentration.",

      "Other anesthetic agents may alter induction and maintenance requirements.",

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

      "Recovery quality",

    ],


    storage: [

      "Store at room temperature.",

      "Protect from excessive light exposure.",

      "Store in a tightly closed, light-resistant container.",

      "Compatible with common anesthetic equipment metals including aluminum, brass, tin, iron, and copper.",

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

      "isoflurane",

      "isoflo",

      "iso-thesia",

      "aerrane",

      "forane",

      "inhalant anesthetic",

      "volatile anesthetic",

      "general anesthesia",

      "inhalation anesthesia",

      "dogs",

      "cats",

      "horses",

      "veterinary anesthesia",

    ],

  },

};


export default [isoflurane];