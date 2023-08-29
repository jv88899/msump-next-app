"use client";

import AuthForm from "@/app/(auth)/AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = React.useState("");

  async function handleSubmit(e, email, password) {
    e.preventDefault();
    setError("");

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }

    if (!error) {
      router.push("/dashboard");
    }
  }

  return (
    <div className="w-[95%] h-[97%] bg-whiteBackground mx-auto border-primary border-2 rounded-md pt-12 px-6">
      <h2 className="text-3xl text-primary font-semibold">Sign In</h2>
      <div className="mt-6">
        <AuthForm handleSubmit={handleSubmit} />
        <p className="text-sm mt-3">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary">
            Sign up.
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
