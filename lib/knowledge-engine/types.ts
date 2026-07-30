import { Species } from "@/lib/drugs/types";

export interface KnowledgeCard {
  id: string;
  title: string;
  description?: string;
  species: Species[];
}

export interface DiagnosticStep {
  id: string;
  name: string;
  priority: "Essential" | "Recommended" | "Optional" |"Conditional";
  reason?: string;
}

export interface MonitoringStep {
  id: string;
  parameter: string;
  frequency?: string;
  reason?: string;
}

export interface Precaution {
  id: string;
  title: string;
  description: string;
}

export interface WorkflowStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface RecommendedDrug {
  drugId: string;

  category:
    | "Antibiotic"
    | "Antiemetic"
    | "Analgesic"
    | "Antiprotozoal"
    | "Antitussive"
    | "Anti-inflammatory"
    | "Bronchodilator"
    |"Diuretic"
    |"Macrocyclic Lactone"
    | "Antiplatelet"
    | "NSAID"
    | "Opioid"
    | "Sedative"
    | "Corticosteroid"
    | "Fluid Therapy"
    | "Gastrointestinal"
    | "Gastroprotectant"
    | "Cardiovascular"
    | "Antiparasitic"
    | "Anticoagulant"
    |"Anticholinergic"
    | "Emergency Drug"
    | "Oxygen Therapy"
    | "Loop Diuretic"
    | "Positive Inotrope"
    | "ACE Inhibitor"
    |"Antifungal"
    |"Antithyroid"
    |"Renal Support"
    |"Urinary Relaxation"
    |"Antiviral"
    |"Topical Medication"
    |"Antiseptic"
    |"Topical Antimicrobial"
    |"JAK Inhibitor"
    | "Aldosterone Antagonist"
    | "Antiarrhythmic"
    |"Mydriatic"
    |"Chemotherapy"
    |"Ocular Lubricant"
    |"Immunomodulator"
    |"Immunosuppressant"
    |"Carbonic Anhydrase Inhibitor"
    |"Ammonia Reduction Therapy"
    |"Enzyme"
    |"Laxative"
    |"Muscle Relaxant"
    |"Cardiac Glycoside"
    |"Sympathomimetic"
    |"Methylxanthine"
    |"NSAIDs"
    |"Buffers"
    |"Beta Blocker"
    |"Antifoaming"
    |"Metabolic Therapy"
    |"Mineral Therapy"
    |"Anthelmintics"
    |"Antidote"
    |"Rumen Modifying"
    |"Insulin"
    |"Glucocorticoid"
    |"Mineralocorticoid"
    |"Adrenocorticolytic"
    |"Intraocular Pressure Reduction"
    |"Antihypertensive"
    |"Supplement"
    |"Hormone"
    | "Emergency"
    |"Chelation"
    |"Anticonvulsant"
    |"Phosphate Binder"
    |"Non-absorbable Disaccharide"
    |"5-Alpha Reductase Inhibitor"
    |"GnRH Agonist"
    |"Prokinetic"
    |"Anticholinesterase"
    | "Adrenal Enzyme Inhibitor"
    |"Calcium Channel Blocker"
    | "Hepatoprotectant"
    | "Nutritional Support";

  priority:
    | "First Line"
    | "Initial Therapy"
    | "Alternative"
    | "Severe Cases"
    | "Adjunctive"
    | "Long Term"
    |"Conditional"
    | "Combination Therapy"
    | "Preventive"
    |"Perioperative"
    |"Maintenance"
    | "Antithrombotic"
    | "Emergency"
    | "Supportive";

  notes?: string;
}
export interface DiseaseCard extends KnowledgeCard {
  synonyms?: string[];

  overview: string;

  clinicalProblems: string[];

  workflow: WorkflowStep[];

  diagnostics: DiagnosticStep[];

  /**
   * Therapeutic approaches used for reasoning/display.
   * Example:
   * - Antibiotic
   * - Fluid Therapy
   * - Antiemetic
   */
  drugCategories: DrugCategoryRecommendation[];

  /**
   * Drug IDs from the VetDx drug database.
   * Used to display disease-specific recommended drugs.
   * Example:
   * ["doxycycline", "ampicillin", "penicillin-g"]
   */
 recommendedDrugs?: RecommendedDrug[];

  clinicalEvidence?: ClinicalEvidence;

  monitoring: MonitoringStep[];

  precautions: Precaution[];

  prognosis: string;

  strengtheningEvidence: string[];

weakeningEvidence: string[];

classicFindings: string[];

ruleOutFindings: string[];

  stabilization?: string[];
}


export interface StabilizationStep {
  id: string;

  title: string;

  priority:
    | "Immediate"
    | "Early"
    | "Supportive";

  description: string;
}

export interface DrugCategoryRecommendation {
  category: string;

  indication?: string;

  reason?: string;
}

export interface ClinicalProblemCard extends KnowledgeCard {
  assessment: string;

  diagnostics: DiagnosticStep[];

  stabilization: StabilizationStep[];

  monitoring: MonitoringStep[];

  drugCategories: DrugCategoryRecommendation[];

  clinicalEvidence?: ClinicalEvidence;
}

export interface EvidenceItem {
  finding: string;
  weight: number;
}

export interface ClinicalEvidence {
  signalment?: EvidenceItem[];

  history?: EvidenceItem[];

  clinicalSigns?: EvidenceItem[];

  physicalExam?: EvidenceItem[];

  cbc?: EvidenceItem[];

  biochemistry?: EvidenceItem[];

  urinalysis?: EvidenceItem[];

  imaging?: EvidenceItem[];

  toxicology?: EvidenceItem[];

  infectiousDisease?: EvidenceItem[];

  supports?: EvidenceItem[];

  against?: EvidenceItem[];
}