"use client";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Select from "../ui/Select";

import { useCase } from "@/context/CaseContext";

export default function PhysicalExamination() {
  const { caseData, setCaseData } = useCase();

  function updateExam(
    field: keyof typeof caseData.physicalExam,
    value: string
  ) {
    setCaseData((prev) => ({
      ...prev,
      physicalExam: {
        ...prev.physicalExam,
        [field]: value,
      },
    }));
  }

  return (
    <Card title="🩺 Physical Examination">
      <div className="space-y-10">

        {/* Vital Parameters */}

        <section>

          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Vital Parameters
          </h3>

          <div className="grid gap-6 md:grid-cols-2">

            <Input
              label="Temperature (°C)"
              placeholder="38.6"
              value={caseData.physicalExam.temperature}
              onChange={(v) => updateExam("temperature", v)}
            />

            <Input
              label="Heart Rate (bpm)"
              placeholder="120"
              value={caseData.physicalExam.pulse}
              onChange={(v) => updateExam("pulse", v)}
            />

            <Input
              label="Respiratory Rate (/min)"
              placeholder="28"
              value={caseData.physicalExam.respiration}
              onChange={(v) => updateExam("respiration", v)}
            />

            <Input
              label="Capillary Refill Time"
              placeholder="<2 sec"
              value={caseData.physicalExam.crt}
              onChange={(v) => updateExam("crt", v)}
            />

          </div>

        </section>

        {/* General Examination */}

        <section>

          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            General Examination
          </h3>

          <div className="grid gap-6 md:grid-cols-2">

            <Select
              label="Mucous Membranes"
              options={[
                "Pink",
                "Pale",
                "Injected",
                "Icteric",
                "Cyanotic",
              ]}
              value={caseData.physicalExam.mucousMembranes}
              onChange={(v) => updateExam("mucousMembranes", v)}
            />

            <Select
              label="Hydration"
              options={[
                "Normal",
                "5%",
                "7%",
                "10%",
                ">10%",
              ]}
              value={caseData.physicalExam.hydration}
              onChange={(v) => updateExam("hydration", v)}
            />

            <Input
              label="Body Condition Score"
              placeholder="5/9"
              value={caseData.physicalExam.bodyConditionScore}
              onChange={(v) => updateExam("bodyConditionScore", v)}
            />

            <Input
              label="Pain Score"
              placeholder="0-10"
              value={caseData.physicalExam.painScore}
              onChange={(v) => updateExam("painScore", v)}
            />

          </div>

        </section>

        {/* Organ System Findings */}

        <section>

          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Physical Examination Findings
          </h3>

          <Textarea
            label="Clinical Findings"
            placeholder="Cardiovascular, respiratory, abdominal palpation, lymph nodes, musculoskeletal, neurological abnormalities..."
            value={caseData.physicalExam.findings}
            onChange={(v) => updateExam("findings", v)}
          />

        </section>

      </div>
    </Card>
  );
}