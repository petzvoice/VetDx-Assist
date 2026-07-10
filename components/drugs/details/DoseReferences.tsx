import { Drug } from "@/lib/drugs/types";

interface DoseReferencesProps {
  drug: Drug;
}

export default function DoseReferences({
  drug,
}: DoseReferencesProps) {

  return (
    <section className="mt-6 rounded-xl border border-gray-700 bg-gray-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Dose References
      </h2>


      <div className="mt-5 space-y-5">


        {drug.doseReferences.map((dose, index) => (

          <div
            key={index}
            className="rounded-xl border border-gray-700 bg-gray-800 p-5"
          >

            <h3 className="text-lg font-semibold text-white">
              {dose.species}
            </h3>


            <div className="mt-3 space-y-2 text-gray-300">


              <p>
                <span className="text-gray-400">
                  Indication:
                </span>{" "}
                {dose.indication}
              </p>


              <p>
                <span className="text-gray-400">
                  Route:
                </span>{" "}
                {dose.route}
              </p>


              <p>
                <span className="text-gray-400">
                  Dose:
                </span>{" "}
                <span className="font-semibold text-white">
                  {dose.dose.minimum}
                  {" - "}
                  {dose.dose.maximum}
                  {" "}
                  {dose.dose.unit}
                </span>
              </p>


              <p>
                <span className="text-gray-400">
                  Dose Basis:
                </span>{" "}
                {dose.basis}
              </p>


              {dose.frequency && (
                <p>
                  <span className="text-gray-400">
                    Frequency:
                  </span>{" "}
                  {dose.frequency}
                </p>
              )}


              {dose.duration && (
                <p>
                  <span className="text-gray-400">
                    Duration:
                  </span>{" "}
                  {dose.duration}
                </p>
              )}


              {dose.fixedDose && (
                <p className="text-yellow-400">
                  Fixed Dose:
                  {" "}
                  {dose.fixedDose}
                </p>
              )}


              {dose.notes && (
                <p>
                  <span className="text-gray-400">
                    Notes:
                  </span>{" "}
                  {dose.notes}
                </p>
              )}


              {dose.reference && (
                <p className="mt-3 text-sm text-gray-400">
                  Reference: {dose.reference}
                </p>
              )}


              {dose.evidence && (
                <p className="text-sm text-gray-400">
                  Evidence: {dose.evidence}
                </p>
              )}


            </div>

          </div>

        ))}


      </div>


    </section>
  );
}