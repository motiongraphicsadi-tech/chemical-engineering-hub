"use client";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  async function login() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo:
        window.location.origin + "/auth/callback",
      },
    });
  }

  return (
    <main className="p-10 text-white">
      <button
        onClick={login}
        className="
          rounded-lg
          bg-emerald-600
          px-6
          py-3
        "
      >
        Sign In With Google
      </button>
    </main>
  );
}