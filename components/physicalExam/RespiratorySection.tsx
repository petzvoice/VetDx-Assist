"use client";

import SelectableChipGroup from "../ui/SelectableChipGroup";

import { useCase } from "@/context/CaseContext";

import { LUNG_FINDINGS } from "@/lib/physicalExamOptions";

export default function RespiratorySection() {
  const { caseData, updatePhysicalExam } = useCase();

  return (
    <section className="space-y-6">

      <h3 className="text-xl font-semibold text-cyan-400">
        🫁 Respiratory
      </h3>

      <SelectableChipGroup
        title="Respiratory Findings"
        options={LUNG_FINDINGS}
        selected={caseData.physicalExam.lungFindings}
        onChange={(value) =>
          updatePhysicalExam("lungFindings", value)
        }
      />

    </section>
  );
}