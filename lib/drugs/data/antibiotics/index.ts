import amoxicillinClavulanate from "./amoxicillin-clavulanate";
import ampicillin from "./ampicillin";
import cefazolin from "./cefazolin";
import cephalexin from "./cephalexin";
import doxycycline from "./doxycycline";
import enrofloxacin from "./enrofloxacin";
import penicillinG from "./penicillin-g";
import cefpodoxime from "./cefpodoxime";
import ceftriaxone from "./ceftriaxone";
import metronidazole from "./metronidazole";


import { Drug } from "../../types";

const antibiotics: Drug[] = [
  ...amoxicillinClavulanate,
  ...ampicillin,
  ...cefazolin,
  ...cephalexin,
  ...doxycycline,
  ...enrofloxacin,
  ...penicillinG,
  ...cefpodoxime,
  ...ceftriaxone,
  ... metronidazole,
];

export default antibiotics;