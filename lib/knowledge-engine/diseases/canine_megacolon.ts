import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineMegacolon: DiseaseCard = {
  id: "canine-megacolon-dog",

  title: "Canine Megacolon",

  description:
    "A disorder characterized by persistent dilation and reduced motility of the colon resulting in severe fecal retention and chronic constipation.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Megacolon",
    "Colonic Inertia",
    "Functional Megacolon",
    "Chronic Obstipation",
  ],

  overview:
    "Megacolon is a condition where the colon becomes enlarged and loses its ability to effectively propel fecal material. It may develop secondary to chronic constipation, obstruction, neurological disorders, pelvic abnormalities, or idiopathic colonic dysfunction. Accumulation of feces causes progressive colonic dilation, worsening motility, and recurrent episodes of obstipation. Diagnosis relies on history, physical examination, and abdominal imaging.",

  clinicalProblems: [

    "Colonic dilation",
    "Chronic fecal retention",
    "Obstipation",
    "Reduced colonic motility",
    "Abdominal discomfort",
    "Dehydration",
    "Recurrent constipation"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Assessment",
      description:
        "Evaluate chronic constipation episodes, duration, previous treatments, and recurrence."
    },

    {
      id: "physical",
      step: 2,
      title: "Physical Examination",
      description:
        "Assess abdominal palpation, hydration, rectal abnormalities, and neurologic status."
    },

    {
      id: "imaging",
      step: 3,
      title: "Diagnostic Imaging",
      description:
        "Confirm colonic enlargement and evaluate possible underlying causes."
    },

    {
      id: "management",
      step: 4,
      title: "Management",
      description:
        "Relieve fecal accumulation and improve colonic function."
    },

    {
      id: "followup",
      step: 5,
      title: "Long-Term Monitoring",
      description:
        "Monitor recurrence and progression of colonic dysfunction."
    }

  ],

  diagnostics: [

    {
      id: "abdominal-radiography",
      name: "Abdominal Radiography",
      priority: "Essential",
      reason:
        "Demonstrates colonic enlargement and fecal accumulation."
    },

    {
      id: "rectal-examination",
      name: "Digital Rectal Examination",
      priority: "Essential",
      reason:
        "Evaluates fecal impaction, masses, and pelvic abnormalities."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Evaluates systemic effects and concurrent disease."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Identifies metabolic abnormalities contributing to constipation."
    },

    {
      id: "neurological-evaluation",
      name: "Neurological Evaluation",
      priority: "Conditional",
      reason:
        "Assesses neurological causes affecting colonic function."
    }

  ],

  drugCategories: [

    {
      category: "Laxative Therapy",
      indication: "Fecal retention",
      reason:
        "Softens feces and improves passage."
    },

    {
      category: "Prokinetic Therapy",
      indication: "Reduced colonic motility",
      reason:
        "Improves intestinal movement in selected cases."
    },

    {
      category: "Dietary Management",
      indication: "Long-term bowel support",
      reason:
        "Optimizes stool consistency and intestinal function."
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

    "Remove retained fecal material.",
    "Correct dehydration.",
    "Identify underlying cause.",
    "Provide long-term bowel management.",
    "Monitor recurrence of constipation."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Repeated constipation episodes", weight: 45 },

      { finding: "Chronic straining to defecate", weight: 45 },

      { finding: "Previous fecal impaction", weight: 40 },

      { finding: "Poor response to routine constipation therapy", weight: 35 }

    ],

    clinicalSigns: [

      { finding: "Obstipation", weight: 50 },

      { finding: "Hard retained feces", weight: 50 },

      { finding: "Abdominal discomfort", weight: 30 },

      { finding: "Reduced fecal output", weight: 40 },

      { finding: "Fecal impaction", weight: 50 }

    ],

    biochemistry: [

      { finding: "Electrolyte abnormalities", weight: 20 },

      { finding: "Metabolic cause identified", weight: 25 }

    ],

    imaging: [

      { finding: "Marked colonic dilation", weight: 60 },

      { finding: "Large fecal accumulation", weight: 50 }

    ],

    supports: [

      { finding: "Chronic constipation history", weight: 45 },

      { finding: "Radiographic colonic enlargement", weight: 60 },

      { finding: "Recurrent obstipation", weight: 50 }

    ],

    against: [

      { finding: "Acute diarrhea", weight: -40 },

      { finding: "Normal colon size", weight: -50 },

      { finding: "Single episode constipation", weight: -25 },

      { finding: "Intestinal obstruction as primary cause", weight: -35 }

    ],

  },

  monitoring: [

    {
      id:"defecation",
      parameter:
        "Defecation frequency",
      frequency:
        "Daily",
      reason:
        "Evaluates bowel function."
    },

    {
      id:"stool",
      parameter:
        "Stool consistency",
      frequency:
        "Daily",
      reason:
        "Monitors treatment effectiveness."
    },

    {
      id:"colon",
      parameter:
        "Colonic size",
      frequency:
        "Periodic imaging when indicated",
      reason:
        "Tracks progression or improvement."
    }

  ],

  precautions: [

    {
      id:"underlying",
      title:
        "Identify Underlying Cause",
      description:
        "Megacolon may result from obstruction, neurological disease, or chronic constipation."
    },

    {
      id:"recurrence",
      title:
        "Recurrence Risk",
      description:
        "Chronic cases may require lifelong management."
    }

  ],

  prognosis:
    "Prognosis depends on severity and underlying cause. Some cases respond to medical management, while severe irreversible colonic dysfunction may require surgical intervention.",

  strengtheningEvidence: [

    "Chronic constipation",

    "Repeated obstipation",

    "Marked colonic dilation",

    "Fecal retention",

    "Poor response to laxatives"

  ],

  weakeningEvidence: [

    "Normal colon size",

    "Acute diarrhea",

    "Temporary constipation episode",

    "No fecal accumulation"

  ],

  classicFindings: [

    "Chronic constipation",

    "Obstipation",

    "Large fecal mass",

    "Colonic enlargement",

    "Straining to defecate"

  ],

  ruleOutFindings: [

    "Intestinal foreign body obstruction",

    "Colonic tumor",

    "Pelvic canal narrowing",

    "Neurological disease",

    "Simple constipation"

  ],

};