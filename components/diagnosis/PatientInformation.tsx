"use client";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Select from "../ui/Select";

import { useCase } from "@/context/CaseContext";

export default function PatientInformation() {
  const { caseData, setCaseData } = useCase();

  function updatePatient(
    field: keyof typeof caseData.patient,
    value: string
  ) {
    setCaseData((prev) => ({
      ...prev,
      patient: {
        ...prev.patient,
        [field]: value,
      },
    }));
  }

  return (
    <Card title="🐾 Patient Information">
      <div className="grid gap-6 md:grid-cols-2">

        <Select
          label="Species"
          options={[
            "Dog",
            "Cat",
            "Horse",
            "Cattle",
            "Buffalo",
            "Goat",
            "Sheep",
            "Pig",
            "Rabbit",
            "Bird",
          ]}
          value={caseData.patient.species}
          onChange={(value) => updatePatient("species", value)}
        />

        <Input
          label="Breed"
          placeholder="e.g. Labrador Retriever"
          value={caseData.patient.breed}
          onChange={(value) => updatePatient("breed", value)}
        />

        <Input
          label="Age"
          placeholder="e.g. 5 years"
          value={caseData.patient.age}
          onChange={(value) => updatePatient("age", value)}
        />

        <Select
          label="Sex"
          options={[
            "Male",
            "Female",
            "Male (Neutered)",
            "Female (Spayed)",
          ]}
          value={caseData.patient.sex}
          onChange={(value) => updatePatient("sex", value)}
        />

        <Input
          label="Weight"
          placeholder="e.g. 22 kg"
          value={caseData.patient.weight}
          onChange={(value) => updatePatient("weight", value)}
        />

      </div>
    </Card>
  );
}