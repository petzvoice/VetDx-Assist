"use client";

interface DrugSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function DrugSearchBar({
  value,
  onChange,
}: DrugSearchBarProps) {
  return (
    <div className="mb-8">

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search drug by name, brand, class..."
        className="
          w-full
          rounded-xl
          border
          border-gray-700
          bg-gray-900
          px-5
          py-3
          text-white
          placeholder-gray-500
          outline-none
          focus:border-blue-500
        "
      />

    </div>
  );
}