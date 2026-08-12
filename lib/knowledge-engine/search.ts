import { diseaseDatabase } from "./database";
import { DiseaseCard } from "./types";
import { Species } from "@/lib/drugs/types";

/**
 * ============================================================
 * GET DISEASE BY ID
 * ============================================================
 */

export function getDiseaseById(
  id: string
): DiseaseCard | undefined {
  return diseaseDatabase.find(
    (disease) => disease.id === id
  );
}

/**
 * ============================================================
 * NORMALIZE DISEASE NAME
 * ============================================================
 *
 * Used for disease-name comparison.
 *
 * Examples:
 *
 * "Bovine Leptospirosis"
 * → "bovine leptospirosis"
 *
 * "Canine-Leptospirosis"
 * → "canine leptospirosis"
 *
 * "Leptospiral Infection"
 * → "leptospiral infection"
 */

export function normalizeDiseaseName(
  value: string
): string {
  return String(value ?? "")
    .toLowerCase()
    .trim()
    .replace(/[–—-]/g, " ")
    .replace(/[()[\],.:/]/g, " ")
    .replace(/\s+/g, " ");
}

/**
 * ============================================================
 * NORMALIZE SPECIES
 * ============================================================
 */

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
    case "cow":
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
 * ============================================================
 * SPECIES ALIASES
 * ============================================================
 *
 * These are used ONLY for matching disease names.
 *
 * They do NOT decide whether a disease is clinically possible.
 */

function getSpeciesAliases(
  species?: Species
): string[] {
  if (!species) {
    return [];
  }

  switch (species) {
    case Species.DOG:
      return [
        "dog",
        "canine",
      ];

    case Species.CAT:
      return [
        "cat",
        "feline",
      ];

    case Species.CATTLE:
      return [
        "cattle",
        "bovine",
        "cow",
      ];

    case Species.HORSE:
      return [
        "horse",
        "equine",
      ];

    case Species.SHEEP:
      return [
        "sheep",
        "ovine",
      ];

    case Species.GOAT:
      return [
        "goat",
        "caprine",
      ];

    case Species.PIG:
      return [
        "pig",
        "swine",
        "porcine",
      ];

    case Species.RABBIT:
      return [
        "rabbit",
      ];

    case Species.GUINEA_PIG:
      return [
        "guinea pig",
      ];

    case Species.FERRET:
      return [
        "ferret",
      ];

    case Species.BIRD:
      return [
        "bird",
        "avian",
        "poultry",
      ];

    case Species.EXOTIC_MAMMAL:
      return [
        "exotic mammal",
      ];

    case Species.REPTILE:
      return [
        "reptile",
      ];

    default:
      return [];
  }
}

/**
 * ============================================================
 * REMOVE SPECIES PREFIX
 * ============================================================
 *
 * This is the important part for cases such as:
 *
 * "Bovine Leptospirosis"
 * "Canine Leptospirosis"
 * "Feline Leptospirosis"
 *
 * The species has ALREADY been established from the patient.
 *
 * Therefore:
 *
 * "Bovine Leptospirosis"
 *
 * can be compared against:
 *
 * "Leptospirosis"
 */

function removeSpeciesPrefix(
  name: string,
  species?: Species
): string {
  let normalized =
    normalizeDiseaseName(name);

  const aliases =
    getSpeciesAliases(species);

  for (const alias of aliases) {
    const normalizedAlias =
      normalizeDiseaseName(alias);

    if (
      normalized ===
      normalizedAlias
    ) {
      return "";
    }

    if (
      normalized.startsWith(
        `${normalizedAlias} `
      )
    ) {
      normalized =
        normalized
          .slice(
            normalizedAlias.length
          )
          .trim();

      break;
    }
  }

  return normalized;
}

/**
 * ============================================================
 * GET MATCHABLE DISEASE NAMES
 * ============================================================
 *
 * Creates multiple normalized forms.
 *
 * Example:
 *
 * Bovine Leptospirosis
 *
 * becomes:
 *
 * "bovine leptospirosis"
 * "leptospirosis"
 */

