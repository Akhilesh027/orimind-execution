import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function Layout({ children }: { children: ReactNode }) {
  useSmoothScroll();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
