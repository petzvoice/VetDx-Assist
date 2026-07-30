import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineLungLobeTorsion: DiseaseCard = {
  id: "canine-lung-lobe-torsion-dog",

  title: "Canine Lung Lobe Torsion",

  description:
    "A life-threatening condition in which a lung lobe rotates around its bronchovascular pedicle, resulting in vascular obstruction, pulmonary congestion, and respiratory compromise.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Pulmonary Lobe Torsion",
    "Lung Torsion",
    "Pulmonary Torsion",
  ],

  overview:
    "Canine lung lobe torsion occurs when a pulmonary lobe twists around its bronchus and vascular supply, causing venous obstruction, congestion, edema, hemorrhage, and eventual necrosis. It may occur spontaneously or secondary to pleural effusion, trauma, thoracic surgery, diaphragmatic hernia, or pulmonary disease. The right middle lung lobe is most commonly affected.",

  clinicalProblems: [

    "Respiratory distress",
    "Tachypnea",
    "Pleural effusion",
    "Lethargy",
    "Exercise intolerance",
    "Cough",
    "Cyanosis",
    "Shock"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess respiratory status, oxygenation, cardiovascular stability, and stabilize before advanced diagnostics."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm lung lobe torsion using thoracic imaging and evaluate pleural effusion and pulmonary abnormalities."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Provide emergency stabilization while preparing for definitive surgical treatment."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory function, pleural effusion, oxygenation, and cardiovascular status."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Perform surgical lung lobectomy and monitor postoperative recovery."
    }

  ],

  diagnostics: [

    {
      id: "thoracic-radiography",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Identifies abnormal lung lobe appearance and pleural effusion."
    },

    {
      id: "thoracic-ct",
      name: "Thoracic CT",
      priority: "Recommended",
      reason:
        "Provides detailed evaluation of torsed lung lobe and surrounding structures."
    },

    {
      id: "thoracic-ultrasound",
      name: "Thoracic Ultrasound",
      priority: "Recommended",
      reason:
        "Assesses pleural effusion and guides thoracocentesis."
    },

    {
      id: "thoracocentesis",
      name: "Thoracocentesis",
      priority: "Recommended",
      reason:
        "Evaluates pleural fluid and improves respiratory function."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Assesses systemic inflammation and anesthetic risk."
    }

  ],

  drugCategories: [

    {
      category: "Oxygen Therapy",
      indication: "Respiratory distress",
      reason: "Improves oxygenation before surgery."
    },

    {
      category: "Analgesic",
      indication: "Thoracic pain",
      reason: "Provides pain control during stabilization."
    },

    {
      category: "Antibiotic",
      indication: "Perioperative management",
      reason: "Reduces risk of postoperative infection."
    },

    {
      category: "Fluid Therapy",
      indication: "Circulatory support",
      reason: "Maintains cardiovascular stability."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "butorphanol",
      priority: "Supportive",
      category: "Analgesic",
    },

    {
      drugId: "amoxicillin-clavulanate",
      priority: "Perioperative",
      category: "Antibiotic",
    },

    {
      drugId: "lactated-ringers-solution",
      priority: "Supportive",
      category: "Fluid Therapy",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation immediately.",
    "Perform thoracocentesis if significant pleural effusion is present.",
    "Stabilize cardiovascular function before anesthesia.",
    "Prepare for emergency surgical lung lobectomy."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Acute respiratory distress", weight: 35 },

      { finding: "Pleural effusion", weight: 35 },

      { finding: "Recent thoracic trauma or surgery", weight: 25 },

    ],

    clinicalSigns: [

      { finding: "Absent lung sounds", weight: 35 },

      { finding: "Tachypnea", weight: 40 },

      { finding: "Respiratory distress", weight: 45 },

      { finding: "Cyanosis", weight: 35 },

    ],

    biochemistry: [

      { finding: "Inflammatory leukogram", weight: 20 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Characteristic thoracic radiographs", weight: 45 },

      { finding: "CT confirmation of lung lobe torsion", weight: 50 },

      { finding: "Hemorrhagic pleural effusion", weight: 35 },

    ],

    against: [

      { finding: "Normal thoracic imaging", weight: -45 },

      { finding: "Alternative confirmed respiratory disease", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"respiratory",
      parameter:
        "Respiratory rate and effort",
      frequency:
        "Continuous during hospitalization",
      reason:
        "Detects worsening respiratory compromise."
    },

    {
      id:"oxygenation",
      parameter:
        "Oxygen saturation",
      frequency:
        "Continuous",
      reason:
        "Evaluates response to stabilization."
    },

    {
      id:"pleural-fluid",
      parameter:
        "Pleural fluid recurrence",
      frequency:
        "Postoperative and follow-up",
      reason:
        "Detects postoperative complications."
    }

  ],

  precautions: [

    {
      id:"surgery",
      title:
        "Surgical Emergency",
      description:
        "Definitive treatment requires lung lobectomy; delays increase the risk of necrosis and death."
    },

    {
      id:"thoracocentesis",
      title:
        "Careful Thoracocentesis",
      description:
        "Perform thoracocentesis carefully to improve ventilation while minimizing complications."
    }

  ],

  prognosis:
    "Prognosis is generally good following timely surgical lung lobectomy in uncomplicated cases. Delayed diagnosis, severe necrosis, septic complications, or cardiovascular instability worsen the prognosis.",

  strengtheningEvidence: [

    "Pleural effusion",

    "Acute respiratory distress",

    "Characteristic thoracic radiographs",

    "CT confirmation",

    "Hemorrhagic pleural effusion",

    "Right middle lung lobe involvement"

  ],

  weakeningEvidence: [

    "Normal thoracic imaging",

    "Normal pulmonary anatomy",

    "Alternative confirmed respiratory disease",

    "No pleural abnormalities",

    "Normal CT findings"

  ],

  classicFindings: [

    "Acute respiratory distress",

    "Pleural effusion",

    "Right middle lung lobe involvement",

    "Hemorrhagic pleural fluid",

    "Tachypnea",

    "Lung lobe torsion on imaging"

  ],

  ruleOutFindings: [

    "Pleural effusion",

    "Pneumonia",

    "Pulmonary neoplasia",

    "Pulmonary abscess",

    "Diaphragmatic hernia"

  ],

};