"use client";

import PatientInformation from "../diagnosis/PatientInformation";
import ClinicalHistory from "../diagnosis/ClinicalHistory";
import ClinicalSigns from "../diagnosis/ClinicalSigns";
import PhysicalExamination from "../diagnosis/PhysicalExamination";
import DiagnosisForm from "../diagnosis/DiagnosisForm";
import DifferentialDiagnosis from "../diagnosis/DifferentialDiagnosis";

type StepContentProps = {
  currentStep: number;
};

export default function StepContent({
  currentStep,
}: StepContentProps) {
  return (
    <section className="col-span-9">
      {currentStep === 0 && <PatientInformation />}

      {currentStep === 1 && <ClinicalHistory />}

      {currentStep === 2 && <ClinicalSigns />}

      {currentStep === 3 && <PhysicalExamination />}

      {currentStep === 4 && <DiagnosisForm />}

      {currentStep === 5 && <DifferentialDiagnosis />}
    </section>
  );
}