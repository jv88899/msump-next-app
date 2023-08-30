import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import "../globals.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/signin");
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {children}
    </div>
  );
}
