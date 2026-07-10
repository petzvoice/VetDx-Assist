import { Drug } from "@/lib/drugs/types";

interface FormulationsProps {
  drug: Drug;
}

export default function Formulations({
  drug,
}: FormulationsProps) {

  return (
    <section className="mt-6 rounded-xl border border-gray-700 bg-gray-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Formulations
      </h2>


      <div className="mt-4 space-y-4">


        {drug.formulations.map((formulation) => (

          <div
            key={formulation.id}
            className="rounded-lg bg-gray-800 p-4"
          >

            <p className="font-medium text-white">
              {formulation.dosageForm}
            </p>


            <p className="text-gray-300">
              Strength: {formulation.strength}
            </p>


            <p className="text-gray-400 text-sm">
              Routes:{" "}
              {formulation.routes.join(", ")}
            </p>


            {formulation.notes && (
              <p className="mt-2 text-sm text-yellow-400">
                {formulation.notes}
              </p>
            )}


          </div>

        ))}


      </div>


    </section>
  );
}