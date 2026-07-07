type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ToolSection({
  title,
  children,
}: Props) {
  return (
    <section className="mb-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">

      <h2 className="mb-5 text-2xl font-bold text-cyan-400">
        {title}
      </h2>

      {children}

    </section>
  );
}