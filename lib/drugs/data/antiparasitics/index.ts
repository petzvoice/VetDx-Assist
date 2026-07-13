import { Drug } from "../../types";
import fenbendazole from "./fenbendazole";
import albendazole from "./albendazole";
import praziquantel from "./praziquantel";
import pyrantelPamoate from "./pyrantel-pamoate";
import ivermectin from "./ivermectin";
import doramectin from "./doramectin";

const antiparasitics: Drug[] = [
  ...fenbendazole,
  ...albendazole,
  ...praziquantel,
  ...pyrantelPamoate,
  ...ivermectin,
  ...doramectin,
];

export default antiparasitics;