import type { ReactNode } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
// import Content from "../components/Content";
// import Footer from "../components/Footer.tsx";

export default function MainLayOut({ children }: { children?: ReactNode }) {
  return (
    <div className="min-w-0 w-full max-w-full">
      <Header />
      <Navbar />
      <main className="w-full">{children}</main>
      
      
    </div>
  );
}
