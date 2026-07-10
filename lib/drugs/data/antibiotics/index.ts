import amoxicillinClavulanate from "./amoxicillin-clavulanate";
import ampicillin from "./ampicillin";
import cefazolin from "./cefazolin";

import { Drug } from "../../types";

const antibiotics: Drug[] = [
  ...amoxicillinClavulanate,
  ...ampicillin,
  ...cefazolin,
];

export default antibiotics;