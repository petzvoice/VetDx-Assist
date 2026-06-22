"use client";

import SelectableChipGroup from "../ui/SelectableChipGroup";
import { useCase } from "@/context/CaseContext";
import { HEART_FINDINGS } from "@/lib/physicalExamOptions";

export default function CardiovascularSection() {
  const {
    caseData,
    updatePhysicalExam,
  } = useCase();

  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold text-cyan-400">
        ❤️ Cardiovascular
      </h3>

      <SelectableChipGroup
        title="Heart Findings"
        options={HEART_FINDINGS}
        selected={caseData.physicalExam.heartFindings ?? []}
        onChange={(selected) =>
          updatePhysicalExam("heartFindings", selected)
        }
      />
    </section>
  );
}