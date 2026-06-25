"use client";

import Card from "../ui/Card";

type PrognosisType =
  | string
  | {
      shortTerm?: string;
      longTerm?: string;
      initialPrognosis?: string;
      supportingFindings?: string[];
      factorsImprovingPrognosis?: string[];
      factorsWorseningPrognosis?: string[];
    };

type PrognosisCardProps = {
  prognosis: PrognosisType;
};

export default function PrognosisCard({
  prognosis,
}: PrognosisCardProps) {
  if (typeof prognosis === "string") {
    return (
      <Card title="📊 Prognosis">
        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
          <p className="text-lg leading-8 text-slate-200">
            {prognosis}
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card title="📊 Prognosis">
      <div className="space-y-6">

        {prognosis.initialPrognosis && (
          <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
            <h3 className="mb-2 font-semibold text-cyan-400">
              Initial Prognosis
            </h3>

            <p className="text-slate-200">
              {prognosis.initialPrognosis}
            </p>
          </div>
        )}

        {prognosis.shortTerm && (
          <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
            <h3 className="mb-2 font-semibold text-cyan-400">
              Short-Term
            </h3>

            <p className="text-slate-200">
              {prognosis.shortTerm}
            </p>
          </div>
        )}

        {prognosis.longTerm && (
          <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
            <h3 className="mb-2 font-semibold text-cyan-400">
              Long-Term
            </h3>

            <p className="text-slate-200">
              {prognosis.longTerm}
            </p>
          </div>
        )}

        {(prognosis.supportingFindings ?? []).length > 0 && (
          <div>
            <h3 className="mb-3 font-semibold text-cyan-400">
              Supporting Findings
            </h3>

            <ul className="space-y-2">
              {prognosis.supportingFindings?.map(
                (item, index) => (
                  <li
                    key={index}
                    className="rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-slate-300"
                  >
                    • {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        {(prognosis.factorsImprovingPrognosis ?? []).length > 0 && (
          <div>
            <h3 className="mb-3 font-semibold text-green-400">
              Factors Improving Prognosis
            </h3>

            <ul className="space-y-2">
              {prognosis.factorsImprovingPrognosis?.map(
                (item, index) => (
                  <li
                    key={index}
                    className="rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-slate-300"
                  >
                    • {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        {(prognosis.factorsWorseningPrognosis ?? []).length > 0 && (
          <div>
            <h3 className="mb-3 font-semibold text-red-400">
              Factors Worsening Prognosis
            </h3>

            <ul className="space-y-2">
              {prognosis.factorsWorseningPrognosis?.map(
                (item, index) => (
                  <li
                    key={index}
                    className="rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-slate-300"
                  >
                    • {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}

      </div>
    </Card>
  );
}