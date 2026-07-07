type Props = {
  label: string;
  value: string;
};

export default function ResultCard({
  label,
  value,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-800 p-5">

      <p className="text-sm text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-3xl font-bold text-cyan-300">
        {value}
      </p>

    </div>
  );
}