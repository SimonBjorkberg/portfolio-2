import Image from "next/image"
import { useContext, useState } from "react"
import { ProjectContext } from "../context/project.context"

interface Props {
    project: {
        id: string,
        title: string,
        description: string,
        picture: any,
        role: string,
        year: string,
        githubLink: string,
        deployLink: string,
        techs: any[],
        info: {
            image: any,
            title: string,
            technologies: string[],
            description: string,
        },
        bgColor: string
    },
    setX: any,
}

export default function ProjectContainer({ project, setX }: Props) {

    const { setSelectedProject }: any = useContext(ProjectContext)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <>
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => { setSelectedProject(project); setX(true) }} className={`hidden md:flex flex-col max-w-[250px] p-5 h-[220px] bg-[#121f27] hover:bg-[#172530] hover:cursor-pointer transition-all duration-300 justify-between`}>
                <div className="flex md:justify-normal justify-between relative">
                    <svg onClick={() => { setSelectedProject(project); setX(true) }} className={`fill-[#FCCA46] hover:fill-[#FE7F2D] rotate-180 w-5 absolute mt-1 top-0 right-0 transition-all duration-300 ${isHovered ? "opacity-1" : "opacity-0"}`} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 504c-137 0-248-111-248-248s111-248 248-248 248 111 248 248-111 248-248 248zm28.9-143.6-75.5-72.4h182.6c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24h-182.6l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0l-132.7 132.6c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z" /></svg>
                    <p className="text-lg px-0 font-bold pixelify-sans-font text-[#FCCA46]">{project.title}</p>
                </div>
                <p className="w-full px-0 text-left text-[16px] font-light text-neutral-400">{project.description}</p>
                <ul className="flex gap-2 py-2 px-0">
                    {project.techs?.map((tech, i) => {
                        return <Image key={i} className="w-5 h-5 rounded-sm" src={tech} alt="" />
                    })}
                </ul>
            </div>
            <div onClick={() => { setSelectedProject(project); setX(true) }} className={`md:hidden h-[120px] sm:h-[130px] flex flex-col bg-[#121f27] justify-between sm:justify-start`}>
                <div className="flex justify-between relative">
                    <p className="text-lg px-2 font-bold pixelify-sans-font text-[#FCCA46]">{project.title}</p>
                    <ul className="hidden sm:flex gap-2 p-2">
                        {project.techs?.map((tech, i) => {
                            return <Image key={i} className="w-5 h-5 rounded-sm" src={tech} alt="" />
                        })}
                    </ul>
                </div>
                <p className="w-full px-2 text-left text-[12px] sm:text-[16px] font-light text-neutral-500">{project.description}</p>
                <ul className="gap-2 px-2 py-2 flex sm:hidden">
                    {project.techs?.map((tech, i) => {
                        return <Image key={i} className="w-5 h-5 rounded-sm" src={tech} alt="" />
                    })}
                </ul>
            </div>
        </>
    )
}