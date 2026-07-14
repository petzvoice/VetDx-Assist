import { Drug } from "../../types";

import prednisolone from "./prednisolone";
import methylprednisolone from "./methylprednisolone";
import dexamethasone from "./dexamethasone";



const corticosteroids: Drug[] = [
  ...prednisolone,
  ...methylprednisolone,
  ...dexamethasone,
];

export default corticosteroids;