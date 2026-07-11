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
const metronidazole: Drug = {
  id: "metronidazole",

  genericName: "Metronidazole",

  brandNames: [
    "Flagyl",
    "Metrogyl",
    "Metro",
    "Metron",
    "Metrozole",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "metronidazole",
    "flagyl",
    "metrogyl",
    "metro",
    "metron",
    "metrozole",

    "nitroimidazole",
    "anaerobic antibiotic",
    "antiprotozoal",
    "antibiotic",

    "anaerobic infection",
    "anaerobic meningitis",
    "anaerobic sepsis",
    "suppurative cholangitis",

    "giardia",
    "giardiasis",
    "trichomoniasis",
    "trichomonas",
    "pentatrichomonas hominis",
    "entamoeba histolytica",
    "amebiasis",
    "balantidium coli",

    "helicobacter",
    "helicobacter gastritis",
    "h pylori",

    "inflammatory bowel disease",
    "IBD",
    "lymphocytic plasmacytic enteritis",
    "plasmacytic enteritis",
    "colitis",
    "hepatic encephalopathy",

    "clostridium",
    "bacteroides",
    "fusobacterium",
    "peptostreptococcus",
    "peptococcus",
    "veillonella",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Antibacterial, Antiprotozoal",

    drugClass: "Nitroimidazole",

    pharmacologicClass:
      "DNA synthesis inhibitor",

    commonRoutes: [
      Route.PO,
      Route.IV,
    ],

    availableRoutes: [
      Route.PO,
      Route.IV,
    ],

    availableSpecies: [
      Species.DOG,
      Species.CAT,
      Species.HORSE,
      Species.BIRD,
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
    Species.BIRD,
  ],

  formulations: [

    {
      id: "tablet",

      dosageForm: DosageForm.TABLET,

      strength:
        "200 mg, 250 mg, 400 mg, 500 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "capsule",

      dosageForm: DosageForm.CAPSULE,

      strength:
        "250 mg, 500 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "oral-suspension",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength:
        "100 mg/5 mL, 125 mg/5 mL, 200 mg/5 mL",

      concentration: {
        value: 20,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],
    },

    {
      id: "injection",

      dosageForm: DosageForm.INJECTION,

      strength:
        "500 mg/100 mL",

      concentration: {
        value: 5,
        unit: ConcentrationUnit.MG_PER_ML,
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
    species: Species.DOG,

    indication: "Giardiasis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 15,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12–24 hours",

    duration: "5–7 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Giardiasis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 44,
      maximum: 44,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Initial dose, then 22 mg/kg every 8 hours",

    duration: "5 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Giardiasis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 65,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once daily",

    duration: "5 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Giardiasis or trichomoniasis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 30,
      maximum: 60,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once daily",

    duration: "5–7 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Entamoeba histolytica or Pentatrichomonas hominis infection",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours",

    duration: "8 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Anaerobic bacterial meningitis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 50,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Suppurative cholangitis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 30,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Twice daily",

    duration: "4–6 weeks",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Sepsis",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 15,
      maximum: 15,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Anaerobic infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 44,
      maximum: 44,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Anaerobic sepsis",

    route: Route.IV,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Continuous rate infusion three times daily",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Helicobacter gastritis (triple therapy)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 15.4,
      maximum: 15.4,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8 hours",

    duration: "3 weeks",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Helicobacter gastritis (triple therapy)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 33,
      maximum: 33,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once daily",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Plasmacytic/lymphocytic enteritis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 10,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Three times daily",

    duration: "2–4 weeks",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Plasmacytic/lymphocytic enteritis (refractory cases)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 30,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8–24 hours",

    duration: "2–4 weeks",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Inflammatory bowel disease",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 20,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Two to three times daily",

    duration: "2–4 weeks",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.DOG,

    indication: "Inflammatory bowel disease",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 15,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours initially; taper to lowest effective dose",

    reference: "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication: "Hepatic encephalopathy",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 20,
      maximum: 20,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8 hours",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  // =========================
  // CAT
  // =========================

  {
    species: Species.CAT,

    indication: "Giardiasis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 15,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12–24 hours",

    duration: "5–7 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },



  {
    species: Species.CAT,

    indication: "Entamoeba histolytica or Pentatrichomonas hominis infection",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 25,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 12 hours",

    duration: "8 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },
    {
    species: Species.CAT,

    indication: "Helicobacter pylori infection (triple therapy)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 15,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Twice daily",

    duration: "14 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.CAT,

    indication: "Inflammatory bowel disease",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 10,
      maximum: 15,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8–12 hours",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  // =========================
  // HORSE
  // =========================

  {
    species: Species.HORSE,

    indication: "Susceptible anaerobic infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 20,
      maximum: 25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8–12 hours",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  {
    species: Species.HORSE,

    indication: "Clostridial colitis",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 15,
      maximum: 15,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Every 8 hours",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

  // =========================
  // BIRD
  // =========================

  {
    species: Species.BIRD,

    indication: "Susceptible anaerobic infections",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 50,
      maximum: 50,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency: "Once daily",

    duration: "5 days",

    reference: "Plumb's Veterinary Drug Handbook.",
  },

],
clinical: {

  mechanismOfAction:
    "Metronidazole is a bactericidal nitroimidazole antimicrobial. In susceptible anaerobic organisms, the drug is reduced to reactive metabolites that disrupt DNA and nucleic acid synthesis, resulting in bacterial cell death. It also possesses antiprotozoal activity, although its exact mechanism against protozoa is not fully understood.",

  spectrum:
    "Active against most obligate anaerobic bacteria including Bacteroides spp. (including Bacteroides fragilis), Fusobacterium spp., Veillonella spp., Clostridium spp., Peptococcus spp., and Peptostreptococcus spp. It is also active against Giardia spp., Trichomonas spp., Entamoeba histolytica, and Balantidium coli. Actinomyces spp. are frequently resistant.",

  indications: [
    "Anaerobic bacterial infections",
    "Giardiasis",
    "Trichomoniasis",
    "Entamoeba histolytica infection",
    "Pentatrichomonas hominis infection",
    "Anaerobic meningitis",
    "Suppurative cholangitis",
    "Sepsis",
    "Helicobacter gastritis",
    "Inflammatory bowel disease",
    "Plasmacytic/lymphocytic enteritis",
    "Hepatic encephalopathy",
    "Clostridial colitis",
  ],

  commonUses: [
    "Giardiasis",
    "Anaerobic bacterial infections",
    "Inflammatory bowel disease",
    "Chronic enteropathy",
    "Helicobacter gastritis",
    "Suppurative cholangitis",
    "Hepatic encephalopathy",
    "Clostridial colitis",
    "Protozoal infections",
  ],

  clinicalDecisionNotes: [
    "Effective against obligate anaerobic bacteria but has little to no activity against aerobic bacteria.",
    "Often used in combination with other antimicrobials for mixed bacterial infections.",
    "Reduce the dose to approximately 25–50% of the usual dose in animals with significant hepatic dysfunction.",
    "Neurologic toxicity may occur with prolonged therapy or high doses.",
    "Metronidazole is prohibited for use in food-producing animals by the FDA.",
  ],

  clinicalPearls: [
    "Metronidazole tablets have a strong metallic taste that may reduce voluntary acceptance.",
    "Capsules or compounded oral suspensions may improve administration.",
    "Monitor carefully for neurologic adverse effects during prolonged therapy.",
    "Useful as both an antimicrobial and immunomodulatory agent in selected gastrointestinal diseases.",
  ],

},
reproduction: {

  pregnancy: {

    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Potential teratogenic effects have been reported in some laboratory animal studies.",
      "Avoid use during pregnancy unless the benefits clearly outweigh the risks.",
      "Particular caution is advised during the first 3 weeks of gestation.",
      "In canine and feline pregnancy safety evaluations, metronidazole is classified as Class C (use cautiously when benefits outweigh potential risks).",
    ],
  },

  lactation: {

    recommendation:
      ReproductionRecommendation.USE_WITH_CAUTION,

    notes: [
      "Consider alternative therapy or temporary milk replacer because of potential tumorigenicity concerns.",
      "Use only after careful veterinary risk-benefit assessment.",
    ],
  },

  breeding: {

    recommendation:
      ReproductionRecommendation.NOT_ESTABLISHED,

    notes: [
      "Safety in breeding animals has not been established.",
      "Use only when the expected benefits outweigh the potential risks.",
    ],
  },

},
overdose: {

  signs: [
    "Anorexia",
    "Vomiting",
    "Depression",
    "Mydriasis",
    "Nystagmus",
    "Ataxia",
    "Head tilt",
    "Proprioceptive deficits",
    "Knuckling",
    "Disorientation",
    "Tremors",
    "Seizures",
    "Bradycardia",
    "Rigidity",
    "Stiffness",
  ],

  management: [
    "Discontinue metronidazole immediately.",
    "Provide symptomatic and supportive care.",
    "Monitor neurologic status closely.",
    "Correct fluid and electrolyte abnormalities if present.",
    "Clinical signs may occur after acute overdose or prolonged therapy at recommended doses.",
  ],

},
safety: {

  contraindications: [
    "Known hypersensitivity to metronidazole or other nitroimidazole derivatives.",
  ],

  precautions: [
    "Use with extreme caution in severely debilitated animals.",
    "Use cautiously during pregnancy and lactation.",
    "Use cautiously in animals with hepatic dysfunction.",
    "Reduce the dose to approximately 25–50% of the usual dose in animals with significant hepatic impairment.",
    "Prohibited for use in food-producing animals by the FDA.",
  ],

  adverseEffects: [
    "Neurologic disorders",
    "Lethargy",
    "Weakness",
    "Neutropenia",
    "Hepatotoxicity",
    "Hematuria",
    "Anorexia",
    "Nausea",
    "Vomiting",
    "Diarrhea",
    "Ataxia",
    "Tremors",
    "Seizures",
  ],

  drugInteractions: [],

  monitoring: [
    "Clinical response to therapy.",
    "Monitor for neurologic adverse effects.",
    "Monitor hepatic function during prolonged therapy or in patients with liver disease.",
    "Monitor complete blood count during prolonged treatment.",
  ],

  withdrawalPeriod:
    "Do not use in food-producing animals.",

  storage: [
    "Store tablets and powder for injection below 30°C.",
    "Protect from light.",
    "Do not freeze injectable solution.",
    "Store injectable solution at room temperature.",
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
  lastReviewed: "2026-07-12",
  tags: [
    "antibiotic",
    "nitroimidazole",
    "anaerobic",
    "antiprotozoal",
    "giardia",
    "clostridium",
    "ibd",
    "hepatic encephalopathy",
    "dog",
    "cat",
    "horse",
    "bird",
  ],
},
};

export default [metronidazole];