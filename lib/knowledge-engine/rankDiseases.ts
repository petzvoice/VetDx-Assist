import { diseaseDatabase } from "./database";
import { scoreDisease } from "./score";

export function rankDiseases(
  clinicalText: string
) {

  return diseaseDatabase
    .map((disease) => {

      const result =
        scoreDisease(
          disease,
          clinicalText
        );

      return {
        disease,
        score: result.score,
        matchedEvidence:
          result.matchedEvidence,
      };

    })
    .filter(
      (item) => item.score > 0
    )
    .sort(
      (a, b) =>
        b.score - a.score
    );
}