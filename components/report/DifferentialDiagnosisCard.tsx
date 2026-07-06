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

function getLikelihood(confidence: number) {
  if (confidence >= 90) {
    return {
      label: "Very High",
      color: "bg-green-600",
    };
  }

  if (confidence >= 75) {
    return {
      label: "High",
      color: "bg-green-500",
    };
  }

  if (confidence >= 60) {
    return {
      label: "Moderate",
      color: "bg-yellow-500",
    };
  }

  if (confidence >= 45) {
    return {
      label: "Low",
      color: "bg-orange-500",
    };
  }

  return {
    label: "Very Low",
    color: "bg-red-500",
  };
}

export default function DifferentialDiagnosisCard({
  rank,
  name,
  confidence,
  reasons = [],
  tests = [],
}: DifferentialDiagnosisCardProps) {
  const likelihood = getLikelihood(confidence);

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
              Likelihood
            </p>

            <span
              className={`inline-block rounded-full px-4 py-2 font-bold text-white ${likelihood.color}`}
            >
              {likelihood.label}
            </span>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm text-slate-400">
            <span>Likelihood</span>
            <span>{likelihood.label}</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-700">
            <div
              className={`${likelihood.color} h-full transition-all duration-500`}
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

          {reasons.length > 0 ? (
            <ul className="space-y-2">
              {reasons.map((reason, index) => (
                <li
                  key={index}
                  className="rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-slate-300"
                >
                  • {reason}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-400">
              No clinical reasoning provided.
            </p>
          )}
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-cyan-400">
            🧪 Recommended Diagnostic Tests
          </h3>

          {tests.length > 0 ? (
            <div className="space-y-3">
              {tests.map((test, index) => {
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
          ) : (
            <p className="text-slate-400">
              No additional diagnostic tests recommended.
            </p>
          )}
        </div>

      </div>
    </Card>
  );
}