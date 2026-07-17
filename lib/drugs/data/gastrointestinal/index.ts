import { Drug } from "../../types";
import ranitidine from "./ranitidine";
import pantoprazole from "./pantoprazole";
import metoclopramide from "./metoclopramide";
import ondansetron from "./ondansetron";
import maropitant from "./maropitant";


const gastrointestinal: Drug[] = [
 ...ranitidine, 
 ...pantoprazole,
 ...metoclopramide,
 ...ondansetron,
 ...maropitant,


];

export default gastrointestinal;