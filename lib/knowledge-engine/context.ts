import { searchDisease } from "./search";


export function buildKnowledgeContext(
  query: string
): string {

  const diseases =
    searchDisease(query);


  if (!diseases.length) {
    return "";
  }


  return diseases
    .map((disease) => {

      return `
VetDx Knowledge Reference

Disease:
${disease.title}

Species:
${disease.species.join(", ")}

Description:
${disease.description ?? ""}

Overview:
${disease.overview}

Clinical Problems:
${disease.clinicalProblems.join(", ")}

Clinical Workflow:
${disease.workflow
  .map(
    (step) =>
      `${step.step}. ${step.title}: ${step.description}`
  )
  .join("\n")}

Diagnostics:
${disease.diagnostics
  .map(
    (d) =>
      `${d.name} (${d.priority}) - ${d.reason ?? ""}`
  )
  .join("\n")}

Therapeutic Categories:
${disease.drugCategories
  .map(
    (d) =>
      `${d.category}: ${d.indication ?? ""}`
  )
  .join("\n")}

Monitoring:
${disease.monitoring
  .map(
    (m) =>
      m.parameter
  )
  .join(", ")}

Precautions:
${disease.precautions
  .map(
    (p) =>
      `${p.title}: ${p.description}`
  )
  .join("\n")}

Prognosis:
${disease.prognosis}

`;
    })
    .join("\n-----------------\n");
}