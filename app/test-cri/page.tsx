import { generateCRIPlan } from "@/lib/clinical/cri";

export default function TestCRIPage() {

  const result = generateCRIPlan({
    drugName: "Lidocaine",
    drugAmountMg: 500,
    bagVolumeMl: 500,
    patientWeightKg: 20,
    targetDose: 50,
    unit: "mcg/kg/min",
  });

  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </main>
  );
}