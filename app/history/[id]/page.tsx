import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CaseReportPage({ params }: Props) {
  const { id } = await params;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data, error } = await supabase
    .from("cases")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl py-10 px-6">

      <div className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">

        <div className="rounded-t-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-5">
          <h1 className="text-3xl font-bold text-white">
            AI Clinical Report
          </h1>

          <p className="mt-2 text-cyan-100">
            Case #{data.id}
          </p>
        </div>

        <div className="space-y-8 p-8">

          <section>
            <h2 className="mb-3 text-xl font-bold text-cyan-400">
              Patient Information
            </h2>

            <div className="grid grid-cols-2 gap-4 text-slate-300">

              <p><strong>Species:</strong> {data.species}</p>
              <p><strong>Breed:</strong> {data.breed}</p>
              <p><strong>Age:</strong> {data.age}</p>
              <p><strong>Sex:</strong> {data.sex}</p>

            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-cyan-400">
              Chief Complaint
            </h2>

            <p className="whitespace-pre-wrap text-slate-300">
              {data.complaint}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-cyan-400">
              History
            </h2>

            <p className="whitespace-pre-wrap text-slate-300">
              {data.history}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-cyan-400">
              Physical Examination
            </h2>

            <p className="whitespace-pre-wrap text-slate-300">
              {data.examination}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-cyan-400">
              AI Clinical Report
            </h2>

            <div className="rounded-xl bg-slate-800 p-6">
              <pre className="whitespace-pre-wrap text-slate-300">
                {data.ai_response}
              </pre>
            </div>
          </section>

        </div>

      </div>

    </main>
  );
}