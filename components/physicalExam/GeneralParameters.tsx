"use client";

import Input from "../ui/Input";
import SingleSelectGroup from "../ui/SingleSelectGroup";

import { useCase } from "@/context/CaseContext";

import {
  BCS_OPTIONS,
  PAIN_SCORE_OPTIONS,
} from "@/lib/physicalExamOptions";

export default function GeneralParameters() {
  const { caseData, updatePhysicalExam } = useCase();

  return (
    <section className="space-y-6">

      <h3 className="text-xl font-semibold text-cyan-400">
        🩺 General Parameters
      </h3>

      <div className="grid gap-4 md:grid-cols-2">

        <Input
          label="Temperature (°C)"
          placeholder="e.g. 38.6"
          value={caseData.physicalExam.temperature}
          onChange={(value) =>
            updatePhysicalExam("temperature", value)
          }
        />

        <Input
          label="Heart Rate (bpm)"
          placeholder="e.g. 120"
          value={caseData.physicalExam.heartRate}
          onChange={(value) =>
            updatePhysicalExam("heartRate", value)
          }
        />

        <Input
          label="Respiratory Rate (/min)"
          placeholder="e.g. 24"
          value={caseData.physicalExam.respiratoryRate}
          onChange={(value) =>
            updatePhysicalExam("respiratoryRate", value)
          }
        />

      </div>

      <SingleSelectGroup
        label="Body Condition Score"
        options={BCS_OPTIONS}
        value={caseData.physicalExam.bodyConditionScore}
        onChange={(value) =>
          updatePhysicalExam("bodyConditionScore", value)
        }
      />

      <SingleSelectGroup
        label="Pain Score"
        options={PAIN_SCORE_OPTIONS}
        value={caseData.physicalExam.painScore}
        onChange={(value) =>
          updatePhysicalExam("painScore", value)
        }
      />

    </section>
  );
}