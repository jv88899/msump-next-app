import "../globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "My Still Untitled Music Project",
  description: "Join us as we discover the greatest albums ever made",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className="h-screen w-screen flex justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}

{
  /* <div className="w-full h-screen">
<header className="p-2">
  <p className="bg-primary h-12 w-12 rounded-full"></p>
</header>
<div className="w-full">{children}</div>
</div> */
}
