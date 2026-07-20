import { getAllDrugs } from "@/lib/drugs/repository";
import { Drug } from "@/lib/drugs/types";

export function searchDrugByCategory(
  categories: string[]
): Drug[] {

  if (!categories.length) {
    return [];
  }

  const searchTerms = categories.map((c) =>
    c.toLowerCase()
  );

  return getAllDrugs().filter((drug) => {

    const text = [
      drug.genericName,
      ...drug.brandNames,
      ...drug.searchTerms,
      drug.quickFacts.category,
      drug.quickFacts.drugClass,
      drug.quickFacts.pharmacologicClass,
    ]
      .join(" ")
      .toLowerCase();

    return searchTerms.some((term) =>
      text.includes(term)
    );
  });
}