"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { supabaseClient } from "@/lib/supabaseClient";

export default function DashboardPage() {
  const router = useRouter();

  async function handleLogout() {
    await supabaseClient.auth.signOut();
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold text-cyan-400">
          VetDx Assist
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome to your dashboard.
        </p>


        <div className="mt-10 grid gap-6 md:grid-cols-3">


          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold">
              🩺 New Clinical Case
            </h2>

            <p className="mt-3 text-sm text-slate-400">
              Start a new AI-assisted clinical case.
            </p>

            <div className="mt-6">

              <Button
                fullWidth
                onClick={() => router.push("/new-case")}
              >
                Start New Case
              </Button>

            </div>

          </div>





          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold">
              📚 My Saved Cases
            </h2>

            <p className="mt-3 text-sm text-slate-400">
              View your previous AI reports.
            </p>

            <div className="mt-6">

              <Button
                variant="secondary"
                fullWidth
                onClick={() => router.push("/history")}
              >
                View History
              </Button>

            </div>

          </div>






          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold">
              🩺 Clinical Toolkit
            </h2>

            <p className="mt-3 text-sm text-slate-400">
              Access veterinary calculators and clinical support tools.
            </p>

            <div className="mt-6">

              <Button
                variant="secondary"
                fullWidth
                onClick={() => router.push("/tools")}
              >
                Explore Tools
              </Button>

            </div>

          </div>






          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold">
              🚪 Logout
            </h2>

            <p className="mt-3 text-sm text-slate-400">
              Sign out of VetDx Assist.
            </p>

            <div className="mt-6">

              <Button
                variant="secondary"
                fullWidth
                onClick={handleLogout}
              >
                Logout
              </Button>

            </div>

          </div>



        </div>



        <p className="mt-12 text-center text-sm text-slate-500">
          VetDx Assist is intended for educational purposes only and does not replace clinical judgment.
        </p>


      </div>
    </main>
  );
}