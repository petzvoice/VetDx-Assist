type NavigationButtonsProps = {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
};

export default function NavigationButtons({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
}: NavigationButtonsProps) {
  return (
    <div className="mt-8 flex justify-between">
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentStep === 0}
        className="rounded-lg border border-slate-600 px-6 py-3 text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Previous
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={currentStep === totalSteps - 1}
        className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next →
      </button>
    </div>
  );
}