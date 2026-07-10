import { Drug } from "@/lib/drugs/types";

interface ClinicalPearlsProps {
  drug: Drug;
}

export default function ClinicalPearls({
  drug,
}: ClinicalPearlsProps) {

  return (
    <section className="mt-6 rounded-xl border border-gray-700 bg-gray-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Clinical Pearls
      </h2>


      <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">

        {drug.clinical.clinicalPearls.map((pearl) => (

          <li key={pearl}>
            {pearl}
          </li>

        ))}

      </ul>


    </section>
  );
}