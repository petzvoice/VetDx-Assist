// lib/drugs/data/index.ts

import { Drug } from "../types";

import { antibiotics } from "./antibiotics";
import { analgesics } from "./analgesics";
import { anesthetics } from "./anesthetics";
import { antiparasitics } from "./antiparasitics";
import { cardiovascular } from "./cardiovascular";
import { emergency } from "./emergency";

/**
 * Master Drug Database
 * Every drug category is exported here.
 */
export const drugs: Drug[] = [
  ...antibiotics,
  ...analgesics,
  ...anesthetics,
  ...antiparasitics,
  ...cardiovascular,
  ...emergency,
];