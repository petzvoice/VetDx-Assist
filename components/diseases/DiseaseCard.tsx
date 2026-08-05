import Link from "next/link";

interface DiseaseCardProps {
  disease: {
    id: string;
    name: string;
    species: string[];
    category: string;
    system: string;
    disease: {
      overview: string;
    };
  };
}

export default function DiseaseCard({
  disease,
}: DiseaseCardProps) {

  return (

    <div className="border rounded-xl p-5 hover:shadow-lg transition bg-white">

      <h2 className="text-xl font-semibold">
        {disease.name}
      </h2>


      <div className="mt-3 text-sm text-gray-600">

        <p>
          Species: {disease.species.join(", ")}
        </p>

        {disease.category !== "Uncategorized" && (
          <p>
            Category: {disease.category}
          </p>
        )}

        {disease.system !== "General" && (
          <p>
            System: {disease.system}
          </p>
        )}

      </div>


      <p className="text-sm mt-4 text-gray-700 line-clamp-3">
        {disease.disease.overview}
      </p>


      <Link
        href={`/diseases/${disease.id}`}
        className="inline-block mt-4 text-blue-600 font-medium"
      >
        View Details →
      </Link>

    </div>

  );
}