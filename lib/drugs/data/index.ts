import { Drug } from "../types";

import antibiotics from "./antibiotics";
import analgesics from "./analgesics";
import anesthetics from "./anesthetics";
import antiparasitics from "./antiparasitics";
import cardiovascular from "./cardiovascular";
import emergency from "./emergency";
import nsaids from "./nsaids";
import corticosteroids from "./corticosteroids";
import opioids from "./opioids";
import gastrointestinal from "./gastrointestinal";

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
  ...corticosteroids,
  ...opioids,
   ...gastrointestinal,
];
