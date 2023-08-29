import "../globals.css";

export default function AuthLayout({ children }) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {children}
    </div>
  );
}
