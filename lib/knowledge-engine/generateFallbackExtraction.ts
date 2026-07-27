export function generateFallbackExtraction(notes: string) {
  const lower = notes.toLowerCase();

  let species = "";
  let age = "";

  if (
    lower.includes("dog") ||
    lower.includes("canine")
  ) {
    species = "Dog";
  } else if (
    lower.includes("cat") ||
    lower.includes("feline")
  ) {
    species = "Cat";
  } else if (
    lower.includes("horse")
  ) {
    species = "Horse";
  } else if (
    lower.includes("cow") ||
    lower.includes("cattle") ||
    lower.includes("bovine")
  ) {
    species = "Cattle";
  }
const ageMatch = notes.match(
  /(\d+(?:\.\d+)?)\s*(year|years|yr|yrs|month|months|mo|mos|week|weeks|day|days)\b/i
);

if (ageMatch) {
  age = `${ageMatch[1]} ${ageMatch[2]}`;
}

let sex = "";

if (
  /\bmale\b/i.test(notes) ||
  /\bmale dog\b/i.test(notes) ||
  /\bmale cat\b/i.test(notes)
) {
  sex = "Male";
} else if (
  /\bfemale\b/i.test(notes) ||
  /\bfemale dog\b/i.test(notes) ||
  /\bfemale cat\b/i.test(notes)
) {
  sex = "Female";
}

if (/\bneutered\b/i.test(notes)) {
  sex = sex ? `${sex} (Neutered)` : "Neutered";
}

if (/\bspayed\b/i.test(notes)) {
  sex = sex ? `${sex} (Spayed)` : "Spayed";
}

if (/\bcastrated\b/i.test(notes)) {
  sex = sex ? `${sex} (Castrated)` : "Castrated";
}

let weight = "";

const weightMatch =
  notes.match(/(\d+(?:\.\d+)?)\s*(kg|kgs|kilograms?)\b/i);

if (weightMatch) {
  weight = `${weightMatch[1]} kg`;
}

const clinicalSigns = {
  general: [] as string[],
  gastrointestinal: [] as string[],
  respiratory: [] as string[],
  cardiovascular: [] as string[],
  urinary: [] as string[],
  neurological: [] as string[],
  musculoskeletal: [] as string[],
  dermatology: [] as string[],
  reproductive: [] as string[],
};

if (lower.includes("high fever")) {
  clinicalSigns.general.push("High fever");
} else if (lower.includes("fever")) {
  clinicalSigns.general.push("Fever");
}

if (
  lower.includes("yellow mucous membrane") ||
  lower.includes("yellow mucus membrane") ||
  lower.includes("icteric") ||
  lower.includes("jaundice")
) {
  clinicalSigns.general.push("Jaundice");
}
if (lower.includes("letharg"))
  clinicalSigns.general.push("Lethargy");

if (lower.includes("weak"))
  clinicalSigns.general.push("Weakness");

if (lower.includes("anorexia"))
  clinicalSigns.general.push("Anorexia");

if (lower.includes("not eating"))
  clinicalSigns.general.push("Anorexia");

if (lower.includes("off feed"))
  clinicalSigns.general.push("Anorexia");

if (lower.includes("vomit"))
  clinicalSigns.gastrointestinal.push("Vomiting");

if (lower.includes("diarr"))
  clinicalSigns.gastrointestinal.push("Diarrhea");

if (lower.includes("melena"))
  clinicalSigns.gastrointestinal.push("Melena");

if (lower.includes("hematemesis"))
  clinicalSigns.gastrointestinal.push("Hematemesis");

if (lower.includes("cough"))
  clinicalSigns.respiratory.push("Cough");

if (lower.includes("dyspnea"))
  clinicalSigns.respiratory.push("Dyspnea");

if (lower.includes("tachypnea"))
  clinicalSigns.respiratory.push("Tachypnea");

if (lower.includes("nasal discharge"))
  clinicalSigns.respiratory.push("Nasal discharge");
if (lower.includes("tachycardia"))
  clinicalSigns.cardiovascular.push("Tachycardia");

if (lower.includes("bradycardia"))
  clinicalSigns.cardiovascular.push("Bradycardia");

if (lower.includes("murmur"))
  clinicalSigns.cardiovascular.push("Heart murmur");

if (lower.includes("arrhythmia"))
  clinicalSigns.cardiovascular.push("Arrhythmia");

if (lower.includes("syncope"))
  clinicalSigns.cardiovascular.push("Syncope");

if (lower.includes("collapse"))
  clinicalSigns.cardiovascular.push("Collapse");

if (lower.includes("cyanosis"))
  clinicalSigns.cardiovascular.push("Cyanosis");

if (lower.includes("hematuria"))
  clinicalSigns.urinary.push("Hematuria");

if (lower.includes("polyuria"))
  clinicalSigns.urinary.push("Polyuria");

if (lower.includes("oliguria"))
  clinicalSigns.urinary.push("Oliguria");

if (lower.includes("anuria"))
  clinicalSigns.urinary.push("Anuria");

if (lower.includes("seizure"))
  clinicalSigns.neurological.push("Seizures");

if (lower.includes("ataxia"))
  clinicalSigns.neurological.push("Ataxia");

if (lower.includes("head tilt"))
  clinicalSigns.neurological.push("Head tilt");

if (lower.includes("pruritus"))
  clinicalSigns.dermatology.push("Pruritus");

if (lower.includes("alopecia"))
  clinicalSigns.dermatology.push("Alopecia");

if (lower.includes("skin lesion"))
  clinicalSigns.dermatology.push("Skin lesions");

if (lower.includes("lameness"))
  clinicalSigns.musculoskeletal.push("Lameness");

if (lower.includes("joint pain"))
  clinicalSigns.musculoskeletal.push("Joint pain");

let chiefComplaint = "";

const complaints: string[] = [];

if (lower.includes("vomit"))
  complaints.push("Vomiting");

if (lower.includes("diarr"))
  complaints.push("Diarrhea");

if (lower.includes("cough"))
  complaints.push("Cough");

if (lower.includes("fever"))
  complaints.push("Fever");

if (lower.includes("jaundice"))
  complaints.push("Jaundice");

if (lower.includes("yellow mucus"))
  complaints.push("Yellow mucous membranes");


chiefComplaint = complaints.join(", ");

let appetite = "";
if (
  lower.includes("not eating") ||
  lower.includes("anorexia") ||
  lower.includes("off feed")
) {
  appetite = "Reduced";
}


let activity = "";

if (lower.includes("letharg"))
  activity = "Reduced";

if (lower.includes("weak"))
  activity = "Reduced";

let duration = "";

const durationMatch = notes.match(
  /for\s+(\d+\s*(day|days|week|weeks|month|months))/i
);

if (durationMatch) {
  duration = durationMatch[1];
}




const diagnostics = {
  cbc: "",
  biochemistry: "",
  urinalysis: "",
  imaging: "",
  otherTests: "",
};

if (
  lower.includes("cbc") ||
  lower.includes("complete blood count")
) {
  diagnostics.cbc = "Performed";
}

if (
  lower.includes("biochemistry") ||
  lower.includes("serum chemistry") ||
  lower.includes("blood chemistry")
) {
  diagnostics.biochemistry = "Performed";
}

if (
  lower.includes("urinalysis") ||
  lower.includes("urine analysis")
) {
  diagnostics.urinalysis = "Performed";
}

const imaging: string[] = [];

if (
  lower.includes("x-ray") ||
  lower.includes("radiograph") ||
  lower.includes("radiography")
) {
  imaging.push("Radiography");
}

if (lower.includes("ultrasound")) {
  imaging.push("Ultrasound");
}

if (
  /\bct\b/i.test(notes) ||
  lower.includes("computed tomography")
) {
  imaging.push("CT");
}

if (lower.includes("mri")) {
  imaging.push("MRI");
}

diagnostics.imaging = imaging.join(", ");

const otherTests: string[] = [];

if (lower.includes("snap")) {
  otherTests.push("SNAP Test");
}

if (lower.includes("pcr")) {
  otherTests.push("PCR");
}

if (lower.includes("culture")) {
  otherTests.push("Culture");
}

if (lower.includes("cytology")) {
  otherTests.push("Cytology");
}

if (lower.includes("histopathology")) {
  otherTests.push("Histopathology");
}

diagnostics.otherTests = otherTests.join(", ");

let breed = "";

const commonBreeds = [
  // Dogs
  "labrador",
  "labrador retriever",
  "golden retriever",
  "german shepherd",
  "beagle",
  "pug",
  "rottweiler",
  "doberman",
  "spitz",
  "shih tzu",
  "lhasa apso",
  "great dane",
  "indie",
  "mongrel",

  // Cats
  "persian",
  "siamese",
  "maine coon",

  // Cattle
  "jersey",
  "holstein",
  "hf",
  "holstein friesian",
  "gir",
  "sahiwal",

  // Horses
  "marwari",
  "thoroughbred",
];

for (const b of commonBreeds) {
  if (lower.includes(b)) {
    breed =
      b === "hf"
        ? "Holstein Friesian"
        : b
            .split(" ")
            .map(
              word =>
                word.charAt(0).toUpperCase() +
                word.slice(1)
            )
            .join(" ");
    break;
  }
}

let temperature = "";

const tempMatch = notes.match(
  /(?:temp(?:erature)?|fever|body temperature)\s*[:=]?\s*(\d+(?:\.\d+)?)\s*(°?\s*(?:c|f)|fahrenheit|celsius)?/i
);

if (tempMatch) {

  const value = parseFloat(tempMatch[1]);

  const unit = String(tempMatch[2] ?? "")
    .toLowerCase()
    .replace(/\s+/g, "");

  if (
    unit.includes("f") ||
    unit.includes("fahrenheit")
  ) {

    const celsius =
      ((value - 32) * 5) / 9;

    temperature =
      `${celsius.toFixed(1)} °C (${value} °F)`;

  } 
  
  else {

    temperature =
      `${value} °C`;

  }
}

let heartRate = "";

const hrMatch = notes.match(
  /(?:heart rate|hr)\s*(?:of|=|:)?\s*(\d+)/i
);

if (hrMatch) {
  heartRate = hrMatch[1];
}

let pulse = "";

const pulseMatch = notes.match(
  /pulse\s*(?:of|=|:)?\s*(\d+)/i
);

if (pulseMatch) {
  pulse = pulseMatch[1];
}

let respiratoryRate = "";

const rrMatch = notes.match(
  /(?:respiratory rate|rr)\s*(?:of|=|:)?\s*(\d+)/i
);

if (rrMatch) {
  respiratoryRate = rrMatch[1];
}

let crt = "";

const crtMatch = notes.match(
  /crt\s*(?:of|=|:|<|>)?\s*(\d+(?:\.\d+)?)\s*(sec|seconds?)?/i
);

if (crtMatch) {
  crt =
    `${crtMatch[1]} sec`;
}

else if (
  lower.includes("normal crt") ||
  lower.includes("crt normal")
) {
  crt = "<2 sec";
}

else if (
  lower.includes("delayed crt")
) {
  crt = ">2 sec";
}

let hydration = "";

if (lower.includes("dehydrated"))
  hydration = "Dehydrated";

else if (lower.includes("well hydrated"))
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

  "meloxicam",
  "carprofen",
  "firocoxib",

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

  "fluids",
  "iv fluids",
  "saline",
  "ringer lactate",
];