function getMatchableNames(
  name: string,
  species?: Species
): string[] {
  const names =
    new Set<string>();

  const normalized =
    normalizeDiseaseName(name);

  if (normalized) {
    names.add(normalized);
  }

  const withoutSpecies =
    removeSpeciesPrefix(
      normalized,
      species
    );

  if (withoutSpecies) {
    names.add(withoutSpecies);
  }

  return Array.from(names);
}

/**
 * ============================================================
 * TOKENIZE
 * ============================================================
 */

function tokenize(
  value: string
): string[] {
  return normalizeDiseaseName(
    value
  )
    .split(" ")
    .filter(Boolean);
}

/**
 * ============================================================
 * TOKEN MATCH
 * ============================================================
 *
 * Used as a conservative fallback.
 *
 * Example:
 *
 * "Bovine Leptospirosis"
 *
 * can match:
 *
 * "Leptospirosis"
 *
 * because the meaningful disease token
 * is contained in the card title.
 */

function tokenOverlapScore(
  query: string,
  candidate: string
): number {
  const queryTokens =
    tokenize(query);

  const candidateTokens =
    tokenize(candidate);

  if (
    queryTokens.length === 0 ||
    candidateTokens.length === 0
  ) {
    return 0;
  }

  const candidateSet =
    new Set(candidateTokens);

  let matched = 0;

  for (const token of queryTokens) {
    if (candidateSet.has(token)) {
      matched++;
    }
  }

  return (
    matched /
    queryTokens.length
  );
}

/**
 * ============================================================
 * GENERAL DISEASE SEARCH
 * ============================================================
 *
 * User-facing disease search.
 *
 * This searches:
 *
 * - title
 * - description
 * - synonyms
 */

export function searchDisease(
  query: string
): DiseaseCard[] {
  const searchText =
    normalizeDiseaseName(query);

  if (!searchText) {
    return [];
  }

  return diseaseDatabase.filter(
    (disease) => {
      const title =
        normalizeDiseaseName(
          disease.title
        );

      const description =
        disease.description
          ? normalizeDiseaseName(
              disease.description
            )
          : "";

      const synonyms =
        disease.synonyms?.map(
          normalizeDiseaseName
        ) ?? [];

      return (
        title.includes(searchText) ||
        description.includes(searchText) ||
        synonyms.some(
          (synonym) =>
            synonym.includes(
              searchText
            )
        )
      );
    }
  );
}

/**
 * ============================================================
 * RESOLVE DISEASE CARD
 * ============================================================
 *
 * Converts an AI-generated diagnosis into
 * an existing species-compatible disease card.
 *
 * Matching order:
 *
 * 1. Exact title
 * 2. Exact synonym
 * 3. Species-prefix removed title
 * 4. Species-prefix removed synonym
 * 5. Partial title match
 * 6. Partial synonym match
 *
 * IMPORTANT:
 *
 * Species filtering happens FIRST.
 *
 * Therefore:
 *
 * Cattle + Leptospirosis
 *
 * can NEVER accidentally attach a canine
 * disease card.
 */

