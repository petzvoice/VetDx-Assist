"use client";

import Card from "../ui/Card";
import Textarea from "../ui/Textarea";

import { useCase } from "@/context/CaseContext";

export default function LaboratoryResults() {
  const { caseData, setCaseData } = useCase();

  function updateDiagnostics(
    field: keyof typeof caseData.diagnostics,
    value: string
  ) {
    setCaseData((prev) => ({
      ...prev,
      diagnostics: {
        ...prev.diagnostics,
        [field]: value,
      },
    }));
  }

  return (
    <Card title="🧪 Diagnostic Tests">
      <div className="space-y-10">

        {/* CBC */}

        <section>

          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Complete Blood Count (CBC)
          </h3>

          <Textarea
            label="CBC Findings"
            placeholder="PCV/HCT, Hb, RBC, WBC, differential count, platelets, blood smear findings..."
            value={caseData.diagnostics.cbc}
            onChange={(v) => updateDiagnostics("cbc", v)}
          />

        </section>

        {/* Biochemistry */}

        <section>

          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Serum Biochemistry
          </h3>

          <Textarea
            label="Chemistry Findings"
            placeholder="ALT, AST, ALP, GGT, BUN, Creatinine, Albumin, Globulin, Glucose, Electrolytes..."
            value={caseData.diagnostics.biochemistry}
            onChange={(v) => updateDiagnostics("biochemistry", v)}
          />

        </section>

        {/* Urinalysis */}

        <section>

          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Urinalysis
          </h3>

          <Textarea
            label="Urinalysis Findings"
            placeholder="Specific gravity, protein, glucose, ketones, sediment, casts, crystals..."
            value={caseData.diagnostics.urinalysis}
            onChange={(v) => updateDiagnostics("urinalysis", v)}
          />

        </section>

        {/* Imaging */}

        <section>

          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Imaging
          </h3>

          <Textarea
            label="Radiology / Ultrasound / CT / MRI"
            placeholder="Describe imaging findings..."
            value={caseData.diagnostics.imaging}
            onChange={(v) => updateDiagnostics("imaging", v)}
          />

        </section>

        {/* Additional Tests */}

        <section>

          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Additional Diagnostics
          </h3>

          <Textarea
            label="Other Tests"
            placeholder="Cytology, Histopathology, PCR, Endocrine tests, Culture & Sensitivity, Serology..."
            value={caseData.diagnostics.otherTests}
            onChange={(v) => updateDiagnostics("otherTests", v)}
          />

        </section>

      </div>
    </Card>
  );
}