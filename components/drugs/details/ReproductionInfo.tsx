import { Drug } from "@/lib/drugs/types";

interface ReproductionInfoProps {
  drug: Drug;
}

function RecommendationBadge({
  recommendation,
}: {
  recommendation: string;
}) {
  let color =
    "bg-gray-700 text-gray-200";

  if (recommendation === "Contraindicated") {
    color = "bg-red-900 text-red-200";
  }

  if (recommendation === "Benefit-Risk Assessment Required") {
    color = "bg-yellow-900 text-yellow-200";
  }

  if (recommendation === "Not Established") {
    color = "bg-gray-700 text-gray-200";
  }

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${color}`}
    >
      {recommendation}
    </span>
  );
}

export default function ReproductionInfo({
  drug,
}: ReproductionInfoProps) {
  return (
    <section className="mt-6 rounded-xl border border-gray-700 bg-gray-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Reproduction
      </h2>

      <div className="mt-6 space-y-6">

        <div>
          <h3 className="font-semibold text-white">
            Pregnancy
          </h3>

          <div className="mt-2">
            <RecommendationBadge
              recommendation={
                drug.reproduction.pregnancy.recommendation
              }
            />
          </div>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
            {drug.reproduction.pregnancy.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">
            Lactation
          </h3>

          <div className="mt-2">
            <RecommendationBadge
              recommendation={
                drug.reproduction.lactation.recommendation
              }
            />
          </div>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
            {drug.reproduction.lactation.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">
            Breeding Animals
          </h3>

          <div className="mt-2">
            <RecommendationBadge
              recommendation={
                drug.reproduction.breeding.recommendation
              }
            />
          </div>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
            {drug.reproduction.breeding.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

      </div>

    </section>
  );
}