type ChipProps = {
  label: string;
  onClick?: () => void;
};

export default function Chip({
  label,
  onClick,
}: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-cyan-500 px-4 py-2 text-sm text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
    >
      {label}
    </button>
  );
}