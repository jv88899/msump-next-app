import Link from "next/link";

export default function Signup() {
  return (
    <div className="w-[95%] h-[97%] bg-whiteBackground mx-auto border-primary border-2 rounded-md pt-12 px-6">
      <h2 className="text-3xl text-primary font-semibold">Sign Up</h2>
      <div className="mt-6">
        <form>
          <input
            className="w-full mb-6"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="w-full mb-6 rounded-md"
            type="password"
            placeholder="Password"
          />
          <button className="btn-primary w-full block text-center rounded-md p-2 text-lg">
            Sign Up
          </button>
        </form>
        <p className="text-sm mt-3">
          Already have an account?{" "}
          <Link href="/signin" className="text-primary">
            Sign in.
          </Link>
        </p>
      </div>
      <Link href="/" className="w-full text-center block mt-64">
        Home
      </Link>
    </div>
  );
}
