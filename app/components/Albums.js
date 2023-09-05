"use client";

import Album from "@/app/components/Album";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

export default function Albums({ user }) {
  const [albums, setAlbums] = React.useState([]);
  const [albumIndex, setAlbumIndex] = React.useState(0);
  const [currentAlbum, setCurrentAlbum] = React.useState(null);
  const [numberOfAlbums, setNumberOfAlbums] = React.useState(0);
  const [upvotes, setUpvotes] = React.useState(0);
  const [downvotes, setDownvotes] = React.useState(0);
  const [comments, setComments] = React.useState([]);
  const [allVotesUsed, setAllVotesUsed] = React.useState(false);

  const supabase = createClientComponentClient();

  const { status, data, error, isLoading } = useQuery(
    ["albumInformation", albumIndex],
    async function getAllAlbumInformation() {
      const { data: allAlbums, error } = await supabase
        .from("random_albums")
        .select();

      console.log("allAlbums", allAlbums);

      const activeAlbum = allAlbums[albumIndex];
      const activeAlbumId = activeAlbum.id;

      const { data: upvotes, error: upvotesError } = await supabase
        .from("votes")
        .select()
        .eq("album_id", activeAlbumId)
        .eq("upvote", true);

      const { data: downvotes, error: downvotesError } = await supabase
        .from("votes")
        .select()
        .eq("album_id", activeAlbumId)
        .eq("downvote", true);

      const activeUserId = user.id;

      const { data: activeUserVotes, error: activeUserVotesError } =
        await supabase.from("votes").select().eq("user_id", activeUserId);

      return [allAlbums, activeAlbum, upvotes, downvotes, activeUserVotes];
    },
    { refetchOnWindowFocus: false }
  );

  //   todo - look into useReducer, see message if I remove dependencies
  React.useEffect(() => {
    if (status === "loading") return;
    if (status === "success") {
      setAlbums(data[0]);
      setNumberOfAlbums(data[0].length);
      setCurrentAlbum(data[1]);
      setUpvotes(data[2].length);
      setDownvotes(data[3].length);

      const numberOfVotesAvailable = 5;
      const votesUsedToday = data[5]?.filter(
        (vote) =>
          dayjs(new Date(vote.created_at)).format("YYYY/MM/DD") ===
          dayjs().format("YYYY/MM/DD")
      );

      setAllVotesUsed(
        numberOfVotesAvailable <= votesUsedToday?.length ? true : false
      );
    }
  }, [status, data, albums, albumIndex, currentAlbum, user]);

  return (
    <>
      <div className="items-center flex flex-col justify-center">
        <h1>Vote</h1>
        {error ? <span>Error {error.message}</span> : null}
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <>
            {albumIndex < numberOfAlbums && !allVotesUsed ? (
              <>
                <div className="w-[90vw] max-w-[287px] h-[365px]">
                  {currentAlbum && (
                    <Album
                      album={currentAlbum}
                      upvotes={upvotes}
                      downvotes={downvotes.count}
                    />
                  )}
                </div>
              </>
            ) : (
              <>
                <span>You have used all of your votes for today</span>
                <Link href="/dashboard">Return to Dashboard</Link>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
