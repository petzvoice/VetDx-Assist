"use client";

import Card from "../ui/Card";

type MonitoringItem =
  | string
  | {
      parameter?: string;
      frequency?: string;
      details?: string;
    };

type MonitoringCardProps = {
  monitoring: MonitoringItem[];
};

export default function MonitoringCard({
  monitoring,
}: MonitoringCardProps) {
  return (
    <Card title="📈 Monitoring Plan">
      {monitoring.length === 0 ? (
        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6 text-center">
          <p className="text-slate-400">
            No monitoring recommendations available.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {monitoring.map((item, index) => {
            const parameter =
              typeof item === "string"
                ? item
                : item.parameter ?? "Monitoring Item";

            const frequency =
              typeof item === "string"
                ? ""
                : item.frequency ?? "";

            const details =
              typeof item === "string"
                ? ""
                : item.details ?? "";

            return (
              <div
                key={index}
                className="rounded-xl border border-slate-700 bg-slate-900/50 p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">
                    {parameter}
                  </h3>

                  {frequency && (
                    <span className="rounded-full bg-cyan-700 px-3 py-1 text-xs font-semibold text-white">
                      {frequency}
                    </span>
                  )}
                </div>

                {details && (
                  <p className="mt-3 text-sm text-slate-400">
                    {details}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}