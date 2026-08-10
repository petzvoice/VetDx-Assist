import { supabaseClient } from "@/lib/supabaseClient";
import type { AIClinicalReport } from "@/types/ai";

export async function generateDiagnosis(
  caseData: any
): Promise<AIClinicalReport> {
  /*
   * ------------------------------------------------------------
   * 1. Verify authenticated user
   * ------------------------------------------------------------
   */

  const {
    data: { user },
    error: authError,
  } = await supabaseClient.auth.getUser();

  if (authError) {
    console.error(
      "[generateDiagnosis] Supabase auth error:",
      authError
    );

    throw new Error(
      "Unable to verify your login session. Please sign in again."
    );
  }

  if (!user) {
    throw new Error(
      "Please login to generate a clinical report."
    );
  }

  /*
   * ------------------------------------------------------------
   * 2. Send case to backend
   * ------------------------------------------------------------
   */

  let response: Response;

  try {
    response = await fetch("/api/diagnose", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({
        ...caseData,
        userId: user.id,
      }),
    });
  } catch (error: any) {
    /*
     * Browser-level fetch failure.
     *
     * IMPORTANT:
     * This means the browser could not complete the HTTP request.
     * It is different from receiving a 4xx/5xx response.
     */

    console.error(
      "[generateDiagnosis] Network/fetch error:",
      error
    );

    throw new Error(
      "Unable to connect to VetDx Assist. Please check your connection and try again."
    );
  }

  /*
   * ------------------------------------------------------------
   * 3. Read response safely
   * ------------------------------------------------------------
   */

  let result: any = null;

  try {
    result = await response.json();
  } catch (error) {
    console.error(
      "[generateDiagnosis] Invalid JSON response:",
      error
    );

    throw new Error(
      `VetDx Assist returned an invalid server response (HTTP ${response.status}).`
    );
  }

  /*
   * ------------------------------------------------------------
   * 4. Handle backend errors
   * ------------------------------------------------------------
   */

  if (!response.ok) {
    console.error(
      "[generateDiagnosis] API error:",
      {
        status: response.status,
        result,
      }
    );

    throw new Error(
      result?.message ||
        `Clinical analysis failed (HTTP ${response.status}).`
    );
  }

  /*
   * ------------------------------------------------------------
   * 5. Validate response envelope
   * ------------------------------------------------------------
   */

  if (!result || result.success !== true) {
    console.error(
      "[generateDiagnosis] Invalid API result:",
      result
    );

    throw new Error(
      result?.message ||
        "VetDx Assist could not generate a clinical report."
    );
  }

  /*
   * ------------------------------------------------------------
   * 6. Validate report exists
   * ------------------------------------------------------------
   */

  if (
    !result.data ||
    typeof result.data !== "object"
  ) {
    console.error(
      "[generateDiagnosis] Missing report data:",
      result
    );

    throw new Error(
      "VetDx Assist returned an empty clinical report."
    );
  }

  /*
   * ------------------------------------------------------------
   * 7. Basic client-side structural validation
   *
   * Backend remains the primary validation layer.
   * This is only a final protection before the report reaches
   * the clinical-analysis UI.
   * ------------------------------------------------------------
   */

  const report =
    result.data as AIClinicalReport;

  if (
    !report.patientSummary ||
    typeof report.patientSummary !== "object"
  ) {
    throw new Error(
      "Clinical report is missing patient information."
    );
  }

  if (!Array.isArray(report.problemList)) {
    throw new Error(
      "Clinical report contains an invalid problem list."
    );
  }

  if (!Array.isArray(report.differentials)) {
    throw new Error(
      "Clinical report contains an invalid differential diagnosis list."
    );
  }

  /*
   * ------------------------------------------------------------
   * 8. Final client-side safety check
   *
   * Never allow an obviously wrong-species differential to
   * reach the clinical UI even if backend validation changes
   * later.
   * ------------------------------------------------------------
   */

  const species = String(
    report.patientSummary.species ?? ""
  )
    .toLowerCase()
    .trim();

  const normalizedSpecies =
    species === "dog" ||
    species === "canine"
      ? "canine"
      : species === "cat" ||
        species === "feline"
      ? "feline"
      : species === "cattle" ||
        species === "bovine"
      ? "bovine"
      : species === "horse" ||
        species === "equine"
      ? "equine"
      : species === "sheep" ||
        species === "ovine"
      ? "ovine"
      : species === "goat" ||
        species === "caprine"
      ? "caprine"
      : species;

  const forbiddenSpeciesTerms: Record<
    string,
    string[]
  > = {
    canine: [
      "bovine",
      "cattle",
      "equine",
      "horse",
      "ovine",
      "sheep",
      "caprine",
      "goat",
      "avian",
      "poultry",
      "porcine",
      "swine",
      "feline",
      "cat",
    ],

    feline: [
      "bovine",
      "cattle",
      "canine",
      "dog",
      "equine",
      "horse",
      "ovine",
      "sheep",
      "caprine",
      "goat",
      "avian",
      "poultry",
      "porcine",
      "swine",
    ],

    bovine: [
      "canine",
      "dog",
      "feline",
      "cat",
      "equine",
      "horse",
      "ovine",
      "sheep",
      "caprine",
      "goat",
      "avian",
      "poultry",
      "porcine",
      "swine",
    ],

    equine: [
      "canine",
      "dog",
      "feline",
      "cat",
      "bovine",
      "cattle",
      "ovine",
      "sheep",
      "caprine",
      "goat",
      "avian",
      "poultry",
      "porcine",
      "swine",
    ],

    ovine: [
      "canine",
      "dog",
      "feline",
      "cat",
      "bovine",
      "cattle",
      "equine",
      "horse",
      "caprine",
      "goat",
      "avian",
      "poultry",
      "porcine",
      "swine",
    ],

    caprine: [
      "canine",
      "dog",
      "feline",
      "cat",
      "bovine",
      "cattle",
      "equine",
      "horse",
      "ovine",
      "sheep",
      "avian",
      "poultry",
      "porcine",
      "swine",
    ],
  };

  const forbidden =
    forbiddenSpeciesTerms[
      normalizedSpecies
    ] ?? [];

  if (forbidden.length > 0) {
    const invalidDifferential =
      report.differentials.find(
        (diagnosis: any) => {
          const name = String(
            diagnosis?.name ?? ""
          ).toLowerCase();

          return forbidden.some(
            (term) =>
              new RegExp(
                `\\b${term}\\b`,
                "i"
              ).test(name)
          );
        }
      );

    if (invalidDifferential) {
      console.error(
        "[generateDiagnosis] Wrong-species differential reached client:",
        invalidDifferential
      );

      throw new Error(
        "VetDx Assist detected an invalid species-specific differential. The report was blocked for safety."
      );
    }
  }

  /*
   * ------------------------------------------------------------
   * 9. Return validated report
   * ------------------------------------------------------------
   */

  return report;
}