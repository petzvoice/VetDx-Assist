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

const acepromazine: Drug = {

  id: "acepromazine",

  genericName: "Acepromazine Maleate",

  brandNames: [
    "PromAce",
    "Atravet",
    "Aceproject",
    "Acevet",
    "Acepromazine Injection",
  ],

  status: DrugStatus.ACTIVE,


  searchTerms: [
    "acepromazine",
    "acepromazine maleate",
    "promace",
    "atravet",
    "aceproject",
    "acevet",
    "phenothiazine",
    "tranquilizer",
    "sedative",
    "neuroleptic",
    "dopamine antagonist",
  ],


  quickFacts: {

    prescriptionRequired: true,

    controlledDrug: false,

    category: "Sedative / Tranquilizer",

    drugClass: "Phenothiazine Neuroleptic",

    pharmacologicClass:
      "Dopamine D2 Receptor Antagonist with Alpha-Adrenergic Blocking Activity",

    commonRoutes: [
      Route.IM,
    ],

    availableRoutes: [
      Route.IM,
      Route.IV,
      Route.SC,
      Route.PO,
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
      id: "acepromazine-injection-10mg-ml",

      dosageForm: DosageForm.INJECTION,

      strength:
        "10 mg/mL",

      concentration: {
        value: 10,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IM,
        Route.IV,
        Route.SC,
      ],

    },


    {
      id: "acepromazine-injection-20mg-ml",

      dosageForm: DosageForm.INJECTION,

      strength:
        "20 mg/mL",

      concentration: {
        value: 20,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IM,
        Route.IV,
        Route.SC,
      ],

    },


    {
  id: "acepromazine-tablets",

  dosageForm: DosageForm.TABLET,

  strength:
    "5 mg, 10 mg, 25 mg, 50 mg",

  concentration: {
    value: 0,
    unit: ConcentrationUnit.OTHER,
  },

  routes: [
    Route.PO,
  ],

  notes:
    "Oral tablet formulation of acepromazine maleate.",
},


    {
      id: "acepromazine-oral-solution",

      dosageForm: DosageForm.ORAL_SOLUTION,

      strength:
        "10 mg/mL",

      concentration: {
        value: 10,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],

    },

  ],
    doseReferences: [

    {
      species: Species.DOG,

      indication:
        "Premedication before anesthesia",

      route: Route.IM,

      dose: {
        minimum: 0.03,
        maximum: 0.05,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "Administer approximately 1 hour before surgery",

      maximumTotalDose:
        "",

      notes:
        "Dose requirements vary depending on patient status and concurrent anesthetic drugs. Many clinicians use lower doses than manufacturer recommendations.",

      evidence:
        "Hall and Clarke 1983",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {
      species: Species.DOG,

      indication:
        "Restraint and sedation",

      route: Route.IV,

      dose: {
        minimum: 0.025,
        maximum: 0.2,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "Allow at least 15 minutes for onset",

      maximumTotalDose:
        "Maximum 3 mg",

      notes:
        "Inject IV slowly. Monitor blood pressure because hypotension may occur.",

      evidence:
        "Morgan 1988",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {
      species: Species.DOG,

      indication:
        "Restraint and sedation",

      route: Route.IM,

      dose: {
        minimum: 0.1,
        maximum: 0.25,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "As needed",

      maximumTotalDose:
        "",

      notes:
        "Dose should be reduced in geriatric, debilitated, cardiac, or hepatic patients.",

      evidence:
        "Morgan 1988",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {
      species: Species.DOG,

      indication:
        "Anxiety reduction in painful patients (not analgesic substitute)",

      route: Route.IM,

      dose: {
        minimum: 0.05,
        maximum: 0.05,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "As clinically required",

      maximumTotalDose:
        "Do not exceed 1 mg total dose",

      notes:
        "Does not provide analgesia and should not replace appropriate pain management.",

      evidence:
        "Carroll 1999",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {
      species: Species.CAT,

      indication:
        "Restraint and sedation",

      route: Route.IV,

      dose: {
        minimum: 0.05,
        maximum: 0.1,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "Allow adequate onset time",

      maximumTotalDose:
        "Maximum 1 mg",

      notes:
        "Cats may be sensitive to cardiovascular effects. Monitor carefully.",

      evidence:
        "Morgan 1988",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {
      species: Species.CAT,

      indication:
        "Anxiety reduction in painful patients (not analgesic substitute)",

      route: Route.IM,

      dose: {
        minimum: 0.05,
        maximum: 0.05,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "As required",

      maximumTotalDose:
        "Do not exceed 1 mg total dose",

      notes:
        "Should not be used as a replacement for analgesic therapy.",

      evidence:
        "Carroll 1999",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {
      species: Species.CAT,

      indication:
        "Sedation / preanesthetic protocol with ketamine",

      route: Route.IM,

      dose: {
        minimum: 0.11,
        maximum: 0.11,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single preanesthetic dose",

      duration:
        "Before ketamine administration",

      maximumTotalDose:
        "",

      notes:
        "Used with atropine 0.045–0.067 mg/kg 15–20 minutes before ketamine.",

      evidence:
        "Booth 1988a",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {
      species: Species.CATTLE,

      indication:
        "Sedation",

      route: Route.IV,

      dose: {
        minimum: 0.01,
        maximum: 0.02,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "As required",

      maximumTotalDose:
        "",

      notes:
        "Use cautiously because hypotension may occur.",

      evidence:
        "Booth 1988a",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {
      species: Species.CATTLE,

      indication:
        "Sedation",

      route: Route.IM,

      dose: {
        minimum: 0.03,
        maximum: 0.1,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "As required",

      maximumTotalDose:
        "",

      notes:
        "Alternative IM sedation protocol.",

      evidence:
        "Booth 1988a",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {
      species: Species.HORSE,

      indication:
        "Mild sedation",

      route: Route.IV,

      dose: {
        minimum: 0.01,
        maximum: 0.05,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "Approximately 15 minutes onset IV",

      maximumTotalDose:
        "",

      notes:
        "May also be administered IM. Monitor for hypotension and penile prolapse in stallions.",

      evidence:
        "Taylor 1999",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },


    {
      species: Species.SWINE,

      indication:
        "Sedation",

      route: Route.IM,

      dose: {
        minimum: 0.1,
        maximum: 0.2,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "As required",

      maximumTotalDose:
        "",

      notes:
        "May be administered IV, IM, or SC.",

      evidence:
        "Howard 1986",

      reference:
        "Plumb's Veterinary Drug Handbook",

    },

  ],
    clinical: {

    mechanismOfAction:
      "Acepromazine is a phenothiazine neuroleptic tranquilizer. It primarily blocks postsynaptic dopamine receptors in the central nervous system and may alter dopamine release and turnover. It depresses portions of the reticular activating system involved in alertness, thermoregulation, vasomotor tone, emesis, and hormonal regulation. It also has alpha-adrenergic blocking, anticholinergic, antihistaminic, and antispasmodic effects.",


    spectrum:
      "Produces sedation, tranquilization, muscle relaxation, and reduced spontaneous activity. It has negligible analgesic effects and should not be used as a substitute for pain management.",


    indications: [
      "Chemical restraint",
      "Sedation before diagnostic procedures",
      "Preanesthetic medication",
      "Reduction of anxiety associated with handling",
      "Adjunct to balanced anesthesia protocols",
    ],


    commonUses: [
      "Preanesthetic sedation in dogs and cats",
      "Chemical restraint for examinations and minor procedures",
      "Sedation protocols with opioids or anesthetic agents",
      "Equine tranquilization",
      "Large animal handling procedures",
    ],


    clinicalDecisionNotes: [
      "Acepromazine provides sedation but minimal analgesia; appropriate analgesics must be provided when pain is present.",
      "Dose requirements may be reduced in geriatric, debilitated, cardiac, or hepatic patients.",
      "Inject IV slowly because rapid administration may increase risk of hypotension.",
      "Avoid intra-arterial injection because severe adverse reactions may occur.",
      "May reduce the dose requirement of general anesthetics administered subsequently.",
      "Dogs, especially giant breeds and sight hounds, may show increased sensitivity.",
      "Hypotension may be significant and should be considered in hypovolemic or shock patients.",
    ],


    clinicalPearls: [
      "Commonly combined with opioids to provide neuroleptanalgesia.",
      "Does not provide surgical analgesia.",
      "Onset is slower than many injectable sedatives; allow adequate time for effect.",
      "Large animal males, especially horses, may develop penile protrusion after administration.",
      "May cause alterations in body temperature regulation.",
      "Monitor cardiovascular status in susceptible patients.",
    ],

  },



  reproduction: {

    pregnancy: {

      recommendation:
        ReproductionRecommendation.BENEFIT_RISK,

      notes: [
        "Phenothiazines are categorized as pregnancy risk category C in human medicine.",
        "Veterinary pregnancy safety data are limited.",
        "Use cautiously when benefits outweigh potential risks.",
        "Avoid unnecessary use near term when possible.",
      ],

    },


    lactation: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Specific lactation safety data are limited.",
        "Use cautiously in nursing animals.",
      ],

    },


    breeding: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Effects on fertility and breeding performance are not fully established.",
        "Use only when clinically indicated.",
      ],

    },

  },



  overdose: {

    signs: [

      "Severe hypotension",

      "Bradycardia",

      "Cardiovascular collapse",

      "Excessive sedation",

      "Hypothermia",

      "Hyperthermia",

      "Prolonged recovery",

      "Weakness",

    ],


    management: [

      "Discontinue administration.",

      "Provide supportive cardiovascular care.",

      "Monitor blood pressure and cardiac function.",

      "Maintain body temperature.",

      "Provide oxygen supplementation if required.",

      "Treat shock and hypotension according to clinical condition.",

    ],

  },
    safety: {

    contraindications: [

      "Hypersensitivity to acepromazine or phenothiazines",

      "Severe hypotension",

      "Hypovolemia or shock",

      "Severe cardiovascular disease",

      "Severe hepatic dysfunction",

      "Use in patients with tetanus or strychnine intoxication",

    ],


    precautions: [

      "Use reduced doses in geriatric animals.",

      "Use cautiously in debilitated patients.",

      "Use cautiously in patients with hepatic disease.",

      "Use cautiously in patients with cardiac disease.",

      "Use cautiously in sight hounds and giant breed dogs due to increased sensitivity.",

      "Monitor blood pressure because alpha-adrenergic blockade may cause hypotension.",

      "Inject IV slowly and never administer intra-arterially.",

      "Avoid use as the sole agent for painful procedures because analgesia is negligible.",

      "Consider reduced anesthetic requirements after acepromazine administration.",

    ],


    adverseEffects: [

      "Hypotension",

      "Bradycardia",

      "Cardiovascular collapse",

      "Cardiac rate abnormalities",

      "Hypothermia",

      "Hyperthermia",

      "Prolonged sedation",

      "Weakness",

      "Ataxia",

      "Penile protrusion in male large animals",

      "Increased sensitivity in certain dog breeds",

    ],


    drugInteractions: [

      "General anesthetics may require dose reduction after acepromazine administration.",

      "Opioids may enhance sedative effects and are commonly used for neuroleptanalgesia.",

      "Ketamine combinations may enhance sedation protocols.",

      "Atropine has been combined in some anesthetic protocols.",

      "Glycopyrrolate and diazepam may have physical incompatibility with phenothiazines.",

      "Other CNS depressants may increase sedation.",

    ],


    monitoring: [

      "Heart rate",

      "Blood pressure",

      "Cardiac rhythm",

      "Respiratory rate",

      "Body temperature",

      "Sedation depth",

      "Recovery quality",

    ],


    storage: [

      "Store protected from light.",

      "Store tablets in tightly closed containers.",

      "Do not freeze acepromazine injection.",

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

      "acepromazine",

      "acepromazine maleate",

      "promace",

      "atravet",

      "aceproject",

      "acevet",

      "phenothiazine",

      "sedative",

      "tranquilizer",

      "neuroleptic",

      "dopamine antagonist",

      "preanesthetic",

      "dogs",

      "cats",

      "horses",

      "cattle",

      "swine",

      "veterinary anesthesia",

    ],

  },

};


export default [acepromazine];