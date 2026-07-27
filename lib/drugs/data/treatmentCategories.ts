export const TREATMENT_CATEGORIES = [
  "Antibiotic",
  "Antiemetic",
  "NSAID",
  "Opioid",
  "Corticosteroid",
  "Fluid Therapy",
  "Gastrointestinal",
  "Cardiovascular",
  "Antiparasitic",
  "Emergency Drug",
  "Hepatoprotectant",
  "Nutritional Support",
] as const;

export type TreatmentCategory =
  typeof TREATMENT_CATEGORIES[number];