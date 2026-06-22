type WizardNavigationProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function WizardNavigation({
  currentStep,
  setCurrentStep,
}: WizardNavigationProps) {
  return (
    <div className="mt-8 flex justify-between">
      <button
        onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
        disabled={currentStep === 0}
        className="rounded-lg bg-slate-700 px-6 py-3 disabled:opacity-50"
      >
        Previous
      </button>

      <button
        onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 4))}
        disabled={currentStep === 4}
        className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-600 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}