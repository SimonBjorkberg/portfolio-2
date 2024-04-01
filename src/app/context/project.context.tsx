'use client'

import { createContext, useState } from "react"

export const ProjectContext = createContext({});

export default function ProjectProviderWrapper(props: any) {
    const [selectedProject, setSelectedProject] = useState({})

    return (
        <ProjectContext.Provider
            value={{
                selectedProject,
                setSelectedProject
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
}