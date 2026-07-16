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

const tramadol: Drug = {

  id: "tramadol",

  genericName: "Tramadol hydrochloride",

  brandNames: [
    "Tramazac",
    "Contramal",
    "Tramacip",
    "Tramasure",
    "Tramadol HCl Injection",
    "Tramal Vet",
  ],

  status: DrugStatus.ACTIVE,

  searchTerms: [
    "tramadol",
    "tramadol hydrochloride",
    "ultram",
    "tramal vet",
    "opioid",
    "opiate",
    "mu receptor agonist",

    "analgesic",
    "pain relief",
    "antitussive",

    "serotonin reuptake inhibitor",
    "norepinephrine reuptake inhibitor",

    "dog",
  ],

  quickFacts: {

    prescriptionRequired: true,

    controlledDrug: false,

    category: "Analgesic",

    drugClass:
      "Opioid analgesic",

    pharmacologicClass:
      "Synthetic opioid (mu-receptor agonist) with serotonin and norepinephrine reuptake inhibition",

    commonRoutes: [
      Route.PO,
    ],

    availableRoutes: [
      Route.PO,
      Route.IV,
    ],

    availableSpecies: [
      Species.DOG,
    ],

  },


  species: [
    Species.DOG,
  ],


  formulations: [

    {
      id: "injectable",

      dosageForm: DosageForm.INJECTION,

      strength:
        "50 mg/mL",

      concentration: {
        value: 50,
        unit: ConcentrationUnit.MG_PER_ML,
      },

      routes: [
        Route.IV,
      ],
    },


    {
      id: "tablet",

      dosageForm: DosageForm.TABLET,

      strength:
        "50 mg, 100 mg, 150 mg, 200 mg",

      concentration: {
        value: 0,
        unit: ConcentrationUnit.OTHER,
      },

      routes: [
        Route.PO,
      ],
    },

  ],


  doseReferences: [

    // =========================
    // DOG
    // =========================

    {
      species: Species.DOG,

      indication:
        "Analgesia",

      route: Route.PO,

      basis:
        DoseBasis.BODY_WEIGHT,

      dose: {
        minimum: 1,
        maximum: 4,
        unit: DoseUnit.MG_PER_KG,
      },

      frequency:
        "Every 8–12 hours",

      notes:
        "Tramadol appears well tolerated in dogs. Sedation is the most commonly reported adverse effect.",

      reference:
        "Hardie, Lascelles et al. 2003",
    },
  ],

  clinical: {

    mechanismOfAction:
      "Tramadol is a centrally acting synthetic opioid analgesic with primarily mu-receptor agonist activity. It also inhibits serotonin and norepinephrine reuptake, contributing to its analgesic effects. The active metabolite O-desmethyltramadol (M1) has additional mu-receptor activity.",

    spectrum:
      "Centrally acting analgesic with opioid and monoaminergic mechanisms. Provides analgesic effects and may have antitussive activity.",

    indications: [
      "Pain management",
      "Analgesia",
      "Antitussive use",
    ],

    commonUses: [
      "Management of mild to moderate pain in dogs",
      "Adjunctive analgesic therapy",
    ],

    clinicalDecisionNotes: [
      "Analgesic effect is mediated by both opioid receptor activity and inhibition of serotonin and norepinephrine reuptake.",
      "Naloxone only partially antagonizes tramadol analgesic effects.",
      "Use caution with SSRIs and selegiline due to risk of serotonin-related adverse effects.",
      "Use cautiously in patients with seizure disorders.",
      "Dosage adjustment may be required in patients with hepatic or renal impairment.",
      "Use cautiously with other CNS or respiratory depressant drugs.",
    ],

    clinicalPearls: [
      "Appears well tolerated in dogs.",
      "Sedation is the most commonly reported adverse effect.",
      "Relatively inexpensive analgesic option.",
      "Has potential for human abuse despite not being classified as a controlled drug in the USA.",
    ],

  },


  reproduction: {

    pregnancy: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "FDA Pregnancy Category C in humans.",
        "At doses 3–15 times higher than usual, tramadol produced embryotoxic and fetotoxic effects in laboratory animals.",
        "Use only when benefits outweigh potential risks.",
      ],
    },


    lactation: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Tramadol and its active metabolite enter maternal milk at very low levels.",
        "Safety in nursing neonates has not been established.",
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
      "Respiratory depression",
      "Lethargy",
      "Coma",
      "Seizures",
      "Cardiac arrest",
      "Death",
    ],


    management: [
      "Provide supportive and symptomatic care.",
      "Monitor respiratory and cardiovascular function.",
      "Treat seizures and respiratory depression as clinically indicated.",
    ],

  },
    safety: {

    contraindications: [
      "Hypersensitivity to tramadol.",
      "Hypersensitivity to other opioids.",
      "Combination tramadol-acetaminophen products are contraindicated in cats.",
    ],

    precautions: [
      "Use cautiously with SSRIs or selegiline.",
      "Use cautiously with other CNS depressants.",
      "Use cautiously in patients with seizure disorders.",
      "Use cautiously in geriatric or severely debilitated patients.",
      "Dosage adjustment may be required in hepatic or renal impairment.",
    ],

    adverseEffects: [
      "Sedation.",
      "Excessive sleepiness.",
      "Agitation.",
      "Anxiety.",
      "Tremors.",
      "Dizziness.",
      "Inappetence.",
      "Vomiting.",
      "Constipation.",
      "Diarrhea.",
    ],

    drugInteractions: [
      "Avoid or use extreme caution with selective serotonin reuptake inhibitors (SSRIs).",
      "Use caution with selegiline.",
      "Use caution with other drugs causing CNS or respiratory depression.",
    ],

    monitoring: [
      "Monitor degree of analgesia.",
      "Monitor sedation level.",
      "Monitor respiratory function when combined with other CNS depressants.",
      "Monitor for serotonin-related adverse effects when combined with serotonergic drugs.",
      "Monitor seizure activity in predisposed patients.",
    ],

    withdrawalPeriod:
      "Not applicable for companion animals. Follow country-specific regulations for food-producing animals.",

    storage: [
      "Store tablets at room temperature (approximately 25°C).",
      "Permitted temperature excursions: 15–30°C.",
      "Dispense in tight, light-resistant containers.",
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

    lastReviewed:
      "2026-07-16",

    tags: [
      "tramadol",
      "tramadol hydrochloride",
      "ultram",
      "opioid",
      "mu receptor agonist",
      "analgesic",
      "pain management",
      "antitussive",
      "serotonin reuptake inhibitor",
      "norepinephrine reuptake inhibitor",
      "dog",
    ],

  },

};


export default [tramadol];