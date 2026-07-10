import { Drug } from "@/lib/drugs/types";

interface ReferencesProps {
  drug: Drug;
}

export default function References({
  drug,
}: ReferencesProps) {

  return (
    <section className="mt-6 rounded-xl border border-gray-700 bg-gray-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        References
      </h2>


      <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">

        {drug.references.map((reference, index) => (

          <li key={index}>

            {reference.title}

            {reference.edition &&
              ` (${reference.edition})`
            }

            {reference.year &&
              ` - ${reference.year}`
            }

            {reference.publisher &&
              `, ${reference.publisher}`
            }

          </li>

        ))}

      </ul>


    </section>
  );
}