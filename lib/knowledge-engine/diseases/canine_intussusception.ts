import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineIntussusception: DiseaseCard = {
  id: "canine-intussusception-dog",

  title: "Canine Intussusception",

  description:
    "A gastrointestinal emergency caused by telescoping of one segment of intestine into an adjacent segment, resulting in obstruction, impaired blood supply, and possible intestinal necrosis.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Intestinal Intussusception",
    "Bowel Telescoping",
    "Invagination of Intestine",
  ],

  overview:
    "Intussusception occurs when a proximal segment of intestine invaginates into a distal segment. This causes partial or complete intestinal obstruction and may compromise blood flow to the affected intestine. It is commonly associated with gastrointestinal inflammation, parasitism, foreign bodies, dietary changes, or intestinal masses. Young dogs are more commonly affected, but it can occur at any age. Early diagnosis is important because prolonged intussusception can lead to intestinal necrosis and perforation.",

  clinicalProblems: [

    "Mechanical intestinal obstruction",
    "Reduced intestinal blood supply",
    "Abdominal pain",
    "Vomiting",
    "Diarrhea",
    "Dehydration",
    "Intestinal necrosis risk",
    "Peritonitis"

  ],

  workflow: [

    {
      id: "clinical-assessment",
      step: 1,
      title: "Clinical Assessment",
      description:
        "Evaluate vomiting, diarrhea, abdominal pain, hydration, and severity."
    },

    {
      id: "identify-cause",
      step: 2,
      title: "Identify Predisposing Factors",
      description:
        "Investigate causes such as enteritis, parasites, foreign bodies, or masses."
    },

    {
      id: "diagnostic-imaging",
      step: 3,
      title: "Diagnostic Imaging",
      description:
        "Confirm intestinal telescoping and evaluate viability."
    },

    {
      id: "stabilization",
      step: 4,
      title: "Stabilization",
      description:
        "Correct dehydration, electrolyte abnormalities, and prepare for intervention."
    },

    {
      id: "surgical-management",
      step: 5,
      title: "Surgical Management",
      description:
        "Reduce intussusception and remove compromised intestine when necessary."
    }

  ],

  diagnostics: [

    {
      id: "physical-examination",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Evaluates abdominal pain, dehydration, and systemic compromise."
    },

    {
      id: "abdominal-ultrasound",
      name: "Abdominal Ultrasound",
      priority: "Essential",
      reason:
        "Identifies characteristic intestinal telescoping pattern."
    },

    {
      id: "abdominal-radiography",
      name: "Abdominal Radiography",
      priority: "Recommended",
      reason:
        "Evaluates intestinal obstruction patterns."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Recommended",
      reason:
        "Assesses inflammation and systemic response."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates dehydration and metabolic abnormalities."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Dehydration and shock prevention",
      reason:
        "Restores circulation before intervention."
    },

    {
      category: "Analgesic",
      indication: "Abdominal pain",
      reason:
        "Provides pain control during stabilization."
    },

    {
      category: "Antibiotic",
      indication: "Intestinal compromise or surgery",
      reason:
        "Reduces risk of bacterial complications."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "buprenorphine",
      priority: "Supportive",
      category: "Analgesic",
    }

  ],

  stabilization: [

    "Provide intravenous fluid therapy.",
    "Correct electrolyte disturbances.",
    "Control pain and vomiting.",
    "Assess intestinal viability.",
    "Prepare for surgical intervention if required."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Young dog", weight: 25 },

      { finding: "Recent gastrointestinal disease", weight: 35 },

      { finding: "Parasite exposure", weight: 25 },

      { finding: "Previous intestinal surgery", weight: 25 },

      { finding: "Acute onset vomiting", weight: 40 }

    ],

    clinicalSigns: [

      { finding: "Vomiting", weight: 45 },

      { finding: "Abdominal pain", weight: 40 },

      { finding: "Diarrhea", weight: 35 },

      { finding: "Lethargy", weight: 30 },

      { finding: "Palpable abdominal mass", weight: 50 }

    ],

    biochemistry: [

      { finding: "Dehydration-related abnormalities", weight: 25 },

      { finding: "Electrolyte imbalance", weight: 25 }

    ],

    imaging: [

      { finding: "Target sign on ultrasound", weight: 60 },

      { finding: "Intestinal obstruction pattern", weight: 40 },

      { finding: "Intestinal wall changes", weight: 35 }

    ],

    supports: [

      { finding: "Vomiting with abdominal pain", weight: 45 },

      { finding: "Ultrasound confirmation", weight: 60 },

      { finding: "Obstructive signs", weight: 45 },

      { finding: "Palpable intestinal mass", weight: 50 }

    ],

    against: [

      { finding: "Normal abdominal ultrasound", weight: -50 },

      { finding: "No vomiting or abdominal signs", weight: -35 },

      { finding: "Chronic uncomplicated diarrhea", weight: -25 },

      { finding: "Alternative diagnosis confirmed", weight: -35 }

    ],

  },

  monitoring: [

    {
      id:"vomiting",
      parameter:
        "Vomiting frequency",
      frequency:
        "Daily or continuous in hospitalized patients",
      reason:
        "Tracks obstruction severity and recovery."
    },

    {
      id:"pain",
      parameter:
        "Abdominal pain",
      frequency:
        "Regular assessment",
      reason:
        "Evaluates clinical progression."
    },

    {
      id:"postoperative",
      parameter:
        "Intestinal recovery after surgery",
      frequency:
        "Daily",
      reason:
        "Detects complications."
    }

  ],

  precautions: [

    {
      id:"necrosis",
      title:
        "Risk of Intestinal Necrosis",
      description:
        "Delayed treatment may result in loss of blood supply and intestinal tissue death."
    },

    {
      id:"recurrence",
      title:
        "Investigate Underlying Cause",
      description:
        "Recurrence can occur if the primary intestinal disorder is not addressed."
    }

  ],

  prognosis:
    "Prognosis depends on duration, intestinal viability, underlying cause, and whether complications such as perforation or peritonitis occur.",

  strengtheningEvidence: [

    "Acute vomiting",

    "Abdominal pain",

    "Palpable intestinal mass",

    "Ultrasound target sign",

    "Obstruction pattern"

  ],

  weakeningEvidence: [

    "Normal ultrasound",

    "No abdominal pain",

    "No vomiting",

    "Alternative gastrointestinal disease"

  ],

  classicFindings: [

    "Young dog",

    "Vomiting",

    "Abdominal pain",

    "Target sign on ultrasound",

    "Intestinal obstruction"

  ],

  ruleOutFindings: [

    "Intestinal foreign body",

    "Gastric dilatation-volvulus",

    "Pancreatitis",

    "Gastroenteritis",

    "Intestinal neoplasia"

  ],

};