'use client'

import Script from "next/script";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <>
      <Navbar />
      <main className={`pixelify-sans-font overflow-x-hidden`}>
        <Info />
        <Script src="/js/index.js" />
      </main>
    </>
  );
}