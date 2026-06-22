type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
};

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  variant = "primary",
  fullWidth = false,
}: ButtonProps) {
  const base =
    "flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition";

  const styles =
    variant === "primary"
      ? "bg-cyan-600 text-white hover:bg-cyan-500"
      : "border border-slate-600 bg-slate-900 text-white hover:border-cyan-500";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${styles} ${
        fullWidth ? "w-full" : ""
      } ${
        disabled || loading
          ? "cursor-not-allowed opacity-60"
          : ""
      }`}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}