import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 pt-4">
      <header className="p-2">
        <p className="bg-primary h-12 w-12 rounded-full"></p>
      </header>
      <h1 className="text-center mt-4">My Still Untitled Music Project</h1>
      <div className="mt-80">
        <Link
          href="/signup"
          className="btn-primary w-72 h-12 text-xl mx-auto mb-2 flex justify-center items-center text-center font-semibold"
        >
          Sign up
        </Link>
        <button className="btn-outline w-72 h-12 text-xl mx-auto block text-center font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
}
