
import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineCoronavirus: DiseaseCard = {
  id: "canine-coronavirus-dog",

  title: "Canine Coronavirus",

  description:
    "A contagious enteric viral disease causing acute gastroenteritis characterized by vomiting, diarrhea, and dehydration, particularly in puppies.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Canine Enteric Coronavirus",
    "CCoV Infection",
    "Coronavirus Enteritis",
  ],

  overview:
    "Canine enteric coronavirus (CCoV) is an enveloped RNA virus that primarily infects mature enterocytes lining the small intestine. Infection is transmitted by the fecal-oral route and commonly occurs in kennels, shelters, and breeding facilities. Clinical disease is usually mild and self-limiting but may become severe in young puppies or when concurrent infection with canine parvovirus or other enteric pathogens is present.",

  clinicalProblems: [

    "Acute diarrhea",
    "Vomiting",
    "Dehydration",
    "Anorexia",
    "Lethargy",
    "Abdominal discomfort",
    "Weight loss",
    "Concurrent enteric infection"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment and Stabilization",
      description:
        "Assess hydration status, cardiovascular stability, severity of gastrointestinal signs, and determine the need for hospitalization."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Perform baseline laboratory testing and fecal diagnostic testing while excluding more severe enteric diseases such as parvovirus."
    },

    {
      id: "supportive-management",
      step: 3,
      title: "Supportive Management",
      description:
        "Provide fluid therapy, gastrointestinal support, nutritional management, and symptomatic treatment."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor hydration, electrolyte balance, vomiting, diarrhea, and evidence of secondary bacterial complications."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Continue supportive care until complete clinical recovery and implement appropriate sanitation and isolation measures."
    }

  ],

  diagnostics: [

    {
      id: "physical-exam",
      name: "Complete Physical Examination",
      priority: "Essential",
      reason:
        "Evaluates dehydration, abdominal pain, and overall disease severity."
    },

    {
      id: "fecal-pcr",
      name: "Fecal Coronavirus PCR",
      priority: "Recommended",
      reason:
        "Confirms infection with canine enteric coronavirus."
    },

    {
      id: "parvovirus-test",
      name: "Canine Parvovirus Antigen Test",
      priority: "Essential",
      reason:
        "Excludes concurrent or primary parvoviral enteritis."
    },

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Recommended",
      reason:
        "Evaluates dehydration and identifies leukocyte abnormalities."
    },

    {
      id: "chemistry",
      name: "Serum Biochemistry Panel",
      priority: "Recommended",
      reason:
        "Assesses electrolyte disturbances and metabolic abnormalities."
    }

  ],

  drugCategories: [
    {
      category: "Fluid Therapy",
      indication: "Dehydration",
      reason: "Restores circulating volume and corrects electrolyte deficits."
    },
    {
      category: "Antiemetic",
      indication: "Vomiting",
      reason: "Controls nausea and improves patient comfort."
    },
    {
      category: "Gastrointestinal Protectant",
      indication: "Enteritis",
      reason: "Supports gastrointestinal mucosal recovery."
    },
    {
      category: "Nutritional Support",
      indication: "Reduced food intake",
      reason: "Promotes intestinal healing and recovery."
    }
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
      drugId: "pantoprazole",
      priority: "Adjunctive",
      category: "Gastrointestinal",
    },
  ],

  stabilization: [
    "Assess hydration and perfusion immediately.",
    "Correct dehydration with intravenous or subcutaneous fluids as indicated.",
    "Control vomiting before initiating nutritional support.",
    "Isolate affected dogs to minimize fecal-oral transmission."
  ],

  clinicalEvidence: {
    history: [
      { finding: "Kennel or shelter exposure", weight: 35 },
      { finding: "Contact with dogs having diarrhea", weight: 35 },
    ],

    clinicalSigns: [
      { finding: "Acute diarrhea", weight: 35 },
      { finding: "Vomiting", weight: 25 },
      { finding: "Dehydration", weight: 25 },
      { finding: "Lethargy", weight: 15 },
    ],

    biochemistry: [
      { finding: "Electrolyte imbalance", weight: 20 },
      { finding: "Pre-renal azotemia", weight: 15 },
    ],

    urinalysis: [
      { finding: "Increased urine specific gravity", weight: 15 },
    ],

    supports: [
      { finding: "Positive fecal coronavirus PCR", weight: 50 },
      { finding: "Negative parvovirus antigen test", weight: 30 },
    ],

    against: [
      { finding: "Marked leukopenia", weight: -30 },
      { finding: "Positive parvovirus antigen test", weight: -40 },
    ],
  },

  monitoring: [

    {
      id:"hydration",
      parameter:
        "Hydration status",
      frequency:
        "Every 6–12 hours during hospitalization",
      reason:
        "Ensures adequate fluid replacement."
    },

    {
      id:"electrolytes",
      parameter:
        "Electrolytes",
      frequency:
        "Daily",
      reason:
        "Detects ongoing gastrointestinal fluid losses."
    },

    {
      id:"clinical-signs",
      parameter:
        "Vomiting and diarrhea",
      frequency:
        "Continuous clinical assessment",
      reason:
        "Evaluates response to supportive therapy."
    }

  ],

  precautions: [

    {
      id:"isolation",
      title:
        "Isolation Required",
      description:
        "Affected dogs should be isolated because viral shedding occurs in feces."
    },

    {
      id:"coinfection",
      title:
        "Concurrent Enteric Infections",
      description:
        "Young puppies may have concurrent parvovirus or other enteric pathogens leading to more severe disease."
    }

  ],

  prognosis:
    "The prognosis is excellent in uncomplicated canine coronavirus infections with appropriate supportive care. Puppies with severe dehydration or concurrent canine parvovirus infection have a more guarded prognosis.",

  strengtheningEvidence: [

    "Positive fecal coronavirus PCR",

    "Kennel or shelter exposure",

    "Acute diarrhea",

    "Vomiting",

    "Negative parvovirus antigen test",

    "Rapid clinical improvement with supportive care",

    "Multiple affected dogs in the same environment"

  ],

  weakeningEvidence: [

    "Positive parvovirus antigen test",

    "Marked leukopenia",

    "No gastrointestinal signs",

    "Alternative confirmed enteric disease",

    "Negative fecal PCR with appropriate sampling"

  ],

  classicFindings: [

    "Kennel exposure",

    "Acute diarrhea",

    "Vomiting",

    "Dehydration",

    "Lethargy",

    "Positive fecal coronavirus PCR",

    "Negative parvovirus test"

  ],

  ruleOutFindings: [

    "Positive canine parvovirus antigen test",

    "Hemorrhagic gastroenteritis without coronavirus detection",

    "Foreign body obstruction",

    "Alternative confirmed gastrointestinal disease"

  ],

};