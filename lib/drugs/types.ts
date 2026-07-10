// lib/drugs/types.ts

/**
 * VetDx Assist
 * Veterinary Drug Reference Engine
 * Master Type Definitions
 */

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
  TOPICAL = "Topical",
  OTIC = "Otic",
  OPHTHALMIC = "Ophthalmic",
  INTRANASAL = "Intranasal",
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
  SHAMPOO = "Shampoo",
  SPRAY = "Spray",
  EAR_DROPS = "Ear Drops",
  EYE_DROPS = "Eye Drops",
  OTHER = "Other",
}

export interface DrugFormulation {
  id: string;

  dosageForm: DosageForm;

  strength: string;

  concentration?: string;

  routes: Route[];

  notes?: string;
}

export interface DoseReference {
  species: Species;

  indication: string;

  route: Route;

  dose: string;

  frequency?: string;

  maximumDose?: string;

  evidence?: string;

  reference?: string;
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

export interface Drug {

  // Basic Information

  id: string;

  genericName: string;

  brandNames: string[];

  drugClass: string;

  pharmacologicClass: string;

  category: string;

  prescriptionRequired: boolean;

  controlledDrug: boolean;

  // Species

  species: Species[];

  // Quick Facts

  commonUses: string[];

  commonRoutes: Route[];

  // Formulations

  formulations: DrugFormulation[];

  // Dose References

  doseReferences: DoseReference[];

  // Clinical Information

  mechanismOfAction: string;

  spectrum?: string;

  indications: string[];

  contraindications: string[];

  precautions: string[];

  adverseEffects: string[];

  drugInteractions: string[];

  monitoring: string[];

  storage: string[];

  pregnancy: string;

  lactation: string;

  withdrawalPeriod?: string;

  clinicalDecisionNotes: string[];

  // Educational

  clinicalPearls: string[];

  references: DrugReference[];

  // Metadata

  metadata: DrugMetadata;
}