type Props = {
  pearls: string[];
};

export default function ClinicalPearls({
  pearls,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-800 p-5">

      <h3 className="font-semibold text-cyan-400">
        Clinical Pearls
      </h3>

      <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">

        {pearls.map((item, index) => (
          <li key={index}>{item}</li>
        ))}

      </ul>

    </div>
  );
}