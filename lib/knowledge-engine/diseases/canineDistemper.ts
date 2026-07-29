import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineDistemper: DiseaseCard = {
  id: "canine-distemper",

  title: "Canine Distemper",

  description:
    "A highly contagious viral disease caused by Canine Distemper Virus (CDV) affecting the respiratory, gastrointestinal, neurological, ocular, and integumentary systems.",

  species: [Species.DOG],

  synonyms: [
    "Canine Distemper Virus",
    "CDV",
    "Distemper",
  ],

  overview:
    "Canine Distemper is caused by a Morbillivirus that produces systemic disease through immunosuppression and multisystem infection. Clinical manifestations range from mild respiratory disease to severe neurological involvement. Vaccination remains the most effective preventive measure.",

  clinicalProblems: [
    "Pyrexia",
    "Depression",
    "Anorexia",
    "Serous to mucopurulent ocular discharge",
    "Serous to mucopurulent nasal discharge",
    "Cough",
    "Dyspnea",
    "Vomiting",
    "Diarrhea",
    "Dehydration",
    "Hyperkeratosis of footpads",
    "Neurological abnormalities",
    "Myoclonus",
    "Seizures",
    "Ataxia",
    "Immunosuppression",
  ],

  workflow: [
    {
      id: "triage",
      step: 1,
      title: "Initial Stabilization",
      description:
        "Assess respiratory status, neurological abnormalities, hydration, body temperature, and cardiovascular stability.",
    },
    {
      id: "diagnostics",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm canine distemper while evaluating secondary bacterial infections and systemic involvement.",
    },
    {
      id: "supportive",
      step: 3,
      title: "Supportive Treatment",
      description:
        "Provide intensive supportive care including fluid therapy, nutritional support, antibiotics for secondary infections, seizure control, and nursing care.",
    },
    {
      id: "monitoring",
      step: 4,
      title: "Continuous Monitoring",
      description:
        "Monitor neurological progression, respiratory function, hydration, appetite, and secondary infections.",
    },
    {
      id: "discharge",
      step: 5,
      title: "Recovery",
      description:
        "Continue supportive therapy, monitor for chronic neurological sequelae, and maintain strict isolation during recovery.",
    },
  ],

  diagnostics: [
    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Evaluates leukopenia, lymphopenia, inflammatory response, and secondary bacterial infection.",
    },
    {
      id: "serum-biochemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Evaluates organ function and systemic complications.",
    },
    {
      id: "urinalysis",
      name: "Urinalysis",
      priority: "Recommended",
      reason:
        "Assesses hydration status and concurrent urinary disease.",
    },
    {
      id: "pcr",
      name: "Canine Distemper Virus PCR",
      priority: "Essential",
      reason:
        "Highly sensitive confirmation using conjunctival, nasal, whole blood, CSF, or urine samples.",
    },
    {
      id: "fluorescent-antibody",
      name: "Fluorescent Antibody Test",
      priority: "Recommended",
      reason:
        "May identify viral antigen in conjunctival or respiratory epithelial cells.",
    },
    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiographs",
      priority: "Recommended",
      reason:
        "Evaluate pneumonia and secondary respiratory complications.",
    },
    {
      id: "csf-analysis",
      name: "Cerebrospinal Fluid Analysis",
      priority: "Optional",
      reason:
        "Recommended in dogs with significant neurological involvement.",
    },
    {
      id: "mri",
      name: "Brain MRI",
      priority: "Optional",
      reason:
        "Assesses inflammatory lesions in dogs with advanced neurological disease.",
    },
  ],
    drugCategories: [
    {
      category: "Fluid Therapy",
      indication: "Dehydration and shock",
      reason:
        "Correct dehydration, maintain tissue perfusion, and restore electrolyte balance.",
    },
    {
      category: "Antibiotic",
      indication: "Secondary bacterial infection",
      reason:
        "Treat secondary respiratory and gastrointestinal bacterial infections resulting from viral immunosuppression.",
    },
    {
      category: "Antiemetic",
      indication: "Vomiting",
      reason:
        "Reduce vomiting, improve comfort, and facilitate nutritional support.",
    },
    {
      category: "Analgesic",
      indication: "Pain and discomfort",
      reason:
        "Provide pain control while minimizing adverse effects.",
    },
    {
      category: "Gastrointestinal",
      indication: "Gastric ulcer prevention",
      reason:
        "Protect gastric mucosa in critically ill patients.",
    },
    {
      category: "Nutritional Support",
      indication: "Anorexia",
      reason:
        "Early enteral nutrition improves recovery and intestinal integrity.",
    },
  ],

  recommendedDrugs: [
    {
      drugId: "ampicillin",
      priority: "First Line",
      category: "Antibiotic",
    },
    {
      drugId: "amoxicillin-clavulanate",
      priority: "Alternative",
      category: "Antibiotic",
    },
    {
      drugId: "maropitant",
      priority: "First Line",
      category: "Antiemetic",
    },
    {
      drugId: "ondansetron",
      priority: "Alternative",
      category: "Antiemetic",
    },
    {
      drugId: "pantoprazole",
      priority: "Adjunctive",
      category: "Gastrointestinal",
    },
    {
      drugId: "tramadol",
      priority: "Adjunctive",
      category: "Analgesic",
    },
  ],

  monitoring: [
    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Every 4–6 hours",
      reason:
        "Monitor response to treatment and detect persistent infection.",
    },
    {
      id: "respiratory",
      parameter: "Respiratory rate and effort",
      frequency: "Every 2–4 hours",
      reason:
        "Detect progression of pneumonia or respiratory compromise.",
    },
    {
      id: "neurological",
      parameter: "Neurological examination",
      frequency: "Twice daily",
      reason:
        "Monitor progression of myoclonus, seizures, and other neurological deficits.",
    },
    {
      id: "hydration",
      parameter: "Hydration status",
      frequency: "Every 4–6 hours",
      reason:
        "Guide fluid therapy adjustments.",
    },
    {
      id: "cbc",
      parameter: "Complete Blood Count (CBC)",
      frequency: "Daily",
      reason:
        "Monitor leukopenia and secondary bacterial infection.",
    },
    {
      id: "biochemistry",
      parameter: "Serum biochemistry",
      frequency: "Daily",
      reason:
        "Assess systemic organ involvement.",
    },
    {
      id: "nutrition",
      parameter: "Food intake",
      frequency: "Every feeding",
      reason:
        "Ensure adequate caloric intake during recovery.",
    },
  ],

  precautions: [
    {
      id: "isolation",
      title: "Strict Isolation",
      description:
        "Prevent transmission to susceptible dogs by maintaining strict isolation throughout hospitalization.",
    },
    {
      id: "vaccination",
      title: "Vaccination History",
      description:
        "Evaluate vaccination status of all in-contact dogs and recommend vaccination where appropriate.",
    },
    {
      id: "neurological-monitoring",
      title: "Neurological Monitoring",
      description:
        "Monitor closely for seizures, myoclonus, behavioral changes, and progressive neurological deterioration.",
    },
    {
      id: "secondary-infections",
      title: "Secondary Bacterial Infection",
      description:
        "Monitor for bacterial pneumonia, enteritis, and septic complications resulting from immunosuppression.",
    },
    {
      id: "long-term-sequelae",
      title: "Long-term Sequelae",
      description:
        "Some survivors develop permanent neurological deficits despite successful treatment.",
    },
  ],

  prognosis:
    "Guarded to poor depending on neurological involvement. Dogs surviving acute infection may recover completely or develop permanent neurological deficits.",
      clinicalEvidence: {
  history: [
    { finding: "Young unvaccinated dog", weight: 40 },
    { finding: "Exposure to infected dogs", weight: 30 },
    { finding: "Shelter or kennel exposure", weight: 25 },
  ],

  clinicalSigns: [
    { finding: "Fever", weight: 20 },
    { finding: "Mucopurulent ocular discharge", weight: 30 },
    { finding: "Mucopurulent nasal discharge", weight: 30 },
    { finding: "Cough", weight: 20 },
    { finding: "Vomiting", weight: 15 },
    { finding: "Diarrhea", weight: 15 },
    { finding: "Hyperkeratosis of footpads", weight: 40 },
    { finding: "Myoclonus", weight: 50 },
    { finding: "Seizures", weight: 45 },
    { finding: "Ataxia", weight: 35 },
  ],

  biochemistry: [
    { finding: "Lymphopenia", weight: 25 },
    { finding: "Leukopenia", weight: 20 },
  ],

  urinalysis: [],

  supports: [
    { finding: "Positive Canine Distemper PCR", weight: 60 },
    { finding: "Positive Distemper antigen test", weight: 55 },
    { finding: "Thoracic radiographic pneumonia", weight: 25 },
  ],

  against: [
    { finding: "Complete vaccination history", weight: -20 },
    { finding: "Negative Canine Distemper PCR", weight: -50 },
    { finding: "No respiratory signs", weight: -10 },
    { finding: "Alternative confirmed diagnosis", weight: -60 },
  ],
},
  strengtheningEvidence: [
    "Positive Canine Distemper PCR",
    "Hyperkeratosis of footpads",
    "Myoclonus",
    "Generalized seizures",
    "Mucopurulent ocular discharge",
    "Mucopurulent nasal discharge",
    "Lymphopenia",
    "Thoracic radiographic evidence of pneumonia",
  ],

  weakeningEvidence: [
    "Negative Canine Distemper PCR",
    "Complete vaccination history",
    "No respiratory disease",
    "No neurological abnormalities",
    "Rapid clinical recovery without supportive care",
  ],

  classicFindings: [
    "Fever",
    "Depression",
    "Ocular discharge",
    "Nasal discharge",
    "Cough",
    "Vomiting",
    "Diarrhea",
    "Hyperkeratosis of nose and footpads",
    "Myoclonus",
    "Seizures",
  ],

  ruleOutFindings: [
    "Parvoviral SNAP positive with isolated enteritis",
    "Positive Leptospira PCR",
    "Foreign body obstruction",
    "Idiopathic epilepsy without systemic illness",
    "Confirmed bacterial pneumonia without viral infection",
  ],
};