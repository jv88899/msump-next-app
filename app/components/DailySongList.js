import { FaArrowRight } from "react-icons/fa6";
import "../styles.css";

export default function DailySongList() {
  return (
    <section className="w-full">
      <div className="w-full max-w-3xl p-4 mx-auto flex justify-between">
        <h3 className="text-xl text-primary font-semibold">
          (Mostly) Daily Song
        </h3>
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
            width: "250px",
            background: "white",
            height: "60px",
            borderRadius: "6px",
            marginTop: "10px",
            marginRight: "10px",
            display: "inline-block",
          }}
        />
        <div
          className="shadow-sm"
          style={{
            width: "250px",
            background: "white",
            height: "60px",
            borderRadius: "6px",
            marginTop: "10px",
            marginRight: "10px",
            display: "inline-block",
          }}
        />
        <div
          className="shadow-sm"
          style={{
            width: "250px",
            background: "white",
            height: "60px",
            borderRadius: "6px",
            marginTop: "10px",
            marginRight: "10px",
            display: "inline-block",
          }}
        />
      </div>
    </section>
  );
}
