import LandingPage from "@/app/components/LandingPage";
import NavWithUser from "@/app/components/NavWithUser";
import NavWithoutUser from "@/app/components/NavWithoutUser";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/dashboard");
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 relative">
      {data.session ? <NavWithUser /> : <NavWithoutUser />}
      <LandingPage />
    </div>
  );
}
