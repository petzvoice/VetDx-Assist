import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineLaryngealParalysis: DiseaseCard = {
  id: "canine-laryngeal-paralysis-dog",

  title: "Canine Laryngeal Paralysis",

  description:
    "A progressive upper airway disorder caused by dysfunction of the laryngeal muscles and nerves, resulting in impaired airway opening during respiration.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Laryngeal Paralysis",
    "Geriatric Onset Laryngeal Paralysis Polyneuropathy",
    "Laryngeal Dysfunction",
  ],

  overview:
    "Canine laryngeal paralysis is a condition in which the arytenoid cartilages fail to abduct normally during inspiration due to dysfunction of the recurrent laryngeal nerves and associated muscles. It is commonly seen in older large breed dogs and may occur as part of a generalized polyneuropathy. Progressive airway obstruction can lead to exercise intolerance, inspiratory noise, respiratory distress, and heat intolerance.",

  clinicalProblems: [

    "Inspiratory stridor",
    "Exercise intolerance",
    "Respiratory distress",
    "Voice change",
    "Heat intolerance",
    "Coughing",
    "Collapse episodes",
    "Aspiration pneumonia"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess airway patency, respiratory effort, oxygenation, and severity of upper airway obstruction."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform airway examination and diagnostic testing to confirm laryngeal dysfunction and identify associated disease."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Provide supportive airway management, reduce stress, and address complications such as aspiration pneumonia."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory deterioration, aspiration events, and progression of neurological dysfunction."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Consider surgical intervention in appropriate patients and manage chronic airway limitations."
    }

  ],

  diagnostics: [

    {
      id: "physical-exam",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Evaluates respiratory effort, inspiratory noise, and neurological abnormalities."
    },

    {
      id: "laryngeal-exam",
      name: "Laryngoscopy Examination",
      priority: "Essential",
      reason:
        "Confirms reduced arytenoid movement during inspiration."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Recommended",
      reason:
        "Evaluates aspiration pneumonia and concurrent pulmonary disease."
    },

    {
      id: "neurologic-evaluation",
      name: "Neurological Examination",
      priority: "Recommended",
      reason:
        "Assesses concurrent peripheral neuropathy."
    },

    {
      id: "bloodwork",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates systemic health before anesthesia or surgery."
    }

  ],

  drugCategories: [
    {
      category: "Sedative",
      indication: "Respiratory distress associated with anxiety",
      reason: "Reduces stress-induced worsening of airway obstruction."
    },
    {
      category: "Anti-inflammatory",
      indication: "Airway inflammation",
      reason: "May reduce secondary inflammatory changes."
    },
    {
      category: "Antibiotic",
      indication: "Aspiration pneumonia",
      reason: "Treats secondary bacterial pulmonary infection."
    },
    {
      category: "Oxygen Therapy",
      indication: "Hypoxemia",
      reason: "Improves oxygen delivery during respiratory compromise."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "butorphanol",
      priority: "Supportive",
      category: "Sedative",
    },
    {
      drugId: "amoxicillin-clavulanate",
      priority: "First Line",
      category: "Antibiotic",
    },
    {
      drugId: "prednisolone",
      priority: "Adjunctive",
      category: "Anti-inflammatory",
    },
  ],

  stabilization: [
    "Provide oxygen supplementation during respiratory distress.",
    "Minimize excitement and physical stress.",
    "Cool overheated patients carefully.",
    "Evaluate and treat aspiration pneumonia if present."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Older large breed dog", weight: 40 },
      { finding: "Progressive exercise intolerance", weight: 35 },
      { finding: "Heat intolerance", weight: 30 },
    ],

    clinicalSigns: [
      { finding: "Inspiratory stridor", weight: 45 },
      { finding: "Voice change", weight: 30 },
      { finding: "Respiratory distress", weight: 40 },
      { finding: "Collapse episodes", weight: 25 },
    ],

    biochemistry: [
      { finding: "Usually non-specific findings", weight: 10 },
    ],

    urinalysis: [

    ],

    supports: [
      { finding: "Reduced arytenoid movement on laryngoscopy", weight: 50 },
      { finding: "Aspiration pneumonia", weight: 30 },
      { finding: "Compatible breed and age", weight: 35 },
    ],

    against: [
      { finding: "Normal laryngeal movement", weight: -50 },
      { finding: "Primary pulmonary disease only", weight: -25 },
    ],
  },

  monitoring: [

    {
      id:"respiratory",
      parameter:
        "Respiratory effort and airway noise",
      frequency:
        "Daily or as clinically indicated",
      reason:
        "Detects worsening airway obstruction."
    },

    {
      id:"aspiration",
      parameter:
        "Signs of aspiration pneumonia",
      frequency:
        "Regular monitoring",
      reason:
        "Identifies pulmonary complications early."
    },

    {
      id:"exercise",
      parameter:
        "Exercise tolerance",
      frequency:
        "At follow-up visits",
      reason:
        "Assesses functional improvement."
    }

  ],

  precautions: [

    {
      id:"heat-stress",
      title:
        "Heat Stress Risk",
      description:
        "Affected dogs have reduced ability to cool themselves and should avoid high temperatures."
    },

    {
      id:"aspiration-risk",
      title:
        "Aspiration Risk",
      description:
        "Monitor for swallowing dysfunction and aspiration pneumonia."
    }

  ],

  prognosis:
    "The prognosis depends on severity and underlying neurological involvement. Mild cases may be managed conservatively, while severe airway obstruction often requires surgical correction and carries a risk of aspiration complications.",

  strengtheningEvidence: [

    "Inspiratory stridor",

    "Older large breed dog",

    "Reduced arytenoid movement on laryngoscopy",

    "Exercise intolerance",

    "Voice change",

    "Aspiration pneumonia",

    "Progressive clinical signs"

  ],

  weakeningEvidence: [

    "Normal laryngeal examination",

    "Acute infectious respiratory disease",

    "Primary lower airway disease",

    "Alternative confirmed cause of respiratory distress",

    "No inspiratory abnormalities"

  ],

  classicFindings: [

    "Older large breed dog",

    "Inspiratory noise",

    "Exercise intolerance",

    "Heat intolerance",

    "Voice change",

    "Laryngeal paralysis on examination",

    "Aspiration pneumonia"

  ],

  ruleOutFindings: [

    "Tracheal collapse",

    "Brachycephalic airway syndrome",

    "Pneumonia",

    "Congestive heart failure",

    "Upper airway foreign body"

  ],

};