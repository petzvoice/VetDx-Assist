"use client";

type StatusBadgeProps = {
  status: "Stable" | "Urgent" | "Emergency" | string;
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const value = status?.trim() || "Stable";

  function getStyles() {
    switch (value.toLowerCase()) {
      case "emergency":
        return {
          color: "bg-red-600 text-white border-red-500",
          icon: "🔴",
          label: "Emergency",
        };

      case "urgent":
        return {
          color: "bg-yellow-500 text-black border-yellow-400",
          icon: "🟠",
          label: "Urgent",
        };

      default:
        return {
          color: "bg-emerald-600 text-white border-emerald-500",
          icon: "🟢",
          label: "Stable",
        };
    }
  }

  const badge = getStyles();

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-semibold shadow-sm ${badge.color}`}
    >
      <span className="text-lg">
        {badge.icon}
      </span>

      <span>
        {badge.label}
      </span>
    </div>
  );
}