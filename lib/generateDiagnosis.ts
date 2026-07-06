import { supabaseClient } from "@/lib/supabaseClient";
import type { AIClinicalReport } from "@/types/ai";

export async function generateDiagnosis(caseData: any): Promise<AIClinicalReport> {
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  if (!user) {
    throw new Error("Please login to generate a clinical report.");
  }

  const response = await fetch("/api/diagnose", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...caseData,
      userId: user.id,
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Unable to generate AI report.");
  }

  return result.data;
}