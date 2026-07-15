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

const xylazine: Drug = {

  id: "xylazine",

  genericName: "Xylazine Hydrochloride",

  brandNames: [
    "Rompun",
    "Xylazil",
    "Xyla",
    "Xylavet",
    "Xylazine Injection",
  ],

  status: DrugStatus.ACTIVE,


  searchTerms: [
    "xylazine",
    "xylazine hydrochloride",
    "rompun",
    "xylazil",
    "xyla",
    "xylavet",
    "alpha2 agonist",
    "alpha-2 agonist",
    "sedative",
    "analgesic",
    "muscle relaxant",
    "veterinary sedative",
  ],


  quickFacts: {

    prescriptionRequired: true,

    controlledDrug: false,

    category: "Sedative / Analgesic",

    drugClass: "Alpha2-Adrenergic Agonist",

    pharmacologicClass: "Alpha2-Adrenergic Receptor Agonist",

    commonRoutes: [
      Route.IV,
      Route.IM,
    ],

    availableRoutes: [
      Route.IV,
      Route.IM,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.HORSE,
      Species.CATTLE,
      Species.SHEEP,
      Species.GOAT,
    ],

  },


  species: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
    Species.CATTLE,
    Species.SHEEP,
    Species.GOAT,
  ],



  formulations: [

    {

      id: "xylazine-2-percent",

      dosageForm: DosageForm.INJECTION,

      strength: "20 mg/mL (2%)",

      concentration: {
        value: 20,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
      ],

    },


    {

      id: "xylazine-10-percent",

      dosageForm: DosageForm.INJECTION,

      strength: "100 mg/mL (10%)",

      concentration: {
        value: 100,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
      ],

      notes:
        "Use extreme caution when drawing doses for ruminants because of higher concentration.",

    },

  ],
    doseReferences: [

    {
      species: Species.DOG,

      indication: "Sedation",

      route: Route.IV,

      dose: {
        minimum: 1.1,
        maximum: 1.1,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Inject slowly. Monitor cardiovascular and respiratory function.",

      evidence: "Package Insert; Rompun®",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Sedation",

      route: Route.IM,

      dose: {
        minimum: 1.1,
        maximum: 2.2,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Commonly used as a preanesthetic sedative.",

      evidence: "Package Insert; Rompun®",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Sedation",

      route: Route.IM,

      dose: {
        minimum: 0.6,
        maximum: 0.6,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "As needed",

      maximumTotalDose: "",

      notes:
        "Alternative sedative dose.",

      evidence: "Morgan 1988",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication: "Sedation",

      route: Route.IV,

      dose: {
        minimum: 1.1,
        maximum: 1.1,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Monitor for emesis and bradycardia.",

      evidence: "Package Insert; Rompun®",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication: "Sedation",

      route: Route.IM,

      dose: {
        minimum: 1.1,
        maximum: 2.2,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Routine sedative dose.",

      evidence: "Package Insert; Rompun®",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication: "Emesis",

      route: Route.IM,

      dose: {
        minimum: 0.44,
        maximum: 0.44,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Single administration",

      maximumTotalDose: "",

      notes:
        "Produces vomiting within approximately 3–5 minutes in most cats.",

      evidence: "Morgan 1988; Riviere 1985",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication: "Analgesia",

      route: Route.IM,

      dose: {
        minimum: 0.1,
        maximum: 1,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "As needed",

      maximumTotalDose: "",

      notes:
        "May also be administered IV.",

      evidence: "Carroll 1999",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CATTLE,

      indication: "Sedation",

      route: Route.IV,

      dose: {
        minimum: 0.05,
        maximum: 0.15,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Cattle are extremely sensitive to xylazine. Verify concentration carefully.",

      evidence: "Thurmon and Benson 1986",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CATTLE,

      indication: "Sedation",

      route: Route.IM,

      dose: {
        minimum: 0.1,
        maximum: 0.33,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Pretreatment with atropine may reduce bradycardia and hypersalivation.",

      evidence: "Thurmon and Benson 1986",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.HORSE,

      indication: "Sedation",

      route: Route.IV,

      dose: {
        minimum: 1.1,
        maximum: 1.1,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Allow full effect before handling",

      maximumTotalDose: "",

      notes:
        "Quiet environment is recommended after administration.",

      evidence: "Package Insert; Rompun®",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.HORSE,

      indication: "Sedation",

      route: Route.IM,

      dose: {
        minimum: 2.2,
        maximum: 2.2,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Alternative IM protocol.",

      evidence: "Package Insert; Rompun®",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.HORSE,

      indication: "Sedation and analgesia for colic",

      route: Route.IV,

      dose: {
        minimum: 0.2,
        maximum: 0.5,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Analgesia approximately 20–30 minutes",

      maximumTotalDose: "",

      notes:
        "Evaluate heart rate before administration.",

      evidence: "Moore 1999",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.SHEEP,

      indication: "Sedation",

      route: Route.IV,

      dose: {
        minimum: 0.05,
        maximum: 0.1,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Use with extreme caution.",

      evidence: "Thurmon and Benson 1986",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.SHEEP,

      indication: "Sedation",

      route: Route.IM,

      dose: {
        minimum: 0.1,
        maximum: 0.22,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Sheep are highly sensitive to xylazine.",

      evidence: "Thurmon and Benson 1986",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.GOAT,

      indication: "Sedation",

      route: Route.IV,

      dose: {
        minimum: 0.05,
        maximum: 0.1,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Use with extreme caution.",

      evidence: "Thurmon and Benson 1986",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.GOAT,

      indication: "Sedation",

      route: Route.IM,

      dose: {
        minimum: 0.1,
        maximum: 0.22,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Goats are highly sensitive to xylazine.",

      evidence: "Thurmon and Benson 1986",

      reference: "Plumb's Veterinary Drug Handbook",
    },

  ],
    clinical: {

    mechanismOfAction:
      "Xylazine is a potent alpha2-adrenergic receptor agonist that produces dose-dependent sedation, visceral analgesia, and skeletal muscle relaxation through central presynaptic inhibition of norepinephrine release within the central nervous system.",

    spectrum:
      "Provides sedation, muscle relaxation, and moderate visceral analgesia. Commonly used as a preanesthetic, chemical restraint agent, and analgesic in multiple veterinary species.",

    indications: [
      "Sedation",
      "Chemical restraint",
      "Premedication before general anesthesia",
      "Visceral analgesia",
      "Minor diagnostic procedures",
      "Minor surgical procedures",
      "Emesis induction in cats",
      "Colic analgesia in horses",
    ],

    commonUses: [
      "Preanesthetic medication",
      "Sedation for radiography and diagnostic procedures",
      "Chemical restraint in dogs, cats, horses, and ruminants",
      "Analgesia for equine colic",
      "Emetic in cats",
      "Combination anesthesia protocols with ketamine or tiletamine-zolazepam",
    ],

    clinicalDecisionNotes: [
      "Dosage varies greatly between species; cattle, sheep, and goats require substantially lower doses than dogs and horses.",
      "Ruminants are extremely sensitive to xylazine and overdose can occur easily.",
      "Produces excellent visceral analgesia but relatively poor somatic analgesia.",
      "Alpha2-antagonists such as atipamezole, yohimbine, or tolazoline can reverse its effects.",
      "Avoid intra-arterial injection because severe seizures and cardiovascular collapse may occur.",
      "Animals should recover in a quiet environment because sudden auditory stimulation may provoke movement.",
    ],

    clinicalPearls: [
      "Frequently combined with ketamine for induction of anesthesia.",
      "Produces reliable emesis in cats within approximately 3–5 minutes.",
      "Evaluate cardiovascular status before administration because bradycardia and AV block are common.",
      "Pretreatment with atropine may reduce bradycardia and hypersalivation in cattle.",
      "Monitor respiratory function throughout sedation and recovery.",
      "Verify product concentration carefully before dosing, especially in ruminants.",
    ],

  },



  reproduction: {

    pregnancy: {
      recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "May induce premature parturition, particularly in cattle.",
        "Generally avoid use during the last trimester of pregnancy.",
        "No confirmed teratogenic effects have been reported.",
      ],
    },

    lactation: {
      recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Does not appear to be excreted in detectable quantities in cow's milk.",
        "Use only when benefits outweigh potential risks.",
      ],
    },

    breeding: {
      recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Use cautiously in breeding animals.",
        "Limited reproductive safety data are available.",
      ],
    },

  },



  overdose: {

    signs: [
      "Profound sedation",
      "Severe bradycardia",
      "Hypotension",
      "Respiratory depression",
      "Cardiac arrhythmias",
      "Seizures",
      "Collapse",
    ],

    management: [
      "Maintain airway and provide supplemental oxygen.",
      "Provide mechanical ventilation if necessary.",
      "Monitor cardiovascular status continuously.",
      "Administer alpha2 antagonists (atipamezole, yohimbine, or tolazoline) when indicated.",
      "Provide symptomatic and supportive care.",
    ],

  },
    safety: {

    contraindications: [
      "Animals receiving epinephrine",
      "Active ventricular arrhythmias",
      "Preexisting severe cardiac dysfunction",
      "Hypotension or shock",
      "Severe respiratory dysfunction",
      "Severe hepatic insufficiency",
      "Severe renal insufficiency",
      "Preexisting seizure disorders",
      "Severely debilitated animals",
      "Last trimester of pregnancy, particularly in cattle",
      "Debilitated or dehydrated ruminants",
      "Ruminants with urinary tract obstruction",
    ],

    precautions: [
      "Use extreme caution in cattle, sheep, and goats because they are highly sensitive to xylazine.",
      "Avoid intra-arterial injection because severe seizures and cardiovascular collapse may occur.",
      "Use cautiously in horses with intestinal impactions.",
      "Use cautiously in horses during the vasoconstrictive phase of laminitis.",
      "Allow cats to vomit before inducing general anesthesia to reduce aspiration risk.",
      "Monitor cardiovascular and respiratory function throughout sedation and recovery.",
      "Sudden auditory stimulation may provoke movement in sedated horses.",
      "Verify product concentration carefully before dosing, especially when using 10% formulations in ruminants.",
    ],

    adverseEffects: [
      "Bradycardia",
      "Partial atrioventricular block",
      "Respiratory depression",
      "Muscle tremors",
      "Hypotension",
      "Reduced respiratory rate",
      "Movement in response to sharp auditory stimuli",
      "Emesis (especially cats)",
      "Increased urination in cats",
      "Aerophagia and bloat in dogs",
      "Sweating in horses",
      "Increased intracranial pressure",
      "Reduced mucociliary clearance",
      "Salivation",
      "Ruminal atony",
      "Bloat",
      "Regurgitation",
      "Hypothermia",
      "Diarrhea",
      "Premature parturition",
      "Ataxia",
    ],

    drugInteractions: [
      "Epinephrine increases the risk of ventricular arrhythmias and should not be used concurrently.",
      "Ketamine is commonly combined with xylazine for balanced anesthesia.",
      "Concurrent CNS depressants may enhance sedation and cardiorespiratory depression.",
      "Atipamezole, yohimbine, and tolazoline reverse or shorten xylazine effects.",
      "Doxapram may be used to support respiration during severe respiratory depression.",
    ],

    monitoring: [
      "Heart rate",
      "Cardiac rhythm",
      "Blood pressure",
      "Respiratory rate",
      "Oxygenation",
      "Depth of sedation",
      "Body temperature",
      "Recovery quality",
    ],

    storage: [
      "Store below 30°C.",
      "Protect from excessive heat.",
      "Compatible in the same syringe with acepromazine, buprenorphine, butorphanol, chloral hydrate, and meperidine.",
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
      "xylazine",
      "xylazine hydrochloride",
      "rompun",
      "alpha2 agonist",
      "alpha-2 agonist",
      "sedative",
      "analgesic",
      "muscle relaxant",
      "chemical restraint",
      "premedication",
      "dogs",
      "cats",
      "horses",
      "cattle",
      "sheep",
      "goats",
      "emetic",
      "colic",
    ],

  },

};

export default [xylazine];