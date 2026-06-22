type SelectProps = {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
};

export default function Select({
  label,
  options,
  value = "",
  onChange,
}: SelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
      >
        <option value="">Select...</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}