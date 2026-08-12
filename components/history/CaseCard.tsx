"use client";

import Link from "next/link";
import { useState } from "react";

import { deleteCase } from "@/lib/deleteCase";
import { diseaseLibrary } from "@/lib/diseases/library";

type Props = {
  data: any;
  onDelete: (id: number) => void;
};

function getLikelihood(value: any) {
  if (!value) return "Not available";

  if (value >= 85) return "Very High";
  if (value >= 70) return "High";
  if (value >= 50) return "Moderate";
  if (value >= 30) return "Low";

  return "Unlikely";
}

/* =========================================================
   TEXT NORMALIZATION
========================================================= */

function normalizeText(value: any): string {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ");
}

/* =========================================================
   SPECIES NORMALIZATION
========================================================= */

function normalizeSpecies(value: any): string {
  const species = normalizeText(value);

  if (!species) {
    return "";
  }

  /* Dog / Canine */

  if (
    species === "dog" ||
    species === "dogs" ||
    species === "canine" ||
    species === "canines"
  ) {
    return "canine";
  }

  /* Cat / Feline */

  if (
    species === "cat" ||
    species === "cats" ||
    species === "feline" ||
    species === "felines"
  ) {
    return "feline";
  }

  /* Cattle / Bovine */

  if (
    species === "cattle" ||
    species === "cow" ||
    species === "cows" ||
    species === "bovine"
  ) {
    return "bovine";
  }

  /* Sheep / Ovine */

  if (
    species === "sheep" ||
    species === "ovine"
  ) {
    return "ovine";
  }

  /* Goat / Caprine */

  if (
    species === "goat" ||
    species === "goats" ||
    species === "caprine"
  ) {
    return "caprine";
  }

  /* Horse / Equine */

  if (
    species === "horse" ||
    species === "horses" ||
    species === "equine"
  ) {
    return "equine";
  }

  /* Pig / Porcine */

  if (
    species === "pig" ||
    species === "pigs" ||
    species === "swine" ||
    species === "porcine"
  ) {
    return "porcine";
  }

  /* Bird / Avian */

  if (
    species === "bird" ||
    species === "birds" ||
    species === "avian"
  ) {
    return "avian";
  }

  return species;
}

/* =========================================================
   SPECIES COMPATIBILITY
========================================================= */

function speciesMatches(
  patientSpecies: any,
  diseaseSpecies: any
): boolean {
  const patient = normalizeSpecies(
    patientSpecies
  );

  if (!patient) {
    return false;
  }

  if (!Array.isArray(diseaseSpecies)) {
    return false;
  }

  const normalizedDiseaseSpecies =
    diseaseSpecies.map(
      (species: string) =>
        normalizeSpecies(species)
    );

  return normalizedDiseaseSpecies.includes(
    patient
  );
}

/* =========================================================
   FIND DISEASE
========================================================= */

/**
 * Finds the correct disease from diseaseLibrary.
 *
 * IMPORTANT:
 *
 * Species is considered FIRST.
 *
 * Example:
 *
 * Patient = Bovine
 * Differential = Leptospirosis
 *
 * The matcher will NOT simply choose the first
 * Leptospirosis in the entire library.
 *
 * It first restricts the search to bovine-compatible
 * diseases and THEN checks:
 *
 * 1. Exact disease name
 * 2. Exact disease ID
 * 3. Exact synonym
 * 4. Partial disease name
 * 5. Partial synonym
 */
function findDiseaseForDifferential(
  item: any,
  patientSpecies: any
) {
  const differentialName =
    normalizeText(item?.name);

  if (!differentialName) {
    return null;
  }

  /* -------------------------------------------------------
     STEP 1
     Restrict disease library by patient species
  ------------------------------------------------------- */

  const speciesSpecificDiseases =
    diseaseLibrary.filter(
      (disease) =>
        speciesMatches(
          patientSpecies,
          disease.species
        )
    );

  /*
   * If species information is available but there are
   * no matching species records, do NOT fall back to the
   * entire library.
   *
   * This prevents a bovine case from accidentally linking
   * to a canine disease.
   */
  if (
    speciesSpecificDiseases.length === 0
  ) {
    return null;
  }

  /* -------------------------------------------------------
     STEP 2
     Exact disease name
  ------------------------------------------------------- */

  const exactNameMatch =
    speciesSpecificDiseases.find(
      (disease) =>
        normalizeText(
          disease.name
        ) === differentialName
    );

  if (exactNameMatch) {
    return exactNameMatch;
  }

  /* -------------------------------------------------------
     STEP 3
     Exact disease ID
  ------------------------------------------------------- */

  const exactIdMatch =
    speciesSpecificDiseases.find(
      (disease) =>
        normalizeText(
          disease.id
        ) === differentialName
    );

  if (exactIdMatch) {
    return exactIdMatch;
  }

  /* -------------------------------------------------------
     STEP 4
     Exact synonym
  ------------------------------------------------------- */

  const exactSynonymMatch =
    speciesSpecificDiseases.find(
      (disease) =>
        Array.isArray(
          disease.synonyms
        ) &&
        disease.synonyms.some(
          (synonym: string) =>
            normalizeText(
              synonym
            ) === differentialName
        )
    );

  if (exactSynonymMatch) {
    return exactSynonymMatch;
  }

  /* -------------------------------------------------------
     STEP 5
     Partial disease-name match
  ------------------------------------------------------- */

  const partialNameMatch =
    speciesSpecificDiseases.find(
      (disease) => {
        const diseaseName =
          normalizeText(
            disease.name
          );

        return (
          diseaseName.includes(
            differentialName
          ) ||
          differentialName.includes(
            diseaseName
          )
        );
      }
    );

  if (partialNameMatch) {
    return partialNameMatch;
  }

  /* -------------------------------------------------------
     STEP 6
     Partial synonym match
  ------------------------------------------------------- */

  const partialSynonymMatch =
    speciesSpecificDiseases.find(
      (disease) =>
        Array.isArray(
          disease.synonyms
        ) &&
        disease.synonyms.some(
          (synonym: string) => {
            const normalizedSynonym =
              normalizeText(
                synonym
              );

            return (
              normalizedSynonym.includes(
                differentialName
              ) ||
              differentialName.includes(
                normalizedSynonym
              )
            );
          }
        )
    );

  if (partialSynonymMatch) {
    return partialSynonymMatch;
  }

  return null;
}

