import { Drug } from "../../types";
import pimobendan from "./pimobendan";
import enalapril from "./enalapril";
import benazepril from "./benazepril";
import furosemide from "./furosemide";


const cardiovascular: Drug[] = [
...pimobendan,
...enalapril,
...benazepril,
...furosemide,
];

export default cardiovascular;