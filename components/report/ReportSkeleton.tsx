"use client";

export default function ReportSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">

      {/* Header */}

      <div className="rounded-2xl bg-slate-800 p-8">

        <div className="h-8 w-72 rounded bg-slate-700" />

        <div className="mt-4 h-4 w-48 rounded bg-slate-700" />

      </div>

      {/* Cards */}

      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="rounded-2xl bg-slate-800 p-6"
        >
          <div className="mb-6 h-6 w-56 rounded bg-slate-700" />

          <div className="space-y-4">

            <div className="h-4 rounded bg-slate-700" />

            <div className="h-4 w-11/12 rounded bg-slate-700" />

            <div className="h-4 w-4/5 rounded bg-slate-700" />

          </div>

        </div>
      ))}

    </div>
  );
}