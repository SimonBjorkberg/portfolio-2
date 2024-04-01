import { useContext } from "react"
import { ProjectContext } from "../context/project.context"

export default function ProjectDrawer({ setX }: any) {

    const { selectedProject }: any = useContext(ProjectContext)

    return (
        <div className="h-full flex flex-col items-center justify-between overflow-y-auto">
            <main className="p-5">
                <h1 className="text-3xl">{selectedProject.title}</h1>
                <div>
                    <ul className='flex w-fit h-fit gap-2 mt-2 flex-wrap text-sm'>
                        {selectedProject?.info.technologies?.map((tech: string[], i: number) => {
                            return <li key={i} className='border px-1'>{tech}</li>
                        })}
                    </ul>
                </div>
                <p className="text-sm">{selectedProject.info.description}</p>
                <div className="w-full mt-10">

                    <div className="w-full">
                        <h1 className="text-[20px] mb-5">{selectedProject?.info.title}</h1>
                        <div className="overflow-hidden transition-all duration-1000 relative">
                            <img src={selectedProject?.info.image} alt="" className="rounded-sm h-[170px] object-cover object-left transition-all duration-1000 w-full" />
                        </div>
                        <p className="mt-5 text-[12px] text-sm">{selectedProject?.info.description}</p>
                    </div>


                </div>
            </main>
            <div onClick={() => setX(false)} className="flex w-full h-fit justify-center bg-[#FE7F2D] hover:bg-[#FCCA46] transition-all duration-200 hover:cursor-pointer">
                <div className="pixelify-sans-font py-5">Close</div>
            </div>
        </div>
    )
}