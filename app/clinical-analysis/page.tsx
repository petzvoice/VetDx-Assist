"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import ClinicalReportViewer from "@/components/report/ClinicalReportViewer";

import { generateDiagnosis } from "@/lib/generateDiagnosis";

import type { AIClinicalReport } from "@/types/ai";

export default function ClinicalAnalysisPage() {
  const [caseNotes, setCaseNotes] = useState("");
 const [loading, setLoading] = useState(false);

const [report, setReport] =
  useState<AIClinicalReport | null>(null);

const [error, setError] =
  useState("");
  async function handleAnalyze() {
  if (!caseNotes.trim()) {
    alert("Please enter clinical notes.");
    return;
  }

  try {
    setLoading(true);
    setError("");

    // Step 1
    const extractionResponse = await fetch(
      "/api/extract-case",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notes: caseNotes,
        }),
      }
    );

    const extraction =
      await extractionResponse.json();

    if (
      !extractionResponse.ok ||
      !extraction.success
    ) {
      throw new Error(
        extraction.message ||
          "Unable to extract clinical information."
      );
    }

    console.log(
      "Extracted Case:",
      extraction.data
    );

    // Step 2
    const aiReport =
      await generateDiagnosis(
        extraction.data
      );

    console.log(
      "AI Report:",
      aiReport
    );

    setReport(aiReport);
  } catch (err: any) {
    console.error(err);

    setError(
      err.message ||
        "Unable to analyze the clinical case."
    );
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold text-cyan-400">
          Describe the Clinical Case
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Describe the case naturally or paste your existing clinical notes.
          VetDx Assist will automatically identify the important clinical
          findings before generating an AI-assisted clinical assessment.
        </p>

        <div className="mt-8 rounded-xl border border-cyan-700 bg-slate-900 p-5">
          <h2 className="text-lg font-semibold text-cyan-400">
            🩺 Natural Language Supported
          </h2>

          <p className="mt-2 text-slate-300">
            Write exactly as you normally would. No templates, no forms,
            and no special formatting required.
          </p>
        </div>

               <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-8">

          <label className="mb-3 block text-lg font-semibold">
            Clinical Notes
          </label>

          <textarea
            rows={16}
            value={caseNotes}
            onChange={(e) => setCaseNotes(e.target.value)}
            placeholder="Describe the clinical case in your own words..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-5 text-slate-200 outline-none transition focus:border-cyan-500"
          />

          <div className="mt-5 rounded-lg bg-slate-950 p-4 text-sm text-slate-400">
            💡 You can paste consultation notes, referral notes, discharge
            summaries, or simply describe the case naturally.
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              onClick={handleAnalyze}
              disabled={loading}
            >
              {loading
                ? "Analyzing..."
                : "Analyze Clinical Case"}
            </Button>
          </div>

        </div>

        <div className="mt-8">
          <ClinicalReportViewer
            loading={loading}
            error={error}
            report={report}
            onClearError={() => setError("")}
          />
        </div>

      </div>
    </main>
  );
}