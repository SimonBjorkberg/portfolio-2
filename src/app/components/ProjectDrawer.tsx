import { useContext } from "react"
import { ProjectContext } from "../context/project.context"
import Link from "next/link"

export default function ProjectDrawer({ setX }: any) {

    const { selectedProject }: any = useContext(ProjectContext)

    return (
        <div className="h-full flex flex-col items-center justify-between overflow-y-auto">
            <main className="pt-5 px-5 flex flex-col justify-between">
                <div>
                    <h1 className="text-3xl">{selectedProject.title}</h1>
                    <div>
                        <ul className='flex w-fit h-fit gap-2 my-2 flex-wrap text-sm'>
                            {selectedProject?.info.technologies?.map((tech: string[], i: number) => {
                                return <li key={i} className='border px-1'>{tech}</li>
                            })}
                        </ul>
                    </div>
                    <p className="text-sm">{selectedProject.description}</p>
                    <div className="w-full mt-4">
                        <div className="w-full">
                            <h1 className="text-[20px] mb-4">{selectedProject?.info.title}</h1>
                            <div className="overflow-hidden relative">
                                <img src={selectedProject?.info.image.src} alt="" className="rounded-sm h-[150px] object-cover object-left w-full" />
                            </div>
                            <p className="mt-5 text-[12px] text-sm">{selectedProject?.info.description}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-around py-10">
                    {selectedProject.githubLink && <Link className="w-8 h-8" href={selectedProject.githubLink} rel="noopener noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="hover:stroke-[#FCCA46] stroke-[#FE7F2D] transition-all duration-200"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </Link>}
                    {selectedProject.deployLink && <Link className="w-8 h-8" href={selectedProject.deployLink} rel="noopener noreferrer" target="_blank">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="hover:fill-[#FCCA46] fill-[#FE7F2D] transition-all duration-200"><path d="m0 0h24v24h-24z" opacity="0" /><g><path d="m13.29 9.29-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 -1.42-1.42z" /><path d="m12.28 17.4-1.28 1.27a4.2 4.2 0 0 1 -5.58.4 4 4 0 0 1 -.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0 -1.42 0l-1.27 1.28a6.15 6.15 0 0 0 -.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0 -1.42-1.42z" /><path d="m19.66 3.22a6.18 6.18 0 0 0 -8.13.68l-1.08 1.1a1.09 1.09 0 0 0 -.17 1.61 1 1 0 0 0 1.42 0l1.3-1.31a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0 -.6-9.06z" /></g></svg>
                    </Link>}
                </div>
            </main>
            <div onClick={() => setX(false)} className="flex w-full h-fit justify-center bg-[#FE7F2D] hover:bg-[#FCCA46] transition-all duration-200 hover:cursor-pointer">
                <div className="pixelify-sans-font py-5">Close</div>
            </div>
        </div>
    )
}