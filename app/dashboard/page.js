import SignOutButton from "@/app/components/SignOutButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data?.session) {
    redirect("/");
  }

  return (
    <>
      {data?.session ? (
        <p>Hello, {data.session.user.email}</p>
      ) : (
        <p>No active user</p>
      )}
      <SignOutButton />
    </>
  );
}
