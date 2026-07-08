"use client";

import { useMemo, useState } from "react";
import { generateFluidPlan } from "@/lib/clinical/fluid";

export default function FluidTherapyPage() {

  const [species, setSpecies] =
    useState<"dog" | "cat">("dog");

  const [weight, setWeight] =
    useState(10);

  const [dehydration, setDehydration] =
    useState(10);

  const [ongoingLosses, setOngoingLosses] =
    useState(0);


  const plan = useMemo(() => {

    try {

      if (
        weight <= 0 ||
        dehydration < 0
      ) {
        return null;
      }


      return generateFluidPlan({
        species,
        weight,
        dehydration,
        ongoingLosses,
      });


    } catch {

      return null;

    }

  }, [
    species,
    weight,
    dehydration,
    ongoingLosses,
  ]);



  return (

    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">


      <div className="mx-auto max-w-5xl">


        <h1 className="text-4xl font-bold text-cyan-400">
          💧 Fluid Therapy Planner
        </h1>


        <p className="mt-3 text-slate-400">
          Calculate estimated fluid requirements based on
          patient weight, dehydration percentage and ongoing losses.
        </p>



        {/* Inputs */}

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

                onChange={(e) =>
                  setSpecies(
                    e.target.value as "dog" | "cat"
                  )
                }

                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"

              >

                <option value="dog">
                  Dog
                </option>

                <option value="cat">
                  Cat
                </option>

              </select>

            </div>




            <div>

              <label className="text-sm text-slate-400">
                Body Weight (kg)
              </label>


              <input

                type="number"

                value={weight}

                onChange={(e) =>
                  setWeight(
                     Math.max(0, Number(e.target.value))
                  )
                }

                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"

              />

            </div>





            <div>

              <label className="text-sm text-slate-400">
                Dehydration (%)
              </label>


              <input

                type="number"

                value={dehydration}

                onChange={(e) =>
                  setDehydration(
                     Math.max(0, Number(e.target.value))
                  )
                }

                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"

              />

            </div>





            <div>

              <label className="text-sm text-slate-400">
                Ongoing Losses (mL/day)
              </label>


              <input

                type="number"

                value={ongoingLosses}

                onChange={(e) =>
  setOngoingLosses(
    Math.max(0, Number(e.target.value))
  )
}

                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"

              />

            </div>


          </div>


        </section>






        {plan && (

          <>


            {/* Results */}

            <section className="mt-8 grid gap-5 md:grid-cols-2">


              <ResultCard

                title="Fluid Deficit"

                value={`${plan.results.fluidDeficit} mL`}

              />


              <ResultCard

                title="Maintenance"

                value={`${plan.results.maintenance} mL/day`}

              />


              <ResultCard

                title="Total Fluids"

                value={`${plan.results.totalFluids} mL/day`}

              />


              <ResultCard

                title="Hourly Rate"

                value={`${plan.results.hourlyRate} mL/hr`}

              />


            </section>







            {/* Interpretation */}

            <section className="mt-8 rounded-2xl border border-cyan-700 bg-slate-900 p-6">


              <h2 className="text-xl font-bold text-cyan-400">

                Clinical Interpretation

              </h2>


              <div className="mt-4 rounded-xl bg-slate-800 p-4">


                <p className="font-semibold text-white">

                  Severity: {plan.interpretation.severity}

                </p>


                <p className="mt-3 text-slate-300">

                  {plan.interpretation.message}

                </p>


              </div>


            </section>







            {/* Pearls */}

            <section className="mt-8 rounded-2xl bg-slate-900 p-6">


              <h2 className="text-xl font-bold text-cyan-400">

                Clinical Pearls

              </h2>


              <ul className="mt-4 space-y-3 text-slate-300">


                {plan.pearls.map(
                  (item, index) => (

                    <li key={index}>
                      • {item}
                    </li>

                  )
                )}


              </ul>


            </section>







            {/* Calculation */}

            <section className="mt-8 rounded-2xl bg-slate-900 p-6">


              <h2 className="text-xl font-bold text-cyan-400">

                Calculation Breakdown

              </h2>


              <div className="mt-4 space-y-3 text-slate-300">


                <p>
                  <b>Fluid Deficit:</b>{" "}
                  {plan.calculations.fluidDeficit}
                </p>


                <p>
                  <b>Maintenance:</b>{" "}
                  {plan.calculations.maintenance}
                </p>


                <p>
                  <b>Total Fluids:</b>{" "}
                  {plan.calculations.totalFluids}
                </p>


                <p>
                  <b>Hourly Rate:</b>{" "}
                  {plan.calculations.hourlyRate}
                </p>


              </div>


            </section>





          </>

        )}






        <p className="mt-10 text-sm text-slate-500">

          This calculator provides estimated fluid requirements.
          Clinical judgement, patient monitoring and reassessment
          are essential.

        </p>



      </div>


    </main>

  );
}




function ResultCard({

  title,
  value,

}: {

  title:string;
  value:string;

}) {


  return (

    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

      <p className="text-sm text-slate-400">
        {title}
      </p>


      <p className="mt-3 text-3xl font-bold text-white">
        {value}
      </p>


    </div>

  );

}