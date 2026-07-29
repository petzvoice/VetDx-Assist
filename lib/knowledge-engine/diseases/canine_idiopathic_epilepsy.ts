import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineIdiopathicEpilepsy: DiseaseCard = {
  id: "canine-idiopathic-epilepsy-dog",

  title: "Canine Idiopathic Epilepsy",

  description:
    "A chronic neurological disorder characterized by recurrent unprovoked seizures without an identifiable structural or metabolic cause.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Idiopathic Epilepsy",
    "Primary Epilepsy",
    "Inherited Epilepsy",
  ],

  overview:
    "Idiopathic epilepsy is the most common cause of recurrent seizures in dogs. It is diagnosed when structural brain disease and metabolic causes have been excluded. Genetic predisposition is suspected in many breeds. Seizures may occur as generalized tonic-clonic seizures, focal seizures, or focal seizures progressing to generalized seizures. Long-term management focuses on seizure control, monitoring treatment response, and maintaining quality of life.",

  clinicalProblems: [

    "Recurrent seizures",
    "Abnormal electrical brain activity",
    "Post-ictal neurological signs",
    "Status epilepticus",
    "Cluster seizures",
    "Behavioral changes",
    "Injury during seizures"

  ],

  workflow: [

    {
      id: "seizure-emergency",
      step: 1,
      title: "Seizure Emergency Assessment",
      description:
        "Determine seizure duration, frequency, cluster seizures, and whether immediate anticonvulsant therapy is required."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Exclude metabolic, toxic, and structural causes of seizures."
    },

    {
      id: "classification",
      step: 3,
      title: "Seizure Classification",
      description:
        "Classify seizure type, frequency, severity, and impact on quality of life."
    },

    {
      id: "long-term-treatment",
      step: 4,
      title: "Long-Term Treatment",
      description:
        "Initiate anticonvulsant therapy when indicated and monitor seizure control."
    },

    {
      id: "follow-up",
      step: 5,
      title: "Long-Term Monitoring",
      description:
        "Adjust therapy based on seizure frequency, adverse effects, and drug monitoring."
    }

  ],

  diagnostics: [

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Essential",
      reason:
        "Rules out metabolic causes of seizures such as hypoglycemia, electrolyte abnormalities, and organ dysfunction."
    },

    {
      id: "bile-acids",
      name: "Serum Bile Acids",
      priority: "Recommended",
      reason:
        "Evaluates hepatic causes of neurological signs."
    },

    {
      id: "mri-brain",
      name: "Brain MRI",
      priority: "Recommended",
      reason:
        "Evaluates structural brain diseases including tumors, inflammation, and malformations."
    },

    {
      id: "csf-analysis",
      name: "Cerebrospinal Fluid Analysis",
      priority: "Recommended",
      reason:
        "Assesses inflammatory and infectious neurological diseases."
    },

    {
      id: "genetic-testing",
      name: "Genetic Testing",
      priority: "Conditional",
      reason:
        "May support diagnosis in breeds with known inherited epilepsy."
    }

  ],

  drugCategories: [

    {
      category: "Anticonvulsant",
      indication: "Seizure prevention",
      reason:
        "Reduces seizure frequency and severity."
    },

    {
      category: "Emergency Anticonvulsant",
      indication: "Status epilepticus",
      reason:
        "Rapid seizure termination."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "phenobarbital",
      priority: "First Line",
      category: "Anticonvulsant",
    },

    {
      drugId: "potassium-bromide",
      priority: "First Line",
      category: "Anticonvulsant",
    },

    {
      drugId: "levetiracetam",
      priority: "Adjunctive",
      category: "Anticonvulsant",
    },

    {
      drugId: "midazolam",
      priority: "Emergency",
      category: "Anticonvulsant",
    }

  ],

  stabilization: [

    "Protect the patient from injury during seizures.",
    "Maintain airway and oxygenation during prolonged seizures.",
    "Terminate seizures lasting more than 5 minutes.",
    "Correct hypoglycemia or electrolyte abnormalities if present.",
    "Manage cluster seizures aggressively."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Recurrent seizures", weight: 50 },

      { finding: "First seizure between 6 months and 6 years", weight: 35 },

      { finding: "Breed predisposition", weight: 25 },

      { finding: "Normal neurological status between seizures", weight: 40 }

    ],

    clinicalSigns: [

      { finding: "Generalized tonic-clonic seizure", weight: 45 },

      { finding: "Focal seizure activity", weight: 30 },

      { finding: "Post-ictal confusion", weight: 35 },

      { finding: "Cluster seizures", weight: 30 }

    ],

    biochemistry: [

      { finding: "Normal CBC and biochemistry", weight: 25 },

      { finding: "Normal bile acids", weight: 15 }

    ],

    imaging: [

      { finding: "Normal brain MRI", weight: 25 }

    ],

    supports: [

      { finding: "Repeated unprovoked seizures", weight: 50 },

      { finding: "Normal interictal neurological examination", weight: 40 },

      { finding: "No metabolic abnormalities identified", weight: 35 }

    ],

    against: [

      { finding: "Abnormal neurological examination between seizures", weight: -40 },

      { finding: "Brain lesion on MRI", weight: -50 },

      { finding: "Metabolic abnormality identified", weight: -40 }

    ],

  },

  monitoring: [

    {
      id:"seizure-log",
      parameter:
        "Seizure frequency and duration",
      frequency:
        "Daily owner monitoring",
      reason:
        "Evaluates treatment effectiveness."
    },

    {
      id:"drug-level",
      parameter:
        "Anticonvulsant serum concentrations",
      frequency:
        "According to medication and clinical response",
      reason:
        "Maintains therapeutic drug levels."
    },

    {
      id:"liver",
      parameter:
        "Liver function and biochemistry",
      frequency:
        "Periodic monitoring",
      reason:
        "Detects medication-related adverse effects."
    }

  ],

  precautions: [

    {
      id:"status",
      title:
        "Status Epilepticus is an Emergency",
      description:
        "Seizures lasting more than 5 minutes or repeated seizures without recovery require immediate intervention."
    },

    {
      id:"medication",
      title:
        "Do Not Abruptly Stop Anticonvulsants",
      description:
        "Sudden withdrawal may trigger severe rebound seizures."
    }

  ],

  prognosis:
    "Many dogs achieve good seizure control with appropriate anticonvulsant therapy. Prognosis depends on seizure frequency, response to medication, and presence of underlying brain disease.",

  strengtheningEvidence: [

    "Repeated unprovoked seizures",

    "Normal neurological examination between seizures",

    "Age of onset 6 months–6 years",

    "Normal diagnostic tests",

    "Breed predisposition"

  ],

  weakeningEvidence: [

    "Brain lesion",

    "Metabolic abnormality",

    "Toxin exposure",

    "Progressive neurological deficits",

    "Abnormal MRI"

  ],

  classicFindings: [

    "Young adult dog",

    "Recurrent seizures",

    "Normal between episodes",

    "Generalized seizures",

    "Normal blood tests"

  ],

  ruleOutFindings: [

    "Brain tumor",

    "Meningoencephalitis",

    "Hypoglycemia",

    "Hepatic encephalopathy",

    "Toxin exposure"

  ],

};