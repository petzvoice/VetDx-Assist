"use client";

import Card from "../ui/Card";

type PatientSummaryCardProps = {
  species: string;
  breed: string;
  age: string;
  sex: string;
  weight: string;
  summary: string;
};

export default function PatientSummaryCard({
  species,
  breed,
  age,
  sex,
  weight,
  summary,
}: PatientSummaryCardProps) {
  return (
    <Card title="🐾 Patient Summary">
      <div className="space-y-6">

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">

          <div>
            <p className="text-sm text-slate-400">Species</p>
            <p className="font-semibold text-white">
              {species || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Breed</p>
            <p className="font-semibold text-white">
              {breed || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Age</p>
            <p className="font-semibold text-white">
              {age || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Sex</p>
            <p className="font-semibold text-white">
              {sex || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Weight</p>
            <p className="font-semibold text-white">
              {weight || "-"}
            </p>
          </div>

        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-5">
          <h3 className="mb-2 text-lg font-semibold text-cyan-400">
            AI Case Summary
          </h3>

          <p className="leading-7 text-slate-300">
            {summary || "No summary generated yet."}
          </p>
        </div>

      </div>
    </Card>
  );
}