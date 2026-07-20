import { getDrugsByCategory } from "../repository";

export function buildDrugContext(
  categories: string[]
): string {

  if (!categories.length) {
    return "";
  }

  return categories
    .map((category) => {

      const drugs =
        getDrugsByCategory(category);

      if (!drugs.length) {
        return "";
      }

      return `
Drug Category:
${category}

${drugs.map((drug) => `
Drug:
${drug.genericName}

Brand Names:
${drug.brandNames.join(", ")}

Drug Class:
${drug.quickFacts.drugClass}

Pharmacologic Class:
${drug.quickFacts.pharmacologicClass}

Mechanism of Action:
${drug.clinical.mechanismOfAction}

Common Uses:
${drug.clinical.commonUses.join(", ")}

Clinical Pearls:
${drug.clinical.clinicalPearls.join(", ")}

Indications:
${drug.clinical.indications.join(", ")}
`).join("\n")}
`;
    })
    .join("\n----------------------\n");
}