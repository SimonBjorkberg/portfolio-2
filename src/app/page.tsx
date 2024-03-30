'use client'

import Script from "next/script";

import data from "../../public/data/data";
import ProjectContainer from "./components/ProjectContainer";
import { useEffect, useState } from "react";
import Drawer from "./components/Drawer";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

interface drawerItem {
  id: string
  title: string
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<drawerItem | any>({})
  const [toggle, setToggle] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (toggle) {
      setTimeout(() => {
        setShow(true)
      }, 100);
    }
    if (!toggle) {
      setTimeout(() => {
        setShow(false)
      }, 500);
    }
  }, [toggle])

  return (
    <>
      <Navbar />
      <main className={`overflow-x-hidden scroller pixelify-sans-font`}>
        <Info />
        {data.projects.map((project: any, i) => {
          return <ProjectContainer key={i} project={project} setSelectedProject={setSelectedProject} setToggle={setToggle} />
        })}

        <div className={`drawer ${toggle ? "drawer-show" : "drawer-hide"}`}>
          {show && <Drawer project={selectedProject} setSelectedProject={setSelectedProject} show={show} setToggle={setToggle} />}
        </div>
        <Script src="/js/index.js" />
      </main>
    </>
  );
}