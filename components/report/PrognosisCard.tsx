"use client";

import Card from "../ui/Card";

type PrognosisCardProps = {
  prognosis: string;
};

export default function PrognosisCard({
  prognosis,
}: PrognosisCardProps) {
  return (
    <Card title="📊 Prognosis">
      <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <p className="text-lg leading-8 text-slate-200">
          {prognosis || "No prognosis available."}
        </p>
      </div>
    </Card>
  );
}