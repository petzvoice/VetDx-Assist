"use client";

type ReportHeaderProps = {
  patientName?: string;
  species?: string;
};

export default function ReportHeader({
  patientName,
  species,
}: ReportHeaderProps) {
  const today = new Date().toLocaleDateString();

  const caseId = `VDX-${Date.now().toString().slice(-6)}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-700 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-xl">

      <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold text-white">
            🩺 VetDx Assist
          </h1>

          <p className="mt-2 text-cyan-400">
            AI Clinical Decision Support Report
          </p>

        </div>

        <div className="space-y-2 text-right">

          <div>

            <p className="text-sm text-slate-400">
              Case ID
            </p>

            <p className="font-semibold text-white">
              {caseId}
            </p>

          </div>

          <div>

            <p className="text-sm text-slate-400">
              Generated
            </p>

            <p className="font-semibold text-white">
              {today}
            </p>

          </div>

        </div>

      </div>

      <div className="grid gap-6 border-t border-slate-700 bg-slate-900/60 px-8 py-5 md:grid-cols-2">

        <div>

          <p className="text-sm text-slate-400">
            Patient
          </p>

          <p className="text-lg font-semibold text-white">
            {patientName || "Unnamed Patient"}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-400">
            Species
          </p>

          <p className="text-lg font-semibold text-white">
            {species || "-"}
          </p>

        </div>

      </div>

    </div>
  );
}