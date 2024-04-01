import Image from "next/image"
import { data } from "../../../public/data/data"

export default function Projects() {

    const scrollToHome = () => {
        const home = document.getElementById('home')
        if (home) home.scrollIntoView()
    }
    const scrollToAbout = () => {
        const about = document.getElementById('about')
        if (about) about.scrollIntoView()
    }

    return (
        <section id="projects" className="h-dvh bg-[#223038] bg-gradient-to-b w-full snap-start flex items-center py-10 flex-col justify-between">
            <main className="h-full w-fit max-w-[1080px] flex items-center justify-center flex-col font-sans">
                <h1 className="projects-title-font mb-2 md:mb-10 pixelify-sans-font hidden md:flex">My Projects</h1>
                <div className="md:grid md:grid-cols-3 grid-cols-2 md:gap-2 flex flex-col gap-1 w-fit h-fit px-1">
                    {data.projects.map((project, i) => {
                        return (<div key={i} className={`w-[full] md:max-w-[250px] md:rounded-md md:p-5 py-1 h-fit md:h-[220px] flex flex-col bg-[#121f27] hover:bg-[#172530] hover:cursor-pointer transition-all duration-100 justify-between`}>
                            <div className="flex justify-between">
                                <p className="text-lg px-2 md:px-0  font-bold pixelify-sans-font text-[#FCCA46]">{project.title}</p>
                                <ul className="flex gap-2 p-2 md:hidden">
                                    {project.techs?.map((tech, i) => {
                                        return <Image key={i} className="w-5 h-5 rounded-sm" src={tech} alt="" />
                                    })}
                                </ul>
                            </div>
                            <p className="w-full px-2 md:px-0 overflow-hidden text-left font-light text-neutral-500">{project.description}</p>
                            <ul className="md:flex gap-2 hidden">
                                {project.techs?.map((tech, i) => {
                                    return <Image key={i} className="w-5 h-5 rounded-sm" src={tech} alt="" />
                                })}
                            </ul>
                        </div>)
                    })}
                </div>
            </main>
        </section>
    )
}