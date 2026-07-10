// lib/drugs/repository.ts

import { Drug, Species } from "./types";
import { drugs } from "./data";
/**
 * Returns all drugs.
 */
export function getAllDrugs(): Drug[] {
  return drugs;
}

/**
 * Returns a drug by its unique ID.
 */
export function getDrugById(id: string): Drug | undefined {
  return drugs.find((drug) => drug.id === id);
}
/**
 * Returns all drugs within a category.
 */
export function getDrugsByCategory(category: string): Drug[] {
  return drugs.filter(
    (drug) =>
      drug.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Returns all drugs for a particular species.
 */
export function getDrugsBySpecies(species: Species): Drug[] {
  return drugs.filter((drug) =>
    drug.species.includes(species)
  );
}

/**
 * Returns all unique categories.
 */
export function getCategories(): string[] {
  return [...new Set(drugs.map((drug) => drug.category))].sort();
}

/**
 * Returns all unique drug classes.
 */
export function getDrugClasses(): string[] {
  return [...new Set(drugs.map((drug) => drug.drugClass))].sort();
}