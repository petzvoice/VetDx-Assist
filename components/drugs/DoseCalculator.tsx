"use client";
import { useMemo, useState } from "react";

import {
  Drug,
  DoseReference,
  Species,
  DoseUnit,
  ConcentrationUnit,
  Route,
  DoseBasis,
  DosageForm,
} from "@/lib/drugs/types";


interface DoseCalculatorProps {
  drug: Drug;
}

function getDoseDisplayUnit(unit: DoseUnit) {
  switch (unit) {
    case DoseUnit.MG_PER_KG:
    case DoseUnit.MG_PER_M2:
    case DoseUnit.MG:
    case DoseUnit.MG_PER_KG_HR:
    case DoseUnit.MG_PER_KG_PER_MIN:
      return "mg";

    case DoseUnit.MCG_PER_KG:
    case DoseUnit.MCG_PER_KG_MIN:
      return "mcg";

    case DoseUnit.IU_PER_KG:
      return "IU";

    case DoseUnit.MEQ_PER_KG:
      return "mEq";

    default:
      return "";
  }
  }
function getConcentrationDisplayUnit(
  unit: ConcentrationUnit
) {
  switch (unit) {

    case ConcentrationUnit.MG_PER_ML:
      return "mg/mL";

    case ConcentrationUnit.IU_PER_ML:
      return "IU/mL";

    case ConcentrationUnit.MG_PER_G:
      return "mg/g";

    case ConcentrationUnit.MG_PER_LITER:
      return "mg/L";

    case ConcentrationUnit.MG_PER_TABLET:
      return "mg/tablet";

    case ConcentrationUnit.MG_PER_CAPSULE:
      return "mg/capsule";

    case ConcentrationUnit.MG_PER_BOLUS:
      return "mg/bolus";

    case ConcentrationUnit.MG:
      return "mg";

    case ConcentrationUnit.PERCENT:
      return "%";

    default:
      return "";
  }
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
  const [useCustomDose, setUseCustomDose] =
  useState(false);

  const [customDoseMin, setCustomDoseMin] =
  useState("");

const [customDoseMax, setCustomDoseMax] =
  useState("");

const [customDoseUnit, setCustomDoseUnit] =
  useState<DoseUnit>(
    DoseUnit.MG_PER_KG
  );

    const [useCustomFormulation, setUseCustomFormulation] =
  useState(false);

const [selectedFormulationId, setSelectedFormulationId] =
  useState("");

const [customStrength, setCustomStrength] =
  useState("");
  const [selectedVialStrength, setSelectedVialStrength] =
  useState<number | "">("");

  const [selectedTabletStrength, setSelectedTabletStrength] =
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

 const currentDose = useMemo(() => {

  if (useCustomDose) {

    const min = Number(customDoseMin);

    if (!min || min <= 0) {
      return null;
    }

    return {
      species: species as Species,

      indication: "Custom Dose",

      route: Route.IV,

      basis: DoseBasis.BODY_WEIGHT,

      frequency: "Custom",

      dose: {
        minimum: min,
        maximum: customDoseMax
          ? Number(customDoseMax)
          : min,
        unit: customDoseUnit,
      },

    } as DoseReference;
  }

  return selectedDose;

}, [
  useCustomDose,
  customDoseMin,
  customDoseMax,
  customDoseUnit,
  selectedDose,
  species,
]);
const calculatedDose = useMemo(() => {
  if (!currentDose) {
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
      currentDose.dose.minimum *
      bodyWeight,

    maximum:
      currentDose.dose.maximum *
      bodyWeight,
  };
}, [currentDose, weight]);

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

  let concentrationUnit =
    selectedFormulation?.concentration.unit ??
    ConcentrationUnit.MG_PER_ML;


  // Saved formulation
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


    // Powder formulation
    if (isPowder) {

      if (
        selectedVialStrength &&
        reconstitutionVolume
      ) {

        concentration =
          Number(selectedVialStrength) /
          Number(reconstitutionVolume);

        concentrationUnit =
          selectedFormulation.reconstitutionUnit ??
          ConcentrationUnit.MG_PER_ML;

      }

      else if (
        useStandardConcentration &&
        selectedFormulation.standardConcentration
      ) {

        concentration =
          selectedFormulation.standardConcentration;

        concentrationUnit =
          selectedFormulation.reconstitutionUnit ??
          ConcentrationUnit.MG_PER_ML;

      }

      else if (customStrength) {

        concentration =
          Number(customStrength);

        concentrationUnit =
          selectedFormulation.reconstitutionUnit ??
          ConcentrationUnit.MG_PER_ML;

      }

      else {

        return {
          requiresReconstitution: true,
          dosageForm,
          strength,
          minimum: 0,
          maximum: 0,
          concentration: 0,
          concentrationUnit:
            selectedFormulation.reconstitutionUnit ??
            ConcentrationUnit.MG_PER_ML,
        };

      }

    }


    // Tablet formulation
    else if (
      selectedFormulation.dosageForm === DosageForm.TABLET
    ) {

      if (!selectedTabletStrength) {
        return null;
      }

      concentration =
        selectedTabletStrength;

      concentrationUnit =
        ConcentrationUnit.MG_PER_TABLET;

    }


    // Other formulations
    else if (
      selectedFormulation.concentration
    ) {

      concentration =
        selectedFormulation.concentration.value;

      concentrationUnit =
        selectedFormulation.concentration.unit;

    }


    else {

      concentration =
        Number(
          selectedFormulation.strength
            .replace(/[^\d.]/g, "")
        );

    }

  }


  // Custom formulation
  if (
    useCustomFormulation &&
    customStrength
  ) {

    concentration =
      Number(customStrength);

    dosageForm =
      "Custom";

    strength =
      `${customStrength} ${
        currentDose
          ? getDoseDisplayUnit(currentDose.dose.unit)
          : "mg"
      }`;


    if (currentDose) {

      switch (currentDose.dose.unit) {

        case DoseUnit.IU_PER_KG:

          concentrationUnit =
            ConcentrationUnit.IU_PER_ML;

          break;


        default:

          concentrationUnit =
            ConcentrationUnit.MG_PER_ML;

          break;

      }

    }

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
    concentrationUnit,
    requiresReconstitution: false,

  };


}, [
  calculatedDose,
  selectedFormulation,
  useCustomFormulation,
  customStrength,
  useStandardConcentration,
  selectedVialStrength,
  selectedTabletStrength,
  reconstitutionVolume,
  currentDose,
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
        <div className="mt-3 flex gap-6">

  <label className="flex items-center gap-2">
    <input
      type="radio"
      checked={!useCustomDose}
      onChange={() =>
        setUseCustomDose(false)
      }
    />
    Saved Dose
  </label>

  <label className="flex items-center gap-2">
    <input
      type="radio"
      checked={useCustomDose}
      onChange={() =>
        setUseCustomDose(true)
      }
    />
    Custom Dose
  </label>

</div>

        {!useCustomDose && (
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
  
)}
{useCustomDose && (
  <div className="mt-4">

    <label className="mb-2 block text-sm font-medium">
      Dose (minimum)
    </label>

    <input
      type="number"
      min="0"
      step="0.1"
      value={customDoseMin}
      onChange={(e) =>
        setCustomDoseMin(e.target.value)
      }
      placeholder="Example: 20"
      className="w-full rounded-lg border p-3"
    />
<label className="mt-4 mb-2 block text-sm font-medium">
  Dose (maximum) - Optional
</label>

<input
  type="number"
  min="0"
  step="0.1"
  value={customDoseMax}
  onChange={(e) =>
    setCustomDoseMax(e.target.value)
  }
  placeholder="Leave blank for single dose"
  className="w-full rounded-lg border p-3"
/>
<label className="mt-4 mb-2 block text-sm font-medium">
  Dose Unit
</label>

<select
  value={customDoseUnit}
  onChange={(e) =>
    setCustomDoseUnit(
      e.target.value as DoseUnit
    )
  }
  className="w-full rounded-lg border p-3"
>
  <option value={DoseUnit.MG_PER_KG}>
    mg/kg
  </option>

  <option value={DoseUnit.MCG_PER_KG}>
    mcg/kg
  </option>

  <option value={DoseUnit.IU_PER_KG}>
    IU/kg
  </option>

  <option value={DoseUnit.MEQ_PER_KG}>
    mEq/kg
  </option>
</select>
  </div>
)}

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

   {selectedFormulation?.dosageForm === DosageForm.TABLET &&
 selectedFormulation.tabletStrengths && (
  <div className="mt-4">

    <label className="mb-2 block text-sm font-medium">
      Tablet Strength
    </label>

    <select
      value={selectedTabletStrength}
      onChange={(e) =>
        setSelectedTabletStrength(
          Number(e.target.value)
        )
      }
      className="w-full rounded-lg border p-3"
    >
      <option value="">
        Select tablet strength
      </option>

      {selectedFormulation.tabletStrengths.map(
        (strength) => (
          <option
            key={strength}
            value={strength}
          >
            {strength} mg
          </option>
        )
      )}
    </select>

  </div>
)}
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
  (size) => {

    const isIU =
      selectedFormulation.reconstitutionUnit ===
      ConcentrationUnit.IU_PER_ML;

    let label = "";

    if (isIU) {

      if (size >= 1000000) {
        label = `${size / 1000000} million IU vial`;
      } else {
        label = `${size} IU vial`;
      }

    } else {

      if (size >= 1000) {
        label = `${size / 1000} g vial`;
      } else {
        label = `${size} mg vial`;
      }

    }

    return (
      <option
        key={size}
        value={size}
      >
        {label}
      </option>
    );

  }
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
     placeholder={`Enter concentration or tablet strength (${
  currentDose
    ? getDoseDisplayUnit(currentDose.dose.unit)
    : "mg"
})`}
    />

  )}

