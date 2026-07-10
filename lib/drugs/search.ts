import { Drug } from "./types";


/**
 * Searches the veterinary drug database.
 *
 * Supports:
 * - Generic name
 * - Brand names
 * - Search aliases
 * - Drug class
 * - Pharmacologic class
 * - Category
 * - Indications
 * - Common clinical uses
 * - Mechanism of action
 */
export function searchDrugs(
  drugs: Drug[],
  query: string
): Drug[] {


  const search = query.trim().toLowerCase();



  if (!search) {
    return drugs;
  }



  return drugs.filter((drug) => {


    const clinicalText = [

      ...drug.clinical.indications,

      ...drug.clinical.commonUses,

      drug.clinical.mechanismOfAction,

    ]
      .join(" ")
      .toLowerCase();



    return (

      drug.genericName
        .toLowerCase()
        .includes(search)



      ||

      drug.brandNames.some((brand) =>
        brand
          .toLowerCase()
          .includes(search)
      )



      ||

      drug.searchTerms.some((term) =>
        term
          .toLowerCase()
          .includes(search)
      )



      ||

      drug.quickFacts.drugClass
        .toLowerCase()
        .includes(search)



      ||

      drug.quickFacts.pharmacologicClass
        .toLowerCase()
        .includes(search)



      ||

      drug.quickFacts.category
        .toLowerCase()
        .includes(search)



      ||

      clinicalText.includes(search)

    );

  });

}