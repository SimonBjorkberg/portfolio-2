'use client'

import Script from "next/script";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {

  return (
    <>
      <Navbar />
      <main className={`pixelify-sans-font bg-dot-grid snap-y snap-mandatory overflow-y-scroll overflow-x-hidden antialiased scroll-smooth scrollbar-hide h-dvh`}>
        <Info />
        <Projects />
        <Script src="/js/index.js" />
      </main>
    </>

  );
}