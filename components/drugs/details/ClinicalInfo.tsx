import { Drug } from "@/lib/drugs/types";

interface ClinicalInfoProps {
  drug: Drug;
}

export default function ClinicalInfo({
  drug,
}: ClinicalInfoProps) {

  return (
    <section className="mt-6 rounded-xl border border-gray-700 bg-gray-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Clinical Information
      </h2>


      <div className="mt-4 space-y-5 text-gray-300">


        <div>

          <h3 className="font-medium text-white">
            Mechanism of Action
          </h3>

          <p className="mt-1">
            {drug.clinical.mechanismOfAction}
          </p>

        </div>



        {drug.clinical.spectrum && (

          <div>

            <h3 className="font-medium text-white">
              Spectrum
            </h3>

            <p className="mt-1">
              {drug.clinical.spectrum}
            </p>

          </div>

        )}




        <div>

          <h3 className="font-medium text-white">
            Indications
          </h3>


          <ul className="mt-2 list-disc space-y-1 pl-5">

            {drug.clinical.indications.map((item) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>


        </div>




        <div>

          <h3 className="font-medium text-white">
            Common Uses
          </h3>


          <ul className="mt-2 list-disc space-y-1 pl-5">

            {drug.clinical.commonUses.map((item) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>


        </div>


      </div>


    </section>
  );
}