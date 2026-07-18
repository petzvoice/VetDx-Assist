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
  HORSE = "Horse",
  CATTLE = "Cattle",
  SHEEP = "Sheep",
  GOAT = "Goat",
  PIG = "Pig",
  SWINE = "Swine",
  RABBIT = "Rabbit",
  GUINEA_PIG = "Guinea Pig",
  FERRET = "Ferret",
  BIRD = "Bird",
  EXOTIC_MAMMAL = "Exotic Mammal",
  REPTILE = "Reptile",
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
  IA = "Intra-articular",
  INHALATION = "Inhalation",
  RECTAL = "Rectal",
  PR = "Per Rectum",
  TRANSDERMAL = "Transdermal",
  TOPICAL = "Topical",
  OPHTHALMIC = "Ophthalmic",
  OTIC = "Otic",
  INTRANASAL = "Intranasal",
  INTRA_ARTICULAR = "Intra-articular",
  INTRAMAMMARY = "Intramammary",
  BUCCAL = "Buccal",
  ORAL_TRANSMUCOSAL = "Oral Transmucosal",
  EPIDURAL = "Epidural",
  OTHER = "Other",
}

export enum DosageForm {
  TABLET = "Tablet",
  CAPSULE = "Capsule",
  CHEWABLE_TABLET = "CHEWABLE_TABLET",
  INJECTION = "Injection",
  INJECTABLE_SUSPENSION = "Injectable Suspension",
  INJECTABLE_SOLUTION = "Injectable Solution",
  INJECTABLE_EMULSION = "Injectable Emulsion",
  POWDER_FOR_INJECTION = "Powder for Injection",
  ORAL_SUSPENSION = "Oral Suspension",
  ORAL_PASTE = "ORAL_PASTE",
  ORAL_SOLUTION = "Oral Solution",
  INHALATION_LIQUID = "Inhalation Liquid",
  NASAL_SPRAY = "Nasal Spray",
  POWDER = "Powder",
  BOLUS = "Bolus",
  CREAM = "Cream",
  OINTMENT = "Ointment",
  GEL = "Gel",
  RECTAL_GEL = "Rectal Gel",
  SPRAY = "Spray",
  SHAMPOO = "Shampoo",
  EAR_DROPS = "Ear Drops",
  OTIC_SOLUTION = "Otic Solution",
  EYE_DROPS = "Eye Drops",
  OPHTHALMIC_SOLUTION = "Ophthalmic Solution",
  OPHTHALMIC_SUSPENSION = "Ophthalmic Suspension",
  OPHTHALMIC_OINTMENT = "Ophthalmic Ointment",
  IMPLANT = "Implant",
  INTRAMAMMARY_INFUSION = "Intramammary Infusion",
  INTRALESIONAL_INJECTION = "Intralesional Injection",
  POUR_ON = "Pour-on",
  OTHER = "Other",
}

export enum ConcentrationUnit {
  MG_PER_ML = "mg/mL",
  MG = "mg",
  MG_PER_G = "MG_PER_G",
  MG_PER_LITER = "mg/L",
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
   MG = "mg",
   MG_PER_LITER = "mg/L",
  MCG_PER_KG = "mcg/kg",
  MG_PER_M2 = "mg/m²",
  IU_PER_KG = "IU/kg",
  MEQ_PER_KG = "mEq/kg",
  MG_PER_KG_HR = "mg/kg/hr",
  MG_PER_KG_PER_MIN = "mg/kg/min",
  MCG_PER_KG_MIN = "mcg/kg/min",
  PERCENT = "%",
}
export enum DoseBasis {
  BODY_WEIGHT = "Body Weight",
  FIXED_DOSE = "Fixed Dose",
  FIXED_CONCENTRATION = "fixed_concentration",
  BODY_SURFACE_AREA = "Body Surface Area",
  PER_ANIMAL = "Per Animal",
  CONCENTRATION = "Concentration",
}

export enum ReproductionRecommendation {
  COMPATIBLE = "Compatible",
  SAFE = "Safe",
  GENERALLY_SAFE = "generally_safe",
  BENEFIT_RISK = "Use only if benefits outweigh risks",
  AVOID = "Avoid",
  CONTRAINDICATED = "Contraindicated",
  NOT_ESTABLISHED = "Safety not established",
  USE_WITH_CAUTION = "Use With Caution",
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
  // For powder injections with multiple vial sizes
  vialStrengths?: number[];
  // For known reconstituted concentrations
  standardConcentration?: number;
  // Unit after reconstitution
  reconstitutionUnit?: ConcentrationUnit;


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
  
  fixedDose?: string;

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



  withdrawalPeriod?: string;

  storage: string[];
}
export interface DrugReproduction {
  pregnancy: {
    recommendation: ReproductionRecommendation;
    notes: string[];
  };

  lactation: {
    recommendation: ReproductionRecommendation;
    notes: string[];
  };

  breeding: {
    recommendation: ReproductionRecommendation;
    notes: string[];
  };
}

export interface DrugOverdose {
  signs: string[];

  management: string[];
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

  availableRoutes: Route[];

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
   Reproduction
-------------------------------------------------------- */
  reproduction: DrugReproduction;


  overdose: DrugOverdose;

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