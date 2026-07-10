import { Drug } from "@/lib/drugs/types";

interface OverdoseInfoProps {
  drug: Drug;
}

export default function OverdoseInfo({
  drug,
}: OverdoseInfoProps) {
  return (
    <section className="mt-6 rounded-xl border border-red-800 bg-red-950/20 p-6">

      <h2 className="text-xl font-semibold text-red-300">
        Overdose
      </h2>

      <div className="mt-6">

        <h3 className="font-semibold text-white">
          Clinical Signs
        </h3>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          {drug.overdose.signs.map((sign) => (
            <li key={sign}>{sign}</li>
          ))}
        </ul>

      </div>

      <div className="mt-8">

        <h3 className="font-semibold text-white">
          Management
        </h3>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          {drug.overdose.management.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

      </div>

    </section>
  );
}