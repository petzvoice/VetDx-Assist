const features = [
  {
    title: "AI Differential Diagnosis",
    description:
      "Generate ranked differential diagnoses based on patient history and clinical findings.",
  },
  {
    title: "Clinical Decision Support",
    description:
      "Receive diagnostic suggestions, next-step tests, and treatment considerations.",
  },
  {
    title: "Case Management",
    description:
      "Save, review, and manage veterinary cases in one place.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold text-white">
          Why Choose VetDx Assist?
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Designed for veterinarians, interns, and veterinary students.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-700 bg-slate-800 p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}