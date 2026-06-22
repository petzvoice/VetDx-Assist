"use client";

type ErrorAlertProps = {
  message: string;
  onRetry?: () => void;
};

export default function ErrorAlert({
  message,
  onRetry,
}: ErrorAlertProps) {
  return (
    <div className="rounded-2xl border border-red-700 bg-red-900/20 p-5">
      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="text-lg font-semibold text-red-400">
            ⚠️ Unable to Generate AI Report
          </h3>

          <p className="mt-2 text-slate-300">
            {message}
          </p>
        </div>

        {onRetry && (
          <button
            onClick={onRetry}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Try Again
          </button>
        )}

      </div>
    </div>
  );
}