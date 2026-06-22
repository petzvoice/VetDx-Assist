"use client";

import { useCase } from "@/context/CaseContext";
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

  async function generateDiagnosis() {
    try {
      setLoading(true);

      const response = await fetch("/api/diagnose", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(caseData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        onError(data.message || "Unable to generate AI report.");
        return;
      }

      onResult(data.data);
    } catch (error) {
      console.error(error);

      onError(
        "Something went wrong while generating the AI report. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={generateDiagnosis}
      disabled={loading}
      className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Generating AI Report..." : "Generate AI Diagnosis"}
    </button>
  );
}