"use client";

import Card from "../ui/Card";
import Textarea from "../ui/Textarea";

export default function DiagnosisForm() {
  return (
    <Card title="Diagnostics">
      <div className="space-y-8">

        <Textarea
          label="Complete Blood Count (CBC)"
          placeholder="Enter CBC findings..."
        />

        <Textarea
          label="Serum Biochemistry"
          placeholder="Enter serum chemistry findings..."
        />

        <Textarea
          label="Urinalysis"
          placeholder="Enter urinalysis findings..."
        />

        <Textarea
          label="Imaging"
          placeholder="Radiographs, ultrasound, CT, MRI..."
        />

        <Textarea
          label="Other Diagnostic Tests"
          placeholder="Cytology, culture, PCR, endocrine tests..."
        />

      </div>
    </Card>
  );
}