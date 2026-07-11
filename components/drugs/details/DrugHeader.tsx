import { Drug } from "@/lib/drugs/types";

interface DrugHeaderProps {
  drug: Drug;
}

export default function DrugHeader({
  drug,
}: DrugHeaderProps) {
  return (
    <div>

      <h1 className="text-3xl font-bold text-white">
        {drug.genericName}
      </h1>

      {drug.brandNames.length > 0 && (
        <div className="mt-3">

          <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
            Brand Names
          </p>

          <p className="mt-1 text-gray-200">
            {drug.brandNames.join(", ")}
          </p>

        </div>
      )}

      <p className="mt-4 text-gray-400">
        {drug.quickFacts.drugClass}
      </p>

    </div>
  );
}