"use client";

import Card from "../ui/Card";

type RecommendedDiagnosticsCardProps = {
  diagnostics: string[];
};

export default function RecommendedDiagnosticsCard({
  diagnostics,
}: RecommendedDiagnosticsCardProps) {
  return (
    <Card title="🧪 Recommended Diagnostic Plan">
      {diagnostics.length === 0 ? (
        <p className="text-slate-400">
          No diagnostic recommendations available.
        </p>
      ) : (
        <div className="space-y-4">
          {diagnostics.map((test, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/50 p-4"
            >
              <div>
                <p className="text-sm text-slate-400">
                  Priority {index + 1}
                </p>

                <h3 className="text-lg font-semibold text-white">
                  {test}
                </h3>
              </div>

              <span className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">
                Recommended
              </span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}