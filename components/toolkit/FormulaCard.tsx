type Props = {
  formula: string;
};

export default function FormulaCard({
  formula,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-800 p-5">

      <h3 className="font-semibold text-cyan-400">
        Formula
      </h3>

      <p className="mt-3 text-lg font-mono text-white">
        {formula}
      </p>

    </div>
  );
}