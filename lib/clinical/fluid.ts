// lib/clinical/fluid.ts

export type Species = "dog" | "cat";

export interface FluidPlanInput {
  species: Species;
  weight: number;
  dehydration: number;
  ongoingLosses?: number;
}


export interface FluidPlan {
  inputs: {
    species: string;
    weight: number;
    dehydration: number;
    ongoingLosses: number;
  };

  results: {
    fluidDeficit: number;
    maintenance: number;
    totalFluids: number;
    hourlyRate: number;
  };

  interpretation: {
    severity: string;
    message: string;
  };

  pearls: string[];

  calculations: {
    fluidDeficit: string;
    maintenance: string;
    totalFluids: string;
    hourlyRate: string;
  };
}


// Maintenance constants
const DOG_MAINTENANCE = 60;
const CAT_MAINTENANCE = 50;


// Dehydration classification

function getSeverity(dehydration: number) {

  if (dehydration < 5) {
    return "Mild";
  }

  if (dehydration <= 7) {
    return "Moderate";
  }

  if (dehydration <= 10) {
    return "Severe";
  }

  return "Critical";
}



// Clinical interpretation

function getInterpretation(severity: string) {

  switch (severity) {

    case "Mild":

      return (
        "Mild dehydration. Fluid therapy requirements " +
        "should be determined based on clinical status, " +
        "underlying disease and ability to maintain hydration."
      );


    case "Moderate":

      return (
        "Moderate dehydration. Fluid replacement should " +
        "be considered with frequent reassessment of hydration " +
        "status and ongoing losses."
      );


    case "Severe":

      return (
        "Severe dehydration. Hospitalization and intravenous " +
        "fluid therapy are generally indicated. Monitor " +
        "perfusion parameters, urine output and electrolyte status."
      );


    case "Critical":

      return (
        "Critical dehydration. Immediate stabilization and " +
        "close monitoring are required. Assess perfusion, " +
        "shock status and electrolyte abnormalities."
      );


    default:

      return "";
  }
}



// Main engine

export function generateFluidPlan(
  input: FluidPlanInput
): FluidPlan {


  const {
    species,
    weight,
    dehydration,
    ongoingLosses = 0
  } = input;



  if (weight <= 0) {
    throw new Error(
      "Body weight must be greater than zero."
    );
  }


  if (
    dehydration < 0 ||
    dehydration > 30
  ) {

    throw new Error(
      "Invalid dehydration percentage."
    );

  }



  // Fluid deficit
  // Weight × dehydration percentage × 10

  const fluidDeficit =
    weight * dehydration * 10;



  // Maintenance

  const maintenanceRate =
    species === "cat"
      ? CAT_MAINTENANCE
      : DOG_MAINTENANCE;


  const maintenance =
    weight * maintenanceRate;



  // Total requirement

  const totalFluids =
    fluidDeficit +
    maintenance +
    ongoingLosses;



  // Hourly rate

  const hourlyRate =
    totalFluids / 24;



  const severity =
    getSeverity(dehydration);



  return {

    inputs: {
      species,
      weight,
      dehydration,
      ongoingLosses
    },


    results: {

      fluidDeficit:
        Math.round(fluidDeficit),

      maintenance:
        Math.round(maintenance),

      totalFluids:
        Math.round(totalFluids),

      hourlyRate:
        Number(hourlyRate.toFixed(1))

    },


    interpretation: {

      severity,

      message:
        getInterpretation(severity)

    },


    pearls: [

      "Reassess hydration status regularly.",

      "Monitor urine output during fluid therapy.",

      "Account for ongoing losses such as vomiting or diarrhoea.",

      "Recalculate requirements after patient reassessment.",

      "Always correlate calculated requirements with clinical findings."

    ],



    calculations: {

      fluidDeficit:
        `${weight} × ${dehydration} × 10 = ${fluidDeficit} mL`,

      maintenance:
        `${weight} × ${maintenanceRate} = ${maintenance} mL/day`,

      totalFluids:
        `${fluidDeficit} + ${maintenance} + ${ongoingLosses} = ${totalFluids} mL/day`,

      hourlyRate:
        `${totalFluids} ÷ 24 = ${hourlyRate.toFixed(1)} mL/hr`

    }

  };

}