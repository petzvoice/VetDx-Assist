import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineParvoviralEnteritis: DiseaseCard = {
  id: "canine-parvoviral-enteritis",

  title: "Canine Parvoviral Enteritis",

  description:
    "A highly contagious viral disease causing severe hemorrhagic gastroenteritis, dehydration, sepsis, and immunosuppression in dogs, particularly young puppies.",

  species: [Species.DOG],

  synonyms: [
    "Canine Parvovirus",
    "CPV",
    "Parvo",
    "Canine Parvoviral Infection",
  ],

  overview:
    "Canine Parvoviral Enteritis is caused by Canine Parvovirus type 2 (CPV-2). The virus primarily attacks rapidly dividing cells within the intestinal crypts and bone marrow, resulting in severe vomiting, hemorrhagic diarrhea, profound dehydration, leukopenia, bacterial translocation, septic shock, and death if untreated. Early intensive supportive therapy markedly improves survival.",

  clinicalProblems: [
    "Acute vomiting",
    "Hemorrhagic diarrhea",
    "Severe dehydration",
    "Hypovolemia",
    "Electrolyte imbalance",
    "Hypoglycaemia",
    "Leukopenia",
    "Sepsis",
    "Shock",
  ],

  workflow: [
    {
      id: "initial-stabilization",
      step: 1,
      title: "Initial Stabilization",
      description:
        "Rapid assessment of perfusion, hydration, cardiovascular status, blood glucose, and shock with immediate stabilization.",
    },
    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm parvoviral infection while evaluating dehydration, electrolyte abnormalities, leukopenia, and systemic complications.",
    },
    {
      id: "supportive-care",
      step: 3,
      title: "Aggressive Supportive Care",
      description:
        "Provide intensive fluid therapy, antiemetics, nutritional support, antibiotics, analgesia, and correction of metabolic abnormalities.",
    },
    {
      id: "monitoring",
      step: 4,
      title: "Continuous Monitoring",
      description:
        "Closely monitor hydration, cardiovascular parameters, gastrointestinal signs, glucose, electrolytes, urine output, and leukocyte recovery.",
    },
    {
      id: "discharge",
      step: 5,
      title: "Recovery and Discharge",
      description:
        "Continue nutritional rehabilitation, complete medication protocols, maintain isolation until viral shedding decreases, and recommend vaccination for susceptible dogs.",
    },
  ],
    diagnostics: [
    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Evaluates leukopenia, neutropenia, lymphopenia, anemia, and evidence of sepsis.",
    },
    {
      id: "biochemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Assesses electrolyte abnormalities, protein status, glucose, renal function, and hepatic involvement.",
    },
    {
      id: "electrolytes",
      name: "Serum Electrolytes",
      priority: "Essential",
      reason:
        "Identifies hypokalaemia, hyponatraemia, hypochloraemia, and guides fluid therapy.",
    },
    {
      id: "snap-parvo",
      name: "Canine Parvovirus SNAP ELISA",
      priority: "Essential",
      reason:
        "Rapid in-clinic confirmation of Canine Parvovirus infection.",
    },
    {
      id: "fecal-pcr",
      name: "Canine Parvovirus PCR",
      priority: "Recommended",
      reason:
        "Highly sensitive confirmation when ELISA results are inconclusive.",
    },
    {
      id: "fecal-examination",
      name: "Faecal Examination",
      priority: "Recommended",
      reason:
        "Identifies concurrent intestinal parasitism that may worsen disease.",
    },
    {
      id: "blood-gas",
      name: "Blood Gas Analysis",
      priority: "Recommended",
      reason:
        "Assesses acid-base disturbances and guides critical care management.",
    },
    {
      id: "coagulation-profile",
      name: "Coagulation Profile",
      priority: "Optional",
      reason:
        "Recommended in critically ill patients with suspected DIC or severe sepsis.",
    },
  ],

  drugCategories: [
    {
      category: "Fluid Therapy",
      indication: "Shock and dehydration",
      reason:
        "Restore circulating volume, improve tissue perfusion, and correct dehydration.",
    },
    {
      category: "Antiemetic",
      indication: "Persistent vomiting",
      reason:
        "Controls vomiting, reduces fluid loss, and improves patient comfort.",
    },
    {
      category: "Broad-spectrum Antibiotic",
      indication: "Prevention and treatment of bacterial translocation",
      reason:
        "Bone marrow suppression predisposes to septicemia.",
    },
    {
      category: "Gastroprotectant",
      indication: "Severe gastrointestinal disease",
      reason:
        "Protects gastric mucosa during intensive care.",
    },
    {
      category: "Analgesic",
      indication: "Abdominal pain",
      reason:
        "Provides pain control while minimizing gastrointestinal adverse effects.",
    },
    {
      category: "Nutritional Support",
      indication: "Prolonged anorexia",
      reason:
        "Early enteral nutrition improves intestinal healing and recovery.",
    },
  ],

  recommendedDrugs: [
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
    id: "pain",
    parameter: "Pain score",
    frequency: "Every 4–6 hours during hospitalization",
    reason: "Assess response to analgesia and adjust pain management.",
  },
  {
    id: "temperature",
    parameter: "Body temperature",
    frequency: "Every 4–6 hours",
    reason: "Monitor resolution of fever and detect ongoing infection.",
  },
  {
    id: "hydration",
    parameter: "Hydration status",
    frequency: "Every 4–6 hours",
    reason: "Guide fluid therapy and prevent dehydration.",
  },
  {
    id: "cbc",
    parameter: "Complete Blood Count (CBC)",
    frequency: "Daily or as clinically indicated",
    reason: "Monitor inflammatory response and detect anemia or leukocyte changes.",
  },
  {
    id: "biochemistry",
    parameter: "Serum biochemistry",
    frequency: "Daily",
    reason: "Monitor renal and hepatic function during treatment.",
  },
  {
    id: "electrolytes",
    parameter: "Serum electrolytes",
    frequency: "Daily",
    reason: "Detect electrolyte abnormalities associated with vomiting or fluid therapy.",
  },
  {
    id: "urine-output",
    parameter: "Urine output",
    frequency: "Continuous in hospitalized patients",
    reason: "Assess renal perfusion and hydration status.",
  },
],
precautions: [
  {
    id: "analgesic-selection",
    title: "Analgesic Selection",
    description:
      "Avoid NSAIDs in patients with dehydration, renal compromise, gastrointestinal ulceration, or concurrent corticosteroid therapy. Consider opioid analgesia when NSAIDs are contraindicated.",
  },
  {
    id: "fluid-therapy",
    title: "Fluid Therapy",
    description:
      "Correct dehydration before administering NSAIDs and monitor renal function during treatment.",
  },
  {
    id: "gastrointestinal-risk",
    title: "Gastrointestinal Monitoring",
    description:
      "Monitor for vomiting, melena, diarrhea, or anorexia, particularly in patients receiving NSAIDs.",
  },
  {
    id: "opioid-sedation",
    title: "Opioid Adverse Effects",
    description:
      "Monitor for sedation, respiratory depression, bradycardia, and dysphoria when opioid analgesics are administered.",
  },
  {
    id: "multimodal-pain",
    title: "Multimodal Pain Management",
    description:
      "Use multimodal analgesia whenever appropriate to improve pain control while minimizing adverse drug effects.",
  },
],
prognosis:
  "Excellent with early diagnosis and appropriate immunosuppressive therapy. Recurrence may occur, requiring long-term monitoring and gradual tapering of medications.",
  strengtheningEvidence: [
  "Multiple swollen painful joints",
  "Fever",
  "Joint effusion",
  "Neutrophilic synovial fluid",
  "Negative bacterial culture",
  "Excellent response to immunosuppressive therapy"
],
weakeningEvidence: [
  "Positive bacterial joint culture",
  "Single joint involvement only",
  "Traumatic joint injury",
  "No improvement with immunosuppressive therapy",
  "Evidence of degenerative joint disease alone"
],
classicFindings: [
  "Acute lameness",
  "Shifting leg lameness",
  "Painful swollen joints",
  "Fever",
  "Reluctance to move",
  "Joint effusion"
],
ruleOutFindings: [
  "Penetrating joint wound",
  "Positive bacterial culture",
  "Joint fracture",
  "Cruciate ligament rupture",
  "Localized traumatic injury"
],
};