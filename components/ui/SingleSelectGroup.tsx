"use client";

type SingleSelectGroupProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function SingleSelectGroup({
  label,
  options,
  value,
  onChange,
}: SingleSelectGroupProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                selected
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