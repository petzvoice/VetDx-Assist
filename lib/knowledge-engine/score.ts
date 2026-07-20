import { DiseaseCard } from "./types";

const synonyms: Record<string,string[]> = {

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
  ]

};

function contains(text: string, keyword: string) {

  const lowerText = text.toLowerCase();
  const lowerKeyword = keyword.toLowerCase();

  if (lowerText.includes(lowerKeyword)) {
    return true;
  }

  const synonymList = synonyms[lowerKeyword];

  if (!synonymList) {
    return false;
  }

  return synonymList.some((word) =>
    lowerText.includes(word.toLowerCase())
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

  const evidence = disease.clinicalEvidence;

 if (!evidence) {
  return {
    score: 0,
    matchedEvidence: []
  };
}

  function scoreSection(
  items?: { finding: string; weight: number }[],
  multiplier = 1
) {
  if (!items) return;

  for (const item of items) {
    if (contains(clinicalText, item.finding)) {

  const weightedScore =
    item.weight * multiplier;

  score += weightedScore;

  matchedEvidence.push({
    finding: item.finding,
    weight: weightedScore
  });
}
  }
}

  scoreSection(evidence.signalment);
  scoreSection(evidence.history);
  scoreSection(evidence.clinicalSigns);
  scoreSection(evidence.physicalExam);
  scoreSection(evidence.cbc);
  scoreSection(evidence.biochemistry);
  scoreSection(evidence.urinalysis);
  scoreSection(evidence.imaging);
  scoreSection(evidence.toxicology);
  scoreSection(evidence.infectiousDisease);
  scoreSection(evidence.supports);
 scoreSection(evidence.against, -1);
  return {
  score,
  matchedEvidence
};
}