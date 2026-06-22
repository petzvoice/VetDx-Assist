"use client";

import { useCase } from "@/context/CaseContext";

export default function CaseDebugger() {
  const { caseData } = useCase();

  return (
    <div className="mt-8 rounded-lg border border-slate-700 bg-slate-900 p-4">
      <h3 className="mb-3 text-lg font-semibold text-cyan-400">
        Case Data (Debug)
      </h3>

      <pre className="overflow-auto text-sm text-slate-300">
        {JSON.stringify(caseData, null, 2)}
      </pre>
    </div>
  );
}