import DrugCard from "./DrugCard";
import { Drug } from "@/lib/drugs/types";

interface DrugListProps {
  drugs: Drug[];
}

export default function DrugList({
  drugs,
}: DrugListProps) {

  if (drugs.length === 0) {
    return (
      <div className="rounded-xl border border-gray-700 bg-gray-900 p-6 text-center text-gray-400">
        No drugs found.
      </div>
    );
  }


  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {drugs.map((drug) => (
        <DrugCard
          key={drug.id}
          drug={drug}
        />
      ))}

    </div>
  );
}