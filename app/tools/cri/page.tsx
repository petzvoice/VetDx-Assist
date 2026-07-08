"use client";

import { useMemo, useState } from "react";
import { generateCRIPlan, CRIUnit } from "@/lib/clinical/cri";

export default function CRIPlannerPage() {

  const [drugName, setDrugName] = useState("");

  const [drugAmountMg, setDrugAmountMg] =
    useState(500);

  const [bagVolumeMl, setBagVolumeMl] =
    useState(500);

  const [patientWeightKg, setPatientWeightKg] =
    useState(20);

  const [targetDose, setTargetDose] =
    useState(50);

  const [unit, setUnit] =
    useState<CRIUnit>("mcg/kg/min");


  const plan = useMemo(() => {

    if (
      !drugName.trim() ||
      drugAmountMg <= 0 ||
      bagVolumeMl <= 0 ||
      patientWeightKg <= 0 ||
      targetDose <= 0
    ) {
      return null;
    }

    try {

      return generateCRIPlan({

        drugName,

        drugAmountMg,

        bagVolumeMl,

        patientWeightKg,

        targetDose,

        unit,

      });

    } catch {

      return null;

    }

  }, [

    drugName,

    drugAmountMg,

    bagVolumeMl,

    patientWeightKg,

    targetDose,

    unit,

  ]);


  return (

    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold text-cyan-400">
          💉 Continuous Rate Infusion Planner
        </h1>

        <p className="mt-3 text-slate-400">
          Calculate CRI infusion rates using user-entered
          drug concentration and prescribed dose.
        </p>





        <section className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">

          <h2 className="text-xl font-semibold text-cyan-400">
            CRI Details
          </h2>


          <div className="mt-6 grid gap-5 md:grid-cols-2">

            <div>

              <label className="text-sm text-slate-400">
                Drug Name *
              </label>

              <input
                value={drugName}
                onChange={(e) =>
                  setDrugName(e.target.value)
                }
                placeholder="Example: Lidocaine"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              />

            </div>





            <div>

              <label className="text-sm text-slate-400">
                Drug Added (mg)
              </label>

              <input
                type="number"
                value={drugAmountMg}
               onChange={(e) =>
  setDrugAmountMg(Math.max(0, Number(e.target.value)))
}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              />

            </div>





            <div>

              <label className="text-sm text-slate-400">
                Bag Volume (mL)
              </label>

              <input
                type="number"
                value={bagVolumeMl}
                onChange={(e) =>
  setBagVolumeMl(Math.max(0, Number(e.target.value)))
}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              />

            </div>





            <div>

              <label className="text-sm text-slate-400">
                Patient Weight (kg)
              </label>

              <input
                type="number"
                value={patientWeightKg}
                onChange={(e) =>
  setPatientWeightKg(Math.max(0, Number(e.target.value)))
}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              />

            </div>





            <div>

              <label className="text-sm text-slate-400">
                Target Dose
              </label>

              <input
                type="number"
                value={targetDose}
                onChange={(e) =>
  setTargetDose(Math.max(0, Number(e.target.value)))
}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              />

            </div>





            <div>

              <label className="text-sm text-slate-400">
                Dose Unit
              </label>

              <select
                value={unit}
                onChange={(e) =>
                  setUnit(e.target.value as CRIUnit)
                }
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              >

                <option value="mcg/kg/min">
                  mcg/kg/min
                </option>

                <option value="mcg/kg/hr">
                  mcg/kg/hr
                </option>

                <option value="mg/kg/hr">
                  mg/kg/hr
                </option>

              </select>

            </div>

          </div>

        </section>
        <div className="mt-8 flex gap-4">

  <button
    onClick={() => {

      setDrugName("");

      setDrugAmountMg(500);

      setBagVolumeMl(500);

      setPatientWeightKg(20);

      setTargetDose(50);

      setUnit("mcg/kg/min");

    }}
    className="rounded-xl bg-slate-700 px-6 py-3 hover:bg-slate-600"
  >
    Clear Form
  </button>

</div>
                {plan && (

          <>

            <section className="mt-8 rounded-2xl border border-cyan-700 bg-slate-900 p-6">

              <h2 className="text-2xl font-bold text-cyan-400">
                Calculation Results
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-3">

                <div className="rounded-xl bg-slate-950 p-5">

                  <p className="text-sm text-slate-400">
                    Drug Concentration
                  </p>

                  <p className="mt-2 text-3xl font-bold text-cyan-400">
                    {plan.results.concentrationMgPerMl} mg/mL
                  </p>

                </div>

                <div className="rounded-xl bg-slate-950 p-5">

                  <p className="text-sm text-slate-400">
                    Drug Delivered
                  </p>

                  <p className="mt-2 text-3xl font-bold text-cyan-400">
                    {plan.results.drugDeliveredMgPerHr} mg/hr
                  </p>

                </div>

                <div className="rounded-xl bg-slate-950 p-5">

                  <p className="text-sm text-slate-400">
                    Infusion Rate
                  </p>

                  <p className="mt-2 text-3xl font-bold text-green-400">
                    {plan.results.infusionRateMlPerHr} mL/hr
                  </p>

                </div>

              </div>

            </section>





            <section className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h2 className="text-xl font-semibold text-cyan-400">
                Calculation Breakdown
              </h2>

              <ul className="mt-5 space-y-3 text-slate-300">

                <li>• {plan.calculations.concentration}</li>

                <li>• {plan.calculations.doseConversion}</li>

                <li>• {plan.calculations.drugPerHour}</li>

                <li>• {plan.calculations.infusionRate}</li>

              </ul>

            </section>





            <section className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h2 className="text-xl font-semibold text-cyan-400">
                Clinical Notes
              </h2>

              <p className="mt-4 text-slate-300">
                {plan.interpretation.summary}
              </p>

              <ul className="mt-6 space-y-2">

                {plan.pearls.map((item, index) => (

                  <li
                    key={index}
                    className="rounded-lg bg-slate-950 p-3 text-slate-300"
                  >
                    • {item}
                  </li>

                ))}

              </ul>

            </section>





            <section className="mt-8 rounded-2xl border border-yellow-600 bg-yellow-950/20 p-6">

              <h2 className="text-xl font-semibold text-yellow-400">
                Educational & Clinical Support Notice
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">

                This calculator performs mathematical calculations
                solely from user-entered values.

                It does not recommend medications, prescribe
                dosages, or replace professional veterinary
                judgment.

                Always verify the prescribed CRI dose,
                drug concentration, dilution, patient factors,
                and infusion pump settings before administration.

              </p>

            </section>

          </>

        )}

      </div>

    </main>

  );

}