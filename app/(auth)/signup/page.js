"use client";

import AuthForm from "@/app/(auth)/AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Signup() {
  const router = useRouter();
  const [error, setError] = React.useState("");

  async function handleSubmit(e, email, password) {
    e.preventDefault();

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
    }

    if (!error) {
      router.push("/verify");
    }
  }

  return (
    <div className="w-[95%] h-[97%] bg-whiteBackground mx-auto border-primary border-2 rounded-md pt-12 px-6">
      <h2 className="text-3xl text-primary font-semibold">Sign Up</h2>
      <div className="mt-6">
        <AuthForm handleSubmit={handleSubmit} />
        <p className="text-sm mt-3">
          Already have an account?{" "}
          <Link href="/signin" className="text-primary">
            Sign in.
          </Link>
        </p>
        {error ? <p>{error}</p> : null}
      </div>
      <Link href="/" className="w-full text-center block mt-64">
        Home
      </Link>
    </div>
  );
}
