import Link from "next/link";

type Props = {
  data: any;
};

export default function CaseCard({ data }: Props) {
  const history =
    typeof data.history === "string"
      ? data.history
      : data.history
      ? JSON.stringify(data.history, null, 2)
      : "No history available";

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:border-cyan-500">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            🐾 {data.species || "Unknown Species"}
          </h2>

          <p className="mt-1 text-slate-400">
            {data.breed || "Unknown Breed"}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Age: {data.age || "-"} &nbsp; | &nbsp; Sex: {data.sex || "-"}
          </p>
        </div>

        <div className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300">
          {new Date(data.created_at).toLocaleDateString()}
        </div>

      </div>

      {/* Chief Complaint */}
      <div className="mt-6">
        <h3 className="font-semibold text-cyan-400">
          Chief Complaint
        </h3>

        <p className="mt-2 text-slate-300">
          {data.complaint || "Not provided"}
        </p>
      </div>

      {/* History */}
      <div className="mt-6">
        <h3 className="font-semibold text-cyan-400">
          History
        </h3>

        <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-slate-800 p-4 text-sm text-slate-300">
          {history}
        </pre>
      </div>

      {/* AI Report Preview */}
      <div className="mt-6">
        <h3 className="font-semibold text-cyan-400">
          AI Clinical Report
        </h3>

        <div className="mt-3 rounded-xl bg-slate-800 p-4">
          <p className="line-clamp-6 whitespace-pre-wrap text-slate-300">
            {data.ai_response || "No AI report available."}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between">

        <span className="rounded-full bg-cyan-900/40 px-3 py-1 text-sm font-medium text-cyan-300">
          Saved Case
        </span>

        <Link
          href={`/history/${data.id}`}
          className="rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
        >
          View Full Report →
        </Link>

      </div>

    </div>
  );
}