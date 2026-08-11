import { diseaseDatabase } from "./database";
import { DiseaseCard } from "./types";
import { Species } from "@/lib/drugs/types";

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
export function normalizeDiseaseSpecies(
  value: string
): Species | undefined {
  const species =
    String(value ?? "")
      .toLowerCase()
      .trim();

  switch (species) {
    case "dog":
    case "canine":
      return Species.DOG;

    case "cat":
    case "feline":
      return Species.CAT;

    case "horse":
    case "equine":
      return Species.HORSE;

    case "cattle":
    case "bovine":
      return Species.CATTLE;

    case "sheep":
    case "ovine":
      return Species.SHEEP;

    case "goat":
    case "caprine":
      return Species.GOAT;

    case "pig":
    case "swine":
    case "porcine":
      return Species.PIG;

    case "rabbit":
      return Species.RABBIT;

    case "guinea pig":
      return Species.GUINEA_PIG;

    case "ferret":
      return Species.FERRET;

    case "bird":
    case "avian":
    case "poultry":
      return Species.BIRD;

    case "exotic mammal":
      return Species.EXOTIC_MAMMAL;

    case "reptile":
      return Species.REPTILE;

    default:
      return undefined;
  }
}
/**
 * Resolve an AI-generated diagnosis to an existing
 * disease card that is compatible with the patient's species.
 *
 * IMPORTANT:
 *
 * This runs AFTER AI diagnosis.
 *
 * The AI does NOT use this function to determine
 * its differential diagnoses.
 *
 * Species filtering is ONLY used to decide whether
 * an existing disease card may be attached.
 *
 * If no species-compatible card exists, returns undefined.
 */
export function resolveDiseaseCard(
  diagnosisName: string,
  patientSpecies?: Species
): DiseaseCard | undefined {
  const normalizedDiagnosis =
    normalizeDiseaseName(diagnosisName);

  if (!normalizedDiagnosis) {
    return undefined;
  }

  /**
   * If species is known, ONLY consider disease cards
   * that are applicable to that species.
   *
   * This does NOT affect AI diagnosis.
   * It only controls which knowledge card can be attached.
   */
  const candidateCards = patientSpecies
    ? diseaseDatabase.filter((disease) =>
        disease.species?.includes(patientSpecies)
      )
    : diseaseDatabase;

  /**
   * 1. Exact disease-title match
   */
  const exactTitle =
    candidateCards.find(
      (disease) =>
        normalizeDiseaseName(
          disease.title
        ) === normalizedDiagnosis
    );

  if (exactTitle) {
    return exactTitle;
  }

  /**
   * 2. Exact synonym match
   */
  const exactSynonym =
    candidateCards.find((disease) =>
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

  /**
   * 3. Exact normalized ID match
   */
  const normalizedId =
    normalizedDiagnosis.replace(/\s+/g, "-");

  const exactId =
    candidateCards.find(
      (disease) =>
        disease.id.toLowerCase() ===
        normalizedId
    );

  if (exactId) {
    return exactId;
  }

  /**
   * No reliable species-compatible card found.
   *
   * IMPORTANT:
   * Do NOT force a card from another species.
   */
  return undefined;
}