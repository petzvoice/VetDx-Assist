import { diseaseDatabase } from "./database";
import { DiseaseCard } from "./types";

export function getDiseaseById(
  id: string
): DiseaseCard | undefined {
  return diseaseDatabase.find(
    (disease) => disease.id === id
  );
}

/**
 * General disease search.
 *
 * IMPORTANT:
 * This function is NOT used for AI diagnosis.
 * It is only for user-facing disease search / card lookup.
 */
export function searchDisease(
  query: string
): DiseaseCard[] {
  const searchText = normalizeDiseaseName(query);

  if (!searchText) {
    return [];
  }

  return diseaseDatabase.filter((disease) => {
    const title = normalizeDiseaseName(
      disease.title
    );

    const description = disease.description
      ? normalizeDiseaseName(disease.description)
      : "";

    const synonyms =
      disease.synonyms?.map(
        normalizeDiseaseName
      ) ?? [];

    return (
      title.includes(searchText) ||
      description.includes(searchText) ||
      synonyms.some((synonym) =>
        synonym.includes(searchText)
      )
    );
  });
}

/**
 * Conservative normalization for disease-name matching.
 *
 * This does NOT perform clinical diagnosis.
 */
export function normalizeDiseaseName(
  value: string
): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[–—-]/g, " ")
    .replace(/[()[\],.:/]/g, " ")
    .replace(/\s+/g, " ");
}

/**
 * Resolve an AI-generated diagnosis to an existing
 * disease card.
 *
 * IMPORTANT:
 * This runs AFTER AI diagnosis.
 *
 * The AI does NOT use this function to determine
 * its differential diagnoses.
 *
 * Returns undefined if there is no reliable match.
 */
export function resolveDiseaseCard(
  diagnosisName: string
): DiseaseCard | undefined {
  const normalizedDiagnosis =
    normalizeDiseaseName(diagnosisName);

  if (!normalizedDiagnosis) {
    return undefined;
  }

  // 1. Exact disease-title match
  const exactTitle =
    diseaseDatabase.find(
      (disease) =>
        normalizeDiseaseName(
          disease.title
        ) === normalizedDiagnosis
    );

  if (exactTitle) {
    return exactTitle;
  }

  // 2. Exact synonym match
  const exactSynonym =
    diseaseDatabase.find((disease) =>
      disease.synonyms?.some(
        (synonym) =>
          normalizeDiseaseName(
            synonym
          ) === normalizedDiagnosis
      )
    );

  if (exactSynonym) {
    return exactSynonym;
  }

  // 3. Exact normalized ID match
  const normalizedId =
    normalizedDiagnosis.replace(/\s+/g, "-");

  const exactId =
    diseaseDatabase.find(
      (disease) =>
        disease.id.toLowerCase() ===
        normalizedId
    );

  if (exactId) {
    return exactId;
  }

  // No reliable disease-card match.
  return undefined;
}