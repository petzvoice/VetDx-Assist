// lib/drugs/search.ts

import { Drug } from "./types";
import { getAllDrugs } from "./repository";

/**
 * Performs a case-insensitive search across the drug database.
 */
export function searchDrugs(query: string): Drug[] {
  const search = query.trim().toLowerCase();

  if (!search) {
    return getAllDrugs();
  }

  return getAllDrugs().filter((drug) => {
    return (
      drug.genericName.toLowerCase().includes(search) ||

      drug.brandNames.some((brand) =>
        brand.toLowerCase().includes(search)
      ) ||

      drug.drugClass.toLowerCase().includes(search) ||

      drug.pharmacologicClass.toLowerCase().includes(search) ||

      drug.category.toLowerCase().includes(search) ||

      drug.commonUses.some((use) =>
        use.toLowerCase().includes(search)
      )
    );
  });
}