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


const doxapram: Drug = {

  id:
    "doxapram",


  genericName:
    "Doxapram hydrochloride",


  brandNames: [

    "Dopram",

    "Doxapram Injection",

    "Doxapram HCl Injection",

  ],


  status:
    DrugStatus.ACTIVE,


  searchTerms: [

    "doxapram",

    "doxapram hydrochloride",

    "dopram",

    "cns stimulant",

    "respiratory stimulant",

    "anesthetic recovery",

    "respiratory depression",

    "laryngeal function",

    "laryngeal paralysis",

    "newborn resuscitation",

    "post anesthesia",

    "gas anesthesia",

    "barbiturate anesthesia",

  ],


  quickFacts: {

    prescriptionRequired:
      true,


    controlledDrug:
      false,


    category:
      "Emergency Drug",


    drugClass:
      "Central nervous system stimulant",


    pharmacologicClass:
      "Respiratory stimulant",


    commonRoutes: [

      Route.IV,

    ],


    availableRoutes: [

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

      id:
        "injectable-solution",


      dosageForm:
        DosageForm.INJECTION,


      strength:
        "20 mg/mL",


      concentration: {

        value:
          20,

        unit:
          ConcentrationUnit.MG_PER_ML,

      },


      routes: [

        Route.IV,

      ],

    },

  ],
    doseReferences: [

    // =========================
    // DOG
    // =========================

    {

      species:
        Species.DOG,

      indication:
        "Respiratory stimulation following gas anesthesia",

      route:
        Route.IV,

      basis:
        DoseBasis.BODY_WEIGHT,

      dose: {

        minimum:
          1.1,

        maximum:
          1.1,

        unit:
          DoseUnit.MG_PER_KG,

      },

      frequency:
        "Single dose; may repeat after 15–20 minutes if necessary",

      notes:
        "Adjust dosage according to depth of anesthesia, respiratory volume, and respiratory rate. Doxapram is not a substitute for aggressive mechanical ventilatory support when indicated.",

      reference:
        "Plumb's Veterinary Drug Handbook.",

    },


    {

      species:
        Species.DOG,

      indication:
        "Respiratory stimulation following barbiturate anesthesia",

      route:
        Route.IV,

      basis:
        DoseBasis.BODY_WEIGHT,

      dose: {

        minimum:
          5.5,

        maximum:
          11,

        unit:
          DoseUnit.MG_PER_KG,

      },

      frequency:
        "Single dose; may repeat after 15–20 minutes if necessary",

      notes:
        "Adjust dosage according to anesthetic depth and respiratory status. Repeat dosing only if clinically required.",

      reference:
        "Plumb's Veterinary Drug Handbook.",

    },


    // =========================
    // CAT
    // =========================

    {

      species:
        Species.CAT,

      indication:
        "Respiratory stimulation following gas anesthesia",

      route:
        Route.IV,

      basis:
        DoseBasis.BODY_WEIGHT,

      dose: {

        minimum:
          1.1,

        maximum:
          1.1,

        unit:
          DoseUnit.MG_PER_KG,

      },

      frequency:
        "Single dose; may repeat after 15–20 minutes if necessary",

      notes:
        "Adjust dosage according to depth of anesthesia, respiratory volume, and respiratory rate.",

      reference:
        "Plumb's Veterinary Drug Handbook.",

    },


    {

      species:
        Species.CAT,

      indication:
        "Respiratory stimulation following barbiturate anesthesia",

      route:
        Route.IV,

      basis:
        DoseBasis.BODY_WEIGHT,

      dose: {

        minimum:
          5.5,

        maximum:
          11,

        unit:
          DoseUnit.MG_PER_KG,

      },

      frequency:
        "Single dose; may repeat after 15–20 minutes if necessary",

      notes:
        "Monitor respiratory response carefully. Doxapram should not replace assisted or mechanical ventilation when indicated.",

      reference:
        "Plumb's Veterinary Drug Handbook.",

    },

  ],
    clinical: {

    mechanismOfAction:
      "Doxapram is a general central nervous system stimulant that stimulates the medullary respiratory centers directly and may also activate carotid and aortic chemoreceptors reflexly, resulting in transient increases in respiratory rate and tidal volume.",


    spectrum:
      "Central nervous system and respiratory stimulant used primarily for management of respiratory depression and assessment of laryngeal function.",


    indications: [

      "Respiratory stimulation following anesthesia",

      "Neonatal respiratory stimulation",

      "Assessment of laryngeal function in small animals",

      "Respiratory depression associated with anesthesia",

    ],


    commonUses: [

      "Stimulating respiration after general anesthesia",

      "Neonatal resuscitation",

      "Assessment of laryngeal paralysis",

    ],


    clinicalDecisionNotes: [

      "Doxapram is not a substitute for aggressive artificial (mechanical) ventilation when respiratory support is required.",

      "Although respiratory rate and volume increase, arterial oxygenation may not improve because oxygen consumption and carbon dioxide production also increase.",

      "Repeated or high doses increase the risk of hypertension, arrhythmias, seizures, and respiratory alkalosis.",

      "Doxapram has been shown experimentally to increase myocardial oxygen demand and reduce cerebral blood flow.",

      "Avoid intravenous extravasation and repeated injections into the same site.",

    ],


    clinicalPearls: [

      "Commonly used during anesthetic recovery to stimulate respiration.",

      "Useful for evaluating laryngeal function in dogs and cats.",

      "Always address the underlying cause of respiratory depression.",

      "Monitor cardiovascular and neurologic status closely after administration.",

    ],

  },
    reproduction: {

    pregnancy: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [

        "Safety in pregnant animals has not been established.",

        "Use only after carefully weighing potential benefits against potential risks.",

        "Human FDA pregnancy classification: Category B.",

      ],

    },


    lactation: {

      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [

        "It is not known whether doxapram is excreted into milk.",

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

      "Hypertension",

      "Cardiac arrhythmias",

      "Seizures",

      "Hyperventilation",

      "Respiratory alkalosis",

      "Excessive CNS stimulation",

    ],


    management: [

      "Provide supportive and symptomatic care.",

      "Monitor cardiovascular and respiratory function.",

      "Control seizures if they occur.",

      "Discontinue further administration.",

      "Provide assisted or mechanical ventilation if clinically indicated.",

    ],

  },
    safety: {

    contraindications: [

      "Receiving mechanical ventilation when adequate ventilatory support is available.",

      "Known hypersensitivity to doxapram.",

      "Seizure disorders.",

      "Head trauma or cerebrovascular accident.",

      "Uncompensated heart failure.",

      "Severe hypertension.",

      "Respiratory failure secondary to neuromuscular disorders.",

      "Airway obstruction.",

      "Pulmonary embolism.",

      "Pneumothorax.",

      "Acute asthma.",

      "Dyspnea.",

      "Hypoxia not associated with hypercapnia.",

    ],


    precautions: [

      "Use cautiously in patients with a history of asthma.",

      "Use cautiously in patients with cardiac arrhythmias or tachycardia.",

      "Use extreme caution in patients with cerebral edema or increased cerebrospinal fluid pressure.",

      "Use extreme caution in patients with pheochromocytoma.",

      "Use extreme caution in patients with hyperthyroidism.",

      "Avoid intravenous extravasation.",

      "Avoid repeated injections into the same intravenous site.",

    ],


    adverseEffects: [

      "Hypertension",

      "Cardiac arrhythmias",

      "Seizures",

      "Hyperventilation",

      "Respiratory alkalosis",

    ],


    drugInteractions: [

      "No clinically significant drug interactions were specifically described in the provided reference.",

    ],


    monitoring: [

      "Monitor respiratory rate and respiratory effort.",

      "Monitor cardiovascular status.",

      "Monitor blood pressure.",

      "Monitor neurologic status for CNS stimulation or seizures.",

      "Monitor response to therapy and determine whether ventilatory support is still required.",

    ],


    withdrawalPeriod:
      "Not applicable for companion animals.",


    storage: [

      "Store according to manufacturer's labeling.",

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

    version:
      "1.0.0",


    lastReviewed:
      "2026-07-16",


    tags: [

      "doxapram",
      "doxapram hydrochloride",

      "dopram",

      "cns stimulant",
      "central nervous system stimulant",

      "respiratory stimulant",

      "emergency drug",

      "anesthetic recovery",
      "post anesthesia",

      "respiratory depression",

      "neonatal resuscitation",

      "laryngeal function",
      "laryngeal paralysis",

      "gas anesthesia",
      "barbiturate anesthesia",

      "dog",
      "cat",

    ],

  },


};


export default [doxapram];