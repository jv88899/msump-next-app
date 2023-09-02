"use client";

import Album from "@/app/components/Album";
import Link from "next/link";
import React from "react";

export default function Albums({ albums, user }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [albumIndex, setAlbumIndex] = React.useState(0);
  const [currentAlbum, setCurrentAlbum] = React.useState(null);
  const [numberOfAlbums, setNumberOfAlbums] = React.useState(0);
  const [allVotesUsed, setAllVotesUsed] = React.useState(false);

  console.log(albums);

  //   todo - look into useReducer, see message if I remove dependencies
  React.useEffect(() => {
    setNumberOfAlbums(albums.length);
    setCurrentAlbum(albums[albumIndex]);

    console.log("number of albums", numberOfAlbums);
  }, [albums.length, numberOfAlbums, albumIndex, albums]);

  return (
    <>
      <div className="items-center flex flex-col justify-center">
        <h1>Vote</h1>
        {/* {error ? <span>Error {error.message}</span> : null} */}
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <>
            {albumIndex < numberOfAlbums && !allVotesUsed ? (
              <>
                <div className="w-[90vw] max-w-[287px] h-[365px]">
                  {currentAlbum && <Album album={currentAlbum} />}
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