</div>

      {currentDose && (
        <div className="mt-6 rounded-lg bg-gray-50 p-4">

          <h3 className="mb-3 font-semibold">
            Selected Dose
          </h3>

          <p>
            <strong>Indication:</strong>{" "}
            {currentDose.indication}
          </p>

          <p>
            <strong>Route:</strong>{" "}
            {currentDose.route}
          </p>

          <p>
            <strong>Dose:</strong>{" "}
            {currentDose.dose.minimum}
            {currentDose.dose.minimum !==
              currentDose.dose.maximum &&
              ` - ${currentDose.dose.maximum}`}
            {" "}
            {currentDose.dose.unit}
          </p>

          {currentDose.frequency && (
            <p>
              <strong>Frequency:</strong>{" "}
              {currentDose.frequency}
            </p>
          )}

          {calculatedDose && (
  <>

    <hr className="my-4" />

    <p className="text-lg font-semibold">
      Drug Required
    </p>

  {currentDose.dose.minimum ===
currentDose.dose.maximum ? (

  <p className="mt-2 text-2xl font-bold text-green-600">
    {calculatedDose.minimum.toFixed(2)}
    {" "}
    {getDoseDisplayUnit(currentDose.dose.unit)}
  </p>
) : (

  <p className="mt-2 text-2xl font-bold text-green-600">
  {calculatedDose.minimum.toFixed(2)}
  {" - "}
  {calculatedDose.maximum.toFixed(2)}
  {" "}
  {getDoseDisplayUnit(currentDose.dose.unit)}
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

      {selectedFormulation.vialStrengths.map((size) => {

  const isIU =
    selectedFormulation.reconstitutionUnit ===
    ConcentrationUnit.IU_PER_ML;

  let label = "";

  if (isIU) {

    if (size >= 1000000) {
      label = `${size / 1000000} million IU vial`;
    } else {
      label = `${size} IU vial`;
    }

  } else {

    if (size >= 1000) {
      label = `${size / 1000} g vial`;
    } else {
      label = `${size} mg vial`;
    }

  }

  return (
    <option
      key={size}
      value={size}
    >
      {label}
    </option>
  );

})}

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
{" "}
{getConcentrationDisplayUnit(
  selectedFormulation.reconstitutionUnit ??
  selectedFormulation.concentration.unit
)})

    </label>


    {!useStandardConcentration && (
      <>

       <p className="mt-3">
  Enter final concentration after dilution
  (
  {getConcentrationDisplayUnit(
    selectedFormulation.reconstitutionUnit ??
    selectedFormulation.concentration.unit
  )}
  )
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
         placeholder={`Example: 4 ${getConcentrationDisplayUnit(
  selectedFormulation.reconstitutionUnit ??
  selectedFormulation.concentration.unit
)}`}
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
    {administration.concentration}{" "}
    {getConcentrationDisplayUnit(
      administration.concentrationUnit
    )}
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