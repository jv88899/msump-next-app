import SignOutButton from "@/app/components/SignOutButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data?.session) {
    redirect("/");
  }

  return (
    // <>
    //   {data?.session ? (
    //     <p>Hello, {data.session.user.email}</p>
    //   ) : (
    //     <p>No active user</p>
    //   )}
    //   <SignOutButton />
    // </>
    <section className="p-6">
      <div className="w-full flex justify-between items-center">
        <h1>Dashboard</h1>
        <SignOutButton />
      </div>
      <p className="mt-6">You have unfinished tasks.</p>
      <div className="flex mt-12">
        <Link className="w-full " href="/vote">
          <div className="flex justify-between items-center bg-whiteBackground p-4 rounded-md w-full border-primary border-2 text-primary">
            <span>Vote for albums.</span>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
