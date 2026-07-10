import { Drug } from "../types";

export const antibiotics: Drug[] = [];
import {
  DosageForm,
  Drug,
  Route,
  Species,
} from "../types";

export const amoxicillinClavulanate: Drug = {
  id: "amoxicillin-clavulanate",

  genericName: "Amoxicillin + Clavulanic Acid",

  brandNames: [
    "Clavamox",
    "Synulox",
    "Augmentin Veterinary",
  ],

  drugClass: "Beta-lactam Antimicrobial",

  pharmacologicClass: "Aminopenicillin + Beta-lactamase Inhibitor",

  category: "Antibiotic",

  prescriptionRequired: true,

  controlledDrug: false,

  species: [
    Species.DOG,
    Species.CAT,
  ],

  commonUses: [
    "Skin and soft tissue infections",
    "Urinary tract infections",
    "Respiratory tract infections",
    "Oral infections",
    "Wound infections",
  ],

  commonRoutes: [
    Route.PO,
  ],

  formulations: [
    {
      id: "tab-50",

      dosageForm: DosageForm.TABLET,

      strength: "50 mg",

      concentration: "50 mg/tablet",

      routes: [Route.PO],
    },

    {
      id: "tab-250",

      dosageForm: DosageForm.TABLET,

      strength: "250 mg",

      concentration: "250 mg/tablet",

      routes: [Route.PO],
    },

    {
      id: "tab-500",

      dosageForm: DosageForm.TABLET,

      strength: "500 mg",

      concentration: "500 mg/tablet",

      routes: [Route.PO],
    },

    {
      id: "oral-suspension",

      dosageForm: DosageForm.ORAL_SUSPENSION,

      strength: "Various",

      concentration: "62.5 mg/mL",

      routes: [Route.PO],

      notes:
        "Verify product concentration before calculating volume.",
    },
  ],

  doseReferences: [
    {
      species: Species.DOG,

      indication: "Susceptible bacterial infections",

      route: Route.PO,

      dose: "12.5–25 mg/kg",

      frequency: "Every 12 hours",

      reference:
        "Veterinary pharmacology reference",
    },

    {
      species: Species.CAT,

      indication: "Susceptible bacterial infections",

      route: Route.PO,

      dose: "12.5–20 mg/kg",

      frequency: "Every 12 hours",

      reference:
        "Veterinary pharmacology reference",
    },
  ],

  mechanismOfAction:
    "Amoxicillin inhibits bacterial cell wall synthesis. Clavulanic acid inhibits many beta-lactamases, extending the antibacterial spectrum of amoxicillin.",

  spectrum:
    "Broad spectrum activity against many susceptible Gram-positive and Gram-negative bacteria. Activity depends on bacterial susceptibility and beta-lactamase production.",

  indications: [
    "Skin infections",
    "Soft tissue infections",
    "Urinary tract infections",
    "Respiratory tract infections",
    "Oral infections",
    "Wound infections",
  ],

  contraindications: [
    "Known hypersensitivity to penicillins.",
    "Known hypersensitivity to beta-lactam antibiotics.",
  ],

  precautions: [
    "Use only when bacterial infection is suspected or confirmed.",
    "Culture and susceptibility testing are recommended whenever appropriate.",
    "Adjust therapy based on clinical response and laboratory findings.",
    "Use antimicrobials responsibly to support antimicrobial stewardship.",
  ],

  adverseEffects: [
    "Vomiting",
    "Diarrhea",
    "Reduced appetite",
    "Hypersensitivity reactions",
    "Rare allergic reactions",
  ],

  drugInteractions: [
    "Concurrent bacteriostatic antimicrobials may reduce bactericidal activity in some situations.",
    "Review all concurrent medications before prescribing.",
  ],

  monitoring: [
    "Monitor clinical response.",
    "Monitor for gastrointestinal adverse effects.",
    "Monitor for hypersensitivity reactions.",
  ],
    storage: [
    "Store according to the manufacturer's labeling.",
    "Protect tablets from excessive moisture and heat.",
    "Reconstituted oral suspensions should be stored as directed on the product label and discarded after the recommended period.",
  ],

  pregnancy:
    "Use only after a veterinary risk-benefit assessment. Consult current product labeling before use in pregnant animals.",

  lactation:
    "Use only after a veterinary risk-benefit assessment. Consult current product labeling before use in lactating animals.",

  withdrawalPeriod:
    "Refer to the approved product label for food-producing animals. Withdrawal periods vary by formulation and jurisdiction.",

  clinicalDecisionNotes: [
    "Whenever possible, obtain samples for bacterial culture and antimicrobial susceptibility testing before initiating antimicrobial therapy.",
    "Selection of an antimicrobial should consider the suspected pathogen, infection site, pharmacokinetics, and local resistance patterns.",
    "Clinical response should be reassessed if expected improvement is not observed.",
    "This reference is intended for educational and clinical support and should not replace professional veterinary judgment.",
  ],

  clinicalPearls: [
    "Clavulanic acid extends the antibacterial spectrum by inhibiting many beta-lactamases.",
    "Not all resistant organisms are susceptible despite the addition of clavulanic acid.",
    "Appropriate antimicrobial stewardship helps reduce antimicrobial resistance.",
    "Always verify the concentration of the selected formulation before calculating the administration volume.",
    "Culture and susceptibility testing are recommended for recurrent, severe, or non-responsive infections whenever feasible.",
  ],

  references: [
    {
      title: "Merck Veterinary Manual",
      edition: "Current Online Edition",
      publisher: "Merck & Co.",
    },
    {
      title: "Plumb's Veterinary Drug Handbook",
    },
    {
      title: "BSAVA Small Animal Formulary",
    },
  ],

  metadata: {
    version: "1.0.0",
    lastReviewed: "2026-07-10",
    tags: [
      "antibiotic",
      "beta-lactam",
      "aminopenicillin",
      "dog",
      "cat",
      "oral",
    ],
  },
};

export const antibiotics: Drug[] = [
  amoxicillinClavulanate,
];