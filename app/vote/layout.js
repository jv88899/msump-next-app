import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import "../globals.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Providers from "@/app/providers";

export default async function VoteLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/signin");
  }

  console.log("data.session.user", data.session.user);

  return <Providers>{children}</Providers>;
}
