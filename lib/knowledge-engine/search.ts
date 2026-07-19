import { diseaseDatabase } from "./database";
import { DiseaseCard } from "./types";


export function getDiseaseById(
  id: string
): DiseaseCard | undefined {

  return diseaseDatabase.find(
    (disease) =>
      disease.id === id
  );

}


export function searchDisease(
  query: string
): DiseaseCard[] {

  const searchText =
    query.toLowerCase().trim();

  if (!searchText) {
    return [];
  }

  return diseaseDatabase.filter(
    (disease) =>
      disease.title
        .toLowerCase()
        .includes(searchText) ||

      disease.description
        ?.toLowerCase()
        .includes(searchText) ||

      disease.synonyms?.some(
        (synonym) =>
          synonym
            .toLowerCase()
            .includes(searchText)
      )
  );

}