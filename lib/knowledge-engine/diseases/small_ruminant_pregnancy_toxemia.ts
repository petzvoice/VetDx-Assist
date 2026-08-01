import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantPregnancyToxemia: DiseaseCard = {
  id: "small-ruminant-pregnancy-toxemia",

  title: "Pregnancy Toxemia",

  description:
    "A metabolic disease of late pregnancy in ewes and does caused by negative energy balance, resulting in excessive fat mobilization, ketone body production, hypoglycemia, hepatic lipidosis, neurological dysfunction, and potentially death if untreated.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Twin Lamb Disease",
    "Twin Kid Disease",
    "Ketosis of Pregnancy",
    "Ovine Pregnancy Toxemia",
    "Caprine Pregnancy Toxemia",
  ],

  overview:
    "Pregnancy toxemia occurs during the last 2–6 weeks of gestation, particularly in females carrying multiple fetuses or those with inadequate energy intake. Progressive negative energy balance leads to excessive mobilization of body fat, hepatic lipidosis, ketogenesis, hypoglycemia, and metabolic acidosis. Prompt diagnosis and aggressive treatment are essential to improve survival of both dam and fetuses.",

  clinicalProblems: [

    "Negative energy balance",
    "Ketosis",
    "Hypoglycemia",
    "Hepatic lipidosis",
    "Neurological dysfunction",
    "Recumbency",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess stage of gestation, number of fetuses, nutritional management, body condition score, and recent feed intake."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate mentation, appetite, neurological status, hydration, body condition, and fetal viability."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Measure blood glucose, ketone concentrations, serum biochemistry, and perform ultrasonography when indicated."
    },

    {
      id: "management",
      step: 4,
      title: "Emergency Management",
      description:
        "Correct metabolic abnormalities, provide energy supplementation, supportive care, and consider induction of parturition or cesarean section when appropriate."
    }

  ],

  diagnostics: [

    {
      id: "blood-glucose",
      name: "Blood Glucose",
      priority: "Essential",
      reason:
        "Identifies hypoglycemia associated with pregnancy toxemia."
    },

    {
      id: "ketone-testing",
      name: "Blood or Urine Ketones",
      priority: "Essential",
      reason:
        "Confirms ketosis."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates liver function, electrolyte abnormalities, and metabolic status."
    },

    {
      id: "ultrasonography",
      name: "Pregnancy Ultrasonography",
      priority: "Recommended",
      reason:
        "Determines fetal number, viability, and stage of gestation."
    }

  ],

  drugCategories: [

    {
      category: "Energy Supplements",
      indication: "Negative energy balance",
      reason:
        "Provides rapidly available energy and reduces ketone production."
    },

    {
      category: "Intravenous Fluids",
      indication: "Hypoglycemia and dehydration",
      reason:
        "Corrects metabolic disturbances and restores hydration."
    },

    {
      category: "Vitamin Therapy",
      indication: "Supportive management",
      reason:
        "Supports hepatic metabolism and recovery."
    },

    {
      category: "NSAIDs",
      indication: "Periparturient supportive care",
      reason:
        "Used when clinically indicated."

    }

  ],

  recommendedDrugs: [

    {
      drugId: "propylene-glycol",
      priority: "First Line",
      category: "Supplement"
    },

    {
      drugId: "dextrose",
      priority: "Emergency",
      category: "Fluid Therapy"
    },

    {
      drugId: "thiamine",
      priority: "Supportive",
      category: "Vitamin"
    }

  ],

  stabilization: [

    "Correct hypoglycemia immediately.",
    "Administer oral propylene glycol when appropriate.",
    "Provide intravenous fluids and electrolyte support.",
    "Offer highly palatable energy-rich feed.",
    "Reduce stress and provide comfortable housing.",
    "Consider induction of parturition or cesarean section if indicated."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Late pregnancy with multiple fetuses",
        weight: 100
      },

      {
        finding: "Reduced feed intake",
        weight: 95
      },

      {
        finding: "Overconditioned or underconditioned dam",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Anorexia",
        weight: 90
      },

      {
        finding: "Depression",
        weight: 90
      },

      {
        finding: "Blindness or neurological abnormalities",
        weight: 85
      },

      {
        finding: "Recumbency",
        weight: 95
      },

      {
        finding: "Acetone odor on breath",
        weight: 80
      }

    ],

    biochemistry: [

      {
        finding: "Hypoglycemia",
        weight: 100
      },

      {
        finding: "Elevated blood ketones",
        weight: 100
      },

      {
        finding: "Evidence of hepatic lipidosis",
        weight: 80
      }

    ],

    imaging: [

      {
        finding: "Multiple viable fetuses on ultrasonography",
        weight: 70
      }

    ],

    supports: [

      {
        finding: "Positive ketone test",
        weight: 100
      },

      {
        finding: "Late gestation with hypoglycemia",
        weight: 95
      }

    ],

    against: [

      {
        finding: "Normal blood glucose and ketone concentrations",
        weight: -80
      },

      {
        finding: "Alternative metabolic or neurological disease confirmed",
        weight: -70
      }

    ],

  },
    monitoring: [

    {
      id: "blood-glucose",
      parameter: "Blood glucose concentration",
      frequency: "Every 6–12 hours during acute treatment",
      reason:
        "Evaluates response to therapy and detects persistent hypoglycemia."
    },

    {
      id: "ketone-levels",
      parameter: "Blood or urine ketone concentration",
      frequency: "Daily",
      reason:
        "Monitors improvement in negative energy balance."
    },

    {
      id: "feed-intake",
      parameter: "Appetite, rumen fill, and feed intake",
      frequency: "Daily",
      reason:
        "Assesses recovery of energy intake."
    },

    {
      id: "neurological-status",
      parameter: "Mentation and ability to stand",
      frequency: "Every 6–12 hours in severe cases",
      reason:
        "Evaluates progression or resolution of neurological dysfunction."
    },

    {
      id: "fetal-status",
      parameter: "Fetal viability by ultrasonography",
      frequency: "As clinically indicated",
      reason:
        "Determines whether pregnancy should be maintained or terminated."

    }

  ],

  precautions: [

    {
      id: "nutrition",
      title: "Adequate Late-Gestation Nutrition",
      description:
        "Provide sufficient dietary energy during the final trimester, especially for animals carrying multiple fetuses."
    },

    {
      id: "body-condition",
      title: "Maintain Appropriate Body Condition",
      description:
        "Avoid both obesity and excessive thinness before and during pregnancy."
    },

    {
      id: "fetal-monitoring",
      title: "Identify Multiple Pregnancies",
      description:
        "Use ultrasonography to identify females carrying twins or triplets so nutritional management can be adjusted."
    },

    {
      id: "stress-reduction",
      title: "Reduce Stress",
      description:
        "Minimize transportation, overcrowding, feed deprivation, and other stressors during late gestation."

    }

  ],

  prognosis:
    "Prognosis is good when recognized early and treated aggressively. Animals with prolonged recumbency, severe hepatic lipidosis, advanced neurological signs, or fetal death have a guarded to poor prognosis.",

  strengtheningEvidence: [

    "Late gestation with multiple fetuses",

    "Hypoglycemia",

    "Positive blood or urine ketones",

    "Anorexia with neurological signs"

  ],

  weakeningEvidence: [

    "Normal glucose and ketone concentrations",

    "Not in late gestation",

    "Alternative metabolic disease confirmed"

  ],

  classicFindings: [

    "Anorexia",

    "Depression",

    "Ketonemia",

    "Recumbency",

    "Neurological abnormalities"

  ],

  ruleOutFindings: [

    "Hypocalcemia",

    "Listeriosis",

    "Polioencephalomalacia",

    "Ruminal acidosis",

    "Enterotoxemia",

    "Pregnancy-associated hypomagnesemia"

  ],

};

