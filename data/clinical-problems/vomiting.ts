import { ClinicalProblemCard } from "@/lib/knowledge-engine/types";
import { Species } from "@/lib/drugs/types";

export const vomiting: ClinicalProblemCard = {
  id: "vomiting",

  title: "Vomiting",

  species: [
    Species.DOG,
    Species.CAT,
  ],

  assessment: "",

  diagnostics: [],

  stabilization: [],

  monitoring: [],

  drugCategories: [],

  
};