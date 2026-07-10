import { Drug } from "@/lib/drugs/types";
import Link from "next/link";

interface DrugCardProps {
  drug: Drug;
}

export default function DrugCard({ drug }: DrugCardProps) {
  return (
    <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 shadow-lg transition hover:border-blue-500">


      {/* Drug Name */}
      <h2 className="text-xl font-semibold text-white">
        {drug.genericName}
      </h2>


      {/* Brand Names */}
      {drug.brandNames.length > 0 && (
        <p className="mt-1 text-sm text-gray-400">
          {drug.brandNames.join(", ")}
        </p>
      )}



      {/* Drug Class */}
      <p className="mt-3 text-sm text-gray-300">
        {drug.quickFacts.drugClass}
      </p>


      {/* Pharmacologic Class */}
      <p className="mt-1 text-xs text-gray-500">
        {drug.quickFacts.pharmacologicClass}
      </p>



      {/* Status */}
      <div className="mt-3">

        <span className="rounded-full bg-green-900/40 px-3 py-1 text-xs text-green-300">
          {drug.status}
        </span>

      </div>



      {/* Species */}
      <div className="mt-4 flex flex-wrap gap-2">

        {drug.species.map((species) => (

          <span
            key={species}
            className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300"
          >
            {species}
          </span>

        ))}

      </div>




      {/* Routes */}
      <div className="mt-3 flex flex-wrap gap-2">

       {drug.quickFacts.availableRoutes.map((route) => (
          <span
            key={route}
            className="rounded-full bg-blue-900/40 px-3 py-1 text-xs text-blue-300"
          >
            {route}
          </span>

        ))}

      </div>




      {/* Category */}
      <p className="mt-4 text-sm text-gray-400">

        Category:

        <span className="ml-1 text-gray-200">
          {drug.quickFacts.category}
        </span>

      </p>




      {/* Button */}
      <Link
        href={`/drug-index/${drug.id}`}
        className="mt-5 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        View Monograph
      </Link>


    </div>
  );
}