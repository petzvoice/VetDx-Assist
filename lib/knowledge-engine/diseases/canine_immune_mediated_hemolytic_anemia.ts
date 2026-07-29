import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineImmuneMediatedHemolyticAnemia: DiseaseCard = {
  id: "canine-immune-mediated-hemolytic-anemia-dog",

  title: "Canine Immune-Mediated Hemolytic Anemia",

  description:
    "A life-threatening immune-mediated disease characterized by destruction of red blood cells resulting in regenerative anemia, tissue hypoxia, and thromboembolic complications.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "IMHA",
    "Autoimmune Hemolytic Anemia",
    "AIHA",
  ],

  overview:
    "Immune-mediated hemolytic anemia (IMHA) is one of the most common immune-mediated diseases in dogs. Autoantibodies target erythrocytes, causing intravascular and/or extravascular hemolysis. IMHA may be primary (idiopathic) or secondary to infections, neoplasia, drugs, or vaccination. Pulmonary thromboembolism and disseminated intravascular coagulation are major causes of mortality.",

  clinicalProblems: [

    "Regenerative anemia",
    "Hemolysis",
    "Hypoxia",
    "Weakness",
    "Jaundice",
    "Hemoglobinuria",
    "Thromboembolism",
    "Autoimmune disease"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, severity of anemia, perfusion, oxygenation, and evidence of thromboembolic complications."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm immune-mediated hemolysis while excluding infectious, neoplastic, and toxic causes."
    },

    {
      id: "stabilization",
      step: 3,
      title: "Emergency Stabilization",
      description:
        "Provide oxygen, blood transfusion when indicated, initiate immunosuppressive therapy, and thromboprophylaxis."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor for thromboembolism, DIC, worsening anemia, and adverse drug effects."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Gradually taper immunosuppressive therapy while monitoring hematologic recovery and relapse."
    }

  ],

  diagnostics: [

    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Confirms anemia, regenerative response, and evaluates platelet count."
    },

    {
      id: "blood-smear",
      name: "Blood Smear Evaluation",
      priority: "Essential",
      reason:
        "Detects spherocytes, autoagglutination, and erythrocyte morphology."
    },

    {
      id: "saline-agglutination",
      name: "Saline Agglutination Test",
      priority: "Essential",
      reason:
        "Supports immune-mediated erythrocyte destruction."
    },

    {
      id: "coombs",
      name: "Direct Coombs Test",
      priority: "Recommended",
      reason:
        "Detects antibodies bound to erythrocytes."
    },

    {
      id: "chemistry",
      name: "Serum Biochemistry and Urinalysis",
      priority: "Essential",
      reason:
        "Evaluates bilirubin, organ function, and concurrent disease."
    }

  ],

  drugCategories: [

    {
      category: "Corticosteroid",
      indication: "Primary immunosuppression",
      reason: "Suppresses immune-mediated erythrocyte destruction."
    },

    {
      category: "Antithrombotic",
      indication: "Thromboembolism prevention",
      reason: "Reduces risk of fatal thromboembolic disease."
    },

    {
      category: "Second-line Immunosuppressant",
      indication: "Refractory IMHA",
      reason: "Provides additional immunosuppression."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "prednisolone",
      priority: "First Line",
      category: "Corticosteroid",
    },

    {
      drugId: "clopidogrel",
      priority: "First Line",
      category: "Antiplatelet",
    },

    {
      drugId: "mycophenolate-mofetil",
      priority: "Adjunctive",
      category: "Immunosuppressant",
    },

    {
      drugId: "azathioprine",
      priority: "Adjunctive",
      category: "Immunosuppressant",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation if hypoxemic.",
    "Administer packed red blood cell transfusion when indicated.",
    "Initiate immunosuppressive therapy promptly.",
    "Begin antithrombotic therapy unless contraindicated.",
    "Treat shock and maintain tissue perfusion."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Acute weakness", weight: 25 },

      { finding: "Collapse", weight: 30 },

      { finding: "Dark urine", weight: 30 },

    ],

    clinicalSigns: [

      { finding: "Pale mucous membranes", weight: 30 },

      { finding: "Icterus", weight: 40 },

      { finding: "Tachycardia", weight: 25 },

      { finding: "Pigmenturia", weight: 35 },

    ],

    biochemistry: [

      { finding: "Hyperbilirubinemia", weight: 35 },

    ],

    urinalysis: [

      { finding: "Hemoglobinuria", weight: 35 },

      { finding: "Bilirubinuria", weight: 20 },

    ],

    supports: [

      { finding: "Spherocytes", weight: 45 },

      { finding: "Positive saline agglutination", weight: 50 },

      { finding: "Positive Coombs test", weight: 40 },

      { finding: "Regenerative anemia", weight: 40 },

    ],

    against: [

      { finding: "Non-regenerative anemia with alternative cause", weight: -35 },

      { finding: "Confirmed blood loss anemia", weight: -40 },

      { finding: "Iron deficiency anemia", weight: -35 },

    ],

  },

  monitoring: [

    {
      id:"pcv",
      parameter:
        "PCV/Hematocrit",
      frequency:
        "Every 12–24 hours initially",
      reason:
        "Evaluates response to therapy and need for transfusion."
    },

    {
      id:"cbc",
      parameter:
        "Complete Blood Count",
      frequency:
        "Daily during hospitalization",
      reason:
        "Monitors anemia, regeneration, and platelet count."
    },

    {
      id:"thromboembolism",
      parameter:
        "Respiratory rate, oxygenation, and perfusion",
      frequency:
        "Continuous in critical patients",
      reason:
        "Detects pulmonary thromboembolism."
    }

  ],

  precautions: [

    {
      id:"thrombosis",
      title:
        "High Thromboembolic Risk",
      description:
        "Pulmonary thromboembolism is a major cause of death in canine IMHA."
    },

    {
      id:"transfusion",
      title:
        "Crossmatch Before Transfusion",
      description:
        "Perform compatibility testing whenever possible before blood transfusion."
    }

  ],

  prognosis:
    "Prognosis is guarded. Early diagnosis, aggressive immunosuppressive therapy, transfusion support, and thromboprophylaxis improve survival. Relapse may occur during tapering of immunosuppressive medications.",

  strengtheningEvidence: [

    "Regenerative anemia",

    "Spherocytes",

    "Positive saline agglutination",

    "Positive Coombs test",

    "Hyperbilirubinemia",

    "Hemoglobinuria"

  ],

  weakeningEvidence: [

    "Confirmed blood loss",

    "Iron deficiency anemia",

    "Bone marrow failure",

    "Non-regenerative anemia",

    "Alternative diagnosis established"

  ],

  classicFindings: [

    "Acute anemia",

    "Pale mucous membranes",

    "Icterus",

    "Spherocytes",

    "Positive saline agglutination",

    "Regenerative anemia"

  ],

  ruleOutFindings: [

    "Blood loss anemia",

    "Babesiosis",

    "Ehrlichiosis",

    "Hemotropic Mycoplasmosis",

    "Bone marrow disease"

  ],

};