import { Drug } from "../../types";

import meloxicam from "./meloxicam";
import carprofen from "./carprofen";
import firocoxib from "./firocoxib";


const nsaids: Drug[] = [
  ...meloxicam,
  ...carprofen,
  ...firocoxib,
];

export default nsaids;