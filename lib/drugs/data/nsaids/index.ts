import { Drug } from "../../types";

import meloxicam from "./meloxicam";
import carprofen from "./carprofen";
import firocoxib from "./firocoxib";
import flunixin from "./flunixin";
import phenylbutazone from "./phenylbutazone";



const nsaids: Drug[] = [
  ...meloxicam,
  ...carprofen,
  ...firocoxib,
  ...flunixin,
  ...phenylbutazone,
];

export default nsaids;