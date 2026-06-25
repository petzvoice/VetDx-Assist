"use client";

import Card from "../ui/Card";

type EmergencyFlag =
  | string
  | {
      flag?: string;
      severity?: string;
      details?: string;
    };

type EmergencyFlagsCardProps = {
  flags: EmergencyFlag[];
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
          {flags.map((item, index) => {
            const flag =
              typeof item === "string"
                ? item
                : item.flag ?? "Emergency Alert";

            const severity =
              typeof item === "string"
                ? ""
                : item.severity ?? "";

            const details =
              typeof item === "string"
                ? ""
                : item.details ?? "";

            return (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-red-700 bg-red-900/20 p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xl">
                  ⚠️
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-red-400">
                      {flag}
                    </h3>

                    {severity && (
                      <span className="rounded-full bg-red-700 px-2 py-1 text-xs font-semibold text-white">
                        {severity}
                      </span>
                    )}
                  </div>

                  {details && (
                    <p className="mt-2 text-slate-300">
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