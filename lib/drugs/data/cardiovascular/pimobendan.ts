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


const pimobendan: Drug = {

  id: "pimobendan",

  genericName:
    "Pimobendan",

  brandNames: [
    "Vetmedin",
    "Cardisure",
    "Pimocard",
    "PimoPet",
    "Pimobendan Tablets",
  ],

  status:
    DrugStatus.ACTIVE,


  searchTerms: [

    "pimobendan",
    "vetmedin",
    "cardisure",
    "pimocard",
    "pimopet",

    "inodilator",
    "phosphodiesterase III inhibitor",
    "pde iii inhibitor",
    "cardiac drug",
    "positive inotrope",
    "vasodilator",

    "congestive heart failure",
    "chf",
    "heart failure",
    "dilated cardiomyopathy",
    "dcM",
    "myxomatous mitral valve disease",
    "mmvd",
    "mitral valve insufficiency",
    "atrioventricular valve insufficiency",

  ],


  quickFacts: {

    prescriptionRequired:
      true,

    controlledDrug:
      false,

    category:
      "Cardiovascular",

    drugClass:
      "Inodilator",

    pharmacologicClass:
      "Phosphodiesterase III inhibitor and calcium sensitizer",

    commonRoutes: [
      Route.PO,
    ],

    availableRoutes: [
      Route.PO,
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

      id:
        "chewable-tablet",

      dosageForm:
        DosageForm.TABLET,

      strength:
        "1.25 mg, 2.5 mg, 5 mg, 10 mg",

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
        "capsule",

      dosageForm:
        DosageForm.CAPSULE,

      strength:
        "1.25 mg, 2.5 mg, 5 mg",

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
        "0.75 mg/mL",

      concentration: {

        value:
          0.75,

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
    species: Species.DOG,

    indication:
      "Management of mild, moderate, or severe congestive heart failure due to atrioventricular valve insufficiency or dilated cardiomyopathy",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.5,
      maximum: 0.5,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Total daily dose divided into two portions approximately 12 hours apart",

    duration:
      "As clinically indicated",

    notes:
      "Divide the daily dose into two portions that are not necessarily equal; whole and half tablets may be used according to available tablet strengths.",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Congestive heart failure secondary to myxomatous mitral valve disease (MMVD)",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.4,
      maximum: 0.6,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Divided twice daily",

    notes:
      "Used as an oral inodilator therapy for dogs with MMVD-associated congestive heart failure.",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },


  {
    species: Species.DOG,

    indication:
      "Heart failure secondary to dilated cardiomyopathy or chronic mitral valve insufficiency",

    route: Route.PO,

    basis: DoseBasis.BODY_WEIGHT,

    dose: {
      minimum: 0.25,
      maximum: 0.25,
      unit: DoseUnit.MG_PER_KG,
    },

    frequency:
      "Every 12 hours",

    notes:
      "Reported dose for management of heart failure associated with dilated cardiomyopathy or chronic mitral valve insufficiency.",

    reference:
      "Plumb's Veterinary Drug Handbook.",
  },

],
  clinical: {

    mechanismOfAction:
      "Pimobendan is an inodilator with both positive inotropic and vasodilator effects. Its inotropic action occurs through inhibition of phosphodiesterase III (PDE-III) and increased sensitivity of cardiac contractile proteins to intracellular calcium. It enhances cardiac contractility without increasing myocardial oxygen consumption. Vasodilator effects occur through vascular PDE-III inhibition, producing arterial and venous dilation.",


    spectrum:
      "Cardiovascular drug used primarily in dogs with congestive heart failure associated with atrioventricular valve insufficiency or dilated cardiomyopathy.",


    indications: [
      "Congestive heart failure",
      "Atrioventricular valve insufficiency",
      "Dilated cardiomyopathy",
      "Myxomatous mitral valve disease-associated heart failure",
      "Chronic mitral valve insufficiency",
    ],


    commonUses: [
      "Management of clinical signs associated with canine congestive heart failure",
      "Supportive therapy in dogs with dilated cardiomyopathy",
      "Supportive therapy in dogs with myxomatous mitral valve disease-associated heart failure",
    ],


    clinicalDecisionNotes: [
      "Pimobendan usually decreases heart rate (negative chronotropic effect) in animals with congestive heart failure.",
      "Use cautiously in patients with uncontrolled cardiac arrhythmias.",
      "Cardiac output augmentation may be inappropriate in certain structural cardiac diseases.",
      "Clinical experience has historically been limited in some regions, with ongoing studies evaluating its use.",
    ],


    clinicalPearls: [
      "Pimobendan combines positive inotropic and vasodilator effects in a single drug.",
      "Improves cardiac contractility without increasing myocardial oxygen consumption.",
      "Both arterial and venous dilation occur due to vascular PDE-III inhibition.",
      "Commonly administered orally in dogs with congestive heart failure.",
    ],

  },
    reproduction: {

    pregnancy: {

      recommendation:
        ReproductionRecommendation.USE_WITH_CAUTION,

      notes: [
        "Safety has not been evaluated in pregnant bitches.",
        "The drug has not been evaluated in dogs used for breeding.",
        "High doses (300 mg/kg) in pregnant laboratory animals resulted in increased resorptions.",
        "Use during pregnancy only when the potential benefit outweighs possible risks.",
      ],

    },


    lactation: {

      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "Safety during lactation has not been established.",
        "No information on safety during nursing was located.",
      ],

    },


    breeding: {

      recommendation:
        ReproductionRecommendation.NOT_ESTABLISHED,

      notes: [
        "The drug has not been evaluated in dogs used for breeding.",
      ],

    },

  },


  overdose: {

    signs: [
      "No specific overdose information was located.",
    ],


    management: [
      "Provide supportive and symptomatic care.",
      "Monitor cardiovascular function.",
      "Manage clinical signs as indicated.",
    ],

  },
    safety: {

    contraindications: [

      "Known hypersensitivity to pimobendan.",
      "Hypertrophic cardiomyopathy.",
      "Aortic stenosis.",
      "Conditions where increased cardiac output is inappropriate due to functional or anatomical reasons.",

    ],


    precautions: [

      "Use cautiously in patients with uncontrolled cardiac arrhythmias.",
      "Evaluate underlying cardiac disease before initiating therapy.",
      "Monitor patients with structural heart disease where increased cardiac output may be inappropriate.",

    ],


    adverseEffects: [

      "Potential increased risk of arrhythmias.",
      "Other adverse effects associated with cardiovascular stimulation may occur.",

    ],


    drugInteractions: [

      "No specific drug interactions were provided in the supplied reference.",

    ],


    monitoring: [

      "Monitor clinical signs associated with congestive heart failure.",
      "Monitor cardiac rhythm in patients at risk of arrhythmias.",
      "Monitor response to therapy.",
      "Monitor for adverse cardiovascular effects.",

    ],


    withdrawalPeriod:
      "Not applicable for companion animals. Follow species-specific and country-specific regulations where applicable.",


    storage: [

      "Store chewable tablets or capsules at room temperature below 25°C (77°F).",
      "Store in a dry place.",

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

      "pimobendan",
      "vetmedin",
      "cardisure",
      "pimocard",
      "pimopet",

      "inodilator",
      "cardiovascular drug",
      "positive inotrope",
      "vasodilator",
      "phosphodiesterase III inhibitor",
      "pde iii inhibitor",
      "calcium sensitizer",

      "congestive heart failure",
      "heart failure",
      "chf",
      "dilated cardiomyopathy",
      "dcM",
      "myxomatous mitral valve disease",
      "mmvd",
      "mitral valve insufficiency",
      "atrioventricular valve insufficiency",

      "dog",

    ],

  },


};


export default [pimobendan];