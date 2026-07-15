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

const thiopental: Drug = {
  id: "thiopental",

  genericName: "Thiopental Sodium",

  brandNames: [
    "Pentothal",
    "Trapanal",
    "Thiopental Sodium for Injection",
    "Thiopentone Sodium Injection",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "thiopental",
    "thiopentone",
    "thiopental sodium",
    "pentothal",
    "trapanal",
    "barbiturate",
    "ultra short acting anesthetic",
    "injectable anesthetic",
    "anesthetic induction",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: true,

    category: "Injectable Anesthetic",

    drugClass: "Ultra-short Acting Barbiturate",

    pharmacologicClass: "Thiobarbiturate",

    commonRoutes: [
      Route.IV,
    ],

    availableRoutes: [
      Route.IV,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.HORSE,
      Species.PIG,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
    Species.PIG,
  ],

  formulations: [
    {
      id: "powder-250mg",

      dosageForm: DosageForm.POWDER_FOR_INJECTION,

      strength: "250 mg/vial",

      concentration: {
        value: 250,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.IV,
      ],
    },

    {
      id: "powder-500mg",

      dosageForm: DosageForm.POWDER_FOR_INJECTION,

      strength: "500 mg/vial",

      concentration: {
        value: 500,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.IV,
      ],
    },

    {
      id: "powder-1g",

      dosageForm: DosageForm.POWDER_FOR_INJECTION,

      strength: "1 g/vial",

      concentration: {
        value: 1000,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.IV,
      ],
    },

    {
      id: "reconstituted-2_5",

      dosageForm: DosageForm.INJECTION,

      strength: "2.5% Solution",

      concentration: {
        value: 25,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
      ],
    },

    {
      id: "reconstituted-5",

      dosageForm: DosageForm.INJECTION,

      strength: "5% Solution",

      concentration: {
        value: 50,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
      ],
    },
  ],

  doseReferences: [
        {
      species: Species.DOG,

      indication: "Anesthetic induction (label)",

      route: Route.IV,

      dose: {
        minimum: 13.2,
        maximum: 26.4,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose; administer to effect.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes:
        "Dose depends on desired anesthetic duration. Administer approximately one-third rapidly, then titrate remaining dose slowly to effect. Repeated doses accumulate and prolong recovery.",

      evidence: "Label recommendation.",

      reference: "Pentothal® Package Insert",
    },

    {
      species: Species.DOG,

      indication: "Brief anesthesia",

      route: Route.IV,

      dose: {
        minimum: 15,
        maximum: 17,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Approximately 7–10 minutes.",

      maximumTotalDose: "",

      notes: "",

      evidence: "Literature recommendation.",

      reference: "Booth 1988",
    },

    {
      species: Species.DOG,

      indication: "Moderate-duration anesthesia",

      route: Route.IV,

      dose: {
        minimum: 18,
        maximum: 22,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Approximately 10–15 minutes.",

      maximumTotalDose: "",

      notes: "",

      evidence: "Literature recommendation.",

      reference: "Booth 1988",
    },

    {
      species: Species.DOG,

      indication: "Longer-duration anesthesia",

      route: Route.IV,

      dose: {
        minimum: 22,
        maximum: 29,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Approximately 15–25 minutes.",

      maximumTotalDose: "",

      notes: "",

      evidence: "Literature recommendation.",

      reference: "Booth 1988",
    },
        {
      species: Species.DOG,

      indication: "General anesthetic induction",

      route: Route.IV,

      dose: {
        minimum: 12,
        maximum: 15,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose; titrate to effect.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes:
        "Administer approximately one-third of the calculated dose rapidly, then titrate additional drug to effect. Repeated dosing causes cumulative effects and prolonged recovery.",

      evidence: "Clinical recommendation.",

      reference: "Hellyer 2005",
    },

    {
      species: Species.CAT,

      indication: "Anesthetic induction (label)",

      route: Route.IV,

      dose: {
        minimum: 13.2,
        maximum: 26.4,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose; administer to effect.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes: "Dose depends on desired anesthetic duration.",

      evidence: "Label recommendation.",

      reference: "Pentothal® Package Insert",
    },

    {
      species: Species.CAT,

      indication: "General anesthetic induction",

      route: Route.IV,

      dose: {
        minimum: 22,
        maximum: 22,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes: "Recommended for unpremedicated cats.",

      evidence: "Literature recommendation.",

      reference: "Mandsager 1988",
    },

    {
      species: Species.CAT,

      indication: "General anesthetic induction after tranquilization",

      route: Route.IV,

      dose: {
        minimum: 15.4,
        maximum: 15.4,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes: "Following tranquilizer premedication.",

      evidence: "Literature recommendation.",

      reference: "Mandsager 1988",
    },

    {
      species: Species.CAT,

      indication: "General anesthetic induction after narcotic premedication",

      route: Route.IV,

      dose: {
        minimum: 11,
        maximum: 11,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes: "Following narcotic premedication.",

      evidence: "Literature recommendation.",

      reference: "Mandsager 1988",
    },
        {
      species: Species.CAT,

      indication: "General anesthetic induction",

      route: Route.IV,

      dose: {
        minimum: 12,
        maximum: 15,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose; titrate to effect.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes:
        "Administer approximately one-third of the calculated dose rapidly, then titrate additional drug to effect. Repeated doses accumulate and prolong recovery.",

      evidence: "Clinical recommendation.",

      reference: "Hellyer 2005",
    },

    {
      species: Species.HORSE,

      indication: "Anesthetic induction with preanesthetic tranquilization",

      route: Route.IV,

      dose: {
        minimum: 6,
        maximum: 12,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes: "Average recommended dose is approximately 8.25 mg/kg.",

      evidence: "Label recommendation.",

      reference: "Pentothal® Package Insert",
    },

    {
      species: Species.HORSE,

      indication: "Anesthetic induction without preanesthetic tranquilization",

      route: Route.IV,

      dose: {
        minimum: 8.8,
        maximum: 15.4,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes: "Typical average dose is 9.9–11 mg/kg.",

      evidence: "Label recommendation.",

      reference: "Pentothal® Package Insert",
    },

    {
      species: Species.HORSE,

      indication: "Anesthetic induction after xylazine or acepromazine premedication",

      route: Route.IV,

      dose: {
        minimum: 11.1,
        maximum: 11.1,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Induction only.",

      maximumTotalDose: "1 g per 90 kg body weight.",

      notes:
        "Administer as a 10% solution over approximately 20 seconds, 15 minutes after premedication.",

      evidence: "Literature recommendation.",

      reference: "Booth 1988",
    },

    {
      species: Species.HORSE,

      indication: "Anesthetic induction after guaifenesin and sedation",

      route: Route.IV,

      dose: {
        minimum: 5.5,
        maximum: 5.5,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes: "Following guaifenesin administration and sedation.",

      evidence: "Literature recommendation.",

      reference: "Mandsager 1988",
    },

    {
      species: Species.HORSE,

      indication: "Anesthetic induction after tranquilization",

      route: Route.IV,

      dose: {
        minimum: 8.8,
        maximum: 11,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes: "",

      evidence: "Literature recommendation.",

      reference: "Mandsager 1988",
    },
        {
      species: Species.PIG,

      indication: "Anesthetic induction (label)",

      route: Route.IV,

      dose: {
        minimum: 5.5,
        maximum: 11,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes: "",

      evidence: "Label recommendation.",

      reference: "Pentothal® Package Insert",
    },

    {
      species: Species.PIG,

      indication: "General anesthetic induction (5–50 kg pigs)",

      route: Route.IV,

      dose: {
        minimum: 10,
        maximum: 11,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose.",

      duration: "Induction only.",

      maximumTotalDose: "",

      notes: "Applicable to pigs weighing 5–50 kg.",

      evidence: "Literature recommendation.",

      reference: "Booth 1988",
    },
  ],
    clinical: {
    mechanismOfAction:
      "Thiopental is an ultra-short acting barbiturate that produces general anesthesia by enhancing gamma-aminobutyric acid (GABA) activity at GABAA receptors. It prolongs chloride channel opening, hyperpolarizes neurons, depresses the central nervous system, and decreases cerebral metabolic activity.",

    spectrum:
      "Ultra-short acting intravenous anesthetic and hypnotic with no clinically significant analgesic activity.",

    indications: [
      "Induction of general anesthesia",
      "Short-duration surgical or diagnostic procedures",
      "Anesthetic induction before inhalant anesthesia",
    ],

    commonUses: [
      "IV induction of anesthesia in dogs, cats, horses, and swine",
      "Short procedures requiring rapid unconsciousness",
      "Part of balanced anesthesia protocols",
    ],

    clinicalDecisionNotes: [
      "Administer strictly to effect using slow intravenous injection.",
      "Reduce dose in premedicated patients.",
      "Repeated doses accumulate in body fat and prolong recovery.",
      "Greyhounds and other sighthounds metabolize thiobarbiturates more slowly and may experience prolonged recovery.",
      "Provides hypnosis but little or no analgesia; administer analgesics when indicated.",
    ],

    clinicalPearls: [
      "Use a secure intravenous catheter before administration.",
      "Avoid perivascular or intra-arterial injection because severe tissue injury may occur.",
      "Provide oxygen supplementation and be prepared for assisted ventilation during induction.",
      "Premedication reduces induction dose requirements.",
      "Consider alternative induction agents in patients with severe cardiovascular disease or significant hepatic dysfunction.",
    ],
  },
    reproduction: {
    pregnancy: {
      recommendation: ReproductionRecommendation.BENEFIT_RISK,

      notes: [
        "Readily crosses the placenta.",
        "Use during pregnancy only when benefits clearly outweigh fetal risks.",
        "FDA Pregnancy Category C.",
      ],
    },

    lactation: {
      recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Small amounts may be excreted into milk after large doses.",
        "Clinically significant effects in nursing animals are unlikely, but caution is advised.",
      ],
    },

    breeding: {
      recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "No specific breeding safety studies in veterinary species.",
        "Use only when clinically indicated after risk-benefit assessment.",
      ],
    },
  },

  overdose: {
    signs: [
      "Severe respiratory depression or apnea",
      "Cardiovascular depression",
      "Hypotension",
      "Prolonged unconsciousness",
    ],

    management: [
      "Discontinue thiopental administration immediately.",
      "Provide oxygen supplementation and mechanical ventilation if necessary.",
      "Support cardiovascular function with intravenous fluids.",
      "Avoid catecholamine vasopressors such as epinephrine when possible.",
      "Monitor ECG, blood pressure, oxygenation, and ventilation until recovery.",
    ],
  },
    safety: {
    contraindications: [
      "Hypersensitivity to thiobarbiturates",
      "Absence of suitable veins for intravenous administration",
      "Status asthmaticus",
      "General contraindications to anesthesia",
    ],

    precautions: [
      "Use cautiously in severe cardiovascular disease or ventricular arrhythmias.",
      "Use cautiously in shock, severe hepatic disease, myxedema, severe anemia, excessive premedication, or myasthenia gravis.",
      "Greyhounds and other sighthounds have prolonged metabolism and recovery.",
      "Avoid rapid IV administration to reduce cardiovascular depression.",
      "Avoid extravasation and intra-arterial or intra-carotid injection because severe tissue injury and CNS toxicity may occur.",
      "Thiopental alone may produce excitement and marked ataxia in horses.",
      "Use only freshly prepared clear solutions.",
    ],

    adverseEffects: [
      "Respiratory depression or apnea",
      "Hypotension",
      "Ventricular bigeminy and other transient arrhythmias in dogs",
      "Hyperglycemia",
      "Respiratory acidosis",
      "Moderate tachycardia",
      "Excitement and severe ataxia in horses",
      "Transient leukopenia in horses",
      "Severe tissue damage after perivascular injection",
      "Severe CNS toxicity following intra-carotid administration",
      "Prolonged recovery after repeated dosing",
    ],

    drugInteractions: [
      "Additive CNS depression with sedatives, tranquilizers, opioids, inhalant anesthetics, and other anesthetic agents.",
      "Premedication significantly reduces induction dose requirements.",
    ],

    monitoring: [
      "Heart rate and ECG",
      "Respiratory rate and oxygenation",
      "Blood pressure",
      "Depth of anesthesia",
      "Recovery quality and duration",
    ],

    withdrawalPeriod: "Follow individual product label and local regulatory withdrawal recommendations.",

    storage: [
      "Store dry powder according to manufacturer recommendations.",
      "Reconstitute only with Sterile Water for Injection, 0.9% Sodium Chloride Injection, or D5W.",
      "Do not use concentrations below 2% in sterile water because hemolysis may occur.",
      "Stable for up to 3 days at room temperature or 7 days refrigerated after reconstitution; however, use within 24 hours whenever possible because no preservative is present.",
      "Do not use solutions containing visible precipitate.",
    ],
  },

  references: [
    {
      title: "Plumb's Veterinary Drug Handbook",
    },
    {
      title: "BSAVA Small Animal Formulary",
    },
    {
      title: "Veterinary Anesthesia and Analgesia",
    },
  ],

  metadata: {
    version: "1.0.0",

    lastReviewed: "2026-07-15",

    tags: [
      "thiopental",
      "thiopentone",
      "pentothal",
      "barbiturate",
      "ultra short acting",
      "injectable anesthetic",
      "anesthesia induction",
      "general anesthesia",
    ],
  },
};

export default [thiopental];