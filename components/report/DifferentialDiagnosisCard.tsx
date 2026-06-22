"use client";

import Card from "../ui/Card";

type DifferentialDiagnosisCardProps = {
  rank: number;
  name: string;
  confidence: number;
  reasons: string[];
  tests: string[];
};

export default function DifferentialDiagnosisCard({
  rank,
  name,
  confidence,
  reasons,
  tests,
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

        {/* Disease Header */}

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

        {/* Confidence Bar */}

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

        {/* Clinical Reasoning */}

        <div>

          <h3 className="mb-3 text-lg font-semibold text-cyan-400">
            🧠 Clinical Reasoning
          </h3>

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

        </div>

        {/* Recommended Tests */}

        <div>

          <h3 className="mb-3 text-lg font-semibold text-cyan-400">
            🧪 Recommended Diagnostic Tests
          </h3>

          <div className="flex flex-wrap gap-3">

            {tests.map((test, index) => (
              <span
                key={index}
                className="rounded-full bg-cyan-700 px-4 py-2 text-sm font-medium text-white"
              >
                {test}
              </span>
            ))}

          </div>

        </div>

      </div>
    </Card>
  );
}