import { ClinicalSigns } from "./types";
export function extractClinicalSigns(notes: string) {
  const lower = notes.toLowerCase();

  const has = (...patterns: RegExp[]) =>
  patterns.some((pattern) => pattern.test(notes));

  const absent = (term: string) =>
  new RegExp(`\\b(no|without|denies)\\s+${term}\\b`, "i").test(notes);

  const add = (arr: string[], value: string) => {
  if (!arr.includes(value)) {
    arr.push(value);
  }
};


 const clinicalSigns: ClinicalSigns = {
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

 // General
if (lower.includes("high fever")) {
  add(clinicalSigns.general, "High fever");
} else if (
  has(/\bfever\b/i, /\bpyrexia\b/i) &&
  !absent("fever")
) {
  add(clinicalSigns.general, "Fever");
}

if (
  has(
    /\bjaundice\b/i,
    /\bicter(ic|us)?\b/i,
    /\byellow mucous membranes?\b/i,
    /\byellow mucus membranes?\b/i
  ) &&
  !absent("jaundice")
) {
  add(clinicalSigns.general, "Jaundice");
}

if (
  has(/\bletharg(y|ic)?\b/i) &&
  !absent("lethargy")
)
  add(clinicalSigns.general, "Lethargy");

if (
  /\bweak(ness)?\b/i.test(notes) &&
  !/\bweak pulse\b/i.test(notes)
)
  add(clinicalSigns.general, "Weakness");

if (
  (
    /\banorexia\b/i.test(notes) ||
    /\bnot eating\b/i.test(notes) ||
    /\boff feed\b/i.test(notes)
  ) &&
  !absent("anorexia")
){
  add(clinicalSigns.general, "Anorexia");
}

if (lower.includes("depression"))
  add(clinicalSigns.general, "Depression");

if (lower.includes("weight loss"))
  add(clinicalSigns.general, "Weight loss");

if (lower.includes("weight gain"))
  add(clinicalSigns.general, "Weight gain");

if (lower.includes("cachexia"))
  add(clinicalSigns.general, "Cachexia");

if (lower.includes("severe dehydration"))
  add(clinicalSigns.general, "Severe dehydration");

if (lower.includes("moderate dehydration"))
  add(clinicalSigns.general, "Moderate dehydration");

if (
  /\bdehydrat(ed|ion)?\b/i.test(notes) &&
  !lower.includes("moderate dehydration") &&
  !lower.includes("severe dehydration") &&
  !absent("dehydrated") &&
  !absent("dehydration")
)
  add(clinicalSigns.general, "Dehydration");

if (lower.includes("recumbent"))
  add(clinicalSigns.general, "Recumbency");

if (lower.includes("exercise intolerance"))
  add(clinicalSigns.general, "Exercise intolerance");

if (lower.includes("hyperthermia"))
  add(clinicalSigns.general, "Hyperthermia");

if (lower.includes("hypothermia"))
  add(clinicalSigns.general, "Hypothermia");
if (lower.includes("poor body condition"))
  add(clinicalSigns.general, "Poor body condition");

if (lower.includes("obese"))
  add(clinicalSigns.general, "Obesity");

if (lower.includes("emaciated"))
  add(clinicalSigns.general, "Emaciation");

if (
  /\bcollapse(d)?\b/i.test(notes) &&
  !absent("collapse")
)
  add(clinicalSigns.general, "Collapse");

if (
  /\bpain\b/i.test(notes) &&
  !/\babdominal pain\b/i.test(notes) &&
  !/\bjoint pain\b/i.test(notes) &&
  !/\bpain score\b/i.test(notes) &&
  !absent("pain")
)
  add(clinicalSigns.general, "Pain");

// Gastrointestinal
if (
  has(
    /\bvomiting\b/i,
    /\bvomited\b/i,
    /\bvomits\b/i,
    /\bvomit\b/i
  ) &&
  !absent("vomiting") &&
  !absent("vomit")
)
  add(clinicalSigns.gastrointestinal, "Vomiting");

if (
  has(/\bdiarrh(o|oe)a\b/i) &&
  !absent("diarrhea")
)
  add(clinicalSigns.gastrointestinal, "Diarrhea");

if (lower.includes("melena"))
  add(clinicalSigns.gastrointestinal, "Melena");

if (lower.includes("hematemesis"))
  add(clinicalSigns.gastrointestinal, "Hematemesis");

if (lower.includes("regurg"))
  add(clinicalSigns.gastrointestinal, "Regurgitation");

if (lower.includes("constipation"))
  add(clinicalSigns.gastrointestinal, "Constipation");

if (lower.includes("hematochezia"))
  add(clinicalSigns.gastrointestinal, "Hematochezia");

if (lower.includes("abdominal pain"))
  add(clinicalSigns.gastrointestinal, "Abdominal pain");

if (lower.includes("abdominal distension"))
  add(clinicalSigns.gastrointestinal, "Abdominal distension");

if (lower.includes("tenesmus"))
  add(clinicalSigns.gastrointestinal, "Tenesmus");

if (lower.includes("drooling"))
  add(clinicalSigns.gastrointestinal, "Drooling");

if (lower.includes("hypersalivation"))
  add(clinicalSigns.gastrointestinal, "Hypersalivation");

if (lower.includes("bloat"))
  add(clinicalSigns.gastrointestinal, "Bloat");
if (lower.includes("dysphagia"))
  add(clinicalSigns.gastrointestinal, "Dysphagia");

if (lower.includes("ascites"))
  add(clinicalSigns.gastrointestinal, "Ascites");


// Respiratory
if (
  /\bcough(ing|ed|s)?\b/i.test(notes) &&
  !absent("cough")
)
  add(clinicalSigns.respiratory, "Cough");

if (lower.includes("dyspnea"))
  add(clinicalSigns.respiratory, "Dyspnea");

if (lower.includes("tachypnea"))
  add(clinicalSigns.respiratory, "Tachypnea");

if (lower.includes("nasal discharge"))
  add(clinicalSigns.respiratory, "Nasal discharge");

if (lower.includes("sneezing"))
  add(clinicalSigns.respiratory, "Sneezing");

if (lower.includes("stertor"))
  add(clinicalSigns.respiratory, "Stertor");

if (lower.includes("stridor"))
  add(clinicalSigns.respiratory, "Stridor");

if (lower.includes("wheez"))
  add(clinicalSigns.respiratory, "Wheezing");

if (lower.includes("crackles"))
  add(clinicalSigns.respiratory, "Crackles");

if (lower.includes("respiratory distress"))
  add(clinicalSigns.respiratory, "Respiratory distress");

if (lower.includes("open mouth breathing"))
  add(clinicalSigns.respiratory, "Open-mouth breathing");

if (lower.includes("labored breathing"))
  add(clinicalSigns.respiratory, "Labored breathing");

if (lower.includes("orthopnea"))
  add(clinicalSigns.respiratory, "Orthopnea");

if (lower.includes("tachypnoea"))
  add(clinicalSigns.respiratory, "Tachypnea");



// Cardiovascular
if (lower.includes("tachycardia"))
  add(clinicalSigns.cardiovascular, "Tachycardia");

if (lower.includes("bradycardia"))
  add(clinicalSigns.cardiovascular, "Bradycardia");

if (
  /\bmurmur(s)?\b/i.test(notes) &&
  !absent("murmur")
)
  add(clinicalSigns.cardiovascular, "Heart murmur");

if (lower.includes("arrhythmia"))
  add(clinicalSigns.cardiovascular, "Arrhythmia");

if (lower.includes("syncope"))
  add(clinicalSigns.cardiovascular, "Syncope");

if (
  /\bcollapse(d)?\b/i.test(notes) &&
  !absent("collapse")
)
  add(clinicalSigns.cardiovascular, "Collapse");

if (
  /\bcyanosis\b/i.test(notes) &&
  !absent("cyanosis")
)
  add(clinicalSigns.cardiovascular, "Cyanosis");

if (
  /\bedema\b/i.test(notes) &&
  !absent("edema")
)
  add(clinicalSigns.cardiovascular, "Edema");

if (lower.includes("ascites"))
  add(clinicalSigns.cardiovascular, "Ascites");

if (/\bweak pulse\b/i.test(notes))
  add(clinicalSigns.cardiovascular, "Weak pulse");

if (/\bbounding pulse\b/i.test(notes))
  add(clinicalSigns.cardiovascular, "Bounding pulse");
if (lower.includes("pale mucous membrane"))
  add(clinicalSigns.cardiovascular, "Pale mucous membranes");

// Urinary
if (lower.includes("hematuria"))
  add(clinicalSigns.urinary, "Hematuria");

if (lower.includes("polyuria"))
  add(clinicalSigns.urinary, "Polyuria");

if (lower.includes("oliguria"))
  add(clinicalSigns.urinary, "Oliguria");

if (lower.includes("anuria"))
  add(clinicalSigns.urinary, "Anuria");

if (lower.includes("dysuria"))
  add(clinicalSigns.urinary, "Dysuria");

if (lower.includes("stranguria"))
  add(clinicalSigns.urinary, "Stranguria");

if (lower.includes("pollakiuria"))
  add(clinicalSigns.urinary, "Pollakiuria");

if (lower.includes("incontinence"))
  add(clinicalSigns.urinary, "Urinary incontinence");

if (lower.includes("urinary retention"))
  add(clinicalSigns.urinary, "Urinary retention");

if (lower.includes("polydipsia"))
  add(clinicalSigns.urinary, "Polydipsia");


// Neurological
if (
  /\bseizure(s)?\b/i.test(notes) &&
  !absent("seizure")
)
  add(clinicalSigns.neurological, "Seizures");

if (
  /\bataxia\b/i.test(notes) &&
  !absent("ataxia")
)
  add(clinicalSigns.neurological, "Ataxia");

if (
  /\bhead tilt\b/i.test(notes) &&
  !absent("head tilt")
)
  add(clinicalSigns.neurological, "Head tilt");

if (
  /\btremor(s)?\b/i.test(notes) &&
  !absent("tremor")
)
  add(clinicalSigns.neurological, "Tremors");

if (lower.includes("paresis"))
  add(clinicalSigns.neurological, "Paresis");

if (lower.includes("paralysis"))
  add(clinicalSigns.neurological, "Paralysis");

if (lower.includes("circling"))
  add(clinicalSigns.neurological, "Circling");

if (
  /\bblind(ness)?\b/i.test(notes) &&
  !absent("blind")
)
  add(clinicalSigns.neurological, "Blindness");

if (lower.includes("nystagmus"))
  add(clinicalSigns.neurological, "Nystagmus");

if (lower.includes("stupor"))
  add(clinicalSigns.neurological, "Stupor");

if (lower.includes("coma"))
  add(clinicalSigns.neurological, "Coma");

if (lower.includes("convulsion"))
  add(clinicalSigns.neurological, "Convulsions");

if (lower.includes("disorientation"))
  add(clinicalSigns.neurological, "Disorientation");

if (lower.includes("mentation"))
  add(clinicalSigns.neurological, "Altered mentation");


// Dermatology
if (lower.includes("pruritus"))
  add(clinicalSigns.dermatology, "Pruritus");

if (lower.includes("alopecia"))
  add(clinicalSigns.dermatology, "Alopecia");

if (lower.includes("skin lesion"))
  add(clinicalSigns.dermatology, "Skin lesions");

if (lower.includes("erythema"))
  add(clinicalSigns.dermatology, "Erythema");

if (lower.includes("scaling"))
  add(clinicalSigns.dermatology, "Scaling");

if (lower.includes("crusting"))
  add(clinicalSigns.dermatology, "Crusting");

if (lower.includes("ulcer"))
  add(clinicalSigns.dermatology, "Ulceration");

if (lower.includes("nodule"))
  add(clinicalSigns.dermatology, "Nodules");

if (lower.includes("hyperpigmentation"))
  add(clinicalSigns.dermatology, "Hyperpigmentation");

if (lower.includes("skin infection"))
  add(clinicalSigns.dermatology, "Skin infection");

if (lower.includes("abscess"))
  add(clinicalSigns.dermatology, "Abscess");

if (lower.includes("wound"))
  add(clinicalSigns.dermatology, "Wounds");

if (
  /\b(mass|masses|lump|tumou?r|growth)\b/i.test(notes) &&
  !absent("mass") &&
  !absent("lump") &&
  !absent("tumor") &&
  !absent("tumour") &&
  !absent("growth")
)
  add(clinicalSigns.dermatology, "Skin mass");

if (lower.includes("rash"))
  add(clinicalSigns.dermatology, "Rash");

if (lower.includes("dermatitis"))
  add(clinicalSigns.dermatology, "Dermatitis");

// Musculoskeletal
if (
  /\blameness\b/i.test(notes) &&
  !absent("lameness")
)
  add(clinicalSigns.musculoskeletal, "Lameness");

if (lower.includes("joint pain"))
  add(clinicalSigns.musculoskeletal, "Joint pain");

if (lower.includes("joint swelling"))
  add(clinicalSigns.musculoskeletal, "Joint swelling");

if (
  /\bstiff(ness)?\b/i.test(notes) &&
  !absent("stiff")
)
  add(clinicalSigns.musculoskeletal, "Stiffness");

if (
  /\bfracture(s)?\b/i.test(notes) &&
  !absent("fracture")
)
  add(clinicalSigns.musculoskeletal, "Fracture");

if (lower.includes("muscle atrophy"))
  add(clinicalSigns.musculoskeletal, "Muscle atrophy");

if (
  /\bluxation\b/i.test(notes) &&
  !absent("luxation")
)
  add(clinicalSigns.musculoskeletal, "Luxation");

if (lower.includes("swollen joint"))
  add(clinicalSigns.musculoskeletal, "Joint swelling");

// Reproductive
if (
  /\babortion\b/i.test(notes) &&
  !absent("abortion")
)
  add(clinicalSigns.reproductive, "Abortion");

if (lower.includes("dystocia"))
  add(clinicalSigns.reproductive, "Dystocia");

if (lower.includes("retained placenta"))
  add(clinicalSigns.reproductive, "Retained placenta");

if (
  /\bmastitis\b/i.test(notes) &&
  !absent("mastitis")
)
  add(clinicalSigns.reproductive, "Mastitis");

if (lower.includes("vaginal discharge"))
  add(clinicalSigns.reproductive, "Vaginal discharge");

if (lower.includes("infertility"))
  add(clinicalSigns.reproductive, "Infertility");
if (lower.includes("orchitis"))
  add(clinicalSigns.reproductive, "Orchitis");

if (
  /\bpyometra\b/i.test(notes) &&
  !absent("pyometra")
)
  add(clinicalSigns.reproductive, "Pyometra");

if (lower.includes("testicular swelling"))
  add(clinicalSigns.reproductive, "Testicular swelling");


return clinicalSigns;
}