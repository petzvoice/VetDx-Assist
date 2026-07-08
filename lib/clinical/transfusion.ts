export type Species = "Dog" | "Cat";

export type BloodProduct =
  | "Whole Blood"
  | "Packed RBC";

export interface TransfusionInput {
  species: Species;
  bloodProduct: BloodProduct;
  bodyWeightKg: number;
  recipientPCV: number;
  desiredPCV: number;
  donorPCV: number;
}


export interface TransfusionPlan {

  inputs: TransfusionInput;

  results: {
    estimatedBloodVolumeMl: number;
    transfusionVolumeMl: number;
    bloodVolumeConstant: number;
  };

  calculations: {
    bloodVolume: string;
    transfusionFormula: string;
  };

  interpretation: {
    summary: string;
  };

  pearls: string[];
}


export function generateTransfusionPlan(
  input: TransfusionInput
): TransfusionPlan {


  const {
    species,
    bloodProduct,
    bodyWeightKg,
    recipientPCV,
    desiredPCV,
    donorPCV,
  } = input;


  // Validation

  if (bodyWeightKg <= 0)
    throw new Error("Body weight must be greater than zero.");


  if (
    recipientPCV < 0 ||
    recipientPCV > 30
  )
    throw new Error("Recipient PCV should be between 0 and 30%.");


  if (
    desiredPCV < 0 ||
    desiredPCV > 80
  )
    throw new Error("Desired PCV should be between 0 and 80%.");


  if (
    donorPCV < 35 ||
    donorPCV > 80
  )
    throw new Error("Donor PCV should be between 35 and 80%.");



  // Average circulating blood volume

  const bloodVolumeConstant =
    species === "Dog"
      ? 90
      : 60;


  const estimatedBloodVolume =
    bodyWeightKg *
    bloodVolumeConstant;



  // If patient already meets target PCV
  // no transfusion volume required

 let effectiveDonorPCV = donorPCV;


// Adjust based on blood product

if (bloodProduct === "Packed RBC") {

  effectiveDonorPCV =
    Math.max(
      donorPCV,
      60
    );

}


const transfusionVolume =
  desiredPCV <= recipientPCV
    ? 0
    :
    (
      (
        (desiredPCV - recipientPCV) *
        estimatedBloodVolume
      )
      /
      effectiveDonorPCV
    );



  return {

    inputs: {
      species,
      bloodProduct,
      bodyWeightKg,
      recipientPCV,
      desiredPCV,
      donorPCV,
    },


    results: {

      estimatedBloodVolumeMl:
        Number(
          estimatedBloodVolume.toFixed(2)
        ),

      transfusionVolumeMl:
        Number(
          transfusionVolume.toFixed(2)
        ),

      bloodVolumeConstant,

    },


    calculations: {

      bloodVolume:
        `${bodyWeightKg} kg × ${bloodVolumeConstant} mL/kg = ${estimatedBloodVolume.toFixed(2)} mL estimated blood volume`,


      transfusionFormula:
        desiredPCV <= recipientPCV

        ?
        "Recipient PCV is equal to or above desired PCV. Estimated transfusion volume = 0 mL."

        :
        `((Desired PCV ${desiredPCV}% - Recipient PCV ${recipientPCV}%) × ${estimatedBloodVolume.toFixed(2)} mL) ÷ ${bloodProduct} PCV ${effectiveDonorPCV}% = ${transfusionVolume.toFixed(2)} mL`,
    },


    interpretation: {

      summary:
        "This calculator estimates blood product volume required to achieve a target PCV based on entered values. It does not determine transfusion indication.",

    },


    pearls: [

      "Confirm blood type compatibility and crossmatching before transfusion.",

      "Monitor patient parameters throughout transfusion.",

      "Verify calculations and clinical decisions with appropriate veterinary judgement.",

      "This tool provides mathematical support only and does not prescribe treatment.",

    ],

  };

}