import { FaArrowRight } from "react-icons/fa6";
import "../styles.css";

export default function PlaylistList() {
  return (
    <section className="w-full mb-[70px]">
      <div className="w-full max-w-3xl p-4 mx-auto flex justify-between">
        <h3 className="text-xl text-primary font-semibold">Playlists</h3>
        <div className="flex items-center text-black">
          <p className="mr-2">Archive</p>
          <span>
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div className="w-full max-w-3xl p-4 mx-auto horizontal-scroll">
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
