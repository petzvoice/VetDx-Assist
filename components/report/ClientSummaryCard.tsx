"use client";

import Card from "../ui/Card";

type ClientSummaryType =
  | string
  | {
      summary?: string;
    };

type ClientSummaryCardProps = {
  summary: ClientSummaryType;
};

export default function ClientSummaryCard({
  summary,
}: ClientSummaryCardProps) {
  const clientSummary =
    typeof summary === "string"
      ? summary
      : summary?.summary ?? "";

  return (
    <Card title="👨‍⚕️ Client Communication Summary">
      <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <p className="leading-8 text-slate-200">
          {clientSummary ||
            "No client summary generated."}
        </p>
      </div>
    </Card>
  );
}