'use client'

import Script from "next/script";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {

  return (
    <>
      <Navbar />
      <main className={`open-sans-300 bg-dot-grid snap-y snap-mandatory overflow-y-scroll overflow-x-hidden antialiased scroll-smooth scrollbar-hide h-dvh`}>
        <Info />
        <Projects />
        <About />
        <Script src="/js/index.js" />
      </main>
    </>
  );
}