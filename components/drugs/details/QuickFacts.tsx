import { Drug } from "@/lib/drugs/types";

interface QuickFactsProps {
  drug: Drug;
}

export default function QuickFacts({
  drug,
}: QuickFactsProps) {

  return (
    <section className="mt-8 rounded-xl border border-gray-700 bg-gray-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Quick Facts
      </h2>


      <div className="mt-4 space-y-3 text-gray-300">


        <p>
          Category:{" "}
          {drug.quickFacts.category}
        </p>


        <p>
          Drug Class:{" "}
          {drug.quickFacts.drugClass}
        </p>


        <p>
          Pharmacologic Class:{" "}
          {drug.quickFacts.pharmacologicClass}
        </p>


        <p>
          Species:{" "}
          {drug.species.join(", ")}
        </p>


       <p>
  Available Routes:{" "}
  {drug.quickFacts.availableRoutes.join(", ")}
</p>

<p>
  Common Routes:{" "}
  {drug.quickFacts.commonRoutes.join(", ")}
</p>


        <p>
          Prescription Required:{" "}
          {drug.quickFacts.prescriptionRequired
            ? "Yes"
            : "No"}
        </p>


      </div>

    </section>
  );
}