import { Drug } from "../../types";

import propofol from "./propofol";
import thiopental from "./thiopental";
import ketamine from "./ketamine";
import tiletamine_zolazepam from "./tiletamine_zolazepam";
import isoflurane from "./isoflurane";
import sevoflurane from "./sevoflurane";
import acepromazine from "./acepromazine";
import xylazine from "./xylazine";
import yohimbine from "./yohimbine";





const anesthetics: Drug[] = [
  ...propofol,
  ...thiopental,
  ...ketamine,
  ...tiletamine_zolazepam,
  ...isoflurane,
  ...sevoflurane,
  ...acepromazine,
  ...xylazine,
  ...yohimbine,
  
];

export default anesthetics;