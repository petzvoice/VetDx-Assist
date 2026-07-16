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


const benazepril: Drug = {

  id: "benazepril",


  genericName:
    "Benazepril hydrochloride",


  brandNames: [
    "Fortekor",
    "Fortekor Plus",
    "Benakor",
    "Lotensin",
    "Benazepril HCl Tablets",
  ],


  status:
    DrugStatus.ACTIVE,


  searchTerms: [

    "benazepril",
    "benazepril hydrochloride",
    "benazeprilat",

    "fortekor",
    "fortekor plus",
    "benakor",
    "lotensin",

    "ace inhibitor",
    "angiotensin converting enzyme inhibitor",
    "angiotensin-converting enzyme inhibitor",

    "cardiovascular drug",
    "vasodilator",

    "heart failure",
    "congestive heart failure",
    "chf",

    "hypertension",

    "chronic renal failure",
    "renal disease",

    "protein losing nephropathy",
    "protein losing glomerulonephropathy",
    "glomerular disease",

  ],


  quickFacts: {

    prescriptionRequired:
      true,


    controlledDrug:
      false,


    category:
      "Cardiovascular",


    drugClass:
      "Angiotensin-converting enzyme (ACE) inhibitor",


    pharmacologicClass:
      "Renin-angiotensin-aldosterone system inhibitor",


    commonRoutes: [
      Route.PO,
    ],


    availableRoutes: [
      Route.PO,
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

      id:
        "tablet",


      dosageForm:
        DosageForm.TABLET,


      strength:
        "2.5 mg, 5 mg, 10 mg, 20 mg",


      concentration: {

        value:
          0,

        unit:
          ConcentrationUnit.OTHER,

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

      species:
        Species.DOG,

      indication:
        "Adjunctive treatment of heart failure",

      route:
        Route.PO,

      basis:
        DoseBasis.BODY_WEIGHT,

      dose: {

        minimum:
          0.25,

        maximum:
          0.5,

        unit:
          DoseUnit.MG_PER_KG,

      },

      frequency:
        "Once daily",

      notes:
        "Benazepril is used as an ACE inhibitor adjunctive therapy in dogs with heart failure. Low-dose therapy (0.1 mg/kg every 12 hours) has been reported to improve clinical signs in dogs with heart failure but did not significantly affect blood pressure in one study.",

      reference:
        "Plumb's Veterinary Drug Handbook.",

    },


    // =========================
    // CAT
    // =========================

    {

      species:
        Species.CAT,

      indication:
        "Adjunctive treatment of heart failure",

      route:
        Route.PO,

      basis:
        DoseBasis.BODY_WEIGHT,

      dose: {

        minimum:
          0.25,

        maximum:
          0.5,

        unit:
          DoseUnit.MG_PER_KG,

      },

      frequency:
        "Once daily",

      notes:
        "Used as an ACE inhibitor in cats with heart failure. Benazepril has also been reported to reduce systemic arterial pressure and glomerular capillary pressure while increasing renal plasma flow and glomerular filtration rate in cats with chronic renal failure.",

      reference:
        "Plumb's Veterinary Drug Handbook.",

    },

  ],
    clinical: {

    mechanismOfAction:
      "Benazepril is a prodrug with little pharmacologic activity until hydrolyzed in the liver to the active compound benazeprilat. Benazeprilat inhibits angiotensin-converting enzyme (ACE), preventing conversion of angiotensin-I to angiotensin-II. Reduced angiotensin-II formation decreases vasoconstriction and aldosterone production, resulting in reduced vascular resistance and blood pressure.",


    spectrum:
      "Cardiovascular and renal supportive drug acting through inhibition of the renin-angiotensin-aldosterone system.",


    indications: [

      "Congestive heart failure",

      "Hypertension",

      "Chronic renal failure support",

      "Protein-losing glomerulonephropathies",

      "Protein-losing nephropathies",

    ],


    commonUses: [

      "Adjunctive treatment of heart failure in dogs",

      "Adjunctive treatment of heart failure in cats",

      "Supportive management of renal disease associated with protein loss",

      "Reduction of vascular resistance in cardiovascular disease",

    ],


    clinicalDecisionNotes: [

      "Benazepril is converted to benazeprilat, the active ACE inhibitor.",

      "ACE inhibition reduces formation of angiotensin-II, a potent vasoconstrictor and stimulator of aldosterone production.",

      "Use cautiously in patients with hyponatremia or sodium depletion.",

      "Use cautiously in patients with coronary or cerebrovascular insufficiency.",

      "Patients with severe congestive heart failure should be monitored closely when therapy is initiated.",

      "In cats with chronic renal failure, benazepril has been reported to reduce systemic arterial pressure and glomerular capillary pressure while increasing renal plasma flow and glomerular filtration rate.",

    ],


    clinicalPearls: [

      "Benazepril does not contain a sulfhydryl group, unlike captopril, which may reduce the likelihood of some immune-mediated reactions.",

      "ACE inhibitors may provide renal benefits by reducing proteinuria in glomerular disease.",

      "Commonly used as an oral cardiovascular medication in dogs and cats.",

      "Clinical effects are related to reduced angiotensin-II activity and decreased vascular resistance.",

    ],

  },
    reproduction: {

    pregnancy: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [

        "Benazepril appears to cross the placenta.",

        "High doses of ACE inhibitors in rodents have caused decreased fetal weights and increased fetal and maternal death rates.",

        "No teratogenic effects have been reported to date.",

        "Use during pregnancy only when the potential benefits of therapy outweigh the risks to offspring.",

        "Human pregnancy classification: Category C during the first trimester and Category D during the second and third trimesters.",

      ],

    },


    lactation: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [

        "Benazepril is distributed into milk in very small amounts.",

        "Safety during nursing cannot be completely assumed.",

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

      "Hypotension",

    ],


    management: [

      "Primary concern in overdose is hypotension.",

      "Supportive treatment with volume expansion using normal saline is recommended to correct blood pressure.",

      "Because of the long duration of action, prolonged monitoring and treatment may be required.",

      "Recent massive overdoses should be managed using appropriate gut-emptying protocols.",

    ],

  },
    safety: {

    contraindications: [

      "Known hypersensitivity to benazepril or other ACE inhibitors.",

    ],


    precautions: [

      "Use cautiously in patients with hyponatremia or sodium depletion.",

      "Use cautiously in patients with coronary insufficiency.",

      "Use cautiously in patients with cerebrovascular insufficiency.",

      "Use cautiously in patients with preexisting hematologic abnormalities.",

      "Use cautiously in patients with collagen vascular diseases (e.g., systemic lupus erythematosus).",

      "Monitor patients with severe congestive heart failure closely when initiating therapy.",

    ],


    adverseEffects: [

      "Anorexia",

      "Vomiting",

      "Diarrhea",

      "Hypotension",

      "Renal dysfunction",

      "Hyperkalemia",

    ],


    drugInteractions: [

      "Concurrent medications affecting blood pressure or renal function may increase the risk of hypotension or renal dysfunction.",

    ],


    monitoring: [

      "Monitor clinical response in patients with heart failure.",

      "Monitor blood pressure.",

      "Monitor renal function, especially in patients with renal disease.",

      "Monitor serum potassium concentration.",

      "Monitor for gastrointestinal adverse effects.",

    ],


    withdrawalPeriod:
      "Not applicable for companion animals. Follow species-specific and country-specific regulations where applicable.",


    storage: [

      "Store tablets below 30°C (86°F).",

      "Protect from moisture.",

      "Dispense in tight containers.",

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

    version:
      "1.0.0",


    lastReviewed:
      "2026-07-16",


    tags: [

      "benazepril",
      "benazepril hydrochloride",
      "benazeprilat",

      "fortekor",
      "fortekor plus",
      "benakor",
      "lotensin",

      "ace inhibitor",
      "angiotensin converting enzyme inhibitor",
      "angiotensin-converting enzyme inhibitor",

      "cardiovascular drug",
      "vasodilator",

      "heart failure",
      "congestive heart failure",
      "chf",

      "hypertension",

      "chronic renal failure",
      "renal disease",
      "protein losing nephropathy",
      "protein losing glomerulonephropathy",
      "glomerular disease",

      "proteinuria",

      "dog",
      "cat",

    ],

  },


};


export default [benazepril];