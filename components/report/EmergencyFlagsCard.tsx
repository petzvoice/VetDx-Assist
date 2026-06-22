"use client";

import Card from "../ui/Card";

type EmergencyFlagsCardProps = {
  flags: string[];
};

export default function EmergencyFlagsCard({
  flags,
}: EmergencyFlagsCardProps) {
  return (
    <Card title="🚨 Emergency Flags">
      {flags.length === 0 ? (
        <div className="rounded-xl border border-green-700 bg-green-900/20 p-6 text-center">
          <h3 className="text-lg font-semibold text-green-400">
            ✅ No Immediate Emergency Flags
          </h3>

          <p className="mt-2 text-slate-300">
            No critical emergency concerns were identified by the AI.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {flags.map((flag, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl border border-red-700 bg-red-900/20 p-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xl">
                ⚠️
              </div>

              <div>
                <h3 className="font-semibold text-red-400">
                  Emergency Alert
                </h3>

                <p className="text-slate-200">
                  {flag}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}