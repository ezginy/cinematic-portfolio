import { useEffect, useState } from "react"
import "./Projects.css"
import ProjectCard from "./ProjectCard"
import projectsData from "../data/projectsData"

function Projects() {

    // Stores project data
    const [projects, setProjects] = useState([])

    useEffect(() => {

        setProjects(projectsData)

    }, [])

    return (
        <section className="projects" id="projects">

            <h2 className="projects-title">Projects</h2>

            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                />
            ))}

        </section>
    )
}

export default Projects