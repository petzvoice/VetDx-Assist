"use client";

type ConfidenceBarProps = {
  confidence: number;
};

export default function ConfidenceBar({
  confidence,
}: ConfidenceBarProps) {
  const value = Math.max(0, Math.min(100, confidence));

  function getColor() {
    if (value >= 80) return "bg-emerald-500";
    if (value >= 60) return "bg-yellow-500";
    return "bg-red-500";
  }

  function getLabel() {
    if (value >= 80) return "High";
    if (value >= 60) return "Moderate";
    return "Low";
  }

  return (
    <div className="space-y-2">

      <div className="flex items-center justify-between">

        <span className="text-sm font-medium text-slate-300">
          Confidence
        </span>

        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-white">
          {value}%
        </span>

      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-700">

        <div
          className={`h-full rounded-full transition-all duration-700 ${getColor()}`}
          style={{
            width: `${value}%`,
          }}
        />

      </div>

      <p className="text-xs text-slate-400">
        {getLabel()} confidence
      </p>

    </div>
  );
}