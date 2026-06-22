"use client";

import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({
  title,
  children,
}: CardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-xl">

      {/* Header */}

      <div className="border-b border-slate-700 bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-4">
        <h2 className="text-xl font-bold tracking-wide text-white">
          {title}
        </h2>
      </div>

      {/* Body */}

      <div className="bg-slate-900 p-6">
        {children}
      </div>

    </div>
  );
}