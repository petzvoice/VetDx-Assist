"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { supabaseClient } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    setLoading(true);

    const { error } =
      await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-xl border border-slate-700 bg-slate-900 p-8">
        <h1 className="mb-2 text-center text-3xl font-bold text-cyan-400">
          VetDx Assist
        </h1>

        <p className="mb-8 text-center text-slate-400">
          Login to your account
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <Input
            label="Email"
            type="email"
            required
            value={email}
            onChange={setEmail}
          />

          <Input
            label="Password"
            type="password"
            required
            value={password}
            onChange={setPassword}
          />

          {error && (
            <div className="rounded-lg bg-red-600/20 p-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <Button
            type="submit"
            loading={loading}
            fullWidth
          >
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don't have an account?
        </p>

        <button
          onClick={() => router.push("/signup")}
          className="mt-2 w-full text-cyan-400 hover:underline"
        >
          Create Account
        </button>
      </div>
    </main>
  );
}