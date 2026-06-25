"use server";

import { supabaseClient } from "@/lib/supabaseClient";

export interface LoginData {
  email: string;
  password: string;
}

export async function login(data: LoginData) {
  if (!data.email || !data.password) {
    return {
      success: false,
      message: "Email and password are required.",
    };
  }

  const { error } = await supabaseClient.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Login successful.",
  };
}