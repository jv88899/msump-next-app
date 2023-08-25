"use client";

import AuthForm from "@/app/(auth)/AuthForm";
import Link from "next/link";

export default function SignIn() {
  async function handleSubmit(e, email, password) {
    e.preventDefault();
    console.log("email/password", email, password);
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
      </div>
      <Link href="/" className="w-full text-center block mt-64">
        Home
      </Link>
    </div>
  );
}
