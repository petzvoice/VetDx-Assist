"use client";

interface DrugCategoryFilterProps {
  value: string;
  onChange: (value: string) => void;
}


const categories = [
  "All",
  "Antibiotic",
  "Analgesic",
  "NSAID",
  "Antiparasitic",
  "Anesthetic",
  "Emergency",
];


export default function DrugCategoryFilter({
  value,
  onChange,
}: DrugCategoryFilterProps) {

  return (

    <div className="mt-6 flex flex-wrap gap-3">


      {categories.map((category) => (

        <button
          key={category}
          onClick={() => onChange(category)}
          className={
            `rounded-full px-4 py-2 text-sm transition ${
              
              value === category
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"

            }`
          }
        >

          {category}

        </button>

      ))}


    </div>

  );
}