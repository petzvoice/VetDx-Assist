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

const propofol: Drug = {
  id: "propofol",

  genericName: "Propofol",

  brandNames: [
    "Rapinovet",
    "PropoFlo 28",
    "Propovet",
    "Vetofol",
    "Diprivan",
    "Provive",
    "Fresofol",
    "Propovan",
    "Propolip",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "propofol",
    "Rapinovet",
    "PropoFlo",
    "Diprivan",
    "injectable anesthetic",
    "general anesthesia",
    "induction agent",
    "CRI",
    "TIVA",
    "sedation",
    "status epilepticus",
    "dogs",
    "cats",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Anesthetic",

    drugClass: "General Anesthetic",

    pharmacologicClass: "Injectable Hypnotic Agent",

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
      id: "propofol-1-percent",

      dosageForm: DosageForm.INJECTION,

      strength: "1% Injectable Emulsion",

      concentration: {
        value: 10,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
      ],

      notes: "Available in 10, 20, 50, and 100 mL vials.",
    },

    {
      id: "propofol-2-percent",

      dosageForm: DosageForm.INJECTION,

      strength: "2% Injectable Emulsion",

      concentration: {
        value: 20,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
      ],

      notes: "Available in selected markets.",
    },
  ],

  doseReferences: [
        {
      species: Species.DOG,

      indication: "Anesthetic induction (healthy, unpremedicated)",

      route: Route.IV,

      dose: {
        minimum: 6,
        maximum: 6,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "To effect",

      maximumTotalDose: "",

      notes:
        "Administer slowly (approximately 25% of the calculated dose every 30 seconds) until intubation or desired anesthetic depth is achieved.",

      evidence: "Standard induction protocol",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Anesthetic induction (premedicated with tranquilizer)",

      route: Route.IV,

      dose: {
        minimum: 4,
        maximum: 4,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "To effect",

      maximumTotalDose: "",

      notes:
        "Dose applies to dogs premedicated with tranquilizers such as acepromazine.",

      evidence: "Manufacturer recommendations",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Anesthetic induction (premedicated with sedatives/opioids)",

      route: Route.IV,

      dose: {
        minimum: 3,
        maximum: 3,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "To effect",

      maximumTotalDose: "",

      notes:
        "For patients premedicated with agents such as xylazine or opioids.",

      evidence: "Manufacturer recommendations",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Continuous infusion for sedation",

      route: Route.IV,

      dose: {
        minimum: 0.1,
        maximum: 0.1,
        unit: DoseUnit.MG_PER_KG_PER_MIN,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Continuous rate infusion",

      duration: "As clinically required",

      maximumTotalDose: "",

      notes: "Adjust infusion rate to clinical effect.",

      evidence: "Published clinical recommendation",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Continuous infusion for maintenance of anesthesia (minor surgery)",

      route: Route.IV,

      dose: {
        minimum: 0.6,
        maximum: 0.6,
        unit: DoseUnit.MG_PER_KG_PER_MIN,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Continuous rate infusion",

      duration: "During anesthesia",

      maximumTotalDose: "",

      notes:
        "May supplement with 1 mg/kg IV bolus if anesthesia becomes inadequate.",

      evidence: "Published clinical recommendation",

      reference: "Plumb's Veterinary Drug Handbook",
    },
        {
      species: Species.DOG,

      indication: "Anesthetic induction (alternative protocol, no premedication)",

      route: Route.IV,

      dose: {
        minimum: 5,
        maximum: 6,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "To effect",

      maximumTotalDose: "",

      notes: "Alternative induction protocol in healthy dogs.",

      evidence: "Clinical recommendation",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Anesthetic induction after acepromazine premedication",

      route: Route.IV,

      dose: {
        minimum: 3,
        maximum: 4,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "To effect",

      maximumTotalDose: "",

      notes:
        "Following acepromazine premedication (0.05 mg/kg IM, IV or SC).",

      evidence: "Clinical recommendation",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication: "Anesthetic induction after acepromazine premedication",

      route: Route.IV,

      dose: {
        minimum: 4,
        maximum: 6,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "To effect",

      maximumTotalDose: "",

      notes:
        "Premedication may include acepromazine with or without butorphanol. Reduce dose if topical laryngeal anesthesia is used.",

      evidence: "Clinical recommendation",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication: "Endotracheal intubation without topical anesthesia",

      route: Route.IV,

      dose: {
        minimum: 8,
        maximum: 13,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "To effect",

      maximumTotalDose: "",

      notes:
        "Lower doses are generally adequate when topical anesthesia is used.",

      evidence: "Clinical recommendation",

      reference: "Plumb's Veterinary Drug Handbook",
    },
        {
      species: Species.DOG,

      indication: "Maintenance anesthesia (continuous infusion)",

      route: Route.IV,

      dose: {
        minimum: 0.4,
        maximum: 0.4,
        unit: DoseUnit.MG_PER_KG_PER_MIN,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Continuous rate infusion",

      duration: "During anesthesia",

      maximumTotalDose: "",

      notes:
        "If anesthesia becomes inadequate, administer a 1 mg/kg IV bolus and increase the infusion rate by approximately 25%. Reduce or stop the infusion if anesthesia is excessive.",

      evidence: "Clinical recommendation",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Refractory status epilepticus (CRI)",

      route: Route.IV,

      dose: {
        minimum: 0.1,
        maximum: 0.6,
        unit: DoseUnit.MG_PER_KG_PER_MIN,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Continuous rate infusion",

      duration: "Until seizure control",

      maximumTotalDose: "",

      notes:
        "Use only where airway protection, oxygen supplementation, and hemodynamic monitoring are available.",

      evidence: "Published clinical recommendation",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Refractory status epilepticus (bolus followed by CRI)",

      route: Route.IV,

      dose: {
        minimum: 3,
        maximum: 6,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single IV bolus",

      duration: "Follow immediately with CRI",

      maximumTotalDose: "",

      notes:
        "Follow with continuous infusion of 8–12 mg/kg/hour. Mechanical ventilation may be required because of hypoventilation.",

      evidence: "Published clinical recommendation",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Refractory status epilepticus (alternative protocol)",

      route: Route.IV,

      dose: {
        minimum: 1,
        maximum: 3.5,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "IV bolus",

      duration: "Follow with CRI",

      maximumTotalDose: "Up to 6 mg/kg bolus",

      notes:
        "Continue with CRI of 0.1–0.25 mg/kg/min (up to 0.6 mg/kg/min) for 6–12 hours, then gradually taper. Continuous infusions generally should not exceed approximately 48 hours.",

      evidence: "Published clinical recommendation",

      reference: "Plumb's Veterinary Drug Handbook",
    },
  ],
    clinical: {
    mechanismOfAction:
      "Propofol is a short-acting intravenous hypnotic anesthetic that potentiates GABA-mediated inhibitory neurotransmission within the central nervous system, producing rapid loss of consciousness with minimal analgesic activity.",

    spectrum:
      "Provides rapid induction and maintenance of general anesthesia, procedural sedation, and anticonvulsant activity. It has excellent muscle relaxation but little to no analgesic effect.",

    indications: [
      "Induction of general anesthesia",
      "Maintenance of anesthesia by continuous rate infusion (TIVA)",
      "Procedural sedation",
      "Facilitation of endotracheal intubation",
      "Management of refractory status epilepticus",
    ],

    commonUses: [
      "Routine anesthetic induction in dogs and cats",
      "Total intravenous anesthesia (TIVA)",
      "Short diagnostic or surgical procedures",
      "Sedation for imaging and minimally invasive procedures",
      "Control of refractory seizures when conventional anticonvulsants fail",
    ],

    clinicalDecisionNotes: [
      "Provides little or no analgesia; administer appropriate analgesics when painful procedures are performed.",
      "Reduce induction dose in premedicated or debilitated patients.",
      "Administer slowly to minimize apnea and hypotension.",
      "Continuous cardiovascular and respiratory monitoring is essential.",
      "Repeated administration in cats may prolong recovery and increase Heinz body formation.",
    ],

    clinicalPearls: [
      "Produces smooth, rapid induction and recovery because of rapid redistribution and metabolism.",
      "Premedication significantly reduces the induction dose required.",
      "Transient apnea is common if administered too rapidly.",
      "Use cautiously in patients with hypovolemia, hypoproteinemia, severe cardiovascular disease, or hepatic dysfunction.",
      "Endotracheal intubation and oxygen supplementation should be available whenever propofol is administered.",
    ],
  },
    reproduction: {
    pregnancy: {
      recommendation: ReproductionRecommendation.BENEFIT_RISK,

      notes: [
        "Crosses the placenta.",
        "Use only when benefits outweigh potential fetal risks.",
        "Safe use during pregnancy has not been fully established.",
      ],
    },

    lactation: {
      recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Excreted into milk in small amounts.",
        "Use cautiously in nursing animals.",
      ],
    },

    breeding: {
      recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "No evidence of adverse effects on fertility at therapeutic doses, but use only when clinically indicated.",
      ],
    },
  },

  overdose: {
    signs: [
      "Marked respiratory depression",
      "Apnea",
      "Hypotension",
      "Bradycardia",
      "Cardiovascular depression",
      "Prolonged unconsciousness",
    ],

    management: [
      "Discontinue propofol administration.",
      "Provide assisted or controlled ventilation with oxygen.",
      "Support cardiovascular function with intravenous fluids as needed.",
      "Administer vasopressors or anticholinergics when clinically indicated.",
      "Continue intensive monitoring until complete recovery.",
    ],
  },
    safety: {
    contraindications: [
      "Hypersensitivity to propofol or any formulation component",
      "Patients in which general anesthesia or sedation is contraindicated",
    ],

    precautions: [
      "Administer only where airway management, oxygen, and resuscitation equipment are available.",
      "Use cautiously in patients with severe stress or recent trauma.",
      "Use cautiously in hypoproteinemia or hyperlipidemia.",
      "Reduce dose when used with other CNS depressants or sedatives.",
      "Monitor closely in patients with seizure disorders or history of anaphylaxis.",
      "Cats with pre-existing hepatic disease may have prolonged recovery times.",
    ],

    adverseEffects: [
      "Transient respiratory depression",
      "Apnea (especially after rapid IV administration)",
      "Hypotension",
      "Bradycardia",
      "Histamine release",
      "Anaphylactoid reactions",
      "Myoclonus",
      "Paddling",
      "Opisthotonus",
      "Seizure-like movements during induction",
      "In cats: Heinz body formation with repeated dosing",
      "In cats: prolonged recovery",
      "In cats: anorexia",
      "In cats: lethargy",
      "In cats: malaise",
      "In cats: diarrhea",
    ],

    drugInteractions: [
      "Premedication with tranquilizers, opioids, alpha-2 agonists, or other CNS depressants reduces the required induction dose.",
      "Concurrent administration with other anesthetics or sedatives may potentiate cardiovascular and respiratory depression.",
    ],

    monitoring: [
      "Respiratory rate and effort",
      "Pulse oximetry",
      "Capnography",
      "Heart rate and ECG",
      "Blood pressure",
      "Body temperature",
      "Depth of anesthesia",
    ],

    withdrawalPeriod: "Not applicable.",

    storage: [
      "Store below 22°C (72°F); do not refrigerate or freeze.",
      "Protect from light.",
      "Shake well before use.",
      "Do not use if the emulsion has separated.",
      "Discard any unused product at the end of the anesthetic procedure or within 6 hours of opening, whichever occurs first.",
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
      title: "Merck Veterinary Manual",
    },
  ],

  metadata: {
    version: "1.0.0",

    lastReviewed: "2026-07-15",

    tags: [
      "propofol",
      "Rapinovet",
      "PropoFlo",
      "Diprivan",
      "injectable anesthetic",
      "general anesthesia",
      "TIVA",
      "sedation",
      "CRI",
      "status epilepticus",
      "dogs",
      "cats",
    ],
  },
};

export default [propofol];