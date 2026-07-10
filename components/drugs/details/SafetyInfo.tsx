import { Drug } from "@/lib/drugs/types";

interface SafetyInfoProps {
  drug: Drug;
}

export default function SafetyInfo({
  drug,
}: SafetyInfoProps) {

  return (
    <section className="mt-6 rounded-xl border border-gray-700 bg-gray-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Safety Information
      </h2>


      <div className="mt-4 space-y-5 text-gray-300">


        <div>

          <h3 className="font-medium text-white">
            Contraindications
          </h3>

          <ul className="mt-2 list-disc space-y-1 pl-5">

            {drug.safety.contraindications.map((item) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>

        </div>




        <div>

          <h3 className="font-medium text-white">
            Precautions
          </h3>

          <ul className="mt-2 list-disc space-y-1 pl-5">

            {drug.safety.precautions.map((item) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>

        </div>




        <div>

          <h3 className="font-medium text-white">
            Adverse Effects
          </h3>

          <ul className="mt-2 list-disc space-y-1 pl-5">

            {drug.safety.adverseEffects.map((item) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>

        </div>




        <div>

          <h3 className="font-medium text-white">
            Monitoring
          </h3>

          <ul className="mt-2 list-disc space-y-1 pl-5">

            {drug.safety.monitoring.map((item) => (

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