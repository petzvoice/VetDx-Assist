"use client";

type SelectableChipGroupProps = {
  title: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
};

export default function SelectableChipGroup({
  title,
  options,
  selected,
  onChange,
}: SelectableChipGroupProps) {
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-slate-300">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const isSelected = selected.includes(option);

          return (
            <button
              key={option}
              type="button"
              onClick={() => toggleOption(option)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                isSelected
                  ? "border-cyan-500 bg-cyan-500 text-white"
                  : "border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}