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

const ranitidine: Drug = {
  id: "ranitidine",

  genericName: "Ranitidine hydrochloride",

  brandNames: [
    "Zantac",
    "Rantac",
    "Aciloc",
    "Ranitidine Injection IP",
    "Ranitidine Tablets",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "ranitidine",
    "ranitidine hydrochloride",

    "zantac",
    "rantac",
    "aciloc",

    "h2 receptor antagonist",
    "histamine h2 receptor antagonist",

    "acid suppressant",
    "gastric acid suppressant",
    "antiulcer",

    "prokinetic",

    "gastric ulcer",
    "duodenal ulcer",
    "gastritis",
    "erosive gastritis",

    "reflux esophagitis",
    "gastroesophageal reflux",
    "gerd",

    "gastric hyperacidity",

    "dog",
    "dogs",
    "cat",
    "cats",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Gastrointestinal",

    drugClass: "H2 Receptor Antagonist",

    pharmacologicClass:
      "Histamine H2-receptor antagonist with prokinetic activity",

    commonRoutes: [
      Route.PO,
      Route.SC,
      Route.IV,
    ],

    availableRoutes: [
      Route.PO,
      Route.SC,
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
      id: "tablet",

      dosageForm: DosageForm.TABLET,

      strength: "75 mg, 150 mg, 300 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],

      notes:
        "Film-coated oral tablets for gastric acid suppression.",
    },

    {
      id: "injectable-solution",

      dosageForm: DosageForm.INJECTION,

      strength: "25 mg/mL",

      concentration: {
        value: 25,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
        Route.SC,
      ],

      notes:
        "Injectable solution supplied in 2 mL and 5 mL ampoules. Administer IV slowly.",
    },

    {
      id: "oral-syrup",

      dosageForm: DosageForm.ORAL_SOLUTION,

      strength: "15 mg/mL (75 mg/5 mL)",

      concentration: {
        value: 15,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.PO,
      ],

      notes:
        "Oral syrup formulation suitable for patients requiring liquid dosing.",
    },
  ],
    doseReferences: [
    // =========================
    // DOG
    // =========================

    {
      species: Species.DOG,

      indication: "Gastric acid suppression / Prokinetic therapy",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.5,
        maximum: 2,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency: "Every 8–12 hours",

      notes:
        "Used for gastric acid suppression and mild prokinetic activity. Reduce dosage in patients with renal insufficiency.",

      evidence:
        "Zerbe & Washabau 2000; Kay, Kruth & Twedt 1988.",

      reference:
        "Plumb's Veterinary Drug Handbook.",
    },

    {
      species: Species.DOG,

      indication: "Gastric acid suppression / Prokinetic therapy",

      route: Route.SC,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.5,
        maximum: 2,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency: "Every 8–12 hours",

      notes:
        "Inject subcutaneously. Monitor for local injection-site reactions.",

      evidence:
        "Zerbe & Washabau 2000; Kay, Kruth & Twedt 1988.",

      reference:
        "Plumb's Veterinary Drug Handbook.",
    },

    {
      species: Species.DOG,

      indication: "Gastric acid suppression / Prokinetic therapy",

      route: Route.IV,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.5,
        maximum: 2,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency: "Every 8–12 hours",

      notes:
        "Administer by slow intravenous injection. Rapid IV administration may induce vomiting or transient cardiac arrhythmias.",

      evidence:
        "Zerbe & Washabau 2000; Kay, Kruth & Twedt 1988.",

      reference:
        "Plumb's Veterinary Drug Handbook.",
    },

    // =========================
    // CAT
    // =========================

    {
      species: Species.CAT,

      indication: "Gastric acid suppression / Prokinetic therapy",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.5,
        maximum: 2,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency: "Every 8–12 hours",

      notes:
        "Provides gastric acid suppression and mild prokinetic activity in cats.",

      evidence:
        "Zerbe & Washabau 2000; Kay, Kruth & Twedt 1988.",

      reference:
        "Plumb's Veterinary Drug Handbook.",
    },

    {
      species: Species.CAT,

      indication: "Gastric acid suppression / Prokinetic therapy",

      route: Route.SC,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.5,
        maximum: 2,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency: "Every 8–12 hours",

      notes:
        "Monitor for injection-site discomfort after subcutaneous administration.",

      evidence:
        "Zerbe & Washabau 2000; Kay, Kruth & Twedt 1988.",

      reference:
        "Plumb's Veterinary Drug Handbook.",
    },

    {
      species: Species.CAT,

      indication: "Gastric acid suppression / Prokinetic therapy",

      route: Route.IV,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.5,
        maximum: 2,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency: "Every 8–12 hours",

      notes:
        "Administer slowly by intravenous injection to minimize vomiting and cardiac adverse effects.",

      evidence:
        "Zerbe & Washabau 2000; Kay, Kruth & Twedt 1988.",

      reference:
        "Plumb's Veterinary Drug Handbook.",
    },
  ],
    clinical: {
    mechanismOfAction:
      "Ranitidine competitively blocks histamine H2 receptors on gastric parietal cells, reducing both basal and stimulated gastric acid secretion. Acid secretion stimulated by food, amino acids, pentagastrin, histamine, or insulin is inhibited. Ranitidine also possesses mild prokinetic activity and is approximately 3–13 times more potent than cimetidine on a molar basis.",

    spectrum:
      "Histamine H2-receptor antagonist with gastric acid suppressant and mild prokinetic effects.",

    indications: [
      "Gastric ulceration",
      "Duodenal ulceration",
      "Erosive gastritis",
      "Reflux esophagitis",
      "Gastric hyperacidity",
      "Conditions requiring gastric acid suppression",
      "Delayed gastric emptying requiring prokinetic support",
    ],

    commonUses: [
      "Reduction of gastric acid secretion",
      "Management of gastric and duodenal ulcers",
      "Treatment of gastritis",
      "Supportive management of gastroesophageal reflux disease (GERD)",
      "Adjunctive prokinetic therapy in selected gastrointestinal disorders",
    ],

    clinicalDecisionNotes: [
      "Produces fewer clinically significant drug interactions than cimetidine.",
      "Dose reduction should be considered in patients with renal insufficiency.",
      "Monitor serum ALT during prolonged high-dose intravenous therapy.",
      "Administer intravenous injections slowly to reduce the risk of adverse cardiovascular effects.",
      "May be selected when both acid suppression and mild prokinetic activity are desired.",
    ],

    clinicalPearls: [
      "Provides both gastric acid suppression and mild prokinetic activity.",
      "Approximately 3–13 times more potent than cimetidine on a molar basis.",
      "Generally well tolerated in dogs and cats at recommended dosages.",
      "Rapid IV administration may induce vomiting or transient cardiac arrhythmias.",
      "Injection-site pain may occur following intramuscular administration.",
      "Often preferred over cimetidine because of its lower potential for drug interactions.",
    ],
  },
    reproduction: {
    pregnancy: {
      recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Human FDA pregnancy category B.",
        "Veterinary pregnancy safety classification (Papich): Class B.",
        "Considered relatively safe in dogs and cats when used cautiously.",
        "Avoid administration near term whenever possible.",
      ],
    },

    lactation: {
      recommendation: ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Ranitidine is excreted into milk.",
        "Human milk-to-plasma ratios range from approximately 5:1 to 12:1.",
        "Use cautiously in nursing veterinary patients.",
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
      "Clinical experience with overdose is limited.",
      "Potential gastrointestinal disturbances.",
      "Mental confusion.",
      "Headache.",
      "Potential cardiovascular effects.",
    ],

    management: [
      "Provide symptomatic and supportive care.",
      "Monitor cardiovascular status.",
      "Monitor neurologic status.",
      "Maintain hydration and appropriate supportive therapy.",
    ],
  },

  safety: {
    contraindications: [
      "Known hypersensitivity to ranitidine or other H2-receptor antagonists.",
    ],

    precautions: [
      "Use cautiously in geriatric patients.",
      "Reduce dosage in patients with renal insufficiency.",
      "Use cautiously in patients with hepatic insufficiency.",
      "Consider monitoring serum ALT during prolonged high-dose intravenous therapy.",
      "Administer intravenous injections slowly.",
    ],

    adverseEffects: [
      "Adverse effects are uncommon at recommended veterinary dosages.",
      "Vomiting following rapid intravenous bolus administration.",
      "Transient cardiac arrhythmias associated with rapid IV injection.",
      "Pain at the injection site.",
      "Mental confusion (rare).",
      "Headache (rare).",
      "Agranulocytosis (very rare).",
      "Transient increases in serum ALT during prolonged high-dose IV therapy.",
    ],

    drugInteractions: [
      "Produces significantly fewer drug interactions than cimetidine.",
    ],

    monitoring: [
      "Monitor clinical response.",
      "Monitor renal function in patients with renal disease.",
      "Monitor liver enzymes during prolonged high-dose therapy.",
      "Observe patients during intravenous administration for vomiting or cardiac effects.",
    ],

    withdrawalPeriod:
      "Not applicable for companion animals.",

    storage: [
      "Store tablets in tight, light-resistant containers at room temperature.",
      "Store injectable solution protected from light below 30°C.",
      "Slight darkening of the injectable solution does not reduce potency.",
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
    {
      title: "Zerbe & Washabau (2000)",
    },
    {
      title: "Kay, Kruth & Twedt (1988)",
    },
    {
      title: "Papich (1989)",
    },
  ],

  metadata: {
    version: "1.0.0",

    lastReviewed: "2026-07-17",

    tags: [
      "ranitidine",
      "ranitidine hydrochloride",

      "zantac",
      "rantac",
      "aciloc",

      "h2 receptor antagonist",
      "histamine h2 receptor antagonist",

      "acid suppressant",
      "antiulcer",
      "gastric acid suppressant",

      "prokinetic",

      "gastric ulcer",
      "duodenal ulcer",
      "gastritis",
      "erosive gastritis",

      "reflux esophagitis",
      "gastroesophageal reflux",
      "gerd",

      "hyperacidity",

      "dogs",
      "cats",

      "oral",
      "injectable",
    ],
  },
};

export default [ranitidine];