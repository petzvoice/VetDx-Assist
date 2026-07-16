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
import atropine from "./atropine";
import diazepam from "./diazepam";






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
  ...atropine,
  ...diazepam,
  
];

export default anesthetics;