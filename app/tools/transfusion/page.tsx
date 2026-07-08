"use client";

import { useMemo, useState } from "react";
import {
  generateTransfusionPlan,
  Species,
  BloodProduct,
} from "@/lib/clinical/transfusion";


export default function BloodTransfusionPage() {


  const [species, setSpecies] =
    useState<Species>("Dog");


  const [bloodProduct, setBloodProduct] =
    useState<BloodProduct>("Whole Blood");


  const [bodyWeightKg, setBodyWeightKg] =
    useState(20);


  const [recipientPCV, setRecipientPCV] =
    useState(12);


  const [desiredPCV, setDesiredPCV] =
    useState(25);


  const [donorPCV, setDonorPCV] =
    useState(40);



  const plan = useMemo(() => {

    try {

     return generateTransfusionPlan({
  species,
  bloodProduct: bloodProduct as "Whole Blood" | "Packed RBC",
  bodyWeightKg,
  recipientPCV,
  desiredPCV,
  donorPCV,
});


    } catch {

      return null;

    }

 }, [
  species,
  bloodProduct,
  bodyWeightKg,
  recipientPCV,
  desiredPCV,
  donorPCV,
]);



  return (

    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      <div className="mx-auto max-w-5xl">


        <h1 className="text-4xl font-bold text-cyan-400">
          🩸 Blood Transfusion Calculator
        </h1>


        <p className="mt-3 text-slate-400">
          Estimate blood product volume using
          entered patient and donor parameters.
        </p>



        <section className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">


          <h2 className="text-xl font-semibold text-cyan-400">
            Patient Information
          </h2>


          <div className="mt-6 grid gap-5 md:grid-cols-2">


            <div>

              <label className="text-sm text-slate-400">
                Species
              </label>

              <select
                value={species}
                onChange={(e)=>
                  setSpecies(
                    e.target.value as Species
                  )
                }
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              >

                <option value="Dog">
                  Dog
                </option>

                <option value="Cat">
                  Cat
                </option>

              </select>

            </div>



            <div>

              <label className="text-sm text-slate-400">
                Blood Product
              </label>

              <select
                value={bloodProduct}
                onChange={(e)=>
                  setBloodProduct(
                    e.target.value as BloodProduct
                  )
                }
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              >

                <option value="Whole Blood">
                  Whole Blood
                </option>

                <option value="Packed RBC">
                  Packed RBC
                </option>

              </select>

            </div>



            <div>

              <label className="text-sm text-slate-400">
                Body Weight (kg)
              </label>

              <input
                type="number"
                min={0}
                value={bodyWeightKg}
                onChange={(e)=>
                  setBodyWeightKg(
                    Math.max(0,Number(e.target.value))
                  )
                }
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              />

            </div>



            <div>

              <label className="text-sm text-slate-400">
                Recipient PCV (%)
              </label>

              <input
                type="number"
                min={0}
                max={30}
                value={recipientPCV}
                onChange={(e)=>
                  setRecipientPCV(
                    Math.min(
                      30,
                      Math.max(
                        0,
                        Number(e.target.value)
                      )
                    )
                  )
                }
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              />

            </div>



            <div>

              <label className="text-sm text-slate-400">
                Desired PCV (%)
              </label>

              <input
                type="number"
                min={0}
                max={80}
                value={desiredPCV}
                onChange={(e)=>
                  setDesiredPCV(
                    Math.min(
                      80,
                      Math.max(
                        0,
                        Number(e.target.value)
                      )
                    )
                  )
                }
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              />

            </div>



            <div>

              <label className="text-sm text-slate-400">
                Donor PCV (%)
              </label>

              <input
                type="number"
                min={35}
                max={80}
                value={donorPCV}
                onChange={(e) => {
  const value = Number(e.target.value);

  if (value >= 0) {
    setDonorPCV(value);
  }
}}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              />

            </div>


          </div>


        </section>




        {plan && (

          <>

          <section className="mt-8 rounded-2xl border border-cyan-700 bg-slate-900 p-6">


            <h2 className="text-2xl font-bold text-cyan-400">
              Calculation Results
            </h2>


            <div className="mt-6 grid gap-5 md:grid-cols-3">


              <div className="rounded-xl bg-slate-950 p-5">

                <p className="text-sm text-slate-400">
                  Estimated Blood Volume
                </p>

                <p className="mt-2 text-3xl font-bold">
                  {plan.results.estimatedBloodVolumeMl} mL
                </p>

              </div>


              <div className="rounded-xl bg-slate-950 p-5">

                <p className="text-sm text-slate-400">
                  Transfusion Volume
                </p>

                <p className="mt-2 text-3xl font-bold text-green-400">
                  {plan.results.transfusionVolumeMl} mL
                </p>

              </div>


              <div className="rounded-xl bg-slate-950 p-5">

                <p className="text-sm text-slate-400">
                  Blood Volume Constant
                </p>

                <p className="mt-2 text-3xl font-bold">
                  {plan.results.bloodVolumeConstant} mL/kg
                </p>

              </div>


            </div>


          </section>



          <section className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold text-cyan-400">
              Calculation Breakdown
            </h2>


            <p className="mt-4 text-slate-300">
              • {plan.calculations.bloodVolume}
            </p>

            <p className="mt-3 text-slate-300">
              • {plan.calculations.transfusionFormula}
            </p>


          </section>
          <section className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">

  <h2 className="text-xl font-semibold text-cyan-400">
    Clinical Notes
  </h2>

  <p className="mt-4 text-slate-300">
    {plan.interpretation.summary}
  </p>

  <h3 className="mt-6 text-lg font-semibold text-cyan-300">
    Clinical Pearls
  </h3>

  <ul className="mt-4 space-y-3">

    <li className="rounded-lg bg-slate-950 p-3 text-slate-300">
      • Blood typing and crossmatching should be performed whenever indicated before transfusion.
    </li>

    <li className="rounded-lg bg-slate-950 p-3 text-slate-300">
      • Whole blood is generally preferred when both oxygen-carrying capacity and intravascular volume replacement are required.
    </li>

    <li className="rounded-lg bg-slate-950 p-3 text-slate-300">
      • Packed RBCs are primarily used to increase oxygen-carrying capacity while minimizing unnecessary volume administration.
    </li>

    <li className="rounded-lg bg-slate-950 p-3 text-slate-300">
      • Start transfusions slowly and monitor continuously for acute transfusion reactions, especially during the first 15–30 minutes.
    </li>

    <li className="rounded-lg bg-slate-950 p-3 text-slate-300">
      • Reassess PCV/hematocrit, vital parameters and clinical response after transfusion to determine the need for further therapy.
    </li>

    <li className="rounded-lg bg-slate-950 p-3 text-slate-300">
      • Always interpret calculated transfusion volumes together with the patient's overall clinical condition and ongoing blood loss.
    </li>

  </ul>

</section>



          <section className="mt-8 rounded-2xl border border-yellow-600 bg-yellow-950/20 p-6">

  <h2 className="text-xl font-semibold text-yellow-400">
    Educational & Clinical Support Notice
  </h2>

  <p className="mt-4 text-sm leading-7 text-slate-300">
    This calculator is intended solely as an educational and clinical support tool. It performs mathematical calculations based on user-entered values and does not recommend transfusions, prescribe treatment, or replace professional veterinary judgment. Carefully verify all entered data, calculations, blood typing, crossmatching, donor suitability, and transfusion protocols before making clinical decisions or administering any blood product.
  </p>

</section>

</>

)}

</div>

</main>

);

}