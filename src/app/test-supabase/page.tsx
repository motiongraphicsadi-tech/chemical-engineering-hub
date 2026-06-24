"use client";

import { supabase } from "@/lib/supabase";

export default function TestSupabase() {

  async function test() {

    const result =
      await supabase.auth.getSession();

    console.log(result);

    alert("Check browser console");
  }

  return (

    <main className="p-10">

      <button
        onClick={test}
        className="
          border
          px-4
          py-2
          rounded
        "
      >
        Test Supabase
      </button>

    </main>

  );
}