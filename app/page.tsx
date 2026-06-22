import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-bold text-cyan-400">
              VetDx Assist
            </h1>

            <p className="text-sm text-slate-400">
              AI Clinical Reasoning Platform
            </p>
          </div>

          <div className="flex items-center gap-4">

            <Link
              href="/login"
              className="rounded-lg border border-slate-700 px-5 py-2 text-slate-300 transition hover:border-cyan-500 hover:text-white"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Get Started
            </Link>

          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Built for Veterinary Students & Clinicians
            </span>

            <h2 className="mt-8 text-5xl font-extrabold leading-tight">

              Think Like a

              <span className="block text-cyan-400">
                Veterinary Specialist.
              </span>

            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              VetDx Assist helps you analyze veterinary cases using
              structured clinical reasoning, prioritized differential
              diagnoses, diagnostic recommendations, treatment
              considerations and educational AI reports.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/signup"
                className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Start Free
              </Link>

              <Link
                href="/login"
                className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-cyan-500"
              >
                Login
              </Link>

            </div>

          </div>

          {/* AI Report Preview */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

            <div className="border-b border-slate-800 bg-gradient-to-r from-cyan-600 to-blue-600 p-6">

              <h3 className="text-2xl font-bold">
                Example AI Clinical Report
              </h3>

            </div>

            <div className="space-y-6 p-8">

              <div>
                <h4 className="font-semibold text-cyan-400">
                  Top Differential
                </h4>

                <p className="mt-2 text-slate-300">
                  Acute Pancreatitis
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400">
                  Confidence
                </h4>

                <div className="mt-3 h-3 rounded-full bg-slate-700">

                  <div className="h-3 w-4/5 rounded-full bg-cyan-500" />

                </div>

                <p className="mt-2 text-sm text-slate-400">
                  82%
                </p>

              </div>

              <div>

                <h4 className="font-semibold text-cyan-400">
                  Recommended Diagnostics
                </h4>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">

                  <li>CBC</li>

                  <li>Serum Biochemistry</li>

                  <li>cPL</li>

                  <li>Abdominal Ultrasound</li>

                </ul>

              </div>

              <div>

                <h4 className="font-semibold text-cyan-400">
                  Treatment Considerations
                </h4>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">

                  <li>Fluid Therapy</li>

                  <li>Pain Management</li>

                  <li>Antiemetics</li>

                  <li>Nutritional Support</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="border-y border-slate-800 bg-slate-900">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2 lg:grid-cols-3">

          {[
            "Structured Clinical Reasoning",
            "Prioritized Differential Diagnosis",
            "Evidence-informed Recommendations",
            "Professional AI Reports",
            "Case History",
            "Educational Learning Tool",
          ].map((feature) => (

            <div
              key={feature}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >

              <div className="mb-4 text-3xl">✓</div>

              <h3 className="text-xl font-semibold">
                {feature}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* ================= USERS ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-4xl font-bold">

          Built For

        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">

            <div className="text-5xl">🎓</div>

            <h3 className="mt-5 text-2xl font-bold">

              Students

            </h3>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">

            <div className="text-5xl">🩺</div>

            <h3 className="mt-5 text-2xl font-bold">

              Clinicians

            </h3>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">

            <div className="text-5xl">📚</div>

            <h3 className="mt-5 text-2xl font-bold">

              Educators

            </h3>

          </div>

        </div>

      </section>

      {/* ================= DISCLAIMER ================= */}

      <section className="border-t border-slate-800 bg-slate-900">

        <div className="mx-auto max-w-5xl px-6 py-16 text-center">

          <h3 className="text-2xl font-bold text-cyan-400">

            Educational Notice

          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-300">

            VetDx Assist is designed to support veterinary education
            and clinical reasoning. It does not replace professional
            veterinary judgment, physical examination, diagnostic
            testing or specialist consultation.

          </p>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">

        <p>

          VetDx Assist • Version 1.0 Beta

        </p>

        <p className="mt-2">

          © 2026 VetDx Assist. Built for Veterinary Medicine.

        </p>

      </footer>

    </main>
  );
}