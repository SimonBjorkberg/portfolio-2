import Image from "next/image"
import { data } from "../../../public/data/data"

export default function Projects() {

    return (
        <section id="projects" className="bg-[#223038] pt-14 md:pt-20 flex flex-col h-dvh content-start items-center justify-between snap-start overflow-y-auto">
            <main className="max-w-[1080px] flex items-center justify-center flex-col font-sans">
                <h1 className="projects-title-font mb-2 md:mb-10 pixelify-sans-font">Projects</h1>
                <div className="sm:grid md:grid-cols-3 sm:grid-cols-2 md:gap-2 flex flex-col gap-1 px-1">
                    {data.projects.map((project, i) => {
                        return (<div key={i} className={`w-[full] md:max-w-[250px] md:rounded-md md:p-5 py-1 h-fit sm:h-[130px] md:h-[220px] flex flex-col bg-[#121f27] hover:bg-[#172530] hover:cursor-pointer transition-all duration-100 md:justify-between`}>
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
            <div className="py-10">
                <svg fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg" className="self-center hover:cursor-pointer stroke-[#FE7F2D] hover:stroke-[#FCCA46]"><path d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z" fill="#292d32" /></svg>
            </div>
        </section>
    )
}