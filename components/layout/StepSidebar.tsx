import { DIAGNOSIS_STEPS } from "@/lib/steps";

type StepSidebarProps = {
  currentStep: number;
  onStepClick: (step: number) => void;
};

export default function StepSidebar({
  currentStep,
  onStepClick,
}: StepSidebarProps) {
  return (
    <aside className="col-span-3 rounded-xl border border-slate-700 bg-slate-800 p-6">
      <h2 className="mb-6 text-xl font-bold text-cyan-400">
        Diagnosis Steps
      </h2>

      <ul className="space-y-4">
        {DIAGNOSIS_STEPS.map((step) => (
          <li key={step.id}>
            <button
              type="button"
              onClick={() => onStepClick(step.id)}
              className={`w-full rounded-lg p-2 text-left transition ${
                currentStep === step.id
                  ? "bg-cyan-500/20 font-semibold text-cyan-400"
                  : "text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {step.id + 1}. {step.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}