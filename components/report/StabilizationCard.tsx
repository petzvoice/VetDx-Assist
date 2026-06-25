"use client";

import Card from "../ui/Card";

type StabilizationItem =
  | string
  | {
      recommendation?: string;
      details?: string;
    };

type StabilizationCardProps = {
  stabilization: StabilizationItem[];
};

export default function StabilizationCard({
  stabilization,
}: StabilizationCardProps) {
  return (
    <Card title="💉 Immediate Stabilization">
      {stabilization.length === 0 ? (
        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6 text-center">
          <p className="text-slate-400">
            No immediate stabilization recommendations.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {stabilization.map((item, index) => {
            const recommendation =
              typeof item === "string"
                ? item
                : item.recommendation ?? "Recommendation";

            const details =
              typeof item === "string"
                ? ""
                : item.details ?? "";

            return (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-slate-700 bg-slate-900/50 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-600 font-bold text-white">
                  {index + 1}
                </div>

                <div>
                  <p className="font-medium text-white">
                    {recommendation}
                  </p>

                  {details && (
                    <p className="mt-2 text-sm text-slate-400">
                      {details}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}