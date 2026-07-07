type Props = {
  title: string;
  children: React.ReactNode;
};

export default function InfoCard({
  title,
  children,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-800 p-5">

      <h3 className="font-semibold text-cyan-400">
        {title}
      </h3>

      <div className="mt-3 text-slate-300">
        {children}
      </div>

    </div>
  );
}