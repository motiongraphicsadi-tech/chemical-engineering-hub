import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);

  console.log("CALLBACK URL:", request.url);

  const code = url.searchParams.get("code");

  console.log("CODE:", code);

  if (code) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const result =
      await supabase.auth.exchangeCodeForSession(code);

    console.log("EXCHANGE RESULT:", result);
  }

  return NextResponse.redirect(
    url.origin + "/profile"
  );
}