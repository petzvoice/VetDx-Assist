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

const tiletamine_zolazepam: Drug = {

  id: "tiletamine-zolazepam",

  genericName: "Tiletamine Hydrochloride + Zolazepam Hydrochloride",

  brandNames: [
    "Telazol",
    "Zoletil",
    "Tiletamine + Zolazepam Injection",
  ],

  status: DrugStatus.ACTIVE,


  searchTerms: [
    "tiletamine",
    "zolazepam",
    "tiletamine hydrochloride",
    "zolazepam hydrochloride",
    "tiletamine zolazepam",
    "telazol",
    "zoletil",
    "dissociative anesthetic",
    "injectable anesthetic",
    "tranquilizer",
    "NMDA receptor antagonist",
    "benzodiazepine",
    "chemical restraint",
  ],


  quickFacts: {

    prescriptionRequired: true,

    controlledDrug: true,

    category: "Anesthetic",

    drugClass: "Dissociative Anesthetic Combination",

    pharmacologicClass:
      "NMDA Receptor Antagonist + Benzodiazepine",

    commonRoutes: [
      Route.IM,
    ],

    availableRoutes: [
      Route.IM,
      Route.IV,
      Route.SC,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.RABBIT,
      Species.EXOTIC_MAMMAL,
      Species.REPTILE,
    ],

  },


  species: [
    Species.DOG,
    Species.CAT,
    Species.RABBIT,
    Species.EXOTIC_MAMMAL,
    Species.REPTILE,
  ],


  formulations: [

    {
      id: "tiletamine-zolazepam-100mg-vial",

      dosageForm: DosageForm.POWDER_FOR_INJECTION,

      strength:
        "100 mg/vial (50 mg tiletamine HCl + 50 mg zolazepam HCl)",

      concentration: {
        value: 100,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IM,
        Route.IV,
        Route.SC,
      ],

      notes:
        "After reconstitution provides 100 mg/mL total drug concentration (50 mg/mL tiletamine + 50 mg/mL zolazepam).",
    },


    {
    id: "tiletamine-zolazepam-250mg-vial",

    dosageForm: DosageForm.POWDER_FOR_INJECTION,

    strength:
      "250 mg/vial (125 mg tiletamine HCl + 125 mg zolazepam HCl)",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [
      Route.IM,
      Route.IV,
      Route.SC,
    ],

    notes:
      "Lyophilized sterile powder requiring reconstitution before use.",
  },


  {
    id: "tiletamine-zolazepam-500mg-vial",

    dosageForm: DosageForm.POWDER_FOR_INJECTION,

    strength:
      "500 mg/vial (250 mg tiletamine HCl + 250 mg zolazepam HCl)",

    concentration: {
      value: 0,
      unit: ConcentrationUnit.OTHER,
    },

    routes: [
      Route.IM,
      Route.IV,
      Route.SC,
    ],

    notes:
      "Lyophilized sterile powder requiring reconstitution before use.",
  },

],



  doseReferences: [

    {
      species: Species.DOG,

      indication:
        "Diagnostic procedures",

      route: Route.IM,

      dose: {
        minimum: 6.6,
        maximum: 9.9,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "Short duration anesthesia/restraint",

      maximumTotalDose:
        "26.4 mg/kg total",

      notes:
        "Used for diagnostic procedures. Additional doses should be lower than the initial dose.",

      evidence:
        "Package Insert; Telazol",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.DOG,

      indication:
        "Minor procedures of short duration",

      route: Route.IM,

      dose: {
        minimum: 9.9,
        maximum: 13.2,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "Procedure dependent",

      maximumTotalDose:
        "26.4 mg/kg total",

      notes:
        "If supplemental doses are required, use doses lower than the initial dose.",

      evidence:
        "Package Insert; Telazol",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.CAT,

      indication:
        "Diagnostic and minor procedures",

      route: Route.IM,

      dose: {
        minimum: 9.7,
        maximum: 12.5,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "Procedure dependent",

      maximumTotalDose:
        "72 mg/kg total",

      notes:
        "Used for procedures including dentistry, abscess treatment, and foreign body removal. Atropine 0.04 mg/kg may be used to control hypersalivation.",

      evidence:
        "Package Insert; Telazol",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.CAT,

      indication:
        "Procedures requiring mild to moderate analgesia",

      route: Route.IM,

      dose: {
        minimum: 10.6,
        maximum: 12.5,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "Procedure dependent",

      maximumTotalDose:
        "72 mg/kg total",

      notes:
        "Reported for procedures such as laceration repair and castration.",

      evidence:
        "Package Insert; Telazol",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.CAT,

      indication:
        "Ovariohysterectomy and onychectomy",

      route: Route.IM,

      dose: {
        minimum: 14.3,
        maximum: 15.8,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "Procedure dependent",

      maximumTotalDose:
        "72 mg/kg total",

      notes:
        "Higher doses may result in prolonged recovery.",

      evidence:
        "Package Insert; Telazol",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.DOG,

      indication:
        "Combination anesthetic protocols",

      route: Route.IV,

      dose: {
        minimum: 2,
        maximum: 5,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "As clinically required",

      duration:
        "Administer to effect",

      maximumTotalDose:
        "",

      notes:
        "Dose range reported for combination anesthesia protocols.",

      evidence:
        "Mama 2002a",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.CAT,

      indication:
        "Combination anesthetic protocols",

      route: Route.IV,

      dose: {
        minimum: 2,
        maximum: 5,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "As clinically required",

      duration:
        "Administer to effect",

      maximumTotalDose:
        "",

      notes:
        "Dose range reported for combination anesthesia protocols.",

      evidence:
        "Mama 2002a",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },
        {
      species: Species.EXOTIC_MAMMAL,

      indication:
        "Chemical restraint in carnivorous mammals",

      route: Route.IM,

      dose: {
        minimum: 2,
        maximum: 4,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single restraint dose",

      duration:
        "Species and individual dependent",

      maximumTotalDose:
        "",

      notes:
        "Reported for carnivorous mammals excluding large exotic cats such as tigers. Significant interspecies variation exists.",

      evidence:
        "Suedmeyer 2003",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.REPTILE,

      indication:
        "Sedation and anesthesia in reptiles",

      route: Route.IM,

      dose: {
        minimum: 3,
        maximum: 10,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose; may be repeated incrementally when required",

      duration:
        "May persist for prolonged periods depending on species and dose",

      maximumTotalDose:
        "",

      notes:
        "Snakes and lizards generally respond to lower doses, while chelonians may require higher doses. Monitor closely for apnea.",

      evidence:
        "Innis 2003",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.REPTILE,

      indication:
        "Snake handling and anesthesia",

      route: Route.IM,

      dose: {
        minimum: 3,
        maximum: 3,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "Sedation may persist up to 48 hours",

      maximumTotalDose:
        "",

      notes:
        "Used to facilitate handling and anesthesia in large snakes. Also reported in crocodilians at higher doses.",

      evidence:
        "Heard 1999",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.REPTILE,

      indication:
        "Crocodilian anesthesia",

      route: Route.IM,

      dose: {
        minimum: 4,
        maximum: 8,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "Species dependent",

      maximumTotalDose:
        "",

      notes:
        "Reported use in crocodilians.",

      evidence:
        "Heard 1999",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },


    {
      species: Species.REPTILE,

      indication:
        "Procedural sedation in reptiles",

      route: Route.IM,

      dose: {
        minimum: 7,
        maximum: 15,
        unit: DoseUnit.MG_PER_KG,
      },

      basis: DoseBasis.BODY_WEIGHT,

      frequency:
        "Single dose",

      duration:
        "Recovery may be prolonged at higher doses",

      maximumTotalDose:
        "",

      notes:
        "Suggested starting range for reptiles. Higher doses of 15–40 mg/kg may result in greatly prolonged recovery.",

      evidence:
        "Funk 2002",

      reference:
        "Plumb's Veterinary Drug Handbook",
    },

  ],



  clinical: {

    mechanismOfAction:
      "Tiletamine produces dissociative anesthesia through noncompetitive NMDA receptor antagonism, causing functional dissociation between cortical and limbic systems. Zolazepam is a benzodiazepine derivative that enhances muscle relaxation, reduces anxiety, and decreases seizure activity. The combination provides anesthesia, immobilization, and improved muscle relaxation compared with tiletamine alone.",


    spectrum:
      "Produces dissociative anesthesia, immobilization, amnesia, and somatic analgesia. Provides improved muscle relaxation compared with ketamine alone but may provide incomplete visceral analgesia.",


    indications: [
      "Induction of anesthesia",
      "Chemical restraint",
      "Short diagnostic procedures",
      "Minor surgical procedures",
      "Immobilization of exotic animals",
      "Balanced anesthesia protocols",
    ],


    commonUses: [
      "Small animal anesthesia",
      "Chemical restraint in cats and dogs",
      "Minor procedures",
      "Wildlife and exotic animal restraint",
      "Reptile sedation and anesthesia",
    ],


    clinicalDecisionNotes: [
      "Similar pharmacologically to ketamine combined with diazepam.",
      "Does not abolish all protective reflexes; may not provide adequate anesthesia alone for procedures involving the pharynx, larynx, or sensitive structures.",
      "Higher doses administered IM or SC may result in longer and rougher recoveries compared with smaller IV doses.",
      "Dose reduction may be required in geriatric, debilitated, or renal-compromised patients.",
      "Monitor respiratory function closely because respiratory depression and apnea may occur.",
    ],


    clinicalPearls: [
      "Protect the eyes during anesthesia because cats may remain with eyes open.",
      "Apply ophthalmic lubricant in cats to prevent corneal drying.",
      "Monitor body temperature because hypothermia may occur.",
      "Avoid administering additional doses to treat athetoid movements.",
      "Provide a quiet recovery environment to reduce emergence excitement.",
      "Monitor cardiovascular and respiratory parameters throughout anesthesia and recovery.",
    ],

  },
    reproduction: {

    pregnancy: {

      recommendation:
        ReproductionRecommendation.CONTRAINDICATED,

      notes: [
        "Crosses the placenta and may cause respiratory depression in newborns.",
        "Use during cesarean section is contraindicated by the manufacturer.",
        "Teratogenic potential has not been established.",
        "Avoid use during pregnancy unless specifically justified by clinical necessity.",
      ],

    },


    lactation: {

      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "Safety during lactation has not been fully established.",
        "Use cautiously in nursing animals.",
      ],

    },


    breeding: {

      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "Effects on breeding performance have not been adequately studied.",
        "Avoid unnecessary administration in breeding animals.",
      ],

    },

  },



  overdose: {

    signs: [

      "Prolonged anesthesia",

      "Delayed recovery",

      "Respiratory depression",

      "Transient apnea",

      "Cardiovascular changes",

      "Muscle rigidity",

      "Hypertonicity",

      "Cyanosis",

      "Pulmonary edema",

      "Cardiac arrest",

    ],


    management: [

      "Discontinue administration of tiletamine-zolazepam.",

      "Maintain airway and provide oxygen supplementation.",

      "Provide assisted or mechanical ventilation if required.",

      "Monitor ECG, blood pressure, respiratory function, and oxygenation.",

      "Provide supportive cardiovascular therapy as indicated.",

      "Treat clinical signs symptomatically.",

    ],

  },



  safety: {

    contraindications: [

      "Pancreatic disease",

      "Severe cardiac disease",

      "Severe pulmonary disease",

      "Rabbit use due to reported renal toxicity",

      "Cesarean section",

      "Use in large exotic cats such as tigers",

    ],


    precautions: [

      "Use cautiously in renal disease because anesthetic duration and recovery may be prolonged.",

      "Reduce dosage in geriatric, debilitated, or medically compromised patients.",

      "Monitor respiratory function closely due to risk of respiratory depression and apnea.",

      "Protect eyes during anesthesia, especially in cats where eyelids may remain open.",

      "Monitor body temperature because hypothermia may occur.",

      "Use cautiously in patients with increased anesthetic risk.",

      "Provide appropriate recovery monitoring.",

    ],


    adverseEffects: [

      "Respiratory depression",

      "Transient apnea",

      "Pain after IM injection",

      "Athetoid movements",

      "Tachycardia",

      "Vomiting during recovery",

      "Hypersalivation",

      "Increased bronchial and tracheal secretions",

      "Erratic recovery",

      "Prolonged recovery",

      "Involuntary muscular twitching",

      "Hypertonicity",

      "Muscle rigidity",

      "Cyanosis",

      "Pulmonary edema",

      "Cardiac arrest",

      "Hypertension",

      "Hypotension",

      "Hypothermia",

      "Emergence excitement",

      "Vocalization",

    ],


    drugInteractions: [

      "Concurrent sedatives, opioids, tranquilizers, or anesthetics may alter anesthetic depth and recovery.",

      "Premedication protocols may reduce required tiletamine-zolazepam dose.",

    ],


    monitoring: [

      "Heart rate",

      "Respiratory rate",

      "Oxygen saturation",

      "Blood pressure",

      "Body temperature",

      "Depth of anesthesia",

      "Recovery quality",

      "Airway function",

    ],


    storage: [

      "After reconstitution, solutions may be stored for 4 days at room temperature.",

      "Reconstituted solutions may be stored for 14 days under refrigeration.",

      "Do not use solutions with discoloration or precipitate.",

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

      "tiletamine",

      "zolazepam",

      "tiletamine hydrochloride",

      "zolazepam hydrochloride",

      "telazol",

      "zoletil",

      "dissociative anesthetic",

      "injectable anesthetic",

      "chemical restraint",

      "NMDA receptor antagonist",

      "benzodiazepine",

      "general anesthesia",

      "dogs",

      "cats",

      "exotic mammals",

      "reptiles",

      "veterinary anesthesia",

    ],

  },

};


export default [tiletamine_zolazepam];