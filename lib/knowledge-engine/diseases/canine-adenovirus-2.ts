import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineAdenovirus2: DiseaseCard = {
  id: "canine-adenovirus-2-dog",

  title: "Canine Adenovirus Type 2 Infection",

  description:
    "A contagious respiratory viral disease associated with canine infectious respiratory disease complex, causing cough, tracheobronchitis, and respiratory illness in dogs.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "CAV-2 Infection",
    "Canine Adenovirus Type 2 Respiratory Disease",
    "Infectious Tracheobronchitis",
  ],

  overview:
    "Canine adenovirus type 2 (CAV-2) is a respiratory adenovirus that contributes to canine infectious respiratory disease complex. It is transmitted through respiratory secretions and direct contact. Infection primarily affects the upper and lower respiratory tract, causing tracheobronchitis and occasionally pneumonia. CAV-2 is also antigenically related to canine adenovirus type 1, which causes infectious canine hepatitis.",

  clinicalProblems: [

    "Acute cough",
    "Tracheobronchitis",
    "Nasal discharge",
    "Fever",
    "Lethargy",
    "Reduced appetite",
    "Respiratory distress",
    "Bronchopneumonia"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Evaluate respiratory effort, oxygenation, hydration status, and severity of respiratory disease."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform respiratory diagnostics and evaluate for concurrent infectious respiratory pathogens."
    },

    {
      id: "supportive-management",
      step: 3,
      title: "Supportive Management",
      description:
        "Provide supportive respiratory care and treat secondary bacterial complications when indicated."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor respiratory progression, oxygenation, and development of pneumonia."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Implement vaccination, isolation, and infection-control measures."
    }

  ],

  diagnostics: [

    {
      id: "physical-exam",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Evaluates respiratory severity and identifies complications."
    },

    {
      id: "thoracic-radiographs",
      name: "Thoracic Radiography",
      priority: "Essential",
      reason:
        "Assesses bronchointerstitial disease and pneumonia."
    },

    {
      id: "respiratory-pcr",
      name: "Respiratory PCR Panel",
      priority: "Recommended",
      reason:
        "Detects CAV-2 and other respiratory pathogens."
    },

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Recommended",
      reason:
        "Evaluates systemic inflammation and secondary infection."
    },

    {
      id: "airway-sampling",
      name: "Airway Cytology and Culture",
      priority: "Recommended",
      reason:
        "Identifies secondary bacterial infections in complicated cases."
    }

  ],

  drugCategories: [
    {
      category: "Antibiotic",
      indication: "Secondary bacterial infection",
      reason: "Treats bacterial complications."
    },
    {
      category: "Antitussive",
      indication: "Non-productive cough",
      reason: "Reduces excessive coughing when appropriate."
    },
    {
      category: "Nebulization",
      indication: "Airway support",
      reason: "Improves airway hydration and secretion clearance."
    },
    {
      category: "Oxygen Therapy",
      indication: "Respiratory compromise",
      reason: "Improves oxygenation in severe disease."
    }
  ],

  recommendedDrugs: [
    {
      drugId: "doxycycline",
      priority: "Adjunctive",
      category: "Antibiotic",
    },
    {
      drugId: "amoxicillin-clavulanate",
      priority: "Alternative",
      category: "Antibiotic",
    },
    {
      drugId: "butorphanol",
      priority: "Adjunctive",
      category: "Antitussive",
    },
  ],

  stabilization: [
    "Assess respiratory effort and oxygen requirement.",
    "Provide oxygen supplementation in hypoxemic patients.",
    "Maintain hydration and airway secretion clearance.",
    "Isolate affected dogs to reduce transmission."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Kennel or shelter exposure", weight: 40 },
      { finding: "Contact with coughing dogs", weight: 35 },
    ],

    clinicalSigns: [
      { finding: "Harsh cough", weight: 40 },
      { finding: "Tracheal cough reflex", weight: 35 },
      { finding: "Nasal discharge", weight: 20 },
      { finding: "Fever", weight: 20 },
    ],

    biochemistry: [
      { finding: "Inflammatory changes", weight: 10 },
    ],

    urinalysis: [

    ],

    supports: [
      { finding: "Positive CAV-2 PCR", weight: 50 },
      { finding: "Respiratory outbreak", weight: 35 },
      { finding: "Bronchointerstitial lung pattern", weight: 30 },
    ],

    against: [
      { finding: "Primary cardiac respiratory disease", weight: -30 },
      { finding: "No respiratory signs", weight: -25 },
    ],
  },

  monitoring: [

    {
      id:"respiratory",
      parameter:
        "Respiratory rate and effort",
      frequency:
        "Every 4–8 hours in hospitalized patients",
      reason:
        "Detects progression to respiratory compromise."
    },

    {
      id:"temperature",
      parameter:
        "Body temperature",
      frequency:
        "Daily",
      reason:
        "Monitors resolution of systemic illness."
    },

    {
      id:"cough",
      parameter:
        "Cough severity",
      frequency:
        "Daily",
      reason:
        "Evaluates response to supportive treatment."
    }

  ],

  precautions: [

    {
      id:"isolation",
      title:
        "Isolation Required",
      description:
        "Affected dogs should be separated from susceptible animals because respiratory transmission occurs."
    },

    {
      id:"vaccination",
      title:
        "Vaccination Prevention",
      description:
        "Core vaccination containing CAV-2 provides protection against respiratory adenovirus infection and CAV-1 cross-protection."
    }

  ],

  prognosis:
    "The prognosis is excellent for uncomplicated CAV-2 respiratory infection. Dogs developing severe bronchopneumonia, hypoxemia, or secondary bacterial infection have a more guarded prognosis.",

  strengtheningEvidence: [

    "Positive CAV-2 PCR",

    "Kennel exposure",

    "Harsh cough",

    "Tracheal cough reflex",

    "Respiratory outbreak",

    "Bronchointerstitial pneumonia",

    "Concurrent CIRDC pathogens"

  ],

  weakeningEvidence: [

    "Negative respiratory PCR",

    "No respiratory signs",

    "Alternative confirmed respiratory disease",

    "Normal thoracic imaging",

    "Alternative confirmed diagnosis"

  ],

  classicFindings: [

    "Kennel cough syndrome",

    "Harsh hacking cough",

    "Tracheal sensitivity",

    "Nasal discharge",

    "Mild fever",

    "Respiratory outbreak",

    "Positive CAV-2 testing"

  ],

  ruleOutFindings: [

    "Congestive heart failure",

    "Collapsing trachea",

    "Foreign body aspiration",

    "Pulmonary neoplasia"

  ],

};