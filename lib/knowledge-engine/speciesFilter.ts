import { Species } from "@/lib/drugs/types";

export function detectSpecies(text:string): Species[] {

const lower=text.toLowerCase();

const species: Species[]=[];

if(
lower.includes("dog") ||
lower.includes("canine") ||
lower.includes("puppy")
)
species.push(Species.DOG);


if(
lower.includes("cat") ||
lower.includes("feline") ||
lower.includes("kitten")
)
species.push(Species.CAT);


if(
lower.includes("cow") ||
lower.includes("cattle") ||
lower.includes("bovine")
)
species.push(Species.CATTLE);


if(
lower.includes("sheep") ||
lower.includes("ovine")
)
species.push(Species.SHEEP);


if(
lower.includes("goat") ||
lower.includes("caprine")
)
species.push(Species.GOAT);


return species;

}