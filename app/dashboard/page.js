import SignOutButton from "@/app/components/SignOutButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import WeeklyAlbumList from "@/app/components/WeeklyAlbumList";
import DailySongList from "@/app/components/DailySongList";
import PlaylistList from "@/app/components/PlaylistList";
import BottomNavMenu from "@/app/components/BottomNavMenu";
// import { ArrowCircleRight } from "@phosphor-icons/react";

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data?.session) {
    redirect("/");
  }

  // return (
  //   // <>
  //   //   {data?.session ? (
  //   //     <p>Hello, {data.session.user.email}</p>
  //   //   ) : (
  //   //     <p>No active user</p>
  //   //   )}
  //   //   <SignOutButton />
  //   // </>
  //   // <section className="p-6">
  //   //   <div className="w-full flex justify-between items-center">
  //   //     <h1>Dashboard</h1>
  //   //     <SignOutButton />
  //   //   </div>
  //   //   <p className="mt-6">You have unfinished tasks.</p>
  //   //   <div className="flex mt-12">
  //   //     <Link className="w-full " href="/vote">
  //   //       <div className="flex justify-between items-center bg-whiteBackground p-4 rounded-md w-full border-primary border-2 text-primary">
  //   //         <span>Vote for albums.</span>
  //   //         <span>
  //   //           <FaArrowRight />
  //   //         </span>
  //   //       </div>
  //   //     </Link>
  //   //   </div>
  //   // </section>

  // );
  return (
    <div>
      <header className=" bg-whiteBackground h-16 w-full flex items-center shadow-sm top-0 fixed">
        <div className="" style={{ flex: "1" }}></div>
        <div className="flex justify-center items-center" style={{ flex: "5" }}>
          <div className="h-[40px] w-[40px] mr-[10px] bg-primary" />
          <div className="h-[55px] w-[2px] bg-primary" />
          <h2 className="text-primary ml-[10px]">Dashboard</h2>
        </div>
        <div className="justify-end" style={{ flex: "1" }}>
          <div className="rounded-full bg-primary h-[40px] w-[40px]" />
        </div>
      </header>
      <WeeklyAlbumList />
      <DailySongList />
      <PlaylistList />
      <BottomNavMenu />
    </div>
  );
}
