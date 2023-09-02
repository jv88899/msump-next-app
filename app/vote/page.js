import Albums from "@/app/components/Albums";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Vote() {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("random_albums").select();
  const { data: userData } = await supabase.auth.getSession();
  let user = null;

  if (userData?.session) {
    user = userData.session.user;
  }

  return (
    <div>
      {user.email}
      <Albums albums={data} user={user} />
    </div>
  );
}
