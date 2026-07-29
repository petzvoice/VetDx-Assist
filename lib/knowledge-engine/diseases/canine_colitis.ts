import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineColitis: DiseaseCard = {
  id: "canine-colitis-dog",

  title: "Canine Colitis",

  description:
    "Inflammation of the large intestine characterized by frequent small-volume diarrhea, mucus, fresh blood in feces, and increased urgency to defecate.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Large Bowel Diarrhea",
    "Inflammatory Colitis",
    "Acute Colitis",
    "Chronic Colitis",
  ],

  overview:
    "Colitis is an inflammatory disorder affecting the colon and is a common cause of large bowel diarrhea in dogs. Causes include dietary changes, stress, intestinal parasites, bacterial imbalance, immune-mediated disease, and chronic inflammatory disorders. Clinical signs differ from small intestinal disease, with affected dogs typically showing frequent defecation, tenesmus, mucus, and fresh blood in stool. Diagnosis focuses on identifying underlying causes and differentiating from other gastrointestinal diseases.",

  clinicalProblems: [

    "Large bowel diarrhea",
    "Colonic inflammation",
    "Tenesmus",
    "Mucus production",
    "Hematochezia",
    "Abdominal discomfort",
    "Altered intestinal microbiota"

  ],

  workflow: [

    {
      id: "clinical-assessment",
      step: 1,
      title: "Clinical Assessment",
      description:
        "Determine whether diarrhea is from the large intestine and evaluate severity."
    },

    {
      id: "history-evaluation",
      step: 2,
      title: "History Evaluation",
      description:
        "Assess diet changes, stress events, parasite exposure, and duration of signs."
    },

    {
      id: "diagnostic-testing",
      step: 3,
      title: "Diagnostic Testing",
      description:
        "Investigate infectious, parasitic, dietary, and inflammatory causes."
    },

    {
      id: "treatment",
      step: 4,
      title: "Treatment Management",
      description:
        "Address underlying cause and provide gastrointestinal support."
    },

    {
      id: "monitoring",
      step: 5,
      title: "Monitoring",
      description:
        "Evaluate stool quality, frequency, and recurrence."
    }

  ],

  diagnostics: [

    {
      id: "fecal-examination",
      name: "Fecal Examination",
      priority: "Essential",
      reason:
        "Detects intestinal parasites and infectious causes."
    },

    {
      id: "fecal-culture",
      name: "Fecal Microbiological Testing",
      priority: "Conditional",
      reason:
        "Evaluates bacterial causes in selected cases."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates inflammation and systemic involvement."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Assesses systemic health and concurrent disease."
    },

    {
      id: "colonoscopy",
      name: "Colonoscopy with Biopsy",
      priority: "Recommended",
      reason:
        "Evaluates chronic colitis and intestinal mucosal changes."
    }

  ],

  drugCategories: [

    {
      category: "Dietary Management",
      indication: "Diet-responsive colitis",
      reason:
        "Supports intestinal recovery and identifies dietary triggers."
    },

    {
      category: "Antiparasitic Therapy",
      indication: "Parasitic colitis",
      reason:
        "Treats identified intestinal parasites."
    },

    {
      category: "Anti-inflammatory Therapy",
      indication: "Chronic inflammatory colitis",
      reason:
        "Reduces intestinal inflammation when indicated."
    },

    {
      category: "Probiotic Support",
      indication: "Microbiome imbalance",
      reason:
        "Supports healthy intestinal flora."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "fenbendazole",
      priority: "Conditional",
      category: "Antiparasitic",
    },

    {
      drugId: "prednisolone",
      priority: "Conditional",
      category: "Anti-inflammatory",
    }

  ],

  stabilization: [

    "Maintain hydration status.",
    "Correct electrolyte abnormalities if present.",
    "Provide appropriate dietary management.",
    "Identify and treat infectious or parasitic causes.",
    "Monitor stool frequency and character."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Frequent defecation", weight: 40 },

      { finding: "Dietary change", weight: 35 },

      { finding: "Stress event", weight: 30 },

      { finding: "Chronic intermittent diarrhea", weight: 40 },

      { finding: "Parasite exposure risk", weight: 30 }

    ],

    clinicalSigns: [

      { finding: "Small-volume frequent diarrhea", weight: 50 },

      { finding: "Fresh blood in feces", weight: 45 },

      { finding: "Mucus in stool", weight: 45 },

      { finding: "Tenesmus", weight: 50 },

      { finding: "Urgency to defecate", weight: 40 }

    ],

    biochemistry: [

      { finding: "Usually mild or normal blood abnormalities", weight: 15 },

      { finding: "Inflammatory changes in severe cases", weight: 20 }

    ],

    imaging: [

      { finding: "Colonic wall thickening on ultrasound", weight: 30 }

    ],

    supports: [

      { finding: "Large bowel diarrhea pattern", weight: 50 },

      { finding: "Tenesmus with mucus and blood", weight: 50 },

      { finding: "Colonic inflammation on biopsy", weight: 50 }

    ],

    against: [

      { finding: "Large-volume watery diarrhea only", weight: -25 },

      { finding: "Severe vomiting as primary sign", weight: -30 },

      { finding: "Intestinal obstruction", weight: -40 },

      { finding: "Normal colon evaluation", weight: -35 }

    ],

  },

  monitoring: [

    {
      id:"stool",
      parameter:
        "Stool frequency and consistency",
      frequency:
        "Daily",
      reason:
        "Evaluates response to treatment."
    },

    {
      id:"blood",
      parameter:
        "Blood or mucus in feces",
      frequency:
        "Daily",
      reason:
        "Tracks resolution of colonic inflammation."
    },

    {
      id:"weight",
      parameter:
        "Body weight",
      frequency:
        "Regular follow-up",
      reason:
        "Detects chronic disease effects."
    }

  ],

  precautions: [

    {
      id:"parasites",
      title:
        "Rule Out Parasitic Causes",
      description:
        "Parasites such as whipworms may mimic chronic colitis."
    },

    {
      id:"chronic",
      title:
        "Investigate Chronic Cases",
      description:
        "Persistent colitis may indicate inflammatory bowel disease or neoplasia."
    }

  ],

  prognosis:
    "Prognosis is generally good for uncomplicated dietary or stress-related colitis. Chronic inflammatory or infectious causes require targeted management.",

  strengtheningEvidence: [

    "Frequent small-volume diarrhea",

    "Tenesmus",

    "Mucus in feces",

    "Fresh blood in stool",

    "Colon inflammation"

  ],

  weakeningEvidence: [

    "Large-volume small intestinal diarrhea",

    "Persistent vomiting",

    "Intestinal obstruction",

    "No colonic signs"

  ],

  classicFindings: [

    "Frequent defecation",

    "Mucus",

    "Fresh blood",

    "Tenesmus",

    "Small stool volume"

  ],

  ruleOutFindings: [

    "Canine parvovirus infection",

    "Intestinal parasites",

    "Inflammatory bowel disease",

    "Food intolerance",

    "Colonic neoplasia"

  ],

};