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


const furosemide: Drug = {

  id:
    "furosemide",


  genericName:
    "Furosemide (Frusemide)",


  brandNames: [

    "Lasix",

    "Salix",

    "Dimazon",

    "Furosol",

    "Furosemide Injection",

    "Furosemide Tablets",

  ],


  status:
    DrugStatus.ACTIVE,


  searchTerms: [

    "furosemide",

    "frusemide",

    "lasix",

    "salix",

    "dimazon",

    "furosol",

    "loop diuretic",

    "diuretic",

    "congestive heart failure",

    "pulmonary edema",

    "cardiomyopathy",

    "udder edema",

    "hypercalciuric nephropathy",

    "uremia",

    "hyperkalemia",

    "hypertension",

    "eiph",

    "exercise induced pulmonary hemorrhage",

  ],


  quickFacts: {

    prescriptionRequired:
      true,


    controlledDrug:
      false,


    category:
      "Cardiovascular / Renal",


    drugClass:
      "Loop Diuretic",


    pharmacologicClass:
      "High-ceiling diuretic (Loop diuretic)",


    commonRoutes: [

      Route.PO,

      Route.IV,

      Route.IM,

    ],


    availableRoutes: [

      Route.PO,

      Route.IV,

      Route.IM,

    ],


    availableSpecies: [

      Species.DOG,

      Species.CAT,

      Species.HORSE,

      Species.CATTLE,

    ],

  },


  species: [

    Species.DOG,

    Species.CAT,

    Species.HORSE,

    Species.CATTLE,

  ],


  formulations: [

    {

      id:
        "oral-tablet",


      dosageForm:
        DosageForm.TABLET,


      strength:
        "10 mg, 20 mg, 40 mg, 50 mg, 80 mg",


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
        "injectable-solution",


      dosageForm:
        DosageForm.INJECTION,


      strength:
        "10 mg/mL, 20 mg/mL",


      concentration: {

        value:
          10,

        unit:
          ConcentrationUnit.MG_PER_ML,

      },


      routes: [

        Route.IV,

        Route.IM,

      ],

    },

  ],
    doseReferences: [

    // =========================
    // DOGS & CATS
    // =========================

    {

      species:
        Species.DOG,

      indication:
        "General diuretic therapy",

      route:
        Route.PO,

      basis:
        DoseBasis.BODY_WEIGHT,


      dose: {

        minimum:
          2.5,

        maximum:
          5,

        unit:
          DoseUnit.MG_PER_KG,

      },


      frequency:
        "Once or twice daily (6–8 hour intervals depending on clinical requirement)",


      notes:
        "Furosemide is a loop diuretic commonly used to increase renal excretion of sodium and water. Lower doses are suggested for cats. Ensure adequate food and water intake to reduce risk of fluid and electrolyte disturbances.",


      reference:
        "Plumb's Veterinary Drug Handbook.",

    },


    {

      species:
        Species.CAT,

      indication:
        "General diuretic therapy",

      route:
        Route.PO,

      basis:
        DoseBasis.BODY_WEIGHT,


      dose: {

        minimum:
          2.5,

        maximum:
          5,

        unit:
          DoseUnit.MG_PER_KG,

      },


      frequency:
        "Once or twice daily (6–8 hour intervals depending on clinical requirement)",


      notes:
        "Cats may require lower doses compared with dogs. Monitor hydration status and electrolytes during therapy.",


      reference:
        "Plumb's Veterinary Drug Handbook.",

    },


    {

      species:
        Species.DOG,

      indication:
        "Adjunctive therapy for congestive heart failure",

      route:
        Route.PO,

      basis:
        DoseBasis.BODY_WEIGHT,


      dose: {

        minimum:
          0.5,

        maximum:
          2,

        unit:
          DoseUnit.MG_PER_KG,

      },


      frequency:
        "Per day (divided according to clinical response)",


      notes:
        "Used as an adjunctive diuretic in congestive heart failure. Dose selection depends on severity of fluid accumulation and patient response.",


      reference:
        "Plumb's Veterinary Drug Handbook.",

    },


    {

      species:
        Species.CAT,

      indication:
        "Adjunctive therapy for congestive heart failure",

      route:
        Route.PO,

      basis:
        DoseBasis.BODY_WEIGHT,


      dose: {

        minimum:
          0.5,

        maximum:
          2,

        unit:
          DoseUnit.MG_PER_KG,

      },


      frequency:
        "Per day (divided according to clinical response)",


      notes:
        "Used as an adjunctive therapy for congestive heart failure. Monitor hydration status and renal parameters.",


      reference:
        "Plumb's Veterinary Drug Handbook.",

    },
    // =========================
    // CATTLE
    // =========================

    {

      species:
        Species.CATTLE,

      indication:
        "Treatment of udder edema (post-partum)",

      route:
        Route.PO,

      basis:
        DoseBasis.FIXED_DOSE,


      dose: {

        minimum:
          500,

        maximum:
          500,

        unit:
          DoseUnit.MG,

      },


      frequency:
        "Once daily",

      duration:
        "Treatment should not exceed 48 hours post-partum",

      notes:
        "Alternative reported regimen: 250 mg twice daily or 2 grams orally once daily for udder edema. Use according to clinical indication and monitor hydration and electrolyte status.",


      reference:
        "Plumb's Veterinary Drug Handbook.",

    },


    {

      species:
        Species.CATTLE,

      indication:
        "Diuretic therapy",

      route:
        Route.IV,

      basis:
        DoseBasis.BODY_WEIGHT,


      dose: {

        minimum:
          2.2,

        maximum:
          4.4,

        unit:
          DoseUnit.MG_PER_KG,

      },


      frequency:
        "Every 12 hours",

      notes:
        "Reported intravenous diuretic dose in cattle.",


      reference:
        "Plumb's Veterinary Drug Handbook.",

    },


    // =========================
    // HORSES
    // =========================

    {

      species:
        Species.HORSE,

      indication:
        "Adjunctive therapy for congestive heart failure (initial control of edema)",

      route:
        Route.IM,

      basis:
        DoseBasis.BODY_WEIGHT,


      dose: {

        minimum:
          1,

        maximum:
          2,

        unit:
          DoseUnit.MG_PER_KG,

      },


      frequency:
        "Every 6–12 hours",

      notes:
        "Initial therapy may be used to control edema associated with congestive heart failure. Refer to state guidelines for use of furosemide in racing animals.",


      reference:
        "Plumb's Veterinary Drug Handbook.",

    },


    {

      species:
        Species.HORSE,

      indication:
        "Long-term adjunctive therapy for congestive heart failure",

      route:
        Route.PO,

      basis:
        DoseBasis.BODY_WEIGHT,


      dose: {

        minimum:
          0.5,

        maximum:
          2,

        unit:
          DoseUnit.MG_PER_KG,

      },


      frequency:
        "Every 8–12 hours",

      notes:
        "Long-term therapy dose reported for management of edema associated with congestive heart failure.",


      reference:
        "Plumb's Veterinary Drug Handbook.",

    },

  ],
    clinical: {

    mechanismOfAction:
      "Furosemide is a loop diuretic that reduces electrolyte absorption in the ascending limb of the loop of Henle. It decreases sodium and chloride reabsorption and increases potassium excretion in the distal renal tubule. It also directly affects electrolyte transport in the proximal tubule. The exact mechanism of all effects is not completely established.",


    spectrum:
      "Renal and cardiovascular supportive drug used to promote diuresis and reduce fluid accumulation in multiple veterinary species.",


    indications: [

      "Congestive heart failure",

      "Pulmonary edema",

      "Cardiomyopathy-associated fluid accumulation",

      "Udder edema",

      "Hypercalciuric nephropathy",

      "Uremia",

      "Adjunctive therapy in hyperkalemia",

      "Hypertension (occasionally)",

      "Exercise-induced pulmonary hemorrhage (EIPH) prevention/reduction in racehorses",

    ],


    commonUses: [

      "Management of edema associated with congestive heart failure",

      "Reduction of pulmonary edema",

      "Control of fluid overload states",

      "Diuretic therapy in various veterinary species",

      "Reduction or prevention of EIPH in racing horses",

    ],


    clinicalDecisionNotes: [

      "Furosemide increases renal excretion of water, sodium, potassium, chloride, calcium, magnesium, hydrogen, ammonium, and bicarbonate.",

      "In dogs, sodium loss is usually greater than potassium loss; therefore hyponatremia may be a greater concern than hypokalemia.",

      "The drug may cause renal venodilation and transiently increase glomerular filtration rate.",

      "Renal blood flow may increase and peripheral resistance may decrease.",

      "Furosemide increases renin secretion due to its effects on the nephron but does not cause sodium and water retention.",

      "Furosemide may cause hyperglycemia, although less commonly than thiazide diuretics.",

    ],


    clinicalPearls: [

      "Maintain normal food and water intake during therapy to reduce risk of fluid and electrolyte disturbances.",

      "Monitor hydration status and electrolytes, especially sodium, potassium, calcium, and magnesium.",

      "Dehydration during therapy may result in pre-renal azotemia.",

      "Hyponatremia is considered one of the major electrolyte concerns during treatment.",

      "Used commonly as a component of congestive heart failure management protocols.",

    ],

  },
    reproduction: {

    pregnancy: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [

        "Human FDA pregnancy classification: Category C.",

        "Animal studies have shown adverse fetal effects, but adequate studies in humans are not available.",

        "In a separate veterinary pregnancy safety classification system, furosemide is categorized as Class B for dogs and cats.",

        "Use during pregnancy only when the potential benefits outweigh possible risks.",

      ],

    },


    lactation: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [

        "Furosemide appears in milk.",

        "Clinical significance to nursing offspring is unknown.",

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

      "Dehydration",

      "Fluid and electrolyte abnormalities",

      "Hyponatremia",

      "Hypokalemia",

      "Hypocalcemia",

      "Hypomagnesemia",

      "Weakness",

      "Pre-renal azotemia",

    ],


    management: [

      "Provide supportive and symptomatic treatment.",

      "Correct dehydration and fluid deficits as clinically indicated.",

      "Monitor and correct electrolyte abnormalities.",

      "Monitor renal function, especially in patients showing azotemia.",

    ],

  },
    safety: {

    contraindications: [

      "Anuria",

      "Known hypersensitivity to furosemide",

      "Patients with severe electrolyte depletion",

    ],


    precautions: [

      "Use cautiously in patients with pre-existing electrolyte or water balance abnormalities.",

      "Use cautiously in patients with impaired hepatic function.",

      "Use cautiously in patients with diabetes mellitus.",

      "Monitor hydration status during therapy.",

      "Monitor electrolyte concentrations, especially sodium, potassium, calcium, and magnesium.",

      "Discontinue therapy in patients with progressive renal disease if increasing azotemia and oliguria occur.",

    ],


    adverseEffects: [

      "Fluid imbalance",

      "Electrolyte abnormalities",

      "Hyponatremia",

      "Hypokalemia",

      "Hypocalcemia",

      "Hypomagnesemia",

      "Dehydration",

      "Pre-renal azotemia",

      "Gastrointestinal disturbances",

      "Weakness",

      "Restlessness",

      "Hematologic effects",

      "Ototoxicity",

    ],


    drugInteractions: [

      "Concurrent drugs affecting hydration status or renal function may increase the risk of adverse effects.",

    ],


    monitoring: [

      "Monitor hydration status.",

      "Monitor serum electrolytes, especially sodium, potassium, calcium, and magnesium.",

      "Monitor renal function.",

      "Monitor clinical response in patients with congestive heart failure.",

      "Monitor for signs of dehydration or weakness.",

    ],


    withdrawalPeriod:
      "Follow species-specific and country-specific regulations for food-producing animals.",


    storage: [

      "Store tablets in light-resistant, well-closed containers.",

      "Store oral solution at room temperature.",

      "Protect oral solution from light and freezing.",

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

      "furosemide",
      "frusemide",

      "lasix",
      "salix",
      "dimazon",
      "furosol",

      "loop diuretic",
      "diuretic",

      "cardiovascular drug",
      "renal drug",

      "congestive heart failure",
      "chf",

      "pulmonary edema",
      "cardiomyopathy",

      "fluid overload",

      "udder edema",

      "hypercalciuric nephropathy",

      "uremia",

      "hyperkalemia",

      "hypertension",

      "exercise induced pulmonary hemorrhage",
      "eiph",

      "dog",
      "cat",
      "horse",
      "cattle",

    ],

  },


};


export default [furosemide];