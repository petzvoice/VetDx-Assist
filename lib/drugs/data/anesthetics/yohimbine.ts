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

const yohimbine: Drug = {
  id: "yohimbine",

  genericName: "Yohimbine Hydrochloride",

  brandNames: [
    "Yobine",
    "Antagonil",
    "Yohimbine Injection",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "yohimbine",
    "yohimbine hydrochloride",
    "yobine",
    "antagonil",
    "alpha2 antagonist",
    "alpha-2 adrenergic antagonist",
    "alpha2 blocker",
    "xylazine reversal",
    "xylazine antidote",
    "amitraz toxicity",
    "amitraz antidote",
    "sedation reversal",
    "reversal agent",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Sedation Reversal Agent",

    drugClass: "Alpha2-Adrenergic Antagonist",

    pharmacologicClass: "Alpha2-Adrenergic Receptor Antagonist",

    commonRoutes: [
      Route.IV,
    ],

    availableRoutes: [
      Route.IV,
      Route.IM,
      Route.SC,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CATTLE,
      Species.HORSE,
    ],
  },

  species: [
    Species.DOG,
    Species.CATTLE,
    Species.HORSE,
  ],
    formulations: [
    {
      id: "yohimbine-2mg-ml",

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

      notes:
        "Sterile injectable solution. Commonly supplied in 10 mL, 20 mL, and 50 mL multidose vials.",
    },
  ],
    doseReferences: [

    {
      species: Species.DOG,

      indication: "Reversal of xylazine sedation",

      route: Route.IV,

      dose: {
        minimum: 0.11,
        maximum: 0.11,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer slowly",

      maximumTotalDose: "",

      notes:
        "Administer by slow IV injection for reversal of xylazine sedation.",

      evidence:
        "Package Insert; Yobine® (Lloyd)",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.DOG,

      indication: "Antiemetic therapy",

      route: Route.SC,

      dose: {
        minimum: 0.25,
        maximum: 0.5,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Every 12 hours",

      duration: "As clinically indicated",

      maximumTotalDose: "",

      notes:
        "May also be administered IM.",

      evidence:
        "Washabau and Elie 1995",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.DOG,

      indication: "Reversal of amitraz-induced bradycardia and hypotension",

      route: Route.IV,

      dose: {
        minimum: 0.1,
        maximum: 0.1,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Repeat as necessary",

      duration: "As clinically indicated",

      maximumTotalDose: "",

      notes:
        "Used to reverse centrally mediated bradycardia and hypotension associated with amitraz ingestion.",

      evidence:
        "Manning 2000",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.DOG,

      indication: "Treatment or prevention of amitraz toxicity associated with demodicosis treatment",

      route: Route.IV,

      dose: {
        minimum: 0.11,
        maximum: 0.11,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "As clinically indicated",

      maximumTotalDose: "",

      notes:
        "May be combined with atipamezole 50 mcg/kg IM in cases of amitraz toxicity.",

      evidence:
        "Torres 2007b",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.DOG,

      indication: "Treatment or prevention of amitraz dip adverse effects",

      route: Route.IV,

      dose: {
        minimum: 0.1,
        maximum: 0.1,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration:
        "Before or after amitraz bathing",

      maximumTotalDose: "",

      notes:
        "May be administered prior to or after amitraz dipping to reduce adverse effects.",

      evidence:
        "Hillier 2006g",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.DOG,

      indication: "Amitraz toxicity prevention or treatment",

      route: Route.IM,

      dose: {
        minimum: 0.25,
        maximum: 0.25,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "As clinically indicated",

      maximumTotalDose: "",

      notes:
        "May be administered with atipamezole 50 mcg/kg IM.",

      evidence:
        "Torres 2007b",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.CATTLE,

      indication: "Reversal of xylazine sedation",

      route: Route.IV,

      dose: {
        minimum: 0.125,
        maximum: 0.125,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer slowly",

      maximumTotalDose: "",

      notes:
        "Used for reversal of xylazine sedation in cattle.",

      evidence:
        "Gross and Tranquilli 1989",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.HORSE,

      indication: "Reversal of xylazine sedation",

      route: Route.IV,

      dose: {
        minimum: 0.075,
        maximum: 0.075,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer slowly",

      maximumTotalDose: "",

      notes:
        "ARCI UCGFS Class 2 Drug.",

      evidence:
        "Gross and Tranquilli 1989",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

  ],
    clinical: {

    mechanismOfAction:
      "Yohimbine is a selective alpha2-adrenergic receptor antagonist that competitively blocks central alpha2 receptors. This increases sympathetic outflow through enhanced norepinephrine release, reversing the sedative, cardiovascular, respiratory, and analgesic effects produced by alpha2-adrenergic agonists such as xylazine.",


    spectrum:
      "Rapid reversal of alpha2-agonist-induced sedation, muscle relaxation, bradycardia, hypotension, respiratory depression, and analgesia. Also used in management of amitraz-associated adverse effects.",


    indications: [
      "Reversal of xylazine sedation",
      "Treatment of amitraz toxicity",
      "Prevention of adverse effects associated with amitraz dips",
      "Antiemetic therapy in dogs",
    ],


    commonUses: [
      "Reversal of xylazine-induced sedation",
      "Management of alpha2-agonist sedation protocols",
      "Treatment of amitraz-associated bradycardia and hypotension",
      "Prevention of amitraz dip adverse effects",
    ],


    clinicalDecisionNotes: [

      "Yohimbine reverses alpha2-agonist sedation but also reverses alpha2-mediated analgesia; additional analgesic support may be required after painful procedures.",

      "Recovery may be rapid after administration; monitor patients closely to prevent injury during awakening.",

      "Adverse effects are reported more commonly in small animals compared with large animals.",

      "Central alpha2 blockade increases sympathetic activity, which may result in transient cardiovascular stimulation.",

      "Use carefully in animals where increased sympathetic activity may be undesirable.",
    ],


    clinicalPearls: [

      "Administer IV slowly to reduce the risk of excitement and adverse cardiovascular effects.",

      "Yohimbine is primarily used for reversal of xylazine effects.",

      "Atipamezole is generally preferred for medetomidine and dexmedetomidine reversal, while yohimbine has historically been used for xylazine reversal.",

      "Monitor heart rate, respiratory rate, blood pressure, and recovery behavior after administration.",

      "Normal pain perception may return rapidly after xylazine reversal.",
    ],

  },
    reproduction: {

    pregnancy: {

      recommendation: ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "Safe use during pregnancy has not been established in veterinary species.",
        "Use only when the potential clinical benefit justifies the potential risk.",
      ],

    },


    lactation: {

      recommendation: ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "No information regarding safety during lactation was located.",
        "Use cautiously in lactating animals.",
      ],

    },


    breeding: {

      recommendation: ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "Safety in breeding animals has not been established.",
      ],

    },

  },
    overdose: {

    signs: [
      "Central nervous system excitation",
      "Transient apprehension",
      "Muscle tremors",
      "Tachycardia",
      "Hypertension",
      "Increased respiratory rate",
      "Agitation",
      "Excessive salivation",
    ],


    management: [

      "Provide supportive and symptomatic care.",

      "Monitor cardiovascular and neurologic status until clinical signs resolve.",

      "Reduce external stimulation and maintain a calm recovery environment.",

      "Treat significant cardiovascular or neurologic abnormalities as clinically indicated.",

    ],

  },
    safety: {

    contraindications: [

      "Hypersensitivity to yohimbine.",

    ],


    precautions: [

      "Use cautiously in animals with renal disease.",

      "Use cautiously in animals with seizure disorders.",

      "Normal pain perception may return rapidly following reversal of xylazine sedation.",

      "Monitor closely during recovery because excitement, apprehension, or self-injury may occur.",

      "Adverse effects are more likely in small animals than large animals.",

    ],


    adverseEffects: [

      "Transient apprehension",

      "Central nervous system excitement",

      "Muscle tremors",

      "Salivation",

      "Increased respiratory rate",

      "Hyperemic mucous membranes",

      "Tachycardia",

      "Hypertension",

    ],


    drugInteractions: [

      "Antagonizes the effects of alpha2-adrenergic agonists such as xylazine.",

      "Reverses alpha2-mediated analgesia; additional analgesic therapy may be required after painful procedures.",

      "May be used with atipamezole during management of amitraz toxicity protocols.",

    ],


    monitoring: [

      "Heart rate",

      "Respiratory rate",

      "Blood pressure",

      "Neurologic status",

      "Recovery quality",

      "Behavior during recovery",

    ],


    storage: [

      "Store at room temperature (15°C to 30°C).",

      "Protect from light and heat.",

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

      "yohimbine",

      "yohimbine hydrochloride",

      "yobine",

      "antagonil",

      "alpha2 antagonist",

      "alpha-2 antagonist",

      "alpha2 adrenergic antagonist",

      "xylazine reversal",

      "amitraz",

      "amitraz toxicity",

      "sedation reversal",

      "reversal agent",

      "injectable anesthetic reversal",

      "dogs",

      "horses",

      "cattle",

    ],

  },

};


export default [yohimbine];