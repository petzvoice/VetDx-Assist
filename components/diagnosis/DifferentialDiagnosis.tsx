"use client";

import { useState } from "react";

import Card from "../ui/Card";
import ClinicalReportViewer from "../report/ClinicalReportViewer";
import AITestButton from "./AITestButton";

import type { AIClinicalReport as AIClinicalReportType } from "@/types/ai";

export default function DifferentialDiagnosis() {
  const [report, setReport] =
    useState<AIClinicalReportType | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  return (
    <Card title="🤖 AI Clinical Report">
      <div className="space-y-6">

        <div className="flex justify-end">
          <AITestButton
            loading={loading}
            setLoading={setLoading}
            onResult={(report) => {
              setError("");
              setReport(report);
            }}
            onError={setError}
          />
        </div>

        <ClinicalReportViewer
          loading={loading}
          error={error}
          report={report}
          onClearError={() => setError("")}
        />

      </div>
    </Card>
  );
}