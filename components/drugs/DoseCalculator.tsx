"use client";

import { useMemo, useState } from "react";

import {
  Drug,
  DoseReference,
  Species,
} from "@/lib/drugs/types";

interface DoseCalculatorProps {
  drug: Drug;
}

export default function DoseCalculator({
  drug,
}: DoseCalculatorProps) {
  const [species, setSpecies] =
    useState<Species | "">("");

  const [selectedDoseIndex, setSelectedDoseIndex] =
    useState("");

  const [weight, setWeight] =
    useState("");

    const [useCustomFormulation, setUseCustomFormulation] =
  useState(false);

const [selectedFormulationId, setSelectedFormulationId] =
  useState("");

const [customStrength, setCustomStrength] =
  useState("");
  const [selectedVialStrength, setSelectedVialStrength] =
  useState<number | "">("");
const [reconstitutionVolume, setReconstitutionVolume] =
  useState("");
const [useStandardConcentration, setUseStandardConcentration] =
  useState(true);
  const availableDoseReferences =
    useMemo(() => {
      if (!species) return [];

      return drug.doseReferences.filter(
        (dose) =>
          dose.species === species
      );
    }, [drug, species]);

  const selectedDose: DoseReference | null =
  useMemo(() => {
    if (!selectedDoseIndex) {
      return null;
    }

    return (
      availableDoseReferences[
        Number(selectedDoseIndex)
      ] ?? null
    );
  }, [
    availableDoseReferences,
    selectedDoseIndex,
  ]);

const calculatedDose = useMemo(() => {
  if (!selectedDose) {
    return null;
  }

  const bodyWeight = Number(weight);

  if (
    Number.isNaN(bodyWeight) ||
    bodyWeight <= 0
  ) {
    return null;
  }

  return {
    minimum:
      selectedDose.dose.minimum *
      bodyWeight,

    maximum:
      selectedDose.dose.maximum *
      bodyWeight,
  };
}, [selectedDose, weight]);

const selectedFormulation = useMemo(() => {
  return (
    drug.formulations.find(
      (formulation) =>
        formulation.id === selectedFormulationId
    ) ?? null
  );
}, [drug.formulations, selectedFormulationId]);
const administration = useMemo(() => {

  if (!calculatedDose) {
    return null;
  }


  let concentration = 0;
  let dosageForm = "";
  let strength = "";
  let reconstitutedConcentration = 0;


  if (
    !useCustomFormulation &&
    selectedFormulation
  ) {

    dosageForm =
      selectedFormulation.dosageForm;

    strength =
      selectedFormulation.strength;


    const isPowder =
      selectedFormulation.dosageForm
        .toLowerCase()
        .includes("powder");


    if (isPowder) {

  // User selected a vial size and entered
  // final reconstitution volume
  
  if (
    selectedVialStrength &&
    reconstitutionVolume
  ) {

    concentration =
      Number(selectedVialStrength) /
      Number(reconstitutionVolume);

  }

  // Use standard concentration
  else if (
    useStandardConcentration &&
    selectedFormulation.standardConcentration
  ) {

    concentration =
      selectedFormulation.standardConcentration;

  }

  // User entered custom concentration
  else if (customStrength) {

    concentration =
      Number(customStrength);

  }

  // Need more information
  else {

    return {
      requiresReconstitution: true,
      dosageForm,
      strength,
      minimum: 0,
      maximum: 0,
      concentration: 0,
    };

  }

}
    else if (
      selectedFormulation.concentration
    ) {

      concentration =
        selectedFormulation.concentration.value;

    } 
    
    else {

      concentration =
        Number(
          selectedFormulation.strength
            .replace(/[^\d.]/g, "")
        );

    }

  }


  if (
    useCustomFormulation &&
    customStrength
  ) {

    concentration =
      Number(customStrength);

    dosageForm =
      "Custom";

    strength =
      `${customStrength} mg`;

  }


  if (
    Number.isNaN(concentration) ||
    concentration <= 0
  ) {

    return null;

  }


  return {

    minimum:
      calculatedDose.minimum /
      concentration,

    maximum:
      calculatedDose.maximum /
      concentration,

    dosageForm,
    strength,
    concentration,
    requiresReconstitution: false,

  };


}, [
  calculatedDose,
  selectedFormulation,
  useCustomFormulation,
  customStrength,
  useStandardConcentration,
  selectedVialStrength,
  reconstitutionVolume,
]);
  return (
    <section className="mt-10 rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        🧮 Dose Calculator
      </h2>

      {/* Species */}

      <div className="mb-5">

        <label className="mb-2 block text-sm font-medium">
          Species
        </label>

        <select
          value={species}
          onChange={(e) => {
            setSpecies(
              e.target.value as Species
            );

            setSelectedDoseIndex("");
          }}
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            Select species
          </option>

          {drug.quickFacts.availableSpecies.map(
            (species) => (
              <option
                key={species}
                value={species}
              >
                {species}
              </option>
            )
          )}
        </select>

      </div>

      {/* Dose Reference */}

      <div className="mb-5">

        <label className="mb-2 block text-sm font-medium">
          Dose Reference
        </label>

        <select
          disabled={!species}
          value={selectedDoseIndex}
          onChange={(e) =>
            setSelectedDoseIndex(
              e.target.value
            )
          }
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            Select dose reference
          </option>

          {availableDoseReferences.map(
            (dose, index) => (
              <option
                key={index}
                value={index}
              >
                {dose.indication} •{" "}
                {dose.route} •{" "}
                {dose.dose.minimum}
                {dose.dose.minimum !==
                  dose.dose.maximum &&
                  `-${dose.dose.maximum}`}
                {" "}
                {dose.dose.unit}
              </option>
            )
          )}
        </select>

      </div>

      {/* Weight */}

      <div>

        <label className="mb-2 block text-sm font-medium">
          Body Weight (kg)
        </label>

        <input
          type="number"
          min="0"
          step="0.01"
          value={weight}
          onChange={(e) =>
            setWeight(
              e.target.value
            )
          }
          placeholder="Enter body weight"
          className="w-full rounded-lg border p-3"
        />

      </div>

      <div className="mt-6 rounded-lg border p-4">

  <h3 className="mb-4 text-lg font-semibold">
    Formulation
  </h3>

  <div className="mb-4 flex gap-6">

    <label className="flex items-center gap-2">
      <input
        type="radio"
        checked={!useCustomFormulation}
        onChange={() =>
          setUseCustomFormulation(false)
        }
      />

      Saved Formulation
    </label>

    <label className="flex items-center gap-2">
      <input
        type="radio"
        checked={useCustomFormulation}
        onChange={() =>
          setUseCustomFormulation(true)
        }
      />

      Custom Formulation
    </label>

  </div>

  {!useCustomFormulation ? (
  <>
    <select
      value={selectedFormulationId}
      onChange={(e) =>
        setSelectedFormulationId(e.target.value)
      }
      className="w-full rounded-lg border p-3"
    >
      <option value="">
        Select formulation
      </option>

      {drug.formulations.map(
        (formulation) => (
          <option
            key={formulation.id}
            value={formulation.id}
          >
            {formulation.strength}
            {" • "}
            {formulation.dosageForm}
          </option>
        )
      )}

    </select>
{selectedFormulation?.vialStrengths && (
  <div className="mt-4">

    <label className="mb-2 block text-sm font-medium">
      Vial Strength
    </label>

    <select
      value={selectedVialStrength}
      onChange={(e) =>
        setSelectedVialStrength(
          Number(e.target.value)
        )
      }
      className="w-full rounded-lg border p-3"
    >

      <option value="">
        Select vial size
      </option>

      {selectedFormulation.vialStrengths.map(
        (size) => (
          <option
            key={size}
            value={size}
          >
            {size >= 1000
              ? `${size / 1000} g vial`
              : `${size} mg vial`}
          </option>
        )
      )}

    </select>

  </div>
)}
{selectedVialStrength && (
  <div className="mt-4 rounded-lg bg-yellow-50 p-4">

    <p className="font-semibold text-yellow-800">
      ⚠ Powder formulation requires reconstitution
    </p>

    <p className="mt-2 text-sm">
      Enter final volume after dilution (mL)
    </p>

    <input
      type="number"
      min="0"
      step="0.1"
      value={reconstitutionVolume}
      onChange={(e) =>
        setReconstitutionVolume(e.target.value)
      }
      placeholder="Example: 10 mL"
      className="mt-3 w-full rounded-lg border p-3"
    />

  </div>
)}
  </>
) : (
    <input
      type="number"
      value={customStrength}
      onChange={(e) =>
        setCustomStrength(
          e.target.value
        )
      }
      placeholder="Enter concentration or tablet strength (mg)"
      className="w-full rounded-lg border p-3"
    />

  )}

</div>

      {selectedDose && (
        <div className="mt-6 rounded-lg bg-gray-50 p-4">

          <h3 className="mb-3 font-semibold">
            Selected Dose
          </h3>

          <p>
            <strong>Indication:</strong>{" "}
            {selectedDose.indication}
          </p>

          <p>
            <strong>Route:</strong>{" "}
            {selectedDose.route}
          </p>

          <p>
            <strong>Dose:</strong>{" "}
            {selectedDose.dose.minimum}
            {selectedDose.dose.minimum !==
              selectedDose.dose.maximum &&
              ` - ${selectedDose.dose.maximum}`}
            {" "}
            {selectedDose.dose.unit}
          </p>

          {selectedDose.frequency && (
            <p>
              <strong>Frequency:</strong>{" "}
              {selectedDose.frequency}
            </p>
          )}

          {calculatedDose && (
  <>

    <hr className="my-4" />

    <p className="text-lg font-semibold">
      Drug Required
    </p>

    {selectedDose.dose.minimum ===
    selectedDose.dose.maximum ? (

      <p className="mt-2 text-2xl font-bold text-green-600">
        {calculatedDose.minimum.toFixed(2)} mg
      </p>

    ) : (

      <p className="mt-2 text-2xl font-bold text-green-600">
        {calculatedDose.minimum.toFixed(2)}
        {" - "}
        {calculatedDose.maximum.toFixed(2)}
        {" "}
        mg
      </p>

    )}
{administration && (
  <>
{selectedFormulation?.vialStrengths && (
  <div className="mt-4">

    <label className="mb-2 block text-sm font-medium">
      Vial Strength
    </label>

    <select
      value={selectedVialStrength}
      onChange={(e) =>
        setSelectedVialStrength(
          Number(e.target.value)
        )
      }
      className="w-full rounded-lg border p-3"
    >

      <option value="">
        Select vial size
      </option>

      {selectedFormulation.vialStrengths.map(
        (size) => (
          <option
            key={size}
            value={size}
          >
            {size >= 1000
              ? `${size / 1000} g vial`
              : `${size} mg vial`}
          </option>
        )
      )}

    </select>

  </div>
)}
{selectedFormulation?.standardConcentration && (
  <div className="mt-4 rounded-lg bg-yellow-50 p-4 text-yellow-800">

    <p className="font-semibold">
      ⚠ Powder formulation requires reconstitution
    </p>

    <label className="mt-3 flex items-center gap-2">

      <input
        type="checkbox"
        checked={useStandardConcentration}
        onChange={(e) =>
          setUseStandardConcentration(
            e.target.checked
          )
        }
      />

      Use standard concentration (
      {selectedFormulation.standardConcentration}
      mg/mL)

    </label>


    {!useStandardConcentration && (
      <>

        <p className="mt-3">
          Enter final concentration after dilution
          (mg/mL)
        </p>

        <input
          type="number"
          min="0"
          step="0.1"
          value={customStrength}
          onChange={(e) =>
            setCustomStrength(
              e.target.value
            )
          }
          placeholder="Example: 4 mg/mL"
          className="mt-3 w-full rounded-lg border p-3"
        />

      </>
    )}

  </div>
)}

    {!administration.requiresReconstitution && (
      <>
        <hr className="my-4" />

        <p className="text-lg font-semibold">
          Administration
        </p>

    <p className="mt-2">
      <strong>Using:</strong>{" "}
      {administration.strength}
      {" • "}
      {administration.dosageForm}
    </p>
{administration.concentration > 0 && (
  <p className="mt-2">
    <strong>Concentration:</strong>{" "}
    {administration.concentration}
    {" mg/mL"}
  </p>
)}
    <p className="mt-2 text-2xl font-bold text-blue-600">
      {administration.minimum.toFixed(2)}

      {administration.minimum !==
        administration.maximum &&
        ` - ${administration.maximum.toFixed(2)}`}

      {" "}

      {administration.dosageForm === "Tablet"
        ? "tablet(s)"
        : administration.dosageForm === "Capsule"
        ? "capsule(s)"
        : "mL"}
    </p>

    {administration.dosageForm ===
      "Tablet" && (
      <p className="mt-3 text-sm text-orange-700">
        ⚠ Tablet splitting depends on the specific
        product formulation. Some tablets should
        not be split.
      </p>
    )}

    {administration.dosageForm ===
      "Capsule" && (
      <p className="mt-3 text-sm text-orange-700">
        ⚠ Capsule administration depends on the
        specific formulation. Some capsules should
        not be opened or divided.
      </p>
    )}

  </>
)}
  </>
)}
</>
)}
        </div>
      )}

    </section>
  );
}