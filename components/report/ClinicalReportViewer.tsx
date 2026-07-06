"use client";

import ReportSkeleton from "./ReportSkeleton";
import AIClinicalReport from "./AIClinicalReport";
import ErrorAlert from "../ui/ErrorAlert";

import type { AIClinicalReport as AIClinicalReportType } from "@/types/ai";

type Props = {
  loading: boolean;
  error: string;
  report: AIClinicalReportType | null;
  onClearError: () => void;
};

export default function ClinicalReportViewer({
  loading,
  error,
  report,
  onClearError,
}: Props) {
  if (loading) {
    return <ReportSkeleton />;
  }

  if (error) {
    return (
      <ErrorAlert
        message={error}
        onRetry={onClearError}
      />
    );
  }

  if (!report) {
    return (
      <div className="rounded-xl border border-dashed border-slate-700 py-16 text-center">
        <h3 className="text-xl font-semibold text-white">
          No AI Report Generated
        </h3>

        <p className="mt-3 text-slate-400">
          Generate an AI clinical report to view the analysis.
        </p>
      </div>
    );
  }

  return <AIClinicalReport report={report} />;
}