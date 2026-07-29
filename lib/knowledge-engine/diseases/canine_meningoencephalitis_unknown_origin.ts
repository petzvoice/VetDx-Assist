import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineMeningoencephalitisUnknownOrigin: DiseaseCard = {
  id: "canine-meningoencephalitis-unknown-origin-dog",

  title: "Canine Meningoencephalitis of Unknown Origin (MUO)",

  description:
    "A group of inflammatory diseases affecting the brain and meninges in dogs where an infectious cause cannot be identified, resulting in neurological dysfunction.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "MUO",
    "Meningoencephalitis of Unknown Origin",
    "Steroid Responsive Meningitis-Arteritis",
    "Granulomatous Meningoencephalitis",
    "Necrotizing Meningoencephalitis",
  ],

  overview:
    "Meningoencephalitis of unknown origin represents a group of non-infectious inflammatory diseases of the central nervous system. Major forms include granulomatous meningoencephalitis (GME), necrotizing meningoencephalitis (NME), and necrotizing leukoencephalitis (NLE). Disease commonly affects small-breed dogs but may occur in any breed. Clinical signs depend on the location and severity of inflammation and include seizures, altered mentation, vestibular dysfunction, and gait abnormalities. Diagnosis requires exclusion of infectious disease and often includes MRI and cerebrospinal fluid analysis.",

  clinicalProblems: [

    "Brain inflammation",
    "Seizures",
    "Altered mentation",
    "Ataxia",
    "Cranial nerve dysfunction",
    "Vestibular signs",
    "Progressive neurological deficits",
    "Cerebral edema"

  ],

  workflow: [

    {
      id: "neurological-assessment",
      step: 1,
      title: "Neurological Assessment",
      description:
        "Localize the neurological lesion and evaluate severity of clinical signs."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Exclude infectious causes and identify inflammatory CNS disease."
    },

    {
      id: "immunosuppressive-treatment",
      step: 3,
      title: "Immunosuppressive Treatment",
      description:
        "Initiate immunosuppressive therapy when infectious disease has been ruled out."
    },

    {
      id: "monitor-response",
      step: 4,
      title: "Monitor Response",
      description:
        "Assess neurological improvement and medication adverse effects."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Continue therapy with gradual tapering and monitor for relapse."
    }

  ],

  diagnostics: [

    {
      id: "mri-brain",
      name: "Brain MRI",
      priority: "Essential",
      reason:
        "Identifies inflammatory lesions and helps differentiate other intracranial diseases."
    },

    {
      id: "csf-analysis",
      name: "Cerebrospinal Fluid Analysis",
      priority: "Essential",
      reason:
        "Evaluates inflammatory changes and supports diagnosis."
    },

    {
      id: "infectious-testing",
      name: "Infectious Disease Testing",
      priority: "Essential",
      reason:
        "Rules out infectious encephalitis before immunosuppressive therapy."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Assesses systemic health and baseline values before treatment."
    },

    {
      id: "blood-pressure",
      name: "Blood Pressure Measurement",
      priority: "Recommended",
      reason:
        "Screens for concurrent systemic hypertension."
    }

  ],

  drugCategories: [

    {
      category: "Immunosuppressant",
      indication: "Inflammatory CNS disease",
      reason:
        "Suppresses immune-mediated inflammation."
    },

    {
      category: "Anticonvulsant",
      indication: "Seizures",
      reason:
        "Controls seizure activity."
    },

    {
      category: "Gastroprotectant",
      indication: "Steroid-associated gastrointestinal risk",
      reason:
        "Provides supportive protection when indicated."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "prednisolone",
      priority: "First Line",
      category: "Immunosuppressant",
    },

    {
      drugId: "cytosine-arabinoside",
      priority: "Adjunctive",
      category: "Immunosuppressant",
    },

    {
      drugId: "phenobarbital",
      priority: "Conditional",
      category: "Anticonvulsant",
    },

    {
      drugId: "levetiracetam",
      priority: "Conditional",
      category: "Anticonvulsant",
    }

  ],

  stabilization: [

    "Control seizures if present.",
    "Manage increased intracranial pressure when suspected.",
    "Provide oxygen and supportive care in severe cases.",
    "Rule out infectious disease before immunosuppression.",
    "Monitor neurological status frequently."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Acute or progressive neurological signs", weight: 35 },

      { finding: "Seizures", weight: 35 },

      { finding: "Young to middle-aged dog", weight: 20 },

      { finding: "Small breed predisposition", weight: 25 }

    ],

    clinicalSigns: [

      { finding: "Seizures", weight: 45 },

      { finding: "Altered mentation", weight: 40 },

      { finding: "Ataxia", weight: 35 },

      { finding: "Cranial nerve deficits", weight: 30 },

      { finding: "Vestibular signs", weight: 30 }

    ],

   biochemistry: [

      { finding: "CSF pleocytosis", weight: 45 },

      { finding: "Increased CSF protein", weight: 35 }

    ],

    imaging: [

      { finding: "MRI brain inflammatory lesions", weight: 50 }

    ],

    supports: [

      { finding: "MRI compatible with inflammatory encephalitis", weight: 50 },

      { finding: "Inflammatory CSF findings", weight: 45 },

      { finding: "Improvement with immunosuppressive therapy", weight: 35 }

    ],

    against: [

      { finding: "Positive infectious disease testing", weight: -50 },

      { finding: "Brain tumor identified", weight: -45 },

      { finding: "Normal MRI and CSF", weight: -35 }

    ],

  },

  monitoring: [

    {
      id:"neurological",
      parameter:
        "Neurological examination",
      frequency:
        "Regularly during treatment",
      reason:
        "Assesses disease progression and response."
    },

    {
      id:"bloodwork",
      parameter:
        "CBC and serum biochemistry",
      frequency:
        "Periodic during immunosuppressive therapy",
      reason:
        "Monitors treatment adverse effects."
    },

    {
      id:"relapse",
      parameter:
        "Recurrence of neurological signs",
      frequency:
        "Long-term monitoring",
      reason:
        "Detects disease relapse."
    }

  ],

  precautions: [

    {
      id:"infection",
      title:
        "Exclude Infection Before Steroids",
      description:
        "Immunosuppressive therapy can worsen infectious encephalitis."
    },

    {
      id:"taper",
      title:
        "Gradual Medication Tapering",
      description:
        "Rapid withdrawal of immunosuppressive therapy may cause relapse."
    }

  ],

  prognosis:
    "Prognosis is variable. Some dogs respond well to aggressive immunosuppressive therapy, while others experience relapse or progressive neurological deterioration.",

  strengtheningEvidence: [

    "Seizures",

    "MRI inflammatory lesions",

    "CSF pleocytosis",

    "Young or middle-aged dog",

    "Response to immunosuppressive therapy"

  ],

  weakeningEvidence: [

    "Confirmed infection",

    "Brain neoplasia",

    "Normal MRI",

    "Normal CSF",

    "Toxic cause identified"

  ],

  classicFindings: [

    "Seizures",

    "Altered mentation",

    "Ataxia",

    "Cranial nerve deficits",

    "MRI lesions",

    "Inflammatory CSF"

  ],

  ruleOutFindings: [

    "Brain tumor",

    "Canine distemper encephalitis",

    "Protozoal encephalitis",

    "Bacterial meningitis",

    "Toxic encephalopathy"

  ],

};