import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantTapewormInfection: DiseaseCard = {
  id: "small-ruminant-tapeworm-infection",

  title: "Tapeworm Infection",

  description:
    "A parasitic intestinal disease of sheep and goats caused by cestodes, mainly Moniezia species, resulting in reduced growth, digestive disturbances, poor productivity, and occasionally intestinal obstruction in heavy infections.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Cestodiasis",
    "Monieziosis",
    "Intestinal Tapeworm Infection",
  ],

  overview:
    "Tapeworm infection is common in grazing sheep and goats, particularly young animals. The major species affecting small ruminants is Moniezia expansa and Moniezia benedeni, which require oribatid mites as intermediate hosts. Animals acquire infection by ingesting infected mites while grazing. Most infections are mild, but heavy burdens may cause diarrhea, poor growth, abdominal discomfort, and rarely intestinal blockage.",

  clinicalProblems: [

    "Reduced weight gain",
    "Digestive disturbance",
    "Poor productivity",
    "Diarrhea",
    "Intestinal obstruction"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess grazing practices, age of animals, pasture exposure, previous deworming history, and occurrence of segments in feces."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate body condition, growth rate, fecal appearance, abdominal discomfort, and general health."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Perform fecal examination and identify characteristic tapeworm segments or eggs."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Control",
      description:
        "Administer effective cestocidal therapy and improve grazing management."
    }

  ],

  diagnostics: [

    {
      id: "fecal-examination",
      name: "Fecal Examination",
      priority: "Essential",
      reason:
        "Identifies tapeworm eggs or segments."
    },

    {
      id: "gross-fecal-examination",
      name: "Visual Examination of Feces",
      priority: "Recommended",
      reason:
        "White tapeworm segments may be visible in feces."
    },

    {
      id: "postmortem",
      name: "Postmortem Examination",
      priority: "Recommended",
      reason:
        "Confirms heavy intestinal infection or obstruction."
    }

  ],

  drugCategories: [

    {
      category: "Cestocides",
      indication: "Tapeworm elimination",
      reason:
        "Removes adult intestinal tapeworms."
    },

    {
      category: "Nutritional Support",
      indication: "Poor growth recovery",
      reason:
        "Improves body condition after infection."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "praziquantel",
      priority: "First Line",
      category: "Cestocides"
    },

    {
      drugId: "niclosamide",
      priority: "Alternative",
      category: "Cestocides"
    },

    {
      drugId: "albendazole",
      priority: "Alternative",
      category: "Cestocides"
    }

  ],

  stabilization: [

    "Assess severity of infection and nutritional status.",
    "Administer appropriate cestocidal treatment.",
    "Provide nutritional support in affected young animals.",
    "Monitor animals with signs of intestinal obstruction.",
    "Improve pasture management to reduce reinfection."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Young grazing animals",
        weight: 90
      },

      {
        finding: "Pasture exposure",
        weight: 85
      },

      {
        finding: "Poor parasite control program",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Poor weight gain",
        weight: 90
      },

      {
        finding: "Diarrhea",
        weight: 75
      },

      {
        finding: "Visible tapeworm segments in feces",
        weight: 100
      },

      {
        finding: "Abdominal discomfort",
        weight: 70
      }

    ],

    biochemistry: [

      {
        finding: "Usually no specific biochemical abnormalities",
        weight: 10
      }

    ],

    imaging: [

      {
        finding: "Intestinal obstruction findings in severe cases",
        weight: 50
      }

    ],

    supports: [

      {
        finding: "Tapeworm segments detected in feces",
        weight: 100
      },

      {
        finding: "Improvement after cestocidal treatment",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Negative fecal examination",
        weight: -40
      },

      {
        finding: "Alternative cause of poor growth confirmed",
        weight: -60
      }

    ],

  },
    monitoring: [

    {
      id: "fecal-monitoring",
      parameter: "Fecal examination for tapeworm segments or eggs",
      frequency: "After treatment and during high-risk periods",
      reason:
        "Evaluates treatment effectiveness and reinfection."
    },

    {
      id: "body-weight",
      parameter: "Body weight and growth rate",
      frequency: "Monthly",
      reason:
        "Assesses recovery and production improvement in young animals."
    },

    {
      id: "body-condition",
      parameter: "Body condition score",
      frequency: "Monthly",
      reason:
        "Monitors nutritional recovery."
    },

    {
      id: "digestive-health",
      parameter: "Fecal consistency and digestive signs",
      frequency: "Weekly",
      reason:
        "Detects persistent intestinal disturbance."
    }

  ],

  precautions: [

    {
      id: "pasture-management",
      title: "Pasture Management",
      description:
        "Reduce exposure to infected intermediate hosts through appropriate grazing management."
    },

    {
      id: "parasite-control",
      title: "Strategic Parasite Control",
      description:
        "Use appropriate cestocidal treatment when infection risk is high."
    },

    {
      id: "young-animal-protection",
      title: "Protect Young Animals",
      description:
        "Monitor lambs and kids closely because they are more susceptible to production losses."
    },

    {
      id: "nutrition",
      title: "Maintain Good Nutrition",
      description:
        "Adequate nutrition improves resistance and reduces the impact of parasitic infections."
    }

  ],

  prognosis:
    "Prognosis is generally good because most tapeworm infections respond well to cestocidal treatment. Severe infections causing intestinal obstruction, poor growth, or secondary complications may have a guarded prognosis.",

  strengtheningEvidence: [

    "Visible tapeworm segments in feces",

    "Young grazing animals affected",

    "Positive fecal examination",

    "Improvement after cestocidal treatment"

  ],

  weakeningEvidence: [

    "Negative fecal examination",

    "No grazing exposure",

    "Alternative cause of poor growth identified"

  ],

  classicFindings: [

    "Poor weight gain",

    "Visible segments in feces",

    "Mild diarrhea",

    "Reduced productivity",

    "Young animals affected"

  ],

  ruleOutFindings: [

    "Gastrointestinal nematodiasis",

    "Coccidiosis",

    "Fasciolosis",

    "Nutritional deficiency",

    "Chronic enteritis"

  ],

};