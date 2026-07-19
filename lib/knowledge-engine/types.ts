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
  priority: "Essential" | "Recommended" | "Optional";
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

export interface DiseaseCard extends KnowledgeCard {
  synonyms?: string[];

  overview: string;

  clinicalProblems: string[];

  workflow: WorkflowStep[];

  diagnostics: DiagnosticStep[];

  drugCategories: DrugCategoryRecommendation[];

  monitoring: MonitoringStep[];

  precautions: Precaution[];

  prognosis: string;
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

export interface ClinicalProblemCard
  extends KnowledgeCard {

  assessment: string;

  diagnostics: DiagnosticStep[];

  stabilization: StabilizationStep[];

  monitoring: MonitoringStep[];

  drugCategories: DrugCategoryRecommendation[];
}

