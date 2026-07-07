type Props = {
  title: string;
  description: string;
  icon?: string;
};

export default function ToolHeader({
  title,
  description,
  icon = "🧰",
}: Props) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4">

        <div className="text-5xl">
          {icon}
        </div>

        <div>
          <h1 className="text-4xl font-bold text-cyan-400">
            {title}
          </h1>

          <p className="mt-2 text-lg text-slate-400">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}