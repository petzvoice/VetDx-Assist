import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineLumpySkinDisease: DiseaseCard = {
  id: "bovine-lumpy-skin-disease",

  title: "Bovine Lumpy Skin Disease",

  description:
    "A highly contagious viral disease of cattle characterized by fever, generalized skin nodules, enlarged lymph nodes, and significant production losses.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Lumpy Skin Disease",
    "LSD",
    "Capripoxvirus Infection",
    "Nodular Skin Disease",
  ],

  overview:
    "Lumpy Skin Disease (LSD) is an economically important viral disease of cattle and water buffalo caused by the Lumpy Skin Disease Virus (LSDV), a member of the genus Capripoxvirus (family Poxviridae). The disease is primarily transmitted by blood-feeding insects such as mosquitoes, biting flies, and ticks, although direct contact may also contribute. Clinical disease is characterized by fever, firm skin nodules, lymphadenopathy, edema, reduced milk production, infertility, and occasionally death. LSD has major impacts on livestock productivity and international trade.",

  clinicalProblems: [

    "Acute viral infection",
    "Generalized skin nodules",
    "High fever",
    "Peripheral lymphadenopathy",
    "Edema",
    "Reduced milk production",
    "Weight loss",
    "Infertility",
    "Secondary bacterial skin infections"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess vaccination history, insect exposure, recent outbreaks, introduction of new animals, and rapid spread within the herd."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate fever, skin nodules, enlarged lymph nodes, edema, ocular discharge, nasal discharge, and lameness."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect skin nodules, scabs, blood, or tissue samples for laboratory confirmation."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Confirm infection using PCR, virus isolation, or histopathology."
    },

    {
      id: "management",
      step: 5,
      title: "Disease Control",
      description:
        "Implement isolation, vector control, supportive treatment, and vaccination programs where recommended."
    }

  ],

  diagnostics: [

    {
      id: "clinical-examination",
      name: "Clinical Examination",
      priority: "Essential",
      reason:
        "Characteristic skin nodules strongly suggest lumpy skin disease."
    },

    {
      id: "pcr",
      name: "PCR",
      priority: "Essential",
      reason:
        "Highly sensitive and specific confirmation of LSD virus infection."
    },

    {
      id: "histopathology",
      name: "Histopathology",
      priority: "Recommended",
      reason:
        "Demonstrates characteristic poxviral lesions."
    },

    {
      id: "virus-isolation",
      name: "Virus Isolation",
      priority: "Recommended",
      reason:
        "Provides definitive laboratory confirmation."
    }

  ],
    drugCategories: [

    {
      category: "NSAIDs",
      indication: "Fever, pain, and inflammation",
      reason:
        "Improves comfort, reduces pyrexia, and encourages feed intake."
    },

    {
      category: "Antimicrobial Therapy",
      indication: "Secondary bacterial skin infections",
      reason:
        "Treats bacterial complications associated with ulcerated skin lesions."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration and anorexia",
      reason:
        "Maintains hydration and electrolyte balance."
    },

    {
      category: "Topical Therapy",
      indication: "Skin lesions",
      reason:
        "Promotes healing and reduces secondary infection."
    },

    {
      category: "Supportive Therapy",
      indication: "General supportive care",
      reason:
        "No specific antiviral treatment is available."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "meloxicam",
      priority: "Adjunctive",
      category: "NSAIDs"
    },

    {
      drugId: "oxytetracycline",
      priority: "Supportive",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Isolate affected animals immediately.",
    "Provide shade, clean water, and soft palatable feed.",
    "Treat fever and pain.",
    "Manage secondary bacterial skin infections.",
    "Institute insect vector control.",
    "Disinfect equipment and housing.",
    "Restrict animal movement.",
    "Notify veterinary authorities where required."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Recent insect exposure", weight: 75 },

      { finding: "Rapid herd spread", weight: 85 },

      { finding: "Unvaccinated herd", weight: 75 },

      { finding: "Recent outbreak nearby", weight: 80 }

    ],

    clinicalSigns: [

      { finding: "High fever", weight: 80 },

      { finding: "Firm skin nodules", weight: 100 },

      { finding: "Generalized skin lesions", weight: 95 },

      { finding: "Enlarged superficial lymph nodes", weight: 85 },

      { finding: "Leg edema", weight: 70 },

      { finding: "Lameness", weight: 65 },

      { finding: "Reduced milk production", weight: 75 },

      { finding: "Ocular discharge", weight: 55 },

      { finding: "Nasal discharge", weight: 55 }

    ],

    biochemistry: [

      { finding: "Usually non-specific inflammatory changes", weight: 20 },

      { finding: "Leukocytosis may occur with secondary infection", weight: 35 }

    ],

    imaging: [

      { finding: "No routine diagnostic imaging findings", weight: 5 }

    ],
        supports: [

      { finding: "Positive PCR for LSD virus", weight: 100 },

      { finding: "Typical generalized skin nodules", weight: 95 },

      { finding: "Characteristic histopathology", weight: 90 },

      { finding: "Positive virus isolation", weight: 100 }

    ],

    against: [

      { finding: "Absence of characteristic skin nodules", weight: -60 },

      { finding: "Negative PCR", weight: -90 },

      { finding: "Alternative skin disease confirmed", weight: -80 }

    ],

  },

  monitoring: [

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Monitors disease progression and response to supportive treatment."
    },

    {
      id: "skin-lesions",
      parameter: "Skin nodules and wound healing",
      frequency: "Daily",
      reason:
        "Evaluates healing and detects secondary bacterial infection."
    },

    {
      id: "feed-intake",
      parameter: "Feed and water intake",
      frequency: "Daily",
      reason:
        "Assesses recovery and hydration status."
    },

    {
      id: "milk-production",
      parameter: "Milk production",
      frequency: "Daily",
      reason:
        "Monitors production losses and recovery."
    },

    {
      id: "body-condition",
      parameter: "Body weight and body condition",
      frequency: "Weekly",
      reason:
        "Evaluates long-term recovery."

    }

  ],

  precautions: [

    {
      id: "vector-control",
      title: "Aggressive Vector Control",
      description:
        "Control mosquitoes, biting flies, and ticks to reduce disease transmission."
    },

    {
      id: "biosecurity",
      title: "Strict Biosecurity",
      description:
        "Restrict movement of animals and disinfect contaminated equipment to minimize spread."
    },

    {
      id: "vaccination",
      title: "Vaccination",
      description:
        "Vaccination is an effective preventive measure in endemic and high-risk regions."
    }

  ],
    prognosis:
    "Most cattle recover with appropriate supportive care, although recovery may require several weeks. Severe cases can develop secondary bacterial infections, mastitis, infertility, pneumonia, permanent skin scarring, or emaciation. Mortality is generally low but economic losses from reduced productivity and trade restrictions are substantial.",

  strengtheningEvidence: [

    "Generalized firm skin nodules",

    "Positive PCR for LSD virus",

    "Characteristic capripox lesions",

    "Fever with enlarged lymph nodes",

    "Outbreak involving multiple cattle"

  ],

  weakeningEvidence: [

    "Negative PCR",

    "Absence of skin nodules",

    "Alternative dermatologic disease confirmed"

  ],

  classicFindings: [

    "High fever",

    "Firm skin nodules",

    "Enlarged lymph nodes",

    "Edema of limbs",

    "Reduced milk production"

  ],

  ruleOutFindings: [

    "Pseudo-lumpy skin disease",

    "Dermatophilosis",

    "Bovine papillomatosis",

    "Insect bite hypersensitivity",

    "Photosensitization",

    "Demodicosis",

    "Ringworm"

  ],

};