"use client";

import { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  icon?: string;
  children: ReactNode;
};

export default function SectionCard({
  title,
  icon,
  children,
}: SectionCardProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">

      {/* Header */}

      <div className="flex items-center gap-3 border-b border-slate-700 bg-slate-800 px-6 py-4">

        {icon && (
          <span className="text-2xl">
            {icon}
          </span>
        )}

        <h2 className="text-xl font-bold text-cyan-400">
          {title}
        </h2>

      </div>

      {/* Content */}

      <div className="space-y-4 p-6">

        {children}

      </div>

    </section>
  );
}