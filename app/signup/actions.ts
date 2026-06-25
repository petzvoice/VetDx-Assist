"use server";

import { supabaseClient } from "@/lib/supabaseClient";

export interface SignupData {
  fullName: string;
  email: string;
  password: string;
  role: string;
}

export async function signup(data: SignupData) {
  if (!data.fullName.trim()) {
    return {
      success: false,
      message: "Full name is required.",
    };
  }

  if (!data.email.trim()) {
    return {
      success: false,
      message: "Email is required.",
    };
  }

  if (!data.password) {
    return {
      success: false,
      message: "Password is required.",
    };
  }

  if (data.password.length < 8) {
    return {
      success: false,
      message: "Password must be at least 8 characters.",
    };
  }

  if (!data.role) {
    return {
      success: false,
      message: "Please select your role.",
    };
  }

  const { error } = await supabaseClient.auth.signUp({
    email: data.email,
    password: data.password,

    options: {
      data: {
        full_name: data.fullName,
        role: data.role,
      },
    },
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message:
      "Account created successfully. Please check your email to verify your account.",
  };
}