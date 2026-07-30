import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineHeartwormDisease: DiseaseCard = {
  id: "canine-heartworm-disease-dog",

  title: "Canine Heartworm Disease",

  description:
    "A parasitic cardiovascular disease caused by Dirofilaria immitis infection, leading to pulmonary vascular disease, respiratory signs, and potentially right-sided heart failure in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Heartworm Infection",
    "Dirofilariasis",
    "Dirofilaria immitis Infection",
  ],

  overview:
    "Canine heartworm disease is caused by infection with Dirofilaria immitis, a mosquito-transmitted filarial parasite. Adult worms inhabit the pulmonary arteries and may extend into the right side of the heart in severe infections. Disease severity depends on parasite burden, duration of infection, host response, and development of pulmonary vascular pathology. Clinical manifestations range from subclinical infection to severe pulmonary hypertension, caval syndrome, and right-sided congestive heart failure.",

  clinicalProblems: [

    "Chronic cough",
    "Exercise intolerance",
    "Respiratory distress",
    "Weight loss",
    "Lethargy",
    "Syncope",
    "Ascites",
    "Right-sided heart failure"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess respiratory status, cardiovascular function, disease severity, and presence of complications."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform antigen testing, microfilaria testing, and cardiovascular evaluation to confirm infection and classify severity."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Implement adulticide therapy, eliminate immature parasites, and manage pulmonary and cardiovascular complications."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory signs, thromboembolic complications, pulmonary hypertension, and treatment response."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Maintain lifelong preventive therapy and periodic testing to prevent reinfection."
    }

  ],

  diagnostics: [

    {
      id: "antigen-test",
      name: "Heartworm Antigen Test",
      priority: "Essential",
      reason:
        "Detects circulating antigen produced by adult female Dirofilaria immitis."
    },

    {
      id: "microfilaria-test",
      name: "Microfilaria Detection Test",
      priority: "Recommended",
      reason:
        "Identifies circulating microfilariae and evaluates infection status."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Recommended",
      reason:
        "Evaluates pulmonary artery enlargement and lung changes."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Recommended",
      reason:
        "Assesses pulmonary hypertension, cardiac changes, and worm burden."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates systemic effects and organ function before treatment."
    }

  ],

  drugCategories: [
    {
      category: "Anthelmintic",
      indication: "Adult heartworm elimination",
      reason: "Eliminates adult Dirofilaria immitis infection."
    },
    {
      category: "Macrocyclic Lactone",
      indication: "Microfilaria and immature parasite control",
      reason: "Prevents development of new infections."
    },
    {
      category: "Antibiotic",
      indication: "Wolbachia elimination",
      reason: "Targets bacterial endosymbionts associated with heartworms."
    },
    {
      category: "Anti-inflammatory",
      indication: "Pulmonary inflammation",
      reason: "Reduces inflammatory complications."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "melarsomine",
      priority: "First Line",
      category: "Antiparasitic",
    },
    {
      drugId: "doxycycline",
      priority: "Adjunctive",
      category: "Antibiotic",
    },
    {
      drugId: "ivermectin",
      priority: "Preventive",
      category: "Macrocyclic Lactone",
    },
  ],

  stabilization: [
    "Restrict exercise to reduce risk of pulmonary complications.",
    "Provide oxygen support in dogs with respiratory distress.",
    "Manage heart failure signs if present.",
    "Stabilize severe cases before adulticide treatment."
  ],

  clinicalEvidence: {
    history: [
      { finding: "No heartworm prevention", weight: 45 },
      { finding: "Mosquito exposure", weight: 35 },
    ],

    clinicalSigns: [
      { finding: "Chronic cough", weight: 30 },
      { finding: "Exercise intolerance", weight: 35 },
      { finding: "Syncope", weight: 40 },
      { finding: "Ascites", weight: 35 },
    ],

    biochemistry: [
      { finding: "Elevated liver enzymes", weight: 15 },
      { finding: "Protein abnormalities", weight: 15 },
    ],

    urinalysis: [
      { finding: "Proteinuria", weight: 20 },
    ],

    supports: [
      { finding: "Positive heartworm antigen test", weight: 50 },
      { finding: "Microfilariae detected", weight: 40 },
      { finding: "Pulmonary artery enlargement", weight: 35 },
      { finding: "Adult worms on echocardiography", weight: 50 },
    ],

    against: [
      { finding: "Negative antigen testing with appropriate testing protocol", weight: -40 },
      { finding: "No mosquito exposure risk", weight: -20 },
    ],
  },

  monitoring: [

    {
      id:"respiratory",
      parameter:
        "Respiratory signs and exercise tolerance",
      frequency:
        "Regular follow-up",
      reason:
        "Evaluates progression of pulmonary disease."
    },

    {
      id:"cardiac",
      parameter:
        "Cardiac function",
      frequency:
        "During treatment and follow-up",
      reason:
        "Monitors cardiovascular complications."
    },

    {
      id:"testing",
      parameter:
        "Heartworm antigen testing",
      frequency:
        "According to preventive protocols",
      reason:
        "Confirms treatment success and detects reinfection."
    }

  ],

  precautions: [

    {
      id:"exercise-restriction",
      title:
        "Strict Exercise Restriction",
      description:
        "Exercise restriction is important during treatment to reduce risk of pulmonary thromboembolism."
    },

    {
      id:"adulticide-reaction",
      title:
        "Adulticide Complications",
      description:
        "Monitor carefully after adult worm treatment due to risk of inflammatory reactions."
    }

  ],

  prognosis:
    "Prognosis depends on disease classification and severity. Dogs diagnosed early generally have a good prognosis, while severe pulmonary hypertension, caval syndrome, or advanced heart failure carries a guarded to poor prognosis.",

  strengtheningEvidence: [

    "Positive heartworm antigen test",

    "Microfilaria detection",

    "Mosquito exposure",

    "Pulmonary artery enlargement",

    "Adult worms detected on echocardiography",

    "Exercise intolerance"

  ],

  weakeningEvidence: [

    "Negative diagnostic testing",

    "No mosquito exposure risk",

    "Alternative confirmed cardiac disease",

    "Normal cardiovascular evaluation",

    "No compatible clinical signs"

  ],

  classicFindings: [

    "Chronic cough",

    "Exercise intolerance",

    "Mosquito exposure",

    "Positive antigen test",

    "Pulmonary artery changes",

    "Right-sided heart failure",

    "Microfilariae"

  ],

  ruleOutFindings: [

    "Congestive heart failure",

    "Canine bronchitis",

    "Pneumonia",

    "Pulmonary hypertension from other causes",

    "Pulmonary neoplasia"

  ],

};