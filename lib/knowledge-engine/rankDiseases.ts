import { diseaseDatabase } from "./database";
import { scoreDisease } from "./score";
import { detectSpecies } from "./speciesFilter";


export function rankDiseases(
  clinicalText: string
) {


  const detectedSpecies =
    detectSpecies(clinicalText);

    console.log("Detected Species:", detectedSpecies);



  return diseaseDatabase
  .map((disease) => {
    console.log(
      disease.title,
      disease.species
    );

    return disease;
  })

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
    
       console.log(
    "After species filter:",
    disease.title,
    disease.species
  );

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