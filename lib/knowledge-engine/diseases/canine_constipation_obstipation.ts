import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineConstipationObstipation: DiseaseCard = {
  id: "canine-constipation-obstipation-dog",

  title: "Canine Constipation / Obstipation",

  description:
    "A gastrointestinal disorder characterized by difficult, infrequent, or incomplete defecation caused by accumulation of dry fecal material within the colon.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Constipation",
    "Obstipation",
    "Difficult Defecation",
    "Fecal Retention",
  ],

  overview:
    "Constipation occurs when fecal material becomes retained in the colon due to reduced movement, dehydration, dietary factors, pain, obstruction, or neurological abnormalities. Obstipation represents severe constipation where feces become extremely dry and difficult to pass. Chronic constipation may contribute to megacolon development. Diagnosis involves history, physical examination, rectal evaluation, and imaging to identify underlying causes.",

  clinicalProblems: [

    "Difficulty defecating",
    "Fecal retention",
    "Colon distension",
    "Abdominal discomfort",
    "Dehydration",
    "Reduced fecal output",
    "Megacolon risk"

  ],

  workflow: [

    {
      id: "history-assessment",
      step: 1,
      title: "History Assessment",
      description:
        "Evaluate duration of constipation, diet, water intake, medications, and previous episodes."
    },

    {
      id: "physical-examination",
      step: 2,
      title: "Physical Examination",
      description:
        "Assess hydration, abdominal palpation, and rectal abnormalities."
    },

    {
      id: "diagnostic-evaluation",
      step: 3,
      title: "Diagnostic Evaluation",
      description:
        "Identify mechanical obstruction, metabolic causes, or neurological disorders."
    },

    {
      id: "fecal-removal",
      step: 4,
      title: "Fecal Removal and Management",
      description:
        "Relieve fecal accumulation and restore normal defecation."
    },

    {
      id: "prevention",
      step: 5,
      title: "Long-Term Prevention",
      description:
        "Address underlying causes and prevent recurrence."
    }

  ],

  diagnostics: [

    {
      id: "physical-examination",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Evaluates hydration, abdominal discomfort, and systemic disease."
    },

    {
      id: "rectal-examination",
      name: "Digital Rectal Examination",
      priority: "Essential",
      reason:
        "Assesses fecal impaction, masses, and rectal abnormalities."
    },

    {
      id: "abdominal-radiography",
      name: "Abdominal Radiography",
      priority: "Essential",
      reason:
        "Identifies fecal accumulation, colon enlargement, and obstruction."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates metabolic causes such as electrolyte abnormalities."
    },

    {
      id: "neurological-evaluation",
      name: "Neurological Evaluation",
      priority: "Conditional",
      reason:
        "Assesses possible nerve-related causes of defecation problems."
    }

  ],

  drugCategories: [

    {
      category: "Laxative Therapy",
      indication: "Fecal retention",
      reason:
        "Softens stool and facilitates passage."
    },

    {
      category: "Prokinetic Therapy",
      indication: "Reduced colonic motility",
      reason:
        "Improves intestinal movement when appropriate."
    },

    {
      category: "Dietary Management",
      indication: "Chronic constipation",
      reason:
        "Improves stool consistency and bowel function."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "lactulose",
      priority: "Supportive",
      category: "Laxative",
    }

  ],

  stabilization: [

    "Correct dehydration.",
    "Relieve severe fecal impaction when present.",
    "Identify and treat underlying cause.",
    "Provide appropriate dietary modification.",
    "Monitor recurrence."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Reduced frequency of defecation", weight: 45 },

      { finding: "Straining during defecation", weight: 45 },

      { finding: "History of previous constipation", weight: 35 },

      { finding: "Low water intake", weight: 25 },

      { finding: "Low fiber diet", weight: 25 }

    ],

    clinicalSigns: [

      { finding: "Tenesmus", weight: 45 },

      { finding: "Hard dry feces", weight: 50 },

      { finding: "Reduced fecal output", weight: 40 },

      { finding: "Abdominal discomfort", weight: 30 },

      { finding: "Fecal impaction", weight: 50 }

    ],

    biochemistry: [

      { finding: "Electrolyte abnormalities", weight: 20 },

      { finding: "Metabolic abnormalities contributing to constipation", weight: 25 }

    ],

    imaging: [

      { finding: "Colon filled with retained feces", weight: 50 },

      { finding: "Colonic dilation", weight: 40 }

    ],

    supports: [

      { finding: "Hard retained feces", weight: 50 },

      { finding: "Difficulty passing stool", weight: 45 },

      { finding: "Radiographic fecal accumulation", weight: 50 }

    ],

    against: [

      { finding: "Normal bowel movement", weight: -50 },

      { finding: "Acute bloody diarrhea", weight: -35 },

      { finding: "Primary vomiting without fecal signs", weight: -25 }

    ],

  },

  monitoring: [

    {
      id:"defecation",
      parameter:
        "Frequency and ease of defecation",
      frequency:
        "Daily",
      reason:
        "Evaluates treatment response."
    },

    {
      id:"stool",
      parameter:
        "Stool consistency",
      frequency:
        "Daily",
      reason:
        "Monitors improvement."
    },

    {
      id:"colon",
      parameter:
        "Colon size and fecal retention",
      frequency:
        "Follow-up when chronic",
      reason:
        "Detects progression toward megacolon."
    }

  ],

  precautions: [

    {
      id:"obstruction",
      title:
        "Rule Out Mechanical Obstruction",
      description:
        "Foreign bodies and masses can mimic constipation."
    },

    {
      id:"megacolon",
      title:
        "Monitor for Megacolon",
      description:
        "Chronic fecal retention can cause permanent colonic dysfunction."
    }

  ],

  prognosis:
    "Prognosis depends on the underlying cause. Simple constipation often responds well to management, while chronic obstipation or megacolon may require long-term therapy.",

  strengtheningEvidence: [

    "Hard dry feces",

    "Straining to defecate",

    "Reduced fecal output",

    "Fecal accumulation on imaging",

    "Fecal impaction"

  ],

  weakeningEvidence: [

    "Normal defecation",

    "Acute diarrhea",

    "No fecal retention",

    "Primary vomiting disorder"

  ],

  classicFindings: [

    "Tenesmus",

    "Hard feces",

    "Reduced defecation",

    "Colon fecal loading",

    "Abdominal discomfort"

  ],

  ruleOutFindings: [

    "Intestinal foreign body obstruction",

    "Megacolon",

    "Colonic tumor",

    "Neurological disease",

    "Pelvic canal narrowing"

  ],

};