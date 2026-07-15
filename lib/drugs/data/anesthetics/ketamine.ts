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

const ketamine: Drug = {
  id: "ketamine",

  genericName: "Ketamine Hydrochloride",

  brandNames: [
    "Ketavet",
    "Vetalar",
    "Ketaset",
    "Anaket",
    "Ketalar",
    "Ketamax",
    "Ketamine Hydrochloride Injection",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "ketamine",
    "ketamine hydrochloride",
    "ketavet",
    "vetalar",
    "ketaset",
    "ketalar",
    "anaket",
    "ketamax",
    "dissociative anesthetic",
    "NMDA receptor antagonist",
    "injectable anesthetic",
    "general anesthesia",
    "analgesic",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: true,

    category: "Anesthetic",

    drugClass: "Dissociative Anesthetic",

    pharmacologicClass: "NMDA Receptor Antagonist",

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
      ],
    },

    {
      id: "inj-50",

      dosageForm: DosageForm.INJECTION,

      strength: "50 mg/mL",

      concentration: {
        value: 50,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
      ],
    },

    {
      id: "inj-100",

      dosageForm: DosageForm.INJECTION,

      strength: "100 mg/mL",

      concentration: {
        value: 100,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.IM,
      ],
    },
  ],

    doseReferences: [
    {
      species: Species.DOG,

      indication: "Adjunct to anesthesia (Diazepam combination)",

      route: Route.IV,

      dose: {
        minimum: 10,
        maximum: 10,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Administer diazepam 0.5 mg/kg IV immediately before ketamine.",

      evidence: "Booth 1988a",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Adjunct to anesthesia (Midazolam combination)",

      route: Route.IM,

      dose: {
        minimum: 6.6,
        maximum: 11,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Administer after midazolam 0.066–0.22 mg/kg IM or IV.",

      evidence: "Mandsager 1988",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Adjunct to anesthesia (Xylazine combination)",

      route: Route.IM,

      dose: {
        minimum: 11,
        maximum: 11,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Administer approximately 10 minutes after xylazine 2.2 mg/kg IM. Reduce ketamine and xylazine doses by approximately 25% in dogs weighing more than 22.7 kg.",

      evidence: "Booth 1988a",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.DOG,

      indication: "Adjunct to anesthesia (Atropine + Xylazine protocol)",

      route: Route.IM,

      dose: {
        minimum: 22,
        maximum: 22,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Administer atropine 0.044 mg/kg IM, followed 15 minutes later by xylazine 1.1 mg/kg IM, then ketamine 5 minutes later.",

      evidence: "Booth 1988a",

      reference: "Plumb's Veterinary Drug Handbook",
    },
        {
      species: Species.CAT,

      indication: "Chemical restraint",

      route: Route.IM,

      dose: {
        minimum: 11,
        maximum: 11,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "As needed",

      maximumTotalDose: "",

      notes:
        "Most clinicians recommend atropine or glycopyrrolate premedication to reduce hypersalivation.",

      evidence: "Package Insert; Ketaset®—Bristol",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication: "Diagnostic or minor surgical procedures",

      route: Route.IM,

      dose: {
        minimum: 22,
        maximum: 33,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single dose",

      duration: "Procedure dependent",

      maximumTotalDose: "",

      notes:
        "Suitable for procedures not requiring skeletal muscle relaxation.",

      evidence: "Package Insert; Ketaset®—Bristol",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication: "General anesthesia",

      route: Route.IV,

      dose: {
        minimum: 2,
        maximum: 4,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Alternative IV induction protocol.",

      evidence: "Davis 1985b",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.CAT,

      indication: "General anesthesia",

      route: Route.IM,

      dose: {
        minimum: 11,
        maximum: 33,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "Administer to effect",

      maximumTotalDose: "",

      notes:
        "Alternative IM induction protocol.",

      evidence: "Davis 1985b",

      reference: "Plumb's Veterinary Drug Handbook",
    },
        {
      species: Species.HORSE,

      indication: "Field anesthesia (Xylazine protocol)",

      route: Route.IV,

      dose: {
        minimum: 2,
        maximum: 2,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "Administer after adequate sedation",

      maximumTotalDose: "",

      notes:
        "Administer after xylazine 1 mg/kg IV (or 2 mg/kg IM) given 5–10 minutes earlier. Horse should be adequately sedated before ketamine administration.",

      evidence: "Mathews 1999",

      reference: "Plumb's Veterinary Drug Handbook",
    },

    {
      species: Species.PIG,

      indication: "General anesthesia",

      route: Route.IM,

      dose: {
        minimum: 11,
        maximum: 11,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Single induction dose",

      duration: "As needed",

      maximumTotalDose: "",

      notes:
        "Administer after atropine premedication. Additional ketamine 2–4 mg/kg IV may be used to prolong anesthesia. Local anesthetics may improve analgesia.",

      evidence: "Thurmon and Benson 1986",

      reference: "Plumb's Veterinary Drug Handbook",
    },
  ],

    clinical: {
    mechanismOfAction:
      "Ketamine is a rapid-acting dissociative anesthetic that produces anesthesia and analgesia primarily through noncompetitive antagonism of N-methyl-D-aspartate (NMDA) receptors. It also interacts with opioid, monoaminergic, muscarinic, and voltage-gated calcium channels, producing functional dissociation between the thalamocortical and limbic systems while preserving many protective reflexes.",

    spectrum:
      "Produces dissociative anesthesia, somatic analgesia, amnesia, and immobilization with minimal cardiopulmonary depression at therapeutic doses. Provides poor visceral analgesia and limited muscle relaxation.",

    indications: [
      "Induction of general anesthesia",
      "Short diagnostic procedures",
      "Chemical restraint",
      "Adjunct to balanced anesthesia",
      "Field anesthesia in horses",
      "Analgesia as part of multimodal pain management",
      "Refractory status epilepticus (CRI)",
    ],

    commonUses: [
      "Anesthetic induction",
      "Sedation with alpha-2 agonists or benzodiazepines",
      "Chemical restraint in cats",
      "Field anesthesia in horses",
      "Minor surgical procedures",
      "Continuous rate infusion for analgesia",
      "Management of refractory seizures",
    ],

    clinicalDecisionNotes: [
      "Should not be used alone for major surgical procedures because muscle relaxation is poor.",
      "Always combine with appropriate sedatives, tranquilizers, or benzodiazepines for smoother induction and recovery.",
      "Preserves pharyngeal and laryngeal reflexes; airway protection is still recommended.",
      "Provides excellent somatic analgesia but limited visceral analgesia.",
      "Produces sympathetic stimulation with increased heart rate and blood pressure.",
      "Avoid in patients with elevated intracranial or intraocular pressure whenever possible.",
    ],

    clinicalPearls: [
      "Frequently combined with diazepam or midazolam for IV induction in dogs.",
      "Often combined with xylazine for equine field anesthesia.",
      "Atropine or glycopyrrolate may reduce ketamine-induced hypersalivation.",
      "Cats recover best in a quiet, dimly lit environment.",
      "Repeated administration may prolong recovery because of drug accumulation.",
      "Monitor cardiovascular and respiratory function throughout anesthesia and recovery.",
    ],
  },
    reproduction: {
    pregnancy: {
      recommendation: ReproductionRecommendation.BENEFIT_RISK,

      notes: [
        "Crosses the placenta and should be used only when benefits outweigh fetal risks.",
        "Use with caution during pregnancy, particularly near term.",
        "May be required for emergency anesthesia when safer alternatives are unavailable.",
      ],
    },

    lactation: {
      recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Specific veterinary lactation data are limited.",
        "Small amounts may be excreted in milk.",
        "Use cautiously in nursing animals.",
      ],
    },

    breeding: {
      recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "No evidence of adverse effects on fertility at therapeutic doses.",
        "Avoid unnecessary administration in breeding animals unless clinically indicated.",
      ],
    },
  },

  overdose: {
    signs: [
      "Respiratory depression or apnea",
      "Prolonged anesthesia",
      "Delayed recovery",
      "Seizures or muscular tremors",
      "Hypertonicity",
      "Cardiovascular depression",
      "Cardiac arrest",
    ],

    management: [
      "Discontinue ketamine administration.",
      "Provide airway support and supplemental oxygen.",
      "Initiate mechanical ventilation if necessary.",
      "Monitor ECG, blood pressure, and oxygenation.",
      "Provide supportive cardiovascular therapy as indicated.",
      "Treat seizures with appropriate anticonvulsants if required.",
    ],
  },

    safety: {
    contraindications: [
      "Hypersensitivity to ketamine or formulation components",
      "Animals intended for human consumption",
      "Use alone as the sole anesthetic for major surgical procedures",
      "Increased cerebrospinal fluid pressure",
      "Head trauma with elevated intracranial pressure",
    ],

    precautions: [
      "Use cautiously in patients with significant blood loss.",
      "Use cautiously in patients with hypertension, heart failure, or arterial aneurysms.",
      "Use cautiously in hepatic or renal insufficiency.",
      "Use cautiously in patients with seizure disorders.",
      "Use cautiously in patients with increased intraocular pressure or open globe injuries.",
      "Avoid procedures involving the pharynx, larynx, or trachea unless the airway is protected.",
      "Premedication with atropine or glycopyrrolate may reduce hypersalivation.",
      "Provide a quiet, low-stimulation environment during recovery.",
      "Monitor cardiovascular and respiratory function throughout anesthesia and recovery.",
    ],

    adverseEffects: [
      "Hypertension",
      "Hypersalivation",
      "Respiratory depression",
      "Hyperthermia",
      "Emesis",
      "Vocalization",
      "Erratic or prolonged recovery",
      "Dyspnea",
      "Spastic jerking movements",
      "Muscular tremors",
      "Hypertonicity",
      "Opisthotonos",
      "Seizures",
      "Cardiac arrest",
      "Pain following IM injection",
    ],

    drugInteractions: [
      "Benzodiazepines improve muscle relaxation and induction quality.",
      "Alpha-2 agonists enhance sedation and analgesia but may increase cardiopulmonary effects.",
      "Concurrent CNS depressants reduce ketamine dose requirements.",
      "Barbiturates or acepromazine may control ketamine-induced seizures in cats.",
    ],

    monitoring: [
      "Heart rate",
      "Cardiac rhythm (ECG)",
      "Blood pressure",
      "Respiratory rate",
      "Oxygen saturation",
      "Body temperature",
      "Depth of anesthesia",
      "Recovery quality",
    ],

    withdrawalPeriod: "Do not use in animals intended for human consumption.",

    storage: [
      "Store between 15°C and 30°C.",
      "Protect from light.",
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
      "ketamine",
      "ketamine hydrochloride",
      "ketaset",
      "vetalar",
      "ketavet",
      "ketalar",
      "dissociative anesthetic",
      "NMDA receptor antagonist",
      "injectable anesthetic",
      "general anesthesia",
      "anesthetic induction",
      "analgesia",
      "chemical restraint",
      "CRI",
      "status epilepticus",
      "dogs",
      "cats",
      "horses",
      "swine",
    ],
  },
};

export default [ketamine];