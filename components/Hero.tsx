import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center justify-center bg-slate-950 px-6">
      <div className="max-w-4xl text-center">
        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
          AI-Powered Veterinary Clinical Decision Support
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
          Diagnose Smarter.
          <br />
          Treat Faster.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-300">
          VetDx Assist helps veterinarians generate differential diagnoses,
          interpret clinical findings, and recommend the next diagnostic steps
          using artificial intelligence.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button>Start Diagnosis</Button>

          <button className="rounded-lg border border-slate-600 px-6 py-3 text-white hover:bg-slate-800">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}