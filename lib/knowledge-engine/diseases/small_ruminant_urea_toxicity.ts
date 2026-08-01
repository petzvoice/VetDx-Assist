import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantUreaToxicity: DiseaseCard = {
  id: "small-ruminant-urea-toxicity",

  title: "Urea Toxicity",

  description:
    "A metabolic toxic disorder in sheep and goats caused by excessive intake or rapid consumption of urea or non-protein nitrogen sources, resulting in excessive ruminal ammonia production, neurological signs, respiratory distress, convulsions, and death.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Ammonia Toxicity",
    "Non-Protein Nitrogen Poisoning",
    "Urea Poisoning",
  ],

  overview:
    "Urea toxicity occurs when ruminants consume excessive amounts of urea or when urea-containing feeds are improperly mixed or introduced suddenly. In the rumen, urease enzymes rapidly convert urea into ammonia. When ammonia production exceeds microbial utilization and liver detoxification capacity, blood ammonia increases causing severe neurological and metabolic disturbances. The condition develops rapidly and can result in death within minutes to hours.",

  clinicalProblems: [

    "Hyperammonemia",
    "Neurological dysfunction",
    "Muscle tremors",
    "Respiratory distress",
    "Convulsions",
    "Sudden death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess access to urea supplements, feed mixing errors, recent dietary changes, and number of affected animals."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate onset time, salivation, abdominal signs, muscle tremors, neurological status, and respiratory function."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Diagnosis is based mainly on exposure history, clinical signs, and response to emergency treatment."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Prevention",
      description:
        "Reduce ruminal ammonia absorption, provide emergency supportive therapy, and correct feeding practices."
    }

  ],

  diagnostics: [

    {
      id: "history-diagnosis",
      name: "Feed and Exposure History",
      priority: "Essential",
      reason:
        "Identifies urea exposure and feeding errors."
    },

    {
      id: "rumen-fluid",
      name: "Rumen Fluid Examination",
      priority: "Recommended",
      reason:
        "May support diagnosis through ammonia-related changes."
    },

    {
      id: "blood-ammonia",
      name: "Blood Ammonia Measurement",
      priority: "Recommended",
      reason:
        "Confirms hyperammonemia when available."
    }

  ],

  drugCategories: [

    {
      category: "Rumen Acidifying Therapy",
      indication: "Reduce ammonia absorption",
      reason:
        "Acidification converts ammonia to less absorbable ammonium."
    },

    {
      category: "Supportive Therapy",
      indication: "Emergency stabilization",
      reason:
        "Maintains circulation and reduces complications."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration and metabolic support",
      reason:
        "Supports affected animals during recovery."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "acetic-acid",
      priority: "Emergency",
      category: "Rumen Acidifier"
    },

    {
      drugId: "cold-water-rumen-therapy",
      priority: "Supportive",
      category: "Emergency"
    }

  ],

  stabilization: [

    "Immediately remove access to urea source.",
    "Administer rumen acidifying therapy as soon as possible.",
    "Provide cold water orally when appropriate.",
    "Control seizures and neurological signs.",
    "Provide supportive fluid therapy.",
    "Correct feed formulation errors to prevent recurrence."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Recent access to urea supplement",
        weight: 100
      },

      {
        finding: "Feed mixing error",
        weight: 95
      },

      {
        finding: "Sudden multiple animal illness",
        weight: 95
      },

      {
        finding: "Poor adaptation to urea feed",
        weight: 90
      }

    ],

    clinicalSigns: [

      {
        finding: "Excessive salivation",
        weight: 90
      },

      {
        finding: "Muscle tremors",
        weight: 90
      },

      {
        finding: "Bloat",
        weight: 80
      },

      {
        finding: "Respiratory distress",
        weight: 85
      },

      {
        finding: "Convulsions",
        weight: 100
      },

      {
        finding: "Sudden death",
        weight: 95
      }

    ],

    biochemistry: [

      {
        finding: "Increased blood ammonia",
        weight: 100
      }

    ],

    imaging: [

      {
        finding: "No specific imaging findings",
        weight: 5
      }

    ],

    supports: [

      {
        finding: "Rapid improvement after emergency therapy",
        weight: 90
      },

      {
        finding: "Confirmed urea exposure",
        weight: 100
      }

    ],

    against: [

      {
        finding: "No urea exposure history",
        weight: -80
      },

      {
        finding: "Alternative neurological disease confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "neurological-status",
      parameter: "Muscle tremors, seizures, and behavior",
      frequency: "Continuous during acute poisoning",
      reason:
        "Evaluates severity and response to emergency treatment."
    },

    {
      id: "respiratory-status",
      parameter: "Respiratory rate and effort",
      frequency: "Frequently during acute cases",
      reason:
        "Detects respiratory compromise associated with ammonia toxicity."
    },

    {
      id: "rumen-function",
      parameter: "Rumen activity and appetite",
      frequency: "Daily after recovery",
      reason:
        "Assesses return of normal digestive function."
    },

    {
      id: "feed-management",
      parameter: "Urea-containing feed formulation",
      frequency: "After poisoning event",
      reason:
        "Prevents recurrence caused by feeding errors."
    },

    {
      id: "flock-monitoring",
      parameter: "Health status of exposed animals",
      frequency: "Daily after exposure",
      reason:
        "Identifies delayed cases in the group."
    }

  ],

  precautions: [

    {
      id: "gradual-adaptation",
      title: "Gradual Introduction of Urea Feeds",
      description:
        "Allow rumen microbes to adapt before increasing non-protein nitrogen sources."
    },

    {
      id: "correct-mixing",
      title: "Accurate Feed Mixing",
      description:
        "Ensure uniform distribution of urea in concentrate mixtures to prevent toxic intake."
    },

    {
      id: "avoid-empty-stomach",
      title: "Avoid Sudden Access on Empty Stomach",
      description:
        "Provide adequate carbohydrate sources before feeding urea-containing diets."
    },

    {
      id: "proper-storage",
      title: "Safe Storage of Urea",
      description:
        "Prevent accidental access of animals to pure urea fertilizer or supplements."
    },

    {
      id: "trained-feeding",
      title: "Proper Feeding Management",
      description:
        "Train farm personnel regarding safe use of non-protein nitrogen supplements."
    }

  ],

  prognosis:
    "Prognosis depends on the amount of urea consumed and speed of intervention. Mild cases treated immediately may recover completely, while severe hyperammonemia with seizures or respiratory failure often results in death.",

  strengtheningEvidence: [

    "Known urea exposure",

    "Sudden onset after feeding",

    "Neurological signs with salivation",

    "Rapid response to rumen acidification therapy"

  ],

  weakeningEvidence: [

    "No urea exposure",

    "Chronic neurological disease",

    "Alternative poisoning identified"

  ],

  classicFindings: [

    "Excessive salivation",

    "Muscle tremors",

    "Bloat",

    "Convulsions",

    "Sudden death"

  ],

  ruleOutFindings: [

    "Nitrate poisoning",

    "Hydrogen cyanide poisoning",

    "Organophosphate poisoning",

    "Hypomagnesemia",

    "Tetanus"

  ],

};