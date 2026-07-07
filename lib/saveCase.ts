import { supabaseClient } from "@/lib/supabaseClient";
import type { CaseData } from "@/context/CaseContext";
import type { AIClinicalReport } from "@/types/ai";

export async function saveCase(
  caseData: CaseData,
  report: AIClinicalReport
): Promise<number> {
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  console.log("Current user:", user);

  if (!user) {
    throw new Error("Please login.");
  }

  const { data, error } = await supabaseClient
    .from("cases")
    .insert({
      user_id: user.id,

      patient: caseData.patient,

      history: caseData.history,

      clinical_signs: caseData.clinicalSigns,

      physical_exam: caseData.physicalExam,

      diagnostics: caseData.diagnostics,

      ai_response: report,
    })
    .select("id")
    .single();

  if (error) {
    console.error("Supabase insert error:", error);
    throw new Error(error.message);
  }

  return data.id;
}