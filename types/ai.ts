export interface PatientSummary {
  species: string;
  breed: string;
  age: string;
  sex: string;
  weight: string;
  summary: string;
}

export interface TriageAssessment {
  status: "Stable" | "Urgent" | "Emergency";
  reason: string;
}

export interface DifferentialDiagnosis {
  name: string;

  category: string;

  confidence: number;

  reasoning: string[];

  supportingFindings: string[];

  againstFindings: string[];

  recommendedTests:
    | string[]
    | {
        test: string;
        justification?: string;
      }[];

  initialTreatment:
    | string[]
    | {
        recommendation: string;
        details?: string;
      }[];

      vetDxEvidence?: string[];
}

export interface DiagnosticRecommendation {
  test: string;
  justification?: string;
}

export interface StabilizationRecommendation {
  recommendation: string;
  details?: string;
}

export interface TreatmentRecommendation {
  recommendation: string;
  category?: string;
  details?: string;

  linkedDrugs?: {
    drugId?: string;
    name: string;
    category?: string;
  }[];
}

export interface MonitoringRecommendation {
  parameter: string;
  frequency?: string;
  details?: string;
}

export interface EmergencyFlag {
  flag: string;
  severity?: string;
  details?: string;
}

export interface Prognosis {
  shortTerm?: string;
  longTerm?: string;

  initialPrognosis?: string;

  supportingFindings?: string[];

  factorsImprovingPrognosis?: string[];

  factorsWorseningPrognosis?: string[];
}

export interface AIClinicalReport {
  patientSummary: PatientSummary;

  triage: TriageAssessment;

  problemList:
    | string[]
    | {
        problem?: string;
        priority?: string;
        description?: string;
      }[];

  differentials: DifferentialDiagnosis[];

  recommendedDiagnostics:
    | string[]
    | DiagnosticRecommendation[];

  stabilization:
    | string[]
    | StabilizationRecommendation[];

  treatmentConsiderations:
    | string[]
    | TreatmentRecommendation[];

  monitoring:
    | string[]
    | MonitoringRecommendation[];

  redFlags:
    | string[]
    | EmergencyFlag[];

  clinicalPearls: string[];

  prognosis: Prognosis | string;

  clientSummary:
    | string
    | {
        summary?: string;
      };
}