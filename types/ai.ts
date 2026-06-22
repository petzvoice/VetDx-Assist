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

  recommendedTests: string[];

  initialTreatment: string[];
}

export interface Prognosis {
  shortTerm: string;
  longTerm: string;
}

export interface AIClinicalReport {
  patientSummary: PatientSummary;

  triage: TriageAssessment;

  problemList: string[];

  differentials: DifferentialDiagnosis[];

  recommendedDiagnostics: string[];

  stabilization: string[];

  treatmentConsiderations: string[];

  monitoring: string[];

  redFlags: string[];

  clinicalPearls: string[];

  prognosis: Prognosis;

  clientSummary: string;
}