/* =========================================================
   CASE CARD
========================================================= */

export default function CaseCard({
  data,
  onDelete,
}: Props) {
  const [deleting, setDeleting] =
    useState(false);

  const patient =
    data.patient || {};

  const history =
    data.history || {};

  const aiReport =
    data.ai_response || {};

  async function handleDelete() {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this saved case?"
      );

    if (!confirmed) return;

    try {
      setDeleting(true);

      await deleteCase(
        data.id
      );

      onDelete(
        data.id
      );
    } catch (error: any) {
      alert(
        error.message ||
          "Unable to delete case."
      );
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg transition hover:border-cyan-500">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-bold uppercase text-white">
            🐕 {patient.species || "Unknown"}
          </h2>

          <p className="mt-1 text-slate-400">
            Breed:{" "}
            {patient.breed ||
              "Not recorded"}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Age:{" "}
            {patient.age ||
              "Unknown"}
            {" | "}
            Sex:{" "}
            {patient.sex ||
              "Unknown"}
          </p>

        </div>

        <div className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300">
          {new Date(
            data.created_at
          ).toLocaleDateString()}
        </div>

      </div>

      {/* =====================================================
          CHIEF COMPLAINT
      ===================================================== */}

      <div className="mt-6">

        <h3 className="font-semibold text-cyan-400">
          Chief Complaint
        </h3>

        <p className="mt-2 text-slate-300">
          {history.chiefComplaint ||
            "Not provided"}
        </p>

      </div>

      {/* =====================================================
          CLINICAL HISTORY
      ===================================================== */}

      <div className="mt-6">

        <h3 className="font-semibold text-cyan-400">
          Clinical History
        </h3>

        <div className="mt-3 rounded-xl bg-slate-800 p-4 text-sm text-slate-300">

          {history.duration && (
            <p>
              <b>Duration:</b>{" "}
              {history.duration}
            </p>
          )}

          {history.illnessHistory && (
            <p className="mt-2">
              <b>
                Illness History:
              </b>{" "}
              {
                history.illnessHistory
              }
            </p>
          )}

        </div>

      </div>

      {/* =====================================================
          AI SUMMARY
      ===================================================== */}

      <div className="mt-6">

        <h3 className="font-semibold text-cyan-400">
          AI Clinical Summary
        </h3>

        <div className="mt-3 rounded-xl bg-slate-800 p-4">

          <p className="whitespace-pre-wrap text-slate-300">
            {aiReport.clientSummary ||
              aiReport.summary ||
              "No AI summary available."}
          </p>

        </div>

      </div>

      {/* =====================================================
          DIFFERENTIALS
      ===================================================== */}

      {Array.isArray(
        aiReport.differentials
      ) &&
        aiReport.differentials.length >
          0 && (

          <div className="mt-6">

            <h3 className="font-semibold text-cyan-400">
              Top Differentials
            </h3>

            <div className="mt-3 space-y-3">

              {aiReport.differentials
                .slice(0, 3)
                .map(
                  (
                    item: any,
                    index: number
                  ) => {

                    /*
                     * IMPORTANT:
                     *
                     * Patient species is passed into
                     * the disease matcher.
                     */
                    const matchedDisease =
                      findDiseaseForDifferential(
                        item,
                        patient.species
                      );

                    return (
                      <div
                        key={index}
                        className="rounded-xl bg-slate-800 p-4"
                      >

                        <p className="font-medium text-white">

                          {index + 1}.{" "}

                          {matchedDisease ? (
                            <Link
                              href={`/diseases/${matchedDisease.id}`}
                              className="text-cyan-400 hover:text-cyan-300 hover:underline"
                            >
                              {item.name ||
                                matchedDisease.name}
                            </Link>
                          ) : (
                            item.name ||
                            "Unnamed differential"
                          )}

                        </p>

                        <p className="mt-2 text-sm text-cyan-400">
                          Clinical Likelihood:{" "}
                          {getLikelihood(
                            item.confidence
                          )}
                        </p>

                        {item.supportingFindings &&
                          item.supportingFindings.length >
                            0 && (

                            <p className="mt-2 text-sm text-slate-400">
                              Supporting finding:{" "}
                              {
                                item
                                  .supportingFindings[0]
                              }
                            </p>

                          )}

                      </div>
                    );
                  }
                )}

            </div>

          </div>

        )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="mt-8 flex items-center justify-between gap-4">

        <span className="rounded-full bg-cyan-900/40 px-3 py-1 text-sm text-cyan-300">
          Saved Case
        </span>

        <div className="flex gap-3">

          <Link
            href={`/history/${data.id}`}
            className="rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
          >
            View Full Report →
          </Link>

          <button
            onClick={handleDelete}
            disabled={deleting}
            className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {deleting
              ? "Deleting..."
              : "🗑 Delete"}
          </button>

        </div>

      </div>

    </div>
  );
}