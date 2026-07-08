export type CRIUnit =
  | "mcg/kg/min"
  | "mcg/kg/hr"
  | "mg/kg/hr";

export interface CRIInput {
  drugName?: string;
  drugAmountMg: number;
  bagVolumeMl: number;
  patientWeightKg: number;
  targetDose: number;
  unit: CRIUnit;
}

export interface CRIPlan {
  inputs: {
    drugName?: string;
    drugAmountMg: number;
    bagVolumeMl: number;
    patientWeightKg: number;
    targetDose: number;
    unit: CRIUnit;
  };

  results: {
    concentrationMgPerMl: number;
    infusionRateMlPerHr: number;
    drugDeliveredMgPerHr: number;
  };

  calculations: {
    concentration: string;
    doseConversion: string;
    drugPerHour: string;
    infusionRate: string;
  };

  interpretation: {
    summary: string;
  };

  pearls: string[];
}

export function generateCRIPlan(
  input: CRIInput
): CRIPlan {

  const {
    drugName,
    drugAmountMg,
    bagVolumeMl,
    patientWeightKg,
    targetDose,
    unit,
  } = input;

  if (drugAmountMg <= 0)
    throw new Error("Drug amount must be greater than zero.");

  if (bagVolumeMl <= 0)
    throw new Error("Bag volume must be greater than zero.");

  if (patientWeightKg <= 0)
    throw new Error("Patient weight must be greater than zero.");

  if (targetDose <= 0)
    throw new Error("Target dose must be greater than zero.");

  // mg per mL
  const concentration =
    drugAmountMg / bagVolumeMl;

  // mg/hr required
  let drugMgPerHour = 0;

  switch (unit) {

    case "mcg/kg/min":

      drugMgPerHour =
        (targetDose *
          patientWeightKg *
          60) /
        1000;

      break;

    case "mcg/kg/hr":

      drugMgPerHour =
        (targetDose *
          patientWeightKg) /
        1000;

      break;

    case "mg/kg/hr":

      drugMgPerHour =
        targetDose *
        patientWeightKg;

      break;
  }

  // mL/hr
  const infusionRate =
    drugMgPerHour /
    concentration;

  return {

    inputs: {
      drugName,
      drugAmountMg,
      bagVolumeMl,
      patientWeightKg,
      targetDose,
      unit,
    },

    results: {

      concentrationMgPerMl:
        Number(
          concentration.toFixed(3)
        ),

      drugDeliveredMgPerHr:
        Number(
          drugMgPerHour.toFixed(3)
        ),

      infusionRateMlPerHr:
        Number(
          infusionRate.toFixed(2)
        ),
    },

    calculations: {

      concentration:
        `${drugAmountMg} mg ÷ ${bagVolumeMl} mL = ${concentration.toFixed(
          3
        )} mg/mL`,

      doseConversion:
        `${targetDose} ${unit}`,

      drugPerHour:
        `${drugMgPerHour.toFixed(
          3
        )} mg/hr required`,

      infusionRate:
        `${drugMgPerHour.toFixed(
          3
        )} ÷ ${concentration.toFixed(
          3
        )} = ${infusionRate.toFixed(
          2
        )} mL/hr`,
    },

    interpretation: {

      summary:
        "This calculation estimates the infusion pump rate required to deliver the specified CRI dose based on the entered drug concentration.",
    },

    pearls: [

      "Verify all drug concentrations before administration.",

      "Confirm pump settings before starting the infusion.",

      "Monitor patient response and adjust the prescribed CRI dose as clinically indicated.",

      "This calculator performs mathematical calculations only and does not recommend drug dosages.",
    ],
  };
}