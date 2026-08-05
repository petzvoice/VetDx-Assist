export interface DiseaseMetadata {
  category: string;
  system: string;
  bodySystem: string;
}


export const diseaseMetadata: Record<string, DiseaseMetadata> = {

  "canine-dilated-cardiomyopathy-dog": {

    category: "Cardiology",

    system: "Cardiovascular",

    bodySystem: "Heart",

  },

};