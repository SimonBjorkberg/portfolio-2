'use client'
import Link from "next/link"

interface Props {
    project: {
        id: string
        title: string
        description: string
        picture: any
        role: string
        year: string
        githubLink: string
        githubLinkTwo: string
        deployLink: string
        technologies: [string]
        info: {
            image: any
            title: string
            description: string
        }
        bgColor: string
    }
    setSelectedProject: any
    setToggle: any
}

export default function ProjectContainer({ project, setSelectedProject, setToggle }: Props) {

    return (
        <section className={`section hide`}>
            <div className={`project-container`}>
                <div className="text-container">
                    <h1 onClick={() => { setSelectedProject(project); setToggle(true) }} className="project-title">{project.title}</h1>
                    <p>{project.description}</p>
                </div>
                <div className="link-container">
                    {project.githubLink && <Link className="link hide" rel="noopener noreferrer" target="_blank" href={`${project.githubLink}`}>Front-End Repo</Link>}
                    {project.githubLinkTwo && <Link className="link hide" rel="noopener noreferrer" target="_blank" href={`${project.githubLinkTwo}`}>Back-End Repo</Link>}
                    {project.deployLink && <Link className="link hide" rel="noopener noreferrer" target="_blank" href={`${project.deployLink}`}>Preview</Link>}
                </div>
            </div>
        </section>
    )
}