import type { AIClinicalReport } from "@/types/ai";
import { drugs } from "@/lib/drugs/data";

function buildAgainstFindings(
  disease: any,
  matchedEvidence: any[]
): string[] {

  const matched = new Set(
  (matchedEvidence ?? [])
    .map((e: any) => e.finding)
    .filter(Boolean)
    .map((finding: string) => finding.toLowerCase())
);

  return (disease.clinicalSigns ?? [])
    .map((sign: any) =>
      typeof sign === "string"
        ? sign
        : sign.name ?? sign.finding ?? ""
    )
    .filter(Boolean)
    .filter(
      (sign: string) =>
        !matched.has(sign.toLowerCase())
    )
    .slice(0, 5)
    .map(
      (sign: string) =>
        `${sign} not reported`
    );
}
export function generateFallbackReport(
  caseData: any,
  rankedDiseases: any[]
): AIClinicalReport {
  const primary = rankedDiseases[0];

  if (!primary) {
    throw new Error("No disease candidates found.");
  }

  const disease = primary.disease;

  return {
    source: "fallback",
    patientSummary: {
  species:
    caseData.patient?.species ?? "",

  breed:
    caseData.patient?.breed ?? "",

  age:
    caseData.patient?.age ?? "",

  sex:
    caseData.patient?.sex ?? "",

  weight:
    caseData.patient?.weight ?? "",

  summary:
    `${caseData.patient?.age ?? ""} ${caseData.patient?.breed ?? ""} ${caseData.patient?.species ?? ""}`.trim(),
},

    triage: {
      status: "Urgent",
      reason: "Based on available clinical evidence."
    },

   problemList: [
  ...(caseData.clinicalSigns?.general ?? []),
  ...(caseData.clinicalSigns?.gastrointestinal ?? []),
  ...(caseData.clinicalSigns?.respiratory ?? []),
  ...(caseData.clinicalSigns?.cardiovascular ?? []),
  ...(caseData.clinicalSigns?.urinary ?? []),
  ...(caseData.clinicalSigns?.neurological ?? []),
  ...(caseData.clinicalSigns?.musculoskeletal ?? []),
  ...(caseData.clinicalSigns?.dermatology ?? []),
  ...(caseData.clinicalSigns?.reproductive ?? []),
],

   differentials: rankedDiseases.map((item: any) => ({
  name: item.disease.title,

  category: "General",

  confidence: Math.max(
    5,
    Math.min(95, item.score)
  ),

  reasoning:
  (item.matchedEvidence ?? []).map(
    (e: any) =>
      `${e.finding} supports ${item.disease.title}.`
  ),

supportingFindings:
  (item.matchedEvidence ?? []).map(
    (e: any) => e.finding
  ),

  againstFindings: buildAgainstFindings(
  item.disease,
  item.matchedEvidence
),

 recommendedTests:
  (item.disease.diagnostics ?? []).map(
    (test: any) => ({
      id: test.id,
      name: test.name,
      priority: test.priority,
      reason: test.reason,
    })
  ),

  initialTreatment: [
  ...(item.disease.stabilization ?? []).map(
    (step: any) =>
      typeof step === "string"
        ? step
        : step.name ?? step.action ?? ""
  ),

  ...((item.disease.recommendedDrugs ?? []).map(
    (drug: any) => {
      const drugData = drugs.find(
        (d) => d.id === drug.drugId
      );

      return {
        drugId: drug.drugId,
        name:
          drugData?.genericName ??
          drug.drugId,
        category: drug.category,
        priority: drug.priority,
      };
    }
  ))
],

  diseaseId: item.disease.id,

vetDxEvidence:
  (item.matchedEvidence ?? []).map(
    (e: any) => e.finding
  ),

classicFindings:
  item.disease.classicFindings ?? [],

strengtheningEvidence:
  item.disease.strengtheningEvidence ?? [],

weakeningEvidence:
  item.disease.weakeningEvidence ?? [],

ruleOutFindings:
  item.disease.ruleOutFindings ?? [],
})),

   recommendedDiagnostics:
  disease.recommendedDiagnostics ??
  disease.diagnostics ??
  [],

    stabilization:
  disease.stabilization ?? [],

    treatmentConsiderations:
  (disease.recommendedDrugs ?? []).map((drug: any) => {

    const drugData = drugs.find(
      (d) => d.id === drug.drugId
    );

    return {
      recommendation:
        `${drugData?.genericName ?? drug.drugId} therapy`,

      category:
        drug.category ?? "",

      details:
        "Treatment recommendation generated from VetDx knowledge database.",

      linkedDrugs: [
        {
          drugId: drug.drugId,
          name:
            drugData?.genericName ??
            drug.drugId,
          category:
            drug.category,
        },
      ],
    };
  }),

    monitoring:
  disease.monitoring ?? [],
   
  redFlags:
  disease.redFlags ?? [],

    clinicalPearls:
  disease.clinicalPearls ?? [],

    prognosis:
typeof disease.prognosis === "object"
?
disease.prognosis
:
{
  shortTerm:
    disease.prognosis ?? "",

  longTerm:
    disease.prognosis ?? "",
},

    clientSummary:
  disease.clientSummary ??
  `${disease.title} is suspected based on the available clinical findings. Further diagnostic testing is recommended to confirm the diagnosis and guide treatment.`,
  };
}