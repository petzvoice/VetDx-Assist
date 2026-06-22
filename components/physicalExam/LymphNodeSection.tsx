"use client";

import SingleSelectGroup from "../ui/SingleSelectGroup";

import { useCase } from "@/context/CaseContext";

import { LYMPH_NODE_OPTIONS } from "@/lib/physicalExamOptions";

export default function LymphNodeSection() {
  const { caseData, updatePhysicalExam } = useCase();

  return (
    <section className="space-y-6">

      <h3 className="text-xl font-semibold text-cyan-400">
        🦴 Peripheral Lymph Nodes
      </h3>

      <SingleSelectGroup
        label="Lymph Nodes"
        options={LYMPH_NODE_OPTIONS}
        value={caseData.physicalExam.lymphNodes}
        onChange={(value) =>
          updatePhysicalExam("lymphNodes", value)
        }
      />

    </section>
  );
}