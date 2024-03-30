import Link from 'next/link'
import githubIcon from '../../../public/images/github-mark-white.png'
import Image from 'next/image'

interface Props {
    project: {
        id: string
        title: string
        description: string
        picture: string
        technologies: [string]
        info: {
            title: string
            image: any
            description: string
        }
        githubLink: string
        deployLink: string
    }
    setSelectedProject: any
    show: any
    setToggle: any
}

export default function Drawer({ project, setSelectedProject, show, setToggle }: Props) {

    return (
        <div className={`${show ? "show-drawer-content" : "hide-drawer-content"}`}>
            <p className="x" onClick={() => setToggle(false)}>x</p>
            <div className="drawer-container">
                <h1>{project.title}</h1>
                <ul>
                    {project?.technologies?.map((tech, i) => {
                        return <li key={i} className='border px-1'>{tech}</li>
                    })}
                </ul>
                <p>{project.description}</p>
                <Image className='hero-image' src={project.picture} alt='' />
                <div className="drawer-info-container">
                    <h2 className="text-[20px] mb-5">{project.info.title}</h2>
                    <div className="overflow-hidden transition-all duration-1000 relative">
                        <Image src={project.info.image} alt="" className="rounded-sm md:h-[220px] h-[170px] object-cover object-left transition-all duration-1000 w-full" />
                    </div>
                    <p className="mt-5 md:w-2/3 text-[12px] md:text-[16px]">{project.info.description}</p>
                </div>
                <div className="flex my-10 flex-row justify-between bg-black px-4 py-3 h-20 rounded-md">
                    <Link href={`${project.githubLink}`} target='_blank' rel='noopener noreferrer' className="w-8 my-auto rounded-full transition-all duration-500 hover:bg-[#009dff]"><Image src={githubIcon} alt="" /></Link>
                    {project.deployLink !== "" && <Link href={`${project.deployLink}`} target='_blank' rel='noopener noreferrer' className="hover:cursor-pointer transition-all w-fit h-fit my-auto px-4 py-3 y">Preview</Link>}
                </div>
            </div>
        </div>
    )
}