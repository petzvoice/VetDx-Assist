"use client";

import Card from "../ui/Card";

type DiagnosticItem =
  | string
  | {
      test?: string;
      justification?: string;
    };

type RecommendedDiagnosticsCardProps = {
  diagnostics: DiagnosticItem[];
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
          {diagnostics.map((item, index) => {
            const testName =
              typeof item === "string"
                ? item
                : item.test ?? "Diagnostic Test";

            const justification =
              typeof item === "string"
                ? ""
                : item.justification ?? "";

            return (
              <div
                key={index}
                className="rounded-xl border border-slate-700 bg-slate-900/50 p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      Priority {index + 1}
                    </p>

                    <h3 className="text-lg font-semibold text-white">
                      {testName}
                    </h3>

                    {justification && (
                      <p className="mt-2 text-sm text-slate-400">
                        {justification}
                      </p>
                    )}
                  </div>

                  <span className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">
                    Recommended
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}