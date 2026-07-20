import { drugs } from "./index";

export function findDrugsByTreatment(category:string){

 return drugs.filter((drug)=> 
   drug.treatmentCategories?.some(
     (c:string)=>
       c.toLowerCase()
       === category.toLowerCase()
   )
 );

}