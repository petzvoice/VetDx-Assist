"use client";

import Card from "../ui/Card";
import Link from "next/link";

type TreatmentItem =
  | string
  | {
      recommendation?: string;
      details?: string;
      category?: string;

      linkedDrugs?: {
  drugId?: string;
  name: string;
  category?: string;
}[];
    };

type TreatmentConsiderationsCardProps = {
  considerations: TreatmentItem[];
};

export default function TreatmentConsiderationsCard({
  considerations,
}: TreatmentConsiderationsCardProps) {
  return (
    <Card title="💊 Treatment Considerations">
      {considerations.length === 0 ? (
        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6 text-center">
          <p className="text-slate-400">
            No treatment considerations available.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {considerations.map((item, index) => {
            const recommendation =
              typeof item === "string"
                ? item
                : item.recommendation ?? "Recommendation";
                const linkedDrugs =
  typeof item === "string"
    ? []
    : item.linkedDrugs ?? [];

            const details =
              typeof item === "string"
                ? ""
                : item.details ?? "";

            return (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-slate-700 bg-slate-900/50 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 font-bold text-white">
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

                  {linkedDrugs.length > 0 && (
  <div className="mt-3">
    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-cyan-400">
      Suggested Drugs
    </p>

    <div className="flex flex-wrap gap-2">
      {linkedDrugs.map((drug, i) =>
  drug.drugId ? (
    <Link
      key={drug.drugId}
      href={`/drug-index/${drug.drugId}`}
      className="
        rounded-full
        border
        border-cyan-700
        bg-cyan-900/40
        px-3
        py-1
        text-xs
        font-medium
        text-cyan-200
        transition
        hover:bg-cyan-700/40
        hover:text-white
        hover:border-cyan-500
      "
    >
      {drug.name}
    </Link>
  ) : (
    <span
      key={`${drug.name}-${i}`}
      className="
        rounded-full
        bg-slate-700
        px-3
        py-1
        text-xs
        text-slate-300
      "
    >
      {drug.name}
    </span>
  )
)}
    </div>
  </div>
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