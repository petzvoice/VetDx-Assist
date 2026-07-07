import { supabaseClient } from "@/lib/supabaseClient";

export async function deleteCase(
  caseId: number
) {

  const {
    data: { user },
  } = await supabaseClient.auth.getUser();


  if (!user) {
    throw new Error("Please login.");
  }


  const { error } =
    await supabaseClient
      .from("cases")
      .delete()
      .eq("id", caseId)
      .eq("user_id", user.id);


  if (error) {

    console.error(
      "Delete error:",
      error
    );

    throw new Error(
      "Unable to delete case."
    );
  }


  return true;
}