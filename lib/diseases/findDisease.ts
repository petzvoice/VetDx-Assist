import { diseaseLibrary } from "./library";

export function findDisease(query: string) {
  const search = query.trim().toLowerCase();

  // Exact disease name
  let match = diseaseLibrary.find(
    (d) => d.name.toLowerCase() === search
  );

  if (match) return match;

  // Synonyms
  match = diseaseLibrary.find(
    (d) =>
      d.synonyms?.some(
        (s) => s.toLowerCase() === search
      )
  );

  if (match) return match;

  // Partial disease name
  match = diseaseLibrary.find(
    (d) =>
      d.name.toLowerCase().includes(search) ||
      search.includes(d.name.toLowerCase())
  );

  if (match) return match;

  // Partial synonym
  match = diseaseLibrary.find(
    (d) =>
      d.synonyms?.some(
        (s) =>
          s.toLowerCase().includes(search) ||
          search.includes(s.toLowerCase())
      )
  );

  return match ?? null;
}