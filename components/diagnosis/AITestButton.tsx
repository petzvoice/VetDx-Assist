"use client";

import { useCase } from "@/context/CaseContext";
import { generateDiagnosis } from "@/lib/generateDiagnosis";
import type { AIClinicalReport } from "@/types/ai";

type Props = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  onResult: (report: AIClinicalReport) => void;
  onError: (message: string) => void;
};

export default function AITestButton({
  loading,
  setLoading,
  onResult,
  onError,
}: Props) {
  const { caseData } = useCase();

  async function handleGenerateDiagnosis() {
    try {
      setLoading(true);

      const report = await generateDiagnosis(caseData);

      console.log("AI REPORT:", report);

      onResult(report);
    } catch (error: any) {
      console.error("AI ERROR:", error);

      onError(
        error?.message ||
          "Something went wrong while generating the AI report."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleGenerateDiagnosis}
      disabled={loading}
      className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading
        ? "Generating AI Report..."
        : "Generate AI Diagnosis"}
    </button>
  );
}