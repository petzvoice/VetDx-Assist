import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const brachycephalicAirwaySyndrome: DiseaseCard = {
  id: "brachycephalic-airway-syndrome-dog",

  title: "Brachycephalic Airway Syndrome",

  description:
    "A group of upper airway abnormalities in brachycephalic dogs causing obstructed breathing, exercise intolerance, and heat intolerance.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "BAS",
    "Brachycephalic Obstructive Airway Syndrome",
    "BOAS",
  ],

  overview:
    "Brachycephalic airway syndrome is a collection of anatomical abnormalities affecting short-nosed dog breeds. It commonly includes stenotic nares, elongated soft palate, everted laryngeal saccules, and secondary airway changes. These abnormalities increase airway resistance and can lead to respiratory distress, exercise intolerance, heat intolerance, sleep-disordered breathing, and gastrointestinal complications.",

  clinicalProblems: [

    "Noisy breathing",
    "Stertor",
    "Exercise intolerance",
    "Heat intolerance",
    "Respiratory distress",
    "Snoring",
    "Syncope episodes",
    "Gastrointestinal reflux"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Evaluate airway obstruction, respiratory effort, oxygenation, and severity of clinical signs."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform airway examination and assess anatomical abnormalities contributing to obstruction."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Provide weight management, environmental control, and supportive airway therapy."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory deterioration, heat intolerance, gastrointestinal complications, and airway progression."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Consider corrective surgery and long-term management of airway and lifestyle factors."
    }

  ],

  diagnostics: [

    {
      id: "physical-exam",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Evaluates breathing pattern, airway noise, body condition, and exercise tolerance."
    },

    {
      id: "airway-examination",
      name: "Upper Airway Examination",
      priority: "Essential",
      reason:
        "Identifies anatomical abnormalities such as elongated soft palate and stenotic nares."
    },

    {
      id: "laryngoscopy",
      name: "Laryngoscopy",
      priority: "Recommended",
      reason:
        "Evaluates laryngeal structures and secondary airway changes."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Recommended",
      reason:
        "Assesses secondary respiratory complications."
    },

    {
      id: "endoscopy",
      name: "Upper Gastrointestinal Endoscopy",
      priority: "Recommended",
      reason:
        "Evaluates associated gastrointestinal abnormalities."
    }

  ],

  drugCategories: [
    {
      category: "Oxygen Therapy",
      indication: "Respiratory distress",
      reason: "Improves oxygenation during airway compromise."
    },
    {
      category: "Anti-inflammatory",
      indication: "Airway swelling",
      reason: "Reduces secondary airway inflammation."
    },
    {
      category: "Gastroprotectant",
      indication: "Gastroesophageal reflux",
      reason: "Manages associated gastrointestinal complications."
    },
    {
      category: "Sedative",
      indication: "Stress-related respiratory worsening",
      reason: "Reduces anxiety and respiratory effort."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "prednisolone",
      priority: "Adjunctive",
      category: "Anti-inflammatory",
    },
    {
      drugId: "omeprazole",
      priority: "Supportive",
      category: "Gastroprotectant",
    },
    {
      drugId: "butorphanol",
      priority: "Supportive",
      category: "Sedative",
    },
  ],

  stabilization: [
    "Provide oxygen supplementation during respiratory distress.",
    "Avoid heat exposure and excessive exercise.",
    "Minimize stress and excitement.",
    "Cool affected dogs carefully during overheating episodes."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Brachycephalic breed", weight: 50 },
      { finding: "Exercise intolerance", weight: 35 },
      { finding: "Heat intolerance", weight: 35 },
    ],

    clinicalSigns: [
      { finding: "Stertorous breathing", weight: 40 },
      { finding: "Snoring", weight: 30 },
      { finding: "Respiratory distress", weight: 40 },
      { finding: "Syncope episodes", weight: 25 },
    ],

    biochemistry: [
      { finding: "Usually non-specific findings", weight: 10 },
    ],

    urinalysis: [

    ],

    supports: [
      { finding: "Stenotic nares", weight: 40 },
      { finding: "Elongated soft palate", weight: 50 },
      { finding: "Everted laryngeal saccules", weight: 40 },
    ],

    against: [
      { finding: "Normal upper airway anatomy", weight: -50 },
      { finding: "Alternative confirmed respiratory disease", weight: -30 },
    ],
  },

  monitoring: [

    {
      id:"respiratory",
      parameter:
        "Respiratory effort and airway noise",
      frequency:
        "Regular monitoring",
      reason:
        "Detects progression of airway obstruction."
    },

    {
      id:"weight",
      parameter:
        "Body weight",
      frequency:
        "Monthly",
      reason:
        "Weight control reduces airway workload."
    },

    {
      id:"heat",
      parameter:
        "Heat tolerance",
      frequency:
        "During warm weather or exercise",
      reason:
        "Identifies risk of respiratory crisis."
    }

  ],

  precautions: [

    {
      id:"heat-stress",
      title:
        "Heat Stress Risk",
      description:
        "Brachycephalic dogs have impaired heat dissipation and require careful temperature management."
    },

    {
      id:"anesthesia-risk",
      title:
        "Anesthetic Risk",
      description:
        "Airway obstruction risk is increased during sedation and anesthesia."
    }

  ],

  prognosis:
    "The prognosis depends on severity of airway abnormalities. Mild cases can be managed with lifestyle modification, while severe cases may require surgery and carry increased risk of respiratory complications.",

  strengtheningEvidence: [

    "Brachycephalic breed",

    "Noisy breathing",

    "Exercise intolerance",

    "Heat intolerance",

    "Stenotic nares",

    "Elongated soft palate",

    "Improvement after corrective surgery"

  ],

  weakeningEvidence: [

    "Normal airway examination",

    "No respiratory signs",

    "Alternative confirmed respiratory disorder",

    "Non-brachycephalic breed",

    "Normal exercise tolerance"

  ],

  classicFindings: [

    "French Bulldog, Pug, Bulldog breeds",

    "Stertorous breathing",

    "Snoring",

    "Heat intolerance",

    "Exercise intolerance",

    "Elongated soft palate",

    "Stenotic nares"

  ],

  ruleOutFindings: [

    "Tracheal collapse",

    "Laryngeal paralysis",

    "Pneumonia",

    "Congestive heart failure",

    "Upper airway foreign body"

  ],

};