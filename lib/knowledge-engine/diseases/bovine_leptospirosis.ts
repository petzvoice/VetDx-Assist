import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const bovineLeptospirosis: DiseaseCard = {
  id: "bovine-leptospirosis",

  title: "Bovine Leptospirosis",

  description:
    "A bacterial disease of cattle caused by pathogenic Leptospira species, commonly associated with reproductive failure, abortion, infertility, stillbirths, weak calves, and occasionally acute systemic disease.",

  species: [
    Species.CATTLE,
  ],

  synonyms: [
    "Leptospirosis",
    "Bovine Leptospirosis",
    "Leptospira Infection",
    "Bovine Leptospiral Infection",
    "Leptospiral Abortion",
    "Leptospiral Reproductive Disease",
  ],

  overview:
    "Bovine leptospirosis is an infectious disease caused by pathogenic Leptospira species. Infection may occur through exposure to urine-contaminated water, soil, feed, or direct contact with infected animals. In cattle, reproductive disease is particularly important and may include abortion, infertility, stillbirths, premature calving, weak calves, and reduced reproductive performance. Acute infection can cause fever, hemoglobinuria, jaundice, hemolytic anemia, renal dysfunction, and systemic illness, particularly in susceptible animals. Infected cattle may develop persistent renal colonization and shed leptospires in urine, contributing to herd transmission.",

  clinicalProblems: [

    "Acute bacterial infection",
    "Fever",
    "Abortion",
    "Infertility",
    "Stillbirth",
    "Premature calving",
    "Weak calves",
    "Reduced reproductive performance",
    "Hemolytic anemia",
    "Hemoglobinuria",
    "Jaundice",
    "Renal dysfunction",
    "Reduced milk production",
    "Urinary shedding and herd transmission"

  ],

  workflow: [

    {
      id: "history",
      step: 1,
      title: "History Evaluation",
      description:
        "Assess reproductive history, abortion patterns, infertility, recent introduction of animals, exposure to stagnant or contaminated water, rodent exposure, vaccination history, and previous herd outbreaks."
    },

    {
      id: "clinical-examination",
      step: 2,
      title: "Clinical Examination",
      description:
        "Evaluate body temperature, hydration, mucous membrane color, jaundice, hemoglobinuria, anemia, milk production, reproductive status, and general systemic condition."
    },

    {
      id: "sample-collection",
      step: 3,
      title: "Sample Collection",
      description:
        "Collect appropriate blood, serum, urine, fetal tissues, placenta, or other diagnostic samples according to the suspected stage of infection and laboratory requirements."
    },

    {
      id: "laboratory-confirmation",
      step: 4,
      title: "Laboratory Confirmation",
      description:
        "Use serology, PCR, or other validated laboratory methods to support or confirm infection. Paired or sequential serum samples may be useful when evaluating changes in antibody titers."
    },

    {
      id: "herd-control",
      step: 5,
      title: "Herd Disease Control",
      description:
        "Implement appropriate treatment, reproductive management, vaccination where indicated, biosecurity, rodent control, and measures to reduce environmental contamination and transmission."
    }

  ],

  diagnostics: [

    {
      id: "serology",
      name: "Serology",
      priority: "Essential",
      reason:
        "Serologic testing can provide evidence of exposure to pathogenic Leptospira and is particularly useful in herd-level investigation and reproductive disease."
    },

    {
      id: "microscopic-agglutination-test",
      name: "Microscopic Agglutination Test",
      priority: "Essential",
      reason:
        "MAT is an important serologic method for detecting antibodies against Leptospira serovars."
    },

    {
      id: "pcr",
      name: "PCR",
      priority: "Recommended",
      reason:
        "PCR can detect Leptospira DNA in appropriate clinical or reproductive samples and may provide evidence of active infection."
    },

    {
      id: "culture",
      name: "Leptospira Culture",
      priority: "Recommended",
      reason:
        "Culture can provide definitive evidence of viable organisms but requires specialized laboratory facilities and appropriate sample handling."
    }

  ],

  drugCategories: [

    {
      category: "Antimicrobial Therapy",
      indication: "Treatment of leptospiral infection",
      reason:
        "Antimicrobial therapy may be used to treat susceptible cattle and reduce infection or urinary shedding according to veterinary guidance."
    },

    {
      category: "Fluid Therapy",
      indication: "Dehydration and systemic illness",
      reason:
        "Fluid therapy may be required in clinically affected cattle with dehydration or significant systemic illness."
    },

    {
      category: "Supportive Therapy",
      indication: "Systemic illness and recovery",
      reason:
        "Supportive management helps maintain hydration, nutrition, comfort, and recovery in clinically affected animals."
    },

    {
      category: "Reproductive Management",
      indication: "Abortion and reproductive losses",
      reason:
        "Herd reproductive management is important when leptospirosis is associated with abortion, infertility, stillbirths, or weak calves."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "oxytetracycline",
      priority: "Supportive",
      category: "Antibiotic"
    }

  ],

  stabilization: [

    "Assess hydration and systemic condition.",
    "Provide adequate clean drinking water and palatable feed.",
    "Provide supportive care for clinically affected cattle.",
    "Manage severe anemia, dehydration, or systemic complications as indicated.",
    "Separate clinically affected animals when appropriate.",
    "Minimize exposure to urine-contaminated water and environments.",
    "Implement effective rodent control.",
    "Review herd vaccination status and preventive strategy.",
    "Use appropriate biosecurity measures when introducing or moving animals."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Recent abortions in the herd", weight: 90 },

      { finding: "Infertility or reduced reproductive performance", weight: 80 },

      { finding: "Stillbirths or weak calves", weight: 80 },

      { finding: "Exposure to contaminated water", weight: 75 },

      { finding: "Rodent exposure", weight: 70 },

      { finding: "Recent introduction of cattle from another herd", weight: 60 },

      { finding: "Previous leptospirosis outbreak", weight: 85 }

    ],

    clinicalSigns: [

      { finding: "Fever", weight: 70 },

      { finding: "Abortion", weight: 100 },

      { finding: "Infertility", weight: 85 },

      { finding: "Stillbirth", weight: 85 },

      { finding: "Weak calves", weight: 75 },

      { finding: "Premature calving", weight: 75 },

      { finding: "Reduced milk production", weight: 65 },

      { finding: "Jaundice", weight: 70 },

      { finding: "Hemoglobinuria", weight: 75 },

      { finding: "Pale mucous membranes", weight: 55 },

      { finding: "Fever with acute systemic illness", weight: 70 }

    ],

    biochemistry: [

      { finding: "Evidence of renal dysfunction", weight: 60 },

      { finding: "Hyperbilirubinemia", weight: 55 },

      { finding: "Anemia", weight: 65 },

      { finding: "Inflammatory changes", weight: 35 }

    ],

    imaging: [

      { finding: "No specific routine diagnostic imaging findings", weight: 5 }

    ],

    supports: [

      { finding: "Positive Leptospira serology", weight: 90 },

      { finding: "Significant change in antibody titers on paired samples", weight: 95 },

      { finding: "Positive PCR for pathogenic Leptospira", weight: 100 },

      { finding: "Leptospira detected from appropriate reproductive tissue", weight: 100 },

      { finding: "Compatible herd abortion pattern", weight: 85 }

    ],

    against: [

      { finding: "Negative appropriate diagnostic testing", weight: -70 },

      { finding: "Alternative infectious cause of abortion confirmed", weight: -90 },

      { finding: "No compatible reproductive or systemic clinical findings", weight: -45 }

    ],

  },

  monitoring: [

    {
      id: "temperature",
      parameter: "Body temperature",
      frequency: "Daily",
      reason:
        "Monitors systemic illness and response to supportive treatment."
    },

    {
      id: "hydration",
      parameter: "Hydration status",
      frequency: "Daily",
      reason:
        "Detects dehydration and helps guide supportive management."
    },

    {
      id: "urinary-status",
      parameter: "Urination and urine appearance",
      frequency: "Daily",
      reason:
        "Monitoring may help identify hemoglobinuria or changes associated with renal involvement."
    },

    {
      id: "milk-production",
      parameter: "Milk production",
      frequency: "Daily",
      reason:
        "Reduced milk production may occur during acute disease and monitoring helps assess recovery."
    },

    {
      id: "reproductive-performance",
      parameter: "Reproductive performance",
      frequency: "Per reproductive cycle",
      reason:
        "Monitoring abortion, conception, calving, stillbirth, and weak-calf rates helps evaluate herd-level disease control."
    },

    {
      id: "herd-abortions",
      parameter: "Herd abortion rate",
      frequency: "Ongoing",
      reason:
        "Tracks reproductive losses and evaluates the effectiveness of herd-level control measures."
    }

  ],

  precautions: [

    {
      id: "biosecurity",
      title: "Strict Biosecurity",
      description:
        "Use appropriate biosecurity when introducing cattle, managing affected animals, or handling reproductive materials to reduce transmission."
    },

    {
      id: "rodent-control",
      title: "Rodent Control",
      description:
        "Control rodents because they can maintain and transmit pathogenic Leptospira in cattle environments."
    },

    {
      id: "water-hygiene",
      title: "Water and Environmental Hygiene",
      description:
        "Reduce cattle exposure to stagnant or potentially urine-contaminated water and maintain appropriate environmental hygiene."
    },

    {
      id: "vaccination",
      title: "Vaccination",
      description:
        "Use an appropriate bovine leptospirosis vaccination program where indicated, considering locally relevant Leptospira serovars and veterinary recommendations."
    },

    {
      id: "zoonotic-risk",
      title: "Zoonotic Precautions",
      description:
        "Leptospirosis is zoonotic. Use appropriate protective measures when handling urine, aborted fetuses, placenta, reproductive fluids, or clinically affected cattle."
    }

  ],

  prognosis:
    "Prognosis varies with the clinical form, infecting strain, age and susceptibility of the animal, and the extent of systemic or reproductive involvement. Acute systemic disease can be serious, while herd-level reproductive disease may result in substantial economic losses through abortion, infertility, stillbirths, weak calves, and reduced production. Appropriate diagnosis, treatment, vaccination, biosecurity, and herd management can reduce clinical disease and transmission.",

  strengtheningEvidence: [

    "Multiple abortions within the herd",

    "Positive Leptospira serology with compatible clinical history",

    "Significant change in antibody titers on paired serum samples",

    "Positive PCR for pathogenic Leptospira",

    "Detection of Leptospira from appropriate fetal or reproductive tissues",

    "Compatible reproductive disease pattern with environmental exposure"

  ],

  weakeningEvidence: [

    "Negative appropriate diagnostic testing",

    "Alternative infectious cause of abortion confirmed",

    "No compatible reproductive history",

    "No evidence of exposure or herd transmission",

    "Clinical findings strongly supporting another diagnosis"

  ],

  classicFindings: [

    "Abortion",

    "Infertility",

    "Stillbirths",

    "Weak calves",

    "Fever",

    "Jaundice",

    "Hemoglobinuria",

    "Reduced milk production"

  ],

  ruleOutFindings: [

    "Bovine viral diarrhea virus infection",

    "Infectious bovine rhinotracheitis",

    "Neospora caninum abortion",

    "Campylobacteriosis",

    "Brucellosis",

    "Salmonellosis",

    "Listeriosis",

    "Bovine genital campylobacteriosis",

    "Other infectious causes of bovine abortion"

  ],

};