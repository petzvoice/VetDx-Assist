import { DiseaseCard } from "./types";
import { scoreDisease } from "./score";

export interface RankedDisease {
  disease: DiseaseCard;
  score: number;
  matchedEvidence: {
    finding: string;
    weight: number;
  }[];
}
export function rankDiseases(
  diseases: DiseaseCard[],
  clinicalText: string
): RankedDisease[] {

  return diseases
  .map((disease) => {

    const result = scoreDisease(
      disease,
      clinicalText
    );

    return {
      disease,
      score: result.score,
      matchedEvidence: result.matchedEvidence,
    };

  })
  .filter((item) => item.score > 0)
  .sort((a, b) => b.score - a.score);

}