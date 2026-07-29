import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineAcuteHemorrhagicDiarrheaSyndrome: DiseaseCard = {
  id: "canine-acute-hemorrhagic-diarrhea-syndrome-dog",

  title: "Canine Acute Hemorrhagic Diarrhea Syndrome (AHDS)",

  description:
    "A sudden-onset gastrointestinal disorder characterized by severe hemorrhagic diarrhea, fluid loss, hemoconcentration, and risk of hypovolemic shock.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "AHDS",
    "Hemorrhagic Gastroenteritis",
    "Acute Hemorrhagic Diarrhea",
    "Acute Hemorrhagic Diarrhea Syndrome",
  ],

  overview:
    "Acute hemorrhagic diarrhea syndrome is characterized by acute onset of bloody diarrhea, vomiting, dehydration, and marked gastrointestinal fluid loss. The exact cause remains unclear, but disruption of intestinal barrier function and bacterial toxin involvement are suspected. Dogs can deteriorate rapidly due to severe fluid loss and hemoconcentration. Early fluid therapy and supportive management are essential.",

  clinicalProblems: [

    "Severe bloody diarrhea",
    "Dehydration",
    "Hypovolemia",
    "Hemoconcentration",
    "Vomiting",
    "Electrolyte imbalance",
    "Shock risk",
    "Abdominal discomfort"

  ],

  workflow: [

    {
      id: "emergency-assessment",
      step: 1,
      title: "Emergency Assessment",
      description:
        "Evaluate perfusion, hydration, cardiovascular status, and severity of fluid loss."
    },

    {
      id: "rule-out-differentials",
      step: 2,
      title: "Rule Out Major Differentials",
      description:
        "Exclude parvovirus, intestinal obstruction, pancreatitis, toxins, and coagulopathies."
    },

    {
      id: "diagnostic-evaluation",
      step: 3,
      title: "Diagnostic Evaluation",
      description:
        "Perform laboratory testing and imaging based on severity."
    },

    {
      id: "fluid-resuscitation",
      step: 4,
      title: "Fluid Resuscitation",
      description:
        "Restore circulation and correct dehydration."
    },

    {
      id: "monitoring",
      step: 5,
      title: "Monitoring",
      description:
        "Monitor hydration, packed cell volume, electrolytes, and clinical response."
    }

  ],

  diagnostics: [

    {
      id: "physical-examination",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Evaluates dehydration, perfusion, abdominal pain, and shock."
    },

    {
      id: "cbc",
      name: "Complete Blood Count",
      priority: "Essential",
      reason:
        "Detects hemoconcentration and inflammatory changes."
    },

    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Evaluates electrolyte abnormalities and systemic effects."
    },

    {
      id: "pcv-ts",
      name: "Packed Cell Volume and Total Solids",
      priority: "Essential",
      reason:
        "Helps identify hemoconcentration and fluid loss."
    },

    {
      id: "fecal-testing",
      name: "Fecal Examination and Infectious Testing",
      priority: "Recommended",
      reason:
        "Rules out parasitic and infectious causes."
    },

    {
      id: "abdominal-imaging",
      name: "Abdominal Radiography or Ultrasound",
      priority: "Conditional",
      reason:
        "Excludes obstruction and other abdominal pathology."
    }

  ],

  drugCategories: [

    {
      category: "Fluid Therapy",
      indication: "Hypovolemia and dehydration",
      reason:
        "Restores circulating volume and tissue perfusion."
    },

    {
      category: "Antiemetic",
      indication: "Vomiting",
      reason:
        "Controls nausea and prevents further fluid loss."
    },

    {
      category: "Analgesic",
      indication: "Abdominal discomfort",
      reason:
        "Improves patient comfort."
    },

    {
      category: "Antibiotic",
      indication: "Selected severe cases",
      reason:
        "Considered when bacterial translocation or sepsis risk exists."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "maropitant",
      priority: "Supportive",
      category: "Antiemetic",
    },

    {
      drugId: "ondansetron",
      priority: "Supportive",
      category: "Antiemetic",
    },

    {
      drugId: "buprenorphine",
      priority: "Conditional",
      category: "Analgesic",
    }

  ],

  stabilization: [

    "Rapidly assess cardiovascular perfusion.",
    "Initiate intravenous fluid therapy.",
    "Correct dehydration and electrolyte abnormalities.",
    "Control vomiting.",
    "Monitor for shock and systemic deterioration."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Sudden onset bloody diarrhea", weight: 50 },

      { finding: "Acute vomiting", weight: 35 },

      { finding: "Rapid progression of illness", weight: 40 },

      { finding: "Small breed predisposition", weight: 20 }

    ],

    clinicalSigns: [

      { finding: "Profuse hemorrhagic diarrhea", weight: 50 },

      { finding: "Vomiting", weight: 35 },

      { finding: "Dehydration", weight: 45 },

      { finding: "Lethargy", weight: 30 },

      { finding: "Abdominal discomfort", weight: 25 }

    ],

    biochemistry: [

      { finding: "Hemoconcentration", weight: 50 },

      { finding: "Electrolyte abnormalities", weight: 25 },

      { finding: "Hypoproteinemia", weight: 25 }

    ],

    imaging: [

      { finding: "No evidence of intestinal obstruction", weight: 20 }

    ],

    supports: [

      { finding: "Acute bloody diarrhea with rapid onset", weight: 50 },

      { finding: "Marked hemoconcentration", weight: 50 },

      { finding: "Rapid improvement with fluid therapy", weight: 35 }

    ],

    against: [

      { finding: "Positive parvovirus test", weight: -40 },

      { finding: "Foreign body obstruction", weight: -45 },

      { finding: "Severe persistent abdominal pain", weight: -30 },

      { finding: "Chronic diarrhea history", weight: -25 }

    ],

  },

  monitoring: [

    {
      id:"pcv",
      parameter:
        "Packed cell volume and total solids",
      frequency:
        "Repeated during hospitalization",
      reason:
        "Tracks dehydration and response to fluids."
    },

    {
      id:"hydration",
      parameter:
        "Hydration and perfusion status",
      frequency:
        "Frequent assessment",
      reason:
        "Detects shock development."
    },

    {
      id:"stool",
      parameter:
        "Frequency and severity of diarrhea",
      frequency:
        "Daily",
      reason:
        "Evaluates gastrointestinal recovery."
    }

  ],

  precautions: [

    {
      id:"shock",
      title:
        "Risk of Hypovolemic Shock",
      description:
        "Severe fluid loss can rapidly compromise circulation."
    },

    {
      id:"differentials",
      title:
        "Exclude Infectious and Surgical Causes",
      description:
        "Bloody diarrhea may occur with parvovirus, obstruction, toxins, and other serious diseases."
    }

  ],

  prognosis:
    "With early aggressive fluid therapy and supportive care, many dogs recover rapidly. Prognosis worsens with shock, severe dehydration, or concurrent disease.",

  strengtheningEvidence: [

    "Acute onset bloody diarrhea",

    "Marked hemoconcentration",

    "Rapid dehydration",

    "Vomiting",

    "Improvement with fluid therapy"

  ],

  weakeningEvidence: [

    "Chronic gastrointestinal signs",

    "Foreign body obstruction",

    "Positive infectious disease testing",

    "Severe abdominal pain",

    "Progressive deterioration"

  ],

  classicFindings: [

    "Sudden bloody diarrhea",

    "Vomiting",

    "Hemoconcentration",

    "Dehydration",

    "Small breed dog"

  ],

  ruleOutFindings: [

    "Canine parvovirus infection",

    "Intestinal foreign body",

    "Pancreatitis",

    "Intestinal parasites",

    "Coagulopathy"

  ],

};