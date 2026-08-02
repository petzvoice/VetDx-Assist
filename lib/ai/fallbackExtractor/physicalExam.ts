import { ClinicalSigns } from "./types";
export function extractPhysicalExam(
  notes: string,
  clinicalSigns: ClinicalSigns
) {
  const lower = notes.toLowerCase();

  let temperature = "";

  const tempMatch = notes.match(
    /(?:temp(?:erature)?|body temperature)\s*[:=]?\s*(\d+(?:\.\d+)?)\s*(°?\s*(?:c|f)|fahrenheit|celsius)?/i
  );

  if (tempMatch) {
    const value = parseFloat(tempMatch[1]);
    const unit = String(tempMatch[2] ?? "").toLowerCase().replace(/\s+/g, "");

    if (unit.includes("f") || unit.includes("fahrenheit")) {
      const celsius = ((value - 32) * 5) / 9;
      temperature = `${celsius.toFixed(1)} °C (${value} °F)`;
    } else {
      temperature = `${value} °C`;
    }
  }

  const heartRate =
    notes.match(/(?:heart rate|hr)\s*(?:of|=|:)?\s*(\d+)/i)?.[1] ?? "";

  const pulse =
    notes.match(/pulse\s*(?:of|=|:)?\s*(\d+)/i)?.[1] ?? "";

  const respiratoryRate =
    notes.match(/(?:respiratory rate|rr)\s*(?:of|=|:)?\s*(\d+)/i)?.[1] ?? "";

  let crt = "";

  const crtMatch = notes.match(
    /crt\s*(?:of|=|:|<|>)?\s*(\d+(?:\.\d+)?)\s*(sec|seconds?)?/i
  );

  if (crtMatch) {
    crt = `${crtMatch[1]} sec`;
  } else if (lower.includes("normal crt") || lower.includes("crt normal")) {
    crt = "<2 sec";
  } else if (lower.includes("delayed crt")) {
    crt = ">2 sec";
  }

  let hydration = "";

  if (lower.includes("severely dehydrated"))
  hydration = "Severely Dehydrated";

else if (lower.includes("mildly dehydrated"))
  hydration = "Mildly Dehydrated";

else if (lower.includes("dehydrated"))
  hydration = "Dehydrated";

else if (
  lower.includes("well hydrated") ||
  lower.includes("normal hydration")
)
  hydration = "Normal";

  let mucousMembranes = "";

  if (lower.includes("pale"))
  mucousMembranes = "Pale";

else if (lower.includes("pink"))
  mucousMembranes = "Pink";

else if (lower.includes("icteric"))
  mucousMembranes = "Icteric";

else if (lower.includes("yellow"))
  mucousMembranes = "Yellow";

else if (lower.includes("cyanotic"))
  mucousMembranes = "Cyanotic";

else if (lower.includes("congested"))
  mucousMembranes = "Congested";

else if (lower.includes("brick red"))
  mucousMembranes = "Brick red";

else if (lower.includes("hyperemic"))
  mucousMembranes = "Hyperemic";

  const respiration =
    lower.includes("labored breathing") ||
    lower.includes("labored respiration")
      ? "Labored"
      : lower.includes("shallow breathing")
      ? "Shallow"
      : lower.includes("abdominal breathing")
      ? "Abdominal"
      : lower.includes("open mouth breathing")
      ? "Open-mouth"
      : lower.includes("dyspnea") ||
        lower.includes("difficulty breathing") ||
        lower.includes("breathing difficulty") ||
        lower.includes("respiratory distress")
      ? "Dyspneic"
      : lower.includes("normal breathing")
      ? "Normal"
      : "";

  const pulseQuality =
    lower.includes("weak pulse") ||
    lower.includes("thready pulse") ||
    lower.includes("poor pulse")
      ? "Weak"
      : lower.includes("strong pulse") ||
        lower.includes("bounding pulse")
      ? "Strong"
      : lower.includes("good pulse") ||
        lower.includes("normal pulse")
      ? "Normal"
      : "";

  const lymphNodes =
    lower.includes("enlarged lymph node") ? "Enlarged" : "";
    

  const bodyConditionScore =
    notes.match(/bcs[:\s]*(\d\/\d)/i)?.[1] ?? "";

  const painScore =
    notes.match(/pain[:\s]*(\d+\/10)/i)?.[1] ?? "";

  const abdominalFindings = [
    ...(lower.includes("abdominal pain") ? ["Abdominal pain"] : []),
    ...(lower.includes("abdominal distension") ? ["Abdominal distension"] : []),
    ...(lower.includes("tense abdomen") ? ["Tense abdomen"] : []),
  ];

  const heartFindings = [
    ...(lower.includes("murmur") ? ["Heart murmur"] : []),
    ...(lower.includes("arrhythmia") ? ["Arrhythmia"] : []),
    ...(lower.includes("tachycardia") ? ["Tachycardia"] : []),
    ...(lower.includes("bradycardia") ? ["Bradycardia"] : []),
  ];

  const lungFindings = [
    ...(lower.includes("crackles") ? ["Crackles"] : []),
    ...(lower.includes("wheez") ? ["Wheezes"] : []),
    ...(lower.includes("harsh lung") ? ["Harsh lung sounds"] : []),
  ];

  return {
    temperature,
    pulse,
    heartRate,
    respiration,
    respiratoryRate,
    mucousMembranes,
    pulseQuality,
    crt,
    hydration,
    lymphNodes,
    bodyConditionScore,
    painScore,
    findings: [
  ...new Set([
    ...clinicalSigns.general,
    ...clinicalSigns.gastrointestinal,
    ...clinicalSigns.respiratory,
    ...clinicalSigns.cardiovascular,
    ...clinicalSigns.urinary,
    ...clinicalSigns.neurological,
    ...clinicalSigns.musculoskeletal,
    ...clinicalSigns.dermatology,
    ...clinicalSigns.reproductive,
  ]),
].join(", "),
    notes: "",
    abdominalFindings,
    heartFindings,
    lungFindings,
  };
}