import { diseaseDatabase } from "./database";
import { scoreDisease } from "./score";
import { detectSpecies } from "./speciesFilter";


export function rankDiseases(
  clinicalText: string
) {


  const detectedSpecies =
    detectSpecies(clinicalText);



  return diseaseDatabase


    // Species filtering
    .filter((disease) => {


      // If species not detected,
      // allow all diseases
      if (detectedSpecies.length === 0) {
        return true;
      }


      // If disease has no species information,
      // keep it for scoring
      if (
        !disease.species ||
        disease.species.length === 0
      ) {
        return true;
      }


      return disease.species.some(
        (species) =>
          detectedSpecies.includes(species)
      );


    })



    .map((disease) => {


      const result =
        scoreDisease(
          disease,
          clinicalText
        );


      return {

        disease,

        score:
          result.score,

        matchedEvidence:
          result.matchedEvidence

      };


    })



    // Remove weak matches
    .filter(
      (item) =>

        item.score >= 20 &&

        item.matchedEvidence.length >= 2

    )



    .sort(
      (a, b) =>
        b.score - a.score
    );


}