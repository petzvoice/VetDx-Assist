"use client";

import { useState } from "react";

import Card from "../ui/Card";
import ErrorAlert from "../ui/ErrorAlert";
import ReportSkeleton from "../report/ReportSkeleton";
import AIClinicalReport from "../report/AIClinicalReport";
import AITestButton from "./AITestButton";

import type { AIClinicalReport as AIClinicalReportType } from "@/types/ai";

export default function DifferentialDiagnosis() {
  const [report, setReport] = useState<AIClinicalReportType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

        {error && (
          <ErrorAlert
            message={error}
            onRetry={() => setError("")}
          />
        )}

        {loading ? (
          <ReportSkeleton />
        ) : report ? (
          <AIClinicalReport report={report} />
        ) : (
          <div className="rounded-xl border border-dashed border-slate-700 py-16 text-center">
            <h3 className="text-xl font-semibold text-white">
              No AI Report Generated
            </h3>

            <p className="mt-3 text-slate-400">
              Complete the patient information and click{" "}
              <span className="font-semibold text-cyan-400">
                Generate AI Diagnosis
              </span>{" "}
              to receive a comprehensive AI clinical report.
            </p>
          </div>
        )}

      </div>
    </Card>
  );
}