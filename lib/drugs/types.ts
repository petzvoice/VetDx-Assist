// lib/drugs/types.ts

/**
 * ==========================================================
 * VetDx Assist
 * Veterinary Drug Reference Engine
 * Version 2.0 (Final Schema)
 * ==========================================================
 */

/* ==========================================================
   ENUMS
========================================================== */

export enum Species {
  DOG = "Dog",
  CAT = "Cat",
  CATTLE = "Cattle",
  BUFFALO = "Buffalo",
  HORSE = "Horse",
  SHEEP = "Sheep",
  GOAT = "Goat",
  PIG = "Pig",
  RABBIT = "Rabbit",
  CAMEL = "Camel",
  BIRD = "Bird",
  OTHER = "Other",
}

export enum Route {
  PO = "PO",
  IV = "IV",
  IM = "IM",
  SC = "SC",
  IP = "IP",
  IO = "IO",
  IT = "IT",
  IN = "IN",
  TOPICAL = "Topical",
  OTIC = "Otic",
  OPHTHALMIC = "Ophthalmic",
  INHALATION = "Inhalation",
  RECTAL = "Rectal",
  TRANSDERMAL = "Transdermal",
  OTHER = "Other",
}

export enum DosageForm {
  TABLET = "Tablet",
  CAPSULE = "Capsule",
  INJECTION = "Injection",
  ORAL_SUSPENSION = "Oral Suspension",
  ORAL_SOLUTION = "Oral Solution",
  POWDER = "Powder",
  BOLUS = "Bolus",
  CREAM = "Cream",
  OINTMENT = "Ointment",
  GEL = "Gel",
  SPRAY = "Spray",
  SHAMPOO = "Shampoo",
  EAR_DROPS = "Ear Drops",
  EYE_DROPS = "Eye Drops",
  IMPLANT = "Implant",
  OTHER = "Other",
}

export enum ConcentrationUnit {
  MG_PER_ML = "mg/mL",
  MG_PER_TABLET = "mg/tablet",
  MG_PER_CAPSULE = "mg/capsule",
  MG_PER_BOLUS = "mg/bolus",
  IU_PER_ML = "IU/mL",
  IU_PER_TABLET = "IU/tablet",
  PERCENT = "%",
  OTHER = "Other",
}

export enum DoseUnit {
  MG_PER_KG = "mg/kg",
  MCG_PER_KG = "mcg/kg",
  MG_PER_M2 = "mg/m²",
  IU_PER_KG = "IU/kg",
  MEQ_PER_KG = "mEq/kg",
  MG_PER_KG_HR = "mg/kg/hr",
  MCG_PER_KG_MIN = "mcg/kg/min",
}
export enum DoseBasis {
  BODY_WEIGHT = "Body Weight",
  BODY_SURFACE_AREA = "Body Surface Area",
  PER_ANIMAL = "Per Animal",
}

export enum PregnancyCategory {
  SAFE = "Generally Considered Safe",
  USE_WITH_CAUTION = "Use With Caution",
  AVOID = "Avoid If Possible",
  CONTRAINDICATED = "Contraindicated",
  UNKNOWN = "Unknown",
}
export enum DrugStatus {
  ACTIVE = "Active",
  LIMITED = "Limited",
  DISCONTINUED = "Discontinued",
}
/* ==========================================================
   BASIC REUSABLE TYPES
========================================================== */

export interface Concentration {
  value: number;
  unit: ConcentrationUnit;
}

export interface DoseRange {
  minimum: number;
  maximum: number;
  unit: DoseUnit;
}

export interface DrugReference {
  title: string;
  edition?: string;
  year?: number;
  publisher?: string;
}

export interface DrugMetadata {
  version: string;
  lastReviewed: string;
  tags: string[];
}
/* ==========================================================
   FORMULATIONS
========================================================== */

export interface DrugFormulation {
  id: string;

  dosageForm: DosageForm;

  strength: string;

  concentration: Concentration;

  routes: Route[];

  notes?: string;

  speciesNotes?: Partial<Record<Species, string>>;
}

/* ==========================================================
   DOSE REFERENCES
========================================================== */

export interface DoseReference {
  species: Species;

  indication: string;

  route: Route;

  dose: DoseRange;

  basis: DoseBasis;

  frequency?: string;

  duration?: string;

  maximumTotalDose?: string;

  notes?: string;

  evidence?: string;

  reference?: string;
}

/* ==========================================================
   SAFETY
========================================================== */

export interface DrugSafety {
  contraindications: string[];

  precautions: string[];

  adverseEffects: string[];

  drugInteractions: string[];

  monitoring: string[];

  pregnancy: {
    category: PregnancyCategory;

    notes: string;
  };

  lactation: string;

  withdrawalPeriod?: string;

  storage: string[];
}

/* ==========================================================
   CLINICAL
========================================================== */

export interface DrugClinical {
  mechanismOfAction: string;

  spectrum?: string;

  indications: string[];

  commonUses: string[];

  clinicalDecisionNotes: string[];

  clinicalPearls: string[];
}

/* ==========================================================
   QUICK FACTS
========================================================== */

export interface DrugQuickFacts {
  prescriptionRequired: boolean;

  controlledDrug: boolean;

  category: string;

  drugClass: string;

  pharmacologicClass: string;

  commonRoutes: Route[];

  availableSpecies: Species[];
}
/* ==========================================================
   MAIN DRUG INTERFACE
========================================================== */

export interface Drug {
  /* --------------------------------------------------------
     Identity
  -------------------------------------------------------- */

  id: string;

  genericName: string;

  brandNames: string[];
  status: DrugStatus;
  searchTerms: string[];

  /* --------------------------------------------------------
     Quick Facts
  -------------------------------------------------------- */

  quickFacts: DrugQuickFacts;

  /* --------------------------------------------------------
     Species
  -------------------------------------------------------- */

  species: Species[];

  /* --------------------------------------------------------
     Formulations
  -------------------------------------------------------- */

  formulations: DrugFormulation[];

  /* --------------------------------------------------------
     Dose References
  -------------------------------------------------------- */

  doseReferences: DoseReference[];

  /* --------------------------------------------------------
     Clinical Information
  -------------------------------------------------------- */

  clinical: DrugClinical;

  /* --------------------------------------------------------
     Safety
  -------------------------------------------------------- */

  safety: DrugSafety;

  /* --------------------------------------------------------
     References
  -------------------------------------------------------- */

  references: DrugReference[];

  /* --------------------------------------------------------
     Metadata
  -------------------------------------------------------- */

  metadata: DrugMetadata;
}