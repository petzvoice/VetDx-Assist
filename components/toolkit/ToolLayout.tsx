type Props = {
  children: React.ReactNode;
};

export default function ToolLayout({ children }: Props) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </main>
  );
}