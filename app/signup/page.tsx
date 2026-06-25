"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { signup } from "./actions";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setError("");

    if (
      !fullName ||
      !email ||
      !role ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const result = await signup({
      fullName,
      email,
      password,
      role,
    });

    setLoading(false);

    if (!result.success) {
      setError(result.message);
      return;
    }

    alert(
      "Account created successfully. Please login."
    );

    router.push("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-xl border border-slate-700 bg-slate-900 p-8">

        <h1 className="mb-2 text-center text-3xl font-bold text-cyan-400">
          VetDx Assist
        </h1>

        <p className="mb-8 text-center text-slate-400">
          Create your account
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <Input
            label="Full Name"
            required
            value={fullName}
            onChange={setFullName}
          />

          <Input
            label="Email"
            type="email"
            required
            value={email}
            onChange={setEmail}
          />

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-slate-300">
                Role
              </label>

              <span className="rounded bg-cyan-600 px-2 py-1 text-xs text-white">
                Required
              </span>
            </div>

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
            >
              <option value="">
                Select Role
              </option>

              <option>
                Veterinary Student
              </option>

              <option>
                Veterinarian
              </option>

              <option>
                Faculty
              </option>

            </select>
          </div>

          <Input
            label="Password"
            type="password"
            required
            value={password}
            onChange={setPassword}
          />

          <Input
            label="Confirm Password"
            type="password"
            required
            value={confirmPassword}
            onChange={setConfirmPassword}
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
            Create Account
          </Button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?
        </p>

        <button
          onClick={() =>
            router.push("/login")
          }
          className="mt-2 w-full text-cyan-400 hover:underline"
        >
          Login
        </button>

      </div>
    </main>
  );
}