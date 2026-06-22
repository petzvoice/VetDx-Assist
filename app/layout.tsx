import type { Metadata } from "next";
import "./globals.css";

import { CaseProvider } from "@/context/CaseContext";

export const metadata: Metadata = {
  title: "VetDx Assist",
  description: "AI-powered Veterinary Differential Diagnosis Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CaseProvider>
          {children}
        </CaseProvider>
      </body>
    </html>
  );
}