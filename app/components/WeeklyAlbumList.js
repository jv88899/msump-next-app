"use client";

import { FaArrowRight } from "react-icons/fa6";
import React from "react";
import "../styles.css";

export default function WeeklyAlbumList() {
  const weeklyAlbumsRef = React.useRef(null);

  React.useEffect(() => {
    if (weeklyAlbumsRef.current) {
      weeklyAlbumsRef.current.scrollLeft = 80;
    }
  }, []);
  return (
    <section className="w-full mt-[70px]">
      <div className="w-full max-w-3xl p-4 mx-auto flex justify-between">
        <h3 className="text-xl text-primary font-semibold">Weekly Album</h3>
        <div className="flex items-center text-black">
          <p className="mr-2">Archive</p>
          <span>
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div
        ref={weeklyAlbumsRef}
        className="w-full max-w-3xl p-4 mx-auto horizontal-scroll"
      >
        <div
          className="shadow-sm"
          style={{
            height: "143px",
            width: "143px",
            borderRadius: "6px",
            backgroundColor: "blue",
            display: "inline-block",
            marginRight: "15px",
          }}
        />
        <div
          className="shadow-sm"
          style={{
            height: "143px",
            width: "143px",
            borderRadius: "6px",
            backgroundColor: "white",
            display: "inline-block",
            marginRight: "15px",
          }}
        />
        <div
          className="shadow-sm"
          style={{
            height: "143px",
            width: "143px",
            borderRadius: "6px",
            backgroundColor: "white",
            display: "inline-block",
            marginRight: "15px",
          }}
        />
      </div>
    </section>
  );
}
