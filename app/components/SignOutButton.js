"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignOutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/signin");
    }
  }

  return (
    <button className="btn-primary" onClick={handleLogout}>
      Logout
    </button>
  );
}
