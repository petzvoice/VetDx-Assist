import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineInflammatoryBowelDisease: DiseaseCard = {
  id: "canine-inflammatory-bowel-disease-dog",

  title: "Canine Inflammatory Bowel Disease (IBD)",

  description:
    "A chronic inflammatory disorder of the gastrointestinal tract characterized by persistent gastrointestinal signs caused by abnormal immune responses within the intestinal mucosa.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Inflammatory Bowel Disease",
    "Chronic Enteropathy",
    "Chronic Inflammatory Enteropathy",
    "Food Responsive Enteropathy",
    "Antibiotic Responsive Enteropathy",
  ],

  overview:
    "Inflammatory bowel disease is a group of chronic gastrointestinal disorders involving persistent inflammation of the intestinal mucosa. The exact cause is multifactorial and involves genetic susceptibility, immune dysregulation, intestinal microbiota, and dietary factors. Dogs commonly present with chronic vomiting, diarrhea, weight loss, and reduced appetite. Diagnosis requires exclusion of other gastrointestinal diseases and may involve intestinal biopsy for definitive confirmation.",

  clinicalProblems: [

    "Chronic vomiting",
    "Chronic diarrhea",
    "Weight loss",
    "Malabsorption",
    "Protein loss",
    "Reduced appetite",
    "Intestinal inflammation",
    "Poor body condition"

  ],

  workflow: [

    {
      id: "history-assessment",
      step: 1,
      title: "Chronic GI History Assessment",
      description:
        "Evaluate duration, frequency, dietary history, weight changes, and response to previous treatments."
    },

    {
      id: "rule-out-causes",
      step: 2,
      title: "Exclude Other Causes",
      description:
        "Rule out parasites, dietary intolerance, infections, pancreatic disease, and intestinal neoplasia."
    },

    {
      id: "diagnostic-evaluation",
      step: 3,
      title: "Diagnostic Evaluation",
      description:
        "Perform laboratory testing, imaging, and intestinal evaluation when indicated."
    },

    {
      id: "treatment-trial",
      step: 4,
      title: "Therapeutic Trial",
      description:
        "Evaluate response to dietary modification and appropriate medical therapy."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Monitor clinical response, nutritional status, and disease relapse."
    }

  ],

  diagnostics: [

    {
      id: "fecal-examination",
      name: "Fecal Examination",
      priority: "Essential",
      reason:
        "Rules out intestinal parasites and infectious causes."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates inflammation and systemic effects."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Assesses protein levels, organ function, and metabolic abnormalities."
    },

    {
      id: "cobalamin-folate",
      name: "Serum Cobalamin and Folate",
      priority: "Recommended",
      reason:
        "Evaluates intestinal absorption abnormalities."
    },

    {
      id: "abdominal-ultrasound",
      name: "Abdominal Ultrasound",
      priority: "Recommended",
      reason:
        "Evaluates intestinal wall changes and excludes structural disease."
    },

    {
      id: "intestinal-biopsy",
      name: "Intestinal Biopsy",
      priority: "Recommended",
      reason:
        "Provides histopathological confirmation of intestinal inflammation."
    }

  ],

  drugCategories: [

    {
      category: "Immunosuppressant",
      indication: "Immune-mediated intestinal inflammation",
      reason:
        "Reduces inflammatory immune response."
    },

    {
      category: "Dietary Management",
      indication: "Food-responsive enteropathy",
      reason:
        "Identifies and controls dietary triggers."
    },

    {
      category: "Probiotic Support",
      indication: "Intestinal microbiome support",
      reason:
        "May support intestinal health."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "prednisolone",
      priority: "First Line",
      category: "Immunosuppressant",
    },

    {
      drugId: "budesonide",
      priority: "Alternative",
      category: "Immunosuppressant",
    }

  ],

  stabilization: [

    "Correct dehydration if present.",
    "Provide nutritional support.",
    "Address severe protein loss.",
    "Manage vomiting and diarrhea.",
    "Identify and treat concurrent complications."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Chronic vomiting", weight: 40 },

      { finding: "Chronic diarrhea", weight: 45 },

      { finding: "Progressive weight loss", weight: 40 },

      { finding: "Poor response to routine treatment", weight: 30 },

      { finding: "Long-term gastrointestinal signs", weight: 45 }

    ],

    clinicalSigns: [

      { finding: "Weight loss", weight: 40 },

      { finding: "Chronic diarrhea", weight: 45 },

      { finding: "Vomiting", weight: 35 },

      { finding: "Poor body condition", weight: 35 },

      { finding: "Reduced appetite", weight: 25 }

    ],

    biochemistry: [

      { finding: "Hypoalbuminemia", weight: 40 },

      { finding: "Low cobalamin concentration", weight: 30 },

      { finding: "Protein-losing enteropathy", weight: 40 }

    ],

    imaging: [

      { finding: "Intestinal wall thickening on ultrasound", weight: 35 },

      { finding: "Abnormal intestinal layering", weight: 30 }

    ],

    supports: [

      { finding: "Chronic gastrointestinal signs", weight: 45 },

      { finding: "Exclusion of other causes", weight: 40 },

      { finding: "Response to dietary or immunosuppressive therapy", weight: 35 },

      { finding: "Intestinal biopsy showing inflammation", weight: 50 }

    ],

    against: [

      { finding: "Acute self-limiting diarrhea", weight: -30 },

      { finding: "Intestinal obstruction", weight: -45 },

      { finding: "Confirmed intestinal neoplasia", weight: -45 },

      { finding: "Parasitic infection identified", weight: -35 }

    ],

  },

  monitoring: [

    {
      id:"weight",
      parameter:
        "Body weight and body condition",
      frequency:
        "Regular follow-up",
      reason:
        "Detects nutritional improvement or deterioration."
    },

    {
      id:"stool",
      parameter:
        "Fecal quality and frequency",
      frequency:
        "Daily owner monitoring",
      reason:
        "Evaluates gastrointestinal response."
    },

    {
      id:"protein",
      parameter:
        "Serum albumin and protein levels",
      frequency:
        "Periodic monitoring",
      reason:
        "Detects protein loss complications."
    }

  ],

  precautions: [

    {
      id:"differentials",
      title:
        "Exclude Other Chronic Enteropathies",
      description:
        "Parasites, food intolerance, pancreatic disease, and neoplasia may mimic IBD."
    },

    {
      id:"long-term",
      title:
        "Requires Long-Term Management",
      description:
        "Relapses can occur and treatment response requires monitoring."
    }

  ],

  prognosis:
    "Prognosis varies depending on disease severity, response to dietary therapy, and presence of complications such as protein-losing enteropathy.",

  strengtheningEvidence: [

    "Chronic vomiting",

    "Chronic diarrhea",

    "Weight loss",

    "Hypoalbuminemia",

    "Intestinal inflammation on biopsy"

  ],

  weakeningEvidence: [

    "Acute gastrointestinal disease",

    "Foreign body obstruction",

    "Parasites identified",

    "Intestinal tumor",

    "Normal intestinal evaluation"

  ],

  classicFindings: [

    "Chronic GI signs",

    "Weight loss",

    "Poor body condition",

    "Low albumin",

    "Chronic diarrhea"

  ],

  ruleOutFindings: [

    "Intestinal parasites",

    "Food intolerance",

    "Pancreatitis",

    "Exocrine pancreatic insufficiency",

    "Gastrointestinal lymphoma"

  ],

};