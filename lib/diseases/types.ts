import type { DiseaseCard } from "@/lib/knowledge-engine/types";

export interface DiseaseListItem {
  id: string;

  name: string;

  species: string[];

  category: string;

  system: string;

  bodySystem: string;

  synonyms?: string[];

  disease: DiseaseCard;
}