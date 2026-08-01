import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const smallRuminantLungworm: DiseaseCard = {
  id: "small-ruminant-lungworm",

  title: "Lungworm Infection",

  description:
    "A respiratory parasitic disease of sheep and goats caused by lungworms, including Dictyocaulus filaria, Muellerius capillaris, and Protostrongylus species, resulting in coughing, respiratory distress, reduced productivity, and secondary respiratory infections.",

  species: [
    Species.SHEEP,
    Species.GOAT,
  ],

  synonyms: [
    "Pulmonary Verminosis",
    "Parasitic Bronchitis",
    "Lungworm Disease",
  ],

  overview:
    "Lungworm infection affects the respiratory tract of grazing sheep and goats. Animals become infected by ingesting infective larvae from contaminated pastures. Adult parasites inhabit bronchi and lung tissue, causing inflammation, mucus production, coughing, and impaired respiratory function. Disease severity depends on parasite species, infection level, age, immune status, and concurrent bacterial respiratory infections.",

  clinicalProblems: [

    "Coughing",
    "Respiratory distress",
    "Bronchitis",
    "Reduced growth",
    "Secondary pneumonia",
    "Death"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess grazing history, seasonal occurrence, previous parasite control, respiratory disease outbreaks, and environmental conditions."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate respiratory rate, cough, nasal discharge, lung sounds, body condition, and exercise tolerance."
    },

    {
      id: "diagnostics",
      step: 3,
      title: "Diagnostic Investigation",
      description:
        "Perform fecal larval examination, respiratory evaluation, and additional testing when secondary pneumonia is suspected."
    },

    {
      id: "management",
      step: 4,
      title: "Treatment and Control",
      description:
        "Administer appropriate anthelmintic therapy, provide respiratory support, and improve pasture management."
    }

  ],

  diagnostics: [

    {
      id: "baermann-test",
      name: "Baermann Examination",
      priority: "Essential",
      reason:
        "Detects lungworm larvae in fecal samples."
    },

    {
      id: "clinical-exam",
      name: "Respiratory Examination",
      priority: "Essential",
      reason:
        "Evaluates severity of respiratory involvement."
    },

    {
      id: "thoracic-imaging",
      name: "Thoracic Imaging",
      priority: "Recommended",
      reason:
        "May identify lung lesions or secondary pneumonia."
    },

    {
      id: "necropsy",
      name: "Postmortem Examination",
      priority: "Recommended",
      reason:
        "Confirms parasite presence in respiratory tissues."
    }

  ],

  drugCategories: [

    {
      category: "Anthelmintics",
      indication: "Lungworm elimination",
      reason:
        "Removes respiratory nematode infection."
    },

    {
      category: "Antimicrobials",
      indication: "Secondary bacterial pneumonia",
      reason:
        "Treats concurrent bacterial respiratory infections."
    },

    {
      category: "Supportive Therapy",
      indication: "Respiratory support",
      reason:
        "Improves recovery in severely affected animals."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "ivermectin",
      priority: "First Line",
      category: "Anthelmintics"
    },

    {
      drugId: "moxidectin",
      priority: "Alternative",
      category: "Anthelmintics"
    },

    {
      drugId: "albendazole",
      priority: "Alternative",
      category: "Anthelmintics"
    }

  ],

  stabilization: [

    "Reduce stress and provide adequate ventilation.",
    "Administer effective anthelmintic therapy.",
    "Provide supportive care for respiratory distress.",
    "Treat secondary bacterial infections when present.",
    "Improve pasture hygiene and parasite control practices.",
    "Monitor affected animals for respiratory recovery."

  ],

  clinicalEvidence: {

    history: [

      {
        finding: "Grazing exposure",
        weight: 90
      },

      {
        finding: "Previous parasite problems",
        weight: 85
      },

      {
        finding: "Seasonal respiratory disease",
        weight: 80
      }

    ],

    clinicalSigns: [

      {
        finding: "Persistent coughing",
        weight: 100
      },

      {
        finding: "Increased respiratory effort",
        weight: 90
      },

      {
        finding: "Nasal discharge",
        weight: 75
      },

      {
        finding: "Reduced weight gain",
        weight: 80
      }

    ],

    biochemistry: [

      {
        finding: "No specific biochemical marker",
        weight: 10
      }

    ],

    imaging: [

      {
        finding: "Bronchial or pulmonary changes",
        weight: 70
      }

    ],

    supports: [

      {
        finding: "Lungworm larvae detected",
        weight: 100
      },

      {
        finding: "Improvement after anthelmintic therapy",
        weight: 90
      }

    ],

    against: [

      {
        finding: "Negative larval examination",
        weight: -40
      },

      {
        finding: "Alternative respiratory disease confirmed",
        weight: -80
      }

    ],

  },
    monitoring: [

    {
      id: "respiratory-status",
      parameter: "Respiratory rate, effort, and cough severity",
      frequency: "Daily during active disease",
      reason:
        "Evaluates improvement or progression of respiratory compromise."
    },

    {
      id: "fecal-larval-examination",
      parameter: "Baermann fecal examination",
      frequency: "After treatment and during risk periods",
      reason:
        "Confirms reduction of lungworm infection and detects reinfection."
    },

    {
      id: "body-condition",
      parameter: "Body weight and body condition score",
      frequency: "Monthly",
      reason:
        "Monitors recovery and production performance."
    },

    {
      id: "secondary-infection",
      parameter: "Signs of pneumonia or bacterial infection",
      frequency: "Daily in severe cases",
      reason:
        "Detects complications requiring additional treatment."
    }

  ],

  precautions: [

    {
      id: "pasture-management",
      title: "Pasture Parasite Control",
      description:
        "Use rotational grazing and avoid excessive contamination of grazing areas."
    },

    {
      id: "strategic-deworming",
      title: "Strategic Anthelmintic Treatment",
      description:
        "Implement parasite control programs based on local risk and veterinary recommendations."
    },

    {
      id: "reduce-overcrowding",
      title: "Avoid Overcrowding",
      description:
        "Reduce stocking density to minimize pasture contamination and stress."
    },

    {
      id: "monitor-young-stock",
      title: "Monitor Young Animals",
      description:
        "Young sheep and goats are more susceptible to severe respiratory parasitism."
    }

  ],

  prognosis:
    "Prognosis is generally good when lungworm infection is identified early and effective anthelmintic therapy is provided. Severe infections with extensive lung damage or secondary pneumonia may have a guarded prognosis.",

  strengtheningEvidence: [

    "Persistent cough in grazing animals",

    "Positive Baermann test",

    "Respiratory improvement after anthelmintic therapy",

    "Seasonal pasture exposure"

  ],

  weakeningEvidence: [

    "Negative lungworm testing",

    "No grazing exposure",

    "Confirmed alternative respiratory disease"

  ],

  classicFindings: [

    "Chronic coughing",

    "Respiratory distress",

    "Reduced growth",

    "Nasal discharge",

    "Poor performance"

  ],

  ruleOutFindings: [

    "Bacterial pneumonia",

    "Mannheimia respiratory disease",

    "Lung abscessation",

    "Aspiration pneumonia",

    "Foreign body airway disease"

  ],

};
