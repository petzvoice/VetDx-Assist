"use client";

type Props = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search by species or breed..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
    />
  );
}