import { Drug } from "../../types";

import propofol from "./propofol";
import thiopental from "./thiopental";


const anesthetics: Drug[] = [
  ...propofol,
  ...thiopental,
];

export default anesthetics;