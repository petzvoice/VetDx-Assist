"use client";

import { useState } from "react";

import StepSidebar from "./StepSidebar";
import StepContent from "./StepContent";
import NavigationButtons from "./NavigationButtons";

import { DIAGNOSIS_STEPS } from "@/lib/steps";

export default function DiagnosisWizard() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < DIAGNOSIS_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-12 gap-6">
        <StepSidebar
          currentStep={currentStep}
          onStepClick={setCurrentStep}
        />

        <div className="col-span-9">
          {/* Temporary Debug */}
          <p className="mb-4 rounded-lg bg-slate-800 p-3 text-lg font-bold text-cyan-400">
            Current Step: {currentStep} / {DIAGNOSIS_STEPS.length - 1}
          </p>

          <StepContent currentStep={currentStep} />

          <NavigationButtons
            currentStep={currentStep}
            totalSteps={DIAGNOSIS_STEPS.length}
            onPrevious={previousStep}
            onNext={nextStep}
          />
        </div>
      </div>
    </div>
  );
}