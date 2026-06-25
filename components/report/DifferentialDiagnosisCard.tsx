"use client";

import Card from "../ui/Card";

type TestItem =
  | string
  | {
      test?: string;
      justification?: string;
    };

type DifferentialDiagnosisCardProps = {
  rank: number;
  name: string;
  confidence: number;
  reasons?: string[];
  tests?: TestItem[];
};

export default function DifferentialDiagnosisCard({
  rank,
  name,
  confidence,
  reasons = [],
  tests = [],
}: DifferentialDiagnosisCardProps) {
  const confidenceColor =
    confidence >= 85
      ? "bg-green-500"
      : confidence >= 70
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <Card title={`🏆 Differential Diagnosis #${rank}`}>
      <div className="space-y-8">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {name}
            </h2>

            <p className="text-slate-400">
              AI Differential Diagnosis
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-400">
              Confidence
            </p>

            <span
              className={`inline-block rounded-full px-4 py-2 font-bold text-white ${confidenceColor}`}
            >
              {confidence}%
            </span>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm text-slate-400">
            <span>Confidence</span>
            <span>{confidence}%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-700">
            <div
              className={`${confidenceColor} h-full transition-all duration-500`}
              style={{
                width: `${confidence}%`,
              }}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-cyan-400">
            🧠 Clinical Reasoning
          </h3>

          <ul className="space-y-2">
            {(reasons ?? []).map((reason, index) => (
              <li
                key={index}
                className="rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-slate-300"
              >
                • {reason}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-cyan-400">
            🧪 Recommended Diagnostic Tests
          </h3>

          <div className="space-y-3">
            {(tests ?? []).map((test, index) => {
              const testName =
                typeof test === "string"
                  ? test
                  : test.test ?? "Diagnostic Test";

              const justification =
                typeof test === "string"
                  ? ""
                  : test.justification ?? "";

              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-700 bg-slate-900/50 p-4"
                >
                  <p className="font-medium text-white">
                    {testName}
                  </p>

                  {justification && (
                    <p className="mt-2 text-sm text-slate-400">
                      {justification}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </Card>
  );
}