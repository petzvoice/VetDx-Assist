"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function NewCasePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400">
            Choose Your Clinical Workflow
          </h1>

          <p className="mt-4 text-lg text-slate-400">
            Select how you would like to begin your veterinary case analysis.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {/* AI Clinical Case Analysis */}
          <div className="rounded-2xl border-2 border-cyan-500 bg-slate-900 p-8 shadow-xl">

            <div className="mb-4 inline-block rounded-full bg-cyan-500 px-3 py-1 text-sm font-semibold text-slate-950">
              ⭐ Recommended
            </div>

            <h2 className="text-2xl font-bold">
              📝 AI Clinical Case Analysis
            </h2>

            <p className="mt-4 text-slate-300 leading-7">
              Paste your clinical notes, referral notes, history,
              examination findings, laboratory results, or any case
              description exactly as you have written it.
            </p>

            <div className="mt-6 rounded-xl bg-slate-950 p-4 text-sm text-slate-400">
              Fastest workflow. No structured form required.
            </div>

            <div className="mt-8">
              <Button
                fullWidth
                onClick={() => router.push("/clinical-analysis")}
              >
                Analyze Clinical Case
              </Button>
            </div>

          </div>

          {/* Structured Assessment */}

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">

            <h2 className="text-2xl font-bold">
              🩺 Structured Clinical Assessment
            </h2>

            <p className="mt-4 text-slate-300 leading-7">
              Complete a guided clinical assessment using structured
              patient information and examination findings.
            </p>

            <div className="mt-6 rounded-xl bg-slate-950 p-4 text-sm text-slate-400">
              Best when you want a detailed guided assessment.
            </div>

            <div className="mt-8">
              <Button
                variant="secondary"
                fullWidth
                onClick={() => router.push("/diagnosis")}
              >
                Start Structured Assessment
              </Button>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}