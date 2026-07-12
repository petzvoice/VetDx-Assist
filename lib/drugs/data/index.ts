import { Drug } from "../types";

import antibiotics from "./antibiotics";
import analgesics from "./analgesics";
import anesthetics from "./anesthetics";
import antiparasitics from "./antiparasitics";
import cardiovascular from "./cardiovascular";
import emergency from "./emergency";
import nsaids from "./nsaids";

/**
 * Master Drug Database
 */
export const drugs: Drug[] = [
  ...antibiotics,
  ...analgesics,
  ...anesthetics,
  ...antiparasitics,
  ...cardiovascular,
  ...emergency,
  ...nsaids,
];