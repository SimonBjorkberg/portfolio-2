import { useContext, useEffect, useState } from "react"
import { data } from "../../../public/data/data"
import ProjectContainer from "./ProjectContainer"
import ProjectDrawer from "./ProjectDrawer"

export default function Projects() {
    const [x, setX] = useState(false)
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (x === true) {
            setTimeout(() => {
                setShow(true)
            }, 200);
        }
    }, [x])

    useEffect(() => {
        if (x === false) {
            setTimeout(() => {
                setShow(false)
            }, 400);
        }
    }, [x])

    const scrollToHome = () => {
        const home = document.getElementById('home')
        if (home) home.scrollIntoView()
    }
    const scrollToAbout = () => {
        const about = document.getElementById('about')
        if (about) about.scrollIntoView()
    }

    return (
        <section id="projects" className="bg-[#223038] flex flex-col h-dvh content-center justify-between items-center snap-start overflow-y-auto">
            <div className="pt-10">
                <svg onClick={scrollToHome} fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg" className="hover:cursor-pointer stroke-[#FE7F2D] hover:stroke-[#FCCA46] rotate-180"><path d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z" fill="#292d32" /></svg>
            </div>
            <main className="max-w-[1080px] flex items-center justify-center flex-col font-sans">
                <h1 className="projects-title-font mb-2 md:mb-10">Projects</h1>
                <div className="grid md:grid-cols-3 grid-cols-2 md:gap-2 gap-1 px-1 overflow-hidden">
                    {data.projects.map((project, i) => {
                        return <ProjectContainer setX={setX} key={i} project={project} />
                    })}
                    <div className={`top-0 right-0 h-dvh bg-[#121f27] transition-all duration-1000 z-10 ${x ? "md:w-[500px] max-w-[500px] w-full fixed" : "w-0 fixed"}`}>
                        {show && <ProjectDrawer setX={setX} />}
                    </div>
                </div>
            </main>
            <div className="py-10">
                <svg onClick={scrollToAbout} fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg" className="self-center hover:cursor-pointer stroke-[#FE7F2D] hover:stroke-[#FCCA46]"><path d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z" fill="#292d32" /></svg>
            </div>
        </section>
    )
}