export function resolveDiseaseCard(
  diagnosisName: string,
  patientSpecies?: Species
): DiseaseCard | undefined {
  const normalizedDiagnosis =
    normalizeDiseaseName(
      diagnosisName
    );

  if (!normalizedDiagnosis) {
    return undefined;
  }

  /**
   * ----------------------------------------------------------
   * SPECIES FILTER
   * ----------------------------------------------------------
   */

  const candidateCards =
    patientSpecies
      ? diseaseDatabase.filter(
          (disease) =>
            disease.species?.includes(
              patientSpecies
            )
        )
      : diseaseDatabase;

  if (
    candidateCards.length === 0
  ) {
    return undefined;
  }

  /**
   * ----------------------------------------------------------
   * CREATE QUERY FORMS
   * ----------------------------------------------------------
   */

  const diagnosisForms =
    getMatchableNames(
      diagnosisName,
      patientSpecies
    );

  /**
   * ----------------------------------------------------------
   * 1. EXACT TITLE MATCH
   * ----------------------------------------------------------
   */

  const exactTitle =
    candidateCards.find(
      (disease) => {
        const titleForms =
          getMatchableNames(
            disease.title,
            patientSpecies
          );

        return titleForms.some(
          (title) =>
            diagnosisForms.includes(
              title
            )
        );
      }
    );

  if (exactTitle) {
    return exactTitle;
  }

  /**
   * ----------------------------------------------------------
   * 2. EXACT SYNONYM MATCH
   * ----------------------------------------------------------
   */

  const exactSynonym =
    candidateCards.find(
      (disease) => {
        const synonyms =
          disease.synonyms ?? [];

        return synonyms.some(
          (synonym) => {
            const synonymForms =
              getMatchableNames(
                synonym,
                patientSpecies
              );

            return synonymForms.some(
              (form) =>
                diagnosisForms.includes(
                  form
                )
            );
          }
        );
      }
    );

  if (exactSynonym) {
    return exactSynonym;
  }

  /**
   * ----------------------------------------------------------
   * 3. NORMALIZED ID MATCH
   * ----------------------------------------------------------
   */

  const normalizedId =
    normalizedDiagnosis
      .replace(/\s+/g, "-");

  const exactId =
    candidateCards.find(
      (disease) =>
        disease.id
          .toLowerCase()
          .replace(/_/g, "-") ===
        normalizedId
    );

  if (exactId) {
    return exactId;
  }

  /**
   * ----------------------------------------------------------
   * 4. PARTIAL TITLE MATCH
   * ----------------------------------------------------------
   *
   * Example:
   *
   * AI:
   * "Bovine Leptospirosis"
   *
   * Card:
   * "Leptospirosis"
   *
   * Both become:
   *
   * "leptospirosis"
   */

  const partialTitle =
    candidateCards.find(
      (disease) => {
        const titleForms =
          getMatchableNames(
            disease.title,
            patientSpecies
          );

        return titleForms.some(
          (title) =>
            diagnosisForms.some(
              (diagnosis) =>
                diagnosis === title ||
                diagnosis.includes(
                  title
                ) ||
                title.includes(
                  diagnosis
                )
            )
        );
      }
    );

  if (partialTitle) {
    return partialTitle;
  }

  /**
   * ----------------------------------------------------------
   * 5. PARTIAL SYNONYM MATCH
   * ----------------------------------------------------------
   */

  const partialSynonym =
    candidateCards.find(
      (disease) => {
        const synonyms =
          disease.synonyms ?? [];

        return synonyms.some(
          (synonym) => {
            const synonymForms =
              getMatchableNames(
                synonym,
                patientSpecies
              );

            return synonymForms.some(
              (synonymForm) =>
                diagnosisForms.some(
                  (diagnosis) =>
                    diagnosis ===
                      synonymForm ||
                    diagnosis.includes(
                      synonymForm
                    ) ||
                    synonymForm.includes(
                      diagnosis
                    )
                )
            );
          }
        );
      }
    );

  if (partialSynonym) {
    return partialSynonym;
  }

  /**
   * ----------------------------------------------------------
   * 6. CONSERVATIVE TOKEN MATCH
   * ----------------------------------------------------------
   *
   * This is deliberately last.
   *
   * We do NOT want aggressive fuzzy matching
   * to attach an unrelated disease card.
   */

  let bestMatch:
    | {
        disease: DiseaseCard;
        score: number;
      }
    | undefined;

  for (const disease of candidateCards) {
    const names = [
      disease.title,
      ...(disease.synonyms ?? []),
    ];

    for (const name of names) {
      const forms =
        getMatchableNames(
          name,
          patientSpecies
        );

      for (const form of forms) {
        for (const diagnosis of diagnosisForms) {
          const score =
            tokenOverlapScore(
              diagnosis,
              form
            );

          if (
            score >= 0.75 &&
            (
              !bestMatch ||
              score >
                bestMatch.score
            )
          ) {
            bestMatch = {
              disease,
              score,
            };
          }
        }
      }
    }
  }

  if (bestMatch) {
    return bestMatch.disease;
  }

  /**
   * ----------------------------------------------------------
   * NO RELIABLE MATCH
   * ----------------------------------------------------------
   *
   * Never attach a card from another species.
   */

  return undefined;
}