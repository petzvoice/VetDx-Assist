import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineAorticThromboembolism: DiseaseCard = {
  id: "canine-aortic-thromboembolism-dog",

  title: "Canine Aortic Thromboembolism",

  description:
    "Acute arterial thromboembolism causing partial or complete obstruction of the distal aorta or major peripheral arteries, resulting in sudden limb ischemia and severe pain.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Aortic Saddle Thrombus",
    "Arterial Thromboembolism",
    "ATE",
    "Peripheral Arterial Thrombosis",
  ],

  overview:
    "Aortic thromboembolism (ATE) is an uncommon but life-threatening vascular emergency in dogs. It is usually secondary to underlying diseases such as dilated cardiomyopathy, infective endocarditis, protein-losing nephropathy, hyperadrenocorticism, immune-mediated hemolytic anemia, neoplasia, or severe systemic inflammation. Occlusion of the distal aorta or major arteries results in acute ischemia, severe pain, paresis or paralysis, loss of pulses, and tissue necrosis if reperfusion is delayed.",

  clinicalProblems: [

    "Acute hindlimb paralysis or paresis",
    "Severe limb pain",
    "Limb ischemia",
    "Absent peripheral pulses",
    "Cold extremities",
    "Muscle necrosis",
    "Hyperkalemia after reperfusion",
    "Underlying thromboembolic disease"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, limb perfusion, neurological status, pain severity, and underlying disease."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm arterial obstruction with vascular imaging and investigate the underlying cause."
    },

    {
      id: "stabilization",
      step: 3,
      title: "Emergency Stabilization",
      description:
        "Provide analgesia, anticoagulation, supportive care, and address life-threatening complications."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor reperfusion injury, electrolyte abnormalities, renal function, and tissue viability."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Treat the underlying disease and institute long-term antithrombotic therapy when indicated."
    }

  ],

  diagnostics: [

    {
      id: "doppler",
      name: "Vascular Doppler Ultrasound",
      priority: "Essential",
      reason:
        "Confirms absent arterial blood flow."
    },

    {
      id: "echocardiography",
      name: "Echocardiography",
      priority: "Essential",
      reason:
        "Evaluates underlying cardiac disease or intracardiac thrombi."
    },

    {
      id: "coagulation",
      name: "Coagulation Profile",
      priority: "Essential",
      reason:
        "Assesses coagulation abnormalities before anticoagulant therapy."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Essential",
      reason:
        "Evaluates systemic disease, renal function, CK elevation, and electrolyte abnormalities."
    },

    {
      id: "ct-angiography",
      name: "CT Angiography",
      priority: "Recommended",
      reason:
        "Defines thrombus location and extent when intervention is considered."
    }

  ],

  drugCategories: [

    {
      category: "Anticoagulant",
      indication: "Prevent thrombus progression",
      reason: "Limits further clot formation."
    },

    {
      category: "Antiplatelet",
      indication: "Long-term prevention",
      reason: "Reduces recurrent thromboembolic events."
    },

    {
      category: "Opioid",
      indication: "Severe pain",
      reason: "Provides effective analgesia."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "heparin",
      priority: "First Line",
      category: "Anticoagulant",
    },

    {
      drugId: "clopidogrel",
      priority: "Long Term",
      category: "Antiplatelet",
    },

    {
      drugId: "methadone",
      priority: "Supportive",
      category: "Opioid",
    },

  ],

  stabilization: [

    "Provide aggressive opioid analgesia.",
    "Begin anticoagulant therapy unless contraindicated.",
    "Correct dehydration and maintain tissue perfusion.",
    "Monitor potassium and renal function during reperfusion.",
    "Treat the underlying disease responsible for thrombosis."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Sudden onset hindlimb paralysis", weight: 40 },

      { finding: "Known cardiac disease", weight: 30 },

      { finding: "Hypercoagulable disorder", weight: 35 },

    ],

    clinicalSigns: [

      { finding: "Cold hindlimbs", weight: 45 },

      { finding: "Absent femoral pulse", weight: 50 },

      { finding: "Severe limb pain", weight: 40 },

      { finding: "Pale paw pads", weight: 35 },

    ],

    biochemistry: [

      { finding: "Elevated CK", weight: 25 },

      { finding: "Hyperkalemia", weight: 20 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Absent arterial flow on Doppler", weight: 50 },

      { finding: "Visible arterial thrombus", weight: 50 },

      { finding: "Underlying cardiac disease", weight: 30 },

    ],

    against: [

      { finding: "Normal arterial perfusion", weight: -50 },

      { finding: "Normal femoral pulses", weight: -45 },

      { finding: "Alternative neurologic diagnosis confirmed", weight: -35 },

    ],

  },

  monitoring: [

    {
      id:"perfusion",
      parameter:
        "Peripheral pulses and limb temperature",
      frequency:
        "Every 2–4 hours initially",
      reason:
        "Assesses restoration of arterial perfusion."
    },

    {
      id:"electrolytes",
      parameter:
        "Electrolytes and renal values",
      frequency:
        "Daily during hospitalization",
      reason:
        "Detects reperfusion injury and acute kidney injury."
    },

    {
      id:"pain",
      parameter:
        "Pain assessment",
      frequency:
        "Every 4–6 hours",
      reason:
        "Ensures adequate analgesia."
    }

  ],

  precautions: [

    {
      id:"reperfusion",
      title:
        "Monitor Reperfusion Injury",
      description:
        "Reperfusion may result in hyperkalemia, metabolic acidosis, and acute kidney injury."
    },

    {
      id:"underlying",
      title:
        "Investigate Underlying Cause",
      description:
        "Most canine ATE cases are secondary to systemic disease requiring long-term management."
    }

  ],

  prognosis:
    "Prognosis is guarded and depends on thrombus location, duration of ischemia, successful reperfusion, and treatment of the underlying disease. Delayed treatment and severe muscle necrosis worsen outcome.",

  strengtheningEvidence: [

    "Absent femoral pulses",

    "Cold painful hindlimbs",

    "Sudden paralysis",

    "Arterial thrombus on imaging",

    "Absent Doppler blood flow",

    "Underlying cardiac disease"

  ],

  weakeningEvidence: [

    "Normal peripheral pulses",

    "Normal arterial Doppler",

    "Warm limbs",

    "Alternative neurologic diagnosis",

    "Normal vascular imaging"

  ],

  classicFindings: [

    "Acute painful hindlimb paralysis",

    "Cold limbs",

    "Absent femoral pulses",

    "Pale paw pads",

    "Arterial thrombus",

    "Underlying cardiac disease"

  ],

  ruleOutFindings: [

    "Intervertebral disc disease",

    "Fibrocartilaginous embolism",

    "Lumbosacral disease",

    "Peripheral nerve injury",

    "Pelvic fracture"

  ],

};