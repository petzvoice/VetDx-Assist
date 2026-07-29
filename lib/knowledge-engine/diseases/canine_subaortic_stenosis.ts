import { DiseaseCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const canineSubaorticStenosis: DiseaseCard = {
  id: "canine-subaortic-stenosis-dog",

  title: "Canine Subaortic Stenosis",

  description:
    "A congenital left ventricular outflow tract obstruction causing pressure overload, concentric left ventricular hypertrophy, myocardial ischemia, ventricular arrhythmias, and sudden cardiac death.",

  species: [
    Species.DOG,
  ],

  synonyms: [
    "Subaortic Stenosis",
    "SAS",
    "Left Ventricular Outflow Tract Obstruction",
  ],

  overview:
    "Subaortic stenosis (SAS) is one of the most common congenital heart diseases in dogs. A fibrous or fibromuscular ridge develops below the aortic valve, creating obstruction to left ventricular outflow. The increased afterload results in concentric left ventricular hypertrophy, myocardial ischemia, ventricular arrhythmias, syncope, congestive heart failure, and sudden death in severe cases. Large breed dogs including Golden Retrievers, Newfoundlands, Rottweilers, German Shepherds, and Boxers are commonly affected.",

  clinicalProblems: [

    "Left ventricular outflow obstruction",
    "Left ventricular hypertrophy",
    "Exercise intolerance",
    "Syncope",
    "Ventricular arrhythmias",
    "Congestive heart failure",
    "Sudden cardiac death",
    "Reduced cardiac output"

  ],

  workflow: [

    {
      id: "initial-assessment",
      step: 1,
      title: "Initial Assessment",
      description:
        "Assess cardiovascular stability, murmur intensity, exercise intolerance, syncope, and evidence of heart failure."
    },

    {
      id: "diagnostic-evaluation",
      step: 2,
      title: "Diagnostic Evaluation",
      description:
        "Confirm subaortic stenosis using echocardiography and Doppler pressure gradients while assessing severity."
    },

    {
      id: "medical-management",
      step: 3,
      title: "Medical Management",
      description:
        "Reduce myocardial oxygen demand, control ventricular arrhythmias, and manage congestive heart failure when present."
    },

    {
      id: "monitor-complications",
      step: 4,
      title: "Monitor Complications",
      description:
        "Monitor progression of obstruction, ventricular arrhythmias, and cardiac remodeling."
    },

    {
      id: "long-term-management",
      step: 5,
      title: "Long-Term Management",
      description:
        "Provide lifelong monitoring with serial echocardiography and exercise restriction in severely affected dogs."
    }

  ],

  diagnostics: [

    {
      id: "echocardiography",
      name: "Echocardiography with Doppler",
      priority: "Essential",
      reason:
        "Confirms subaortic stenosis and quantifies left ventricular outflow tract pressure gradient."
    },

    {
      id: "ecg",
      name: "Electrocardiography (ECG)",
      priority: "Essential",
      reason:
        "Detects ventricular arrhythmias and evidence of left ventricular enlargement."
    },

    {
      id: "thoracic-radiography",
      name: "Thoracic Radiography",
      priority: "Recommended",
      reason:
        "Evaluates cardiac enlargement and pulmonary edema if heart failure develops."
    },

    {
      id: "holter",
      name: "24-Hour Holter Monitoring",
      priority: "Recommended",
      reason:
        "Detects intermittent ventricular arrhythmias associated with sudden death."
    },

    {
      id: "cbc-chemistry",
      name: "CBC and Serum Biochemistry",
      priority: "Recommended",
      reason:
        "Evaluates overall health and suitability for long-term treatment."
    }

  ],

  drugCategories: [

    {
      category: "Beta Blocker",
      indication: "Moderate to severe SAS",
      reason: "Reduces myocardial oxygen demand and ventricular arrhythmias."
    },

    {
      category: "Loop Diuretic",
      indication: "Congestive heart failure",
      reason: "Controls pulmonary edema."
    },

    {
      category: "ACE Inhibitor",
      indication: "Congestive heart failure",
      reason: "Reduces cardiac workload."
    },

    {
      category: "Antiarrhythmic",
      indication: "Clinically significant ventricular arrhythmias",
      reason: "Reduces risk of malignant ventricular arrhythmias."
    }

  ],

  recommendedDrugs: [

    {
      drugId: "atenolol",
      priority: "First Line",
      category: "Beta Blocker",
    },

    {
      drugId: "furosemide",
      priority: "Supportive",
      category: "Loop Diuretic",
    },

    {
      drugId: "enalapril",
      priority: "Adjunctive",
      category: "ACE Inhibitor",
    },

    {
      drugId: "sotalol",
      priority: "Adjunctive",
      category: "Antiarrhythmic",
    },

  ],

  stabilization: [

    "Provide oxygen supplementation if respiratory distress is present.",
    "Treat congestive heart failure when present.",
    "Control ventricular arrhythmias.",
    "Restrict strenuous exercise.",
    "Monitor ECG in unstable patients."

  ],

  clinicalEvidence: {

    history: [

      { finding: "Young large-breed dog", weight: 30 },

      { finding: "Exercise intolerance", weight: 30 },

      { finding: "Syncope", weight: 35 },

    ],

    clinicalSigns: [

      { finding: "Left basilar systolic murmur", weight: 50 },

      { finding: "Weak femoral pulses", weight: 20 },

      { finding: "Ventricular arrhythmia", weight: 30 },

      { finding: "Signs of left-sided heart failure", weight: 25 },

    ],

    biochemistry: [

      { finding: "Elevated cardiac troponin", weight: 20 },

    ],

    urinalysis: [

    ],

    supports: [

      { finding: "Subvalvular fibrous ridge on echocardiography", weight: 50 },

      { finding: "Elevated Doppler LVOT pressure gradient", weight: 50 },

      { finding: "Concentric left ventricular hypertrophy", weight: 45 },

      { finding: "Post-stenotic aortic dilation", weight: 35 },

    ],

    against: [

      { finding: "Normal left ventricular outflow tract", weight: -50 },

      { finding: "No Doppler pressure gradient", weight: -45 },

      { finding: "Alternative congenital heart disease confirmed", weight: -30 },

    ],

  },

  monitoring: [

    {
      id:"echo",
      parameter:
        "Echocardiography",
      frequency:
        "Every 6–12 months",
      reason:
        "Monitors progression of obstruction and ventricular remodeling."
    },

    {
      id:"holter",
      parameter:
        "Holter monitoring",
      frequency:
        "Periodically in moderate to severe disease",
      reason:
        "Detects ventricular arrhythmias associated with sudden death."
    },

    {
      id:"clinical",
      parameter:
        "Exercise tolerance and syncope",
      frequency:
        "At every recheck",
      reason:
        "Assesses disease progression and treatment response."
    }

  ],

  precautions: [

    {
      id:"exercise",
      title:
        "Restrict Strenuous Exercise",
      description:
        "Dogs with moderate to severe SAS have an increased risk of ventricular arrhythmias and sudden cardiac death during vigorous exercise."
    },

    {
      id:"breeding",
      title:
        "Do Not Breed Affected Dogs",
      description:
        "Subaortic stenosis has a hereditary basis in several breeds and affected animals should not be used for breeding."
    }

  ],

  prognosis:
    "Dogs with mild SAS generally have an excellent long-term prognosis. Moderate disease carries a fair prognosis with monitoring, whereas severe SAS has a guarded prognosis because of progressive left ventricular hypertrophy, ventricular arrhythmias, congestive heart failure, and sudden cardiac death.",

  strengtheningEvidence: [

    "Left basilar systolic murmur",

    "Subvalvular fibrous ridge",

    "Elevated LVOT Doppler gradient",

    "Concentric left ventricular hypertrophy",

    "Exercise intolerance",

    "Young large-breed dog"

  ],

  weakeningEvidence: [

    "Normal echocardiography",

    "No LVOT obstruction",

    "Normal Doppler gradient",

    "Alternative congenital heart disease",

    "No systolic murmur"

  ],

  classicFindings: [

    "Young large-breed dog",

    "Left basilar systolic murmur",

    "Concentric left ventricular hypertrophy",

    "Elevated LVOT pressure gradient",

    "Exercise intolerance",

    "Syncope"

  ],

  ruleOutFindings: [

    "Pulmonic stenosis",

    "Patent ductus arteriosus",

    "Dilated cardiomyopathy",

    "Aortic insufficiency",

    "Ventricular septal defect"

  ],

};