"use client";

import SingleSelectGroup from "../ui/SingleSelectGroup";

import { useCase } from "@/context/CaseContext";

import {
  HYDRATION_OPTIONS,
  MUCOUS_MEMBRANE_OPTIONS,
  CRT_OPTIONS,
  PULSE_QUALITY_OPTIONS,
} from "@/lib/physicalExamOptions";

export default function CirculationSection() {
  const { caseData, updatePhysicalExam } = useCase();

  return (
    <section className="space-y-6">

      <h3 className="text-xl font-semibold text-cyan-400">
        💧 Circulation & Perfusion
      </h3>

      <SingleSelectGroup
        label="Hydration"
        options={HYDRATION_OPTIONS}
        value={caseData.physicalExam.hydration}
        onChange={(value) =>
          updatePhysicalExam("hydration", value)
        }
      />

      <SingleSelectGroup
        label="Mucous Membranes"
        options={MUCOUS_MEMBRANE_OPTIONS}
        value={caseData.physicalExam.mucousMembranes}
        onChange={(value) =>
         updatePhysicalExam("mucousMembranes", value)
        }
      />

      <SingleSelectGroup
        label="Capillary Refill Time (CRT)"
        options={CRT_OPTIONS}
        value={caseData.physicalExam.crt}
        onChange={(value) =>
          updatePhysicalExam("crt", value)
        }
      />

      <SingleSelectGroup
        label="Pulse Quality"
        options={PULSE_QUALITY_OPTIONS}
        value={caseData.physicalExam.pulseQuality}
        onChange={(value) =>
          updatePhysicalExam("pulseQuality", value)
        }
      />

    </section>
  );
}