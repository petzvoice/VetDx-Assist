"use client";

import Card from "../ui/Card";

type ProblemItem =
  | string
  | {
      problem?: string;
      priority?: string;
      description?: string;
    };

type ProblemListCardProps = {
  problems: ProblemItem[];
};

export default function ProblemListCard({
  problems,
}: ProblemListCardProps) {
  return (
    <Card title="📋 Problem List">
      {problems.length === 0 ? (
        <p className="text-slate-400">
          No problems identified yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {problems.map((problem, index) => {
            const text =
              typeof problem === "string"
                ? problem
                : problem.problem ||
                  problem.description ||
                  "Unknown Problem";

            return (
              <li
                key={index}
                className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/50 p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 font-bold text-white">
                  {index + 1}
                </span>

                <span className="text-slate-200">
                  {text}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
}