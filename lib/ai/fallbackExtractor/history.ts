export function extractHistory(notes: string) {
  const lower = notes.toLowerCase();

  let chiefComplaint = "";

const complaints: string[] = [];

if (lower.includes("diarr"))
  complaints.push("Diarrhea");

if (lower.includes("cough"))
  complaints.push("Cough");


if (lower.includes("jaundice"))
  complaints.push("Jaundice");

if (lower.includes("yellow mucus"))
  complaints.push("Yellow mucous membranes");

if (lower.includes("itch") || lower.includes("pruritus"))
  complaints.push("Pruritus");


if (lower.includes("distension"))
  complaints.push("Abdominal distension");

if (lower.includes("difficulty breathing") || lower.includes("dyspnea"))
  complaints.push("Dyspnea");


if (lower.includes("collapse") || lower.includes("syncope"))
  complaints.push("Collapse");

if (
  lower.includes("nasal discharge") ||
  lower.includes("ocular discharge") ||
  lower.includes("eye discharge") ||
  lower.includes("ear discharge") ||
  lower.includes("vaginal discharge") ||
  lower.includes("urethral discharge") ||
  lower.includes("secretion")
)
  complaints.push("Discharge");
if (lower.includes("swelling") || lower.includes("mass"))
  complaints.push("Swelling/Mass");

if (
  lower.includes("pain") &&
  !lower.includes("no pain") &&
  !lower.includes("without pain") &&
  !lower.includes("pain free")
)
  complaints.push("Pain");

if (lower.includes("blood in urine"))
  complaints.push("Hematuria");

if (lower.includes("weight gain"))
  complaints.push("Weight gain");

if (
  lower.includes("loss of appetite") ||
  lower.includes("poor appetite") ||
  lower.includes("decreased appetite") ||
  lower.includes("anorexia") ||
  lower.includes("hyporexia")
)
  complaints.push("Reduced appetite");

  if (
  lower.includes("vomiting") ||
  lower.includes("emesis")
)
  complaints.push("Vomiting");

if (
  lower.includes("regurgitation") ||
  lower.includes("regurgitate")
)
  complaints.push("Regurgitation");

if (
  lower.includes("straining") ||
  lower.includes("tenesmus")
)
  complaints.push("Straining");

if (
  lower.includes("blood in stool") ||
  lower.includes("hematochezia")
)
  complaints.push("Blood in stool");

if (
  lower.includes("seizure") ||
  lower.includes("convulsion")
)
  complaints.push("Seizures");

if (
  lower.includes("ataxia") ||
  lower.includes("incoordination")
)
  complaints.push("Ataxia");

if (
  lower.includes("distress") ||
  lower.includes("respiratory distress")
)
  complaints.push("Respiratory distress");

  if (
  lower.includes("weight loss") ||
  lower.includes("lost weight")
)
  complaints.push("Weight loss");


if (
  lower.includes("fever") ||
  lower.includes("pyrexia")
)
  complaints.push("Fever");


if (
  lower.includes("panting") ||
  lower.includes("tachypnea")
)
  complaints.push("Increased respiratory effort");


if (
  lower.includes("swollen abdomen") ||
  lower.includes("bloat") ||
  lower.includes("tympany")
)
  complaints.push("Abdominal distension");


if (
  lower.includes("lameness") ||
  lower.includes("limping")
)
  complaints.push("Lameness");


chiefComplaint = [...new Set(complaints)].join(", ");

  let appetite = "";

if (
  lower.includes("not eating") ||
  lower.includes("anorexia") ||
  lower.includes("off feed") ||
  lower.includes("poor appetite") ||
  lower.includes("decreased appetite") ||
  lower.includes("reduced appetite") ||
  lower.includes("hyporexia")
) {
  appetite = "Reduced";
}

else if (
  lower.includes("increased appetite") ||
  lower.includes("polyphagia")
) {
  appetite = "Increased";
}

else if (
  lower.includes("normal appetite") ||
  lower.includes("eating normally")
) {
  appetite = "Normal";
}

  let activity = "";

if (
  lower.includes("letharg") ||
  lower.includes("weak") ||
  lower.includes("dull") ||
  lower.includes("depressed") ||
  lower.includes("inactive") ||
  lower.includes("reduced activity")
) {
  activity = "Reduced";
}

else if (
  lower.includes("active") ||
  lower.includes("normal activity")
) {
  activity = "Normal";
}

 let duration = "";

const durationPatterns = [

/(?:for|since|from|last|duration|history of)\s*(?:about\s*)?(?:of\s*)?(\d+\s*(?:d|day|days|wk|wks|week|weeks|month|months|mos|year|years))/i,

/(\d+)\s*-\s*(?:day|days|week|weeks|month|months|year|years)\s*(?:history|duration)?/i,

/(\d+\s*(?:day|days|week|weeks|month|months|year|years))\s*ago/i,

/(yesterday|today)/i

];


for (const pattern of durationPatterns) {

  const match = notes.match(pattern);

  if (match) {

    duration = match[1];
    break;

  }

}

  let waterIntake = "";

if (
  lower.includes("increased drinking") ||
  lower.includes("polydipsia") ||
  lower.includes("drinking more")
) {
  waterIntake = "Increased";
}

else if (
  lower.includes("reduced drinking") ||
  lower.includes("not drinking") ||
  lower.includes("decreased water intake")
) {
  waterIntake = "Reduced";
}

else if (
  lower.includes("normal drinking")
) {
  waterIntake = "Normal";
}

  let urination = "";

if (
  lower.includes("polyuria") ||
  lower.includes("frequent urination") ||
  lower.includes("urinating more")
) {
  urination = "Increased";
}

else if (
  lower.includes("oliguria") ||
  lower.includes("reduced urination")
) {
  urination = "Reduced";
}

else if (
  lower.includes("anuria") ||
  lower.includes("unable to urinate")
) {
  urination = "Absent";
}

else if (
  lower.includes("normal urination")
) {
  urination = "Normal";
}
  let defecation = "";

if (
  lower.includes("diarrhea") ||
  lower.includes("diarrhoea") ||
  lower.includes("loose stool")
) {
  defecation = "Diarrhea";
}

else if (
  lower.includes("constipation") ||
  lower.includes("hard stool")
) {
  defecation = "Constipation";
}

else if (
  lower.includes("melena") ||
  lower.includes("blood in stool")
) {
  defecation = "Abnormal";
}

else if (
  lower.includes("normal stool")
)
{
  defecation = "Normal";
}

  let previousTreatment = "";

const medicationsFound: string[] = [];

const commonMedications = [
  "amoxicillin",
  "amoxiclav",
  "cephalexin",
  "ceftriaxone",
  "enrofloxacin",
  "doxycycline",
  "metronidazole",
  "clindamycin",
  "cefazolin",
"ceftiofur",
"penicillin",
"ampicillin",
"amoxicillin clavulanate",
"azithromycin",


  "meloxicam",
  "carprofen",
  "firocoxib",
  "tramadol",
"gabapentin",
"buprenorphine",
"butorphanol",

  "prednisolone",
  "prednisone",
  "dexamethasone",

  "omeprazole",
  "pantoprazole",
  "famotidine",

  "ondansetron",
  "maropitant",
  "metoclopramide",

  "ivermectin",
  "fenbendazole",
  "praziquantel",

  "insulin",
  "furosemide",
  "enalapril",
  "benazepril",

  "ketamine",
"xylazine",
"acepromazine",
 
  "iv fluids",
"ringer lactate",
"saline",

"mannitol",
"dextrose",
"potassium chloride",
"calcium gluconate",
];


for (const drug of commonMedications) {

  const escapedDrug =
    drug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        .replace(/\s+/g, "\\s+");


  const regex =
    new RegExp(
      `\\b${escapedDrug}\\b`,
      "i"
    );


  if (regex.test(notes)) {

    medicationsFound.push(
      drug === "iv fluids"
        ? "IV Fluids"
        : drug
    );

  }

}

if (
  lower.includes("fluid therapy") &&
  !medicationsFound.includes("IV Fluids")
) {
  medicationsFound.push("IV Fluids");
}

if (medicationsFound.length > 0) {
const uniqueMedications =
  [...new Set(medicationsFound)];
  previousTreatment =
    uniqueMedications
      .map(
        med =>
          med.charAt(0).toUpperCase() +
          med.slice(1)
      )
      .join(", ");

}

  let illnessHistory = "";

const historyMatch = notes.match(
  /(?:history of|previous history|past history|known history|hx|pmh)\s*[:\-]?\s*(.*?)(?:\.|$)/i
);

if (historyMatch) {
  illnessHistory = historyMatch[1].trim();
}
// Environmental exposure detection

if (
  lower.includes("stagnant water") ||
  lower.includes("water exposure")
) {
  illnessHistory = illnessHistory
    ? `${illnessHistory}, Stagnant water exposure`
    : "Stagnant water exposure";
}

  return {
    chiefComplaint,
    duration,
    appetite,
    activity,
    waterIntake,
    urination,
    defecation,
    illnessHistory,
    previousTreatment,
  };
}