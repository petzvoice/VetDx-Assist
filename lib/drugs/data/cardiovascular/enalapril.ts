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


const enalapril: Drug = {

  id: "enalapril",


  genericName:
    "Enalapril maleate",


  brandNames: [
    "Enacard",
    "Envas",
    "Enam",
    "Renitec",
    "Vasotec",
    "Enalapril Maleate Tablets",
  ],


  status:
    DrugStatus.ACTIVE,


  searchTerms: [

    "enalapril",
    "enalapril maleate",
    "enalaprilat",

    "enacard",
    "vasotec",
    "envas",
    "enam",
    "renitec",

    "ace inhibitor",
    "angiotensin converting enzyme inhibitor",
    "angiotensin-converting enzyme inhibitor",

    "vasodilator",
    "cardiovascular drug",

    "heart failure",
    "congestive heart failure",
    "chf",

    "hypertension",

    "chronic renal failure",
    "renal disease",
    "protein losing nephropathy",
    "glomerular disease",
    "proteinuria",

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
        "1 mg, 2.5 mg, 5 mg, 10 mg, 20 mg",


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


    {

      id:
        "oral-solution",


      dosageForm:
        DosageForm.ORAL_SOLUTION,


      strength:
        "1 mg/mL",


      concentration: {

        value:
          1,

        unit:
          ConcentrationUnit.MG_PER_ML,

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
        "Vasodilator therapy in heart failure",

      route:
        Route.PO,

      basis:
        DoseBasis.BODY_WEIGHT,

      dose: {

        minimum:
          0.5,

        maximum:
          0.5,

        unit:
          DoseUnit.MG_PER_KG,

      },

      frequency:
        "Every 12 hours",

      notes:
        "Used as an ACE inhibitor vasodilator therapy for management of heart failure.",

      reference:
        "Plumb's Veterinary Drug Handbook.",

    },


    {

      species:
        Species.DOG,

      indication:
        "Adjunctive treatment of glomerular disease",

      route:
        Route.PO,

      basis:
        DoseBasis.BODY_WEIGHT,

      dose: {

        minimum:
          0.5,

        maximum:
          0.5,

        unit:
          DoseUnit.MG_PER_KG,

      },

      frequency:
        "Every 12–24 hours",

      notes:
        "ACE inhibitors may decrease proteinuria and help preserve renal function in animals with glomerular disease.",

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
        "Vasodilator therapy in heart failure",

      route:
        Route.PO,

      basis:
        DoseBasis.BODY_WEIGHT,

      dose: {

        minimum:
          0.25,

        maximum:
          0.25,

        unit:
          DoseUnit.MG_PER_KG,

      },

      frequency:
        "Every 12–24 hours",

      notes:
        "Reported initial dosage for cats with heart failure.",

      reference:
        "Plumb's Veterinary Drug Handbook.",

    },

  ],
    clinical: {

    mechanismOfAction:
      "Enalapril is converted in the liver to the active compound enalaprilat. Enalaprilat inhibits angiotensin-converting enzyme (ACE) by competing with angiotensin-I, preventing formation of angiotensin-II, a potent vasoconstrictor. Reduced angiotensin-II decreases aldosterone secretion and increases plasma renin activity.",


    spectrum:
      "Cardiovascular and renal supportive drug acting through inhibition of the renin-angiotensin-aldosterone system.",


    indications: [
      "Congestive heart failure",
      "Heart failure-associated vasodilation",
      "Hypertension",
      "Chronic renal failure support",
      "Protein-losing nephropathies",
      "Glomerular disease",
    ],


    commonUses: [
      "Adjunctive therapy for congestive heart failure",
      "Reduction of vascular resistance in cardiac disease",
      "Adjunctive management of glomerular disease",
      "Reduction of proteinuria associated with renal disease",
    ],


    clinicalDecisionNotes: [

      "Enalaprilat decreases total peripheral resistance, pulmonary vascular resistance, mean arterial pressure, right atrial pressure, and pulmonary capillary wedge pressure in patients with congestive heart failure.",

      "Cardiac index, cardiac output, stroke volume, and exercise tolerance may increase with enalapril therapy.",

      "Renal blood flow may increase with little change in hepatic blood flow.",

      "Use with caution in patients with renal insufficiency; dosage reduction may be required.",

      "Monitor patients with conditions that may predispose to hypotension or renal dysfunction.",

    ],


    clinicalPearls: [

      "Enalapril is a prodrug converted to the active ACE inhibitor enalaprilat.",

      "ACE inhibition reduces angiotensin-II formation and decreases aldosterone secretion.",

      "ACE inhibitors may reduce proteinuria and help preserve renal function in animals with glomerular disease.",

      "Primarily used as an oral cardiovascular drug in dogs and cats.",

    ],

  },
    reproduction: {

    pregnancy: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [

        "Enalapril crosses the placenta.",

        "High doses in rodents caused decreased fetal weights and increased fetal and maternal death rates.",

        "Teratogenic effects have not been reported.",

        "Use during pregnancy only when the potential benefits outweigh possible risks.",

        "Human pregnancy classification: Category C during the first trimester and Category D during the second and third trimesters.",

      ],

    },


    lactation: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [

        "Enalapril and enalaprilat are excreted into milk.",

        "Safe use during nursing cannot be assumed.",

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

      "Weakness",

      "Renal dysfunction",

      "Hyperkalemia",

      "Gastrointestinal disturbances",

    ],


    management: [

      "Provide supportive and symptomatic care.",

      "Monitor blood pressure.",

      "Monitor renal function.",

      "Monitor electrolyte status, particularly potassium concentration.",

    ],

  },
    safety: {

    contraindications: [

      "Known hypersensitivity to enalapril or other ACE inhibitors.",

    ],


    precautions: [

      "Use cautiously in patients with renal insufficiency; dosage reduction may be required.",

      "Use cautiously in patients with hyponatremia.",

      "Use cautiously in patients with coronary or cerebrovascular insufficiency.",

      "Use cautiously in patients with preexisting hematologic abnormalities.",

      "Use cautiously in patients with collagen vascular diseases (e.g., systemic lupus erythematosus).",

      "Use cautiously during pregnancy.",

    ],


    adverseEffects: [

      "Anorexia",

      "Vomiting",

      "Diarrhea",

      "Weakness",

      "Hypotension",

      "Renal dysfunction",

      "Hyperkalemia",

    ],


    drugInteractions: [

      "Concurrent drugs affecting blood pressure or renal function may increase risk of hypotension or renal dysfunction.",

    ],


    monitoring: [

      "Monitor clinical response in patients with heart failure.",

      "Monitor blood pressure.",

      "Monitor renal function, especially in patients with renal insufficiency.",

      "Monitor serum potassium concentration.",

      "Monitor for gastrointestinal adverse effects.",

    ],


    withdrawalPeriod:
      "Not applicable for companion animals. Follow species-specific and country-specific regulations for food-producing animals.",


    storage: [

      "Store tablets at temperatures below 30°C.",

      "Store in tight containers.",

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

      "enalapril",
      "enalapril maleate",
      "enalaprilat",

      "enacard",
      "vasotec",
      "envas",
      "enam",
      "renitec",

      "ace inhibitor",
      "angiotensin converting enzyme inhibitor",
      "angiotensin ii inhibitor",

      "cardiovascular drug",
      "vasodilator",

      "heart failure",
      "congestive heart failure",
      "chf",

      "hypertension",

      "chronic renal failure",
      "renal disease",
      "glomerular disease",
      "proteinuria",
      "protein losing nephropathy",

      "dog",
      "cat",

    ],

  },


};


export default [enalapril];