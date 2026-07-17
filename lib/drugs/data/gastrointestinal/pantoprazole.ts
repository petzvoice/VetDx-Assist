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

const pantoprazole: Drug = {
  id: "pantoprazole",

  genericName: "Pantoprazole",

  brandNames: [
    "Protonix",
    "Pantocid",
    "Pantop",
    "Pantodac",
    "Pantosec",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "pantoprazole",
    "protonix",
    "pantocid",
    "pantop",
    "pantosec",
    "ppi",
    "proton pump inhibitor",
    "gastric ulcer",
    "duodenal ulcer",
    "acid suppressant",
    "gerd",
    "reflux",
  ],

  quickFacts: {
    prescriptionRequired: true,

    controlledDrug: false,

    category: "Gastrointestinal",

    drugClass: "Proton Pump Inhibitor",

    pharmacologicClass:
      "Benzimidazole Proton Pump Inhibitor",

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
    ],
  },

  species: [
    Species.DOG,
    Species.CAT,
    Species.HORSE,
  ],

  formulations: [
    {
      id: "tab-20",

      dosageForm: DosageForm.TABLET,

      strength: "20 mg",

      concentration: {
        value: 20,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],

      notes:
        "Delayed-release enteric-coated tablet.",
    },

    {
      id: "tab-40",

      dosageForm: DosageForm.TABLET,

      strength: "40 mg",

      concentration: {
        value: 40,
        unit: ConcentrationUnit.MG,
      },

      routes: [
        Route.PO,
      ],

      notes:
        "Delayed-release enteric-coated tablet.",
    },

    {
      id: "inj-40",

      dosageForm: DosageForm.POWDER_FOR_INJECTION,

      strength: "40 mg/vial",

      concentration: {
        value: 40,
        unit: ConcentrationUnit.MG,
      },
 standardConcentration: 4,
      routes: [
        Route.IV,
      ],

      notes:
        "Lyophilized powder for intravenous administration after reconstitution.",
    },
  ],

  doseReferences: [
    {
      species: Species.DOG,

      indication:
        "Gastric ulceration, erosive gastritis, gastroesophageal reflux disease (GERD), acid suppression",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.7,
        maximum: 1,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 24 hours",

      notes:
        "Administer on an empty stomach when possible. Maximum acid suppression develops after repeated daily administration.",

    

      reference:
        "Plumb's Veterinary Drug Handbook, 10th Edition.",
    },
{
  species: Species.DOG,

  indication:
    "Stress-related mucosal disease",

  route: Route.IV,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.7,
    maximum: 1,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency:
    "Every 24 hours",

  notes:
    "For intravenous treatment of stress-related mucosal disease.",

  evidence:
    "Bateman 2003",

  reference:
    "Plumb's Veterinary Drug Handbook",
},

{
  species: Species.CAT,

  indication:
    "Stress-related mucosal disease",

  route: Route.IV,

  basis: DoseBasis.BODY_WEIGHT,

  dose: {
    minimum: 0.7,
    maximum: 1,
    unit: DoseUnit.MG_PER_KG,
  },

  frequency:
    "Every 24 hours",

  notes:
    "For intravenous treatment of stress-related mucosal disease.",

  evidence:
    "Bateman 2003",

  reference:
    "Plumb's Veterinary Drug Handbook",
},
    {
      species: Species.CAT,

      indication:
        "Gastric ulceration, esophagitis, gastroesophageal reflux disease (GERD), acid suppression",

      route: Route.PO,

      basis: DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 0.7,
        maximum: 1,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 24 hours",

      notes:
        "Useful for chronic acid-related disorders requiring prolonged gastric acid suppression.",

     

      reference:
        "Plumb's Veterinary Drug Handbook, 10th Edition.",
    },

  ],
    clinical: {
    mechanismOfAction:
      "Pantoprazole irreversibly inhibits the gastric H+/K+-ATPase (proton pump) in parietal cells, producing profound and prolonged suppression of gastric acid secretion.",

    spectrum:
      "Gastric acid suppressant; not an antimicrobial agent.",

    indications: [
      "Gastric ulceration",
      "Duodenal ulceration",
      "Erosive gastritis",
      "Gastroesophageal reflux disease (GERD)",
      "Reflux esophagitis",
      "Acid hypersecretion disorders",
      "Stress-related ulcer prophylaxis in hospitalized patients",
    ],

    commonUses: [
      "Treatment of gastric and duodenal ulcers",
      "Management of reflux esophagitis",
      "Long-term gastric acid suppression",
      "Prevention of stress-related gastric ulceration",
      "Management of acid-related gastrointestinal disease",
    ],

    clinicalDecisionNotes: [
      "Pantoprazole provides more potent and longer-lasting acid suppression than H2-receptor antagonists.",
      "Maximum therapeutic effect develops after repeated daily administration rather than after the first dose.",
      "Administer before feeding whenever possible to maximize efficacy.",
      "Do not crush or split enteric-coated tablets.",
      "Transition hospitalized patients from intravenous to oral therapy once clinically appropriate.",
      "This drug reference is intended for educational and clinical support and does not replace professional veterinary judgment.",
    ],

    clinicalPearls: [
      "Pantoprazole irreversibly inhibits active proton pumps, resulting in prolonged acid suppression despite a short plasma half-life.",
      "Proton pump inhibitors are generally preferred over H2-receptor antagonists for severe gastric ulcer disease.",
      "Abrupt discontinuation after prolonged administration may result in rebound gastric acid hypersecretion.",
      "Clinical improvement may precede complete ulcer healing; continue therapy for the recommended duration.",
      "Long-term therapy should be periodically reassessed to ensure continued clinical need.",
    ],
  },

  reproduction: {
    pregnancy: {
      recommendation:
        ReproductionRecommendation.BENEFIT_RISK,

      notes: [
        "Use only after veterinary risk-benefit assessment.",
        "Published reproductive safety data in veterinary species remain limited.",
      ],
    },

    lactation: {
      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "Safety during lactation has not been established in veterinary species.",
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
      "Vomiting",
      "Diarrhea",
      "Lethargy",
      "Reduced appetite",
      "Abdominal discomfort",
    ],

    management: [
      "Discontinue pantoprazole.",
      "Provide symptomatic and supportive care.",
      "Maintain hydration and electrolyte balance.",
      "Monitor gastrointestinal signs until clinical recovery.",
      "Significant toxicity following mild overdose is uncommon.",
    ],
  },

  safety: {
    contraindications: [
      "Known hypersensitivity to pantoprazole or other proton pump inhibitors.",
    ],

    precautions: [
      "Use cautiously in patients with severe hepatic dysfunction.",
      "Avoid unnecessary prolonged therapy.",
      "Do not crush or split delayed-release tablets.",
      "Administer before meals whenever possible.",
      "Consider rebound gastric acid hypersecretion following abrupt discontinuation after prolonged treatment.",
    ],

    adverseEffects: [
      "Vomiting",
      "Diarrhea",
      "Reduced appetite",
      "Flatulence",
      "Abdominal discomfort",
      "Rare hypersensitivity reactions",
    ],

    drugInteractions: [
      "May reduce absorption of medications requiring an acidic gastric pH.",
      "Concurrent acid-suppressing medications may alter overall therapeutic response.",
      "Review medications whose bioavailability depends on gastric acidity.",
    ],

    monitoring: [
      "Monitor improvement in vomiting and reflux.",
      "Monitor appetite and gastrointestinal comfort.",
      "Assess healing of gastric ulcer disease when clinically indicated.",
      "Monitor clinical response during prolonged therapy.",
    ],

    storage: [
      "Store according to manufacturer recommendations.",
      "Protect tablets from moisture.",
      "Store injectable formulation before reconstitution as directed by the manufacturer.",
    ],
  },
    references: [
    {
      title: "Plumb's Veterinary Drug Handbook",
      edition: "10th Edition",
    },
    {
      title: "BSAVA Small Animal Formulary",
      edition: "11th Edition",
    },
    {
      title: "Saunders Handbook of Veterinary Drugs",
      edition: "5th Edition",
    },
    {
      title: "Equine Internal Medicine",
      edition: "5th Edition",
    },
    {
      title: "Merck Veterinary Manual",
      publisher: "Merck & Co.",
    },
  ],

  metadata: {
    version: "1.0.0",

    lastReviewed: "2026-07-17",

    tags: [
      "pantoprazole",
      "proton pump inhibitor",
      "ppi",
      "acid suppressant",
      "gastric ulcer",
      "duodenal ulcer",
      "gerd",
      "reflux esophagitis",
      "dog",
      "cat",
      "horse",
      "gastrointestinal",
    ],
  },
};

export default [pantoprazole];