for (const drug of commonMedications) {

  if (lower.includes(drug)) {
    medicationsFound.push(drug);
  }

}


if (medicationsFound.length > 0) {

  previousTreatment =
    medicationsFound
      .map(
        med =>
          med.charAt(0).toUpperCase() +
          med.slice(1)
      )
      .join(", ");

}

let illnessHistory = "";

const historyMatch = notes.match(
  /(?:history of|previous history|past history)\s*[:\-]?\s*(.+?)(?:\.|$)/i
);

if (historyMatch) {
  illnessHistory = historyMatch[1];
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
    patient: {
      species,
      breed,
      age,
      sex,
      weight,
    },

    history: {
  chiefComplaint,
  duration,
  appetite,
  activity,
  waterIntake,
  urination,
  defecation,
  illnessHistory,
  previousTreatment,
},

 
    
 clinicalSigns,

    physicalExam: {
  temperature,
  pulse,
  heartRate,

  respiration:
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
    : "",

  respiratoryRate,

  mucousMembranes,

  pulseQuality:
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

  : "",

  crt,

  hydration,

  lymphNodes:
    lower.includes("enlarged lymph node")
      ? "Enlarged"
      : "",

  bodyConditionScore:
    notes.match(/bcs[:\s]*(\d\/\d)/i)?.[1] ?? "",

  painScore:
    notes.match(/pain[:\s]*(\d+\/10)/i)?.[1] ?? "",

 findings: [
  ...clinicalSigns.general,
  ...clinicalSigns.gastrointestinal,
  ...clinicalSigns.respiratory,
  ...clinicalSigns.cardiovascular,
  ...clinicalSigns.urinary,
  ...clinicalSigns.neurological,
  ...clinicalSigns.musculoskeletal,
  ...clinicalSigns.dermatology,
  ...clinicalSigns.reproductive,
].join(", "),
  notes: "",

  abdominalFindings: [
  ...(lower.includes("abdominal pain") ? ["Abdominal pain"] : []),
  ...(lower.includes("abdominal distension") ? ["Abdominal distension"] : []),
  ...(lower.includes("tense abdomen") ? ["Tense abdomen"] : []),
],

  heartFindings: [
  ...(lower.includes("murmur") ? ["Heart murmur"] : []),
  ...(lower.includes("arrhythmia") ? ["Arrhythmia"] : []),
  ...(lower.includes("tachycardia") ? ["Tachycardia"] : []),
  ...(lower.includes("bradycardia") ? ["Bradycardia"] : []),
],

  lungFindings: [
  ...(lower.includes("crackles") ? ["Crackles"] : []),
  ...(lower.includes("wheez") ? ["Wheezes"] : []),
  ...(lower.includes("harsh lung") ? ["Harsh lung sounds"] : []),
],
},

    diagnostics,
  };
}