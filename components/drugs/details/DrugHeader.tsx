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


      <p className="mt-2 text-gray-400">
        {drug.quickFacts.drugClass}
      </p>

    </div>
  );
}