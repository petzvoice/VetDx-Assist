"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

/* ===========================
   Interfaces
=========================== */

export interface PatientData {
  species: string;
  breed: string;
  age: string;
  sex: string;
  weight: string;
}

export interface HistoryData {
  chiefComplaint: string;
  duration: string;
  appetite: string;
  activity: string;
  waterIntake: string;
  urination: string;
  defecation: string;
  illnessHistory: string;
  previousTreatment: string;
}

export interface ClinicalSignsData {
  general: string[];
  gastrointestinal: string[];
  respiratory: string[];
  cardiovascular: string[];
  urinary: string[];
  neurological: string[];
  musculoskeletal: string[];
  dermatology: string[];
  reproductive: string[];
}

export interface PhysicalExamData {
  temperature: string;
  pulse: string;
  respiration: string;
  mucousMembranes: string;
  crt: string;
  hydration: string;
  bodyConditionScore: string;
  painScore: string;
  findings: string;
}

export interface DiagnosticsData {
  cbc: string;
  biochemistry: string;
  urinalysis: string;
  imaging: string;
  otherTests: string;
}

export interface CaseData {
  patient: PatientData;
  history: HistoryData;
  clinicalSigns: ClinicalSignsData;
  physicalExam: PhysicalExamData;
  diagnostics: DiagnosticsData;
}

/* ===========================
   Context
=========================== */

type CaseContextType = {
  caseData: CaseData;

  setCaseData: React.Dispatch<
    React.SetStateAction<CaseData>
  >;

  updatePatient: (
    field: keyof PatientData,
    value: string
  ) => void;

  updateHistory: (
    field: keyof HistoryData,
    value: string
  ) => void;

  updateClinicalSigns: (
    field: keyof ClinicalSignsData,
    value: string[]
  ) => void;

  updatePhysicalExam: (
    field: keyof PhysicalExamData,
    value: string
  ) => void;

  updateDiagnostics: (
    field: keyof DiagnosticsData,
    value: string
  ) => void;

  resetCase: () => void;
};

/* ===========================
   Default Data
=========================== */

const defaultCaseData: CaseData = {
  patient: {
    species: "",
    breed: "",
    age: "",
    sex: "",
    weight: "",
  },

  history: {
    chiefComplaint: "",
    duration: "",
    appetite: "",
    activity: "",
    waterIntake: "",
    urination: "",
    defecation: "",
    illnessHistory: "",
    previousTreatment: "",
  },

  clinicalSigns: {
    general: [],
    gastrointestinal: [],
    respiratory: [],
    cardiovascular: [],
    urinary: [],
    neurological: [],
    musculoskeletal: [],
    dermatology: [],
    reproductive: [],
  },

  physicalExam: {
    temperature: "",
    pulse: "",
    respiration: "",
    mucousMembranes: "",
    crt: "",
    hydration: "",
    bodyConditionScore: "",
    painScore: "",
    findings: "",
  },

  diagnostics: {
    cbc: "",
    biochemistry: "",
    urinalysis: "",
    imaging: "",
    otherTests: "",
  },
};

const CaseContext = createContext<
  CaseContextType | undefined
>(undefined);

/* ===========================
   Provider
=========================== */

export function CaseProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [caseData, setCaseData] =
    useState<CaseData>(defaultCaseData);

  function updatePatient(
    field: keyof PatientData,
    value: string
  ) {
    setCaseData((prev) => ({
      ...prev,
      patient: {
        ...prev.patient,
        [field]: value,
      },
    }));
  }

  function updateHistory(
    field: keyof HistoryData,
    value: string
  ) {
    setCaseData((prev) => ({
      ...prev,
      history: {
        ...prev.history,
        [field]: value,
      },
    }));
  }

  function updateClinicalSigns(
    field: keyof ClinicalSignsData,
    value: string[]
  ) {
    setCaseData((prev) => ({
      ...prev,
      clinicalSigns: {
        ...prev.clinicalSigns,
        [field]: value,
      },
    }));
  }

  function updatePhysicalExam(
    field: keyof PhysicalExamData,
    value: string
  ) {
    setCaseData((prev) => ({
      ...prev,
      physicalExam: {
        ...prev.physicalExam,
        [field]: value,
      },
    }));
  }

  function updateDiagnostics(
    field: keyof DiagnosticsData,
    value: string
  ) {
    setCaseData((prev) => ({
      ...prev,
      diagnostics: {
        ...prev.diagnostics,
        [field]: value,
      },
    }));
  }

  function resetCase() {
    setCaseData(defaultCaseData);
  }

  return (
    <CaseContext.Provider
      value={{
        caseData,
        setCaseData,
        updatePatient,
        updateHistory,
        updateClinicalSigns,
        updatePhysicalExam,
        updateDiagnostics,
        resetCase,
      }}
    >
      {children}
    </CaseContext.Provider>
  );
}

/* ===========================
   Hook
=========================== */

export function useCase() {
  const context = useContext(CaseContext);

  if (!context) {
    throw new Error(
      "useCase must be used inside CaseProvider."
    );
  }

  return context;
}