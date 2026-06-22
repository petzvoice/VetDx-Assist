"use client";

import Card from "../ui/Card";

type ClientSummaryCardProps = {
  summary: string;
};

export default function ClientSummaryCard({
  summary,
}: ClientSummaryCardProps) {
  return (
    <Card title="👨‍⚕️ Client Communication Summary">
      <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <p className="leading-8 text-slate-200">
          {summary || "No client summary generated."}
        </p>
      </div>
    </Card>
  );
}