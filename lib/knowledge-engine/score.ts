import { DiseaseCard } from "./types";
import { detectSpecies } from "./speciesFilter";


const synonyms: Record<string, string[]> = {

  fever: [
    "fever",
    "pyrexia",
    "high temperature",
    "hyperthermia",
    "104"
  ],

  vomiting: [
    "vomiting",
    "vomit",
    "emesis"
  ],

  lethargy: [
    "lethargy",
    "weakness",
    "dull",
    "depressed"
  ],

  anorexia: [
    "anorexia",
    "loss of appetite",
    "not eating",
    "reduced appetite",
    "poor appetite"
  ],

  jaundice: [
    "jaundice",
    "icterus",
    "yellow gums",
    "yellow mucous membranes"
  ],

  diarrhea: [
    "diarrhea",
    "diarrhoea",
    "loose stool"
  ],

  "weight loss": [
    "weight loss",
    "loss of weight",
    "emaciation",
    "thin"
  ]

};



function contains(
  text: string,
  keyword: string
): boolean {


  const lowerText =
    text.toLowerCase();


  const lowerKeyword =
    keyword.toLowerCase();



  if (
    lowerText.includes(lowerKeyword)
  ) {

    return true;

  }



  const synonymList =
    synonyms[lowerKeyword];



  if (!synonymList) {

    return false;

  }



  return synonymList.some(
    (word) =>
      lowerText.includes(
        word.toLowerCase()
      )
  );

}





export function scoreDisease(
  disease: DiseaseCard,
  clinicalText: string
) {


  let score = 0;



  const matchedEvidence: {
    finding: string;
    weight: number;
  }[] = [];





  /*
    SPECIES PROTECTION

    Prevents:
    Cat case -> cattle diseases
    Dog case -> horse diseases
  */


  const detectedSpecies =
    detectSpecies(clinicalText);



  if (

    detectedSpecies.length > 0 &&

    disease.species &&

    disease.species.length > 0

  ) {


    const speciesMatch =
      disease.species.some(
        (species) =>
          detectedSpecies.includes(species)
      );



    if (!speciesMatch) {


      return {

        score: -1000,

        matchedEvidence: []

      };

    }

  }





  const evidence =
    disease.clinicalEvidence;

let requiredFindings: string[] = [];

if (disease.requiredFindings?.length) {
  requiredFindings = disease.requiredFindings;
} else {
  requiredFindings = [
    ...(evidence?.supports ?? [])
      .filter(item => item.weight >= 70)
      .map(item => item.finding),

    ...(evidence?.imaging ?? [])
      .filter(item => item.weight >= 65)
      .map(item => item.finding),
  ];
}

  if (!evidence) {


    return {

      score: 0,

      matchedEvidence: []

    };

  }








  function scoreSection(
    items:
      {
        finding: string;
        weight: number;
      }[] | undefined,

    multiplier = 1

  ) {



    if (!items) return;



    for (const item of items) {



      if (

        contains(
          clinicalText,
          item.finding
        )

      ) {



        const weightedScore =
          item.weight * multiplier;



        score += weightedScore;



        const alreadyExists = matchedEvidence.some(
  e => e.finding.toLowerCase() === item.finding.toLowerCase()
);

if (!alreadyExists) {

  matchedEvidence.push({

    finding: item.finding,

    weight: weightedScore

  });

}


      }


    }


  }







  /*
    Clinical evidence scoring
  */


  scoreSection(
    evidence.signalment
  );


  scoreSection(
    evidence.history
  );


  scoreSection(
    evidence.clinicalSigns
  );


  scoreSection(
    evidence.physicalExam
  );


  scoreSection(
    evidence.cbc
  );


  scoreSection(
    evidence.biochemistry
  );


  scoreSection(
    evidence.urinalysis
  );


  scoreSection(
    evidence.imaging
  );


  scoreSection(
    evidence.toxicology
  );


  scoreSection(
    evidence.infectiousDisease
  );


  scoreSection(
    evidence.supports
  );






  /*
    Negative evidence penalty
  */


  scoreSection(
    evidence.against,
    -1
  );








  /*
    Disease-specific priority findings

    Example:

    Feline Hepatic Lipidosis

    jaundice
    anorexia
    weight loss

    gets additional weight
  */


  if (

    disease.priorityFindings

  ) {



    for (

      const finding of disease.priorityFindings

    ) {



      if (

        contains(
          clinicalText,
          finding
        )

      ) {



        score += 15;



        const alreadyExists = matchedEvidence.some(
  e => e.finding.toLowerCase() === finding.toLowerCase()
);

if (!alreadyExists) {

  matchedEvidence.push({

    finding,

    weight: 15

  });

}


      }


    }


  }


if (requiredFindings.length > 0) {

  let matchedRequired = 0;

  for (const finding of requiredFindings) {

    if (contains(clinicalText, finding)) {
      matchedRequired++;
    }

  }

  if (matchedRequired === 0) {
    return {
      score: -1000,
      matchedEvidence: [],
    };
  }

}


  /*
    Classic finding penalty

    If disease usually has
    important signs missing,
    reduce score.
  */


  if (

    disease.classicFindings &&

    disease.classicFindings.length > 0

  ) {



    let missingClassic = 0;



    for (

      const finding of disease.classicFindings

    ) {



      if (

        !contains(
          clinicalText,
          finding
        )

      ) {

        missingClassic++;

      }


    }



    score -=
      missingClassic * 2;


  }







  return {

    score,

    matchedEvidence

  };


}