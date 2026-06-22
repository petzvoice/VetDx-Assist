"use client";

import { useState } from "react";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import SelectableChipGroup from "../ui/SelectableChipGroup";
import SingleSelectGroup from "../ui/SingleSelectGroup";

import { useCase } from "@/context/CaseContext";

import {
  APPETITE_OPTIONS,
  WATER_INTAKE_OPTIONS,
  URINATION_OPTIONS,
  DEFECATION_OPTIONS,
  ACTIVITY_OPTIONS,
} from "@/lib/clinicalOptions";

const QUICK_COMPLAINTS = [
  "Vomiting",
  "Diarrhea",
  "Anorexia",
  "Weight Loss",
  "PU/PD",
  "Cough",
  "Dyspnea",
  "Fever",
  "Lameness",
  "Seizure",
  "Ascites",
  "Pruritus",
  "Hematuria",
  "Epistaxis",
  "Collapse",
  "Lethargy",
  "Jaundice",
  "Abdominal Pain",
];

export default function ClinicalHistory() {
  const { caseData, updateHistory } = useCase();

  const [selectedComplaints, setSelectedComplaints] = useState<string[]>([]);

  function handleComplaintChange(complaints: string[]) {
    setSelectedComplaints(complaints);

    updateHistory("chiefComplaint", complaints.join(", "));
  }

  return (
    <Card title="📖 Clinical History">
      <div className="space-y-10">

        {/* Presenting Complaint */}

        <section>

          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Presenting Complaint
          </h3>

          <div className="grid gap-6">

            <Input
              label="Duration of Illness"
              placeholder="Example: 3 days"
              value={caseData.history.duration}
              onChange={(value) => updateHistory("duration", value)}
            />

            <SelectableChipGroup
              title="Quick Complaint Selection"
              options={QUICK_COMPLAINTS}
              selected={selectedComplaints}
              onChange={handleComplaintChange}
            />

            <Textarea
              label="Chief Complaint"
              required
              placeholder="Describe the owner's primary concern..."
              value={caseData.history.chiefComplaint}
              onChange={(value) =>
                updateHistory("chiefComplaint", value)
              }
            />

            <Textarea
              label="History of Present Illness"
              placeholder="Include onset, progression, severity, triggering factors, previous episodes and associated signs..."
              value={caseData.history.illnessHistory}
              onChange={(value) =>
                updateHistory("illnessHistory", value)
              }
            />

          </div>

        </section>

        {/* General History */}

        <section>

          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            General History
          </h3>

          <div className="grid gap-8 md:grid-cols-2">

            <SingleSelectGroup
              label="Appetite"
              options={APPETITE_OPTIONS}
              value={caseData.history.appetite}
              onChange={(value) =>
                updateHistory("appetite", value)
              }
            />

            <SingleSelectGroup
              label="Water Intake"
              options={WATER_INTAKE_OPTIONS}
              value={caseData.history.waterIntake}
              onChange={(value) =>
                updateHistory("waterIntake", value)
              }
            />

            <SingleSelectGroup
              label="Urination"
              options={URINATION_OPTIONS}
              value={caseData.history.urination}
              onChange={(value) =>
                updateHistory("urination", value)
              }
            />

            <SingleSelectGroup
              label="Defecation"
              options={DEFECATION_OPTIONS}
              value={caseData.history.defecation}
              onChange={(value) =>
                updateHistory("defecation", value)
              }
            />

            <SingleSelectGroup
              label="Activity Level"
              options={ACTIVITY_OPTIONS}
              value={caseData.history.activity}
              onChange={(value) =>
                updateHistory("activity", value)
              }
            />

          </div>

        </section>

        {/* Previous Treatment */}

        <section>

          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Previous Treatments
          </h3>

          <Textarea
            label="Previous Medications / Therapies"
            placeholder="Include medication names, doses, duration, response to treatment, surgeries or previous diagnostics..."
            value={caseData.history.previousTreatment}
            onChange={(value) =>
              updateHistory("previousTreatment", value)
            }
          />

        </section>

      </div>
    </Card>
  );
}