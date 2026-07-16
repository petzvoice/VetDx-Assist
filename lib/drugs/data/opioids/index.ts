import { Drug } from "../../types";
import butorphanol from "./butorphanol";
import buprenorphine from "./buprenorphine";
import tramadol from "./tramadol";



const opioids: Drug[] = [
 ...butorphanol, 
 ...buprenorphine,
 ...tramadol,
];

export default opioids;