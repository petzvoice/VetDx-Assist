"use client";

import Textarea from "../ui/Textarea";

import { useCase } from "@/context/CaseContext";

export default function NotesSection() {
  const { caseData, updatePhysicalExam } = useCase();

  return (
    <section className="space-y-6">

      <h3 className="text-xl font-semibold text-cyan-400">
        📝 Additional Findings
      </h3>

      <Textarea
        label="Notes"
        rows={6}
        placeholder="Enter any additional physical examination findings..."
        value={caseData.physicalExam.notes}
        onChange={(value) =>
          updatePhysicalExam("notes", value)
        }
      />

    </section>
  );
}