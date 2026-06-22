type InputProps = {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

export default function Input({
  label,
  placeholder,
  type = "text",
  required = false,
  value = "",
  onChange,
}: InputProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-sm font-medium text-slate-300">
          {label}
        </label>

        {required && (
          <span className="rounded bg-cyan-600 px-2 py-1 text-xs text-white">
            Required
          </span>
        )}
      </div>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none"
      />
    </div>
  );
}