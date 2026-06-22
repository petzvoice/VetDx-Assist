"use client";

import SelectableChipGroup from "../ui/SelectableChipGroup";

import { useCase } from "@/context/CaseContext";

import { ABDOMINAL_FINDINGS } from "@/lib/physicalExamOptions";

export default function AbdomenSection() {
  const { caseData, updatePhysicalExam } = useCase();

  return (
    <section className="space-y-6">

      <h3 className="text-xl font-semibold text-cyan-400">
        🐾 Abdominal Examination
      </h3>

      <SelectableChipGroup
        title="Abdominal Findings"
        options={ABDOMINAL_FINDINGS}
        selected={caseData.physicalExam.abdominalFindings}
        onChange={(value) =>
          updatePhysicalExam("abdominalFindings", value)
        }
      />

    </section>
  );
}