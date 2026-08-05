import { diseases } from "./data";
import { diseaseMetadata } from "./metadata";
import type { DiseaseListItem } from "./types";

export const diseaseLibrary: DiseaseListItem[] = diseases.map((d) => {
  const metadata = diseaseMetadata[d.id];

  return {
  id: d.id,

  name: d.title,

  species: d.species,

  category: metadata?.category ?? "Uncategorized",

  system: metadata?.system ?? "General",

  bodySystem: metadata?.bodySystem ?? "General",

  synonyms: d.synonyms,

  disease: d,
};
});