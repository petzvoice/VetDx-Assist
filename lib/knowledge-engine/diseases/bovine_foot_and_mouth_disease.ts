import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineFootAndMouthDisease: DiseaseCard = {
  id: "bovine-foot-and-mouth-disease",

  title: "Bovine Foot-and-Mouth Disease",

  description:
    "A highly contagious viral disease of cloven-hoofed animals characterized by fever and vesicular lesions affecting the mouth, feet, teats, and muzzle.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Foot-and-Mouth Disease",
    "FMD",
    "Aphthous Fever",
    "Hoof-and-Mouth Disease",
  ],

  overview:
    "Foot-and-mouth disease (FMD) is an acute, highly contagious disease caused by the Foot-and-Mouth Disease Virus (FMDV), a member of the genus Aphthovirus (family Picornaviridae). It affects cattle, buffalo, sheep, goats, pigs, and many wild cloven-hoofed animals. The disease spreads rapidly through direct contact, aerosols, contaminated feed, equipment, vehicles, and animal products. Although adult mortality is generally low, morbidity approaches 100%, resulting in severe economic losses due to reduced milk production, weight loss, infertility, trade restrictions, and production losses.",

  clinicalProblems: [

    "Acute viral infection",
    "High fever",
    "Vesicular lesions",
    "Excessive salivation",
    "Severe lameness",
    "Reduced milk production",
    "Anorexia",
    "Myocarditis in young calves"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess recent animal movement, introduction of new livestock, vaccination status, outbreak history, and rapid spread within the herd."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate fever, oral vesicles, foot lesions, salivation, teat lesions, and lameness."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect vesicular epithelium, vesicular fluid, oral swabs, or blood for laboratory confirmation."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection using RT-PCR, virus isolation, ELISA, or antigen detection."
    },

    {
      id: "control",
      step: 5,
      title: "Disease Control",
      description:
        "Immediately isolate affected animals and implement national FMD control measures."

    }

  ],

  diagnostics: [

    {
      id: "clinical-signs",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Typical vesicular lesions strongly suggest FMD."
    },

    {
      id: "rt-pcr",
      name: "RT-PCR",
      priority: "Essential",
      reason:
        "Highly sensitive confirmation of FMD virus."
    },

    {
      id: "virus-isolation",
      name: "Virus Isolation",
      priority: "Recommended",
      reason:
        "Confirms active viral infection."
    },

    {
      id: "elisa",
      name: "Antigen or Antibody ELISA",
      priority: "Recommended",
      reason:
        "Supports diagnosis and surveillance."

    }

  ],

  drugCategories: [

    {
      category: "Supportive Therapy",
      indication: "General supportive management",
      reason:
        "No specific antiviral treatment is available."
    },

    {
      category: "NSAIDs",
      indication: "Pain and inflammation",
      reason:
        "Improves comfort and feed intake."
    },

    {
      category: "Antimicrobial Therapy",
      indication: "Secondary bacterial infection",
      reason:
        "Reduces complications associated with damaged tissues."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "meloxicam",
      priority: "Supportive",
      category: "NSAIDs"
    }

  ],

  stabilization: [

    "Immediately isolate affected animals.",
    "Notify veterinary authorities.",
    "Provide soft feed and adequate water.",
    "Treat pain and secondary bacterial infections.",
    "Restrict animal movement."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Rapid herd spread", weight: 95 },

      { finding: "Recent animal introduction", weight: 70 },

      { finding: "Unvaccinated herd", weight: 75 },

      { finding: "Known regional outbreak", weight: 85 }

    ],

    clinicalSigns: [

      { finding: "High fever", weight: 80 },

      { finding: "Oral vesicles", weight: 100 },

      { finding: "Tongue ulcers", weight: 90 },

      { finding: "Profuse salivation", weight: 90 },

      { finding: "Interdigital vesicles", weight: 95 },

      { finding: "Lameness", weight: 85 },

      { finding: "Teat lesions", weight: 70 },

      { finding: "Sudden milk drop", weight: 80 }

    ],

    biochemistry: [

      { finding: "Usually non-specific laboratory changes", weight: 20 }

    ],

    imaging: [

      { finding: "No routine imaging findings", weight: 5 }

    ],

    supports: [

      { finding: "Positive RT-PCR", weight: 100 },

      { finding: "Positive virus isolation", weight: 100 },

      { finding: "Characteristic vesicular lesions", weight: 95 },

      { finding: "Positive antigen ELISA", weight: 95 }

    ],

    against: [

      { finding: "No vesicular lesions", weight: -60 },

      { finding: "Alternative vesicular disease confirmed", weight: -80 },

      { finding: "Negative confirmatory laboratory tests", weight: -90 }

    ],

  },

  monitoring: [

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Monitors disease progression."
    },

    {
      id: "lesions",
      parameter: "Healing of oral and foot lesions",
      frequency: "Daily",
      reason:
        "Assesses recovery."
    },

    {
      id: "milk",
      parameter: "Milk production",
      frequency: "Daily",
      reason:
        "Evaluates production losses."

    }

  ],

  precautions: [

    {
      id: "notifiable",
      title: "Immediately Reportable Disease",
      description:
        "Foot-and-mouth disease is a notifiable disease requiring immediate reporting to veterinary authorities."
    },

    {
      id: "biosecurity",
      title: "Strict Biosecurity Required",
      description:
        "Movement restrictions and disinfection are essential to prevent rapid disease spread."
    }

  ],

  prognosis:
    "Adult cattle generally recover with supportive care, although production losses may be prolonged. Young calves may die due to viral myocarditis. Herd-level economic impact is severe.",

  strengtheningEvidence: [

    "Typical oral vesicles",

    "Foot lesions",

    "Positive RT-PCR",

    "Rapid herd outbreak"

  ],

  weakeningEvidence: [

    "Absence of vesicular lesions",

    "Negative laboratory confirmation",

    "Alternative vesicular disease identified"

  ],

  classicFindings: [

    "Profuse salivation",

    "Tongue vesicles",

    "Foot lesions",

    "Lameness"

  ],

  ruleOutFindings: [

    "Vesicular stomatitis",

    "Bovine papular stomatitis",

    "Bluetongue",

    "Malignant catarrhal fever",

    "Chemical stomatitis"

  ],

};