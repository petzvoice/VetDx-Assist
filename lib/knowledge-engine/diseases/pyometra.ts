import { DiseaseCard } from "../types";
import { Species } from "@/lib/drugs/types";

export const pyometra: DiseaseCard = {
  id: "pyometra-dog",

  title: "Pyometra",

  description:
    "A life-threatening bacterial infection of the uterus occurring during diestrus in intact female dogs.",

   species: [Species.DOG],

  synonyms: [
    "Open Pyometra",
    "Closed Pyometra",
    "Uterine Infection",
  ],

  overview:
    "Pyometra is a severe bacterial infection of the uterus that develops under progesterone influence following estrus. It commonly affects middle-aged to older intact female dogs and can rapidly progress to septicemia, endotoxemia, shock, renal dysfunction, and death if untreated. Surgical ovariohysterectomy remains the treatment of choice in most patients.",

  clinicalProblems: [
    "Purulent vulvar discharge",
    "Depression",
    "Lethargy",
    "Anorexia",
    "Vomiting",
    "Polyuria",
    "Polydipsia",
    "Abdominal distension",
    "Fever",
    "Septic shock",
  ],

  workflow: [
    {
      id: "triage",
      step: 1,
      title: "Initial Stabilization",
      description:
        "Assess cardiovascular stability, hydration, perfusion, and evidence of septic shock."
    },
    {
      id: "diagnostics",
      step: 2,
      title: "Diagnostic Confirmation",
      description:
        "Perform laboratory evaluation and abdominal imaging to confirm uterine enlargement."
    },
    {
      id: "stabilization",
      step: 3,
      title: "Medical Stabilization",
      description:
        "Initiate aggressive fluid therapy, broad-spectrum antibiotics, analgesia, and correct electrolyte abnormalities."
    },
    {
      id: "definitive",
      step: 4,
      title: "Definitive Treatment",
      description:
        "Emergency ovariohysterectomy is recommended for most patients."
    },
    {
      id: "monitoring",
      step: 5,
      title: "Post-operative Monitoring",
      description:
        "Monitor cardiovascular status, renal function, pain, and septic complications."
    },
  ],

  diagnostics: [
    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      priority: "Essential",
      reason:
        "Evaluates leukocytosis, neutrophilia, left shift, anemia, and inflammatory response."
    },
    {
      id: "chemistry",
      name: "Serum Biochemistry",
      priority: "Essential",
      reason:
        "Assesses renal function, liver enzymes, electrolytes, and systemic involvement."
    },
    {
      id: "urinalysis",
      name: "Urinalysis",
      priority: "Recommended",
      reason:
        "Evaluates renal concentrating ability and concurrent urinary tract infection."
    },
    {
      id: "radiography",
      name: "Abdominal Radiographs",
      priority: "Recommended",
      reason:
        "Detects enlarged fluid-filled uterus."
    },
    {
      id: "ultrasound",
      name: "Abdominal Ultrasound",
      priority: "Essential",
      reason:
        "Confirms uterine enlargement and differentiates pyometra from pregnancy or mucometra."
    },
    {
      id: "culture",
      name: "Uterine Culture and Sensitivity",
      priority: "Optional",
      reason:
        "Guides antibiotic therapy."
    },
  ],

  drugCategories: [
    {
      category: "Fluid Therapy",
      indication: "Shock and dehydration",
      reason: "Restore circulating volume."
    },
    {
      category: "Antibiotic",
      indication: "Septic uterine infection",
      reason: "Control bacterial infection."
    },
    {
      category: "Analgesic",
      indication: "Pain",
      reason: "Provide perioperative analgesia."
    },
    {
      category: "Antiemetic",
      indication: "Vomiting",
      reason: "Improve patient comfort."
    },
  ],

  recommendedDrugs: [
    {
      drugId: "ampicillin",
      priority: "First Line",
      category: "Antibiotic",
    },
    {
      drugId: "enrofloxacin",
      priority: "Adjunctive",
      category: "Antibiotic",
    },
    {
      drugId: "methadone",
      priority: "First Line",
      category: "Analgesic",
    },
    {
      drugId: "maropitant",
      priority: "Adjunctive",
      category: "Antiemetic",
    },
  ],
    stabilization: [
    "Treat as a septic emergency.",
    "Establish intravenous access immediately.",
    "Begin aggressive crystalloid fluid therapy.",
    "Correct dehydration and electrolyte abnormalities.",
    "Start broad-spectrum intravenous antibiotics before surgery.",
    "Provide opioid analgesia.",
    "Control vomiting if present.",
    "Prepare patient for emergency ovariohysterectomy once stabilized.",
  ],

  monitoring: [
    {
      id: "vitals",
      parameter: "Heart rate, respiratory rate, temperature, blood pressure",
      frequency: "Continuous until stable",
      reason: "Early detection of septic shock."
    },
    {
      id: "renal",
      parameter: "Urine output",
      frequency: "Hourly in hospitalized patients",
      reason: "Assess renal perfusion."
    },
    {
      id: "bloodwork",
      parameter: "CBC and Serum Chemistry",
      frequency: "Every 24 hours",
      reason: "Monitor inflammatory response and organ function."
    },
    {
      id: "electrolytes",
      parameter: "Electrolytes",
      frequency: "Daily",
      reason: "Monitor fluid therapy."
    },
    {
      id: "pain",
      parameter: "Pain assessment",
      frequency: "Every 4–6 hours",
      reason: "Guide analgesic therapy."
    },
  ],

  precautions: [
    {
      id: "uterine-rupture",
      title: "Risk of uterine rupture",
      description:
        "Closed pyometra may rupture causing septic peritonitis."
    },
    {
      id: "anaesthesia",
      title: "High anaesthetic risk",
      description:
        "Stabilize cardiovascular status before surgery whenever possible."
    },
    {
      id: "renal",
      title: "Renal injury",
      description:
        "Endotoxemia frequently causes acute kidney injury."
    },
  ],

  prognosis:
    "Good to excellent with early surgical treatment and stabilization. Prognosis becomes guarded to poor in dogs with septic shock, disseminated intravascular coagulation, uterine rupture, or multi-organ dysfunction.",


 clinicalEvidence: {
  history: [
    {
      finding: "Older intact female dog",
      weight: 10,
    },
    {
      finding: "Recent estrus within the previous 1–3 months",
      weight: 10,
    },
    {
      finding: "Polyuria and polydipsia",
      weight: 7,
    },
    {
      finding: "Progressive lethargy",
      weight: 7,
    },
    {
      finding: "Reduced appetite or anorexia",
      weight: 7,
    },
  ],

  clinicalSigns: [
    {
      finding: "Purulent vulvar discharge (open pyometra)",
      weight: 10,
    },
    {
      finding: "Fever",
      weight: 8,
    },
    {
      finding: "Vomiting",
      weight: 7,
    },
    {
      finding: "Depression",
      weight: 8,
    },
    {
      finding: "Abdominal enlargement",
      weight: 8,
    },
    {
      finding: "Dehydration",
      weight: 7,
    },
    {
      finding: "Septic shock (advanced cases)",
      weight: 10,
    },
  ],

  
  biochemistry: [
    {
      finding: "Azotemia",
      weight: 8,
    },
    {
      finding: "Elevated ALP",
      weight: 7,
    },
    {
      finding: "Hyperglobulinemia",
      weight: 7,
    },
    {
      finding: "Hypoalbuminemia",
      weight: 6,
    },
  ],

  imaging: [
    {
      finding: "Fluid-filled enlarged uterus on abdominal ultrasound",
      weight: 10,
    },
    {
      finding: "Tubular soft tissue opacity in caudal abdomen on radiographs",
      weight: 8,
    },
  ],

  supports: [
    {
      finding: "Ultrasound confirmation of enlarged fluid-filled uterus",
      weight: 10,
    },
    {
      finding: "Open cervix with purulent vaginal discharge",
      weight: 10,
    },
    {
      finding: "Recent estrus history",
      weight: 9,
    },
    {
      finding: "Marked inflammatory leukogram",
      weight: 8,
    },
  ],

  against: [
    {
      finding: "Previously ovariohysterectomized (spayed) female",
      weight: 10,
    },
    {
      finding: "Normal uterus on ultrasound",
      weight: 10,
    },
    {
      finding: "No history of estrous cycles (unless stump pyometra suspected)",
      weight: 8,
    },
    {
      finding: "Alternative confirmed diagnosis explaining clinical signs",
      weight: 9,
    },
  ],
},



strengtheningEvidence: [
  "Recent estrus within previous 1–3 months",
  "Purulent vulvar discharge",
  "Fluid-filled enlarged uterus on ultrasound",
  "Marked neutrophilic leukocytosis",
  "Azotemia",
  "Hyperglobulinemia",
],

weakeningEvidence: [
  "Spayed female",
  "Normal uterus on ultrasound",
  "No inflammatory leukogram",
  "No recent estrous cycle",
  "Alternative confirmed diagnosis",
],

classicFindings: [
  "Older intact female",
  "Recent estrus",
  "Purulent vulvar discharge",
  "Polyuria and polydipsia",
  "Vomiting",
  "Depression",
  "Enlarged fluid-filled uterus",
],

ruleOutFindings: [
  "Pregnancy",
  "Mucometra",
  "Hydrometra",
  "Uterine neoplasia",
  "Urinary tract infection without uterine enlargement",
],
};