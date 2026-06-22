"use client";

import Card from "../ui/Card";

type MonitoringCardProps = {
  monitoring: string[];
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
          {monitoring.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-xl border border-slate-700 bg-slate-900/50 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                {index + 1}
              </div>

              <div>
                <p className="font-medium text-white">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}